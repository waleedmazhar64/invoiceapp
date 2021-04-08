import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { from } from 'rxjs';
import { HttpClientModule} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform, LoadingController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { DatabaseService} from 'src/app/services/database.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SyncService } from 'src/app/services/sync.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.page.html',
  styleUrls: ['./vendors.page.scss'],
})
export class VendorsPage implements OnInit {

  vendors = [];
  activeVendors = [];
  inactiveVendors = [];
  sorted = [];
  tempVendors = [];
  tempActiveVendors = [];
  tempInactiveVendors = [];
  active = 'solid';
  inactive = 'outline';
  showSpinner = true;
  selected = 'act';
  currency = '';
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
    private storage: Storage
  ) {
    this.storage.get('app').then((val1) => {
      if (val1 === 'invoice') {
        this.storage.get('ID').then((val) => {
          this.syncService.getbValue(val,'Vendor Add').then((data) => {
            this.showAdd = data[0].bValue;
          });
          this.syncService.getbValue(val,'Vendor Details').then((data) => {
            this.showDetails = data[0].bValue;
          });
        });
      } else {
        this.showAdd = 1;
        this.showDetails = 1;
      }
    });
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe((route: NavigationStart) => {
    //     console.log('Route: '+route.url);
    //     const a = this.databaseprovider.getupdatevendors();
    //     ;
    //     if(route.url == '/menu/vendors' && a === 1) {
    //     //this.getDataNativeHttp();
    //     storage.get('currency').then((val) => {
    //       if (val !== null) {
    //           this.currency = val.toString();
    //           
    //       }
    //     });
    //       this.getAllVendorsLocaldb();
    //     
    //  // this.getDataNativeHttp();

    //     }
    // });
    if(this.vendors.length === 0) {
      ;
      // this.getDataNativeHttp();
        //this.getDataNativeHttp();
      storage.get('currency').then((val) => {
          if (val !== null) {
              this.currency = val.toString();
              
          }
        });
       this.getAllVendorsLocaldb();
    }
   }
   ionViewDidEnter() {
      
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route: NavigationStart) => {
        console.log('Route: '+route.url);
        const a = this.databaseprovider.getupdatevendors();
        ;
        if (route.url === '/menu/vendors' && a === 1) {
        this.storage.get('currency').then((val) => {
          if (val !== null) {
              this.currency = val.toString();
              
          }
        });
          this.getAllVendorsLocaldb();
        

        }
    });
   }
   ionViewWillLeave() {
    this.subscription.unsubscribe();
   // this.databaseprovider.setupdateinvoice(1);
 }

  ngOnInit() {
  }
  doRefresh(refresher) {
 
    this.getAllVendorsLocaldb();
    refresher.target.complete();
  }
  itemClicked(item,event) {
    if(this.showDetails) {
      this.databaseprovider.setLogsnav(1);
      event.stopPropagation();
      //this.syncService.getVendor(item.ID);
      this.syncService.getVendor(item.ID);
  
    }
    
  
   // this.clients = [];
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     editvendor: item
    //   }
    // };
    
    // this.router.navigate(['vendor-edit'], navigationExtras);
  }

  back() {
    this.router.navigate(['add-client']);

  }
  addVendor() {
    this.router.navigate(['add']);

  }
  sortVendors() {

    ;
    this.vendors = this.vendors.sort((a, b) => {
      if (a.Name < b.Name) {
        return -1;
      }
      if (a.Name > b.Name) {
        return 1;
      }
      return 0;
    });
  }
  separateLetter(client,clientIndex,clients) {
    if (clientIndex === 0) {
      return client.Name[0].toUpperCase();
    }

    let first_prev = clients[clientIndex - 1].Name[0];
    let first_current = client.Name[0];

    if (first_prev !== first_current) {
      return first_current.toUpperCase();
    }
    return null;

  }
  initializeactiveItems(){
    this.tempActiveVendors = this.activeVendors;
  }
  initializeinactiveItems(){
    this.tempInactiveVendors = this.inactiveVendors;
  }
  initializeItems(){
    this.tempVendors = this.vendors;
  }
  geItems(searchbar) {
    if (this.selected === 'act') {
      this.initializeactiveItems();
      const q = searchbar.srcElement.value;
      if (!q) {
        return;
      }
      this.tempActiveVendors = this.tempActiveVendors.filter((v) => {
        if (v.Name && q) {
          if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
  
    } 
    if (this.selected === 'inact') {
      this.initializeinactiveItems();
      const q = searchbar.srcElement.value;
      if (!q) {
        return;
      }
      this.tempInactiveVendors = this.tempInactiveVendors.filter((v) => {
        if (v.Name && q) {
          if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    }
  

  }
  async getDataNativeHttp() {
    let loading = await this.loadingCtrl.create();
    await loading.present();

    const url = this.databaseprovider.getURL();
    this.nativeHttp.setDataSerializer("json");

    let nativeCall = this.nativeHttp.post(url , 
      {
        'Name': 'getAllVendors',
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
      this.vendors = g.vendors;
      console.log(this.vendors[0]);
      this.sortVendors();
      this.inactiveVendors = [];
      this.activeVendors = [];
      for(let i = 0; i < this.vendors.length; i++) {
        if(this.vendors[i].bActive === '0') {
          this.inactiveVendors.push(this.vendors[i]);
        } else {
          this.activeVendors.push(this.vendors[i]);
        }
      }
    //  this.selectActive();
     // ;
     
     // this.initializeItems();
     this.initializeactiveItems();
     this.initializeinactiveItems();
      this.databaseprovider.setupdatevendors(0);
    },err =>{
      console.log('JS call error',err);
    });

  }
  call(item) {
    const number =item.billing.phone;
    this.callnumber.callNumber(number, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  del(item) {
    
  }
  selectActive() {
    this.active = 'solid';
    this.inactive = 'outline';
    this.selected = 'act';
  }
  selectInActive() {
    this.active = 'outline';
    this.inactive = 'solid';
    this.selected = 'inact';
  }
  addPayment(event,item) {
    
    event.stopPropagation();
    const navigationExtras: NavigationExtras = {
      state: {
        Cid: item.ID,
        Name: item.Name,
        Sync: item.Sync,
        url: this.router.url,
      }
    };
    this.router.navigate(['payment-info-vendors'], navigationExtras);
    ;
  }
  ledger(event, item) {
    
   // event.stopPropagation();
    const navigationExtras: NavigationExtras = {
     state: {
       client: item
     }
    };
    this.router.navigate(['ledgers-vendors'], navigationExtras);
    ;
 }
 async getAllVendorsLocaldb() {
  let loading = await this.loadingCtrl.create();
  await loading.present();
  this.syncService.getAllVendors().then((data) => {
    
    this.vendors = data;
    this.sortVendors();
    this.inactiveVendors = [];
    this.activeVendors = [];
    for(let i = 0; i < this.vendors.length; i++) {
      if(this.vendors[i].bActive === 0) {
        this.inactiveVendors.push(this.vendors[i]);
      } else {
        this.activeVendors.push(this.vendors[i]);
      }
    }
   // this.initializeItems();
    this.initializeactiveItems();
    this.initializeinactiveItems();
    loading.dismiss();
    this.databaseprovider.setupdatevendors(0);
    
  });
 }

}
