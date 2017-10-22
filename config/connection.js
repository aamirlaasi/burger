var mysql = require("mysql");

var connection = mysql.createConnection({
	host: JAWSDB_URL.split('@')[1],
	user: JAWSDB_URL.split(":")[1].split("//")[1],
	password: JAWSDB_URL.split(":")[2].split("@")[0],
	database: "burgers_db"
});

connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id" + connection.threadId);	
});

module.exports = connection;