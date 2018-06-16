var qs=require("querystring");

var http=require("http");
var server=http.createServer(function(req,res)
{
	if(req.method=="GET")
{
  var data=qs.parse(req.url.split("?")[1]);
  
}
 var n=parseInt(data.name);
 var i;
 var c=0;
 for(i=2;i<=n;i++)
 {
    if(n%i==0)
    {
      c=c+1;
    }

 }   
  	if(c==1)
  	{
      res.write("its a prime number: "+n);

  	}
  	else{

  		res.write("its not a prime number: "+n);
  	}
  	

  
  res.end();
});
server.listen(3000,function(err,data){

	console.log("server is running at port:3000");
});

