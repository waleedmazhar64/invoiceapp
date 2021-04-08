(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ledgers-vendors-ledgers-vendors-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ledgers-vendors/ledgers-vendors.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ledgers-vendors/ledgers-vendors.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n    <ion-title>Vendor Ledger</ion-title>\n    <ion-icon  class=\"iconSize\" padding size=\"medium\" slot=\"end\" (click)=\"createPdf()\" name=\"share\"></ion-icon>\n    <ion-icon class=\"iconSize\" size=\"medium\" slot=\"end\" name=\"cash\" (click)=\"addPayment()\"></ion-icon> \n    <ion-icon class=\"iconSize\" padding size=\"medium\"  slot=\"end\" name=\"document\" (click)=\"addPO()\"></ion-icon> \n  \n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n      <ion-avatar slot=\"start\" >\n          <img src=\"assets/personIcon.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2 class=\"txtSize\" text-capitalize>{{client.Name}}</h2>\n        <p>{{ client.Address }}</p>\n      </ion-label>\n      \n    <!-- <p  style=\"text-align:left;padding-left: 15px;\">\n          {{client.Fname}} {{client.Lname}}\n        <span  style=\"float:right;padding-right: 15px;\">\n          PKR {{ totalDebit - totalCredit}}  \n        </span>\n    </p> -->\n</ion-toolbar>\n<ion-toolbar  color=\"primary\">\n    <hr width=\"100%\" no-padding class=\"new1\">\n   \n<p  style=\"text-align:left;padding-left: 15px;\">\n<ion-icon (click)=\"call()\" no-padding class=\"iconSize\" name=\"call\" style=\"margin-right: 8px;\"></ion-icon>\n<ion-icon no-padding class=\"iconSize\" size=\"medium\" name=\"mail\" (click)=\"Sms()\"></ion-icon>\n        <span no-padding class=\"txtSize\" style=\"float:right;padding-right: 15px;\">\n          {{ client.Phone }} \n        </span>\n</p>\n</ion-toolbar>\n<ion-toolbar >\n<p no-padding class=\"txtSize\" style=\"text-align:left;padding-left: 15px;\">\n Total\n          <span no-padding *ngIf=\"totalCredit <= totalDebit\" class=\"txtSize\"  style=\"float:right;padding-right: 15px;color: red;\">\n           {{ total | currency:currency:true:\"1.2\" }} \n          </span>\n          <span *ngIf=\"totalCredit > totalDebit\" no-padding class=\"txtSize\"  style=\"float:right;padding-right: 15px;color: green;\">\n              {{ total | currency:currency:true:\"1.2\" }} \n            </span>\n</p>\n<hr width=\"100%\" style=\"border-top:1px solid black\">\n<p no-padding class=\"txtSize\" style=\"text-align:left;padding-left: 15px; color:green;\">\n    {{totalCredit | currency:currency:true:\"1.2\"}}\n             <span class=\"txtSize\"  style=\"float:right;padding-right: 15px;color: red;\">\n               {{ totalDebit | currency:currency:true:\"1.2\"}} \n             </span>\n   </p>\n   <hr no-padding width=\"100%\" style=\"border-top:1px solid black;\">\n   <ion-grid>\n     <ion-row>\n       <ion-col  text-center>\n          Credit(+)\n       </ion-col>\n       <ion-col text-center>\n         Date\n       </ion-col>\n       <ion-col text-center>\n          Debit(-)\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n   \n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-item lines=\"none\">\n      <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-item no-padding lines=\"none\">\n                  <ion-label text-start style=\"font-weight: bold;\"> Date\n                  </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item lines=\"none\">\n                  <ion-label text-end style=\"font-weight: bold;\">Amount</ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-item> -->\n<ion-list *ngFor=\"let item of ledger\">\n  <!-- <ion-item>\n      <ion-label>\n          <h2 text-capitalize>{{ item.Date }}</h2>\n        </ion-label>\n        <ion-label *ngIf=\"item.IsCredit == 1\">\n            <span  style=\"float:right;color: green;margin-right: 20px;\">\n                PKR {{ item.Amount }}\n            </span>\n        </ion-label>\n        <ion-label *ngIf=\"item.IsCredit == 0\">\n            <span  style=\"float:right;color: red;margin-right: 20px;\">\n                PKR {{ item.Amount }}\n            </span>\n        </ion-label>\n  </ion-item> -->\n  <ion-item >\n      <ion-grid>\n          <ion-row>\n            <ion-col *ngIf=\"item.IsCredit === 0\" text-center>\n                -\n            </ion-col>\n            <ion-col (click)=\"editPayment(item)\" *ngIf=\"item.IsCredit === 1\" text-center>\n               <span style=\"color: green;\">{{item.Amount | currency:currency:true:\"1.2\"}}</span>\n             </ion-col>\n             <ion-col text-center style=\"color:white;background-color: #3880ff;\">\n                 {{item.Date}}\n               </ion-col>\n               <ion-col (click)=\"itemClick(item)\" *ngIf=\"item.IsCredit === 0\" text-center>\n                   <span style=\"color:crimson\">{{item.Amount | currency:currency:true:\"1.2\"}}</span>\n                 </ion-col>\n                 <ion-col *ngIf=\"item.IsCredit === 1\" text-center>\n                  -\n                  </ion-col>\n          </ion-row>\n      </ion-grid>\n   </ion-item>\n   <ion-item  *ngIf=\"item.Remarks.length > 0\"  (click)=\"itemClick(item)\">\n     <ion-grid>\n       <ion-row>\n         <span  style=\"text-align:left;padding-left: 15px;\">\n           <span style=\"font-weight: bold;\">Remarks: </span>{{item.Remarks}}\n         </span>\n         \n     </ion-row>\n     </ion-grid>\n   </ion-item>\n   \n</ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/ledgers-vendors/ledgers-vendors-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ledgers-vendors/ledgers-vendors-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: LedgersVendorsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgersVendorsPageRoutingModule", function() { return LedgersVendorsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ledgers_vendors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ledgers-vendors.page */ "./src/app/pages/ledgers-vendors/ledgers-vendors.page.ts");




const routes = [
    {
        path: '',
        component: _ledgers_vendors_page__WEBPACK_IMPORTED_MODULE_3__["LedgersVendorsPage"]
    }
];
let LedgersVendorsPageRoutingModule = class LedgersVendorsPageRoutingModule {
};
LedgersVendorsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LedgersVendorsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/ledgers-vendors/ledgers-vendors.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ledgers-vendors/ledgers-vendors.module.ts ***!
  \*****************************************************************/
/*! exports provided: LedgersVendorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgersVendorsPageModule", function() { return LedgersVendorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ledgers_vendors_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ledgers-vendors-routing.module */ "./src/app/pages/ledgers-vendors/ledgers-vendors-routing.module.ts");
/* harmony import */ var _ledgers_vendors_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ledgers-vendors.page */ "./src/app/pages/ledgers-vendors/ledgers-vendors.page.ts");












let LedgersVendorsPageModule = class LedgersVendorsPageModule {
};
LedgersVendorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _ledgers_vendors_routing_module__WEBPACK_IMPORTED_MODULE_9__["LedgersVendorsPageRoutingModule"]
        ],
        providers: [
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"]
        ],
        declarations: [_ledgers_vendors_page__WEBPACK_IMPORTED_MODULE_10__["LedgersVendorsPage"]]
    })
], LedgersVendorsPageModule);



/***/ }),

/***/ "./src/app/pages/ledgers-vendors/ledgers-vendors.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ledgers-vendors/ledgers-vendors.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr.new1 {\n  border-top: 1px solid white;\n}\n\n.iconSize {\n  font-size: x-large;\n}\n\n.txtSize {\n  font-size: large;\n}\n\nhr.new2 {\n  border-top: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVkZ2Vycy12ZW5kb3JzL0M6XFx3YW1wNjRcXHd3d1xcaW52b2ljZS5way9zcmNcXGFwcFxccGFnZXNcXGxlZGdlcnMtdmVuZG9yc1xcbGVkZ2Vycy12ZW5kb3JzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVkZ2Vycy12ZW5kb3JzL2xlZGdlcnMtdmVuZG9ycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBRENFO0VBQ0Usa0JBQUE7QUNFSjs7QURBRTtFQUNFLGdCQUFBO0FDR0o7O0FEREU7RUFDRSwyQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVkZ2Vycy12ZW5kb3JzL2xlZGdlcnMtdmVuZG9ycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoci5uZXcxIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcbiAgLmljb25TaXplIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcbiAgLnR4dFNpemUge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcbiAgaHIubmV3MiB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgfSIsImhyLm5ldzEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5pY29uU2l6ZSB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuLnR4dFNpemUge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5oci5uZXcyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ledgers-vendors/ledgers-vendors.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ledgers-vendors/ledgers-vendors.page.ts ***!
  \***************************************************************/
/*! exports provided: LedgersVendorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgersVendorsPage", function() { return LedgersVendorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");















pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_13___default.a.pdfMake.vfs;
let LedgersVendorsPage = class LedgersVendorsPage {
    constructor(router, syncService, databaseService, loadingCtrl, callnumber, datePipe, socialSharing, file, fileOpener, storage, plt, events) {
        this.router = router;
        this.syncService = syncService;
        this.databaseService = databaseService;
        this.loadingCtrl = loadingCtrl;
        this.callnumber = callnumber;
        this.datePipe = datePipe;
        this.socialSharing = socialSharing;
        this.file = file;
        this.fileOpener = fileOpener;
        this.storage = storage;
        this.plt = plt;
        this.events = events;
        this.ledger = [];
        this.vendors = [];
        this.Balance = 0;
        this.totalCredit = 0;
        this.totalDebit = 0;
        this.total = 0;
        this.client = {
            ID: 0,
            Name: '',
            Address: '',
            Phone: '',
            Sync: 0
        };
        this.company = '';
        this.currency = '';
        this.pdfObj = null;
        events.subscribe('refreshClientLedger', (user, time) => {
            alert('yes');
            this.getLedger();
        });
        this.storage.get('COM').then((val) => {
            this.company = val;
        });
        storage.get('currency').then((val) => {
            if (val !== null) {
                this.currency = val.toString();
                debugger;
            }
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"])).subscribe((route) => {
            // this.getDataNativeHttp();
            console.log('Route: ' + route.url);
            const a = this.databaseService.getupdatevendorLedger();
            debugger;
            if (route.url === '/ledgers-vendors' && a === 1) {
                this.getLedger();
            }
        });
        if (this.ledger.length === 0) {
            debugger;
            this.getLedger();
        }
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.client !== 'undefined') {
                this.client = this.router.getCurrentNavigation().extras.state.client;
                // this.getLedger();
            }
        }
    }
    ngOnInit() {
    }
    back() {
        this.databaseService.setupdatevendors(1);
        this.router.navigate(['/menu/vendors']);
    }
    addPayment() {
        debugger;
        // event.stopPropagation();
        const navigationExtras = {
            state: {
                Cid: this.client.ID,
                Name: this.client.Name,
                Sync: this.client.Sync,
                url: this.router.url,
            }
        };
        this.router.navigate(['payment-info-vendors'], navigationExtras);
        debugger;
    }
    editVendor() {
        debugger;
        this.syncService.getVendor(this.client.ID);
    }
    itemClick(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            item;
            if (item.POID !== null) {
                this.syncService.getPO(item.POID);
            }
            debugger;
        });
    }
    call() {
        const number = this.client.Phone;
        this.callnumber.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    getLedger() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            this.totalDebit = 0;
            this.totalCredit = 0;
            this.syncService.getVendorLedger(this.client.ID).then((data) => {
                debugger;
                this.ledger = data;
                for (let i = 0; i < this.ledger.length; i++) {
                    if (this.ledger[i].IsCredit === 0) {
                        this.totalDebit = this.totalDebit + this.ledger[i].Amount;
                    }
                    else {
                        this.totalCredit = this.totalCredit + this.ledger[i].Amount;
                    }
                    this.ledger[i].Date = this.datePipe.transform(this.ledger[i].Date, 'dd MMM yyyy');
                }
                // this.total = this.totalCredit - this.totalDebit;
                this.total = this.totalDebit - this.totalCredit;
                loading.dismiss();
            });
        });
    }
    addPO() {
        this.router.navigate(['addpurchasedorder']);
    }
    share() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            debugger;
            this.socialSharing.share('message').then(() => {
                loading.dismiss();
            }).catch(() => {
            });
        });
    }
    Sms() {
        const number = this.client.Phone;
        this.socialSharing.shareViaSMS('', number).then(() => {
        }).catch(() => {
        });
    }
    createPdf() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = [];
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const itemss = [];
            for (let i = 0; i < this.ledger.length; i++) {
                if (this.ledger[i].IsCredit === 1) {
                    debugger;
                    itemss.push([
                        { text: this.ledger[i].Amount.toString(), fontSize: 7, color: '#000000' },
                        { text: this.ledger[i].Date.toString(), fontSize: 7, color: '#000000' },
                        { text: '-', fontSize: 7, color: '#000000' }
                    ]);
                }
                else {
                    itemss.push([
                        { text: '-', fontSize: 7, color: '#000000' },
                        { text: this.ledger[i].Date.toString(), fontSize: 7, color: '#000000' },
                        { text: this.ledger[i].Amount.toString(), fontSize: 7, color: '#000000' },
                    ]);
                }
            }
            debugger;
            console.log(itemss);
            let total;
            if (this.totalCredit > this.totalDebit) {
                total = [
                    { text: 'Total', fontSize: 8 },
                    { text: 'PKR ' + this.total.toLocaleString(), fontSize: 8, color: '#ff0000', alignment: 'right' }
                ];
            }
            else {
                total = [
                    { text: 'Total', fontSize: 8 },
                    { text: 'PKR ' + this.total.toLocaleString(), fontSize: 8, color: '#0a650a', alignment: 'right' }
                ];
            }
            var docDefinition = {
                pageSize: {
                    width: 226.77192,
                    height: 'auto'
                },
                pageMargins: [10, 15, 10, 15],
                content: [
                    { text: this.company, bold: true, alignment: 'center', style: 'subheader' },
                    { text: 'Vendor Ledger', style: 'header', fontSize: 10, alignment: 'left', color: '#ff0000' },
                    // { text: this.datePipe.transform(new Date().toString(), 'dd MMM yyyy h:mm a'), alignment: 'right' },
                    { text: this.client.Name, bold: true, fontSize: 8 },
                    { text: this.client.Address, fontSize: 6 },
                    {
                        margin: [0, 10, 0, 0],
                        style: 'totalsTable',
                        table: {
                            widths: [100, 100],
                            body: [
                                [
                                    { text: 'Phone', fontSize: 8 },
                                    { text: this.client.Phone, fontSize: 8, alignment: 'right' }
                                ],
                                total,
                                // [
                                //     { text: 'Total', fontSize: 6 },
                                //     { text: this.total, fontSize: 8, color: '#ff0000', alignment: 'right'}
                                // ],
                                [
                                    { text: 'PKR ' + this.totalCredit.toLocaleString(), color: '#0a650a', fontSize: 8 },
                                    { text: 'PKR ' + this.totalDebit.toLocaleString(), color: '#ff0000', fontSize: 8, alignment: 'right' }
                                ],
                            ]
                        },
                        layout: 'noBorders'
                    },
                    {
                        margin: [0, 10, 0, 0],
                        text: [
                            { text: 'Credit(+)  ', style: 'subheader', fontSize: 8, color: '#000000' },
                            { text: '                          Date', style: 'subheader', fontSize: 8, color: '#000000' },
                            { text: '                                  Debit(-)', style: 'subheader', fontSize: 8, color: '#000000' },
                        ]
                    },
                    {
                        margin: [0, 5, 0, 0],
                        style: 'totalsTable',
                        table: {
                            widths: [70, 90, 70],
                            body: itemss
                        },
                        layout: 'noBorders'
                    }
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                    },
                    subheader: {
                        fontSize: 10,
                        bold: true,
                        // margin: [0, 15, 0, 0],
                        color: '#000000'
                    },
                    story: {
                        italic: true,
                        alignment: 'center',
                        width: '50%',
                    },
                    backgroundcolor: ''
                }
            };
            this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_12___default.a.createPdf(docDefinition);
            this.downloadPdf(loading);
        });
    }
    downloadPdf(loading) {
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer((buffer) => {
                // var blob = new Blob([buffer], { type: 'application/pdf' });
                var utf8 = new Uint8Array(buffer);
                var binaryArray = utf8.buffer;
                var blob = new Blob([binaryArray], { type: 'application/pdf' });
                const a = new Date().getTime().toString();
                this.file.writeFile(this.file.dataDirectory, a + '.pdf', blob).then(fileEntry => {
                    //  this.fileOpener.open(this.file.dataDirectory + 'Invoice.pdf', 'application/pdf');        
                });
                this.socialSharing.share("test", null, this.file.dataDirectory + a + '.pdf', null).then(() => {
                    loading.dismiss();
                    console.log('social share');
                    console.log(this.file.dataDirectory);
                }).catch(() => {
                });
                debugger;
                // Save the PDF to the data Directory of our App
                // this.file.writeFile(this.file.dataDirectory, 'Invoice4.pdf', blob).then(fileEntry => {
                //  this.fileOpener.open(this.file.dataDirectory + 'Invoice.pdf', 'application/pdf');        
                // });
            });
        }
        else {
            // On a browser simply use download!
            this.pdfObj.download();
        }
    }
    editPayment(item) {
        const navigationExtras = {
            state: {
                ID: item.ID,
                Amount: item.Amount,
                Remarks: item.Remarks,
                Cid: this.client.ID,
                Name: this.client.Name,
                Sync: this.client.Sync,
                LedgerSync: item.Sync,
                url: 'ledgers-vendors',
            }
        };
        this.router.navigate(['payment-info-vendors'], navigationExtras);
    }
};
LedgersVendorsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_14__["FileOpener"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"] }
];
LedgersVendorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ledgers-vendors',
        template: __webpack_require__(/*! raw-loader!./ledgers-vendors.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ledgers-vendors/ledgers-vendors.page.html"),
        styles: [__webpack_require__(/*! ./ledgers-vendors.page.scss */ "./src/app/pages/ledgers-vendors/ledgers-vendors.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_14__["FileOpener"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"]])
], LedgersVendorsPage);



/***/ })

}]);
//# sourceMappingURL=pages-ledgers-vendors-ledgers-vendors-module-es2015.js.map