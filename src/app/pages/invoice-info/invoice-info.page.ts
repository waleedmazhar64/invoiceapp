import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AlertController, Platform, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-invoice-info',
  templateUrl: './invoice-info.page.html',
  styleUrls: ['./invoice-info.page.scss'],
})
export class InvoiceInfoPage implements OnInit {
  invoice ;
 
dueDate:any;
compare:any;
getTerm:any;
myDate;
terms = 'Due on Receipt';
  constructor(
    private storage:Storage,
    private router: Router,
    private datePipe: DatePipe,
    private datePicker: DatePicker,
    private alertCtrl: AlertController
    ) {
      if (this.router.getCurrentNavigation().extras.state) {
        if ( typeof this.router.getCurrentNavigation().extras.state.invoice !== 'undefined') {
          debugger;
          this.invoice = this.router.getCurrentNavigation().extras.state.invoice;
        }
      }
      
    // this.getformattedDate();
    // this.getDueDate();

    // this.Inv=localStorage.getItem("INV");
    // this.data=localStorage.getItem("DATE");
    // this.terms=localStorage.getItem("TERMS");
    // this.dueDate=localStorage.getItem("DUE");
   
   }

  ngOnInit() {
    // localStorage.setItem('INV','300')
    // localStorage.setItem('DATE',this.dates)
    // localStorage.setItem('TERMS','30')
    // localStorage.setItem('DUE',this.due)
  }
  // getformattedDate()
  // {
  //    var dateObj=new Date();

  //    var year= dateObj.getFullYear().toString();
  //    var month= dateObj.getMonth().toString();
  //    var date= dateObj.getDate().toString();
  //    var monthArray=['01','02','03','04','05','06','07','08','09','10','11','12'];

  //    this.dates=monthArray[month]+'/'+date+'/'+year;
  //    console.log(this.dates);

  // }
  // getDueDate()
  // {
  //    var dateObj1=new Date(localStorage.getItem('DATE'));
  //    console.log(dateObj1);
  //    var dateObj = new Date();
  //    this.getTerm=localStorage.getItem('TERMS');
  //    var g = parseInt(this.getTerm)
  //    console.log(g);
  //    dateObj.setDate(dateObj1.getDate()+g);
  //    var year= dateObj.getFullYear().toString();
  //    var month= dateObj.getMonth().toString();
  //    var date= dateObj.getDate().toString();
  //    var monthArray=['01','02','03','04','05','06','07','08','09','10','11','12'];

  //    this.due=monthArray[month]+'/'+date+'/'+year;
  //    console.log("New Date");
  //    console.log(this.due);
  //    localStorage.setItem('DUE',this.due);

  // }
//  refresh(){
//    localStorage.setItem('INV',this.Inv)
//    localStorage.setItem('DATE',this.data)
//    localStorage.setItem('TERMS',this.terms)
//    localStorage.setItem('DUE',this.due);  
//  }
 back() {
  const navigationExtras: NavigationExtras = {
    state: {
     // user: this.received
     invoice: this.invoice
    }
  };
  this.router.navigate(['addinvoice'], navigationExtras);
 }
 selectDate() {
  var options={
    date: new Date(),
    mode: 'date',
    androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
  };

  this.datePicker.show(options).then((date)=>{
    this.invoice.created = this.datePipe.transform(date,'dd-MM-yyyy');
   // console.log('selected:',this.myDate);
  });
}
selectDueDate() {
  var options={
    date: new Date(),
    mode: 'date',
    androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
  };

  this.datePicker.show(options).then((date)=>{
    this.invoice.duedate = this.datePipe.transform(date,'dd-MM-yyyy');
   // console.log('selected:',this.myDate);
  });
}

openAlert() {
       this.alertCtrl.create({
        header: 'Terms',
        inputs: [
          {
            type: 'radio',
            label: '3 Days',
            value: '3 Days'
          },
          {
            type: 'radio',
            label: '7 Days',
            value: '7 Days'
          },
          {
            type: 'radio',
            label: '14 Days',
            value: '14 Days'
          },
          {
            type: 'radio',
            label: '21 Days',
            value: '21 Days'
          },
          {
            type: 'radio',
            label: '30 Days',
            value: '30 Days'
          },
          {
            type: 'radio',
            label: '45 Days',
            value: '45 Days'
          },
          {
            type: 'radio',
            label: '60 Days',
            value: '60 Days'
          },
          {
            type: 'radio',
            label: '180 Days',
            value: '180 Days'
          },
          {
            type: 'radio',
            label: 'Due on Receipt',
            value: 'Due on Receipt'
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
              this.invoice.terms = data;
          }
          }
        ]
      }).then(alert => alert.present());
  
  }
}
