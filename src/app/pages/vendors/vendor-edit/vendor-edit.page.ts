import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController, Platform, LoadingController } from '@ionic/angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { HTTP } from '@ionic-native/http/ngx'
import { HttpClient } from '@angular/common/http';
import {  finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { DatabaseService} from 'src/app/services/database.service';
import { SyncService } from 'src/app/services/sync.service';
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';





@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.page.html',
  styleUrls: ['./vendor-edit.page.scss'],
})
export class VendorEditPage implements OnInit {
  tblName:any="vendors";
  tblId:any;
  usdId:any;
  acttype:any="edited";
  lgdate:any="2019-11-21";
  name:any;
  vendor = {
    VendorID: '',
    Name: '',
    Address: '',
    Phone: '',
    Email: '',
    bActive: 0,
    Balance:'',
    Sync: 0
  }
  tempVendor = {
    ID: '',
    Name: '',
    Address: '',
    Phone: '',
    Email: '',
    bActive: 0,
    Balance:'',
    Sync: 0
  };
  edit = false;
  loginform: FormGroup;

  errormessages = {
    Name : [
      { type: 'requird', message: 'First Name is required'},
      { type: 'pattern', message: 'Enter valid is required'}


    ],
    Address : [
      { type: 'requird', message: 'Email is required'},
      { type: 'pattern', message: 'Enter valid is required'}

    ],
    Phone : [
      { type: 'requird', message: 'Email is required'},
      { type: 'pattern', message: 'Enter valid is required'}

    ],
  }
  showEdit = 0;
  constructor(
    private router: Router,
    private location: Location,
    private alertCtrl: AlertController,
    private contacts: Contacts,
    private plt: Platform,
    private http: HttpClient,
    private nativeHttp: HTTP,
    private loadingCtrl: LoadingController,
    private databaseservice: DatabaseService,
    private alrtCtrl: AlertController,
    private syncService: SyncService,
    private network: Network,
    private storage:Storage,
    private datePipe: DatePipe,
    public formbuilder: FormBuilder,



  ) {
    this.storage.get('app').then((val1) => {
      if (val1 === 'invoice') {
        this.storage.get('ID').then((val) => {
          this.syncService.getbValue(val, 'Vendor Edit').then((data) => {
            this.showEdit = data[0].bValue;
          });
        });
      } else {
        this.showEdit = 1;
        debugger
      }
    });
    if (this.router.getCurrentNavigation().extras.state) {
      this.tempVendor = this.router.getCurrentNavigation().extras.state.editvendor;
      this.vendor.VendorID = this.tempVendor.ID;
      this.vendor.Name = this.tempVendor.Name;
      this.vendor.Address = this.tempVendor.Address;
      this.vendor.Phone = this.tempVendor.Phone;
      this.vendor.Email = this.tempVendor.Email;
      this.vendor.bActive = this.tempVendor.bActive;
      this.vendor.Balance = this.tempVendor.Balance;
      this.vendor.Sync = this.tempVendor.Sync;

      if (this.network.type === 'none') {
       
      }else {
        debugger
        this.syncAddedVendors();
        
      }


      debugger
    }
    this.storage.get('userId').then((val)=>{
      this.usdId=val;
      console.log(this.usdId);
    });
    this.getformattedDate();
    this.loginform = this.formbuilder.group({

      Name: new FormControl('', Validators.compose([
          Validators.required,
      ])),
      Address: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.minLength(6),
      ])),
      Phone: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.minLength(6),
      ])),
    });
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
  save() {
    if((this.vendor.Name.length>0 && this.vendor.Address.length>0 )) {
     // this.getDataNativeHttp();
    // this.updateVendor();
     if (this.loginform.valid === true) {
      this.updateVendor();
      //this.getCid();
    } else {
      alert('Kindly enter correct information in fields');
    }
    } else {
      this.alertCtrl.create({
            header: 'Warning',
            message: 'Kindly fill Vendor Name and Address Field(s)',
            buttons: [
                      {
                        text: 'OK',
                        role: 'cancel',
                        handler: () => {
                          console.log('Cancel clicked');
                        }
                      }
                    ]
      }).then(alert => alert.present());
    }
  }
  close() {
    this.router.navigate(['/menu/vendors']);
  }
  async getDataNativeHttp() {
 
    debugger;
     let loading = await this.loadingCtrl.create();
     await loading.present();
     const url = this.databaseservice.getURL();

    this.nativeHttp.setDataSerializer("json");
     let nativeCall = this.nativeHttp.post(url + '/updateVendor.php',
      this.vendor
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
       this.databaseservice.setupdatevendors(1);
       this.router.navigate(['/menu/vendors']);
      // this.initializeItems();
     },err =>{
       loading.dismiss();
       this.databaseservice.setupdatevendors(1);
       this.router.navigate(['/menu/vendors']);
       console.log('JS call error',err);
       const error = JSON.parse(err.error);
       alert(error.message);
       console.log('Native data:',JSON.parse(error));
     });
  
  }
  del() {
    this.shareALert("Warning",'','Are you sure you want to deactivate this Vendor?');
  }
  shareALert(head, sub, msg) {
    this.alrtCtrl.create({
      header: head,
      subHeader: sub,
      message: msg,
      cssClass: 'alertSize',
      buttons: [
        {
          text: 'Deactivate',
          cssClass: 'customClass',
          role: 'cancel',
          handler: () => {
             console.log('yes')
            // this.deleteClient();
             this.deleteVendorlocaldb();
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
  
  async delete() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const url = this.databaseservice.getURL();

   this.nativeHttp.setDataSerializer("json");
    let nativeCall = this.nativeHttp.post(url + '/deactivateVendor.php',
    {
      "VendorID": this.vendor.VendorID
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
      this.databaseservice.setupdatevendors(1);
      this.router.navigate(['/menu/vendors']);
     // this.initializeItems();
    },err =>{
      loading.dismiss();
      this.databaseservice.setupdatevendors(1);
      this.router.navigate(['/menu/vendors']);
      console.log('JS call error',err);
      const error = JSON.parse(err.error);
      alert(error.message);
      console.log('Native data:',JSON.parse(error));
    });
 
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
             this.activateVendorlocaldb();
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
    this.activateALert("Warning",'','Are you sure you want to activate this Vendor?');

  }
  async activateItem() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const url = this.databaseservice.getURL();

    debugger;
   this.nativeHttp.setDataSerializer("json");
    let nativeCall = this.nativeHttp.post(url + '/activateVendor.php',
    {
      "VendorID": this.vendor.VendorID
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
      this.databaseservice.setupdatevendors(1);
      this.router.navigate(['/menu/vendors']);

 
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
    if (this.acttype === 'edited') {
      if (this.usdId === 1) {
        this.acttype = 'You edited Vendor';
      } else {
        this.acttype = 'You edited Vendor';
      }
    }
    if (this.acttype === 'activated') {
      if (this.usdId === 1) {
        this.acttype = 'You activated Vendor';
      } else {
        this.acttype = 'You activated Vendor';
      }
    }
    if (this.acttype === 'deactivated') {
      if (this.usdId === 1) {
        this.acttype = 'You deactivated Vendor';
      } else {
        this.acttype = 'You deactivated Vendor';
      }
    }
   
    this.name = this.vendor.Name
    debugger
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate;
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
  updateVendor() {
    if (this.vendor.Sync === 1) {
      this.vendor.Sync = 2;
 }
 this.vendor.Balance
    this.syncService.updateVendor(this.vendor.Name, this.vendor.Address, this.vendor.Phone, this.vendor.Email, this.vendor.VendorID,this.vendor.Balance ,this.vendor.Sync)
    .then(data => {
      data
      this.tblId=this.vendor.VendorID;
      this.AddLog();
      this.databaseservice.setupdatevendors(1);
      this.router.navigate(['/menu/vendors']);
      if (this.network.type === 'none') {
       
      }else {
        debugger
        this.syncVendors();
        
      }

    });
  }
  deleteVendorlocaldb() {
    debugger
    if (this.vendor.Sync === 1) {
      this.vendor.Sync = 2;
   }
    this.syncService.deleteVendor(this.vendor.VendorID, this.vendor.Sync)
    .then(data => {
      data
      this.tblId=this.vendor.VendorID;
      this.acttype="deactivated";
      this.AddLog();
      this.databaseservice.setupdatevendors(1);
      this.router.navigate(['/menu/vendors']);
      if (this.network.type === 'none') {
       
      }else {
        debugger
        this.syncVendors();
        
      }

    });
  }
  activateVendorlocaldb() {
    if (this.vendor.Sync === 1) {
      this.vendor.Sync = 2;
 }
    this.syncService.activateVendor(this.vendor.VendorID, this.vendor.Sync)
    .then(data => {
      data
      this.tblId=this.vendor.VendorID;
      this.acttype="activated";
      this.AddLog();
      this.databaseservice.setupdatevendors(1);
      this.router.navigate(['/menu/vendors']);
      if (this.network.type === 'none') {
       
      }else {
        debugger
        this.syncVendors();
        
      }

    });
  }
  syncVendors() {
    this.syncService.syncUpdatedVendors().then((data) => {
      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].ID;
        }
        const url = this.databaseservice.getURL();
      
        debugger;
       this.nativeHttp.setDataSerializer("json");
       
        let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncUpdatedVendors',
            "Vendors": data
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
            this.syncService.updateSyncedVendors(IDs).then((data) => {
            });
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

        debugger
      }
     
    });
  }
  syncAddedVendors() {
    this.syncService.syncAddedVendors().then((data) => {
      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].ID;
        }
        const url = this.databaseservice.getURL();
      
        debugger;
       this.nativeHttp.setDataSerializer("json");
       
        let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncAddedVendors',
            "Vendors": data
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
            this.syncService.updateSyncedVendors(IDs).then((data) => {
            });
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

        debugger
      }
     
    });
  }


}
