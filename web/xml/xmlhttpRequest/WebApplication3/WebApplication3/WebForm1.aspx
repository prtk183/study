<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication3.WebForm1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <h2>Using the XMLHttpRequest Object</h2>
    <script language=javascript>
        function loadXMLDoc() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("demo").innerHTML =
      this.responseText;
                }
            };
            xhttp.open("GET", "xmlhttp_info.txt", true);
            xhttp.send();
        }
</script>
</head>
<body>
    <form id="form1" runat="server">
   
    

<div id="demo">
<button type="button" onclick="loadXMLDoc()">Change Content</button>
</div>
    
    </form>
</body>
</html>
