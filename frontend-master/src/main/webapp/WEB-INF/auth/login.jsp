<%--
  Created by IntelliJ IDEA.
  User: STI
  Date: 06/04/2019
  Time: 08.32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <jsp:include page="../../snippets/styles.jsp"/>
    <title>Login</title>
</head>
<body>
    <jsp:include page="../../snippets/navbar.jsp"/>

    <div class="container-fluid text-center"  style="padding-top: 20px; padding-bottom: 20px">
        <div class="row content justify-content-sm-center">
            <div class="col-sm-5 text-left">
                <form>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="Password">Password</label>
                        <input type="password" class="form-control" id="Password" name="Password" placeholder="Password">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Remember me </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>

    <jsp:include page="../../snippets/footer.jsp"/>
</body>
</html>
