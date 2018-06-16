var http=require("http");
var server=http.createServer(function(req,res){
	
	res.writeHead(200,"content-type","text");
	var fs=require("fs");
	var d=fs.readFileSync("sam.txt","UTF-8");
	res.write(d);
	res.end();
});

server.listen(3000,function(err,data){
	console.log("connected");
});