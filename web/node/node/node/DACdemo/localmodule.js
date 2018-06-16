var person = {firstname:"John",lastname:"karter",company:"CDAC"};

function createPerson(fname,lname,company){
	this.fname =fname;
	this.lname = lname;
	this.company = company;
	this.fullName = function(){
		console.log(this.fname+""+this.lname);
		return this.fname+""+this.lname ;
	}
}

module.exports.person = person;
module.exports.createPerson = createPerson;