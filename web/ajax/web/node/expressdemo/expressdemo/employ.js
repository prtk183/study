var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
	res.send("Employees home page");
});

router.get("/about",function(req,res){
	res.send("Employees About page");
});

module.exports = router