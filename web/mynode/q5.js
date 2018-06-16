var http=require("http");
var server=http.createServer(function(req,res){
	res.writeHead(200,"content-type","text");
	res.write("hello");
	res.end();
});

server.listen(3000,function(err,data){
	
	console.log("connected");
});