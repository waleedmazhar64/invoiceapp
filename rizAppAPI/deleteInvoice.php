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

$response = array();
 global $data;
// check for required fields
//if (isset($_GET['email']) && isset($_GET['password'])) 
if (isset($jsondata['invoiceId'])) 
{
   $invoiceId = $jsondata['invoiceId'];	
  
 
    // mysql inserting a new row

    
	$result1 = mysqli_query($con,"DELETE from invoiceitems where Iid='$invoiceId'");
	$result2 = mysqli_query($con,"DELETE from payments where Iid='$invoiceId'");
	$result = mysqli_query($con,"DELETE from invoices where Iid='$invoiceId'");


	//$row = mysqli_fetch_array($result);
    //$data = $row[0];
 
    // check if row inserted or not
    if ($result && $result1 && $result2) {
		$response["success"] = 1;
        $response["message"] = "Invoice Successfully Deleted";
 
		
        echo json_encode($response);
    } else {
        // failed to insert row
        $response["success"] = 0;
        $response["message"] = "Item Failed to deactive";
 
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