import { Component, OnInit } from '@angular/core';
import { Platform, NavController, AlertController, LoadingController, ToastController, Events } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { DatabaseService} from 'src/app/services/database.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SyncService } from 'src/app/services/sync.service';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 
  userId: any;
  email:any;
  find:any;
  // company:any='invoice.pk';
   company:any = 'M.A. Traders Alipur Chatha';
  // company:any='Tiny Invoice';
  imageUrl:any='/assets/icon.png';
  menuLogo:any= '/assets/icon.png';
  isLoggedIn:boolean=false;
  accounts:any=[];
  emails:any=['adnan@rizwanali.pk', 'test@rizwanali.pk'];
  confirm:any;
  subscribe:any;
  usdId:any;
  acttype:any;
  lgdate:any;
  name:any;
  tblId:any;
  tblName:any;
  executed = 0;
  first = 0;
  userName = '';

  constructor(
    private platform: Platform,
    private router: Router,
    private googlePlus: GooglePlus,
    private databaseprovider: DatabaseService,
    private storage: Storage,
    private alrtCtrl: AlertController,
    private network: Network,
    private loadingController: LoadingController,
    private statusbar: StatusBar,
    private toastController: ToastController,
    private syncService: SyncService,
    private datePipe: DatePipe,
    private nav: NavController,
    private events: Events,


     ) {
      this.storeUsers();
      // this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
      //        if (this.constructor.name=="LoginPage")
      //        {
      //          navigator["app"].exitApp();
      //        }
      // });
      this.statusbar.backgroundColorByHexString('#4c8dff');

      this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.account();
      }
    });
      storage.get('first_time').then((val) => {
      if (val !== null) {
         console.log('app is not running for first time');
         this.first = 0;
         storage.get('COM').then((val)=>{
          this.company = val;
        });

      } else {
        this.first = 1;
        console.log('probably the first time');
        storage.set('first_time', 'done');
        storage.set('comment', 'Thank you for your business');
        storage.set('duedate', '15');
        storage.set('currency', 'PKR ');
        this.storage.set('COM', 'M.A. Traders Alipur Chatha');
       // this.storage.set('COM', 'invoice.pk');
       // this.storage.set('COM', 'Tiny Invoice');
        this.storage.set('Sync', '');

      }
   });
   this.storage.set('COM',this.company);
   this.storage.set('Sync', '');
   this.storage.set('imgUrl',this.imageUrl);
   this.storage.set('menuLogo',this.menuLogo);
   storage.get('COM').then((val)=>{
     this.company=val;
   });
   storage.get('imgUrl').then((val)=>{
    this.imageUrl=val;
  });
    //this.getAll();
 

  }

  
  ngOnInit() {
  }
  
  async login() {

    let loading = await this.loadingController.create({
      message: 'Please wait...'
    });
  
    loading.present();
    if (this.network.type === 'none') {
      loading.dismiss();
      alert('kindly connect to internet');
    } else
    {
      this.googlePlus.login({})
      .then(async res => {
        console.log(res);
        console.log('here i am in login');
        this.userId = res.userId;
        this.email = res.email;
        // alert('u' + res.givenName);
        
        if(res.givenName="Adnan ALi")
        {
             // alert('1' + res.givenName);
             this.storage.set("userId" , 1);
             this.usdId = 1;
             if (this.first === 1) {
                // this.syncService.serverSync();
               // this.AddLog();
             } else {
             // this.AddLog();
             }
            
        }
        if(res.givenName="Rizwan Ali")
        {
             // alert('yes12' + res.givenName);
             this.storage.set("userId" , 4);
             this.usdId = 1;
             if (this.first === 1) {
                // this.syncService.serverSync();
               // this.AddLog();
             } else {
             // this.AddLog();
             }
            
        }
        if(res.givenName="Rizwan Ali")
        {
            // alert('yes1' + res.givenName);
             this.storage.set("userId" , 4);
             this.usdId = 1;
             if (this.first === 1) {
                // this.syncService.serverSync();
               // this.AddLog();
             } else {
             // this.AddLog();
             }
            
        }
        else{
         // alert('2' + res.givenName);
          this.userName =   res.displayName;
          this.storage.set("userId" , 2);
          this.usdId = 2;
          if (this.first === 1) {
            
            // this.syncService.serverSync();
           // this.AddLog();
          } else {
            
          //  this.AddLog();
          }
        }

        this.syncService.checKEmail(this.email).then((data) => {
          if (data[0].success === 1) {
            console.log('matched');
            this.storage.set("UserName" , res.displayName);
            this.storage.set('loginStatus', 'true');
            this.storage.set('loginEmail', res.email);
            this.storage.set('ID', data[0].ID);
            this.events.publish('refreshShowPages', 'saad', '');
            this.addAccount(res.email, res.userId);
            loading.dismiss();
          }
          if (data[0].success === 0) {
            this.logout();
            loading.dismiss();
            this.onButtonClick();
          }
        });
this.router.navigate(['/menu/dashboard'])
      //   // this.addAccount(res.email, res.userId);
      //   this.account();
      //   this.storage.set('id', this.userId);
      //   if (this.email === this.emails[0] || this.email === this.emails[1] || this.email === this.emails[2]  || this.email === this.emails[3])
      //   {
      //   // alert('3' + res.givenName);

      //   if (this.confirm === this.userId)
      //   {
      //     this.storage.set("UserName" , res.displayName);
      //     this.isLoggedIn = true;
      //     localStorage.setItem('file', 'true');
      //     this.getStatus();
      //     this.storage.set('status', this.userId);
      //    // location.href="/menu/dashboard"; // working
      //     loading.dismiss();
      //     this.storage.set('ID', '1');
      //     this.storage.get('ID').then((val) => {
      //       console.log('After login:' + val);
      //      });
      //      
      //      this.AddLog(res.displayName);
      //    // this.router.navigate(['/menu/dashboard']);

      //     ;
      //   }
      //   else {
      //     this.storage.set("UserName" , res.displayName);
      //     this.storage.set('loginStatus', 'true');
      //     this.storage.set('loginEmail', res.email);
      //     this.addAccount(res.email, res.userId);
      //     loading.dismiss();
      //     this.storage.set('ID', '1');
      //     this.storage.get('ID').then((val) => {
      //       console.log('After login:' + val);
      //      });
      //      this.AddLog(res.displayName);
      //     // this.showALert('Login Failed', '', 'You dont have account first Signup');
      //   }
      // }
      // else{
      //   this.logout();
      //   loading.dismiss();
      //   this.onButtonClick();
      // }
      })
      .catch(err => console.error);

    }
  }
  async onButtonClick() {

    const toast = await this.toastController.create({
      message: 'Invalid Email',
      duration: 2000
  });
  toast.present();
  }
  addAccount(email, userId) {
    // alert('addaccount');
    this.databaseprovider.addaccount(email, userId)
    .then(data => {
     // this.loadAccountData();
     this.AddLog();
     this.nav.navigateRoot('/menu/clients');
    // this.router.navigate(['/menu/dashboard']);
    });
  
    console.log("Data Added");
  }
  logout() {
    this.googlePlus.logout()
      .then(res => {
        console.log(res);
        this.userId = "";  
        
      })
      .catch(err => console.error(err));
  }
  account()
  {
    this.databaseprovider.getAccount(this.userId).then(data => {
      this.accounts = data;
      this.confirm=this.accounts.passcode;
      ;
      console.log(this.accounts.passcode);
    }) 
  }
  getStatus(){
    this.databaseprovider. getLogUpdate(this.userId,this.isLoggedIn).then(data => {
      this.loadInfo();
      this.accounts = data;
    })
  }
  loadInfo(){
    this.databaseprovider.getAllAccount().then(data => {
      this.accounts = data;
    })
  }
  showALert(head, sub, msg) {
    this.alrtCtrl.create({
    header: head,
    subHeader: sub,
    message: msg,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Signup',
        handler: () => {
          this.router.navigate(['home']);
          console.log('Confirm Ok');
        }
      }
    ]
  }).then(alert => alert.present());
}
SignupPage() {
  this.router.navigate(['home']);
}

AddLog(){
  // this.userName = name;
  if (this.executed === 0) {
    
    if (this.usdId === 1) {
      this.acttype = 'You Signed In the app';
    } else {
      this.acttype = 'You Signed In the app';
    }
    // this.name = 'Purchased Order';
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.tblName = '';
    this.tblId = 0;
    this.name = '';
    // this.tblId = this.PO.ID;
    // this.tblId = this.syncService.getUpdatedPOID();
    this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
    
    this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(data => {
          console.log("Log has been added");
          this.syncService.syncAddedLog();
          //this.GetLogs();
    });
    this.executed = 1;

  }
 
}
async storeUsers() {
  this.syncService.getUsersFromServer();
}
}
