function f(n)
{

var a=" ";
a=n+" ";
var l=a.length;
var c=0;
var i;
for(i=0;i<l;)
{
if(a.charAt(i)==" ")
{
	i++;
}
else{
	while(a.charAt(i)!=" ")
     {

     	i++;
     }
     c=c+1;
   }

}
return c;
}

function f1(n)
{
 var l=n.length;
 var c=0;
 for(i=0;i<l;i++)
 {
   if((n.charAt(i)>='0')&&(n.charAt(i)<='9'))
   {
      c=c+1;
   }
 }
return c;
}

function f2(n)
{
 var l=n.length;
 var c=0;
 for(i=0;i<l;i++)
 {
    if(((n.charAt(i)>='A')&&(n.charAt(i)<='Z'))||((n.charAt(i)>='a')&&(n.charAt(i)<='z')))
    {
    	c=c+1;
    }

 }
 return c;
 console.log("the alphabets are"+c);
}

module.exports.f=f;

module.exports.f1=f1;

module.exports.f2=f2;

