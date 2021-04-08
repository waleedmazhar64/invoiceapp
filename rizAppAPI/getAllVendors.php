
<?php

global $json;
    $jsondata = json_decode(file_get_contents('php://input'), true);

$headerStringValue = $_SERVER['HTTP_X_API_KEY'];
 $match = false;
 if($headerStringValue == "28b32377-cd77-44b3-8cbb-a9dc69bfddf4") 
 {
// Create connection

	 include 'database.php';
	echo $db_host; 
     echo $db_name; 
     echo $db_username; 
     echo $db_password; 
	 
    $conn = mysqli_connect($db_host, $db_username, $db_password,$db_name) or die(mysql_error());

if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 
//

$sql = "Select * from tblvendors";//by id descBY id DESC




$result = $conn->query($sql);

//if ($result->num_rows >0) {
 if ($result) {
 
 while($row[] = $result->fetch_assoc()) {
 //$row1 = mysqli_fetch_array($result1);
 
            $response["success"] = 1;
			$response["vendors"] = $row;
			
			//$response["orderid"] = $row[1][2];
			$json = json_encode($response);
 //$tem = $row;
 
 //$json = json_encode($tem);
 
 
 }
 
}
 else {
	 $response["success"] = 0;
			//$response["inf0"] = $row;
			$json = json_encode($response);
// echo "No Results Found.";
}
 echo $json;
  }
 else {
	 
	$response["success"] = 0;
    $response["message"] = "Api Authentication Failed";
 
    // echoing JSON response
    echo json_encode($response);
 }

?>