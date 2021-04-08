import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, NavController } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { NavigationExtras, Router, NavigationStart } from '@angular/router';
import {AddpurchasedorderPage } from '../addpurchasedorder/addpurchasedorder.page';
import { filter } from 'rxjs/operators';
import { DatabaseService} from 'src/app/services/database.service';
import { Platform, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { finalize } from 'rxjs/operators';
import { SyncService } from 'src/app/services/sync.service';
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
  selector: 'app-trash-invoices',
  templateUrl: './trash-invoices.page.html',
  styleUrls: ['./trash-invoices.page.scss'],
})
export class TrashInvoicesPage implements OnInit {
  active = "success";
  paidcolor = 'primary';
  unpaidcolor = 'primary';
  dates:any;
  ldates:any;
  up:any;
  full:any;
  term:any;
  invoice:any;
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

  // showSpinner = true;
  refresh = false;
  data: Observable<any>;
  // items = [
  //   {
  //      name: 'saad',
  //      date: '10/09/2019',
  //      duedate: '24',
  //      total: '108',
  //      selected: false
  //   },
  //   {
  //     name: 'saad',
  //     date: '10/09/2019',
  //     duedate: '24',
  //     total: '109',
  //     selected: false
  //   }

  // ];
  items = []
  editSelected = false; 
  itemSelected = false;
  selectedCount = this.items.filter(x => x.selected === true).length;
  s = 0;
  public buttonClicked: boolean = false;
  company = '';
  currency ='';
 
  pdfObj = null;
  constructor(
    public actionSheetController: ActionSheetController,
    private router: Router,
    private databaseprovider: DatabaseService,
    private loadingCtrl: LoadingController,
    private nativeHttp: HTTP,
    private syncService: SyncService,
    private datePipe: DatePipe,
    private network: Network,
    private storage: Storage,
    private socialSharing: SocialSharing,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private plt: Platform,
    private file: File,
    private fileOpener: FileOpener,


    ) {
      this.storage.get('COM').then((val)=>{
        this.company = val;
      });
     
      debugger;
      this.storage.get('userId').then((val)=>{
        this.usdId = val;
        console.log(this.usdId);
      });
      debugger;
    this.getformattedDate();
    if(this.dates==null)
    {
      this.dates=localStorage.getItem('DATE');
    }
    this.term=localStorage.getItem('TERMS');
    this.invoice=localStorage.getItem('INV');
    console.log(this.term);
   // addpurchasedorder.clearAll();
   //  a: AddpurchasedorderPage;
      this.router.events.pipe(
    filter(event => event instanceof NavigationStart)
  ).subscribe((route: NavigationStart) => {
      console.log('Route: '+route.url);
      const a = this.databaseprovider.getupdateinvoice();
      debugger;
      storage.get('currency').then((val) => {
        if (val !== null) {
            this.currency = val.toString();
            debugger
        }
      });
      if(route.url == '/menu/invoice' && a === 1) {
      this.getAllInvoicesLocaldb();
      }
      //this.getDataNativeHttp();
  });
  if(this.items.length === 0) {
    debugger;
    // this.getDataNativeHttp();
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
          debugger
      }
    });
    this.getAllInvoicesLocaldb();
  }

   }

  ngOnInit() {
    this. getStartDate();
    localStorage.setItem('DATE',this.ldates);
    localStorage.setItem('TERM','30');
    localStorage.setItem('INV','300');
  }

  initializeactiveItems(){
    this.tempItems = this.items;
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  getformattedDate()
  {
     this.full=localStorage.getItem("DATE");
     var dateObj=new Date(this.full);

     var year= dateObj.getFullYear().toString();
     var month= dateObj.getMonth().toString();
     var date= dateObj.getDate().toString();
     var monthArray=['01','02','03','04','05','06','07','08','09','10','11','12'];

     this.dates=monthArray[month]+'/'+date+'/'+year;
     console.log(this.dates);

  }
  
  getStartDate()
  {
     var dateObj=new Date();

     var year= dateObj.getFullYear().toString();
     var month= dateObj.getMonth().toString();
     var date= dateObj.getDate().toString();
     var monthArray=['01','02','03','04','05','06','07','08','09','10','11','12'];

     this.ldates=monthArray[month]+'/'+date+'/'+year;
     console.log(this.dates);

  }
  
  Invoice(){
    this.up=localStorage.getItem("INV")
    this.up++;
    localStorage.setItem("INV",this.up);
  }
  edittxt() {
    alert('edit');
  }
  doRefresh(refresher) {
    this.getAllInvoicesLocaldb();

    refresher.target.complete();
  //   this.data.subscribe(data => {
  //     this.items = data.results;
  //     refresher.target.complete();
  //  });
  this.items = this.items;
  }
  async itemClicked(item) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    debugger
    let items = [];
    this.syncService.getInvoiceItems(item.Iid).then((data) => {
      debugger
      items = data;
      const navigationExtras: NavigationExtras = {
        state: {
          invoice: item,
          Items: items
        }
      };
      this.router.navigate(['invoicedetails'], navigationExtras);
      loading.dismiss();

    });
    // for(let i = 0;i<this.items.length;i++) {
    //      if(this.items[i].Iid === item.Iid) {
    //         items.push(this.items[i]);
    //      }
    // }
    // debugger
    // const navigationExtras: NavigationExtras = {
    //    state: {
    //      invoice: item,
    //      Items: items
    //    }
    //  };
    //  this.router.navigate(['invoicedetails'], navigationExtras);
  }
  edit(item) {
    
    alert('edit:' + item.total);
  }
  restore(item) {
    debugger
     
    this.tblId = item.Iid;
    this.syncService.getCustomerSync(item.Cid).then((data) => {
      data;
      debugger
      let customerSync = data[0].Sync;
      if (customerSync === 1) {
        customerSync = 2;
      }
      debugger
      this.syncService.restoreInvoice(item.Iid,item.Total,item.Cid,customerSync).then(() => {
 
       this.getAllInvoicesLocaldb();
       this.AddLog();
       if (this.network.type === 'none') {
 
       }else {
         debugger
         this.syncRestoredInvoices();
       }
     });
    });
    // alert('del:' + item.total);
  }
  syncRestoredInvoices() {
    debugger
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
            'Name': 'syncRestoredInvoices',
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
  update() {
    //debugger;
    this.selectedCount = this.invoices.filter(x => x.selected === true).length;
  }
  addIcon() {
    this.router.navigate(['addinvoice']);
  }
  paid() {

    this.paidcolor = 'success';
    this.unpaidcolor = 'primary'
  }
  unpaid() {
    this.unpaidcolor = 'success';
    this.paidcolor = 'primary';
  }
  back() {
    debugger
    this.s = 0;
    this.paidcolor = 'primary';
    this.unpaidcolor = 'primary';

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
  async getDataNativeHttp() {
    let loading = await this.loadingCtrl.create();
    await loading.present();

    const url = this.databaseprovider.getURL();
    this.nativeHttp.setDataSerializer("json");

    let nativeCall = this.nativeHttp.post(url , 
      {
        'Name': 'getAllInvoices',
        "AccountId": '113008225657937776461'
      } , 
      {
        'Content-Type': 'application/json',
        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
      });

    from(nativeCall).pipe(
      finalize(() => loading.dismiss)
    )
    .subscribe(data => {
      loading.dismiss();
      console.log('Native data:',data);
      const g = JSON.parse(data.data);
      this.invoices = g.invoices;
      this.items = g.items;
      console.log(this.invoices[0]);
     // this.items = this.POitems;
     // this.sortClients();
      // this.inactiveClients = [];
      // this.activeClients = [];
      // for(let i = 0; i < this.clients.length; i++) {
      //   if(this.clients[i].Active === '0') {
      //     this.inactiveClients.push(this.clients[i]);
      //   } else {
      //     this.activeClients.push(this.clients[i]);
      //   }
      // }
    //  this.selectActive();
     // debugger;
     
      this.initializeInvoices();
    // this.initializeactiveItems();
    // this.initializeinactiveItems();
      this.databaseprovider.setupdatePOS(0);
    },err =>{
      console.log('JS call error',err);
    });

  }
  initializeInvoices() {
    debugger
    this.tempInvoices = this.invoices;
  }
  editClick() {
    this.editSelected = true;
    for(let i = 0; i<this.invoices.length;i++) {
     this.invoices[i]['selected'] = false;
   }
     debugger
   }
   async getAllInvoicesLocaldb() {
    let loading = await this.loadingCtrl.create();
    await loading.present();

    this.syncService.getAllInvoices3().then((data) => {
      debugger
      this.invoices = data;
      this.databaseprovider.setupdateinvoice(0);
      this.initializeInvoices();
      loading.dismiss();
      debugger
    });
   }

   AddLog(){
  
    if (this.usdId === 1) {
      this.acttype = 'You restored';
    } else {
      this.acttype = 'You restored';
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
  

}
