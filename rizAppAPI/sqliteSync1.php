
<?php
$headerStringValue = $_SERVER['HTTP_X_API_KEY'];
 $match = false;
 if($headerStringValue == "28b32377-cd77-44b3-8cbb-a9dc69bfddf4") 
 {
if (isset($_GET['AccountId']))
{

$AccountId = $_GET['AccountId'];


global $json;


include 'database.php';
	// echo $db_host; 
    // echo $db_name; 
    // echo $db_username; 
    // echo $db_password; 
	 
    $conn = mysqli_connect($db_host, $db_username, $db_password,$db_name) or die(mysql_error());

if ($conn->connect_error) {
 
 die("Connection failed: " . $conn->connect_error);
} 
//

$sql = "Select * from clients";
$sql1 = "Select * from items";
$sql2 = "Select * from tblvendors";
$sql3 = "Select * from tblpurchasedorder";
$sql4 = "Select * from tblpodetail";
$sql5 = "Select * from invoices";
$sql6 = "Select * from invoiceitems";
$sql7 = "Select * from tblledger";
$sql8 = "Select * from tblledgervendor";
$sql9 = "Select * from tbllogs";
$sql10 = "Select * from tblexpenses";


 


$result = $conn->query($sql);
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



//$d [];
//if ($result->num_rows >0) {
 if ($result && $result1 && $result2&& $result3 && $result4 && $result5) {

 
 while($row[] = $result->fetch_assoc()) {


            $response["success"] = 1;
			$response["clients"] = $row;

			$json = json_encode($response);

 
 
 }
  while($row1[] = $result1->fetch_assoc()) {


            $response["success"] = 1;
			$response["items"] = $row1;

			$json = json_encode($response);

 
 
 }
 while($row2[] = $result2->fetch_assoc()) {


            $response["success"] = 1;
			$response["vendors"] = $row2;

			$json = json_encode($response);

 
 
 }
 while($row3[] = $result3->fetch_assoc()) {


            $response["success"] = 1;
			$response["POS"] = $row3;

			$json = json_encode($response);

 
 
 }
  while($row4[] = $result4->fetch_assoc()) {


            $response["success"] = 1;
			$response["POItems"] = $row4;

			$json = json_encode($response);

 
 
 }
 while($row5[] = $result5->fetch_assoc()) {


            $response["success"] = 1;
			$response["invoices"] = $row5;

			$json = json_encode($response);

 
 
 }
  while($row6[] = $result6->fetch_assoc()) {


            $response["success"] = 1;
			$response["invoiceItems"] = $row6;

			$json = json_encode($response);

 
 
 }
 while($row7[] = $result7->fetch_assoc()) {


            $response["success"] = 1;
			$response["ledgers"] = $row7;

			$json = json_encode($response);

 
 
 }
  while($row8[] = $result8->fetch_assoc()) {


            $response["success"] = 1;
			$response["vendorsLeger"] = $row8;

			$json = json_encode($response);

 
 
 }
  while($row9[] = $result9->fetch_assoc()) {


            $response["success"] = 1;
			$response["logs"] = $row9;

			$json = json_encode($response);

 
 
 }
   while($row10[] = $result10->fetch_assoc()) {


            $response["success"] = 1;
			$response["expenses"] = $row10;

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
$conn->close();
}
}
 else {
	 
	$response["success"] = 0;
    $response["message"] = "Api Authentication Failed";
 
    // echoing JSON response
    echo json_encode($response);
 }

?>