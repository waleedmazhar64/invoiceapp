(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logs-logs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/logs/logs.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/logs/logs.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Logs</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n<!-- <ion-label>hi there <a (click)=\"openClient()\">Saad</a>  </ion-label> -->\n<ion-list *ngFor=\"let item of logs,index as pos\">\n  <ion-item>\n    <p style=\"font-size: medium;color: black;\">{{item.actionType}} <a (click)=\"openClient(item)\">{{item.name}}</a><br /><span style=\"color: grey;font-size: small;\">{{item.dated}}</span></p>\n  </ion-item>\n</ion-list>\n<ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"doInfinite($event)\">\n  <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"loading more...\"></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/logs/logs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/logs/logs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LogsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsPageRoutingModule", function() { return LogsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _logs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logs.page */ "./src/app/pages/logs/logs.page.ts");




const routes = [
    {
        path: '',
        component: _logs_page__WEBPACK_IMPORTED_MODULE_3__["LogsPage"]
    }
];
let LogsPageRoutingModule = class LogsPageRoutingModule {
};
LogsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/logs/logs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/logs/logs.module.ts ***!
  \*******************************************/
/*! exports provided: LogsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsPageModule", function() { return LogsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _logs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logs-routing.module */ "./src/app/pages/logs/logs-routing.module.ts");
/* harmony import */ var _logs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logs.page */ "./src/app/pages/logs/logs.page.ts");








let LogsPageModule = class LogsPageModule {
};
LogsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _logs_routing_module__WEBPACK_IMPORTED_MODULE_6__["LogsPageRoutingModule"]
        ],
        providers: [
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"]
        ],
        declarations: [_logs_page__WEBPACK_IMPORTED_MODULE_7__["LogsPage"]]
    })
], LogsPageModule);



/***/ }),

/***/ "./src/app/pages/logs/logs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/logs/logs.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ3MvbG9ncy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/logs/logs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/logs/logs.page.ts ***!
  \*****************************************/
/*! exports provided: LogsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsPage", function() { return LogsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let LogsPage = class LogsPage {
    constructor(router, http, nativeHttp, plt, databaseprovider, syncService, loadingController, platform, nav, events) {
        this.router = router;
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.plt = plt;
        this.databaseprovider = databaseprovider;
        this.syncService = syncService;
        this.loadingController = loadingController;
        this.platform = platform;
        this.nav = nav;
        this.events = events;
        this.page = 0;
        this.maximumPages = 1;
        this.refresh = false;
        this.logs = [];
        this.sentences = [];
        this.records = 0;
        this.totalRecords = 0;
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
        debugger;
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
        debugger;
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
            this.syncService.getInvoice(item.tableId, '/menu/logs');
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
    getAllLogs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('infinite: ' + this.infiniteScroll);
            let loading = yield this.loadingController.create();
            yield loading.present();
            this.syncService.getLogsPagination(this.records).then((data) => {
                debugger;
                loading.dismiss();
                this.page++;
                this.logs = data;
                this.totalRecords = data[0].Total;
                this.maximumPages = 1;
                this.records = this.records + 10;
                // alert('total:' + this.totalRecords + '\n current: ' + this.records);
            });
        });
    }
    doInfinite(infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        debugger;
        // alert('total:' + this.totalRecords + '\n current: ' + this.records);
        if (this.totalRecords <= this.records) {
            infiniteScroll.target.disabled = true;
        }
        else {
            debugger;
            this.page++;
            this.syncService.getLogsPagination(this.records).then((data) => {
                this.logs = this.logs.concat(data);
                infiniteScroll.target.complete();
                this.records = this.records + 10;
            });
        }
    }
    ionViewDidEnter() {
        this.subscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationStart"])).subscribe((route) => {
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
};
LogsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_7__["SyncService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] }
];
LogsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logs',
        template: __webpack_require__(/*! raw-loader!./logs.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/logs/logs.page.html"),
        styles: [__webpack_require__(/*! ./logs.page.scss */ "./src/app/pages/logs/logs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_7__["SyncService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
], LogsPage);



/***/ })

}]);
//# sourceMappingURL=logs-logs-module-es2015.js.map