<?php
$servername = "localhost";
$database = "mercado";
$username = "root";
$password = "9970";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
}
 
echo "Connected successfully";
 
$sql = "SELECT * FROM produtos";
if (mysqli_query($conn, $sql)) {
    echo $sql;
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>