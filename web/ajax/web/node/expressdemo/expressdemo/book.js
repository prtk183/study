var express = require("express");
var router = express.Router();

router.get("/",function(req,res){
		res.send("book store main page");
});

router.get("/:id",function(req,res){
		res.send("get book details");
});

module.exports = router;