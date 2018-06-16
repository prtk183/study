var exp=require("express");
var path=require("path");
var app=exp();

app.get("/homepage",function(req,res){

res.sendFile(path.join(__dirname+"\\homepage.html"));

});

app.get("/admin",function(req,res){

res.sendFile(path.join(__dirname+"\\admin.html"));

});

app.get("/resource",function(req,res){

res.sendFile(path.join(__dirname+"\\resource.html"));

});

app.get("/login",function(req,res){

res.sendFile(path.join(__dirname+"\\login.html"));

});


app.listen(5000,function(err,data){

console.log("server running at port:5000");
});