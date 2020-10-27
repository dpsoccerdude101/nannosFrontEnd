<?php
session_start();
require 'database.php';
// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);
//echo $json;
//echo $data;
 //$username = trim($_POST['uname']);
//$username = $data->uname;
 //$password = trim($_POST['psw']);
//$password = $data->psw;
$Error = "Incorrect username or password.";


$link = mysqli_connect("localhost", "root", "xXT@jyY2yg3P", "nannos_foods");

$query = "SELECT * FROM login";

$result = mysqli_query($link, $query);
$rows = mysqli_num_rows($result);
$count = 1;

if ($rows > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        if ($data->uname == $row["Username"] && $data->psw == $row["Password"]) {
            $success = '{"login": "success"}';
            header('Content-Type: application/json, Access-Control-Allow-Origin : *');
            echo json_encode($success);
        } else {
            $count = $count + 1;
        }
            //$_SESSION['error'] = $Error;
            //header("Location: employeeLogin.php");
        }
    }

if($count > $rows){
$_SESSION['error'] = $Error;
$success = '{"login": "failure"}';
header('Content-Type: application/json, Access-Control-Allow-Origin" : *, Access-Control-Allow-Credentials : true');
echo json_encode($success);
}
    mysqli_close($link);