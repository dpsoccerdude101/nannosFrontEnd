
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
    <title>Employee Login</title>

    <style>
        body {
            background-image: url('landing.jpg');
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
                <a class="nav-link" href="#">Nanno's Representative Login <span class="sr-only">(current)</span></a>
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
</nav>

<!-- Manage Vendor -->
<div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Manage Vendor
    </button>
    <div class="dropdown-menu">
        <a class="dropdown-item"  href="registerVendor.php">Register New</a>
        <a class="dropdown-item" href="VendorModify.php"  >Modify Existing</a>
        <a class="dropdown-item" href="deleteVendor.php" >Remove Existing</a>
    </div>

    <div class="btn-group">
        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Manage Store
        </button>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="AddNewStore.php" >Add New Store</a>
            <a class="dropdown-item"  href="modifyStore.php">Modify Existing</a>
            <a class="dropdown-item"  href="deleteVendor.php">Remove Store</a>
        </div>
        <div class="btn-group">
            <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Manage Inventory
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="InventoryAdd.php" >Add New Item</a>
                <a class="dropdown-item" href="InventoryModify.php" >Modify Existing</a>
                <a class="dropdown-item" href="InventoryDelete.php" >Remove Existing</a>
                <a class="dropdown-item" href="processDelivery.php" >Process Delivery</a>
                <a class="dropdown-item" href="processReturn.php" >Process Return</a>
            </div>
            <div class="btn-group">
                <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Manage Customer
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="CustomerAdd.php" >Add New Member</a>
                    <a class="dropdown-item" href="CustomerModify.php" >Modify Member</a>
                    <a class="dropdown-item" href="CustomerDelete.php" >Remove Member</a>
                    <a class="dropdown-item" href="CustomerNewPurchase.php" >New Purchase</a>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Manage Order
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="OrderCreate.php" >New Order</a>
                        <a class="dropdown-item" href="OrderAdd.php" >Add to Existing</a>

                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Look Up
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="LookUpAllinv.php" >All Inventory Items</a>
                            <a class="dropdown-item" href="LookupLowInv.php" >All Low Items </a>
                            <a class="dropdown-item" href="LookUpReturns.php" >All Returns </a>
                            <a class="dropdown-item" href="LookUpCustPurchase.php" >Completed Customer Purchase </a>
                            <a class="dropdown-item" href="LookUpOrders.php" >Paced Orders</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
