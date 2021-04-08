import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController, Platform, LoadingController, NavController, Events } from '@ionic/angular';
import { DatabaseService} from 'src/app/services/database.service';
import { HTTP } from '@ionic-native/http/ngx';
import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { SyncService } from 'src/app/services/sync.service';
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-menu-itemdetails',
  templateUrl: './menu-itemdetails.page.html',
  styleUrls: ['./menu-itemdetails.page.scss'],
})
export class MenuItemdetailsPage implements OnInit {
  id;
  tblName:any="items";
  tblId:any;
  usdId:any;
  acttype:any="deactivated";
  lgdate:any="2019-11-21";
  name: any;
  prev = '';
  item = {
    itemid: '',
    AccountId: '',
    Description: '',
    Rate: '',
    Cost: '',
    Active: '',
    Instock: 0,
    Sync: 0
  };
  currency = '';
  showEdit = 0;
  constructor(
    private router: Router,
    private location: Location,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private databaseservice: DatabaseService,
    private nativeHttp: HTTP,
    private alrtCtrl: AlertController,
    private syncService: SyncService,
    private network: Network,
    private storage:Storage,
    private datePipe: DatePipe,
    private nav: NavController,
    private events: Events,

  ) {
    this.storage.get('app').then((val1) => {
      if (val1 === 'invoice') {
        this.storage.get('ID').then((val) => {
          this.syncService.getbValue(val, 'Item Edit').then((data) => {
            this.showEdit = data[0].bValue;
          });
        });
      } else {
        this.showEdit = 1;
      }
    });
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
      }
    });
    if (this.router.getCurrentNavigation().extras.state) {
      this.events.publish('refreshLogs', 'saad2', '');
      this.item = this.router.getCurrentNavigation().extras.state.edititem;
      this.id = this.router.getCurrentNavigation().extras.state.edititem.id;
      this.prev = this.router.getCurrentNavigation().extras.state.url;
      if (this.network.type === 'none') {

      }else {
        this.syncAddedItems();

      }

    }
    this.storage.get('userId').then((val)=>{
      this.usdId=val;
      console.log(this.usdId);
    });
    this.getformattedDate();
   }
   getformattedDate()
   {
      var dateObj=new Date();

      var year= dateObj.getFullYear().toString();
      var month= dateObj.getMonth().toString();
      var date= dateObj.getDate().toString();
      var monthArray=['01','02','03','04','05','06','07','08','09','10','11','12'];
      var hour=dateObj.getHours();
      var min=dateObj.getMinutes();
      var sec=dateObj.getSeconds();
      this.lgdate=date+'/'+monthArray[month]+'/'+year+'  '+hour+':'+min+':'+sec;
      console.log(this.lgdate);

   }
  ngOnInit() {
  }
  back() {
    this.nav.navigateRoot(this.prev);
   // this.location.back();
  }
  edit() {
    const navigationExtras: NavigationExtras = {
      state: {
        edititem: this.item
      }
    };
    this.router.navigate(['menu-edititem'], navigationExtras);

  }
  shareALert(head, sub, msg) {
    this.alrtCtrl.create({
      header: head,
      subHeader: sub,
      message: msg,
      cssClass: 'alertSize',
      buttons: [
        {
          text: 'Delete',
          cssClass: 'customClass',
          role: 'cancel',
          handler: () => {
             console.log('yes')
            // this.deleteItem();
             this.deleteItemlocaldb();
          }
        },
         {
          text: 'Cancel',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    }).then(alert => alert.present());
  }

  del() {
    this.shareALert("Warning",'','Are you sure you want to delete this item?');
  }
  async deleteItem() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const url = this.databaseservice.getURL();
    debugger;
   this.nativeHttp.setDataSerializer("json");
    let nativeCall = this.nativeHttp.post(url + '/deleteItem.php',
    {
      "itemid": this.item.itemid
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
      this.databaseservice.setupdateitems(1);
      this.router.navigate(['/menu/items']);

 
     // this.initializeItems();
    },err =>{
      loading.dismiss();
      console.log('JS call error',err);
      const error = JSON.parse(err.error);
      alert(error.message);
      console.log('Native data:',JSON.parse(error));
    });
  }
  activateALert(head, sub, msg) {
    this.alrtCtrl.create({
      header: head,
      subHeader: sub,
      message: msg,
      cssClass: 'alertSize',
      buttons: [
        {
          text: 'Activate',
          cssClass: 'cancel',
          role: 'cancel',
          handler: () => {
             console.log('yes')
           //  this.activateItem();
             this.activateItemlocaldb();
          }
        },
         {
          text: 'Cancel',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    }).then(alert => alert.present());
  }

  activate() {
    this.activateALert("Warning",'','Are you sure you want to activate this item?');

  }
  async activateItem() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const url = this.databaseservice.getURL();

    debugger;
   this.nativeHttp.setDataSerializer("json");
    let nativeCall = this.nativeHttp.post(url + '/activateItem.php',
    {
      "itemid": this.item.itemid
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
      this.databaseservice.setupdateitems(1);
      this.router.navigate(['/menu/items']);

 
     // this.initializeItems();
    },err =>{
      loading.dismiss();
      console.log('JS call error',err);
      const error = JSON.parse(err.error);
      alert(error.message);
      console.log('Native data:',JSON.parse(error));
    });
  }
  AddLog(){
    if (this.acttype === 'deactivated') {
      if (this.usdId === 1) {
     
        this.acttype = 'You deactivated item';
      } else {
        this.acttype = 'You deactivated item';
      }
    }
    if (this.acttype === 'activated') {
      if (this.usdId === 1) {
     
        this.acttype = 'You activated item';
      } else {
        this.acttype = 'You activated item';
      }
    }
    this.name = this.item.Description;
    this.tblName,this.tblId,this.usdId,this.acttype,this.lgdate
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    debugger
    this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
      
          console.log("Log has been added");    
          this.syncService.syncAddedLog();
          this.GetLogs();
          
    });
  }
  GetLogs(){
    this.syncService.getAllLogs().then(data=>{
      console.log(data);
    });
  }
  deleteItemlocaldb() {
    if (this.item.Sync === 1) {
      this.item.Sync = 2;
 }
    this.syncService.deleteItem(this.item.itemid, this.item.Sync)
    .then(data => {
      data
      this.tblId=this.item.itemid;
      this.AddLog();
      this.databaseservice.setupdateitems(1);
      this.router.navigate(['/menu/items']);
      if (this.network.type === 'none') {
       
      }else {
        debugger
        this.syncUpdatedItems();
        
      }
    });
  }
  activateItemlocaldb() {
    if (this.item.Sync === 1) {
      this.item.Sync = 2;
 }
    this.syncService.activateItem(this.item.itemid, this.item.Sync)
    .then(data => {
      data
      this.tblId=this.item.itemid;
      this.acttype="activated";
      this.AddLog();
      this.databaseservice.setupdateitems(1);
      this.router.navigate(['/menu/items']);
      if (this.network.type === 'none') {
       
      }else {
        debugger
        this.syncUpdatedItems();
        
      }
    });
  }
  syncUpdatedItems() {
    this.syncService.syncUpdatedItems().then((data) => {
      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].itemid;
        }
        const url = this.databaseservice.getURL();
    
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
  }
  syncAddedItems() {
    this.syncService.syncAddedItems().then((data) => {
      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].itemid;
        }
        const url = this.databaseservice.getURL();
    
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

}
