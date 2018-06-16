<?xml version="1.0" encoding="WINDOWS-1252"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<head>
<style>
table,td,th{

text-align:left;
padding-right:200px;


}

</style>
</head>
<body style="margin-left:250px;">
<table>
<header>
<xsl:for-each select="departmental">
<tr><td><xsl:value-of select="customer-name"/></td><td><xsl:value-of select="dat"/></td><td><xsl:value-of select="billno"/></td></tr>
</xsl:for-each>
</header>
<xsl:for-each select="departmental/billdetails/product">

<tr><td><xsl:value-of select="product_name"/></td><td><xsl:value-of select="qty"/></td><td><xsl:value-of select="rate"/></td></tr>

</xsl:for-each>
</table>

</body>
</html>
</xsl:template>
</xsl:stylesheet>
