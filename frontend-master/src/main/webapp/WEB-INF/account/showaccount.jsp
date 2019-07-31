<%--
  Created by IntelliJ IDEA.
  User: STI
  Date: 07/04/2019
  Time: 20.15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <jsp:include page="../../snippets/styles.jsp"/>
    <title>Show Account</title>
</head>
<body>
    <jsp:include page="../../snippets/navbar.jsp"/>
    <table class="table table-bordered">
        <thead>
        <tr>
            <th scope="col">Account Number</th>
            <th scope="col">Account Name</th>
            <th scope="col">Balance</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
    </table>
    <jsp:include page="../../snippets/footer.jsp"/>
</body>
</html>
