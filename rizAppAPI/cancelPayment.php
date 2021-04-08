<?php
 require 'database.php';
/*
 * Following code will create a new product row
 * All product details are read from HTTP Post Request
 */
 
// array for JSON response
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
 header('Content-Type: application/json');
 if(isset($variable)) {
    $headerStringValue = $_SERVER['HTTP_X_API_KEY'];
 }
 if($headerStringValue == "28b32377-cd77-44b3-8cbb-a9dc69bfddf4") 
 {

    $jsondata = json_decode(file_get_contents('php://input'), true);
$jsondata = json_decode(file_get_contents('php://input'), true);

$response = array();
 global $data;
// check for required fields
//if (isset($_GET['email']) && isset($_GET['password'])) 
if (isset($jsondata['InvoiceID']) && isset($jsondata['Date'])&& isset($jsondata['Amount'])&& isset($jsondata['CustomerID'])&& isset($jsondata['IsCredit'])&& isset($jsondata['Duedate'])&& isset($jsondata['ByUserId'])&& isset($jsondata['Remarks'])) 
{
  
   $InvoiceID = $jsondata['InvoiceID'];
   $Date = $jsondata['Date'];
   $Amount = $jsondata['Amount'];
   $CustomerID = $jsondata['CustomerID'];
   $IsCredit = $jsondata['IsCredit'];
   $Duedate = $jsondata['Duedate'];
   $ByUserId = $jsondata['ByUserId'];
   $Remarks = $jsondata['Remarks'];

   
 
    // mysql inserting a new row
	 

    $result = mysqli_query($con,"INSERT INTO tblledger(InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks) VALUES (NULL,'$Date','$Amount','$CustomerID','$IsCredit',NULL,'$ByUserId',NULL)");
	//$row = mysqli_fetch_array($result);
    //$data = $row[0];
 
    // check if row inserted or not
    if ($result) {
		$response["success"] = 1;
        $response["message"] = "Successfully Added";
 
		
        echo json_encode($response);
    } else {
        // failed to insert row
        $response["success"] = 0;
        $response["message"] = "Failed to add";
 
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