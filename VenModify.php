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
   echo"VendorID: {$row['vendorID']}  <br> ".
        "VendorCode: {$row['VendorCode']} <br> ".
        "VendorName: {$row['VendorName']} <br> ".
        "---------------------------------<br>";
}

echo "Fetched data successfully\n";


mysqli_close($link);
?>
