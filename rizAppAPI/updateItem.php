<?php
 
/*
 * Following code will create a new product row
 * All product details are read from HTTP Post Request
 */
 
// array for JSON response
 //header("Access-Control-Allow-Origin: *");
 // header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 // header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
 header('Content-Type: application/json');
$jsondata = json_decode(file_get_contents('php://input'), true);
$headerStringValue = $_SERVER['HTTP_X_API_KEY'];
 $match = false;
 if($headerStringValue == "28b32377-cd77-44b3-8cbb-a9dc69bfddf4") 
 {

$response = array();
 global $data;
// check for required fields
//if (isset($_GET['email']) && isset($_GET['password'])) 
if (isset($jsondata['itemid']) && isset($jsondata['Description'])&& isset($jsondata['Rate'])&& isset($jsondata['Cost'])&& isset($jsondata['Active'])) 
{
   $itemid = $jsondata['itemid'];	
   $Description = $jsondata['Description'];
   $Rate = $jsondata['Rate'];
   $Cost = $jsondata['Cost'];
 
    // include db connect class
   // require_once __DIR__ . '/db_connect.php';
 
    // connecting to db
   // $db = new DB_CONNECT();
 
    // mysql inserting a new row
	 include 'database.php';
	echo $db_host; 
     echo $db_name; 
     echo $db_username; 
     echo $db_password; 
	 
    $con = mysqli_connect($db_host, $db_username, $db_password,$db_name) or die(mysql_error());

    $result = mysqli_query($con,"UPDATE items SET Description='$Description',Rate='$Rate',Cost='$Cost' where itemid='$itemid'");
	//$row = mysqli_fetch_array($result);
    //$data = $row[0];
 
    // check if row inserted or not
    if ($result) {
		$response["success"] = 1;
        $response["message"] = "Item Successfully Updated";
 
		
        echo json_encode($response);
    } else {
        // failed to insert row
        $response["success"] = 0;
        $response["message"] = "Item Failed to update";
 
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