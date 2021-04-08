
<?php

if (isset($_GET['AccountId']))
{

$AccountId = $_GET['AccountId'];


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

$sql = "Select invoices.Iid,invoices.AccountId,invoices.Cid,invoices.Name,invoices.CreateDate,invoices.Terms,invoices.DueDate,invoices.Subtotal,invoices.Discount,invoices.Total,invoices.Message,invoices.Status,clients.Fname,clients.BillingAddress from invoices,clients WHERE
  invoices.Cid=clients.Cid";
  $sql1 = "Select invoices.Iid,payments.Date,payments.Payment from invoices,payments WHERE
  invoices.Iid=payments.Iid";
$sql2 = "Select invoices.Iid,items.itemid,items.Description,items.Rate,items.Instock,invoiceitems.Qty,invoiceitems.CostPrice from invoices,items,invoiceitems WHERE
  invoices.Iid=invoiceitems.Iid
  AND
  invoiceitems.Itemid=items.itemid";
  //by id descBY id DESC
//$sql = "Select r.Oid,ridestart,rideend,distance,o.TotalAmount,o.address from ride r inner join orders o on r.Oid=o.ID where r.Cid='$Cid' order by rideend DESC";//by id descBY id DESC
 // $result = mysqli_query($con,"SELECT captainaccount.Caid,captainaccount.latitude,captainaccount.longitude,ride.ridestart,orders.OderedAt,orders.TotalAmount,orders.address,captainaccount.phone,captain.Name FROM 
// ride, orders, captainaccount,captain
// WHERE
// captainaccount.rideid = ride.Rid
// AND
// ride.Oid = orders.ID 
// AND
// captainaccount.Cid=captain.Cid
// AND captainaccount.occupied='1'");



$result = $conn->query($sql);
$result1 = $conn->query($sql1);
$result2 = $conn->query($sql2);

//$d [];
//if ($result->num_rows >0) {
 if ($result && $result1 && $result2) {

 
 while($row[] = $result->fetch_assoc()) {


            $response["success"] = 1;
			$response["invoices"] = $row;

			$json = json_encode($response);

 
 
 }
  while($row1[] = $result1->fetch_assoc()) {


            $response["success"] = 1;
			$response["payments"] = $row1;

			$json = json_encode($response);

 
 
 }
 while($row2[] = $result2->fetch_assoc()) {


            $response["success"] = 1;
			$response["items"] = $row2;

			$json = json_encode($response);

 
 
 }
 // $arr1 = array('one' => 'foo');
 // //$combined = $arr1 + $row;
 // $combined = array_merge($arr1, $row);
 // $response["invoices"][0] = $combined;
 // $json = json_encode($response);
 
 
 
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
?>