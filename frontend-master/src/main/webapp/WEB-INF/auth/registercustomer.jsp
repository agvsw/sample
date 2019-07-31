<%--
  Created by IntelliJ IDEA.
  User: STI
  Date: 06/04/2019
  Time: 08.33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <jsp:include page="../../snippets/styles.jsp"/>
    <title>Register Customer</title>
</head>
<body>
jsp:include page="../../snippets/navbar.jsp"/>
<form>

    <div class="form-group text-left">
        <label for="InputFirstName">Input Your First Name</label>
        <input type="first_name" class="form-control" id="InputFirstName" placeholder="first_name">
    </div>
    <div class="form-group text-left">
        <label for="InputLastName">Input Your Last Name</label>
        <input type="last_name" class="form-control" id="InputLastName" placeholder="last_name">
    </div>
    <div class="form-group text-left">
        <label for="InputBirthDate">Input Your BirthDate</label>
        <input type="birth_date" class="date-picker form-control col-md-7 col-xs-12" id="InputBirthDate" placeholder="birth_date">
    </div>
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <jsp:include page="../../snippets/footer.jsp"/>
</form>
</body>
</body>
</html>
