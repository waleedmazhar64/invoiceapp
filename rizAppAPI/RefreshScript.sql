-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: mysql5022.site4now.net
-- Generation Time: Nov 28, 2019 at 01:56 PM
-- Server version: 5.7.27-log
-- PHP Version: 5.6.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_9b08a4_rizapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `Rid` int(255) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `AuthID` varchar(1000) NOT NULL,
  `companyName` varchar(1000) NOT NULL,
  `mysql` int(255) NOT NULL,
  `linkage` varchar(1000) NOT NULL,
  `logup` varchar(1000) NOT NULL,
  `bActive` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `Cid` int(255) NOT NULL,
  `AccountId` varchar(100) NOT NULL,
  `Fname` varchar(255) NOT NULL,
  `Lname` varchar(1000) NOT NULL,
  `Shop` varchar(1000) NOT NULL,
  `BillingAddress` varchar(1000) NOT NULL,
  `City` varchar(1000) NOT NULL,
  `Cell` varchar(1000) NOT NULL,
  `Balance` int(255) NOT NULL,
  `Active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `invoiceimages`
--

CREATE TABLE `invoiceimages` (
  `Iiid` int(255) NOT NULL,
  `Iid` int(255) NOT NULL,
  `Path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `invoiceitems`
--

CREATE TABLE `invoiceitems` (
  `Iiid` int(255) NOT NULL,
  `Iid` int(255) NOT NULL,
  `Itemid` int(255) NOT NULL,
  `Qty` int(255) NOT NULL,
  `CostPrice` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `itemid` int(255) NOT NULL,
  `AccountId` varchar(1000) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `Rate` int(255) NOT NULL,
  `Cost` int(100) NOT NULL,
  `Instock` int(255) NOT NULL,
  `Active` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`itemid`, `AccountId`, `Description`, `Rate`, `Cost`, `Instock`, `Active`) VALUES
(1, '113008225657937776461', '16 KG Tin Ghee', 0, 0, 76, 1),
(2, '113008225657937776461', '10 KG Tin Ghee', 0, 0, 0, 1),
(3, '113008225657937776461', '05 KG Tin Ghee', 0, 0, 0, 1),
(4, '113008225657937776461', '16 KG Bucket Ghee', 0, 0, 6, 1),
(5, '113008225657937776461', '10 KG Bucket Ghee ', 0, 0, 8, 1),
(6, '113008225657937776461', '05 KG Bucket Ghee', 0, 0, 0, 1),
(7, '113008225657937776461', '01 KG Sachet Ghee', 0, 0, 0, 1),
(8, '113008225657937776461', '0.5 KG Sachet Ghee', 0, 0, 0, 1),
(9, '113008225657937776461', '0.25 KG Sachet Ghee', 100, 80, 0, 1),
(10, '113008225657937776461', '100 GMS Sachet Ghee', 0, 0, 0, 1),
(11, '113008225657937776461', '10 LTR Tin Sunflower Oil', 0, 0, 0, 1),
(12, '113008225657937776461', '05 LTR Tin Sunflower Oil', 0, 0, 0, 1),
(13, '113008225657937776461', '05 LTR Bottle Sunflower Oil', 0, 0, 0, 1),
(14, '113008225657937776461', '03 LTR Bottle Sunflower Oil', 0, 0, 0, 1),
(15, '113008225657937776461', '2.5 LTR Tin Sunflower Oil', 0, 0, 0, 1),
(16, '113008225657937776461', '01 LTR Bottle Sunflower Oil', 0, 0, 0, 1),
(17, '113008225657937776461', '01 LTR Pack Sunflower Oil', 0, 0, 0, 1),
(18, '113008225657937776461', '0.5 LTR Pack Sunflower Oil', 0, 0, 0, 1),
(19, '113008225657937776461', '16 LTR Tin Canola Oil', 0, 0, 0, 1),
(20, '113008225657937776461', '05 LTR Tin Canola Oil', 0, 0, 0, 1),
(21, '113008225657937776461', '2.5 LTR Tin Canola Oil', 0, 0, 0, 1),
(22, '113008225657937776461', '01 LTR Pack Canola Oil', 0, 0, 0, 1),
(23, '113008225657937776461', '05 LTR Tin Cooking Oil', 0, 0, 0, 1),
(24, '113008225657937776461', '2.5 LTR Tin Cooking Oil', 0, 0, 0, 1),
(25, '113008225657937776461', '03 LTR Bottle Cooking Oil', 0, 0, 0, 1),
(26, '113008225657937776461', '01 LTR Bottle Cooking Oil', 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `Pid` int(255) NOT NULL,
  `Iid` int(255) NOT NULL,
  `Date` varchar(255) NOT NULL,
  `Payment` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblledger`
--

CREATE TABLE `tblledger` (
  `ID` int(255) NOT NULL,
  `InvoiceID` int(255) DEFAULT NULL,
  `Date` date NOT NULL,
  `Amount` int(100) NOT NULL,
  `CustomerID` varchar(1000) NOT NULL,
  `IsCredit` tinyint(1) NOT NULL,
  `Duedate` date DEFAULT NULL,
  `ByUserId` varchar(1000) NOT NULL,
  `Remarks` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tblledgervendor`
--

CREATE TABLE `tblledgervendor` (
  `ID` int(255) NOT NULL,
  `POID` int(255) DEFAULT NULL,
  `Date` date NOT NULL,
  `Amount` int(100) NOT NULL,
  `VendorID` varchar(1000) NOT NULL,
  `IsCredit` tinyint(1) NOT NULL,
  `Duedate` date DEFAULT NULL,
  `ByUserId` varchar(1000) NOT NULL,
  `Remarks` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblledgervendor`
--

INSERT INTO `tblledgervendor` (`ID`, `POID`, `Date`, `Amount`, `VendorID`, `IsCredit`, `Duedate`, `ByUserId`, `Remarks`) VALUES
(1, 1, '2019-11-29', 54500, '1', 0, '0000-00-00', 'rizwanali', 'Thanks for your business'),
(2, 2, '2019-11-29', 800, '2', 0, '0000-00-00', 'rizwanali', 'Thanks for your business'),
(3, 0, '2019-11-29', 10, '2', 1, '0000-00-00', 'rizwanali', '');

-- --------------------------------------------------------

--
-- Table structure for table `tblledgerzzz`
--

CREATE TABLE `tblledgerzzz` (
  `ID` int(255) NOT NULL,
  `InvoiceID` int(255) DEFAULT NULL,
  `Date` date NOT NULL,
  `Amount` int(100) NOT NULL,
  `CustomerID` varchar(1000) NOT NULL,
  `IsCredit` tinyint(1) NOT NULL,
  `Duedate` date DEFAULT NULL,
  `ByUserId` varchar(1000) NOT NULL,
  `Remarks` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbllogs`
--

CREATE TABLE `tbllogs` (
  `ID` int(255) NOT NULL,
  `tableName` varchar(1000) NOT NULL,
  `tableId` int(255) NOT NULL,
  `userId` int(255) NOT NULL,
  `actionType` varchar(1000) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `dated` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbllogs`
--

INSERT INTO `tbllogs` (`ID`, `tableName`, `tableId`, `userId`, `actionType`, `name`, `dated`) VALUES
(1, 'vendors', 2, 1, 'Adnan Ali added a new vendor', 'madina Enterprise', 'at November 29, 2019 1:47 AM'),
(2, 'tblpurchasedorder', 1, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 29, 2019 1:51 AM'),
(3, 'tblpurchasedorder', 2, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 29, 2019 1:55 AM'),
(4, 'tblledgervendors', 2, 1, 'Adnan Ali payed', 'madina Enterprise', 'at November 29, 2019 1:57 AM'),
(19, 'tblpurchasedorder', 2, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 28, 2019 8:59 PM'),
(20, 'tblpurchasedorder', 2, 0, 'Test edited', 'Purchased Order', 'at November 28, 2019 8:59 PM'),
(21, 'tblpurchasedorder', 3, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 28, 2019 10:43 PM'),
(22, 'tblpurchasedorder', 4, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 29, 2019 12:30 AM'),
(23, 'tblpurchasedorder', 5, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 29, 2019 12:33 AM'),
(24, 'tblpurchasedorder', 6, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 29, 2019 12:47 AM'),
(25, 'tblpurchasedorder', 7, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 29, 2019 1:26 AM'),
(26, 'tblpurchasedorder', 8, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 29, 2019 1:33 AM'),
(27, 'tblpurchasedorder', 8, 1, 'Adnan Ali deleted', 'Purchased Order', 'at November 29, 2019 1:54 AM'),
(28, 'tblpurchasedorder', 9, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 29, 2019 1:55 AM'),
(29, 'tblpurchasedorder', 9, 1, 'Adnan Ali deleted', 'Purchased Order', 'at November 29, 2019 1:55 AM'),
(30, 'tblpurchasedorder', 10, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 29, 2019 1:58 AM'),
(31, 'tblpurchasedorder', 11, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 29, 2019 2:04 AM'),
(32, 'tblpurchasedorder', 13, 1, 'Adnan Ali added a new', 'Purchased Order', 'at November 29, 2019 2:13 AM'),
(33, 'tblpurchasedorder', 13, 1, 'Adnan Ali edited', 'Purchased Order', 'at November 29, 2019 2:13 AM'),
(34, 'tblpurchasedorder', 13, 1, 'Adnan Ali deleted', 'Purchased Order', 'at November 29, 2019 2:13 AM');

-- --------------------------------------------------------

--
-- Table structure for table `tblpodetail`
--

CREATE TABLE `tblpodetail` (
  `ID` int(255) NOT NULL,
  `Poid` int(255) NOT NULL,
  `ItemID` int(255) NOT NULL,
  `Qty` int(255) NOT NULL,
  `CostPrice` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblpodetail`
--

INSERT INTO `tblpodetail` (`ID`, `Poid`, `ItemID`, `Qty`, `CostPrice`) VALUES
(1, 1, 1, 10, 500),
(2, 1, 2, 0, 0),
(3, 1, 3, 0, 0),
(4, 1, 4, 0, 0),
(5, 1, 5, 0, 0),
(6, 1, 6, 0, 0),
(7, 1, 7, 0, 0),
(8, 1, 8, 0, 0),
(9, 1, 9, 0, 0),
(10, 1, 10, 0, 0),
(11, 1, 11, 0, 0),
(12, 1, 12, 0, 0),
(13, 1, 13, 0, 0),
(14, 1, 14, 0, 0),
(15, 1, 15, 0, 0),
(16, 1, 16, 0, 0),
(17, 1, 17, 0, 0),
(18, 1, 18, 0, 0),
(19, 1, 19, 0, 0),
(20, 1, 20, 0, 0),
(21, 1, 21, 0, 0),
(22, 1, 22, 0, 0),
(23, 1, 23, 0, 0),
(24, 1, 24, 0, 0),
(25, 1, 25, 0, 0),
(26, 1, 26, 0, 0),
(27, 2, 1, 80, 10),
(28, 2, 2, 0, 0),
(29, 2, 3, 0, 0),
(30, 2, 4, 0, 0),
(31, 2, 5, 0, 0),
(32, 2, 6, 0, 0),
(33, 2, 7, 0, 0),
(34, 2, 8, 0, 0),
(35, 2, 9, 0, 0),
(36, 2, 10, 0, 0),
(37, 2, 11, 0, 0),
(38, 2, 12, 0, 0),
(39, 2, 13, 0, 0),
(40, 2, 14, 0, 0),
(41, 2, 15, 0, 0),
(42, 2, 16, 0, 0),
(43, 2, 17, 0, 0),
(44, 2, 18, 0, 0),
(45, 2, 19, 0, 0),
(46, 2, 20, 0, 0),
(47, 2, 21, 0, 0),
(48, 2, 22, 0, 0),
(49, 2, 23, 0, 0),
(50, 2, 24, 0, 0),
(51, 2, 25, 0, 0),
(52, 2, 26, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tblpurchasedorder`
--

CREATE TABLE `tblpurchasedorder` (
  `ID` int(255) NOT NULL,
  `VendorID` int(255) NOT NULL,
  `Date` date NOT NULL,
  `ReceivedBy` varchar(1000) NOT NULL,
  `Total` int(255) NOT NULL,
  `Remarks` varchar(1000) NOT NULL,
  `Discount` int(255) NOT NULL,
  `Active` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblpurchasedorder`
--

INSERT INTO `tblpurchasedorder` (`ID`, `VendorID`, `Date`, `ReceivedBy`, `Total`, `Remarks`, `Discount`, `Active`) VALUES
(1, 1, '2019-11-29', 'rizwanali', 54500, 'Thanks for your business', 0, 1),
(2, 2, '2019-11-29', 'rizwanali', 800, 'Thanks for your business', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tblvendors`
--

CREATE TABLE `tblvendors` (
  `ID` int(255) NOT NULL,
  `Name` varchar(1000) NOT NULL,
  `Address` varchar(1000) NOT NULL,
  `Phone` varchar(1000) NOT NULL,
  `Email` varchar(1000) NOT NULL,
  `Balance` int(255) NOT NULL,
  `bActive` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblvendors`
--

INSERT INTO `tblvendors` (`ID`, `Name`, `Address`, `Phone`, `Email`, `Balance`, `bActive`) VALUES
(1, 'Madina Enterprises', 'Gate no. 3, Head Office - Madina Group of Industries,Sargodha Road, Faisalabad - Pakistan.', '0418869891', '', 0, 1),
(2, 'madina Enterprise', 'Islamabad', '', '', 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`Rid`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`Cid`);

--
-- Indexes for table `invoiceimages`
--
ALTER TABLE `invoiceimages`
  ADD PRIMARY KEY (`Iiid`),
  ADD KEY `Iid` (`Iid`);

--
-- Indexes for table `invoiceitems`
--
ALTER TABLE `invoiceitems`
  ADD PRIMARY KEY (`Iiid`),
  ADD KEY `itemid` (`Itemid`),
  ADD KEY `Iid` (`Iid`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`Iid`),
  ADD KEY `Cid` (`Cid`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`itemid`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`Pid`),
  ADD KEY `Iid` (`Iid`);

--
-- Indexes for table `tblledger`
--
ALTER TABLE `tblledger`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblledgervendor`
--
ALTER TABLE `tblledgervendor`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblledgerzzz`
--
ALTER TABLE `tblledgerzzz`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbllogs`
--
ALTER TABLE `tbllogs`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblpodetail`
--
ALTER TABLE `tblpodetail`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ItemID` (`ItemID`),
  ADD KEY `tblpodetail_ibfk_1` (`Poid`);

--
-- Indexes for table `tblpurchasedorder`
--
ALTER TABLE `tblpurchasedorder`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `VendorID` (`VendorID`);

--
-- Indexes for table `tblvendors`
--
ALTER TABLE `tblvendors`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `Rid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `Cid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `invoiceitems`
--
ALTER TABLE `invoiceitems`
  MODIFY `Iiid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=437;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `Iid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=209;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `itemid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `Pid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tblledger`
--
ALTER TABLE `tblledger`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tblledgervendor`
--
ALTER TABLE `tblledgervendor`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tblledgerzzz`
--
ALTER TABLE `tblledgerzzz`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `tbllogs`
--
ALTER TABLE `tbllogs`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;

--
-- AUTO_INCREMENT for table `tblpodetail`
--
ALTER TABLE `tblpodetail`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=365;

--
-- AUTO_INCREMENT for table `tblpurchasedorder`
--
ALTER TABLE `tblpurchasedorder`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `tblvendors`
--
ALTER TABLE `tblvendors`
  MODIFY `ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `invoiceitems`
--
ALTER TABLE `invoiceitems`
  ADD CONSTRAINT `invoiceitems_ibfk_1` FOREIGN KEY (`Itemid`) REFERENCES `items` (`itemid`),
  ADD CONSTRAINT `invoiceitems_ibfk_2` FOREIGN KEY (`Iid`) REFERENCES `invoices` (`Iid`);

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_ibfk_1` FOREIGN KEY (`Cid`) REFERENCES `clients` (`Cid`) ON DELETE CASCADE ON UPDATE CASCADE;
  INSERT INTO tblvendors VALUES (1,'Madina Enterprises','Gate no. 3, Head Office - Madina Group of Industries,Sargodha Road, Faisalabad - Pakistan.','0418869891','',0,1);
  INSERT INTO items VALUES (1,'113008225657937776461','16 KG Tin Ghee',0,0,0,1),(2,'113008225657937776461','10 KG Tin Ghee',0,0,0,1),(3,'113008225657937776461','05 KG Tin Ghee',0,0,0,1),(4,'113008225657937776461','16 KG Bucket Ghee',0,0,0,1),(5,'113008225657937776461','10 KG Bucket Ghee',0,0,0,1),(6,'113008225657937776461','05 KG Bucket Ghee',0,0,0,1),(7,'113008225657937776461','01 KG Sachet Ghee',0,0,0,1),(8,'113008225657937776461','0.5 KG Sachet Ghee',0,0,0,1),(9,'113008225657937776461','0.25 KG Sachet Ghee',0,0,0,1),(10,'113008225657937776461','100 GMS Sachet Ghee',0,0,0,1),(11,'113008225657937776461','10 LTR Tin Sunflower Oil',0,0,0,1),(12,'113008225657937776461','05 LTR Tin Sunflower Oil',0,0,0,1),(13,'113008225657937776461','05 LTR Bottle Sunflower Oil',0,0,0,1),(14,'113008225657937776461','03 LTR Bottle Sunflower Oil',0,0,0,1),(15,'113008225657937776461','2.5 LTR Tin Sunflower Oil',0,0,0,1),(16,'113008225657937776461','01 LTR Bottle Sunflower Oil',0,0,0,1),(17,'113008225657937776461','01 LTR Pack Sunflower Oil',0,0,0,1),(18,'113008225657937776461','0.5 LTR Pack Sunflower Oil',0,0,0,1),(19,'113008225657937776461','16 LTR Tin Canola Oil',0,0,0,1),(20,'113008225657937776461','05 LTR Tin Canola Oil',0,0,0,1),(21,'113008225657937776461','2.5 LTR Tin Canola Oil',0,0,0,1),(22,'113008225657937776461','01 LTR Pack Canola Oil',0,0,0,1),(23,'113008225657937776461','05 LTR Tin Cooking Oil',0,0,0,1),(24,'113008225657937776461','2.5 LTR Tin Cooking Oil',0,0,0,1),(25,'113008225657937776461','03 LTR Bottle Cooking Oil',0,0,0,1),(26,'113008225657937776461','01 LTR Bottle Cooking Oil',0,0,0,1);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
