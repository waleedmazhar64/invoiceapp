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
if (isset($jsondata['Items'])) 
{
   $Items = $jsondata['Items']; //$conn->insert_id
	$Items = json_encode($Items);
  
 
    // mysql inserting a new row
	 	         $con = mysqli_connect($db_host, $db_username, $db_password,$db_name) or die(mysql_error());


         $someObject = json_decode($Items);
		 foreach($someObject as $value) {

			 
			 $sql1 = "UPDATE items SET Description='$value->Description',Rate='$value->Rate',Cost='$value->Cost',Instock='$value->Instock',Active='$value->Active' where itemid='$value->itemid'";

	         $result4 = $con->query($sql1);
			
         }
    // check if row inserted or not
    if ($result4) {
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