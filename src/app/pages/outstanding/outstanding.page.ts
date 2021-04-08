import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SyncService } from 'src/app/services/sync.service';
import { ActionSheetController, AlertController, NavController, Events } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { NavigationExtras, Router, NavigationStart } from '@angular/router';
import {AddpurchasedorderPage } from '../addpurchasedorder/addpurchasedorder.page';
import { filter } from 'rxjs/operators';
import { DatabaseService} from 'src/app/services/database.service';
import { Platform, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { finalize } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { Network } from '@ionic-native/network/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FileOpener } from '@ionic-native/file-opener/ngx';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-outstanding',
  templateUrl: './outstanding.page.html',
  styleUrls: ['./outstanding.page.scss'],
})
export class OutstandingPage implements OnInit {
  invoice:any=[];
  dates:any;
  ddate:any;
  diff:any;
  total:any=0;
  tempItems = [];
  invoices = [];
  tempInvoices = [];
  invoiceItems = [];
  usdId:any;
  acttype:any;
  lgdate:any;
  name:any;
  tblId:any;
  tblName:any;
  page = 0;
  maximumPages = 1;
  refresh = false;
  infiniteScroll: any;
  records = 0;
  totalRecords = 0;
  subscription;

  title = '';
  items = [];
  editSelected = false;
  itemSelected = false;
  selectedCount = this.items.filter(x => x.selected === true).length;
  s = 0;

  letterObj = {
    to: '',
    from: '',
    text: ''
  }
  company = '';
  currency = '';
  sub1;
  pdfObj = null;
  public buttonClicked: boolean = false;
  constructor(
    private location: Location,
    public actionSheetController: ActionSheetController,
    private router: Router,
    private databaseprovider: DatabaseService,
    private loadingCtrl: LoadingController,
    private nativeHttp: HTTP,
    private syncService: SyncService,
    private datePipe: DatePipe,
    private network: Network,
    private socialSharing: SocialSharing,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private plt: Platform,
    private file: File,
    private fileOpener: FileOpener,
    private storage: Storage,
    private nav: NavController,
    private platform: Platform,
    private events: Events
  ) { 

    events.subscribe('refreshOutInvoices', (user, time) => {
      this.infiniteScroll.target.disabled = false;
      this.items = [];
      this.page = 0;
      this.maximumPages = 1;
      this.refresh = false;
      this.invoices = [];
      this.records = 0;
      this.totalRecords = 0;
      this.getAllInvoicesLocaldb();
    });
    this.storage.get('COM').then((val) => {
      this.company = val;
    });

    if (this.items.length === 0 || this.databaseprovider.getupdateinvoice() === 1) {
      storage.get('currency').then((val) => {
        if (val !== null) {
            this.currency = val.toString();
            debugger
        }
      });
     // alert('2.a=' + this.databaseprovider.getupdateinvoice() + ', items:' + this.items.length + ', route:' + router.url);
      this.getAllInvoicesLocaldb();
    }
    
    if (this.router.getCurrentNavigation().extras.state) {
      this.title = this.router.getCurrentNavigation().extras.state.title;
    }
    this.GetInvoices();
  }
  initializeactiveItems(){
    this.tempItems = this.items;
  }
  async getAllInvoicesLocaldb() {
    let loading = await this.loadingCtrl.create();
    await loading.present();

    // this.syncService.getAllInvoices2().then((data) => {
    //   debugger
    //   this.invoices = data;
    //   this.databaseprovider.setupdateinvoice(0);
    //   this.initializeInvoices();
    //   loading.dismiss();
    //   debugger
    // });
    //alert('records:' + this.records);
    this.syncService.OustandingInvoices2Pagination(this.records).then((data) => {
      this.invoices = this.invoices.concat(data);
      this.databaseprovider.setupdateinvoice(0);
      this.initializeInvoices();
      loading.dismiss();
      this.records = this.records + 10;
      this.totalRecords = data[0].Total1;
    });
   }
  async itemClicked(item) {
    
    let loading = await this.loadingCtrl.create();
    await loading.present();
    debugger
    let items = [];
    const ClientSync = 0;
    // this.syncService.getCustomerSync(item.Cid).then((data) => {
    //   data 
    //   debugger
    // });
    this.syncService.getInvoiceItems(item.Iid).then((data) => {
      debugger
      items = data;
      const navigationExtras: NavigationExtras = {
        state: {
          invoice: item,
          Items: items,
          url: 'Outstanding'
        }
      };
      this.router.navigate(['invoicedetails'], navigationExtras);
      loading.dismiss();

    });
  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.items = [];
    this.page = 0;
    this.maximumPages = 1;
    this.refresh = false;
    this.invoices = [];
    this.records = 0;
    this.totalRecords = 0;
    this.getAllInvoicesLocaldb();
    if (this.databaseprovider.getupdateinvoice() === 1) {
    
    }
    
  //   this.subscription = this.router.events.pipe(
  //    filter(event => event instanceof NavigationStart)
  //  ).subscribe((route: NavigationStart) => {
  //      console.log('Route: ' + route.url);
  //     // alert('route' + route.url);
  //      debugger;
  //      this.items = [];
  //      this.page = 0;
  //      this.maximumPages = 1;
  //      this.refresh = false;
  //      this.invoices = [];
  //      this.records = 0;
  //      this.totalRecords = 0;
  //      this.getAllInvoicesLocaldb();
  //  });
  //   this.sub1 = this.platform.backButton.subscribe(() => {
  //   this.nav.back();
  //  });
  }
  ionViewWillLeave() {
     this.subscription.unsubscribe();
    //  this.sub1.unsubscribe();

   //  this.databaseprovider.setupdateinvoice(1);
  }
  delete(item) {
    debugger
    // this.syncService.deleteBalance(item.Iid).then(()=>{
    //      console.log("Nice");
    // });
   // alert('del:' + item.total);
   
    this.tblId = item.Iid;
    this.syncService.getCustomerSync(item.Cid).then((data) => {
      data;
      debugger
      let customerSync = data[0].Sync;
      if (customerSync === 1) {
        customerSync = 2;
      }
      debugger
      this.syncService.deleteInvoice(item.Iid,item.Total,item.Cid,customerSync).then(() => {
       this.databaseprovider.setupdateclients(1);
       this.getAllInvoicesLocaldb();
       this.AddLog();
       if (this.network.type === 'none') {
 
       }else {
         debugger
         this.syncDeletedInvoices();
 
         
       }
     });
    });
    //  this.tblId = item.Iid;
    // this.syncService.deleteInvoice(item.Iid).then(() => {
 
    //    this.getAllInvoicesLocaldb();
    //    this.AddLog();
    //    if (this.network.type === 'none') {
 
    //    }else {
    //      debugger
    //      this.syncDeletedInvoices();
 
         
    //    }
    //  });
    // alert('del:' + item.total);
  }
  del(item) {
    this.shareALert("Warning",'','Are you sure you want to delete this Invoice?',item);
  }
  shareALert(head, sub, msg, item) {
    this.alertCtrl.create({
      header: head,
      subHeader: sub,
      message: msg,
      cssClass: 'alertSize',
      buttons: [
        {
          text: 'Delete',
          cssClass: 'customClass',
          role: 'cancel',
          handler: () => {
             console.log('yes')
            // this.deleteClient();
             this.delete(item);
          }
        },
         {
          text: 'Cancel',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    }).then(alert => alert.present());
  }
  syncDeletedInvoices() {
    this.syncService.syncUpdatedInvoices().then((Iids) => {
        debugger
        Iids
         const Ids = [];
        if (Iids.length > 0) {
          for (let i=0;i<Iids.length;i++) {
            Ids.push(Iids[i].Iid);
          }
          const url = this.databaseprovider.getURL();
        
      
        debugger;
       this.nativeHttp.setDataSerializer("json");
      
        let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncDeletedInvoices',
            "POS": Iids
          } , 
          {
            'Content-Type': 'application/json',
            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
          });
     
          from(nativeCall).pipe(
          finalize(() =>{} )
        )
        .subscribe(data => {
          console.log('Native data:',data);
          const g = JSON.parse(data.data);
          if(g.success === 1) {
           // alert('success');
            this.syncService.updateSyncedPOS(Ids).then((data) => {
              console.log('It Worked');
            });
            this.syncService.syncAddedLedger().then((data) => {
              if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                   IDs[i] = data[i].ID;
                }
                const url = this.databaseprovider.getURL();
              
                debugger;
               this.nativeHttp.setDataSerializer("json");
               
                let nativeCall = this.nativeHttp.post(url , 
                  {
                    'Name': 'syncAddedLedger',
                    "Payments": data
                  } , 
                  {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                  });
             
                from(nativeCall).pipe(
                  finalize(() =>{} )
                )
                .subscribe(data => {
                  console.log('Native data:',data);
                  const g = JSON.parse(data.data);
                  if(g.success === 1) {
                   // alert('success');
                    this.syncService.updateSyncedAddedLedger(IDs).then((data) => {
                    });
                  } else {
                     // alert('failed');
                  }
    
                 // this.initializeItems();
                },err =>{
                  console.log('JS call error',err);
                  const error = JSON.parse(err.error);
                  // alert(error.message);
                  console.log('Native data:',JSON.parse(error));
                });

                debugger
              }

            }).then(() => {
              this.syncService.syncUpdatedClients().then((data) => {
                if(data.length > 0) {
                  const IDs = [];
                  for (let i = 0; i < data.length; i++) {
                     IDs[i] = data[i].Cid;
                  }
                  const url = this.databaseprovider.getURL();

                  debugger;
                 this.nativeHttp.setDataSerializer("json");
                
                  let nativeCall = this.nativeHttp.post(url , 
                    {
                      'Name': 'syncUpdatedClients',
                      "Clients": data
                    } , 
                    {
                      'Content-Type': 'application/json',
                      'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                    });
               
                  from(nativeCall).pipe(
                    finalize(() =>{} )
                  )
                  .subscribe(data => {
                    console.log('Native data:',data);
                    const g = JSON.parse(data.data);
                    if(g.success === 1) {
                      //alert('success');
                      this.syncService.updateSyncedClients(IDs).then((data) => {
                      });
                    } else {
                      // alert('failed');
                    }
          
                   // this.initializeItems();
                  },err =>{
                    console.log('JS call error',err);
                    const error = JSON.parse(err.error);
                    //alert(error.message);
                    console.log('Native data:',JSON.parse(error));
                  });
          
                  debugger
                }
              
              }).then(() => {
                this.syncService.syncUpdatedItems().then((data) => {
                  if (data.length > 0) {
                    const IDs = [];
                    for (let i = 0; i < data.length; i++) {
                       IDs[i] = data[i].itemid;
                    }
                    const url = this.databaseprovider.getURL();

                    debugger;
                   this.nativeHttp.setDataSerializer("json");
                   
                    let nativeCall = this.nativeHttp.post(url , 
                      {
                        'Name': 'syncUpdatedItems',
                        "Items": data
                      } , 
                      {
                        'Content-Type': 'application/json',
                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                      });
                 
                 
                    from(nativeCall).pipe(
                      finalize(() =>{} )
                    )
                    .subscribe(data => {
                      console.log('Native data:',data);
                      const g = JSON.parse(data.data);
                      if(g.success === 1) {
                         //alert('success Updated');
                        this.syncService.updateSyncedItems(IDs).then((data) => {
                        });
                      } else {
                       //  alert('failed');
                      }
            
                     // this.initializeItems();
                    },err =>{
                      console.log('JS call error',err);
                      const error = JSON.parse(err.error);
                     // alert(error.message);
                      console.log('Native data:',JSON.parse(error));
                    });
            
                  }
                  
                  debugger
                });
              });
            });
          } else {
            // alert('failed');
          }

         // this.initializeItems();
        },err =>{
          console.log('JS call error',err);
          const error = JSON.parse(err.error);
          // alert(error.message);
          console.log('Native data:',JSON.parse(error));
        });

        debugger
      }
     
    });
  }
  geItems(searchbar) {
    this.initializeInvoices();
    const q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
    this.tempInvoices = this.tempInvoices.filter((v) => {
      if (v.Fname && q) {
        if (v.Fname.toLowerCase().indexOf(q.toLowerCase()) > -1) {
         console.log("true")
          return true;
        }
        console.log("false")
        return false;
      }
    });
    debugger
  }
  initializeInvoices() {
    debugger
    this.tempInvoices = this.invoices;
  }
  AddLog(){
  
    if (this.usdId === 1) {
      this.acttype = 'You deleted';
    } else {
      this.acttype = 'You deleted';
    }
    this.name = 'Invoice';
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.tblName = 'invoices';
    this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
    debugger
    this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
      
          console.log("Log has been added");
          this.syncService.syncAddedLog();
          //this.GetLogs();
          
    });
  }
  async share(item) {
    let items = [];
    let loading = await this.loadingCtrl.create();
    await loading.present();
    // item.Subtotal = parseFloat(item.Subtotal).toFixed(2);
    const message = 'Client Name:' + item.Fname + ' ' + item.Lname + '\n' 
    + 'Dated:' + item.CreateDate + '\n'
    + 'Due Date:' + item.DueDate + '\n'
    + 'Subtotal:' + item.Subtotal + '\n'
    + 'Discount:' + item.Discount + '\n'
    + 'Total:' + item.Total + '\n'       ;
    debugger
    this.socialSharing.share(message).then(() => {
    loading.dismiss();
    }).catch(() => {

    });
    this.syncService.getInvoiceItems(item.Iid).then((data) => {
      items = data;
    });
  }
  async createPdf(item) {
    let items = [];
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const date = item.CreateDate.bold();
    this.syncService.getInvoiceItems(item.Iid).then((data) => {
      items = data;
      const itemss = [];
      console.log(items);
      for (let i = 0; i < items.length; i++) {
        if ( items[i].Qty > 0) {
          const total = items[i].Qty * items[i].CostPrice;
          itemss.push(
            [
              { text:  items[i].Qty.toString(), fontSize: 8 , color: '#000000' },
              { text:  items[i].Description.toString() + '(' + items[i].Qty.toString() + 'x' + items[i].CostPrice.toString() + ')',
                fontSize: 8,
                color: '#000000'
               },
              { text:  total.toString(), fontSize: 8, color: '#000000' },
            ]
          );
        }

        }
      const left  = {
          text: [
                { text: 'Dated: ', bold: true, fontSize: 6, alignment: 'left'},
                { text:  item.CreateDate, color: '#000000' ,  fontSize: 6, alignment: 'left'},
          ]
        };
      const right = {
          text: [
                    { text: '                         Due Date: ' , bold: true, fontSize: 6, alignment: 'right' },
                    { text:  item.DueDate , color: '#000000' ,  fontSize: 6, alignment: 'right'},
                  ]
        };


      var docDefinition = {
        pageSize: {
          width: 226.77192,
          height: 'auto'
        },
        pageMargins: [ 10, 15, 10, 15 ],
        content: [
          { text: this.company, bold: true, alignment: 'center', style: 'subheader'},
          { text: item.Fname + ' ' + item.Lname , bold: true, fontSize: 6, alignment: 'right'},
          {
            text:
            [
             // {text: item.Fname + ' ' + item.Lname, fontSize: 6, alignment: 'right'},
              {text: item.Shop + ',' + item.BillingAddress + ',' + item.City, fontSize: 6, alignment: 'right'},
            ]

          },
          { text: 'INVOICE',  fontSize: 18, color: '#ff0000', alignment: 'right' },
          // { text: this.datePipe.transform(new Date().toString(), 'dd MMM yyyy h:mm a'), fontSize: 12, alignment: 'center' },
          {
            margin: [0, 5, 0, 0],
            style: 'totalsTable',
            table: {
                widths: [ 100, 100 ],
                body: [
                  [
                      left, right
                              ],
                ],

              },
              layout: 'noBorders'
            },
          { //alignment: 'center',
            margin: [0, 10, 0, 0],
            text: [
              { text: 'Qty  ' , style: 'subheader', color: '#000000' },
              { text: '                 Item(s)'                      , style: 'subheader',  color: '#000000' },
              { text: '                       Total(PKR)' , style: 'subheader',  color: '#000000' },
            ]
          },
          {
            //  alignment: 'center',
              margin: [0, 5, 0, 0],
              style: 'totalsTable',
              table: {
                //  alignment: 'center',
                  widths: [30, 120, 50 ],
                  body: itemss
              },
              layout: 'noBorders'
          },
          {
            margin: [0, 10, 0, 0],
            style: 'totalsTable',
            table: {
                widths: [ 100, 100 ],
                body: [
                    [
                        { text: 'Subtotal:', bold: true, fontSize: 8 },
                        { text: 'PKR ' + (item.Total + item.Discount).toLocaleString(), fontSize: 8, alignment: 'right'}
                    ],
                    [
                        { text: 'Distcount:', bold: true, fontSize: 8 },
                        { text: 'PKR ' + item.Discount.toLocaleString(), fontSize: 8, alignment: 'right'}
                    ],
                    [
                      { text: 'Total:', bold: true, fontSize: 8 },
                      { text: 'PKR ' + item.Total.toLocaleString(), fontSize: 8, alignment: 'right'}
                    ],
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
      }
      this.pdfObj = pdfMake.createPdf(docDefinition);
      this.downloadPdf(loading);
    });

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
        //  this.fileOpener.open(this.file.dataDirectory + 'Invoice.pdf', 'application/pdf');        
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
  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    // alert('total:' + this.totalRecords + '\n current: ' + this.records);
    if (this.totalRecords <= this.records) {
      infiniteScroll.target.disabled = true;
      debugger

    } else {
      debugger
      this.page++;
      this.syncService.getInvoices2Pagination(this.records).then((data) => {
        this.invoices = this.invoices.concat(data);
        infiniteScroll.target.complete();
        this.initializeInvoices();
        this.records = this.records + 10;
      });
    }
  }
  back() {
   this.nav.navigateRoot('/menu/dashboard');
   
  }
  GetInvoices() {
    this.syncService.getAllInvoices().then(data => {
       this.invoice = data;
       for (let i = 0; i < data.length; i++)
       {
        debugger;
       this.ddate=this.invoice[i].DueDate;
       console.log(this.ddate);
       this.getStartDate();
       if(this.diff<=30&&this.diff>0)
       {
           this.total=this.total+this.invoice[i].Total;
       }
       }
       console.log(this.total);
    });
  }
  getStartDate()
  {
     var dateObj=new Date();

     var year= dateObj.getFullYear().toString();
     var month= dateObj.getMonth().toString();
     var date= dateObj.getDate().toString();
     var monthArray=['01','02','03','04','05','06','07','08','09','10','11','12'];

     this.dates=monthArray[month]+'/'+date+'/'+year;
     console.log(this.dates);
     this.difference();

  }
  difference(){
    this.diff=Math.floor(( Date.parse(this.dates) - Date.parse(this.ddate) ) / 86400000);
    console.log(this.diff);
  }

}
