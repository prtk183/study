<?php
$a=array("Sophia"=>"31","Jacob"=>"41","William"=>"39","Ramesh"=>"40");
$l=count($a);
$i=0;
echo "orignal array : ";
foreach($a as $k=>$v)


{
echo "key=".$k," ","value=".$v;
echo " ";

}
echo "<hr>";
echo "<br> assecnding bu value : ";
asort($a);
foreach($a as $k=>$v)
{
echo "key=".$k," ","value=".$v;
echo " ";
}
echo"<hr>";
echo "<br> assending by key : ";
ksort($a);
foreach($a as $k=>$v)
{
echo "key=".$k," ","Value=".$v;
echo " ";
}
echo"<hr>";
echo "<br> descending by value : ";
arsort($a);
foreach($a as $k=>$v)
{
echo "key=".$k," ", "value=".$v;
echo " ";
}
echo"<hr>";
echo "<br> descending by key : ";
krsort($a);
foreach($a as $k=>$v)
{
echo "key=".$k," ", "value=".$v;
echo " ";
}


?>
