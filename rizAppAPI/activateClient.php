<?php
 
/*
 * Following code will create a new product row
 * All product details are read from HTTP Post Request
 */
 
// array for JSON response
 //header("Access-Control-Allow-Origin: *");
 // header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 // header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
$jsondata = json_decode(file_get_contents('php://input'), true);
 $headerStringValue = $_SERVER['HTTP_X_API_KEY'];
 $match = false;
 if($headerStringValue == "28b32377-cd77-44b3-8cbb-a9dc69bfddf4") 
 {
$response = array();
 global $data;
// check for required fields
//if (isset($_GET['email']) && isset($_GET['password'])) 
if (isset($jsondata['Cid'])) 
{
   $Cid = $jsondata['Cid'];	
  //"mysql5022.site4now.net", "9b08a4_rizapp", "Pak_9381","db_9b08a4_rizapp"
 
    // mysql inserting a new row
	include 'database.php';
	echo $db_host; 
    echo $db_name; 
    echo $db_username; 
    echo $db_password; 
	 
    $con = mysqli_connect($db_host, $db_username, $db_password,$db_name) or die(mysql_error());

    $result = mysqli_query($con,"UPDATE clients SET Active='1' where Cid='$Cid'");
	//$row = mysqli_fetch_array($result);
    //$data = $row[0];
 
    // check if row inserted or not
    if ($result) {
		$response["success"] = 1;
        $response["message"] = "Client Successfully Activated";
 
		
        echo json_encode($response);
    } else {
        // failed to insert row
        $response["success"] = 0;
        $response["message"] = "Client Failed to activate";
 
        // echoing JSON response
        echo json_encode($response);
    }
} else {
    // required field is missing
    $response["success"] = 0;
    $response["message"] = "Required field(s) is missing";
 
    // echoing JSON response
    echo json_encode($response);
}
 }
 else {
	 
	$response["success"] = 0;
    $response["message"] = "Api Authentication Failed";
 
    // echoing JSON response
    echo json_encode($response);
 }

?>