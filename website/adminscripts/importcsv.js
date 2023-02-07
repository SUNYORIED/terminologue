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
var toSave = {};

const metadata = {}
function getMetadata() {
  db.all(`select * from metadata`, {}, function(err, rows){
    rows.map(row => {
      if (! metadata[row.type]) {
          metadata[row.type] = {};
      }
      parsed = JSON.parse(row.json);
      metadata[row.type][parsed['title']['en']]=row.id;
    });
    doTXT();
  });
}      
const TODAY = new Date();
file = process.argv[2];
getMetadata();

function doTXT(){
  var siteconfig=JSON.parse(fs.readFileSync("../siteconfig.json", "utf8").trim());
  ops.siteconfig=siteconfig;
  fs.readFile(file, "utf-8", (err, data) => {
    entries = [];
    var lines = data.split("\n");
    lines.forEach((line, index) => {
      if (index > 0) {
         cols = line.trim().split(/\t/);
	 data = { };
	 data['source'] = cols[0];
	 data['term'] = cols[1];
	 data['definition'] = cols[2];
	 data['collection'] = cols[3];
	 data['updateDate'] = new Date(cols[4]);
	 data['example'] = cols[5];
	 data['refs'] = cols[6];
	 if (data['definition']) { data['definition'] = data['definition'].replace(/^"/,'').replace(/"$/,''); }
	 if (data['collection']) { data['collection'] = data['collection'].replace(/^"/,'').replace(/"$/,''); }
	 if (data['example']) { data['example'] = data['example'].replace(/^"/,'').replace(/"$/,''); }
	 if (data['refs']) {
           console.log('Xref import not coded - ignoring');
         }
	 saveCollections = [];
	 if (data['collection']) {
	   collections = data['collection'].trim().split(',');
	   collections.forEach(collection => {
	     collection = collection.trim();
             if (! metadata['collection'][collection]) { 
               console.log("Unknown collection", collection);
               process.exit(-1);
             } else {
	       saveCollections.push(metadata['collection'][collection]);
             }
	   });
	 } 
	 data['collection'] = saveCollections;
	 if (data['source']) { 
	   if ( ! metadata['source'][data['source']]) { 
             console.log("Unknown source", data['source']);
             process.exit(-1);
	   } else {
	     data['source'] = metadata['source'][data['source']];
	   }
	 }
	 if (data['term'] && data['source']) {
	   entries.push(doEntry(data));
         }

      }
    })
    entries.forEach(entry => { 
      console.log(entry);
      ops.entrySave(db, termbaseID, null, JSON.stringify(entry), importUser, {},function(){});
    });
  });
}


function doEntry(data){
  const ENTRY={
  "cStatus": "0",
  "pStatus": "1",
  "dStatus": "0",
  "dateStamp": data['updateDate'] || today,
  "tod": "",
  "domains": [],
  "desigs": [],
  "intros": {},
  "definitions": [],
  "examples": [],
  "notes": [],
  "collections": data['collection'],
  "extranets": [],
  "xrefs": []
  };
  var entry =JSON.parse(JSON.stringify(ENTRY));
  entry.desigs=doTerms(data['term']);
  var langCode="en";
  examples = data['example'].split(/\s\s+/);
  var example = {texts: {'en': []}, sources: [{'id': data['source'], 'lang': 'en'}], nonessential: "0"};
  examples.forEach(sentence => {
    example.texts[langCode].push(sentence)
  });
  entry['examples'].push(example)
  var definition={texts: {}, domains: [], sources: [{'id':data['source'], 'lang':'en'}], nonessential: "0"};
  definition.texts[langCode]=data['definition'];
  entry.definitions.push(definition);
  return entry;
}

function doTerms(term){
   const DESIG={
  "term": {
    "id": "",
    "lang": "en",
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
  var desig=JSON.parse(JSON.stringify(DESIG));
  desig.term.wording=term.trim();
  desigs.push(desig);
  return desigs;
}

