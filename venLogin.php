<?php
session_start();
$vendorid = trim($_POST['vid']);
$password = trim($_POST['psw']);
$Error = "Incorrect ID or Password";

$link = mysqli_connect("localhost", "root", "xXT@jyY2yg3P", "nannos_foods");

$query = "SELECT * FROM vendor";

$result = mysqli_query($link, $query);
$count = 1;
$rows = mysqli_num_rows($result);

if ($rows > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        if ($vendorid == $row["VendorCode"] && $password == $row["Password"])
            header("Location: success.php");

        else {
            $count = $count + 1;
        }
    }
}
if($count > $rows){
    $_SESSION['error'] = $Error;
    header("Location: vendorLogin.php");
}

mysqli_close($link);
