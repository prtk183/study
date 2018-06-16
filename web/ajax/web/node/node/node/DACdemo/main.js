var http = require("http");
var qs = require("querystring");

var server = http.createServer(function(req,res){
	  res.writeHead(200,"content-type","text/html");
	  if(req.method =="GET")
	  {
		  console.log(req.url.split("?")[1]);
		  var data = qs.parse(req.url.split("?")[1]);
		  console.log(data);
		  res.write("hi "+data.name);
		  res.write("<br> Your roll number is :"+data.number);
	  }
	  if(req.method =="POST")
	  {
		  console.log("req:"+req.url);
		  var querydata = "";
		  req.on("data",function(data){
			  querydata+=data;
		  });
		  req.on("end",function(){
			  console.log("Querydata:"+querydata);
			  
		  });
		  
	  }
	  res.end("end of the program");
});

server.listen(3000,function(err,data){
	console.log("Server is running at port : 3000")
});
