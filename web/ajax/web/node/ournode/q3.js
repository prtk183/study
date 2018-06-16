function f(n)
{
  if((n==0)||(n==1))
  {
  	return 1;
  }
else{

	return (n*f(n-1));
}

}

var z=f(5);
console.log(z);