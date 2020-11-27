let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'passer',
  database : 'projet-online'
});

connection.connect();

module.exports = connection;
