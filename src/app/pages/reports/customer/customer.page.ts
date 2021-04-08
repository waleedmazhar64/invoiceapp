import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SyncService } from 'src/app/services/sync.service';
import { LoadingController, Platform } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker/ngx';
// import { start } from 'repl';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FileOpener } from '@ionic-native/file-opener/ngx';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  style = 'bootstrap';
  data = [];
  items = [];
  total = [];
  currency;
  option = false;
  startdate = new Date().setHours(0, 0, 0, 0).toString();

  enddate = new Date().setHours(23, 59, 59, 999).toString();
  allcolor = 'dark';
  thismonthcolor = 'dark';
  lastmonthcolor = 'dark';
  thisquartercolor = 'dark';
  year  = new Date().toString();
  displaystartdate = '';
  displayenddate = '';
  pdfObj = null;
  company = '';
  selected = 0;

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

  ) {
    this.storage.get('COM').then((val) => {
      this.company = val;
    });
    this.year = this.datePipe.transform(this.year, 'yyyy');
    this.startdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy h:mm a');
    this.enddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy h:mm a');
    this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
    this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
    // this.getDataTime();
    this.getAllData();
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
          debugger
      }
    });
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
    async getDataTime() {
      let loading = await this.loadingCtrl.create();
      await loading.present();
  
      this.syncService.getSalesByCustomertime(this.startdate, this.enddate, this.currency).then((data) => {
        this.total = data;
        for (let i=0; i<this.total.length; i++) {
          const data1 = {
            client:   this.total[i].Name,
            sales:  this.total[i].Total,
            paid:  this.total[i].Paid
          };
          this.data.push(data1);
        }
        this.data = [...this.data];
        this.option = false;
        this.selected = 1;
        loading.dismiss();
        //alert('1' + this.total[0].Name + 'p' + this.total[1].Name);
      });
    }
    async getAllData() {
      let loading = await this.loadingCtrl.create();
      await loading.present();
  
      this.syncService.getSalesByCustomer(this.currency).then((data) => {
        this.total = data;
        for (let i=0; i<this.total.length; i++) {
          const data1 = {
            client:   this.total[i].Name,
            sales:  this.total[i].Total,
            paid:  this.total[i].Paid
          };
          this.data.push(data1);
        }
        this.data = [...this.data];
        this.selected = 0;
        loading.dismiss();
        this.option = false
        //alert('1' + this.total[0].Name + 'p' + this.total[1].Name);
      });
    }
    optionsOpen() {
      if (this.option === true) {
        this.option = false;
       // alert('option: ' + this.option);
      } else {
        this.option = true;
       // alert('option: ' + this.option);

      }
    }
    selectStartDate() {
      var options={
        date: new Date(),
        mode: 'date',
        androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      };
  
      this.datepicker.show(options).then((date) => {
        this.startdate = this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
        this.data = [];
        this.getDataTime();
        this.thismonthcolor = 'dark';
        this.lastmonthcolor = 'dark';
        this.thisquartercolor = 'dark';
        this.allcolor = 'dark';
       // console.log('selected:',this.myDate);
      });
    }
    selectEndDate() {
      var options={
        date: new Date(),
        mode: 'date',
        androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      };
  
      this.datepicker.show(options).then((date) => {
        date.setHours(23, 59, 59, 999);
        this.enddate = this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        this.thismonthcolor = 'dark';
        this.lastmonthcolor = 'dark';
        this.thisquartercolor = 'dark';
        this.allcolor = 'dark';

        this.data = [];
        this.getDataTime();
       // console.log('selected:',this.myDate);
      });
    }
    all() {
      this.allcolor = 'primary';
      this.thismonthcolor = 'dark';
      this.lastmonthcolor = 'dark';
      this.thisquartercolor = 'dark';
      this.data = [];
      this.getAllData();
    
    }
    thisMonth() {
      this.thismonthcolor = 'primary';
      this.lastmonthcolor = 'dark';
      this.thisquartercolor = 'dark';
      this.allcolor = 'dark';
      const date = new Date();
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).setHours(0, 0, 0, 0);
      this.startdate = this.datePipe.transform(firstDay, 'dd MMM yyyy h:mm a');
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).setHours(23, 59, 59, 999);
      this.enddate = this.datePipe.transform(lastDay, 'dd MMM yyyy h:mm a');
      this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
      this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
      // alert('first: ' + this.startdate + 'Last: ' + this.enddate);
      this.data = [];
      this.getDataTime();
    }
    lastMonth() {
      this.lastmonthcolor = 'primary';
      this.thisquartercolor = 'dark';
      this.allcolor = 'dark';
      this.thismonthcolor = 'dark';
      const date = new Date();
      const firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1).setHours(0, 0, 0, 0);
      this.startdate = this.datePipe.transform(firstDay, 'dd MMM yyyy h:mm a');
      const lastDay = new Date(date.getFullYear(), date.getMonth() , 0).setHours(23, 59, 59, 999);
      this.enddate = this.datePipe.transform(lastDay, 'dd MMM yyyy h:mm a');
      this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
      this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
      // alert('first: ' + this.startdate + 'Last: ' + this.enddate);
      this.data = [];
      this.getDataTime();
    }
    async thisquarter() {
      let loading = await this.loadingCtrl.create();
      await loading.present();
      this.thisquartercolor = 'primary';
      this.allcolor = 'dark';
      this.thismonthcolor = 'dark';
      this.lastmonthcolor = 'dark';
      const current = new Date();
      const currentmonth = current.getMonth() + 1;
      const currentYear = current.getFullYear().toString();
      if (currentmonth >= 1 && currentmonth <= 3) {
        this.data = [];
        this.getQ1();
        this.option = false;
        loading.dismiss();
      }
      if (currentmonth >= 4 && currentmonth <= 6) {
        this.data = [];
        this.getQ2();
        this.option = false;
        loading.dismiss();
      }
      if (currentmonth >= 7 && currentmonth <= 9) {
        this.data = [];
        this.getQ3();
        this.option = false;
        loading.dismiss();
      }
      if (currentmonth >= 10 && currentmonth <= 12) {
        this.data = [];
        this.getQ4();
        this.option = false;
        loading.dismiss();
      }
    }
    getQ1() {
      const firstdayofmonth = new Date(parseInt(this.year), 0, 1).setHours(0, 0, 0, 0);
      const first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
      const lastdayofmonth = new Date(parseInt(this.year),  2 + 1, 0).setHours(23, 59, 59, 999);
      const last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
      this.startdate = first1;
      this.enddate = last1;
      this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
      this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
      const a = Math.round((new Date(first1)).getTime() / 1000);
      const b = Math.round((new Date(last1)).getTime() / 1000);
      this.getDataTime();
    }
    getQ2() {
      const firstdayofmonth = new Date(parseInt(this.year), 3, 1).setHours(0, 0, 0, 0);
      const first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
      const lastdayofmonth = new Date(parseInt(this.year),  5 + 1, 0).setHours(23, 59, 59, 999);
      const last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
      this.startdate = first1;
      this.enddate = last1;
      this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
      this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
      const a = Math.round((new Date(first1)).getTime() / 1000);
      const b = Math.round((new Date(last1)).getTime() / 1000);
      this.getDataTime();
    }
    getQ3() {
      const firstdayofmonth = new Date(parseInt(this.year), 6, 1).setHours(0, 0, 0, 0);
      const first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
      const lastdayofmonth = new Date(parseInt(this.year),  8 + 1, 0).setHours(23, 59, 59, 999);
      const last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
      this.startdate = first1;
      this.enddate = last1;
      this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
      this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
      this.getDataTime();
    }
    getQ4() {
      const firstdayofmonth = new Date(parseInt(this.year), 9, 1).setHours(0, 0, 0, 0);
      const first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
      const lastdayofmonth = new Date(parseInt(this.year),  11 + 1, 0).setHours(23, 59, 59, 999);
      const last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
      this.startdate = first1;
      this.enddate = last1;
      this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
      this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
      this.getDataTime();
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
                  { text:  this.data[i].client.toString() , fontSize: 18, color: '#000000' },
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
          { text: 'SALES BY CLIENT', bold: true, alignment: 'center', fontSize: 25, style: 'subheader'},
          { text: this.displaystartdate + ' - ' + this.displayenddate , bold: true, alignment: 'center', fontSize: 25, style: 'subheader'},

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
