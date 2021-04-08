import { DatabaseService} from 'src/app/services/database.service';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController,AlertController  } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
 
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
 
const STORAGE_KEY = 'my_images';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: any;
  userId: any;
  isLoggedIn:boolean = false;
  accounts:any = [];
  info:any=[];
  infos:any=[];
  images:any = [];
  road:any;
 

  constructor(public alertController: AlertController,public navCtrl: NavController,private googlePlus: GooglePlus, private databaseprovider: DatabaseService, private platform: Platform,private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private storage: Storage, private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    private router: Router
     ) {

    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadAccountData();
      }
    })
  }
  ngOnInit() {
    this.platform.ready().then(() => {
      this.loadStoredImages();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Information',
      message: 'Your data has been added.',
      buttons: ['OK']
    });

    await alert.present();
  }

  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
  }
 
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
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
    header: "Select Image source",
    buttons: [{
            text: 'Load from Library',
            handler: () => {
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
  var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
  };
  this.camera.getPicture(options).then(imagePath => {
    if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
            .then(filePath => {
                let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                console.log(correctPath);
                console.log(currentName);
            });
    } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }
});

}
createFileName() {
  var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
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
      let arr = JSON.parse(images);
      if (!arr) {
          let newImages = [name];
          this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
          arr.push(name);
          this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);
      let newEntry = {
          name: name,
          path: resPath,
          filePath: filePath
      };
      console.log(resPath);
      console.log(filePath);
      this.road=resPath;
      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle
  });
}

  login() {
    this.googlePlus.login({})
      .then(res => {
        console.log(res);
        this.email = res.email;
        this.userId = res.userId;
        this.isLoggedIn = true;
        this.addAccount();
        this.logout();
        this.router.navigate(['login']);
      })
      
      .catch(err => console.error(err));
  }
  logout() {
    this.googlePlus.logout()
      .then(res => {
        console.log(res);
        this.email = "";
        this.userId = "";  
        this.isLoggedIn = false;
      })
      .catch(err => console.error(err));
  }
  loadAccountData() {
    this.databaseprovider.getAllAccount().then(data => {
      this.accounts = data;
    })
  }
  addAccount() {
    this.databaseprovider.addaccount(this.email, this.userId)
    .then(data => {
      this.loadAccountData();
    });
  
    console.log("Data Added");
  }
  addInfo() {
    this.databaseprovider.addinfo(this.userId,this.info['name'],this.road )
    .then(data => {
      this.loadInfoData();
      this.presentAlert();
      location.href="/menu/dashboard";
    });
  
    console.log("Data Added");
  }
  loadInfoData() {
    this.databaseprovider.getAllInfo().then(data => {
      this.infos= data;
    })
  }
  goOn()
  {
    this.login();
  }

  goOut()
  {
    this.addInfo();
    this.logout();

  }
  loginPage() {
    this.router.navigate(['login']);
  }
}
