var os = require("os");
console.log("hostname :"+os.hostname());
console.log("platform :"+os.platform());
console.log("Home dir : "+os.homedir());
var nocpus = os.cpus();
for(var i in nocpus){
		console.log("CPUS :"+JSON.stringify(nocpus[i]));
}

console.log("network interfaces :"+JSON.stringify(os.networkInterfaces()));


