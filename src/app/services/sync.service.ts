import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform, LoadingController } from '@ionic/angular';
import { ItemamountPage } from '../pages/itemamount/itemamount.page';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { finalize, first } from 'rxjs/operators';
import { DatabaseService} from 'src/app/services/database.service';
import { from } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class SyncService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  developers = new BehaviorSubject([]);
  updatedPOID = '';
  updatedIid = '';
  usdId:any;
  executed = 0;

  constructor(
    private plt: Platform,
    private sqlitePorter: SQLitePorter,
    private sqlite: SQLite,
    private http: HttpClient,
    private router: Router,
    private storage: Storage,
    private network: Network,
    private nativeHttp: HTTP,
    private databaseprovider: DatabaseService,
    private datePipe: DatePipe,
    private loadingController: LoadingController,



  ) {
    this.storage.get('userId').then((val)=>{
      this.usdId = val;
      console.log(this.usdId);
    });
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: '79.db',
        location: 'default',
      })
      .then((db: SQLiteObject) => {
         this.database = db;

         // tslint:disable-next-line: max-line-length
         db.executeSql('CREATE TABLE IF NOT EXISTS items(`itemid` INTEGER PRIMARY KEY AUTOINCREMENT, `AccountId` VARCHAR, `Description` VARCHAR, `Rate` INTEGER, `Cost` INTEGER,`Instock` INTEGER,`Active` INTEGER,`Sync` INTEGER)', [])
          .then(() => console.log('Executed Sync items'))
          .catch(e => console.log(e));
             // tslint:disable-next-line: max-line-length
         db.executeSql('CREATE TABLE IF NOT EXISTS clients(`Cid` INTEGER PRIMARY KEY AUTOINCREMENT, `AccountId` VARCHAR, `Fname` VARCHAR, `Lname` VARCHAR, `Shop` VARCHAR,`BillingAddress` VARCHAR,`City` VARCHAR,`Cell` VARCHAR,`Active` INTEGER,`Balance` INTEGER,`Sync` INTEGER)', [])
         .then(() => console.log('Executed Sync Clients'))
         .catch(e => console.log(e));
             // tslint:disable-next-line: max-line-length
         db.executeSql('CREATE TABLE IF NOT EXISTS tblvendors(`ID` INTEGER PRIMARY KEY AUTOINCREMENT, `Name` VARCHAR, `Address` VARCHAR, `Phone` VARCHAR, `Email` VARCHAR,`bActive` INTEGER,`Balance` INTEGER,`Sync` INTEGER)', [])
             .then(() =>
              console.log('Executed Sync Vendors'))
             .catch(e => console.log(e));
            // tslint:disable-next-line: max-line-length
         db.executeSql('CREATE TABLE IF NOT EXISTS tblpurchasedorder(`ID` INTEGER PRIMARY KEY AUTOINCREMENT, `VendorID` INTEGER, `Date` VARCHAR, `ReceivedBy` VARCHAR, `Total` INTEGER,`Remarks` VARCHAR,`Discount` INTEGER,`Active` INTEGER,`Sync` INTEGER)', [])
             .then(() => console.log('Executed Sync tblpurchasedorder'))
             .catch(e => console.log(e));
            // tslint:disable-next-line: max-line-length
         db.executeSql('CREATE TABLE IF NOT EXISTS tblpodetail(`ID` INTEGER PRIMARY KEY AUTOINCREMENT, `Poid` INTEGER, `ItemID` INTEGER, `Qty` INTEGER, `CostPrice` INTEGER,`Sync` INTEGER)', [])
             .then(() => console.log('Executed Sync tblpodetail'))
             .catch(e => console.log(e));
               // tslint:disable-next-line: max-line-length
         db.executeSql('CREATE TABLE IF NOT EXISTS invoices(`Iid` INTEGER PRIMARY KEY AUTOINCREMENT, `AccountId` VARCHAR, `Cid` INTEGER, `Name` VARCHAR, `CreateDate` VARCHAR,`Terms` VARCHAR,`DueDate` VARCHAR,`Subtotal` INTEGER,`Discount` INTEGER,`Total` INTEGER,`Message` VARCHAR,`Status` VARCHAR,`Sync` INTEGER)', [])
             .then(() => console.log('Executed Sync Invoices'))
             .catch(e => console.log(e));
                // tslint:disable-next-line: max-line-length
         db.executeSql('CREATE TABLE IF NOT EXISTS invoiceitems(`Iiid` INTEGER PRIMARY KEY AUTOINCREMENT, `Iid` INTEGER, `Itemid` INTEGER, `Qty` INTEGER, `CostPrice` INTEGER,`Sync` INTEGER)', [])
             .then(() => console.log('Executed Sync invoiceitems'))
             .catch(e => console.log(e));
              // tslint:disable-next-line: max-line-length
         db.executeSql('CREATE TABLE IF NOT EXISTS tblledger(`ID` INTEGER PRIMARY KEY AUTOINCREMENT, `InvoiceID` INTEGER, `Date` VARCHAR, `Amount` INTEGER, `CustomerID` VARCHAR,`IsCredit` INTEGER, `Duedate` Date, `ByUserId` VARCHAR, `Remarks` VARCHAR,`Sync` INTEGER)', [])
              .then(() => console.log('Executed Sync tblledger'))
              .catch(e => console.log(e));
                  // tslint:disable-next-line: max-line-length
         db.executeSql('DROP TABLE IF EXISTS tblUsers;')
         .then(() => console.log('Executed Sync tblledger'))
         .catch(e => console.log(e)); 

         db.executeSql('CREATE TABLE IF NOT EXISTS tblUsers(`ID` INTEGER PRIMARY KEY AUTOINCREMENT, `email` VARCHAR, `name` VARCHAR, `bActive` INTEGER,`Sync` INTEGER)', [])
              .then(() => console.log('Executed Sync tblledger'))
              .catch(e => console.log(e));
              // tslint:disable-next-line: max-line-length
         db.executeSql('CREATE TABLE IF NOT EXISTS categories(`catid` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR, `active` INTEGER)', [])
         .then(() => console.log('Executed Sync tblledger'))
         .catch(e => console.log(e));
         // tslint:disable-next-line: max-line-length
         db.executeSql('CREATE TABLE IF NOT EXISTS tblslides(`Id` INTEGER PRIMARY KEY AUTOINCREMENT, `slideNo` INTEGER, `slideHeading` VARCHAR, `slideText` VARCHAR, `slideImage` VARCHAR, `bActive` INTEGER)', [])
         .then(() => console.log('Executed Sync tblledger'))
         .catch(e => console.log(e));
                // tslint:disable-next-line: max-line-length
          db.executeSql('DROP TABLE IF EXISTS tblacl;')
         .then(() => console.log('Executed Sync tblledger'))
         .catch(e => console.log(e)); 
         db.executeSql('CREATE TABLE IF NOT EXISTS tblacl(`ID` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR, `userId` VARCHAR, `bValue` INTEGER,`Sync` INTEGER)', [])
         .then(() => console.log('Executed Sync tblledger'))
         .catch(e => console.log(e));
         db.executeSql('CREATE TABLE IF NOT EXISTS tblledgervendor(`ID` INTEGER PRIMARY KEY AUTOINCREMENT, `POID` INTEGER, `Date` VARCHAR, `Amount` INTEGER, `VendorID` VARCHAR,`IsCredit` INTEGER, `Duedate` Date, `ByUserId` VARCHAR, `Remarks` VARCHAR,`Sync` INTEGER)', [])
              .then(() => console.log('Executed Sync tblledger'))
              .catch(e => console.log(e));
         db.executeSql('CREATE TABLE IF NOT EXISTS POdel(`ID` INTEGER PRIMARY KEY AUTOINCREMENT, `POid` INTEGER)', [])
              .then(() => console.log('Executed Sync POdel'))
              .catch(e => console.log(e));
         db.executeSql('CREATE TABLE IF NOT EXISTS ledgerdel(`ID` INTEGER PRIMARY KEY AUTOINCREMENT, `Oid` INTEGER)', [])
              .then(() => console.log('Executed Sync ledgerdel'))
              .catch(e => console.log(e));
         db.executeSql('CREATE TABLE IF NOT EXISTS Invoicedel(`ID` INTEGER PRIMARY KEY AUTOINCREMENT, `Iid` INTEGER)', [])
              .then(() => console.log('Executed Sync Invoicedel'))
              .catch(e => console.log(e));
        db.executeSql('CREATE TABLE IF NOT EXISTS tblLogs(`ID` INTEGER PRIMARY KEY AUTOINCREMENT, `tableName` TEXT,`tableId` INTEGER,`userId` INTEGER,`actionType` TEXT,name TEXT,`dated` TEXT,`Sync` INTEGER)', [])
              .then(() => console.log('Executed Sync tbllog'))
              .catch(e => console.log(e));
                // tslint:disable-next-line: max-line-length
         db.executeSql('CREATE TABLE IF NOT EXISTS tblexpenses(`ID` INTEGER PRIMARY KEY AUTOINCREMENT, `AccountId` VARCHAR, `Name` VARCHAR, `Date` VARCHAR,`Amount` INTEGER, `Category` VARCHAR,`Description` VARCHAR,`Active` INTEGER,`Sync` INTEGER)', [])
         .then(() => console.log('Executed Sync items'))
         .catch(e => console.log(e));
         if (this.network.type === 'none') {
       
              }else {
                
                this.serverSync();
              }      
        
      })
      .catch(e => console.log(e));
    });

   }
   additem(Description, Rate, Cost) {
    const data = ['113008225657937776461', Description, Rate, Cost, 0, 1, 0 ];
    // tslint:disable-next-line: max-line-length
    return this.database.executeSql('INSERT INTO  items (AccountId, Description,Rate,Cost,Instock,Active,Sync) VALUES (?,?,?,?,?,?,?)', data)
    .then(data => {
      console.log('successfully Created item');
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  getAllLogs() {
    return this.database.executeSql('SELECT * FROM tblLogs ORDER BY ID DESC', []).then((data) => {
      let logs:any = [];
       ;
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          logs.push({
            ID: data.rows.item(i).ID,
            tableName: data.rows.item(i).tableName,
            tableId: data.rows.item(i).tableId,
            userId: data.rows.item(i).userId,
            actionType: data.rows.item(i).actionType,
            name:  data.rows.item(i).name,
            dated: data.rows.item(i).dated,

           });
        }
      }
      ;
      console.log(logs);
      return logs;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getLogsPagination(from1) {
    
   // alert('from1' + from1);
    let total = 0;
    this.database.executeSql('SELECT * From tblLogs',[]).then((data1) => {
      // total = data1.rows.length;
       console.log('data from'+ data1.rows.length);
       total = data1.rows.length;

    });
    return this.database.executeSql('SELECT * FROM tblLogs ORDER BY ID DESC limit ?, 10', [from1]).then((data) => {
      let logs:any = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          logs.push({
            Total: total,
            ID: data.rows.item(i).ID,
            tableName: data.rows.item(i).tableName,
            tableId: data.rows.item(i).tableId,
            userId: data.rows.item(i).userId,
            actionType: data.rows.item(i).actionType,
            name:  data.rows.item(i).name,
            dated: data.rows.item(i).dated,

           });
        }
      }
      ;
      console.log(logs);
      return logs;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
 
  }
  
  getAllItems() {
    return this.database.executeSql('SELECT * FROM items', []).then((data) => {
      let items:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            itemid: data.rows.item(i).itemid,
            AccountId: data.rows.item(i).AccountId,
            Description: data.rows.item(i).Description,
            Rate: data.rows.item(i).Rate,
            Cost: data.rows.item(i).Cost,
            Instock: data.rows.item(i).Instock,
            Active: data.rows.item(i).Active,
            Sync: data.rows.item(i).Sync,

           });
        }
      }
      ;
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getAllActiveItems() {
    return this.database.executeSql('SELECT * FROM items where Active=1 ORDER BY itemid', []).then((data) => {
      let items:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            itemid: data.rows.item(i).itemid,
            AccountId: data.rows.item(i).AccountId,
            Description: data.rows.item(i).Description,
            Rate: data.rows.item(i).Rate,
            Cost: data.rows.item(i).Cost,
            Instock: data.rows.item(i).Instock,
            Active: data.rows.item(i).Active,
            Sync: data.rows.item(i).Sync,

           });
        }
      }
      ;
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateItem(Description, Rate, Cost, itemid, Sync)
  {
    
    return this.database.executeSql('UPDATE items SET Description=?,Rate=?,Cost=?,Sync=? WHERE itemid=?',[Description, Rate, Cost, Sync, itemid]).then(data => {
      console.log(data);
      return 1;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  deleteItem(itemid, Sync) {
    ;
    return this.database.executeSql('UPDATE items SET Active=0,Sync=? WHERE itemid=?', [Sync, itemid]).then(data => {
      console.log(data);
      return 1;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  activateItem(itemid, Sync) {
    ;
    return this.database.executeSql('UPDATE items SET Active=1,Sync=? WHERE itemid=?', [Sync, itemid]).then(data => {
      console.log(data);
      return 1;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  addclient(Fname, Lname, Shop, BillingAddress, City, Cell) {
    const data = ['113008225657937776461', Fname, Lname, Shop, BillingAddress, City, Cell, 1, 0, 0 ];
    // tslint:disable-next-line: max-line-length
    return this.database.executeSql('INSERT INTO  clients (AccountId,Fname,Lname,Shop,BillingAddress,City,Cell,Active,Balance,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', data)
    .then(data => {
      console.log('successfully Created item');
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  addLogs(tableName,tableId,userId,actionType,name,dated){
    
    const data = [tableName,tableId,userId,actionType,name,dated, 0];
    return this.database.executeSql('INSERT INTO  tblLogs (tableName,tableId,userId,actionType,name,dated,Sync) VALUES (?,?,?,?,?,?,?)', data)
    .then(data => {
      console.log('successfully Created Log');
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
    
  }

  getClientsonspot() {
    return this.database.executeSql('SELECT * FROM clients ORDER BY Cid DESC LIMIT 0, 1', []).then((data) => {
      let clients:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          clients.push({
            Cid: data.rows.item(i).Cid,
            AccountId: data.rows.item(i).AccountId,
            Fname: data.rows.item(i).Fname,
            Lname: data.rows.item(i).Lname,
            Shop: data.rows.item(i).Shop,
            BillingAddress: data.rows.item(i).BillingAddress,
            City: data.rows.item(i).City,
            Cell: data.rows.item(i).Cell,
            Active: data.rows.item(i).Active,
            Balance: data.rows.item(i).Balance,
            Sync: data.rows.item(i).Sync,

           });
        }
      }
      ;
      console.log(clients);
      return clients;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  getAllClients() {
    return this.database.executeSql('SELECT * FROM clients where Active!=2', []).then((data) => {
      let clients:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          clients.push({
            Cid: data.rows.item(i).Cid,
            AccountId: data.rows.item(i).AccountId,
            Fname: data.rows.item(i).Fname,
            Lname: data.rows.item(i).Lname,
            Shop: data.rows.item(i).Shop,
            BillingAddress: data.rows.item(i).BillingAddress,
            City: data.rows.item(i).City,
            Cell: data.rows.item(i).Cell,
            Active: data.rows.item(i).Active,
            Balance: data.rows.item(i).Balance,
            Sync: data.rows.item(i).Sync,


           });
        }
      }
      ;
      
      console.log(clients);
      return clients;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getAllActiveClients() {
    return this.database.executeSql('SELECT * FROM clients where Active=1', []).then((data) => {
      let clients:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          clients.push({
            Cid: data.rows.item(i).Cid,
            AccountId: data.rows.item(i).AccountId,
            Fname: data.rows.item(i).Fname,
            Lname: data.rows.item(i).Lname,
            Shop: data.rows.item(i).Shop,
            BillingAddress: data.rows.item(i).BillingAddress,
            City: data.rows.item(i).City,
            Cell: data.rows.item(i).Cell,
            Active: data.rows.item(i).Active,
            Balance: data.rows.item(i).Balance,
            Sync: data.rows.item(i).Sync,

           });
        }
      }
      ;
      console.log(clients);
      return clients;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateClient(Fname, Lname, Shop, BillingAddress, City, Cell, Cid, Balance,Sync)
  {
    
    return this.database.executeSql('UPDATE clients SET Fname=?,Lname=?,Shop=?,BillingAddress=?,City=?,Cell=?,Balance=?,Sync=? WHERE Cid=?',[Fname, Lname, Shop, BillingAddress, City, Cell,Balance ,Sync, Cid]).then(data => {
      console.log(data);
      return 1;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  updateClientBalance( Cid, Balance)
  {
    
    return this.database.executeSql('UPDATE clients SET Balance=Balance+? WHERE Cid=?',[Balance , Cid]).then(data => {
      console.log(data);
      ;
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  deleteClient(Cid, Sync) {
    return this.database.executeSql('UPDATE clients SET Active=2,Sync=? WHERE Cid=?', [Sync, Cid]).then(data => {
      console.log(data);
      return 1;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  activateClient(Cid, Sync) {
    ;
    return this.database.executeSql('UPDATE clients SET Active=1,Sync=? WHERE Cid=?', [Sync, Cid]).then(data => {
      console.log(data);
      return 1;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  addvendor(Name, Address, Phone, Email) {
    const data = [ Name, Address, Phone, Email, 1, 0 ,0 ];
    // tslint:disable-next-line: max-line-length
    return this.database.executeSql('INSERT INTO  tblvendors (Name,Address,Phone,Email,bActive,Balance,Sync) VALUES (?,?,?,?,?,?,?)', data)
    .then(data => {
      console.log('successfully Created item');
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  getAllVendors() {
    return this.database.executeSql('SELECT * FROM tblvendors', []).then((data) => {
      let vedndors:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          vedndors.push({
            ID: data.rows.item(i).ID,
            Name: data.rows.item(i).Name,
            Address: data.rows.item(i).Address,
            Phone: data.rows.item(i).Phone,
            Email: data.rows.item(i).Email,
            bActive: data.rows.item(i).bActive,
            Balance: data.rows.item(i).Balance,
            Sync: data.rows.item(i).Sync,

           });
        }
      }
      
      
      console.log(vedndors);
      return vedndors;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getVendorssonspot() {
    return this.database.executeSql('SELECT * FROM tblvendors ORDER BY ID DESC LIMIT 0, 1', []).then((data) => {
      let vedndors:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          vedndors.push({
            ID: data.rows.item(i).ID,
            Name: data.rows.item(i).Name,
            Address: data.rows.item(i).Address,
            Phone: data.rows.item(i).Phone,
            Email: data.rows.item(i).Email,
            bActive: data.rows.item(i).bActive,
            Sync: data.rows.item(i).Sync,

           });
        }
      }
      ;
      console.log(vedndors);
      return vedndors;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getAllActiveVendors() {
    return this.database.executeSql('SELECT * FROM tblvendors where bActive=1', []).then((data) => {
      let vedndors:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          vedndors.push({
            ID: data.rows.item(i).ID,
            Name: data.rows.item(i).Name,
            Address: data.rows.item(i).Address,
            Phone: data.rows.item(i).Phone,
            Email: data.rows.item(i).Email,
            bActive: data.rows.item(i).bActive,
            Balance:  data.rows.item(i).Balance,
            Sync: data.rows.item(i).Sync,

           });
        }
      }
      ;
      console.log(vedndors);
      return vedndors;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateVendor(Name, Address, Phone, Email, ID, Balance ,Sync)
  {
    
    
    return this.database.executeSql('UPDATE tblvendors SET Name=?,Address=?,Phone=?,Email=?,Balance=?,Sync=? WHERE ID=?',[Name, Address, Phone, Email,Balance ,Sync, ID]).then(data => {
      console.log(data);
      return 1;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  
  deleteVendor(ID, Sync) {
    ;
    return this.database.executeSql('UPDATE tblvendors SET bActive=0,Sync=? WHERE ID=?', [Sync, ID]).then(data => {
      console.log(data);
      return 1;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  activateVendor(ID, Sync) {
    
    return this.database.executeSql('UPDATE tblvendors SET bActive=1,Sync=? WHERE ID=?', [Sync, ID]).then(data => {
      console.log(data);
      return 1;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  addPO(VendorID, VendorSync,date, ReceivedBy, Total, Remarks, Discount, Items) {
    
    const data = [ VendorID, date, ReceivedBy, Total, Remarks, Discount, 1,0 ];
    // tslint:disable-next-line: max-line-length
    return this.database.executeSql('INSERT INTO  tblpurchasedorder (VendorID,Date,ReceivedBy,Total,Remarks,Discount,Active,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
    .then(data => {
      console.log('successfully Created item');
      console.log(data.insertId);
      const rid = data.insertId;
      for(let i=0;i<Items.length;i++) {
        
        const Id = Items[i].Id;
        const Qty = Items[i].Qty;
        const CostPrice = Items[i].CostPrice;
        const Sync = Items[i].Sync;
        const data1 = [ rid, Id, Qty, CostPrice, 0 ];
        this.database.executeSql('INSERT INTO  tblpodetail (Poid,ItemID,Qty,CostPrice,Sync) VALUES (?,?,?,?,?)', data1)
        .then(data => {
          console.log('successfully Add item');
          return data;
        }, err => {
          console.log('Error: ', err);
          return err;
        });
        
        this.database.executeSql('UPDATE items SET Instock=Instock+?,Sync=? where itemid=?', [Qty, Sync, Id])
        .then(data => {
          console.log('successfully Updated stock');
          return data;
        }, err => {
          console.log('Error: ', err);
          return err;
        });
      }
      this.database.executeSql('INSERT INTO  tblledgervendor (POID,Date,Amount,VendorID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', [rid, date, Total, VendorID, 0, null, 'rizwanali', Remarks, 0])
      .then(data => {
        console.log('successfully Added Ledger');
        return data;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      
      this.database.executeSql('UPDATE tblvendors SET Balance=Balance+?,Sync=? WHERE ID=?',[Total, VendorSync,VendorID]).then(data => {
        console.log('vendorsBalnace'+data);

        return data;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      
      return rid;
     
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  getAllPOs() {
    return this.database.executeSql('Select tblpurchasedorder.ID,tblpurchasedorder.VendorID,tblpurchasedorder.Date,tblpurchasedorder.ReceivedBy,tblpurchasedorder.Total,tblpurchasedorder.Remarks,tblpurchasedorder.Discount,tblpurchasedorder.Active,tblpurchasedorder.Sync,tblvendors.Name,tblvendors.Address,tblvendors.Phone,tblvendors.Email,tblvendors.bActive from tblpurchasedorder,tblvendors WHERE tblpurchasedorder.VendorID=tblvendors.ID', []).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            ID: data.rows.item(i).ID,
            VendorID: data.rows.item(i).VendorID,
            Date: data.rows.item(i).Date,
            ReceivedBy: data.rows.item(i).ReceivedBy,
            Total: data.rows.item(i).Total,
            Remarks: data.rows.item(i).Remarks,
            Discount: data.rows.item(i).Discount,
            Active: data.rows.item(i).Discount,
            Sync: data.rows.item(i).Sync,
            Name: data.rows.item(i).Name

           });
        }
      }
      ;
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getPOItems(Poid) {
    return this.database.executeSql('Select items.Description,items.Sync,tblpodetail.ItemID As Id,tblpodetail.Qty,tblpodetail.CostPrice from items,tblpodetail WHERE tblpodetail.Poid=? AND items.itemid=tblpodetail.ItemID ORDER BY items.itemid', [Poid]).then((data) => {
      let items:any = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            Description: data.rows.item(i).Description,
            Sync: data.rows.item(i).Sync,
            Id: data.rows.item(i).Id,
            Qty: data.rows.item(i).Qty,
            CostPrice: data.rows.item(i).CostPrice,


           });
        }
      }
      ;
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  updatePO(PoId, VendorID, date, ReceivedBy, Total, Remarks, Discount, Items, vendorBalance) {
    this.database.executeSql('UPDATE tblvendors SET Balance=Balance+? WHERE ID=?',[vendorBalance, VendorID]).then(data => {
      console.log(data);
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
    this.database.executeSql('INSERT INTO POdel (POid)  VALUES (?)', [PoId])
    .then(data => {
      
    }, err => {
      console.log('Error: ', err);
      
      return err;
    });
    this.database.executeSql('DELETE from tblledgervendor where POID=?', [PoId])
    .then(data => {
     

    }, err => {
      console.log('Error: ', err);
      
      return err;
    });
    return this.database.executeSql('DELETE from tblpodetail where Poid=?', [PoId])
    .then(data => {
      console.log('successfully deleted POitems');
    
      this.database.executeSql('DELETE from tblpurchasedorder where ID=?', [PoId])
      .then(data => {
        console.log('successfully deleted PO');
        
        const data1 = [ VendorID, date, ReceivedBy, Total, Remarks, Discount, 1, 0 ];
    // tslint:disable-next-line: max-line-length
        this.database.executeSql('INSERT INTO  tblpurchasedorder (VendorID,Date,ReceivedBy,Total,Remarks,Discount,Active,Sync) VALUES (?,?,?,?,?,?,?,?)', data1)
    .then(data => {
      console.log('successfully Created item');
      console.log(data.insertId);
      const rid = data.insertId;
      console.log('rid:', data.insertId);
      this.updatedPOID = data.insertId;
      
      this.database.executeSql('UPDATE tblLogs SET tableId=? where tableName=? AND  tableId=?', [this.updatedPOID, 'tblpurchasedorder', PoId])
      .then(data => {
        this.AddLogUpdatedPO();
      
      }, err => {
      console.log('Error: ', err);
      
      return err;
      });
      
      for(let i=0;i<Items.length;i++) {
        
        const Id = Items[i].Id;
        const Qty = Items[i].Qty;
        const CostPrice = Items[i].CostPrice;
        const Stock =  Items[i].Stock;
        const Sync = Items[i].Sync;
        const data2 = [ rid, Id, Qty, CostPrice, 0 ];
        this.database.executeSql('INSERT INTO  tblpodetail (Poid,ItemID,Qty,CostPrice,Sync) VALUES (?,?,?,?,?)', data2)
        .then(data => {
          console.log('successfully Add item');
          return data;
        }, err => {
          console.log('Error: ', err);
          return err;
        });
       // this.AddLogUpdatedPO();
        
       // if (Stock > 0) {
        this.database.executeSql('UPDATE items SET Instock=Instock+?,Sync=? where itemid=?', [Stock, Sync, Id])
          .then(data => {
            console.log('successfully Updated stock');
            
            return data;
          }, err => {
            console.log('Error: ', err);
            return err;
          });
        // }
      }
      this.database.executeSql('INSERT INTO  tblledgervendor (POID,Date,Amount,VendorID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', [rid, date, Total, VendorID, 0, null, 'rizwanali', Remarks, 0])
      .then(data => {
        console.log('successfully Added Ledger');
        return data;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
     
      
      return rid;
     
    }, err => {
      console.log('Error: ', err);
      return err;
      });
      }, err => {
        console.log('Error: ', err);
        return err;
      });
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  addInvoice(AccountId, Cid, CustomerSync,Name, CreateDate, Terms, DueDate, Items, Subtotal, Discount, Total, Message, Status) {
    const a = Math.round((new Date(CreateDate)).getTime() / 1000);
    const b = Math.round((new Date(DueDate)).getTime() / 1000);

    const data = [ AccountId, Cid, Name, a, Terms, b, Subtotal, Discount, Total, Message, 1,0 ];
    // tslint:disable-next-line: max-line-length
    return this.database.executeSql('INSERT INTO  invoices (AccountId,Cid,Name,CreateDate,Terms,DueDate,Subtotal,Discount,Total,Message,Status,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', data)
    .then(data => {

      console.log('successfully Created invoice');
      console.log(data.insertId);
      const Iid = data.insertId;
      for(let i=0;i<Items.length;i++) {
        
        const Id = Items[i].Id;
        const Qty = Items[i].Qty;
        const CostPrice = Items[i].CostPrice;
        const Sync = Items[i].Sync;
        const data1 = [ Iid, Id, Qty, CostPrice, 0 ];
        this.database.executeSql('INSERT INTO  invoiceitems (Iid,Itemid,Qty,CostPrice,Sync) VALUES (?,?,?,?,?)', data1)
        .then(data => {
          console.log('successfully Add item');
          return data;
        }, err => {
          console.log('Error: ', err);
          return err;
        });
        this.database.executeSql('UPDATE items SET Instock=Instock-?,Sync=? where itemid=?', [Qty, Sync, Id])
        .then(data => {
          console.log('successfully Updated stock');
          return data;
        }, err => {
          console.log('Error: ', err);
          return err;
        });
      }
      //clients not sync after adding
      this.database.executeSql('UPDATE clients SET Balance=Balance+?,Sync=? WHERE Cid=?',[Total, CustomerSync, Cid]).then(data => {
        console.log(data);
        ;
        return data;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      //const date1 = this.datePipe.transform(CreateDate, 'dd MMM yyyy');
      //alert('da'+date1);
      this.database.executeSql('INSERT INTO  tblledger (InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', [Iid, a, Total, Cid, 0, b, 'rizwanali', Message, 0])
      .then(data => {
        console.log('successfully Added Ledger');
        return data;
      }, err => {
        console.log('Error: ', err);
        return err;
      });

  
      return Iid;
     
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  getAllInvoices() {
    return this.database.executeSql('Select invoices.Iid,invoices.AccountId,invoices.Cid,invoices.Name,invoices.CreateDate,invoices.Terms,invoices.DueDate,invoices.Subtotal,invoices.Discount,invoices.Total,invoices.Message,invoices.Status,invoices.Sync,clients.Fname,clients.Shop,clients.City,clients.Lname,clients.BillingAddress from invoices,clients WHERE invoices.Cid=clients.Cid', []).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            Iid: data.rows.item(i).Iid,
            AccountId: data.rows.item(i).AccountId,
            Cid: data.rows.item(i).Cid,
            Name: data.rows.item(i).Name,
            CreateDate: data.rows.item(i).CreateDate,
            Terms: data.rows.item(i).Terms,
            DueDate: data.rows.item(i).DueDate,
            Subtotal: data.rows.item(i).Subtotal,
            Discount: data.rows.item(i).Discount,
            Total: data.rows.item(i).Total,
            Message: data.rows.item(i).Message,
            Fname: data.rows.item(i).Fname,
            Shop: data.rows.item(i).Shop,
            City: data.rows.item(i).City,
            Lname: data.rows.item(i).Lname,
            BillingAddress: data.rows.item(i).BillingAddress,
            Status:data.rows.item(i).Status,
            Sync:data.rows.item(i).Sync,
            


           });
        }
      }
      ;
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  
  getAllInvoices2() {
    return this.database.executeSql('Select invoices.Iid,invoices.AccountId,invoices.Cid,invoices.Name,invoices.CreateDate,invoices.Terms,invoices.DueDate,invoices.Subtotal,invoices.Discount,invoices.Total,invoices.Message,invoices.Status,invoices.Sync,clients.Fname,clients.Shop,clients.City,clients.Lname,clients.BillingAddress,clients.Cell from invoices,clients WHERE invoices.Status=1 AND invoices.Cid=clients.Cid ORDER BY invoices.Iid DESC', []).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            Iid: data.rows.item(i).Iid,
            AccountId: data.rows.item(i).AccountId,
            Cid: data.rows.item(i).Cid,
            Name: data.rows.item(i).Name,
            CreateDate: data.rows.item(i).CreateDate,
            Terms: data.rows.item(i).Terms,
            DueDate: data.rows.item(i).DueDate,
            Subtotal: data.rows.item(i).Subtotal,
            Discount: data.rows.item(i).Discount,
            Total: data.rows.item(i).Total,
            Message: data.rows.item(i).Message,
            Fname: data.rows.item(i).Fname,
            Shop: data.rows.item(i).Shop,
            City: data.rows.item(i).City,
            Lname: data.rows.item(i).Lname,
            BillingAddress: data.rows.item(i).BillingAddress,
            Cell: data.rows.item(i).Cell,
            Status:data.rows.item(i).Status,
            Sync:data.rows.item(i).Sync,
            


           });
        }
      }
      ;
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  addUser(Email, Name) {
    const data = [ Email, Name, 1, 0];
    // tslint:disable-next-line: max-line-length
    return this.database.executeSql('INSERT INTO tblUsers(email,name,bActive,Sync) VALUES (?,?,?,?)', data)
    .then(data2 => {
      const Iid = data2.insertId;
      console.log('successfully Created item');
      const data1 = [ 'Client Display', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data1)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data22 = [ 'Client Add', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data22)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data3 = [ 'Client Details', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data3)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data4 = [ 'Client Edit', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data4)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      // const data5 = [ 'Client Add', Iid, 1, 0];
      // // tslint:disable-next-line: max-line-length
      // this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data5)
      // .then(data3 => {
      //   console.log('successfully Created item');
      //   return data3;
      // }, err => {
      //   console.log('Error: ', err);
      //   return err;
      // });
      const data6 = [ 'Item Display', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data6)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data7 = [ 'Item Add', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data7)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data8 = [ 'Item Details', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data8)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data9 = [ 'Item Edit', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data9)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data10 = [ 'Vendor Display', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data10)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data11 = [ 'Vendor Add', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data11)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data12 = [ 'Vendor Details', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data12)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data13 = [ 'Vendor Edit', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data13)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data14 = [ 'Expense Display', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data14)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data21 = [ 'Expense Add', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data21)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data15 = [ 'Expense Details', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data15)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data16 = [ 'Expense Edit', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data16)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data17 = [ 'Invoice Display', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data17)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data18 = [ 'Invoice Add', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data18)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data19 = [ 'Invoice Details', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data19)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data26 = [ 'PO Display', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data26)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data24 = [ 'PO Add', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data24)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data25 = [ 'PO Details', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data25)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      // const data20 = [ 'Order Edit', Iid, 0, 0];
      // // tslint:disable-next-line: max-line-length
      // this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data20)
      // .then(data3 => {
      //   console.log('successfully Created item');
      //   return data3;
      // }, err => {
      //   console.log('Error: ', err);
      //   return err;
      // });
      const data23 = [ 'Log Display', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data23)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      const data27 = [ 'Report Display', Iid, 0, 0];
      // tslint:disable-next-line: max-line-length
      this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data27)
      .then(data3 => {
        console.log('successfully Created item');
        return data3;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      // const data24 = [ 'User Display', Iid, 0, 0];
      // // tslint:disable-next-line: max-line-length
      // this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data24)
      // .then(data3 => {
      //   console.log('successfully Created item');
      //   return data3;
      // }, err => {
      //   console.log('Error: ', err);
      //   return err;
      // });
      // const data26 = [ 'User Add', Iid, 0, 0];
      // // tslint:disable-next-line: max-line-length
      // this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data26)
      // .then(data3 => {
      //   console.log('successfully Created item');
      //   return data3;
      // }, err => {
      //   console.log('Error: ', err);
      //   return err;
      // });
      // const data25 = [ 'User Add', Iid, 0, 0];
      // // tslint:disable-next-line: max-line-length
      // this.database.executeSql('INSERT INTO tblacl(name,userId,bValue,Sync) VALUES (?,?,?,?)', data25)
      // .then(data3 => {
      //   console.log('successfully Created item');
      //   return data3;
      // }, err => {
      //   console.log('Error: ', err);
      //   return err;
      // });


      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  updateUser(ID, Name, Email, Sync)
  {
    // alert('ID = ' + ID + 'name = ' + Name + 'email = ' + Email + 'Sync = ' + Sync )

    return this.database.executeSql('UPDATE tblUsers SET email=?,name=?,Sync=? WHERE ID=?',[Email, Name, Sync, ID]).then(data => {
      console.log(data);
      return 1;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  deleteUser(ID, Sync) {
    return this.database.executeSql('UPDATE tblUsers SET bActive=0,Sync=? WHERE ID=?', [Sync, ID]).then(data => {
      console.log(data);
      return 1;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  activateUser(ID, Sync) {
    ;
    return this.database.executeSql('UPDATE tblUsers SET bActive=1,Sync=? WHERE ID=?', [Sync, ID]).then(data => {
      console.log(data);
      return 1;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  syncAddedUsers() {
    return this.database.executeSql('SELECT * FROM tblUsers where Sync=0', []).then((data) => {
      let items:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            ID: data.rows.item(i).ID,
            email: data.rows.item(i).email,
            name: data.rows.item(i).name,
            bActive: data.rows.item(i).bActive,
            Sync: data.rows.item(i).Sync,
           });
        }
      }
      ;
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  async getUser(id, url) {
    let loading = await this.loadingController.create();
    await loading.present();
    this.database.executeSql('SELECT * FROM tblUsers WHERE ID=?', [id]).then((data) => {
      let items:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            ID: data.rows.item(i).ID,
            email: data.rows.item(i).email,
            name: data.rows.item(i).name,
            bActive: data.rows.item(i).bActive,
            Sync: data.rows.item(i).Sync,

           });
        }
      }
      console.log(items);
      const navigationExtras: NavigationExtras = {
        state: {
          edititem: items[0],
          url: url
        }
      };
      this.router.navigate(['userdetails'], navigationExtras);
      loading.dismiss();
      //return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getAllUser() {
    return this.database.executeSql('SELECT * FROM tblUsers where email!=?', ['test@rizwanali.pk']).then((data) => {
      let items:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            ID: data.rows.item(i).ID,
            email: data.rows.item(i).email,
            name: data.rows.item(i).name,
            bActive: data.rows.item(i).bActive,
            Sync: data.rows.item(i).Sync,

           });
        }
      }
      // alert('active' + items.length)
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getUserssonspot() {
    return this.database.executeSql('SELECT * FROM tblUsers ORDER BY ID DESC LIMIT 0, 1', []).then((data) => {
      let items:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            ID: data.rows.item(i).ID,
           });
        }
      }
      ;
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateSyncedUsers(IDs) {
    for (let i=0; i< IDs.length; i++) {
      return this.database.executeSql('UPDATE  tblUsers Set Sync=1 where ID=?', [IDs[i]]).then((data) => {
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }
   
  }
  syncUpdatedUsers() {
    return this.database.executeSql('SELECT * FROM tblUsers where Sync=2', []).then((data) => {
      let items:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            ID: data.rows.item(i).ID,
            email: data.rows.item(i).email,
            name: data.rows.item(i).name,
            bActive: data.rows.item(i).bActive,
            Sync: data.rows.item(i).Sync,
           });
        }
      }
      ;
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getInvoices2Pagination(from1) {
    // alert('y')
    let total = 0;
    this.database.executeSql('SELECT * From invoices',[]).then((data1) => {
      // total = data1.rows.length;
       console.log('data from'+ data1.rows.length);
       total = data1.rows.length;
       total = data1.rows.length;
      //  alert('s' +  data1.rows.length)
    });
    return this.database.executeSql('Select invoices.Iid,invoices.AccountId,invoices.Cid,invoices.Name,invoices.CreateDate,invoices.Terms,invoices.DueDate,invoices.Subtotal,invoices.Discount,invoices.Total,invoices.Message,invoices.Status,invoices.Sync,clients.Fname,clients.Shop,clients.City,clients.Lname,clients.BillingAddress,clients.Cell,clients.Sync AS clientSync from invoices,clients WHERE invoices.Status!=0 AND invoices.Cid=clients.Cid ORDER BY invoices.Iid DESC limit ?, 10', [from1]).then((data) => {
      let Pos:any = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          const z = new Date(parseInt(data.rows.item(i).CreateDate)*1000).toString();
          const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy h:mm a');
          const y = new Date(parseInt(data.rows.item(i).DueDate)*1000).toString();
          const DueDate =  this.datePipe.transform(y, 'dd MMM yyyy');
          Pos.push({
            Total1: total,
            Iid: data.rows.item(i).Iid,
            AccountId: data.rows.item(i).AccountId,
            Cid: data.rows.item(i).Cid,
            Name: data.rows.item(i).Name,
            clientSync: data.rows.item(i).clientSync,
            CreateDate: CreateDate,
            Terms: data.rows.item(i).Terms,
            DueDate: DueDate,
            Subtotal: data.rows.item(i).Subtotal,
            Discount: data.rows.item(i).Discount,
            Total: data.rows.item(i).Total,
            Message: data.rows.item(i).Message,
            Fname: data.rows.item(i).Fname,
            Shop: data.rows.item(i).Shop,
            City: data.rows.item(i).City,
            Lname: data.rows.item(i).Lname,
            BillingAddress: data.rows.item(i).BillingAddress,
            Cell: data.rows.item(i).Cell,
            Status:data.rows.item(i).Status,
            Sync:data.rows.item(i).Sync,
           });
        }
       // alert('data.rows.length' + data.rows.item(0).Iid);
      }
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  syncUpdatedOrder() {
    return this.database.executeSql('SELECT * From invoices where Sync=2', []).then((data) => {
    let Pos:any = [];
    // alert('syncupdatedorder ' + data.rows.length)
    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        Pos.push({
            Iid: data.rows.item(i).Iid,
            AccountId: data.rows.item(i).AccountId,
            Cid: data.rows.item(i).Cid,
            Name: data.rows.item(i).Name,
            CreateDate: data.rows.item(i).CreateDate,
            Terms: data.rows.item(i).Terms,
            DueDate: data.rows.item(i).DueDate,
            Subtotal: data.rows.item(i).Subtotal,
            Discount: data.rows.item(i).Discount,
            Total: data.rows.item(i).Total,
            Message: data.rows.item(i).Message,
            Status: data.rows.item(i).Status,
  
         });
      }
    }
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
  }
  syncUpdatedInvoicesItems() {
    return this.database.executeSql('Select * from invoiceitems where Sync=2', []).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            Iiid: data.rows.item(i).Iiid,
            Iid: data.rows.item(i).Iid,
            Itemid: data.rows.item(i).Itemid,
            Qty: data.rows.item(i).Qty,
            CostPrice: data.rows.item(i).CostPrice,
           });
        }
      }
      ;
      // alert('invoiceitems  =  ' + Pos.length)
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  syncDeletedLedger() {
    return this.database.executeSql('SELECT * FROM ledgerdel', []).then((data) => {
      let items:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            Oid: data.rows.item(i).Oid,
           });
        }
      }
      ;
      // alert('Deleted OID ' + items.length)
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updatedSyncedDeletedLedger(IDs) {
    for (let i=0; i< IDs.length; i++) {
      return this.database.executeSql('Delete from ledgerdel where Oid=?', [IDs[i]]).then((data) => {
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }
  }
  getAllInvoices3() {
    return this.database.executeSql('Select invoices.Iid,invoices.AccountId,invoices.Cid,invoices.Name,invoices.CreateDate,invoices.Terms,invoices.DueDate,invoices.Subtotal,invoices.Discount,invoices.Total,invoices.Message,invoices.Status,invoices.Sync,clients.Fname,clients.Shop,clients.City,clients.Lname,clients.BillingAddress from invoices,clients WHERE invoices.Status=0 AND invoices.Cid=clients.Cid ORDER BY invoices.Iid DESC', []).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          const z = new Date(parseInt(data.rows.item(i).CreateDate)*1000).toString();
          const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy h:mm a');
          const y = new Date(parseInt(data.rows.item(i).DueDate)*1000).toString();
          const DueDate =  this.datePipe.transform(y, 'dd MMM yyyy');
          Pos.push({
            Iid: data.rows.item(i).Iid,
            AccountId: data.rows.item(i).AccountId,
            Cid: data.rows.item(i).Cid,
            Name: data.rows.item(i).Name,
            CreateDate: CreateDate,
            Terms: data.rows.item(i).Terms,
            DueDate: DueDate,
            Subtotal: data.rows.item(i).Subtotal,
            Discount: data.rows.item(i).Discount,
            Total: data.rows.item(i).Total,
            Message: data.rows.item(i).Message,
            Fname: data.rows.item(i).Fname,
            Shop: data.rows.item(i).Shop,
            City: data.rows.item(i).City,
            Lname: data.rows.item(i).Lname,
            BillingAddress: data.rows.item(i).BillingAddress,
            Status:data.rows.item(i).Status,
            Sync:data.rows.item(i).Sync,
            


           });
        }
      }
      ;
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  getAllInvoices1(ID) {
    return this.database.executeSql('Select *From invoices  where Iid=?' , [ID]).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            Iid: data.rows.item(i).Iid,
            AccountId: data.rows.item(i).AccountId,
            Cid: data.rows.item(i).Cid,
            Name: data.rows.item(i).Name,
            CreateDate: data.rows.item(i).CreateDate,
            Terms: data.rows.item(i).Terms,
            DueDate: data.rows.item(i).DueDate,
            Subtotal: data.rows.item(i).Subtotal,
            Discount: data.rows.item(i).Discount,
            Total: data.rows.item(i).Total,
            Message: data.rows.item(i).Message,
            Fname: data.rows.item(i).Fname,
            Shop: data.rows.item(i).Shop,
            City: data.rows.item(i).City,
            Lname: data.rows.item(i).Lname,
            BillingAddress: data.rows.item(i).BillingAddress

           });
        }
      }
      ;
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getInvoiceItems(Iid) {
    return this.database.executeSql('Select invoiceitems.Iiid,items.Description,items.Instock,items.Sync,invoiceitems.ItemID As Id,invoiceitems.Qty,invoiceitems.CostPrice from items,invoiceitems WHERE invoiceitems.Iid=? AND items.itemid=invoiceitems.Itemid ORDER BY items.itemid', [Iid]).then((data) => {
      let items:any = [];
      let Instock = 0;
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Instock = data.rows.item(i).Instock + data.rows.item(i).Qty;
          items.push({
            Iiid:  data.rows.item(i).Iiid,
            Description: data.rows.item(i).Description,
            Instock: Instock,
            Sync: data.rows.item(i).Sync,
            Id: data.rows.item(i).Id,
            Qty: data.rows.item(i).Qty,
            CostPrice: data.rows.item(i).CostPrice
           
           });
        }
      }
      ;
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getInvoiceCred(Iid){

    return this.database.executeSql('Select invoices.Iid,invoices.AccountId,invoices.Cid,invoices.Name,invoices.CreateDate,invoices.Terms,invoices.DueDate,invoices.Subtotal,invoices.Discount,invoices.Total,invoices.Message from invoices  WHERE invoices.Iid=? ', [Iid]).then((data) => {
      let items:any = [];
      ;
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
  
            Iid: data.rows.item(i).Iid,
            AccountId: data.rows.item(i).AccountId,
            Cid: data.rows.item(i).Cid,
            Name: data.rows.item(i).Name,
            CreateDate: data.rows.item(i).CreateDate,
            Terms: data.rows.item(i).Terms,
            DueDate: data.rows.item(i).DueDate,
            Subtotal: data.rows.item(i).Subtotal,
            Discount: data.rows.item(i).Discount,
            Total: data.rows.item(i).Total,
            Message: data.rows.item(i).Message,

           });
        }
      }
      ;
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });

  }
  deleteBalance(Iid) {
    ;
    return this.getInvoiceCred(Iid).then((Items) => {
  
      for (let i=0;i<=Items.length;i++) {
      
        
          
          this.database.executeSql('UPDATE clients SET Balance=Balance-? where Cid=?', [Items[i].Total, Items[i].Cid])
          .then(data => {
            console.log('successfully Updated Balance');
            
            return data;
          }, err => {
            console.log('Error: ', err);
            return err;
          });

        }
    }); 
    
  }
  getCustomerbalance(CustomerID) {
     let items = [];

     let result = {
      Amount: 0,
      TotalDebit: 0,
      TotalCredit: 0
     }
     this.database.executeSql('SELECT Amount  FROM tblledger where CustomerID=? AND IsCredit=1 ORDER BY Date DESC limit 1', [CustomerID])
    .then(data => {

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          if( data.rows.item(i).Amount === null) {
            result.Amount = 0;
          } else {
            result.Amount = data.rows.item(i).Amount;
          }
        }
      }
      
    
    }, err => {
      console.log('Error: ', err);
      return err;
    });
     this.database.executeSql('SELECT SUM(Amount) AS TotalDebit FROM tblledger where CustomerID=? AND IsCredit=0', [CustomerID])
    .then(data1 => {
      if (data1.rows.length > 0) {
        for (let i = 0; i < data1.rows.length; i++) {
          result.TotalDebit = data1.rows.item(i).TotalDebit;
        }
      }
      
    
    }, err => {
      console.log('Error: ', err);
      return err;
    });
     return this.database.executeSql('SELECT SUM(Amount) AS TotalCredit FROM tblledger where CustomerID=? AND IsCredit=1', [CustomerID])
    .then(data2 => {
      if (data2.rows.length > 0) {
        for (let i = 0; i < data2.rows.length; i++) {
          if(data2.rows.item(i).TotalCredit === null) {
            result.TotalCredit = 0;
          } else {
            result.TotalCredit =  data2.rows.item(i).TotalCredit;
          }
        }
      }
      
       return result;
      
    
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  updateInvoice(invoiceId, AccountId, Cid, Name, CreateDate, Terms, DueDate, Items, Subtotal, Discount, Total, Message, Status,CustomerBalance) {
   
   this.database.executeSql('UPDATE clients SET Balance=Balance+? WHERE Cid=?',[CustomerBalance, Cid]).then(data => {
      console.log(data);
      ;
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
    
   this.database.executeSql('INSERT INTO Invoicedel (Iid)  VALUES (?)', [invoiceId])
    .then(data => {
      
    }, err => {
      console.log('Error: ', err);
      
      return err;
    });
   this.database.executeSql('DELETE from tblledger where InvoiceID=?', [invoiceId])
    .then(data => {
     

    }, err => {
      console.log('Error: ', err);
      
      return err;
    });
    
   return this.database.executeSql('DELETE from invoiceitems where Iid=?', [invoiceId])
     .then(data => {
       console.log('successfully deleted Invoiceitems');
       this.database.executeSql('DELETE from invoices where Iid=?', [invoiceId])
       .then(data1 => {
         console.log('successfully deleted Invoice');
         const data7 = [ AccountId, Cid, Name, CreateDate, Terms, DueDate, Subtotal, Discount, Total, Message, Status, 0 ];
         // tslint:disable-next-line: max-line-length
         return this.database.executeSql('INSERT INTO  invoices (AccountId,Cid,Name,CreateDate,Terms,DueDate,Subtotal,Discount,Total,Message,Status,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', data7)
         .then(data2 => {
           console.log('successfully Created invoice');
           console.log(data2.insertId);
           const Iid = data2.insertId;
           this.updatedIid = data2.insertId;
           this.database.executeSql('UPDATE tblLogs SET tableId=? where tableName=? AND  tableId=?', [this.updatedIid, 'invoices', invoiceId])
           .then(data => {
            this.AddLogUpdatedInvoice();
           }, err => {
           console.log('Error: ', err);
           
           return err;
           });
           for(let i=0;i<Items.length;i++) {
             
             const Id = Items[i].Id;
             const Qty = Items[i].Qty;
             const CostPrice = Items[i].CostPrice;
             const stock = Items[i].stock;
             const Sync = Items[i].Sync;
             const data3 = [ Iid, Id, Qty, CostPrice, 0 ];
             this.database.executeSql('INSERT INTO  invoiceitems (Iid,Itemid,Qty,CostPrice,Sync) VALUES (?,?,?,?,?)', data3)
             .then(data4 => {
               console.log('successfully Add item');
               return data4;
             }, err => {
               console.log('Error: ', err);
               return err;
             });
             
             this.database.executeSql('UPDATE items SET Instock=Instock-?,Sync=? where itemid=?', [stock, Sync, Id])
             .then(data5 => {
               console.log('successfully Updated stock');
               return data5;
             }, err => {
               console.log('Error: ', err);
               return err;
             });
           }
           // this.AddLogUpdatedInvoice();
           this.database.executeSql('INSERT INTO  tblledger (InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks) VALUES (?,?,?,?,?,?,?,?)', [Iid, CreateDate, Total, Cid, 0, DueDate, 'rizwanali', Message])
           .then(data6 => {
             console.log('successfully Updated Ledger');
             return data6;
           }, err => {
             console.log('Error: ', err);
             return err;
           });

           
          
         }, err => {
           console.log('Error: ', err);
           return err;
         });
       }, err => {
         console.log('Error:1 ', err);
         return err;
       });
       return data;
     }, err => {
       console.log('Error: ', err);
       return err;
     });
   }

   updateOrder(invoiceId, AccountId, Cid, Name, CreateDate, Terms, DueDate, Items, Subtotal, Discount, Total, Message, Status ,CustomerBalance, clientSync, invoiceSync) {
    
    const a = Math.round((new Date(CreateDate)).getTime() / 1000);
    const b = Math.round((new Date(DueDate)).getTime() / 1000);
    this.database.executeSql('UPDATE clients SET Balance=Balance+?,Sync=? WHERE Cid=?',[CustomerBalance, clientSync, Cid]).then(data => {
       console.log(data);
       ;
       return data;
     }, err => {
       console.log('Error: ', err);
       return err;
     });
    // this.database.executeSql('UPDATE tblvendors SET Balance=Balance+?,Sync=? WHERE ID=?',[CustomerBalance, VendorSync, VendorID]).then(data => {
    //   console.log(data);
    //   return data;
    // }, err => {
    //   console.log('Error: ', err);
    //   return err;
    // });

    // this.database.executeSql('INSERT INTO Invoicedel (Iid)  VALUES (?)', [invoiceId])
    //  .then(data => {

    //  }, err => {
    //    console.log('Error: ', err);
    //    return err;
    //  });
    this.database.executeSql('DELETE from tblledger where InvoiceID=?', [invoiceId])
     .then(data => {

     }, err => {
       console.log('Error: ', err);
       return err;
     });
    // this.database.executeSql('DELETE from tblledgervendor where POID=?', [invoiceId])
    //  .then(data => {

    //  }, err => {
    //    console.log('Error: ', err);
    //    return err;
    //  });
    this.database.executeSql('INSERT INTO ledgerdel (Oid) VALUES (?)', [invoiceId])
     .then(data => {

     }, err => {
       console.log('Error: ', err);
       return err;
     });

    return this.database.executeSql('DELETE from invoiceitems where Iid=?', [invoiceId])
      .then(data => {
        // alert('successfully deleted Invoiceitems');
        console.log('successfully deleted Invoiceitems');
        this.database.executeSql('DELETE from invoices where Iid=?', [invoiceId])
        .then(data1 => {
         // alert('successfully deleted Invoice');
          // alert('invoiceSync = ' + invoiceSync)
          console.log('successfully deleted Invoice');
          const data7 = [ invoiceId, AccountId, Cid, Name, a, Terms, b, Subtotal, Discount, Total, Message, Status, invoiceSync ];
          // tslint:disable-next-line: max-line-length
          return this.database.executeSql('INSERT INTO  invoices (Iid,AccountId,Cid,Name,CreateDate,Terms,DueDate,Subtotal,Discount,Total,Message,Status,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', data7)
          .then(data2 => {
           // alert('successfully Created invoice');
            console.log('successfully Created invoice');
            console.log(data2.insertId);
            const Iid = data2.insertId;
            this.updatedIid = data2.insertId;
            this.database.executeSql('UPDATE tblLogs SET tableId=? where tableName=? AND  tableId=?', [invoiceId, 'invoices', invoiceId])
            .then( data => {
             this.AddLogUpdatedInvoice();
            }, err => {
            console.log('Error: ', err);
            return err;
            });
            for(let i=0;i<Items.length;i++) {
              const Iiid = Items[i].Iiid;
              const Id = Items[i].Id;
              const Qty = Items[i].Qty;
              const CostPrice = Items[i].CostPrice;
              const stock = Items[i].stock;
              const Sync = Items[i].Sync;
              const data3 = [ Iiid, invoiceId, Id, Qty, CostPrice, Sync ];
              this.database.executeSql('INSERT INTO  invoiceitems (Iiid,Iid,Itemid,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data3)
              .then(data4 => {
                console.log('successfully Add item');
                return data4;
              }, err => {
                console.log('Error: ', err);
                return err;
              });
              this.database.executeSql('UPDATE items SET Instock=Instock-?,Sync=? where itemid=?', [stock, Sync, Id])
              .then(data5 => {
                console.log('successfully Updated stock');
                return data5;
              }, err => {
                console.log('Error: ', err);
                return err;
              });
            }
            // this.AddLogUpdatedInvoice();
            this.database.executeSql('INSERT INTO  tblledger (InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', [invoiceId, a, Total, Cid, 0, b, 'rizwanali', Message,0])
            .then(data6 => {
              // alert('successfully Added client Ledger')
              console.log('successfully Updated Ledger');
              return data6;
            }, err => {
              console.log('Error: ', err);
              return err;
            });
            // this.database.executeSql('INSERT INTO  tblledgervendor (POID,Date,Amount,VendorID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', [invoiceId, CreateDate, Total, VendorID, 0, null, 'rizwanali', Message, 0])
            // .then(data => {
            //  // alert('successfully Updated venfor ledger')
            //   console.log('successfully Added Ledger');
            //   return data;
            // }, err => {
            //   console.log('Error: ', err);
            //   return err;
            // });
 

          }, err => {
            console.log('Error: ', err);
            return err;
          });
        }, err => {
          console.log('Error:1 ', err);
          return err;
        });
        return data;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
    }


   updateInvoicePayment(invoiceId, AccountId, Cid, Name, CreateDate, Terms, DueDate, Items, Subtotal, Discount, Total, PaidDate, Paid, Message, Status) {
    return this.database.executeSql('DELETE from invoiceitems where Iid=?', [invoiceId])
     .then(data => {
       console.log('successfully deleted Invoiceitems');
       this.database.executeSql('DELETE from invoices where Iid=?', [invoiceId])
       .then(data1 => {
         console.log('successfully deleted Invoice');
         const data7 = [ AccountId, Cid, Name, CreateDate, Terms, DueDate, Subtotal, Discount, Total, Message, 0 ];
         // tslint:disable-next-line: max-line-length
         return this.database.executeSql('INSERT INTO  invoices (AccountId,Cid,Name,CreateDate,Terms,DueDate,Subtotal,Discount,Total,Message,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?)', data7)
         .then(data2 => {
           console.log('successfully Created invoice');
           console.log(data2.insertId);
           const Iid = data2.insertId;
           for(let i=0;i<Items.length;i++) {
             
             const Id = Items[i].Id;
             const Qty = Items[i].Qty;
             const CostPrice = Items[i].CostPrice;
             const stock = Items[i].stock;
             const data3 = [ Iid, Id, Qty, CostPrice, 0 ];
             this.database.executeSql('INSERT INTO  invoiceitems (Iid,Itemid,Qty,CostPrice,Sync) VALUES (?,?,?,?,?)', data3)
             .then(data4 => {
               console.log('successfully Add item');
               return data4;
             }, err => {
               console.log('Error: ', err);
               return err;
             });
             this.database.executeSql('UPDATE items SET Instock=Instock-? where itemid=?', [stock, Id])
             .then(data5 => {
               console.log('successfully Updated stock');
               return data5;
             }, err => {
               console.log('Error: ', err);
               return err;
             });
           }
          //  this.database.executeSql('INSERT INTO  tblledger (InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks) VALUES (?,?,?,?,?,?,?,?)', [Iid, CreateDate, Total, Cid, 0, DueDate, 'rizwanali', Message])
          //  .then(data6 => {
          //    console.log('successfully Updated Ledger');
          //    return data6;
          //  }, err => {
          //    console.log('Error: ', err);
          //    return err;
          //  });
          
          const data3 = [ Iid, PaidDate, Paid, Cid, 1, null, 'rizeanali', null, 0];
        //  const data3 = [ Iid, PaidDate, Paid, Cid, 1, PaidDate, 'rizeanali', null, 0];

           this.database.executeSql('INSERT INTO  tblledger(InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data3)
          .then(data4 => {
            console.log('successfully Add Payment');
            return data4;
          }, err => {
            console.log('Error: ', err);
            return err;
          });
          
         }, err => {
           console.log('Error: ', err);
           return err;
         });
       }, err => {
         console.log('Error:1 ', err);
         return err;
       });
       return data;
     }, err => {
       console.log('Error: ', err);
       return err;
     });
   }
   syncAddedItems() {
    
    return this.database.executeSql('SELECT * FROM items where Sync=0', []).then((data) => {
      let items:any = [];

      
      if (data.rows.length > 0) {
        
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            itemid: data.rows.item(i).itemid,
            AccountId: data.rows.item(i).AccountId,
            Description: data.rows.item(i).Description,
            Rate: data.rows.item(i).Rate,
            Cost: data.rows.item(i).Cost,
            Instock: data.rows.item(i).Instock,
            Active: data.rows.item(i).Active,
           });
          this.database.executeSql('UPDATE  items Set Sync=1 where itemid=?', [data.rows.item(i).itemid]).then((data) => {
            console.log('y' + data);
            return data;
          }, err => {
            console.log('Error: ', err);
            return [];
          });
        }
       
      }
      ;
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  syncUpdatedItems() {
    return this.database.executeSql('SELECT * FROM items where Sync=2', []).then((data) => {
      let items:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            itemid: data.rows.item(i).itemid,
            Description: data.rows.item(i).Description,
            Rate: data.rows.item(i).Rate,
            Cost: data.rows.item(i).Cost,
            Instock: data.rows.item(i).Instock,
            Active: data.rows.item(i).Active,
           });
        }
      }
      ;
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getItemssonspot() {
    return this.database.executeSql('SELECT * FROM items ORDER BY itemid DESC LIMIT 0, 1', []).then((data) => {
      let items:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            itemid: data.rows.item(i).itemid,
            Description: data.rows.item(i).Description,
            Rate: data.rows.item(i).Rate,
            Cost: data.rows.item(i).Cost,
            Instock: data.rows.item(i).Instock,
            Active: data.rows.item(i).Active,
           });
        }
      }
      ;
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateSyncedItems(IDs) {
    for (let i=0; i< IDs.length; i++) {
      return this.database.executeSql('UPDATE  items Set Sync=1 where itemid=?', [IDs[i]]).then((data) => {
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }
   
  }
  syncAddedClients() {
    return this.database.executeSql('SELECT * FROM clients where Sync=0', []).then((data) => {
      let clients:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          clients.push({
            Cid: data.rows.item(i).Cid,
            AccountId: data.rows.item(i).AccountId,
            Fname: data.rows.item(i).Fname,
            Lname: data.rows.item(i).Lname,
            Shop: data.rows.item(i).Shop,
            BillingAddress: data.rows.item(i).BillingAddress,
            City: data.rows.item(i).City,
            Cell: data.rows.item(i).Cell,
            Balance: data.rows.item(i).Balance,
            Active: data.rows.item(i).Active,
            //Sync: data.rows.item(i).Sync,

           });
        }
      }
      ;
      console.log(clients);
      return clients;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  syncUpdatedClients() {
    return this.database.executeSql('SELECT * FROM clients where Sync=2', []).then((data) => {
      let clients:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          clients.push({
            Cid: data.rows.item(i).Cid,
            Fname: data.rows.item(i).Fname,
            Lname: data.rows.item(i).Lname,
            Shop: data.rows.item(i).Shop,
            BillingAddress: data.rows.item(i).BillingAddress,
            City: data.rows.item(i).City,
            Cell: data.rows.item(i).Cell,
            Balance: data.rows.item(i).Balance,
            Active: data.rows.item(i).Active,
           });
        }
      }
      ;

      console.log(clients);
      return clients;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateSyncedClients(IDs) {
    for (let i=0; i< IDs.length; i++) {
      return this.database.executeSql('UPDATE  clients Set Sync=1 where Cid=?', [IDs[i]]).then((data) => {
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }
   
  }
  syncAddedVendors() {
    return this.database.executeSql('SELECT * FROM tblvendors where Sync=0', []).then((data) => {
      let vedndors:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          vedndors.push({
            ID: data.rows.item(i).ID,
            Name: data.rows.item(i).Name,
            Address: data.rows.item(i).Address,
            Phone: data.rows.item(i).Phone,
            Email: data.rows.item(i).Email,
            bActive: data.rows.item(i).bActive,
            Balance: data.rows.item(i).Balance,
            //Sync: data.rows.item(i).Sync,

           });
            this.database.executeSql('UPDATE  tblvendors Set Sync=1 where ID=?', [data.rows.item(i).ID]).then((data) => {
            console.log(data);
            return data;
          }, err => {
            console.log('Error: ', err);
            return [];
          });
        }
      }
      ;
      console.log(vedndors);
      return vedndors;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  syncUpdatedVendors() {
    
    return this.database.executeSql('SELECT * FROM tblvendors where Sync=2', []).then((data) => {
      let vedndors:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          vedndors.push({
            ID: data.rows.item(i).ID,
            Name: data.rows.item(i).Name,
            Address: data.rows.item(i).Address,
            Phone: data.rows.item(i).Phone,
            Email: data.rows.item(i).Email,
            bActive: data.rows.item(i).bActive,
            Balance: data.rows.item(i).Balance,

           });
        }
      }
      ;
      console.log(vedndors);
      return vedndors;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateSyncedVendors(IDs) {
    for (let i=0; i< IDs.length; i++) {
      return this.database.executeSql('UPDATE  tblvendors Set Sync=1 where ID=?', [IDs[i]]).then((data) => {
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }
  }
  syncAddedPOS() {
    return this.database.executeSql('Select * from tblpurchasedorder where Sync=0', []).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            ID: data.rows.item(i).ID,
            VendorID: data.rows.item(i).VendorID,
            Date: data.rows.item(i).Date,
            ReceivedBy: data.rows.item(i).ReceivedBy,
            Total: data.rows.item(i).Total,
            Remarks: data.rows.item(i).Remarks,
            Discount: data.rows.item(i).Discount,
            Active: data.rows.item(i).Active,
           });
        }
      }
      ;
      
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateSyncedPOS(IDs) {
    
    for (let i=0; i< IDs.length; i++) {//'UPDATE tblpurchasedorder SET Active=0,Sync=2 where ID=?,UPDATE  tblpurchasedorder SET Sync=1 where ID=?
      return  this.database.executeSql('UPDATE tblpurchasedorder SET Sync=1 where ID=?',[IDs[i]])
      .then(data => {
        console.log('successfully Updated stock');
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }
  }
  syncAddedPOsItems() {
    return this.database.executeSql('Select * from tblpodetail where Sync=0', []).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            ID: data.rows.item(i).ID,
            Poid: data.rows.item(i).Poid,
            ItemID: data.rows.item(i).ItemID,
            Qty: data.rows.item(i).Qty,
            CostPrice: data.rows.item(i).CostPrice,
           });
        }
      }
      ;
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateSyncedPOSItems(IDs) {
    for (let i=0; i< IDs.length; i++) {//'UPDATE tblpurchasedorder SET Active=0,Sync=2 where ID=?
      return this.database.executeSql('UPDATE  tblpodetail Set Sync=1 where ID=?', [IDs[i]]).then((data) => {
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }
  }
  syncAddedInvoices() {
    return this.database.executeSql('Select * from invoices WHERE Sync=0', []).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            Iid: data.rows.item(i).Iid,
            AccountId: data.rows.item(i).AccountId,
            Cid: data.rows.item(i).Cid,
            Name: data.rows.item(i).Name,
            CreateDate: data.rows.item(i).CreateDate,
            Terms: data.rows.item(i).Terms,
            DueDate: data.rows.item(i).DueDate,
            Subtotal: data.rows.item(i).Subtotal,
            Discount: data.rows.item(i).Discount,
            Total: data.rows.item(i).Total,
            Message: data.rows.item(i).Message,
            Status: data.rows.item(i).Status,
           });
        }
      }
      ;
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  syncMarkAsPaidInvoices() {
    return this.database.executeSql('Select * from invoices WHERE Sync=2', []).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            Iid: data.rows.item(i).Iid,
            AccountId: data.rows.item(i).AccountId,
            Cid: data.rows.item(i).Cid,
            Name: data.rows.item(i).Name,
            CreateDate: data.rows.item(i).CreateDate,
            Terms: data.rows.item(i).Terms,
            DueDate: data.rows.item(i).DueDate,
            Subtotal: data.rows.item(i).Subtotal,
            Discount: data.rows.item(i).Discount,
            Total: data.rows.item(i).Total,
            Message: data.rows.item(i).Message,
            Status: data.rows.item(i).Status,
           });
        }
      }
      ;
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateSyncedInvoices(IDs) {
    for (let i=0; i< IDs.length; i++) {
      return this.database.executeSql('UPDATE  invoices Set Sync=1 where Iid=?', [IDs[i]]).then((data) => {
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }
  }
  syncAddedInvoicesItems() {
    return this.database.executeSql('Select * from invoiceitems where Sync=0', []).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            Iiid: data.rows.item(i).Iiid,
            Iid: data.rows.item(i).Iid,
            Itemid: data.rows.item(i).Itemid,
            Qty: data.rows.item(i).Qty,
            CostPrice: data.rows.item(i).CostPrice,
           });
        }
      }
      ;
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateSyncedInvoicesItems(IDs) {
    for (let i=0; i< IDs.length; i++) {
      return this.database.executeSql('UPDATE  invoiceitems Set Sync=1 where Iiid=?', [IDs[i]]).then((data) => {
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }
  }
  syncAddedLedger() {
    return this.database.executeSql('Select * from tblledger WHERE Sync=0', []).then((data) => {
      let ledger:any = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          ledger.push({
            ID: data.rows.item(i).ID,
            InvoiceID: data.rows.item(i).InvoiceID,
            Date: data.rows.item(i).Date,
            Amount: data.rows.item(i).Amount,
            CustomerID: data.rows.item(i).CustomerID,
            IsCredit: data.rows.item(i).IsCredit,
            //DueDate: data.rows.item(i).DueDate,
            DueDate: data.rows.item(i).Date,
            ByUserId: data.rows.item(i).ByUserId,
            Remarks: data.rows.item(i).Remarks,
           });
        }
      }
      ;
      
      // alert('addedledger = ' + ledger.length)
      console.log('check this = ' + ledger[0]);
      return ledger;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  syncUpdatedLedger() {
    return this.database.executeSql('Select * from tblledger WHERE Sync=2', []).then((data) => {
      let ledger:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          ledger.push({
            ID: data.rows.item(i).ID,
            InvoiceID: data.rows.item(i).InvoiceID,
            Date: data.rows.item(i).Date,
            Amount: data.rows.item(i).Amount,
            CustomerID: data.rows.item(i).CustomerID,
            IsCredit: data.rows.item(i).IsCredit,
            //DueDate: data.rows.item(i).DueDate,
            DueDate: data.rows.item(i).Date,
            ByUserId: data.rows.item(i).ByUserId,
            Remarks: data.rows.item(i).Remarks,
           });
        }
      }
      ;
      console.log(ledger);
      return ledger;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  syncAddedLedgerVendor() {
    
    return this.database.executeSql('Select * from tblledgervendor WHERE Sync=0', []).then((data) => {
      let ledger:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          ledger.push({
            ID: data.rows.item(i).ID,
            POID: data.rows.item(i).POID,
            Date: data.rows.item(i).Date,
            Amount: data.rows.item(i).Amount,
            VendorID: data.rows.item(i).VendorID,
            IsCredit: data.rows.item(i).IsCredit,
            //DueDate: data.rows.item(i).DueDate,
            DueDate: data.rows.item(i).Date,
            ByUserId: data.rows.item(i).ByUserId,
            Remarks: data.rows.item(i).Remarks,
           });
        }
      }
      ;
      console.log(ledger);
      return ledger;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  syncUpdatedLedgerVendor() {
    
    return this.database.executeSql('Select * from tblledgervendor WHERE Sync=2', []).then((data) => {
      let ledger:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          ledger.push({
            ID: data.rows.item(i).ID,
            POID: data.rows.item(i).POID,
            Date: data.rows.item(i).Date,
            Amount: data.rows.item(i).Amount,
            VendorID: data.rows.item(i).VendorID,
            IsCredit: data.rows.item(i).IsCredit,
            //DueDate: data.rows.item(i).DueDate,
            DueDate: data.rows.item(i).Date,
            ByUserId: data.rows.item(i).ByUserId,
            Remarks: data.rows.item(i).Remarks,
           });
        }
      }
      ;
      // alert('syncAddedLedgerVendor ' + ledger.length)
      console.log(ledger);
      return ledger;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateSyncedAddedLedger(IDs) {
    for (let i=0; i< IDs.length; i++) {
      return this.database.executeSql('UPDATE  tblledger Set Sync=1 where ID=?', [IDs[i]]).then((data) => {
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }
  }
  updateSyncedAddedLedgerVendors(IDs) {
    for (let i=0; i< IDs.length; i++) {
      return this.database.executeSql('UPDATE  tblledgervendors Set Sync=1 where ID=?', [IDs[i]]).then((data) => {
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
    }
  }
  getAlldelPOS() {
    return this.database.executeSql('Select * from POdel', []).then(data => {
      console.log(data);
      let POIDs = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          POIDs.push({
            ID: data.rows.item(i).POid,
           });
        }
      }
      
      return POIDs;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  updatedelsPOS() {
  
      return this.database.executeSql('DELETE from  POdel', []).then((data) => {
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
  }
  getAlldelInvoices() {
    return this.database.executeSql('Select * from Invoicedel', []).then(data => {
      console.log(data);
      let POIDs = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          POIDs.push({
            ID: data.rows.item(i).Iid,
           });
        }
      }
      
      return POIDs;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  updatedelsInvoices() {
  
      return this.database.executeSql('DELETE from  Invoicedel', []).then((data) => {
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      });
  }
  async getItem(id, url) {
    let loading = await this.loadingController.create();
    await loading.present();
    this.database.executeSql('SELECT * FROM items WHERE itemid=?', [id]).then((data) => {
      let items:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
            itemid: data.rows.item(i).itemid,
            AccountId: data.rows.item(i).AccountId,
            Description: data.rows.item(i).Description,
            Rate: data.rows.item(i).Rate,
            Cost: data.rows.item(i).Cost,
            Instock: data.rows.item(i).Instock,
            Active: data.rows.item(i).Active,
            Sync: data.rows.item(i).Sync,

           });
        }
      }
      ;
      console.log(items);
      const navigationExtras: NavigationExtras = {
        state: {
          edititem: items[0],
          url: url
        }
      };
      this.router.navigate(['menu-itemdetails'], navigationExtras);
      loading.dismiss();
      //return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  async getClient(id, url) {
    let loading = await this.loadingController.create();
    await loading.present();
    return this.database.executeSql('SELECT * FROM clients where Cid=?', [id]).then((data) => {
      let clients:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          clients.push({
            Cid: data.rows.item(i).Cid,
            AccountId: data.rows.item(i).AccountId,
            Fname: data.rows.item(i).Fname,
            Lname: data.rows.item(i).Lname,
            Shop: data.rows.item(i).Shop,
            BillingAddress: data.rows.item(i).BillingAddress,
            City: data.rows.item(i).City,
            Cell: data.rows.item(i).Cell,
            Active: data.rows.item(i).Active,
            Balance:  data.rows.item(i).Balance,
            Sync: data.rows.item(i).Sync,
            

           });
           
        }
      }
      ;
      
      console.log(clients);
      const navigationExtras: NavigationExtras = {
        state: {
          editclient: clients[0],
          url: url
        }
      };
      
      this.router.navigate(['menu-clientdetails'], navigationExtras);
      loading.dismiss();
      return clients;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  async getVendor(id) {
    let loading = await this.loadingController.create();
    await loading.present();
      this.database.executeSql('SELECT * FROM tblvendors where ID=?', [id]).then((data) => {
      let vedndors:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          vedndors.push({
            ID: data.rows.item(i).ID,
            Name: data.rows.item(i).Name,
            Address: data.rows.item(i).Address,
            Phone: data.rows.item(i).Phone,
            Email: data.rows.item(i).Email,
            bActive: data.rows.item(i).bActive,
            Balance: data.rows.item(i).Balance,
            Sync: data.rows.item(i).Sync,

           });
        }
      }
      ;
      console.log(vedndors);
      const navigationExtras: NavigationExtras = {
        state: {
          editvendor: vedndors[0]
        }
      };
      
      this.router.navigate(['vendor-edit'], navigationExtras);
      loading.dismiss()
     // return vedndors;
    }, err => {
      console.log('Error: ', err);
     // return [];
    });
  }
  getClientLedger(ID) {
    
    return this.database.executeSql('SELECT * FROM tblledger where CustomerID=? ORDER BY ID DESC', [ID]).then((data) => {
    let ledger:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        const ClientID=
        ledger.push({
          ID:  data.rows.item(i).ID,
          InvoiceID: data.rows.item(i).InvoiceID,
          Date: data.rows.item(i).Date,
          Amount: data.rows.item(i).Amount,
          IsCredit: data.rows.item(i).IsCredit,
          Remarks: data.rows.item(i).Remarks,
          Sync: data.rows.item(i).Sync,

         });
      }
    }
    ;
    console.log(ledger);
    return ledger;
    
  }, err => {
    console.log('Error: ', err);
   // return [];
  });

  }

  getAllClientLedger() {
    
    return this.database.executeSql('SELECT * FROM tblledger  ', []).then((data) => {
    let ledger:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        ledger.push({
          InvoiceID:data.rows.item(i).InvoiceID,
          DueDate:data.rows.item(i).DueDate,
          CustomerID:data.rows.item(i).CustomerID,
          Date: data.rows.item(i).Date,
          Amount: data.rows.item(i).Amount,
          IsCredit: data.rows.item(i).IsCredit,
          Remarks: data.rows.item(i).Remarks,

         });
      }
    }
    ;
    console.log(ledger);
    return ledger;
  }, err => {
    console.log('Error: ', err);
   // return [];
  });
  }

  getVendorLedger(ID) {
    
    return this.database.executeSql('SELECT * FROM tblledgervendor where VendorID=? ORDER BY ID DESC', [ID]).then((data) => {
    let ledger:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        ledger.push({
          ID: data.rows.item(i).ID,
          POID: data.rows.item(i).POID,
          Date: data.rows.item(i).Date,
          Amount: data.rows.item(i).Amount,
          IsCredit: data.rows.item(i).IsCredit,
          Remarks: data.rows.item(i).Remarks,
          Sync: data.rows.item(i).Sync,

         });
      }
    }
    ;
    
    console.log(ledger);
    return ledger;
  }, err => {
    console.log('Error: ', err);
   // return [];
  });
  }
  getAllVendorLedger() {
    debugger
    return this.database.executeSql('SELECT * FROM tblledgervendor', []).then((data) => {
    let ledger:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        ledger.push({
          Date: data.rows.item(i).Date,
          Amount: data.rows.item(i).Amount,
          IsCredit: data.rows.item(i).IsCredit,
          Remarks: data.rows.item(i).Remarks,

         });
      }
    }
    ;
    
    console.log(ledger);
    return ledger;
  }, err => {
    console.log('Error: ', err);
   // return [];
  });
  }
  addPayment(CustomerID, CustomerSync,date, Amount, Remarks) {
     const a = Math.round((new Date(date)).getTime() / 1000);

    // const date1 = '20191230';
     // tslint:disable-next-line: max-line-length
     return this.database.executeSql('INSERT INTO  tblledger(InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', [null, a, Amount, CustomerID, 1, null, 'rizwanali', Remarks, 0]).then((data) => {
       
    // this.router.navigate(['/menu/clients']);
    // tslint:disable-next-line: max-line-length
     this.database.executeSql('UPDATE clients SET Balance=Balance-?,Sync=? WHERE Cid=?',[Amount,CustomerSync , CustomerID]).then(data => {
      console.log(data);
      ;
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
     return data;
    }, err => {
      return err;
      console.log('Error: ', err);
      return err;
    });

    
  }
  editPayment(CustomerID, CustomerSync,date, Amount, Remarks,ledgerID, OldAmount, LedgerSync) {
    const a = Math.round((new Date(date)).getTime() / 1000);
    // alert('old = '+ OldAmount + '\nNew = ' + Amount)
    this.database.executeSql('UPDATE clients SET Balance=Balance+? WHERE Cid=?',[OldAmount , CustomerID]).then(data => {
        //  alert('ys')
    });
    // alert('LedgerSync = ' + LedgerSync)
   // const date1 = '20191230';
    // tslint:disable-next-line: max-line-length
    // return this.database.executeSql('INSERT INTO  tblledger(InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', [null, a, Amount, CustomerID, 1, null, 'rizwanali', Remarks, 0]).then((data) => {
    return this.database.executeSql('UPDATE tblledger SET Amount=?,Remarks=?,Sync=? WHERE ID=?', [Amount, Remarks, LedgerSync, ledgerID]).then((data) => {

   // this.router.navigate(['/menu/clients']);
   // tslint:disable-next-line: max-line-length
    this.database.executeSql('UPDATE clients SET Balance=Balance-?,Sync=? WHERE Cid=?',[Amount,CustomerSync , CustomerID]).then(data => {
     console.log(data);
     ;
     return data;
   }, err => {
     console.log('Error: ', err);
     return err;
   });
    return data;
   }, err => {
     return err;
     console.log('Error: ', err);
     return err;
   });

   
 }
  getPayment() {
    return this.database.executeSql('Select * from tblledger', []).then(data => {
      console.log(data);
      let payments = [];
      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          payments.push({
            ID: data.rows.item(i).ID,
            Amount: data.rows.item(i).Amount,
            Date: data.rows.item(i).Date
           });
        }
      }
      
      return payments;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  addPaymentVendor(VendorID, VendorSync, date, Amount, Remarks) {
    // alert('vendorSync' + VendorSync)
   // const b = Math.round((new Date('30 Jan 2019')).getTime() / 1000);
    // tslint:disable-next-line: max-line-length
    return this.database.executeSql('INSERT INTO  tblledgervendor(POID,Date,Amount,VendorID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', [null, date, Amount, VendorID, 1, null, 'rizwanali', Remarks, 0]).then((data) => {
      // tslint:disable-next-line: max-line-length
      return this.database.executeSql('UPDATE tblvendors SET Balance=Balance-?,Sync=? WHERE ID=?',[Amount, VendorSync, VendorID]).then(data => {
        console.log(data);
        return 1;
      }, err => {
        console.log('Error: ', err);
        return err;
      });
      
      ;
   // this.router.navigate(['/menu/clients']);
    return data;
   }, err => {
     return err;
     console.log('Error: ', err);
     return err;
   });
   ;
 }
 editPaymentVendor(VendorID, VendorSync, date, Amount, Remarks, PaymentID, OldAmount, LedgerSync) {
  //  alert('old = '+ OldAmount + '\nNew = ' + Amount)
   this.database.executeSql('UPDATE tblvendors SET Balance=Balance+? WHERE ID=?',[OldAmount, VendorID]).then(data => {
    // alert('ys')

  });
  // const b = Math.round((new Date('30 Jan 2019')).getTime() / 1000);
  //  return this.database.executeSql('INSERT INTO  tblledgervendor(POID,Date,Amount,VendorID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', [null, date, Amount, VendorID, 1, null, 'rizwanali', Remarks, 0]).then((data) => {
     // tslint:disable-next-line: max-line-length  
   return this.database.executeSql('UPDATE tblledgervendor  SET Amount=?,Remarks=?,Sync=? WHERE ID=?', [Amount, Remarks, LedgerSync, PaymentID]).then((data) => {
 
    // tslint:disable-next-line: max-line-length
      this.database.executeSql('UPDATE tblvendors SET Balance=Balance-?,Sync=? WHERE ID=?',[Amount, VendorSync, VendorID]).then(data => {
       console.log(data);
       return 1;
     }, err => {
       console.log('Error: ', err);
       return err;
     });
     
     ;
  // this.router.navigate(['/menu/clients']);
   return data;
  }, err => {
    return err;
    console.log('Error: ', err);
    return err;
  });
  ;
}

  async getPO(POID) {
    let loading = await this.loadingController.create();
    await loading.present();
    return this.database.executeSql('Select tblpurchasedorder.ID,tblpurchasedorder.VendorID,tblpurchasedorder.Date,tblpurchasedorder.ReceivedBy,tblpurchasedorder.Total,tblpurchasedorder.Remarks,tblpurchasedorder.Discount,tblpurchasedorder.Active,tblpurchasedorder.Sync,tblvendors.Name,tblvendors.Address,tblvendors.Phone,tblvendors.Email,tblvendors.bActive from tblpurchasedorder,tblvendors WHERE tblpurchasedorder.ID=? AND tblpurchasedorder.VendorID=tblvendors.ID', [POID]).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            ID: data.rows.item(i).ID,
            VendorID: data.rows.item(i).VendorID,
            Date: data.rows.item(i).Date,
            ReceivedBy: data.rows.item(i).ReceivedBy,
            Total: data.rows.item(i).Total,
            Remarks: data.rows.item(i).Remarks,
            Discount: data.rows.item(i).Discount,
            Active: data.rows.item(i).Active,
            Sync: data.rows.item(i).Sync,
            Name: data.rows.item(i).Name

           });
        }
      }
      ;
      this.getPOItems(POID).then((data) => {
        
        const items = data;
        const navigationExtras: NavigationExtras = {
          state: {
            PO: Pos[0],
            Items: items,
            url: '/menu/logs'
          }
        };
        
        this.router.navigate(['podetails'], navigationExtras);
        loading.dismiss();
      });
      console.log(Pos);
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  async getInvoice(Iid,url) {
    let loading = await this.loadingController.create();
    await loading.present();
    return this.database.executeSql('Select invoices.Iid,invoices.AccountId,invoices.Cid,invoices.Name,invoices.CreateDate,invoices.Terms,invoices.DueDate,invoices.Subtotal,invoices.Discount,invoices.Total,invoices.Message,invoices.Status,invoices.Sync,clients.Fname,clients.Shop,clients.City,clients.Lname,clients.BillingAddress,clients.Sync AS clientSync from invoices,clients WHERE invoices.Iid=? AND invoices.Cid=clients.Cid', [Iid]).then((data) => {
      let Pos:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          const z = new Date(parseInt(data.rows.item(i).CreateDate)*1000).toString();
          const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy h:mm a');
          const y = new Date(parseInt(data.rows.item(i).DueDate)*1000).toString();
          const DueDate =  this.datePipe.transform(y, 'dd MMM yyyy');
          Pos.push({
            Iid: data.rows.item(i).Iid,
            AccountId: data.rows.item(i).AccountId,
            Cid: data.rows.item(i).Cid,
            Name: data.rows.item(i).Name,
            CreateDate: CreateDate,
            Terms: data.rows.item(i).Terms,
            DueDate: DueDate,
            clientSync: data.rows.item(i).clientSync,
            Subtotal: data.rows.item(i).Subtotal,
            Discount: data.rows.item(i).Discount,
            Total: data.rows.item(i).Total,
            Message: data.rows.item(i).Message,
            Fname: data.rows.item(i).Fname,
            Shop: data.rows.item(i).Shop,
            City: data.rows.item(i).City,
            Lname: data.rows.item(i).Lname,
            Status:data.rows.item(i).Status,
            BillingAddress: data.rows.item(i).BillingAddress,
            Sync:data.rows.item(i).Sync,

           });
        }
      }
      ;
      console.log(Pos);
      this.getInvoiceItems(Iid).then((data) => {
        
        const items = data;
        const navigationExtras: NavigationExtras = {
          state: {
            invoice: Pos[0],
            Items: items,
            url: url
          }
        };
        this.router.navigate(['invoicedetails'], navigationExtras);
        loading.dismiss();
      });
      return Pos;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getUpdatedPOID() {
    return this.updatedPOID;
  }
  getUpdatedIid() {
    return this.updatedIid;
  }
  AddLogUpdatedPO(){
    
    let acttype:any;
    if (this.usdId === 1) {
      acttype = 'Adnan Ali edited';
    } else {
      acttype = 'Test edited';
    }
    const name = 'Purchased Order';
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'MMMM dd, yyy h:mm a');
    const lgdate = 'at ' + a;
    const tblName = 'tblpurchasedorder';
    // this.tblId = this.PO.ID;
    const tblId = this.getUpdatedPOID();
     //tblName,tblId,this.usdId,this.acttype,this.name,this.lgdate
    
    this.addLogs(tblName,tblId,this.usdId,acttype,name,lgdate).then(data => {
      
          console.log("Log has been added");
          //this.GetLogs();
          
    });
  }
  AddLogUpdatedInvoice(){
    let acttype:any;
    if (this.usdId === 1) {
      acttype = 'You edited';
    } else {
      acttype = 'You edited';
    }
    const name = 'Invoice';
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'MMMM dd, yyy h:mm a');
    const lgdate = 'at ' + a;
    const tblName = 'invoices';
    // this.tblId = this.PO.ID;
    const tblId = this.getUpdatedIid();
     //tblName,tblId,this.usdId,this.acttype,this.name,this.lgdate
    
    this.addLogs(tblName,tblId,this.usdId,acttype,name,lgdate).then(data => {
      
          console.log("Log has been added");
          //this.GetLogs();
          
    });
  }
  serverSync() {
    
    
    console.log('server sync');
    let a = 0;
    this.getAllItems().then(data => {
      if (data.length>0) {
        a = 1;
        console.log(a);
      }
      
      this.getAllClients().then(data1 => {
        if (data1.length>0) {
          a = 1;
          console.log(a);
        }
        
        this.getAllVendors().then(data2 => {
          if (data2.length>0) {
            a = 1;
            console.log(a);
          }
          if (a === 0) {
               console.log('no data(no)');
               console.log(a);
               
              // this.syncDataServertoApp();
             
          } else {
            console.log('data');
            console.log(a);
          }
        });
      });
    });

  }
 
  getPOITMEStesting() {
    return this.database.executeSql('Select * FROM tblexpenses ', []).then((data) => {
      let items:any = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          items.push({
             ID: data.rows.item(i).ID,
             Name: data.rows.item(i).Name,
             Sync: data.rows.item(i).Sync

           });
        }
      }
      ;
      console.log(items);
      return items;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  syncAddedLog() {
    
    return this.database.executeSql('SELECT * FROM tblLogs Where Sync=0', []).then((data) => {
      let logs:any = [];
      const IDs = [];

      if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          logs.push({
            ID: data.rows.item(i).ID,
            tableName: data.rows.item(i).tableName,
            tableId: data.rows.item(i).tableId,
            userId: data.rows.item(i).userId,
            actionType: data.rows.item(i).actionType,
            name:  data.rows.item(i).name,
            dated: data.rows.item(i).dated,

           });
           IDs.push({
            ID: data.rows.item(i).ID
           });
        }
      }
 
      // console.log('sync' + logs[0].ID);
      // console.log('synclogs:' + logs);
      // console.log('IDS[0]:'+ IDs[0].ID);
      // console.log('ids' + IDs);
      
      const url = this.databaseprovider.getURL();

      this.nativeHttp.setDataSerializer("json");
    
      let nativeCall = this.nativeHttp.post(url , 
        {
          'Name': 'syncAddedLogs',
          "logs": logs
        } , 
        {
          'Content-Type': 'application/json',
          'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
        });
   
      from(nativeCall).pipe(
        finalize(() =>{} )
      )
      .subscribe(data => {
        
        console.log('Native data:',data);
        const g = JSON.parse(data.data);
        let check = 0;
        
        if(g.success === 1) {
          //alert('success');
          check = 1;
          
          this.updateSyncedLogs(IDs).then((data) => {
          });
        } else {
          
          if (check === 1) {
            this.updateSyncedLogs(IDs).then((data) => {
            });
          }
          // alert('failed');
        }

       // this.initializeItems();
      },err =>{
        console.log('JS call error-1',err);
       // const error = JSON.parse(err.error);
        //alert(error.message);
        //console.log('Native data:',JSON.parse(error));
      });
      ;
      console.log(logs);
      return logs;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateSyncedLogs(IDs) {
    
    for (let i=0; i< IDs.length; i++) {
      return this.database.executeSql('UPDATE  tbllogs Set Sync=1 where ID=?', [IDs[i]]).then((data) => {
        
        console.log(data);
        return data;
      }, err => {
        console.log('Error: ', err);
        return [];
      }); 
  }
}
async getLedger(id) {
  let loading = await this.loadingController.create();
  await loading.present();
  return this.database.executeSql('SELECT * FROM clients where Cid=? ', [id]).then((data) => {
    let clients:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        clients.push({
          Cid: data.rows.item(i).Cid,
          AccountId: data.rows.item(i).AccountId,
          Fname: data.rows.item(i).Fname,
          Lname: data.rows.item(i).Lname,
          Shop: data.rows.item(i).Shop,
          BillingAddress: data.rows.item(i).BillingAddress,
          City: data.rows.item(i).City,
          Cell: data.rows.item(i).Cell,
          Active: data.rows.item(i).Active,
          Balance: data.rows.item(i).Balance,
          Sync: data.rows.item(i).Sync,

         });
      }
    }
    ;
    console.log(clients);
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     editclient: clients[0]
    //   }
    // };
    const navigationExtras: NavigationExtras = {
      state: {
        client: clients[0]
      }
     };
     this.router.navigate(['ledger'], navigationExtras);
     loading.dismiss();
   // return clients;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
async getLedgerVendor(id) {
  let loading = await this.loadingController.create();
  await loading.present();
  return this.database.executeSql('SELECT * FROM tblvendors where ID=?', [id]).then((data) => {
    let vendor:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        vendor.push({
          ID: data.rows.item(i).ID,
          Name: data.rows.item(i).Name,
          Address: data.rows.item(i).Address,
          Phone: data.rows.item(i).Phone,
          Email: data.rows.item(i).Email,
          bActive: data.rows.item(i).bActive,
          Sync: data.rows.item(i).Sync,

         });
      }
    }
    ;
    console.log(vendor);
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     editclient: clients[0]
    //   }
    // };
    const navigationExtras: NavigationExtras = {
      state: {
        client: vendor[0]
      }
     };
     this.router.navigate(['ledgers-vendors'], navigationExtras);
     loading.dismiss();
   // return clients;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
AddLog(){
  
  let acttype ='';
  if (this.usdId === 1) {
     acttype = 'Adnan Ali Signed In  the app';
  } else {
    acttype = 'Test Signed In  from app';
  }
  //this.name = 'Purchased Order';
  let now = new Date().toString();
  const a = this.datePipe.transform(now, 'MMMM dd, yyy h:mm a');
  const lgdate = 'at ' + a;
  const tblName = '';
  const tblId = 0;
  const name = '';
  // this.tblId = this.PO.ID;
  // this.tblId = this.syncService.getUpdatedPOID();
  //this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
  
  this.addLogs(tblName,tblId,this.usdId,acttype,name,lgdate).then(data => {
    
        console.log("Log has been added");
        this.syncAddedLog();
        //this.GetLogs();
        
  });
}
async syncDataServertoApp() {
  
 
  const url = this.databaseprovider.getURL();
  console.log('this is url '+url);
  this.nativeHttp.setDataSerializer("json");
 this.nativeHttp.setRequestTimeout(364850);
  let nativeCall = this.nativeHttp.post(url , 
    {
      'Name': 'sqliteSync1',
      "AccountId": '113008225657937776461'
    } , 
    {
      'Content-Type': 'application/json',
      'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
    });

  from(nativeCall).pipe(
    finalize(() =>{} )
  )
  .subscribe(data => {
    
    console.log('Native data-1:',data);
    const g = JSON.parse(data.data);
    console.log('ggggg-'+g);
    if(g.success === 1) {
      
       console.log('success');
        if(typeof g.vendors !== 'undefined' && this.executed === 0)  {
          this.executed = 1;
          console.log('vendors');
          for (let i=0;i<1;i++) {
           const data = [ g.vendors[i].ID, g.vendors[i].Name, g.vendors[i].Address, g.vendors[i].Phone, g.vendors[i].Email,  g.vendors[i].bActive,g.vendors[i].Balance, 1 ];
           // tslint:disable-next-line: max-line-length
           this.database.executeSql('SELECT * FROM tblvendors', data)
           .then(data => {
             console.log('successfully Created item');
             return data;
           }, err => {
             console.log('Error: ', err);
             return err;
           }).then(() => {
            if(typeof g.vendors !== 'undefined') {
              console.log('items');
              for (let i=0;i<g.vendors.length;i++) {
                const data = [ g.vendors[i].ID, g.vendors[i].Name, g.vendors[i].Address, g.vendors[i].Phone, g.vendors[i].Email,  g.vendors[i].bActive,g.vendors[i].Balance, 1 ];
                // tslint:disable-next-line: max-line-length
                this.database.executeSql('INSERT INTO  tblvendors (ID,Name,Address,Phone,Email,bActive,Balance,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
                .then(data => {
                  console.log('successfully Created item');
                  return data;
                }, err => {
                  console.log('Error: ', err);
                  return err;
                });
              }
            }
           }).then(data3 => {
             if( typeof g.items !== 'undefined') {
               console.log('items');
               for (let i=0;i<g.items.length;i++) {
                 
                 const data = [g.items[i].itemid,'113008225657937776461', g.items[i].Description, g.items[i].Rate, g.items[i].Cost, g.items[i].Instock, g.items[i].Active, 1 ];
                 // tslint:disable-next-line: max-line-length
                 this.database.executeSql('INSERT INTO  items (itemid,AccountId, Description,Rate,Cost,Instock,Active,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
                 .then(data => {
                   console.log('successfully Created item');
                   return data;
                 }, err => {
                   console.log('Error: ', err);
                   return err;
                 });
               }
             }
           }).then(data4 => {
             if( typeof g.clients !== 'undefined') {
               console.log('clients from server:',g.clients);
               for (let i=0;i<g.clients.length;i++) {
                 const data = [g.clients[i].Cid,'113008225657937776461', g.clients[i].Fname, g.clients[i].Lname, g.clients[i].Shop, g.clients[i].BillingAddress, g.clients[i].City, g.clients[i].Cell, g.clients[i].Active, g.clients[i].Balance,1 ];
                 // tslint:disable-next-line: max-line-length
                 this.database.executeSql('INSERT INTO  clients (Cid,AccountId,Fname,Lname,Shop,BillingAddress,City,Cell,Active,Balance,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?)', data)
                 .then(data => {
                   console.log('successfully Created item');
                   return data;
                 }, err => {
                   console.log('Error: ', err);
                   return err;
                 });
               }
             }
           }).then(data5 => {
             if( typeof g.POS !== 'undefined') {

               console.log('POS');

               for(let i=0;i<g.POS.length;i++) {
                 // tslint:disable-next-line: max-line-length
                 const data = [ g.POS[i].ID,g.POS[i].VendorID, g.POS[i].Date, g.POS[i].ReceivedBy, g.POS[i].Total, g.POS[i].Remarks,parseInt(g.POS[i].Discount), parseInt(g.POS[i].Active),1 ];
                 this.database.executeSql('INSERT INTO  tblpurchasedorder (ID,VendorID,Date,ReceivedBy,Total,Remarks,Discount,Active,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data)
                 .then(data => {
                   console.log('add po');
                 });
               }
             }
           }).then(data5 => {
             if( typeof g.POItems !== 'undefined') {
               
               console.log('POItems');
               for(let i = 0;i<g.POItems.length;i++) {
                 
                 const data1 = [ g.POItems[i].ID,g.POItems[i].Poid, g.POItems[i].ItemID, g.POItems[i].Qty, g.POItems[i].CostPrice, 1 ];
                 this.database.executeSql('INSERT INTO  tblpodetail (ID,Poid,ItemID,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data1)
                    .then(data => {
                        console.log('successfully Add item');
                        return data;
                     }, err => {
                          console.log('Error: ', err);
                          return err;
                      });
                     //  this.database.executeSql('UPDATE items SET Instock=Instock+? where itemid=?', [g.POItems[i].Qty, g.POItems[i].ItemID])
                     //  .then(data => {
                     //    console.log('successfully Updated stock');
                     //    return data;
                     //  }, err => {
                     //    console.log('Error: ', err);
                     //    return err;
                     //  });
               }
             }
           }).then(() => {
            if( typeof g.users !== 'undefined') {
              console.log('POS');

              for(let i=0;i<g.users.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [ g.users[i].ID ,g.users[i].email, g.users[i].name, g.users[i].Active, 1 ];
                this.database.executeSql('INSERT INTO  tblUsers (ID,email,name,bActive,Sync) VALUES (?,?,?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           }).then(() => {
            if( typeof g.acl !== 'undefined') {
              console.log('POS');
              for(let i=0;i<g.acl.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [ g.acl[i].ID ,g.acl[i].name, g.acl[i].userId, g.acl[i].bValue, 1 ];
                console.log('here'+ data);
                this.database.executeSql('INSERT INTO  tblacl (ID,name,userId,bValue,Sync) VALUES (?,?,?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           }).then(() => {
            if( typeof g.slides !== 'undefined') {
              console.log('POS');
              for(let i=0;i<g.slides.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [ g.slides[i].Id ,g.slides[i].slideNo, g.slides[i].slideHeading,  g.slides[i].slideText ,g.slides[i].slideImage, g.slides[i].bActive ];
                this.database.executeSql('INSERT INTO tblslides (Id,slideNo,slideHeading,slideText,slideImage,bActive) VALUES (?,?,?,?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           }).then(data6 => {
             if( typeof g.invoices !== 'undefined') {
               
               for(let i=0;i<g.invoices.length;i++) {
               console.log('invoices');
               // tslint:disable-next-line: max-line-length
               const data = [ g.invoices[i].Iid,g.invoices[i].AccountId, g.invoices[i].Cid, g.invoices[i].Name, g.invoices[i].CreateDate, g.invoices[i].Terms, g.invoices[i].DueDate, g.invoices[i].Subtotal, g.invoices[i].Discount, g.invoices[i].Total, g.invoices[i].Message, parseInt(g.invoices[i].Status),1 ];
                // tslint:disable-next-line: max-line-length
               this.database.executeSql('INSERT INTO  invoices (Iid,AccountId,Cid,Name,CreateDate,Terms,DueDate,Subtotal,Discount,Total,Message,Status,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', data)
                    .then(data => {
                     console.log('successfully Created invoice');
                });
               }
              }
           }).then(data7 => {
             if( typeof g.invoiceItems !== 'undefined') {
               
               console.log('POItems');
               for(let i=0;i<g.invoiceItems.length;i++) {
                 const data1 = [ g.invoiceItems[i].Iiid,g.invoiceItems[i].Iid, g.invoiceItems[i].Itemid, g.invoiceItems[i].Qty, g.invoiceItems[i].CostPrice, 1 ];
                 this.database.executeSql('INSERT INTO  invoiceitems (Iiid,Iid,Itemid,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data1)
                 .then(data => {
                   console.log('successfully Add item');
                   return data;
                 }, err => {
                   console.log('Error: ', err);
                   return err;
                 });
               }
             }
           }).then(() => {
            if( typeof g.categories !== 'undefined') {
              console.log('POS');
              for(let i=0;i<g.categories.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [ g.categories[i].catid ,g.categories[i].name, g.categories[i].active ];
                this.database.executeSql('INSERT INTO categories (catid,name,active) VALUES (?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           }).then(data8 => {
             if( typeof g.ledgers !== 'undefined') {
               
               console.log('ledgers');
               for(let i=0;i<g.ledgers.length;i++) {
                 this.database.executeSql('INSERT INTO  tblledger (ID,InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [g.ledgers[i].ID,g.ledgers[i].InvoiceID, g.ledgers[i].Date, g.ledgers[i].Amount, g.ledgers[i].CustomerID, g.ledgers[i].IsCredit, g.ledgers[i].DueDate, g.ledgers[i].ByUserId, g.ledgers[i].Remarks, 1])
                   .then(data => {
                   console.log('successfully Added Ledger');
                    return data;
                     }, err => {
                      console.log('Error: ', err);
                      return err;
                  });
               }
             }
           }).then(()=> {
            if( typeof g.logs !== 'undefined') {
              
              console.log('ledgers');
              for(let i=0;i<g.logs.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [g.logs[i].ID, g.logs[i].tableName,g.logs[i].tableId,g.logs[i].userId,g.logs[i].actionType,g.logs[i].name,g.logs[i].dated, 1];
                this.database.executeSql('INSERT INTO  tblLogs (ID,tableName,tableId,userId,actionType,name,dated,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
                          .then(data => {
                            console.log('successfully Created Log');
                            return data;
                          }, err => {
                            console.log('Error: ', err);
                            return err;
                          });
              }
            }
             
           }).then(()=> {
            if( typeof g.vendorsLeger !== 'undefined') {
              
              console.log('vender ledgers');
              for(let i=0;i<g.vendorsLeger.length;i++) {
                
                // tslint:disable-next-line: max-line-length
               this.database.executeSql('INSERT INTO  tblledgervendor (ID,POID,Date,Amount,VendorID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [g.vendorsLeger[i].ID,g.vendorsLeger[i].POID, g.vendorsLeger[i].Date, g.vendorsLeger[i].Amount, g.vendorsLeger[i].VendorID, g.vendorsLeger[i].IsCredit, g.vendorsLeger[i].DueDate, g.vendorsLeger[i].ByUserId, g.vendorsLeger[i].Remarks, 1])
                .then(data => {
                console.log('successfully Added vendorledger');
                 return data;
                  }, err => {
                   console.log('Error: ', err);
                   return err;
               });
              }
            }
           }).then(() => {
            // loading.dismiss();
            if( typeof g.expenses !== 'undefined') {
              
              console.log('vender ledgers');
              for(let i=0;i<g.expenses.length;i++) {
                
                const data = [g.expenses[i].ID, '113008225657937776461', g.expenses[i].Name, g.expenses[i].Date, g.expenses[i].Amount, g.expenses[i].Category, g.expenses[i].Description, g.expenses[i].Active, g.expenses[i].Sync ];
                // tslint:disable-next-line: max-line-length
                this.database.executeSql('INSERT INTO  tblexpenses (ID,AccountId,Name,Date,Amount,Category,Description,Active,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data)
                .then(data => {
                       console.log('successfully Created item');
                       return data;
                 }, err => {
                        console.log('Error: ', err);
                         return err;
                });
              }
            }
           }).then(() => {
            // loading.dismiss();
           });
          }
        }
        if(typeof g.clients !== 'undefined' && this.executed === 0)  {
          this.executed = 1;

          console.log('clients from server:',g.clients);
          for (let i=0;i<g.clients.length;i++) {
            const data = [g.clients[i].Cid,'113008225657937776461', g.clients[i].Fname, g.clients[i].Lname, g.clients[i].Shop, g.clients[i].BillingAddress, g.clients[i].City, g.clients[i].Cell, g.clients[i].Active, g.clients[i].Balance,1 ];
            // tslint:disable-next-line: max-line-length
            this.database.executeSql('INSERT INTO  clients (Cid,AccountId,Fname,Lname,Shop,BillingAddress,City,Cell,Active,Balance,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?)', data)
            .then(data => {
              console.log('successfully Created item');
              return data;
            }, err => {
              console.log('Error: ', err);
              return err;
            }).then(data3 => {
             if( typeof g.items !== 'undefined') {
               console.log('items');
               for (let i=0;i<g.items.length;i++) {
                 
                 const data = [g.items[i].itemid,'113008225657937776461', g.items[i].Description, g.items[i].Rate, g.items[i].Cost, g.items[i].Instock, g.items[i].Active, 1 ];
                 // tslint:disable-next-line: max-line-length
                 this.database.executeSql('INSERT INTO  items (itemid,AccountId, Description,Rate,Cost,Instock,Active,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
                 .then(data => {
                   console.log('successfully Created item');
                   return data;
                 }, err => {
                   console.log('Error: ', err);
                   return err;
                 });
               }
             }
           }).then(data4 => {
            if( typeof g.vendors !== 'undefined') {
              console.log('vendors');
              for (let i=0;i<g.vendors.length;i++) {
          const data = [ g.vendors[i].ID, g.vendors[i].Name, g.vendors[i].Address, g.vendors[i].Phone, g.vendors[i].Email,  g.vendors[i].bActive,g.vendors[i].Balance, 1 ];
          // tslint:disable-next-line: max-line-length
          this.database.executeSql('INSERT INTO  tblvendors (ID,Name,Address,Phone,Email,bActive,Balance,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
          .then(data => {
            console.log('successfully Created item');
            return data;
          }, err => {
            console.log('Error: ', err);
            return err;
          })
              }
            }
           }).then(data5 => {
             if( typeof g.POS !== 'undefined') {
               
               console.log('POS');

               for(let i=0;i<g.POS.length;i++) {
                 // tslint:disable-next-line: max-line-length
                 const data = [ g.POS[i].ID,g.POS[i].VendorID, g.POS[i].Date, g.POS[i].ReceivedBy, g.POS[i].Total, g.POS[i].Remarks,parseInt(g.POS[i].Discount), parseInt(g.POS[i].Active),1 ];
                 this.database.executeSql('INSERT INTO  tblpurchasedorder (ID,VendorID,Date,ReceivedBy,Total,Remarks,Discount,Active,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data)
                 .then(data => {
                   console.log('add po');
                 });
               }
             }
           }).then(data5 => {
             if( typeof g.POItems !== 'undefined') {
               
               console.log('POItems');
               for(let i = 0;i<g.POItems.length;i++) {
                 
                 const data1 = [ g.POItems[i].ID,g.POItems[i].Poid, g.POItems[i].ItemID, g.POItems[i].Qty, g.POItems[i].CostPrice, 1 ];
                 this.database.executeSql('INSERT INTO  tblpodetail (ID,Poid,ItemID,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data1)
                    .then(data => {
                        console.log('successfully Add item');
                        return data;
                     }, err => {
                          console.log('Error: ', err);
                          return err;
                      });
                     //  this.database.executeSql('UPDATE items SET Instock=Instock+? where itemid=?', [g.POItems[i].Qty, g.POItems[i].ItemID])
                     //  .then(data => {
                     //    console.log('successfully Updated stock');
                     //    return data;
                     //  }, err => {
                     //    console.log('Error: ', err);
                     //    return err;
                     //  });
               }
             }
           }).then(() => {
            if( typeof g.users !== 'undefined') {
              console.log('POS');

              for(let i=0;i<g.users.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [ g.users[i].ID ,g.users[i].email, g.users[i].name, g.users[i].Active, 1 ];
                this.database.executeSql('INSERT INTO  tblUsers (ID,email,name,bActive,Sync) VALUES (?,?,?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           }).then(() => {
            if( typeof g.acl !== 'undefined') {
              console.log('POS');

              for(let i=0;i<g.acl.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [ g.acl[i].ID ,g.acl[i].name, g.acl[i].userId, g.acl[i].bValue, 1 ];
                console.log('here2'+ data);
                this.database.executeSql('INSERT INTO  tblacl (ID,name,userId,bValue,Sync) VALUES (?,?,?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           }).then(() => {
            if( typeof g.slides !== 'undefined') {
              console.log('POS');
              for(let i=0;i<g.slides.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [ g.slides[i].Id ,g.slides[i].slideNo, g.slides[i].slideHeading,  g.slides[i].slideText ,g.slides[i].slideImage, g.slides[i].bActive ];
                this.database.executeSql('INSERT INTO tblslides (Id,slideNo,slideHeading,slideText,slideImage,bActive) VALUES (?,?,?,?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           }).then(data6 => {
             if( typeof g.invoices !== 'undefined') {
               
               for(let i=0;i<g.invoices.length;i++) {
               console.log('invoices');
               // tslint:disable-next-line: max-line-length
               const data = [ g.invoices[i].Iid,g.invoices[i].AccountId, g.invoices[i].Cid, g.invoices[i].Name, g.invoices[i].CreateDate, g.invoices[i].Terms, g.invoices[i].DueDate, g.invoices[i].Subtotal, g.invoices[i].Discount, g.invoices[i].Total, g.invoices[i].Message, parseInt(g.invoices[i].Status),1 ];
                // tslint:disable-next-line: max-line-length
               this.database.executeSql('INSERT INTO  invoices (Iid,AccountId,Cid,Name,CreateDate,Terms,DueDate,Subtotal,Discount,Total,Message,Status,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', data)
                    .then(data => {
                     console.log('successfully Created invoice');
                });
               }
              }
           }).then(data7 => {
             if( typeof g.invoiceItems !== 'undefined') {
               
               console.log('POItems');
               for(let i=0;i<g.invoiceItems.length;i++) {
                 const data1 = [ g.invoiceItems[i].Iiid,g.invoiceItems[i].Iid, g.invoiceItems[i].Itemid, g.invoiceItems[i].Qty, g.invoiceItems[i].CostPrice, 1 ];
                 this.database.executeSql('INSERT INTO  invoiceitems (Iiid,Iid,Itemid,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data1)
                 .then(data => {
                   console.log('successfully Add item');
                   return data;
                 }, err => {
                   console.log('Error: ', err);
                   return err;
                 });
               }
             }
           }).then(() => {
            if( typeof g.categories !== 'undefined') {
              console.log('POS');
              for(let i=0;i<g.categories.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [ g.categories[i].catid ,g.categories[i].name, g.categories[i].active ];
                this.database.executeSql('INSERT INTO categories (catid,name,active) VALUES (?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           }).then(data8 => {
             if( typeof g.ledgers !== 'undefined') {
               
               console.log('ledgers');
               for(let i=0;i<g.ledgers.length;i++) {
                 this.database.executeSql('INSERT INTO  tblledger (ID,InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [g.ledgers[i].ID,g.ledgers[i].InvoiceID, g.ledgers[i].Date, g.ledgers[i].Amount, g.ledgers[i].CustomerID, g.ledgers[i].IsCredit, g.ledgers[i].DueDate, g.ledgers[i].ByUserId, g.ledgers[i].Remarks, 1])
                   .then(data => {
                   console.log('successfully Added Ledger');
                    return data;
                     }, err => {
                      console.log('Error: ', err);
                      return err;
                  });
               }
             }
           }).then(()=> {
            if( typeof g.logs !== 'undefined') {
              
              console.log('ledgers');
              for(let i=0;i<g.logs.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [g.logs[i].ID, g.logs[i].tableName,g.logs[i].tableId,g.logs[i].userId,g.logs[i].actionType,g.logs[i].name,g.logs[i].dated, 1];
                this.database.executeSql('INSERT INTO  tblLogs (ID,tableName,tableId,userId,actionType,name,dated,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
                          .then(data => {
                            console.log('successfully Created Log');
                            return data;
                          }, err => {
                            console.log('Error: ', err);
                            return err;
                          });
              }
            }
             
           }).then(()=> {
            if( typeof g.vendorsLeger !== 'undefined') {
              
              console.log('vender ledgers');
              for(let i=0;i<g.vendorsLeger.length;i++) {
                
                // tslint:disable-next-line: max-line-length
               this.database.executeSql('INSERT INTO  tblledgervendor (ID,POID,Date,Amount,VendorID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [g.vendorsLeger[i].ID,g.vendorsLeger[i].POID, g.vendorsLeger[i].Date, g.vendorsLeger[i].Amount, g.vendorsLeger[i].VendorID, g.vendorsLeger[i].IsCredit, g.vendorsLeger[i].DueDate, g.vendorsLeger[i].ByUserId, g.vendorsLeger[i].Remarks, 1])
                .then(data => {
                console.log('successfully Added vendorledger');
                 return data;
                  }, err => {
                   console.log('Error: ', err);
                   return err;
               });
              }
            }
           }).then(() => {
            // loading.dismiss();
            if( typeof g.expenses !== 'undefined') {
              
              console.log('vender ledgers');
              for(let i=0;i<g.expenses.length;i++) {
                
                const data = [g.expenses[i].ID, '113008225657937776461', g.expenses[i].Name, g.expenses[i].Date, g.expenses[i].Amount, g.expenses[i].Category, g.expenses[i].Description, g.expenses[i].Active, g.expenses[i].Sync ];
                // tslint:disable-next-line: max-line-length
                this.database.executeSql('INSERT INTO  tblexpenses (ID,AccountId,Name,Date,Amount,Category,Description,Active,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data)
                .then(data => {
                       console.log('successfully Created item');
                       return data;
                 }, err => {
                        console.log('Error: ', err);
                         return err;
                });
              }
            }
           }).then(() => {
           //  loading.dismiss();
           });
          }
        }
        if(typeof g.items !== 'undefined' && this.executed === 0)  {
          this.executed = 1;
          console.log('items');
          for (let i=0;i<g.items.length;i++) {
                 
                 const data = [g.items[i].itemid,'113008225657937776461', g.items[i].Description, g.items[i].Rate, g.items[i].Cost, g.items[i].Instock, g.items[i].Active, 1 ];
                 // tslint:disable-next-line: max-line-length
                 this.database.executeSql('INSERT INTO  items (itemid,AccountId, Description,Rate,Cost,Instock,Active,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
                 .then(data => {
                   console.log('successfully Created item');
                   return data;
                 }, err => {
                   console.log('Error: ', err);
                   return err;
                 }).then(data3 => {
             if( typeof g.vendors !== 'undefined') {
               console.log('vendors');
               for (let i=0;i<g.vendors.length;i++) {
           const data = [ g.vendors[i].ID, g.vendors[i].Name, g.vendors[i].Address, g.vendors[i].Phone, g.vendors[i].Email,  g.vendors[i].bActive,g.vendors[i].Balance, 1 ];
           // tslint:disable-next-line: max-line-length
           this.database.executeSql('INSERT INTO  tblvendors (ID,Name,Address,Phone,Email,bActive,Balance,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
           .then(data => {
             console.log('successfully Created item');
             return data;
           }, err => {
             console.log('Error: ', err);
             return err;
           })
               }
             }
           }).then(data4 => {
             if( typeof g.clients !== 'undefined') {
               console.log('clients from server:',g.clients);
               for (let i=0;i<g.clients.length;i++) {
                 const data = [g.clients[i].Cid,'113008225657937776461', g.clients[i].Fname, g.clients[i].Lname, g.clients[i].Shop, g.clients[i].BillingAddress, g.clients[i].City, g.clients[i].Cell, g.clients[i].Active, g.clients[i].Balance,1 ];
                 // tslint:disable-next-line: max-line-length
                 this.database.executeSql('INSERT INTO  clients (Cid,AccountId,Fname,Lname,Shop,BillingAddress,City,Cell,Active,Balance,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?)', data)
                 .then(data => {
                   console.log('successfully Created item');
                   return data;
                 }, err => {
                   console.log('Error: ', err);
                   return err;
                 });
               }
             }
           }).then(data5 => {
             if( typeof g.POS !== 'undefined') {
               
               console.log('POS');

               for(let i=0;i<g.POS.length;i++) {
                 // tslint:disable-next-line: max-line-length
                 const data = [ g.POS[i].ID,g.POS[i].VendorID, g.POS[i].Date, g.POS[i].ReceivedBy, g.POS[i].Total, g.POS[i].Remarks,parseInt(g.POS[i].Discount), parseInt(g.POS[i].Active),1 ];
                 this.database.executeSql('INSERT INTO  tblpurchasedorder (ID,VendorID,Date,ReceivedBy,Total,Remarks,Discount,Active,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data)
                 .then(data => {
                   console.log('add po');
                 });
               }
             }
           }).then(data5 => {
             if( typeof g.POItems !== 'undefined') {
               
               console.log('POItems');
               for(let i = 0;i<g.POItems.length;i++) {
                 
                 const data1 = [ g.POItems[i].ID,g.POItems[i].Poid, g.POItems[i].ItemID, g.POItems[i].Qty, g.POItems[i].CostPrice, 1 ];
                 this.database.executeSql('INSERT INTO  tblpodetail (ID,Poid,ItemID,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data1)
                    .then(data => {
                        console.log('successfully Add item');
                        return data;
                     }, err => {
                          console.log('Error: ', err);
                          return err;
                      });
                     //  this.database.executeSql('UPDATE items SET Instock=Instock+? where itemid=?', [g.POItems[i].Qty, g.POItems[i].ItemID])
                     //  .then(data => {
                     //    console.log('successfully Updated stock');
                     //    return data;
                     //  }, err => {
                     //    console.log('Error: ', err);
                     //    return err;
                     //  });
               }
             }
           }).then(() => {
            if( typeof g.users !== 'undefined') {
              console.log('POS');

              for(let i=0;i<g.users.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [ g.users[i].ID ,g.users[i].email, g.users[i].name, g.users[i].Active, 1 ];
                this.database.executeSql('INSERT INTO  tblUsers (ID,email,name,bActive,Sync) VALUES (?,?,?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           }).then(() => {
            if( typeof g.acl !== 'undefined') {
              console.log('POS');

              for(let i=0;i<g.acl.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [ g.acl[i].ID ,g.acl[i].name, g.acl[i].userId, g.acl[i].bValue, 1 ];
                console.log('here3'+ data);
                this.database.executeSql('INSERT INTO  tblacl (ID,name,userId,bValue,Sync) VALUES (?,?,?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           }).then(() => {
            if( typeof g.slides !== 'undefined') {
              console.log('POS');
              for(let i=0;i<g.slides.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [ g.slides[i].Id ,g.slides[i].slideNo, g.slides[i].slideHeading,  g.slides[i].slideText ,g.slides[i].slideImage, g.slides[i].bActive ];
                this.database.executeSql('INSERT INTO tblslides (Id,slideNo,slideHeading,slideText,slideImage,bActive) VALUES (?,?,?,?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           }).then(data6 => {
             if( typeof g.invoices !== 'undefined') {
               
               for(let i=0;i<g.invoices.length;i++) {
               console.log('invoices');
               // tslint:disable-next-line: max-line-length
               const data = [ g.invoices[i].Iid,g.invoices[i].AccountId, g.invoices[i].Cid, g.invoices[i].Name, g.invoices[i].CreateDate, g.invoices[i].Terms, g.invoices[i].DueDate, g.invoices[i].Subtotal, g.invoices[i].Discount, g.invoices[i].Total, g.invoices[i].Message, parseInt(g.invoices[i].Status),1 ];
                // tslint:disable-next-line: max-line-length
               this.database.executeSql('INSERT INTO  invoices (Iid,AccountId,Cid,Name,CreateDate,Terms,DueDate,Subtotal,Discount,Total,Message,Status,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', data)
                    .then(data => {
                     console.log('successfully Created invoice');
                });
               }
              }
           }).then(data7 => {
             if( typeof g.invoiceItems !== 'undefined') {
               
               console.log('POItems');
               for(let i=0;i<g.invoiceItems.length;i++) {
                 const data1 = [ g.invoiceItems[i].Iiid,g.invoiceItems[i].Iid, g.invoiceItems[i].Itemid, g.invoiceItems[i].Qty, g.invoiceItems[i].CostPrice, 1 ];
                 this.database.executeSql('INSERT INTO  invoiceitems (Iiid,Iid,Itemid,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data1)
                 .then(data => {
                   console.log('successfully Add item');
                   return data;
                 }, err => {
                   console.log('Error: ', err);
                   return err;
                 });
               }
             }
           }).then(() => {
            if( typeof g.categories !== 'undefined') {
              console.log('POS');
              for(let i=0;i<g.categories.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [ g.categories[i].catid ,g.categories[i].name, g.categories[i].active ];
                this.database.executeSql('INSERT INTO categories (catid,name,active) VALUES (?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           }).then(data8 => {
             if( typeof g.ledgers !== 'undefined') {
               
               console.log('ledgers');
               for(let i=0;i<g.ledgers.length;i++) {
                 this.database.executeSql('INSERT INTO  tblledger (ID,InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [g.ledgers[i].ID,g.ledgers[i].InvoiceID, g.ledgers[i].Date, g.ledgers[i].Amount, g.ledgers[i].CustomerID, g.ledgers[i].IsCredit, g.ledgers[i].DueDate, g.ledgers[i].ByUserId, g.ledgers[i].Remarks, 1])
                   .then(data => {
                   console.log('successfully Added Ledger');
                    return data;
                     }, err => {
                      console.log('Error: ', err);
                      return err;
                  });
               }
             }
           }).then(()=> {
            if( typeof g.logs !== 'undefined') {
              
              console.log('ledgers');
              for(let i=0;i<g.logs.length;i++) {
                // tslint:disable-next-line: max-line-length
                const data = [g.logs[i].ID, g.logs[i].tableName,g.logs[i].tableId,g.logs[i].userId,g.logs[i].actionType,g.logs[i].name,g.logs[i].dated, 1];
                this.database.executeSql('INSERT INTO  tblLogs (ID,tableName,tableId,userId,actionType,name,dated,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
                          .then(data => {
                            console.log('successfully Created Log');
                            return data;
                          }, err => {
                            console.log('Error: ', err);
                            return err;
                          });
              }
            }
             
           }).then(()=> {
            if( typeof g.vendorsLeger !== 'undefined') {
              
              console.log('vender ledgers');
              for(let i=0;i<g.vendorsLeger.length;i++) {
                
                // tslint:disable-next-line: max-line-length
               this.database.executeSql('INSERT INTO  tblledgervendor (ID,POID,Date,Amount,VendorID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [g.vendorsLeger[i].ID,g.vendorsLeger[i].POID, g.vendorsLeger[i].Date, g.vendorsLeger[i].Amount, g.vendorsLeger[i].VendorID, g.vendorsLeger[i].IsCredit, g.vendorsLeger[i].DueDate, g.vendorsLeger[i].ByUserId, g.vendorsLeger[i].Remarks, 1])
                .then(data => {
                console.log('successfully Added vendorledger');
                 return data;
                  }, err => {
                   console.log('Error: ', err);
                   return err;
               });
              }
            }
           }).then(() => {
            // loading.dismiss();
            if( typeof g.expenses !== 'undefined') {
              
              console.log('vender ledgers');
              for(let i=0;i<g.expenses.length;i++) {
                
                const data = [g.expenses[i].ID, '113008225657937776461', g.expenses[i].Name, g.expenses[i].Date, g.expenses[i].Amount, g.expenses[i].Category, g.expenses[i].Description, g.expenses[i].Active, g.expenses[i].Sync ];
                // tslint:disable-next-line: max-line-length
                this.database.executeSql('INSERT INTO  tblexpenses (ID,AccountId,Name,Date,Amount,Category,Description,Active,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data)
                .then(data => {
                       console.log('successfully Created item');
                       return data;
                 }, err => {
                        console.log('Error: ', err);
                         return err;
                });
              }
            }
           }).then(() => {
            // loading.dismiss();
           });
          }
        }
        if (this.executed === 0) {
       //   loading.dismiss();
        }

      console.log('hurrah');
     
     
    } else {
      // alert('failed');
    }

   // this.initializeItems();
  },err =>{
    console.log('JS call error-2',err);
    //const error = JSON.parse(err);
    //alert(error.message);
    console.log('Native data: 123456');
    console.log(err);
  });

}
async emptyLocalDB() {
  let loading = await this.loadingController.create({
    message: 'Synchronizing',
  });
  await loading.present();
  this.database.executeSql('DELETE from invoiceitems', [])
  .then(data => {
  console.log('successfully Added Ledger');
   return data;
    }, err => {
     console.log('Error: ', err);
     return err;
    }).then(() => {
      this.database.executeSql('DELETE from invoices', [])
      .then(data => {
      console.log('successfully Added Ledger');
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from tblpodetail', [])
      .then(data => {
      console.log('successfully Added Ledger');
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from tblpurchasedorder', [])
      .then(data => {
      console.log('successfully Added Ledger');
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from tblledger', [])
      .then(data => {
      console.log('successfully Added Ledger');
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from tblvendors', [])
      .then(data => {
      console.log('successfully Added Ledger');
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from items', [])
      .then(data => {
      console.log('successfully Added Ledger');
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from clients', [])
      .then(data => {
      console.log('successfully Added Ledger');
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from tblledgervendor', [])
      .then(data => {
      console.log('successfully Added Ledger');
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from tbllogs', [])
      .then(data => {
      console.log('successfully Added Ledger');
      loading.dismiss();
      // this.syncDataServertoAppWithLoading();
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from tblUsers', [])
      .then(data => {
      console.log('successfully Added Ledger');
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from tblacl', [])
      .then(data => {
      console.log('successfully Added Ledger');
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from tblslides', [])
      .then(data => {
      console.log('successfully Added Ledger');
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from categories', [])
      .then(data => {
      console.log('successfully Added Ledger');
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    }).then(() => {
      this.database.executeSql('DELETE from tblexpenses', [])
      .then(data => {
      console.log('successfully Added Ledger');
      loading.dismiss();
      this.syncDataServertoAppWithLoading();
       return data;
        }, err => {
         console.log('Error: ', err);
         return err;
        });
    });
}
async syncDataServertoAppWithLoading() {
  this.executed = 0;
  let loading = await this.loadingController.create({
    message: 'Synchronizing',
  });
  await loading.present();
  const url = this.databaseprovider.getURL();
  this.nativeHttp.setDataSerializer("json");
  console.log('url is '+url);
  let nativeCall = this.nativeHttp.post(url ,
    {
      'Name': 'sqliteSync1',
      "AccountId": '113008225657937776461'
    },
    {
      'Content-Type': 'application/json',
      'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
    });

  from(nativeCall).pipe(
    finalize(() =>{} )
  )
  .subscribe(data => {
    
    console.log('Native data:',data);
    const g = JSON.parse(data.data);
    if(g.success === 1) {
     // alert('success = ' + g.success);
      if(typeof g.vendors !== 'undefined' && this.executed === 0)  {
        this.executed = 1;
        console.log('vendors');
        for (let i=0;i<1;i++) {
         const data = [ g.vendors[i].ID, g.vendors[i].Name, g.vendors[i].Address, g.vendors[i].Phone, g.vendors[i].Email,  g.vendors[i].bActive,g.vendors[i].Balance, 1 ];
         // tslint:disable-next-line: max-line-length
         this.database.executeSql('SELECT * FROM tblvendors', data)
         .then(data => {
           console.log('successfully Created item');
           return data;
         }, err => {
           console.log('Error: ', err);
           return err;
         }).then(()=>{
          if(typeof g.vendors !== 'undefined') {
            console.log('items');
            for (let i=0;i<g.vendors.length;i++) {
              const data = [ g.vendors[i].ID, g.vendors[i].Name, g.vendors[i].Address, g.vendors[i].Phone, g.vendors[i].Email,  g.vendors[i].bActive,g.vendors[i].Balance, 1 ];
              // tslint:disable-next-line: max-line-length
              this.database.executeSql('INSERT INTO  tblvendors (ID,Name,Address,Phone,Email,bActive,Balance,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
              .then(data => {
                console.log('successfully Created item');
                return data;
              }, err => {
                console.log('Error: ', err);
                return err;
              });
            }
          }
         }).then(data3 => {
           if( typeof g.items !== 'undefined') {
             console.log('items');
             for (let i=0;i<g.items.length;i++) {
               
               const data = [g.items[i].itemid,'113008225657937776461', g.items[i].Description, g.items[i].Rate, g.items[i].Cost, g.items[i].Instock, g.items[i].Active, 1 ];
               // tslint:disable-next-line: max-line-length
               this.database.executeSql('INSERT INTO  items (itemid,AccountId, Description,Rate,Cost,Instock,Active,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
               .then(data => {
                 console.log('successfully Created item');
                 return data;
               }, err => {
                 console.log('Error: ', err);
                 return err;
               });
             }
           }
         }).then(data4 => {
           if( typeof g.clients !== 'undefined') {
             console.log('clients from server:',g.clients);
             for (let i=0;i<g.clients.length;i++) {
               const data = [g.clients[i].Cid,'113008225657937776461', g.clients[i].Fname, g.clients[i].Lname, g.clients[i].Shop, g.clients[i].BillingAddress, g.clients[i].City, g.clients[i].Cell, g.clients[i].Active, g.clients[i].Balance,1 ];
               // tslint:disable-next-line: max-line-length
               this.database.executeSql('INSERT INTO  clients (Cid,AccountId,Fname,Lname,Shop,BillingAddress,City,Cell,Active,Balance,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?)', data)
               .then(data => {
                 console.log('successfully Created item');
                 return data;
               }, err => {
                 console.log('Error: ', err);
                 return err;
               });
             }
           }
         }).then(data5 => {
           if( typeof g.POS !== 'undefined') {

             console.log('POS');

             for(let i=0;i<g.POS.length;i++) {
               // tslint:disable-next-line: max-line-length
               const data = [ g.POS[i].ID,g.POS[i].VendorID, g.POS[i].Date, g.POS[i].ReceivedBy, g.POS[i].Total, g.POS[i].Remarks,parseInt(g.POS[i].Discount), parseInt(g.POS[i].Active),1 ];
               this.database.executeSql('INSERT INTO  tblpurchasedorder (ID,VendorID,Date,ReceivedBy,Total,Remarks,Discount,Active,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data)
               .then(data => {
                 console.log('add po');
               });
             }
           }
         }).then(data5 => {
           if( typeof g.POItems !== 'undefined') {
             
             console.log('POItems');
             for(let i = 0;i<g.POItems.length;i++) {
               
               const data1 = [ g.POItems[i].ID,g.POItems[i].Poid, g.POItems[i].ItemID, g.POItems[i].Qty, g.POItems[i].CostPrice, 1 ];
               this.database.executeSql('INSERT INTO  tblpodetail (ID,Poid,ItemID,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data1)
                  .then(data => {
                      console.log('successfully Add item');
                      return data;
                   }, err => {
                        console.log('Error: ', err);
                        return err;
                    });
                   //  this.database.executeSql('UPDATE items SET Instock=Instock+? where itemid=?', [g.POItems[i].Qty, g.POItems[i].ItemID])
                   //  .then(data => {
                   //    console.log('successfully Updated stock');
                   //    return data;
                   //  }, err => {
                   //    console.log('Error: ', err);
                   //    return err;
                   //  });
             }
           }
         }).then(() => {
          if( typeof g.users !== 'undefined') {
            console.log('POS');

            for(let i=0;i<g.users.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [ g.users[i].ID ,g.users[i].email, g.users[i].name, g.users[i].Active, 1 ];
              this.database.executeSql('INSERT INTO  tblUsers (ID,email,name,bActive,Sync) VALUES (?,?,?,?,?)', data)
              .then(data => {
                console.log('add po');
              });
            }
          }
         }).then(() => {
          if( typeof g.acl !== 'undefined') {
            console.log('POS');
            for(let i=0;i<g.acl.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [ g.acl[i].ID ,g.acl[i].name, g.acl[i].userId, g.acl[i].bValue, 1 ];
              console.log('here4' + data);
              this.database.executeSql('INSERT INTO  tblacl (ID,name,userId,bValue,Sync) VALUES (?,?,?,?,?)', data)
              .then(data => {
                console.log('add po');
              });
            }
          }
         }).then(() => {
          if( typeof g.categories !== 'undefined') {
            console.log('POS');
            for(let i=0;i<g.categories.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [ g.categories[i].catid ,g.categories[i].name, g.categories[i].active ];
              this.database.executeSql('INSERT INTO categories (catid,name,active) VALUES (?,?,?)', data)
              .then(data => {
                console.log('add po');
              });
            }
          }
         }).then(() => {
          if( typeof g.slides !== 'undefined') {
            console.log('POS');
            for(let i=0;i<g.slides.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [ g.slides[i].Id ,g.slides[i].slideNo, g.slides[i].slideHeading,  g.slides[i].slideText ,g.slides[i].slideImage, g.slides[i].bActive ];
              this.database.executeSql('INSERT INTO tblslides (Id,slideNo,slideHeading,slideText,slideImage,bActive) VALUES (?,?,?,?,?,?)', data)
              .then(data => {
                console.log('add po');
              });
            }
          }
         }).then(data6 => {
           if( typeof g.invoices !== 'undefined') {
             
             for(let i=0;i<g.invoices.length;i++) {
             console.log('invoices');
             // tslint:disable-next-line: max-line-length
             const data = [ g.invoices[i].Iid,g.invoices[i].AccountId, g.invoices[i].Cid, g.invoices[i].Name, g.invoices[i].CreateDate, g.invoices[i].Terms, g.invoices[i].DueDate, g.invoices[i].Subtotal, g.invoices[i].Discount, g.invoices[i].Total, g.invoices[i].Message, parseInt(g.invoices[i].Status),1 ];
              // tslint:disable-next-line: max-line-length
             this.database.executeSql('INSERT INTO  invoices (Iid,AccountId,Cid,Name,CreateDate,Terms,DueDate,Subtotal,Discount,Total,Message,Status,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', data)
                  .then(data => {
                   console.log('successfully Created invoice');
              });
             }
            }
         }).then(data7 => {
           if( typeof g.invoiceItems !== 'undefined') {
             
             console.log('POItems');
             for(let i=0;i<g.invoiceItems.length;i++) {
               const data1 = [ g.invoiceItems[i].Iiid,g.invoiceItems[i].Iid, g.invoiceItems[i].Itemid, g.invoiceItems[i].Qty, g.invoiceItems[i].CostPrice, 1 ];
               this.database.executeSql('INSERT INTO  invoiceitems (Iiid,Iid,Itemid,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data1)
               .then(data => {
                 console.log('successfully Add item');
                 return data;
               }, err => {
                 console.log('Error: ', err);
                 return err;
               });
             }
           }
         }).then(data8 => {
           if( typeof g.ledgers !== 'undefined') {
             
             console.log('ledgers');
             for(let i=0;i<g.ledgers.length;i++) {
               this.database.executeSql('INSERT INTO  tblledger (ID,InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [g.ledgers[i].ID,g.ledgers[i].InvoiceID, g.ledgers[i].Date, g.ledgers[i].Amount, g.ledgers[i].CustomerID, g.ledgers[i].IsCredit, g.ledgers[i].DueDate, g.ledgers[i].ByUserId, g.ledgers[i].Remarks, 1])
                 .then(data => {
                 console.log('successfully Added Ledger');
                  return data;
                   }, err => {
                    console.log('Error: ', err);
                    return err;
                });
             }
           }
         }).then(()=> {
          if( typeof g.logs !== 'undefined') {
            
            console.log('ledgers');
            for(let i=0;i<g.logs.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [g.logs[i].ID, g.logs[i].tableName,g.logs[i].tableId,g.logs[i].userId,g.logs[i].actionType,g.logs[i].name,g.logs[i].dated, 1];
              this.database.executeSql('INSERT INTO  tblLogs (ID,tableName,tableId,userId,actionType,name,dated,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
                        .then(data => {
                          console.log('successfully Created Log');
                          return data;
                        }, err => {
                          console.log('Error: ', err);
                          return err;
                        });
            }
          }
           
         }).then(()=> {
          if( typeof g.vendorsLeger !== 'undefined') {
            debugger
            console.log('vender ledgers');
            for(let i=0;i<g.vendorsLeger.length;i++) {
              
              // tslint:disable-next-line: max-line-length
             this.database.executeSql('INSERT INTO  tblledgervendor (ID,POID,Date,Amount,VendorID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [g.vendorsLeger[i].ID,g.vendorsLeger[i].POID, g.vendorsLeger[i].Date, g.vendorsLeger[i].Amount, g.vendorsLeger[i].VendorID, g.vendorsLeger[i].IsCredit, g.vendorsLeger[i].DueDate, g.vendorsLeger[i].ByUserId, g.vendorsLeger[i].Remarks, 1])
              .then(data => {
              console.log('successfully Added vendorledger');
               return data;
                }, err => {
                 console.log('Error: ', err);
                 return err;
             });
            }
          }
         }).then(() => {
          // loading.dismiss();
          if( typeof g.expenses !== 'undefined') {
            
            console.log('vender ledgers');
            for(let i=0;i<g.expenses.length;i++) {
              
              const data = [g.expenses[i].ID, '113008225657937776461', g.expenses[i].Name, g.expenses[i].Date, g.expenses[i].Amount, g.expenses[i].Category, g.expenses[i].Description, g.expenses[i].Active, g.expenses[i].Sync ];
              // tslint:disable-next-line: max-line-length
              this.database.executeSql('INSERT INTO  tblexpenses (ID,AccountId,Name,Date,Amount,Category,Description,Active,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data)
              .then(data => {
                     console.log('successfully Created item');
                     return data;
               }, err => {
                      console.log('Error: ', err);
                       return err;
              });
            }
          }
         }).then(() => {
           loading.dismiss();
         });
        }
      }
      if(typeof g.clients !== 'undefined' && this.executed === 0)  {
        this.executed = 1;

        console.log('clients from server:',g.clients);
        for (let i=0;i<g.clients.length;i++) {
          const data = [g.clients[i].Cid,'113008225657937776461', g.clients[i].Fname, g.clients[i].Lname, g.clients[i].Shop, g.clients[i].BillingAddress, g.clients[i].City, g.clients[i].Cell, g.clients[i].Active, g.clients[i].Balance,1 ];
          // tslint:disable-next-line: max-line-length
          this.database.executeSql('INSERT INTO  clients (Cid,AccountId,Fname,Lname,Shop,BillingAddress,City,Cell,Active,Balance,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?)', data)
          .then(data => {
            console.log('successfully Created item');
            return data;
          }, err => {
            console.log('Error: ', err);
            return err;
          }).then(data3 => {
           if( typeof g.items !== 'undefined') {
             console.log('items');
             for (let i=0;i<g.items.length;i++) {
               
               const data = [g.items[i].itemid,'113008225657937776461', g.items[i].Description, g.items[i].Rate, g.items[i].Cost, g.items[i].Instock, g.items[i].Active, 1 ];
               // tslint:disable-next-line: max-line-length
               this.database.executeSql('INSERT INTO  items (itemid,AccountId, Description,Rate,Cost,Instock,Active,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
               .then(data => {
                 console.log('successfully Created item');
                 return data;
               }, err => {
                 console.log('Error: ', err);
                 return err;
               });
             }
           }
         }).then(data4 => {
          if( typeof g.vendors !== 'undefined') {
            console.log('vendors');
            for (let i=0;i<g.vendors.length;i++) {
        const data = [ g.vendors[i].ID, g.vendors[i].Name, g.vendors[i].Address, g.vendors[i].Phone, g.vendors[i].Email,  g.vendors[i].bActive,g.vendors[i].Balance, 1 ];
        // tslint:disable-next-line: max-line-length
        this.database.executeSql('INSERT INTO  tblvendors (ID,Name,Address,Phone,Email,bActive,Balance,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
        .then(data => {
          console.log('successfully Created item');
          return data;
        }, err => {
          console.log('Error: ', err);
          return err;
        })
            }
          }
         }).then(data5 => {
           if( typeof g.POS !== 'undefined') {
             
             console.log('POS');

             for(let i=0;i<g.POS.length;i++) {
               // tslint:disable-next-line: max-line-length
               const data = [ g.POS[i].ID,g.POS[i].VendorID, g.POS[i].Date, g.POS[i].ReceivedBy, g.POS[i].Total, g.POS[i].Remarks,parseInt(g.POS[i].Discount), parseInt(g.POS[i].Active),1 ];
               this.database.executeSql('INSERT INTO  tblpurchasedorder (ID,VendorID,Date,ReceivedBy,Total,Remarks,Discount,Active,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data)
               .then(data => {
                 console.log('add po');
               });
             }
           }
         }).then(data5 => {
           if( typeof g.POItems !== 'undefined') {
             
             console.log('POItems');
             for(let i = 0;i<g.POItems.length;i++) {
               
               const data1 = [ g.POItems[i].ID,g.POItems[i].Poid, g.POItems[i].ItemID, g.POItems[i].Qty, g.POItems[i].CostPrice, 1 ];
               this.database.executeSql('INSERT INTO  tblpodetail (ID,Poid,ItemID,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data1)
                  .then(data => {
                      console.log('successfully Add item');
                      return data;
                   }, err => {
                        console.log('Error: ', err);
                        return err;
                    });
                   //  this.database.executeSql('UPDATE items SET Instock=Instock+? where itemid=?', [g.POItems[i].Qty, g.POItems[i].ItemID])
                   //  .then(data => {
                   //    console.log('successfully Updated stock');
                   //    return data;
                   //  }, err => {
                   //    console.log('Error: ', err);
                   //    return err;
                   //  });
             }
           }
         }).then(() => {
          if( typeof g.users !== 'undefined') {
            console.log('POS');

            for(let i=0;i<g.users.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [ g.users[i].ID ,g.users[i].email, g.users[i].name, g.users[i].Active, 1 ];
              this.database.executeSql('INSERT INTO  tblUsers (ID,email,name,bActive,Sync) VALUES (?,?,?,?,?)', data)
              .then(data => {
                console.log('add po');
              });
            }
          }
         }).then(() => {
          if( typeof g.acl !== 'undefined') {
            console.log('POS');
            for(let i=0;i<g.acl.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [ g.acl[i].ID ,g.acl[i].name, g.acl[i].userId, g.acl[i].bValue, 1 ];
              console.log('here5' + data);
              this.database.executeSql('INSERT INTO  tblacl (ID,name,userId,bValue,Sync) VALUES (?,?,?,?,?)', data)
              .then(data => {
                console.log('add po');
              });
            }
          }
         }).then(() => {
          if( typeof g.categories !== 'undefined') {
            console.log('POS');
            for(let i=0;i<g.categories.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [ g.categories[i].catid ,g.categories[i].name, g.categories[i].active ];
              this.database.executeSql('INSERT INTO  categories (catid,name,active) VALUES (?,?,?)', data)
              .then(data => {
                console.log('add po');
              });
            }
          }
         }).then(() => {
          if( typeof g.slides !== 'undefined') {
            console.log('POS');
            for(let i=0;i<g.slides.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [ g.slides[i].Id ,g.slides[i].slideNo, g.slides[i].slideHeading,  g.slides[i].slideText ,g.slides[i].slideImage, g.slides[i].bActive ];
              this.database.executeSql('INSERT INTO tblslides (Id,slideNo,slideHeading,slideText,slideImage,bActive) VALUES (?,?,?,?,?,?)', data)
              .then(data => {
                console.log('add po');
              });
            }
          }
         }).then(data6 => {
           if( typeof g.invoices !== 'undefined') {
             
             for(let i=0;i<g.invoices.length;i++) {
             console.log('invoices');
             // tslint:disable-next-line: max-line-length
             const data = [ g.invoices[i].Iid,g.invoices[i].AccountId, g.invoices[i].Cid, g.invoices[i].Name, g.invoices[i].CreateDate, g.invoices[i].Terms, g.invoices[i].DueDate, g.invoices[i].Subtotal, g.invoices[i].Discount, g.invoices[i].Total, g.invoices[i].Message, parseInt(g.invoices[i].Status),1 ];
              // tslint:disable-next-line: max-line-length
             this.database.executeSql('INSERT INTO  invoices (Iid,AccountId,Cid,Name,CreateDate,Terms,DueDate,Subtotal,Discount,Total,Message,Status,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', data)
                  .then(data => {
                   console.log('successfully Created invoice');
              });
             }
            }
         }).then(data7 => {
           if( typeof g.invoiceItems !== 'undefined') {
             
             console.log('POItems');
             for(let i=0;i<g.invoiceItems.length;i++) {
               const data1 = [ g.invoiceItems[i].Iiid,g.invoiceItems[i].Iid, g.invoiceItems[i].Itemid, g.invoiceItems[i].Qty, g.invoiceItems[i].CostPrice, 1 ];
               this.database.executeSql('INSERT INTO  invoiceitems (Iiid,Iid,Itemid,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data1)
               .then(data => {
                 console.log('successfully Add item');
                 return data;
               }, err => {
                 console.log('Error: ', err);
                 return err;
               });
             }
           }
         }).then(data8 => {
           if( typeof g.ledgers !== 'undefined') {
             
             console.log('ledgers');
             for(let i=0;i<g.ledgers.length;i++) {
               this.database.executeSql('INSERT INTO  tblledger (ID,InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [g.ledgers[i].ID,g.ledgers[i].InvoiceID, g.ledgers[i].Date, g.ledgers[i].Amount, g.ledgers[i].CustomerID, g.ledgers[i].IsCredit, g.ledgers[i].DueDate, g.ledgers[i].ByUserId, g.ledgers[i].Remarks, 1])
                 .then(data => {
                 console.log('successfully Added Ledger');
                  return data;
                   }, err => {
                    console.log('Error: ', err);
                    return err;
                });
             }
           }
         }).then(()=> {
          if( typeof g.logs !== 'undefined') {
            
            console.log('ledgers');
            for(let i=0;i<g.logs.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [g.logs[i].ID, g.logs[i].tableName,g.logs[i].tableId,g.logs[i].userId,g.logs[i].actionType,g.logs[i].name,g.logs[i].dated, 1];
              this.database.executeSql('INSERT INTO  tblLogs (ID,tableName,tableId,userId,actionType,name,dated,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
                        .then(data => {
                          console.log('successfully Created Log');
                          return data;
                        }, err => {
                          console.log('Error: ', err);
                          return err;
                        });
            }
          }
           
         }).then(()=> {
          if( typeof g.vendorsLeger !== 'undefined') {
            
            console.log('vender ledgers');
            for(let i=0;i<g.vendorsLeger.length;i++) {
              
              // tslint:disable-next-line: max-line-length
             this.database.executeSql('INSERT INTO  tblledgervendor (ID,POID,Date,Amount,VendorID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [g.vendorsLeger[i].ID,g.vendorsLeger[i].POID, g.vendorsLeger[i].Date, g.vendorsLeger[i].Amount, g.vendorsLeger[i].VendorID, g.vendorsLeger[i].IsCredit, g.vendorsLeger[i].DueDate, g.vendorsLeger[i].ByUserId, g.vendorsLeger[i].Remarks, 1])
              .then(data => {
              console.log('successfully Added vendorledger');
               return data;
                }, err => {
                 console.log('Error: ', err);
                 return err;
             });
            }
          }
         }).then(() => {
          // loading.dismiss();
          if( typeof g.expenses !== 'undefined') {
            
            console.log('vender ledgers');
            for(let i=0;i<g.expenses.length;i++) {
              
              const data = [g.expenses[i].ID, '113008225657937776461', g.expenses[i].Name, g.expenses[i].Date, g.expenses[i].Amount, g.expenses[i].Category, g.expenses[i].Description, g.expenses[i].Active, g.expenses[i].Sync ];
              // tslint:disable-next-line: max-line-length
              this.database.executeSql('INSERT INTO  tblexpenses (ID,AccountId,Name,Date,Amount,Category,Description,Active,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data)
              .then(data => {
                     console.log('successfully Created item');
                     return data;
               }, err => {
                      console.log('Error: ', err);
                       return err;
              });
            }
          }
         }).then(() => {
           loading.dismiss();
         });
        }
      }
      if(typeof g.items !== 'undefined' && this.executed === 0)  {
        this.executed = 1;
        console.log('items');
        for (let i=0;i<g.items.length;i++) {
               
               const data = [g.items[i].itemid,'113008225657937776461', g.items[i].Description, g.items[i].Rate, g.items[i].Cost, g.items[i].Instock, g.items[i].Active, 1 ];
               // tslint:disable-next-line: max-line-length
               this.database.executeSql('INSERT INTO  items (itemid,AccountId, Description,Rate,Cost,Instock,Active,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
               .then(data => {
                 console.log('successfully Created item');
                 return data;
               }, err => {
                 console.log('Error: ', err);
                 return err;
               }).then(data3 => {
           if( typeof g.vendors !== 'undefined') {
             console.log('vendors');
             for (let i=0;i<g.vendors.length;i++) {
         const data = [ g.vendors[i].ID, g.vendors[i].Name, g.vendors[i].Address, g.vendors[i].Phone, g.vendors[i].Email,  g.vendors[i].bActive,g.vendors[i].Balance, 1 ];
         // tslint:disable-next-line: max-line-length
         this.database.executeSql('INSERT INTO  tblvendors (ID,Name,Address,Phone,Email,bActive,Balance,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
         .then(data => {
           console.log('successfully Created item');
           return data;
         }, err => {
           console.log('Error: ', err);
           return err;
         })
             }
           }
         }).then(data4 => {
           if( typeof g.clients !== 'undefined') {
             console.log('clients from server:',g.clients);
             for (let i=0;i<g.clients.length;i++) {
               const data = [g.clients[i].Cid,'113008225657937776461', g.clients[i].Fname, g.clients[i].Lname, g.clients[i].Shop, g.clients[i].BillingAddress, g.clients[i].City, g.clients[i].Cell, g.clients[i].Active, g.clients[i].Balance,1 ];
               // tslint:disable-next-line: max-line-length
               this.database.executeSql('INSERT INTO  clients (Cid,AccountId,Fname,Lname,Shop,BillingAddress,City,Cell,Active,Balance,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?)', data)
               .then(data => {
                 console.log('successfully Created item');
                 return data;
               }, err => {
                 console.log('Error: ', err);
                 return err;
               });
             }
           }
         }).then(data5 => {
           if( typeof g.POS !== 'undefined') {
             
             console.log('POS');

             for(let i=0;i<g.POS.length;i++) {
               // tslint:disable-next-line: max-line-length
               const data = [ g.POS[i].ID,g.POS[i].VendorID, g.POS[i].Date, g.POS[i].ReceivedBy, g.POS[i].Total, g.POS[i].Remarks,parseInt(g.POS[i].Discount), parseInt(g.POS[i].Active),1 ];
               this.database.executeSql('INSERT INTO  tblpurchasedorder (ID,VendorID,Date,ReceivedBy,Total,Remarks,Discount,Active,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data)
               .then(data => {
                 console.log('add po');
               });
             }
           }
         }).then(data5 => {
           if( typeof g.POItems !== 'undefined') {
             
             console.log('POItems');
             for(let i = 0;i<g.POItems.length;i++) {
               
               const data1 = [ g.POItems[i].ID,g.POItems[i].Poid, g.POItems[i].ItemID, g.POItems[i].Qty, g.POItems[i].CostPrice, 1 ];
               this.database.executeSql('INSERT INTO  tblpodetail (ID,Poid,ItemID,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data1)
                  .then(data => {
                      console.log('successfully Add item');
                      return data;
                   }, err => {
                        console.log('Error: ', err);
                        return err;
                    });
                   //  this.database.executeSql('UPDATE items SET Instock=Instock+? where itemid=?', [g.POItems[i].Qty, g.POItems[i].ItemID])
                   //  .then(data => {
                   //    console.log('successfully Updated stock');
                   //    return data;
                   //  }, err => {
                   //    console.log('Error: ', err);
                   //    return err;
                   //  });
             }
           }
         }).then(() => {
          if( typeof g.users !== 'undefined') {
            console.log('POS');

            for(let i=0;i<g.users.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [ g.users[i].ID ,g.users[i].email, g.users[i].name, g.users[i].Active, 1 ];
              this.database.executeSql('INSERT INTO  tblUsers (ID,email,name,bActive,Sync) VALUES (?,?,?,?,?)', data)
              .then(data => {
                console.log('add po');
              });
            }
          }
         }).then(() => {
          if( typeof g.acl !== 'undefined') {
            console.log('POS');
            for(let i=0;i<g.acl.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [ g.acl[i].ID ,g.acl[i].name, g.acl[i].userId, g.acl[i].bValue, 1 ];
              console.log('here6' + data);
              this.database.executeSql('INSERT INTO  tblacl (ID,name,userId,bValue,Sync) VALUES (?,?,?,?,?)', data)
              .then(data => {
                console.log('add po');
              });
            }
          }
         }).then(() => {
          if( typeof g.categories !== 'undefined') {
            console.log('POS');
            for(let i=0;i<g.categories.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [ g.categories[i].catid ,g.categories[i].name, g.categories[i].active ];
              this.database.executeSql('INSERT INTO  categories (catid,name,active) VALUES (?,?,?)', data)
              .then(data => {
                console.log('add po');
              });
            }
          }
         }).then(() => {
          if( typeof g.slides !== 'undefined') {
            console.log('POS');
            for(let i=0;i<g.slides.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [ g.slides[i].Id ,g.slides[i].slideNo, g.slides[i].slideHeading,  g.slides[i].slideText ,g.slides[i].slideImage, g.slides[i].bActive ];
              this.database.executeSql('INSERT INTO tblslides (Id,slideNo,slideHeading,slideText,slideImage,bActive) VALUES (?,?,?,?,?,?)', data)
              .then(data => {
                console.log('add po');
              });
            }
          }
         }).then(data6 => {
           if( typeof g.invoices !== 'undefined') {
             
             for(let i=0;i<g.invoices.length;i++) {
             console.log('invoices');
             // tslint:disable-next-line: max-line-length
             const data = [ g.invoices[i].Iid,g.invoices[i].AccountId, g.invoices[i].Cid, g.invoices[i].Name, g.invoices[i].CreateDate, g.invoices[i].Terms, g.invoices[i].DueDate, g.invoices[i].Subtotal, g.invoices[i].Discount, g.invoices[i].Total, g.invoices[i].Message, parseInt(g.invoices[i].Status),1 ];
              // tslint:disable-next-line: max-line-length
             this.database.executeSql('INSERT INTO  invoices (Iid,AccountId,Cid,Name,CreateDate,Terms,DueDate,Subtotal,Discount,Total,Message,Status,Sync) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', data)
                  .then(data => {
                   console.log('successfully Created invoice');
              });
             }
            }
         }).then(data7 => {
           if( typeof g.invoiceItems !== 'undefined') {
             
             console.log('POItems');
             for(let i=0;i<g.invoiceItems.length;i++) {
               const data1 = [ g.invoiceItems[i].Iiid,g.invoiceItems[i].Iid, g.invoiceItems[i].Itemid, g.invoiceItems[i].Qty, g.invoiceItems[i].CostPrice, 1 ];
               this.database.executeSql('INSERT INTO  invoiceitems (Iiid,Iid,Itemid,Qty,CostPrice,Sync) VALUES (?,?,?,?,?,?)', data1)
               .then(data => {
                 console.log('successfully Add item');
                 return data;
               }, err => {
                 console.log('Error: ', err);
                 return err;
               });
             }
           }
         }).then(data8 => {
           if( typeof g.ledgers !== 'undefined') {
             
             console.log('ledgers');
             for(let i=0;i<g.ledgers.length;i++) {
               this.database.executeSql('INSERT INTO  tblledger (ID,InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [g.ledgers[i].ID,g.ledgers[i].InvoiceID, g.ledgers[i].Date, g.ledgers[i].Amount, g.ledgers[i].CustomerID, g.ledgers[i].IsCredit, g.ledgers[i].DueDate, g.ledgers[i].ByUserId, g.ledgers[i].Remarks, 1])
                 .then(data => {
                 console.log('successfully Added Ledger');
                  return data;
                   }, err => {
                    console.log('Error: ', err);
                    return err;
                });
             }
           }
         }).then(()=> {
          if( typeof g.logs !== 'undefined') {
            
            console.log('ledgers');
            for(let i=0;i<g.logs.length;i++) {
              // tslint:disable-next-line: max-line-length
              const data = [g.logs[i].ID, g.logs[i].tableName,g.logs[i].tableId,g.logs[i].userId,g.logs[i].actionType,g.logs[i].name,g.logs[i].dated, 1];
              this.database.executeSql('INSERT INTO  tblLogs (ID,tableName,tableId,userId,actionType,name,dated,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
                        .then(data => {
                          console.log('successfully Created Log');
                          return data;
                        }, err => {
                          console.log('Error: ', err);
                          return err;
                        });
            }
          }
           
         }).then(()=> {
          if( typeof g.vendorsLeger !== 'undefined') {
            
            console.log('vender ledgers');
            for(let i=0;i<g.vendorsLeger.length;i++) {
              
              // tslint:disable-next-line: max-line-length
             this.database.executeSql('INSERT INTO  tblledgervendor (ID,POID,Date,Amount,VendorID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?,?)', [g.vendorsLeger[i].ID,g.vendorsLeger[i].POID, g.vendorsLeger[i].Date, g.vendorsLeger[i].Amount, g.vendorsLeger[i].VendorID, g.vendorsLeger[i].IsCredit, g.vendorsLeger[i].DueDate, g.vendorsLeger[i].ByUserId, g.vendorsLeger[i].Remarks, 1])
              .then(data => {
              console.log('successfully Added vendorledger');
               return data;
                }, err => {
                 console.log('Error: ', err);
                 return err;
             });
            }
          }
         }).then(() => {
          // loading.dismiss();
          if( typeof g.expenses !== 'undefined') {
            
            console.log('vender ledgers');
            for(let i=0;i<g.expenses.length;i++) {
              
              const data = [g.expenses[i].ID, '113008225657937776461', g.expenses[i].Name, g.expenses[i].Date, g.expenses[i].Amount, g.expenses[i].Category, g.expenses[i].Description, g.expenses[i].Active, g.expenses[i].Sync ];
              // tslint:disable-next-line: max-line-length
              this.database.executeSql('INSERT INTO  tblexpenses (ID,AccountId,Name,Date,Amount,Category,Description,Active,Sync) VALUES (?,?,?,?,?,?,?,?,?)', data)
              .then(data => {
                     console.log('successfully Created item');
                     return data;
               }, err => {
                      console.log('Error: ', err);
                       return err;
              });
            }
          }
         }).then(() => {
           loading.dismiss();
         });
        }
      }
      if (this.executed === 0) {
        loading.dismiss();
      }

      console.log('hurrah');
     
     
    } else {
      // alert('failed');
    }

   // this.initializeItems();
  },err =>{
    console.log('JS call error-3',err);
    const error = JSON.parse(err.error);
    //alert(error.message);
    console.log('Native data:',JSON.parse(error));
  });


}


deletePO(POID,Amount,VendorID,VendorSync) {
 
  let now = new Date().toString();
  const a = this.datePipe.transform(now, 'dd MMM yyyy');
  this.addPaymentVendor(VendorID,VendorSync,a,Amount,'PO Deleted').then(() => {});
  ;
  return this.getPOItems(POID).then((Items) => {
      this.database.executeSql('UPDATE tblpurchasedorder SET Active=0,Sync=2 where ID=?', [POID])
            .then(data => {
              console.log('successfully Updated stock');
              for (let i=0;i<=Items.length;i++) {
                if (Items[i].Qty>0) {
                  if(Items[i].Sync === 1) {
                    Items[i].Sync = 2;
                  }
                  
                  this.database.executeSql('UPDATE items SET Instock=Instock-?,Sync=? where itemid=?', [Items[i].Qty, Items[i].Sync, Items[i].Id])
                  .then(data => {
                    console.log('successfully Updated stock');
                    
                    return data;
                  }, err => {
                    console.log('Error: ', err);
                    return err;
                  });
      
                }
            }
              // tslint:disable-next-line: max-line-length
             

                    // this.databaseprovider.setupdatePOS(1);
                    // this.router.navigate(['/menu/purchased-orders']);
              return data;
            }, err => {
              console.log('Error: ', err);
              return err;
            });
  }); 
}
restorePO(POID,Amount,VendorID,VendorSync) {
  ;
  let now = new Date().toString();
  const a = this.datePipe.transform(now, 'dd MMM yyyy');
  this.database.executeSql('INSERT INTO  tblledgervendor (POID,Date,Amount,VendorID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', [POID, a, Amount, VendorID, 0, null, 'rizwanali', 'PO Restored', 0])
  .then(data => {
    console.log('successfully Added Ledger');
    return data;
  }, err => {
    console.log('Error: ', err);
    return err;
  });
  
  this.database.executeSql('UPDATE tblvendors SET Balance=Balance+?,Sync=? WHERE ID=?',[Amount, VendorSync,VendorID]).then(data => {
    console.log('vendorsBalnace'+data);

    return data;
  }, err => {
    console.log('Error: ', err);
    return err;
  });
  return this.getPOItems(POID).then((Items) => {
      this.database.executeSql('UPDATE tblpurchasedorder SET Active=1,Sync=2 where ID=?', [POID])
            .then(data => {
              console.log('successfully Updated stock');
              for (let i=0;i<=Items.length;i++) {
                if (Items[i].Qty>0) {
                  if(Items[i].Sync === 1) {
                    Items[i].Sync = 2;
                  }
                  
                  this.database.executeSql('UPDATE items SET Instock=Instock+?,Sync=? where itemid=?', [Items[i].Qty, Items[i].Sync, Items[i].Id])
                  .then(data => {
                    console.log('successfully Updated stock');
                    
                    return data;
                  }, err => {
                    console.log('Error: ', err);
                    return err;
                  });
      
                }
            }
                    // this.databaseprovider.setupdatePOS(1);
                    // this.router.navigate(['/menu/purchased-orders']);
              return data;
            }, err => {
              console.log('Error: ', err);
              return err;
            });
  });
}
restoreInvoice(Iid,Amount,CustomerID,CustomerSync) {
  
  let now = new Date().toString();
  const a = this.datePipe.transform(now, 'dd MMM yyyy');
  const a1 = Math.round((new Date(a)).getTime() / 1000);

  this.database.executeSql('INSERT INTO  tblledger (InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', [Iid, a1, Amount, CustomerID, 0, null, 'rizwanali', 'Invoice Restored', 0])
  .then(data => {
    console.log('successfully Added Ledger');
    return data;
  }, err => {
    console.log('Error: ', err);
    return err;
  });
  this.database.executeSql('UPDATE clients SET Balance=Balance+?,Sync=? WHERE Cid=?',[Amount, CustomerSync, CustomerID]).then(data => {
    console.log(data);
    ;
    return data;
  }, err => {
    console.log('Error: ', err);
    return err;
  });
  ;
  return this.getInvoiceItems(Iid).then((Items) => {

      this.database.executeSql('UPDATE invoices SET Status=1,Sync=2 where Iid=?', [Iid])
            .then(data => {
              console.log('successfully Updated stock');
              for (let i=0;i<=Items.length;i++) {
    
                if (Items[i].Qty>0) {
                  if(Items[i].Sync === 1) {
                    Items[i].Sync = 2;
                  }
                  
                  this.database.executeSql('UPDATE items SET Instock=Instock-?,Sync=? where itemid=?', [Items[i].Qty, Items[i].Sync, Items[i].Id])
                  .then(data => {
                    console.log('successfully Updated stock');
                    
                    return data;
                  }, err => {
                    console.log('Error: ', err);
                    return err;
                  });
      
                }
            }

            /*return this.database.executeSql('UPDATE clients SET Balance=Balance-? WHERE Cid=?',[Amount , Items.Cid]).then(data => {
              console.log(data);
              ;
              return data;
            }, err => {
              console.log('Error: ', err);
              return err;
            });*/
                    // this.databaseprovider.setupdatePOS(1);
                    // this.router.navigate(['/menu/purchased-orders']);
              return data;
            }, err => {
              console.log('Error: ', err);
              return err;
            });
  }); 
  
}
deleteInvoice(Iid,Amount,CustomerID,CustomerSync) {
  
  let now = new Date().toString();
  const a = this.datePipe.transform(now, 'dd MMM yyyy');
  this.addPayment(CustomerID,CustomerSync,a,Amount,'Invoice Deleted').then(() => {});
  ;
  return this.getInvoiceItems(Iid).then((Items) => {

      this.database.executeSql('UPDATE invoices SET Status=0,Sync=2 where Iid=?', [Iid])
            .then(data => {
              console.log('successfully Updated stock');
              for (let i=0;i<=Items.length;i++) {
                
                if (Items[i].Qty>0) {
                  if(Items[i].Sync === 1) {
                    Items[i].Sync = 2;
                  }
                  
                  this.database.executeSql('UPDATE items SET Instock=Instock+?,Sync=? where itemid=?', [Items[i].Qty, Items[i].Sync, Items[i].Id])
                  .then(data => {
                    console.log('successfully Updated stock');
                    
                    return data;
                  }, err => {
                    console.log('Error: ', err);
                    return err;
                  });
      
                }
            }
    
                 
            /*return this.database.executeSql('UPDATE clients SET Balance=Balance-? WHERE Cid=?',[Amount , Items.Cid]).then(data => {
              console.log(data);
              ;
              return data;
            }, err => {
              console.log('Error: ', err);
              return err;
            });*/
                    // this.databaseprovider.setupdatePOS(1);
                    // this.router.navigate(['/menu/purchased-orders']);
              return data;
            }, err => {
              console.log('Error: ', err);
              return err;
            });
  }); 
  
}


updateBalance(Total, Cid){
  
    ;
    return this.database.executeSql('UPDATE clients SET Balance=Balance-? WHERE Cid=?',[Total , Cid]).then(data => {
      console.log(data);
      console.log("BalanceUpdated");
      return data;
      ;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  
}

getAllActivePOS() {
  return this.database.executeSql('Select tblpurchasedorder.ID,tblpurchasedorder.VendorID,tblpurchasedorder.Date,tblpurchasedorder.ReceivedBy,tblpurchasedorder.Total,tblpurchasedorder.Remarks,tblpurchasedorder.Discount,tblpurchasedorder.Active,tblpurchasedorder.Sync,tblvendors.Name,tblvendors.Address,tblvendors.Phone,tblvendors.Email,tblvendors.bActive from tblpurchasedorder,tblvendors WHERE tblpurchasedorder.Active=1 AND tblpurchasedorder.VendorID=tblvendors.ID ORDER BY tblpurchasedorder.ID DESC', []).then((data) => {
    let Pos:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        Pos.push({
          ID: data.rows.item(i).ID,
          VendorID: data.rows.item(i).VendorID,
          Date: data.rows.item(i).Date,
          ReceivedBy: data.rows.item(i).ReceivedBy,
          Total: data.rows.item(i).Total,
          Remarks: data.rows.item(i).Remarks,
          Discount: data.rows.item(i).Discount,
          Phone: data.rows.item(i).Phone,
          Active: data.rows.item(i).Active,
          Sync: data.rows.item(i).Sync,
          Name: data.rows.item(i).Name

         });
      }
    }
    ;
    
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getActivePOSPagination(from1) {
  
   // alert('from1' + from1);
  let total = 0;
  this.database.executeSql('SELECT * From tblpurchasedorder',[]).then((data1) => {
     // total = data1.rows.length;
      console.log('data from'+ data1.rows.length);
      total = data1.rows.length;

   });
  return this.database.executeSql('Select tblpurchasedorder.ID,tblpurchasedorder.VendorID,tblpurchasedorder.Date,tblpurchasedorder.ReceivedBy,tblpurchasedorder.Total,tblpurchasedorder.Remarks,tblpurchasedorder.Discount,tblpurchasedorder.Active,tblpurchasedorder.Sync,tblvendors.Name,tblvendors.Address,tblvendors.Phone,tblvendors.Email,tblvendors.bActive from tblpurchasedorder,tblvendors WHERE tblpurchasedorder.Active=1 AND tblpurchasedorder.VendorID=tblvendors.ID ORDER BY tblpurchasedorder.ID DESC limit ?, 10', [from1]).then((data) => {
    let Pos:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        Pos.push({
          Total1: total,
          ID: data.rows.item(i).ID,
          VendorID: data.rows.item(i).VendorID,
          Date: data.rows.item(i).Date,
          ReceivedBy: data.rows.item(i).ReceivedBy,
          Total: data.rows.item(i).Total,
          Remarks: data.rows.item(i).Remarks,
          Discount: data.rows.item(i).Discount,
          Phone: data.rows.item(i).Phone,
          Active: data.rows.item(i).Active,
          Sync: data.rows.item(i).Sync,
          Name: data.rows.item(i).Name,
          Address: data.rows.item(i).Address,

         });
      }
    }
    ;
    
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
syncUpdatedPOSIDS() {
  return this.database.executeSql('Select ID FROM tblpurchasedorder where Sync=2', []).then((data) => {
    let Pos:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        Pos.push({
          ID: data.rows.item(i).ID,

         });
      }
    }
    ;
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
syncUpdatedInvoices() {
  return this.database.executeSql('Select Iid FROM invoices where Sync=2', []).then((data) => {
    let Pos:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        Pos.push({
          Iid: data.rows.item(i).Iid,

         });
      }
    }
    ;
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getAllDeletedPOS() {
  return this.database.executeSql('Select tblpurchasedorder.ID,tblpurchasedorder.VendorID,tblpurchasedorder.Date,tblpurchasedorder.ReceivedBy,tblpurchasedorder.Total,tblpurchasedorder.Remarks,tblpurchasedorder.Discount,tblpurchasedorder.Active,tblpurchasedorder.Sync,tblvendors.Name,tblvendors.Address,tblvendors.Phone,tblvendors.Email,tblvendors.bActive from tblpurchasedorder,tblvendors WHERE tblpurchasedorder.Active=0 AND tblpurchasedorder.VendorID=tblvendors.ID', []).then((data) => {
    let Pos:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        Pos.push({
          ID: data.rows.item(i).ID,
          VendorID: data.rows.item(i).VendorID,
          Date: data.rows.item(i).Date,
          ReceivedBy: data.rows.item(i).ReceivedBy,
          Total: data.rows.item(i).Total,
          Remarks: data.rows.item(i).Remarks,
          Discount: data.rows.item(i).Discount,
          Active: data.rows.item(i).Active,
          Sync: data.rows.item(i).Sync,
          Name: data.rows.item(i).Name

         });
      }
    }
    ;
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getAllDeletedInvoices() {
  return this.database.executeSql('Select invoices.Iid, invoices.AccountId , invoices.Cid, invoices.Name, invoices.CreateDate,invoices.Terms,invoices.DueDate,invoices.Subtotal,invoices.Discount,invoices.Total,invoices.Message,invoices.Status,invoices.Sync,clients.Cid,clients.AccountId,clients.Fname,clients.Lname, clients.Shop,clients.BillingAddress,clients.City,clients.Cell,clients.Active,clients.Balance,clients.Sync from invoices,clients WHERE invoices.Status=0 AND invoices.Cid=clients.Cid', []).then((data) => {
    let Pos:any = [];
    

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        Pos.push({
          Iid: data.rows.item(i).Iid,
            AccountId: data.rows.item(i).AccountId,
            Cid: data.rows.item(i).Cid,
            Name: data.rows.item(i).Name,
            CreateDate: data.rows.item(i).CreateDate,
            Terms: data.rows.item(i).Terms,
            DueDate: data.rows.item(i).DueDate,
            Subtotal: data.rows.item(i).Subtotal,
            Discount: data.rows.item(i).Discount,
            Total: data.rows.item(i).Total,
            Message: data.rows.item(i).Message,
            Fname: data.rows.item(i).Fname,
            Shop: data.rows.item(i).Shop,
            City: data.rows.item(i).City,
            Lname: data.rows.item(i).Lname,
            BillingAddress: data.rows.item(i).BillingAddress


         });
      }
    }
    ;
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getCustomerSync(CustomerID) {
  return this.database.executeSql('Select Sync FROM clients where Cid=?', [CustomerID]).then((data) => {
    let Pos:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        Pos.push({
          Sync: data.rows.item(i).Sync,

         });
      }
    }
    ;
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getVendorSync(VendorID) {
  return this.database.executeSql('Select Sync FROM tblvendors where ID=?', [VendorID]).then((data) => {
    let Pos:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        Pos.push({
          Sync: data.rows.item(i).Sync,

         });
      }
    }
    ;
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getAllInvoicesTable() {
  return this.database.executeSql('Select CreateDate,Total FROM invoices', []).then((data) => {
    let Pos:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        Pos.push({
          CreateDate: data.rows.item(i).CreateDate,
          Total: data.rows.item(i).Total,
         });
      }
    }
    ;
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getAllInvoicePaymentsTable() {
  return this.database.executeSql('Select Date,Amount FROM tblledger WHERE IsCredit=1', []).then((data) => {
    let Pos:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        Pos.push({
          Date: data.rows.item(i).Date,
          Amount: data.rows.item(i).Amount,
         });
      }
    }
    ;
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getAllInvoicesLedgerTable() {
  return this.database.executeSql('Select Date,Amount,IsCredit FROM tblledger', []).then((data) => {
    let Pos:any = [];
    if (data.rows.length > 0) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            Date: data.rows.item(i).Date,
            Amount: data.rows.item(i).Amount,
            IsCredit: data.rows.item(i).IsCredit,
           });
        }
      }
   // });
    console.log('b:');
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
addExpense(Name, date,Amount, Category, Description) {
  const a = Math.round((new Date(date)).getTime() / 1000);
  const data = ['113008225657937776461', Name, a, Amount, Category, Description, 1, 0 ];
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('INSERT INTO  tblexpenses (AccountId,Name,Date,Amount,Category,Description,Active,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
  .then(data => {
    this.database.executeSql('INSERT INTO  tblledger(InvoiceID,Date,Amount,CustomerID,IsCredit,Duedate,ByUserId,Remarks,Sync) VALUES (?,?,?,?,?,?,?,?,?)', [null, a, Amount, 0, 2, null, 'rizwanali', 'Expense', 0]).then((data) => {
    
    })
    console.log('successfully Created item');
    return data;
  }, err => {
    console.log('Error: ', err);
    return err;
  });
}
syncAddedExpenses() {
    
  return this.database.executeSql('SELECT * FROM tblexpenses where Sync=0', []).then((data) => {
    let items:any = [];

    
    if (data.rows.length > 0) {
      
      for (let i = 0; i < data.rows.length; i++) {
        items.push({
          ID: data.rows.item(i).ID,
          AccountId: data.rows.item(i).AccountId,
          Name: data.rows.item(i).Name,
          Date: data.rows.item(i).Date,
          Amount: data.rows.item(i).Amount,
          Category: data.rows.item(i).Category,
          Description: data.rows.item(i).Description,
          Active: data.rows.item(i).Active,
          Sync: data.rows.item(i).Sync,
         });
      }
    }
    console.log(items);
    
    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
syncUpdatedExpenses() {
    
  return this.database.executeSql('SELECT * FROM tblexpenses where Sync=2', []).then((data) => {
    let items:any = [];

    
    if (data.rows.length > 0) {
      
      for (let i = 0; i < data.rows.length; i++) {
        items.push({
          ID: data.rows.item(i).ID,
          AccountId: data.rows.item(i).AccountId,
          Name: data.rows.item(i).Name,
          Date: data.rows.item(i).Date,
          Amount: data.rows.item(i).Amount,
          Category: data.rows.item(i).Category,
          Description: data.rows.item(i).Description,
          Active: data.rows.item(i).Active,
          Sync: data.rows.item(i).Sync,
         });
      }
    }
    console.log(items);
    
    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
updateSyncedExpenses(IDs) {
  
  for (let i=0; i< IDs.length; i++) {
   this.database.executeSql('UPDATE  tblexpenses Set Sync=1 where ID=?', [IDs[i]]).then((data) => {
      
      console.log(data);
      return data;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
}

}
getAllExpenses() {
    
  return this.database.executeSql('SELECT * FROM tblexpenses where Active=1 ORDER BY ID DESC', []).then((data) => {
    let items:any = [];
    if (data.rows.length > 0) {

      for (let i = 0; i < data.rows.length; i++) {
        const z = new Date(parseInt(data.rows.item(i).Date)*1000).toString();
        const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy h:mm a');
        items.push({
          ID: data.rows.item(i).ID,
          AccountId: data.rows.item(i).AccountId,
          Name: data.rows.item(i).Name,
          Date: CreateDate,
          Amount: data.rows.item(i).Amount,
          Category: data.rows.item(i).Category,
          Description: data.rows.item(i).Description,
          Active: data.rows.item(i).Active,
          Sync: data.rows.item(i).Sync,
         });
      }
    }
    console.log(items);
    
    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
deleteExpense(ID, Sync) {
  return this.database.executeSql('UPDATE tblexpenses SET Active=0,Sync=? WHERE ID=?',[Sync, ID]).then(data => {
    console.log(data);
    return 1;
  }, err => {
    console.log('Error: ', err);
    return err;
  });
}
getExpenesonspot(){
  return this.database.executeSql('SELECT * FROM tblexpenses ORDER BY ID DESC LIMIT 0, 1', []).then((data) => {
    let items:any = [];

    
    if (data.rows.length > 0) {
      
      for (let i = 0; i < data.rows.length; i++) {
        items.push({
          ID: data.rows.item(i).ID,
         
         });
      }
    }
    console.log(items);
    
    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
async getExpense(id) {
  let loading = await this.loadingController.create();
  await loading.present();
  this.database.executeSql('SELECT * FROM tblexpenses WHERE ID=?', [id]).then((data) => {
    let items:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        items.push({
          ID: data.rows.item(i).ID,
          AccountId: data.rows.item(i).AccountId,
          Name: data.rows.item(i).Name,
          Date: data.rows.item(i).Date,
          Amount: data.rows.item(i).Amount,
          Category: data.rows.item(i).Category,
          Description: data.rows.item(i).Description,
          Active: data.rows.item(i).Active,
          Sync: data.rows.item(i).Sync,
         });
      }
    }
    ;
    console.log(items);
    const navigationExtras: NavigationExtras = {
      state: {
        expense: items[0],
        url: '/menu/logs'
      }
    };
    this.router.navigate(['editexpense'], navigationExtras);
    loading.dismiss();
    //return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}

getExpensesDashboard() {
  return this.database.executeSql('Select Date,Amount FROM tblexpenses', []).then((data1) => {
    let Pos:any = [];
    if (data1.rows.length > 0) {
      for (let i = 0; i < data1.rows.length; i++) {
        Pos.push({
          Date: data1.rows.item(i).Date,
          Amount: data1.rows.item(i).Amount,
          IsCredit: 2,
         });
      }
    }
    return Pos;
  });
}
getTodaysSales(start, end, currency) {
 // alert('Start: ' + start + 'end: ' + end);

  const a = Math.round((new Date(start)).getTime() / 1000);
  const b = Math.round((new Date(end)).getTime() / 1000);
  // alert('a: ' + a + 'b: ' + b)
  // SELECT DATE(FROM_UNIXTIME(`Date`)),SUM(`Amount`) AS aDate FROM `tblledger` GROUP BY `Date`SELECT DATE(FROM_UNIXTIME(`Date`)),SUM(`Amount`) AS aDate FROM `tblledger` GROUP BY `Date`
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT date(Date, ?, ?) AS Date,SUM(CASE WHEN IsCredit=0 THEN Amount ELSE 0 END) AS Total,SUM(CASE WHEN IsCredit=1 THEN Amount ELSE 0 END) AS Paid FROM tblledger WHERE Date  between ? and ? GROUP BY date(Date, ?, ?) ORDER BY date DESC', ['unixepoch','localtime',a,b,'unixepoch','localtime']).then((data1) => {
    let items:any = [];
    //       const z = new Date(parseInt(data1.rows.item(1).Date)*1000).toString();
    //       const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy');
    // alert(CreateDate)
    // alert(data1.rows.item(0).Date )
    if (data1.rows.length > 0) {
      for (let i = 0; i < data1.rows.length; i++) {
        if (data1.rows.item(i).Total === null && data1.rows.item(i).Paid === null) {
          items.push({
            Date: '-',
            Total: '-',
            Paid: '-',
           });
        } else if (data1.rows.item(i).Total === null && data1.rows.item(i).Paid != null) {
          const z = new Date(data1.rows.item(i).Date).toString();
          const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy');
          items.push({
            Date: CreateDate,
            Total: currency + 0,
            Paid: currency + data1.rows.item(i).Paid,
           });
        } else if (data1.rows.item(i).Paid === null && data1.rows.item(i).Total != null) {
          const z = new Date(data1.rows.item(i).Date).toString();
          const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy');
          items.push({
            Date: CreateDate,
            Total: currency + data1.rows.item(i).Total,
            Paid: currency + 0,
           });
        } else {
          const z = new Date(data1.rows.item(i).Date).toString();
          const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy');

          items.push({
            Date: CreateDate,
            Total: currency + data1.rows.item(i).Total,
            Paid: currency + data1.rows.item(i).Paid,
           });
        }
      }
    } else {
      items.push({
        Date: '-',
        Total:'-',
        Paid: '-',
       });
    }
    console.log('belo')
    // alert(items.length)
    console.log(items);
    return items;
  });
}
getSalesByCustomerStatement() {
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT clients.Cid,clients.Fname,clients.Lname,clients.Shop,SUM(CASE WHEN tblledger.IsCredit=0 THEN tblledger.Amount ELSE 0 END) AS Total,SUM(CASE WHEN tblledger.IsCredit=1 THEN tblledger.Amount ELSE 0 END) AS Paid FROM clients,tblledger WHERE  clients.Cid=tblledger.CustomerID GROUP BY tblledger.CustomerID', []).then((data1) => {
    let items:any = [];

    if (data1.rows.length > 0) {
      for (let i = 0; i < data1.rows.length; i++) {
        items.push({
          Cid:  data1.rows.item(i).Cid,
          Name: data1.rows.item(i).Fname + ' ' + data1.rows.item(i).Lname,
          Shop: data1.rows.item(i).Shop,
          Total: data1.rows.item(i).Total,
          Paid: data1.rows.item(i).Paid,
         });
      }
    }
    console.log(items);
    return items;
  });
}
getSalesByCustomerId(id) {
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('Select invoices.Iid,invoices.AccountId,invoices.Cid,invoices.Name,invoices.CreateDate,invoices.Terms,invoices.DueDate,invoices.Subtotal,invoices.Discount,invoices.Total,invoices.Message from invoices WHERE invoices.Cid=?', [id]).then((data) => {
    let Pos:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        const z = new Date(parseInt(data.rows.item(i).CreateDate)*1000).toString();
        const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy');
        const y = new Date(parseInt(data.rows.item(i).CreateDate)*1000).toString();
        const DueDate =  this.datePipe.transform(y, 'dd MMM yyyy');
        Pos.push({
          Iid: data.rows.item(i).Iid,
          AccountId: data.rows.item(i).AccountId,
          Cid: data.rows.item(i).Cid,
          Name: data.rows.item(i).Name,
          CreateDate: CreateDate,
          Terms: data.rows.item(i).Terms,
          DueDate: DueDate,
          Subtotal: data.rows.item(i).Subtotal,
          Discount: data.rows.item(i).Discount,
          Total: data.rows.item(i).Total,
          Message: data.rows.item(i).Message,
         });
      }
    }
    return Pos;
  });
}
getSalesByCustomerIdTime(id, start, end, currency) {
  const a = Math.round((new Date(start)).getTime() / 1000);
  const b = Math.round((new Date(end)).getTime() / 1000);
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('Select invoices.Iid,invoices.AccountId,invoices.Cid,invoices.Name,invoices.CreateDate,invoices.Terms,invoices.DueDate,invoices.Subtotal,invoices.Discount,invoices.Total,invoices.Message from invoices WHERE invoices.Cid=?  AND invoices.CreateDate>=? AND invoices.CreateDate<=?', [id,a,b]).then((data) => {
    let Pos:any = [];
    //alert(data.rows.length)

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
       // alert('create ' + data.rows.item(i).CreateDate)
        const z = new Date(parseInt(data.rows.item(i).CreateDate)*1000).toString();
        const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy');
        const y = new Date(parseInt(data.rows.item(i).DueDate)*1000).toString();
        const DueDate =  this.datePipe.transform(y, 'dd MMM yyyy');
        Pos.push({
          Iid: data.rows.item(i).Iid,
          AccountId: data.rows.item(i).AccountId,
          Cid: data.rows.item(i).Cid,
          Name: data.rows.item(i).Name,
          CreateDate: CreateDate,
          Terms: data.rows.item(i).Terms,
          DueDate: DueDate,
          Subtotal: data.rows.item(i).Subtotal,
          Discount: data.rows.item(i).Discount,
          Total: currency + data.rows.item(i).Total,
          Message: data.rows.item(i).Message,
         // Total1:  data.rows.item(i).Total1,
         });
      // tslint:disable-next-line: align
      } 
    } else {
      Pos.push({
        Iid: '',
        AccountId: '',
        Cid: '',
        Name: '',
        CreateDate:'',
        Terms: '',
        DueDate:'',
        Subtotal: '',
        Discount: '',
        Total: '',
        Message:'',
       // Total1:  data.rows.item(i).Total1,
       });
    }
    return Pos;
  });
}
getSalesAndPaidByCustomertime(id,start,end) {
  const a = Math.round((new Date(start)).getTime() / 1000);
  const b = Math.round((new Date(end)).getTime() / 1000);
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT clients.Fname,clients.Lname,SUM(CASE WHEN tblledger.IsCredit=0 THEN tblledger.Amount ELSE 0 END) AS Total,SUM(CASE WHEN tblledger.IsCredit=1 THEN tblledger.Amount ELSE 0 END) AS Paid FROM clients,tblledger WHERE  clients.Cid=tblledger.CustomerID AND tblledger.CustomerID=? AND tblledger.Date  between ? and ? GROUP BY tblledger.CustomerID', [id,a,b]).then((data1) => {
    let items:any = [];
    // alert(data1.rows.length)
    if (data1.rows.length > 0) {
      for (let i = 0; i < data1.rows.length; i++) {
        items.push({
          Name: data1.rows.item(i).Fname + ' ' + data1.rows.item(i).Lname,
          Total: data1.rows.item(i).Total,
          Paid: data1.rows.item(i).Paid,
         });
      }
    } else {
      items.push({
        Name: '',
        Total: 0,
        Paid: 0,
       });
    }
    console.log(items);
    return items;
  });
}
getSalesByCustomer(currency) {
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT clients.Fname,clients.Lname,SUM(CASE WHEN tblledger.IsCredit=0 THEN tblledger.Amount ELSE 0 END) AS Total,SUM(CASE WHEN tblledger.IsCredit=1 THEN tblledger.Amount ELSE 0 END) AS Paid FROM clients,tblledger WHERE  clients.Cid=tblledger.CustomerID GROUP BY tblledger.CustomerID', []).then((data1) => {
    let items:any = [];

    if (data1.rows.length > 0) {
      for (let i = 0; i < data1.rows.length; i++) {
        items.push({
          Name: data1.rows.item(i).Fname + ' ' + data1.rows.item(i).Lname,
          Total:currency + data1.rows.item(i).Total,
          Paid: currency + data1.rows.item(i).Paid,
         });
      }
    }   else {
      items.push({
        Name: '-',
        Total: '-',
        Paid: '-',
       });
    }
    console.log(items);
    return items;
  });
}
getSalesByCustomertime(start,end,currency) {
  const a = Math.round((new Date(start)).getTime() / 1000);
  const b = Math.round((new Date(end)).getTime() / 1000);
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT clients.Fname,clients.Lname,SUM(CASE WHEN tblledger.IsCredit=0 THEN tblledger.Amount ELSE 0 END) AS Total,SUM(CASE WHEN tblledger.IsCredit=1 THEN tblledger.Amount ELSE 0 END) AS Paid FROM clients,tblledger WHERE  clients.Cid=tblledger.CustomerID AND tblledger.Date  between ? and ? GROUP BY tblledger.CustomerID', [a,b]).then((data1) => {
    let items:any = [];

    if (data1.rows.length > 0) {
      for (let i = 0; i < data1.rows.length; i++) {
        items.push({
          Name: data1.rows.item(i).Fname + ' ' + data1.rows.item(i).Lname,
          Total: currency + data1.rows.item(i).Total,
          Paid: currency + data1.rows.item(i).Paid,
         });
      }
    }  else {
      items.push({
        Name: '-',
        Total: '-',
        Paid: '-',
       });
    }
    console.log(items);
    return items;
  });
}
getSalesByItem(currency) {
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT items.Description,SUM(invoiceitems.Qty) AS Qty,SUM(invoiceitems.CostPrice * invoiceitems.Qty) AS CostPrice FROM items,invoiceitems WHERE  items.itemid=invoiceitems.Itemid GROUP BY items.itemid', []).then((data1) => {
    let items:any = [];

    if (data1.rows.length > 0) {
      for (let i = 0; i < data1.rows.length; i++) {
        if ( data1.rows.item(i).CostPrice > 0) {
          items.push({
            Description: data1.rows.item(i).Description,
            Qty: data1.rows.item(i).Qty,
            CostPrice: currency + data1.rows.item(i).CostPrice,
           });
        }
      }
    }else {
      items.push({
        Description: '-',
        Qty: '-',
        CostPrice: '    -',
       });
    }
    console.log(items);
    return items;
  });
}
getSalesByItemTime(start, end, currency) {
  const a = Math.round((new Date(start)).getTime() / 1000);
  const b = Math.round((new Date(end)).getTime() / 1000);
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT items.Description,SUM(invoiceitems.Qty) AS Qty,SUM(invoiceitems.CostPrice * invoiceitems.Qty) AS CostPrice FROM items,invoiceitems,invoices WHERE invoices.Iid=invoiceitems.Iid AND invoices.CreateDate between ? and ? AND items.itemid=invoiceitems.Itemid GROUP BY items.itemid', [a, b]).then((data1) => {
    let items:any = [];

    if (data1.rows.length > 0) {
      for (let i = 0; i < data1.rows.length; i++) {
        if ( data1.rows.item(i).CostPrice > 0) {
        items.push({
          Description: data1.rows.item(i).Description,
          Qty: data1.rows.item(i).Qty,
          CostPrice: currency + data1.rows.item(i).CostPrice,
         });
      }
    }
    } else {
      items.push({
        Description: '-',
        Qty: '-',
        CostPrice: '    -',
       });
    }
    console.log(items);
    return items;
  });
}
getCategoryExpense() {
  return this.database.executeSql('SELECT Category,Amount FROM tblexpenses where Active=1 GROUP BY Category', []).then((data) => {
    let items:any = [];
    if (data.rows.length > 0) {

      for (let i = 0; i < data.rows.length; i++) {
        items.push({
          Amount: data.rows.item(i).Amount,
          Category: data.rows.item(i).Category
         });
      }
    } else {
      items.push({
        Amount: '-',
        Category: '-'
       });
    }
    console.log(items);
    
    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getExpenseJournalByTime(start, end, currency) {
  const a = Math.round((new Date(start)).getTime() / 1000);
  const b = Math.round((new Date(end)).getTime() / 1000);
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT Date,Category,Name,Description,Amount FROM tblexpenses where Active=1 AND Date between ? and ? GROUP BY Category ORDER BY ID DESC', [a, b]).then((data) => {
    let items:any = [];
    if (data.rows.length > 0) {

      for (let i = 0; i < data.rows.length; i++) {
        const z = new Date(parseInt(data.rows.item(i).Date)*1000).toString();
        const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy h:mm a');
        items.push({
          Date: CreateDate,
          Category: data.rows.item(i).Category,
          Name: data.rows.item(i).Name,
          Description: data.rows.item(i).Description,
          Amount: currency +  data.rows.item(i).Amount,
         });
      }
    } else {
      items.push({
        Date: '-',
        Category: '-',
        Name: '-',
        Description: '-',
        Amount:'-',
       });
    }
    console.log(items);

    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getExpenseJournalByTimeAndCategory(start, end, category, currency) {
  const a = Math.round((new Date(start)).getTime() / 1000);
  const b = Math.round((new Date(end)).getTime() / 1000);
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT Date,Category,Name,Description,Amount FROM tblexpenses where Active=1 AND Category=? AND Date between ? and ? GROUP BY Category ORDER BY ID DESC', [category, a, b]).then((data) => {
    let items:any = [];
    if (data.rows.length > 0) {

      for (let i = 0; i < data.rows.length; i++) {
        const z = new Date(parseInt(data.rows.item(i).Date)*1000).toString();
        const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy h:mm a');
        items.push({
          Date: CreateDate,
          Category: data.rows.item(i).Category,
          Name: data.rows.item(i).Name,
          Description: data.rows.item(i).Description,
          Amount: currency +  data.rows.item(i).Amount,
         });
      }
    } else {
      items.push({
        Date: '-',
        Category: '-',
        Name: '-',
        Description: '-',
        Amount:'-',
       });
    }
    console.log(items);

    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getExpenseJournal(currency) {

  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT Date,Category,Name,Description,Amount FROM tblexpenses where Active=1 GROUP BY Category ORDER BY ID DESC', []).then((data) => {
    let items:any = [];
    if (data.rows.length > 0) {

      for (let i = 0; i < data.rows.length; i++) {
        const z = new Date(parseInt(data.rows.item(i).Date)*1000).toString();
        const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy h:mm a');
        items.push({
          Date: CreateDate,
          Category: data.rows.item(i).Category,
          Name: data.rows.item(i).Name,
          Description: data.rows.item(i).Description,
          Amount: currency + data.rows.item(i).Amount,
         });
      }
    } else {
      items.push({
        Date: '-',
        Category: '-',
        Name: '-',
        Description: '-',
        Amount:'-',
       });
    }
    console.log(items);

    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getExpenseJournalByCategory(category,currency) {

  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT Date,Category,Name,Description,Amount FROM tblexpenses where Active=1 AND Category=?  GROUP BY Category ORDER BY ID DESC', [category]).then((data) => {
    let items:any = [];
    if (data.rows.length > 0) {

      for (let i = 0; i < data.rows.length; i++) {
        const z = new Date(parseInt(data.rows.item(i).Date)*1000).toString();
        const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy h:mm a');
        items.push({
          Date: CreateDate,
          Category: data.rows.item(i).Category,
          Name: data.rows.item(i).Name,
          Description: data.rows.item(i).Description,
          Amount: currency + data.rows.item(i).Amount,
         });
      }
    } else {
      items.push({
        Date: '-',
        Category: '-',
        Name: '-',
        Description: '-',
        Amount:'-',
       });
    }
    console.log(items);

    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getCustomerAging() {
   const time = new Date();
   let current = new Date();
   const current1 = this.datePipe.transform(current, 'dd MMM yyyy');
   time.setDate(time.getDate() - 15);
   const past15 = this.datePipe.transform(time, 'dd MMM yyyy');
   const a = Math.round((new Date(past15)).getTime() / 1000);
   const b = Math.round((new Date(current1)).getTime() / 1000);
  // alert('current:' + current1 + 'pas30:' + past30);
   // tslint:disable-next-line: max-line-length
   return this.database.executeSql('SELECT clients.Fname,clients.Lname,SUM(CASE WHEN tblledger.IsCredit=0 THEN tblledger.Amount ELSE 0 END) AS Total,SUM(CASE WHEN tblledger.IsCredit=1 THEN tblledger.Amount ELSE 0 END) AS Paid,SUM(CASE WHEN tblledger.IsCredit=0 AND tblledger.Date>=? AND tblledger.Date<?  THEN tblledger.Amount ELSE 0 END) AS Total1,SUM(CASE WHEN tblledger.IsCredit=1 AND tblledger.Date>=? AND tblledger.Date<? THEN tblledger.Amount ELSE 0 END) AS Paid1,SUM(CASE WHEN tblledger.IsCredit=0 AND tblledger.Date<? THEN tblledger.Amount ELSE 0 END) AS Total2,SUM(CASE WHEN tblledger.IsCredit=1 AND tblledger.Date<? THEN tblledger.Amount ELSE 0 END) AS Paid2 FROM clients,tblledger WHERE  clients.Cid=tblledger.CustomerID GROUP BY tblledger.CustomerID', [a, b, a, b, a, a]).then((data1) => {
    let items:any = [];

    if (data1.rows.length > 0) {
      for (let i = 0; i < data1.rows.length; i++) {
        // const a = parseInt(data1.rows.item(i).Total) + parseInt(data1.rows.item(i).Paid)
        // alert('to ' +  a)
        items.push({
          Name: data1.rows.item(i).Fname + ' ' + data1.rows.item(i).Lname,
          Total: data1.rows.item(i).Total,
          Paid: data1.rows.item(i).Paid,
          Due:  data1.rows.item(i).Total - data1.rows.item(i).Paid,
          Due1: data1.rows.item(i).Total1 - data1.rows.item(i).Paid1,
          Due2: data1.rows.item(i).Total2 - data1.rows.item(i).Paid2,

         });
      }
    } else {
      items.push({
        Name: '-',
        Total: '-',
        Paid: '-',
        Due:  '-',
        Due1: '-',
        Due2:'-',

       });
    }
    console.log(items);
    return items;
  });
}
getSalesByYear(y) {
  const first = new Date(y, 0, 1).setHours(0, 0, 0, 0);
  const firstdateofyear = this.datePipe.transform(first, 'dd MMM yyyy h:mm a');
  
  const last = new Date(y, 11, 31).setHours(23, 59, 59, 999);
  const lastdateofyear = this.datePipe.transform(last, 'dd MMM yyyy h:mm a');

  const year =  this.datePipe.transform(last, 'yyyy');
  const a = Math.round((new Date(firstdateofyear)).getTime() / 1000);
  const b = Math.round((new Date(lastdateofyear)).getTime() / 1000);
  //alert('current:' + firstdateofyear + 'pas30:' + lastdateofyear  + 'year' + year);
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT SUM(CASE WHEN IsCredit=0 THEN Amount ELSE 0 END) AS Total,SUM(CASE WHEN IsCredit=1 THEN Amount ELSE 0 END) AS Paid FROM tblledger WHERE Date between ? and ?', [a, b]).then((data1) => {
   let items:any = [];

   if (data1.rows.length > 0) {
     for (let i = 0; i < data1.rows.length; i++) {
      if (data1.rows.item(i).Total === null && data1.rows.item(i).Paid === null) {
        items.push({
          Total: 0,
          Paid: 0,
          Year:  year,
         });
      } else if (data1.rows.item(i).Total === null && data1.rows.item(i).Paid != null) {
        items.push({
          Total: 0,
          Paid: data1.rows.item(i).Paid,
          Year:  year,
         });
      } else if (data1.rows.item(i).Paid === null && data1.rows.item(i).Total != null) {
        items.push({
          Total: data1.rows.item(i).Total,
          Paid: 0,
          Year:  year,
         });
      } else {
        items.push({
          Total: data1.rows.item(i).Total,
          Paid: data1.rows.item(i).Paid,
          Year:  year,
         });
      }
      //  items.push({
      //    Total: data1.rows.item(i).Total,
      //    Paid: data1.rows.item(i).Paid,
      //    Year:  year,
      //   });
     }
   }
   console.log(items);
   return items;
 });
}
OverdueInvoices2Pagination(from1) {
  let total = 0;
  const time = new Date();
  // time.setDate(time.getDate() - 15);
  const current = this.datePipe.transform(time, 'dd MMM yyyy');
  const a = Math.round((new Date(current)).getTime() / 1000);
  // alert('current:' + current + ' = ' + a);
  this.database.executeSql('SELECT * From invoices',[]).then((data1) => {
    // total = data1.rows.length;
     console.log('data from'+ data1.rows.length);
     total = data1.rows.length;

  });
  return this.database.executeSql('Select invoices.Iid,invoices.AccountId,invoices.Cid,invoices.Name,invoices.CreateDate,invoices.Terms,invoices.DueDate,invoices.Subtotal,invoices.Discount,invoices.Total,invoices.Message,invoices.Status,invoices.Sync,clients.Fname,clients.Shop,clients.City,clients.Lname,clients.BillingAddress,clients.Cell from invoices,clients WHERE invoices.DueDate<? AND invoices.Status=1 AND invoices.Cid=clients.Cid ORDER BY invoices.Iid DESC limit ?, 10', [a, from1]).then((data) => {
    let Pos:any = [];
    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
          const z = new Date(parseInt(data.rows.item(i).CreateDate)*1000).toString();
          const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy h:mm a');
          const y = new Date(parseInt(data.rows.item(i).DueDate)*1000).toString();
          const DueDate =  this.datePipe.transform(y, 'dd MMM yyyy');
          Pos.push({
            Total1: total,
            Iid: data.rows.item(i).Iid,
            AccountId: data.rows.item(i).AccountId,
            Cid: data.rows.item(i).Cid,
            Name: data.rows.item(i).Name,
            CreateDate: CreateDate,
            Terms: data.rows.item(i).Terms,
            DueDate: DueDate,
          Subtotal: data.rows.item(i).Subtotal,
          Discount: data.rows.item(i).Discount,
          Total: data.rows.item(i).Total,
          Message: data.rows.item(i).Message,
          Fname: data.rows.item(i).Fname,
          Shop: data.rows.item(i).Shop,
          City: data.rows.item(i).City,
          Lname: data.rows.item(i).Lname,
          BillingAddress: data.rows.item(i).BillingAddress,
          Cell: data.rows.item(i).Cell,
          Status:data.rows.item(i).Status,
          Sync:data.rows.item(i).Sync,


         });
      }
    }
    ;
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
OustandingInvoices2Pagination(from1) {
  let total = 0;
  const time = new Date();
  // time.setDate(time.getDate() - 15);
  const current = this.datePipe.transform(time, 'dd MMM yyyy');
  const a = Math.round((new Date(current)).getTime() / 1000);
  // alert('current:' + current + ' = ' + a);
  this.database.executeSql('SELECT * From invoices',[]).then((data1) => {
    // total = data1.rows.length;
     console.log('data from'+ data1.rows.length);
     total = data1.rows.length;

  });
  return this.database.executeSql('Select invoices.Iid,invoices.AccountId,invoices.Cid,invoices.Name,invoices.CreateDate,invoices.Terms,invoices.DueDate,invoices.Subtotal,invoices.Discount,invoices.Total,invoices.Message,invoices.Status,invoices.Sync,clients.Fname,clients.Shop,clients.City,clients.Lname,clients.BillingAddress,clients.Cell from invoices,clients WHERE invoices.DueDate>=? AND invoices.Status=1  AND invoices.Cid=clients.Cid ORDER BY invoices.Iid DESC limit ?, 10', [a, from1]).then((data) => {
    let Pos:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        const z = new Date(parseInt(data.rows.item(i).CreateDate)*1000).toString();
        const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy h:mm a');
        const y = new Date(parseInt(data.rows.item(i).DueDate)*1000).toString();
        const DueDate =  this.datePipe.transform(y, 'dd MMM yyyy');
        Pos.push({
          Total1: total,
          Iid: data.rows.item(i).Iid,
          AccountId: data.rows.item(i).AccountId,
          Cid: data.rows.item(i).Cid,
          Name: data.rows.item(i).Name,
          CreateDate: CreateDate,
          Terms: data.rows.item(i).Terms,
          DueDate: DueDate,
          Subtotal: data.rows.item(i).Subtotal,
          Discount: data.rows.item(i).Discount,
          Total: data.rows.item(i).Total,
          Message: data.rows.item(i).Message,
          Fname: data.rows.item(i).Fname,
          Shop: data.rows.item(i).Shop,
          City: data.rows.item(i).City,
          Lname: data.rows.item(i).Lname,
          BillingAddress: data.rows.item(i).BillingAddress,
          Cell: data.rows.item(i).Cell,
          Status:data.rows.item(i).Status,
          Sync:data.rows.item(i).Sync,


         });
      }
    }
    ;
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getSalesByMonth(year) {
  let all = [];
  const current = new Date();
  const currentmonth = current.getMonth()+1;
  let first1 = '';
  let last1 = '';
  for (let i=0; i<currentmonth - 1; i++) {
    const firstdayofmonth = new Date(new Date().getFullYear(), i, 1);
    first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy');
    const lastdayofmonth = new Date(new Date().getFullYear(),  i+1, 0);
    last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy');
    const a = Math.round((new Date(first1)).getTime() / 1000);
    const b = Math.round((new Date(last1)).getTime() / 1000);
    console.log('a: ' + a + '\nb :' + b);
    // if (i === currentmonth) {

    // } else {
      
    // }
    
    console.log('a: ' + a + '\nb :' + b);
   // alert('a: ' + a + '\nb :' + b);
    let items1:any = [];
   // tslint:disable-next-line: max-line-length
    this.database.executeSql('SELECT SUM(CASE WHEN IsCredit=0 THEN Amount ELSE 0 END) AS Total,SUM(CASE WHEN IsCredit=1 THEN Amount ELSE 0 END) AS Paid FROM tblledger WHERE Date  between ? and ?', [a , b]).then((data1) => {
      let items:any = [];
  
      if (data1.rows.length > 0) {
        for (let i = 0; i < data1.rows.length; i++) {
          if (data1.rows.item(i).Total === null && data1.rows.item(i).Paid === null) {
            all.push({
              Total: 0,
              Paid: 0,
             });
          } else if (data1.rows.item(i).Total === null && data1.rows.item(i).Paid != null) {
            all.push({
              Total: 0,
              Paid: data1.rows.item(i).Paid,
             });
          } else if (data1.rows.item(i).Paid === null && data1.rows.item(i).Total != null) {
            all.push({
              Total: data1.rows.item(i).Total,
              Paid: 0,
             });
          } else {
            all.push({
              Total: data1.rows.item(i).Total,
              Paid: data1.rows.item(i).Paid,
             });
          }
        }
      }
      console.log(items);
     // alert('befor:' + items.length)
      return items;
    });

   }
  const firstdayofmonth = new Date(new Date().getFullYear(), currentmonth, 1);
  first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy');
  const lastdayofmonth = new Date(new Date().getFullYear(),  currentmonth + 1, 0);
  last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy');
  const a = Math.round((new Date(first1)).getTime() / 1000);
  const b = Math.round((new Date(last1)).getTime() / 1000);
  console.log('a: ' + a + '\nb :' + b);
 // alert('a: ' + a + '\nb :' + b);
  let items1:any = [];
 // tslint:disable-next-line: max-line-length
  return this.database.executeSql('SELECT SUM(CASE WHEN IsCredit=0 THEN Amount ELSE 0 END) AS Total,SUM(CASE WHEN IsCredit=1 THEN Amount ELSE 0 END) AS Paid FROM tblledger WHERE Date  between ? and ?', [a , b]).then((data1) => {
    let items:any = [];

    if (data1.rows.length > 0) {
      for (let i = 0; i < data1.rows.length; i++) {
        if (data1.rows.item(i).Total === null && data1.rows.item(i).Paid === null) {
          all.push({
            Total: 0,
            Paid: 0,
           });
        } else if (data1.rows.item(i).Total === null && data1.rows.item(i).Paid != null) {
          all.push({
            Total: 0,
            Paid: data1.rows.item(i).Paid,
           });
        } else if (data1.rows.item(i).Paid === null && data1.rows.item(i).Total != null) {
          all.push({
            Total: data1.rows.item(i).Total,
            Paid: 0,
           });
        } else {
          all.push({
            Total: data1.rows.item(i).Total,
            Paid: data1.rows.item(i).Paid,
           });
        }
      }
    }
    console.log(all);
    return all;
  });
}
getsales(start,end,currency) {
  // alert('stat : ' + start + 'end: ' + end)
  const a = Math.round((new Date(start)).getTime() / 1000);
  const b = Math.round((new Date(end)).getTime() / 1000);
  return this.database.executeSql('SELECT Date,SUM(CASE WHEN IsCredit=0 THEN Amount ELSE 0 END) AS Total,SUM(CASE WHEN IsCredit=1 THEN Amount ELSE 0 END) AS Paid FROM tblledger WHERE Date  between ? and ? ', [a, b]).then((data1) => {
    let items:any = [];

    if (data1.rows.length > 0) {
      for (let i = 0; i < data1.rows.length; i++) {
        if (data1.rows.item(i).Total === null && data1.rows.item(i).Paid === null) {
          items.push({
            Date: '-',
            Total: '-',
            Paid: '-',
           });
        } else if (data1.rows.item(i).Total === null && data1.rows.item(i).Paid != null) {
          const z = new Date(parseInt(data1.rows.item(i).Date)*1000).toString();
          const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy');
          items.push({
            Date: CreateDate,
            Total: currency + 0,
            Paid: currency + data1.rows.item(i).Paid,
           });
        } else if (data1.rows.item(i).Paid === null && data1.rows.item(i).Total != null) {
          const z = new Date(parseInt(data1.rows.item(i).Date)*1000).toString();
          const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy');
          items.push({
            Date: CreateDate,
            Total: currency + data1.rows.item(i).Total,
            Paid: currency + 0,
           });
        } else {
          const z = new Date(parseInt(data1.rows.item(i).Date)*1000).toString();
          const CreateDate =  this.datePipe.transform(z, 'dd MMM yyyy');

          items.push({
            Date: CreateDate,
            Total: currency + data1.rows.item(i).Total,
            Paid: currency + data1.rows.item(i).Paid,
           });
        }
      }
    } else {
      items.push({
        Date: '-',
        Total:'-',
        Paid: '-',
       });
    }
    console.log('thisone: ' + items[0].Paid);
    return items;
  });
}
getDashbardFiguers() {
  const time = new Date();
  const current = this.datePipe.transform(time, 'dd MMM yyyy');
  const a = Math.round((new Date(current)).getTime() / 1000);
  // alert('current:' + current + ' = ' + a);
  
  return this.database.executeSql('Select SUM(CASE WHEN invoices.DueDate>=? THEN invoices.Total ELSE 0 END) AS Outstanding,SUM(CASE WHEN invoices.DueDate<? THEN invoices.Total ELSE 0 END) AS Overdue from invoices WHERE invoices.Status=1 ', [a, a]).then((data) => {
    let Pos:any = [];
    if (data.rows.length > 0) {
      // alert('id'+ data.rows.item(0).Outstanding + '\no' + data.rows.item(0).Overdue );
      if (data.rows.item(0).Outstanding !== null && data.rows.item(0).Overdue !==null) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            Outstanding: data.rows.item(i).Outstanding,
            Overdue: data.rows.item(i).Overdue,
           });
        }
      }  else {
        Pos.push({
          Outstanding: 0,
          Overdue: 0,
         });
      }
    }
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
invoiceMarkAsPaid(InvoiceID) {
  // tslint:disable-next-line: max-line-length
  return this.database.executeSql('Update invoices SET Status=3,Sync=2 WHERE Iid=?', [InvoiceID])
  .then(data => {
    return 1;
  }, err => {
    console.log('Error: ', err);
    return err;
  });
}
getDashbardFiguers1() {
  const time = new Date();
  const Month=time.setDate(time.getDate()-30)
  const current = this.datePipe.transform(Month, 'dd MMM yyyy');
  const a = Math.round((new Date(current)).getTime() / 1000);
  // alert('current:' + current + ' = ' + a);
console.log(a);
  return this.database.executeSql('Select SUM(CASE WHEN invoices.CreateDate>=? THEN invoices.Total ELSE 0 END) AS Outstanding,SUM(CASE WHEN invoices.DueDate<? THEN invoices.Total ELSE 0 END) AS Overdue from invoices ', [a,a]).then((data) => {
    let Pos:any = [];
    if (data.rows.length > 0) {
      alert('id'+ data.rows.item(0).Outstanding + '\no' + data.rows.item(0).Overdue );
      if (data.rows.item(0).Outstanding !== null && data.rows.item(0).Overdue !==null) {
        for (let i = 0; i < data.rows.length; i++) {
          Pos.push({
            Outstanding: data.rows.item(i).Outstanding,
            Overdue: 0,
           });
        }
      }  else {
        Pos.push({
          Outstanding: 0,
          Overdue: 0,
         });
      }
    }
    console.log(Pos);
    return Pos;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
checKEmail(email) {
  return this.database.executeSql('SELECT * from tblUsers where email=? AND bActive=1', [email]).then((data) => {
    let items:any = [];
    
    if (data.rows.length > 0) {
      // alert('yes')
      items.push({
        success: 1,
        ID: data.rows.item(0).ID,
       });
      } else {
        // alert('no')
        items.push({
          success: 0,
          ID: 0,
         });
      }
    console.log('le' + data.rows.length);
    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getUsersFromServer() {
  const url = this.databaseprovider.getURL();
  this.nativeHttp.setDataSerializer("json");
  let nativeCall = this.nativeHttp.post(url , 
    {
      'Name': 'getAllusers',
      // "AccountId": '113008225657937776461'
    } , 
    {
      'Content-Type': 'application/json',
      'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
    });

  from(nativeCall).pipe(
    finalize(() =>{} )
  )
  .subscribe(data => {
    
    console.log('Native data:',data);
    const g = JSON.parse(data.data);
    // alert('respnse = ' + g);
    if(g.success === 1) {
      // alert('success')
      if(typeof g.users !== 'undefined')  {
        console.log('vendors');
        for(let i=0;i<1;i++) {
          // tslint:disable-next-line: max-line-length
          const data = [ g.users[i].ID ,g.users[i].email, g.users[i].name, g.users[i].Active, 1 ];
          this.database.executeSql('SELECT * FROM tblvendors', [])
          .then(data => {
            console.log('add po');
          }).then(() => {
            if( typeof g.users !== 'undefined') {
              console.log('POS modified');
              for(let i=0;i<g.users.length;i++) {
                const data = [ g.users[i].ID ,g.users[i].email, g.users[i].name, g.users[i].Active, 1 ];
                console.log(data);
                this.database.executeSql('INSERT INTO  tblUsers (ID,email,name,bActive,Sync) VALUES (?,?,?,?,?)', data)
                .then(data => {
                  console.log('add po modified');
                });
              }
            }
           }).then(() => {
            if( typeof g.acl !== 'undefined') {
              console.log('POS');
              
              for(let i=0;i<g.acl.length;i++) {
                
                // tslint:disable-next-line: max-line-length
                const data = [ g.acl[i].ID ,g.acl[i].name, g.acl[i].userId, g.acl[i].bValue, 1 ];
                console.log('here7-' + data);
                this.database.executeSql('INSERT INTO  tblacl (ID,name,userId,bValue,Sync) VALUES (?,?,?,?,?)', data)
                .then(data => {
                  console.log('add po');
                });
              }
            }
           })
        }
        return g.users;
      }
      return 1;
    } else {
      alert('fail')
      return 0;
    }
    return 1;

  });
  return 1;
 }
 updateChecks(IDS, Sync, Values) {
  // alert('name = ' + IDS[1] + 'iscj = ' + Values[1])
  // for (let i=0; i<IDS.length;i++) {
  // }
  // alert('ID = ' + IDS + 'Sync = ' + Sync + 'Value = ' + Values)
  return this.database.executeSql('UPDATE tblacl Set bValue=?,Sync=? where ID=?', [Values, Sync, IDS]).then((data) => {
      console.log(data);
      return data;
    }, err => {
      console.log('Error: ', err);
      return [];
    });

}
syncUpdatedAcl() {
  return this.database.executeSql('SELECT * FROM tblacl where Sync=2', []).then((data) => {
    let items:any = [];
    
    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        items.push({
          ID: data.rows.item(i).ID,
          name: data.rows.item(i).name,
          bValue: data.rows.item(i).bValue,
         });
        }
      }
    // alert('active' + items.length)
    console.log(items);
    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
updateSyncedAcl(IDs) {
  for (let i=0; i< IDs.length; i++) {
    return this.database.executeSql('UPDATE tblacl Set Sync=1 where ID=?', [IDs[i]]).then((data) => {
      console.log(data);
      return data;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
 
}
syncAddedacl() {
  return this.database.executeSql('SELECT * FROM tblacl where Sync=0', []).then((data) => {
    let items:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        items.push({
          ID: data.rows.item(i).ID,
          name: data.rows.item(i).name,
          userId: data.rows.item(i).userId,
          bValue: data.rows.item(i).bValue,
          Sync: data.rows.item(i).Sync,
         });
      }
    }
    console.log(items);
    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
updateSyncedacl(IDs) {
  for (let i=0; i< IDs.length; i++) {
    return this.database.executeSql('UPDATE  tblacl Set Sync=1 where ID=?', [IDs[i]]).then((data) => {
      console.log(data);
      return data;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
}
 getAllPagesOfUser(id) {
  return this.database.executeSql('SELECT * FROM tblacl where userId=?', [id]).then((data) => {
    let items:any = [];

    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        items.push({
          ID: data.rows.item(i).ID,
          name: data.rows.item(i).name,
          userId: data.rows.item(i).userId,
          bValue: data.rows.item(i).bValue,
          Sync: data.rows.item(i).Sync,

         });
      }
    }
    ;
    // alert('acl = ' + items.length)
    console.log(items);
    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}
getMenuPages(id,userEmail) {
  
  let invioces = 0;
  let pos = 0;
  let reports = 0;
  let clients = 0;
  let users = 0;
  let logs = 0;
  let vendors = 0;
  let items1 = 0;
  let expense = 0;

  // if (userEmail === 'adnan@rizwanali.pk') {
  //   users = 1;
  // } 
  if (userEmail.indexOf('@rizwanali.pk') >= 0) {
    users = 1;
    this.databaseprovider.setClients(users);
  } 



  return this.database.executeSql('SELECT * FROM tblacl where userId=?', [id]).then((data) => {
    let items:any = [];
    
    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        items.push({
          ID: data.rows.item(i).ID,
          name: data.rows.item(i).name,
          bValue: data.rows.item(i).bValue,

         });
        if ( data.rows.item(i).name === 'Client Display') {
           clients = data.rows.item(i).bValue;
          // this.databaseprovider.setClients(data.rows.item(i).bValue);
         }
        if ( data.rows.item(i).name === 'Invoice Display') {
          invioces = data.rows.item(i).bValue;
        }
        if ( data.rows.item(i).name === 'PO Display') {
          pos = data.rows.item(i).bValue;
        }
        if ( data.rows.item(i).name === 'Item Display') {
          items1 = data.rows.item(i).bValue;
        //  this.databaseprovider.setItems(data.rows.item(i).bValue);
        }
        if ( data.rows.item(i).name === 'Vendor Display') {
          vendors = data.rows.item(i).bValue;
        }
        if ( data.rows.item(i).name === 'Log Display') {
          logs = data.rows.item(i).bValue;
          this.databaseprovider.setItems(data.rows.item(i).bValue);
        }
        if ( data.rows.item(i).name === 'Report Display') {
          reports = data.rows.item(i).bValue;
        }
        if ( data.rows.item(i).name === 'Expense Display') {
          expense = data.rows.item(i).bValue;
        }
      }
    }

    let pages = [
      {
        title: 'Dashboard',
        url: '/menu/dashboard',
        icon: 'clock',
        bValue: 1
      },
      {
        title: 'Clients',
        url: '/menu/clients',
        icon: 'person-add',
        bValue: clients
      },
      {
        title: 'Invoice',
        url: '/menu/invoice',
        icon: 'paper',
        bValue: invioces,
        childern: [
          {
            title: 'Trash',
            url: '/menu/trash-invoices',
            icon: 'trash'
          },
        ]
      },
  
      {
        title: 'Purchased Orders',
        url: '/menu/purchased-orders',
        icon: 'cart',
        bValue: pos,
        childern: [
          {
            title: 'Trash',
            url: '/menu/trash-purchased-orders',
            icon: 'trash'
          },
        ]
      },
      {
        title: 'Vendors',
        url: '/menu/vendors',
        icon: 'person',
        bValue: vendors,
      },
      {
        title: 'Items',
        url: '/menu/items',
        icon: 'logo-dropbox',
        bValue: items1,
      },
      // {
      //   title: 'Users',
      //   url: '/menu/users',
      //   icon: 'person',
      //   bValue: users,
      // },
      // {
      //   title: 'Credit Memos',
      //   url: '/menu/creditmemos',
      //   icon: 'copy',
      //   childern: [
      //     {
      //       title: 'Trash',
      //       url: '/menu/trash-credit-memos',
      //       icon: 'trash'
      //     },
      //   ]
      // },
      {
        title: 'Expenses',
        url: '/menu/expenses',
        icon: 'book',
        bValue: expense,
      },
       {
        title: 'Reports',
        url: '/menu/reports',
        icon: 'copy',
        bValue: reports,
      },
      // {
      //   title: 'Reports',
      //   url: '/menu/reports',
      //   icon: 'browsers',
      // },
       {
         title: 'Logout',
        // url: '/menu/settings',
         icon: 'log-out'
       }
    ];

    // let pages = [
    //   {
    //     title: 'Dashboard',
    //     url: '/menu/dashboard',
    //     icon: 'clock',
    //     bValue: 1
    //   },
     
    //   {
    //     title: 'Vendors',
    //     url: '/menu/vendors',
    //     icon: 'person-add',
    //     bValue: vendors
    //   },
    //   {
    //     title: 'IRFarms Clients',
    //     url: '/menu/clients',
    //     icon: 'person',
    //     bValue: clients
    //   },
    //   {
    //     title: 'Orders',
    //     url: '/menu/invoice',
    //     icon: 'paper',
    //     childern: [
    //       {
    //         title: 'Trash',
    //         url: '/menu/trash-invoices',
    //         icon: 'trash'
    //       },
    //     ],
    //     bValue: orders
    //   },
    //   // {
    //   //   title: 'Users',
    //   //   url: '/menu/users',
    //   //   icon: 'person',
    //   //   bValue: users
    //   // },
      
    //   {
    //     title: 'System Logs',
    //     url: '/menu/logs',
    //     icon: 'albums',
    //     bValue: logs
    //   },
    //   {
    //     title: 'Expenses/Salaries',
    //     url: '/menu/expenses',
    //     icon: 'book',
    //     bValue: expense
    //   },
    //   {
    //     title: 'Reports',
    //     url: '/menu/reports',
    //     icon: 'copy',
    //     bValue: 1
    //   },
     
    // ];
    
    // alert('active' + items.length)
    console.log(items);
    return pages;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
 }
 getbValue(id, name) {
  return this.database.executeSql('SELECT bValue FROM tblacl where userId=? AND name=?', [id,name]).then((data) => {
    let items:any = [];
    
    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        items.push({
          bValue: data.rows.item(i).bValue,
         });
        }
      }
    // alert('active' + items.length)
    console.log(items);
    return items;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
  
 }
 syncLocalToServer() {
  console.log('local to server');
  this.syncAddedItems().then((data) => {
    if (data.length > 0) {
      const IDs = [];
      for (let i = 0; i < data.length; i++) {
         IDs[i] = data[i].itemid;
      }
      const url = this.databaseprovider.getURL();
     this.nativeHttp.setDataSerializer("json");
       
      let nativeCall = this.nativeHttp.post(url , 
        {
          'Name': 'syncAddedItems',
          "Items": data
        } , 
        {
          'Content-Type': 'application/json',
          'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
        });
      from(nativeCall).pipe(
        finalize(() =>{} )
      )
      .subscribe(data => {
        console.log('Native data:',data);
        const g = JSON.parse(data.data);
        if(g.success === 1) {
          this.updateSyncedItems(IDs).then((data) => {
          });
        } else {
        }
      },err =>{
        console.log('JS call error-4',err);
        const error = JSON.parse(err.error);
        console.log('Native data:',JSON.parse(error));
      });
    }

  });
  this.syncUpdatedItems().then((data) => {
    if (data.length > 0) {
      const IDs = [];
      for (let i = 0; i < data.length; i++) {
         IDs[i] = data[i].itemid;
      }
      const url = this.databaseprovider.getURL();

     this.nativeHttp.setDataSerializer("json");
     
      let nativeCall = this.nativeHttp.post(url , 
        {
          'Name': 'syncUpdatedItems',
          "Items": data
        } , 
        {
          'Content-Type': 'application/json',
          'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
        });
      from(nativeCall).pipe(
        finalize(() =>{} )
      )
      .subscribe(data => {
        console.log('Native data:',data);
        const g = JSON.parse(data.data);
        if(g.success === 1) {
           //alert('success Updated');
          this.updateSyncedItems(IDs).then((data) => {
          });
        } else {
        }

      },err =>{
        console.log('JS call error-5',err);
        const error = JSON.parse(err.error);
        console.log('Native data:',JSON.parse(error));
      });

    }

  });
  this.syncAddedClients().then((data) => {
    if(data.length > 0) {
      const IDs = [];
      for (let i = 0; i < data.length; i++) {
         IDs[i] = data[i].Cid;
      }
      const url = this.databaseprovider.getURL();

     this.nativeHttp.setDataSerializer("json");
    
      let nativeCall = this.nativeHttp.post(url , 
        {
          'Name': 'syncAddedClients',
          "Clients": data
        } , 
        {
          'Content-Type': 'application/json',
          'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
        });
      from(nativeCall).pipe(
        finalize(() =>{} )
      )
      .subscribe(data => {
        console.log('Native data:',data);
        const g = JSON.parse(data.data);
        if(g.success === 1) {
          this.updateSyncedClients(IDs).then((data) => {
          });
        } else {
        }

      },err =>{
        console.log('JS call error-6',err);
        const error = JSON.parse(err.error);
        console.log('Native data:',JSON.parse(error));
      });

    }
  });
  this.syncUpdatedClients().then((data) => {
    if(data.length > 0) {
      const IDs = [];
      for (let i = 0; i < data.length; i++) {
         IDs[i] = data[i].Cid;
      }
      const url = this.databaseprovider.getURL();

     this.nativeHttp.setDataSerializer("json");
     
      let nativeCall = this.nativeHttp.post(url , 
        {
          'Name': 'syncUpdatedClients',
          "Clients": data
        } , 
        {
          'Content-Type': 'application/json',
          'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
        });

      from(nativeCall).pipe(
        finalize(() =>{} )
      )
      .subscribe(data => {
        console.log('Native data:',data);
        const g = JSON.parse(data.data);
        if(g.success === 1) {
          this.updateSyncedClients(IDs).then((data) => {
          });
        } else {
        }
                    },err =>{
        console.log('JS call error-7',err);
        const error = JSON.parse(err.error);
        console.log('Native data:',JSON.parse(error));
      });

    }
  });
  this.syncAddedVendors().then((data) => {
    if (data.length > 0) {
      const IDs = [];
      for (let i = 0; i < data.length; i++) {
         IDs[i] = data[i].ID;
      }
      const url = this.databaseprovider.getURL();

     this.nativeHttp.setDataSerializer("json");
     
       
      let nativeCall = this.nativeHttp.post(url , 
        {
          'Name': 'syncAddedVendors',
          "Vendors": data
        } , 
        {
          'Content-Type': 'application/json',
          'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
        });

      from(nativeCall).pipe(
        finalize(() =>{} )
      )
      .subscribe(data => {
        console.log('Native data:',data);
        const g = JSON.parse(data.data);
        if(g.success === 1) {
          this.updateSyncedVendors(IDs).then((data) => {
          });
        } else {
        }

      },err =>{
        console.log('JS call error-8',err);
        const error = JSON.parse(err.error);
        console.log('Native data:',JSON.parse(error));
      });

    }
  });
  this.syncUpdatedVendors().then((data) => {
    if (data.length > 0) {
      const IDs = [];
      for (let i = 0; i < data.length; i++) {
         IDs[i] = data[i].ID;
      }
      const url = this.databaseprovider.getURL();

     this.nativeHttp.setDataSerializer("json");
     
      let nativeCall = this.nativeHttp.post(url , 
        {
          'Name': 'syncUpdatedVendors',
          "Vendors": data
        } , 
        {
          'Content-Type': 'application/json',
          'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
        });
   
      from(nativeCall).pipe(
        finalize(() => {} )
      )
      .subscribe(data => {
        console.log('Native data:',data);
        const g = JSON.parse(data.data);
        if(g.success === 1) {
          this.updateSyncedVendors(IDs).then((data) => {
          });
        } else {
        }

      },err =>{
        console.log('JS call error-9',err);
        const error = JSON.parse(err.error);
        console.log('Native data:',JSON.parse(error));
      });

      
    }
   
  });
  this.syncAddedPOS().then((data) => {
    if (data.length > 0) {
      const IDs = [];
      for (let i = 0; i < data.length; i++) {
         IDs[i] = data[i].ID;
      }
      const url = this.databaseprovider.getURL();
    
      ;
     this.nativeHttp.setDataSerializer("json");
     
      let nativeCall = this.nativeHttp.post(url , 
        {
          'Name': 'syncAddedPOs',
          "POS": data
        } , 
        {
          'Content-Type': 'application/json',
          'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
        });
      from(nativeCall).pipe(
        finalize(() =>{} )
      )
      .subscribe(data => {
        console.log('Native data:',data);
        const g = JSON.parse(data.data);
        if(g.success === 1) {
          this.updateSyncedPOS(IDs).then((data) => {
          });
          this.syncAddedPOsItems().then((data) => {
            if (data.length > 0) {
              const IDs = [];
              for (let i = 0; i < data.length; i++) {
                 IDs[i] = data[i].ID;
              }
              const url = this.databaseprovider.getURL();

             this.nativeHttp.setDataSerializer("json");
            
              let nativeCall = this.nativeHttp.post(url , 
                {
                  'Name': 'syncAddedPOsItems',
                  "POSItems": data
                } , 
                {
                  'Content-Type': 'application/json',
                  'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
              from(nativeCall).pipe(
                finalize(() =>{} )
              )
              .subscribe(data => {
                console.log('Native data:',data);
                const g = JSON.parse(data.data);
                if(g.success === 1) {
                  this.updateSyncedPOSItems(IDs).then((data) => {
                  });
                  this.syncAddedLedgerVendor().then((data) => {
                    if (data.length > 0) {
                      const IDs = [];
                      for (let i = 0; i < data.length; i++) {
                         IDs[i] = data[i].ID;
                      }
                      const url = this.databaseprovider.getURL();
                    
                      ;
                     this.nativeHttp.setDataSerializer("json");
                    
                      let nativeCall = this.nativeHttp.post(url , 
                        {
                          'Name': 'syncAddedLedgerVendor',
                          "Payments": data
                        } , 
                        {
                          'Content-Type': 'application/json',
                          'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                      from(nativeCall).pipe(
                        finalize(() =>{} )
                      )
                      .subscribe(data => {
                        console.log('Native data:',data);
                        const g = JSON.parse(data.data);
                        if(g.success === 1) {
                          this.updateSyncedAddedLedgerVendors(IDs).then((data) => {
                          });
                        } else {
                        }
          
                      },err =>{
                        console.log('JS call error-10',err);
                        const error = JSON.parse(err.error);
                        console.log('Native data:',JSON.parse(error));
                      });
          
                      
                    }
                   
                  });
                } else {
                }
  
              },err =>{
                console.log('JS call error-11',err);
                const error = JSON.parse(err.error);
                console.log('Native data:',JSON.parse(error));
              });
  
              
            }
           
          });
        } else {
        }

      },err =>{
        console.log('JS call error-12',err);
        const error = JSON.parse(err.error);
        console.log('Native data:',JSON.parse(error));
      });

      
    }
   
   
  }).then((a) => {
    this.syncAddedInvoices().then((data) => {
      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].Iid;
        }
        const url = this.databaseprovider.getURL();
      
        ;
       this.nativeHttp.setDataSerializer("json");
       
        let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncAddedInvoices',
            "Invoices": data
          } , 
          {
            'Content-Type': 'application/json',
            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
          });
        from(nativeCall).pipe(
          finalize(() =>{} )
        )
        .subscribe(data => {
          console.log('Native data:',data);
          const g = JSON.parse(data.data);
          if(g.success === 1) {
            this.updateSyncedInvoices(IDs).then((data) => {
            });
            this.syncAddedInvoicesItems().then((data) => {
              if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                   IDs[i] = data[i].Iiid;
                }
                const url = this.databaseprovider.getURL();
              
                ;
               this.nativeHttp.setDataSerializer("json");
               
                let nativeCall = this.nativeHttp.post(url , 
                  {
                    'Name': 'syncAddedInvoicesItems',
                    "InvoiceItems": data
                  } , 
                  {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                  });
             
                from(nativeCall).pipe(
                  finalize(() =>{} )
                )
                .subscribe(data => {
                  console.log('Native data:',data);
                  const g = JSON.parse(data.data);
                  if(g.success === 1) {
                    this.updateSyncedInvoicesItems(IDs).then((data) => {
                    });
                    
                    this.syncAddedLedger().then((data) => {
                      if (data.length > 0) {
                        const IDs = [];
                        for (let i = 0; i < data.length; i++) {
                           IDs[i] = data[i].ID;
                        }
                        const url = this.databaseprovider.getURL();
                      
                        ;
                       this.nativeHttp.setDataSerializer("json");
                       
                        let nativeCall = this.nativeHttp.post(url , 
                          {
                            'Name': 'syncAddedLedger',
                            "Payments": data
                          } , 
                          {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                          });
                     
                     
                        from(nativeCall).pipe(
                          finalize(() =>{} )
                        )
                        .subscribe(data => {
                          console.log('Native data:',data);
                          const g = JSON.parse(data.data);
                          if(g.success === 1) {
                            this.updateSyncedAddedLedger(IDs).then((data) => {
                            });
                          } else {
                          }
            
                        },err =>{
                          console.log('JS call error-13',err);
                          const error = JSON.parse(err.error);
                          console.log('Native data:',JSON.parse(error));
                        });
            
                        
                      }
                     
                    });
                  } else {
                  }
    
                },err =>{
                  console.log('JS call error-14',err);
                  const error = JSON.parse(err.error);
                  console.log('Native data:',JSON.parse(error));
                });
    
                
              }
             
            });
          } else {
          }

        },err =>{
          console.log('JS call error-15',err);
          const error = JSON.parse(err.error);
          console.log('Native data:',JSON.parse(error));
        });

        
      }
     
    });
  });
  this.syncAddedLog().then((data8) => {
  }).then((data11) => {
    this.syncAddedUsers().then((data) => {
      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].itemid;
        }
        const url = this.databaseprovider.getURL();
    
        ;
       this.nativeHttp.setDataSerializer("json");
      
        let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncAddedUsers',
            "Items": data
          } , 
          {
            'Content-Type': 'application/json',
            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
          });
     
        from(nativeCall).pipe(
          finalize(() =>{} )
        )
        .subscribe(data => {
          console.log('Native data:',data);
          const g = JSON.parse(data.data);
          if(g.success === 1) {
            // alert('success');
            this.updateSyncedUsers(IDs).then((data) => {
            });
            this.syncAddedacl().then((data) => {
              if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                   IDs[i] = data[i].ID;
                }
                const url = this.databaseprovider.getURL();
            
                ;
               this.nativeHttp.setDataSerializer("json");
              
                let nativeCall = this.nativeHttp.post(url , 
                  {
                    'Name': 'syncAddedacl',
                    "Items": data
                  } , 
                  {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                  });
             
                from(nativeCall).pipe(
                  finalize(() =>{} )
                )
                .subscribe(data => {
                  console.log('Native data:',data);
                  const g = JSON.parse(data.data);
                  if ( g.success === 1) {
                    // alert('success');
                    this.updateSyncedacl(IDs).then((data) => {
                    });
                    
                  } else {
                    // alert('failed');
                  }
        
                 // this.initializeItems();
                },err =>{
                  console.log('JS call error-16',err);
                  const error = JSON.parse(err.error);
                  // alert(error.message);
                  console.log('Native data:',JSON.parse(error));
                });
        
              }
              
              
            });
          } else {
            // alert('failed');
          }

         // this.initializeItems();
        },err =>{
          console.log('JS call error-17',err);
          const error = JSON.parse(err.error);
          // alert(error.message);
          console.log('Native data:',JSON.parse(error));
        });

      }
      
      
    });
  }).then(() => {
    this.syncUpdatedAcl().then((data) => {
      if(data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].ID;
        }
        const url = this.databaseprovider.getURL();
        if (data.length > 0) {
          ;
          this.nativeHttp.setDataSerializer("json");
        
          let nativeCall = this.nativeHttp.post(url , 
             {
               'Name': 'syncUpdatedAcl',
               "Items": data
             } , 
             {
               'Content-Type': 'application/json',
               'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
             });
        
          from(nativeCall).pipe(
             finalize(() =>{} )
           )
           .subscribe(data => {
             console.log('Native data:',data);
             const g = JSON.parse(data.data);
             if(g.success === 1) {
              //  alert('success');
               this.updateSyncedAcl(IDs).then((data) => {
               });
             } else {
               // alert('failed');
             }
   
            // this.initializeItems();
           },err =>{
             console.log('JS call error-18',err);
             const error = JSON.parse(err.error);
             //alert(error.message);
             console.log('Native data:',JSON.parse(error));
           });
   
        }
      
      }
    
    });
  }).then(() => {
    this.syncUpdatedUsers().then((data) => {
      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].itemid;
        }
        const url = this.databaseprovider.getURL();
    
        ;
       this.nativeHttp.setDataSerializer("json");
       
        let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncUpdatedUsers',
            "Items": data
          } , 
          {
            'Content-Type': 'application/json',
            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
          });
     
        from(nativeCall).pipe(
          finalize(() =>{} )
        )
        .subscribe(data => {
          console.log('Native data:',data);
          const g = JSON.parse(data.data);
          if(g.success === 1) {
             //alert('success Updated');
            this.updateSyncedUsers(IDs).then((data) => {
            });
          } else {
           //  alert('failed');
          }

         // this.initializeItems();
        },err =>{
          console.log('JS call error-19',err);
          const error = JSON.parse(err.error);
         // alert(error.message);
          console.log('Native data:',JSON.parse(error));
        });

      }
      
      
    });
  }).then((data9) => {
    this.syncUpdatedExpenses().then((data) => {
      
      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].ID;
        }
        const url = this.databaseprovider.getURL();
    
        
       this.nativeHttp.setDataSerializer("json");
       
        let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncDeletedExpenses',
            "Expenses": data
          } , 
          {
            'Content-Type': 'application/json',
            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
          });
     
        from(nativeCall).pipe(
          finalize(() =>{} )
        )
        .subscribe(data => {
          
          console.log('Native data:',data);
          const g = JSON.parse(data.data);
          
          if (g.success === 1) {
            this.updateSyncedExpenses(IDs);
          } else {
          }
  
        },err =>{
          console.log('JS call error-20',err);
          const error = JSON.parse(err.error);
          console.log('Native data:',JSON.parse(error));
        });
  
      }
      
      
    });
  }).then(() => {
    this.syncAddedExpenses().then((data) => {

      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].ID;
        }
        const url = this.databaseprovider.getURL();
    
        
       this.nativeHttp.setDataSerializer("json");
      
        let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncAddedExpenses',
            "Expenses": data
          } , 
          {
            'Content-Type': 'application/json',
            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
          });
     
        from(nativeCall).pipe(
          finalize(() =>{} )
        )
        .subscribe(data => {
          
          console.log('Native data:',data);
          const g = JSON.parse(data.data);
          
          if (g.success === 1) {
            this.updateSyncedExpenses(IDs);
          } else {
          }
  
        },err =>{
          console.log('JS call error-21',err);
          const error = JSON.parse(err.error);
          // alert(error.message);
          console.log('Native data:',JSON.parse(error));
        });
  
      }
      
      
    });
  });
 }
 getAllCategories() {
  return this.database.executeSql('SELECT * FROM categories where active=1 ORDER BY catid DESC', []).then((data) => {
    let logs:any = [];
    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        logs.push({
          catid: data.rows.item(i).catid,
          name: data.rows.item(i).name,
          active: data.rows.item(i).active,

         });
      }
    }
    console.log(logs);
    return logs;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
 }
 getAllSlides() {
  return this.database.executeSql('SELECT * FROM tblslides where bActive=1 ORDER BY slideNo ASC', []).then((data) => {
    let logs:any = [];
    if (data.rows.length > 0) {
      for (let i = 0; i < data.rows.length; i++) {
        logs.push({
          Id: data.rows.item(i).Id,
          slideNo: data.rows.item(i).slideNo,
          slideHeading: data.rows.item(i).slideHeading,
          slideText: data.rows.item(i).slideText,
          slideImage: data.rows.item(i).slideImage,
          bActive: data.rows.item(i).bActive,

         });
        //  alert('image = ' + data.rows.item(i).slideImage);

      }
    }
    console.log(logs);
    return logs;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
 }
 syncSlides() {
  const url = this.databaseprovider.getURL();
  this.nativeHttp.setDataSerializer("json");
  // alert('a')
  let nativeCall = this.nativeHttp.post(url , 
    {
      'Name': 'getAllSlides',
      // "AccountId": '113008225657937776461'
    } , 
    {
      'Content-Type': 'application/json',
      'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
    });

  from(nativeCall).pipe(
    finalize(() =>{} )
  )
  .subscribe(data => {
    
    console.log('Native data:',data);
    const g = JSON.parse(data.data);
    if(g.success === 1) {
      if(g.success === 1)  {
        console.log('vendors');
        for(let i=0;i<1;i++) {
          // tslint:disable-next-line: max-line-length
          this.database.executeSql('SELECT * FROM tblvendors', [])
          .then(data => {
            console.log('add po');
          }).then(() => {
           if( typeof g.slides !== 'undefined') {
             console.log('POS');
             for(let i=0;i<g.slides.length;i++) {
               // tslint:disable-next-line: max-line-length
               const data = [ g.slides[i].Id ,g.slides[i].slideNo, g.slides[i].slideHeading,  g.slides[i].slideText ,g.slides[i].slideImage, g.slides[i].bActive ];
               this.database.executeSql('INSERT INTO tblslides (Id,slideNo,slideHeading,slideText,slideImage,bActive) VALUES (?,?,?,?,?,?)', data)
               .then(data => {
                 console.log('add po');
               });
             }
           }
           }).then(() => {
            this.router.navigate(['slides']);
           })
        }
        return g.users;
      }
      return 1;
    } else {
      alert('fail')
      return 0;
    }
    return 1;

  });
 }
}
