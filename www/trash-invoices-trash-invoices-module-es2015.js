(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trash-invoices-trash-invoices-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trash-invoices/trash-invoices.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trash-invoices/trash-invoices.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button *ngIf=\"s == 0\"></ion-menu-button>\n      <ion-icon padding  *ngIf=\"s == 1\" (click)=\"back()\" name=\"arrow-back\"></ion-icon>\n    </ion-buttons>\n    <ion-title *ngIf=\"s == 0\">Deleted Invoice(s)</ion-title>\n    <ion-icon slot=\"end\" name=\"search\" padding (click)=\"s=1\"></ion-icon>\n    <ion-input (ionInput)=\"geItems($event)\" padding placeholder=\"Search Invoices\" *ngIf=\"s == 1\"></ion-input>\n  </ion-toolbar>\n\n  <!-- <ion-toolbar *ngIf=\"s == 1\" color=\"primary\">\n    <ion-grid >\n      \n      <ion-row>\n          <ion-col text-center>\n              <ion-button (click)=\"paid()\" [color]=\"paidcolor\">Paid</ion-button>\n            </ion-col>\n            <ion-col text-center >\n                <ion-button (click)=\"unpaid()\" [color]=\"unpaidcolor\">Unpaid</ion-button>\n            </ion-col>\n      </ion-row> \n      \n    </ion-grid>\n  </ion-toolbar> -->\n \n</ion-header>\n<ion-content padding>\n  <!-- <ion-item no-padding lines=\"full\"></ion-item> -->\n  <p style=\"text-align:left;\">\n    <span *ngIf=\"editSelected == false\">{{tempInvoices.length}} invoice(s)</span>\n    <span *ngIf=\"editSelected == true\">Selected {{ selectedCount }}</span>\n      \n      <!-- <span (click)=\"editClick()\" *ngIf=\"editSelected == false\" style=\"float:right;\" >\n          Edit\n      </span> -->\n      <span (click)=\"editSelected = false\" *ngIf=\"editSelected == true\" style=\"float:right;\" >\n        Done\n    </span>\n  </p>\n \n  <!-- fab placed to the bottom end -->\n\n \n  <!-- <ion-spinner name=\"crescent\" *ngIf=\"sho == true\" color=\"primary\"></ion-spinner> -->\n  \n  <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\"> \n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf=\"editSelected == false\">\n              \n          <ion-item-sliding  *ngFor=\"let item of tempInvoices\">\n              <ion-item-options side=\"start\">\n                <!-- <ion-item-option (click)=\"edit(item)\">Share</ion-item-option> -->\n                <ion-item-option color=\"danger\" (click)=\"restore(item)\">Restore</ion-item-option>\n    \n              </ion-item-options>\n              <ion-item-options side=\"end\">\n                <!-- <ion-item-option (click)=\"edit(item)\">Share</ion-item-option> -->\n                <ion-item-option color=\"primary\" (click)=\"createPdf(item)\">Share</ion-item-option>\n              </ion-item-options>\n              <ion-item (click)=\"itemClicked(item)\">\n    \n                \n                  <!-- <ion-avatar slot=\"start\" >\n                      <img src=\"assets/plus.png\">\n                  </ion-avatar> -->\n                  <img padding src=\"assets/bill.png\">\n                  <ion-label>\n                    <h2 text-capitalize>{{ item.Fname }}</h2>\n                    <p>{{ item.CreateDate }}</p>\n                  </ion-label>\n                  <p>\n                      <span  style=\"float:right;\">\n                          <!-- PKR {{ item.Total }} -->\n                          {{ item.Total | currency:currency:true:\"1.2\" }}\n                      </span>\n                  </p>\n               </ion-item>          \n            </ion-item-sliding>\n            \n\n            </ion-list>\n            <ion-list *ngIf=\"editSelected == true\">\n              \n              <ion-item-sliding  *ngFor=\"let item of tempInvoices\">\n                  <!-- <ion-item-options side=\"start\">\n                    <ion-item-option (click)=\"edit(item)\">Edit</ion-item-option>\n                    <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option>\n        \n                  </ion-item-options>-->\n                  <ion-item *ngIf=\"item.selected == true\"  (click)=\"item.selected = false\" (click)=\"update()\">\n        \n                    \n                      <ion-avatar slot=\"start\" >\n                          <img *ngIf=\"item.selected == false\" src=\"assets/out.png\">\n                          <img *ngIf=\"item.selected == true\" src=\"assets/fill.png\">\n                      </ion-avatar>\n                      <ion-label>\n                        <h2 text-capitalize>{{ item.Fname }}</h2>\n                        <p>{{ item.CreateDate }}</p>\n                      </ion-label>\n                      <ion-label>\n                          <span  style=\"float:right;\">\n                            {{ item.Total | currency:currency:true:\"1.2\" }}\n                          </span>\n                      </ion-label>\n                   </ion-item>  \n                   <ion-item *ngIf=\"item.selected == false\"  (click)=\"item.selected = true\" (click)=\"update()\">\n        \n                    \n                    \n                 </ion-item>                  \n                </ion-item-sliding>\n  \n                </ion-list>\n<!--     \n<ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"loading more...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/trash-invoices/trash-invoices-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/trash-invoices/trash-invoices-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: TrashInvoicesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashInvoicesPageRoutingModule", function() { return TrashInvoicesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trash_invoices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trash-invoices.page */ "./src/app/pages/trash-invoices/trash-invoices.page.ts");




const routes = [
    {
        path: '',
        component: _trash_invoices_page__WEBPACK_IMPORTED_MODULE_3__["TrashInvoicesPage"]
    }
];
let TrashInvoicesPageRoutingModule = class TrashInvoicesPageRoutingModule {
};
TrashInvoicesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrashInvoicesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/trash-invoices/trash-invoices.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/trash-invoices/trash-invoices.module.ts ***!
  \***************************************************************/
/*! exports provided: TrashInvoicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashInvoicesPageModule", function() { return TrashInvoicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trash_invoices_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trash-invoices-routing.module */ "./src/app/pages/trash-invoices/trash-invoices-routing.module.ts");
/* harmony import */ var _trash_invoices_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trash-invoices.page */ "./src/app/pages/trash-invoices/trash-invoices.page.ts");













let TrashInvoicesPageModule = class TrashInvoicesPageModule {
};
TrashInvoicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
            _trash_invoices_routing_module__WEBPACK_IMPORTED_MODULE_10__["TrashInvoicesPageRoutingModule"]
        ],
        providers: [
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"]
        ],
        declarations: [_trash_invoices_page__WEBPACK_IMPORTED_MODULE_11__["TrashInvoicesPage"]]
    })
], TrashInvoicesPageModule);



/***/ }),

/***/ "./src/app/pages/trash-invoices/trash-invoices.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/trash-invoices/trash-invoices.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  width: 30px;\n  height: 30px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhc2gtaW52b2ljZXMvQzpcXHdhbXA2NFxcd3d3XFxpbnZvaWNlLnBrL3NyY1xcYXBwXFxwYWdlc1xcdHJhc2gtaW52b2ljZXNcXHRyYXNoLWludm9pY2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHJhc2gtaW52b2ljZXMvdHJhc2gtaW52b2ljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFzaC1pbnZvaWNlcy90cmFzaC1pbnZvaWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gIH0iLCJpb24taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/trash-invoices/trash-invoices.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/trash-invoices/trash-invoices.page.ts ***!
  \*************************************************************/
/*! exports provided: TrashInvoicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashInvoicesPage", function() { return TrashInvoicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");



















pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15___default.a.pdfMake.vfs;
let TrashInvoicesPage = class TrashInvoicesPage {
    constructor(actionSheetController, router, databaseprovider, loadingCtrl, nativeHttp, syncService, datePipe, network, storage, socialSharing, alertCtrl, navCtrl, plt, file, fileOpener) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.databaseprovider = databaseprovider;
        this.loadingCtrl = loadingCtrl;
        this.nativeHttp = nativeHttp;
        this.syncService = syncService;
        this.datePipe = datePipe;
        this.network = network;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.active = "success";
        this.paidcolor = 'primary';
        this.unpaidcolor = 'primary';
        this.tempItems = [];
        this.invoices = [];
        this.tempInvoices = [];
        this.invoiceItems = [];
        // showSpinner = true;
        this.refresh = false;
        // items = [
        //   {
        //      name: 'saad',
        //      date: '10/09/2019',
        //      duedate: '24',
        //      total: '108',
        //      selected: false
        //   },
        //   {
        //     name: 'saad',
        //     date: '10/09/2019',
        //     duedate: '24',
        //     total: '109',
        //     selected: false
        //   }
        // ];
        this.items = [];
        this.editSelected = false;
        this.itemSelected = false;
        this.selectedCount = this.items.filter(x => x.selected === true).length;
        this.s = 0;
        this.buttonClicked = false;
        this.company = '';
        this.currency = '';
        this.pdfObj = null;
        this.storage.get('COM').then((val) => {
            this.company = val;
        });
        debugger;
        this.storage.get('userId').then((val) => {
            this.usdId = val;
            console.log(this.usdId);
        });
        debugger;
        this.getformattedDate();
        if (this.dates == null) {
            this.dates = localStorage.getItem('DATE');
        }
        this.term = localStorage.getItem('TERMS');
        this.invoice = localStorage.getItem('INV');
        console.log(this.term);
        // addpurchasedorder.clearAll();
        //  a: AddpurchasedorderPage;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"])).subscribe((route) => {
            console.log('Route: ' + route.url);
            const a = this.databaseprovider.getupdateinvoice();
            debugger;
            storage.get('currency').then((val) => {
                if (val !== null) {
                    this.currency = val.toString();
                    debugger;
                }
            });
            if (route.url == '/menu/invoice' && a === 1) {
                this.getAllInvoicesLocaldb();
            }
            //this.getDataNativeHttp();
        });
        if (this.items.length === 0) {
            debugger;
            // this.getDataNativeHttp();
            storage.get('currency').then((val) => {
                if (val !== null) {
                    this.currency = val.toString();
                    debugger;
                }
            });
            this.getAllInvoicesLocaldb();
        }
    }
    ngOnInit() {
        this.getStartDate();
        localStorage.setItem('DATE', this.ldates);
        localStorage.setItem('TERM', '30');
        localStorage.setItem('INV', '300');
    }
    initializeactiveItems() {
        this.tempItems = this.items;
    }
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Albums',
                buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            console.log('Delete clicked');
                        }
                    }, {
                        text: 'Share',
                        icon: 'share',
                        handler: () => {
                            console.log('Share clicked');
                        }
                    }, {
                        text: 'Play (open modal)',
                        icon: 'arrow-dropright-circle',
                        handler: () => {
                            console.log('Play clicked');
                        }
                    }, {
                        text: 'Favorite',
                        icon: 'heart',
                        handler: () => {
                            console.log('Favorite clicked');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    getformattedDate() {
        this.full = localStorage.getItem("DATE");
        var dateObj = new Date(this.full);
        var year = dateObj.getFullYear().toString();
        var month = dateObj.getMonth().toString();
        var date = dateObj.getDate().toString();
        var monthArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.dates = monthArray[month] + '/' + date + '/' + year;
        console.log(this.dates);
    }
    getStartDate() {
        var dateObj = new Date();
        var year = dateObj.getFullYear().toString();
        var month = dateObj.getMonth().toString();
        var date = dateObj.getDate().toString();
        var monthArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.ldates = monthArray[month] + '/' + date + '/' + year;
        console.log(this.dates);
    }
    Invoice() {
        this.up = localStorage.getItem("INV");
        this.up++;
        localStorage.setItem("INV", this.up);
    }
    edittxt() {
        alert('edit');
    }
    doRefresh(refresher) {
        this.getAllInvoicesLocaldb();
        refresher.target.complete();
        //   this.data.subscribe(data => {
        //     this.items = data.results;
        //     refresher.target.complete();
        //  });
        this.items = this.items;
    }
    itemClicked(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            debugger;
            let items = [];
            this.syncService.getInvoiceItems(item.Iid).then((data) => {
                debugger;
                items = data;
                const navigationExtras = {
                    state: {
                        invoice: item,
                        Items: items
                    }
                };
                this.router.navigate(['invoicedetails'], navigationExtras);
                loading.dismiss();
            });
            // for(let i = 0;i<this.items.length;i++) {
            //      if(this.items[i].Iid === item.Iid) {
            //         items.push(this.items[i]);
            //      }
            // }
            // debugger
            // const navigationExtras: NavigationExtras = {
            //    state: {
            //      invoice: item,
            //      Items: items
            //    }
            //  };
            //  this.router.navigate(['invoicedetails'], navigationExtras);
        });
    }
    edit(item) {
        alert('edit:' + item.total);
    }
    restore(item) {
        debugger;
        this.tblId = item.Iid;
        this.syncService.getCustomerSync(item.Cid).then((data) => {
            data;
            debugger;
            let customerSync = data[0].Sync;
            if (customerSync === 1) {
                customerSync = 2;
            }
            debugger;
            this.syncService.restoreInvoice(item.Iid, item.Total, item.Cid, customerSync).then(() => {
                this.getAllInvoicesLocaldb();
                this.AddLog();
                if (this.network.type === 'none') {
                }
                else {
                    debugger;
                    this.syncRestoredInvoices();
                }
            });
        });
        // alert('del:' + item.total);
    }
    syncRestoredInvoices() {
        debugger;
        this.syncService.syncUpdatedInvoices().then((Iids) => {
            debugger;
            Iids;
            const Ids = [];
            if (Iids.length > 0) {
                for (let i = 0; i < Iids.length; i++) {
                    Ids.push(Iids[i].Iid);
                }
                const url = this.databaseprovider.getURL();
                debugger;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url, {
                    'Name': 'syncRestoredInvoices',
                    "POS": Iids
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        this.syncService.updateSyncedPOS(Ids).then((data) => {
                            console.log('It Worked');
                        });
                        this.syncService.syncAddedLedger().then((data) => {
                            if (data.length > 0) {
                                const IDs = [];
                                for (let i = 0; i < data.length; i++) {
                                    IDs[i] = data[i].ID;
                                }
                                const url = this.databaseprovider.getURL();
                                debugger;
                                this.nativeHttp.setDataSerializer("json");
                                let nativeCall = this.nativeHttp.post(url, {
                                    'Name': 'syncAddedLedger',
                                    "Payments": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => { }))
                                    .subscribe(data => {
                                    console.log('Native data:', data);
                                    const g = JSON.parse(data.data);
                                    if (g.success === 1) {
                                        // alert('success');
                                        this.syncService.updateSyncedAddedLedger(IDs).then((data) => {
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
                        }).then(() => {
                            this.syncService.syncUpdatedClients().then((data) => {
                                if (data.length > 0) {
                                    const IDs = [];
                                    for (let i = 0; i < data.length; i++) {
                                        IDs[i] = data[i].Cid;
                                    }
                                    const url = this.databaseprovider.getURL();
                                    debugger;
                                    this.nativeHttp.setDataSerializer("json");
                                    let nativeCall = this.nativeHttp.post(url, {
                                        'Name': 'syncUpdatedClients',
                                        "Clients": data
                                    }, {
                                        'Content-Type': 'application/json',
                                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                    });
                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => { }))
                                        .subscribe(data => {
                                        console.log('Native data:', data);
                                        const g = JSON.parse(data.data);
                                        if (g.success === 1) {
                                            //alert('success');
                                            this.syncService.updateSyncedClients(IDs).then((data) => {
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
                            }).then(() => {
                                this.syncService.syncUpdatedItems().then((data) => {
                                    if (data.length > 0) {
                                        const IDs = [];
                                        for (let i = 0; i < data.length; i++) {
                                            IDs[i] = data[i].itemid;
                                        }
                                        const url = this.databaseprovider.getURL();
                                        debugger;
                                        this.nativeHttp.setDataSerializer("json");
                                        let nativeCall = this.nativeHttp.post(url, {
                                            'Name': 'syncUpdatedItems',
                                            "Items": data
                                        }, {
                                            'Content-Type': 'application/json',
                                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                        });
                                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => { }))
                                            .subscribe(data => {
                                            console.log('Native data:', data);
                                            const g = JSON.parse(data.data);
                                            if (g.success === 1) {
                                                //alert('success Updated');
                                                this.syncService.updateSyncedItems(IDs).then((data) => {
                                                });
                                            }
                                            else {
                                                //  alert('failed');
                                            }
                                            // this.initializeItems();
                                        }, err => {
                                            console.log('JS call error', err);
                                            const error = JSON.parse(err.error);
                                            // alert(error.message);
                                            console.log('Native data:', JSON.parse(error));
                                        });
                                    }
                                    debugger;
                                });
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
    update() {
        //debugger;
        this.selectedCount = this.invoices.filter(x => x.selected === true).length;
    }
    addIcon() {
        this.router.navigate(['addinvoice']);
    }
    paid() {
        this.paidcolor = 'success';
        this.unpaidcolor = 'primary';
    }
    unpaid() {
        this.unpaidcolor = 'success';
        this.paidcolor = 'primary';
    }
    back() {
        debugger;
        this.s = 0;
        this.paidcolor = 'primary';
        this.unpaidcolor = 'primary';
    }
    geItems(searchbar) {
        this.initializeInvoices();
        const q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.tempInvoices = this.tempInvoices.filter((v) => {
            if (v.Fname && q) {
                if (v.Fname.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    console.log("true");
                    return true;
                }
                console.log("false");
                return false;
            }
        });
        debugger;
    }
    getDataNativeHttp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const url = this.databaseprovider.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url, {
                'Name': 'getAllInvoices',
                "AccountId": '113008225657937776461'
            }, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                const g = JSON.parse(data.data);
                this.invoices = g.invoices;
                this.items = g.items;
                console.log(this.invoices[0]);
                // this.items = this.POitems;
                // this.sortClients();
                // this.inactiveClients = [];
                // this.activeClients = [];
                // for(let i = 0; i < this.clients.length; i++) {
                //   if(this.clients[i].Active === '0') {
                //     this.inactiveClients.push(this.clients[i]);
                //   } else {
                //     this.activeClients.push(this.clients[i]);
                //   }
                // }
                //  this.selectActive();
                // debugger;
                this.initializeInvoices();
                // this.initializeactiveItems();
                // this.initializeinactiveItems();
                this.databaseprovider.setupdatePOS(0);
            }, err => {
                console.log('JS call error', err);
            });
        });
    }
    initializeInvoices() {
        debugger;
        this.tempInvoices = this.invoices;
    }
    editClick() {
        this.editSelected = true;
        for (let i = 0; i < this.invoices.length; i++) {
            this.invoices[i]['selected'] = false;
        }
        debugger;
    }
    getAllInvoicesLocaldb() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            this.syncService.getAllInvoices3().then((data) => {
                debugger;
                this.invoices = data;
                this.databaseprovider.setupdateinvoice(0);
                this.initializeInvoices();
                loading.dismiss();
                debugger;
            });
        });
    }
    AddLog() {
        if (this.usdId === 1) {
            this.acttype = 'You restored';
        }
        else {
            this.acttype = 'You restored';
        }
        this.name = 'Invoice';
        let now = new Date().toString();
        const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName = 'invoices';
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        debugger;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(data => {
            console.log("Log has been added");
            this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    }
    createPdf(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = [];
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const date = item.CreateDate.bold();
            this.syncService.getInvoiceItems(item.Iid).then((data) => {
                items = data;
                const itemss = [];
                console.log(items);
                for (let i = 0; i < items.length; i++) {
                    if (items[i].Qty > 0) {
                        const total = items[i].Qty * items[i].CostPrice;
                        itemss.push([
                            { text: items[i].Qty.toString(), fontSize: 8, color: '#000000' },
                            { text: items[i].Description.toString() + '(' + items[i].Qty.toString() + 'x' + items[i].CostPrice.toString() + ')',
                                fontSize: 8,
                                color: '#000000'
                            },
                            { text: total.toString(), fontSize: 8, color: '#000000' },
                        ]);
                    }
                }
                const left = {
                    text: [
                        { text: 'Dated: ', bold: true, fontSize: 6, alignment: 'left' },
                        { text: item.CreateDate, color: '#000000', fontSize: 6, alignment: 'left' },
                    ]
                };
                const right = {
                    text: [
                        { text: '                         Due Date: ', bold: true, fontSize: 6, alignment: 'right' },
                        { text: item.DueDate, color: '#000000', fontSize: 6, alignment: 'right' },
                    ]
                };
                var docDefinition = {
                    pageSize: {
                        width: 226.77192,
                        height: 'auto'
                    },
                    pageMargins: [10, 15, 10, 15],
                    content: [
                        { text: this.company, bold: true, alignment: 'center', style: 'subheader' },
                        { text: item.Fname + ' ' + item.Lname, bold: true, fontSize: 6, alignment: 'right' },
                        {
                            text: [
                                // {text: item.Fname + ' ' + item.Lname, fontSize: 6, alignment: 'right'},
                                { text: item.Shop + ',' + item.BillingAddress + ',' + item.City, fontSize: 6, alignment: 'right' },
                            ]
                        },
                        { text: 'INVOICE', fontSize: 18, color: '#ff0000', alignment: 'right' },
                        // { text: this.datePipe.transform(new Date().toString(), 'dd MMM yyyy h:mm a'), fontSize: 12, alignment: 'center' },
                        {
                            margin: [0, 5, 0, 0],
                            style: 'totalsTable',
                            table: {
                                widths: [100, 100],
                                body: [
                                    [
                                        left, right
                                    ],
                                ],
                            },
                            layout: 'noBorders'
                        },
                        {
                            margin: [0, 10, 0, 0],
                            text: [
                                { text: 'Qty  ', style: 'subheader', color: '#000000' },
                                { text: '                 Item(s)', style: 'subheader', color: '#000000' },
                                { text: '                       Total(PKR)', style: 'subheader', color: '#000000' },
                            ]
                        },
                        {
                            //  alignment: 'center',
                            margin: [0, 5, 0, 0],
                            style: 'totalsTable',
                            table: {
                                //  alignment: 'center',
                                widths: [30, 120, 50],
                                body: itemss
                            },
                            layout: 'noBorders'
                        },
                        {
                            margin: [0, 10, 0, 0],
                            style: 'totalsTable',
                            table: {
                                widths: [100, 100],
                                body: [
                                    [
                                        { text: 'Subtotal:', bold: true, fontSize: 8 },
                                        { text: 'PKR ' + (item.Total + item.Discount).toLocaleString(), fontSize: 8, alignment: 'right' }
                                    ],
                                    [
                                        { text: 'Distcount:', bold: true, fontSize: 8 },
                                        { text: 'PKR ' + item.Discount.toLocaleString(), fontSize: 8, alignment: 'right' }
                                    ],
                                    [
                                        { text: 'Total:', bold: true, fontSize: 8 },
                                        { text: 'PKR ' + item.Total.toLocaleString(), fontSize: 8, alignment: 'right' }
                                    ],
                                ]
                            },
                            layout: 'noBorders'
                        },
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
                this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.createPdf(docDefinition);
                this.downloadPdf(loading);
            });
        });
    }
    downloadPdf(loading) {
        debugger;
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
};
TrashInvoicesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_8__["SyncService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__["FileOpener"] }
];
TrashInvoicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trash-invoices',
        template: __webpack_require__(/*! raw-loader!./trash-invoices.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trash-invoices/trash-invoices.page.html"),
        styles: [__webpack_require__(/*! ./trash-invoices.page.scss */ "./src/app/pages/trash-invoices/trash-invoices.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_8__["SyncService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__["FileOpener"]])
], TrashInvoicesPage);



/***/ })

}]);
//# sourceMappingURL=trash-invoices-trash-invoices-module-es2015.js.map