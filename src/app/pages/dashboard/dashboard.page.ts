import { DatabaseService} from 'src/app/services/database.service';
import { SyncService } from 'src/app/services/sync.service';
import { HTTP } from '@ionic-native/http/ngx';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Observable, from } from 'rxjs';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, IonRouterOutlet, Events } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { NavigationExtras, NavigationStart } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { Chart } from 'chart.js';
import { ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import 'chartjs-plugin-zoom';
import { filter } from 'rxjs/operators';
import { DatePipe } from '@angular/common';




const STORAGE_KEY = 'my_images';

declare var google;



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
   @ViewChild('barChart', {static: false}) barChart;
  // @ViewChild('barChart'), {static: false}) barChart;
  


  lines: any;
  invoices = [];
  POS:any=[];
  email:any;
  userId:any;  
  id:any;
  IsCredit:any;
  text:any;
  image:any;
  Amount:any;
  isLoggedIn : boolean = false;
  ledger:any=[];
  totalDebit:any;
  totalCredit:any;
  totalDebit1:any;
  totalCredit1:any;
  totalDebit2:any;
  totalCredit2:any;
  dates:any;
  ddate:any;
  diff:any;
  getit:any=[];
  getpo:any=[];
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
    },{
    eid: 'e102',
    ename: 'ram',
    esal: 2000
    },{
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
    }];
    records:any;
    url: string;
    LineChart=[];
    BarChart=[];
    PieChart=[];
    bars: any;
    linesChart: any;
    colorArray: any;
    Dates = [];
    invoiceAmounts = [];
    invoicePayments = [];
    invoicesPaymentDates = [];
    invoicesPaymentAmount = [];
    expenses = [];
    currency = '';
    subscription;
    URL;
    clientOutstanding = 0;
    clientOverdue = 0;

  constructor(
    private googlePlus: GooglePlus,
    private excelService: DatabaseService,
    private plt: Platform,
    private route: ActivatedRoute,
    private router: Router,
    private databaseprovider: DatabaseService,
    private network: Network,
    public http: HttpClient,
    private datePipe: DatePipe,
    private statubar: StatusBar,
    private syncService: SyncService,
    private nativeHttp: HTTP,
    private loadingCtrl: LoadingController,
   // private socialSharing: SocialSharing,
    private storage: Storage,
    private platform: Platform,
    private nav: NavController,
    private events: Events,
    private toastController: ToastController

    ) {
     
      events.subscribe('user:created', (user, time) => {
        this.clientOverdue = 0;
        this.clientOutstanding = 0;
        this.getClientsFiguers();
      });
      this.router.events.pipe(
        filter(event => event instanceof NavigationStart)
      ).subscribe((route: NavigationStart) => {

        storage.get('currency').then((val) => {
          if (val !== null) {
              this.currency = val.toString();
          }
        });
      });
      storage.get('currency').then((val) => {
        if (val !== null) {
            this.currency = val.toString();
        }
      });


      //this.checkLogin();
      this.statubar.backgroundColorByHexString('#4c8dff');
     // this.showGraph();



      // watch network for a disconnection
      this.network.onDisconnect().subscribe(() => {
        console.log('network was disconnected :-(');
        // alert('disconnedted');
        // this.toast('disconnedted')
      });
      this.network.onConnect().subscribe(() => {
        console.log('network connected!');
        // alert('connected');
        // this.toast('connected')
        setTimeout(() => {
          if (this.network.type === 'wifi') {
            console.log('we got a wifi connection, woohoo!');

          }
          this.syncService.serverSync();
    //       this.syncService.getAlldelInvoices().then((data) => {
    //     if (data.length > 0) {
    //     const url = this.databaseprovider.getURL();

    //    this.nativeHttp.setDataSerializer("json");
    //     let nativeCall = this.nativeHttp.post(url + '/delInvoices.php',
    //     {
    //       "InvoiceIDS": data
    //     }
    //     ,{
    //       'Content-Type':'application/json',
    //       'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
    //     });
     
    //     from(nativeCall).pipe(
    //       finalize(() => {} )
    //     )
    //     .subscribe(data => {
    //       console.log('Native data:',data);
    //       const g = JSON.parse(data.data);
    //       if(g.success === 1) {
    //         this.syncService.updatedelsInvoices().then((data) => {
    //         });
    //       } else {
    //       }

    //     },err =>{
    //       console.log('JS call error',err);
    //       const error = JSON.parse(err.error);
    //       console.log('Native data:',JSON.parse(error));
    //     });

    //   }
    // });
      //     this.syncService.getAlldelPOS().then((data) => {
      //     if (data.length > 0) {
      //     const url = this.databaseprovider.getURL();
      //    this.nativeHttp.setDataSerializer("json");
      //     let nativeCall = this.nativeHttp.post(url + '/delPOS.php',
      //     {
      //       "POSIDS": data
      //     }
      //     ,{
      //       'Content-Type':'application/json',
      //       'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
      //     });
      //     from(nativeCall).pipe(
      //       finalize(() =>{} )
      //     )
      //     .subscribe(data => {
      //       console.log('Native data:',data);
      //       const g = JSON.parse(data.data);
      //       if(g.success === 1) {
      //         this.syncService.updatedelsPOS().then((data) => {
      //         });
      //       } else {
      //       }
      //     },err =>{
      //       console.log('JS call error',err);
      //       const error = JSON.parse(err.error);
      //       console.log('Native data:',JSON.parse(error));
      //     });

      //   }

      // });
          
          this.syncService.syncAddedItems().then((data) => {
            if (data.length > 0) {
              const IDs = [];
              for (let i = 0; i < data.length; i++) {
                 IDs[i] = data[i].itemid;
              }
              const url = this.databaseprovider.getURL();
             this.nativeHttp.setDataSerializer("json");
               
              let nativeCall = this.nativeHttp.post(url , 
                {
                  'Name': 'syncAddedItems',
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
                  this.syncService.updateSyncedItems(IDs).then((data) => {
                  });
                } else {
                }
              },err =>{
                console.log('JS call error',err);
                const error = JSON.parse(err.error);
                console.log('Native data:',JSON.parse(error));
              });
            }

          });
          this.syncService.syncUpdatedItems().then((data) => {
            if (data.length > 0) {
              const IDs = [];
              for (let i = 0; i < data.length; i++) {
                 IDs[i] = data[i].itemid;
              }
              const url = this.databaseprovider.getURL();

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
                }
  
              },err =>{
                console.log('JS call error',err);
                const error = JSON.parse(err.error);
                console.log('Native data:',JSON.parse(error));
              });
  
            }

          });
          this.syncService.syncAddedClients().then((data) => {
            if(data.length > 0) {
              const IDs = [];
              for (let i = 0; i < data.length; i++) {
                 IDs[i] = data[i].Cid;
              }
              const url = this.databaseprovider.getURL();

             this.nativeHttp.setDataSerializer("json");
            
              let nativeCall = this.nativeHttp.post(url , 
                {
                  'Name': 'syncAddedClients',
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
                  this.syncService.updateSyncedClients(IDs).then((data) => {
                  });
                } else {
                }
  
              },err =>{
                console.log('JS call error',err);
                const error = JSON.parse(err.error);
                console.log('Native data:',JSON.parse(error));
              });

            }
          });
          this.syncService.syncUpdatedClients().then((data) => {
            if(data.length > 0) {
              const IDs = [];
              for (let i = 0; i < data.length; i++) {
                 IDs[i] = data[i].Cid;
              }
              const url = this.databaseprovider.getURL();

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
                  this.syncService.updateSyncedClients(IDs).then((data) => {
                  });
                } else {
                }
                            },err =>{
                console.log('JS call error',err);
                const error = JSON.parse(err.error);
                console.log('Native data:',JSON.parse(error));
              });

            }
          });
          this.syncService.syncAddedVendors().then((data) => {
            if (data.length > 0) {
              const IDs = [];
              for (let i = 0; i < data.length; i++) {
                 IDs[i] = data[i].ID;
              }
              const url = this.databaseprovider.getURL();

             this.nativeHttp.setDataSerializer("json");
             
               
              let nativeCall = this.nativeHttp.post(url , 
                {
                  'Name': 'syncAddedVendors',
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
                  this.syncService.updateSyncedVendors(IDs).then((data) => {
                  });
                } else {
                }
  
              },err =>{
                console.log('JS call error',err);
                const error = JSON.parse(err.error);
                console.log('Native data:',JSON.parse(error));
              });

            }
          });
          this.syncService.syncUpdatedVendors().then((data) => {
            if (data.length > 0) {
              const IDs = [];
              for (let i = 0; i < data.length; i++) {
                 IDs[i] = data[i].ID;
              }
              const url = this.databaseprovider.getURL();

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
                finalize(() => {} )
              )
              .subscribe(data => {
                console.log('Native data:',data);
                const g = JSON.parse(data.data);
                if(g.success === 1) {
                  this.syncService.updateSyncedVendors(IDs).then((data) => {
                  });
                } else {
                }
  
              },err =>{
                console.log('JS call error',err);
                const error = JSON.parse(err.error);
                console.log('Native data:',JSON.parse(error));
              });
  
              
            }
           
          });
          this.syncService.syncAddedPOS().then((data) => {
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
                  'Name': 'syncAddedPOs',
                  "POS": data
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
                  this.syncService.updateSyncedPOS(IDs).then((data) => {
                  });
                  this.syncService.syncAddedPOsItems().then((data) => {
                    if (data.length > 0) {
                      const IDs = [];
                      for (let i = 0; i < data.length; i++) {
                         IDs[i] = data[i].ID;
                      }
                      const url = this.databaseprovider.getURL();

                     this.nativeHttp.setDataSerializer("json");
                    
                      let nativeCall = this.nativeHttp.post(url , 
                        {
                          'Name': 'syncAddedPOsItems',
                          "POSItems": data
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
                          this.syncService.updateSyncedPOSItems(IDs).then((data) => {
                          });
                          this.syncService.syncAddedLedgerVendor().then((data) => {
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
                                  this.syncService.updateSyncedAddedLedgerVendors(IDs).then((data) => {
                                  });
                                } else {
                                }
                  
                              },err =>{
                                console.log('JS call error',err);
                                const error = JSON.parse(err.error);
                                console.log('Native data:',JSON.parse(error));
                              });
                  
                              
                            }
                           
                          });
                        } else {
                        }
          
                      },err =>{
                        console.log('JS call error',err);
                        const error = JSON.parse(err.error);
                        console.log('Native data:',JSON.parse(error));
                      });
          
                      
                    }
                   
                  });
                } else {
                }
  
              },err =>{
                console.log('JS call error',err);
                const error = JSON.parse(err.error);
                console.log('Native data:',JSON.parse(error));
              });
  
              
            }
           
           
          }).then((a) => {
            this.syncService.syncAddedInvoices().then((data) => {
              if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                   IDs[i] = data[i].Iid;
                }
                const url = this.databaseprovider.getURL();
              
                ;
               this.nativeHttp.setDataSerializer("json");
               
                let nativeCall = this.nativeHttp.post(url , 
                  {
                    'Name': 'syncAddedInvoices',
                    "Invoices": data
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
                    this.syncService.updateSyncedInvoices(IDs).then((data) => {
                    });
                    this.syncService.syncAddedInvoicesItems().then((data) => {
                      if (data.length > 0) {
                        const IDs = [];
                        for (let i = 0; i < data.length; i++) {
                           IDs[i] = data[i].Iiid;
                        }
                        const url = this.databaseprovider.getURL();
                      
                        ;
                       this.nativeHttp.setDataSerializer("json");
                       
                        let nativeCall = this.nativeHttp.post(url , 
                          {
                            'Name': 'syncAddedInvoicesItems',
                            "InvoiceItems": data
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
                            this.syncService.updateSyncedInvoicesItems(IDs).then((data) => {
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
                                    this.syncService.updateSyncedAddedLedger(IDs).then((data) => {
                                    });
                                  } else {
                                  }
                    
                                },err =>{
                                  console.log('JS call error',err);
                                  const error = JSON.parse(err.error);
                                  console.log('Native data:',JSON.parse(error));
                                });
                    
                                
                              }
                             
                            });
                          } else {
                          }
            
                        },err =>{
                          console.log('JS call error',err);
                          const error = JSON.parse(err.error);
                          console.log('Native data:',JSON.parse(error));
                        });
            
                        
                      }
                     
                    });
                  } else {
                  }
    
                },err =>{
                  console.log('JS call error',err);
                  const error = JSON.parse(err.error);
                  console.log('Native data:',JSON.parse(error));
                });
    
                
              }
             
            });
          });
          this.syncService.syncAddedLog().then((data8) => {
          }).then((data11) => {
            this.syncService.syncAddedUsers().then((data) => {
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
                    'Name': 'syncAddedUsers',
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
                    // alert('success');
                    this.syncService.updateSyncedUsers(IDs).then((data) => {
                    });
                    this.syncService.syncAddedacl().then((data) => {
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
                            'Name': 'syncAddedacl',
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
                          if ( g.success === 1) {
                            // alert('success');
                            this.syncService.updateSyncedacl(IDs).then((data) => {
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
          }).then(() => {
            this.syncService.syncUpdatedAcl().then((data) => {
              if(data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                   IDs[i] = data[i].ID;
                }
                const url = this.databaseprovider.getURL();
                if (data.length > 0) {
                  ;
                  this.nativeHttp.setDataSerializer("json");
                
                  let nativeCall = this.nativeHttp.post(url , 
                     {
                       'Name': 'syncUpdatedAcl',
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
                      //  alert('success');
                       this.syncService.updateSyncedAcl(IDs).then((data) => {
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
              
              }
            
            });
          }).then(() => {
            this.syncService.syncUpdatedUsers().then((data) => {
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
                    'Name': 'syncUpdatedUsers',
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
                    this.syncService.updateSyncedUsers(IDs).then((data) => {
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
          }).then((data9) => {
            this.syncService.syncUpdatedExpenses().then((data) => {
              
              if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                   IDs[i] = data[i].ID;
                }
                const url = this.databaseprovider.getURL();
            
                
               this.nativeHttp.setDataSerializer("json");
               
                let nativeCall = this.nativeHttp.post(url , 
                  {
                    'Name': 'syncDeletedExpenses',
                    "Expenses": data
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
                  
                  if (g.success === 1) {
                    this.syncService.updateSyncedExpenses(IDs);
                  } else {
                  }
          
                },err =>{
                  console.log('JS call error',err);
                  const error = JSON.parse(err.error);
                  console.log('Native data:',JSON.parse(error));
                });
          
              }
              
              
            });
          }).then(() => {
            this.syncService.syncAddedExpenses().then((data) => {
    
              if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                   IDs[i] = data[i].ID;
                }
                const url = this.databaseprovider.getURL();
            
                
               this.nativeHttp.setDataSerializer("json");
              
                let nativeCall = this.nativeHttp.post(url , 
                  {
                    'Name': 'syncAddedExpenses',
                    "Expenses": data
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
                  
                  if (g.success === 1) {
                    this.syncService.updateSyncedExpenses(IDs);
                  } else {
                  }
          
                },err =>{
                  console.log('JS call error',err);
                  const error = JSON.parse(err.error);
                  // alert(error.message);
                  console.log('Native data:',JSON.parse(error));
                });
          
              }
              
              
            });
          });

        }, 3000);
      });


      if (this.router.getCurrentNavigation().extras.state) {
        this.userId = this.router.getCurrentNavigation().extras.state.user;
        console.log('userID:', this.userId);
        this.getAllAccounts();
      }
    }

  ngOnInit() {
   // console.log(this.userId);
  }
  // onPageWillLeave():void {
  //   this.platform.backButton.unsubscribe();
  // }
  ionViewWillLeave() {
   // this.subscription.unsubscribe();
}
  ionViewDidEnter() {
  //   this.subscription = this.platform.backButton.subscribe(()=>{
  //     navigator['app'].exitApp();
  // });
    this.databaseprovider.setLogsnav(0);
    this.Dates = [];
    this.invoiceAmounts = [];
    this.invoicePayments = [];

    this.getClientsFiguers();
    this.getInvoicesDataFromLedger();
    this.GetLedger();
    this.getVendorOuts();
   // this.createBarChart();
    this.createLineChart();
  }

  logout() {
    this.googlePlus.logout()
      .then(res => {
        console.log(res);
        this.email = "";
        this.userId = "";
        this.isLoggedIn = false;
      })
      .catch(err => console.error(err));
  }
//   exportAsXLSX():void {
//     if (this.plt.is('android')) {
//       alert('android');
//     } else {
//       this.excelService.exportAsExcelFile(this.data, 'sample');
//     //  alert('browser');
//     }

//  }
 getAllAccounts() {
   this.databaseprovider.getAllAccount().then(data => {
    this.records = data;
    console.log('records:' + this.records[0].email);
    ;
  });
 }
 seemore() {
   this.router.navigate(['menu/invoice']);
 }
 notificatioons() {
   this.router.navigate(['notifications']);
 }
 outstandingClients() {
  const navigationExtras: NavigationExtras = {
    state: {
     // user: this.received
     title: 'Outstanding'
    }
  };
  this.router.navigate(['outstanding'], navigationExtras);
  
 // this.nav.navigateRoot('outstanding');

 }
 outstandingVendors() {
  this.databaseprovider.setFrom(1);
  const navigationExtras: NavigationExtras = {
    state: {
     // user: this.received
     title: 'Outstanding',
     url : '/menu/dashboard'
    }
  };
  this.router.navigate(['/menu/purchased-orders'], navigationExtras);
 }
 overdue() {
  const navigationExtras: NavigationExtras = {
    state: {
     // user: this.received
     title: 'Overdue'
    }
  };
  this.router.navigate(['dashboard-invoices'], navigationExtras);
 }
 otherGraph() {
  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    const data = google.visualization.arrayToDataTable([
     ['Year', 'Sales'],
      [new Date('2001, 01,01'),  30],
      [new Date('2002, 01,01'),  70],
      [new Date('2003,01,01'),  45],
      [new Date('2004,01,01'),  99],
      [new Date('2005,01,01'),  22],
      [new Date('2006,0101,'),  0],
      [new Date('2086,01,01'),  13]
    ]);

    const options = {
      title: 'Company Performance',
      hAxis: {title: 'Year',  titleTextStyle: {color: '#333'},
               slantedText: true, slantedTextAngle: 80},
      vAxis: {minValue: 0},
      explorer: {
        actions: ['dragToZoom', 'rightClickToReset'],
        axis: 'horizontal',
        keepInBounds: true,
        maxZoomIn: 4.0},
      colors: ['#D44E41'],
    };

    const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
}
showChart() {
  var ctx = (<any>document.getElementById('yudhatp-chart')).getContext('2d');
  var chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
      labels: ["VB 6", "PHP", "Delphi", ".Net", "TypeScript"],
      datasets: [{
            label: "This is chart",
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            data: [20, 5, 10, 25, 45],
            borderWidth: 1
      }]
     }
  });
}
// showGraph() {
//   google.charts.load('current', {packages: ['corechart']});
//   google.charts.setOnLoadCallback(drawChart);
//   function drawChart() {
//   const data = google.visualization.arrayToDataTable([
//     ['Month', 'Sales', 'Expenses'],
//     ['Jan',  1000,      400],
//     ['Feb',  1170,      460],
//     ['Apr',  660,       1120],
//     ['May',  1030,      540],
//     ['Jun',  1000,      400],
//     ['Jul',  1170,      460],
//     ['Aug',  660,       1120],
//     ['Sep',  1170,      460],
//     ['Oct',  660,       1120],
//     ['Nov',  1030,      540],
//     ['Dec',  1000,      400],
//    // ['2006',  660,       1120],
//     // ['2007',  1030,      540]
//   ]);


//   const options = {
//     title: 'Company Performance',
//     curveType: 'function',
//     legend: { position: 'bottom' }
//   };

//   const chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

//   chart.draw(data, options);
// }
// }
testchart() {
  var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
responsive: false,
  type: 'line',
  data: {
    labels: [0, 1, 3, 4, 5, 6],
    datasets: [{
      label: 'Test1',
      data: [12, 19, 3, 5, 2, 3]
    },{
      label: 'Test2',
      data: [14, 16, 4, 3, 1, 2]
    }
    ]
  },
   options: {
   pan: {
		enabled: true,
		mode: 'x',
	},
    zoom: {
     drag: true,
     enabled: true,
     mode: 'xy'
    }
  }
});
}
checkLogin()
  {
    this.googlePlus.trySilentLogin({})
   .then(res => {
      console.log(res);
      }
  )
        
  .catch(err => console.error(err));
  }
 
  async GetLedger(){
    this.getDateDiff1();
    this.syncService.getAllClientLedger().then(async data=>{
      ;
      this.totalCredit=0;
      this.totalDebit=0;
      this.totalCredit1=0;
      this.totalDebit1=0;
      this.ledger = data;
      for ( let i=0; i < this.ledger.length; i++) {
          this.id =this.ledger[i].InvoiceID
          this.IsCredit=this.ledger[i].IsCredit;
          this.Amount=this.ledger[i].Amount;
            console.log(this.getit);
          for(let j=0;j<this.getit.length;j++) {
              if(this.id==this.getit[j].Iid ||this.ledger[i].CustomerID==this.getit[j].Cid){
                this.ddate=this.getit[j].DueDate;
                this.getStartDate();
                if(this.diff<=15&&this.diff>=0)
                {
                  if (this.IsCredit === 0) {
                    this.totalDebit = this.totalDebit + this.Amount;
                  } else {
                    this.totalCredit = this.totalCredit + this.Amount;
                  }
                }
                else if(this.diff<0&&this.diff>=-15){
                  if (this.IsCredit === 0) {
                    this.totalDebit1 = this.totalDebit1 + this.Amount;
                  } else {
                    this.totalCredit1 = this.totalCredit1 + this.Amount;
                  }
                }

              }
            }
          
           
        }
      console.log(this.totalDebit);
      console.log(this.totalDebit1);

    });
  }
  async getDateDiff1(){
    this.syncService.getAllInvoices().then(async data=>{
      this.getit=data;
      
    });
  }



  async getPO(){
    this.syncService.getAllPOs().then(async data=>{
      this.getpo=data;

    });
  }
   async getDateDiff(){
    this.syncService.getAllInvoices1(this.id).then(async data=>{
      this.getit=data;
      this.ddate=this.getit[0].DueDate;
      this.getStartDate();
      
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
    this.diff=Math.floor(( Date.parse(this.ddate) - Date.parse(this.dates) ) / 86400000);
    console.log(this.diff);
  }
  getVendorOuts(){
    this.syncService.getAllVendorLedger().then((data) => {
      debugger
      this.totalDebit2=0;
      this.totalCredit2=0;
      this.POS = data;
      for ( let i=0; i < this.POS.length; i++) {
         if (this.POS[i].IsCredit === 0) {
           this.totalDebit2 = this.totalDebit2 + this.POS[i].Amount;
         } else {
           this.totalCredit2 = this.totalCredit2 + this.POS[i].Amount;
         }
      }
      debugger
    });
  }
// shareWhatsapp(){
//   this.socialSharing.shareViaWhatsApp(this.text, this.image, this.url).then((res) => {
//     // Success
//   }).catch((e) => {
//     // Error!
//   });
// }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
         labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        // labels: this.invoiceDates,
        datasets: [{
          label: 'Invoices',
          data: ['2.5', '3.8', '5', '6.9', '6.9', '7.5', '10', '17'],
          //data: this.invoiceAmounts,
          backgroundColor: 'rgb(255, 0, 9)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(255, 0, 9)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            // ticks: {
            //   beginAtZero: true
            // }
            ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                  const a = 'PKR ';
                  return 'PKR ' + value;
              }
          }
          }]
        },
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'x'
            },
            zoom: {
              enabled: true,
              mode: 'x'
            }
          }
        }
      }
    });
  }
  createLineChart() {
    // tslint:disable-next-line: no-unused-expression
    this.currency;
    this.linesChart = new Chart(document.getElementById("line-chart"), {
      type: 'line',
      data: {
        // labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
        labels: this.Dates,
        datasets: [{ 
            // data: [86,114,106,106,107,111,133,221,783,2478],
            data: this.invoiceAmounts,
            label: "Invoices",
            borderColor: "#FF0000",
            fill: false
          }, { 
            // data: [282,350,411,502,635,809,947,1402,3700,5267],
            data: this.invoicePayments,
            label: "Payments",
            borderColor: "#00B300",
            fill: false
          },  { 
            // data: [282,350,411,502,635,809,947,1402,3700,5267],
            data: this.expenses,
            label: "Expenses",
            borderColor: "#D3D3D3	",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Recent Transactions'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              callback: function(value, index, values) {
                return '' + value;
            }
            }
          }]
        },
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'x'
            },
            zoom: {
              enabled: true,
              mode: 'x'
            }
          }
        }
      }
    });
  }
  getCurrency() {
    return this.currency;
  }

  // async getInvoiceData() {
  //   
  //   let loading = await this.loadingCtrl.create();
  //   await loading.present();

  //   this.syncService.getAllInvoicesTable().then((data) => {
  //     //this.invoiceData = data;
  //     
  //     for (let i =0 ;i < data.length; i++) {
  //       this.invoiceDates.push(data[i].CreateDate);
  //       this.invoiceAmounts.push(data[i].Total);
  //     }
  //     this.createBarChart();
      
  //     this.invoiceAmounts;
  //     this.invoiceDates;
  //     
  //   });
  //   this.syncService.getAllInvoicePaymentsTable().then((data) => {
  //     //this.invoiceData = data;
  //     
  //     for (let i =0 ;i < data.length; i++) {
  //       this.invoicesPaymentDates.push(data[i].Date);
  //       this.invoicesPaymentAmount.push(data[i].Amount);
  //     }
  //     this.createBarChart();
  //     loading.dismiss();
  //     this.invoicesPaymentDates;
  //     this.invoicesPaymentAmount;
  //     
  //   });
  // }
  async getInvoicesDataFromLedger() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.syncService.getAllInvoicesLedgerTable().then((data) => {
      //this.invoiceData = data;
      
      for (let i =0 ;i < data.length; i++) {
        if (data[i].IsCredit === 1) {
          const z = new Date(parseInt(data[i].Date)*1000).toString();
          this.Dates.push(this.datePipe.transform(z, 'dd MMM yyyy'));
          this.invoiceAmounts.push(0);
          this.invoicePayments.push(data[i].Amount.toString());
          this.expenses.push(0);
        }
        if(data[i].IsCredit === 2) {
          
         // this.Dates.push(data[i].Date);
          const z = new Date(parseInt(data[i].Date)*1000).toString();
          this.Dates.push(this.datePipe.transform(z, 'dd MMM yyyy'));
          this.invoiceAmounts.push(0);
          this.invoicePayments.push(0);
          this.expenses.push( data[i].Amount.toString());
        }
        if (data[i].IsCredit === 0) {
          
          const z = new Date(parseInt(data[i].Date)*1000).toString();
          this.Dates.push(this.datePipe.transform(z, 'dd MMM yyyy'));
          this.invoiceAmounts.push( data[i].Amount.toString());
          this.invoicePayments.push(0);
          this.expenses.push(0);
        }

      }

     // this.createBarChart();
      this.createLineChart();
      loading.dismiss();
      this.invoiceAmounts;
     // this.invoiceDates;
    });
    this.syncService.getExpensesDashboard().then((data1) => {
      data1;
      
    });
  }
  getClientsFiguers() {
    this.syncService.getDashbardFiguers().then((data) => {
      this.clientOverdue = data[0].Overdue;
      this.clientOutstanding = data[0].Outstanding;

      debugger
      // if (typeof data[0].Overdue !== undefined) {
      //   this.clientOverdue = data[0].Overdue;
      // }
      // if (typeof data[0].Outstanding !== undefined) {
      //   this.clientOutstanding = data[0].Outstanding;
      // }
    });
    this.syncService.getAllInvoices().then((data)=>{
      console.log(data);
    })
  }
  async toast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
  });
  toast.present();
  }
  btn() {
   this.nav.navigateRoot('add-item');
  }
  publish() {
    this.events.publish('check', 'saad2', '');

  }
  btn1() {
    this.events.unsubscribe('check');
  }

}
