<!DOCTYPE html>
<html>
<?php
if($_SERVER["REQUEST_METHOD"]=="POST")
{
$n1=$_POST["number1"];
$n2=$_POST["number2"];
$c=$n1+$n2;
echo"$c";

}
?>
<body>
<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="POST">
<input type="number" name="number1"/>
<input type="number" name="number2"/>
<input type="submit" value="submit"/>
</form>
</body>
