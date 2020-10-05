<?php
    //Using some code I found on the internet to attempt to connect to mySQL server
    //On XAMPP using PHP, potentially logging in using the "login" table I created.

// this php script is for connecting with database
// data have to fetched from local server
$mysql_host = 'localhost';

// user name is root
$mysql_user = 'root';

$mysql_db = 'nannos_foods';

$link = mysqli_connect("localhost", "root", null, "nannos_foods");

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
