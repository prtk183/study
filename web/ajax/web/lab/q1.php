<?php
$m=fopen("m.txt","w+");
$txt="hello world how mother fucking assholes are doing";
fwrite($m,$txt);
fseek($m,0);
echo fgets($m);
fclose($m);
?>
