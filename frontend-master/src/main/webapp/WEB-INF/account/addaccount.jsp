<%--
  Created by IntelliJ IDEA.
  User: STI
  Date: 07/04/2019
  Time: 19.09
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <jsp:include page="../../snippets/styles.jsp"/>
    <title>Add Account</title>
</head>
<body>
<jsp:include page="../../snippets/navbar.jsp"/>
<form>

        <div class="form-group text-left">
            <label for="InputAccount">Input Your Account Name</label>
            <input type="account_name" class="form-control" id="InputAccount" placeholder="account_name">
        </div>
        <div class="form-group text-left">
            <label for="InputBalance">Input Your Balance</label>
            <input type="balance" class="form-control" id="InputBalance" placeholder="balance">
        </div>

        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <jsp:include page="../../snippets/footer.jsp"/>
</form>
</body>
</html>

