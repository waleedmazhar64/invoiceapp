import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AlertController, Platform, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-credit-memo-info',
  templateUrl: './credit-memo-info.page.html',
  styleUrls: ['./credit-memo-info.page.scss'],
})
export class CreditMemoInfoPage implements OnInit {
  creditmemo;
  myDate;
  constructor(
    private storage:Storage,
    private router: Router,
    private datePipe: DatePipe,
    private datePicker: DatePicker,
    private alertCtrl: AlertController
  ) {
    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.creditmemo !== 'undefined') {
        debugger;
        this.creditmemo = this.router.getCurrentNavigation().extras.state.creditmemo;
      }
    }
   }

  ngOnInit() {
  }
  back() {
    const navigationExtras: NavigationExtras = {
      state: {
       // user: this.received
       credit: this.creditmemo
      }
    };
    this.router.navigate(['addcreditmemos'], navigationExtras);
   }
   selectDate() {
    var options={
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    };
    this.datePicker.show(options).then((date)=>{
      this.creditmemo.created = this.datePipe.transform(date,'dd-MM-yyyy');
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
         this.creditmemo.terms = data;
     }
     }
   ]
 }).then(alert => alert.present());

}

}
