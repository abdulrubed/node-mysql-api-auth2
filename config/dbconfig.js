var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vtech@2012",
    database: "userdb"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;