<?php
session_start();
error_reporting( error_reporting() & ~E_NOTICE );

$link = mysqli_connect("localhost", "root", null, "nannos_foods");
$success = "Successfully Updated";
$failure = "Successfully Updated";


    $Vi= (int)$_POST["vid"];
    $Vn= $_POST["vname"];
    $Va= $_POST["address"];
    $Vc= $_POST["city"];
    $Vz= (int)$_POST["zip"];
    $Vp= (int)$_POST["phone"];
    $Vcn= $_POST["contactname"];

    $queryUp = "  UPDATE vendor SET VendorName= '$Vn',Address='$Va',City='$Vc',Zip='$Vz',Phone='$Vp',ContactName='$Vcn' WHERE VendorID='$Vi' ";


$result = mysqli_query($link, $queryUp);

if($result == true){
    $_SESSION['message'] = $success;
    header("Location: employeeMenu.php");
}
else{
    $_SESSION['message'] = $failure;
    header("Location: employeeMenu.php");
}

#echo "Fetched data successfully\n";


mysqli_close($link);
?>
