<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <title>Employee Menu</title>
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
        </ul>
        <span class="navbar-text">
    Bringing Food to You With Nanno's Foods
    </span>
    </div>
</nav>
<!-- Manage Vendor -->
<div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Manage Vendor
    </button>
    <div class="dropdown-menu">
        <button onclick="location.href='registerVendor.php'" class="dropdown-item" type="button">Register New</button>
        <button onclick="location.href='VendorModify.php'" class="dropdown-item" type="button" >
            Modify Existing</button>
        <button onclick="location.href='deleteVendor.php'" class="dropdown-item" type="button" >Remove Existing</button>
    </div>
    <div class="btn-group">
        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Manage Store
        </button>
        <div class="dropdown-menu">
            <button class="dropdown-item" type="submit" >Add New Store</button>
            <button class="dropdown-item" type="submit" >Modify Existing</button>
            <button class="dropdown-item" type="submit" >Remove Existing</button>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Manage Inventory
            </button>
            <div class="dropdown-menu">
                <button class="dropdown-item" type="submit" >Add New Item</button>
                <button class="dropdown-item" type="submit" >Modify Existing</button>
                <button class="dropdown-item" type="submit" >Remove Existing</button>
                <button class="dropdown-item" type="submit" >Process Delivery</button>
                <button class="dropdown-item" type="submit" >Process Return</button>
            </div>
            <div class="btn-group">
                <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Manage Customer
                </button>
                <div class="dropdown-menu">
                    <button class="dropdown-item" type="submit" >Add New Member</button>
                    <button class="dropdown-item" type="submit" >Modify Member</button>
                    <button class="dropdown-item" type="submit" >Remove Member</button>
                    <button class="dropdown-item" type="submit" >New Purchase</button>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Manage Order
                    </button>
                    <div class="dropdown-menu">
                        <button class="dropdown-item" type="submit" >New Order</button>
                        <button class="dropdown-item" type="submit" >Add to Existing</button>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Look Up
                        </button>
                        <div class="dropdown-menu">
                            <button class="dropdown-item" type="submit" >All Inventory Items</button>
                            <button class="dropdown-item" type="submit" >All Low Items </button>
                            <button class="dropdown-item" type="submit" >All Returns </button>
                            <button class="dropdown-item" type="submit" >Completed Customer Purchase </button>
                            <button class="dropdown-item" type="submit" >Placed Orders</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
if(isset($_SESSION['message'])) {
    echo '<p class="error"> '.$_SESSION['message'].'</p>';
    unset($_SESSION['message']);
}
?>
</body>
</html>