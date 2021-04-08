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
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-podetails',
  templateUrl: './podetails.page.html',
  styleUrls: ['./podetails.page.scss'],
})
export class PodetailsPage implements OnInit {

  message = '';
  client = 'Vendor';
  subtotal = 0;
  discount = 0;
  total = 0;
  payed = 0;
  duepayment =0;
  currentDate = new Date().toString();
  url;
  data = [
    // {
    //   no: '1',
    //   date: '10/28/2019',
    //  amount: '10.00'
    //  }
];
  Date = '';
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
      Sync: 0
    }
  ];
  PO = { 
    Address: '',
    Date: '',
    Email: '',
    ID: '',
    Name: '',
    Phone: '',
    ReceivedBy: '',
    Remarks: ' ',
    Discount: '',
    Total: '',
    VendorID: '',
    Active: 0
  };
  prev = '';
  a = 0;
  initialQty = [];
  usdId:any;
  acttype:any;
  lgdate:any;
  name:any;
  tblId:any;
  tblName:any;
  tempTotal = 0;
  addedItems = [];
  remainingItems = [];
  info3:any;
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
    private callnumber: CallNumber,
    private sms: SMS,
    private socialSharing: SocialSharing,
    private nav: NavController,


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
    // this.getAllClients();
    this.getAllVendors();
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.PO !== 'undefined') {
        debugger;
        this.events.publish('refreshLogs', 'saad2', '');
        this.events.publish('refreshPOS', 'saad2', '');
        this.PO = this.router.getCurrentNavigation().extras.state.PO;
        this.prev = this.router.getCurrentNavigation().extras.state.url;
        this.selectedVendorID = this.PO.VendorID;
        this.selectedVendorName = this.PO.Name;
        this.client = this.PO.Name;
        this.info3=this.PO.Address;
        if(this.PO.Remarks!=null)
        {
        this.message = this.PO.Remarks;
        }
        this.Date = this.PO.Date;
        this.discount = parseInt(this.PO.Discount);
        this.subtotal = parseInt(this.PO.Total) + parseInt( this.PO.Discount);
        this.total = parseInt(this.PO.Total);
        this.tempTotal = parseInt(this.PO.Total);
        this.items = this.router.getCurrentNavigation().extras.state.Items;
        debugger

        for(let i =0;i<this.items.length;i++) {
          if (this.items[i].Qty > 0) {
            this.addedItems.push(this.items[i]);
          } else {
            this.remainingItems.push(this.items[i]);
          }
  
        }
       // this.initialQty = this.router.getCurrentNavigation().extras.state.Items;
        for(let i =0;i<this.items.length;i++) {
          this.items[i].Qty = parseInt(this.items[i].Qty);
         // this.initialQty[i].Qty = parseInt(this.items[i].Qty);
          this.items[i].CostPrice = parseInt(this.items[i].CostPrice);
          this.items[i]['stock'] = 0;
          this.items[i]['temp'] = parseInt(this.items[i].Qty);

        }
        if (this.network.type === 'none') {
       
        }else {
          debugger
          this.syncdelPOS();
          
        }
        debugger
      }
    }
   }

  ngOnInit() {
  }
  back() {
    // this.router.navigate(['invoicedetails']);
   // this.location.back();

   if (this.PO.Active === 1 && (this.tempTotal !== this.total)) {
    this.showALert('','','Save this purchase order?');
   } else {
     this.databaseprovider.setupdatePOS(1);
     this.nav.navigateRoot(this.prev);
    // this.location.back();
   }
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
            // this.savePO();
            this.updatePO();
          } else {
            alert('Kindly select Vendor');
          }

        }
      }
    ]
  }).then(alert => alert.present());
}
share() {
  const msg = 'Save <br/><br/> Preview <br/><br/> Email <br/><br/> Share <br/><br/> Add Credits <br/><br/> Print ';
  // this.shareALert('','','');
   this.saveALert('','','Are you sure you want to update PO?')
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
          this.updatePO();
        } else {
          alert('Kindly select Vendor');
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
  
  const navigationExtras: NavigationExtras = {
    state: {
      url: this.url
    }
  };
  this.router.navigate(['add-client-clients'], navigationExtras);
}
addItem() {
  const navigationExtras: NavigationExtras = {
    state: {
      url: this.url
    }
  };
  this.router.navigate(['add-item/additem-items'], navigationExtras);
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
// addItemafter() {
//   this.databaseprovider.saveArray(this.selectedItems);
//   this.router.navigate(['add-item/additem-items']);
// }
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
  this.message = 'Thanks for your business';
  this.client = 'Vendor';
  this.tempActiveItems = [];

  this.databaseprovider.setItemUrl('');
}
// removeSelected(pos) {
//   debugger;
//   this.selectedItems.splice(pos,1);
//   debugger

// }

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

         this.selectedVendorName = fields[0];
         this.client = this.selectedVendorName;
         this.selectedVendorID = fields[1];
        
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
        'Name': 'getAllVendors',
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
            value: this.vendors[i].Name+','+this.vendors[i].ID
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
      //this.getAllItems();
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
    this.subtotal = this.subtotal + (1 * item.CostPrice);
    this.total = this.subtotal - this.discount;
    debugger
    
  }
  quantityDecrement(item) {
    if(item.Qty > 0) {
      this.subtotal = this.subtotal - (1 * item.CostPrice);
      this.total = this.subtotal - this.discount;
      item.Qty = item.Qty - 1;

    }
    debugger
  }
  change() {
    
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
          text: 'Ok',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
        // {
        //   text: 'Submit',
        //   handler: data => {
        //    console.log(data);
        //    this.message = data.Message;
        //   }
        // }
      ]
    }).then(alert => alert.present());
  }
  async savePO() {
    let loading = await this.loadingController.create();
    await loading.present();
    this.Date;
    this.selectedVendorID;
    this.tempActiveItems
    this.discount
    this.total;
    this.message;
    this.items;
    for(let i = 0;i<this.tempActiveItems.length;i++) {
      if(this.tempActiveItems[i].Sync === 1) {
        this.tempActiveItems[i].Sync = 2;
      }
    }
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
    debugger
    const url = this.databaseprovider.getURL();

    this.nativeHttp.setDataSerializer("json");
    
    let nativeCall = this.nativeHttp.post(url + '/updatePO.php',
    {
      "PoId": this.PO.ID,
      "VendorID": this.selectedVendorID,
      "Date": this.Date,
      "ReceivedBy": "rizwanali",
      "Total": this.subtotal - this.discount,
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
    },err =>{
      console.log('JS call error',err);
    });
  }
  updatePO() {
    for(let i = 0;i<this.items.length;i++) {
      if(this.items[i].Sync === 1) {
        this.items[i].Sync = 2;
      }
    }
    debugger
    const itemsArray = [];
    for(let i = 0;i<this.items.length;i++) {
      const  a = {
        Id: parseInt(this.items[i].Id),
        Qty: parseInt(this.items[i].Qty),
        CostPrice: parseInt(this.items[i].CostPrice),
        Stock: parseInt(this.items[i].Qty) - this.items[i].temp,
        Sync:  this.items[i].Sync
      };
    
      itemsArray.push(a);
    }
    debugger
    const VendorBalance = this.total - this.tempTotal;
    debugger
     // tslint:disable-next-line: max-line-length
    this.syncService.updatePO(this.PO.ID, this.selectedVendorID, this.Date , 'rizwanali', this.subtotal - this.discount, this.message, this.discount, itemsArray, VendorBalance)
     .then(data => {
       debugger
       this.databaseprovider.setupdatePOS(1);
       this.router.navigate(['/menu/purchased-orders']);
       if (this.network.type === 'none') {

      }else {
        debugger
        this.syncUpdatedPO();

        
      }
 
      });
  }
  discountPrompt() {
    if ( this.total > 0) {
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
  updateTotal(searchbar, item) {
    const x = item.CostPrice * item.Qty;
    this.subtotal = this.subtotal - x;
    const q = searchbar.srcElement.value;
    const b = q * item.Qty;
    this.subtotal = this.subtotal + b;
    this.total = this.subtotal - this.discount;

  }
  // updateItem(searchbar, item) {
  //   const x = item.Rate * item.Qty;
  //   this.subtotal = this.subtotal - x;
  //   const q = searchbar.srcElement.value;
  //   const b = q * item.Rate;
  //   this.subtotal = this.subtotal + b;
  //   this.total = this.subtotal - this.discount;

  // }
  getAllVendors() {
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
            value: this.vendors[i].Name + ',' + this.vendors[i].ID
          };
          this.raio.push(a);
        }
      }
      this.initializeactiveVendors();
      this.databaseprovider.setupdatevendors(0);
     // this.getAllItemsLocal();
    });
  }
  // AddLog(){
    
  //   if (this.usdId === 1) {
  //     this.acttype = 'Adnan Ali edited';
  //   } else {
  //     this.acttype = 'Test edited';
  //   }
  //   this.name = 'Purchased Order';
  //   let now = new Date().toString();
  //   const a = this.datePipe.transform(now, 'MMMM dd, yyy h:mm a');
  //   this.lgdate = 'at ' + a;
  //   this.tblName = 'tblpurchasedorder';
  //   // this.tblId = this.PO.ID;
  //   this.tblId = this.syncService.getUpdatedPOID();
  //   this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
  //   debugger
  //   this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
      
  //         console.log("Log has been added");
  //         this.syncService.syncAddedLog();
  //         //this.GetLogs();
          
  //   });
  // }
  syncUpdatedPO() {
    debugger
    this.syncService.getAlldelPOS().then((data) => {
      if (data.length > 0) {
      const url = this.databaseprovider.getURL();
  
      debugger;
     this.nativeHttp.setDataSerializer("json");
      let nativeCall = this.nativeHttp.post(url + '/delPOS.php',
      {
        "POSIDS": data
      }
      ,{
        'Content-Type':'application/json',
        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
      });
   
      from(nativeCall).pipe(
        finalize(() =>{} )
      )
      .subscribe(data => {
       // this.AddLog();
        debugger
        console.log('Native data:',data);
        const g = JSON.parse(data.data);
        if(g.success === 1) {
          // alert('success');
          this.syncService.updatedelsPOS().then((data) => {
          });

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
    
    debugger
  });
  }
  syncdelPOS() {
    this.syncService.getAlldelPOS().then((data) => {
      if (data.length > 0) {
      const url = this.databaseprovider.getURL();
  
      debugger;
     this.nativeHttp.setDataSerializer("json");
      let nativeCall = this.nativeHttp.post(url + '/delPOS.php',
      {
        "POSIDS": data
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
          this.syncService.updatedelsPOS().then((data) => {
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
    
    debugger
  });
  }
  // update(searchbar, pos) {
  //   debugger
  //   this.initialQty;
  //   let tempSubtotal = 0;
  //   const q = parseInt(searchbar.srcElement.value);
  //   // tslint:disable-next-line: prefer-for-of
  //   for (let i = 0; i < this.items.length; i++) {
  //      if (i === pos) {
  //       tempSubtotal = tempSubtotal + (this.items[i].CostPrice * q);
  //      } else {
  //       tempSubtotal = tempSubtotal + (this.items[i].CostPrice * parseInt(this.items[i].Qty));
  //      }
  //   }
  //   debugger;
  //   this.subtotal =  tempSubtotal;
  // }
  updateItem(searchbar, item) {
    debugger
    const x = item.CostPrice * item.Qty;
    this.subtotal = this.subtotal - x;
    const q = searchbar.srcElement.value;
    const b = q * item.CostPrice;
    this.subtotal = this.subtotal + b;
    this.total = this.subtotal - this.discount;

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
          console.log('Confirm Cancel');
          if(this.selectedVendorName !== '' && this.selectedVendorName.length > 0 && this.subtotal > 0) {
            // this.savePO();
            this.updatePO();
          } else {
            alert('Kindly select Vendor');
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
  debugger
  const number = this.PO.Phone.toString();
  this.callnumber.callNumber(number, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
}
Sms() {
  const number = this.PO.Phone.toString();
  this.socialSharing.shareViaSMS('', number).then(() => {
    }).catch(() => {

    });
}
copypaste(){
  console.log("1");
  this.syncService.getLedgerVendor(this.selectedVendorID);
}
}
