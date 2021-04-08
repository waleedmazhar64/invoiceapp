(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-info-payment-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/payment-info/payment-info.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/payment-info/payment-info.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n    <ion-title>Receive Payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n          <ion-item lines=\"none\" >\n              <ion-grid no-padding>\n                    <ion-row>\n                      <ion-col size=\"3\">\n                          <ion-label >\n                              <h3>Amount:</h3>\n                            </ion-label>\n                      </ion-col>\n                      <ion-col size=\"9\">\n                          <span no-padding style=\"float: right;margin-right:12px;\">\n                              <ion-input no-padding placeholder=\"Amount\" [(ngModel)]=\"Amount\" type=\"number\"  ></ion-input>\n                            </span>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n              </ion-item >\n              <ion-item lines=\"none\" >\n                  <ion-grid no-padding>\n                        <ion-row>\n                          <ion-col>\n                              <ion-label size=\"3\">\n                                  <h2>Remarks:</h2>\n                                </ion-label>\n                          </ion-col>\n                          <ion-col size=\"9\" >\n                              <span no-padding style=\"float: right;margin-right:12px;\">\n                                  <!-- <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.regular_price\"></ion-input> -->\n                                  <ion-input no-padding placeholder=\"Remarks\"  [(ngModel)]=\"Remarks\" ></ion-input>\n                                </span>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                  </ion-item >\n                  <ion-item lines=\"none\">\n                      <ion-label text-center>\n                          <ion-button (click)=\"addpayment()\"  text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"primary\" style=\"width: auto;\">Receive Payment</ion-button>\n                      </ion-label>\n                  </ion-item>\n  </div>\n   \n\n <!-- <ngx-datatable\n \n [rows]=\"data\"\n [ngClass]=\"style\"\n [rowHeight]=\"'auto'\"\n [headerHeight]=\"'auto'\"\n [columnMode]=\"'force'\"\n (activate)=\"onActivate($event)\"\n >\n \n    <ngx-datatable-column name=\"No\">\n      <ng-template let-rowIndex=\"rowIndex\">{{rowIndex}} </ng-template>\n    </ngx-datatable-column>\n    <ngx-datatable-column name=\"Date\" padding></ngx-datatable-column>\n    <ngx-datatable-column name=\"Amount\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Actions\">\n        <ng-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n            <ion-button (click)=\"open(rowIndex,row)\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"danger\" style=\"width: auto;\">Delete</ion-button>\n         </ng-template>\n    </ngx-datatable-column>\n \n\n    \n</ngx-datatable> -->\n<!-- <ion-item lines=\"none\">\n<ion-label (click)=\"addnewpayment = true\" text-center style=\"color:royalblue;\"><ion-icon text-center name=\"add\" color=\"primary\"></ion-icon>Add new payment</ion-label>\n</ion-item> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/payment-info/payment-info.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/payment-info/payment-info.module.ts ***!
  \***********************************************************/
/*! exports provided: PaymentInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoPageModule", function() { return PaymentInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payment_info_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment-info.page */ "./src/app/pages/payment-info/payment-info.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");












const routes = [
    {
        path: '',
        component: _payment_info_page__WEBPACK_IMPORTED_MODULE_9__["PaymentInfoPage"]
    }
];
let PaymentInfoPageModule = class PaymentInfoPageModule {
};
PaymentInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"]
        ],
        providers: [
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["DatePicker"]
        ],
        declarations: [_payment_info_page__WEBPACK_IMPORTED_MODULE_9__["PaymentInfoPage"]]
    })
], PaymentInfoPageModule);



/***/ }),

/***/ "./src/app/pages/payment-info/payment-info.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/payment-info/payment-info.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtaW5mby9wYXltZW50LWluZm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/payment-info/payment-info.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment-info/payment-info.page.ts ***!
  \*********************************************************/
/*! exports provided: PaymentInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfoPage", function() { return PaymentInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");













let PaymentInfoPage = class PaymentInfoPage {
    constructor(router, datePipe, datePicker, syncService, databaseservice, network, nativeHttp, storage, events) {
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
        this.clientSync = 0;
        this.edit = 0;
        this.paymentID = 0;
        this.date = '';
        this.tempAmount = 0;
        this.ledgerSync = 0;
        this.storage.get('userId').then((val) => {
            this.usdId = val;
            console.log(this.usdId);
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
            if (typeof this.router.getCurrentNavigation().extras.state.Cid !== 'undefined' && this.router.getCurrentNavigation().extras.state.url !== 'ledger') {
                // debugger;
                this.edit = 0;
                this.Cid = this.router.getCurrentNavigation().extras.state.Cid;
                this.name = this.router.getCurrentNavigation().extras.state.Name;
                this.clientSync = this.router.getCurrentNavigation().extras.state.Sync;
                this.url = this.router.getCurrentNavigation().extras.state.url;
                if (this.url === '/ledger') {
                    this.client = this.router.getCurrentNavigation().extras.state.Client;
                    debugger;
                }
                debugger;
            }
            if (typeof this.router.getCurrentNavigation().extras.state.Cid !== 'undefined' && this.router.getCurrentNavigation().extras.state.url === 'ledger') {
                // debugger;
                this.edit = 1;
                this.paymentID = this.router.getCurrentNavigation().extras.state.ID;
                this.ledgerSync = this.router.getCurrentNavigation().extras.state.LedgerSync;
                this.tempAmount = this.router.getCurrentNavigation().extras.state.Amount;
                this.Amount = this.router.getCurrentNavigation().extras.state.Amount;
                this.Remarks = this.router.getCurrentNavigation().extras.state.Remarks;
                this.date = this.router.getCurrentNavigation().extras.state.Date;
                this.Cid = this.router.getCurrentNavigation().extras.state.Cid;
                this.name = this.router.getCurrentNavigation().extras.state.Name;
                this.clientSync = this.router.getCurrentNavigation().extras.state.Sync;
                this.url = this.router.getCurrentNavigation().extras.state.url;
                if (this.url === '/ledger') {
                    this.client = this.router.getCurrentNavigation().extras.state.Client;
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
    ngOnInit() {
    }
    back() {
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
        this.router.navigate(['/menu/clients']);
    }
    onActivate(event) {
        if (event.type === 'click') {
            console.log(event.row);
        }
    }
    selectDate() {
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datePicker.show(options).then((date) => {
            this.myDate = this.datePipe.transform(date, 'dd MMM yyyy');
            // console.log('selected:',this.myDate);
        });
    }
    AddLog() {
        if (this.edit === 0) {
            if (this.usdId === 1) {
                this.acttype = 'You received payment from';
            }
            else {
                this.acttype = 'You received payment from';
            }
        }
        if (this.edit === 1) {
            if (this.usdId === 1) {
                this.acttype = 'You edited received payment from';
            }
            else {
                this.acttype = 'You edited received payment from';
            }
        }
        //this.name = 'Purchased Order';
        let now = new Date().toString();
        const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName = 'tblledger';
        this.tblId = this.Cid;
        // this.tblId = this.PO.ID;
        // this.tblId = this.syncService.getUpdatedPOID();
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        debugger;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(data => {
            console.log("Log has been added");
            this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    }
    addpayment() {
        if (this.edit === 0) {
            let num = this.data.length;
            num = num + 1;
            this.myDate;
            debugger;
            this.databaseservice.setupdateclients(1);
            if (parseInt(this.Amount) > 0) {
                if (this.clientSync === 1) {
                    this.clientSync = 2;
                }
                this.clientSync;
                let now = new Date().toString();
                const a = this.datePipe.transform(now, 'dd MMM yyyy');
                //const a = this.datePipe.transform(now, 'yyyy MM dd');
                debugger;
                this.syncService.addPayment(this.Cid, this.clientSync, a, parseInt(this.Amount), this.Remarks).then(data => {
                    data;
                    this.events.publish('refreshLedger', 'saad2', '');
                    this.databaseservice.setupdateclients(1);
                    this.databaseservice.setupdateclientLeger(1);
                    if (this.url === '/ledger') {
                        debugger;
                        const navigationExtras = {
                            state: {
                                client: this.client
                            }
                        };
                        this.router.navigate(['ledger'], navigationExtras);
                    }
                    else {
                        this.router.navigate([this.url]);
                    }
                    this.AddLog();
                    if (this.network.type === 'none') {
                    }
                    else {
                        this.syncAddedPayment();
                        //this.AddLog();
                    }
                });
            }
            else {
                alert('Kindly add payment more than 0');
            }
        }
        if (this.edit === 1) {
            this.events.publish('refreshLedger', 'saad2', '');
            let num = this.data.length;
            num = num + 1;
            this.databaseservice.setupdateclients(1);
            if (parseInt(this.Amount) > 0) {
                if (this.clientSync === 1) {
                    this.clientSync = 2;
                }
                if (this.ledgerSync === 1) {
                    this.ledgerSync = 2;
                }
                // alert('temp ' + this.tempAmount + '\nOriginal ' + this.Amount)
                this.syncService.editPayment(this.Cid, this.clientSync, this.date, parseInt(this.Amount), this.Remarks, this.paymentID, this.tempAmount, this.ledgerSync).then(data => {
                    data;
                    this.databaseservice.setupdateclients(1);
                    this.databaseservice.setupdateclientLeger(1);
                    if (this.url === '/ledger') {
                        debugger;
                        const navigationExtras = {
                            state: {
                                client: this.client
                            }
                        };
                        this.router.navigate(['ledger'], navigationExtras);
                    }
                    else {
                        this.router.navigate([this.url]);
                    }
                    this.AddLog();
                    if (this.network.type === 'none') {
                    }
                    else {
                        this.syncUpdatedPayment();
                        //this.AddLog();
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
    }
    syncAddedPayment() {
        this.syncService.syncAddedLedger().then((data) => {
            if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                    IDs[i] = data[i].ID;
                }
                const url = this.databaseservice.getURL();
                debugger;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url, {
                    'Name': 'syncAddedLedger',
                    "Payments": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        this.syncService.updateSyncedAddedLedger(IDs).then((data) => {
                        }).then(() => {
                            this.syncService.syncUpdatedClients().then((data) => {
                                if (data.length > 0) {
                                    const IDs = [];
                                    for (let i = 0; i < data.length; i++) {
                                        IDs[i] = data[i].Cid;
                                    }
                                    const url = this.databaseservice.getURL();
                                    debugger;
                                    this.nativeHttp.setDataSerializer("json");
                                    let nativeCall = this.nativeHttp.post(url, {
                                        'Name': 'syncUpdatedClients',
                                        "Clients": data
                                    }, {
                                        'Content-Type': 'application/json',
                                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                    });
                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => { }))
                                        .subscribe(data => {
                                        console.log('Native data:', data);
                                        const g = JSON.parse(data.data);
                                        if (g.success === 1) {
                                            //alert('success');
                                            this.syncService.updateSyncedClients(IDs).then((data) => {
                                                this.databaseservice.setupdateclients(1);
                                            });
                                        }
                                        else {
                                            // alert('failed');
                                        }
                                        // this.initializeItems();
                                    }, err => {
                                        console.log('JS call error', err);
                                        const error = JSON.parse(err.error);
                                        //alert(error.message);
                                        console.log('Native data:', JSON.parse(error));
                                    });
                                    debugger;
                                }
                            });
                        });
                    }
                    else {
                        // alert('failed');
                    }
                    // this.initializeItems();
                }, err => {
                    console.log('JS call error', err);
                    const error = JSON.parse(err.error);
                    // alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
                debugger;
            }
        });
    }
    syncUpdatedPayment() {
        this.syncService.syncUpdatedLedger().then((data) => {
            if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                    IDs[i] = data[i].ID;
                }
                const url = this.databaseservice.getURL();
                debugger;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url, {
                    'Name': 'syncUpdatedLedger',
                    "Payments": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        this.syncService.updateSyncedAddedLedger(IDs).then((data) => {
                        }).then(() => {
                            this.syncService.syncUpdatedClients().then((data) => {
                                if (data.length > 0) {
                                    const IDs = [];
                                    for (let i = 0; i < data.length; i++) {
                                        IDs[i] = data[i].Cid;
                                    }
                                    const url = this.databaseservice.getURL();
                                    debugger;
                                    this.nativeHttp.setDataSerializer("json");
                                    let nativeCall = this.nativeHttp.post(url, {
                                        'Name': 'syncUpdatedClients',
                                        "Clients": data
                                    }, {
                                        'Content-Type': 'application/json',
                                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                    });
                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => { }))
                                        .subscribe(data => {
                                        console.log('Native data:', data);
                                        const g = JSON.parse(data.data);
                                        if (g.success === 1) {
                                            //alert('success');
                                            this.syncService.updateSyncedClients(IDs).then((data) => {
                                                this.databaseservice.setupdateclients(1);
                                            });
                                        }
                                        else {
                                            // alert('failed');
                                        }
                                        // this.initializeItems();
                                    }, err => {
                                        console.log('JS call error', err);
                                        const error = JSON.parse(err.error);
                                        //alert(error.message);
                                        console.log('Native data:', JSON.parse(error));
                                    });
                                    debugger;
                                }
                            });
                        });
                    }
                    else {
                        // alert('failed');
                    }
                    // this.initializeItems();
                }, err => {
                    console.log('JS call error', err);
                    const error = JSON.parse(err.error);
                    // alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
                debugger;
            }
        });
    }
    open(row, value) {
        debugger;
        this.data.splice(row, 1);
        this.data = [...this.data];
        this.payed = this.payed - value.amount;
        this.duepayment = this.duepayment + value.amount;
        const a = parseFloat(this.payed.toString()).toFixed(2);
        const b = parseFloat(this.duepayment.toString()).toFixed(2);
        this.payed = parseFloat(a);
        this.duepayment = parseFloat(b);
        console.log(value);
        console.log(row);
    }
};
PaymentInfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["DatePicker"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_5__["SyncService"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["Events"] }
];
PaymentInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-info',
        template: __webpack_require__(/*! raw-loader!./payment-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/payment-info/payment-info.page.html"),
        styles: [__webpack_require__(/*! ./payment-info.page.scss */ "./src/app/pages/payment-info/payment-info.page.scss")]
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
], PaymentInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-info-payment-info-module-es2015.js.map