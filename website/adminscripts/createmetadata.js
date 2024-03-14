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

function createMetadata(db, meta, type, callnext){
  doOne();
  function doOne(){
    if(meta.length>0){
      var data=meta.pop();
      ops.metadataCreate(db, termbaseID, "type", null, JSON.stringify(collection), function(){
        doOne();
      })
    } else {
      callnext();
    }
  };
}


function doTXT(){
  var siteconfig=JSON.parse(fs.readFileSync("../siteconfig.json", "utf8").trim());
  ops.siteconfig=siteconfig;
  var newCollections = {};
  var newSources = {};
  fs.readFile(file, "utf-8", (err, data) => {
    entries = [];
    var lines = data.split("\n");
    lines.forEach((line, index) => {
      if (index > 0) {
         cols = line.trim().split(/\t/);
	 data = { };
	 data['source'] = cols[0];
	 data['collection'] = cols[3];
	 if (data['source']) { data['source'] = data['source'].replace(/^"/,'').replace(/"$/,''); }
	 if (data['collection']) { data['collection'] = data['collection'].replace(/^"/,'').replace(/"$/,''); }
	 if (data['collection']) {
	   collections = data['collection'].split(',');
	   collections.forEach(collection => {
	     collection = collection.trim();
             if (! metadata['collection'][collection]) { 
	       newCollections[collection] = 1;
             }
	   });
	 } 
	 if (data['source']) { 
	   var source = data['source'].trim();
	   if ( ! metadata['source'][source]) { 
	     newSources[source] = 1;
	   }
	 }
      }
    })
    db.run("BEGIN TRANSACTION");
    Object.keys(newSources).forEach(source => {
      var sourceJSON = {
        title: {
          en: source
        }
      };
      console.log(`new source: ${source}`);
      ops.metadataCreate(db, termbaseID, "source",null,JSON.stringify(sourceJSON), function(){});
    });
    Object.keys(newCollections).forEach(collection => {
      var collectionJSON = {
        title: {
          en: collection
        }
      };
      console.log(`new collection: ${collection}`);
      ops.metadataCreate(db, termbaseID, "collection",null,JSON.stringify(collectionJSON), function(){});
    });
    db.run("COMMIT");
    db.close();
  });
}

