import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController, Platform, LoadingController } from '@ionic/angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import {  finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { DatabaseService} from 'src/app/services/database.service';
import { SyncService } from 'src/app/services/sync.service';
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';







@Component({
  selector: 'app-menu-addclient',
  templateUrl: './menu-addclient.page.html',
  styleUrls: ['./menu-addclient.page.scss'],
})
export class MenuAddclientPage implements OnInit {

  billingAddress = [
    {
      address: 'Islamabad',
    },
    {
      address: 'Rawalpindi'
    }
  ];
  tempBillingAddresses = [];

  showmore = true;
  data = [];
  billing = {};
  getId:any=[];
  tblName:any="clients";
  tblId:any;
  usdId:any;
  acttype:any="added";
  name:any;
  lgdate:any="2019-11-21";
  client = {
    AccountId: '113008225657937776461',
    Fname: '',
    Lname:'',
    Shop: '',
    BillingAddress: '',
    City: '',
    Cell: '',
  };
  loginform: FormGroup;
  loginform1: FormGroup;

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
    this.storage.get('userId').then((val)=>{
      this.usdId = val;
      console.log(this.usdId);
    });
    
    this.getformattedDate();
    this.loginform1 = this.formbuilder.group({
      Cell: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.minLength(6),
        Validators.minLength(11),
        Validators.maxLength(11)
      ]))
    });
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
     
      Shop: new FormControl('', Validators.compose([
        Validators.required,
       // Validators.minLength(6),
       // Validators.maxLength(30),
        // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')

      ]))

    });
    
  }

  ngOnInit() {
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
  close() {
    ;
    this.location.back();
  }
  save() {

    
    // tslint:disable-next-line: max-line-length
    if((this.client.Fname.length>0 && this.client.Lname.length>0 && this.client.Shop.length>0 &&this.client.BillingAddress.length>0&&this.client.City.length>0)) {
      //this.getDataNativeHttp();
      if (this.loginform.valid === true) {
        this.addClient();
        this.getCid();
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
  //  this.getDataNativeHttp();
   // console.log('client:'+ this.client.contactName+' '+ this.client.cell);

   
  }
//   openAlert() {
//     this.alertCtrl.create({
//      header: 'Terms',
//      inputs: [
//        {
//          type: 'radio',
//          label: '3 Days',
//          value: '3'
//        },
//        {
//          type: 'radio',
//          label: '7 Days',
//          value: '7'
//        },
//        {
//          type: 'radio',
//          label: '14 Days',
//          value: '14'
//        },
//        {
//          type: 'radio',
//          label: '21 Days',
//          value: '21'
//        },
//        {
//          type: 'radio',
//          label: '30 Days',
//          value: '30'
//        },
//        {
//          type: 'radio',
//          label: '45 Days',
//          value: '45'
//        },
//        {
//          type: 'radio',
//          label: '60 Days',
//          value: '60'
//        },
//        {
//          type: 'radio',
//          label: '180 Days',
//          value: '180'
//        },
//        {
//          type: 'radio',
//          label: 'Due on Receipt',
//          value: 'Due on Receipt'
//        },
//      ],
//      buttons: [
//        {
//          text: 'Cancel',
//          role: 'cancel',
//          handler: () => {
//            console.log('Cancel clicked');
//          }
//        },
//        {
//          text: 'OK',
//          handler: (data:string) => {
//            console.log('selected' + data);
//            this.client.days = data;
//        }
//        }
//      ]
//    }).then(alert => alert.present());

//  }
//  opeList() {
  
//    this.plt.ready().then((readySource) => {
//      console.log('Platform ready from', readySource);
//      // Platform now ready, execute any required native code
//      this.contacts.pickContact()
//      .then((response: Contact) => { 
//         console.log(response);
//         this.client.name = response.displayName;
//         this.client.contactName = response.displayName;
//         this.client.cell = response.phoneNumbers[0].value.toString();
//      });
//    });
//  }
AddLog(){
  if (this.usdId === 1) {
    this.acttype = 'You  added a new client';
  } else {
    this.acttype = 'You added a new client';
  }
  this.name
  let now = new Date().toString();
  const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
  this.lgdate = 'at ' + a;
  this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
  
  this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
    
        console.log("Log has been added");
        this.GetLogs();
        this.syncService.syncAddedLog();
        
  });
}
GetLogs(){
  this.syncService.getAllLogs().then(data=>{
    console.log(data);
  });
}
getCid(){
  
  this.syncService.getClientsonspot().then(data=>{
    this.getId=data;
    console.log(this.getId);
    this.tblId=this.getId[0].Cid;
    this.name = this.getId[0].Fname + ' ' + this.getId[0].Lname;
    ;
    console.log(this.tblId);
    this.AddLog();
  });
}
 showless() {
   this.showmore = false;
 }
 showmor() {
   this.showmore = true;
 }
 async getDataNativeHttp() {
 
  // const a = +new Date();
  // const b = this.client.first_name + a + '@gmail.com';
  // const c = this.client.first_name + b;
  ;
   let loading = await this.loadingCtrl.create();
   await loading.present();
   //const url = this.databaseservice.getURL();
   const url ="http://demoopm.tk";
  this.nativeHttp.setDataSerializer("json");
   let nativeCall = this.nativeHttp.post(url+ '/createClient.php',
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
     this.databaseservice.setupdateclients(1);
     this.router.navigate(['/menu/clients']);
    // this.initializeItems();
   },err =>{
     loading.dismiss();
     this.databaseservice.setupdateclients(1);
     this.router.navigate(['/menu/clients']);
     console.log('JS call error',err);
     const error = JSON.parse(err.error);
     alert(error.message);
     console.log('Native data:',JSON.parse(error));
   });

}
addClient() {

    this.client.Fname = this.client.Fname.charAt(0).toUpperCase() + this.client.Fname.substring(1);
    
    // tslint:disable-next-line: max-line-length
    this.syncService.addclient(this.client.Fname, this.client.Lname, this.client.Shop, this.client.BillingAddress, this.client.City, this.client.Cell)
    .then(data => {
      data
      this.databaseservice.setupdateclients(1);
      this.router.navigate(['/menu/clients']);
      if (this.network.type === 'none') {

      } else {
        this.syncClients();

      }

    });
  }
  syncClients() {
    this.syncService.syncAddedClients().then((data) => {
      if(data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].Cid;
        }
        const url = this.databaseservice.getURL();
      
        ;
       this.nativeHttp.setDataSerializer("json");
      
        let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncAddedClients',
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

        
      }
    
    });
  }
  geItems(searchbar) {
      this.initializeBillingAddress();
      const q = searchbar.srcElement.value;
      if (!q) {
        return;
      }
      this.tempBillingAddresses = this.tempBillingAddresses.filter((v) => {
        if (v.address && q) {
          if (v.address.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
  
  } 
  initializeBillingAddress() {
   this.tempBillingAddresses = this.billingAddress;
  }


}
