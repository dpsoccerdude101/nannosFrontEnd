<!DOCTYPE html>
<html lang="en">
<head>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <title> Nanno's Foods </title>
    <style>
        body {
            background-image: url('healthy-food.jpg');
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
<!-- Nav Bar Creation-->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Nanno's Foods</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
            <!-- Put something here -->
        </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="employeeLogin.php">Nanno's Representative Login <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="vendorLogin.php">Vendor Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
            </li>
        </ul>
        <span class="navbar-text">
      Bringing Food to You With Nanno's Foods
    </span>
    </div>
</nav> <br><br><br><br>
<!-- End Nav Bar -->
<!-- Jumbotron -->
<div style="background:transparent !important" class="jumbotron">
    <h1 class="display-4">Welcome to Nanno's Foods!</h1>
    <p class="lead">Nanno's Foods is a family owned grocery store with an abundant selection of foods and other products.</p>
    <hr class="my-4">
    <p> Click the button below to learn more about our store </p>
    <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
</div>
<!-- End Jumbotron -->
</body>
</html>