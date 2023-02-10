//A script to migrate all SQLite databases when the database schema has changed.

const path=require("path");
const fs=require("fs");
const Database = require('better-sqlite3');

migrateDBs(path.join(__dirname, "../website/termbaseTemplates/"));
migrateDBs(path.join(__dirname, "../data/termbases/"));

function migrateDBs(dirPath){
  var filenames=fs.readdirSync(dirPath).filter(filename => /\.sqlite$/.test(filename));
  var count=filenames.length;
  console.log(`${count} databases to do`);
  filenames.map(filename => {
    console.log(`beginning ${filename}`);
    var filepath=path.join(dirPath, filename);
    const db = new Database(filepath, { fileMustExist: true });

    //create entry_source table:
    db.prepare(`CREATE TABLE IF NOT EXISTS entry_source (
      entry_id INTEGER   REFERENCES entries (id) ON DELETE CASCADE,
      source_id INTEGER
    )`).run();

    //create indexes in entry_note table:
    db.prepare(`CREATE INDEX IF NOT EXISTS ix_entry_source_entry_id ON entry_source (
        entry_id
    )`).run();
    db.prepare(`CREATE INDEX IF NOT EXISTS ix_entry_source_source_id ON entry_source (
       source_id 
    )`).run();
    db.close();
    console.log(` - done ${filename}, ${--count} databases remaining`);
  });
}
