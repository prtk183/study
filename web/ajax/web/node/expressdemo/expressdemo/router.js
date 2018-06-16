var express = require("express");
var app = express();
var path = require("path");
var person= {firstname:"john",lastname:"camel"};
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

var books = require("./book.js");
app.use("/book",books);

app.set("view engine","pug");
app.set("views","./views");
app.enable("trust proxy");

var items=[{id:1,name:"bag"},
			{id:2,name:"pen"},
			{id:3,name:"bottle"}
			];
app.get("/",function(req,res){
	res.render("list",{mytitle:'Shopping items',myitems:items});
	
});
app.post("/add",function(req,res){
	var newItem = req.body.myitem;
	items.push({id:items.length+1,name:newItem});
	console.log("items length"+items.length);
	//res.redirect("/");
	res.render("list",{mytitle:'Shopping items',myitems:items});
});


console.log("engine is:"+app.get("view engine"));
console.log("trust proxy is:"+app.enabled("trust proxy"));

app.listen(5000,function(err,data){
	console.log("server is running at 5000");
});