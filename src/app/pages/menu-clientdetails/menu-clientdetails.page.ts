import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController, Platform, LoadingController, NavController, Events } from '@ionic/angular';
import { DatabaseService} from 'src/app/services/database.service';
import { HTTP } from '@ionic-native/http/ngx';
import {  finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SyncService } from 'src/app/services/sync.service';
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-menu-clientdetails',
  templateUrl: './menu-clientdetails.page.html',
  styleUrls: ['./menu-clientdetails.page.scss'],
})
export class MenuClientdetailsPage implements OnInit {

  id;
  username = '';
  tblName:any="clients";
  tblId:any;
  usdId:any;
  acttype:any="deactivated";
  lgdate:any="2019-11-21";
  prev = '';
  client = {
    Cid: '',
    AccountId: '',
    Fname: '',
    Lname:'',
    Shop: '',
    BillingAddress: '',
    City: '',
    Cell: '',
    Active: '',
    Sync: 0
  };
  name = '';
  showEdit = 0;
  constructor(
    private router: Router,
    private location: Location,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private databaseservice: DatabaseService,
    private nativeHttp: HTTP,
    private alrtCtrl: AlertController,
    private callnumber: CallNumber,
    private syncService: SyncService,
    private network: Network,
    private storage: Storage,
    private datePipe: DatePipe,
    private nav: NavController,
    private events: Events,


  ) {
    this.storage.get('app').then((val1) => {
      if (val1 === 'invoice') {
        this.storage.get('ID').then((val) => {
          this.syncService.getbValue(val, 'Client Edit').then((data) => {
            this.showEdit = data[0].bValue;
          });
        });
      } else {
        this.showEdit = 1;
      }
    });
    if (this.router.getCurrentNavigation().extras.state) {
      this.events.publish('refreshLogs', 'saad2', '');
      this.client = this.router.getCurrentNavigation().extras.state.editclient;
      this.username = this.router.getCurrentNavigation().extras.state.editclient.username;
      this.id = this.router.getCurrentNavigation().extras.state.editclient.id;
      this.prev = this.router.getCurrentNavigation().extras.state.url;

      if (this.network.type === 'none') {
       
      }else {
        debugger
        this.syncAddedClients();
        
      }
    }
    this.storage.get('userId').then((val) => {
      this.usdId = val;
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

  back(){
    // this.location.back();
    this.nav.navigateRoot(this.prev);

  };
  edit() {
    const navigationExtras: NavigationExtras = {
      state: {
        editclient: this.client
      }
    };
    this.router.navigate(['menu-editclient'], navigationExtras);
  }
  async deleteClient() {
    const b = this.client.Fname + this.client.Lname + '@gmail.com';
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const url = this.databaseservice.getURL();

    debugger;
   this.nativeHttp.setDataSerializer("json");
    let nativeCall = this.nativeHttp.post(url + '/deleteClient.php',
    {
      "Cid": this.client.Cid
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
      this.databaseservice.setupdateclients(1);
      this.router.navigate(['/menu/clients']);

 
     // this.initializeItems();
    },err =>{
      loading.dismiss();
      console.log('JS call error',err);
      const error = JSON.parse(err.error);
      alert(error.message);
      console.log('Native data:',JSON.parse(error));
    });
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
            // this.deleteClient();
             this.deleteClientlocaldb();
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
    this.shareALert("Warning",'','Are you sure you want to delete this client?');
  }
  email() {
   
  }
  call() {
    debugger
    const number =this.client.Cell;
    // this.callnumber.callNumber(number, true)
    // .then(res => console.log('Launched dialer!', res))
    // .catch(err => console.log('Error launching dialer', err));
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
             //this.activateItem();
             this.activateClientlocaldb();
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
    this.activateALert("Warning",'','Are you sure you want to activate this Client?');

  }
  async activateItem() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const url = this.databaseservice.getURL();

    debugger;
   this.nativeHttp.setDataSerializer("json");
    let nativeCall = this.nativeHttp.post(url + '/activateClient.php',
    {
      "Cid": this.client.Cid
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
      this.databaseservice.setupdateclients(1);
      this.router.navigate(['/menu/clients']);

 
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
     
        this.acttype = 'You  deactivated client';
      } else {
        this.acttype = 'You deactivated client';
      }
    }
    if (this.acttype === 'activated') {
      if (this.usdId === 1) {
     
        this.acttype = 'You activated client';
      } else {
        this.acttype = 'You activated client';
      }
    }
   
    this.name = this.client.Fname + ' ' + this.client.Lname;
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.tblName,this.tblId,this.usdId,this.acttype,this.lgdate
    this.tblName,this.tblId,this.usdId,this.acttype,this.lgdate
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
  deleteClientlocaldb() {
    if (this.client.Sync === 1) {
      this.client.Sync = 2;
 }
    this.syncService.deleteClient(this.client.Cid, this.client.Sync)
    .then(data => {
      data
      this.tblId=this.client.Cid;
      this.AddLog();
      this.databaseservice.setupdateclients(1);
      this.router.navigate(['/menu/clients']);
      if (this.network.type === 'none') {
       
      }else {
        debugger
        this.syncUpdateClients();
        
      }
    });
  }
  activateClientlocaldb() {
    if (this.client.Sync === 1) {
      this.client.Sync = 2;
 }
    this.syncService.activateClient(this.client.Cid, this.client.Sync)
    .then(data => {
      data
      this.tblId=this.client.Cid;
      this.acttype="activated";
      this.AddLog();
      this.databaseservice.setupdateclients(1);
      this.router.navigate(['/menu/clients']);
      if (this.network.type === 'none') {
       
      }else {
        debugger
        this.syncUpdateClients();
        
      }
    });
  }
  syncUpdateClients() {
    this.syncService.syncUpdatedClients().then((data) => {
      if(data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].Cid;
        }
        const url = this.databaseservice.getURL();
      
        debugger;
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

        debugger
      }
    
    });
  }
  syncAddedClients() {
    this.syncService.syncAddedClients().then((data) => {
      if(data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].Cid;
        }
        const url = this.databaseservice.getURL();
      
        debugger;
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

        debugger
      }
    
    });
  }
}
