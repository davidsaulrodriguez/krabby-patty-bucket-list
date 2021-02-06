require('dotenv').config();
const mysql = require('mysql');
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const database = process.env.DB_NAME;
const db = mysql.createConnection({
  host,
  user,
  password,
  database
});

db.connect((err) => {
  if (err) {
    console.log(`There was an error connecting to the database: ${err.stack}`);
    return;
  }
  console.log(`Connected to the database: ${db.threadId}`);
});

module.exports = db;