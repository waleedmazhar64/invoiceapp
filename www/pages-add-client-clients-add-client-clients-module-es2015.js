(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-client-clients-add-client-clients-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-client-clients/add-client-clients.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-client-clients/add-client-clients.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n      <ion-title>Client(s)</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-searchbar (ionInput)=\"geItems($event)\" placeholder=\"Search Clients\" showCancelButton=\"focus\"></ion-searchbar>\n\n<ion-virtual-scroll [items]=\"tempActiveClients\" approxItemHeight=\"70px\" [headerFn]=\"separateLetter\">\n\n  <ion-item-divider *virtualHeader=\"let header\" color=\"primary\">\n    <ion-label>{{ header }}</ion-label>\n  </ion-item-divider>\n  <ion-item *virtualItem=\"let client\" (click)=\"itemClicked(client)\">\n      <ion-avatar slot=\"start\">\n          <img src=\"assets/plus.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2 text-capitalize>{{ client.Fname }} {{client.Lname}}</h2>\n        <p>{{client.Shop}}, {{ client.BillingAddress }}, {{ client.City}}</p>\n      </ion-label>\n  </ion-item>\n\n</ion-virtual-scroll>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/add-client-clients/add-client-clients.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/add-client-clients/add-client-clients.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddClientClientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientClientsPageModule", function() { return AddClientClientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_client_clients_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-client-clients.page */ "./src/app/pages/add-client-clients/add-client-clients.page.ts");









const routes = [
    {
        path: '',
        component: _add_client_clients_page__WEBPACK_IMPORTED_MODULE_8__["AddClientClientsPage"]
    }
];
let AddClientClientsPageModule = class AddClientClientsPageModule {
};
AddClientClientsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]
        ],
        declarations: [_add_client_clients_page__WEBPACK_IMPORTED_MODULE_8__["AddClientClientsPage"]]
    })
], AddClientClientsPageModule);



/***/ }),

/***/ "./src/app/pages/add-client-clients/add-client-clients.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/add-client-clients/add-client-clients.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1jbGllbnQtY2xpZW50cy9hZGQtY2xpZW50LWNsaWVudHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/add-client-clients/add-client-clients.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/add-client-clients/add-client-clients.page.ts ***!
  \*********************************************************************/
/*! exports provided: AddClientClientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientClientsPage", function() { return AddClientClientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");











let AddClientClientsPage = class AddClientClientsPage {
    constructor(router, nativeHttp, plt, loadingCtrl, databaseprovider, callnumber, syncService) {
        this.router = router;
        this.nativeHttp = nativeHttp;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.databaseprovider = databaseprovider;
        this.callnumber = callnumber;
        this.syncService = syncService;
        this.credit = '';
        this.debit = '';
        this.lastPayment = '0';
        this.clients = [];
        this.sorted = [];
        this.tempClients = [];
        this.activeClients = [];
        this.inactiveClients = [];
        this.tempActiveClients = [];
        this.tempInactiveClients = [];
        this.active = 'primary';
        this.inactive = 'dark';
        this.showSpinner = true;
        this.selected = 'act';
        this.ID = '';
        this.Name = '';
        this.info = '';
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"])).subscribe((route) => {
            console.log('Route: ' + route.url);
            const a = this.databaseprovider.getupdateclients();
            debugger;
            if (route.url == 'add-client-clients' && a === 1) {
                this.getClientslocaldb();
            }
            //this.getDataNativeHttp();
        });
        if (this.clients.length === 0) {
            debugger;
            // this.getDataNativeHttp();
            this.getClientslocaldb();
        }
        if (this.router.getCurrentNavigation().extras.state) {
            this.url = this.router.getCurrentNavigation().extras.state.url;
            if (this.router.getCurrentNavigation().extras.state) {
                if (typeof this.router.getCurrentNavigation().extras.state.ID !== 'undefined') {
                    debugger;
                    this.ID = this.router.getCurrentNavigation().extras.state.ID;
                    this.Name = this.router.getCurrentNavigation().extras.state.Name;
                    this.info = this.router.getCurrentNavigation().extras.state.info;
                }
            }
        }
        // this.sortClients();
        // this.initializeItems();
    }
    ngOnInit() {
    }
    initializeactiveItems() {
        this.tempActiveClients = this.activeClients;
    }
    initializeinactiveItems() {
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
        const navigationExtras = {
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
    separateLetter(client, clientIndex, clients) {
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
    initializeItems() {
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
    getDataNativeHttp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const url = this.databaseprovider.getURL();
            let nativeCall = this.nativeHttp.get('https://riz.livauto.com/wp-json/wc/v3/customers', {}, {
                'Content-Type': 'application/json',
                'Authorization': 'Basic Y2tfOWNlMGIyZmZmYjZlNzJlMTM3NGY3MTgzOTQ0NDBhMDkwNmNiOWVkZDpjc183MmIxMDQyMWExM2I4MmQzN2M0ODE0MDI5YmRmN2E0NTIyYzBjMTI4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                this.clients = JSON.parse(data.data);
                console.log(this.clients[0]);
                this.sortClients();
                this.inactiveClients = [];
                this.activeClients = [];
                for (let i = 0; i < this.clients.length; i++) {
                    if (this.clients[i].billing.address_2 === 'Inactive') {
                        this.inactiveClients.push(this.clients[i]);
                    }
                    else {
                        this.activeClients.push(this.clients[i]);
                    }
                }
                //  this.selectActive();
                // debugger;
                // this.initializeItems();
                this.initializeactiveItems();
                this.initializeinactiveItems();
                this.databaseprovider.setupdateclients(0);
            }, err => {
                console.log('JS call error', err);
            });
        });
    }
    getCustmerBalance(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const url = this.databaseprovider.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url + '/rizAdnanApp/payments.php', {
                "CustomerID": item.id
            }, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => loading.dismiss))
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
                const navigationExtras = {
                    state: {
                        client: item,
                        credit: this.credit,
                        debit: this.debit,
                        lastpayment: this.lastPayment
                    }
                };
                debugger;
                this.router.navigate([this.url], navigationExtras);
                // comment
                // this.databaseservice.setupdateclients(1);
                // this.router.navigate(['/menu/clients']);
                // this.initializeItems();
            }, err => {
                loading.dismiss();
                //  this.databaseservice.setupdateclients(1);
                //  this.router.navigate(['/menu/clients']);
                console.log('JS call error', err);
                const error = JSON.parse(err.error);
                alert(error.message);
                console.log('Native data:', JSON.parse(error));
            });
        });
    }
    getClientslocaldb() {
        this.syncService.getAllClients().then((data) => {
            debugger;
            this.clients = data;
            this.sortClients();
            this.inactiveClients = [];
            this.activeClients = [];
            for (let i = 0; i < this.clients.length; i++) {
                if (this.clients[i].Active === 0) {
                    this.inactiveClients.push(this.clients[i]);
                }
                else {
                    this.activeClients.push(this.clients[i]);
                }
            }
            // this.initializeItems();
            this.initializeactiveItems();
            this.initializeinactiveItems();
            this.databaseprovider.setupdateclients(0);
            debugger;
        });
    }
};
AddClientClientsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__["SyncService"] }
];
AddClientClientsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-client-clients',
        template: __webpack_require__(/*! raw-loader!./add-client-clients.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-client-clients/add-client-clients.page.html"),
        styles: [__webpack_require__(/*! ./add-client-clients.page.scss */ "./src/app/pages/add-client-clients/add-client-clients.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__["SyncService"]])
], AddClientClientsPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-client-clients-add-client-clients-module-es2015.js.map