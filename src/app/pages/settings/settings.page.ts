import { DatabaseService} from 'src/app/services/database.service';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController,AlertController  } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { finalize } from 'rxjs/operators';
import { Events } from '@ionic/angular';
import { Router, Data } from '@angular/router';
import { SyncService } from 'src/app/services/sync.service';
import { DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';


import {  from } from 'rxjs';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  private database: SQLiteObject;
  image = '';
  find:any;
  accounts:any = [];
  info:any=[];
  infos:any=[];
  images:any = [];
  road:any;
  userId: any;
  usdId:any;
  acttype:any;
  lgdate:any;
  name:any;
  tblId:any;
  tblName:any;
  days = '';
  businessName = '';
  currency = '';
  lastsynced = '';
  public buttonClicked: boolean = false;

  constructor(
    public alertController: AlertController,public navCtrl: NavController,private googlePlus: GooglePlus, private databaseprovider: DatabaseService, private platform: Platform,private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private storage: Storage, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath,private events:Events,
    private router: Router,
    private syncService: SyncService,
    private datePipe: DatePipe,
    private network: Network,
    private alrtCtrl: AlertController,
    private nativeHttp: HTTP,


    ) { 
      
      this.storage.get('userId').then((val) =>{
        this.usdId = val;
        console.log(this.usdId);
      });
      this.storage.get('Sync').then((val) =>{
        this.lastsynced = val;
        console.log(this.lastsynced);
      });
     // storage.set('duedate',15);
      storage.get('duedate').then((val) => {
        if (val !== null) {
            this.days = val.toString();
            
        }
      });
      storage.get('currency').then((val) => {
        if (val !== null) {
            this.currency = val.toString();
            
        }
      });
      storage.get('COM').then((val)=>{
        this.businessName=val;
      });
    //   this.databaseprovider.getDatabaseState().subscribe(rdy => {
    //   if (rdy) {
    //     this.loadAccountData();
    //   }
    // });
      this.storage.get('id').then ((val)=>{
       console.log(val);
       this.find = val;
    });
      storage.get('loginEmail').then((val) => {
      console.log('Email:', val);
    });
      storage.get('loginStatus').then((val) => {
      console.log('status:', val);
    });

    // this.storage.set('loginStatus', 'true');
    // this.storage.set('loginEmail', 'true');
    let your_json_object = { "name":"John", "age":30, "car":null };

    // set a key/value
    storage.set('my-json', your_json_object);
  
    // to get a key/value pair
    storage.get('my-json').then((val) => {
      console.log('Your json is', val);
    });
  }
  ionViewDidEnter() {
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadAccountData();
      }
    });
  }
  ngOnInit() {
    this.platform.ready().then(() => {
      this.loadStoredImages();
    });
  }
  submitEvent()
  {
    this.events.publish('hello', 'Bro' );
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
          ;
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
  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
        header: 'Select Image source',
        buttons: [{
                text: 'Load from Library',
                handler: () => {
                    // tslint:disable-next-line: no-
                    ;
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
}
takePicture(sourceType: PictureSourceType) {
  const options: CameraOptions = {
      quality: 30,
      sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
  };

  this.camera.getPicture(options).then(imagePath => {
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath)
              .then(filePath => {
                  const correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                  const currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                  this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
              });
      } else {
          const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          const correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
  });

  }
  createFileName() {
    const d = new Date(),
        n = d.getTime(),
        newFileName = n + '.jpg';
    return newFileName;
}
copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
        this.updateStoredImages(newFileName);
    }, error => {
        this.presentToast('Error while storing file.');
    });
}
updateStoredImages(name) {
  this.storage.get(STORAGE_KEY).then(images => {
      const arr = JSON.parse(images);
      const newImages = [name];
      this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      this.storage.set('imgUrl', JSON.stringify(newImages));
      // if (!arr) {
      //     const newImages = [name];
      //     this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      // }
      //  else {
      //     arr.push(name);
      //     this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      // }

      const filePath = this.file.dataDirectory + name;
      const resPath = this.pathForImage(filePath);

      const newEntry = {
          name,
          path: resPath,
          filePath
      };
      this.images = [];
      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle
      this.events.publish('user:created', 'saad', this.businessName);
      this.acttype = 'You changed business logo';
      this.AddLog();

  });
}
loadAccountData() {
  this.databaseprovider.getAllAccount().then(data => {
    this.accounts = data;
  })
  
}
addInfo() {
  this.databaseprovider.addinfo(this.accounts.passcode,this.info['name'],this.road )
  .then(data => {
    this.loadInfoData();
  });

  console.log("Data Added");
  
}
updateAccount()
{
this.databaseprovider.getAccountUpdate(this.find,this.info['name'],this.road)
.then(data => {
  this.loadInfoData();
  this.onButtonClick();
  this.submitEvent();
});
}

async onButtonClick() {

  const toast = await this.toastController.create({
    message: 'Data Updated',
    duration: 2000
});
toast.present();
}
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['OK']
  });

  setTimeout(()=>alert.present(),3000);
}

loadInfoData() {
  this.databaseprovider.getAllInfo().then(data => {
    this.infos= data;
  })
}
getUp(){
  this.updateAccount();
}
comments() {
  this.router.navigate(['defaultcomment']);
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
       this.router.navigate(['login']);
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
async syncData() {
  const now = new Date().toString();
  const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
  this.storage.set('Sync', a).then(() => {
    this.storage.get('Sync').then((val) => {
      this.lastsynced = val;
      console.log(this.usdId);
    });
  });

  let loading = await this.loadingController.create({
    message: 'Synchronizing',
  });
  await loading.present();
  if (this.network.type === 'none') {
       alert('Kindly connect to internet first');
  }else {
    
    this.syncService.emptyLocalDB().then(()=>{
    loading.dismiss();
    const url = this.databaseprovider.getURL();
    this.nativeHttp.setDataSerializer("json");
    
    // let nativeCall = this.nativeHttp.post(url , 
    //   {
    //     'Name': 'sqliteSync1',
    //     "AccountId": '113008225657937776461'
    //   } , 
    //   {
    //     'Content-Type': 'application/json',
    //     'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
    //   });
  
    // from(nativeCall).pipe(
    //   finalize(() =>{} )
    // )
    // .subscribe(data => {
      
    //   console.log('Native data:',data);
    //   const g = JSON.parse(data.data);
    //   if (g.success === 1) {
    //     alert('yes');
    //     if (typeof g.vendors !== 'undefined')  {
    //       console.log('vendors');
    //       alert('vendors')
    //       for (let i=0;i<g.vendors.length;i++) {
    //        const data = [ g.vendors[i].ID, g.vendors[i].Name, g.vendors[i].Address, g.vendors[i].Phone, g.vendors[i].Email,  g.vendors[i].bActive,g.vendors[i].Balance, 1 ];
    //        // tslint:disable-next-line: max-line-length
    //        this.database.executeSql('INSERT INTO  tblvendors (ID,Name,Address,Phone,Email,bActive,Balance,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
    //        .then(data => {
    //          console.log('successfully Created item');
    //          return data;
    //        }, err => {
    //          console.log('Error: ', err);
    //          return err;
    //        });
    //       }
    //     }
    //     if( typeof g.items !== 'undefined') {
    //       alert('items');
    //       console.log('items');
    //       for (let i=0;i<g.items.length;i++) {
            
    //         const data = [g.items[i].itemid,'113008225657937776461', g.items[i].Description, g.items[i].Rate, g.items[i].Cost, g.items[i].Instock, g.items[i].Active, 1 ];
    //         // tslint:disable-next-line: max-line-length
    //         this.database.executeSql('INSERT INTO  items (itemid,AccountId, Description,Rate,Cost,Instock,Active,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
    //         .then(data => {
    //           console.log('successfully Created item');
    //           return data;
    //         }, err => {
    //           console.log('Error: ', err);
    //           return err;
    //         });
    //       }
    //     }
    //     if( typeof g.clients !== 'undefined') {
    //       alert('clients')
    //       console.log('clients from server:', g.clients);
    //       for (let i=0;i<g.clients.length;i++) {
    //         const data = [g.clients[i].Cid,'113008225657937776461', g.clients[i].Fname, g.clients[i].Lname, g.clients[i].Shop, g.clients[i].BillingAddress, g.clients[i].City, g.clients[i].Cell, g.clients[i].Active, g.clients[i].Balance,1 ];
    //      }
    //     }
    //   }
    // });
  
    });
    //this.syncService.syncDataServertoApp();
  }

}

dueDate() {
  
  this.alertController.create({
    header: 'Invoice Duedate in days',
    inputs: [
      {
        name: 'Days',
        placeholder: '15 Days',
        value: this.days
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
         
         this.days = data.Days;
         this.storage.set('duedate', this.days.toString());
         this.acttype = 'You changed duedate to ' + this.days.toString();
         this.AddLog();

        }
      }
    ]
  }).then(alert => alert.present());
}
setCurrency() {
  this.alrtCtrl.create({
    header: 'Currency',
    inputs: [
      {
        type: 'radio',
        label: 'PKR',
        value: 'PKR '
      },
      {
        type: 'radio',
        label: '$',
        value: '$ '
      }
    ],
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
          this.databaseprovider.setupdateinvoice(1);
          this.databaseprovider.setupdatePOS(1);
          this.databaseprovider.setupdatevendors(1);
          this.databaseprovider.setupdateclients(1);
          this.databaseprovider.setupdateexpenses(1);
          console.log('selected' + data);
          if (data === '$ ') {
            
            this.currency = '$ ';
            this.storage.set('currency', '$ ');
            this.acttype = 'You changed currency to $';
            this.AddLog();
          } else {
            
            this.currency = 'PKR ';
            this.storage.set('currency', 'PKR ');
            this.acttype = 'You changed currency to PKR';
            this.AddLog();
          }
          ;
        }
      }
    ]
  }).then(alert => alert.present());
}
bName() {
  
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
         this.acttype = 'You changed business name to ' + this.businessName.toString();
         this.AddLog();
         this.events.publish('user:created', 'saad', this.businessName);
        }
      }
    ]
  }).then(alert => alert.present());
}

}
