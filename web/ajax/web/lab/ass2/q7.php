<!DOCTYPE html>
<html>
<?php
$a="username";
$b="lucky";

setcookie($a,$b,time()+(86400),"/" );
echo $_COOKIE[$a];

?>

<body>
<form>
<input type="submit" value="unset">
</form>
</body>
</html>
