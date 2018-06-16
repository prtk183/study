 var express=require("express");
var app=express();
//var query=require("query");
app.set('view engine','pug');
app.set('views','./views');

var item=[{name:"neel"}];
app.get("/",function(req,res){
	res.render("b",{m:item});
});
app.get("/home",function(req,res){

//console.log(req.query);			
var item_name=req.query["items"];
console.log(item.push({name:item_name}));
//for(i=0;i<items.length;i++)

console.log(item);
res.render("b",{m:item});

});
app.get("/d",function(req,res){
var val=req.query["val"];

f(val);

res.render("b",{m:item});
});

app.listen(5000,function(err,data){

console.log("server running at port:5000");
});
function f(val){
	//var n=item.length;
for(var i=0;i<item.length;i++)
{ 
  if(item[i]["name"]==val)
  {
     
     item.splice(i,1);
   console.log(item);
  }
}
}  