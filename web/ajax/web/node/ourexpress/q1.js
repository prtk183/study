var exp=require("express");
var app=exp();
app.get("/",function(req,res){

res.send("hello world");

});
app.listen(5000,function(err,data){

console.log("server running at port:5000");
});