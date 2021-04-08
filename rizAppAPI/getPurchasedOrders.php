
<?php
$headerStringValue = $_SERVER['HTTP_X_API_KEY'];
 $match = false;
 if($headerStringValue == "28b32377-cd77-44b3-8cbb-a9dc69bfddf4") 
{

//$Poid = $_GET['Poid'];


global $json;


// Create connection
 include 'database.php';
	echo $db_host; 
     echo $db_name; 
     echo $db_username; 
     echo $db_password; 
	 
    $conn = mysqli_connect($db_host, $db_username, $db_password,$db_name) or die(mysql_error());

if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 
//

 $sql = "Select tblpurchasedorder.ID,tblpurchasedorder.VendorID,tblpurchasedorder.Date,tblpurchasedorder.ReceivedBy,tblpurchasedorder.Total,tblpurchasedorder.Remarks,tblpurchasedorder.Discount,tblvendors.Name,tblvendors.Address,tblvendors.Phone,tblvendors.Email,tblvendors.bActive from tblpurchasedorder,tblvendors WHERE
   tblpurchasedorder.VendorID=tblvendors.ID";
   // $sql1 = "Select tblpurchasedorder.VendorID,tblpurchasedorder.Date,tblpurchasedorder.ReceivedBy,tblpurchasedorder.Total,tblpurchasedorder.Remarks,tblvendors.Name,tblvendors.Address,tblvendors.Phone,tblvendors.Email,tblvendors.bActive,items.Description,tblpodetail.Qty,tblpodetail.CostPrice from tblpurchasedorder,tblvendors,items,tblpodetail
     // WHERE
    // tblpurchasedorder.VendorID=tblvendors.ID 
	// AND
	// items.itemid=tblpodetail.ItemID";
  $sql2 = "Select tblpurchasedorder.ID As Poid,items.Description,tblpodetail.ItemID As Id,tblpodetail.Qty,tblpodetail.CostPrice from tblpurchasedorder,items,tblpodetail WHERE
    tblpurchasedorder.ID=tblpodetail.Poid AND
    items.itemid=tblpodetail.ItemID";




$result = $conn->query($sql);
// $result1 = $conn->query($sql1);
 $result2 = $conn->query($sql2);

 if ($result && $result2) {//&& $result1 && $result2
 
  while($row[] = $result->fetch_assoc()) {


             $response["success"] = 1;
			 $response["Po"] = $row;

			 $json = json_encode($response);

 
 
 }
   // while($row1[] = $result1->fetch_assoc()) {


             // $response["success"] = 1;
			 // $response["payments"] = $row1;

			 // $json = json_encode($response);

 
 
  // }
   while($row2[] = $result2->fetch_assoc()) {

             
              $response["success"] = 1;
			  $response["items"] = $row2;

			  $json = json_encode($response);

 
 
   }
}
 else {
	 $response["success"] = 0;
			//$response["inf0"] = $row;
			$json = json_encode($response);
// echo "No Results Found.";
}
 echo $json;

 
 }
 else {
	 
	$response["success"] = 0;
    $response["message"] = "Api Authentication Failed";
 
    // echoing JSON response
    echo json_encode($response);
 }
?>