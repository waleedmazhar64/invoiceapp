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

//$json  = json_decode($input, true);

$response = array();
 global $data;
// check for required fields
//if (isset($_GET['email']) && isset($_GET['password'])) 
if (isset($jsondata['PoId']) && isset($jsondata['VendorID']) && isset($jsondata['Date'])&& isset($jsondata['ReceivedBy'])&& isset($jsondata['Total'])&&  isset($jsondata['Remarks'])&&  isset($jsondata['Discount'])&& isset($jsondata['Items'])) 
{
	$PoId = $jsondata['PoId'];
    $VendorID = $jsondata['VendorID'];
	$Date = $jsondata['Date'];
	$ReceivedBy = $jsondata['ReceivedBy'];
	$Total = $jsondata['Total'];
	$Remarks = $jsondata['Remarks'];
	$Discount = $jsondata['Discount'];

  
    $Items = $jsondata['Items']; //$conn->insert_id
	$Items = json_encode($Items);
	
  // Convert JSON string to Object
   $someObject = json_decode($Items);
   
  // print_r($someObject);     
   //  echo $someObject[0]->Id; 

      include 'database.php';
	echo $db_host; 
     echo $db_name; 
     echo $db_username; 
     echo $db_password; 
	 
    $con = mysqli_connect($db_host, $db_username, $db_password,$db_name) or die(mysql_error());

	 $result2 = mysqli_query($con,"DELETE from tblpodetail where Poid='$PoId'");

	 $result1 = mysqli_query($con,"DELETE from tblpurchasedorder where ID='$PoId'");
	 $sql = "INSERT INTO tblpurchasedorder(VendorID,Date,ReceivedBy,Total,Remarks,Discount) VALUES ('$VendorID','$Date','$ReceivedBy','$Total','$Remarks','$Discount')";
	 $result = $con->query($sql);

     //$data = $row[0];
 
    // // check if row inserted or not
     if ($result && $result2 && $result1) {
		 $someObject = json_decode($Items);
		 $Poid =  (string)$con->insert_id;
		 //echo $someObject[0]->Id; 
		 foreach($someObject as $value) {
			  
			  $ItemID = (string) $value->Id;
			  $Qty = (string) $value->Qty;
			  $CostPrice = (string) $value->CostPrice;
			  $stock = (string) $value->stock;
			 
			 $sql1 = "INSERT INTO tblpodetail(Poid,ItemID,Qty,CostPrice) VALUES ('$Poid','$ItemID','$Qty','$CostPrice')";

	         $result1 = $con->query($sql1);
			 if($stock>0) {
				  $sql3 = "UPDATE items SET Instock=Instock +'$stock' where itemid='$ItemID'";
	              $result3 = $con->query($sql3);
			 } 
			 if ($stock>0) {
			 }
			 else {
				 $sql3 = "UPDATE items SET Instock=Instock +'$stock' where itemid='$ItemID'";
	             $result3 = $con->query($sql3);
				 
			 }
			
         }
		  if($result1)
			 {
				  $response["success"] = 1;
                  $response["message"] = "Purchase Order Successfully Updated";
                   echo json_encode($response);
				 
			 }
		
		
     } else {
        // // failed to insert row
         $response["success"] = 0;
         $response["message"] = "Purchase Order Failed to add";
 
        // // echoing JSON response
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