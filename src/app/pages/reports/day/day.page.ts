import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SyncService } from 'src/app/services/sync.service';
import { LoadingController, Platform } from '@ionic/angular';
import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { DatabaseService} from 'src/app/services/database.service';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FileOpener } from '@ionic-native/file-opener/ngx';
// import { lstat } from 'fs';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {
  style = 'bootstrap';
  data = [];
  items = [];
  total = [];
  day = new Date().toString();
  start = new Date().setHours(0, 0, 0, 0).toString();
  end = new Date().setHours(23, 59, 59, 999).toString();
  i = 0;
  currency = '';
  pdfObj = null;
  company = '';
  displaystart = '';
  displayend = '';
  a = 0;
  salesvalue = 0;
  min = '2020';
  max = '';
  constructor(
    private router: Router,
    private syncService: SyncService,
    private loadingCtrl: LoadingController,
    private datePipe: DatePipe,
    private datepicker: DatePicker,
    private plt: Platform,
    private socialSharing: SocialSharing,
    private file: File,
    private fileOpener: FileOpener,
    private storage: Storage,
    private databaseservice: DatabaseService


  ) {
    const last = new Date(new Date().getFullYear(), 11, 31);
    this.max = this.datePipe.transform(last, 'yyyy');
    this.storage.get('COM').then((val) => {
      this.company = val;
    });
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
          debugger
      }
    });
    this.salesvalue = this.databaseservice.getSalesByDayValue();
    this.day = this.datePipe.transform(this.day, 'MMM yyyy h:mm a');
    const firstdayofmonth = new Date(new Date(this.day).getFullYear(), new Date(this.day).getMonth(), 1).setHours(0, 0, 0, 0);
    const first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
    const lastdayofmonth = new Date(new Date(this.day).getFullYear(), new Date(this.day).getMonth() + 1, 0).setHours(23, 59, 59, 999);
    const last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');

    this.displaystart = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy');
    this.displayend = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy');
    this.start = first1;
    this.end = last1;
    // alert('start: ' + this.start + '\n' + this.end);
    this.getData();
   }

  ngOnInit() {
  }
  share() {
  // this.getData();
  this.createPdf();
  }
  back() {
    this.router.navigate(['/menu/reports']);
  }
  onActivate(event) {
    if (event.type === 'click') {
      console.log(event.row);
  }
  }
  async getData() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    let start = new Date().setHours(0, 0, 0, 0).toString();
    const b = this.datePipe.transform(start, 'dd MMM yyyy h:mm a');
    // alert('start:' + this.start + '\ncurrent:' + this.end);

    // alert('day:' + this.day)
    this.syncService.getTodaysSales(this.start, this.end, this.currency).then((data) => {
      this.total = data;
      console.log(data);
      for (let i = 0; i < this.total.length; i++) {

      const data1 = {
        day: this.total[i].Date,
        sales:  this.total[i].Total,
        paid: this.total[i].Paid
      };
      this.data.push(data1);
    }
      this.data = [...this.data];
      loading.dismiss();
    //  alert('y' + this.total[0].Total + 'p' + this.total[0].Paid);
    });
  }
  selectDate() {
    var options={
      date: new Date(),
      mode: 'date',
      androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    };

    this.datepicker.show(options).then((date) => {
      this.day = this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
      this.data = [];
      this.getData();
     // console.log('selected:',this.myDate);
    });
  }
  changeDate() {
    //alert('yes' + this.data.length);
    //alert('y' + this.start);
    if ( this.i === 2 || (this.a === 0 && this.i === this.salesvalue)) {
      this.i = 0;
      this.a = 1;
      const firstdayofmonth = new Date(new Date(this.day).getFullYear(), new Date(this.day).getMonth(), 1).setHours(0, 0, 0, 0);
      const first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
      const lastdayofmonth = new Date(new Date(this.day).getFullYear(), new Date(this.day).getMonth() + 1, 0).setHours(23, 59, 59, 999);
      const last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');

      this.displaystart = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy');
      this.displayend = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy');

      // const s = new Date(this.day).setHours(0, 0, 0, 0).toString();
      // const l = new Date(this.day).setHours(23, 59, 59, 999).toString();

      this.start = first1;
      this.end = last1;

     // this.start =  this.datePipe.transform(s, 'dd MMM yyyy h:mm a');
     // this.end =  this.datePipe.transform(l, 'dd MMM yyyy h:mm a');

     // alert('s: ' + first1 + '\nL: ' + last1 );
      this.data = [];
      this.getData();
    }
    this.i = this.i + 1;



    this.day = this.datePipe.transform(this.day, 'dd MMM yyyy h:mm a');
  }
  async createPdf() {
    let a ;
    let x ;
    let y ;
    let z ;
    let left;
    let right;

    let items = [];
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const itemss = [];

    for (let i = 0; i < this.data.length; i++) {
              itemss.push(
              [
                { text:  this.data[i].day.toString() , fontSize: 18, color: '#000000' },
                { text:  this.data[i].sales.toString()  , fontSize: 18, color: '#000000' },
                { text:  this.data[i].paid.toString(), fontSize: 18, color: '#000000' }
               ]
        );
    }
 
    left  = {
        text: [
              { text: this.company, bold: true, fontSize: 20, alignment: 'left'},
        ]
      };
    right = {
        text: [
                  { text:  this.datePipe.transform(new Date(), 'dd MMM yyyy') , color: '#000000' ,  fontSize: 18, alignment: 'right'},
                ]
      };
    var docDefinition = {
    pageSize: 'A4',
    pageMargins: [ 20, 20, 20, 20 ],
      content: [
        { text: 'SALES BY DAY', bold: true, alignment: 'center', fontSize: 25, style: 'subheader'},
        { text: this.displaystart + ' - ' + this.displayend, bold: true, alignment: 'center', fontSize: 20, style: 'subheader'},

        // { margin: [0, 10, 0, 0],
        //   text: 'CUSTOMER STATEMENT', style: 'header', fontSize: 25, alignment: 'left', color: '#ff0000' },
          {
            margin: [0, 10, 0, 0],
            canvas:
            [
                {
                    type: 'line',
                    x1: 0, y1: 0,
                    x2: 555, y2: 0,
                    lineWidth: 3
                },
            ]
         },
        {
          margin: [0, 5, 0, 0],
          style: 'totalsTable',
          table: {
              widths: [ 300, 250 ],
              body: [
                [
                    left, right
                ],
              ],

            },
            layout: 'noBorders'
          },
      {
        margin: [0, 20, 0, 0],
        text: [
          { text: 'Client ' , style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
          { text: '                                  Total'                      , style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
          { text: '                         Paid' , style: 'subheader',  bold: true, fontSize: 20, color: '#000000' },
        ]
      },
        {
          margin: [0, 5, 0, 0],
          style: 'totalsTable',
          table: {
              widths: [220, 160, 200 ],
              body: itemss
          },
          layout: 'noBorders'
      },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 10,
          bold: true,
         // margin: [0, 15, 0, 0],
          color: '#000000'
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        },
        backgroundcolor: ''
      }
    };
      this.pdfObj = pdfMake.createPdf(docDefinition);
      this.downloadPdf(loading);
 //   });
   
  }
  ionViewWillLeave() {
    this.databaseservice.setSalesByDayValue(2); 
  }
  downloadPdf(loading) {
    debugger
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
       // var blob = new Blob([buffer], { type: 'application/pdf' });
        var utf8 = new Uint8Array(buffer);
        var binaryArray = utf8.buffer;
        var blob = new Blob([binaryArray], { type: 'application/pdf' });
        const a = new Date().getTime().toString();
        this.file.writeFile(this.file.dataDirectory,  a + '.pdf', blob).then(fileEntry => {
          // this.fileOpener.open(this.file.dataDirectory + a + '.pdf', 'application/pdf'); 
          // loading.dismiss();
         });
        this.socialSharing.share("test", null, this.file.dataDirectory + a + '.pdf', null).then(() => {
          loading.dismiss();
          console.log('social share');
          console.log(this.file.dataDirectory);
          }).catch(() => {
      
          });
        debugger
        // Save the PDF to the data Directory of our App
        // this.file.writeFile(this.file.dataDirectory, 'Invoice4.pdf', blob).then(fileEntry => {
        //  this.fileOpener.open(this.file.dataDirectory + 'Invoice.pdf', 'application/pdf');        
        // });
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }
}
