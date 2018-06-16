var express = require("express");
var app = express();

app.set('port',process.env.PORT || 5000);

app.set('node-env',process.env.Node_env || 'Development');

console.log("node environment is:"+ app.get("node-env"));

app.set('view engine','pug');
app.set('views','./views');

var emp = require("./employ.js");
app.use('/employees',emp);

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.route("/book")
	.get(function(req,res){
		res.send("your book name is :"+req.query["bookname"]);
		res.send("get a book");
	})
	.post(function(req,res){
		res.send("your book name is :"+req.body.bookname);
		res.send("add a book");
	})
	.put(function(req,res){
		res.send("update a book");
	})
	.delete(function(req,res){
		res.send("delete a book");
	})

var func1 = function(req,res,next)
{
	console.log("Func1 called");
	next()
}

var func2= function(req,res,next)
{
	console.log("Func2 called");
	next()
}
var func3 = function(req,res,next)
{
	console.log("Func3 called");
	next()
}

app.get("/middleware",[func1,func2,func3],function(req,res)
{
	 res.send("func1, func2, func3 called");
});
app.get("/",function(req,res){
	res.render("myindex");
	//res.send("get called");
});

app.get("/abcd",function(req,res,next){
	console.log("abcd request called at "+new Date());
	next()
},function(req,res){
	res.send("abcd called");
});
app.get("/ab?cd",function(req,res){
	res.send("ab?cd called");
});

app.get("/ab+cd",function(req,res){
	res.send("ab+cd called");
});

app.get("/ab*cd",function(req,res){
	res.send("ab*cd called");
});

app.get("/ab(cd)?e",function(req,res){
	res.send("ab(cd)?e called");
});

app.get("/users/:userid/books/:bookid",function(req,res){
	res.send("parameters are"+req.params.userid+" "+req.params.bookid);
});
app.post("/",function(req,res){
	res.send("put called");
});

app.delete("/",function(req,res){
	res.send("delete called");
});
app.put("/",function(req,res){
	res.send("put called");
});
/*app.listen(3000,function(){
	console.log("server is running at 3000");
});*/

var server = app.listen(app.get("port"),"localhost",function(){
	var hostname = server.address().address;
	var port = server.address().port;
	console.log("server is running at host :"+hostname+" "+port);
});