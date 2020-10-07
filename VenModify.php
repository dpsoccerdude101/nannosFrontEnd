<?php
session_start();
$vendorid = trim($_POST['VID']);
$VendorName = trim($_POST['VName']);
$Error = "No Matching Vendors";

$link = mysqli_connect("localhost", "root", null, "nannos_foods");

$query = "SELECT * FROM vendors";

$result = mysqli_query($link, $query);
$count = 1;
$rows = mysqli_num_rows($result);

if ($rows > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        if ($vendorid == $row["VendorId"] || $VendorName == $row["VendorName"])
            header("Location: success.php");

        else {
            header("Location: vendorModify.php");
            echo "$Error";
        }
    }
}


mysqli_close($link);
