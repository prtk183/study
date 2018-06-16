var express = require("express");
var app = express();
var mysql = require("mysql");
var conn = mysql.createConnection({
	host: "localhost",
	user:"",
	password:"",
	database:""
});

conn.connect();

app.get("/",function(req,res){
	conn.query("select * from employee",function(err,rows,fields){
		if (err) throw err;
		res.send("employees are"+rows);
		
	});
	conn.end();
	
});