const mysql = require("mysql2");


// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  database:'hrtracker',
  user: 'hrtracker',
  password: 'hrtracker'
});

module.exports = db;