var exp=require("express");
var app=exp();
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
/*app.get("/",function(req,res){
	


	res.write("<html>");
	
var name=req.query["name"];
var rollno=req.query["rollno"];
res.write(name);
res.write("<br>");
res.write(rollno);
res.write("</html>");
res.end();

});*/
app.post("/",function(req,res){


var name=req.body.name;
var rollno=req.body.rollno;
res.send(name);
res.write(rollno);
res.end();
});
app.listen(5000,function(err,data){

console.log("server running at port:5000");
});