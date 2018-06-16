<?php
$searchkey=$_POST["input"];
$con=mysqli_connect("localhost","dac22","actsdac1","dac22");
$query="select * from ourtable3 where name like '%$searchkey%'";

$result=mysqli_query($con,$query);
echo "<ul>";
while($row=mysqli_fetch_array($result))
{
echo "<li><a href='$row[lynk]'>$row[name]</a>"." "."<img src='$row[path]'>"." </li>";
}
echo "</ul>";

?>
