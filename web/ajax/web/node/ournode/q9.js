var qs=require("querystring");

var http=require("http");
var server=http.createServer(function(req,res)
{
	if(req.method=="GET")
{
  var data=qs.parse(req.url.split("?")[1]);
  
}
res.write("\n student\nName: ");
res.write(data.name);
res.write("\nRollno: ");
res.write(data.rollno);
res.write("\nMarks: ");
res.write(data.marks);
res.write("\n");
res.write("grade: ");
 var n=parseInt(data.marks);
  if(n<50)
  {
    res.write("poor");
  }else if(n>=50 && n<75)
  {
    res.write("average");
  }else if(n>=75 && n<90)
  {
    res.write("good");
  }else if(n>=90 && n<=100)
  {
    res.write("excellent");
  }
  res.end();
});
server.listen(3000,function(err,data){

	console.log("server is running at port:3000");
});

