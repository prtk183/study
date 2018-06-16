<!DOCTYPE HTML>
<html>
<head>
</head>
<body>
<?php
$name=$_POST["name"];
$number=$_POST["number"];
if($_SERVER["REQUEST_METHOD"]=="POST")
{
if(empty($_POST["name"]))
{
echo"<script>alert('error');</script>";
}
else if(!preg_match("/^[a-zA-Z]*$/",$name))
{
echo "error";
}
if(empty($_POST["number"]))
{
echo"error";
}

else if(!preg_match("/^[0-9]{5}$/",$number))
{

echo"error";
}
}
?>
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">

Name:<input type="text" name="name"/>
<br>
Mob_No:<input type="number" name="number"/>
<br>
<input type="submit" value="validate"/>
</form>
<?php echo"$_POST['name']";
echo"<br>";
echo"$_POST['number']";
?>

</body>
</html>
