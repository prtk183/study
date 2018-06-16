var local = require("./localmodule.js");
console.log("firstname:"+ local.person.firstname);
console.log("lastname:"+ local.person.lastname);
console.log("company:"+ local.person.company);

var p = new local.createPerson("M S", "Lakshmi","Wipro");
console.log("Full name is :"+p.fullName());