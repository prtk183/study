<!DOCTYPE html>
<html>
<?php



if($_SERVER["REQUEST_METHOD"]=="POST")
{ $flag=$_POST["flag"];
  $username=$_POST["username"];
  $gender=$_POST["gender"];
  $dob=$_POST["dob"];
  $c=0;
 if(empty($_POST["username"]))
{
  echo"name cannot be empty";
  $c=1;
}  
elseif(!preg_match("/^[a-zA-Z]*$/",$username))
{
  echo"error name";
  $c=1;
}
 if(empty($_POST["gender"]))
{
  echo"gender cannot be empty";
 $c=1;
}
elseif(!preg_match("/^[m][a][l][e]|[f][e][m][a][l][e]$/",$gender))
{
  echo"error gender";
  $c=1;
}

 if(empty($_POST["dob"]))
{
  echo"dob cannot be empty";
  $c=1;
}
elseif(!preg_match("/^[0][1-9]|[1][0-9]|[2][0-9]|[3][0-1]\/[1-12]\/[0-9]{4}$/",$dob))
{
  echo"error dateofbirth";
  $c=1;
}

$link=mysqli_connect("localhost","dac22","actsdac1","dac22");
if($link)
{
echo"connected";
}
else{

 echo"connection failed";

}
if($c!=1)
{
if($flag)
{
$sql1="create table student(username varchar(20),gender varchar(20),dob varchar(20));";
mysqli_query($link,$sql1);

}

#$sql2="insert into info values('" . $username . "','" . $gender "','" . $dob . "')";

$sql2 = "INSERT INTO student VALUES('$username','$gender','$dob')";
echo $sql2;
$data=mysqli_query($link,$sql2);
var_dump($data);
if($data)
{
echo"data inserted";
}
else
{
echo "failed to insert into table";
}


$sql3="select * from student;";
$data1=mysqli_query($link,$sql3);
while($row=mysqli_fetch_assoc($data1))
{
echo "<br>".$row['username']." ".$row['gender']." ".$row['dob'];
echo "<br>";
}
}
}
?>
<head>
</head>
<body>
<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>" method="POST">
username<input type="text" name="username"/>
gender<input type="text" name="gender"/>
dob<input type="text" name="dob"/>
flag<input type="number" name="flag"/>
<input type="submit" value="submit">
</form>
</body>
</html>

