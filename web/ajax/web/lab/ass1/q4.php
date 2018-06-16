<?php

echo "Web server versioon : ";
echo"$_SERVER[SERVER_SOFTWARE]";
echo "<br>";
echo "current executing filename: ";
echo "$_SERVER[SCRIPT_NAME]";
echo "<br>";
echo "the browser info";
echo "$_SERVER[HTTP_USER_AGENT]";
echo "<br>";
echo "server address";
echo "$_SERVER[SERVER_ADDR]";
echo "<br>";
echo "client address";
echo "$_SERVER[REMOTE_ADDR]";

?>

