var exp=require("express");
//var path=require("path");
var app=exp();

/*
app.get("/homepage",function(req,res){

res.sendFile(path.join(__dirname+"\\eclient.html"));

});
app.get("/admin",function(req,res){

res.sendFile(path.join(__dirname+"\\eclient.html"));

});
app.get("/resource",function(req,res){

res.sendFile(path.join(__dirname+"\\eclient.html"));

});
app.get("/login",function(req,res){

res.sendFile(path.join(__dirname+"\\eclient.html"));

});
*/
app.set('view engine','pug');
app.set('views','./views');
app.get("/h",function(req,res){

res.render("a",{m:'homepage'});

});

app.get("/a",function(req,res){

res.render("a",{m:'admin'});

});
app.get("/r",function(req,res){

res.render("a",{m:'resource'});

});

app.get("/l",function(req,res){

res.render("a",{m:'login'});

});

app.listen(5000,function(err,data){

console.log("server running at port:5000");
});