<?php
$host = "localhost";
$uname = "root";
$pass = "";


$connect = new mysqli($host, $uname, $pass);

if($connect ->connect_error) {
    echo"Cannot connect to MariaDB";
    echo $connect->connect_errno;
    exit();
}
else {
    $sql = "CREATE DATABASE csc423lecture";
    if($connect->query($sql) === TRUE){
        echo "Connection Successful";
    }

    else {

    }
}