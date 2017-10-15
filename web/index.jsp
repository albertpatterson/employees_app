<%--
  Created by IntelliJ IDEA.
  User: apatters
  Date: 10/14/2017
  Time: 2:11 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
    <pre id="message"></pre>
    <pre id="message2"></pre>
    <script>

      function setMessage(id, msg){
          document.getElementById(id).innerText = msg;
      }

      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", function(){setMessage("message", oReq.responseText)});
      oReq.open("GET", "databaseData");
      oReq.send();


      var oReq2 = new XMLHttpRequest();
      oReq2.addEventListener("load", function(){setMessage("message2", oReq2.responseText)});
      oReq2.open("GET", "tableData?tableName=employees");
      oReq2.send();
    </script>
  </body>
</html>
