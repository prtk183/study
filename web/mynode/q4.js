
for(i=1;i<=100;)
{
	
if((i%3==0)&&(i%5==0))
{
	console.log("threeFive");
	i++;
}else if(i%3==0)
{
	console.log("three");
	i++;
}else if(i%5==0)
{
	console.log("five");
	i++;
}else
{
	console.log(i);
	i++;
}

}
