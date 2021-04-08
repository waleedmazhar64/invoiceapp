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
$sql1 = "CREATE TABLE `clients` (
  `Cid` int(255) NOT NULL,
  `AccountId` varchar(100) NOT NULL,
  `Fname` varchar(255) NOT NULL,
  `Lname` varchar(1000) NOT NULL,
  `Shop` varchar(1000) NOT NULL,
  `BillingAddress` varchar(1000) NOT NULL,
  `City` varchar(1000) NOT NULL,
  `Cell` varchar(1000) NOT NULL,
  `Active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
$sql2 = "CREATE TABLE `accounts` (
  `Rid` int(255) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `AuthID` varchar(1000) NOT NULL,
  `companyName` varchar(1000) NOT NULL,
  `mysql` int(255) NOT NULL,
  `linkage` varchar(1000) NOT NULL,
  `logup` varchar(1000) NOT NULL,
  `bActive` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
$sql3 = "CREATE TABLE `invoiceimages` (
  `Iiid` int(255) NOT NULL,
  `Iid` int(255) NOT NULL,
  `Path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
$sql4 = "CREATE TABLE `invoiceitems` (
  `Iiid` int(255) NOT NULL,
  `Iid` int(255) NOT NULL,
  `Itemid` int(255) NOT NULL,
  `Qty` int(255) NOT NULL,
  `CostPrice` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
$sql5 = "CREATE TABLE `invoices` (
  `Iid` int(255) NOT NULL,
  `AccountId` varchar(1000) NOT NULL,
  `Cid` int(255) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `CreateDate` varchar(100) NOT NULL,
  `Terms` varchar(1000) NOT NULL,
  `DueDate` varchar(1000) NOT NULL,
  `Subtotal` varchar(1000) NOT NULL,
  `Discount` int(255) NOT NULL,
  `Total` int(255) NOT NULL,
  `Message` varchar(1000) NOT NULL,
  `Status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
$sql6 = "CREATE TABLE `items` (
  `itemid` int(255) NOT NULL,
  `AccountId` varchar(1000) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `Rate` int(255) NOT NULL,
  `Cost` int(100) NOT NULL,
  `Instock` int(255) NOT NULL,
  `Active` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
$sql7 = "CREATE TABLE `payments` (
  `Pid` int(255) NOT NULL,
  `Iid` int(255) NOT NULL,
  `Date` varchar(255) NOT NULL,
  `Payment` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
$sql8 = "CREATE TABLE `tblledger` (
  `ID` int(255) NOT NULL,
  `InvoiceID` int(255) DEFAULT NULL,
  `Date` date NOT NULL,
  `Amount` int(100) NOT NULL,
  `CustomerID` varchar(1000) NOT NULL,
  `IsCredit` tinyint(1) NOT NULL,
  `Duedate` date DEFAULT NULL,
  `ByUserId` varchar(1000) NOT NULL,
  `Remarks` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
$sql9 = "CREATE TABLE `tblledgervendor` (
  `ID` int(255) NOT NULL,
  `POID` int(255) DEFAULT NULL,
  `Date` date NOT NULL,
  `Amount` int(100) NOT NULL,
  `VendorID` varchar(1000) NOT NULL,
  `IsCredit` tinyint(1) NOT NULL,
  `Duedate` date DEFAULT NULL,
  `ByUserId` varchar(1000) NOT NULL,
  `Remarks` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
$sql10 = "CREATE TABLE `tblledgerzzz` (
  `ID` int(255) NOT NULL,
  `InvoiceID` int(255) DEFAULT NULL,
  `Date` date NOT NULL,
  `Amount` int(100) NOT NULL,
  `CustomerID` varchar(1000) NOT NULL,
  `IsCredit` tinyint(1) NOT NULL,
  `Duedate` date DEFAULT NULL,
  `ByUserId` varchar(1000) NOT NULL,
  `Remarks` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;";
$sql13 = "CREATE TABLE `tbllogs` (
  `ID` int(255) NOT NULL,
  `tableName` varchar(1000) NOT NULL,
  `tableId` int(255) NOT NULL,
  `userId` int(255) NOT NULL,
  `actionType` varchar(1000) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `dated` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;";



 


// $result = $conn->query($sql);
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
$result13 = $conn->query($sql13);

        $temp = 1;
    // check if row inserted or not
    if ($temp = 1 ) { //   $result1 &&$result2 && $result3 &&$result4 && $result5 &&$result6&& $result7 &&$result8 && $result9 &&$result10
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