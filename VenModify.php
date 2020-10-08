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
        "VendorName: {$row['VendorName']} <br> ".
        "---------------------------------<br>";
    echo "<form action='#' method='POST'>
        <label for='vid'><b>Vendor ID</b></label>
        <input type='text' placeholder='Enter VendorName' name='vname' value='{$row['VendorName']}' required><br>
        <label for='address'><b>Address</b></label>
        <input type='text' placeholder='Enter Address' name='address' value='{$row['Address']}' required><br>
        <label for='city'><b>City</b></label>
        <input type='text' placeholder='Enter City' name='city' value='{$row['City']}' required><br>
        <label for='zip'><b>Zip</b></label>
        <input type='text' placeholder='Enter Zip' name='zip' value='{$row['Zip']}' required><br>
        <label for='phone'><b>Phone</b></label>
        <input type='text' placeholder='Enter Phone' name='phone' value='{$row['Phone']}' required><br>
        <label for='contactname'><b>Contact Name</b></label>
        <input type='text' placeholder='Enter ContactName' name='contactname' value='{$row['ContactName']}' required><br>
        <button type='submit'>Update</button>
    </form>";
}


echo "Fetched data successfully\n";


mysqli_close($link);
?>
