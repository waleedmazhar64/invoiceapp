import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController, Platform, LoadingController } from '@ionic/angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { DatabaseService} from 'src/app/services/database.service';
import { SyncService } from 'src/app/services/sync.service';
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  tblName:any="vendors";
  tblId:any;
  usdId:any;
  acttype:any="added";
  lgdate:any="2019-11-21";
  getId:any=[];
  name:any
  vendor = {
    Name: '',
    Address: '',
    Phone: '',
    Email: ''
  }
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
      { type: 'pattern', message: 'Enter valid phone number'},
      { type: 'minlength', message: 'Enter valid phone number'},
      { type: 'maxlength', message: 'Enter valid phone number'}

    ],
  }
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
    private databaseprovider: DatabaseService,
    private syncService: SyncService,
    private network: Network,
    private storage:Storage,
    private datePipe: DatePipe,
    public formbuilder: FormBuilder,



  ) { 
    this.storage.get('userId').then((val)=>{
      this.usdId = val;
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
        Validators.minLength(11),
        Validators.maxLength(11)
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
  close() {
    this.location.back();
  }
  save() {
    if((this.vendor.Name.length>0 && this.vendor.Address.length>0)) {
      //this.getDataNativeHttp();
      // this.addVendor();
      if (this.loginform.valid === true) {
        this.addVendor();
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
  async getDataNativeHttp() {
 
    debugger;
     let loading = await this.loadingCtrl.create();
     await loading.present();
     const url = this.databaseprovider.getURL();

    this.nativeHttp.setDataSerializer("json");
     let nativeCall = this.nativeHttp.post( url + '/createVendor.php',
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
  AddLog(){
    if (this.usdId === 1) {
      this.acttype = 'You added a new vendor';
    } else {
      this.acttype = 'You added a new vendor';
    }
    this.name 
    debugger
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
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
  getCid(){
    this.syncService.getVendorssonspot().then(data=>{
      this.getId=data;
      console.log(this.getId);
      this.tblId=this.getId[0].ID;
      this.name = this.getId[0].Name
      debugger;
      console.log(this.tblId);
      this.AddLog();
    });
  }
  addVendor() {
    // tslint:disable-next-line: max-line-length
    this.syncService.addvendor(this.vendor.Name, this.vendor.Address, this.vendor.Phone, this.vendor.Email)
    .then(data => {
      data
      this.getCid();
      this.databaseservice.setupdatevendors(1);
      this.router.navigate(['/menu/vendors']);
      if (this.network.type === 'none') {
       
      }else {
      this.syncService.syncAddedVendors().then((data) => {
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
             console.log('start');
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

    });
  }

}
