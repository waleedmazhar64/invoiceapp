import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationExtras, NavigationStart } from '@angular/router';
import { SyncService } from 'src/app/services/sync.service';
import { DatabaseService} from 'src/app/services/database.service';
import { Platform, LoadingController, Events } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { DatePipe } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FileOpener } from '@ionic-native/file-opener/ngx';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.page.html',
  styleUrls: ['./ledger.page.scss'],
})
export class LedgerPage implements OnInit {

  ledger = [];
  vendors = []
  Balance = 0;
  total=0;
  totalCredit = 0;
  totalDebit = 0;
  client = {
    Cid: 0,
    Fname: '',
    Lname: '',
    BillingAddress: '',
    Shop: '',
    Cell: '',
    City: '',
    Balance: 0,
    Sync: 0
  };
  company = '';
  currency = '';
  pdfObj = null;
  businessName = '';
  constructor(
    private router: Router,
    private syncService: SyncService,
    private databaseService: DatabaseService,
    private loadingCtrl: LoadingController,
    private callnumber: CallNumber,
    private datePipe: DatePipe,
    private socialSharing: SocialSharing,
    private file: File,
    private fileOpener: FileOpener,
    private storage: Storage,
    private plt: Platform,
    private events: Events,

  ) {
    this.events.subscribe('refreshLedger', (user, time) => {
     // alert('a')
      this.getLedger();
    });
   
    // if (databaseService.getLedgerSubscription() === 0) {
    //   // alert(databaseService.getLedgerSubscription())
    //   databaseService.setLedgerSubscription(1);
      
    // }
   
    this.storage.get('COM').then((val) => {
      this.company = val;
      this.businessName = val;
    });
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
          
      }
    });
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe((route: NavigationStart) => {
    //          // this.getDataNativeHttp();
    //     console.log('Route: '+route.url);
    //     const a = this.databaseService.getupdateclientLedger();
    //     ;
    //     if(route.url === '/ledger' && a === 1) {
    //       this.getLedger();
    //     }
    // });
    if (this.ledger.length === 0) {
      ;
      this.getLedger();
    }

    if (this.router.getCurrentNavigation().extras.state) {
      if ( typeof this.router.getCurrentNavigation().extras.state.client !== 'undefined') {
       this.client = this.router.getCurrentNavigation().extras.state.client;
       // this.getLedger();
      }

    }
   }

  ngOnInit() {
    this.getClients();    
  }
  ngOnDestroy() {
     this.events.unsubscribe('refreshLedger');
  }
  
getClients(){
  this.syncService.getAllClients().then(data=>{
    
    console.log(data);
    ;
   });
}
  back() {
    this.databaseService.setupdateclients(1);
    this.router.navigate(['/menu/clients']);
  }
  async itemClick(item) {
    item
    if (item.InvoiceID !== null) {
      this.syncService.getInvoice(item.InvoiceID,'/menu/clients');
    }
    
  }
  addPayment() {
    
    event.stopPropagation();
    const navigationExtras: NavigationExtras = {
      state: {
        Cid: this.client.Cid,
        Name: this.client.Fname + ' ' + this.client.Lname,
        Sync: this.client.Sync,
        url: this.router.url,
        Client: this.client
      }
    };
    this.router.navigate(['payment-info'], navigationExtras);
  }
  // editClient() {
  //     this.syncService.getClient(this.client.Cid,'');
  // }
  call() {
    const number = this.client.Cell;
    this.callnumber.callNumber(number, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  async getLedger() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.totalDebit = 0;
    this.totalCredit = 0;
    this.syncService.getClientLedger(this.client.Cid).then((data) => {
      
      this.ledger = data;
      for ( let i=0; i < this.ledger.length; i++) {
         if (this.ledger[i].IsCredit === 0) {
           this.totalDebit = this.totalDebit + this.ledger[i].Amount;
         } else {
           this.totalCredit = this.totalCredit + this.ledger[i].Amount;
         }
        // const d = new Date(Date.parse(this.ledger[i].Date));
         //alert(d);
        // this.ledger[i].Date =  this.datePipe.transform('2019 12 30', 'dd MMM yyyy');
         const z = new Date(parseInt(this.ledger[i].Date)*1000).toString();
         this.ledger[i].Date =  this.datePipe.transform(z, 'dd MMM yyyy');
      }
     // this.total = this.totalCredit - this.totalDebit;
      this.total = this.totalDebit - this.totalCredit;
      loading.dismiss();
    });

  }
  addInvoice() {
    this.router.navigate(['addinvoice']);
  }
  async share() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    
    this.socialSharing.share('message').then(() => {
    loading.dismiss();
    }).catch(() => {

    });
  }
  Sms() {
    if (this.total === 0) {
      const number = this.client.Cell;
      let message = 'From - ' + this.businessName + '\nMob: 03007491812'  +
      '\nYour balance is clear. Thank you for your cooperation';
      this.socialSharing.shareViaSMS(message, number).then(() => {
        }).catch(() => {

        });
    } else {
      const number = this.client.Cell;
      let message = 'From - ' + this.businessName + '\nMob: 03007491812'  +
      '\nYour Payment Of - ' + this.currency + this.total + ' is Pending. Please Make Payment As Soon As Possible. Thank You';
      this.socialSharing.shareViaSMS(message, number).then(() => {
        }).catch(() => {

        });
    }
   
  }
  async createPdf() {
    let items = [];
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const itemss = [];
    
    for (let i = 0; i < this.ledger.length; i++) {
      if (this.ledger[i].IsCredit === 1) {
        
        itemss.push(
          [
                { text:  this.ledger[i].Amount.toString() , fontSize: 7, color: '#000000' },
                { text:  this.ledger[i].Date.toString()  , fontSize: 7, color: '#000000' },
                { text:  '-'  , fontSize: 7, color: '#000000' }
          ]
        );
      } else {
              itemss.push(
                [
                      { text:  '-' , fontSize: 7, color: '#000000' },
                      { text: this.ledger[i].Date.toString() , fontSize: 7, color: '#000000' },
                      { text:  this.ledger[i].Amount.toString() , fontSize: 7, color: '#000000' },
                ]
              );
            }
    }
    
    console.log(itemss);

  let total ;
    if (this.totalCredit > this.totalDebit) {
      total =    [
        { text: 'Total', fontSize: 8 },
        { text: 'PKR ' + this.total.toLocaleString(), fontSize: 8, color: '#ff0000', alignment: 'right'}
       ];
    } else {
      total =    [
        { text: 'Total', fontSize: 8 },
        { text: 'PKR ' + this.total.toLocaleString(), fontSize: 8, color: '#0a650a', alignment: 'right'}
       ];
    }


    var docDefinition = {
    pageSize: {
      width: 226.77192,
      height: 'auto'
    },
    pageMargins: [ 10, 15, 10, 15 ],
      content: [
        { text: this.company, bold: true, alignment: 'center', style: 'subheader'},
        { text: 'Client Ledger', style: 'header', fontSize: 10, alignment: 'left', color: '#ff0000' },
        // { text: this.datePipe.transform(new Date().toString(), 'dd MMM yyyy h:mm a'), alignment: 'right' },
        {text: this.client.Fname + ' ' + this.client.Lname, bold: true, fontSize: 8},
        {text: this.client.Shop + ',' + this.client.BillingAddress + ',' + this.client.City, fontSize: 6},
        {
          margin: [0, 10, 0, 0],
          style: 'totalsTable',
          table: {
              widths: [ 100, 100 ],
              body: [
                [
                  { text: 'Phone', fontSize: 8 },
                  { text: this.client.Cell, fontSize: 8, alignment: 'right'}
                ],
                total,
                  // [
                  //     { text: 'Total', fontSize: 6 },
                  //     { text: this.total, fontSize: 8, color: '#ff0000', alignment: 'right'}
                  // ],
                  [
                      { text: 'PKR ' + this.totalCredit.toLocaleString(), color: '#0a650a', fontSize: 8 },
                      { text: 'PKR ' + this.totalDebit.toLocaleString(), color: '#ff0000', fontSize: 8, alignment: 'right'}
                  ],
                ]
              },
              layout: 'noBorders'
            },

      {
        margin: [0, 10, 0, 0],
        text: [
          { text: 'Credit(+)  ' , style: 'subheader', fontSize: 8, color: '#000000' },
          { text: '                          Date'                      , style: 'subheader', fontSize: 8, color: '#000000' },
          { text: '                                  Debit(-)' , style: 'subheader', fontSize: 8, color: '#000000' },
        ]
      },
        {
          margin: [0, 5, 0, 0],
          style: 'totalsTable',
          table: {
              widths: [70, 90, 70 ],
              body: itemss
          },
          layout: 'noBorders'
      }
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
    
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
       // var blob = new Blob([buffer], { type: 'application/pdf' });
        var utf8 = new Uint8Array(buffer);
        var binaryArray = utf8.buffer;
        var blob = new Blob([binaryArray], { type: 'application/pdf' });
        const a = new Date().getTime().toString();
        this.file.writeFile(this.file.dataDirectory,  a + '.pdf', blob).then(fileEntry => {
        //  this.fileOpener.open(this.file.dataDirectory + 'Invoice.pdf', 'application/pdf');        
         });
        this.socialSharing.share("test", null, this.file.dataDirectory + a + '.pdf', null).then(() => {
          loading.dismiss();
          console.log('social share');
          console.log(this.file.dataDirectory);
          }).catch(() => {
      
          });
        
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
  editPayment(item) {
     const navigationExtras: NavigationExtras = {
      state: {
        ID: item.ID,
        Cid: this.client.Cid,
        Date: item.Date,
        Amount: item.Amount,
        Name: this.client.Fname + ' ' + this.client.Lname,
        LedgerSync: item.Sync,
        Sync: this.client.Sync,
        Remarks: item.Remarks,
        url: 'ledger'
      }
    };
    this.router.navigate(['payment-info'], navigationExtras);
  }

}
