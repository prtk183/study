var local=require("./q7.js");
var c1=local.f("hello world1");
var c2=local.f1("hello world1");
var c3=local.f2("hello world1");
var http=require("http");
var server=http.createServer(function(req,res)
{
  res.writeHead(200,"content-type","text/plain");
  res.write("no of words :"+c1);
    res.write("\n");
  res.write("no of digit :"+c2);
    res.write("\n");
    res.write("no of alaphabet :"+c3);
  res.end();
});
server.listen(3000,function(err,data){

	console.log("server is running at port:3000");
});
