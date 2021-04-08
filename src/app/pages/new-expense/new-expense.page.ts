import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { from } from 'rxjs';
import { Location } from "@angular/common";
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, ToastController, LoadingController, Events, ActionSheetController, Platform } from '@ionic/angular';
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
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SyncService } from 'src/app/services/sync.service';
import { Network } from '@ionic-native/network/ngx';



const STORAGE_KEY = 'expense_images';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.page.html',
  styleUrls: ['./new-expense.page.scss'],
})
export class NewExpensePage implements OnInit {

  expense = {
    expenseName: '',
    selectedDate: '',
    totalAmount: '',
    category: '',
    description: ''
  }
  tempCategories = [];
  categoriesClicked = false;
  categories = [];
  images = [];
  url;
  label = 'Assign to Client';
  a ='';
  tblName:any="items";
  tblId:any;
  usdId:any;
  name:any;
  acttype:any="added";
  lgdate:any="2019-11-21";
  getId:any=[];
  loginform: FormGroup;
  errormessages = {
    expenseName : [
      { type: 'requird', message: 'First Name is required'},
      { type: 'pattern', message: 'Enter valid is required'}


    ],
    totalAmount : [
      { type: 'requird', message: 'Email is required'},
      { type: 'pattern', message: 'Enter valid is required'}

    ],
    // Cost : [
    //   { type: 'requird', message: 'Email is required'},
    //   { type: 'pattern', message: 'Enter valid is required'}

    // ],
  }
  constructor(
    private router: Router,
    private location: Location,
    private datePicker: DatePicker,
    private datepipe: DatePipe,
    private alrtCtrl: AlertController,
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
    private syncService: SyncService,
    private camera: Camera,
    private plt: Platform,
    private http: HttpClient,
    private databaseprovider: DatabaseService,
    public formbuilder: FormBuilder,
    public network: Network,
    private nativeHttp: HTTP,

  ) { 
    this.getAllCategoriesLocaldb();
    this.storage.get('userId').then((val)=>{
      this.usdId = val;
      console.log(this.usdId);
    });
    this.plt.ready().then(() =>{

      this.expense.selectedDate = this.datepipe.transform(new Date(),'dd MMM yyyy');
    });
    this.sortItems();
    this.initializeItems();
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
    this.loginform = this.formbuilder.group({

      expenseName: new FormControl('', Validators.compose([
          Validators.required,
      ])),
      totalAmount: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.minLength(6),
      ]))
    });

  }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      if(typeof this.router.getCurrentNavigation().extras.state.client !== 'undefined') {
        // this.expense.billTo = this.router.getCurrentNavigation().extras.state.client;
        // this.label ='Bill to ' + this.router.getCurrentNavigation().extras.state.client.billing.first_name;
        // debugger
      }
    }
  }
  back() {
    this.router.navigate(['/menu/expenses']);
  }
  getCid(){
    debugger
    this.syncService.getExpenesonspot().then(data=>{
      this.getId=data;
      console.log(this.getId);
      this.tblId=this.getId[0].ID;
     // this.name = this.getId[0].Fname + ' ' + this.getId[0].Lname;
      debugger;
      console.log(this.tblId);
      this.AddLog();
    });
  }
  showDate() {

    
    var options={
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    };

    this.datePicker.show(options).then((date)=>{
      this.expense.selectedDate = this.datepipe.transform(date,'dd MMM yyyy');
      console.log('selected:',this.expense.selectedDate);
    });


    // this.datePicker.show({
    //   date: new Date(),
    //   mode: 'date',
    //   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    // }).then(
    //   date => console.log('Got date: ', date),
    //   err => console.log('Error occurred while getting date: ', err)
    // );
  }
  attchimage() {
    
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
  
     // this.images = [];
     debugger
      this.images = [newEntry, ...this.images];
     // this.images[0] = [newEntry, ...this.images];
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
  itemClicked(item) {
    debugger;
    this.expense.category = item;
    this.categoriesClicked = false;
  }
  clicked() {
    this.categoriesClicked = true;
  }
  geItems(searchbar) {
      this.initializeItems();
      const q = searchbar.srcElement.value;
      if (!q) {
        return;
      }
      this.tempCategories = this.tempCategories.filter((v) => {
        if (v && q) {
          if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
  
    } 
 initializeItems(){
      this.tempCategories = this.categories;
 }
 sortItems() {
debugger
  this.categories = this.categories.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  debugger
}
save() {
  if (this.loginform.valid === true) {
    this.addExpense();
    this.getCid();
  } else {
    alert('Kindly enter correct information in fields');
  }
  this.expense;
  const index = this.images.length;
  // this.expense.image = this.images[index-1];
  debugger
}
addClient() {
  this.url = this.router.url;
  const navigationExtras: NavigationExtras = {
    state: {
      url: this.url
    }
  };
  this.router.navigate(['add-client-clients'], navigationExtras);
}
addExpense() {
  debugger
  let now = new Date().toString();
  const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
  this.syncService.addExpense(this.expense.expenseName, a, this.expense.totalAmount, this.expense.category, this.expense.description)
    .then(data => {
      data
      this.databaseprovider.setupdateexpenses(1);
      this.router.navigate(['/menu/expenses']);
      if (this.network.type === 'none') {
      }else {
        debugger
        this.syncAddedExpenses();

      }
    });
}
syncAddedExpenses() {
  this.syncService.syncAddedExpenses().then((data) => {
    
    if (data.length > 0) {
      const IDs = [];
      for (let i = 0; i < data.length; i++) {
         IDs[i] = data[i].ID;
      }
      const url = this.databaseprovider.getURL();
  
      
     this.nativeHttp.setDataSerializer("json");
    
      let nativeCall = this.nativeHttp.post(url , 
        {
          'Name': 'syncAddedExpenses',
          "Expenses": data
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
        
        if (g.success === 1) {
          // alert('success');
          this.syncService.updateSyncedExpenses(IDs);
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
  }).then(() => {
    this.syncService.syncAddedLedger().then((data) => {
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
            'Name': 'syncAddedLedger',
            "Payments": data
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
            this.syncService.updateSyncedAddedLedger(IDs).then((data) => {
            });
          } else {
             // alert('failed');
          }

         // this.initializeItems();
        }, err => {
          console.log('JS call error', err);
          const error = JSON.parse(err.error);
          // alert(error.message);
          console.log('Native data:', JSON.parse(error));
        });

        debugger
      }

    });
  });
}
AddLog(){
  
  if (this.usdId === 1) {
    this.acttype = 'You added new';
  } else {
    this.acttype = 'You added new';
  }
  this.name = 'Expense';
  let now = new Date().toString();
  const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
  this.lgdate = 'at ' + a;
  this.tblName = 'tblexpenses';
  this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
  debugger
  this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
    
        console.log("Log has been added");
        this.syncService.syncAddedLog();
        //this.GetLogs();

  });
}
getAllCategoriesLocaldb() {
  this.syncService.getAllCategories().then((data) => {
  this.categories = data;
  this.tempCategories = data;
  for (let i = 0; i < this.categories.length; i++) {
    this.tempCategories[i] = this.categories[i].name;
  }
  });
}

}
