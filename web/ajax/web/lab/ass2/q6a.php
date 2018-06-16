<?php 
session_start();
$favcolor=$_POST["name"];
$_SESSION["favourite_color"]=$favcolor;
?>
<!DOCTYPE html>
<html>
<body>
<form action="q6.php" method="POST">
<input type="submit" value="submit"/>

</form>
</body>
</html>
