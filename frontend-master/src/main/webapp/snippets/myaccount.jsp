<%--
  Created by IntelliJ IDEA.
  User: STI
  Date: 07/04/2019
  Time: 11.55
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="container">
    <div class="row">
        <div class="col text-center">
            <h1>My Account</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-md">
            <div class="container text-center">
                <img src="../static/img/1.jpg" width="100" class="rounded-circle" ></a>
                <div class="card-body">
                    <form>
                        <div class="text-left">
                            <p> 1. Add Account </p>
                            <p> 2. Delete Account </p>
                            <p> 3. Show Account </p>

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
                        <button type="submit" class="btn btn-danger">Submit</button>
                    </form>
                </div>
            </div>
        </div>
