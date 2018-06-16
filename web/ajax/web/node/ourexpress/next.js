var exp=require("express");
var app=exp();

app.post("/",function(req,res,next){
 res.writeHead(200,"content-type","text/html");
	res.write("in post");
	next()
},function(req,res){
	res.writeHead(200,"content-type","text/html");

	res.write("close");
	res.end();
});

app.listen(5000,function(err,data){

console.log("server running at port:5000");
});