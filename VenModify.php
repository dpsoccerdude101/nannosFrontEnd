<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
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
<?php
session_start();
#error_reporting( error_reporting() & ~E_NOTICE );
$vID = (int)$_POST['VenID'];
$VName = trim($_POST['VenName']);
$Error = "No Matching Vendors";

$link = mysqli_connect("localhost", "root", null, "nannos_foods");

$query = "SELECT * FROM vendor where VendorID='$vID'";

$result = mysqli_query($link, $query);
$rows = mysqli_num_rows($result);


if(! $result ) {
    die('Could not get data: ' .mysqli_error());
}
#else{
   # header("Location: vendorModify2.php");
#}

while($row = mysqli_fetch_assoc($result)) {
   echo"VendorID: {$row['VendorID']}  <br> ".
        "VendorCode: {$row['VendorCode']} <br> ".
        "Fetched data successfully<br>".
        "---------------------------------<br>";

    echo "<div class='w-25 p-3'>
        <form action='#' method='POST'>
        <label for='vid'><b>Vendor ID</b></label>
        <input class='form-control' margin-right='500px' type='text' placeholder='Enter VendorName' name='vname' value='{$row['VendorName']}' required><br>
        <label for='address'><b>Address</b></label>
        <input class = 'form-control' type='text' placeholder='Enter Address' name='address' value='{$row['Address']}' required><br>
        <label for='city'><b>City</b></label>
        <input class = 'form-control' type='text' placeholder='Enter City' name='city' value='{$row['City']}' required><br>
        <label for='zip'><b>Zip</b></label>
        <input class='form-control' type='text' placeholder='Enter Zip' name='zip' value='{$row['Zip']}' required><br>
        <label for='phone'><b>Phone</b></label>
        <input class='form-control' type='text' placeholder='Enter Phone' name='phone' value='{$row['Phone']}' required><br>
        <label for='contactname'><b>Contact Name</b></label>
        <input class='form-control' type='text' placeholder='Enter ContactName' name='contactname' value='{$row['ContactName']}' required><br>
        <button class='btn btn-primary' type='submit'>Update</button>
    </form></div>";
}



mysqli_close($link);
?>
