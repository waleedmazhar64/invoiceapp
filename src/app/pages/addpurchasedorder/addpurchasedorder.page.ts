import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertController, ToastController, LoadingController, Events, ActionSheetController, Platform, NavController } from '@ionic/angular';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { DatabaseService} from 'src/app/services/database.service';
import { Storage } from '@ionic/storage';
import { ThrowStmt } from '@angular/compiler';
import { NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Location } from "@angular/common";
import { from } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { SyncService } from 'src/app/services/sync.service';
import { Network } from '@ionic-native/network/ngx';



// import { type } from '';




const STORAGE_KEY = 'po_images';


@Component({
  selector: 'app-addpurchasedorder',
  templateUrl: './addpurchasedorder.page.html',
  styleUrls: ['./addpurchasedorder.page.scss'],
})
export class AddpurchasedorderPage implements OnInit {
  order = {
    created: '',
    name: 'PO1',
    terms: 'Issued'
  };
  message = '';
  client = 'Select Vendor';
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
  selectedVendorSync = 0;
  meta_data: [];
  time = new Date();
  currentDate = new Date().toString();
  usdId:any;
  acttype:any;
  lgdate:any;
  name:any;
  tblId:any;
  tblName:any;
  url;
  info = '';
  us
  data = [
    // {
    //   no: '1',
    //   date: '10/28/2019',
    //  amount: '10.00'
    //  }
];
  selectcategory = 'Select Vendor';
  selectcategory1:any;
  vendors = [];
  activeVendors = [];
  tempActiveVendors = [];
  raio = [];
  selectedVendorID = '';
  selectedVendorName = '';
  items = [];
  activeItems = [];
  tempActiveItems = [
    {
      itemid: '',
      AccountId: '',
      Description: '',
      Rate: 0,
      Cost:  0,
      Active: '',
      Qty: 0,
      Sync: 0,
    }
  ];
  currency = '';
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
    private alertCtrl: AlertController,
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
          debugger
      }
    });
    debugger
    this.url = this.router.url;
    this.order.created = this.datePipe.transform(this.currentDate, 'dd MMM yyyy');
    const a ='menu'+this.router.url;
    // this.getAllClients();
    this.getAllVendors();

    debugger
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
     // this.clearAll();
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
        debugger;
       this.data = this.router.getCurrentNavigation().extras.state.meta_data;
       this.payed =  this.router.getCurrentNavigation().extras.state.payed;
       this.duepayment =  this.router.getCurrentNavigation().extras.state.duepayment;

        if (this.network.type === 'none') {
      }else {
        debugger
        this.syncAddedVendors();
        this.syncAddedItems();
      }

      }

    }
   
    debugger;
  }
  ngOnDestroy(){
   
  }


  ngOnInit() {
    debugger
    //this.getAllItems();
    //this.tempActiveItems = this.databaseprovider.getActiveItemsList();
    debugger
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.ID !== 'undefined') {
        // this.getAllVendors();
        // this.getAllItemsLocal();
        this.selectedVendorID = this.router.getCurrentNavigation().extras.state.ID;
        this.selectedVendorName = this.router.getCurrentNavigation().extras.state.Name;
        if (this.selectedVendorName !== '') {
          this.client = this.router.getCurrentNavigation().extras.state.Name;
        }
        this.info  = this.router.getCurrentNavigation().extras.state.info;
       // this.activeItems =  this.router.getCurrentNavigation().extras.state.items;
        //this.initializeActiveItems();

      }
    }
  
  }

  
  orderInfo() {
    debugger;
    const navigationExtras: NavigationExtras = {
      state: {
       // user: this.received
       order: this.order
      }
    };
    this.router.navigate(['purchase-order-info'], navigationExtras);
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

  back() {
    // this.router.navigate(['invoicedetails']);
   // this.location.back();

   this.showALert('', '' ,'Save this purchase order?');

   }
   showALert(head, sub, msg) {
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
        //  this.location.back();
        this.clearAll();
          this.router.navigate(['menu/purchased-orders']);
          console.log('Confirm Cancel');
          this.clearAll();
          debugger

        }
      },
       {
        text: 'Save',
        handler: () => {
          console.log('Confirm Ok');
          if(this.selectedVendorName !== '' && this.selectedVendorName.length > 0 && this.subtotal > 0) {
            //this.savePO();
            this.savePOLocaldb();
          } else {
            if (this.selectedVendorName === '' || this.selectedVendorName.length === 0) {
              alert('Kindly select Vendor');
            } else {
              alert('The price for the item(s) can not be 0');
            }
            
          }


        }
      }
    ]
  }).then(alert => alert.present());
}
share() {
  const msg = 'Save <br/><br/> Preview <br/><br/> Email <br/><br/> Share <br/><br/> Add Credits <br/><br/> Print ';
   // this.shareALert('','','');
   this.saveALert('','','Are you sure you want to save?')
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
        console.log('Confirm Cancel');
        if(this.selectedVendorName !== '' && this.selectedVendorName.length > 0 && this.subtotal > 0) {
          // this.savePO();
          this.savePOLocaldb();
        } else {
          if (this.selectedVendorName === '' || this.selectedVendorName.length === 0) {
            alert('Kindly select Vendor');
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
        console.log('Confirm Cancel');
      }
    },
    {
      text: 'Email',
      cssClass: 'alert-button-inner',
      handler: () => {
        console.log('Confirm Cancel');
      }
    },
    {
      text: 'Share',
      cssClass: 'alert-button-inner',
      handler: () => {
        console.log('Confirm Cancel');
      }
    },
    {
      text: 'Cancel',
      cssClass: 'cancel',
      handler: () => {
        console.log('Confirm Cancel');
      }
    },
  ]
}).then(alert => alert.present());
}

addClient() {
  this.databaseprovider.saveActiveItemsList(this.tempActiveItems);
  const navigationExtras: NavigationExtras = {
    state: {
      ID: this.selectedVendorID,
      Name: this.selectedVendorName,
      info: this.info,
      items: this.tempActiveItems
    }
  };
  this.router.navigate(['addvendor'], navigationExtras);
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
clearAll() {
  this.discount = 0.00;
  this.subtotal=0.00;
  this.total=0.00;
  this.message = '';
  this.client = 'Vendor';
  this.tempActiveItems = [];

  this.databaseprovider.setItemUrl('');
}
removeSelected(pos) {
  debugger;
  this.selectedItems.splice(pos,1);
  debugger

}

openAlert() {
  debugger
  if (this.raio.length > 0) {
    debugger
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
   
            this.selectedVendorName = fields[0];
            this.client = this.selectedVendorName;
            this.selectedVendorID = fields[1];
            this.selectedVendorSync = parseInt(fields[2]);
            debugger
           
          }
        }
      ]
    }).then(alert => alert.present());
  } else {
    debugger
       this.emptyAlert('Alert', '' , 'Please add your vendor(s) to continue');
  }


}
async getAllClients() {
  let loading = await this.loadingController.create();
    await loading.present();
    const url = this.databaseprovider.getURL();

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
      this.vendors = g.vendors;
      console.log(this.vendors[0]);
      this.sortClients();
      this.activeVendors = [];
      for(let i = 0; i < this.vendors.length; i++) {
        if(this.vendors[i].bActive === '1') {
          this.activeVendors.push(this.vendors[i]);
          const a = {
            type: 'radio',
            label: this.vendors[i].Name,
            value: this.vendors[i].Name + ',' + this.vendors[i].ID
          };
          this.raio.push(a);
        }
      }
      debugger
    //  this.selectActive();
     // debugger;
     // this.initializeItems();
      this.initializeactiveVendors();
      this.databaseprovider.setupdatevendors(0);
      this.getAllItems();
    },err =>{
      console.log('JS call error',err);
    });

  }
  sortClients() {

    debugger;
    this.vendors = this.vendors.sort((a, b) => {
      if (a.Name < b.Name) {
        return -1;
      }
      if (a.Name > b.Name) {
        return 1;
      }
      return 0;
    });
  }
  initializeactiveVendors(){
    this.tempActiveVendors = this.activeVendors;
  }
  async getAllItems() {
    let loading = await this.loadingController.create();
    await loading.present();
    const url = this.databaseprovider.getURL();

    this.nativeHttp.setDataSerializer("json");

    let nativeCall = this.nativeHttp.post(url , 
      {
        'Name': 'getAllItem',
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
      debugger;
    },err =>{
      console.log('JS call error',err);
    });
  }
  sortItems() {
    debugger

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
    debugger
  }
  quantityIncrement(item) {
    item.Qty = item.Qty + 1;
    this.subtotal = this.subtotal + (1 * item.Rate);
    this.total = this.subtotal - this.discount;
    debugger
  }
  quantityDecrement(item) {
    if(item.Qty > 0) {
      this.subtotal = this.subtotal - (1 * item.Rate);
      this.total = this.subtotal - this.discount;
      item.Qty = item.Qty - 1;

    }
    debugger
  }
  change() {
    
  }
  discountPrompt() {
    debugger
    if ( this.subtotal > 0) {
      this.alertCtrl.create({
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
  async savePO() {
    let loading = await this.loadingController.create();
    await loading.present();
    this.order.created;
    this.selectedVendorID;
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
    debugger
    this.nativeHttp.setDataSerializer("json");
    const url = this.databaseprovider.getURL();

    let nativeCall = this.nativeHttp.post(url + '/addPurchasedOrder.php',
    {
      "VendorID": this.selectedVendorID,
      "Date": this.order.created,
      "ReceivedBy": "rizwanali",
      "Total": this.total,
      "Remarks": this.message,
      "Discount": this.discount,
      "Items": itemsArray
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
        this.databaseprovider.setupdatePOS(1);
        this.router.navigate(['/menu/purchased-orders']);
      }
     // this.databaseprovider.setupdateitems(0);
    },err =>{
      console.log('JS call error',err);
    });
  }
  presentPrompt() {
    this.alertCtrl.create({
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
    debugger
    const x = item.Cost * item.Qty;
    this.subtotal = this.subtotal - x;
    const q = searchbar.srcElement.value;
    const b = q * item.Qty;
    this.subtotal = this.subtotal + b;
    this.total = this.subtotal - this.discount;

  }
  updateItem(searchbar, item) {
    const x = item.Cost * item.Qty;
    this.subtotal = this.subtotal - x;
    const q = searchbar.srcElement.value;
    const b = q * item.Cost;
    this.subtotal = this.subtotal + b;
    this.total = this.subtotal - this.discount;

  }
  savePOLocaldb() {
    const itemsArray = [];
    for(let i = 0;i<this.tempActiveItems.length;i++) {
      if(this.tempActiveItems[i].Sync === 1) {
        this.tempActiveItems[i].Sync = 2;
      }
      const  a = {
        Id: parseInt(this.tempActiveItems[i].itemid),
        Qty: this.tempActiveItems[i].Qty,
        CostPrice: this.tempActiveItems[i].Cost,
        Sync: this.tempActiveItems[i].Sync
      };
      itemsArray.push(a);
    }
    debugger
    if (this.selectedVendorSync === 1) {
      this.selectedVendorSync = 2;
    }
    this.selectedVendorSync
    debugger
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    // alert('vendorID = ' + this.selectedVendorID)
    // tslint:disable-next-line: max-line-length
    this.syncService.addPO(this.selectedVendorID, this.selectedVendorSync, a , 'rizwanali', this.subtotal - this.discount, this.message, this.discount, itemsArray)
     .then(data => {
       debugger
       data;
       this.tblId = data;

       this.databaseprovider.setupdatePOS(1);
       this.databaseprovider.setupdatevendors(1);
      //  this.router.navigate(['/menu/purchased-orders']);
       this.nav.navigateRoot('/menu/purchased-orders');
       this.AddLog();
       if (this.network.type === 'none') {
       
      } else {
        debugger
        this.syncAddedPOs();
      }
 
     });
  }
  async getAllVendors() {
    let loading = await this.loadingController.create();
    await loading.present();
    this.syncService.getAllActiveVendors().then((data) => {
      this.vendors = data;
      this.sortClients();
      this.activeVendors = [];
      for(let i = 0; i < this.vendors.length; i++) {
        if(this.vendors[i].bActive === 1) {
          this.activeVendors.push(this.vendors[i]);
          const a = {
            type: 'radio',
            label: this.vendors[i].Name,
            value: this.vendors[i].Name + ',' + this.vendors[i].ID + ',' + this.vendors[i].Sync
          };
          this.raio.push(a);
        }
      }
      this.initializeactiveVendors();
      this.databaseprovider.setupdatevendors(0);
      loading.dismiss();
      this.getAllItemsLocal();
    });
  }
  AddLog(){
  
    if (this.usdId === 1) {
      this.acttype = 'You  added a new';
    } else {
      this.acttype = 'You added a new';
    }
    this.name = 'Purchased Order';
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.tblName = 'tblpurchasedorder';
    this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
    debugger
    this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
      
          console.log("Log has been added");
          this.syncService.syncAddedLog();
          //this.GetLogs();
          
    });
  }
  async getAllItemsLocal() {
    let loading = await this.loadingController.create();
    await loading.present();
    this.syncService.getAllActiveItems().then((data) => {
      this.items = data;
     // this.sortItems();
      this.activeItems = [];
      for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].Active === 1) {
          this.items[i]['Qty'] = 0;
          this.activeItems.push(this.items[i]);
        }
      }
     // this.initializeItems();
      this.initializeActiveItems();
      this.databaseprovider.setupdateitems(0);
      loading.dismiss();
      
  });
  }
  syncAddedVendors() {
    this.syncService.syncAddedVendors().then((data) => {
      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].ID;
        }
        const url = this.databaseprovider.getURL();
      
        debugger;
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
           // alert('success');
            this.syncService.updateSyncedVendors(IDs).then((data) => {
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

        debugger
      }
     
    });
  }
  syncAddedItems() {
    this.syncService.syncAddedItems().then((data) => {
      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].itemid;
        }
        const url = this.databaseprovider.getURL();
    
        debugger;
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
            // alert('success');
            this.syncService.updateSyncedItems(IDs).then((data) => {
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
      
      debugger
    });
  }
  syncAddedPOs() {
    this.syncService.syncAddedPOS().then((data) => {
      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].ID;
        }
        const url = this.databaseprovider.getURL();
      
        debugger;
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
            // alert('success');
            this.syncService.updateSyncedPOS(IDs).then((data) => {
            });
            this.syncService.syncAddedPOsItems().then((data) => {
              if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                   IDs[i] = data[i].ID;
                }
                const url = this.databaseprovider.getURL();
              
                debugger;
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
                    //alert('success');
                    this.syncService.updateSyncedPOSItems(IDs).then((data) => {
                    });
                  } else {
                     //alert('failed');
                  }
    
                 // this.initializeItems();
                },err =>{
                  console.log('JS call error',err);
                  const error = JSON.parse(err.error);
                  // alert(error.message);
                  console.log('Native data:',JSON.parse(error));
                });
    
                debugger
              }
             
            }).then(data4 => {
              this.syncService.syncUpdatedItems().then((data) => {
                if (data.length > 0) {
                  const IDs = [];
                  for (let i = 0; i < data.length; i++) {
                     IDs[i] = data[i].itemid;
                  }
                  const url = this.databaseprovider.getURL();
              
                  debugger;
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
                
                debugger
              }).then(() => {
                this.syncService.syncUpdatedVendors().then((data) => {
                  if (data.length > 0) {
                    const IDs = [];
                    for (let i = 0; i < data.length; i++) {
                       IDs[i] = data[i].ID;
                    }
                    const url = this.databaseprovider.getURL();
                  
                    debugger;
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
                      finalize(() =>{} )
                    )
                    .subscribe(data => {
                      console.log('Native data:',data);
                      const g = JSON.parse(data.data);
                      if(g.success === 1) {
                       // alert('success');
                        this.syncService.updateSyncedVendors(IDs).then((data) => {
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
            
                    debugger
                  }
                 
                });
              }).then(() => {
                this.syncService.syncAddedLedgerVendor().then((data) => {
                  if (data.length > 0) {
                    const IDs = [];
                    for (let i = 0; i < data.length; i++) {
                       IDs[i] = data[i].ID;
                    }
                    const url = this.databaseprovider.getURL();
                  
                    debugger;
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
                       // alert('success');
                        this.syncService.updateSyncedAddedLedgerVendors(IDs).then((data) => {
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
        
                    debugger
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

        debugger
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
  update(searchbar, pos) {
    debugger
    let tempSubtotal = 0;
    const q = parseInt(searchbar.srcElement.value);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.tempActiveItems.length; i++) {
       if (i === pos) {
        tempSubtotal = tempSubtotal + (this.tempActiveItems[i].Rate * q);
       } else {
        tempSubtotal = tempSubtotal + (this.tempActiveItems[i].Rate * this.tempActiveItems[i].Qty);
       }
    }
    debugger;
    this.subtotal =  tempSubtotal;
  }
  saveALert(head, sub, msg) {
    this.alrtCtrl.create({
    header: head,
    subHeader: sub,
    message: msg,
    cssClass: 'alertSize',
    buttons: [
      {
        text: 'Cancel',
        cssClass: 'customClass',
        role: 'cancel',
        handler: () => {
        //  this.location.back();
     

        }
      },
       {
        text: 'Save',
        handler: () => {
          console.log('Confirm Ok');
          if(this.selectedVendorName !== '' && this.selectedVendorName.length > 0 && this.subtotal > 0) {
            //this.savePO();
            this.savePOLocaldb();
          } else {
            if (this.selectedVendorName === '' || this.selectedVendorName.length === 0) {
              alert('Kindly select Vendor');
            } else {
              alert('The price for the item(s) can not be 0');
            }
            
          }


        }
      }
    ]
  }).then(alert => alert.present());
}
onChange(selected) {
   
  var fields = selected.split(',');
  this.selectedVendorName = fields[0];
  this.client = this.selectedVendorName;
  this.selectedVendorID = fields[1];
  this.selectedVendorSync = parseInt(fields[2]);

}
}

