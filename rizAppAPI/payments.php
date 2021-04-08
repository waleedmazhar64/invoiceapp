<?php
 
/*
 * Following code will create a new product row
 * All product details are read from HTTP Post Request
 */
 
// array for JSON response
 header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
 header('Content-Type: application/json');
 $headerStringValue = $_SERVER['HTTP_X_API_KEY'];
 $match = false;
 if($headerStringValue == "28b32377-cd77-44b3-8cbb-a9dc69bfddf4") 
 {

    $jsondata = json_decode(file_get_contents('php://input'), true);

$response = array();
 global $data;
// check for required fields
//if (isset($_GET['email']) && isset($_GET['password'])) 
if (isset($jsondata['CustomerID'])) 
{
   $CustomerID = $jsondata['CustomerID'];
 
    // mysql inserting a new row
	 $con = mysqli_connect("mysql5022.site4now.net", "9b08a4_rizapp", "Pak_9381","db_9b08a4_rizapp") or die(mysql_error());

    $result = mysqli_query($con,"SELECT Amount  FROM tblledger where CustomerID='$CustomerID' AND IsCredit='1' ORDER BY Date DESC limit 1");
	$row = mysqli_fetch_array($result);
	$result2 = mysqli_query($con,"SELECT SUM(Amount) AS TotalDebit FROM tblledger where CustomerID='$CustomerID' AND IsCredit='0'");
	$row2 = mysqli_fetch_array($result2);
	$result3 = mysqli_query($con,"SELECT SUM(Amount) AS TotalCredit FROM tblledger where CustomerID='$CustomerID' AND IsCredit='1'");
	$row3 = mysqli_fetch_array($result3);
	
	
	
 
    // check if row inserted or not
    if ($result && $result2 && $result3) {
		if($row){
			$row = $row + $row2 + $row3;
			echo json_encode($row);
		}
		else {
			$row['Amount']="0";
			$row = $row + $row2;
			echo json_encode($row);
			//echo 'no data';
		}
		        //echo json_encode($row);
				//echo json_encode($row2);
				

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