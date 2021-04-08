import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx'
import { HttpClient } from '@angular/common/http';
import { Platform, LoadingController, NavController, Events } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { DatabaseService} from 'src/app/services/database.service';
import { from } from 'rxjs';
import { SyncService } from 'src/app/services/sync.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
})
export class LogsPage implements OnInit {

  page = 0;
  maximumPages = 1;
  refresh = false;
  infiniteScroll: any;
  logs = [];
  sentences = [];
  records = 0;
  totalRecords = 0;
  subscription;

  constructor(
    private router: Router,
    private http: HttpClient,
    private nativeHttp: HTTP,
    private plt: Platform,
    private databaseprovider: DatabaseService,
    private syncService: SyncService,
    private loadingController: LoadingController,
    private platform: Platform,
    private nav: NavController,
    private events: Events

  ) {
    events.subscribe('refreshLogs', (user, time) => {
      this.infiniteScroll.target.disabled = false;
      this.page = 0;
      this.maximumPages = 1;
      this.refresh = false;
      this.logs = [];
      this.sentences = [];
      this.records = 0;
      this.totalRecords = 0;
      this.getAllLogs();
    });
    debugger
    // this.subscription = this.router.events.pipe(
    //   filter(event => event instanceof NavigationStart)
    // ).subscribe((route: NavigationStart) => {

    //   this.page = 0;
    //   this.maximumPages = 1;
    //   this.refresh = false;
    //   this.logs = [];
    //   this.sentences = [];
    //   this.records = 0;
    //   this.totalRecords = 0;
    //   this.getAllLogs();
    //   // alert('page:' + this.page + '\n' +
    //   // 'maximumPages:' + this.maximumPages + '\n' +
    //   // 'refresh:' + this.refresh + '\n' +
    //   // 'logs:' + this.logs + '\n' +
    //   // 'sentences:' + this.sentences + '\n' +
    //   // 'records:' + this.records + '\n' +
    //   // 'totalRecords:' + this.totalRecords + '\n'
    //   // )
    // });
    if (this.logs.length === 0 || this.databaseprovider.getlogs() === 1) {

      this.page = 0;
      this.maximumPages = 1;
      this.refresh = false;
      this.logs = [];
      this.sentences = [];
      this.records = 0;
      this.totalRecords = 0;
      this.getAllLogs();

    }
   }

  ngOnInit() {
  }
  openClient(item) {
   this.databaseprovider.setLogsnav(1);

   debugger
   if (item.tableName === 'clients') {
    this.syncService.getClient(item.tableId, '/menu/logs');
   }
   if (item.tableName === 'items') {
    this.syncService.getItem(item.tableId, '/menu/logs');
  }
   if (item.tableName === 'vendors') {
    this.syncService.getVendor(item.tableId);
  }
   if (item.tableName === 'tblpurchasedorder') {
    this.syncService.getPO(item.tableId);
  }
   if (item.tableName === 'invoices') {
    this.syncService.getInvoice(item.tableId,'/menu/logs');
  }
   if (item.tableName === 'tblledger') {
    this.syncService.getLedger(item.tableId);
  }
   if (item.tableName === 'tblledgervendors') {
    this.syncService.getLedgerVendor(item.tableId);
  }
   if (item.tableName === 'tblexpenses') {
    this.syncService.getExpense(item.tableId);
  }
   if (item.tableName === 'tblUsers') {
    this.syncService.getUser(item.tableId, '/menu/logs');
  }

  }
  
  async getAllLogs() {
    console.log('infinite: ' + this.infiniteScroll);
    let loading = await this.loadingController.create();
    await loading.present();
    this.syncService.getLogsPagination(this.records).then((data) => {
      debugger
      loading.dismiss();
      this.page++;
      this.logs = data;
      this.totalRecords = data[0].Total;
      this.maximumPages = 1;
      this.records = this.records + 10;
      // alert('total:' + this.totalRecords + '\n current: ' + this.records);
    });
  }
  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    debugger
    // alert('total:' + this.totalRecords + '\n current: ' + this.records);
    if (this.totalRecords <= this.records) {
      infiniteScroll.target.disabled = true;


    } else {
      debugger
      this.page++;
      this.syncService.getLogsPagination(this.records).then((data) => {
        this.logs = this.logs.concat(data);
        infiniteScroll.target.complete();
        this.records = this.records + 10;

      });
    }
  }
  ionViewDidEnter() {
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((route: NavigationStart) => {

      this.page = 0;
      this.maximumPages = 1;
      this.refresh = false;
      this.logs = [];
      this.sentences = [];
      this.records = 0;
      this.totalRecords = 0;
      this.getAllLogs();
      // alert('page:' + this.page + '\n' +
      // 'maximumPages:' + this.maximumPages + '\n' +
      // 'refresh:' + this.refresh + '\n' +
      // 'logs:' + this.logs + '\n' +
      // 'sentences:' + this.sentences + '\n' +
      // 'records:' + this.records + '\n' +
      // 'totalRecords:' + this.totalRecords + '\n'
      // )
    });
  }
  ionViewWillLeave() {
    this.subscription.unsubscribe();
    this.databaseprovider.setlogs(1);

  }


}
