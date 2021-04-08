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

$response = array();
 global $data;
 

// check for required fields
//if (isset($_GET['email']) && isset($_GET['password'])) 
if (isset($jsondata['AccountId']) && isset($jsondata['Fname'])&& isset($jsondata['Lname'])&& isset($jsondata['Shop'])&& isset($jsondata['BillingAddress'])&& isset($jsondata['City'])&& isset($jsondata['Cell'])) 
{
  
   $AccountId = $jsondata['AccountId'];
   $Fname = $jsondata['Fname'];
   $Lname = $jsondata['Lname'];
   $Shop = $jsondata['Shop'];
   $BillingAddress = $jsondata['BillingAddress'];
   $City = $jsondata['City'];
   $Cell = $jsondata['Cell'];
   //$UserId =$jsondata['UserId'];
   //$Dated=$jsondata['Dated'];
 
    // mysql inserting a new row
	include 'database.php';
	echo $db_host; 
     echo $db_name; 
     echo $db_username; 
     echo $db_password; 
	 
    $con = mysqli_connect($db_host, $db_username, $db_password,$db_name) or die(mysql_error());
	 
   $result = mysqli_query($con,"INSERT INTO clients(AccountId,Fname,Lname,Shop,BillingAddress,City,Cell,Active) VALUES ('$AccountId','$Fname','$Lname','$Shop','$BillingAddress','$City','$Cell','1')");
	 
	//$row = mysqli_fetch_array($result);
    //$data = $row[0];
      echo $result;
    // check if row inserted or not
    if ($result) {
		//$Cid =  (string)$con->insert_id;
		//echo $Cid;
		//$result1 = mysqli_query($con,"INSERT INTO tblLogs(tableName,tableId,userId,actionType,dated) VALUES ('clients','$Cid','$UserId','add','$Dated')");
		$response["success"] = 1;
        $response["message"] = "Client Successfully Created";
 
		
        echo json_encode($response);
    } else {
        // failed to insert row
        $response["success"] = 0;
        $response["message"] = "Client Failed to add";
 
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

?>