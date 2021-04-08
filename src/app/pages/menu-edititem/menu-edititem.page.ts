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
  selector: 'app-menu-edititem',
  templateUrl: './menu-edititem.page.html',
  styleUrls: ['./menu-edititem.page.scss'],
})
export class MenuEdititemPage implements OnInit {
  id;
  data = [];
  tblName:any="items";
  tblId:any;
  usdId:any;
  name:any;
  acttype:any="edited";
  lgdate:any="2019-11-21";
  item = {
    itemid: '',
    AccountId: '',
    Description: '',
    Rate: '',
    Cost: '',
    Instock: '',
    Active: '',
    Sync: 0
  };
  loginform: FormGroup;

  errormessages = {
    Description : [
      { type: 'requird', message: 'First Name is required'},
      { type: 'pattern', message: 'Enter valid is required'}


    ],
    Rate : [
      { type: 'requird', message: 'Email is required'},
      { type: 'pattern', message: 'Enter valid is required'}

    ],
    Cost : [
      { type: 'requird', message: 'Email is required'},
      { type: 'pattern', message: 'Enter valid is required'}

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
    private syncService: SyncService,
    private network: Network,
    private storage:Storage,
    private datePipe: DatePipe,
    public formbuilder: FormBuilder,


  ) { 
    if (this.router.getCurrentNavigation().extras.state) {
      this.item = this.router.getCurrentNavigation().extras.state.edititem;
      this.id = this.router.getCurrentNavigation().extras.state.edititem.id;
      debugger
    }
    this.storage.get('userId').then((val)=>{
      this.usdId=val;
      console.log(this.usdId);
    });
    this.getformattedDate();
    this.loginform = this.formbuilder.group({

      Description: new FormControl('', Validators.compose([
          Validators.required,
      ])),
      Rate: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.minLength(6),
      ])),
      Cost: new FormControl('', Validators.compose([
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
  close() {
    this.location.back();
  }
  save() {
    debugger;
    if((this.item.Description.length>0 &&  (this.item.Rate !== null&& this.item.Rate !== '') &&  (this.item.Cost !== null && this.item.Cost !== ''))) {
     // this.getDataNativeHttp();
    // this.updateItem();
     if (this.loginform.valid === true) {
      this.updateItem();
      //this.getCid();
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
 
    debugger;
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const url = this.databaseservice.getURL();

    debugger
    this.nativeHttp.setDataSerializer("json");
    let nativeCall = this.nativeHttp.post(url + '/updateItem.php',
    this.item
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

       this.databaseservice.setupdateitems(1);
       this.router.navigate(['/menu/items']);

  
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
      this.acttype = 'You edited item';
    } else {
      this.acttype = 'You edited item';
    }
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.name = this.item.Description;
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
  updateItem() {
    if (this.item.Sync === 1) {
         this.item.Sync = 2;
    }
    debugger
    this.syncService.updateItem(this.item.Description, this.item.Rate, this.item.Cost, this.item.itemid, this.item.Sync)
    .then(data => {
      data
      this.tblId=this.item.itemid;
      this.AddLog();
      this.databaseservice.setupdateitems(1);
      this.router.navigate(['/menu/items']);
      if (this.network.type === 'none') {
       
      }else {
        debugger
        this.syncUpdatedItem();
        
      }
    });
  }
  syncUpdatedItem() {
    this.syncService.syncUpdatedItems().then((data) => {
      if (data.length > 0) {
        const IDs = [];
        for (let i = 0; i < data.length; i++) {
           IDs[i] = data[i].itemid;
        }
        const url = this.databaseservice.getURL();
    
        debugger;
       this.nativeHttp.setDataSerializer("json");
       
        let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncUpdatedItems',
            "Items": data
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
             //alert('success Updated');
            this.syncService.updateSyncedItems(IDs).then((data) => {
            });
          } else {
           //  alert('failed');
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

}
