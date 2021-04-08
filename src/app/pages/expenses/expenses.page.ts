import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform, LoadingController, AlertController, Events } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { DatabaseService} from 'src/app/services/database.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SyncService } from 'src/app/services/sync.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage implements OnInit {

  expenses = [];
  tempExpenses = [];
  s = 0;
  currency = '';
  subscription;
  showAdd = 0;
  showDetails = 0;
  constructor(
    private router: Router,
    private nativeHttp: HTTP,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private databaseprovider: DatabaseService,
    private callnumber: CallNumber,
    private syncService: SyncService,
    private alrtCtrl: AlertController,
    private storage: Storage,
    private route: ActivatedRoute,
    private events: Events

  ) {
    this.storage.get('app').then((val1) => {
      if (val1 === 'invoice') {
        this.storage.get('ID').then((val) => {
          this.syncService.getbValue(val,'Expense Add').then((data) => {
            this.showAdd = data[0].bValue;
          });
          this.syncService.getbValue(val,'Expense Details').then((data) => {
            this.showDetails = data[0].bValue;
          });
        });
      } else {
        this.showAdd = 1;
        this.showDetails = 1;
      }
    });
    events.subscribe('refreshExpenses', (user, time) => {
      storage.get('currency').then((val) => {
        if (val !== null) {
            this.currency = val.toString();
        }
      });
      this.getAllExpenses();
    });
    //    this.router.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe((route: NavigationStart) => {
    //     console.log('Route: '+route.url);
    //     const a = this.databaseprovider.getupdateexpenses();
    //     ;
    //     storage.get('currency').then((val) => {
    //       if (val !== null) {
    //           this.currency = val.toString();
    //           
    //       }
    //     });
    //     if(route.url === '/menu/expenses' && a === 1) {
    //       this.getAllExpenses();
    //     }
    // });
    if(this.expenses.length === 0) {
      ;
      // this.getDataNativeHttp();
      storage.get('currency').then((val) => {
        if (val !== null) {
            this.currency = val.toString();
            
        }
      });
      this.getAllExpenses();
    }
   // this.sortClients();
   // this.initializeItems();
  }
  ionViewDidEnter() {

      this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route: NavigationStart) => {
        console.log('Route: '+route.url);
        const a = this.databaseprovider.getupdateexpenses();
        ;
        this.storage.get('currency').then((val) => {
          if (val !== null) {
              this.currency = val.toString();
              
          }
        });
        if(route.url === '/menu/expenses' && a === 1) {
          this.getAllExpenses();
        }
    });
   
  }
  ionViewWillLeave() {
     this.subscription.unsubscribe();
    // this.databaseprovider.setupdateinvoice(1);
  }
  ngOnInit() {
  }
  addIcon() {
    this.router.navigate(['new-expense']);
  }
  edit(item) {

  }
  delete(item) {

  }
  itemClicked(item) {
    if (this.showDetails === 1) {
      this.databaseprovider.setLogsnav(1);
      
      const navigationExtras: NavigationExtras = {
        state: {
          expense: item,
          url: '/menu/expenses'
        }
      };
      this.router.navigate(['editexpense'], navigationExtras);
  
    }
    
  }
  initializeItems() {
    console.log('ini');
    this.tempExpenses = this.expenses;
  }
  geItems(searchbar) {
      this.initializeItems();
      const q = searchbar.srcElement.value;
      if (!q) {
        return;
      }
      this.tempExpenses = this.tempExpenses.filter((v) => {
        if (v.Name && q) {
          if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
           console.log("true")
            return true;
          }
          console.log("false")
          return false;
        }
      });
  
  }
  sortClients() {

    ;
    this.expenses = this.expenses.sort((a, b) => {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
      return 0;
    });
  }
  async getAllExpenses() {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    this.syncService.getAllExpenses().then((data) => {
      
      this.expenses = data;
      // this.sortClients();
      this.initializeItems();
      loading.dismiss();
    });
  }
  

}
