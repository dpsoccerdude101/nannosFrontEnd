<?php
require 'database.php'; //I may not need this. I can't figure out if this is attainable. If not - the database would have many connections...
$username = trim($_POST['uname']);
$password = trim($_POST['psw']);

$link = mysqli_connect("localhost", "root", null, "nannos_foods");

$query = "SELECT * FROM login";

$result = mysqli_query($link, $query);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        if($username == $row["Username"] && $password == $row["Password"])
            header("Location: success.html");
        echo "Name: " . $row["Username"] . " " . $row["Password"] . "<br>";
     }
    }else {
        echo "0 results";
    }

    mysqli_close($link);