<?php
session_start();
require 'database.php';
$username = trim($_POST['uname']);
$password = trim($_POST['psw']);
$Error = "Incorrect username or password.";


$link = mysqli_connect("localhost", "root", "xXT@jyY2yg3P", "nannos_foods");

$query = "SELECT * FROM login";

$result = mysqli_query($link, $query);
$rows = mysqli_num_rows($result);
$count = 1;

if ($rows > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        if ($username == $row["Username"] && $password == $row["Password"]) {

            header("Location: SelectMenu.php");

        } else {
            $count = $count + 1;
        }
            //$_SESSION['error'] = $Error;
            //header("Location: employeeLogin.php");
        }
    }
if($count > $rows){
    $_SESSION['error'] = $Error;
    header("Location: employeeLogin.php");

}
    mysqli_close($link);