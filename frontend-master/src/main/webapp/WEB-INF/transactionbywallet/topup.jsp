<%--
  Created by IntelliJ IDEA.
  User: STI
  Date: 07/04/2019
  Time: 21.15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <jsp:include page="../../snippets/styles.jsp"/>
    <title>Top Up</title>
</head>
<body>
<form>
<jsp:include page="../../snippets/navbar.jsp"/>
<div class="form-group text-left">
    <label for="InputAccountNumber">Input Your Account Number</label>
    <input type="account_number" class="form-control" id="InputAccountNumber" placeholder="account_number">
</div>
<div class="form-group text-left">
    <label for="InputWallet">Input Wallet ID</label>
    <input type="wallet_id" class="form-control" id="InputWallet" placeholder="wallet_id">
</div>
<div class="form-group text-left">
    <label for="InputAmount">Input Amount</label>
    <input type="amount" class="form-control" id="InputAmount" placeholder="amount">
</div>
    <button type="submit" class="btn btn-primary">Submit</button>

<jsp:include page="../../snippets/footer.jsp"/>
</form>
</body>
</html>
