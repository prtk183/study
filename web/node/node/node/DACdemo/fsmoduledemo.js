var http = require("http");
var fs = require("fs");

 var data = fs.readFileSync("mytext.txt");
 console.log("synchronous read :"+ data.toString());

http.createServer(function (request, response) {
  
  fs.readFile("mytext.txt", function(err,data){
	if (err)
	  throw err;
	else
	{ console.log(data.toString());
		response.writeHead(200, 'Content-Type', 'text/plain');
	  
	  response.end(data);
      
	}
  });
  
 
  

}).listen(5000);

console.log('Server running at http://localhost:8081/');