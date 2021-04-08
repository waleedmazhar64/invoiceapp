import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { from } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform, LoadingController, AlertController, Events } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { DatabaseService} from 'src/app/services/database.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SyncService } from 'src/app/services/sync.service';
import { Network } from '@ionic-native/network/ngx';
import { DatePipe, Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FileOpener } from '@ionic-native/file-opener/ngx';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-purchased-orders',
  templateUrl: './purchased-orders.page.html',
  styleUrls: ['./purchased-orders.page.scss'],
})
export class PurchasedOrdersPage implements OnInit {

  paidcolor = 'primary';
  unpaidcolor = 'primary';
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
  POs = [];
  POitems = [];
  tempPOS = [];
  editSelected = false;
  itemSelected = false;
  selectedCount = this.items.filter(x => x.selected === true).length;
  s = 0;
  usdId:any;
  acttype:any;
  lgdate:any;
  name:any;
  tblId:any;
  tblName:any;
  public buttonClicked: boolean = false;
  company = '';
  pdfObj = null;
  currency = '';
  page = 0;
  maximumPages = 1;
  refresh = false;
  infiniteScroll: any;
  records = 0;
  totalRecords = 0;
  subscription;
  showAdd = 0;
  showDetails = 0;
  constructor(
    private router: Router,
    private http: HttpClient,
    private nativeHttp: HTTP,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private databaseprovider: DatabaseService,
    private callnumber: CallNumber,
    private syncService: SyncService,
    private network: Network,
    private storage: Storage,
    private datePipe: DatePipe,
    private alertCtrl: AlertController,
    private socialSharing: SocialSharing,
    private file: File,
    private fileOpener: FileOpener,
    private events: Events,
    private location: Location,


  ) {
    this.storage.get('app').then((val1) => {
      if (val1 === 'invoice') {
        this.storage.get('ID').then((val) => {
          this.syncService.getbValue(val, 'PO Add').then((data) => {
            this.showAdd = data[0].bValue;
          });
          this.syncService.getbValue(val, 'PO Details').then((data) => {
            this.showDetails = data[0].bValue;
          });
        });
      } else {
        this.showAdd = 1;
        this.showDetails = 1;
      }
    });
    events.subscribe('refreshPOS', (user, time) => {
      this.infiniteScroll.target.disabled = false;
      this.items = [];
      this.page = 0;
      this.maximumPages = 1;
      this.refresh = false;
      this.POs = [];
      this.records = 0;
      this.totalRecords = 0;
      this.getAllPosLocaldb();
    });
    this.storage.get('COM').then((val) => {
      this.company = val;
    });

    this.storage.get('userId').then((val) => {
      this.usdId = val;
      console.log(this.usdId);
    });
        storage.get('currency').then((val) => {
          if (val !== null) {
              this.currency = val.toString();
              debugger
          }
        });
    this.getAllPosLocaldb();
    if (databaseprovider.getFrom() === 1) {
      this.s = 2;
    }
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe((route: NavigationStart) => {
    //     console.log('Route: ' + route.url);
    //     const a = this.databaseprovider.getupdatePOS();
    //     debugger;
    //     storage.get('currency').then((val) => {
    //       if (val !== null) {
    //           this.currency = val.toString();
    //           debugger
    //       }
    //     });
    //     if (route.url == '/menu/purchased-orders' && a === 1) {
    //       this.page = 0;
    //       this.maximumPages = 1;
    //       this.refresh = false;
    //       this.POs = [];
    //       this.records = 0;
    //       this.totalRecords = 0;
    //       this.getAllPosLocaldb();
    //     }
    // });
    // if(this.POs.length === 0) {
    //   storage.get('currency').then((val) => {
    //     if (val !== null) {
    //         this.currency = val.toString();
    //         debugger
    //     }
    //   });
    //   this.getAllPosLocaldb();
    //   this.syncDeletedPO();
    // }
   }
   ionViewDidEnter() {
   // this.getAllPosLocaldb();
    
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route: NavigationStart) => {
        console.log('Route: ' + route.url);
       // alert('route' + route.url);
        this.items = [];
        this.page = 0;
        this.maximumPages = 1;
        this.refresh = false;
        this.POs = [];
        this.records = 0;
        this.totalRecords = 0;
        this.getAllPosLocaldb();
    });
   }
   ionViewWillLeave() {
    this.subscription.unsubscribe();
 }

   geItems(searchbar) {
    this.initializePOs();
    const q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
    this.tempPOS = this.tempPOS.filter((v) => {
      if (v.Name && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
         console.log("true")
          return true;
        }
        console.log("false")
        return false;
      }
    });
    debugger
  }
  ngOnInit() {
  }
  addIcon() {
    this.router.navigate(['addpurchasedorder']);
  }
  edittxt() {
    alert('edit');
  }
  doRefresh(refresher) {
    this.getAllPosLocaldb();
    refresher.target.complete();
   
  //   this.data.subscribe(data => {
  //     this.items = data.results;
  //     refresher.target.complete();
  //  });
  //this.items = this.items;
  }
  async itemClicked(item) {
    if (this.showDetails === 1) {
      let loading = await this.loadingCtrl.create();
      await loading.present();
      debugger
      let items = [];
      this.syncService.getPOItems(item.ID).then((data) => {
        debugger
        items = data;
        const navigationExtras: NavigationExtras = {
          state: {
            PO: item,
            Items: items,
            url: '/menu/purchased-orders'
          }
        };
        this.router.navigate(['podetails'], navigationExtras);
        loading.dismiss();
  
      });
    }
   
    // for(let i = 0;i<this.POitems.length;i++) {
    //      if(this.POitems[i].Poid === item.ID) {
    //         items.push(this.POitems[i]);
    //      }
    // }
    debugger
   
  }
  edit(item) {

    alert('edit:' + item.total);
  }
  del(item) {
    this.shareALert("Warning",'','Are you sure you want to delete this Purchased Order?',item);
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
  delete(item) {
    debugger
   // alert('del:' + item.total);
    this.tblId = item.ID;
    this.syncService.getVendorSync(item.VendorID).then((data) => {
      data;
      let vendorSync = data[0].Sync;
      if (vendorSync === 1) {
        vendorSync = 2;
      }
      debugger
      this.syncService.deletePO(item.ID,item.Total,item.VendorID,vendorSync).then(() => {
      this.databaseprovider.setupdatevendors(1);
      this.databaseprovider.setupdatevendorLeger(1);
      this.databaseprovider.setupdateitems(1);
      this.getAllPosLocaldb();
      this.AddLog();
      if (this.network.type === 'none') {

      } else {
        debugger
        this.syncDeletedPO();

        
       }
      });
    });
    // this.syncService.deletePO(item.ID).then(() => {

    //   this.getAllPosLocaldb();
    //   this.AddLog();
    //   if (this.network.type === 'none') {

    //   }else {
    //     debugger
    //     this.syncDeletedPO();

        
    //   }
    // });

  }
  // del(item) {
  //   this.shareALert("Warning",'','Are you sure you want to delete this Purchased Order?',item);
  // }
  // shareALert(head, sub, msg, item) {
  //   this.alrtCtrl.create({
  //     header: head,
  //     subHeader: sub,
  //     message: msg,
  //     cssClass: 'alertSize',
  //     buttons: [
  //       {
  //         text: 'Delete',
  //         cssClass: 'customClass',
  //         role: 'cancel',
  //         handler: () => {
  //            console.log('yes')
  //           // this.deleteClient();
  //            this.delete(item);
  //         }
  //       },
  //        {
  //         text: 'Cancel',
  //         handler: () => {
  //           console.log('Confirm Ok');
  //         }
  //       }
  //     ]
  //   }).then(alert => alert.present());
  // }
  syncDeletedPO() {
    this.syncService.syncUpdatedPOSIDS().then((POIDS) => {
        debugger
        POIDS
        const Ids = [];
        if (POIDS.length > 0) {
          for (let i=0;i<POIDS.length;i++) {
            Ids.push(POIDS[i].ID);
          }
          const url = this.databaseprovider.getURL();
        
      
        debugger;
       this.nativeHttp.setDataSerializer("json");
       
        let nativeCall = this.nativeHttp.post(url , 
          {
            'Name': 'syncDeletedPOS',
            "POS": POIDS
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
            this.syncService.syncAddedLedgerVendor().then((data) => {
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
                    'Name': 'syncAddedLedgerVendor',
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
                    this.syncService.updateSyncedAddedLedgerVendors(IDs).then((data) => {
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
              this.syncService.syncUpdatedVendors().then((data) => {
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
                      'Name': 'syncUpdatedVendors',
                      "Vendors": data
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
                      this.syncService.updateSyncedVendors(IDs).then((data) => {
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
    this.selectedCount = this.POs.filter(x => x.selected === true).length;
  }
  paid() {

    this.paidcolor = 'success';
    this.unpaidcolor = 'primary';
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
  back1() {
    this.router.navigate(['/menu/dashboard']);
  }
  async getAllPOS() {
    let loading = await this.loadingCtrl.create();
    await loading.present();

    const url = this.databaseprovider.getURL();

    let nativeCall = this.nativeHttp.get(url + '/getPurchasedOrders.php',{},{
      'Content-Type':'application/json',
      'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
    });

    from(nativeCall).pipe(
      finalize(() => loading.dismiss)
    )
    .subscribe(data => {
      loading.dismiss();
      console.log('Native data:',data);
      const g = JSON.parse(data.data);
      this.POs = g.Po;
      this.POitems = g.items;
      console.log(this.POs[0]);
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
     
      this.initializePOs();
    // this.initializeactiveItems();
    // this.initializeinactiveItems();
      this.databaseprovider.setupdatePOS(0);
    },err =>{
      console.log('JS call error',err);
    });
  }
  initializePOs() {
     this.tempPOS = this.POs;
  }

  editClick() {
   this.items;
   this.POitems
   this.tempPOS
   this.editSelected = true;
   this.POs;
   for(let i = 0; i<this.POs.length;i++) {
    this.POs[i]['selected'] = false;
  }
    debugger
  }
  deleteSelected() {
    this.POs
    debugger
  }
  async getAllPosLocaldb() {
    let loading = await this.loadingCtrl.create();
    await loading.present();

    // this.syncService.getAllActivePOS().then((data) => {
    //   debugger
    //   this.POs = data;
    //   this.databaseprovider.setupdatePOS(0);
    //   this.initializePOs();
    //   loading.dismiss();
    //   debugger
    // });
    this.syncService.getActivePOSPagination(this.records).then((data) => {
      debugger
      this.POs = data;
      this.databaseprovider.setupdatePOS(0);
      this.initializePOs();
      loading.dismiss();
      this.totalRecords = data[0].Total1;
      this.maximumPages = 1;
      this.records = this.records + 10;
    //  alert('toa' + this.totalRecords + 'current' + this.records)
      debugger
    });
  }
  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    if (this.totalRecords <= this.records) {
      infiniteScroll.target.disabled = true;

    } else {
      this.page++;
      this.syncService.getActivePOSPagination(this.records).then((data) => {
        this.POs = this.POs.concat(data);
        this.initializePOs();
        infiniteScroll.target.complete();
        this.records = this.records + 10;
      });
    }
  }
  AddLog(){
  
    if (this.usdId === 1) {
      this.acttype = 'You deleted';
    } else {
      this.acttype = 'You added deleted';
    }
    this.name = 'Purchased Order';
    let now = new Date().toString();
    const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
    this.lgdate = 'at ' + a;
    this.tblName = 'tblpurchasedorder';
    this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
    debugger
    this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
      
          console.log("Log has been added");
          this.syncService.syncAddedLog();
          //this.GetLogs();
          
    });
  }
  async share(item) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    item
    debugger
    this.socialSharing.share().then(() => {
    loading.dismiss();
    }).catch(() => {

    });
  }
  async createPdf(item) {
    let items = [];
    let loading = await this.loadingCtrl.create();
    await loading.present();

    this.syncService.getPOItems(item.ID).then((data) => {
      items = data;
      const itemss = [];

      for (let i = 0; i < items.length; i++) {
        if ( items[i].Qty > 0) {
          const total = items[i].Qty * items[i].CostPrice;
          itemss.push(
            [
              { text:  items[i].Qty.toString(), fontSize: 8 , color: '#000000' },
              { text:  items[i].Description.toString() + '(' + items[i].Qty.toString()+'x'+items[i].CostPrice.toString()+')',
                fontSize: 8,
                color: '#000000'
               },
              { text:  total.toString(), fontSize: 8, color: '#000000' },
            ]
          );
        }

        }
        console.log(itemss);
      const right = {
          text: [
            { text: '                              Dated: ' , bold: true, fontSize: 6, alignment: 'right' },
            { text:  item.Date , color: '#000000' ,  fontSize: 6, alignment: 'right'},
          ]
        };
      const left =  {
          text: [
            { text: 'Purchase Order', bold: true, fontSize: 12, alignment: 'left'},
          ],
        };

      var docDefinition = {
        pageSize: {
          width: 226.77192,
          height: 'auto'
        },
        pageMargins: [ 10, 15, 10, 15 ],
          content: [
            { text: this.company, bold: true, alignment: 'center', style: 'subheader'},
            { text: item.Name , bold: true, fontSize: 6, alignment: 'right'},

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

          //   {
          //     text: [
          //       { text: '                              Dated: ' , bold: true, fontSize: 6, alignment: 'right' },
          //       { text:  item.Date , color: '#000000' ,  fontSize: 6, alignment: 'right'},
          //     ]
          //   },
          //   {
          //   text: [
          //     { text: 'Purchase Order', bold: true, fontSize: 12, alignment: 'left'},
          //   ],
          // },
            // { text: 'Purchased Order', style: 'header', fontSize: 40,  color: '#ff0000' },
            // { text: this.datePipe.transform(new Date().toString(), 'dd MMM yyyy h:mm a'), alignment: 'right' },
            // { text: this.company , style: 'header', fontSize: 30,  color: '#000000'},
          //   {
          //     margin: [0, 30, 0, 0],
          //     style: 'totalsTable',
          //     table: {
          //         widths: [ 100, 'auto' ],
          //         body: [
          //             [
          //                 {text: 'Vendor:', bold: true, fontSize: 15},
          //                  item.Name,
          //             ],
          //             [
          //                 {text: 'Dated:', bold: true, fontSize: 15},
          //                 item.Date,
          //             ],
          //         ]
          //     },
          //     layout: 'noBorders'
          // },
          {
            margin: [0, 10, 0, 0],
            text: [
              { text: 'Qty  ' , style: 'subheader', color: '#000000' },
              { text: '                 Item(s)'                      , style: 'subheader',  color: '#000000' },
              { text: '                       Total(PKR)' , style: 'subheader',  color: '#000000' },
            ]
          },
          {
            //  alignment: 'center',
              margin: [0, 10, 0, 0],
              style: 'totalsTable',
              table: {
                //  alignment: 'center',
                  widths: [30, 120, 50 ],
                  body: itemss
              },
              layout: 'noBorders'
          },
          {
            margin: [0, 5, 0, 0],
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
        };
  
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
