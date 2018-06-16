<?php
$k=0;
$a=array();
function f()
{
global $a;
$i=0;
global $k;
for($i=200;$i<=250;$i++)
{
if($i%4==0)
{
array_push($a,$i);

}

}
}
f();
$l=count($a);
for($i=0;$i<$l;$i++)
{
echo "$a[$i]";

}
$str=implode(",",$a);
echo "$str";



?>
