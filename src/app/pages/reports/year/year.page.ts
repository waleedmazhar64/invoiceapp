import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SyncService } from 'src/app/services/sync.service';
import { LoadingController, Platform } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FileOpener } from '@ionic-native/file-opener/ngx';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-year',
  templateUrl: './year.page.html',
  styleUrls: ['./year.page.scss'],
})
export class YearPage implements OnInit {
  style = 'bootstrap';
  data = [];
  items = [];
  total = [];
  currency;
  company = '';
  year = '';
  pdfObj = null;

  constructor(
    private router: Router,
    private syncService: SyncService,
    private loadingCtrl: LoadingController,
    private datePipe: DatePipe,
    private storage: Storage,
    private plt: Platform,
    private socialSharing: SocialSharing,
    private file: File,
    private fileOpener: FileOpener,
  ) {
    this.storage.get('COM').then((val) => {
      this.company = val;
    });
    const last = new Date(new Date().getFullYear(), 11, 31);
    const lastdateofyear = this.datePipe.transform(last, 'dd MMM yyyy');
  
    this.year =  this.datePipe.transform(last, 'yyyy');
    this.getData();
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
    async getData() {
      let loading = await this.loadingCtrl.create();
      await loading.present();
      this.syncService.getSalesByYear('2020').then((data) => {
        this.total = data;
       // alert(this.total[0].Total);
        for (let i=0; i<this.total.length; i++) {
          const data1 = {
            year:   this.total[i].Year,
            sales: this.currency + this.total[i].Total,
            paid: this.currency + this.total[i].Paid,

          };
          this.data.push(data1);
        }
        this.data = [...this.data];
        loading.dismiss();
        //alert('1' + this.total[0].Name + 'p' + this.total[1].Name);
      });
      // this.syncService.getSalesByYear('2019').then((data) => {
      //   this.total = data;
      //   for (let i=0; i<this.total.length; i++) {
      //     const data1 = {
      //       year:   this.total[i].Year,
      //       sales: this.currency + this.total[i].Total,
      //       paid: this.currency + this.total[i].Paid,

      //     };
      //     this.data.push(data1);
      //   }
      //   this.data = [...this.data];
      //   loading.dismiss();
      // });
      // this.syncService.getSalesByYear('2018').then((data) => {
      //   this.total = data;
      //   for (let i=0; i<this.total.length; i++) {
      //     const data1 = {
      //       year:   this.total[i].Year,
      //       sales: this.currency + this.total[i].Total,
      //       paid: this.currency + this.total[i].Paid,

      //     };
      //     this.data.push(data1);
      //   }
      //   this.data = [...this.data];
      //   loading.dismiss();
      // });
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
                  { text:  this.data[i].year.toString() , fontSize: 18, color: '#000000' },
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
          { text: 'SALES BY YEAR', bold: true, alignment: 'center', fontSize: 25, style: 'subheader'},
          // { text: this.year, bold: true, alignment: 'center', fontSize: 25, style: 'subheader'},

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
            { text: 'Qurter ' , style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
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
