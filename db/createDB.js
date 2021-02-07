require('dotenv').config();
const path = require('path');
const Importer = require('mysql-import');
let host = process.env.DB_HOST;
let user = process.env.DB_USER;
let password = process.env.DB_PASS;
let importer;

if (process.env.JAWSDB_MARIA_URL) {
  importer = mysql.Importer(process.env.JAWSDB_MARIA_URL);
} else {
  importer = mysql.Importer({
    host,
    user,
    password
  });
}

importer.onProgress(progress=>{
  let percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
  console.log(`${percent}% Completed`);
});

importer.import(path.join(__dirname, 'schema.sql')).then(() => {
  let files_imported = importer.getImported(); 
  console.log(`${files_imported.length} SQL file(s) imported.`);
}).catch(err => {
  console.log(err);
});
