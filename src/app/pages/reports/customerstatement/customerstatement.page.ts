import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SyncService } from 'src/app/services/sync.service';
import { LoadingController, Platform } from '@ionic/angular';
import { DatePipe, getLocaleDateTimeFormat } from '@angular/common';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FileOpener } from '@ionic-native/file-opener/ngx';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-customerstatement',
  templateUrl: './customerstatement.page.html',
  styleUrls: ['./customerstatement.page.scss'],
})
export class CustomerstatementPage implements OnInit {

  data = [];
  items = [];
  total = [];
  currency = 'PKR ';
  option = false;
  startdate = new Date().setHours(0, 0, 0, 0).toString();

  enddate = new Date().setHours(23, 59, 59, 999).toString();
  allcolor = 'dark';
  thismonthcolor = 'dark';
  lastmonthcolor = 'dark';
  thisquartercolor = 'dark';
  createstatementcolor = 'success';
  selected = 0;
  customers = [];
  customerinvoices = [];
  company = '';
  pdfObj = null;
  customersales = [];
  customerpaid = []
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
    this.selected = 0;
    this.storage.get('COM').then((val) => {
      this.company = val;
    });
    this.startdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy h:mm a');
    this.enddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy h:mm a');
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
          debugger
      }
    });
    this.getAllData();
   }

  ngOnInit() {
  }
  share() {
    // this.getData();
    }
    back() {
      this.router.navigate(['/menu/reports']);
    }
    async getAllData() {
      let loading = await this.loadingCtrl.create();
      await loading.present();
  
      this.syncService.getSalesByCustomerStatement().then((data) => {
        this.total = data;
        
        // for (let i=0; i<this.total.length; i++) {
        //   const data1 = {
        //     client:   this.total[i].Name,
        //     sales: this.currency + this.total[i].Total,
        //     paid: this.currency + this.total[i].Paid
        //   };
        //   this.data.push(data1);
        //   this.total[i].div = false;
        // }
        // this.data = [...this.data];
        loading.dismiss();
        this.option = false
        //alert('1' + this.total[0].Name + 'p' + this.total[1].Name);
      });
    }
    itemClicked(customer, pos) {
     // this.total[pos].div = true;
      if (this.total[pos].div === true) {
        this.total[pos].div = false;
      } else {
        this.total[pos].div = true;
      }
      this.total = [...this.total];
    }
    selectStartDate() {
      var options={
        date: new Date(),
        mode: 'date',
        androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      };
      this.datepicker.show(options).then((date) => {
        date.setHours(0, 0, 0, 0);
        this.startdate = this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
        this.allcolor = 'dark';
        this.thismonthcolor = 'dark';
        this.lastmonthcolor = 'dark';
        this.selected = 0;
      });
    }
    selectEndDate() {
      var options = {
        date: new Date(),
        mode: 'date',
        androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      };
      this.datepicker.show(options).then((date) => {
        date.setHours(23, 59, 59, 999);
        this.enddate = this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
        this.allcolor = 'dark';
        this.thismonthcolor = 'dark';
        this.lastmonthcolor = 'dark';
        this.selected = 0;
       // console.log('selected:',this.myDate);
      });
    }
    all() {
      this.allcolor = 'primary';
      this.thismonthcolor = 'dark';
      this.lastmonthcolor = 'dark';
      this.selected = 3;
    }
    thisMonth() {
      this.thismonthcolor = 'primary';
      this.lastmonthcolor = 'dark';
      this.allcolor = 'dark';
      this.selected = 1;
      const date = new Date();
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).setHours(0, 0, 0, 0);
      this.startdate = this.datePipe.transform(firstDay, 'dd MMM yyyy h:mm a');
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).setHours(23, 59, 59, 999);
      this.enddate = this.datePipe.transform(lastDay, 'dd MMM yyyy h:mm a');

    }
    lastMonth() {
      this.lastmonthcolor = 'primary';
      this.allcolor = 'dark';
      this.thismonthcolor = 'dark';
      this.selected = 2;
      const date = new Date();
      const firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1).setHours(0, 0, 0, 0);
      this.startdate = this.datePipe.transform(firstDay, 'dd MMM yyyy h:mm a');
      const lastDay = new Date(date.getFullYear(), date.getMonth() , 0).setHours(23, 59, 59, 999);
      this.enddate = this.datePipe.transform(lastDay, 'dd MMM yyyy h:mm a');

    }
    createStatement(customer) {
      // alert('s ' + customer.Cid);
      if (this.selected === 3) {

        this.syncService.getSalesByCustomerId(customer.Cid).then((data) => {

          this.customerinvoices = data;
          // alert('y' + this.customerinvoices.length);
          this.createPdf(customer);
        });
      } else {
        // alert('s ' + this.startdate + 'end ' + this.enddate);
        this.syncService.getSalesByCustomerIdTime(customer.Cid, this.startdate, this.enddate, this.currency).then((data) => {

          this.customerinvoices = data;
         // alert('y' + this.customerinvoices.length);
          this.syncService.getSalesAndPaidByCustomertime(customer.Cid, this.startdate, this.enddate).then((data1) => {
                
                  this.customersales = data1;
                 
                 // this.customerpaid = data1.Paid;

          });
          this.createPdf(customer);
        });

      }
    }
    async createPdf(customer) {
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


      for (let i = 0; i < this.customerinvoices.length; i++) {
                itemss.push(
                [
                  { text:  this.customerinvoices[i].CreateDate.toString() , fontSize: 18, color: '#000000' },
                  { text:  this.customerinvoices[i].DueDate.toString()  , fontSize: 18, color: '#000000' },
                  { text:  this.customerinvoices[i].Total.toString(), fontSize: 18, color: '#000000' }
                 ]
          );
      }
      if (this.selected === 3) {
        left  = {
          text: [
                { text: customer.Shop, bold: true, fontSize: 20, alignment: 'left'},
          ]
        };
        right = {
          text: [
                    { text: 'All Time' , color: '#000000' ,  fontSize: 18, alignment: 'right'},
                  ]
        };
        x =   [
          { text: 'Total:', bold: true, fontSize: 20 },
          { text: this.currency + customer.Total.toLocaleString(), fontSize: 20, alignment: 'right'}
         ];
        y =    [
          { text: 'Paid:', bold: true, fontSize: 20 },
          { text: this.currency + customer.Paid.toLocaleString(), fontSize: 20, alignment: 'right'}
         ];
        z =    [
          { text: 'Due:', bold: true, fontSize: 20 },
          { text: this.currency + (customer.Total - customer.Paid).toLocaleString(), fontSize: 20, alignment: 'right'}
         ];

      } else {
        left  = {
          text: [
                { text: customer.Shop, bold: true, fontSize: 20, alignment: 'left'},
          ]
        };
        right = {
          text: [
                    { text: this.datePipe.transform(this.startdate, 'dd MMM yyyy') + ' - ' + this.datePipe.transform(this.enddate, 'dd MMM yyyy'), color: '#000000' ,  fontSize: 18, alignment: 'right'},
                ]
        };
        x =   [
          { text: 'Total:', bold: true, fontSize: 20 },
          { text: this.currency +  this.customersales[0].Total.toLocaleString(), fontSize: 20, alignment: 'right'}
         ];
        y =    [
          { text: 'Paid:', bold: true, fontSize: 20 },
          { text: this.currency +  this.customersales[0].Paid.toLocaleString(), fontSize: 20, alignment: 'right'}
         ];
        if (this.customersales[0].Total - this.customersales[0].Paid > 0) {
          z =    [
            { text: 'Due:', bold: true, fontSize: 20 },
            { text: this.currency + ( this.customersales[0].Total - this.customersales[0].Paid).toLocaleString(), fontSize: 20, alignment: 'right'}
           ];
         } else {
          z =    [
            { text: 'Due:', bold: true, fontSize: 20 },
            { text: this.currency + '0', fontSize: 20, alignment: 'right'}
           ];
         }
       
      }
    
      var docDefinition = {
      pageSize: 'A4',
      pageMargins: [ 20, 20, 20, 20 ],
        content: [
          { text: this.company, bold: true, alignment: 'center', fontSize: 25, style: 'subheader'},
          { margin: [0, 10, 0, 0],
            text: 'CUSTOMER STATEMENT', style: 'header', fontSize: 25, alignment: 'left', color: '#ff0000' },
          // { text: this.datePipe.transform(new Date().toString(), 'dd MMM yyyy h:mm a'), alignment: 'right' },
          { margin: [0, 10, 0, 0],
            text: customer.Name, bold: true, fontSize: 20},
          // {text: customer.Shop, bold: true, fontSize: 20},
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
          // {
          //   margin: [0, 0, 0, 0],
          //   style: 'totalsTable',
          //   table: {
          //       widths: [ 350, 200 ],
          //       body: [
          //        a
          //         ]
          //       },
          //       layout: 'noBorders'
          //     },

        {
          margin: [0, 20, 0, 0],
          text: [
            { text: 'Date ' , style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
            { text: '                                  Due Date'                      , style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
            { text: '                         Amount' , style: 'subheader',  bold: true, fontSize: 20, color: '#000000' },
          ]
        },
          {
            margin: [0, 5, 0, 0],
            style: 'totalsTable',
            table: {
                widths: [200, 200, 200 ],
                body: itemss
            },
            layout: 'noBorders'
        },
        {
          margin: [0, 10, 0, 0],
          style: 'totalsTable',
          table: {
              widths: [ 350, 200 ],
              body: [
                x, y, z
              ]
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
            this.fileOpener.open(this.file.dataDirectory + a + '.pdf', 'application/pdf'); 
            loading.dismiss();
           });
          // this.socialSharing.share("test", null, this.file.dataDirectory + a + '.pdf', null).then(() => {
          //   loading.dismiss();
          //   console.log('social share');
          //   console.log(this.file.dataDirectory);
          //   }).catch(() => {
        
          //   });
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
