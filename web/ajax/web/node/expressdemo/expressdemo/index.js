var express = require("express");
var app = express();
var path = require("path");
var person= {firstname:"john",lastname:"camel"};
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.post("/display",function(req,res){
	//res.redirect("/");
	var name = req.body.myname;
	var number = req.body.number;
	inperson = {myname:name,number:number};
	res.json(inperson);
});
app.get("/display",function(req,res){
	//res.redirect("/");
	var name = req.query["myname"];
	var number = req.query["number"];
	inperson = {myname:name,number:number};
	res.json(inperson);
});
app.get("/home",function(req,res){
	//res.redirect("/");
	res.json(person);
});
app.get("/",function(req,res){
	res.sendFile(path.join(__dirname+"/client.html"));
});
app.all("/book/:bookid/:authorid",function(req,res,next){
	console.log("next middleware is used");
	next()
},function(req,res){
	res.send("book selected is "+ req.params.bookid +"authored by"+req.params.authorid);
});

app.get("/ab?cd",function(req,res){
	res.send("home page is displayed");
});
app.get("/ab+cd",function(req,res){
	res.send("department page is displayed");
});
app.get("/ab(cd)*",function(req,res){
	res.send("Admin page is displayed");
});

app.post("/",function(req,res){
	res.send("post called");
});
app.put("/",function(req,res){
	res.send("put called");
});
app.delete("/",function(req,res){
	res.send("delete called");
});
app.listen(5000,function(err,data){
	console.log("server is running at 5000");
});