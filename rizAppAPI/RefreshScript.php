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
	 if (isset($jsondata['Vendors']) && isset($jsondata['Items'])) 
{
    $Vendors = $jsondata['Vendors']; //$conn->insert_id
	$Vendors = json_encode($Vendors);
	$Items = $jsondata['Items']; //$conn->insert_id
	$Items = json_encode($Items);
	// $Clients = $jsondata['Clients']; //$conn->insert_id
	// $Clients = json_encode($Clients);

 $response = array();
 global $data;

    // mysql inserting a new row
include 'database.php';
	echo $db_host; 
     echo $db_name; 
     echo $db_username; 
     echo $db_password; 
	 
    $conn = mysqli_connect($db_host, $db_username, $db_password,$db_name) or die(mysql_error());// $sql = "DELETE from clients";
$sql1 = "DELETE from invoiceitems";
$sql2 = "DELETE from invoices";
$sql3 = "DELETE from tblpodetail";
$sql4 = "DELETE from tblpurchasedorder";
$sql5 = "DELETE from tblledger";
$sql6 = "DELETE from tblvendors";
$sql7 = "DELETE from items";
$sql8 = "DELETE from clients";
$sql9 = "DELETE from tblledgervendor";
$sql10 = "DELETE from tbllogs";
$sql13 = "DELETE from tblexpenses";


 


// $result = $conn->query($sql);
$result13 = $conn->query($sql13);
$result1 = $conn->query($sql1);
$result2 = $conn->query($sql2);
$result3 = $conn->query($sql3);
$result4 = $conn->query($sql4);
$result5 = $conn->query($sql5);
$result6 = $conn->query($sql6);
$result7 = $conn->query($sql7);
$result8 = $conn->query($sql8);
$result9 = $conn->query($sql9);
$result10 = $conn->query($sql10);

        
    // check if row inserted or not
    if ( $result1 &&$result2 && $result3 &&$result4 && $result5 &&$result6&& $result7 &&$result8 && $result9 &&$result10&&$result13) { //   
	     $count = 0;
	     $someObject = json_decode($Vendors);
		  foreach($someObject as $value) {
			  $count = $count + 1;
			  $sql11 = "INSERT INTO tblvendors(ID,Name,Address,Phone,Email,bActive) VALUES ('$count','$value->Name','$value->Address','$value->Phone','$value->Email','1')";
			  $result11 = $conn->query($sql11);


		  }
		  $count1 = 0;
		   $someObject1 = json_decode($Items);
		  foreach($someObject1 as $value) {
			   $count1 = $count1 + 1;
			  $sql12 = "INSERT INTO items(itemid,AccountId,Description,Rate,Cost,Active) VALUES ('$count1','$value->AccountId','$value->Description','$value->Rate','$value->Cost','1')";
			  $result12 = $conn->query($sql12);
			  


		  }
		  // $someObject1 = json_decode($Clients);
		  // foreach($someObject1 as $value) {
			   // $count1 = $count1 + 1;
			  // $sql12 = "INSERT INTO items(itemid,AccountId,Description,Rate,Cost,Active) VALUES ('$count1','$value->AccountId','$value->Description','$value->Rate','$value->Cost','1')";
			  // $result12 = $conn->query($sql12);
			  


		  // }
	
		$response["success"] = 1;
        $response["message"] = "Database Successfully Refreshed";
 
		
        echo json_encode($response);
    } else {
        // failed to insert row
        $response["success"] = 0;
        $response["message"] = "Database Failed to Refresh";
 
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