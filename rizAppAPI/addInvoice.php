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

    $jsondata = json_decode(file_get_contents('php://input'), true);
//$json  = json_decode($input, true);

$response = array();
 global $data;
// check for required fields
//if (isset($_GET['email']) && isset($_GET['password'])) 
if (isset($jsondata['AccountId']) && isset($jsondata['Cid'])&& isset($jsondata['Name'])&& isset($jsondata['CreateDate'])&& isset($jsondata['Terms'])&& isset($jsondata['DueDate'])&& isset($jsondata['Items'])&& isset($jsondata['Subtotal'])&& isset($jsondata['Discount'])&& isset($jsondata['Total'])&& isset($jsondata['Message'])&& isset($jsondata['Status'])) 
{
    $AccountId = $jsondata['AccountId'];
	$Cid = $jsondata['Cid'];
	$Name = $jsondata['Name'];
	$CreateDate = $jsondata['CreateDate'];
	$Terms = $jsondata['Terms'];
	$DueDate = $jsondata['DueDate'];
	$Subtotal = $jsondata['Subtotal'];
	$Discount = $jsondata['Discount'];
	$Total = $jsondata['Total'];
	$Message = $jsondata['Message'];
	$Status = $jsondata['Status'];
  
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

	 $sql = "INSERT INTO invoices(AccountId,Cid,Name,CreateDate,Terms,DueDate,Subtotal,Discount,Total,Message,Status) VALUES ('$AccountId','$Cid','$Name','$CreateDate','$Terms','$DueDate','$Subtotal','$Discount','$Total','$Message','$Status')";
	 $result = $con->query($sql);

     //$data = $row[0];
 
    // // check if row inserted or not
     if ($result) {
		 $someObject = json_decode($Items);
		 $lid =  (string)$con->insert_id;
		 //echo $someObject[0]->Id; 
		 foreach($someObject as $value) {
			  
			  $itemid = (string) $value->Id;
			  $itemQty = (string) $value->Qty;
			  $CostPrice = (string) $value->CostPrice;
			 
			 $sql1 = "INSERT INTO invoiceitems(Iid,Itemid,Qty,CostPrice) VALUES ('$lid','$itemid','$itemQty','$CostPrice')";

	         $result1 = $con->query($sql1);
			 $sql3 = "UPDATE items SET Instock=Instock-'$itemQty' where itemid='$itemid'";
	         $result3 = $con->query($sql3);
			
			
         }
		  if($result1 && $result3)
			 {
				  $sql2 = "INSERT INTO tblledger(InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks) VALUES ('$lid','$CreateDate','$Total','$Cid','0','$DueDate','rizwanali','$Message')";

	              $result2 = $con->query($sql2);
				  
				   if($result2)
			       {
					   $response["success"] = 1;
                       $response["message"] = "Invoice Successfully Created";
                       echo json_encode($response);
				   }
				  
				 
			 }
		
		
     } else {
        // // failed to insert row
         $response["success"] = 0;
         $response["message"] = "Invoice Failed to add";
 
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