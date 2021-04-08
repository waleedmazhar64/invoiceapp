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
  selector: 'app-month',
  templateUrl: './month.page.html',
  styleUrls: ['./month.page.scss'],
})
export class MonthPage implements OnInit {
  style = 'bootstrap';
  data = [];
  items = [];
  total = 0;
  year  = new Date().toString();
  i = 0;
  min = '2019';
  max = '';
  Month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
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
    const last = new Date(new Date().getFullYear(), 11, 31);
    this.max = this.datePipe.transform(last, 'yyyy');
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
          debugger
      }
    });
    this.storage.get('COM').then((val) => {
      this.company = val;
    });
    this.year = this.datePipe.transform(this.year, 'yyyy');
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
      const current = new Date();
      const currentmonth = current.getMonth() + 1;
      const currentYear = current.getFullYear().toString();

    //  alert('currenty ' + currentYear + '\nselected ' + this.year);
      if (this.year === currentYear) {
        for (let i = 0; i < currentmonth ; i++) {
          const firstdayofmonth = new Date(parseInt(this.year), i, 1).setHours(0, 0, 0, 0);
          const first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
          const lastdayofmonth = new Date(parseInt(this.year),  i + 1, 0).setHours(23, 59, 59, 999);
          const last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
          // const a = Math.round((new Date(first1)).getTime() / 1000);
          // const b = Math.round((new Date(last1)).getTime() / 1000);
          //alert('st: ' + first1 + '\nlas: ' + last1);
          this.syncService.getsales(first1, last1, this.currency).then((data) => {
            this.total = data;
            if (this.total[0].Total !== '-' || this.total[0].Paid !== '-') {
              const data1 = {
                month:  this.Month[i],
                total: this.total[0].Total,
                paid:  this.total[0].Paid,
              };
              this.data.push(data1);
              this.data = [...this.data];
            }
            loading.dismiss();
          //  alert('y' + this.total[0].Total + 'p' + this.total[0].Paid);
          });
        }
      } else {
        // alert('esle');
        for (let i = 0; i < 12 ; i++) {
          const firstdayofmonth = new Date(parseInt(this.year), i, 1).setHours(0, 0, 0, 0);
          const first1 =  this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
          const lastdayofmonth = new Date(parseInt(this.year),  i + 1, 0).setHours(23, 59, 59, 999);
          const last1 =  this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
          // const a = Math.round((new Date(first1)).getTime() / 1000);
          // const b = Math.round((new Date(last1)).getTime() / 1000);
          this.syncService.getsales(first1, last1, this.currency).then((data) => {
            this.total = data;
            if (this.total[0].Total !== '-' || this.total[0].Paid !== '-') {
              const data1 = {
                month:  this.Month[i],
                total: this.total[0].Total,
                paid:  this.total[0].Paid,
              };
              this.data.push(data1);
              this.data = [...this.data];
            }
            loading.dismiss();
          //  alert('y' + this.total[0].Total + 'p' + this.total[0].Paid);
          });
        }
      }

    }
    changeDate() {
        this.i = this.i + 1;
        this.year = new Date(this.year).getFullYear().toString();
        if ( this.i === 2) {
          this.i = 0;
          //alert(this.year);
          this.data = [];
          this.getData();
        }

       // this.year = this.datePipe.transform(this.year, 'yyyy');
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
                    { text:  this.Month[i].toString() , fontSize: 18, color: '#000000' },
                    { text:  this.data[i].total.toString()  , fontSize: 18, color: '#000000' },
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
            { text: 'SALES BY MONTH', bold: true, alignment: 'center', fontSize: 25, style: 'subheader'},
            { text: this.year, bold: true, alignment: 'center', fontSize: 25, style: 'subheader'},

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
              { text: 'Month ' , style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
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
