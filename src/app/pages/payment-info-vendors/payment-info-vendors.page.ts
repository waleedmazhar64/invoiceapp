import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { NavigationExtras } from '@angular/router';
import { SyncService } from 'src/app/services/sync.service';
import { DatabaseService} from 'src/app/services/database.service';
import { Network } from '@ionic-native/network/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import {  finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { Storage } from '@ionic/storage';
import { debug } from 'util';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-payment-info-vendors',
  templateUrl: './payment-info-vendors.page.html',
  styleUrls: ['./payment-info-vendors.page.scss'],
})
export class PaymentInfoVendorsPage implements OnInit {
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
  vendorSync = 0;
  url;
  vendor;
  edit = 0;
  paymentID = 0;
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
    private events: Events
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
      if ( typeof this.router.getCurrentNavigation().extras.state.Cid !== 'undefined' && this.router.getCurrentNavigation().extras.state.url !== 'ledgers-vendors') {
       // debugger;
        this.edit = 0;
       
        this.Cid = this.router.getCurrentNavigation().extras.state.Cid;
        this.name = this.router.getCurrentNavigation().extras.state.Name;
        this.vendorSync =  this.router.getCurrentNavigation().extras.state.Sync;
        this.url = this.router.getCurrentNavigation().extras.state.url;
        if  (this.url === '/ledger-vendors') {
          this.vendor =  this.router.getCurrentNavigation().extras.state.vendor;
          debugger
        }
        debugger;

      }
      if ( typeof this.router.getCurrentNavigation().extras.state.Cid !== 'undefined' && this.router.getCurrentNavigation().extras.state.url === 'ledgers-vendors') {
        // debugger;
         this.edit = 1;
         this.paymentID = this.router.getCurrentNavigation().extras.state.ID;
         this.ledgerSync =  this.router.getCurrentNavigation().extras.state.LedgerSync;
         this.Amount = this.router.getCurrentNavigation().extras.state.Amount;
         this.tempAmount = this.router.getCurrentNavigation().extras.state.Amount;
         this.Remarks = this.router.getCurrentNavigation().extras.state.Remarks;
         this.Cid = this.router.getCurrentNavigation().extras.state.Cid;
         this.name = this.router.getCurrentNavigation().extras.state.Name;
         this.vendorSync =  this.router.getCurrentNavigation().extras.state.Sync;
         this.url = this.router.getCurrentNavigation().extras.state.url;
         if  (this.url === '/ledger-vendors') {
           this.vendor =  this.router.getCurrentNavigation().extras.state.vendor;
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
    this.router.navigate(['/menu/vendors']);
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

    this.datePicker.show(options).then((date) =>{
      this.myDate = this.datePipe.transform(date,'dd MMM yyyy');
     // console.log('selected:',this.myDate);
    });
  }
  AddLog(){
  
    if(this.edit === 0) {
      if (this.usdId === 1) {
        this.acttype = 'You payed';
      } else {
        this.acttype = 'You payed';
      }
    }
    if(this.edit === 1) {
      if (this.usdId === 1) {
        this.acttype = 'You edited payment to';
      } else {
        this.acttype = 'You edited payment to';
      }
    }
    
    //this.name = 'Purchased Order';
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.tblName = 'tblledgervendors';
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

    // alert(this.edit)
    if (this.edit === 0) {
      let num = this.data.length;
      num = num + 1;
      this.myDate
      debugger
      this.databaseservice.setupdatevendors(1);
      if (parseInt(this.Amount) > 0) {
        if (this.vendorSync === 1) {
          this.vendorSync = 2;
        }
        this.vendorSync
        let now = new Date().toString();
        const a = this.datePipe.transform(now, 'dd MMM yyyy');
        debugger
        this.syncService.addPaymentVendor(this.Cid, this.vendorSync, a, parseInt(this.Amount), this.Remarks).then(data => {
          data
          console.log(data);
          this.databaseservice.setupdatevendors(1);
          this.databaseservice.setupdatevendorLeger(1);
          this.router.navigate([this.url]);
         // this.router.navigate(['/menu/vendors']);
          this.AddLog();
          if (this.network.type === 'none') {
          } else {
            this.syncAddedPayment();
            // this.AddLog();
          }
        });
      } else {
        alert('Kindly add payment more than 0');
      }
    }
    if (this.edit === 1) {
      let num = this.data.length;
      num = num + 1;
      this.myDate
      debugger
      this.databaseservice.setupdatevendors(1);
      if (parseInt(this.Amount) > 0) {
        if (this.vendorSync === 1) {
          this.vendorSync = 2;
        }
        if (this.ledgerSync === 1) {
          this.ledgerSync = 2;
        }
        this.vendorSync
        let now = new Date().toString();
        const a = this.datePipe.transform(now, 'dd MMM yyyy');
        debugger
        // alert('Old = ' + this.tempAmount + '\nnew ' + this.Amount + '\nLedgerSync ' + this.ledgerSync)
        this.syncService.editPaymentVendor(this.Cid, this.vendorSync, a, parseInt(this.Amount), this.Remarks, this.paymentID, this.tempAmount, this.ledgerSync).then(data => {
          data
          console.log(data);
          this.databaseservice.setupdatevendors(1);
          this.databaseservice.setupdatevendorLeger(1);
          this.router.navigate([this.url]);
         // this.router.navigate(['/menu/vendors']);
          this.AddLog();
          if (this.network.type === 'none') {
          } else {
            this.syncUpdatedPayment();
            // this.AddLog();
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
    this.syncService.syncAddedLedgerVendor().then((data) => {
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
            'Name': 'syncAddedLedgerVendor',
            "Payments": data
          } , 
          {
            'Content-Type': 'application/json',
            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
          });
     
        from(nativeCall).pipe(
          finalize(() =>{} )
        )
        .subscribe(data1 => {
          // alert('success' + data1);

          console.log('Native data:',data1);
          const g = JSON.parse(data1.data);
          if(g.success === 1) {
            // alert('success');
            debugger
           
          } else {
             // alert('failed');
          }
          this.syncService.updateSyncedAddedLedgerVendors(IDs).then((data) => {
            debugger
          }).then(() => {
           debugger
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
          });

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
  this.syncService.syncUpdatedLedgerVendor().then((data) => {
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
          'Name': 'syncUpdatedLedgerVendor',
          "Payments": data
        } , 
        {
          'Content-Type': 'application/json',
          'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
        });
   
      from(nativeCall).pipe(
        finalize(() =>{} )
      )
      .subscribe(data1 => {
        // alert('success' + data1);

        console.log('Native data:',data1);
        const g = JSON.parse(data1.data);
        if(g.success === 1) {
          // alert('success');
          debugger
         
        } else {
           // alert('failed');
        }
        this.syncService.updateSyncedAddedLedgerVendors(IDs).then((data) => {
          debugger
        }).then(() => {
         debugger
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
        });

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
