<%--
  Created by IntelliJ IDEA.
  User: STI
  Date: 07/04/2019
  Time: 21.59
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Register Wallet</title>
</head>
<body>
<jsp:include page="../../snippets/navbar.jsp"/>
<form>

    <div class="form-group text-left">
        <label for="InputAccountNumber">Input Your Account Number</label>
        <input type="account_number" class="form-control" id="InputAccountNumber" placeholder="account_number">
    </div>
    <div class="form-group text-left">
        <label for="InputWallet">Input ID Wallet</label>
        <input type="wallet_id" class="form-control" id="InputWallet" placeholder="wallet_id">
    </div>
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <jsp:include page="../../snippets/footer.jsp"/>
</body>
</html>
