import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationExtras } from '@angular/router';
// import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Storage } from '@ionic/storage';
import { DatabaseService} from 'src/app/services/database.service';
import { Events, AlertController, NavController, Platform } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { DatePipe } from '@angular/common';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { SyncService } from 'src/app/services/sync.service';


const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  images:any = [];
  accounts:any = [];
  imageUrl:any;
  company:any;
  find:any;
  name:any;
  email: any;
  userId: any;
  isLoggedIn:boolean=false;
  selectedPath = '';
  num:any;
  businessName = '';
  usdId:any;
  acttype:any;
  lgdate:any;
  tblId:any;
  tblName:any;
  pages = [
    {
      title: 'Dashboard',
      url: '/menu/dashboard',
      icon: 'clock',
    },
    {
      title: 'Invoice',
      url: '/menu/invoice',
      icon: 'paper',
      childern: [
        {
          title: 'Trash',
          url: '/menu/trash-invoices',
          icon: 'trash'
        },
      ]
    },

    {
      title: 'Purchased Orders',
      url: '/menu/purchased-orders',
      icon: 'cart',
      childern: [
        {
          title: 'Trash',
          url: '/menu/trash-purchased-orders',
          icon: 'trash'
        },
      ]
    },
    {
      title: 'Vendors',
      url: '/menu/vendors',
      icon: 'person',
    },
    {
      title: 'Items',
      url: '/menu/items',
      icon: 'logo-dropbox',
    },
    // {
    //   title: 'Users',
    //   url: '/menu/users',
    //   icon: 'person',
    // },
    // {
    //   title: 'Credit Memos',
    //   url: '/menu/creditmemos',
    //   icon: 'copy',
    //   childern: [
    //     {
    //       title: 'Trash',
    //       url: '/menu/trash-credit-memos',
    //       icon: 'trash'
    //     },
    //   ]
    // },
    {
      title: 'Expenses',
      url: '/menu/expenses',
      icon: 'book',
    },
    {
      title: 'Reports',
      url: '/menu/reports',
      icon: 'copy',
    },
    // {
    //   title: 'Reports',
    //   url: '/menu/reports',
    //   icon: 'browsers',
    // },
     {
       title: 'Logout',
      // url: '/menu/settings',
       icon: 'log-out'
     }
  ];


  constructor(
    private events:Events,
    private databaseprovider: DatabaseService,
    private router: Router,
    //private googlePlus: GooglePlus,
    private storage: Storage,
    public menuCtrl: MenuController,
    public alertController: AlertController,
    private nav: NavController,
    private platform: Platform,
    // private camera: Camera,
    private syncService: SyncService,
    private file: File,
    private webview: WebView,
    private datePipe: DatePipe,
    private googlePlus: GooglePlus,
    ) {
      this.platform.ready().then(() => {
        this.loadStoredImages();
      });
      events.subscribe('user:created', (user, time) => {
        // user and time are the same arguments passed in `events.publish(user, time)`
        this.company = time;
        this.platform.ready().then(() => {
          this.loadStoredImages();
        });
      });
      this.router.events.pipe(
        filter(event => event instanceof NavigationStart)
      ).subscribe((route: NavigationStart) => {

      });
      
      this.router.events.subscribe((event: RouterEvent) => {
      
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
   
      events.subscribe('hello', (name) => {
    // user and time are the same arguments passed in `events.publish(user, time)`
    this.storage.get('id').then ((val) => {
      console.log(val);
      this.find = val;
   });
   storage.get('COM').then((val)=> {
    this.company=val;
  });
   });
   storage.get('COM').then((val)=>{
    this.company=val;
  });
//   storage.get('imgUrl').then((val)=>{
//    this.imageUrl=val;
//  });
      storage.get('menuLogo').then((val) => {
  this.imageUrl = val;
 });

  }
  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        const arr = JSON.parse(images);
        this.images = [];
        for (const img of arr) {
          const filePath = this.file.dataDirectory + img;
          const resPath = this.pathForImage(filePath);
          // tslint:disable-next-line: object-literal-shorthand
          this.images.push({ name: img, path: resPath, filePath: filePath });
          console.log(images.resPath);
        }
      }
    });
  }
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      const converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }
ionViewDidEnter()
{
  this.storage.get('id').then ((val) => {
      console.log(val);
      this.find = val;
   });
  this.storage.get('COM').then((val)=>{

    this.company=val;
  });

}
  ngOnInit() {
  }
  
  // logout() {
  //   localStorage.setItem('file','false');
  //   this.googlePlus.logout()
  //     .then(res => {
  //       console.log(res);
  //       this.email = "";
  //       this.userId = "";   
  //       this.getStatus();
  //       this.storage.set('id',null);
  //     })
  //     .catch(err => console.error(err));
  // }
  removeAll()
  {
  }
  getUp()
  {
   // this.logout();
    this.removeAll();
  }
  
  getAll()
  {
    this.databaseprovider.getAccount(this.find).then(data => {
      this.accounts = data;
     // this.company=this.accounts.companyName;
     // this.imageUrl=this.accounts.linkage;
      console.log(this.company);
      console.log(this.imageUrl);
    }) 
  }
  getStatus(){
    this.databaseprovider. getLogUpdate(this.find,this.isLoggedIn).then(data => {
      this.loadInfo();
      this.accounts = data;
    });
  }
  loadInfo() {
    this.databaseprovider.getAllAccount().then(data => {
      this.accounts = data;
    })
  }
  hi(url) {
   url;
   this.databaseprovider.setFrom(0);
   
   
  // this.router.navigate([url]);
   this.nav.navigateRoot(url);
   this.menuCtrl.close();
  }
  clicked() {
    this.alertController.create({
      header: 'Business Name',
      inputs: [
        {
          name: 'Name',
          placeholder: 'Business Name',
          value: this.businessName
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
           
           this.businessName = data.Name;
           this.storage.set('COM', this.businessName);
           this.company = this.businessName;
          }
        }
      ]
    }).then(alert => alert.present());
  }
  exitApp() {
    // navigator['app'].exitApp();
    this.shareALert("Warning",'','Are you sure you want to exit app?');

  }
  shareALert(head, sub, msg) {
    this.alertController.create({
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
            // navigator['app'].exitApp();
             this.logout();
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
