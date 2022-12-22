const today="2019-06-17T18:00:00";

const fs=require("fs-extra");
const sqlite3 = require('sqlite3').verbose(); //https://www.npmjs.com/package/sqlite3
const ops=require("./../ops");
  ops.propagator=require("./../propagator.js")

const xmldom=require("xmldom"); //https://www.npmjs.com/package/xmldom
const domParser=new xmldom.DOMParser();

const dbpath="../../data/termbases/syadmglossary.sqlite";
var db=new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE);
db.run('PRAGMA journal_mode=WAL');
db.run('PRAGMA foreign_keys=on');

var terms={};
var termbaseID = 'sysadmglossary';
var importUser = 'bridget.almas@suny.edu';
var metadata = {'source': 1, 'collection': 2}
var importDate="2022-12-01T00:00:00";
var toSave = {};

console.log("run doIRTerms() first then re-execute script and run doXrefs()")
// too lazy to figure out how to handle the asynchroniciity to get the script to wait on doIRTerms before running doXRefs()
//doIRTerms()
//doXrefs();

function doIRTerms(){
  var siteconfig=JSON.parse(fs.readFileSync("../siteconfig.json", "utf8").trim());
  ops.siteconfig=siteconfig;
  db.exec("delete from entries; delete from history; delete from metadata; delete from terms; delete from entry_term; delete from sqlite_sequence", function(err){
    console.log(`database emptied`);
    db.run("BEGIN TRANSACTION");
    doSources(db, function(){
      doCollections(db, function(){
        doTbx(db, function(){
            db.run("COMMIT");
            db.close();
            console.log(`finito`);
         });
      });
    });
  });
}

function doTbx(db,callnext) {
    var xml=fs.readFileSync("../../sunydata/irglossary-20221201final.xml", 'utf8');
    //var xml=fs.readFileSync("../../sunydata/sample.xml", 'utf8');
    var doc=domParser.parseFromString(xml, 'text/xml');
    var entries = doc.documentElement.getElementsByTagName("termEntry");
    for (var i=0; i<entries.length; i++) {
      var id = i+1;
      toSave[id] = doEntry(entries[i],id);
    }
    for (const id in toSave) {
       if (toSave.hasOwnProperty(id)) {
         ops.entrySave(db, termbaseID, id, JSON.stringify(toSave[id]), importUser, {},function(){});
       }
    }
    callnext();
}

function doXrefs() { 
    var siteconfig=JSON.parse(fs.readFileSync("../siteconfig.json", "utf8").trim());
    ops.siteconfig=siteconfig;
    var xml=fs.readFileSync("../../sunydata/irglossary-20221201final.xml", 'utf8');
    //var xml=fs.readFileSync("../../sunydata/sample.xml", 'utf8');
    var doc=domParser.parseFromString(xml, 'text/xml');
    var entries = doc.documentElement.getElementsByTagName("termEntry");
    for (var i=0; i<entries.length; i++) {
      var id = i+1;
      toSave[id] = doEntry(entries[i],id);
    }
    for (const entryID in toSave) {
       if (toSave.hasOwnProperty(entryID)) {
	   entry = toSave[entryID];
           for (j in entry.definitions) {
	       def = entry.definitions[j];
	       found = findXRef(def.texts.en);
	       if (Object.keys(found).length > 0) {
		   xrefs = {};
	           for (const word in found) {
	               def.texts.en = def.texts.en.replaceAll(word,toCamelCase(word));
		       xrefs[found[word]] = 1;
	           }
		   for (ref in xrefs) {
	               entry.xrefs.push(ref);
	           }
		}
            }
            ops.entrySave(db, termbaseID, entryID, JSON.stringify(toSave[entryID]), importUser, {},function(){});
        }
    }
}

function doSources(db, callnext){
  var json={
    title: {
      en: 'IR Glossary'
    }
  };
  ops.metadataUpdate(db, termbaseID, "source", metadata.source, JSON.stringify(json), function(){})
  console.log("sources done");
  callnext();
}

function doCollections(db, callnext){
  var json={
    title: {
      en: 'SIRIS Data Elements'
    }
  };
  ops.metadataUpdate(db, termbaseID, "collection", metadata.collection, JSON.stringify(json), function(){})
  console.log("collections done");
  callnext();
}

function doEntry(xml,id){
  const ENTRY={
  "cStatus": "0",
  "pStatus": "0",
  "dStatus": "0",
  "dateStamp": importDate,
  "tod": "",
  "domains": [],
  "desigs": [],
  "intros": {},
  "definitions": [],
  "examples": [],
  "notes": [],
  "collections": [],
  "extranets": [],
  "xrefs": []
  };
  var entry=JSON.parse(JSON.stringify(ENTRY));
  entry.desigs=doTerms(xml.getElementsByTagName("term"));
  terms[entry.desigs[0].term.wording] = id;
  entry.desigs[0].term.wording = toCamelCase(entry.desigs[0].term.wording);
  var langCode="xx"; if(entry.desigs.length>0) langCode=entry.desigs[0].term.lang;
  var elDescrips=xml.getElementsByTagName("descrip");
  var examplesToMerge = []
  for (var i=0; i<elDescrips.length; i++) {
    var elDescrip=elDescrips[i];
    var elTig=closest(elDescrip, ["tig", "ntig"]);
    if(!elTig){ //this <descrip> is not under a <tig> or <ntig>:
      var tbxType=elDescrip.getAttribute("type");
      var tbxValue=elDescrip.textContent.trim();
      var elLangSet=closest(elDescrip, ["langSet"]); if(elLangSet) langCode=elLangSet.getAttribute("xml:lang") || langCode;
      if(
        tbxType=="context" || tbxType=="Context" ||
        tbxType=="example" ||
        tbxType=="sampleSentence"
      ){
        //example:
        var obj={texts: {}, sources: [], nonessential: "0"};
        obj.texts[langCode]=[tbxValue];
        examplesToMerge.push(obj);
      } else if(
        tbxType=="definition" ||
        tbxType=="explanation"
      ){
        //definition:
        var obj={texts: {}, domains: [], sources: [{'id':metadata.source, 'lang':'en'}], nonessential: "0"};
        obj.texts[langCode]=tbxValue;
        entry.definitions.push(obj);
      } else if(
        tbxType=="subjectField" ||
        tbxType=="domain" ||  tbxType=="Domain"
      ){
        //domain:
        entry.domains.push("$DOMAIN["+tbxValue+"]");
      }
    }
  }
  var mergedExample={texts: {'en':[]}, sources: [], nonessential: "0"};
  if (examplesToMerge.length > 0) {
    for (var i=0; i<examplesToMerge.length; i++) {
      mergedExample['texts']['en'].push(examplesToMerge[i].texts.en[0])
    }
    entry.examples.push(mergedExample)
    // if it has an example it is a SIRIS data element
    entry.collections.push(metadata.collection)
  }
  return entry;
}

function doTerms(elTerms){
   const DESIG={
  "term": {
    "id": "",
    "lang": "",
    "wording": "",
    "annots": [],
    "inflects": []
  },
  "accept": null,
  "clarif": "",
  "sources": [],
  "nonessential": "0"
  };
  var desigs=[];
  for(var iTerms=0; iTerms<elTerms.length; iTerms++) {
    var elTerm=elTerms[iTerms];
    var elLangSet=closest(elTerm, ["langSet"]);
    var langCode=elLangSet.getAttribute("xml:lang");
    var desig=JSON.parse(JSON.stringify(DESIG));
    desig.term.lang=langCode;
    desig.term.wording=elTerm.textContent.trim();
    desigs.push(desig);
    //Do the <term>'s <termNote>s and <descrip>s, if any:
    var elTermGrp=closest(elTerm, ["termGrp", "tig"]);
    var elTermDescribers=[];
      var elTermNotes=elTermGrp.getElementsByTagName("termNote");
        for(var i=0; i<elTermNotes.length; i++) elTermDescribers.push(elTermNotes[i]);
      var elDescrips=elTermGrp.getElementsByTagName("descrip");
        for(var i=0; i<elDescrips.length; i++) elTermDescribers.push(elDescrips[i]);
    for(var iTermDescribers=0; iTermDescribers<elTermDescribers.length; iTermDescribers++){
      var elTermDescriber=elTermDescribers[iTermDescribers];
      var tbxType=elTermDescriber.getAttribute("type");
      var tbxValue=elTermDescriber.textContent;
      if(
        tbxType=="transferComment" ||
        tbxType=="usageNote"
      ){
        desig.clarif=tbxValue;
      }
      else if(
        tbxType=="normativeAuthorization" ||
        tbxType=="administrativeStatus" ||
        tbxType=="language-planningQualifier" ||
        tbxType=="register" ||
        tbxType=="temporalQualifier" ||
        tbxType=="status" || tbxType=="Status"
      ){
        desig.accept="$ACCEPTLABEL["+tbxValue+"]";
      }
      else if(tbxType=="proprietaryRestriction"){
        desig.term.annots.push({start: 1, stop: desig.term.wording.length, label: {type: "symbol", value: "tm"}});
      }
      else if(
        tbxType=="partOfSpeech" && tbxValue=="properNoun"){
        desig.term.annots.push({start: 1, stop: desig.term.wording.length, label: {type: "symbol", value: "proper"}});
      }
      else if(
        tbxType=="partOfSpeech" ||
        tbxType=="animacy" ||
        tbxType=="grammaticalGender" ||
        tbxType=="grammaticalNumber" ||
        tbxType=="termType"
      ){
        desig.term.annots.push({start: 1, stop: desig.term.wording.length, label: {type: "posLabel", value: "$POSLABEL["+tbxValue+"]"}});
      }
    }
  }
  return desigs;
}

function closest(el, tagNames){
  while(el.parentNode && tagNames.indexOf(el.parentNode.tagName)==-1) el=el.parentNode;
  return el.parentNode;
}

function findXRef(text) {
    var regex = /[A-Z]{2,}[A-Z|\-|\s|\/]*/g;
    var result;
    found = {};
    while ((result = regex.exec(text)) !== null) {
	result = result[0].trim();
	if (result in terms) {
	  found[result] = terms[result];
        }
    }
    return found;
}

function toCamelCase(phrase) {
    const words = phrase.split(" ");
    for (let i = 0; i < words.length; i++) {
	words[i] = words[i].toLowerCase();
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}
