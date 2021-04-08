(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ledger-ledger-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ledger/ledger.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ledger/ledger.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n      <ion-title>Client Ledger</ion-title>\n      <ion-icon  class=\"iconSize\" size=\"medium\" slot=\"end\" padding (click)=\"createPdf()\" name=\"share\"></ion-icon>\n      <ion-icon class=\"iconSize\" size=\"medium\" slot=\"end\" name=\"cash\" (click)=\"addPayment()\"></ion-icon> \n      <ion-icon class=\"iconSize\" padding size=\"medium\"  slot=\"end\" name=\"document\" (click)=\"addInvoice()\"></ion-icon> \n    </ion-toolbar>\n    <ion-toolbar no-padding color=\"primary\">\n          <ion-avatar slot=\"start\" >\n              <img src=\"assets/personIcon.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2 class=\"txtSize\" text-capitalize>{{client.Fname}} {{client.Lname}}</h2>\n            <p>{{ client.Shop }} ,{{ client.BillingAddress }} ,{{ client.City }}</p>\n          </ion-label>\n          \n        <!-- <p  style=\"text-align:left;padding-left: 15px;\">\n              {{client.Fname}} {{client.Lname}}\n            <span  style=\"float:right;padding-right: 15px;\">\n              PKR {{ totalDebit - totalCredit}}  \n            </span>\n        </p> -->\n    </ion-toolbar>\n    <ion-toolbar *ngIf=\"client.Cell.length > 0\" color=\"primary\">\n        <hr width=\"100%\" no-padding class=\"new1\">\n       \n <p  style=\"text-align:left;padding-left: 15px;\">\n    <ion-icon (click)=\"call()\" no-padding class=\"iconSize\" name=\"call\" style=\"margin-right: 8px;\"></ion-icon>\n    <ion-icon no-padding class=\"iconSize\" size=\"medium\" name=\"mail\" (click)=\"Sms()\" ></ion-icon>\n            <span no-padding class=\"txtSize\" style=\"float:right;padding-right: 15px;\">\n              {{ client.Cell }} \n            </span>\n  </p>\n    </ion-toolbar>\n    <ion-toolbar>\n  <p no-padding class=\"txtSize\" style=\"text-align:left;padding-left: 15px;\">\n     Total\n              <span no-padding *ngIf=\"totalCredit <= totalDebit\" class=\"txtSize\"  style=\"float:right;padding-right: 15px;color: red;\">\n                {{ total | currency:currency:true:\"1.2\"}} \n              </span>\n              <span *ngIf=\"totalCredit > totalDebit\" no-padding class=\"txtSize\"  style=\"float:right;padding-right: 15px;color: green;\">\n                   {{ total | currency:currency:true:\"1.2\"}} \n                </span>\n    </p>\n    <hr width=\"100%\" style=\"border-top:1px solid black\">\n    <p no-padding class=\"txtSize\" style=\"text-align:left;padding-left: 15px; color:green;\">\n       {{totalCredit | currency:currency:true:\"1.2\"}}\n                 <span class=\"txtSize\"  style=\"float:right;padding-right: 15px;color: red;\">\n                  {{ totalDebit | currency:currency:true:\"1.2\" }} \n                 </span>\n       </p>\n       <hr no-padding width=\"100%\" style=\"border-top:1px solid black;\">\n       <ion-grid>\n         <ion-row>\n           <ion-col  text-center>\n              Credit(+)\n           </ion-col>\n           <ion-col text-center>\n             Date\n           </ion-col>\n           <ion-col text-center>\n              Debit(-)\n           </ion-col>\n         </ion-row>\n       </ion-grid>\n       \n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <!-- <ion-item lines=\"none\">\n        <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-item no-padding lines=\"none\">\n                    <ion-label text-start style=\"font-weight: bold;\"> Date\n                    </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item lines=\"none\">\n                    <ion-label text-end style=\"font-weight: bold;\">Amount</ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-item> -->\n  <ion-list *ngFor=\"let item of ledger\">\n    <!-- <ion-item>\n        <ion-label>\n            <h2 text-capitalize>{{ item.Date }}</h2>\n          </ion-label>\n          <ion-label *ngIf=\"item.IsCredit == 1\">\n              <span  style=\"float:right;color: green;margin-right: 20px;\">\n                  PKR {{ item.Amount }}\n              </span>\n          </ion-label>\n          <ion-label *ngIf=\"item.IsCredit == 0\">\n              <span  style=\"float:right;color: red;margin-right: 20px;\">\n                  PKR {{ item.Amount }}\n              </span>\n          </ion-label>\n    </ion-item> -->\n    <ion-item >\n       <ion-grid>\n           <ion-row>\n             <ion-col *ngIf=\"item.IsCredit === 0\" text-center>\n                 -\n             </ion-col>\n             <ion-col *ngIf=\"item.IsCredit === 1\" text-center>\n                <span (click)=\"editPayment(item)\" style=\"color: green;\">{{item.Amount | currency:currency:true:\"1.2\"}}</span>\n              </ion-col>\n              <ion-col text-center style=\"color:white;background-color: #3880ff;\">\n                  {{item.Date}}\n                </ion-col>\n                <ion-col (click)=\"itemClick(item)\" *ngIf=\"item.IsCredit === 0\" text-center>\n                    <span style=\"color:crimson\">{{item.Amount | currency:currency:true:\"1.2\"}}</span>\n                  </ion-col>\n                  <ion-col *ngIf=\"item.IsCredit === 1\" text-center>\n                   -\n                   </ion-col>\n           </ion-row>\n       </ion-grid>\n    </ion-item>\n    <ion-item *ngIf=\"item.Remarks.length > 0\" (click)=\"itemClick(item)\">\n      <ion-grid>\n        <ion-row>\n          <span  style=\"text-align:left;padding-left: 15px;\">\n            <span style=\"font-weight: bold;\">Remarks: </span>{{item.Remarks}}\n          </span>\n          \n      </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/ledger/ledger-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/ledger/ledger-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LedgerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerPageRoutingModule", function() { return LedgerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ledger_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ledger.page */ "./src/app/pages/ledger/ledger.page.ts");




var routes = [
    {
        path: '',
        component: _ledger_page__WEBPACK_IMPORTED_MODULE_3__["LedgerPage"]
    }
];
var LedgerPageRoutingModule = /** @class */ (function () {
    function LedgerPageRoutingModule() {
    }
    LedgerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LedgerPageRoutingModule);
    return LedgerPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ledger/ledger.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/ledger/ledger.module.ts ***!
  \***********************************************/
/*! exports provided: LedgerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerPageModule", function() { return LedgerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ledger_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ledger-routing.module */ "./src/app/pages/ledger/ledger-routing.module.ts");
/* harmony import */ var _ledger_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ledger.page */ "./src/app/pages/ledger/ledger.page.ts");












var LedgerPageModule = /** @class */ (function () {
    function LedgerPageModule() {
    }
    LedgerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _ledger_routing_module__WEBPACK_IMPORTED_MODULE_9__["LedgerPageRoutingModule"]
            ],
            providers: [
                _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
                _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"]
            ],
            declarations: [_ledger_page__WEBPACK_IMPORTED_MODULE_10__["LedgerPage"]]
        })
    ], LedgerPageModule);
    return LedgerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ledger/ledger.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/ledger/ledger.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr.new1 {\n  border-top: 1px solid white;\n}\n\n.iconSize {\n  font-size: x-large;\n}\n\n.txtSize {\n  font-size: large;\n}\n\nhr.new2 {\n  border-top: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVkZ2VyL0M6XFx3YW1wNjRcXHd3d1xcaW52b2ljZS5way9zcmNcXGFwcFxccGFnZXNcXGxlZGdlclxcbGVkZ2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGVkZ2VyL2xlZGdlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKOztBRENFO0VBQ0Usa0JBQUE7QUNFSjs7QURBRTtFQUNFLGdCQUFBO0FDR0o7O0FEREU7RUFDRSwyQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGVkZ2VyL2xlZGdlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoci5uZXcxIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcbiAgLmljb25TaXplIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcbiAgLnR4dFNpemUge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcbiAgaHIubmV3MiB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgfSIsImhyLm5ldzEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG59XG5cbi5pY29uU2l6ZSB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuLnR4dFNpemUge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5oci5uZXcyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ledger/ledger.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/ledger/ledger.page.ts ***!
  \*********************************************/
/*! exports provided: LedgerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerPage", function() { return LedgerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");














pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default.a.pdfMake.vfs;
var LedgerPage = /** @class */ (function () {
    function LedgerPage(router, syncService, databaseService, loadingCtrl, callnumber, datePipe, socialSharing, file, fileOpener, storage, plt, events) {
        var _this = this;
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
        this.total = 0;
        this.totalCredit = 0;
        this.totalDebit = 0;
        this.client = {
            Cid: 0,
            Fname: '',
            Lname: '',
            BillingAddress: '',
            Shop: '',
            Cell: '',
            City: '',
            Balance: 0,
            Sync: 0
        };
        this.company = '';
        this.currency = '';
        this.pdfObj = null;
        this.businessName = '';
        this.events.subscribe('refreshLedger', function (user, time) {
            // alert('a')
            _this.getLedger();
        });
        // if (databaseService.getLedgerSubscription() === 0) {
        //   // alert(databaseService.getLedgerSubscription())
        //   databaseService.setLedgerSubscription(1);
        // }
        this.storage.get('COM').then(function (val) {
            _this.company = val;
            _this.businessName = val;
        });
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
        //     const a = this.databaseService.getupdateclientLedger();
        //     ;
        //     if(route.url === '/ledger' && a === 1) {
        //       this.getLedger();
        //     }
        // });
        if (this.ledger.length === 0) {
            ;
            this.getLedger();
        }
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.client !== 'undefined') {
                this.client = this.router.getCurrentNavigation().extras.state.client;
                // this.getLedger();
            }
        }
    }
    LedgerPage.prototype.ngOnInit = function () {
        this.getClients();
    };
    LedgerPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('refreshLedger');
    };
    LedgerPage.prototype.getClients = function () {
        this.syncService.getAllClients().then(function (data) {
            console.log(data);
            ;
        });
    };
    LedgerPage.prototype.back = function () {
        this.databaseService.setupdateclients(1);
        this.router.navigate(['/menu/clients']);
    };
    LedgerPage.prototype.itemClick = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                item;
                if (item.InvoiceID !== null) {
                    this.syncService.getInvoice(item.InvoiceID, '/menu/clients');
                }
                return [2 /*return*/];
            });
        });
    };
    LedgerPage.prototype.addPayment = function () {
        event.stopPropagation();
        var navigationExtras = {
            state: {
                Cid: this.client.Cid,
                Name: this.client.Fname + ' ' + this.client.Lname,
                Sync: this.client.Sync,
                url: this.router.url,
                Client: this.client
            }
        };
        this.router.navigate(['payment-info'], navigationExtras);
    };
    // editClient() {
    //     this.syncService.getClient(this.client.Cid,'');
    // }
    LedgerPage.prototype.call = function () {
        var number = this.client.Cell;
        this.callnumber.callNumber(number, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    LedgerPage.prototype.getLedger = function () {
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
                        this.totalDebit = 0;
                        this.totalCredit = 0;
                        this.syncService.getClientLedger(this.client.Cid).then(function (data) {
                            _this.ledger = data;
                            for (var i = 0; i < _this.ledger.length; i++) {
                                if (_this.ledger[i].IsCredit === 0) {
                                    _this.totalDebit = _this.totalDebit + _this.ledger[i].Amount;
                                }
                                else {
                                    _this.totalCredit = _this.totalCredit + _this.ledger[i].Amount;
                                }
                                // const d = new Date(Date.parse(this.ledger[i].Date));
                                //alert(d);
                                // this.ledger[i].Date =  this.datePipe.transform('2019 12 30', 'dd MMM yyyy');
                                var z = new Date(parseInt(_this.ledger[i].Date) * 1000).toString();
                                _this.ledger[i].Date = _this.datePipe.transform(z, 'dd MMM yyyy');
                            }
                            // this.total = this.totalCredit - this.totalDebit;
                            _this.total = _this.totalDebit - _this.totalCredit;
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LedgerPage.prototype.addInvoice = function () {
        this.router.navigate(['addinvoice']);
    };
    LedgerPage.prototype.share = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.socialSharing.share('message').then(function () {
                            loading.dismiss();
                        }).catch(function () {
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LedgerPage.prototype.Sms = function () {
        if (this.total === 0) {
            var number = this.client.Cell;
            var message = 'From - ' + this.businessName + '\nMob: 03007491812' +
                '\nYour balance is clear. Thank you for your cooperation';
            this.socialSharing.shareViaSMS(message, number).then(function () {
            }).catch(function () {
            });
        }
        else {
            var number = this.client.Cell;
            var message = 'From - ' + this.businessName + '\nMob: 03007491812' +
                '\nYour Payment Of - ' + this.currency + this.total + ' is Pending. Please Make Payment As Soon As Possible. Thank You';
            this.socialSharing.shareViaSMS(message, number).then(function () {
            }).catch(function () {
            });
        }
    };
    LedgerPage.prototype.createPdf = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items, loading, itemss, i, total, docDefinition;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = [];
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        itemss = [];
                        for (i = 0; i < this.ledger.length; i++) {
                            if (this.ledger[i].IsCredit === 1) {
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
                        console.log(itemss);
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
                        docDefinition = {
                            pageSize: {
                                width: 226.77192,
                                height: 'auto'
                            },
                            pageMargins: [10, 15, 10, 15],
                            content: [
                                { text: this.company, bold: true, alignment: 'center', style: 'subheader' },
                                { text: 'Client Ledger', style: 'header', fontSize: 10, alignment: 'left', color: '#ff0000' },
                                // { text: this.datePipe.transform(new Date().toString(), 'dd MMM yyyy h:mm a'), alignment: 'right' },
                                { text: this.client.Fname + ' ' + this.client.Lname, bold: true, fontSize: 8 },
                                { text: this.client.Shop + ',' + this.client.BillingAddress + ',' + this.client.City, fontSize: 6 },
                                {
                                    margin: [0, 10, 0, 0],
                                    style: 'totalsTable',
                                    table: {
                                        widths: [100, 100],
                                        body: [
                                            [
                                                { text: 'Phone', fontSize: 8 },
                                                { text: this.client.Cell, fontSize: 8, alignment: 'right' }
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
                        this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.createPdf(docDefinition);
                        this.downloadPdf(loading);
                        return [2 /*return*/];
                }
            });
        });
    };
    LedgerPage.prototype.downloadPdf = function (loading) {
        var _this = this;
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer(function (buffer) {
                // var blob = new Blob([buffer], { type: 'application/pdf' });
                var utf8 = new Uint8Array(buffer);
                var binaryArray = utf8.buffer;
                var blob = new Blob([binaryArray], { type: 'application/pdf' });
                var a = new Date().getTime().toString();
                _this.file.writeFile(_this.file.dataDirectory, a + '.pdf', blob).then(function (fileEntry) {
                    //  this.fileOpener.open(this.file.dataDirectory + 'Invoice.pdf', 'application/pdf');        
                });
                _this.socialSharing.share("test", null, _this.file.dataDirectory + a + '.pdf', null).then(function () {
                    loading.dismiss();
                    console.log('social share');
                    console.log(_this.file.dataDirectory);
                }).catch(function () {
                });
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
    };
    LedgerPage.prototype.editPayment = function (item) {
        var navigationExtras = {
            state: {
                ID: item.ID,
                Cid: this.client.Cid,
                Date: item.Date,
                Amount: item.Amount,
                Name: this.client.Fname + ' ' + this.client.Lname,
                LedgerSync: item.Sync,
                Sync: this.client.Sync,
                Remarks: item.Remarks,
                url: 'ledger'
            }
        };
        this.router.navigate(['payment-info'], navigationExtras);
    };
    LedgerPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__["FileOpener"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"] }
    ]; };
    LedgerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ledger',
            template: __webpack_require__(/*! raw-loader!./ledger.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ledger/ledger.page.html"),
            styles: [__webpack_require__(/*! ./ledger.page.scss */ "./src/app/pages/ledger/ledger.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__["FileOpener"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"]])
    ], LedgerPage);
    return LedgerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ledger-ledger-module-es5.js.map