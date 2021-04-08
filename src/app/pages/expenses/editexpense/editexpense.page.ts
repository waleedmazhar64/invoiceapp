import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Network } from '@ionic-native/network/ngx';
import { AlertController, ToastController, LoadingController, Events, ActionSheetController, Platform, NavController } from '@ionic/angular';
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
import { DatePipe, Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SyncService } from 'src/app/services/sync.service';
import { from } from 'rxjs';


const STORAGE_KEY = 'expense_images';

@Component({
  selector: 'app-editexpense',
  templateUrl: './editexpense.page.html',
  styleUrls: ['./editexpense.page.scss'],
})
export class EditexpensePage implements OnInit {

  edit = false;
  expense = {
    expenseName: 'name',
    selectedDate: 'da',
    Amount: 0,
    Category: 'category',
    Description: 'description',
    Date: '',
    Name: '',
    ID: 0,
    Sync: 0
  }
  prev = '';
  tempExpense = {};
  tempCategories = [];
  categoriesClicked = false;
  client = {
    id: 0,
    billing: {
      first_name: '',
      }
  };
  url;
   tempName = '';
   temptotalAmount = 0;
   tempcategory = '';
   tempdescription = '';
   tblName:any="items";
  tblId:any;
  usdId:any;
  name:any;
  acttype:any="added";
  lgdate:any="2019-11-21";
  getId:any=[];
   
  categories = [];
  label = 'Assign to Client';
  images = [];
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
  showEdit = 0;
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
    private camera: Camera,
    private plt: Platform,
    private http: HttpClient,
    public formbuilder: FormBuilder,
    private databaseprovider: DatabaseService, 
    private syncService: SyncService,
    private nativeHttp: HTTP,
    private network: Network,
    private nav: NavController,


    ) {
      this.storage.get('app').then((val1) => {
        if (val1 === 'invoice') {
          this.storage.get('ID').then((val) => {
            this.syncService.getbValue(val, 'Expense Edit').then((data) => {
              this.showEdit = data[0].bValue;
            });
          });
        } else {
          this.showEdit = 1;
        }
      });
     
      this.storage.get('userId').then((val)=>{
        this.usdId = val;
        console.log(this.usdId);
      });
      this.plt.ready().then(() =>{

        this.expense.selectedDate = this.datepipe.transform(new Date(), 'dd MMM yyyy');
      });
      this.sortItems();
      this.initializeItems();
      if (this.router.getCurrentNavigation().extras.state) {
        this.prev = this.router.getCurrentNavigation().extras.state.url;
        if (this.prev === '/menu/expenses') {
          this.events.publish('refreshExpenses', 'saad2', '');
        }
        if (this.prev === '/menu/logs') {
          this.events.publish('refreshLogs', 'saad2', '');
        }
        this.expense = this.router.getCurrentNavigation().extras.state.expense;
        this.tempName = this.expense.Name;
        this.temptotalAmount =  this.expense.Amount;
        this.tempcategory = this.expense.Category;
        this.tempdescription = this.expense.Description;

      }
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
    // if (this.prev === '/menu/expenses') {
    //    this.nav.navigateRoot(this.prev);
    // } else {
    //   this.location.back();
    // }
    // this.router.navigate(['/menu/expenses']);
    this.nav.navigateRoot(this.prev);
  }
  // save() {
  //   this.router.navigate(['expenses']);
  // }
  showDate() {

    var options={
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    };

    this.datePicker.show(options).then((date)=>{
      this.expense.selectedDate = this.datepipe.transform(date,'dd-MM-yyyy');
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
   // this.expense.category = item;
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
  this.expense;
  const index = this.images.length;
  // this.expense.image = this.images[index-1];
  const navigationExtras: NavigationExtras = {
    state: {
      expense: this.expense
    }
  };
  this.router.navigate(['/menu/expenses'], navigationExtras);

  debugger
}
del() {
  this.shareALert("Warning",'','Are you sure you want to delete this expense?');
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
           this.deleteExpense();
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
addClient() {
  this.url = this.router.url;
  const navigationExtras: NavigationExtras = {
    state: {
      url: this.url
    }
  };
  this.router.navigate(['add-client-clients'], navigationExtras);
}
deleteExpense() {
  this.expense
  debugger
  if (this.expense.Sync === 1) {
    this.expense.Sync = 2;
 }
 debugger
  this.syncService.deleteExpense(this.expense.ID, this.expense.Sync).then(() => {
      this.AddLog();
      this.databaseprovider.setupdateexpenses(1);
      this.router.navigate(['/menu/expenses']);
      if (this.network.type === 'none') {

      }else {
        debugger
        this.syncAddedExpenses();
        this.syncUpdatedExpenses();
        }
  });

}
AddLog() {

  if (this.usdId === 1) {
    this.acttype = 'Adnan Ali delete';
  } else {
    this.acttype = 'Test deleted';
  }
  this.name = 'Expense';
  let now = new Date().toString();
  const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
  this.lgdate = 'at ' + a;
  this.tblName = 'tblexpenses';
  this.tblId = this.expense.ID;
  this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
  debugger
  this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
    
        console.log("Log has been added");
        this.syncService.syncAddedLog();
        //this.GetLogs();
        
  });
}
syncAddedExpenses() {
  this.syncService.syncAddedExpenses().then((data) => {
    debugger
    if (data.length > 0) {
      const IDs = [];
      for (let i = 0; i < data.length; i++) {
         IDs[i] = data[i].ID;
      }
      const url = this.databaseprovider.getURL();
  
      
     this.nativeHttp.setDataSerializer("json");
      let nativeCall = this.nativeHttp.post(url + '/syncAddedExpenses.php',
      {
        "Expenses": data
      }
      ,{
        'Content-Type':'application/json',
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
  });
 
}
syncUpdatedExpenses() {
  this.syncService.syncUpdatedExpenses().then((data) => {
    debugger
    if (data.length > 0) {
      const IDs = [];
      for (let i = 0; i < data.length; i++) {
         IDs[i] = data[i].ID;
      }
      const url = this.databaseprovider.getURL();
  
      
     this.nativeHttp.setDataSerializer("json");
      let nativeCall = this.nativeHttp.post(url + '/syncDeletedExpenses.php',
      {
        "Expenses": data
      }
      ,{
        'Content-Type':'application/json',
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
