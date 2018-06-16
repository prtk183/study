<?php 
session_start();
if(isset($_SESSION["favourite_color"]))
{
echo $_SESSION['favourite_color']." is deleted";
unset($_SESSION["favourite_color"]);

}

?>
<!DOCTYPE html>
<html>
<body>
<form action="q6a.php" method="POST">
<input type="text" name="name"/>
<input type="submit" value="submit"/>
<form>
</body>
</html>
