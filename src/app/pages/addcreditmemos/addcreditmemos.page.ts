import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertController, ToastController, LoadingController, Events, ActionSheetController, Platform } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
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

const STORAGE_KEY = 'cm_images';


@Component({
  selector: 'app-addcreditmemos',
  templateUrl: './addcreditmemos.page.html',
  styleUrls: ['./addcreditmemos.page.scss'],
})
export class AddcreditmemosPage implements OnInit {

  creditmemo = {
    created: '',
    name: 'CM01',
    terms: 'Issued'
  };
  images = [];
  message = '';
  client = 'Client';
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
  meta_data: [];
  time = new Date();
  currentDate = new Date().toString();
  data = [
    // {
    //   no: '1',
    //   date: '10/28/2019',
    //  amount: '10.00'
    //  }
];
url;
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
  ) { 
    this.url = this.router.url;
    this.creditmemo.created = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');
    const a ='menu'+this.router.url;
    debugger
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
      // Instance of should be: 
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
    if (this.router.getCurrentNavigation().extras.state) {
      this.message = this.router.getCurrentNavigation().extras.state.user;
    } else {
      this.message = 'Thanks for your business';
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

      } 

    }
    debugger;
  }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.message !== 'undefined') {
       // debugger;
        this.message = this.router.getCurrentNavigation().extras.state.message;
      }
    }
    if (this.router.getCurrentNavigation().extras.state) {

      if ( typeof this.router.getCurrentNavigation().extras.state.client !== 'undefined') {
        debugger;
        this.selectedClient = this.router.getCurrentNavigation().extras.state.client;
        this.client = this.router.getCurrentNavigation().extras.state.client.first_name;
        this.add1 =  this.router.getCurrentNavigation().extras.state.client.billing.address_1;
      }
    }
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.items !== 'undefined') {

        debugger;
        this.subtotal = 0;
        this.discount = 0;
        this.total = 0;
        for(let i=0;i<this.router.getCurrentNavigation().extras.state.items.length;i++) {
          this.selectedItems.push(this.router.getCurrentNavigation().extras.state.items[i]);
        }
   
        console.log('y' + this.selectedItems.length);
        for (let i=0;i<this.selectedItems.length;i++) {
          this.subtotal = this.subtotal + (this.selectedItems[i].menu_order * this.selectedItems[i].regular_price);
          this.discount = this.discount + (this.selectedItems[i].regular_price - this.selectedItems[i].sale_price);
          this.total = this.subtotal - this.discount;
          const a = parseFloat(this.discount.toString()).toFixed(2);
          const b =parseFloat(this.total.toString()).toFixed(2);
          const c =parseFloat(this.subtotal.toString()).toFixed(2);

          this.discount = parseFloat(a);
          this.total = parseFloat(b);
          this.subtotal = parseFloat(c);
          this.duepayment = this.total - this.payed;
          
          debugger;
        }
      }

      if ( typeof this.router.getCurrentNavigation().extras.state.edititem !== 'undefined') {
        this.subtotal = 0;
        this.discount = 0;
        this.total = 0;
        this.selectedItems[this.router.getCurrentNavigation().extras.state.position] = this.router.getCurrentNavigation().extras.state.edititem;
        for (let i=0;i<this.selectedItems.length;i++) {
          this.subtotal = this.subtotal + (this.selectedItems[i].menu_order * this.selectedItems[i].regular_price);
          this.discount = this.discount + (this.selectedItems[i].regular_price - this.selectedItems[i].sale_price) * this.selectedItems[i].menu_order;
          this.total = this.subtotal - this.discount;
          const a = parseFloat(this.discount.toString()).toFixed(2);
          const b =parseFloat(this.total.toString()).toFixed(2);
          const c =parseFloat(this.subtotal.toString()).toFixed(2);

          this.discount = parseFloat(a);
          this.total = parseFloat(b);
          this.subtotal = parseFloat(c);
          this.duepayment = this.total - this.payed;
          
          debugger;
        }
      }
      


    }
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.meta_data !== 'undefined') {
        debugger;
       this.data = this.router.getCurrentNavigation().extras.state.meta_data;
       this.payed =  this.router.getCurrentNavigation().extras.state.payed;
       this.duepayment =  this.router.getCurrentNavigation().extras.state.duepayment;

      } 

    }
    // if (this.router.getCurrentNavigation().extras.state) {
    //   if ( typeof this.router.getCurrentNavigation().extras.state.invoice !== 'undefined') {
    //    // debugger;
    //     this.invoice = this.router.getCurrentNavigation().extras.state.invoice;
    //   }
    // }
  }
  orderInfo() {
    debugger;
    const navigationExtras: NavigationExtras = {
      state: {
       // user: this.received
       creditmemo: this.creditmemo
      }
    };
    this.router.navigate(['credit-memo-info'], navigationExtras);
  }
  back() {
    // this.router.navigate(['invoicedetails']);
   // this.location.back();

   this.showALert('','','Save this credit memo?');
 
   }
   showALert(head, sub, msg) {
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
          this.images = [];
        //  this.location.back();
          this.router.navigate(['menu/creditmemos']);
          console.log('Confirm Cancel');
          this.selectedItems = [];
          this.discount = 0.00;
          this.subtotal=0.00;
          this.total=0.00;
          this.images = [];
          this.message = 'Thanks for your business';
          this.client = 'Client';
          this.email = '';
          this.add1 = '';
          this.add2 = '';
          this.add3 = '';
          this.shippingTo = '';
          this.sAdd1 = '';
          this.sAdd2 = '';
          this.sAdd3 = '';

        }
      },
       {
        text: 'Save',
        handler: () => {
          console.log('Confirm Ok');
          this.selectedClient;
          this.selectedItems;
          this.total;
          this.discount;

        }
      }
    ]
  }).then(alert => alert.present());
}
share() {
  const msg = 'Save <br/><br/> Preview <br/><br/> Email <br/><br/> Share <br/><br/> Add Credits <br/><br/> Print ';
   this.shareALert('','','');
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
      role: 'cancel',
      handler: () => {
        console.log('Confirm Cancel');
        this.selectedItems;
        this.selectedClient;
        this.data;
        debugger
        
      }
    },
    {
      text: 'Preview',
      cssClass: 'alert-button-inner',
      role: 'cancel',
      handler: () => {
        console.log('Confirm Cancel');
      }
    },
    {
      text: 'Email',
      cssClass: 'alert-button-inner',
      role: 'cancel',
      handler: () => {
        console.log('Confirm Cancel');
      }
    },
    {
      text: 'Share',
      cssClass: 'alert-button-inner',
      role: 'cancel',
      handler: () => {
        console.log('Confirm Cancel');
      }
    },
    {
      text: 'Cancel',
      cssClass: 'cancel',
      role: 'cancel',
      handler: () => {
        console.log('Confirm Cancel');
      }
    },
  ]
}).then(alert => alert.present());
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
                  // tslint:disable-next-line: no-debugger
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
    if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
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
    if (!arr) {
        const newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
    } else {
        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
    }

    const filePath = this.file.dataDirectory + name;
    const resPath = this.pathForImage(filePath);

    const newEntry = {
        name,
        path: resPath,
        filePath
    };

    this.images = [newEntry, ...this.images];
    this.ref.detectChanges(); // trigger change detection cycle
   // this.startUpload(newEntry);
});
}
async deleteImage(imgEntry, position) {
  let loading = await this.loadingController.create({
    message: 'Please wait...'
  });

  loading.present();
debugger;
this.images.splice(position, 1);

  this.storage.get(STORAGE_KEY).then(images => {
    const arr = JSON.parse(images);
    const filtered = arr.filter(name => name !== imgEntry.name);
    this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

    const correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

    debugger;
    this.file.removeFile(correctPath, imgEntry.name).then(res => {
        this.presentToast('File removed.');
    });
});
loading.dismiss();
}

startUpload(imgEntry) {
this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
    .then(entry => {
        ( entry as FileEntry).file(file => this.readFile(file));
    })
    .catch(err => {
        this.presentToast('Error while reading file.');
    });
}
readFile(file: any) {
const reader = new FileReader();
reader.onloadend = () => {
    const formData = new FormData();
    const imgBlob = new Blob([reader.result], {
        type: file.type
    });
    formData.append('file', imgBlob, file.name);
    this.uploadImageData(formData);
};
reader.readAsArrayBuffer(file);
}
async uploadImageData(formData: FormData) {
  const loading = await this.loadingController.create({
      message: 'Uploading image',
  });
  await loading.present();
  this.http.post('http://192.168.100.5/ionicimage/upload.php', formData)
      .pipe(
          finalize(() => {
              loading.dismiss();
          })
      )
      .subscribe(res => {
          // tslint:disable-next-line: no-string-literal
          if (res['success']) {
              this.presentToast('File upload complete.');
          } else {
              this.presentToast('File upload failed.');
          }
      });
}
wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

addClient() {
  // const navigationExtras: NavigationExtras = {
  //   state: {
  //     name: this.client,
  //     email: this.email,
  //     add1: this.add1,
  //     add2: this.add2,
  //     add3: this.add3,
  //     shippingTo: this.shippingTo,
  //     sAdd1: this.sAdd1,
  //     sAdd2: this.sAdd2,
  //     sAdd3: this.sAdd3
  //   }
  // };
  // this.router.navigate(['add-client'], navigationExtras);
  
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
  this.selectedItems = [];
  this.discount = 0.00;
  this.subtotal=0.00;
  this.total=0.00;
  this.images = [];
  this.message = 'Thanks for your business';
  this.client = 'Client';
  this.email = '';
  this.add1 = '';
  this.add2 = '';
  this.add3 = '';
  this.shippingTo = '';
  this.sAdd1 = '';
  this.sAdd2 = '';
  this.sAdd3 = '';
  this.databaseprovider.setItemUrl('');
}
removeSelected(pos) {
  debugger;
 // let a = this.databaseprovider.getSeletedItems();
  this.selectedItems.splice(pos,1);
 // this.databaseprovider.removeSelectedItem(pos);
 // a = this.databaseprovider.getSeletedItems();
  debugger

}
}
