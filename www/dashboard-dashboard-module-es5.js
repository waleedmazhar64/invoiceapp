(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Dashboard</ion-title>\n        <!-- <ion-icon slot=\"end\" name=\"notifications-outline\" padding size=\"medium\" (click)=\"notificatioons()\"></ion-icon> -->\n      </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n      <h6>Client(s)</h6>\n  </ion-item>\n<ion-item  *ngIf=\"invoices.length == 0\" (click)=\"outstandingClients()\">\n    <span style=\"text-align: center;margin-right: 10px;padding-top: 2%;padding-bottom: 2%;width: 50%;color:gray\"><h6>{{ clientOutstanding }}</h6></span>\n\n                    <ion-label>\n                      <h6 text-capitalize>OUTSTANDING</h6>\n                      <!-- <p>{{item.menu_order}}x{{item.sale_price}}({{item.regular_price}})</p> -->\n                    </ion-label>\n                    <!-- <ion-label>\n                        <span style=\"float:right;\" class=\"cancel\">\n                            PKR {{ item.menu_order * item.sale_price }}\n                        </span>\n                    </ion-label> -->\n                    <ion-icon item-end name=\"arrow-dropright\"></ion-icon>\n</ion-item>\n<ion-item *ngIf=\"invoices.length == 0\" (click)=\"overdue()\">\n    <span style=\"text-align: center;margin-right: 10px;padding-top: 2%;padding-bottom: 2%;width: 50%;\"><h6  style=\"color: red;\">{{clientOverdue}} </h6></span>\n\n                    <ion-label>\n                      <h6 text-capitalize style=\"color: red;\">OVERDUE</h6>\n                      <!-- <p>{{item.menu_order}}x{{item.sale_price}}({{item.regular_price}})</p> -->\n                    </ion-label>\n                    <!-- <ion-label>\n                        <span style=\"float:right;\" class=\"cancel\">\n                            PKR {{ item.menu_order * item.sale_price }}\n                        </span>\n                    </ion-label> -->\n                    <ion-icon item-end name=\"arrow-dropright\"></ion-icon>\n\n</ion-item>\n<ion-item *ngIf=\"invoices.length > 0\" >\n    <!-- <span style=\"background-color:#ddd;text-align: center;margin-right: 10px;padding-top: 2%;padding-bottom: 2%;width: 10%;\">{{pos + 1 }}</span> -->\n\n                    <ion-label>\n                      <h2 text-capitalize>OUTSTANDING</h2>\n                      <!-- <p>{{item.menu_order}}x{{item.sale_price}}({{item.regular_price}})</p> -->\n                    </ion-label>\n                    <!-- <ion-label>\n                        <span style=\"float:right;\" class=\"cancel\">\n                            PKR {{ item.menu_order * item.sale_price }}\n                        </span>\n                    </ion-label> -->\n                    <ion-icon item-end name=\"arrow-dropright\"></ion-icon>\n\n</ion-item>\n<ion-item *ngIf=\"invoices.length > 0\">\n    <!-- <span style=\"background-color:#ddd;text-align: center;margin-right: 10px;padding-top: 2%;padding-bottom: 2%;width: 10%;\">{{pos + 1 }}</span> -->\n\n                    <ion-label>\n                      <h2 text-capitalize>OUTSTANDING</h2>\n                      <!-- <p>{{item.menu_order}}x{{item.sale_price}}({{item.regular_price}})</p> -->\n                    </ion-label>\n                    <!-- <ion-label>\n                        <span style=\"float:right;\" class=\"cancel\">\n                            PKR {{ item.menu_order * item.sale_price }}\n                        </span>\n                    </ion-label> -->\n                    <ion-icon item-end name=\"arrow-dropright\"></ion-icon>\n\n</ion-item>\n<ion-item>\n    <h6>Vendor(s)</h6>\n</ion-item>\n<ion-item  *ngIf=\"invoices.length == 0\" (click)=\"outstandingVendors()\">\n  <span style=\"text-align: center;margin-right: 10px;padding-top: 2%;padding-bottom: 2%;width: 50%;color:gray\"><h6>{{currency}} {{ totalDebit2 - totalCredit2}} </h6></span>\n\n                  <ion-label>\n                    <h6 text-capitalize>OUTSTANDING</h6>\n                    <!-- <p>{{item.menu_order}}x{{item.sale_price}}({{item.regular_price}})</p> -->\n                  </ion-label>\n                  <!-- <ion-label>\n                      <span style=\"float:right;\" class=\"cancel\">\n                          PKR {{ item.menu_order * item.sale_price }}\n                      </span>\n                  </ion-label> -->\n                  <ion-icon item-end name=\"arrow-dropright\"></ion-icon>\n</ion-item>\n<ion-list *ngIf=\"invoices.length == 0\">\n  <!-- <ion-item lines=\"none\">\n    <ion-label item-start>Recent Invoice(s)</ion-label>\n    <span style=\"float:right;\">\n        <ion-label (click)=\"seemore()\" item-end>See more</ion-label>\n    </span>\n  </ion-item> -->\n\n</ion-list>\n<!-- <div style=\"width:100%\" id=\"curve_chart\"></div>\n<div id=\"myChart\"></div>\n<ion-card-content>\n  <canvas #barChart></canvas>\n</ion-card-content> -->\n<ion-card-content>\n  <canvas id=\"line-chart\" width=\"800\" height=\"450\"></canvas>\n</ion-card-content>\n\n<!-- <div id=\"chart_div\" style=\"width: 500px; height: 300px;\"></div> -->\n<!-- <div id=\"lineChart\" ></div> -->\n\n<!-- <div style=\"display: block\"><canvas id=\"yudhatp-chart\"></canvas></div> -->\n<!-- <ion-button (click)=\"btn()\">sub</ion-button> -->\n<!-- <ion-button (click)=\"publish()\">pub</ion-button>\n<ion-button (click)=\"btn1()\">unsub</ion-button> -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");













var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_11__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
                _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"],
                _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_9__["GooglePlus"]
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_11__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mytext3 {\n  font-weight: bold;\n}\n\nion-icon {\n  font-size: 40px;\n}\n\n.foo {\n  position: absolute;\n  left: 75%;\n  right: 0;\n  margin: 0 auto;\n  top: 93%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n}\n\nion-header {\n  height: 56px;\n}\n\nion-toolbar {\n  height: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFx3YW1wNjRcXHd3d1xcaW52b2ljZS5way9zcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teXRleHQze1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDQwcHg7IC8vUHJlZmVycmVkIHNpemUgaGVyZVxyXG59XHJcbi5mb28ge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6IDc1JTtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIHRvcDo5MyU7XHJcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1oZWFkZXIge1xyXG4gIGhlaWdodDogNTZweDsvL2J5IGRlZmF1bHQgNTZweFxyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICBoZWlnaHQ6IDU2cHg7Ly9ieSBkZWZhdWx0IDU2cHhcclxuICBcclxufSIsIi5teXRleHQzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uZm9vIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA3NSU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiA5MyU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taGVhZGVyIHtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGhlaWdodDogNTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! chartjs-plugin-zoom */ "./node_modules/chartjs-plugin-zoom/dist/chartjs-plugin-zoom.js");
/* harmony import */ var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

















//import {SocialSharing} from '@ionic-native/social-sharing/ngx';



var STORAGE_KEY = 'my_images';
var DashboardPage = /** @class */ (function () {
    function DashboardPage(googlePlus, excelService, plt, route, router, databaseprovider, network, http, datePipe, statubar, syncService, nativeHttp, loadingCtrl, 
    // private socialSharing: SocialSharing,
    storage, platform, nav, events, toastController) {
        var _this = this;
        this.googlePlus = googlePlus;
        this.excelService = excelService;
        this.plt = plt;
        this.route = route;
        this.router = router;
        this.databaseprovider = databaseprovider;
        this.network = network;
        this.http = http;
        this.datePipe = datePipe;
        this.statubar = statubar;
        this.syncService = syncService;
        this.nativeHttp = nativeHttp;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.platform = platform;
        this.nav = nav;
        this.events = events;
        this.toastController = toastController;
        this.invoices = [];
        this.POS = [];
        this.isLoggedIn = false;
        this.ledger = [];
        this.getit = [];
        this.getpo = [];
        this.data = [{
                eid: 'e101',
                ename: 'ravi',
                esal: 1000
            }, {
                eid: 'e102',
                ename: 'ram',
                esal: 2000
            }, {
                eid: 'e103',
                ename: 'rajesh',
                esal: 3000
            }];
        this.LineChart = [];
        this.BarChart = [];
        this.PieChart = [];
        this.Dates = [];
        this.invoiceAmounts = [];
        this.invoicePayments = [];
        this.invoicesPaymentDates = [];
        this.invoicesPaymentAmount = [];
        this.expenses = [];
        this.currency = '';
        this.clientOutstanding = 0;
        this.clientOverdue = 0;
        events.subscribe('user:created', function (user, time) {
            _this.clientOverdue = 0;
            _this.clientOutstanding = 0;
            _this.getClientsFiguers();
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationStart"]; })).subscribe(function (route) {
            storage.get('currency').then(function (val) {
                if (val !== null) {
                    _this.currency = val.toString();
                }
            });
        });
        storage.get('currency').then(function (val) {
            if (val !== null) {
                _this.currency = val.toString();
            }
        });
        //this.checkLogin();
        this.statubar.backgroundColorByHexString('#4c8dff');
        // this.showGraph();
        // watch network for a disconnection
        this.network.onDisconnect().subscribe(function () {
            console.log('network was disconnected :-(');
            // alert('disconnedted');
            // this.toast('disconnedted')
        });
        this.network.onConnect().subscribe(function () {
            console.log('network connected!');
            // alert('connected');
            // this.toast('connected')
            setTimeout(function () {
                if (_this.network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                }
                _this.syncService.serverSync();
                //       this.syncService.getAlldelInvoices().then((data) => {
                //     if (data.length > 0) {
                //     const url = this.databaseprovider.getURL();
                //    this.nativeHttp.setDataSerializer("json");
                //     let nativeCall = this.nativeHttp.post(url + '/delInvoices.php',
                //     {
                //       "InvoiceIDS": data
                //     }
                //     ,{
                //       'Content-Type':'application/json',
                //       'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                //     });
                //     from(nativeCall).pipe(
                //       finalize(() => {} )
                //     )
                //     .subscribe(data => {
                //       console.log('Native data:',data);
                //       const g = JSON.parse(data.data);
                //       if(g.success === 1) {
                //         this.syncService.updatedelsInvoices().then((data) => {
                //         });
                //       } else {
                //       }
                //     },err =>{
                //       console.log('JS call error',err);
                //       const error = JSON.parse(err.error);
                //       console.log('Native data:',JSON.parse(error));
                //     });
                //   }
                // });
                //     this.syncService.getAlldelPOS().then((data) => {
                //     if (data.length > 0) {
                //     const url = this.databaseprovider.getURL();
                //    this.nativeHttp.setDataSerializer("json");
                //     let nativeCall = this.nativeHttp.post(url + '/delPOS.php',
                //     {
                //       "POSIDS": data
                //     }
                //     ,{
                //       'Content-Type':'application/json',
                //       'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                //     });
                //     from(nativeCall).pipe(
                //       finalize(() =>{} )
                //     )
                //     .subscribe(data => {
                //       console.log('Native data:',data);
                //       const g = JSON.parse(data.data);
                //       if(g.success === 1) {
                //         this.syncService.updatedelsPOS().then((data) => {
                //         });
                //       } else {
                //       }
                //     },err =>{
                //       console.log('JS call error',err);
                //       const error = JSON.parse(err.error);
                //       console.log('Native data:',JSON.parse(error));
                //     });
                //   }
                // });
                _this.syncService.syncAddedItems().then(function (data) {
                    if (data.length > 0) {
                        var IDs_1 = [];
                        for (var i = 0; i < data.length; i++) {
                            IDs_1[i] = data[i].itemid;
                        }
                        var url = _this.databaseprovider.getURL();
                        _this.nativeHttp.setDataSerializer("json");
                        var nativeCall = _this.nativeHttp.post(url, {
                            'Name': 'syncAddedItems',
                            "Items": data
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                            .subscribe(function (data) {
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            if (g.success === 1) {
                                _this.syncService.updateSyncedItems(IDs_1).then(function (data) {
                                });
                            }
                            else {
                            }
                        }, function (err) {
                            console.log('JS call error', err);
                            var error = JSON.parse(err.error);
                            console.log('Native data:', JSON.parse(error));
                        });
                    }
                });
                _this.syncService.syncUpdatedItems().then(function (data) {
                    if (data.length > 0) {
                        var IDs_2 = [];
                        for (var i = 0; i < data.length; i++) {
                            IDs_2[i] = data[i].itemid;
                        }
                        var url = _this.databaseprovider.getURL();
                        _this.nativeHttp.setDataSerializer("json");
                        var nativeCall = _this.nativeHttp.post(url, {
                            'Name': 'syncUpdatedItems',
                            "Items": data
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                            .subscribe(function (data) {
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            if (g.success === 1) {
                                //alert('success Updated');
                                _this.syncService.updateSyncedItems(IDs_2).then(function (data) {
                                });
                            }
                            else {
                            }
                        }, function (err) {
                            console.log('JS call error', err);
                            var error = JSON.parse(err.error);
                            console.log('Native data:', JSON.parse(error));
                        });
                    }
                });
                _this.syncService.syncAddedClients().then(function (data) {
                    if (data.length > 0) {
                        var IDs_3 = [];
                        for (var i = 0; i < data.length; i++) {
                            IDs_3[i] = data[i].Cid;
                        }
                        var url = _this.databaseprovider.getURL();
                        _this.nativeHttp.setDataSerializer("json");
                        var nativeCall = _this.nativeHttp.post(url, {
                            'Name': 'syncAddedClients',
                            "Clients": data
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                            .subscribe(function (data) {
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            if (g.success === 1) {
                                _this.syncService.updateSyncedClients(IDs_3).then(function (data) {
                                });
                            }
                            else {
                            }
                        }, function (err) {
                            console.log('JS call error', err);
                            var error = JSON.parse(err.error);
                            console.log('Native data:', JSON.parse(error));
                        });
                    }
                });
                _this.syncService.syncUpdatedClients().then(function (data) {
                    if (data.length > 0) {
                        var IDs_4 = [];
                        for (var i = 0; i < data.length; i++) {
                            IDs_4[i] = data[i].Cid;
                        }
                        var url = _this.databaseprovider.getURL();
                        _this.nativeHttp.setDataSerializer("json");
                        var nativeCall = _this.nativeHttp.post(url, {
                            'Name': 'syncUpdatedClients',
                            "Clients": data
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                            .subscribe(function (data) {
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            if (g.success === 1) {
                                _this.syncService.updateSyncedClients(IDs_4).then(function (data) {
                                });
                            }
                            else {
                            }
                        }, function (err) {
                            console.log('JS call error', err);
                            var error = JSON.parse(err.error);
                            console.log('Native data:', JSON.parse(error));
                        });
                    }
                });
                _this.syncService.syncAddedVendors().then(function (data) {
                    if (data.length > 0) {
                        var IDs_5 = [];
                        for (var i = 0; i < data.length; i++) {
                            IDs_5[i] = data[i].ID;
                        }
                        var url = _this.databaseprovider.getURL();
                        _this.nativeHttp.setDataSerializer("json");
                        var nativeCall = _this.nativeHttp.post(url, {
                            'Name': 'syncAddedVendors',
                            "Vendors": data
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                            .subscribe(function (data) {
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            if (g.success === 1) {
                                _this.syncService.updateSyncedVendors(IDs_5).then(function (data) {
                                });
                            }
                            else {
                            }
                        }, function (err) {
                            console.log('JS call error', err);
                            var error = JSON.parse(err.error);
                            console.log('Native data:', JSON.parse(error));
                        });
                    }
                });
                _this.syncService.syncUpdatedVendors().then(function (data) {
                    if (data.length > 0) {
                        var IDs_6 = [];
                        for (var i = 0; i < data.length; i++) {
                            IDs_6[i] = data[i].ID;
                        }
                        var url = _this.databaseprovider.getURL();
                        _this.nativeHttp.setDataSerializer("json");
                        var nativeCall = _this.nativeHttp.post(url, {
                            'Name': 'syncUpdatedVendors',
                            "Vendors": data
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                            .subscribe(function (data) {
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            if (g.success === 1) {
                                _this.syncService.updateSyncedVendors(IDs_6).then(function (data) {
                                });
                            }
                            else {
                            }
                        }, function (err) {
                            console.log('JS call error', err);
                            var error = JSON.parse(err.error);
                            console.log('Native data:', JSON.parse(error));
                        });
                    }
                });
                _this.syncService.syncAddedPOS().then(function (data) {
                    if (data.length > 0) {
                        var IDs_7 = [];
                        for (var i = 0; i < data.length; i++) {
                            IDs_7[i] = data[i].ID;
                        }
                        var url = _this.databaseprovider.getURL();
                        ;
                        _this.nativeHttp.setDataSerializer("json");
                        var nativeCall = _this.nativeHttp.post(url, {
                            'Name': 'syncAddedPOs',
                            "POS": data
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                            .subscribe(function (data) {
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            if (g.success === 1) {
                                _this.syncService.updateSyncedPOS(IDs_7).then(function (data) {
                                });
                                _this.syncService.syncAddedPOsItems().then(function (data) {
                                    if (data.length > 0) {
                                        var IDs_8 = [];
                                        for (var i = 0; i < data.length; i++) {
                                            IDs_8[i] = data[i].ID;
                                        }
                                        var url_1 = _this.databaseprovider.getURL();
                                        _this.nativeHttp.setDataSerializer("json");
                                        var nativeCall_1 = _this.nativeHttp.post(url_1, {
                                            'Name': 'syncAddedPOsItems',
                                            "POSItems": data
                                        }, {
                                            'Content-Type': 'application/json',
                                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                        });
                                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall_1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                                            .subscribe(function (data) {
                                            console.log('Native data:', data);
                                            var g = JSON.parse(data.data);
                                            if (g.success === 1) {
                                                _this.syncService.updateSyncedPOSItems(IDs_8).then(function (data) {
                                                });
                                                _this.syncService.syncAddedLedgerVendor().then(function (data) {
                                                    if (data.length > 0) {
                                                        var IDs_9 = [];
                                                        for (var i = 0; i < data.length; i++) {
                                                            IDs_9[i] = data[i].ID;
                                                        }
                                                        var url_2 = _this.databaseprovider.getURL();
                                                        ;
                                                        _this.nativeHttp.setDataSerializer("json");
                                                        var nativeCall_2 = _this.nativeHttp.post(url_2, {
                                                            'Name': 'syncAddedLedgerVendor',
                                                            "Payments": data
                                                        }, {
                                                            'Content-Type': 'application/json',
                                                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                        });
                                                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall_2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                                                            .subscribe(function (data) {
                                                            console.log('Native data:', data);
                                                            var g = JSON.parse(data.data);
                                                            if (g.success === 1) {
                                                                _this.syncService.updateSyncedAddedLedgerVendors(IDs_9).then(function (data) {
                                                                });
                                                            }
                                                            else {
                                                            }
                                                        }, function (err) {
                                                            console.log('JS call error', err);
                                                            var error = JSON.parse(err.error);
                                                            console.log('Native data:', JSON.parse(error));
                                                        });
                                                    }
                                                });
                                            }
                                            else {
                                            }
                                        }, function (err) {
                                            console.log('JS call error', err);
                                            var error = JSON.parse(err.error);
                                            console.log('Native data:', JSON.parse(error));
                                        });
                                    }
                                });
                            }
                            else {
                            }
                        }, function (err) {
                            console.log('JS call error', err);
                            var error = JSON.parse(err.error);
                            console.log('Native data:', JSON.parse(error));
                        });
                    }
                }).then(function (a) {
                    _this.syncService.syncAddedInvoices().then(function (data) {
                        if (data.length > 0) {
                            var IDs_10 = [];
                            for (var i = 0; i < data.length; i++) {
                                IDs_10[i] = data[i].Iid;
                            }
                            var url = _this.databaseprovider.getURL();
                            ;
                            _this.nativeHttp.setDataSerializer("json");
                            var nativeCall = _this.nativeHttp.post(url, {
                                'Name': 'syncAddedInvoices',
                                "Invoices": data
                            }, {
                                'Content-Type': 'application/json',
                                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                            });
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                                .subscribe(function (data) {
                                console.log('Native data:', data);
                                var g = JSON.parse(data.data);
                                if (g.success === 1) {
                                    _this.syncService.updateSyncedInvoices(IDs_10).then(function (data) {
                                    });
                                    _this.syncService.syncAddedInvoicesItems().then(function (data) {
                                        if (data.length > 0) {
                                            var IDs_11 = [];
                                            for (var i = 0; i < data.length; i++) {
                                                IDs_11[i] = data[i].Iiid;
                                            }
                                            var url_3 = _this.databaseprovider.getURL();
                                            ;
                                            _this.nativeHttp.setDataSerializer("json");
                                            var nativeCall_3 = _this.nativeHttp.post(url_3, {
                                                'Name': 'syncAddedInvoicesItems',
                                                "InvoiceItems": data
                                            }, {
                                                'Content-Type': 'application/json',
                                                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                            });
                                            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall_3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                                                .subscribe(function (data) {
                                                console.log('Native data:', data);
                                                var g = JSON.parse(data.data);
                                                if (g.success === 1) {
                                                    _this.syncService.updateSyncedInvoicesItems(IDs_11).then(function (data) {
                                                    });
                                                    _this.syncService.syncAddedLedger().then(function (data) {
                                                        if (data.length > 0) {
                                                            var IDs_12 = [];
                                                            for (var i = 0; i < data.length; i++) {
                                                                IDs_12[i] = data[i].ID;
                                                            }
                                                            var url_4 = _this.databaseprovider.getURL();
                                                            ;
                                                            _this.nativeHttp.setDataSerializer("json");
                                                            var nativeCall_4 = _this.nativeHttp.post(url_4, {
                                                                'Name': 'syncAddedLedger',
                                                                "Payments": data
                                                            }, {
                                                                'Content-Type': 'application/json',
                                                                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                            });
                                                            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall_4).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                                                                .subscribe(function (data) {
                                                                console.log('Native data:', data);
                                                                var g = JSON.parse(data.data);
                                                                if (g.success === 1) {
                                                                    _this.syncService.updateSyncedAddedLedger(IDs_12).then(function (data) {
                                                                    });
                                                                }
                                                                else {
                                                                }
                                                            }, function (err) {
                                                                console.log('JS call error', err);
                                                                var error = JSON.parse(err.error);
                                                                console.log('Native data:', JSON.parse(error));
                                                            });
                                                        }
                                                    });
                                                }
                                                else {
                                                }
                                            }, function (err) {
                                                console.log('JS call error', err);
                                                var error = JSON.parse(err.error);
                                                console.log('Native data:', JSON.parse(error));
                                            });
                                        }
                                    });
                                }
                                else {
                                }
                            }, function (err) {
                                console.log('JS call error', err);
                                var error = JSON.parse(err.error);
                                console.log('Native data:', JSON.parse(error));
                            });
                        }
                    });
                });
                _this.syncService.syncAddedLog().then(function (data8) {
                }).then(function (data11) {
                    _this.syncService.syncAddedUsers().then(function (data) {
                        if (data.length > 0) {
                            var IDs_13 = [];
                            for (var i = 0; i < data.length; i++) {
                                IDs_13[i] = data[i].itemid;
                            }
                            var url = _this.databaseprovider.getURL();
                            ;
                            _this.nativeHttp.setDataSerializer("json");
                            var nativeCall = _this.nativeHttp.post(url, {
                                'Name': 'syncAddedUsers',
                                "Items": data
                            }, {
                                'Content-Type': 'application/json',
                                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                            });
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                                .subscribe(function (data) {
                                console.log('Native data:', data);
                                var g = JSON.parse(data.data);
                                if (g.success === 1) {
                                    // alert('success');
                                    _this.syncService.updateSyncedUsers(IDs_13).then(function (data) {
                                    });
                                    _this.syncService.syncAddedacl().then(function (data) {
                                        if (data.length > 0) {
                                            var IDs_14 = [];
                                            for (var i = 0; i < data.length; i++) {
                                                IDs_14[i] = data[i].ID;
                                            }
                                            var url_5 = _this.databaseprovider.getURL();
                                            ;
                                            _this.nativeHttp.setDataSerializer("json");
                                            var nativeCall_5 = _this.nativeHttp.post(url_5, {
                                                'Name': 'syncAddedacl',
                                                "Items": data
                                            }, {
                                                'Content-Type': 'application/json',
                                                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                            });
                                            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall_5).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                                                .subscribe(function (data) {
                                                console.log('Native data:', data);
                                                var g = JSON.parse(data.data);
                                                if (g.success === 1) {
                                                    // alert('success');
                                                    _this.syncService.updateSyncedacl(IDs_14).then(function (data) {
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
                                        }
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
                        }
                    });
                }).then(function () {
                    _this.syncService.syncUpdatedAcl().then(function (data) {
                        if (data.length > 0) {
                            var IDs_15 = [];
                            for (var i = 0; i < data.length; i++) {
                                IDs_15[i] = data[i].ID;
                            }
                            var url = _this.databaseprovider.getURL();
                            if (data.length > 0) {
                                ;
                                _this.nativeHttp.setDataSerializer("json");
                                var nativeCall = _this.nativeHttp.post(url, {
                                    'Name': 'syncUpdatedAcl',
                                    "Items": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                                    .subscribe(function (data) {
                                    console.log('Native data:', data);
                                    var g = JSON.parse(data.data);
                                    if (g.success === 1) {
                                        //  alert('success');
                                        _this.syncService.updateSyncedAcl(IDs_15).then(function (data) {
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
                        }
                    });
                }).then(function () {
                    _this.syncService.syncUpdatedUsers().then(function (data) {
                        if (data.length > 0) {
                            var IDs_16 = [];
                            for (var i = 0; i < data.length; i++) {
                                IDs_16[i] = data[i].itemid;
                            }
                            var url = _this.databaseprovider.getURL();
                            ;
                            _this.nativeHttp.setDataSerializer("json");
                            var nativeCall = _this.nativeHttp.post(url, {
                                'Name': 'syncUpdatedUsers',
                                "Items": data
                            }, {
                                'Content-Type': 'application/json',
                                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                            });
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                                .subscribe(function (data) {
                                console.log('Native data:', data);
                                var g = JSON.parse(data.data);
                                if (g.success === 1) {
                                    //alert('success Updated');
                                    _this.syncService.updateSyncedUsers(IDs_16).then(function (data) {
                                    });
                                }
                                else {
                                    //  alert('failed');
                                }
                                // this.initializeItems();
                            }, function (err) {
                                console.log('JS call error', err);
                                var error = JSON.parse(err.error);
                                // alert(error.message);
                                console.log('Native data:', JSON.parse(error));
                            });
                        }
                    });
                }).then(function (data9) {
                    _this.syncService.syncUpdatedExpenses().then(function (data) {
                        if (data.length > 0) {
                            var IDs_17 = [];
                            for (var i = 0; i < data.length; i++) {
                                IDs_17[i] = data[i].ID;
                            }
                            var url = _this.databaseprovider.getURL();
                            _this.nativeHttp.setDataSerializer("json");
                            var nativeCall = _this.nativeHttp.post(url, {
                                'Name': 'syncDeletedExpenses',
                                "Expenses": data
                            }, {
                                'Content-Type': 'application/json',
                                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                            });
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                                .subscribe(function (data) {
                                console.log('Native data:', data);
                                var g = JSON.parse(data.data);
                                if (g.success === 1) {
                                    _this.syncService.updateSyncedExpenses(IDs_17);
                                }
                                else {
                                }
                            }, function (err) {
                                console.log('JS call error', err);
                                var error = JSON.parse(err.error);
                                console.log('Native data:', JSON.parse(error));
                            });
                        }
                    });
                }).then(function () {
                    _this.syncService.syncAddedExpenses().then(function (data) {
                        if (data.length > 0) {
                            var IDs_18 = [];
                            for (var i = 0; i < data.length; i++) {
                                IDs_18[i] = data[i].ID;
                            }
                            var url = _this.databaseprovider.getURL();
                            _this.nativeHttp.setDataSerializer("json");
                            var nativeCall = _this.nativeHttp.post(url, {
                                'Name': 'syncAddedExpenses',
                                "Expenses": data
                            }, {
                                'Content-Type': 'application/json',
                                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                            });
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(function () { }))
                                .subscribe(function (data) {
                                console.log('Native data:', data);
                                var g = JSON.parse(data.data);
                                if (g.success === 1) {
                                    _this.syncService.updateSyncedExpenses(IDs_18);
                                }
                                else {
                                }
                            }, function (err) {
                                console.log('JS call error', err);
                                var error = JSON.parse(err.error);
                                // alert(error.message);
                                console.log('Native data:', JSON.parse(error));
                            });
                        }
                    });
                });
            }, 3000);
        });
        if (this.router.getCurrentNavigation().extras.state) {
            this.userId = this.router.getCurrentNavigation().extras.state.user;
            console.log('userID:', this.userId);
            this.getAllAccounts();
        }
    }
    DashboardPage.prototype.ngOnInit = function () {
        // console.log(this.userId);
    };
    // onPageWillLeave():void {
    //   this.platform.backButton.unsubscribe();
    // }
    DashboardPage.prototype.ionViewWillLeave = function () {
        // this.subscription.unsubscribe();
    };
    DashboardPage.prototype.ionViewDidEnter = function () {
        //   this.subscription = this.platform.backButton.subscribe(()=>{
        //     navigator['app'].exitApp();
        // });
        this.databaseprovider.setLogsnav(0);
        this.Dates = [];
        this.invoiceAmounts = [];
        this.invoicePayments = [];
        this.getClientsFiguers();
        this.getInvoicesDataFromLedger();
        this.GetLedger();
        this.getVendorOuts();
        // this.createBarChart();
        this.createLineChart();
    };
    DashboardPage.prototype.logout = function () {
        var _this = this;
        this.googlePlus.logout()
            .then(function (res) {
            console.log(res);
            _this.email = "";
            _this.userId = "";
            _this.isLoggedIn = false;
        })
            .catch(function (err) { return console.error(err); });
    };
    //   exportAsXLSX():void {
    //     if (this.plt.is('android')) {
    //       alert('android');
    //     } else {
    //       this.excelService.exportAsExcelFile(this.data, 'sample');
    //     //  alert('browser');
    //     }
    //  }
    DashboardPage.prototype.getAllAccounts = function () {
        var _this = this;
        this.databaseprovider.getAllAccount().then(function (data) {
            _this.records = data;
            console.log('records:' + _this.records[0].email);
            ;
        });
    };
    DashboardPage.prototype.seemore = function () {
        this.router.navigate(['menu/invoice']);
    };
    DashboardPage.prototype.notificatioons = function () {
        this.router.navigate(['notifications']);
    };
    DashboardPage.prototype.outstandingClients = function () {
        var navigationExtras = {
            state: {
                // user: this.received
                title: 'Outstanding'
            }
        };
        this.router.navigate(['outstanding'], navigationExtras);
        // this.nav.navigateRoot('outstanding');
    };
    DashboardPage.prototype.outstandingVendors = function () {
        this.databaseprovider.setFrom(1);
        var navigationExtras = {
            state: {
                // user: this.received
                title: 'Outstanding',
                url: '/menu/dashboard'
            }
        };
        this.router.navigate(['/menu/purchased-orders'], navigationExtras);
    };
    DashboardPage.prototype.overdue = function () {
        var navigationExtras = {
            state: {
                // user: this.received
                title: 'Overdue'
            }
        };
        this.router.navigate(['dashboard-invoices'], navigationExtras);
    };
    DashboardPage.prototype.otherGraph = function () {
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Year', 'Sales'],
                [new Date('2001, 01,01'), 30],
                [new Date('2002, 01,01'), 70],
                [new Date('2003,01,01'), 45],
                [new Date('2004,01,01'), 99],
                [new Date('2005,01,01'), 22],
                [new Date('2006,0101,'), 0],
                [new Date('2086,01,01'), 13]
            ]);
            var options = {
                title: 'Company Performance',
                hAxis: { title: 'Year', titleTextStyle: { color: '#333' },
                    slantedText: true, slantedTextAngle: 80 },
                vAxis: { minValue: 0 },
                explorer: {
                    actions: ['dragToZoom', 'rightClickToReset'],
                    axis: 'horizontal',
                    keepInBounds: true,
                    maxZoomIn: 4.0
                },
                colors: ['#D44E41'],
            };
            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }
    };
    DashboardPage.prototype.showChart = function () {
        var ctx = document.getElementById('yudhatp-chart').getContext('2d');
        var chart = new chart_js__WEBPACK_IMPORTED_MODULE_13__["Chart"](ctx, {
            type: 'doughnut',
            data: {
                labels: ["VB 6", "PHP", "Delphi", ".Net", "TypeScript"],
                datasets: [{
                        label: "This is chart",
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        data: [20, 5, 10, 25, 45],
                        borderWidth: 1
                    }]
            }
        });
    };
    // showGraph() {
    //   google.charts.load('current', {packages: ['corechart']});
    //   google.charts.setOnLoadCallback(drawChart);
    //   function drawChart() {
    //   const data = google.visualization.arrayToDataTable([
    //     ['Month', 'Sales', 'Expenses'],
    //     ['Jan',  1000,      400],
    //     ['Feb',  1170,      460],
    //     ['Apr',  660,       1120],
    //     ['May',  1030,      540],
    //     ['Jun',  1000,      400],
    //     ['Jul',  1170,      460],
    //     ['Aug',  660,       1120],
    //     ['Sep',  1170,      460],
    //     ['Oct',  660,       1120],
    //     ['Nov',  1030,      540],
    //     ['Dec',  1000,      400],
    //    // ['2006',  660,       1120],
    //     // ['2007',  1030,      540]
    //   ]);
    //   const options = {
    //     title: 'Company Performance',
    //     curveType: 'function',
    //     legend: { position: 'bottom' }
    //   };
    //   const chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    //   chart.draw(data, options);
    // }
    // }
    DashboardPage.prototype.testchart = function () {
        var ctx = document.getElementById("myChart");
        var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_13__["Chart"](ctx, {
            responsive: false,
            type: 'line',
            data: {
                labels: [0, 1, 3, 4, 5, 6],
                datasets: [{
                        label: 'Test1',
                        data: [12, 19, 3, 5, 2, 3]
                    }, {
                        label: 'Test2',
                        data: [14, 16, 4, 3, 1, 2]
                    }
                ]
            },
            options: {
                pan: {
                    enabled: true,
                    mode: 'x',
                },
                zoom: {
                    drag: true,
                    enabled: true,
                    mode: 'xy'
                }
            }
        });
    };
    DashboardPage.prototype.checkLogin = function () {
        this.googlePlus.trySilentLogin({})
            .then(function (res) {
            console.log(res);
        })
            .catch(function (err) { return console.error(err); });
    };
    DashboardPage.prototype.GetLedger = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.getDateDiff1();
                this.syncService.getAllClientLedger().then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var i, j;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        ;
                        this.totalCredit = 0;
                        this.totalDebit = 0;
                        this.totalCredit1 = 0;
                        this.totalDebit1 = 0;
                        this.ledger = data;
                        for (i = 0; i < this.ledger.length; i++) {
                            this.id = this.ledger[i].InvoiceID;
                            this.IsCredit = this.ledger[i].IsCredit;
                            this.Amount = this.ledger[i].Amount;
                            console.log(this.getit);
                            for (j = 0; j < this.getit.length; j++) {
                                if (this.id == this.getit[j].Iid || this.ledger[i].CustomerID == this.getit[j].Cid) {
                                    this.ddate = this.getit[j].DueDate;
                                    this.getStartDate();
                                    if (this.diff <= 15 && this.diff >= 0) {
                                        if (this.IsCredit === 0) {
                                            this.totalDebit = this.totalDebit + this.Amount;
                                        }
                                        else {
                                            this.totalCredit = this.totalCredit + this.Amount;
                                        }
                                    }
                                    else if (this.diff < 0 && this.diff >= -15) {
                                        if (this.IsCredit === 0) {
                                            this.totalDebit1 = this.totalDebit1 + this.Amount;
                                        }
                                        else {
                                            this.totalCredit1 = this.totalCredit1 + this.Amount;
                                        }
                                    }
                                }
                            }
                        }
                        console.log(this.totalDebit);
                        console.log(this.totalDebit1);
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    DashboardPage.prototype.getDateDiff1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.syncService.getAllInvoices().then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.getit = data;
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    DashboardPage.prototype.getPO = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.syncService.getAllPOs().then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.getpo = data;
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    DashboardPage.prototype.getDateDiff = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.syncService.getAllInvoices1(this.id).then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        this.getit = data;
                        this.ddate = this.getit[0].DueDate;
                        this.getStartDate();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    DashboardPage.prototype.getStartDate = function () {
        var dateObj = new Date();
        var year = dateObj.getFullYear().toString();
        var month = dateObj.getMonth().toString();
        var date = dateObj.getDate().toString();
        var monthArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.dates = monthArray[month] + '/' + date + '/' + year;
        console.log(this.dates);
        this.difference();
    };
    DashboardPage.prototype.difference = function () {
        this.diff = Math.floor((Date.parse(this.ddate) - Date.parse(this.dates)) / 86400000);
        console.log(this.diff);
    };
    DashboardPage.prototype.getVendorOuts = function () {
        var _this = this;
        this.syncService.getAllVendorLedger().then(function (data) {
            debugger;
            _this.totalDebit2 = 0;
            _this.totalCredit2 = 0;
            _this.POS = data;
            for (var i = 0; i < _this.POS.length; i++) {
                if (_this.POS[i].IsCredit === 0) {
                    _this.totalDebit2 = _this.totalDebit2 + _this.POS[i].Amount;
                }
                else {
                    _this.totalCredit2 = _this.totalCredit2 + _this.POS[i].Amount;
                }
            }
            debugger;
        });
    };
    // shareWhatsapp(){
    //   this.socialSharing.shareViaWhatsApp(this.text, this.image, this.url).then((res) => {
    //     // Success
    //   }).catch((e) => {
    //     // Error!
    //   });
    // }
    DashboardPage.prototype.createBarChart = function () {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_13__["Chart"](this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
                // labels: this.invoiceDates,
                datasets: [{
                        label: 'Invoices',
                        data: ['2.5', '3.8', '5', '6.9', '6.9', '7.5', '10', '17'],
                        //data: this.invoiceAmounts,
                        backgroundColor: 'rgb(255, 0, 9)',
                        borderColor: 'rgb(255, 0, 9)',
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            // ticks: {
                            //   beginAtZero: true
                            // }
                            ticks: {
                                // Include a dollar sign in the ticks
                                callback: function (value, index, values) {
                                    var a = 'PKR ';
                                    return 'PKR ' + value;
                                }
                            }
                        }]
                },
                plugins: {
                    zoom: {
                        pan: {
                            enabled: true,
                            mode: 'x'
                        },
                        zoom: {
                            enabled: true,
                            mode: 'x'
                        }
                    }
                }
            }
        });
    };
    DashboardPage.prototype.createLineChart = function () {
        // tslint:disable-next-line: no-unused-expression
        this.currency;
        this.linesChart = new chart_js__WEBPACK_IMPORTED_MODULE_13__["Chart"](document.getElementById("line-chart"), {
            type: 'line',
            data: {
                // labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
                labels: this.Dates,
                datasets: [{
                        // data: [86,114,106,106,107,111,133,221,783,2478],
                        data: this.invoiceAmounts,
                        label: "Invoices",
                        borderColor: "#FF0000",
                        fill: false
                    }, {
                        // data: [282,350,411,502,635,809,947,1402,3700,5267],
                        data: this.invoicePayments,
                        label: "Payments",
                        borderColor: "#00B300",
                        fill: false
                    }, {
                        // data: [282,350,411,502,635,809,947,1402,3700,5267],
                        data: this.expenses,
                        label: "Expenses",
                        borderColor: "#D3D3D3	",
                        fill: false
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Recent Transactions'
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                callback: function (value, index, values) {
                                    return '' + value;
                                }
                            }
                        }]
                },
                plugins: {
                    zoom: {
                        pan: {
                            enabled: true,
                            mode: 'x'
                        },
                        zoom: {
                            enabled: true,
                            mode: 'x'
                        }
                    }
                }
            }
        });
    };
    DashboardPage.prototype.getCurrency = function () {
        return this.currency;
    };
    // async getInvoiceData() {
    //   
    //   let loading = await this.loadingCtrl.create();
    //   await loading.present();
    //   this.syncService.getAllInvoicesTable().then((data) => {
    //     //this.invoiceData = data;
    //     
    //     for (let i =0 ;i < data.length; i++) {
    //       this.invoiceDates.push(data[i].CreateDate);
    //       this.invoiceAmounts.push(data[i].Total);
    //     }
    //     this.createBarChart();
    //     this.invoiceAmounts;
    //     this.invoiceDates;
    //     
    //   });
    //   this.syncService.getAllInvoicePaymentsTable().then((data) => {
    //     //this.invoiceData = data;
    //     
    //     for (let i =0 ;i < data.length; i++) {
    //       this.invoicesPaymentDates.push(data[i].Date);
    //       this.invoicesPaymentAmount.push(data[i].Amount);
    //     }
    //     this.createBarChart();
    //     loading.dismiss();
    //     this.invoicesPaymentDates;
    //     this.invoicesPaymentAmount;
    //     
    //   });
    // }
    DashboardPage.prototype.getInvoicesDataFromLedger = function () {
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
                        this.syncService.getAllInvoicesLedgerTable().then(function (data) {
                            //this.invoiceData = data;
                            for (var i = 0; i < data.length; i++) {
                                if (data[i].IsCredit === 1) {
                                    var z = new Date(parseInt(data[i].Date) * 1000).toString();
                                    _this.Dates.push(_this.datePipe.transform(z, 'dd MMM yyyy'));
                                    _this.invoiceAmounts.push(0);
                                    _this.invoicePayments.push(data[i].Amount.toString());
                                    _this.expenses.push(0);
                                }
                                if (data[i].IsCredit === 2) {
                                    // this.Dates.push(data[i].Date);
                                    var z = new Date(parseInt(data[i].Date) * 1000).toString();
                                    _this.Dates.push(_this.datePipe.transform(z, 'dd MMM yyyy'));
                                    _this.invoiceAmounts.push(0);
                                    _this.invoicePayments.push(0);
                                    _this.expenses.push(data[i].Amount.toString());
                                }
                                if (data[i].IsCredit === 0) {
                                    var z = new Date(parseInt(data[i].Date) * 1000).toString();
                                    _this.Dates.push(_this.datePipe.transform(z, 'dd MMM yyyy'));
                                    _this.invoiceAmounts.push(data[i].Amount.toString());
                                    _this.invoicePayments.push(0);
                                    _this.expenses.push(0);
                                }
                            }
                            // this.createBarChart();
                            _this.createLineChart();
                            loading.dismiss();
                            _this.invoiceAmounts;
                            // this.invoiceDates;
                        });
                        this.syncService.getExpensesDashboard().then(function (data1) {
                            data1;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardPage.prototype.getClientsFiguers = function () {
        var _this = this;
        this.syncService.getDashbardFiguers().then(function (data) {
            _this.clientOverdue = data[0].Overdue;
            _this.clientOutstanding = data[0].Outstanding;
            debugger;
            // if (typeof data[0].Overdue !== undefined) {
            //   this.clientOverdue = data[0].Overdue;
            // }
            // if (typeof data[0].Outstanding !== undefined) {
            //   this.clientOutstanding = data[0].Outstanding;
            // }
        });
        this.syncService.getAllInvoices().then(function (data) {
            console.log(data);
        });
    };
    DashboardPage.prototype.toast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardPage.prototype.btn = function () {
        this.nav.navigateRoot('add-item');
    };
    DashboardPage.prototype.publish = function () {
        this.events.publish('check', 'saad2', '');
    };
    DashboardPage.prototype.btn1 = function () {
        this.events.unsubscribe('check');
    };
    DashboardPage.ctorParameters = function () { return [
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__["StatusBar"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_2__["SyncService"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('barChart', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DashboardPage.prototype, "barChart", void 0);
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__["StatusBar"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_2__["SyncService"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map