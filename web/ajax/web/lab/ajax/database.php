<?php
$connection=mysqli_connect("localhost","dac22","actsdac1","dac22");
$sql1="create table ourtable3(lynk varchar(20),name varchar(20),path varchar(20));";
mysqli_query($connection,$sql1);
$sql1="insert into ourtable3 values('www.google.com','shwetank','a.jpg');";
$sql2="insert into ourtable3 values('www.gmail.com','prateek','b.jpg');";
$sql3="insert into ourtable3 values('www.thehindu.com','shweta','c.jpg');";
$sql4="insert into ourtable3 values('www.bing.com','pariii','d.jpg');";
mysqli_query($connection,$sql1);
mysqli_query($connection,$sql2);
mysqli_query($connection,$sql3);
mysqli_query($connection,$sql4);

$sqls="select * from ourtable3;";
$result=mysqli_query($connection,$sqls);
while($row=mysqli_fetch_array($result))
{
  echo "$row[lynk]"." "."$row[name]"." "."$row[path]";
}
