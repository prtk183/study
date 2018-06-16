var express=require("express");
var app=express();
var bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.post("/",function(req,res){
var m1=parseInt(req.body.m1);
//var m1=parseInt(m1);
var m2=parseInt(req.body.m2);
var m3=parseInt(req.body.m3);
var m4=parseInt(req.body.m4);
var m5=parseInt(req.body.m5);
//var m2=parseInt(m2);
//var m3=parseInt(m3);
//var m4=parseInt(m4);
//var m5=parseInt(m5);
var name=req.body.name;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);
console.log(name);
var avg=(m1+m2+m3+m4+m5)/5;
console.log(avg);
avg=avg.toString();
console.log(avg);
var perc=(m1+m2+m3+m4+m5)/5;
perc=perc.toString();
res.write("\nName: ");
res.write(name);
console.log(name);
res.write("\n Average: ");
res.write(avg);
console.log(avg);
res.write("\n Percentage: ");
res.write(perc);
res.end();
});
app.listen(5000,function(err,data){

console.log("connected");
});
