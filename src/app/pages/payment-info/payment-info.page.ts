import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { NavigationExtras } from '@angular/router';
import { SyncService } from 'src/app/services/sync.service';
import { DatabaseService} from 'src/app/services/database.service';
import { Network } from '@ionic-native/network/ngx';
import { HTTP } from '@ionic-native/http/ngx'
import { HttpClient } from '@angular/common/http';
import {  finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';





@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.page.html',
  styleUrls: ['./payment-info.page.scss'],
})
export class PaymentInfoPage implements OnInit {

  url;
  meta_data: [];
  Cid = 0;
  Amount = '';
  Remarks = '';
  payment ;
  duepayment;
  payed;
  total;
  myDate = new Date().toString();
  addnewpayment = false;
  style = 'bootstrap';
  data = [
    {
      no: '1',
      date: '10/29/2019',
      amount: 'softisans',
      pid: ''
     // note: '24'
    }
  ];
  usdId:any;
  acttype:any;
  lgdate:any;
  name:any;
  tblId:any;
  tblName:any;
  clientSync = 0;
  client ;
  edit = 0;
  paymentID = 0;
  date = '';
  tempAmount = 0;
  ledgerSync = 0;

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private datePicker: DatePicker,
    private syncService: SyncService,
    private databaseservice: DatabaseService,
    private network: Network,
    private nativeHttp: HTTP,
    private storage: Storage,
    private events: Events,


 
  ) {
    this.storage.get('userId').then((val)=>{
      this.usdId = val;
      console.log(this.usdId);
    });
    this.myDate = this.datePipe.transform(this.myDate, 'dd MMM yyyy');
    debugger;
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.meta_data !== 'undefined') {
       // debugger;
        this.data = this.router.getCurrentNavigation().extras.state.meta_data;
        this.duepayment = this.router.getCurrentNavigation().extras.state.duepayment;
        this.payed = this.router.getCurrentNavigation().extras.state.payed;
        debugger;

      }
    }
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.Cid !== 'undefined' && this.router.getCurrentNavigation().extras.state.url !== 'ledger') {
       // debugger;
        this.edit = 0;
        this.Cid = this.router.getCurrentNavigation().extras.state.Cid;
        this.name = this.router.getCurrentNavigation().extras.state.Name;
        this.clientSync = this.router.getCurrentNavigation().extras.state.Sync;
        this.url = this.router.getCurrentNavigation().extras.state.url;
        if  (this.url === '/ledger') {
          this.client =  this.router.getCurrentNavigation().extras.state.Client;
          debugger
        }
        
        debugger;

      }
      if ( typeof this.router.getCurrentNavigation().extras.state.Cid !== 'undefined' && this.router.getCurrentNavigation().extras.state.url === 'ledger') {
        // debugger;
         this.edit = 1;
         this.paymentID = this.router.getCurrentNavigation().extras.state.ID;
         this.ledgerSync = this.router.getCurrentNavigation().extras.state.LedgerSync;
         this.tempAmount = this.router.getCurrentNavigation().extras.state.Amount;
         this.Amount = this.router.getCurrentNavigation().extras.state.Amount;
         this.Remarks = this.router.getCurrentNavigation().extras.state.Remarks;
         this.date = this.router.getCurrentNavigation().extras.state.Date;
         this.Cid = this.router.getCurrentNavigation().extras.state.Cid;
         this.name = this.router.getCurrentNavigation().extras.state.Name;
         this.clientSync = this.router.getCurrentNavigation().extras.state.Sync;
         this.url = this.router.getCurrentNavigation().extras.state.url;
         if  (this.url === '/ledger') {
           this.client =  this.router.getCurrentNavigation().extras.state.Client;
           debugger
         }
         
         debugger;
 
       }
    }
    if (this.data.length > 0) {
      this.addnewpayment = false;
    } else {
     this.addnewpayment = true;
    }
   
   }

  ngOnInit() {
  }
  back() {
    debugger
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //    // user: this.received
    //    meta_data: this.data,
    //    payed:this.payed,
    //    duepayment: this.duepayment
    //   }
    // };
    // this.router.navigate(['addinvoice'], navigationExtras);
    this.router.navigate(['/menu/clients']);
  }
  onActivate(event) {
    if(event.type === 'click') {
      console.log(event.row);
  }
  }
  selectDate() {
    var options={
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    };

    this.datePicker.show(options).then((date)=>{
      this.myDate = this.datePipe.transform(date,'dd MMM yyyy');
     // console.log('selected:',this.myDate);
    });
  }
  AddLog() {

    if (this.edit === 0) {
      if (this.usdId === 1) {
        this.acttype = 'You received payment from';
      } else {
        this.acttype = 'You received payment from';
      }
    }
    if (this.edit === 1) {
      if (this.usdId === 1) {
        this.acttype = 'You edited received payment from';
      } else {
        this.acttype = 'You edited received payment from';
      }
    }
    
    //this.name = 'Purchased Order';
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.tblName = 'tblledger';
    this.tblId = this.Cid;
    // this.tblId = this.PO.ID;
    // this.tblId = this.syncService.getUpdatedPOID();
    this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
    debugger
    this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
      
          console.log("Log has been added");
          this.syncService.syncAddedLog();
          //this.GetLogs();
          
    });
  }
  addpayment() {

    if (this.edit === 0) {
      let num = this.data.length;
      num = num + 1;
      this.myDate
      debugger
      this.databaseservice.setupdateclients(1);
      if (parseInt(this.Amount) > 0) {
        if (this.clientSync === 1) {
          this.clientSync = 2;
        }
        this.clientSync
        let now = new Date().toString();
        const a = this.datePipe.transform(now, 'dd MMM yyyy');
        //const a = this.datePipe.transform(now, 'yyyy MM dd');
  
        debugger
        this.syncService.addPayment(this.Cid, this.clientSync, a, parseInt(this.Amount), this.Remarks).then(data => {
          data
          this.events.publish('refreshLedger', 'saad2', '');
          this.databaseservice.setupdateclients(1);
          this.databaseservice.setupdateclientLeger(1);
          if (this.url === '/ledger') {
            debugger
            const navigationExtras: NavigationExtras = {
              state: {
                client: this.client
              }
             };
            this.router.navigate(['ledger'], navigationExtras);
          } else {
            this.router.navigate([this.url]);
          }
          this.AddLog();
          if (this.network.type === 'none') {
          } else {
            this.syncAddedPayment();
            //this.AddLog();
          }
        });
      } else {
        alert('Kindly add payment more than 0');
      }
    }
    if ( this.edit === 1) {
      this.events.publish('refreshLedger', 'saad2', '');
      let num = this.data.length;
      num = num + 1;
      this.databaseservice.setupdateclients(1);
      if (parseInt(this.Amount) > 0) {
        if (this.clientSync === 1) {
          this.clientSync = 2;
        }
        if (this.ledgerSync === 1) {
          this.ledgerSync = 2;
        }
        // alert('temp ' + this.tempAmount + '\nOriginal ' + this.Amount)
        this.syncService.editPayment(this.Cid, this.clientSync, this.date, parseInt(this.Amount), this.Remarks,this.paymentID, this.tempAmount, this.ledgerSync).then(data => {
          data
          this.databaseservice.setupdateclients(1);
          this.databaseservice.setupdateclientLeger(1);
          if (this.url === '/ledger') {
            debugger
            const navigationExtras: NavigationExtras = {
              state: {
                client: this.client
              }
             };
            this.router.navigate(['ledger'], navigationExtras);
          } else {
            this.router.navigate([this.url]);
          }
          this.AddLog();
          if (this.network.type === 'none') {
          } else {
            this.syncUpdatedPayment();
            //this.AddLog();
          }
        });
      } else {
        alert('Kindly add payment more than 0');
      }
    }
   
    // if (this.payment && this.payment !== null && this.payment >0) {
    //   const obj= {
    //   no: num.toString(),
    //   date: this.myDate,
    //   amount: this.payment,
    //   pid:'98'
    //   }
    //   this.data.push(obj);
    //   this.data = [...this.data];
    //   this.addnewpayment = false;
    //   this.payed = this.payed + this.payment;
    //   this.duepayment = this.duepayment -this.payment;
    //   const a = parseFloat(this.payed.toString()).toFixed(2);
    //   const b =parseFloat(this.duepayment.toString()).toFixed(2);
    //   this.payed = parseFloat(a);
    //   this.duepayment = parseFloat(b);
    //   this.payment = '';
    //   debugger;
    // } else {
    //   alert("Kindly add correct Amount");
      
    // }
  }
  syncAddedPayment() {
    this.syncService.syncAddedLedger().then((data) => {
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
            }).then(() => {
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
                        this.databaseservice.setupdateclients(1);
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
 syncUpdatedPayment() {
  this.syncService.syncUpdatedLedger().then((data) => {
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
          'Name': 'syncUpdatedLedger',
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
          }).then(() => {
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
                      this.databaseservice.setupdateclients(1);
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
 
  open(row,value) {
    debugger;
    this.data.splice(row,1);
    this.data = [...this.data];
    this.payed = this.payed - value.amount;
    this.duepayment = this.duepayment + value.amount;
    const a = parseFloat(this.payed.toString()).toFixed(2);
    const b = parseFloat(this.duepayment.toString()).toFixed(2);
    this.payed = parseFloat(a);
    this.duepayment = parseFloat(b);
    console.log(value);
    console.log(row);
  }

}
