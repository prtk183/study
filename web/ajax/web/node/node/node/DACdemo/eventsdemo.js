var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("response",function(){
	console.log("Event occur at :"+ new Date());
});

setInterval(function(){
eventEmitter.emit("response");
}, 2000);