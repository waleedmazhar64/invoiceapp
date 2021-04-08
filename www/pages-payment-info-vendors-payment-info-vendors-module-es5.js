(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-info-vendors-payment-info-vendors-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/payment-info-vendors/payment-info-vendors.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/payment-info-vendors/payment-info-vendors.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n    <ion-title>Demand Draft</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n          <ion-item lines=\"none\" >\n              <ion-grid no-padding>\n                    <ion-row>\n                      <ion-col size=\"3\">\n                          <ion-label >\n                              <h3>Amount:</h3>\n                            </ion-label>\n                      </ion-col>\n                      <ion-col size=\"9\">\n                          <span no-padding style=\"float: right;margin-right:12px;\">\n                              <ion-input no-padding placeholder=\"Amount\" [(ngModel)]=\"Amount\" type=\"number\"  ></ion-input>\n                            </span>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n              </ion-item >\n              <ion-item lines=\"none\" >\n                  <ion-grid no-padding>\n                        <ion-row>\n                          <ion-col>\n                              <ion-label size=\"3\">\n                                  <h2>Remarks:</h2>\n                                </ion-label>\n                          </ion-col>\n                          <ion-col size=\"9\" >\n                              <span no-padding style=\"float: right;margin-right:12px;\">\n                                  <!-- <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.regular_price\"></ion-input> -->\n                                  <ion-input no-padding placeholder=\"Remarks\"  [(ngModel)]=\"Remarks\" ></ion-input>\n                                </span>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                  </ion-item >\n                  <ion-item lines=\"none\">\n                      <ion-label text-center>\n                          <ion-button (click)=\"addpayment()\"  text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"primary\" style=\"width: auto;\">Send Payment</ion-button>\n                      </ion-label>\n                  </ion-item>\n  </div>\n   \n\n <!-- <ngx-datatable\n \n [rows]=\"data\"\n [ngClass]=\"style\"\n [rowHeight]=\"'auto'\"\n [headerHeight]=\"'auto'\"\n [columnMode]=\"'force'\"\n (activate)=\"onActivate($event)\"\n >\n \n    <ngx-datatable-column name=\"No\">\n      <ng-template let-rowIndex=\"rowIndex\">{{rowIndex}} </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Date\" padding></ngx-datatable-column>\n    <ngx-datatable-column name=\"Amount\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Actions\">\n        <ng-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n            <ion-button (click)=\"open(rowIndex,row)\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"danger\" style=\"width: auto;\">Delete</ion-button>\n         </ng-template>\n    </ngx-datatable-column>\n \n\n    \n</ngx-datatable> -->\n<!-- <ion-item lines=\"none\">\n<ion-label (click)=\"addnewpayment = true\" text-center style=\"color:royalblue;\"><ion-icon text-center name=\"add\" color=\"primary\"></ion-icon>Add new payment</ion-label>\n</ion-item> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/payment-info-vendors/payment-info-vendors-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/payment-info-vendors/payment-info-vendors-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PaymentInfoVendorsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoVendorsPageRoutingModule", function() { return PaymentInfoVendorsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payment_info_vendors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-info-vendors.page */ "./src/app/pages/payment-info-vendors/payment-info-vendors.page.ts");




var routes = [
    {
        path: '',
        component: _payment_info_vendors_page__WEBPACK_IMPORTED_MODULE_3__["PaymentInfoVendorsPage"]
    }
];
var PaymentInfoVendorsPageRoutingModule = /** @class */ (function () {
    function PaymentInfoVendorsPageRoutingModule() {
    }
    PaymentInfoVendorsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PaymentInfoVendorsPageRoutingModule);
    return PaymentInfoVendorsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/payment-info-vendors/payment-info-vendors.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/payment-info-vendors/payment-info-vendors.module.ts ***!
  \***************************************************************************/
/*! exports provided: PaymentInfoVendorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoVendorsPageModule", function() { return PaymentInfoVendorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_info_vendors_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment-info-vendors-routing.module */ "./src/app/pages/payment-info-vendors/payment-info-vendors-routing.module.ts");
/* harmony import */ var _payment_info_vendors_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment-info-vendors.page */ "./src/app/pages/payment-info-vendors/payment-info-vendors.page.ts");











var PaymentInfoVendorsPageModule = /** @class */ (function () {
    function PaymentInfoVendorsPageModule() {
    }
    PaymentInfoVendorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _payment_info_vendors_routing_module__WEBPACK_IMPORTED_MODULE_8__["PaymentInfoVendorsPageRoutingModule"]
            ],
            providers: [
                _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"],
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["DatePicker"]
            ],
            declarations: [_payment_info_vendors_page__WEBPACK_IMPORTED_MODULE_9__["PaymentInfoVendorsPage"]]
        })
    ], PaymentInfoVendorsPageModule);
    return PaymentInfoVendorsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/payment-info-vendors/payment-info-vendors.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/payment-info-vendors/payment-info-vendors.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtaW5mby12ZW5kb3JzL3BheW1lbnQtaW5mby12ZW5kb3JzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/payment-info-vendors/payment-info-vendors.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/payment-info-vendors/payment-info-vendors.page.ts ***!
  \*************************************************************************/
/*! exports provided: PaymentInfoVendorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoVendorsPage", function() { return PaymentInfoVendorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");













var PaymentInfoVendorsPage = /** @class */ (function () {
    function PaymentInfoVendorsPage(router, datePipe, datePicker, syncService, databaseservice, network, nativeHttp, storage, events) {
        var _this = this;
        this.router = router;
        this.datePipe = datePipe;
        this.datePicker = datePicker;
        this.syncService = syncService;
        this.databaseservice = databaseservice;
        this.network = network;
        this.nativeHttp = nativeHttp;
        this.storage = storage;
        this.events = events;
        this.Cid = 0;
        this.Amount = '';
        this.Remarks = '';
        this.myDate = new Date().toString();
        this.addnewpayment = false;
        this.style = 'bootstrap';
        this.data = [
            {
                no: '1',
                date: '10/29/2019',
                amount: 'softisans',
                pid: ''
                // note: '24'
            }
        ];
        this.vendorSync = 0;
        this.edit = 0;
        this.paymentID = 0;
        this.tempAmount = 0;
        this.ledgerSync = 0;
        this.storage.get('userId').then(function (val) {
            _this.usdId = val;
            console.log(_this.usdId);
        });
        this.myDate = this.datePipe.transform(this.myDate, 'dd MMM yyyy');
        debugger;
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.meta_data !== 'undefined') {
                // debugger;
                this.data = this.router.getCurrentNavigation().extras.state.meta_data;
                this.duepayment = this.router.getCurrentNavigation().extras.state.duepayment;
                this.payed = this.router.getCurrentNavigation().extras.state.payed;
                debugger;
            }
        }
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.Cid !== 'undefined' && this.router.getCurrentNavigation().extras.state.url !== 'ledgers-vendors') {
                // debugger;
                this.edit = 0;
                this.Cid = this.router.getCurrentNavigation().extras.state.Cid;
                this.name = this.router.getCurrentNavigation().extras.state.Name;
                this.vendorSync = this.router.getCurrentNavigation().extras.state.Sync;
                this.url = this.router.getCurrentNavigation().extras.state.url;
                if (this.url === '/ledger-vendors') {
                    this.vendor = this.router.getCurrentNavigation().extras.state.vendor;
                    debugger;
                }
                debugger;
            }
            if (typeof this.router.getCurrentNavigation().extras.state.Cid !== 'undefined' && this.router.getCurrentNavigation().extras.state.url === 'ledgers-vendors') {
                // debugger;
                this.edit = 1;
                this.paymentID = this.router.getCurrentNavigation().extras.state.ID;
                this.ledgerSync = this.router.getCurrentNavigation().extras.state.LedgerSync;
                this.Amount = this.router.getCurrentNavigation().extras.state.Amount;
                this.tempAmount = this.router.getCurrentNavigation().extras.state.Amount;
                this.Remarks = this.router.getCurrentNavigation().extras.state.Remarks;
                this.Cid = this.router.getCurrentNavigation().extras.state.Cid;
                this.name = this.router.getCurrentNavigation().extras.state.Name;
                this.vendorSync = this.router.getCurrentNavigation().extras.state.Sync;
                this.url = this.router.getCurrentNavigation().extras.state.url;
                if (this.url === '/ledger-vendors') {
                    this.vendor = this.router.getCurrentNavigation().extras.state.vendor;
                    debugger;
                }
                debugger;
            }
        }
        if (this.data.length > 0) {
            this.addnewpayment = false;
        }
        else {
            this.addnewpayment = true;
        }
    }
    PaymentInfoVendorsPage.prototype.ngOnInit = function () {
    };
    PaymentInfoVendorsPage.prototype.back = function () {
        debugger;
        // const navigationExtras: NavigationExtras = {
        //   state: {
        //    // user: this.received
        //    meta_data: this.data,
        //    payed:this.payed,
        //    duepayment: this.duepayment
        //   }
        // };
        // this.router.navigate(['addinvoice'], navigationExtras);
        this.router.navigate(['/menu/vendors']);
    };
    PaymentInfoVendorsPage.prototype.onActivate = function (event) {
        if (event.type === 'click') {
            console.log(event.row);
        }
    };
    PaymentInfoVendorsPage.prototype.selectDate = function () {
        var _this = this;
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datePicker.show(options).then(function (date) {
            _this.myDate = _this.datePipe.transform(date, 'dd MMM yyyy');
            // console.log('selected:',this.myDate);
        });
    };
    PaymentInfoVendorsPage.prototype.AddLog = function () {
        var _this = this;
        if (this.edit === 0) {
            if (this.usdId === 1) {
                this.acttype = 'You payed';
            }
            else {
                this.acttype = 'You payed';
            }
        }
        if (this.edit === 1) {
            if (this.usdId === 1) {
                this.acttype = 'You edited payment to';
            }
            else {
                this.acttype = 'You edited payment to';
            }
        }
        //this.name = 'Purchased Order';
        var now = new Date().toString();
        var a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName = 'tblledgervendors';
        this.tblId = this.Cid;
        // this.tblId = this.PO.ID;
        // this.tblId = this.syncService.getUpdatedPOID();
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        debugger;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(function (data) {
            console.log("Log has been added");
            _this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    };
    PaymentInfoVendorsPage.prototype.addpayment = function () {
        var _this = this;
        // alert(this.edit)
        if (this.edit === 0) {
            var num = this.data.length;
            num = num + 1;
            this.myDate;
            debugger;
            this.databaseservice.setupdatevendors(1);
            if (parseInt(this.Amount) > 0) {
                if (this.vendorSync === 1) {
                    this.vendorSync = 2;
                }
                this.vendorSync;
                var now = new Date().toString();
                var a = this.datePipe.transform(now, 'dd MMM yyyy');
                debugger;
                this.syncService.addPaymentVendor(this.Cid, this.vendorSync, a, parseInt(this.Amount), this.Remarks).then(function (data) {
                    data;
                    console.log(data);
                    _this.databaseservice.setupdatevendors(1);
                    _this.databaseservice.setupdatevendorLeger(1);
                    _this.router.navigate([_this.url]);
                    // this.router.navigate(['/menu/vendors']);
                    _this.AddLog();
                    if (_this.network.type === 'none') {
                    }
                    else {
                        _this.syncAddedPayment();
                        // this.AddLog();
                    }
                });
            }
            else {
                alert('Kindly add payment more than 0');
            }
        }
        if (this.edit === 1) {
            var num = this.data.length;
            num = num + 1;
            this.myDate;
            debugger;
            this.databaseservice.setupdatevendors(1);
            if (parseInt(this.Amount) > 0) {
                if (this.vendorSync === 1) {
                    this.vendorSync = 2;
                }
                if (this.ledgerSync === 1) {
                    this.ledgerSync = 2;
                }
                this.vendorSync;
                var now = new Date().toString();
                var a = this.datePipe.transform(now, 'dd MMM yyyy');
                debugger;
                // alert('Old = ' + this.tempAmount + '\nnew ' + this.Amount + '\nLedgerSync ' + this.ledgerSync)
                this.syncService.editPaymentVendor(this.Cid, this.vendorSync, a, parseInt(this.Amount), this.Remarks, this.paymentID, this.tempAmount, this.ledgerSync).then(function (data) {
                    data;
                    console.log(data);
                    _this.databaseservice.setupdatevendors(1);
                    _this.databaseservice.setupdatevendorLeger(1);
                    _this.router.navigate([_this.url]);
                    // this.router.navigate(['/menu/vendors']);
                    _this.AddLog();
                    if (_this.network.type === 'none') {
                    }
                    else {
                        _this.syncUpdatedPayment();
                        // this.AddLog();
                    }
                });
            }
            else {
                alert('Kindly add payment more than 0');
            }
        }
        // if (this.payment && this.payment !== null && this.payment >0) {
        //   const obj= {
        //   no: num.toString(),
        //   date: this.myDate,
        //   amount: this.payment,
        //   pid:'98'
        //   }
        //   this.data.push(obj);
        //   this.data = [...this.data];
        //   this.addnewpayment = false;
        //   this.payed = this.payed + this.payment;
        //   this.duepayment = this.duepayment -this.payment;
        //   const a = parseFloat(this.payed.toString()).toFixed(2);
        //   const b =parseFloat(this.duepayment.toString()).toFixed(2);
        //   this.payed = parseFloat(a);
        //   this.duepayment = parseFloat(b);
        //   this.payment = '';
        //   debugger;
        // } else {
        //   alert("Kindly add correct Amount");
        // }
    };
    PaymentInfoVendorsPage.prototype.syncAddedPayment = function () {
        var _this = this;
        this.syncService.syncAddedLedgerVendor().then(function (data) {
            if (data.length > 0) {
                var IDs_1 = [];
                for (var i = 0; i < data.length; i++) {
                    IDs_1[i] = data[i].ID;
                }
                var url = _this.databaseservice.getURL();
                debugger;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncAddedLedgerVendor',
                    "Payments": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { }))
                    .subscribe(function (data1) {
                    // alert('success' + data1);
                    console.log('Native data:', data1);
                    var g = JSON.parse(data1.data);
                    if (g.success === 1) {
                        // alert('success');
                        debugger;
                    }
                    else {
                        // alert('failed');
                    }
                    _this.syncService.updateSyncedAddedLedgerVendors(IDs_1).then(function (data) {
                        debugger;
                    }).then(function () {
                        debugger;
                        _this.syncService.syncUpdatedVendors().then(function (data) {
                            if (data.length > 0) {
                                var IDs_2 = [];
                                for (var i = 0; i < data.length; i++) {
                                    IDs_2[i] = data[i].ID;
                                }
                                var url_1 = _this.databaseservice.getURL();
                                debugger;
                                _this.nativeHttp.setDataSerializer("json");
                                var nativeCall_1 = _this.nativeHttp.post(url_1, {
                                    'Name': 'syncUpdatedVendors',
                                    "Vendors": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(nativeCall_1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { }))
                                    .subscribe(function (data) {
                                    console.log('Native data:', data);
                                    var g = JSON.parse(data.data);
                                    if (g.success === 1) {
                                        // alert('success');
                                        _this.syncService.updateSyncedVendors(IDs_2).then(function (data) {
                                        });
                                    }
                                    else {
                                        // alert('failed');
                                    }
                                    // this.initializeItems();
                                }, function (err) {
                                    console.log('JS call error', err);
                                    var error = JSON.parse(err.error);
                                    // alert(error.message);
                                    console.log('Native data:', JSON.parse(error));
                                });
                                debugger;
                            }
                        });
                    });
                    // this.initializeItems();
                }, function (err) {
                    console.log('JS call error', err);
                    var error = JSON.parse(err.error);
                    // alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
                debugger;
            }
        });
    };
    PaymentInfoVendorsPage.prototype.syncUpdatedPayment = function () {
        var _this = this;
        this.syncService.syncUpdatedLedgerVendor().then(function (data) {
            if (data.length > 0) {
                var IDs_3 = [];
                for (var i = 0; i < data.length; i++) {
                    IDs_3[i] = data[i].ID;
                }
                var url = _this.databaseservice.getURL();
                debugger;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncUpdatedLedgerVendor',
                    "Payments": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { }))
                    .subscribe(function (data1) {
                    // alert('success' + data1);
                    console.log('Native data:', data1);
                    var g = JSON.parse(data1.data);
                    if (g.success === 1) {
                        // alert('success');
                        debugger;
                    }
                    else {
                        // alert('failed');
                    }
                    _this.syncService.updateSyncedAddedLedgerVendors(IDs_3).then(function (data) {
                        debugger;
                    }).then(function () {
                        debugger;
                        _this.syncService.syncUpdatedVendors().then(function (data) {
                            if (data.length > 0) {
                                var IDs_4 = [];
                                for (var i = 0; i < data.length; i++) {
                                    IDs_4[i] = data[i].ID;
                                }
                                var url_2 = _this.databaseservice.getURL();
                                debugger;
                                _this.nativeHttp.setDataSerializer("json");
                                var nativeCall_2 = _this.nativeHttp.post(url_2, {
                                    'Name': 'syncUpdatedVendors',
                                    "Vendors": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(nativeCall_2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { }))
                                    .subscribe(function (data) {
                                    console.log('Native data:', data);
                                    var g = JSON.parse(data.data);
                                    if (g.success === 1) {
                                        // alert('success');
                                        _this.syncService.updateSyncedVendors(IDs_4).then(function (data) {
                                        });
                                    }
                                    else {
                                        // alert('failed');
                                    }
                                    // this.initializeItems();
                                }, function (err) {
                                    console.log('JS call error', err);
                                    var error = JSON.parse(err.error);
                                    // alert(error.message);
                                    console.log('Native data:', JSON.parse(error));
                                });
                                debugger;
                            }
                        });
                    });
                    // this.initializeItems();
                }, function (err) {
                    console.log('JS call error', err);
                    var error = JSON.parse(err.error);
                    // alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
                debugger;
            }
        });
    };
    PaymentInfoVendorsPage.prototype.open = function (row, value) {
        debugger;
        this.data.splice(row, 1);
        this.data = this.data.slice();
        this.payed = this.payed - value.amount;
        this.duepayment = this.duepayment + value.amount;
        var a = parseFloat(this.payed.toString()).toFixed(2);
        var b = parseFloat(this.duepayment.toString()).toFixed(2);
        this.payed = parseFloat(a);
        this.duepayment = parseFloat(b);
        console.log(value);
        console.log(row);
    };
    PaymentInfoVendorsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["DatePicker"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_5__["SyncService"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Events"] }
    ]; };
    PaymentInfoVendorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-info-vendors',
            template: __webpack_require__(/*! raw-loader!./payment-info-vendors.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/payment-info-vendors/payment-info-vendors.page.html"),
            styles: [__webpack_require__(/*! ./payment-info-vendors.page.scss */ "./src/app/pages/payment-info-vendors/payment-info-vendors.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["DatePicker"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_5__["SyncService"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Events"]])
    ], PaymentInfoVendorsPage);
    return PaymentInfoVendorsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payment-info-vendors-payment-info-vendors-module-es5.js.map