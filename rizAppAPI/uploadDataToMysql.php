
<?php
require 'database.php';
 header("Access-Control-Allow-Origin: *");

if (isset($_GET['email']) &&isset($_GET['AuthID']) &&isset($_GET['companyName']) &&isset($_GET['mysql'])&&isset($_GET['linkage'])&&isset($_GET['logup'])&&isset($_GET['bActive']))
{

$email = $_GET['email'];
$AuthID = $_GET['AuthID'];
$companyName = $_GET['companyName'];
$mysql = $_GET['mysql'];
$linkage = $_GET['linkage'];
$logup = $_GET['logup'];
$bActive = $_GET['bActive'];

global $json;


// Create connection

if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 
$sql = "INSERT INTO accounts(email,AuthID,companyName,mysql,linkage,logup,bActive) VALUES ('$email','$AuthID','$companyName','$mysql','$linkage','$logup','$bActive')";

$result = $conn->query($sql);


if ($result) {
	
	$response["success"] = 1;
	$response["message"] = "Data Successfully Update";
	echo json_encode($response);
	
 
}
 else {
 echo "No Results Found.";
}
	

// echo $json;
$conn->close();
}
?>