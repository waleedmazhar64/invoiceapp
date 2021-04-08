(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/clients/clients.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/clients/clients.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n          <ion-menu-button (click)=\"changeName()\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Client(s)</ion-title>\n      </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <!-- <ion-button (click)=\"selectActive()\" [fill]=\"active\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"primary\" style=\"width: auto;color: #084e1b;\">Active</ion-button> -->\n\n    <ion-searchbar (ionInput)=\"geItems($event)\" placeholder=\"Search Client(s)\" showCancelButton=\"focus\"></ion-searchbar>\n    <ion-button (click)=\"selectActive()\" [fill]=\"active\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"primary\" style=\"width: auto;\">Active</ion-button>\n    <ion-button (click)=\"selectInActive()\" [fill]=\"inactive\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  color=\"primary\" style=\"width: auto;\">Inactive</ion-button>\n\n    <!-- <ion-spinner name=\"crescent\" *ngIf=\"showSpinner\" color=\"primary\"></ion-spinner> -->\n    <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\"> \n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n    <ion-fab *ngIf=\"showAdd === 1\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addClient()\">\n        <ion-fab-button>\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n\n<ion-virtual-scroll *ngIf=\"selected === 'act'\" [items]=\"tempActiveClients\" approxItemHeight=\"70px\" [headerFn]=\"separateLetter\">\n   \n  <ion-item-divider *virtualHeader=\"let header\" color=\"primary\">\n    <ion-label>{{ header }}</ion-label>\n  </ion-item-divider>\n  <ion-item-sliding *virtualItem=\"let client;index as pos\" >\n      <ion-item-options side=\"start\">\n        <ion-item-option style=\"background-color: green;\" (click)=\"call(client)\">Call</ion-item-option>\n        <ion-item-option style=\"background-color: primary;\" (click)=\"Sms(client)\">SMS</ion-item-option>\n        <ion-item-option style=\"background-color: red;\" (click)=\"del(client)\">Delete</ion-item-option>\n\n      </ion-item-options>\n      <ion-item-options side=\"end\">\n          <!-- <ion-item-option color=\"danger\" (click)=\"del(client)\">Delete</ion-item-option> -->\n          <ion-item-option style=\"background-color: primary;\" (click)=\"addPayment($event,client)\">Receive Payment</ion-item-option>\n        </ion-item-options>\n  <ion-item (click)=\"ledger($event,client)\">\n      <!-- <ion-avatar slot=\"start\">\n          <img src=\"assets/plus.png\">  \n      </ion-avatar> -->\n      <ion-icon padding (click)=\"itemClicked(client,$event)\" name=\"create\"></ion-icon>\n      <ion-label>\n        <h2 text-capitalize>{{ client.Fname }} {{client.Lname}}</h2>\n        <p>{{client.Shop}}, {{ client.BillingAddress }}, {{ client.City}}</p>\n      </ion-label>\n      <ion-label>\n        <span  style=\"float:right;color:red;\">\n            {{client.Balance | currency:currency:true:\"1.2\"}}\n        </span>\n    </ion-label>\n      <!-- <ion-button item-end (click)=\"addPayment($event,client)\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"success\" style=\"width: auto;\">Receive Payment</ion-button> -->\n    </ion-item>\n  </ion-item-sliding>\n\n</ion-virtual-scroll>\n\n<ion-virtual-scroll *ngIf=\"selected == 'inact'\" [items]=\"tempInactiveClients\" approxItemHeight=\"70px\" [headerFn]=\"separateLetter\">\n   \n  <ion-item-divider *virtualHeader=\"let header\" color=\"primary\">\n    <ion-label>{{ header }}</ion-label>\n  </ion-item-divider>\n  <ion-item-sliding *virtualItem=\"let client;index as pos\" >\n    <ion-item-options side=\"start\">\n      <ion-item-option style=\"background-color: green;\" (click)=\"call(client)\">Call</ion-item-option>\n      <ion-item-option style=\"background-color: primary;\" (click)=\"Sms(client)\">SMS</ion-item-option>\n      <!-- <ion-item-option style=\"background-color: yellowgreen;\" (click)=\"restored(client)\">Activate</ion-item-option> -->\n\n    </ion-item-options>\n    <ion-item-options side=\"end\">\n        <!-- <ion-item-option color=\"danger\" (click)=\"del(client)\">Delete</ion-item-option> -->\n        <ion-item-option style=\"background-color: primary;\" (click)=\"addPayment($event,client)\">Receive Payment</ion-item-option>\n      </ion-item-options>\n        <ion-item (click)=\"ledger($event,client)\">\n          <!-- <ion-avatar slot=\"start\">\n              <img src=\"assets/plus.png\">  \n          </ion-avatar> -->\n          <ion-icon padding (click)=\"itemClicked(client,$event)\" name=\"create\"></ion-icon>\n          <ion-label>\n            <h2 text-capitalize>{{ client.Fname }} {{client.Lname}}</h2>\n            <p>{{client.Shop}}, {{ client.BillingAddress }}, {{ client.City}}</p>\n          </ion-label>\n          <ion-label>\n            <span  style=\"float:right;color:red;\">\n                {{client.Balance | currency:currency:true:\"1.2\"}}\n            </span>\n        </ion-label>\n          <!-- <ion-button item-end (click)=\"addPayment($event,client)\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"success\" style=\"width: auto;\">Receive Payment</ion-button> -->\n        </ion-item>\n  </ion-item-sliding>\n\n</ion-virtual-scroll>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/clients/clients.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/clients/clients.module.ts ***!
  \*************************************************/
/*! exports provided: ClientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPageModule", function() { return ClientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _clients_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clients.page */ "./src/app/pages/clients/clients.page.ts");












var routes = [
    {
        path: '',
        component: _clients_page__WEBPACK_IMPORTED_MODULE_10__["ClientsPage"]
    }
];
var ClientsPageModule = /** @class */ (function () {
    function ClientsPageModule() {
    }
    ClientsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"],
                _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"],
                _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_6__["SMS"],
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ],
            declarations: [_clients_page__WEBPACK_IMPORTED_MODULE_10__["ClientsPage"]]
        })
    ], ClientsPageModule);
    return ClientsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/clients/clients.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/clients/clients.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsaWVudHMvY2xpZW50cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/clients/clients.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/clients/clients.page.ts ***!
  \***********************************************/
/*! exports provided: ClientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPage", function() { return ClientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


















var ClientsPage = /** @class */ (function () {
    // act = true;
    // inact = false;
    function ClientsPage(router, http, nativeHttp, plt, loadingCtrl, databaseprovider, callnumber, syncService, sms, alrtCtrl, socialSharing, storage, statubar, network, datePipe, events) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.databaseprovider = databaseprovider;
        this.callnumber = callnumber;
        this.syncService = syncService;
        this.sms = sms;
        this.alrtCtrl = alrtCtrl;
        this.socialSharing = socialSharing;
        this.storage = storage;
        this.statubar = statubar;
        this.network = network;
        this.datePipe = datePipe;
        this.events = events;
        this.showAdd = 0;
        this.showDetails = 0;
        this.data1 = [];
        this.c = [];
        this.clients = [];
        this.client = [];
        this.activeClients = [];
        this.inactiveClients = [];
        this.sorted = [];
        this.tempClients = [];
        this.tempActiveClients = [];
        this.tempInactiveClients = [];
        this.active = 'solid';
        this.inactive = 'outline';
        this.showSpinner = true;
        this.selected = 'act';
        this.message = '';
        this.currency = '';
        this.username = '';
        this.tblName = "clients";
        this.acttype = "deactivated";
        this.lgdate = "2019-11-21";
        this.name = '';
        this.delCid = 0;
        this.delSync = 0;
        this.storage.get('userId').then(function (val) {
            _this.usdId = val;
            console.log(_this.usdId);
        });
        this.storage.get('app').then(function (val1) {
            if (val1 === 'invoice') {
                _this.storage.get('ID').then(function (val) {
                    _this.syncService.getbValue(val, 'Client Add').then(function (data) {
                        _this.showAdd = data[0].bValue;
                    });
                    _this.syncService.getbValue(val, 'Client Details').then(function (data) {
                        _this.showDetails = data[0].bValue;
                    });
                });
            }
            else {
                _this.showAdd = 1;
                _this.showDetails = 1;
            }
        });
        this.statubar.backgroundColorByHexString('#4c8dff');
        storage.get('currency').then(function (val) {
            if (val !== null) {
                _this.currency = val.toString();
            }
        });
        // this.router.events.pipe(
        //   filter(event => event instanceof NavigationStart)
        // ).subscribe((route: NavigationStart) => {
        //          // this.getDataNativeHttp();
        //     console.log('Route: '+route.url);
        //     const a = this.databaseprovider.getupdateclients();
        //     ;
        //     storage.get('currency').then((val) => {
        //       if (val !== null) {
        //           this.currency = val.toString();
        //           
        //       }
        //     });
        //     if(route.url === '/menu/clients' && a === 1) {
        //       this.getAllClientsLocaldb();
        //     }
        // });
        if (this.clients.length === 0) {
            ;
            // this.getDataNativeHttp();
            storage.get('currency').then(function (val) {
                if (val !== null) {
                    _this.currency = val.toString();
                }
            });
            this.getAllClientsLocaldb();
        }
        events.subscribe('refreshClients', function (user, time) {
            // alert('refreshclients')
            _this.clients = [];
            _this.client = [];
            _this.getAllClientsLocaldb();
        });
        // this.getAllClientsLocaldb();
        // this.sortClients();
        // this.initializeItems();
    }
    ClientsPage.prototype.ngOnInit = function () {
        //  this.sortClients();
    };
    ClientsPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('refreshClients');
    };
    ClientsPage.prototype.doRefresh = function (refresher) {
        this.getAllClientsLocaldb();
        refresher.target.complete();
    };
    ClientsPage.prototype.itemClicked = function (item, event) {
        if (this.showDetails === 1) {
            this.databaseprovider.setLogsnav(1);
            event.stopPropagation();
            this.syncService.getClient(item.Cid, '/menu/clients');
        }
        // this.clients = [];
        // const navigationExtras: NavigationExtras = {
        //   state: {
        //     editclient: item
        //   }
        // };
        // this.router.navigate(['menu-clientdetails'], navigationExtras);
    };
    ClientsPage.prototype.back = function () {
        this.router.navigate(['add-client']);
    };
    ClientsPage.prototype.sortClients = function () {
        ;
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
    ClientsPage.prototype.separateLetter = function (client, clientIndex, clients) {
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
    ClientsPage.prototype.initializeactiveItems = function () {
        this.tempActiveClients = this.activeClients;
    };
    ClientsPage.prototype.initializeinactiveItems = function () {
        this.tempInactiveClients = this.inactiveClients;
    };
    ClientsPage.prototype.initializeItems = function () {
        this.tempClients = this.clients;
    };
    ClientsPage.prototype.geItems = function (searchbar) {
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
        //  this.initializeItems();
        //  // set q to the value of the searchbar
        //  const q = searchbar.srcElement.value;
        //  ;
        //  // if the value is an empty string don't filter the items
        //  if (!q) {
        //    return;
        //  }
        //  this.tempClients = this.tempClients.filter((v) => {
        //    if (v.billing.first_name && q) {
        //      if (v.billing.first_name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        //        return true;
        //      }
        //      return false;
        //    }
        //  });
        // console.log(q, this.clients.length);
    };
    ClientsPage.prototype.addClient = function () {
        this.router.navigate(['menu-addclient']);
    };
    ClientsPage.prototype.getDataNativeHttp = function () {
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
                        nativeCall = this.nativeHttp.post(url, {
                            'Name': 'getAllClients',
                            'AccountId': '113008225657937776461'
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            _this.clients = g.clients;
                            console.log(_this.clients[0]);
                            _this.sortClients();
                            _this.inactiveClients = [];
                            _this.activeClients = [];
                            for (var i = 0; i < _this.clients.length; i++) {
                                if (_this.clients[i].Active === '0') {
                                    _this.inactiveClients.push(_this.clients[i]);
                                }
                                else {
                                    _this.activeClients.push(_this.clients[i]);
                                }
                            }
                            //  this.selectActive();
                            // ;
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
    ClientsPage.prototype.call = function (item) {
        var number = item.Cell;
        this.callnumber.callNumber(number, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    ClientsPage.prototype.Sms = function (item) {
        // ;
        // const number =item.Cell;
        // this.alrtCtrl.create({
        //   header: 'Message',
        //   inputs: [
        //     {
        //       name: 'Message',
        //       placeholder: this.message,
        //       value: this.message
        //     }
        //   ],
        //   buttons: [
        //     {
        //       text: 'Cancel',
        //       role: 'cancel',
        //       handler: data => {
        //         console.log('Cancel clicked');
        //       }
        //     },
        //     {
        //       text: 'Submit',
        //       handler: data => {
        //        console.log(data);
        //        this.message = data.Message;
        //        if (this.message !== '' && this.message.length > 0) {
        //          number;
        //        // this.sms.send(number,this.message);
        //         this.sms.send('03215312559','this.message');
        //        ;
        //        }
        //       }
        //     }
        //   ]
        // }).then(alert => alert.present());
        var number = item.Cell;
        this.socialSharing.shareViaSMS('', number).then(function () {
        }).catch(function () {
        });
    };
    ClientsPage.prototype.ledger = function (event, item) {
        // event.stopPropagation();
        var navigationExtras = {
            state: {
                client: item
            }
        };
        this.router.navigate(['ledger'], navigationExtras);
    };
    ClientsPage.prototype.addPayment = function (event, item) {
        event.stopPropagation();
        var navigationExtras = {
            state: {
                Cid: item.Cid,
                Name: item.Fname + ' ' + item.Lname,
                Sync: item.Sync,
                url: this.router.url
            }
        };
        this.router.navigate(['payment-info'], navigationExtras);
    };
    ClientsPage.prototype.restored = function (item) {
        this.delCid = item.Cid;
        this.delSync = item.Sync;
        this.name = item.Fname + ' ' + item.Lname;
        this.shareALert1("Warning", '', 'Are you sure you want to Activate this client?');
    };
    ClientsPage.prototype.del = function (item) {
        this.delCid = item.Cid;
        this.delSync = item.Sync;
        this.name = item.Fname + ' ' + item.Lname;
        this.shareALert("Warning", '', 'Are you sure you want to delete this client?');
    };
    ClientsPage.prototype.shareALert = function (head, sub, msg) {
        var _this = this;
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'alertSize',
            buttons: [
                {
                    text: 'Delete',
                    cssClass: 'customClass',
                    role: 'cancel',
                    handler: function () {
                        console.log('yes');
                        // this.deleteClient();
                        _this.deleteClientlocaldb();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Confirm Ok');
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    ClientsPage.prototype.shareALert1 = function (head, sub, msg) {
        var _this = this;
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'alertSize',
            buttons: [
                {
                    text: 'Activate',
                    cssClass: 'customClass',
                    role: 'cancel',
                    handler: function () {
                        console.log('yes');
                        // this.deleteClient();
                        _this.activateClientlocaldb();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Confirm Ok');
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    ClientsPage.prototype.activateClientlocaldb = function () {
        var _this = this;
        if (this.client.Sync === 1) {
            this.client.Sync = 2;
        }
        this.syncService.activateClient(this.delCid, this.delSync)
            .then(function (data) {
            data;
            _this.clients = [];
            _this.client = [];
            _this.getAllClientsLocaldb();
            _this.tblId = _this.client.Cid;
            _this.acttype = 'activated';
            _this.AddLog();
            // this.databaseprovider.setupdateclients(1);
            // this.router.navigate(['/menu/clients']);
            if (_this.network.type === 'none') {
            }
            else {
                _this.syncUpdateClients();
            }
        });
    };
    ClientsPage.prototype.deleteClientlocaldb = function () {
        var _this = this;
        if (this.delSync === 1) {
            this.delSync = 2;
        }
        this.syncService.deleteClient(this.delCid, this.delSync)
            .then(function (data) {
            data;
            _this.clients = [];
            _this.client = [];
            _this.getAllClientsLocaldb();
            _this.tblId = _this.client.Cid;
            _this.AddLog();
            // this.databaseprovider.setupdateclients(1);
            // this.router.navigate(['/menu/clients']);
            if (_this.network.type === 'none') {
            }
            else {
                _this.syncUpdateClients();
            }
        });
    };
    ClientsPage.prototype.AddLog = function () {
        var _this = this;
        if (this.acttype === 'deactivated') {
            if (this.usdId === 1) {
                this.acttype = 'You  deactivated client';
            }
            else {
                this.acttype = 'You deactivated client';
            }
        }
        if (this.acttype === 'activated') {
            if (this.usdId === 1) {
                this.acttype = 'You activated client';
            }
            else {
                this.acttype = 'You activated client';
            }
        }
        this.name;
        this.tblId = this.delCid;
        var now = new Date().toString();
        var a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName, this.tblId, this.usdId, this.acttype, this.lgdate;
        this.tblName, this.tblId, this.usdId, this.acttype, this.lgdate;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(function (data) {
            console.log("Log has been added");
            _this.syncService.syncAddedLog();
        });
    };
    ClientsPage.prototype.syncUpdateClients = function () {
        var _this = this;
        this.syncService.syncUpdatedClients().then(function (data) {
            if (data.length > 0) {
                var IDs_1 = [];
                for (var i = 0; i < data.length; i++) {
                    IDs_1[i] = data[i].Cid;
                }
                var url = _this.databaseprovider.getURL();
                ;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncUpdatedClients',
                    "Clients": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        _this.syncService.updateSyncedClients(IDs_1).then(function (data) {
                        });
                    }
                    else {
                        // alert('failed');
                    }
                    // this.initializeItems();
                }, function (err) {
                    console.log('JS call error', err);
                    var error = JSON.parse(err.error);
                    //alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
            }
        });
    };
    ClientsPage.prototype.selectActive = function () {
        this.active = 'solid';
        this.inactive = 'outline';
        this.selected = 'act';
    };
    ClientsPage.prototype.selectInActive = function () {
        this.tempInactiveClients;
        this.active = 'outline';
        this.inactive = 'solid';
        this.selected = 'inact';
    };
    ClientsPage.prototype.getAllClientsLocaldb = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.syncService.getAllClients().then(function (data) {
                            _this.clients = data;
                            _this.client = data;
                            _this.amount = _this.client.Balance;
                            _this.sortClients();
                            _this.inactiveClients = [];
                            _this.activeClients = [];
                            for (var i = 0; i < _this.clients.length; i++) {
                                if (_this.clients[i].Active === 0 || _this.clients[i].Balance === 0) {
                                    _this.inactiveClients.push(_this.clients[i]);
                                }
                                else {
                                    _this.activeClients.push(_this.clients[i]);
                                }
                            }
                            // this.initializeItems();
                            _this.initializeactiveItems();
                            _this.initializeinactiveItems();
                            loading.dismiss();
                            _this.databaseprovider.setupdateclients(0);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientsPage.prototype.changeName = function () {
    };
    ClientsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; })).subscribe(function (route) {
            // this.getDataNativeHttp();
            console.log('Route: ' + route.url);
            var a = _this.databaseprovider.getupdateclients();
            ;
            _this.storage.get('currency').then(function (val) {
                if (val !== null) {
                    _this.currency = val.toString();
                }
            });
            if (route.url === '/menu/clients' && a === 1) {
                _this.getAllClientsLocaldb();
            }
        });
    };
    ClientsPage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
    };
    ClientsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_10__["SyncService"] },
        { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_11__["SMS"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__["StatusBar"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__["Network"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"] }
    ]; };
    ClientsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! raw-loader!./clients.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/clients/clients.page.html"),
            styles: [__webpack_require__(/*! ./clients.page.scss */ "./src/app/pages/clients/clients.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_10__["SyncService"],
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_11__["SMS"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__["StatusBar"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__["Network"],
            _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"]])
    ], ClientsPage);
    return ClientsPage;
}());



/***/ })

}]);
//# sourceMappingURL=clients-clients-module-es5.js.map