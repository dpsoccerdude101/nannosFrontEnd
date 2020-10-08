<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <meta charset="UTF-8">
    <title>Vendor Login</title>

    <style>
        body {
            background-image: url('landing.jpg');
        }
        body:before {
            content: "";
            display: block;
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: -1;
            background-color: rgba(255, 255, 255, 0.6);
        }
    </style>
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="index.php">Nanno's Foods</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="employeeLogin.php">Nanno's Representative Login <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Vendor Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="aboutUs.php">About Us</a>
            </li>
        </ul>
        <span class="navbar-text">
      Bringing Food to You With Nanno's Foods
    </span>
    </div>
</nav>


<form action="venLogin.php" method="POST">
    <div class="container">
        <label for="vid"><b>Vendor ID</b></label>
        <input type="text" placeholder="Enter VendorID" name="vid" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>

        <button type="submit">Login</button>
    </div>
</form>

<?php
if (isset($_SESSION['error'])) {
    echo '<p class="error"> '.$_SESSION['error'].'</p>';
    unset($_SESSION['error']);
}
?>

</body>
</html>