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
  selector: 'app-menu-editclient',
  templateUrl: './menu-editclient.page.html',
  styleUrls: ['./menu-editclient.page.scss'],
})
export class MenuEditclientPage implements OnInit {
  id = '';
  data = [];
  username = '';
  tblName:any="clients";
  tblId:any;
  usdId:any;
  acttype:any="edited";
  name:any;
  lgdate:any="2019-11-21";
  client = {
    Cid: '',
    AccountId: '',
    Fname: '',
    Lname:'',
    Shop: '',
    BillingAddress: '',
    City: '',
    Cell: '',
    Active: '',
    Balance: 0,
    Sync: 0
  };
  days = '30';
  notes = '';
  contactName = '';
  cell = '';
  phone = '';
  loginform: FormGroup;
  test = '';
  errormessages = {
    Fname : [
      { type: 'requird', message: 'First Name is required'},
      { type: 'pattern', message: 'Enter valid is required'}


    ],
    Shop : [
      { type: 'requird', message: 'Email is required'},
      { type: 'pattern', message: 'Enter valid is required'}

    ],
    BAddress : [
      { type: 'requird', message: 'Email is required'},
      { type: 'pattern', message: 'Enter valid is required'}

    ],
    City : [
      { type: 'requird', message: 'Email is required'},
      { type: 'pattern', message: 'Enter valid is required'}

    ],
    Cell : [
      { type: 'requird', message: 'Email is required'},
      { type: 'pattern', message: 'Enter valid phone number'},
      { type: 'minlength', message: 'Enter valid phone number'},
      { type: 'maxlength', message: 'Enter valid phone number'}


    ],
    Lname : [
      { type: 'requird', message: 'Password is required'},
      { type: 'minlength', message: 'Enter atleast 6 characters'}
    ]
  };

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
    private syncService: SyncService,
    private network: Network,
    private storage:Storage,
    private datePipe: DatePipe,
    public formbuilder: FormBuilder,


  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.client = this.router.getCurrentNavigation().extras.state.editclient;
      // this.id = this.router.getCurrentNavigation().extras.state.editclient.id;
      // this.username = this.router.getCurrentNavigation().extras.state.editclient.username;
      // this.phone = this.router.getCurrentNavigation().extras.state.editclient.billing.phone;
      debugger;
      this.storage.get('userId').then((val)=>{
        this.usdId=val;
        console.log(this.usdId);
      });
      this.getformattedDate();
      this.loginform = this.formbuilder.group({

        Fname: new FormControl('', Validators.compose([
            Validators.required,
        ])),
        Lname: new FormControl('', Validators.compose([
          Validators.required,
          //Validators.minLength(6),
        ])),
        BAddress: new FormControl('', Validators.compose([
          Validators.required,
          //Validators.minLength(6),
        ])),
        City: new FormControl('', Validators.compose([
          Validators.required,
          //Validators.minLength(6),
        ])),
        Cell: new FormControl('', Validators.compose([
          Validators.required,
         // Validators.pattern('03[0-9]{2}-(?!1234567)(?!1111111)(?!7654321)[0-9]{7}'),
          Validators.minLength(11),
          Validators.maxLength(11)
        ])),
        Shop: new FormControl('', Validators.compose([
          Validators.required,
         // Validators.minLength(6),
         // Validators.maxLength(30),
          // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  
        ]))
  
      });

    }
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
  
    if((this.client.Fname.length>0 && this.client.Lname.length>0 && this.client.Shop.length>0 &&this.client.BillingAddress.length>0&&this.client.City.length>0&& this.client.Cell !== "" )) {
     // this.getDataNativeHttp();
    // this.updateClient();
     if (this.loginform.valid === true) {
      this.updateClient();
     // this.getCid();
    } else {
      alert('Kindly enter correct information in fields');
    }
    } else {
      this.alertCtrl.create({
            header: 'Warning',
            message: 'Kindly Fill All Fields',
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
 
    // const z = this.client.billing.phone;
    // const p = this.phone.toString();
    // const a = +new Date();
    // const b = this.client.first_name + a + '@gmail.com';
    // const c = this.client.first_name + b;
    debugger;
     let loading = await this.loadingCtrl.create();
     await loading.present();
     const url = this.databaseservice.getURL();

    this.nativeHttp.setDataSerializer("json");
    let nativeCall = this.nativeHttp.post(url + '/updateClient.php',
      this.client
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
       this.data = JSON.parse(data.data);
       console.log(this.data[0]);

       this.databaseservice.setupdateclients(1);
       this.router.navigate(['/menu/clients']);

  
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
    if (this.usdId === 1) {
      this.acttype = 'You  edited client';
    } else {
      this.acttype = 'You edited client';
    }
    this.name = this.client.Fname + ' ' + this.client.Lname;
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.tblName,this.tblId,this.usdId,this.acttype,this.lgdate
    debugger
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
  updateClient() {
    if (this.client.Sync === 1) {
      this.client.Sync = 2;
 }
    this.syncService.updateClient(
      this.client.Fname, 
      this.client.Lname, 
      this.client.Shop, 
      this.client.BillingAddress, 
      this.client.City, 
      this.client.Cell, 
      this.client.Cid,
      this.client.Balance,
      this.client.Sync
      )
    .then(data => {
      data
      console.log(this.client.Cid);
      this.tblId=this.client.Cid;
      this.AddLog();
      this.databaseservice.setupdateclients(1);
      this.router.navigate(['/menu/clients']);
      if (this.network.type === 'none') {
       
      }else {
        debugger
        this.syncUpdateClients();
        
      }
    });
  }
  syncUpdateClients() {
    this.syncService.syncUpdatedClients().then((data) => {
      if(data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].Cid;
        }
        const url = this.databaseservice.getURL();
      
        debugger;
       this.nativeHttp.setDataSerializer("json");
       
        let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncUpdatedClients',
            "Clients": data
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
            //alert('success');
            this.syncService.updateSyncedClients(IDs).then((data) => {
            });
          } else {
            // alert('failed');
          }

         // this.initializeItems();
        },err =>{
          console.log('JS call error',err);
          const error = JSON.parse(err.error);
          //alert(error.message);
          console.log('Native data:',JSON.parse(error));
        });

        debugger
      }
    
    });
  }
}
