<?php
    //Using some code I found on the internet to attempt to connect to mySQL server
    //On XAMPP using PHP, potentially logging in using the "login" table I created.

// this php script is for connecting with database
// data have to fetched from local server
$mysql_host = 'localhost';

// user name is root
$mysql_user = 'root';

$mysql_db = 'nannos_foods';

// function to connect with database having
// argument host and user name
if (!@mysqli_connect ($mysql_host, $mysql_user))
{
    die('Cannot connect to database 1');
}
else
{
    // database name is nannos_foods
    if (@mysqli_connect($mysql_host, $mysql_user, null, $mysql_db))
    {
        echo "Connected to the nannos_foods database";
    }
    else
    {
        die('Cannot connect to database 2');
    }
}
?>
