<%--
  Created by IntelliJ IDEA.
  User: STI
  Date: 07/04/2019
  Time: 20.56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <jsp:include page="../../snippets/styles.jsp"/>
    <title>Transfer</title>
</head>
<body>
<form>
<jsp:include page="../../snippets/navbar.jsp"/>
    <div class="form-group text-left">
        <label for="InputAccountNumber">Input Your Account Number</label>
             <input type="account_number" class="form-control" id="InputAccountNumber" placeholder="account_number">
</div>
<div class="form-group text-left">
    <label for="InputDestination">Input The Destination Account Number</label>
         <input type="account_number" class="form-control" id="InputDestination" placeholder="account_number">
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
