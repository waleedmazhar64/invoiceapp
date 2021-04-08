import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, NavigationStart } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform, LoadingController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { DatabaseService} from 'src/app/services/database.service';
import { from } from 'rxjs';
import { SyncService } from 'src/app/services/sync.service';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  items = [];
  tempItems = [];
  tempActiveItems = [];
  tempInactiveItems = [];
  inactiveItems = [];
  activeItems = [];
  active = 'solid';
  inactive = 'outline';
  showSpinner = true;
  selected = 'act';
  currency = '';
  subscription;
  sortActive = 0;
  sortColor = 'outline';
  showAdd = 0;
  showDetails = 0;
  constructor(
    private router: Router,
    private http: HttpClient,
    private nativeHttp: HTTP,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private databaseprovider: DatabaseService,
    private syncService: SyncService,
    private storage: Storage
  ) {
    this.storage.get('app').then((val1) => {
      if (val1 === 'invoice') {
        this.storage.get('ID').then((val) => {
          this.syncService.getbValue(val,'Item Add').then((data) => {
            this.showAdd = data[0].bValue;
          });
          this.syncService.getbValue(val,'Item Details').then((data) => {
            this.showDetails = data[0].bValue;
          });
        });
      } else {
        this.showAdd = 1;
        this.showDetails = 1;
      }
    });
    
    storage.get('currency').then((val) => {
      if (val !== null) {
          this.currency = val.toString();
          
      }
    });
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe((route: NavigationStart) => {
    //     console.log('Route: '+route.url);
    //     const a = this.databaseprovider.getupdateitems();
    //     ;
    //     if(route.url == '/menu/items' && a === 1) {
    //       this.getAllItemsLocaldb();
    //       storage.get('currency').then((val) => {
    //         if (val !== null) {
    //             this.currency = val.toString();
    //             
    //         }
    //       });
    //       
    //    // this.getDataNativeHttp();

    //     }
    // });
    if(this.items.length === 0) {
      ;
      storage.get('currency').then((val) => {
        if (val !== null) {
            this.currency = val.toString();
            
        }
      });
     this.getAllItemsLocaldb();
    }
   // this.sortItems();
   // this.initializeItems();
   }
   ionViewDidEnter() {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route: NavigationStart) => {
        console.log('Route: '+route.url);
        const a = this.databaseprovider.getupdateitems();
        ;
        if(route.url == '/menu/items' && a === 1) {
          this.getAllItemsLocaldb();
          this.storage.get('currency').then((val) => {
            if (val !== null) {
                this.currency = val.toString();
                
            }
          });
          

        }
    });
   }
   ionViewWillLeave() {
    this.subscription.unsubscribe();
   // this.databaseprovider.setupdateinvoice(1);
 }
  ngOnInit() {
  //  this.sortItems();
  //  this.initializeItems();
  }
  sortItems() {
    

    this.items = this.items.sort((a, b) => {
      if (a.Description < b.Description) {
        return -1;
      }
      if (a.Description > b.Description) {
        return 1;
      }
      return 0;
    });
  }
  separateLetter(item,itemIndex,items) {
    if (itemIndex === 0) {
      return item.Description[0].toUpperCase();
    }

    let first_prev = items[itemIndex - 1].Description[0];
    let first_current = item.Description[0];

    if (first_prev !== first_current) {
      return first_current.toUpperCase();
    }
    return null;

  }
  initializeItems(){
    this.tempItems = this.items;
  }
  initializeActiveItems(){
    this.tempActiveItems = this.activeItems;
  }
  initializeInactiveItems(){
    this.tempInactiveItems = this.inactiveItems;
  }
  geItems(searchbar) {
    if (this.selected === 'act') {
      this.initializeActiveItems();
      const q = searchbar.srcElement.value;
      if (!q) {
        return;
      }
      this.tempActiveItems = this.tempActiveItems.filter((v) => {
        if (v.Description && q) {
          if (v.Description.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
  
    } 
    if (this.selected === 'inact') {
      this.initializeInactiveItems();
      const q = searchbar.srcElement.value;
      if (!q) {
        return;
      }
      this.tempInactiveItems = this.tempInactiveItems.filter((v) => {
        if (v.Description && q) {
          if (v.Description.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    }
    //  this.initializeItems();
    //  // set q to the value of the searchbar
    //  const q = searchbar.srcElement.value;

    //  //;

    //  // if the value is an empty string don't filter the items
    //  if (!q) {
    //    return;
    //  }
 
    //  this.tempItems = this.tempItems.filter((v) => {
    //    if (v.name && q) {
    //      if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
    //        ;
    //        return true;
    //      }
    //      ;
    //      return false;
    //    }
    //  });
 
  //   console.log(q, this.items.length);

  }
  doRefresh(refresher) {
 
    this.getAllItemsLocaldb();
    refresher.target.complete();
  }
  addItem() {
    this.router.navigate(['menu-additem']);
  }
  itemClicked(item) {
    if (this.showDetails === 1) {
      this.databaseprovider.setLogsnav(1);

      this.syncService.getItem(item.itemid, '/menu/items');
      
    }
   
    // this.syncService.getItem(item.itemid).then((data) => {
    //   item = data;
    //   const navigationExtras: NavigationExtras = {
    //     state: {
    //       edititem: item
    //     }
    //   };
    //   this.router.navigate(['menu-itemdetails'], navigationExtras);
    // });
    // ;
  
  }
  async getDataNativeHttp() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const url = this.databaseprovider.getURL();

    this.nativeHttp.setDataSerializer("json");

    let nativeCall = this.nativeHttp.post(url , 
      {
        'Name': 'getAllItem',
        "AccountId": '113008225657937776461'
      },
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
      this.items = g.items;
     // console.log(this.clients[0]);
     // this.sortItems();
      this.inactiveItems = [];
      this.activeItems = [];
      for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].Active === '0') {
          this.inactiveItems.push(this.items[i]);
        } else {
          this.activeItems.push(this.items[i]);
        }
      }
     // this.initializeItems();
      this.initializeActiveItems();
      this.initializeInactiveItems();
      this.databaseprovider.setupdateitems(0);
      ;
    },err =>{
      console.log('JS call error',err);
    });

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
  async getAllItemsLocaldb() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.syncService.getAllItems().then((data) => {
      
      this.items = data;
     // this.sortItems();
      this.inactiveItems = [];
      this.activeItems = [];
      for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].Active === 0 || this.items[i].Instock === 0) {
          this.inactiveItems.push(this.items[i]);
        }  
        if(this.items[i].Active === 1 && this.items[i].Instock > 0){
          this.activeItems.push(this.items[i]);
        }
      }
     // this.initializeItems();
      this.initializeActiveItems();
      this.initializeInactiveItems();
      loading.dismiss();
      this.databaseprovider.setupdateitems(0);
      
    });
  }

  async sorting() {
    if (this.sortActive === 0) {
      let loading = await this.loadingCtrl.create();
      await loading.present();
      this.sortItems();
      this.inactiveItems = [];
      this.activeItems = [];
      for(let i = 0; i < this.items.length; i++) {
          if (this.items[i].Active === 0 || this.items[i].Instock === 0) {
            this.inactiveItems.push(this.items[i]);
          }
          if (this.items[i].Active === 1 && this.items[i].Instock > 0) {
            this.activeItems.push(this.items[i]);
          }
        }
       // this.initializeItems();
      this.initializeActiveItems();
      this.initializeInactiveItems();
      this.sortActive = 1;
      this.sortColor = 'solid';
      loading.dismiss();
    } else {
      this.Unsorting();
    }
  }
  async Unsorting() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    // this.sortItems();
    this.items = [];
    this.syncService.getAllItems().then((data) => {
    this.items = data;
    this.inactiveItems = [];
    this.activeItems = [];
    for(let i = 0; i < this.items.length; i++) {
        if (this.items[i].Active === 0 || this.items[i].Instock === 0) {
          this.inactiveItems.push(this.items[i]);
        }
        if (this.items[i].Active === 1 && this.items[i].Instock > 0) {
          this.activeItems.push(this.items[i]);
        }
      }
     // this.initializeItems();
    this.initializeActiveItems();
    this.initializeInactiveItems();
    this.sortActive = 0;
    this.sortColor = 'outline';
    loading.dismiss();
    });
  }
}
