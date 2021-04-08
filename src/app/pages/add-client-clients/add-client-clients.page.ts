import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, NavigationStart } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform, LoadingController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { DatabaseService} from 'src/app/services/database.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { from } from 'rxjs';
import { SyncService } from 'src/app/services/sync.service';




@Component({
  selector: 'app-add-client-clients',
  templateUrl: './add-client-clients.page.html',
  styleUrls: ['./add-client-clients.page.scss'],
})
export class AddClientClientsPage implements OnInit {
  credit = '';
  debit = '';
  lastPayment = '0';
  clients = [];
  sorted = [];
  tempClients = [];
  activeClients = [];
  inactiveClients = [];
  tempActiveClients = [];
  tempInactiveClients = [];
  active = 'primary';
  inactive = 'dark';
  showSpinner = true;
  selected = 'act';
  url;
  ID = '';
  Name = '';
  info = '';
  constructor(
    private router: Router,
    private nativeHttp: HTTP,
    private plt: Platform,
    private loadingCtrl: LoadingController,
    private databaseprovider: DatabaseService,
    private callnumber: CallNumber,
    private syncService: SyncService
  ) { 
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route: NavigationStart) => {
        console.log('Route: '+ route.url);
        const a = this.databaseprovider.getupdateclients();
        debugger;
        if (route.url == 'add-client-clients' && a === 1) {
          this.getClientslocaldb();
        }
        //this.getDataNativeHttp();
    });
    if(this.clients.length === 0) {
      debugger;
      // this.getDataNativeHttp();
      this.getClientslocaldb();
    }
    if (this.router.getCurrentNavigation().extras.state) {

      this.url = this.router.getCurrentNavigation().extras.state.url;
      if (this.router.getCurrentNavigation().extras.state) {
        if ( typeof this.router.getCurrentNavigation().extras.state.ID !== 'undefined') {
          debugger;
          this.ID = this.router.getCurrentNavigation().extras.state.ID;
          this.Name =  this.router.getCurrentNavigation().extras.state.Name;
          this.info =  this.router.getCurrentNavigation().extras.state.info;

        }
  
      }
    }
   // this.sortClients();
   // this.initializeItems();
  }

  ngOnInit() {
  
  }
  initializeactiveItems(){
    this.tempActiveClients = this.activeClients;
  }
  initializeinactiveItems(){
    this.tempInactiveClients = this.inactiveClients;
  }
  itemClicked(item) {

    debugger;
    // const navigationExtras: NavigationExtras = {
    //   state: {
    //     name: item.name,
    //     email: item.email,
    //     add1: item.add1,
    //     add2: item.add2,
    //     add3: item.add3,
    //     shippingTo: item.shippingTo,
    //     sAdd1: item.sAdd1,
    //     sAdd2: item.sAdd2,
    //     sAdd3: item.sAdd3
    //   }
    // };
   // this.getCustmerBalance(item);
    const navigationExtras: NavigationExtras = {
      state: {
       ID: item.Cid,
       Name: item.Fname + ' ' + item.Lname,
       info: item.Shop + ',' + item.BillingAddress + ' ' + item.City,
       Balance: item.Balance,
       Sync: item.Sync
      }
    };
    // this.router.navigate(['addinvoice'], navigationExtras);
    this.router.navigate([this.url], navigationExtras);

  }
  back() {
    this.router.navigate([this.url]);

  }
  sortClients() {

    debugger;
    this.clients = this.clients.sort((a, b) => {
      if (a.Fname < b.Fname) {
        return -1;
      }
      if (a.Fname > b.Fname) {
        return 1;
      }
      return 0;
    });
  }
  separateLetter(client,clientIndex,clients) {
    if (clientIndex === 0) {
      return client.Fname[0].toUpperCase();
    }

    let first_prev = clients[clientIndex - 1].Fname[0];
    let first_current = client.Fname[0];

    if (first_prev !== first_current) {
      return first_current.toUpperCase();
    }
    return null;

  }
  initializeItems(){
    this.tempClients = this.clients;
  }
  geItems(searchbar) {
    if (this.selected === 'act') {
      this.initializeactiveItems();
      const q = searchbar.srcElement.value;
      if (!q) {
        return;
      }
      this.tempActiveClients = this.tempActiveClients.filter((v) => {
        if (v.Fname && q) {
          if (v.Fname.toLowerCase().indexOf(q.toLowerCase()) > -1) {
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
      this.tempInactiveClients = this.tempInactiveClients.filter((v) => {
        if (v.Fname && q) {
          if (v.Fname.toLowerCase().indexOf(q.toLowerCase()) > -1) {
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

    let nativeCall = this.nativeHttp.get('https://riz.livauto.com/wp-json/wc/v3/customers',{},{
      'Content-Type':'application/json',
      'Authorization': 'Basic Y2tfOWNlMGIyZmZmYjZlNzJlMTM3NGY3MTgzOTQ0NDBhMDkwNmNiOWVkZDpjc183MmIxMDQyMWExM2I4MmQzN2M0ODE0MDI5YmRmN2E0NTIyYzBjMTI4'
    });

    from(nativeCall).pipe(
      finalize(() => loading.dismiss)
    )
    .subscribe(data => {
      loading.dismiss();
      console.log('Native data:',data);
      this.clients = JSON.parse(data.data);
      console.log(this.clients[0]);
      this.sortClients();
      this.inactiveClients = [];
      this.activeClients = [];
      for(let i = 0; i < this.clients.length; i++) {
        if(this.clients[i].billing.address_2 === 'Inactive') {
          this.inactiveClients.push(this.clients[i]);
        } else {
          this.activeClients.push(this.clients[i]);
        }
      }
    //  this.selectActive();
     // debugger;
     
     // this.initializeItems();
     this.initializeactiveItems();
     this.initializeinactiveItems();
      this.databaseprovider.setupdateclients(0);
    },err =>{
      console.log('JS call error',err);
    });

  }
  async getCustmerBalance(item) {
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const url = this.databaseprovider.getURL();

   this.nativeHttp.setDataSerializer("json");
   let nativeCall = this.nativeHttp.post(url + '/rizAdnanApp/payments.php',
   {
    "CustomerID": item.id
   }
   ,{
     'Content-Type':'application/json',
     'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
   });
  
    from(nativeCall).pipe(
     finalize(() => loading.dismiss)
   )
   .subscribe(data => {
     loading.dismiss();
     console.log('Native data:', data);
     const g = JSON.parse(data.data);
     if (g.TotalDebit == null) {
       g.TotalDebit = 0;
     }
     if (g.TotalCredit == null) {
      g.TotalCredit = 0;
    }
    if (g.Amount == null) {
      g.Amount = 0;
    }
     this.credit = g.TotalCredit;
     this.debit = g.TotalDebit;
     this.lastPayment = g.Amount;

     debugger;
     const navigationExtras: NavigationExtras = {
      state: {
       client: item,
       credit: this.credit,
       debit: this.debit,
       lastpayment:  this.lastPayment
      }
    };
    debugger
    this.router.navigate([this.url], navigationExtras);
     
     // comment
    // this.databaseservice.setupdateclients(1);
    // this.router.navigate(['/menu/clients']);
    // this.initializeItems();
   },err =>{
     loading.dismiss();
   //  this.databaseservice.setupdateclients(1);
   //  this.router.navigate(['/menu/clients']);
     console.log('JS call error',err);
     const error = JSON.parse(err.error);
     alert(error.message);
     console.log('Native data:',JSON.parse(error));
   });
  }
  getClientslocaldb() {
    this.syncService.getAllClients().then((data) => {
      debugger
      this.clients = data;
      this.sortClients();
      this.inactiveClients = [];
      this.activeClients = [];
      for(let i = 0; i < this.clients.length; i++) {
        if(this.clients[i].Active === 0) {
          this.inactiveClients.push(this.clients[i]);
        } else {
          this.activeClients.push(this.clients[i]);
        }
      }
     // this.initializeItems();
      this.initializeactiveItems();
      this.initializeinactiveItems();
      this.databaseprovider.setupdateclients(0);
      debugger
    });
  }

}
