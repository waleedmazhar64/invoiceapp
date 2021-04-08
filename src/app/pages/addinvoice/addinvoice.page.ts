import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from "@angular/common";
import { AlertController, ToastController, LoadingController, Events, ActionSheetController, Platform, NavController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { DatabaseService} from 'src/app/services/database.service';
import { Storage } from '@ionic/storage';
import { ThrowStmt } from '@angular/compiler';
import { NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { HTTP } from '@ionic-native/http/ngx'
import { HttpClient } from '@angular/common/http';
import {  finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { SyncService } from 'src/app/services/sync.service';
import { Network } from '@ionic-native/network/ngx';


const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-addinvoice',
  templateUrl: './addinvoice.page.html',
  styleUrls: ['./addinvoice.page.scss'],
})
export class AddinvoicePage implements OnInit {
  invoice = {
    created: '',
    duedate: '',
    name: 'INV-INV1',
    terms: 'Due on Receipt'
  };
  images = [];
  message = '';
  client = 'Select Client';
  bal:any=[];
  balance:any;
  email = '';
  add1 = '';
  add2 = '';
  add3 = '';
  shippingTo = '';
  sAdd1 = '';
  sAdd2 = '';
  sAdd3 = '';
  selectedItems = [];
  selectedClient;
  subtotal = 0;
  discount = 0;
  total = 0;
  payed = 0;
  duepayment =0;
  meta_data: [];
  time = new Date();
  totalCredit = '';
  totalDebit = '';
  lastPayment = '0';
  clients = [];
  activeClients = [];
  currentDate = new Date().toString();
  raio = [];
  tempActiveClients = [];
  items = [];
  activeItems = [];
  tempActiveItems = [];
  selectedClintName = '';
  selectedClientID = 0;
  selectedClientSync = 0;
  select:any;  
  toast: any;
  info = '';
  usdId:any;
  acttype:any;
  lgdate:any;
  name:any;
  tblId:any;
  tblName:any;
  dueDate = '';
  selectedClientBalance:any;
  outOfStockItems = 0;
  currency = '';
  outStandingBalance = 0;

data = [
    // {
    //   no: '1',
    //   date: '10/28/2019',
    //  amount: '10.00'
    //  }
];
   url;
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
    private file: File,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private camera: Camera,
    private plt: Platform,
    private http: HttpClient,
    private databaseprovider: DatabaseService,
    private nativeHttp: HTTP,
    private datepicker: DatePicker,
    private syncService: SyncService,
    private network: Network,
    private nav: NavController

    

  ) {
    this.storage.get('userId').then((val)=>{
      this.usdId = val;
      console.log(this.usdId);
    });
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
          
      }
    });
    this.storage.get('duedate').then((val) => {
      this.dueDate = val;
      this.invoice.created = this.datePipe.transform(this.currentDate, 'dd MMM yyyy');
      this.time.setDate(this.time.getDate() + parseInt(this.dueDate));
      this.invoice.duedate = this.datePipe.transform(this.time, 'dd MMM yyyy');
      console.log(this.usdId);
    });
    
    storage.get('comment').then((val) => {
      if (val !== null) {
          //this.message = val;
      }
    });
    this.url = this.router.url;
    
    this.getAllClientsLocaldb();
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
     
    });
    if (this.router.getCurrentNavigation().extras.state) {
      this.message = this.router.getCurrentNavigation().extras.state.user;
    } else {
      this.message = '';
    }
    if (this.router.getCurrentNavigation().extras.state) {

      this.client = this.router.getCurrentNavigation().extras.state.name;
    }
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.meta_data !== 'undefined') {
        ;
       this.data = this.router.getCurrentNavigation().extras.state.meta_data;
       this.payed =  this.router.getCurrentNavigation().extras.state.payed;
       this.duepayment =  this.router.getCurrentNavigation().extras.state.duepayment;

      } 

    }

   }

  
  ngOnInit() {
    ;
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.ID !== 'undefined') {
        ;
        this.selectedClientID = this.router.getCurrentNavigation().extras.state.ID;
        this.selectedClintName =  this.router.getCurrentNavigation().extras.state.Name;
        this.selectedClientBalance = this.router.getCurrentNavigation().extras.state.Balance;
        this.selectedClientSync =  this.router.getCurrentNavigation().extras.state.Sync;
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
        this.invoice.duedate = this.datePipe.transform(date,'dd MMM yyyy');
       // console.log('selected:',this.myDate);
      });
    }
    
  back() {
    // this.router.navigate(['invoicedetails']);
   // this.location.back();

   this.showALert('','','Are you sure, you want to save this invoice?');
 
   }
   share() {
    const msg = 'Save <br/><br/> Preview <br/><br/> Email <br/><br/> Share <br/><br/> Add Credits <br/><br/> Print ';
    // this.shareALert('','','');
     this.saveALert('','','Are you sure, you want to save this invoice?');
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
          this.images = [];
        //  this.location.back();
          this.router.navigate(['menu/invoice']);
          console.log('Confirm Cancel');
          this.selectedItems = [];
          this.discount = 0.00;
          this.subtotal=0.00;
          this.total=0.00;
          this.images = [];
          this.message = '';
          this.client = 'Client';
          this.email = '';
          this.add1 = '';
          this.add2 = '';
          this.add3 = '';
          this.shippingTo = '';
          this.sAdd1 = '';
          this.sAdd2 = '';
          this.sAdd3 = '';
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
          if(typeof this.selectedClintName !== 'undefined' && this.selectedClintName !== '' && this.subtotal > 0) {
            // this.saveInvoice();
            this.saveInvoiceLocaldb();
          } else {
            if (typeof this.selectedClintName === 'undefined' || this.selectedClintName === '') {
              alert('Kindly select Client');
            } else {
              alert('The price for the item(s) can not be 0');
            }
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
        this.data;
        
        if(typeof this.selectedClintName !== 'undefined' && this.selectedClintName !== '' && this.subtotal > 0) {
          // this.saveInvoice();
          this.saveInvoiceLocaldb();
        } else {
          if (typeof this.selectedClintName === 'undefined' || this.selectedClintName === '') {
            alert('Kindly select Client');
          } else {
            alert('The price for the item(s) can not be 0');
          }
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

addClient() {

  
  const navigationExtras: NavigationExtras = {
    state: {
      url: this.url
    }
  };
  this.router.navigate(['add-client-clients'], navigationExtras);
}
addItem() {
  // const navigationExtras: NavigationExtras = {
  //   state: {
  //     url: this.url
  //   }
  // };
  // this.router.navigate(['add-item/additem-items'], navigationExtras);
  this.alrtCtrl.create({
    header: 'Alert',
    subHeader: '',
    message: 'Please add your item(s) to continue',
    cssClass: 'alertSize',
    buttons: [
      {
        text: 'OK',
        cssClass: 'cancel',
        role: 'cancel',
        handler: () => {
       
        }
      
      }
    ]
  }).then(alert => alert.present());
}
comment() {
  const navigationExtras: NavigationExtras = {
    state: {
      user: this.message,
      url: this.url
    }
  };
  this.router.navigate(['comment'], navigationExtras);
//  this.router.navigate(['comment']);
}
addItemafter() {
  this.databaseprovider.saveArray(this.selectedItems);
  this.router.navigate(['add-item/additem-items']);
}
editItem(item,pos) {
console.log(pos);
this.url = this.router.url;

const navigationExtras: NavigationExtras = {
  state: {
   // user: this.received
   edititem: item,
   position: pos,
   url: this.url
  }
};
this.router.navigate(['edit-item'], navigationExtras);
}
paymentInfo() {
  ;
  if(this.selectedItems.length > 0) {
    this.data;
 
    this.meta_data;
    const navigationExtras: NavigationExtras = {
      state: {
       // user: this.received
       meta_data: this.data,
       duepayment: this.duepayment,
       payed: this.payed
      }
    };
    this.router.navigate(['payment-info'], navigationExtras);
  }
  
}
openAlert() {
  if (this.raio.length > 0) {
    this.alrtCtrl.create({
      header: 'Clients',
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
            this.selectedClientID = parseInt(fields[1]);
            this.selectedClientSync = parseInt(fields[2]);
            
           
          }
        }
      ]
    }).then(alert => alert.present());
   
  } else {
    this.emptyAlert('Alert','','Please add your client(s) to continue');
  }
 
}
async getAllClients() {
  let loading = await this.loadingController.create();
    await loading.present();
    const url = this.databaseprovider.getURL();

    // let nativeCall = this.nativeHttp.get(url +'/getAllClients.php?AccountId=113008225657937776461',{},{
    //   'Content-Type':'application/json',
    //   'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
    // });
    this.nativeHttp.setDataSerializer("json");
  let nativeCall = this.nativeHttp.post(url , 
    {
      'Name': 'getAllClients',
      'AccountId': '113008225657937776461'
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
            label: this.clients[i].Fname + ' ' + this.clients[i].Lname,
            value: this.clients[i].Fname + ',' + this.clients[i].Cid
          };
          this.raio.push(a);
        }
      }
      
    //  this.selectActive();
     // ;
     // this.initializeItems();
      this.initializeactiveVendors();
      this.databaseprovider.setupdatevendors(0);
      this.getAllItems();
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
  async getAllItems() {
    let loading = await this.loadingController.create();
    await loading.present();
    const url = this.databaseprovider.getURL();

    // let nativeCall = this.nativeHttp.get(url + '/getAllItem.php?AccountId=113008225657937776461',{},{
    //   'Content-Type':'application/json',
    //   'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
    // });
    let nativeCall = this.nativeHttp.post(url , 
      {
        'Name': 'getAllItems',
        'AccountId': '113008225657937776461'
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
      this.items = g.items;
     // console.log(this.clients[0]);
      this.sortItems();
      //this.inactiveItems = [];
      this.activeItems = [];
      for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].Active === '1') {
          this.items[i]['Qty'] = 0;
          this.activeItems.push(this.items[i]);
        }
      }
     // this.initializeItems();
      this.initializeActiveItems();
      this.databaseprovider.setupdateitems(0);
      ;
    },err =>{
      console.log('JS call error',err);
    });
  }
  sortItems() {
    

    this.items = this.items.sort((a, b) => {
      if (a.Description < b.Description) {
        return -1;
      }
      if (a.Description > b.Description) {
        return 1;
      }
      return 0;
    });
  }
  initializeActiveItems(){
    this.tempActiveItems = this.activeItems;
    
  }
  quantityIncrement(item) {
    if ( item.Qty < parseInt(item.Instock) ) {
      item.Qty = item.Qty + 1;
      this.subtotal = this.subtotal + (1 * item.Rate);
      this.total = this.subtotal - this.discount;
    } else {
      
      this.showToast();
    }
  
    
  }
  quantityDecrement(item) {
    if(item.Qty > 0) {
      this.subtotal = this.subtotal - (1 * item.Rate);
      this.total = this.subtotal - this.discount;
      item.Qty = item.Qty - 1;

    }
    
  }
  change() {
    
  }
  clearAll() {
    this.discount = 0.00;
    this.subtotal=0.00;
    this.total=0.00;
    this.message = '';
    this.client = 'Select Client';
    this.tempActiveItems = [];
  
    this.databaseprovider.setItemUrl('');
  }
  clearVal(item)
  {
    if(item.Qty==0){
      item.Qty=" ";
    }
  }
  clearVal1(item)
  {
    if(item.Rate==0){
      item.Rate=" ";
    }
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
  async saveInvoice() {
    let loading = await this.loadingController.create();
    await loading.present();
   // this.order.created;
   // this.selectedVendorID;
    this.tempActiveItems
    this.discount
    this.total;
    this.message;
    
    const itemsArray = [];
    for(let i = 0;i<this.tempActiveItems.length;i++) {
      const  a = {
        Id: parseInt(this.tempActiveItems[i].itemid),
        Qty: this.tempActiveItems[i].Qty,
        CostPrice: this.tempActiveItems[i].Rate
      };
      itemsArray.push(a);
    }
    itemsArray;
    
    this.nativeHttp.setDataSerializer("json");
    const url = this.databaseprovider.getURL();

    let nativeCall = this.nativeHttp.post(url + '/addInvoice.php',
    {
      "AccountId": "113008225657937776461",
      "Cid": this.selectedClientID,
      "Name": "INV01",
      "CreateDate": this.invoice.created,
      "Terms": "Isl",
      "DueDate": this.invoice.duedate,
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
       // this.nav.navigateRoot('/menu/invoice');

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

async saveLedger(id) {
  let loading = await this.loadingController.create();
  await loading.present();
  const createDate = this.datePipe.transform(this.invoice.created, 'dd MMM yyyy');
  const duedate = this.datePipe.transform(this.invoice.duedate, 'dd MMM yyyy');

  
 this.nativeHttp.setDataSerializer("json");
 let nativeCall = this.nativeHttp.post('http://192.168.100.4/rizAdnanApp/orderPlaced.php',
 {
  "InvoiceID": id.toString(),
  "Date": createDate.toString(),
  "Amount": this.total.toString(),
  "CustomerID": this.selectedClient.id,
  "IsCredit": 0,
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
  // this.nav.navigateRoot('/menu/invoice');

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
  this.images = [];
  this.message = '';
  this.client = 'Client';
  this.email = '';
  this.add1 = '';
  this.add2 = '';
  this.add3 = '';
  this.shippingTo = '';
  this.sAdd1 = '';
  this.sAdd2 = '';
  this.sAdd3 = '';
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
  const x = item.Rate * item.Qty;
  this.subtotal = this.subtotal - x;
  const q = searchbar.srcElement.value;
  const b = q * item.Qty;
  this.subtotal = this.subtotal + b;
  this.total = this.subtotal - this.discount;

}

updateItem(searchbar, item) {
  
  

  const temp = item.Qty;
  const q = searchbar.srcElement.value;
  if (q <= parseInt(item.Instock)) {
    
    if (item.Star === 1) {
      item.Star = 0;
      this.outOfStockItems = this.outOfStockItems - 1;
    }
    const x = item.Rate * item.Qty;
    this.subtotal = this.subtotal - x;
    const b = q * item.Rate;
    this.subtotal = this.subtotal + b;
    this.total = this.subtotal - this.discount;
  } else {
    if (item.Star === 0) {
      item.Star = 1;
      this.outOfStockItems = this.outOfStockItems + 1;
      
    }
    const x = item.Rate * item.Qty;
    this.subtotal = this.subtotal - x;
    const b = q * item.Rate;
    this.subtotal = this.subtotal + b;
    this.total = this.subtotal - this.discount;
    this.showToast();
  }

}
// updateItem(searchbar, item) {
//   
//   const x = item.Rate * item.Qty;
//   this.subtotal = this.subtotal - x;
//   const q = searchbar.srcElement.value;
//   const b = q * item.Rate;
//   this.subtotal = this.subtotal + b;
//   this.total = this.subtotal - this.discount;

// }
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
async getAllClientsLocaldb() {
  let loading = await this.loadingController.create();
  await loading.present();
  this.syncService.getAllActiveClients().then((data) => {
    this.clients = data;
    this.bal=data;
    this.balance=this.bal.Balance;
    console.log(this.clients[0]);
    this.sortClients();
    this.activeClients = [];
      ;
    for(let i = 0; i < this.clients.length; i++) {
        if(this.clients[i].Active === 1) {
          this.activeClients.push(this.clients[i]);
          const a = {
            type: 'radio',
            label: this.clients[i].Fname + ' ' + this.clients[i].Lname + ' ' + this.clients[i].Shop,
            value: this.clients[i].Fname + ',' + this.clients[i].Cid + ',' + this.clients[i].Balance
          };
          this.raio.push(a);
        }
      }
      
    //  this.selectActive();
     // ;
     // this.initializeItems();
    this.initializeactiveVendors();
    this.databaseprovider.setupdatevendors(0);
    loading.dismiss();
    this.getAllItemsLocaldb();
  });
}
async getAllItemsLocaldb() {
  debugger
  let loading = await this.loadingController.create();
  await loading.present();
  this.syncService.getAllActiveItems().then((data) => {
    this.items = data;
    debugger
     // console.log(this.clients[0]);
     //this.sortItems();
     //this.inactiveItems = [];
     this.activeItems = [];
    for(let i = 0; i < this.items.length; i++) {
      if (this.items[i].Instock > 0) {
        if(this.items[i].Active === 1) {
          this.items[i]['Qty'] = 0;
          this.items[i]['Star'] = 0;
          this.activeItems.push(this.items[i]);
        }
      }
     }
     debugger
    // this.initializeItems();
    this.initializeActiveItems();
    this.databaseprovider.setupdateitems(0);
    loading.dismiss();
     ;
   },err =>{
     console.log('JS call error',err);
   });
}
AddLog(){
  
  if (this.usdId === 1) {
    this.acttype = 'You added a new';
  } else {
    this.acttype = 'You added a new';
  }
  this.name = 'Invoice';
  let now = new Date().toString();
  const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');//'MMMM dd, yyy h:mm a'
  this.lgdate = 'at ' + a;
  this.tblName = 'invoices';
  this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
  
  this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
    
        console.log("Log has been added");
        this.syncService.syncAddedLog();
        //this.GetLogs();
        
  });
}
async saveInvoiceLocaldb() {
  let loading = await this.loadingController.create();
  await loading.present();
  const itemsArray = [];
  for(let i = 0;i<this.tempActiveItems.length;i++) {
    if(this.tempActiveItems[i].Sync === 1) {
      this.tempActiveItems[i].Sync = 2;
    }
  }
  for(let i = 0;i<this.tempActiveItems.length;i++) {
    const  a = {
      Id: parseInt(this.tempActiveItems[i].itemid),
      Qty: this.tempActiveItems[i].Qty,
      CostPrice: this.tempActiveItems[i].Rate,
      Sync: this.tempActiveItems[i].Sync
    };
    itemsArray.push(a);
  }
  itemsArray;
  this.selectedClientSync;
  if (this.selectedClientSync === 1) {
    this.selectedClientSync = 2;
  }
  let now = new Date().toString();
  const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
  // tslint:disable-next-line: max-line-length
  
  this.syncService.addInvoice('113008225657937776461', this.selectedClientID, this.selectedClientSync, 'INV01', a, 'ISL', this.invoice.duedate, itemsArray, this.subtotal, this.discount, this.subtotal - this.discount, this.message, 'Pending')
  .then(data => {
    this.data
    this.tblId = data;
    this.events.publish('refreshClients', 'saad2', '');
    this.databaseprovider.setupdateinvoice(1);
    this.databaseprovider.setupdateclients(1);
    loading.dismiss();
    //this.router.navigate(['/menu/invoice']);
    this.nav.navigateRoot('/menu/invoice');

    this.AddLog();
    if (this.network.type === 'none') {
       
    }else {
      
      this.syncAddedInvoice();
    }
  });
}
syncAddedInvoice() {
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
                    this.syncService.syncUpdatedItems().then((data) => {
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
                              //alert('success');
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
}
emptyAlert(head, sub, msg) {
  this.alrtCtrl.create({
    header: head,
    subHeader: sub,
    message: msg,
    cssClass: 'alertSize',
    buttons: [
      {
        text: 'OK',
        cssClass: 'cancel',
        role: 'cancel',
        handler: () => {
       
        }
      
      }
    ]
  }).then(alert => alert.present());
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
        ;
        this.selectedItems;
        this.total;
        this.discount;
        if(typeof this.selectedClintName !== 'undefined' && this.selectedClintName !== '' && this.subtotal > 0) {
          console.log(this.selectedClientID );
          this.select=this.selectedClientID;
          /*this.syncService.getClient(this.select).then(data=>{
            ;
            console.log(data);
            this.bal=data;
    console.log(this.bal);
    this.selectedClientBalance=this.bal[0].Balance;
    console.log(this.selectedClientBalance);
      ;
      if(this.selectedClientBalance==null)
      {
        this.balance=0+this.total-this.discount;
      }
      else
      {
      this.balance=this.selectedClientBalance-this.total+this.discount;
      }
      this.updateClient();
          });*/
          this.saveInvoiceLocaldb();
        } else {
          if (typeof this.selectedClintName === 'undefined' || this.selectedClintName === '') {
            alert('Kindly select Client');
          } else {
            alert('The price for the item(s) can not be 0');
          }
        }
       


      }
    }
  ]
}).then(alert => alert.present());
}
// GetClient(){
//   this.syncService.getClient(this.selectedClientID).then(data=>{
//     console.log(data);
//   });
// }
updateClient() {
  this.syncService.updateClientBalance(this.selectedClientID,this.balance).then(data=>{
   console.log("Client Updated");
  });
}

}
