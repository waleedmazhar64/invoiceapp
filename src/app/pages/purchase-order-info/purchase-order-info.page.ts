import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AlertController, Platform, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-purchase-order-info',
  templateUrl: './purchase-order-info.page.html',
  styleUrls: ['./purchase-order-info.page.scss'],
})
export class PurchaseOrderInfoPage implements OnInit {

  order;
  myDate;
  constructor(
    private storage:Storage,
    private router: Router,
    private datePipe: DatePipe,
    private datePicker: DatePicker,
    private alertCtrl: AlertController
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.order !== 'undefined') {
        debugger;
        this.order = this.router.getCurrentNavigation().extras.state.order;
      }
    }
    
   }

  ngOnInit() {
  }
  back() {
    const navigationExtras: NavigationExtras = {
      state: {
       // user: this.received
       order: this.order
      }
    };
    this.router.navigate(['addpurchasedorder'], navigationExtras);
   }
   selectDate() {
    var options={
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    };
    this.datePicker.show(options).then((date)=>{
      this.order.created = this.datePipe.transform(date,'dd-MM-yyyy');
     // console.log('selected:',this.myDate);
    });
  }
  
openAlert() {
  this.alertCtrl.create({
   header: 'Terms',
   inputs: [
     {
       type: 'radio',
       label: 'Issued',
       value: 'Issued'
     },
     {
       type: 'radio',
       label: 'Apprved',
       value: 'Approved'
     },
     {
       type: 'radio',
       label: 'Pending',
       value: 'Pending'
     },
     {
       type: 'radio',
       label: 'Withdrawn',
       value: 'Withdrawn'
     },
   ],
   buttons: [
     {
       text: 'Cancel',
       role: 'cancel',
       handler: () => {
         console.log('Cancel clicked');
       }
     },
     {
       text: 'OK',
       handler: (data:string) => {
         console.log('selected' + data);
         this.order.terms = data;
     }
     }
   ]
 }).then(alert => alert.present());

}


}
