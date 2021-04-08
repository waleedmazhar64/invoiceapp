import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, NavController, ModalController, Events } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { NavigationExtras, Router, NavigationStart } from '@angular/router';
import { AddpurchasedorderPage } from '../addpurchasedorder/addpurchasedorder.page';
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

import { PrintService} from 'src/app/services/print.service';
import {PrinterListModalPage} from 'src/app/pages/printer-list-modal/printer-list-modal.page';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {
  selectedPrinter:any=[];
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
  page = 0;
  maximumPages = 1;
  refresh = false;
  infiniteScroll: any;
  records = 0;
  totalRecords = 0;
  subscription;


  // showSpinner = true;
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
  company = 'PKR';
  currency = '';
  showAdd = 0;
  showDetails = 0;
  pdfObj = null;
  public buttonClicked: boolean = false;
  constructor(
    public actionSheetController: ActionSheetController,
    private router: Router,
    private databaseprovider: DatabaseService,
    private loadingCtrl: LoadingController,
    private nativeHttp: HTTP,
    private syncService: SyncService,
    private datePipe: DatePipe,
    private network: Network,
    private printService:PrintService,
    private modalCtrl: ModalController,
    private socialSharing: SocialSharing,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    private plt: Platform,
    private file: File,
    private fileOpener: FileOpener,
    private storage: Storage,
    private events: Events,
    private alrtCtrl: AlertController

    ) {
      this.storage.get('app').then((val1) => {
        if (val1 === 'invoice') {
          this.storage.get('ID').then((val) => {
            this.syncService.getbValue(val,'Invoice Add').then((data) => {
              this.showAdd = data[0].bValue;
            });
            this.syncService.getbValue(val,'Invoice Details').then((data) => {
              this.showDetails = data[0].bValue;
            });
          });
        } else {
          this.showAdd = 1;
          this.showDetails = 1;
        }
      });
     
      this.storage.get('COM').then((val) => {
        this.company = val;
      });
      events.subscribe('refreshInvoices', (user, time) => {
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
    ;
    this.getformattedDate();
      if(this.dates==null)
    {
      this.dates=localStorage.getItem('DATE');
    }
      this.term=localStorage.getItem('TERMS');
      this.invoice=localStorage.getItem('INV');
    console.log(this.term);
   
  //     this.router.events.pipe(
  //   filter(event => event instanceof NavigationStart)
  // ).subscribe((route: NavigationStart) => {
  //     console.log('Route: '+ route.url);

  //     ;
  //     this.items = [];
  //     this.page = 0;
  //     this.maximumPages = 1;
  //     this.refresh = false;
  //     this.invoices = [];
  //     this.records = 0;
  //     this.totalRecords = 0;
  //     this.infiniteScroll.cle
  //     this.getAllInvoicesLocaldb();
     
  // });

      if (this.items.length === 0 || this.databaseprovider.getupdateinvoice() === 1) {
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
          
      }
    });
   // alert('2.a=' + this.databaseprovider.getupdateinvoice() + ', items:' + this.items.length + ', route:' + router.url);
    this.getAllInvoicesLocaldb();
  }


   }
   ionViewDidEnter() {
     this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route: NavigationStart) => {
        console.log('Route: ' + route.url);
        ;
        this.items = [];
        this.page = 0;
        this.maximumPages = 1;
        this.refresh = false;
        this.invoices = [];
        this.records = 0;
        this.totalRecords = 0;
        this.getAllInvoicesLocaldb();
    });
   }
   ionViewWillLeave() {
      this.subscription.unsubscribe();
    //  this.databaseprovider.setupdateinvoice(1);
   }

  ngOnInit() {
    this. getStartDate();
    localStorage.setItem('DATE', this.ldates);
    localStorage.setItem('TERM', '30');
    localStorage.setItem('INV', '300');
  }

  initializeactiveItems() {
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
    
    if (this.showDetails === 1) {
      let loading = await this.loadingCtrl.create();
      await loading.present();
      
      let items = [];
      const ClientSync = 0;
      // this.syncService.getCustomerSync(item.Cid).then((data) => {
      //   data 
      //   
      // });
      this.syncService.getInvoiceItems(item.Iid).then((data) => {
        
        items = data;
        const navigationExtras: NavigationExtras = {
          state: {
            invoice: item,
            Items: items,
            url: '/menu/invoice'
          }
        };
        this.router.navigate(['invoicedetails'], navigationExtras);
        loading.dismiss();
  
      });
    }

   
    // for(let i = 0;i<this.items.length;i++) {
    //      if(this.items[i].Iid === item.Iid) {
    //         items.push(this.items[i]);
    //      }
    // }
    // 
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
  delete(item) {
    
    // this.syncService.deleteBalance(item.Iid).then(()=>{
    //      console.log("Nice");
    // });
   // alert('del:' + item.total);
   
    this.tblId = item.Iid;
    this.syncService.getCustomerSync(item.Cid).then((data) => {
      data;
      
      let customerSync = data[0].Sync;
      if (customerSync === 1) {
        customerSync = 2;
      }
      
      this.syncService.deleteInvoice(item.Iid,item.Total,item.Cid,customerSync).then(() => {
       this.invoices = [];
       this.records = 0;
       this.databaseprovider.setupdateclients(1);
       this.getAllInvoicesLocaldb();
       this.AddLog();
       if (this.network.type === 'none') {
 
       }else {
         
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
    //      
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
        
        Iids
         const Ids = [];
        if (Iids.length > 0) {
          for (let i=0;i<Iids.length;i++) {
            Ids.push(Iids[i].Iid);
          }
          const url = this.databaseprovider.getURL();
        
      
        ;
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
              
                ;
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

                
              }

            }).then(() => {
              this.syncService.syncUpdatedClients().then((data) => {
                if(data.length > 0) {
                  const IDs = [];
                  for (let i = 0; i < data.length; i++) {
                     IDs[i] = data[i].Cid;
                  }
                  const url = this.databaseprovider.getURL();

                  ;
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
          
                  
                }
              
              }).then(() => {
                this.syncService.syncUpdatedItems().then((data) => {
                  if (data.length > 0) {
                    const IDs = [];
                    for (let i = 0; i < data.length; i++) {
                       IDs[i] = data[i].itemid;
                    }
                    const url = this.databaseprovider.getURL();

                    ;
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

        
      }
     
    });
  }
  update() {
    //;
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
     // ;
     
      this.initializeInvoices();
    // this.initializeactiveItems();
    // this.initializeinactiveItems();
      this.databaseprovider.setupdatePOS(0);
    },err =>{
      console.log('JS call error',err);
    });

  }
  initializeInvoices() {
    
    this.tempInvoices = this.invoices;
  }
  editClick() {
    this.editSelected = true;
    for(let i = 0; i<this.invoices.length;i++) {
     this.invoices[i]['selected'] = false;
   }
     
   }
   async getAllInvoicesLocaldb() {
    let loading = await this.loadingCtrl.create();
    await loading.present();

    // this.syncService.getAllInvoices2().then((data) => {
    //   
    //   this.invoices = data;
    //   this.databaseprovider.setupdateinvoice(0);
    //   this.initializeInvoices();
    //   loading.dismiss();
    //   
    // });
    //alert('records:' + this.records);
    this.syncService.getInvoices2Pagination(this.records).then((data) => {
      this.invoices = this.invoices.concat(data);
      this.databaseprovider.setupdateinvoice(0);
      this.initializeInvoices();
      loading.dismiss();
      this.records = this.records + 10;
      this.totalRecords = data[0].Total1;
    });
   }

   AddLog() {

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
  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    // alert('total:' + this.totalRecords + '\n current: ' + this.records);
    if (this.totalRecords <= this.records) {
      infiniteScroll.target.disabled = true;
      

    } else {
      
      this.page++;
      this.syncService.getInvoices2Pagination(this.records).then((data) => {
        this.invoices = this.invoices.concat(data);
        infiniteScroll.target.complete();
        this.initializeInvoices();
        this.records = this.records + 10;
      });
    }
  }
  listBTDevice()
  {
    this.printService.searchBt().then(async datalist=>{
      console.log(datalist);
      //1. Open printer select modal
      //let abc=await this.modalCtrl.create(PrinterListModalPage, {data:datalist});
      let abc = await this.modalCtrl.create({
        component: PrinterListModalPage,
        componentProps: {data:datalist}
      });
      //2. Printer selected, save into this.selectedPrinter
      /*abc.dismiss(async data=>{
        this.selectedPrinter=data;
        console.log(this.selectedPrinter);
        let xyz=await this.alertCtrl.create({
          header: data.name + " selected",
          buttons: ['Dismiss']
        });
         xyz.present();

      });*/
      abc.onDidDismiss().then(async (data)=>{
        this.selectedPrinter=data;
        console.log(this.selectedPrinter);
        let xyz=await this.alertCtrl.create({
          header: data.data.name + " selected",
          buttons: ['Dismiss']
        });
         xyz.present();
      })
      
      //0. Present Modal
      abc.present();

    },async err=>{
      console.log("ERROR",err);
      let mno=await this.alertCtrl.create({
        header: "ERROR " + err,
        buttons: ['Dismiss']
      });
      mno.present();
    })

  }

  testConnectPrinter()
  {
    var id=this.selectedPrinter.data.id;
    if(id==null||id==""||id==undefined)
    {
      //nothing happens, you can put an alert here saying no printer selected
    }
    else
    {
      let foo=this.printService.connectBT(id).subscribe(async data=>{
        console.log("CONNECT SUCCESSFUL",data);

        let mno=await this.alertCtrl.create({
          header: "Connect successful",
          buttons: ['Dismiss']
        });
        mno.present();

      },async err=>{
        console.log("Not able to connect",err);
        let mno=await this.alertCtrl.create({
          header: "ERROR " + err,
          buttons: ['Dismiss']
        });
        mno.present();
      });
    }
  }

  testPrinter(printData)
  {
    
    //var printData=" Big man in a suit of armour\n\n\n Take that of who are you\n\n\n Genius\n Billionare\n Playboy\n Philantropist\n"
    
    //var id=this.selectedPrinter.data.id;
    var id="66:12:5A:14:70:76";
    if(id==null||id==""||id==undefined)
    {
      //nothing happens, you can put an alert here saying no printer selected
    }
    else
    {
      let foo=this.printService.testPrint(id,printData);
    }
  }

  async createPdf1(item) {
    
    let items = [];
    var Cashmemo;
    var sub;
    var dis;
    var tot
    const date = item.CreateDate.bold();
    //this.testPrinter('\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+this.company+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+'\x1b\x45\x01'+item.Fname +' '+ item.Lname +'\x1b\x45\x00'+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+item.Shop + ',' + item.BillingAddress + ',' + item.City+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+'\x1b\x21\x30'+'\x1b\x45\x01'+'INVOICE'+'\x1b\x45\x00'+'\x1b\x21\x00'+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n\n'+'\x1b\x61\x00'+'\x1b\x45\x01'+'Dated:'+'\x1b\x45\x00'+item.CreateDate+'\x1b\x61\x00'+'\x1b\x61\x02'+'\x1b\x45\x01'+'  Due:'+'\x1b\x45\x00'+item.DueDate+'\x1b\x61\x02'+'\n\n'+'\x1b\x61\x00'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'Qty'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x00'+'\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'        Item(s)'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'    Total(PKR)'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\n');
    let printData='\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+this.company+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+'\x1b\x45\x01'+item.Fname +' '+ item.Lname +'\x1b\x45\x00'+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+item.Shop + ',' + item.BillingAddress + ',' + item.City+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+'\x1b\x21\x30'+'\x1b\x45\x01'+'INVOICE'+'\x1b\x45\x00'+'\x1b\x21\x00'+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n\n'+'\x1b\x61\x00'+'\x1b\x45\x01'+'Dated:'+'\x1b\x45\x00'+item.CreateDate+'\x1b\x61\x00'+'\x1b\x61\x02'+'\x1b\x45\x01'+'  Due:'+'\x1b\x45\x00'+item.DueDate+'\x1b\x61\x02'+'\n\n'+'\x1b\x61\x00'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'Qty'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x00'+'\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'        Item(s)'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'    Total(PKR)'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\n'+'\x1b\x4d\x01'+'\x1b\x45\x00'+Cashmemo+'\n'+'\x1b\x45\x01'+'Subtotal:'+'\x1b\x45\x00'+sub+'\n'+'\x1b\x45\x01'+'Discount:'+'\x1b\x45\x00'+dis+'\n'+'\x1b\x45\x01'+'Total:'+'\x1b\x45\x00'+tot+'\n\n\n';
  
    //this.testPrinter(data);
    this.syncService.getInvoiceItems(item.Iid).then((data) => {
      console.log(data)
      let s='';
      
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
         let Qty=items[i].Qty.toString();
               Qty=Qty.padEnd(8,' '); 
            
          let total1=total.toString();
              total1=total1.padStart(8,' ')
          let items1=items[i].Description.toString() + '(' + items[i].Qty.toString() + 'x' + items[i].CostPrice.toString() + ')';    
              items1=items1.padEnd(23,' ');  
          s+=Qty+items1+total1+'\n';
        }
        
        }
        //this.testPrinter(this.z);
        //console.log(this.z)
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

      console.log(this.pdfObj);
      printData=printData.replace(Cashmemo,s);
      //printData=printData.replace(',',' ');
      let ser='PKR ' + (item.Total + item.Discount).toLocaleString();
      ser=ser.padStart(30,' ');
      printData=printData.replace(sub,ser);
      let das='PKR ' + item.Discount.toLocaleString();
      das=das.padStart(30,' ');
      printData=printData.replace(dis,das);
      let tat='PKR ' + item.Total.toLocaleString();
      tat=tat.padStart(33,' ');
      printData=printData.replace(tot,tat);
      //this.testPrinter('\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+this.company+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+'\x1b\x45\x01'+item.Fname +' '+ item.Lname +'\x1b\x45\x00'+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+item.Shop + ',' + item.BillingAddress + ',' + item.City+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+'\x1b\x21\x30'+'\x1b\x45\x01'+'INVOICE'+'\x1b\x45\x00'+'\x1b\x21\x00'+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n\n'+'\x1b\x61\x00'+'\x1b\x45\x01'+'Dated:'+'\x1b\x45\x00'+item.CreateDate+'\x1b\x61\x00'+'\x1b\x61\x02'+'\x1b\x45\x01'+'  Due:'+'\x1b\x45\x00'+item.DueDate+'\x1b\x61\x02'+'\n\n'+'\x1b\x61\x00'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'Qty'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x00'+'\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'        Item(s)'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'    Total(PKR)'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\n');
       
      this.testPrinter(printData);
      
      
      /*setTimeout( () => {
        this.testPrinter('hello\n');
   },2000 );*/
    });

  }
  ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  }
  downloadPdf1() {
    
    var binaryArray;
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
       // var blob = new Blob([buffer], { type: 'application/pdf' });
       console.log(buffer.length);  
        var utf8 = new Uint8Array(buffer);
        //this.testPrinter(utf8);
         binaryArray = utf8.buffer;
        var blob = new Blob([binaryArray], { type: 'application/pdf' });
        const a = new Date().getTime().toString();
        this.file.writeFile(this.file.dataDirectory,  a + '.pdf', blob).then(fileEntry => {
          console.log(fileEntry);  
        //this.fileOpener.open(this.file.dataDirectory+ a + '.pdf', 'application/pdf');        
         });
         
         console.log(this.file.dataDirectory+ a + '.pdf');
         //this.testPrinter(this.file.dataDirectory+ a + '.pdf');
         //;
        /*this.socialSharing.share("test", null, this.file.dataDirectory + a + '.pdf', null).then(() => {
          loading.dismiss();
          console.log('social share');
          console.log(this.file.dataDirectory);
          }).catch(() => {
      
          });*/
        
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

  share1(item) {

    this.alrtCtrl.create({
      header: 'Share Option',
      subHeader: '',
      message: 'Do you want to share pdf or text?',
      buttons: [
        {
          text: 'PDF',
          handler: () => {
            console.log('Cancel clicked');
            this.createPdf(item);
          }
        },
        {
          text: 'TEXT',
          handler: (data:string) => {
            this.shareText(item);

          }
        }
      ]
    }).then(alert => alert.present());
 
  }
  async shareText(item) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    let message = this.company + ' - ' +  'Invoice No: ' + item.Iid +
    '\n' + item.Fname + ' ' + item.Lname +
    '\n' + item.CreateDate +
    '\nDue Date: ' + item.DueDate +
    '\nDetail';

    // let message = 'From- \nCustomer Account name - ' + item.Fname + ' ' + item.Lname + '\nShop - ' + item.Shop +
    // '\nAddress - ' + item.BillingAddress + '\nCity - ' + item.City +
    // '\nInvoice Items Details Are As Follow:';
    // for(let i=0; i<this.addedItems.length; i++) {
    //   message = message +  '\nItem No. - ' + i + 1 + '\nItem - ' + this.addedItems[i].Description + '\nQty - ' + this.addedItems[i].Qty;
    // }
    let items = [];
    this.syncService.getInvoiceItems(item.Iid).then((data) => {
      items = data;
      const itemss = [];
      console.log(items);
      for(let i=0; i<items.length; i++) {
        message = message +  '\n' + (i + 1) + '. '  + items[i].Description + ' | ' + items[i].Qty + 'x' + items[i].CostPrice + ' | ' + 'Subtotal - ' + this.currency + (items[i].Qty*items[i].CostPrice);
      }
      if (item.Discount > 0) {
        message = message + '\nDiscount - ' + this.currency + ' ' +  item.Discount + ' | ' + 'Total - '  + this.currency + item.Total;
      }
      if (item.Discount === 0) {
        message = message + '\nTotal - '  + this.currency + item.Total;

      }

      this.socialSharing.share(message, null,null, null).then(() => {
        loading.dismiss();
       
        }).catch(() => {
    
        });
    });
  }

}

