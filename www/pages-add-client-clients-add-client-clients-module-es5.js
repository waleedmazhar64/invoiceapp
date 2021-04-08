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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_client_clients_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-client-clients.page */ "./src/app/pages/add-client-clients/add-client-clients.page.ts");









var routes = [
    {
        path: '',
        component: _add_client_clients_page__WEBPACK_IMPORTED_MODULE_8__["AddClientClientsPage"]
    }
];
var AddClientClientsPageModule = /** @class */ (function () {
    function AddClientClientsPageModule() {
    }
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
    return AddClientClientsPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");











var AddClientClientsPage = /** @class */ (function () {
    function AddClientClientsPage(router, nativeHttp, plt, loadingCtrl, databaseprovider, callnumber, syncService) {
        var _this = this;
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
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; })).subscribe(function (route) {
            console.log('Route: ' + route.url);
            var a = _this.databaseprovider.getupdateclients();
            debugger;
            if (route.url == 'add-client-clients' && a === 1) {
                _this.getClientslocaldb();
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
    AddClientClientsPage.prototype.ngOnInit = function () {
    };
    AddClientClientsPage.prototype.initializeactiveItems = function () {
        this.tempActiveClients = this.activeClients;
    };
    AddClientClientsPage.prototype.initializeinactiveItems = function () {
        this.tempInactiveClients = this.inactiveClients;
    };
    AddClientClientsPage.prototype.itemClicked = function (item) {
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
        var navigationExtras = {
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
    };
    AddClientClientsPage.prototype.back = function () {
        this.router.navigate([this.url]);
    };
    AddClientClientsPage.prototype.sortClients = function () {
        debugger;
        this.clients = this.clients.sort(function (a, b) {
            if (a.Fname < b.Fname) {
                return -1;
            }
            if (a.Fname > b.Fname) {
                return 1;
            }
            return 0;
        });
    };
    AddClientClientsPage.prototype.separateLetter = function (client, clientIndex, clients) {
        if (clientIndex === 0) {
            return client.Fname[0].toUpperCase();
        }
        var first_prev = clients[clientIndex - 1].Fname[0];
        var first_current = client.Fname[0];
        if (first_prev !== first_current) {
            return first_current.toUpperCase();
        }
        return null;
    };
    AddClientClientsPage.prototype.initializeItems = function () {
        this.tempClients = this.clients;
    };
    AddClientClientsPage.prototype.geItems = function (searchbar) {
        if (this.selected === 'act') {
            this.initializeactiveItems();
            var q_1 = searchbar.srcElement.value;
            if (!q_1) {
                return;
            }
            this.tempActiveClients = this.tempActiveClients.filter(function (v) {
                if (v.Fname && q_1) {
                    if (v.Fname.toLowerCase().indexOf(q_1.toLowerCase()) > -1) {
                        return true;
                    }
                    return false;
                }
            });
        }
        if (this.selected === 'inact') {
            this.initializeinactiveItems();
            var q_2 = searchbar.srcElement.value;
            if (!q_2) {
                return;
            }
            this.tempInactiveClients = this.tempInactiveClients.filter(function (v) {
                if (v.Fname && q_2) {
                    if (v.Fname.toLowerCase().indexOf(q_2.toLowerCase()) > -1) {
                        return true;
                    }
                    return false;
                }
            });
        }
    };
    AddClientClientsPage.prototype.getDataNativeHttp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, url, nativeCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        url = this.databaseprovider.getURL();
                        nativeCall = this.nativeHttp.get('https://riz.livauto.com/wp-json/wc/v3/customers', {}, {
                            'Content-Type': 'application/json',
                            'Authorization': 'Basic Y2tfOWNlMGIyZmZmYjZlNzJlMTM3NGY3MTgzOTQ0NDBhMDkwNmNiOWVkZDpjc183MmIxMDQyMWExM2I4MmQzN2M0ODE0MDI5YmRmN2E0NTIyYzBjMTI4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            _this.clients = JSON.parse(data.data);
                            console.log(_this.clients[0]);
                            _this.sortClients();
                            _this.inactiveClients = [];
                            _this.activeClients = [];
                            for (var i = 0; i < _this.clients.length; i++) {
                                if (_this.clients[i].billing.address_2 === 'Inactive') {
                                    _this.inactiveClients.push(_this.clients[i]);
                                }
                                else {
                                    _this.activeClients.push(_this.clients[i]);
                                }
                            }
                            //  this.selectActive();
                            // debugger;
                            // this.initializeItems();
                            _this.initializeactiveItems();
                            _this.initializeinactiveItems();
                            _this.databaseprovider.setupdateclients(0);
                        }, function (err) {
                            console.log('JS call error', err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddClientClientsPage.prototype.getCustmerBalance = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, url, nativeCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        url = this.databaseprovider.getURL();
                        this.nativeHttp.setDataSerializer("json");
                        nativeCall = this.nativeHttp.post(url + '/rizAdnanApp/payments.php', {
                            "CustomerID": item.id
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            if (g.TotalDebit == null) {
                                g.TotalDebit = 0;
                            }
                            if (g.TotalCredit == null) {
                                g.TotalCredit = 0;
                            }
                            if (g.Amount == null) {
                                g.Amount = 0;
                            }
                            _this.credit = g.TotalCredit;
                            _this.debit = g.TotalDebit;
                            _this.lastPayment = g.Amount;
                            debugger;
                            var navigationExtras = {
                                state: {
                                    client: item,
                                    credit: _this.credit,
                                    debit: _this.debit,
                                    lastpayment: _this.lastPayment
                                }
                            };
                            debugger;
                            _this.router.navigate([_this.url], navigationExtras);
                            // comment
                            // this.databaseservice.setupdateclients(1);
                            // this.router.navigate(['/menu/clients']);
                            // this.initializeItems();
                        }, function (err) {
                            loading.dismiss();
                            //  this.databaseservice.setupdateclients(1);
                            //  this.router.navigate(['/menu/clients']);
                            console.log('JS call error', err);
                            var error = JSON.parse(err.error);
                            alert(error.message);
                            console.log('Native data:', JSON.parse(error));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddClientClientsPage.prototype.getClientslocaldb = function () {
        var _this = this;
        this.syncService.getAllClients().then(function (data) {
            debugger;
            _this.clients = data;
            _this.sortClients();
            _this.inactiveClients = [];
            _this.activeClients = [];
            for (var i = 0; i < _this.clients.length; i++) {
                if (_this.clients[i].Active === 0) {
                    _this.inactiveClients.push(_this.clients[i]);
                }
                else {
                    _this.activeClients.push(_this.clients[i]);
                }
            }
            // this.initializeItems();
            _this.initializeactiveItems();
            _this.initializeinactiveItems();
            _this.databaseprovider.setupdateclients(0);
            debugger;
        });
    };
    AddClientClientsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__["SyncService"] }
    ]; };
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
    return AddClientClientsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-client-clients-add-client-clients-module-es5.js.map