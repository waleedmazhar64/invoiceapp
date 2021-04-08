import { Component, ViewChild, NgZone } from '@angular/core';

import { Platform, IonRouterOutlet, Events, AlertController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Network } from '@ionic-native/network/ngx';
import { SyncService } from 'src/app/services/sync.service';
import { PlatformLocation, DatePipe } from '@angular/common';

// import { DatabaseService} from 'src/app/services/database.service';

import { DatabaseService} from 'src/app/services/database.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild(IonRouterOutlet , {static: false}) routerOutlet: IonRouterOutlet;
 
  userId: any;
  usdId:any;
  acttype:any;
  lgdate:any;
  name:any;
  tblId:any;
  tblName:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router,
    private datePipe: DatePipe,
    private googleplus:GooglePlus,
    private network: Network,
    private syncService: SyncService,
    private location: PlatformLocation,
    private events: Events,
    private alrtCtrl: AlertController,
    private nav: NavController,
    private ngzone: NgZone,
    private googlePlus: GooglePlus,

    // private databaseprovider: DatabaseService


  ) {
    this.initializeApp();
  } 

  initializeApp() {
    
     this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(0, () => {
        debugger
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
          this.routerOutlet.pop();
        } else if (this.router.url === '/menu/clients') {
          // or if that doesn't work, try
          this.shareALert("Warning",'','Are you sure you want to exit app?');
        } else {
           this.ngzone.run(() => {
            this.events.publish('refreshClients', 'saad2', '');
            this.router.navigate(['/menu/clients']);
           });

        }
        if (this.router.url === '/menu-clientdetails' || this.router.url === '/invoicedetails' || this.router.url === '/editexpense') {
          this.events.publish('refreshLogs', 'saad2', '');
        }
        if (this.router.url === '/menu-addclient' || this.router.url === '/menu-editclient') {
          this.events.publish('refreshClients', 'saad2', '');
          this.events.publish('refreshClientsOrder', 'saad2', '');
        }
        if (this.router.url === '/vendor-edit' ) {
          this.events.publish('refreshVendors', 'saad2', '');
          this.events.publish('refreshLogs', 'saad2', '');
        }
        


        // else {
        //   alert('Do you want to exit the app?')
        //   // this.generic.showAlert("Exit", "Do you want to exit the app?", this.onYesHandler, this.onNoHandler, "backPress");
        // }
      });




     this.storage.set('app', 'adnan');
     this.statusBar.styleDefault();
	     this.storage.get('ID').then((val) => {
        if (val !== null) {
           this.router.navigate(['/menu/clients']);
           this.splashScreen.hide();
           if (this.network.type === 'none') {
              // alert('not connected');
            } else {
                this.syncService.syncLocalToServer();
                // alert('connected');
              }
        } else {
          this.router.navigate(['/menu/dashboard']);
          this.splashScreen.hide();
        }
      });
    });
  }
  // checkLogin()
  // {
  //   this.googleplus.trySilentLogin({})
  //  .then(res => {
  //     console.log(res);
  //     }
  // )
        
  // .catch(err => console.error(err));
  // }
  shareALert(head, sub, msg) {
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
             console.log('yes')
            // this.deleteClient();
             this.logout();
            // navigator['app'].exitApp();
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
  logout() {
    this.googlePlus.trySilentLogin({})
    .then(res => {
       console.log(res);
       this.googlePlus.logout()
       .then(res => {
         console.log(res);
         this.acttype = 'You Signed Out from app';
         this.AddLog();
         this.userId = '';
         this.storage.set('ID', null);
         this.storage.get('ID').then((val) => {
           console.log('After logout:' + val);
          });
         navigator['app'].exitApp();
       })
       .catch(err => console.error(err));
       }
   )
         
   .catch(err => console.error(err));
   
  }
  AddLog(){
  
    //this.name = 'Purchased Order';
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.tblName = '';
    this.tblId = 0;
    this.name = '';
    // this.tblId = this.PO.ID;
    // this.tblId = this.syncService.getUpdatedPOID();
    this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
    
    this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
      
          console.log("Log has been added");
          this.syncService.syncAddedLog();
          //this.GetLogs();
          
    });
  }
}
