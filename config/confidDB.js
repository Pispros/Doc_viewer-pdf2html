let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'esp',
  password : 'passer',
  database : 'projetOnline'
});

connection.connect();

module.exports = connection;
