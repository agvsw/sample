<%--
  Created by IntelliJ IDEA.
  User: STI
  Date: 07/04/2019
  Time: 21.50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <jsp:include page="../../snippets/styles.jsp"/>
    <title>Add Wallet</title>
</head>
<body>
<jsp:include page="../../snippets/navbar.jsp"/>
<form>

    <div class="form-group text-left">
        <label for="InputDescription">Input Description of Wallet</label>
        <input type="account_name" class="form-control" id="InputDescription" placeholder="account_name">
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>

</form>
<jsp:include page="../../snippets/footer.jsp"/>
</body>
</html>
