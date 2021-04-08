(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors-vendors-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendors/vendors.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendors/vendors.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Vendor(s)</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)=\"geItems($event)\" placeholder=\"Search Vendor(s)\" showCancelButton=\"focus\"></ion-searchbar>\n  <ion-button (click)=\"selectActive()\" [fill]=\"active\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"primary\" style=\"width: auto;\">Active</ion-button>\n  <ion-button (click)=\"selectInActive()\" [fill]=\"inactive\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  color=\"primary\" style=\"width: auto;\">Inactive</ion-button>\n  \n  <!-- <ion-spinner name=\"crescent\" *ngIf=\"showSpinner\" color=\"primary\"></ion-spinner> -->\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\"> \n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  <ion-fab *ngIf=\"showAdd === 1\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addVendor()\">\n      <ion-fab-button>\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n<ion-virtual-scroll *ngIf=\"selected === 'act'\" [items]=\"tempActiveVendors\" approxItemHeight=\"70px\" [headerFn]=\"separateLetter\">\n \n<ion-item-divider *virtualHeader=\"let header\" color=\"primary\">\n  <ion-label>{{ header }}</ion-label>\n</ion-item-divider>\n<ion-item-sliding *virtualItem=\"let client;index as pos\" >\n    <ion-item-options side=\"start\">\n      <ion-item-option style=\"background-color: green;\" (click)=\"call(client)\">Call</ion-item-option>\n\n    </ion-item-options>\n    <!-- <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"del(client)\">Delete</ion-item-option>\n\n      </ion-item-options> -->\n      <ion-item-options side=\"end\">\n        <!-- <ion-item-option color=\"danger\" (click)=\"del(client)\">Delete</ion-item-option> -->\n        <ion-item-option style=\"background-color: primary;\" (click)=\"addPayment($event,client)\">Send Payment</ion-item-option>\n      </ion-item-options>\n<ion-item (click)=\"ledger($event,client)\">\n    <!-- <ion-avatar slot=\"start\">\n        <img src=\"assets/plus.png\">\n    </ion-avatar> -->\n    <ion-icon padding (click)=\"itemClicked(client,$event)\" name=\"create\"></ion-icon>\n    <ion-label>\n      <h2 text-capitalize>{{ client.Name }}</h2>\n      <p>{{ client.Phone }}</p>\n    </ion-label>\n    <ion-label>\n      <span  style=\"float:right;color:red;\">\n          {{client.Balance | currency:currency:true:\"1.2\"}}\n      </span>\n  </ion-label>\n    <!-- <ion-button item-end  text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"success\" style=\"width: auto;\">Send Payment</ion-button> -->\n</ion-item>\n</ion-item-sliding>\n\n</ion-virtual-scroll>\n\n\n\n<ion-virtual-scroll *ngIf=\"selected == 'inact'\" [items]=\"tempInactiveVendors\" approxItemHeight=\"70px\" [headerFn]=\"separateLetter\">\n \n<ion-item-divider *virtualHeader=\"let header\" color=\"primary\">\n  <ion-label>{{ header }}</ion-label>\n</ion-item-divider>\n<ion-item-sliding *virtualItem=\"let client;index as pos\" >\n    <ion-item-options side=\"start\">\n      <ion-item-option style=\"background-color: green;\" (click)=\"call(client)\">Call</ion-item-option>\n\n    </ion-item-options>\n    <!-- <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"del(client)\">Delete</ion-item-option>\n\n      </ion-item-options> -->\n      <ion-item-options side=\"end\">\n          <!-- <ion-item-option color=\"danger\" (click)=\"del(client)\">Delete</ion-item-option> -->\n          <ion-item-option style=\"background-color: primary;\" (click)=\"addPayment($event,client)\">Send Payment</ion-item-option>\n        </ion-item-options>\n      <ion-item (click)=\"ledger($event,client)\">\n          <!-- <ion-avatar slot=\"start\">\n              <img src=\"assets/plus.png\">\n          </ion-avatar> -->\n          <ion-icon padding (click)=\"itemClicked(client,$event)\" name=\"create\"></ion-icon>\n          <ion-label>\n            <h2 text-capitalize>{{ client.Name }}</h2>\n            <p>{{ client.Phone }}</p>\n          </ion-label>\n          <ion-label>\n            <span  style=\"float:right;color:red;\">\n              {{client.Balance | currency:currency:true:\"1.2\"}}\n            </span>\n        </ion-label>\n          <!-- <ion-button item-end  text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"success\" style=\"width: auto;\">Send Payment</ion-button> -->\n      </ion-item>\n</ion-item-sliding>\n\n</ion-virtual-scroll>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/vendors/vendors.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/vendors/vendors.module.ts ***!
  \*************************************************/
/*! exports provided: VendorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsPageModule", function() { return VendorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vendors_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendors.page */ "./src/app/pages/vendors/vendors.page.ts");









const routes = [
    {
        path: '',
        component: _vendors_page__WEBPACK_IMPORTED_MODULE_8__["VendorsPage"]
    }
];
let VendorsPageModule = class VendorsPageModule {
};
VendorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_vendors_page__WEBPACK_IMPORTED_MODULE_8__["VendorsPage"]]
    })
], VendorsPageModule);



/***/ }),

/***/ "./src/app/pages/vendors/vendors.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/vendors/vendors.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvcnMvdmVuZG9ycy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/vendors/vendors.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/vendors/vendors.page.ts ***!
  \***********************************************/
/*! exports provided: VendorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsPage", function() { return VendorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");













let VendorsPage = class VendorsPage {
    constructor(router, http, nativeHttp, plt, loadingCtrl, databaseprovider, callnumber, syncService, storage) {
        this.router = router;
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.databaseprovider = databaseprovider;
        this.callnumber = callnumber;
        this.syncService = syncService;
        this.storage = storage;
        this.vendors = [];
        this.activeVendors = [];
        this.inactiveVendors = [];
        this.sorted = [];
        this.tempVendors = [];
        this.tempActiveVendors = [];
        this.tempInactiveVendors = [];
        this.active = 'solid';
        this.inactive = 'outline';
        this.showSpinner = true;
        this.selected = 'act';
        this.currency = '';
        this.showAdd = 0;
        this.showDetails = 0;
        this.storage.get('app').then((val1) => {
            if (val1 === 'invoice') {
                this.storage.get('ID').then((val) => {
                    this.syncService.getbValue(val, 'Vendor Add').then((data) => {
                        this.showAdd = data[0].bValue;
                    });
                    this.syncService.getbValue(val, 'Vendor Details').then((data) => {
                        this.showDetails = data[0].bValue;
                    });
                });
            }
            else {
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
        if (this.vendors.length === 0) {
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
        this.subscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"])).subscribe((route) => {
            console.log('Route: ' + route.url);
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
    itemClicked(item, event) {
        if (this.showDetails) {
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
    separateLetter(client, clientIndex, clients) {
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
    initializeactiveItems() {
        this.tempActiveVendors = this.activeVendors;
    }
    initializeinactiveItems() {
        this.tempInactiveVendors = this.inactiveVendors;
    }
    initializeItems() {
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
    getDataNativeHttp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const url = this.databaseprovider.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url, {
                'Name': 'getAllVendors',
            }, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                const g = JSON.parse(data.data);
                this.vendors = g.vendors;
                console.log(this.vendors[0]);
                this.sortVendors();
                this.inactiveVendors = [];
                this.activeVendors = [];
                for (let i = 0; i < this.vendors.length; i++) {
                    if (this.vendors[i].bActive === '0') {
                        this.inactiveVendors.push(this.vendors[i]);
                    }
                    else {
                        this.activeVendors.push(this.vendors[i]);
                    }
                }
                //  this.selectActive();
                // ;
                // this.initializeItems();
                this.initializeactiveItems();
                this.initializeinactiveItems();
                this.databaseprovider.setupdatevendors(0);
            }, err => {
                console.log('JS call error', err);
            });
        });
    }
    call(item) {
        const number = item.billing.phone;
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
    addPayment(event, item) {
        event.stopPropagation();
        const navigationExtras = {
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
        const navigationExtras = {
            state: {
                client: item
            }
        };
        this.router.navigate(['ledgers-vendors'], navigationExtras);
        ;
    }
    getAllVendorsLocaldb() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            this.syncService.getAllVendors().then((data) => {
                this.vendors = data;
                this.sortVendors();
                this.inactiveVendors = [];
                this.activeVendors = [];
                for (let i = 0; i < this.vendors.length; i++) {
                    if (this.vendors[i].bActive === 0) {
                        this.inactiveVendors.push(this.vendors[i]);
                    }
                    else {
                        this.activeVendors.push(this.vendors[i]);
                    }
                }
                // this.initializeItems();
                this.initializeactiveItems();
                this.initializeinactiveItems();
                loading.dismiss();
                this.databaseprovider.setupdatevendors(0);
            });
        });
    }
};
VendorsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_10__["SyncService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] }
];
VendorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendors',
        template: __webpack_require__(/*! raw-loader!./vendors.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendors/vendors.page.html"),
        styles: [__webpack_require__(/*! ./vendors.page.scss */ "./src/app/pages/vendors/vendors.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_10__["SyncService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"]])
], VendorsPage);



/***/ })

}]);
//# sourceMappingURL=vendors-vendors-module-es2015.js.map