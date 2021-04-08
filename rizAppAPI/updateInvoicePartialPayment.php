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

 if($headerStringValue == "28b32377-cd77-44b3-8cbb-a9dc69bfddf4") 
 {

$response = array();
 global $data;
// check for required fields
//if (isset($_GET['email']) && isset($_GET['password'])) 
if (isset($jsondata['invoiceId']) && isset($jsondata['AccountId']) && isset($jsondata['Cid'])&& isset($jsondata['Name'])&& isset($jsondata['CreateDate'])&& isset($jsondata['Terms'])&& isset($jsondata['DueDate'])&& isset($jsondata['Items'])&& isset($jsondata['Subtotal'])&& isset($jsondata['Discount'])&& isset($jsondata['Total'])&& isset($jsondata['payments'])&& isset($jsondata['Message'])&& isset($jsondata['Status'])) 
{
   $invoiceId = $jsondata['invoiceId'];
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
	$payments = $jsondata['payments']; 
	$payments = json_encode($payments);   
  
 
    // mysql inserting a new row
	 

    
	$result1 = mysqli_query($con,"DELETE from invoiceitems where Iid='$invoiceId'");
	$result2 = mysqli_query($con,"DELETE from payments where Iid='$invoiceId'");
	$result = mysqli_query($con,"DELETE from invoices where Iid='$invoiceId'");
	
	 $sql = "INSERT INTO invoices(AccountId,Cid,Name,CreateDate,Terms,DueDate,Subtotal,Discount,Total,Message,Status) VALUES ('$AccountId','$Cid','$Name','$CreateDate','$Terms','$DueDate','$Subtotal','$Discount','$Total','$Message','$Status')";
	 $result3 = $con->query($sql);


	//$row = mysqli_fetch_array($result);
    //$data = $row[0];
 
    // check if row inserted or not
    if ($result && $result1 && $result2 && $result3) {
		$someObject = json_decode($Items);
		 $lid =  (string)$con->insert_id;
		 //echo $someObject[0]->Id; 
		 foreach($someObject as $value) {

			 
			 $sql1 = "INSERT INTO invoiceitems(Iid,Itemid,Qty,CostPrice) VALUES ('$lid','$value->Id','$value->Qty','$value->CostPrice')";

	         $result4 = $con->query($sql1);
			
         }
		 $paymentsArray = json_decode($payments);
		 //$lid =  (string)$con->insert_id;
		 //echo $someObject[0]->Id; 
		 foreach($paymentsArray as $value) {
			  $PaidDate = (string) $value->PaidDate;
			  $Paid = (string) $value->Paid;
			 
			 $sql2 = "INSERT INTO tblledger(InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks) VALUES ('$invoiceId','$PaidDate','$Paid','$Cid','1',NULL,'rizwanli',NULL)";

	         $result5 = $con->query($sql2);
			
         }
		  if($result4 && $result5)
			 {
				  $response["success"] = 1;
                  $response["message"] = "Invoice Successfully Created";
                   echo json_encode($response);
				 
			 }
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
}
 else {
	 $response["success"] = 0;
    $response["message"] = "Api Authentication Failed";
 
    // echoing JSON response
    echo json_encode($response);
 }

?>