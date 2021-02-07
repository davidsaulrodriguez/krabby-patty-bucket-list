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

importer.import(path.join(__dirname, 'seed-data.sql')).then(() => {
  let files_imported = importer.getImported(); 
  console.log(`${files_imported.length} SQL file(s) imported.`);
}).catch(err => {
  console.log(err);
});
