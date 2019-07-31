<%--
  Created by IntelliJ IDEA.
  User: STI
  Date: 06/04/2019
  Time: 07.12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<title>My Bank</title>
</head>
<body class="mt-5">

</body>
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img src="../static/img/My%20Bank.png" style="width: 50px;"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

            <li class="nav-item active">
                <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#myaccount" id="navbarDropdownMenuLink1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Account
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#showaccount">Show Account</a>
                    <a class="dropdown-item" href="#topup">Top Up</a>
                    <a class="dropdown-item" href="#withdraw">Withdraw</a>
                    <a class="dropdown-item" href="#showaccount">Transfer</a>

                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#myaccount" id="navbarDropdownMenuLink2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Wallet
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#showwallet">Show Wallet</a>
                    <a class="dropdown-item" href="#topup">Top Up</a>
                    <a class="dropdown-item" href="#withdraw">Withdraw</a>
                    <a class="dropdown-item" href="#showaccount">Transfer</a>
            <li class="nav-item">
                <a class="nav-link" href="#aboutus">About Us</a>
            </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a class="btn btn-light" href="#"> Sign Up</a></li>
            <li><a class="btn btn-light" href="#"> Log Out </a></li>

        </ul>
    </div>
</nav>

