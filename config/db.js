require('dotenv').config();
const mysql = require('mysql');
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;
let db;

if (process.env.JAWSDB_MARIA) {
  db = mysql.createConnection(process.env.JAWSDB_MARIA);
} else {
  db = mysql.createConnection({
    host,
    user,
    password,
    database
  });
}
console.log(db);
db.connect((err) => {
  if (err) {
    console.log(`There was an error connecting to the database: ${err.stack}`);
    return;
  }
  console.log(`Connected to the database: ${db.threadId}`);
});

module.exports = db;