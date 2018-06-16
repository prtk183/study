<?php
$xml=simplexml_load_file("sam.xml");
echo"<table border='1px solid black'>";
echo"<tr>";
echo"<th>"."title"."</th>";

echo"<th>"."author"."</th>";

echo"<th>"."year"."</th>";
echo"</tr>";

foreach($xml->book as $book)
{
echo"<tr><td>".$book->title."</td><td>".$book->author."</td><td>".$book->year."</td></tr>";

}



echo"</table>";

?>
