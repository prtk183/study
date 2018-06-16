var express=require("express");
var app=express();
//var query=require("query");
app.set('view engine','pug');
app.set('views','./views');

app.get("/",function(req,res){
var item={};
console.log(req.query);
//var item_name=req.query["items"];
item.push({name:item_name});
//for(i=0;i<items.length;i++)

res.render("b",{m:item});

});

app.listen(5000,function(err,data){

console.log("server running at port:5000");
});