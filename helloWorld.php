<html>
<head>
    <title>PHP Test</title>
</head>
<body>
<?php echo '<p>Hello World</p>'; //php supports one line comments like this

/*It will also support multi-line comments
    like this .
    It appears to me that the comments
    must be inside the PHP tags or it will be
    output as HTML*/

//Creating a work branch for myself.
//Adding comments for fun now.

//Adding another comment because I want to change my commit comment.

//I believe we have to leave out workspace.xml or everything will be screwy.
?>

<?= "I'm Short echo tag"; ?>

<?php
require 'database.php';

$query = "SELECT * FROM 'login'";
//I am going to attempt to connect to mySQL server on XAMPP.
    if(array_key_exists('Submit', $_POST)) {
    Submit();
    }
function Submit()
{
    echo "This is Button1 that is selected";
}?>

<form method="post">
    <label for="user">Username:</label><br>
    <input type="text" id="user" name="user"><br>
    <label for="pword">Password:</label><br>
    <input type="text" id="pword" name="pword">
    <input type="submit" name="Submit"
           class="button" value="Submit" />



</body>
</html>