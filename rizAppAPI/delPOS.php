<?php
 require 'database.php';
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
if (isset($jsondata['POSIDS'])) 
{
    $POSIDS = $jsondata['POSIDS']; //$conn->insert_id
	$POSIDS = json_encode($POSIDS);
 
    // mysql inserting a new row
	include 'database.php';
	
	 
    $con = mysqli_connect($db_host, $db_username, $db_password,$db_name) or die(mysql_error());
	 

         $someObject = json_decode($POSIDS);
		 foreach($someObject as $value) {
               $result2 = mysqli_query($con,"DELETE from tblpodetail where Poid='$value->ID'");

	           $result1 = mysqli_query($con,"DELETE from tblpurchasedorder where ID='$value->ID'");
			
         }
    // check if row inserted or not
    if ($result1) {
		$response["success"] = 1;
        $response["message"] = "Items Successfully Synced";
 
		
        echo json_encode($response);
    } else {
        // failed to insert row
        $response["success"] = 0;
        $response["message"] = "Items Failed to Synced";
 
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