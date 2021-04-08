import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SyncService } from 'src/app/services/sync.service';
import { LoadingController, Platform } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FileOpener } from '@ionic-native/file-opener/ngx';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-customeraging',
  templateUrl: './customeraging.page.html',
  styleUrls: ['./customeraging.page.scss'],
})
export class CustomeragingPage implements OnInit {
  style = 'bootstrap';
  data = [];
  items = [];
  total = [];
  pdfObj = null;
  company = '';
  currency = '';
  constructor(
    private router: Router,
    private syncService: SyncService,
    private loadingCtrl: LoadingController,
    private datePipe: DatePipe,
    private plt: Platform,
    private socialSharing: SocialSharing,
    private file: File,
    private fileOpener: FileOpener,
    private storage: Storage,
  ) {
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
          debugger
      }
    });
    this.storage.get('COM').then((val) => {
      this.company = val;
    });
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
      const a = this.datePipe.transform(now, 'dd MMM yyyy');
      let start = new Date().setHours(0, 0, 0, 0).toString();
      const b = this.datePipe.transform(start, 'dd MMM yyyy');
      // alert('start:' + b + '\ncurrent:' + a);
  
      this.syncService.getCustomerAging().then((data) => {
        this.total = data;
        for (let i=0; i<this.total.length; i++) {
          const a =  parseInt(this.total[i].Paid) - parseInt(this.total[i].Total);
         // alert('y' + a)
          const data1 = {
            client: this.total[i].Name,
            total: this.currency + this.total[i].Total,
            due: this.currency + this.total[i].Due,
            due1: this.currency + this.total[i].Due1,
            due2: this.currency + this.total[i].Due2,

          };
          this.data.push(data1);
        }
        this.data = [...this.data];
        loading.dismiss();
      //  alert('y' + this.total[0].Total + 'p' + this.total[0].Paid);
      });
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
                  { text:  this.data[i].client.toString() , fontSize: 12, color: '#000000' },
                  { text:  this.data[i].total.toString()  , fontSize: 12, color: '#000000' },
                  { text:  this.data[i].due.toString(), fontSize: 12, color: '#000000' },
                  { text:  this.data[i].due1.toString()  , fontSize: 12, color: '#000000' },
                  { text:  this.data[i].due2.toString(), fontSize: 12, color: '#000000' }
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
          { text: 'CUSTOMER AGING', bold: true, alignment: 'center', fontSize: 25, style: 'subheader'},
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
            { text: 'Client ' , style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
            { text: '                       Total'                      , style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
            { text: '               Current Due' , style: 'subheader',  bold: true, fontSize: 14, color: '#000000' },
            { text: '              1-15 Past Due'                      , style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
            { text: '              15+ Past Due' , style: 'subheader',  bold: true, fontSize: 14, color: '#000000' },
          ]
        },
          {
            margin: [0, 5, 0, 0],
            style: 'totalsTable',
            table: {
                widths: [100, 100, 115, 115, 115 ],
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
