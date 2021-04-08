import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationExtras, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { from } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform, LoadingController, AlertController, Events } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { DatabaseService} from 'src/app/services/database.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SyncService } from 'src/app/services/sync.service';
import { SMS } from '@ionic-native/sms/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';


import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  showAdd = 0;
  showDetails = 0;
  data1 = [];
  c = [];
  clients = [];
  client:any=[];
  amount:any;
  activeClients = [];
  inactiveClients = [];
  sorted = [];
  tempClients = [];
  tempActiveClients = [];
  tempInactiveClients = [];
  active = 'solid';
  inactive = 'outline';
  showSpinner = true;
  selected = 'act';
  message = '';
  currency = '';
  subscription;
  username = '';
  tblName:any="clients";
  tblId:any;
  usdId:any;
  acttype:any="deactivated";
  lgdate:any="2019-11-21";
  name = '';
  delCid = 0 ;
  delSync = 0;

  // act = true;
  // inact = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private nativeHttp: HTTP,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private databaseprovider: DatabaseService,
    private callnumber: CallNumber,
    private syncService: SyncService,
    private sms: SMS,
    private alrtCtrl: AlertController,
    private socialSharing: SocialSharing,
    private storage: Storage,
    private statubar: StatusBar,
    private network: Network,
    private datePipe: DatePipe,
    private events: Events,


  ) {
    
    this.storage.get('userId').then((val) => {
      this.usdId = val;
      console.log(this.usdId);
    });
    this.storage.get('app').then((val1) => {
      if (val1 === 'invoice') {
        this.storage.get('ID').then((val) => {
          this.syncService.getbValue(val,'Client Add').then((data) => {
            this.showAdd = data[0].bValue;
          });
          this.syncService.getbValue(val,'Client Details').then((data) => {
            this.showDetails = data[0].bValue;
          });
        });
      } else {
        this.showAdd = 1;
        this.showDetails = 1;
      }
    });
    this.statubar.backgroundColorByHexString('#4c8dff');
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
          
      }
    });

    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe((route: NavigationStart) => {
    //          // this.getDataNativeHttp();
    //     console.log('Route: '+route.url);
    //     const a = this.databaseprovider.getupdateclients();
    //     ;
    //     storage.get('currency').then((val) => {
    //       if (val !== null) {
    //           this.currency = val.toString();
    //           
    //       }
    //     });
    //     if(route.url === '/menu/clients' && a === 1) {
    //       this.getAllClientsLocaldb();

    //     }
    // });
    if(this.clients.length === 0) {
      ;
      // this.getDataNativeHttp();
      storage.get('currency').then((val) => {
        if (val !== null) {
            this.currency = val.toString();
            
            
        }
      });
      this.getAllClientsLocaldb();
    }
    events.subscribe('refreshClients', (user, time) => {
      // alert('refreshclients')
      this.clients = [];
      this.client = [];
      this.getAllClientsLocaldb();
    });
    // this.getAllClientsLocaldb();


   // this.sortClients();
   // this.initializeItems();

   }

  ngOnInit() {

  //  this.sortClients();
  }
  ngOnDestroy() {
    this.events.unsubscribe('refreshClients');
  }
  doRefresh(refresher) {
    
    this.getAllClientsLocaldb();
    refresher.target.complete();
  }
  itemClicked(item,event) {
    if(this.showDetails === 1) {
      this.databaseprovider.setLogsnav(1);
      event.stopPropagation();
     this.syncService.getClient(item.Cid, '/menu/clients');
     
    }
   // this.clients = [];
  
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     editclient: item
    //   }
    // };
    
    // this.router.navigate(['menu-clientdetails'], navigationExtras);
  }

  back() {
    this.router.navigate(['add-client']);

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
  separateLetter(client,clientIndex,clients) {
    if (clientIndex === 0) {
      return client.Fname[0].toUpperCase();
    }

    let first_prev = clients[clientIndex - 1].Fname[0];
    let first_current = client.Fname[0];

    if (first_prev !== first_current) {
      return first_current.toUpperCase();
    }
    return null;

  }
  initializeactiveItems(){
    this.tempActiveClients = this.activeClients;
  }
  initializeinactiveItems(){
    this.tempInactiveClients = this.inactiveClients;
  }
  initializeItems(){
    this.tempClients = this.clients;
  }
  geItems(searchbar) {
    if (this.selected === 'act') {
      this.initializeactiveItems();
      const q = searchbar.srcElement.value;
      if (!q) {
        return;
      }
      this.tempActiveClients = this.tempActiveClients.filter((v) => {
        if (v.Fname && q) {
          if (v.Fname.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
  
    } 
    if (this.selected === 'inact') {
      this.initializeinactiveItems();
      const q = searchbar.srcElement.value;
      if (!q) {
        return;
      }
      this.tempInactiveClients = this.tempInactiveClients.filter((v) => {
        if (v.Fname && q) {
          if (v.Fname.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    }
    //  this.initializeItems();
    //  // set q to the value of the searchbar
    //  const q = searchbar.srcElement.value;

    //  ;

    //  // if the value is an empty string don't filter the items
    //  if (!q) {
    //    return;
    //  }
 
    //  this.tempClients = this.tempClients.filter((v) => {
    //    if (v.billing.first_name && q) {
    //      if (v.billing.first_name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
    //        return true;
    //      }
    //      return false;
    //    }
    //  });
 
    // console.log(q, this.clients.length);

  }
  addClient() {
    this.router.navigate(['menu-addclient']);
  }
  async getDataNativeHttp() {
    let loading = await this.loadingCtrl.create();
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
      this.clients = g.clients;
      console.log(this.clients[0]);
      this.sortClients();
      this.inactiveClients = [];
      this.activeClients = [];
      for(let i = 0; i < this.clients.length; i++) {
        if(this.clients[i].Active === '0') {
          this.inactiveClients.push(this.clients[i]);
        } else {
          this.activeClients.push(this.clients[i]);
        }
      }
    //  this.selectActive();
     // ;
     
     // this.initializeItems();
     this.initializeactiveItems();
     this.initializeinactiveItems();
      this.databaseprovider.setupdateclients(0);
    },err =>{
      console.log('JS call error',err);
    });

  }
  call(item) {
    
    const number =item.Cell;
    this.callnumber.callNumber(number, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  Sms(item) {
    // ;
    // const number =item.Cell;
    // this.alrtCtrl.create({
    //   header: 'Message',
    //   inputs: [
    //     {
    //       name: 'Message',
    //       placeholder: this.message,
    //       value: this.message
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: data => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Submit',
    //       handler: data => {
    //        console.log(data);
    //        this.message = data.Message;
    //        if (this.message !== '' && this.message.length > 0) {
    //          number;
    //        // this.sms.send(number,this.message);
    //         this.sms.send('03215312559','this.message');

    //        ;

    //        }
    //       }
    //     }
    //   ]
    // }).then(alert => alert.present());
    const number =item.Cell;
    this.socialSharing.shareViaSMS('', number).then(() => {
      }).catch(() => {
  
      });
    
  }
  ledger(event, item) {
     
    // event.stopPropagation();
     const navigationExtras: NavigationExtras = {
      state: {
        client: item
      }
     };
     this.router.navigate(['ledger'], navigationExtras);

  }
  addPayment(event,item) {
    
    event.stopPropagation();
    const navigationExtras: NavigationExtras = {
      state: {
        Cid: item.Cid,
        Name: item.Fname + ' ' + item.Lname,
        Sync: item.Sync,
        url: this.router.url
      }
    };
    this.router.navigate(['payment-info'], navigationExtras);
   
  }
  restored(item) {
    this.delCid = item.Cid;
    this.delSync = item.Sync;
    this.name = item.Fname + ' ' + item.Lname;
    this.shareALert1("Warning",'','Are you sure you want to Activate this client?');

  }
  del(item) {
    this.delCid = item.Cid;
    this.delSync = item.Sync;
    this.name = item.Fname + ' ' + item.Lname;
    this.shareALert("Warning",'','Are you sure you want to delete this client?');

  }
  shareALert(head, sub, msg,) {
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
  shareALert1(head, sub, msg,) {
    this.alrtCtrl.create({
      header: head,
      subHeader: sub,
      message: msg,
      cssClass: 'alertSize',
      buttons: [
        {
          text: 'Activate',
          cssClass: 'customClass',
          role: 'cancel',
          handler: () => {
             console.log('yes')
            // this.deleteClient();
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
  activateClientlocaldb() {
    if (this.client.Sync === 1) {
      this.client.Sync = 2;
    }
    this.syncService.activateClient(this.delCid, this.delSync)
    .then(data => {
      data

      this.clients = [];
      this.client = [];
      this.getAllClientsLocaldb();
      this.tblId = this.client.Cid;
      this.acttype = 'activated';
      this.AddLog();
      // this.databaseprovider.setupdateclients(1);
      // this.router.navigate(['/menu/clients']);
      if (this.network.type === 'none') {
       
      }else {
        
        this.syncUpdateClients();
        
      }
    });
  }
  deleteClientlocaldb() {
    if (this.delSync === 1) {
      this.delSync = 2;
    }
    this.syncService.deleteClient(this.delCid, this.delSync)
    .then(data => {
      data

      this.clients = [];
      this.client = [];
      this.getAllClientsLocaldb();
      this.tblId = this.client.Cid;
      this.AddLog();
      // this.databaseprovider.setupdateclients(1);
      // this.router.navigate(['/menu/clients']);
      if (this.network.type === 'none') {
       
      }else {
        
        this.syncUpdateClients();
        
      }
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
   
    this.name;
    this.tblId = this.delCid;
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.tblName,this.tblId,this.usdId,this.acttype,this.lgdate
    this.tblName,this.tblId,this.usdId,this.acttype,this.lgdate
    
    this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
      
          console.log("Log has been added");
          this.syncService.syncAddedLog();
          
    });
  }
  syncUpdateClients() {
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
            // alert('success');
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
  }
  selectActive() {
    this.active = 'solid';
    this.inactive = 'outline';
    this.selected = 'act';
  }
  selectInActive() {
    this.tempInactiveClients;
    this.active = 'outline';
    this.inactive = 'solid';
    this.selected = 'inact';
  }
  async getAllClientsLocaldb() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.syncService.getAllClients().then((data) => {
      
      this.clients = data;
      this.client=data;
      this.amount=this.client.Balance;
      this.sortClients();
      this.inactiveClients = [];
      this.activeClients = [];
      for(let i = 0; i < this.clients.length; i++) {
        if(this.clients[i].Active === 0 || this.clients[i].Balance  === 0) {
          this.inactiveClients.push(this.clients[i]);
        } else {
          this.activeClients.push(this.clients[i]);
        }
      }
     // this.initializeItems();
      this.initializeactiveItems();
      this.initializeinactiveItems();
      loading.dismiss();
      this.databaseprovider.setupdateclients(0);
      
    });
  }
  changeName() {
    
  }
  ionViewDidEnter() {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route: NavigationStart) => {
             // this.getDataNativeHttp();
        console.log('Route: '+route.url);
        const a = this.databaseprovider.getupdateclients();
        ;
        this.storage.get('currency').then((val) => {
          if (val !== null) {
              this.currency = val.toString();
              
          }
        });
        if(route.url === '/menu/clients' && a === 1) {
          this.getAllClientsLocaldb();

        }
    });
  }
  ionViewWillLeave() {
    this.subscription.unsubscribe();
 }

}
