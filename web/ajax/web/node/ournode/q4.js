function show()
{
	
for(i=1;i<=100;)
	{
		
		if((i%3==0)&&(i%5==0))
		{
			console.log("fizzbuzz");
			i++;
		}
		else if(i%5==0)
		{
			console.log("buzz");
			i++;
		}
		else if(i%3==0)
		{
			console.log("fizz");
			i++;
		}
		else
		{
			console.log(i);
			i++;
		}
	}

}

show();