if (window.XMLHttpRequest) //Create an XMLHttpRequest object
  {
  xhttp=new XMLHttpRequest();
  }
else // code for IE5 and IE6
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 //Use the open() and send() methods of the XMLHttpRequest object to send a request to a server
xhttp.open("GET","books.xml");
xhttp.send();
//Get the response data as XML data
xmlDoc=xhttp.responseXML;