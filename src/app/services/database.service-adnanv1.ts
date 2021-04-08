
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  developers = new BehaviorSubject([]);
  selectedItems = [];
  addInvoiceIems = [];
  clientvalue = 0;
  itemsvalue = 0;
  vendorsvalue = 0;
  expensesvalue = 0;
  clientLegdervalue = 0;
  vendorLedgervalue = 0;
  pos = 0;
  inviocevalue = 0;
  landing = 0 ;
  logsnav = 0;
  logsvalue = 0;
  salesbydayvalue = 1;
 // url = 'http://192.168.10.6';
 // url = 'http://demoopm.tk';
 // url = 'http://navdalm-001-site30.ctempurl.com/haiderapp';
    //  url = 'http://invoice.pk/matraders1.0/All.php'; // rizApp db // invoice.pk
    url = 'http://invoice.pk/devWork/All.php'; // adnanv1 db
   // url = 'http://tinyinvoice.invoice.pk/settings/All.php'; // tinyinvoice
  invoiceDetailItems = [];
  activeItemsList = [];

  itemUrl;

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {

    this.plt.ready().then(() => {
      this.sqlite.create({
        name: '16.db',
        location: 'default',
      })
      .then((db: SQLiteObject) => {
         this.database=db;
         this.database

         db.executeSql('CREATE TABLE IF NOT EXISTS accounts(`email` TEXT, `passcode` TEXT, `companyName` TEXT, `mysql` TEXT, `linkage` TEXT,`logup` INTEGER,unique (email, passcode))', [])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
         db.executeSql('CREATE TABLE IF NOT EXISTS info(`userid` TEXT, `companyName` TEXT,`linkage` TEXT,FOREIGN KEY(userid) REFERENCES accounts(passcode))', [])
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
         db.executeSql('CREATE TABLE IF NOT EXISTS client(`userid` TEXT, `name` TEXT,`email` TEXT,`phone` INTEGER,`address` TEXT,`deleivry` TEXT,`date_added` TEXT,`date_modified` TEXT,`added_by` TEXT,`modified_by` TEXT)', [])
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
        db.executeSql('CREATE TABLE IF NOT EXISTS comdata(`logo` TEXT, `trader` TEXT)', [])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
        
      })
      .catch(e => console.log(e));
    });
   } 
   addinfo(userid, companyName,linkage) {
    let data = [userid, companyName,linkage]
    return this.database.executeSql("INSERT INTO  info (userid, companyName,linkage) VALUES (?,?,?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
   addcompanyData(){
    let data = ['/assets/134.png','Adnan Traders']
    return this.database.executeSql('INSERT INTO product (logo, trader) VALUES (?, ?)', data).then(data => {
      this.getAllAccountData();
    });
   }
  addaccount(email, passcode,) {
    let data = [email, passcode,'Adnan Traders','0','/assets/134.png','0']
    return this.database.executeSql("INSERT INTO  accounts (email, passcode,companyName,mysql,linkage,logup) VALUES (?, ?,?,?,?,?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  getAllAccount() {
    debugger;
    return this.database.executeSql("SELECT * FROM accounts", []).then((data) => {
      let developers:any = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          console.log(developers);
          developers.push({ 
            email: data.rows.item(i).email, 
            passcode: data.rows.item(i).passcode,
            companyName:data.rows.item(i).companyName,
            mysql:data.rows.item(i).mysql,
            linkage:data.rows.item(i).linkage,
            logup:data.rows.item(i).logup,

           });
        }
      }
      return developers;
      
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getAccounts() {
   //const mysql = 0;
   return this.database.executeSql("SELECT * FROM accounts where mysql= 0", []).then((data) => {
      let developers:any = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          console.log(developers);
          developers.push({ 
            email: data.rows.item(i).email, 
            passcode: data.rows.item(i).passcode,
            companyName:data.rows.item(i).companyName,
            mysql:data.rows.item(i).mysql,
            linkage:data.rows.item(i).linkage,
            logup:data.rows.item(i).logup,

           });
        }
      }
      return developers;
      
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  updateAccounts() {
    const mysql = 1;
    return this.database.executeSql('UPDATE accounts SET mysql=?',[mysql]).then(data => {
    //  console.log(data);
    });

  }

  getAllInfo() {
    return this.database.executeSql("SELECT * FROM info", []).then((data) => {
      let developers:any = [];
       
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          console.log(developers);
          developers.push({ 
            userid: data.rows.item(i).userid, 
            companyName: data.rows.item(i).companyName,
            linkage: data.rows.item(i).linkage, 
           });
        }
      }
      return developers;
      
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getAccount(passcode)
  {
    return this.database.executeSql('SELECT * FROM accounts  WHERE passcode = ?', [passcode]).then(data => {
      return {
            email: data.rows.item(0).email, 
            passcode: data.rows.item(0).passcode,
            companyName:data.rows.item(0).companyName,
            mysql:data.rows.item(0).mysql,
            linkage:data.rows.item(0).linkage,
            logup:data.rows.item(0).logup,
      }
    });
  }
  getAllAccountData() {
    debugger;
    return this.database.executeSql("SELECT * FROM comdata", []).then((data) => {
      let developers:any = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          console.log(developers);
          developers.push({ 
            email: data.rows.item(i).email, 
            passcode: data.rows.item(i).passcode,
            companyName:data.rows.item(i).companyName,
            mysql:data.rows.item(i).mysql,
            linkage:data.rows.item(i).linkage,
            logup:data.rows.item(i).logup,

           });
        }
      }
      return developers;
      
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getLogAccount(logup)
  {
    return this.database.executeSql('SELECT COUNT(*) FROM accounts WHERE  logup = ?', [logup]).then(data => {
      if(data.rows.length==0)
      {
        console.log("Search Failed");
      }      
      
      else{
        console.log("Data Found");
       }
    });
  }
  getAccountUpdate(passcode,companyName,linkage)
  {
    return this.database.executeSql('UPDATE accounts SET companyName=?,linkage=? WHERE passcode=?',[companyName,linkage,passcode]).then(data => {
      console.log(data);
    });
  }
  getLogUpdate(passcode,isLoggedIn)
  {
    return this.database.executeSql('UPDATE accounts SET logup=? WHERE passcode=?',[isLoggedIn,passcode]).then(data => {
      console.log(data);
    });
  }
  addClient(userid, name,email,phone,address,deleivry,date_added,date_modified,added_by,modified_by) {
    let data = [userid, name,email,phone,address,deleivry,date_added,date_modified,added_by,modified_by]
    return this.database.executeSql("INSERT INTO client (userid, name,email,phone,address,deleivry,date_added,date_modified,added_by,modified_by) VALUES (?,?,?,?,?,?,?,?,?,?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }

  getAllClient() {
    return this.database.executeSql("SELECT * FROM client", []).then((data) => {
      let developers:any = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          console.log(developers);
          developers.push({ 
            userid: data.rows.item(i).userid, 
            name: data.rows.item(i).name,
            email: data.rows.item(i).email,
            phone:data.rows.item(i).phone,
            address:data.rows.item(i).address,
            deleivry:data.rows.item(i).deleivry,
            date_added: data.rows.item(i).date_added,
            date_modified:data.rows.item(i).date_modified,
            added_by:data.rows.item(i).added_by,
            modified_by:data.rows.item(i).modified_by,

           });
        }
      }
      return developers;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  getDatabaseState() {
    return this.dbReady.asObservable();
  }
  // public exportAsExcelFile(json: any[], excelFileName: string): void {
  //        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  //        const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  //        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  //        this.saveAsExcelFile(excelBuffer, excelFileName);
  //      }
  //      private saveAsExcelFile(buffer: any, fileName: string): void {
  //         const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
  //         FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
  //      }
  pushItem(item) {
    debugger;
    const index = this.selectedItems.findIndex(x => x.name === item.name);
    if (index !== -1) {
      // tslint:disable-next-line: radix
      let a = parseInt(this.selectedItems[index].menu_order) + 1;
      if (a === 1) {
        a = 2;
      }
      //this.selectedItems[index].qty = '' + a + '';
      this.selectedItems[index].menu_order = a;
    } else {
      item.menu_order = 1;
      this.selectedItems.push(item);
    }
  }
  getSeletedItems() {
    debugger;
    return this.selectedItems;
  }
  removeSelectedItem(pos) {
    this.selectedItems.splice(pos,1);
  }
  deleteAllSelectedItems() {
    this.selectedItems = [];
  }
  saveArray(invoiceIems) {
    this.addInvoiceIems = invoiceIems;
    debugger;

  }
  getArray() {
    return this.addInvoiceIems;
  }
  setupdateclients(value) {
    this.clientvalue = value;
  }
  getupdateclients() {
    return this.clientvalue;
  }
  setupdatevendors(value) {
    this.vendorsvalue = value;
  }
  getupdatevendors() {
    return this.vendorsvalue;
  }
  setupdatePOS(value) {
    debugger
    this.pos = value;
  }
  getupdatePOS() {
    return this.pos;
  }
  setupdateitems(value) {
    this.itemsvalue = value;
  }
  getupdateitems() {
    return this.itemsvalue;
  }
  setupdateexpenses(value) {
    this.expensesvalue = value;
  }
  getupdateexpenses() {
    return this.expensesvalue;
  }
  setupdateinvoice(value) {
    this.inviocevalue = value;
  }
  getupdateinvoice() {
    return this.inviocevalue;
  }
  setupdateclientLeger(value) {
    this.clientLegdervalue = value;
  }
  getupdateclientLedger() {
    return this.clientLegdervalue;
  }
  setupdatevendorLeger(value) {
    this.vendorLedgervalue = value;
  }
  getupdatevendorLedger() {
    return this.vendorLedgervalue;
  }
  setItemUrl(url) {
    this.itemUrl = url;
  }
  getItemUrl() {
    return this.itemUrl;
  }
  getURL() {
    return this.url;
  }
  saveActiveItemsList(items) {
    this.activeItemsList = items;
  }
  getActiveItemsList() {
    return this.activeItemsList;
  }
  setLanding(value) {
    this.landing = value;
  }
  getLanding() {
    console.log('landing:',this.landing);
    return this.landing;
  }
  setLogsnav(value) {
    this.logsnav = value;
  }
  getLogsnav() {
    return this.logsnav;
  }
  setlogs(value) {
    this.logsvalue = value;
  }
  getlogs() {
    return this.logsvalue;
  }
  getSalesByDayValue() {
    return this.salesbydayvalue;
  }
  setSalesByDayValue(value) {
    this.salesbydayvalue = value;
  }
   

}
