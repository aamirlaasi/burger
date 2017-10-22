var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "ko86t9azcob3a2f9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "tqey6bwhpiu9m2yw",
	password: "ks6xh8d2xbyydgsp",
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