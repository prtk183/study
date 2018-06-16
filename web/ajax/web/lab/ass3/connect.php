<?php
$link=mysqli_connect('localhost','dac22','actsdac1','dac22');
if(!$link)
{
echo "not";
}
else
{
echo "connected";
echo "<br>";
}
$sql="select * from mytable where name='ram';";
$data=mysqli_query($link,$sql);
if($data)
{

echo "succes";
echo "<br>";

while( $row=mysqli_fetch_array($data))
{
echo "<h2>".$row['name']." ".$row['salary']."</h2>";
echo "<br>";
}
}

mysqli_close($link);

?>
