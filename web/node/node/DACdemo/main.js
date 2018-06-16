var http = require("http");

var server = http.createServer(function(req,res){
	  res.writeHead(200,"content-type","text/plain");
	  res.write("Hello World ");
	  res.end();
});

server.listen(3000,function(err,data){
	console.log("Server is running at port : 3000")
});
