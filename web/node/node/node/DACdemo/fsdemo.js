var fs = require("fs");

var myfs = fs.readFileSync("mytext.txt");
console.log("sync reading:"+myfs);

fs.readFile("mytext.txt",function(err,data){
	if (err) throw new Error("Invalid filename");
	console.log("CONTENTS ARE :"+ data);
});

console.log("File read over");