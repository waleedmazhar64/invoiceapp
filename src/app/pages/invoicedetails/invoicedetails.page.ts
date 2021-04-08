import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, ToastController, LoadingController, Events, ActionSheetController, Platform, NavController } from '@ionic/angular';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { DatabaseService} from 'src/app/services/database.service';
import { Storage } from '@ionic/storage';
import { ThrowStmt } from '@angular/compiler';
import { NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { HTTP } from '@ionic-native/http/ngx'
import { HttpClient } from '@angular/common/http';
import {  finalize } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { SyncService } from 'src/app/services/sync.service';
import { Network } from '@ionic-native/network/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FileOpener } from '@ionic-native/file-opener/ngx';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-invoicedetails',
  templateUrl: './invoicedetails.page.html',
  styleUrls: ['./invoicedetails.page.scss'],
})
export class InvoicedetailsPage implements OnInit {
  edit = 0;
  Client  = 'Select Client';
  add1 = '';
  selectedClintName = '';
  selectedClientID = '';
  selectedItems = [];
  selectedClient;
  subtotal = 0;
  discount = 0;
  total = 0;
  payed = 0;
  tempActiveItems = [];
  duepayment =0;
  info = {
    Amount: "",
    TotalDebit: "",
    ID: "",
    InvoiceID: "",
    Date: "",
    CustomerID: "",
    IsCredit: "",
    Duedate: "",
    ByUserId: "",
    Remarks: ""
  };
  invoice = {
    AccountId: '',
    BillingAddress: '',
    Cid: '',
    CreateDate: '',
    Discount: '',
    DueDate: '',
    clientSync : 0,
    Fname: '',
    Shop: '',
    City: '',
    Lname: '',
    Iid: '',
    Message: '',
    Name: '',
    Status: '',
    Subtotal: '',
    Terms: '',
    Total: '',
    Sync: 0,
    Cell: 0
  };
  tempActiveitems = {
    Cost: '',
    Description: '',
    Iid: '',
    Qty: '',
    Rate: '',
    itemid: ''
  };
  prev = '';
  paid = 0;
  Cell = 0;
  items = [];
  duedate = '';
  raio = [];
  client = 'Client';
  clients = [];
  activeClients = [];
  tempActiveClients = [];
  activeItems = [];
  message = '';
  created = '';
  templkj = [];
  credit = '';
  debit = '';
  lastPayment = '0';
  Status = 0;
  currentDate = new Date().toString();
  index = 0;
  paidamount = 0;
  dueamount = 0;
  toast: any;
  info1 = '';
  url = '';
  usdId:any;
  acttype:any;
  lgdate:any;
  name:any;
  tblId:any;
  tblName:any;
  tempTotal = 0;
  CustomerBalance = 0;
  addedItems = [];
  remainingItems = [];
  SelectedClientSync = 0;
  currency  = '';
  company = 'PKR';

  pdfObj = null;
  outOfStockItems = 0;

  constructor(
    private location: Location,
    private alrtCtrl: AlertController,
    private router: Router,
    private toastController: ToastController,
    private storage: Storage,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    private datePipe: DatePipe,
    private events: Events,
    private nav: NavController,
    private file: File,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    // private camera: Camera,
    private plt: Platform,
    private http: HttpClient,
    private databaseprovider: DatabaseService,
    private nativeHttp: HTTP,
    private datepicker: DatePicker,
    private syncService: SyncService,
    private network: Network,
    private callnumber: CallNumber,
    private sms: SMS,
    private socialSharing: SocialSharing,
    private loadingCtrl: LoadingController,

  ) {
    this.events.publish('user:created1', 'saad1', '');
    this.storage.get('COM').then((val) => {
        this.company = val;
    });
    this.storage.get('userId').then((val)=> {
      this.usdId = val;
      console.log(this.usdId);
    });
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
          
      }
    });
    
    this.url = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
      // Instance of should be:
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
    // this.getAllClients();
    this.getAllClientsLocaldb();
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.invoice !== 'undefined') {
       this.prev = this.router.getCurrentNavigation().extras.state.url;
       if (this.prev === 'Outstanding') {
        this.events.publish('refreshOutInvoices', 'saad2', '');
       }
       if (this.prev === '/menu/invoice') {
        this.events.publish('refreshInvoices', 'saad2', '');
      }
       if (this.prev === '/menu/logs') {
        this.events.publish('refreshLogs', 'saad2', '');
      }
       this.currentDate = this.datePipe.transform(this.currentDate, 'dd MMM yyyy');
       this.invoice = this.router.getCurrentNavigation().extras.state.invoice;
       this.Cell = this.invoice.Cell;
       this.created = this.invoice.CreateDate;
       this.duedate = this.invoice.DueDate;
       this.selectedClintName =  this.invoice.Fname;
       this.selectedClientID = this.invoice.Cid;
       this.client = this.invoice.Fname + ' ' + this.invoice.Lname ;
       this.subtotal = parseInt(this.invoice.Subtotal);
       this.discount = parseInt(this.invoice.Discount);
       this.total = parseInt(this.invoice.Total);
       this.tempTotal = parseInt(this.invoice.Total);
       this.message = this.invoice.Message;
       this.Status = parseInt(this.invoice.Status);
       this.items = this.router.getCurrentNavigation().extras.state.Items;
       this.templkj = this.router.getCurrentNavigation().extras.state.Items;
       this.info1 = this.invoice.Shop +', '+ this.invoice.BillingAddress + ', ' + this.invoice.City,

      
      // this.getCustmerBalance();
      this.getCustomerBalanceLocaldb();
       for(let i =0;i<this.items.length;i++) {
        if (this.items[i].Qty > 0) {
          this.items[i]['Star'] = 0;
          this.addedItems.push(this.items[i]);
        } else {
          this.remainingItems.push(this.items[i]);
        }

      }
       if(this.invoice.Status === '3') {
         this.paid = 1;
       } 
        
       for(let i =0;i<this.items.length;i++) {
        this.items[i].Qty = parseInt(this.items[i].Qty);
        this.items[i].CostPrice = parseInt(this.items[i].CostPrice);
        this.items[i]['stock'] = 0;
        this.items[i]['temp'] = parseInt(this.items[i].Qty);

      }

       ;
      }
  }
}
async getCustmerBalance() {
  let loading = await this.loadingController.create();
  await loading.present();
  const url = this.databaseprovider.getURL();

  this.nativeHttp.setDataSerializer("json");
  let nativeCall = this.nativeHttp.post(url + '/payments.php',
 {
  "CustomerID": this.selectedClientID
 }
 ,{
   'Content-Type':'application/json',
   'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
 });
 

  from(nativeCall).pipe(
   finalize(() => loading.dismiss)
 )
 .subscribe(data => {
   loading.dismiss();
   console.log('Native data:', data);
   const g = JSON.parse(data.data);
   if (g.TotalDebit == null) {
     g.TotalDebit = 0;
   }
   if (g.TotalCredit == null) {
    g.TotalCredit = 0;
  }
  if (g.Amount == null) {
    g.Amount = 0;
  }
   this.credit = g.TotalCredit;
   this.debit = g.TotalDebit;
   this.duepayment = parseInt(this.debit)  - parseInt(this.credit);
   this.lastPayment = g.Amount;
   this.paidamount = g.Amount;
   this.dueamount = this.duepayment;


 },err =>{
   loading.dismiss();
   console.log('JS call error',err);
   const error = JSON.parse(err.error);
   alert(error.message);
   console.log('Native data:',JSON.parse(error));
 });
}
share() {
  const msg = 'Save <br/><br/> Preview <br/><br/> Email <br/><br/> Share <br/><br/> Add Credits <br/><br/> Print ';
  // this.shareALert('','','');
   this.saveALert('','','Save this invoice?');
 }
 showALert(head, sub, msg) {
  this.alrtCtrl.create({
  header: head,
  subHeader: sub,
  message: msg,
  cssClass: 'alertSize',
  buttons: [
    // {
    //   text: 'Delete',
    //   cssClass: 'cancel1',
    //   role: 'cancel',
    //   handler: () => {
    //     console.log('Confirm Cancel');
    //   }
    // },
    {
      text: 'Exit',
      cssClass: 'customClass',
      role: 'cancel',
      handler: () => {
        console.log('dele');
      //  this.location.back();
        this.router.navigate(['menu/invoice']);
        console.log('Confirm Cancel');
        this.selectedItems = [];
        this.discount = 0.00;
        this.subtotal=0.00;
        this.total=0.00;
        this.message = 'Thanks for your business';
        this.client = 'Client';
        this.databaseprovider.setItemUrl('');
        

      }
    },
     {
      text: 'Save',
      handler: () => {
        console.log('Confirm Ok');
        this.selectedClient;
        this.selectedItems;
        this.total;
        this.discount;
        if(this.selectedClintName !== '' && this.subtotal > 0) {
          if(this.payed > 0) {
            // this.saveInvoicePayed();
            this.updateInvoicePaymentLocaldb();
          } else {
            // this.saveInvoice();
            this.updateInvoiceLocaldb();
          }
        } else {
          alert('Kindly select client and Items first');
        }
       


      }
    }
  ]
}).then(alert => alert.present());
}
shareALert(head, sub, msg) {
this.alrtCtrl.create({
header: head,
subHeader: sub,
message: msg,
cssClass: 'changeAvatar',
buttons: [
  {
    text: 'Save',
    cssClass: 'alert-button-inner',
    handler: () => {
      console.log('Confirm Save');
      this.selectedItems;
      this.selectedClient;
      
      if(this.selectedClintName !== '' && this.subtotal > 0) {
        if(this.payed > 0) {
          // this.saveInvoicePayed();
          this.updateInvoicePaymentLocaldb();
        } else {
          // this.saveInvoice();
          this.updateInvoiceLocaldb();
        }
      } else {
        alert('Kindly select client and Items first');
      }
    }
  },
  {
    text: 'Preview',
    cssClass: 'alert-button-inner',
    handler: () => {
      console.log('Confirm Preview');
    }
  },
  {
    text: 'Email',
    cssClass: 'alert-button-inner',
    handler: () => {
      console.log('Confirm Email');
    }
  },
  {
    text: 'Share',
    cssClass: 'alert-button-inner',
    handler: () => {
      console.log('Confirm Share');
    }
  },
  {
    text: 'Cancel',
    cssClass: 'cancel',
    role: 'cancel',
    handler: () => {
      console.log('Confirm Cancel');
    }
  },
]
}).then(alert => alert.present());
}

  ngOnInit() {
    ;
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.ID !== 'undefined') {
        ;
        this.selectedClientID = this.router.getCurrentNavigation().extras.state.ID;
        this.selectedClintName =  this.router.getCurrentNavigation().extras.state.Name;
        this.client =  this.router.getCurrentNavigation().extras.state.Name;
        this.info =  this.router.getCurrentNavigation().extras.state.info;

      }

    }
  }
  selectDueDate() {
    var options={
      date: new Date(),
      mode: 'date',
      androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    };
  
    this.datepicker.show(options).then((date)=>{
      this.duedate = this.datePipe.transform(date,'dd MMM yyyy');
      this.invoice.DueDate = this.datePipe.transform(date,'dd MMM yyyy');
     // console.log('selected:',this.myDate);
    });
  }
  back() {
  //  if (this.tempTotal !== this.total) {
  //   this.showALert('','','Save this Invoice?');
  //  } else {
  //   this.router.navigate(['menu/invoice']);
  //  }
  this.events.publish('user:created', 'saad', '');

  // if (this.databaseprovider.getupdateinvoice() === 1) {
  //     this.databaseprovider.setupdateinvoice(0);
  //     this.nav.navigateRoot('outstanding');
  //  } else {
  //    this.nav.navigateRoot(this.prev);
  //  }

  if (this.prev === 'Outstanding') {
     this.location.back();
   } else {
    this.nav.navigateRoot(this.prev);
   }


  // this.nav.navigateRoot('outstanding');

  }
  
  addClient() {
    const navigationExtras: NavigationExtras = {
      state: {
        url: this.url
      }
    };
    this.router.navigate(['add-client-clients'], navigationExtras);
    
  }
  openAlert() {
    this.alrtCtrl.create({
     header: 'Vendors',
     inputs: this.raio,
     buttons: [
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'OK',
         handler: (data:string) => {
           console.log('selected' + data);
           var fields = data.split(',');
  
           this.selectedClintName = fields[0];
           this.client = this.selectedClintName;
           this.selectedClientID = fields[1];
          
         }
       }
     ]
   }).then(alert => alert.present());
  
  }
  async getAllClients() {
    let loading = await this.loadingController.create();
      await loading.present();
      const url = this.databaseprovider.getURL();
      this.nativeHttp.setDataSerializer("json");

      let nativeCall = this.nativeHttp.post(url , 
        {
          'Name': 'getAllClients',
          "AccountId": '113008225657937776461'
        } , 
        {
          'Content-Type': 'application/json',
          'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
        });
  
    from(nativeCall).pipe(
        finalize(() => loading.dismiss)
      )
      .subscribe(data => {
        loading.dismiss();
        console.log('Native data:',data);
        const g = JSON.parse(data.data);
        this.clients = g.clients;
        console.log(this.clients[0]);
        this.sortClients();
        this.activeClients = [];
        ;
        for(let i = 0; i < this.clients.length; i++) {
          if(this.clients[i].Active === '1') {
            this.activeClients.push(this.clients[i]);
            const a = {
              type: 'radio',
              label: this.clients[i].Fname,
              value: this.clients[i].Fname+','+this.clients[i].Cid
            };
            this.raio.push(a);
          }
        }
        
      //  this.selectActive();
       // ;
       // this.initializeItems();
        this.initializeactiveVendors();
        this.databaseprovider.setupdatevendors(0);
      },err =>{
        console.log('JS call error',err);
      });
  
    }
    sortClients() {
  
      ;
      this.clients = this.clients.sort((a, b) => {
        if (a.Fname < b.Fname) {
          return -1;
        }
        if (a.Fname > b.Fname) {
          return 1;
        }
        return 0;
      });
    }
    initializeactiveVendors(){
      this.tempActiveClients = this.activeClients;
    }
   
    quantityIncrement(item) {
      if (item.stock  < parseInt(item.Instock)) {
        item.Qty = item.Qty + 1;
        item.stock = item.stock + 1;
       // this.subtotal = this.subtotal + (1 * item.Rate);
        this.subtotal = this.subtotal + (1 * parseInt(item.CostPrice));
        this.total = this.subtotal - this.discount;
      } else {
        this.showToast();
      }
      

    }
    quantityDecrement(item) {
      
      if(item.Qty > 0) {
       // this.subtotal = this.subtotal - (1 * item.Rate);
        this.subtotal = this.subtotal - (1 * parseInt(item.CostPrice));
        this.total = this.subtotal - this.discount;
        item.Qty = item.Qty - 1;
        item.stock = item.stock - 1;
  
      }
      
    }
    change() {
      
    }
    discountPrompt() {
      if ( this.total > 0) {
        this.alrtCtrl.create({
          header: 'Discount',
          inputs: [
            {
              name: 'Discount',
              placeholder: this.discount.toString(),
              value: this.discount,
              type: 'number'
            }
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Submit',
              handler: data => {
               console.log(data);
               if(data.Discount === '') {
                this.discount = 0;
               } else {
                this.discount = data.Discount;
               }
              }
            }
          ]
        }).then(alert => alert.present());
      } else {
      }
     
    }
    async saveInvoicePayed() {
      let loading = await this.loadingController.create();
      await loading.present();
     // this.order.created;
     // this.selectedVendorID;
      this.tempActiveItems
      this.discount
      this.total;
      this.message;

      this.templkj;
      this.items;
      
      const itemsArray = [];
      for(let i = 0;i<this.items.length;i++) {
        const  a = {
          Id: parseInt(this.items[i].itemid),
          Qty: this.items[i].Qty,
          CostPrice: this.items[i].CostPrice,
          stock : (this.items[i].temp - this.items[i].Qty) * (-1)
        };
        itemsArray.push(a);
      }
      itemsArray;
      
      this.nativeHttp.setDataSerializer("json");
      const url = this.databaseprovider.getURL();
  
      let nativeCall = this.nativeHttp.post(url + '/updateInvoicePartialPayment.php',
      {
        "invoiceId": this.invoice.Iid,
        "AccountId": "113008225657937776461",
        "Cid": this.selectedClientID,
        "Name": "INV01",
        "CreateDate": this.created,
        "Terms": "Isl",
        "DueDate": this.duedate,
        "Items": itemsArray,
        "Subtotal": this.subtotal,
        "Discount": this.discount,
        "Total": this.subtotal - this.discount,
        "payments":
        [
          {
            "PaidDate": this.currentDate.toString(),
            "Paid": this.payed
          }
        ],
        "Message": this.message,
        "Status": "Pending"
        
      }
      
      ,{
        'Content-Type':'application/json',
        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
      });
  
      from(nativeCall).pipe(
        finalize(() => loading.dismiss)
      )
      .subscribe(data => {
        loading.dismiss();
        console.log('Native data:',data);
        const g = JSON.parse(data.data);
        if(g.success === 1) {
          this.databaseprovider.setupdateinvoice(1);
          this.router.navigate(['/menu/invoice']);
        }
       // this.databaseprovider.setupdateitems(0);
      },err =>{
        console.log('JS call error',err);
      });
    }
    async saveInvoice() {
      let loading = await this.loadingController.create();
      await loading.present();
     // this.order.created;
     // this.selectedVendorID;
      this.tempActiveItems
      this.discount
      this.total;
      this.message;

      this.templkj;
      this.items;
      
      const itemsArray = [];
      for(let i = 0;i<this.items.length;i++) {
        const  a = {
          Id: parseInt(this.items[i].itemid),
          Qty: this.items[i].Qty,
          CostPrice: this.items[i].CostPrice,
          stock : (this.items[i].temp - this.items[i].Qty) * (-1)
        };
        itemsArray.push(a);
      }
      itemsArray;
      
      this.nativeHttp.setDataSerializer("json");
      const url = this.databaseprovider.getURL();
  
      let nativeCall = this.nativeHttp.post(url + '/updateInvoice.php',
      {
        "invoiceId": this.invoice.Iid,
        "AccountId": "113008225657937776461",
        "Cid": this.selectedClientID,
        "Name": "INV01",
        "CreateDate": this.created,
        "Terms": "Isl",
        "DueDate": this.duedate,
        "Items": itemsArray,
        "Subtotal": this.subtotal,
        "Discount": this.discount,
        "Total": this.subtotal - this.discount,
        "Message": this.message,
        "Status": "Pending"
        
      }
      
      ,{
        'Content-Type':'application/json',
        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
      });
  
      from(nativeCall).pipe(
        finalize(() => loading.dismiss)
      )
      .subscribe(data => {
        loading.dismiss();
        console.log('Native data:',data);
        const g = JSON.parse(data.data);
        if(g.success === 1) {
          this.databaseprovider.setupdateinvoice(1);
          this.router.navigate(['/menu/invoice']);
        }
       // this.databaseprovider.setupdateitems(0);
      },err =>{
        console.log('JS call error',err);
      });
    }
  
  invoiceInfo() {
    ;
    const navigationExtras: NavigationExtras = {
      state: {
       // user: this.received
       invoice: this.invoice
      }
    };
    this.router.navigate(['invoice-info'], navigationExtras);
  }
  removeSelected(pos) {
    ;
   // let a = this.databaseprovider.getSeletedItems();
    this.selectedItems.splice(pos,1);
    this.updateCalculations();  
   // this.databaseprovider.removeSelectedItem(pos);
   // a = this.databaseprovider.getSeletedItems();
    
  
  }
  
  async saveLedger() {
    let loading = await this.loadingController.create();
    await loading.present();
    const createDate = this.datePipe.transform(this.created ,'dd MMM yyyy');
    const duedate = this.datePipe.transform(this.duedate, 'dd MMM yyyy');
    const url = this.databaseprovider.getURL();

    
    this.nativeHttp.setDataSerializer("json");
    let nativeCall = this.nativeHttp.post(url + '/orderPlaced.php',
   {
    "InvoiceID": this.invoice.Iid.toString(),
    "Date": this.currentDate.toString(),
    "Amount": this.payed,
    "CustomerID": this.selectedClient.id,
    "IsCredit": 1,
    "Duedate": duedate.toString(),
    "ByUserId": "rizwanali",
    "Remarks": this.message
  }
   ,{
     'Content-Type':'application/json',
     'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
   });
  
    from(nativeCall).pipe(
     finalize(() => loading.dismiss)
   )
   .subscribe(data => {
     this.deleteData();
     loading.dismiss();
     console.log('Native data:', data);
     const g = JSON.parse(data.data);
     
     this.router.navigate(['/menu/invoice']);
     
    // this.databaseservice.setupdateclients(1);
    // this.router.navigate(['/menu/clients']);
    // this.initializeItems();
   },err =>{
     loading.dismiss();
     ;
   //  this.databaseservice.setupdateclients(1);
   //  this.router.navigate(['/menu/clients']);
     console.log('JS call error',err);
     const error = JSON.parse(err.error);
     alert(error.message);
     console.log('Native data:',JSON.parse(error));
   });
  }
  updateCalculations() {
    
    if(this.selectedItems.length == 0) {
      this.discount = 0;
      this.total = 0;
      this.subtotal = 0;
     // this.duepayment = 0;
    }
    for (let i=0;i<this.selectedItems.length;i++) {
      this.subtotal = this.subtotal + (this.selectedItems[i].menu_order * this.selectedItems[i].regular_price);
      this.discount = this.discount + (this.selectedItems[i].regular_price - this.selectedItems[i].weight) * this.selectedItems[i].menu_order;
      this.total = this.subtotal - this.discount;
      const a = parseFloat(this.discount.toString()).toFixed(2);
      const b =parseFloat(this.total.toString()).toFixed(2);
      const c =parseFloat(this.subtotal.toString()).toFixed(2);
  
      
      this.discount = parseFloat(a);
      this.total = parseFloat(b);
      this.subtotal = parseFloat(c);
      //this.duepayment = this.total - this.payed;
      
      ;
    }
  }
  deleteData() {
    this.selectedItems = [];
    this.discount = 0.00;
    this.subtotal=0.00;
    this.total=0.00;
    this.message = 'Thanks for your business';
    this.client = 'Client';
    this.databaseprovider.setItemUrl('');
  }
  presentPrompt() {
    this.alrtCtrl.create({
      header: 'Message',
      inputs: [
        {
          name: 'Message',
          placeholder: this.message,
          value: this.message
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
           console.log(data);
           this.message = data.Message;
          }
        }
      ]
    }).then(alert => alert.present());
  }
  updateTotal(searchbar,item) {
    const x = item.CostPrice * item.Qty;
    this.subtotal = this.subtotal - x;
    const q = searchbar.srcElement.value;
    const b = q * item.Qty;
    this.subtotal = this.subtotal + b;
    this.total = this.subtotal - this.discount;
  
  }

  paymentInfo() {
    ;
    if(this.selectedClientID !== '') {
     // this.data;
   
     // this.meta_data;
      const navigationExtras: NavigationExtras = {
        state: {
         // user: this.received
         meta_data: '',
         duepayment: this.duepayment,
         payed: this.payed
        }
      };
      this.router.navigate(['payment-info'], navigationExtras);
    }
    
  }
  paymentPrompt() {
    this.alrtCtrl.create({
      header: 'Payment',
      inputs: [
        {
          name: 'Payment',
          placeholder: this.duepayment.toString(),
         // value: this.debit
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
           console.log(data);
           
           this.payed = data.Payment;
           if(this.index === 0) {
            if(data.Payment > 0) {
              this.duepayment = this.duepayment - this.payed;
              this.lastPayment  = data.Payment;
              this.index = 1;
            } else {
              this.lastPayment = this.paidamount.toString();
              this.duepayment = this.dueamount;

            }
           } else {
            if(data.Payment > 0) {
            this.duepayment = this.duepayment + parseInt( this.lastPayment);
            this.duepayment = this.duepayment - this.payed;
            this.lastPayment  = data.Payment;
            } else {
              this.lastPayment = this.paidamount.toString();
              this.duepayment = this.dueamount;
              this.index = 0;
            }
           }
           const a = parseInt(this.debit)  - this.payed;
           this.debit = a.toString();
           //this.saveLedger();
          }
        }
      ]
    }).then(alert => alert.present());
  }
  showToast() {
    this.toast = this.toastController.create({
      message: 'Product Out Of Stock',
      duration: 2000
    }).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }
  HideToast(){
    this.toast = this.toastController.dismiss();
  }
  getAllClientsLocaldb() {
    this.syncService.getAllActiveClients().then((data) => {
      this.clients = data;
      console.log(this.clients[0]);
      this.sortClients();
      this.activeClients = [];
        ;
      for(let i = 0; i < this.clients.length; i++) {
          if(this.clients[i].Active === 1) {
            this.activeClients.push(this.clients[i]);
            const a = {
              type: 'radio',
              label: this.clients[i].Fname,
              value: this.clients[i].Fname+','+this.clients[i].Cid
            };
            this.raio.push(a);
          }
        }
        
      //  this.selectActive();
       // ;
       // this.initializeItems();
      this.initializeactiveVendors();
      this.databaseprovider.setupdatevendors(0);
      //this.getAllItemsLocaldb();
    });
  }
  getCustomerBalanceLocaldb() {
    
    this.syncService.getCustomerbalance(this.selectedClientID).then((data) => {
      //this.clients = data;
     // const g = JSON.parse(data);
      
      const g = data;
      
      if (g.TotalDebit == null) {
        g.TotalDebit = 0;
      }
      if (g.TotalCredit == null) {
       g.TotalCredit = 0;
     }
     if (g.Amount == null) {
       g.Amount = 0;
     }
      this.credit = g.TotalCredit;
      this.debit = g.TotalDebit;
      this.duepayment = parseInt(this.debit)  - parseInt(this.credit);
      this.lastPayment = g.Amount;
      this.paidamount = g.Amount;
      this.dueamount = this.duepayment;
    });
  }
  async updateInvoiceLocaldb() {
    // alert('updateInvoiceLocaldb');
    let loading = await this.loadingController.create();
    await loading.present();
    
    for(let i = 0;i<this.items.length;i++) {
      if(this.items[i].Sync === 1) {
        this.items[i].Sync = 2;
      }
    }
    
    const itemsArray = [];
    for(let i = 0;i<this.items.length;i++) {
      const  a = {
        Id: parseInt(this.items[i].Id),
        Qty: this.items[i].Qty,
        CostPrice: this.items[i].CostPrice,
        stock : (this.items[i].temp - this.items[i].Qty) * (-1),
        Sync: this.items[i].Sync
      };
      itemsArray.push(a);
    }
    itemsArray;
    loading.dismiss;
    const CustomerBalance = this.total - this.tempTotal;
    
    this.syncService.updateInvoice(this.invoice.Iid , '113008225657937776461', this.selectedClientID, 'INV01', this.created, 'ISL', this.duedate, itemsArray, this.subtotal, this.discount, this.subtotal - this.discount, this.message, this.Status,CustomerBalance)
    .then(data => {
      this.databaseprovider.setupdateinvoice(1);
      this.databaseprovider.setupdateclientLeger(1);
      loading.dismiss();
      this.router.navigate(['/menu/invoice']);
      //this.AddLog();
      if (this.network.type === 'none') {
       
      } else {
        
        this.syncdelInvoices();
      }

    });
  }
  async updateInvoicePaymentLocaldb() {
    let loading = await this.loadingController.create();
    await loading.present();
    const itemsArray = [];
    for(let i = 0;i<this.items.length;i++) {
      const  a = {
        Id: parseInt(this.items[i].Id),
        Qty: this.items[i].Qty,
        CostPrice: this.items[i].CostPrice,
        stock : (this.items[i].temp - this.items[i].Qty) * (-1)
      };
      itemsArray.push(a);
    }
    itemsArray;
    loading.dismiss;
    
    this.syncService.updateInvoicePayment(this.invoice.Iid , '113008225657937776461', this.selectedClientID, 'INV01', this.created, 'ISL', this.duedate, itemsArray, this.subtotal, this.discount, this.subtotal - this.discount, this.currentDate, this.payed, this.message, 'Pending')
    .then(data => {
      this.databaseprovider.setupdateinvoice(1);
      loading.dismiss();
      this.router.navigate(['/menu/invoice']);

    });
  }
  AddLog(){
  
    if (this.usdId === 1) {
      this.acttype = 'You edited';
    } else {
      this.acttype = 'You edited';
    }
    this.name = 'Invoice';
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy');
    this.lgdate = 'at ' + a;
    this.tblName = 'invoices';
    this.tblId = this.syncService.getUpdatedIid();
    this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
    
    this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {

          console.log("Log has been added");
          this.syncService.syncAddedLog();
          //this.GetLogs();

    });
  }
  syncUpdatedInvoice() {
    this.syncService.getAlldelInvoices().then((data) => {
      if (data.length > 0) {
      const url = this.databaseprovider.getURL();
  
      ;
     this.nativeHttp.setDataSerializer("json");
      let nativeCall = this.nativeHttp.post(url + '/delInvoices.php',
      {
        "InvoiceIDS": data
      }
      ,{
        'Content-Type':'application/json',
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
          this.syncService.updatedelsInvoices().then((data) => {
          });
        } else {
          // alert('failed');
        }

       // this.initializeItems();
      },err =>{
        console.log('JS call error',err);
        const error = JSON.parse(err.error);
        ///alert(error.message);
        console.log('Native data:',JSON.parse(error));
      });

    }
    
    
  });
  }
  syncdelInvoices() {
    this.syncService.getAlldelInvoices().then((data) => {
      if (data.length > 0) {
      const url = this.databaseprovider.getURL();
  
      ;
     this.nativeHttp.setDataSerializer("json");
      let nativeCall = this.nativeHttp.post(url + '/delInvoices.php',
      {
        "InvoiceIDS": data
      }
      ,{
        'Content-Type':'application/json',
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
          this.syncService.updatedelsInvoices().then((data) => {
          });
          this.syncService.syncAddedInvoices().then((data) => {
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
                  // alert('success');
                  this.syncService.updateSyncedInvoices(IDs).then((data) => {
                  });
                  this.syncService.syncAddedInvoicesItems().then((data) => {
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
                         // alert('success');
                          this.syncService.updateSyncedInvoicesItems(IDs).then((data) => {
                          });
                          
                          this.syncService.syncAddedLedger().then((data) => {
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
                                 // alert('success');
                                  this.syncService.updateSyncedAddedLedger(IDs).then((data) => {
                                  });
                                } else {
                                   // alert('failed');
                                }
                  
                               // this.initializeItems();
                              },err =>{
                                console.log('JS call error',err);
                                const error = JSON.parse(err.error);
                                // alert(error.message);
                                console.log('Native data:',JSON.parse(error));
                              });
                  
                              
                            }
                           
                          }).then(data4 => {
                            this.syncService.syncUpdatedItems().then((data6) => {
                              console.log('updayed executed');
                              if (data6.length > 0) {
                                const IDs = [];
                                for (let i = 0; i < data6.length; i++) {
                                   IDs[i] = data6[i].itemid;
                                }
                                const url = this.databaseprovider.getURL();
                            
                                ;
                               this.nativeHttp.setDataSerializer("json");
                               
                                let nativeCall = this.nativeHttp.post(url , 
                                  {
                                    'Name': 'syncUpdatedItems',
                                    "Items": data6
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
                                    this.syncService.updateSyncedItems(IDs).then((data) => {
                                    });
                                  } else {
                                   //  alert('failed');
                                  }
                        
                                 // this.initializeItems();
                                },err =>{
                                  console.log('JS call error',err);
                                  const error = JSON.parse(err.error);
                                 // alert(error.message);
                                  console.log('Native data:',JSON.parse(error));
                                });
                        
                              }
                              
                              
                            });
                          });
                        } else {
                          // alert('failed');
                        }
          
                       // this.initializeItems();
                      },err =>{
                        console.log('JS call error',err);
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
                console.log('JS call error',err);
                const error = JSON.parse(err.error);
                //alert(error.message);
                console.log('Native data:',JSON.parse(error));
              });
  
              
            }
           
          });
        } else {
          // alert('failed');
        }

       // this.initializeItems();
      },err =>{
        console.log('JS call error',err);
        const error = JSON.parse(err.error);
        ///alert(error.message);
        console.log('Native data:',JSON.parse(error));
      });

    }
    
    
  });
  }
  syncupdatedItems() {

      this.syncService.syncUpdatedItems().then((data6) => {
        console.log('updayed executed');
        if (data6.length > 0) {
          const IDs = [];
          for (let i = 0; i < data6.length; i++) {
             IDs[i] = data6[i].itemid;
          }
          const url = this.databaseprovider.getURL();
      
          ;
         this.nativeHttp.setDataSerializer("json");
        
          let nativeCall = this.nativeHttp.post(url , 
            {
              'Name': 'syncUpdatedItems',
              "Items": data6
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
              this.syncService.updateSyncedItems(IDs).then((data) => {
              });
            } else {
             //  alert('failed');
            }
  
           // this.initializeItems();
          },err =>{
            console.log('JS call error',err);
            const error = JSON.parse(err.error);
           // alert(error.message);
            console.log('Native data:',JSON.parse(error));
          });
  
        }
        
        
      });
  }
  saveALert(head, sub, msg) {
    this.alrtCtrl.create({
    header: head,
    subHeader: sub,
    message: msg,
    cssClass: 'alertSize',
    buttons: [
      // {
      //   text: 'Delete',
      //   cssClass: 'cancel1',
      //   role: 'cancel',
      //   handler: () => {
      //     console.log('Confirm Cancel');
      //   }
      // },
      {
        text: 'Cancel',
        cssClass: 'customClass',
        role: 'cancel',
        handler: () => {
       
        }
      },
       {
        text: 'Save',
        handler: () => {
        console.log('Confirm Ok');
        this.selectedClient;
        this.selectedItems;
        this.total;
        this.discount;
          if(this.selectedClintName !== '' && this.subtotal > 0) {
          if(this.payed > 0) {
            // this.saveInvoicePayed();
            this.updateInvoicePaymentLocaldb();
          } else {
            // this.saveInvoice();
            this.updateInvoiceLocaldb();
          }
        } else {
          alert('Kindly select client and Items first');
        }
        }
      }
    ]
  }).then(alert => alert.present());
  }
  async AddItems() {
    let loading = await this.loadingController.create();
    await loading.present();
    this.addedItems = this.items;
    loading.dismiss();
  }
  call() {
    const number = this.Cell.toString();
    this.callnumber.callNumber(number, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  Sms() {
    let count = 1;
    let message = 'From- \nCustomer Account name - ' + this.client + '\nShop - ' + this.invoice.Shop +
    '\nAddress - ' + this.invoice.BillingAddress + '\nCity - ' + this.invoice.City +
    '\nInvoice Items Details Are As Follow:';
    for(let i=0; i<this.addedItems.length; i++) {
      message = message +  '\nItem No. - ' + count + '\nItem - ' + this.addedItems[i].Description + '\nQty - ' + this.addedItems[i].Qty;
      count = count + 1;
    }
    message = message + '\nTotal - '  + this.currency + this.invoice.Total;
    const number = this.Cell.toString();
    this.socialSharing.shareViaSMS(message, number).then(() => {
      }).catch(() => {
  
      });
  }
  copypaste(){
    console.log("1");
    this.syncService.getLedger(this.selectedClientID);
  }
  email() {

    this.createPdf();
  }

  markAsPaid() {
   this.databaseprovider.setupdateinvoice(1);
   if (this.paid === 0) {
     this.paid = 1;
   } else {
     this.paid = 0;
   }
   this.syncService.invoiceMarkAsPaid(this.invoice.Iid).then(() => {
     this.syncMarkeAsPaidInvoices();
     this.events.publish('user:created', 'saad', '');

   });

  }
  async share1() {
    let items = [];
    let loading = await this.loadingCtrl.create();
    await loading.present();
    // item.Subtotal = parseFloat(item.Subtotal).toFixed(2);
    const message = 'Client Name:' + this.client+ '\n' 
    + 'Dated:' + this.invoice.CreateDate + '\n'
    + 'Due Date:' + this.duedate + '\n'
    + 'Subtotal:' + this.subtotal + '\n'
    + 'Discount:' + this.discount + '\n'
    + 'Total:' + this.invoice.Total + '\n'       ;
    
    this.socialSharing.share(message).then(() => {
    loading.dismiss();
    }).catch(() => {

    });
    // this.syncService.getInvoiceItems(item.Iid).then((data) => {
    //   items = data;
    // });
  }
  async createPdf() {
    let items = [];
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const date = this.invoice.CreateDate.bold();
    this.syncService.getInvoiceItems(this.invoice.Iid).then((data) => {
      items = data;
      const itemss = [];
      console.log(items);
      for (let i = 0; i < items.length; i++) {
        if ( items[i].Qty > 0) {
          const total = items[i].Qty * items[i].CostPrice;
          itemss.push(
            [
              { text:  items[i].Qty.toString(), fontSize: 8 , color: '#000000' },
              { text:  items[i].Description.toString() + '(' + items[i].Qty.toString() + 'x' + items[i].CostPrice.toString() + ')',
                fontSize: 8,
                color: '#000000'
               },
              { text:  total.toString(), fontSize: 8, color: '#000000' },
            ]
          );
        }

        }
      const left  = {
          text: [
                { text: 'Dated: ', bold: true, fontSize: 6, alignment: 'left'},
                { text:  this.invoice.CreateDate, color: '#000000' ,  fontSize: 6, alignment: 'left'},
          ]
        };
      const right = {
          text: [
                    { text: '                         Due Date: ' , bold: true, fontSize: 6, alignment: 'right' },
                    { text:  this.invoice.DueDate , color: '#000000' ,  fontSize: 6, alignment: 'right'},
                  ]
        };


      var docDefinition = {
        pageSize: {
          width: 226.77192,
          height: 'auto'
        },
        pageMargins: [ 10, 15, 10, 15 ],
        content: [
          { text: this.company, bold: true, alignment: 'center', style: 'subheader'},
          { text: this.client , bold: true, fontSize: 6, alignment: 'right'},
          {
            text:
            [
             // {text: item.Fname + ' ' + item.Lname, fontSize: 6, alignment: 'right'},
              {text: this.invoice.Shop + ',' + this.invoice.BillingAddress + ',' + this.invoice.City, fontSize: 6, alignment: 'right'},
            ]

          },
          { text: 'INVOICE',  fontSize: 18, color: '#ff0000', alignment: 'right' },
          // { text: this.datePipe.transform(new Date().toString(), 'dd MMM yyyy h:mm a'), fontSize: 12, alignment: 'center' },
          {
            margin: [0, 5, 0, 0],
            style: 'totalsTable',
            table: {
                widths: [ 100, 100 ],
                body: [
                  [
                      left, right
                              ],
                ],

              },
              layout: 'noBorders'
            },
          { //alignment: 'center',
            margin: [0, 10, 0, 0],
            text: [
              { text: 'Qty  ' , style: 'subheader', color: '#000000' },
              { text: '                 Item(s)'                      , style: 'subheader',  color: '#000000' },
              { text: '                       Total(PKR)' , style: 'subheader',  color: '#000000' },
            ]
          },
          {
            //  alignment: 'center',
              margin: [0, 5, 0, 0],
              style: 'totalsTable',
              table: {
                //  alignment: 'center',
                  widths: [30, 120, 50 ],
                  body: itemss
              },
              layout: 'noBorders'
          },
          {
            margin: [0, 10, 0, 0],
            style: 'totalsTable',
            table: {
                widths: [ 100, 100 ],
                body: [
                    [
                        { text: 'Subtotal:', bold: true, fontSize: 8 },
                        { text: 'PKR ' + (this.invoice.Total + this.invoice.Discount).toLocaleString(), fontSize: 8, alignment: 'right'}
                    ],
                    [
                        { text: 'Distcount:', bold: true, fontSize: 8 },
                        { text: 'PKR ' + this.invoice.Discount.toLocaleString(), fontSize: 8, alignment: 'right'}
                    ],
                    [
                      { text: 'Total:', bold: true, fontSize: 8 },
                      { text: 'PKR ' + this.invoice.Total.toLocaleString(), fontSize: 8, alignment: 'right'}
                    ],
                ]
            },
            layout: 'noBorders'
        },

        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
          },
          subheader: {
            fontSize: 10,
            bold: true,
           // margin: [0, 15, 0, 0],
            color: '#000000'
          },
          story: {
            italic: true,
            alignment: 'center',
            width: '50%',
          },
          backgroundcolor: ''
        }
      }
      this.pdfObj = pdfMake.createPdf(docDefinition);
      this.downloadPdf(loading);
    });

  }

  downloadPdf(loading) {
    
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
       // var blob = new Blob([buffer], { type: 'application/pdf' });
        var utf8 = new Uint8Array(buffer);
        var binaryArray = utf8.buffer;
        var blob = new Blob([binaryArray], { type: 'application/pdf' });
        const a = new Date().getTime().toString();
        this.file.writeFile(this.file.dataDirectory,  a + '.pdf', blob).then(fileEntry => {
        //  this.fileOpener.open(this.file.dataDirectory + 'Invoice.pdf', 'application/pdf');        
         });
        // this.socialSharing.share("test", null, this.file.dataDirectory + a + '.pdf', null).then(() => {
        //   loading.dismiss();
        //   console.log('social share');
        //   console.log(this.file.dataDirectory);
        //   }).catch(() => {
      
        //   });
        // tslint:disable-next-line: max-line-length
        this.socialSharing.shareViaEmail('Some message', 'Some Subject', [''],[''],[''],this.file.dataDirectory + a + '.pdf').then(() => {
            loading.dismiss();
            console.log('social share');
            console.log(this.file.dataDirectory);
            }).catch(() => {
        
            });
        
        // Save the PDF to the data Directory of our App
        // this.file.writeFile(this.file.dataDirectory, 'Invoice4.pdf', blob).then(fileEntry => {
        //  this.fileOpener.open(this.file.dataDirectory + 'Invoice.pdf', 'application/pdf');        
        // });
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }
  syncMarkeAsPaidInvoices() {
    this.syncService.syncUpdatedInvoices().then((Iids) => {
        
        Iids
         const Ids = [];
        if (Iids.length > 0) {
          for (let i=0;i<Iids.length;i++) {
            Ids.push(Iids[i].Iid);
          }
          const url = this.databaseprovider.getURL();
        
        console.log('ids:' + Ids);
        ;
       this.nativeHttp.setDataSerializer("json");
       
          let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncMarkAsPaidIvoices',
            "invoices": Iids
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
             alert('success');
           // alert(g.success);
            this.syncService.updateSyncedInvoices(Ids).then((data) => {
              console.log('It Worked');
            });

         // this.initializeItems();
        }

        
      });
    }
     
    });
  }
  confirmPaid() {
    this.showALert1('','','Are you sure, you want to make this invoice as Paid?');

  }
  showALert1(head, sub, msg) {
    this.alrtCtrl.create({
    header: head,
    subHeader: sub,
    message: msg,
    cssClass: 'alertSize',
    buttons: [
      {
        text: 'Exit',
        cssClass: 'customClass',
        role: 'cancel',
        handler: () => {
        }
      },
       {
        text: 'Paid',
        handler: () => {

          this.markAsPaid();
        }
      }
    ]
  }).then(alert => alert.present());
}
async editOrder() {
  if (this.subtotal > 0) {
    let loading = await this.loadingController.create();
    await loading.present();
    if (this.invoice.clientSync === 1) {
      this.invoice.clientSync = 2;
    }
    // if (this.invoice.vendorSync === 1) {
    //   this.invoice.vendorSync = 2;
    // }
    if (this.invoice.Sync === 1) {
      this.invoice.Sync = 2;
    }
  
    for(let i = 0;i<this.items.length;i++) {
      if(this.items[i].Sync === 1) {
        this.items[i].Sync = 2;
      }
    }
    const itemsArray = [];
    for(let i = 0;i<this.items.length;i++) {
      const  a = {
        Iiid: parseInt(this.items[i].Iiid),
        Id: parseInt(this.items[i].Id),
        Qty: this.items[i].Qty,
        CostPrice: this.items[i].CostPrice,
        stock : (this.items[i].temp - this.items[i].Qty) * (-1),
        Sync: this.items[i].Sync
      };
      itemsArray.push(a);
    }
    itemsArray;
    this.total = this.subtotal - this.discount;
    const CustomerBalance = this.total - this.tempTotal;
    this.invoice.Iid ;
    this.selectedClientID;
    this.created;
    this.duedate;
    itemsArray;
    this.subtotal; 
    this.discount;
    this.message;
    this.Status;
    CustomerBalance;

    
    // alert('editO')
    this.syncService.updateOrder(this.invoice.Iid , '113008225657937776461', this.selectedClientID,'INV01', this.created, 'ISL', this.duedate, itemsArray, this.subtotal, this.discount, this.subtotal - this.discount, this.message, this.Status,CustomerBalance, this.invoice.clientSync, this.invoice.Sync)
    .then(data => {
      this.events.publish('refreshClients', 'saad2', '');
      this.databaseprovider.setupdateinvoice(1);
      this.databaseprovider.setupdateclientLeger(1);
      loading.dismiss();
      this.router.navigate(['/menu/invoice']);
      //this.AddLog();
      if (this.network.type === 'none') {

      } else {

       setTimeout(() =>
       this.syncUpdatedOrder()
       , 1000)
      }

    });

    ;
  } else {
    alert('The price for the item(s) can not be 0');
  }
 
}
clearVal(item)
{
  if(item.Qty==0){
    item.Qty=" ";
  }
}
clearVal1(item)
{
  if(item.CostPrice==0){
    item.CostPrice=" ";
  }
}
editClicked() {
  this.edit = 1;
}
// updateItem(searchbar, item) {
  
//   const x = item.CostPrice * item.Qty;
//   this.subtotal = this.subtotal - x;
//   const q = searchbar.srcElement.value;
//   const b = q * item.CostPrice;
//   this.subtotal = this.subtotal + b;
//   this.total = this.subtotal - this.discount;

// }
updateItem(searchbar, item) {
  
  debugger

  const temp = item.Qty;
  const q = searchbar.srcElement.value;
  if (q <= parseInt(item.Instock)) {
    debugger
    if (item.Star === 1) {
      item.Star = 0;
      this.outOfStockItems = this.outOfStockItems - 1;
    }
    const x = item.CostPrice * item.Qty;
    this.subtotal = this.subtotal - x;
    const b = q * item.CostPrice;
    this.subtotal = this.subtotal + b;
    this.total = this.subtotal - this.discount;
  } else {
    debugger
    if (item.Star === 0) {
      item.Star = 1;
      this.outOfStockItems = this.outOfStockItems + 1;
      
    }
    const x = item.CostPrice * item.Qty;
    this.subtotal = this.subtotal - x;
    const b = q * item.CostPrice;
    this.subtotal = this.subtotal + b;
    this.total = this.subtotal - this.discount;
    this.showToast();
  }

}

syncUpdatedOrder() {
  this.syncService.syncUpdatedOrder().then((data) => {
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
          'Name': 'syncUpdatedInvoices',
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
          // alert('success1');
          this.syncService.updateSyncedInvoices(IDs).then((data) => {
          });
          this.syncService.syncUpdatedInvoicesItems().then((data) => {
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
                  'Name': 'syncUpdatedInvoicesItems',
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
                  // alert('success2');
                  this.syncService.updateSyncedInvoicesItems(IDs).then((data) => {
                  });
                  
                  this.syncService.syncDeletedLedger().then((data) => {
                    // alert('syncdeletedledger')
                    if (data.length > 0) {
                      const IDs = [];
                      for (let i = 0; i < data.length; i++) {
                         IDs[i] = data[i].Oid;
                      }
                      const url = this.databaseprovider.getURL();
                    
                      ;
                     this.nativeHttp.setDataSerializer("json");
          
                      let nativeCall = this.nativeHttp.post(url , 
                        {
                          'Name': 'syncDeletedLedger',
                          "Ledgers": data
                        } , 
                        {
                          'Content-Type': 'application/json',
                          'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                   
                      from(nativeCall).pipe(
                        finalize(() =>{} )
                      )
                      .subscribe(data => {
                        // alert('hurreh')
                        
                        console.log('Native data:',data);
                        const g = JSON.parse(data.data);
                        
                        if(g.success === 1) {
                          // alert('deleted Ledger');//2
                          this.syncService.updatedSyncedDeletedLedger(IDs).then((data) => {
                          });
                        } else {
                           // alert('failed');
                        }
          
                       // this.initializeItems();
                      },err =>{
                        console.log('JS call error',err);
                        const error = JSON.parse(err.error);
                        // alert(error.message);
                        console.log('Native data:',JSON.parse(error));
                      });

                      
                    }

                  }).then(data4 => {
                    // setTimeout(() =>
                    //   this.syncUpdatedOrder()
                    //        , 1000)
                           
                   
                    
                    }).then(() => {
                      this.syncService.syncUpdatedClients().then((data) => {
                        if(data.length > 0) {
                          const IDs = [];
                          for (let i = 0; i < data.length; i++) {
                             IDs[i] = data[i].Cid;
                          }
                          const url = this.databaseprovider.getURL();
                        
                          ;
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
                              // alert('success4' );
                              this.syncService.updateSyncedClients(IDs).then((data) => {
                              });
                            } else {
                              // alert('failed');
                            }
                  
                           // this.initializeItems();
                          },err =>{
                            console.log('JS call error',err);
                            const error = JSON.parse(err.error);
                            //alert(error.message);
                            console.log('Native data:',JSON.parse(error));
                          });
                  
                        }
                      });
                    }).then(() => {
                      // this.syncVendorsdata();
                      setTimeout(() =>
                      this.syncLedger()
                      , 1000)
                    });
                  // });
                } else {
                  // alert('failed');
                }
  
               // this.initializeItems();
              },err =>{
                console.log('JS call error',err);
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
        console.log('JS call error',err);
        const error = JSON.parse(err.error);
        //alert(error.message);
        console.log('Native data:',JSON.parse(error));
      });

      
    }
   
  });

}
syncLedger() {
  this.syncService.syncAddedLedger().then((data) => {
    if (data.length > 0) {
      const IDs = [];
      for (let i = 0; i < data.length; i++) {
         IDs[i] = data[i].ID;
         console.log('dara = ' + data[i].Amount);
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
        finalize(() => {} )
      )
      .subscribe(datal => {

        console.log('debuh: ', datal);
        const g = JSON.parse(datal.data);
        if(g.success === 1) {
          //  alert('success3');
           this.syncService.updateSyncedAddedLedger(IDs).then((data) => {
           });
        } else {
           // alert('failed');
        }

       // this.initializeItems();
      },err =>{
        console.log('JS call error',err);
        const error = JSON.parse(err.error);
        // alert(error.message);
        console.log('Native data:',JSON.parse(error));
      });

      
    }
  });

}
}
