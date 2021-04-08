(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-invoice-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/invoice/invoice.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/invoice/invoice.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button *ngIf=\"s == 0\"></ion-menu-button>\n      <ion-icon padding  *ngIf=\"s == 1\" (click)=\"back()\" name=\"arrow-back\"></ion-icon>\n    </ion-buttons>\n    <ion-title *ngIf=\"s == 0\">Invoice(s)</ion-title>\n    <ion-icon slot=\"end\" name=\"search\" padding (click)=\"s=1\"></ion-icon>\n    <ion-input (ionInput)=\"geItems($event)\" padding placeholder=\"Search Invoices\" *ngIf=\"s == 1\"></ion-input>\n  </ion-toolbar>\n\n  <!-- <ion-toolbar *ngIf=\"s == 1\" color=\"primary\">\n    <ion-grid >\n      \n      <ion-row>\n          <ion-col text-center>\n              <ion-button (click)=\"paid()\" [color]=\"paidcolor\">Paid</ion-button>\n            </ion-col>\n            <ion-col text-center >\n                <ion-button (click)=\"unpaid()\" [color]=\"unpaidcolor\">Unpaid</ion-button>\n            </ion-col>\n      </ion-row> \n      \n    </ion-grid>\n  </ion-toolbar> -->\n \n</ion-header>\n\n<ion-content padding>\n    <!-- <p style=\"text-align:left;\">\n      <span *ngIf=\"editSelected == false\">{{tempInvoices.length}} invoice(s)</span>\n      <span *ngIf=\"editSelected == true\">Selected {{ selectedCount }}</span>\n      \n        <span (click)=\"editSelected = false\" *ngIf=\"editSelected == true\" style=\"float:right;\" >\n          Done\n      </span>\n    </p> -->\n    \n  <ion-fab *ngIf=\"showAdd === 1\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addIcon()\">\n      <ion-fab-button>\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n   \n    \n    <!-- <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\"> \n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher> -->\n    <ion-list *ngIf=\"editSelected == false\">\n                \n            <ion-item-sliding  *ngFor=\"let item of tempInvoices\">\n                <ion-item-options side=\"start\">\n                  <ion-item-option color=\"danger\" (click)=\"del(item)\">Delete</ion-item-option>\n                  <ion-item-option color=\"primary\" (click)=\"createPdf1(item)\">Print</ion-item-option>\n\n      \n                </ion-item-options>\n                <ion-item-options side=\"end\">\n                  <ion-item-option color=\"primary\" (click)=\"share1(item)\">Share</ion-item-option>\n                  <!-- <ion-item-option color=\"primary\" (click)=\"createPdf(item)\">Share</ion-item-option> -->\n                  <!-- <ion-item-option color=\"danger\" (click)=\"listBTDevice()\">Connect</ion-item-option> -->\n\n                </ion-item-options>\n                <ion-item (click)=\"itemClicked(item)\">\n      \n                    <img padding src=\"assets/bill.png\">\n\n\n                    <ion-label>\n                      <h2 text-capitalize>{{ item.Fname }}</h2>\n                      <p>{{ item.CreateDate }}</p>\n                    </ion-label>\n                    <p style=\"font-size: 80%;\">\n                        <span  style=\"float:right;\">\n                             {{ item.Total | currency:currency:true:\"1.2\" }}\n                        </span>\n                    </p>\n                      \n                    \n                 </ion-item>          \n              </ion-item-sliding>\n              <ion-icon slot=\"end\" name=\"add-circle\"></ion-icon>\n\n              </ion-list>\n              <!-- <ion-list *ngIf=\"editSelected == true\">\n                \n                <ion-item-sliding  *ngFor=\"let item of tempInvoices\">\n                    <ion-item-options side=\"start\">\n                      <ion-item-option (click)=\"edit(item)\">Edit</ion-item-option>\n                      <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option>\n          \n                    </ion-item-options>\n                    <ion-item *ngIf=\"item.selected == true\"  (click)=\"item.selected = false\" (click)=\"update()\">\n          \n                      \n                        <ion-avatar slot=\"start\" >\n                            <img *ngIf=\"item.selected == false\" src=\"assets/out.png\">\n                            <img *ngIf=\"item.selected == true\" src=\"assets/fill.png\">\n                        </ion-avatar>\n                        <ion-label>\n                          <h2 text-capitalize>{{ item.Fname }}</h2>\n                          <p>{{ item.CreateDate }}</p>\n                        </ion-label>\n                        <p style=\"font-size: 80%;\">\n                            <span  style=\"float:right;\">\n                                 {{ item.Total | currency:currency:true:\"1.2\" }}\n                            </span>\n                        </p>\n                     </ion-item>  \n                     <ion-item *ngIf=\"item.selected == false\"  (click)=\"item.selected = true\" (click)=\"update()\">\n          \n                      \n                      <ion-avatar slot=\"start\" >\n                          <img *ngIf=\"item.selected == false\" src=\"assets/out.png\">\n                          <img *ngIf=\"item.selected == true\" src=\"assets/fill.png\">\n                      </ion-avatar>\n                      <ion-label>\n                        <h2 text-capitalize>{{ item.Fname }}</h2>\n                        <p>{{ item.CreateDate }}</p>\n                      </ion-label>\n                      <p style=\"font-size: 80%;\">\n                          <span  style=\"float:right;\">\n                               {{ item.Total | currency:currency:true:\"1.2\" }}\n                          </span>\n                      </p>\n                   </ion-item>                  \n                  </ion-item-sliding>\n                  <ion-icon slot=\"end\" name=\"add-circle\"></ion-icon>\n    \n                  </ion-list> -->\n    \n  <ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"doInfinite($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"loading more...\"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  \n\n</ion-content>\n<ion-footer *ngIf=\"editSelected == true\">\n \n    <div style=\"text-align: center;\">\n      <ion-toolbar color=\"light\">\n          <ion-grid>\n              <ion-row>\n                <ion-col text-center>\n                    <ion-button color=\"primary\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  style=\"width: auto;\">Move to</ion-button>\n                </ion-col>\n                <ion-col text-center>\n                    <ion-button color=\"success\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  style=\"width: auto;\">Paid</ion-button>\n          \n                </ion-col>\n                <ion-col text-center>\n                    <ion-button color=\"danger\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  style=\"width: auto;\">Delete</ion-button>\n          \n                </ion-col>\n              </ion-row>\n              \n              <ion-row text-center>\n                  <ion-buttons slot=\"end\">\n                      <ion-button>\n                        <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n                        forward\n                      </ion-button>\n                    </ion-buttons>\n              </ion-row>\n              <ion-row>\n              </ion-row>\n              </ion-grid>\n\n      </ion-toolbar>\n    </div>\n\n\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/invoice/invoice.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/invoice/invoice.module.ts ***!
  \*************************************************/
/*! exports provided: InvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageModule", function() { return InvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./invoice.page */ "./src/app/pages/invoice/invoice.page.ts");













const routes = [
    {
        path: '',
        component: _invoice_page__WEBPACK_IMPORTED_MODULE_11__["InvoicePage"]
    }
];
let InvoicePageModule = class InvoicePageModule {
};
InvoicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_10__["FileOpener"]
        ],
        declarations: [_invoice_page__WEBPACK_IMPORTED_MODULE_11__["InvoicePage"]]
    })
], InvoicePageModule);



/***/ }),

/***/ "./src/app/pages/invoice/invoice.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/invoice/invoice.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  width: 30px;\n  height: 30px;\n  color: #ffffff;\n}\n\nh1 {\n  font-size: 401%;\n  color: #ffffff;\n  position: absolute;\n  left: 21%;\n  top: 15%;\n}\n\n.loo {\n  font-size: 98%;\n  color: #ffffff;\n  position: absolute;\n  left: 5%;\n  top: 75%;\n  text-decoration: none;\n}\n\n.boo {\n  font-size: 97%;\n  color: #ffffff;\n  position: absolute;\n  left: 5%;\n  bottom: 5%;\n  text-decoration: none;\n}\n\n.coo {\n  font-size: 90%;\n  color: #ffffff;\n  position: absolute;\n  left: 77%;\n  bottom: 5%;\n  text-decoration: none;\n}\n\n.foo {\n  background: #5252d1;\n  height: 31%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52b2ljZS9DOlxcd2FtcDY0XFx3d3dcXGludm9pY2UucGsvc3JjXFxhcHBcXHBhZ2VzXFxpbnZvaWNlXFxpbnZvaWNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52b2ljZS9pbnZvaWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ05GOztBRFFBO0VBRUUsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDTkY7O0FEUUE7RUFFRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtBQ05GOztBRFNBO0VBRUUsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNQRjs7QURVQTtFQUVFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDUkY7O0FEVUE7RUFDRSxtQkFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW52b2ljZS9pbnZvaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1oZWFkZXIge1xyXG4vLyAgIGhlaWdodDogNDNweDsvL2J5IGRlZmF1bHQgNTZweFxyXG4vLyB9XHJcbi8vIGlvbi10b29sYmFyIHtcclxuLy8gICBoZWlnaHQ6IDY0cHg7XHJcbi8vICAgLS1iYWNrZ3JvdW5kOiAjNTI1MmQxO1xyXG4vLyB9XHJcbmlvbi1pY29uIHtcclxuICB3aWR0aDogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuaDEge1xyXG4gXHJcbiAgZm9udC1zaXplOiA0MDElO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyMSU7XHJcbiAgdG9wOiAxNSVcclxufVxyXG4ubG9ve1xyXG5cclxuICBmb250LXNpemU6IDk4JTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNSU7XHJcbiAgdG9wOiA3NSU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxufVxyXG4uYm9ve1xyXG5cclxuICBmb250LXNpemU6IDk3JTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNSU7XHJcbiAgYm90dG9tOiA1JTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcbi5jb297XHJcblxyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA3NyU7XHJcbiAgYm90dG9tOiA1JTtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4uZm9ve1xyXG4gIGJhY2tncm91bmQ6IzUyNTJkMTtcclxuICAgICAgaGVpZ2h0OiAzMSU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCJpb24taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNDAxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjElO1xuICB0b3A6IDE1JTtcbn1cblxuLmxvbyB7XG4gIGZvbnQtc2l6ZTogOTglO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgdG9wOiA3NSU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJvbyB7XG4gIGZvbnQtc2l6ZTogOTclO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgYm90dG9tOiA1JTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29vIHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDc3JTtcbiAgYm90dG9tOiA1JTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9vIHtcbiAgYmFja2dyb3VuZDogIzUyNTJkMTtcbiAgaGVpZ2h0OiAzMSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/invoice/invoice.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/invoice/invoice.page.ts ***!
  \***********************************************/
/*! exports provided: InvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePage", function() { return InvoicePage; });
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
/* harmony import */ var src_app_services_print_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/print.service */ "./src/app/services/print.service.ts");
/* harmony import */ var src_app_pages_printer_list_modal_printer_list_modal_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/pages/printer-list-modal/printer-list-modal.page */ "./src/app/pages/printer-list-modal/printer-list-modal.page.ts");



















pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15___default.a.pdfMake.vfs;


let InvoicePage = class InvoicePage {
    constructor(actionSheetController, router, databaseprovider, loadingCtrl, nativeHttp, syncService, datePipe, network, printService, modalCtrl, socialSharing, alertCtrl, navCtrl, plt, file, fileOpener, storage, events, alrtCtrl) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.databaseprovider = databaseprovider;
        this.loadingCtrl = loadingCtrl;
        this.nativeHttp = nativeHttp;
        this.syncService = syncService;
        this.datePipe = datePipe;
        this.network = network;
        this.printService = printService;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.storage = storage;
        this.events = events;
        this.alrtCtrl = alrtCtrl;
        this.selectedPrinter = [];
        this.active = "success";
        this.paidcolor = 'primary';
        this.unpaidcolor = 'primary';
        this.tempItems = [];
        this.invoices = [];
        this.tempInvoices = [];
        this.invoiceItems = [];
        this.page = 0;
        this.maximumPages = 1;
        this.refresh = false;
        this.records = 0;
        this.totalRecords = 0;
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
        this.letterObj = {
            to: '',
            from: '',
            text: ''
        };
        this.company = 'PKR';
        this.currency = '';
        this.showAdd = 0;
        this.showDetails = 0;
        this.pdfObj = null;
        this.buttonClicked = false;
        this.storage.get('app').then((val1) => {
            if (val1 === 'invoice') {
                this.storage.get('ID').then((val) => {
                    this.syncService.getbValue(val, 'Invoice Add').then((data) => {
                        this.showAdd = data[0].bValue;
                    });
                    this.syncService.getbValue(val, 'Invoice Details').then((data) => {
                        this.showDetails = data[0].bValue;
                    });
                });
            }
            else {
                this.showAdd = 1;
                this.showDetails = 1;
            }
        });
        this.storage.get('COM').then((val) => {
            this.company = val;
        });
        events.subscribe('refreshInvoices', (user, time) => {
            this.infiniteScroll.target.disabled = false;
            this.items = [];
            this.page = 0;
            this.maximumPages = 1;
            this.refresh = false;
            this.invoices = [];
            this.records = 0;
            this.totalRecords = 0;
            this.getAllInvoicesLocaldb();
        });
        ;
        this.getformattedDate();
        if (this.dates == null) {
            this.dates = localStorage.getItem('DATE');
        }
        this.term = localStorage.getItem('TERMS');
        this.invoice = localStorage.getItem('INV');
        console.log(this.term);
        //     this.router.events.pipe(
        //   filter(event => event instanceof NavigationStart)
        // ).subscribe((route: NavigationStart) => {
        //     console.log('Route: '+ route.url);
        //     ;
        //     this.items = [];
        //     this.page = 0;
        //     this.maximumPages = 1;
        //     this.refresh = false;
        //     this.invoices = [];
        //     this.records = 0;
        //     this.totalRecords = 0;
        //     this.infiniteScroll.cle
        //     this.getAllInvoicesLocaldb();
        // });
        if (this.items.length === 0 || this.databaseprovider.getupdateinvoice() === 1) {
            storage.get('currency').then((val) => {
                if (val !== null) {
                    this.currency = val.toString();
                }
            });
            // alert('2.a=' + this.databaseprovider.getupdateinvoice() + ', items:' + this.items.length + ', route:' + router.url);
            this.getAllInvoicesLocaldb();
        }
    }
    ionViewDidEnter() {
        this.subscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"])).subscribe((route) => {
            console.log('Route: ' + route.url);
            ;
            this.items = [];
            this.page = 0;
            this.maximumPages = 1;
            this.refresh = false;
            this.invoices = [];
            this.records = 0;
            this.totalRecords = 0;
            this.getAllInvoicesLocaldb();
        });
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
        //  this.databaseprovider.setupdateinvoice(1);
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
            if (this.showDetails === 1) {
                let loading = yield this.loadingCtrl.create();
                yield loading.present();
                let items = [];
                const ClientSync = 0;
                // this.syncService.getCustomerSync(item.Cid).then((data) => {
                //   data 
                //   
                // });
                this.syncService.getInvoiceItems(item.Iid).then((data) => {
                    items = data;
                    const navigationExtras = {
                        state: {
                            invoice: item,
                            Items: items,
                            url: '/menu/invoice'
                        }
                    };
                    this.router.navigate(['invoicedetails'], navigationExtras);
                    loading.dismiss();
                });
            }
            // for(let i = 0;i<this.items.length;i++) {
            //      if(this.items[i].Iid === item.Iid) {
            //         items.push(this.items[i]);
            //      }
            // }
            // 
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
    delete(item) {
        // this.syncService.deleteBalance(item.Iid).then(()=>{
        //      console.log("Nice");
        // });
        // alert('del:' + item.total);
        this.tblId = item.Iid;
        this.syncService.getCustomerSync(item.Cid).then((data) => {
            data;
            let customerSync = data[0].Sync;
            if (customerSync === 1) {
                customerSync = 2;
            }
            this.syncService.deleteInvoice(item.Iid, item.Total, item.Cid, customerSync).then(() => {
                this.invoices = [];
                this.records = 0;
                this.databaseprovider.setupdateclients(1);
                this.getAllInvoicesLocaldb();
                this.AddLog();
                if (this.network.type === 'none') {
                }
                else {
                    this.syncDeletedInvoices();
                }
            });
        });
        //  this.tblId = item.Iid;
        // this.syncService.deleteInvoice(item.Iid).then(() => {
        //    this.getAllInvoicesLocaldb();
        //    this.AddLog();
        //    if (this.network.type === 'none') {
        //    }else {
        //      
        //      this.syncDeletedInvoices();
        //    }
        //  });
        // alert('del:' + item.total);
    }
    del(item) {
        this.shareALert("Warning", '', 'Are you sure you want to delete this Invoice?', item);
    }
    shareALert(head, sub, msg, item) {
        this.alertCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'alertSize',
            buttons: [
                {
                    text: 'Delete',
                    cssClass: 'customClass',
                    role: 'cancel',
                    handler: () => {
                        console.log('yes');
                        // this.deleteClient();
                        this.delete(item);
                    }
                },
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Confirm Ok');
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    syncDeletedInvoices() {
        this.syncService.syncUpdatedInvoices().then((Iids) => {
            Iids;
            const Ids = [];
            if (Iids.length > 0) {
                for (let i = 0; i < Iids.length; i++) {
                    Ids.push(Iids[i].Iid);
                }
                const url = this.databaseprovider.getURL();
                ;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url, {
                    'Name': 'syncDeletedInvoices',
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
                                ;
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
                            }
                        }).then(() => {
                            this.syncService.syncUpdatedClients().then((data) => {
                                if (data.length > 0) {
                                    const IDs = [];
                                    for (let i = 0; i < data.length; i++) {
                                        IDs[i] = data[i].Cid;
                                    }
                                    const url = this.databaseprovider.getURL();
                                    ;
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
                                }
                            }).then(() => {
                                this.syncService.syncUpdatedItems().then((data) => {
                                    if (data.length > 0) {
                                        const IDs = [];
                                        for (let i = 0; i < data.length; i++) {
                                            IDs[i] = data[i].itemid;
                                        }
                                        const url = this.databaseprovider.getURL();
                                        ;
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
            }
        });
    }
    update() {
        //;
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
                // ;
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
        this.tempInvoices = this.invoices;
    }
    editClick() {
        this.editSelected = true;
        for (let i = 0; i < this.invoices.length; i++) {
            this.invoices[i]['selected'] = false;
        }
    }
    getAllInvoicesLocaldb() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            // this.syncService.getAllInvoices2().then((data) => {
            //   
            //   this.invoices = data;
            //   this.databaseprovider.setupdateinvoice(0);
            //   this.initializeInvoices();
            //   loading.dismiss();
            //   
            // });
            //alert('records:' + this.records);
            this.syncService.getInvoices2Pagination(this.records).then((data) => {
                this.invoices = this.invoices.concat(data);
                this.databaseprovider.setupdateinvoice(0);
                this.initializeInvoices();
                loading.dismiss();
                this.records = this.records + 10;
                this.totalRecords = data[0].Total1;
            });
        });
    }
    AddLog() {
        if (this.usdId === 1) {
            this.acttype = 'You deleted';
        }
        else {
            this.acttype = 'You deleted';
        }
        this.name = 'Invoice';
        let now = new Date().toString();
        const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName = 'invoices';
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(data => {
            console.log("Log has been added");
            this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    }
    share(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = [];
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            // item.Subtotal = parseFloat(item.Subtotal).toFixed(2);
            const message = 'Client Name:' + item.Fname + ' ' + item.Lname + '\n'
                + 'Dated:' + item.CreateDate + '\n'
                + 'Due Date:' + item.DueDate + '\n'
                + 'Subtotal:' + item.Subtotal + '\n'
                + 'Discount:' + item.Discount + '\n'
                + 'Total:' + item.Total + '\n';
            this.socialSharing.share(message).then(() => {
                loading.dismiss();
            }).catch(() => {
            });
            this.syncService.getInvoiceItems(item.Iid).then((data) => {
                items = data;
            });
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
    doInfinite(infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        // alert('total:' + this.totalRecords + '\n current: ' + this.records);
        if (this.totalRecords <= this.records) {
            infiniteScroll.target.disabled = true;
        }
        else {
            this.page++;
            this.syncService.getInvoices2Pagination(this.records).then((data) => {
                this.invoices = this.invoices.concat(data);
                infiniteScroll.target.complete();
                this.initializeInvoices();
                this.records = this.records + 10;
            });
        }
    }
    listBTDevice() {
        this.printService.searchBt().then((datalist) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(datalist);
            //1. Open printer select modal
            //let abc=await this.modalCtrl.create(PrinterListModalPage, {data:datalist});
            let abc = yield this.modalCtrl.create({
                component: src_app_pages_printer_list_modal_printer_list_modal_page__WEBPACK_IMPORTED_MODULE_18__["PrinterListModalPage"],
                componentProps: { data: datalist }
            });
            //2. Printer selected, save into this.selectedPrinter
            /*abc.dismiss(async data=>{
              this.selectedPrinter=data;
              console.log(this.selectedPrinter);
              let xyz=await this.alertCtrl.create({
                header: data.name + " selected",
                buttons: ['Dismiss']
              });
               xyz.present();
      
            });*/
            abc.onDidDismiss().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.selectedPrinter = data;
                console.log(this.selectedPrinter);
                let xyz = yield this.alertCtrl.create({
                    header: data.data.name + " selected",
                    buttons: ['Dismiss']
                });
                xyz.present();
            }));
            //0. Present Modal
            abc.present();
        }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("ERROR", err);
            let mno = yield this.alertCtrl.create({
                header: "ERROR " + err,
                buttons: ['Dismiss']
            });
            mno.present();
        }));
    }
    testConnectPrinter() {
        var id = this.selectedPrinter.data.id;
        if (id == null || id == "" || id == undefined) {
            //nothing happens, you can put an alert here saying no printer selected
        }
        else {
            let foo = this.printService.connectBT(id).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("CONNECT SUCCESSFUL", data);
                let mno = yield this.alertCtrl.create({
                    header: "Connect successful",
                    buttons: ['Dismiss']
                });
                mno.present();
            }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("Not able to connect", err);
                let mno = yield this.alertCtrl.create({
                    header: "ERROR " + err,
                    buttons: ['Dismiss']
                });
                mno.present();
            }));
        }
    }
    testPrinter(printData) {
        //var printData=" Big man in a suit of armour\n\n\n Take that of who are you\n\n\n Genius\n Billionare\n Playboy\n Philantropist\n"
        //var id=this.selectedPrinter.data.id;
        var id = "66:12:5A:14:70:76";
        if (id == null || id == "" || id == undefined) {
            //nothing happens, you can put an alert here saying no printer selected
        }
        else {
            let foo = this.printService.testPrint(id, printData);
        }
    }
    createPdf1(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = [];
            var Cashmemo;
            var sub;
            var dis;
            var tot;
            const date = item.CreateDate.bold();
            //this.testPrinter('\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+this.company+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+'\x1b\x45\x01'+item.Fname +' '+ item.Lname +'\x1b\x45\x00'+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+item.Shop + ',' + item.BillingAddress + ',' + item.City+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+'\x1b\x21\x30'+'\x1b\x45\x01'+'INVOICE'+'\x1b\x45\x00'+'\x1b\x21\x00'+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n\n'+'\x1b\x61\x00'+'\x1b\x45\x01'+'Dated:'+'\x1b\x45\x00'+item.CreateDate+'\x1b\x61\x00'+'\x1b\x61\x02'+'\x1b\x45\x01'+'  Due:'+'\x1b\x45\x00'+item.DueDate+'\x1b\x61\x02'+'\n\n'+'\x1b\x61\x00'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'Qty'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x00'+'\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'        Item(s)'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'    Total(PKR)'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\n');
            let printData = '\x1b\x61\x01' + '\x1b\x4d\x00' + '\x1b\x45\x01' + this.company + '\x1b\x45\x01' + '\x1b\x4d\x00' + '\x1b\x61\x01' + '\n' + '\x1b\x61\x02' + '\x1b\x4d\x01' + '\x1b\x45\x01' + item.Fname + ' ' + item.Lname + '\x1b\x45\x00' + '\x1b\x4d\x01' + '\x1b\x61\x02' + '\n' + '\x1b\x61\x02' + '\x1b\x4d\x01' + item.Shop + ',' + item.BillingAddress + ',' + item.City + '\x1b\x4d\x01' + '\x1b\x61\x02' + '\n' + '\x1b\x61\x02' + '\x1b\x4d\x01' + '\x1b\x21\x30' + '\x1b\x45\x01' + 'INVOICE' + '\x1b\x45\x00' + '\x1b\x21\x00' + '\x1b\x4d\x01' + '\x1b\x61\x02' + '\n\n' + '\x1b\x61\x00' + '\x1b\x45\x01' + 'Dated:' + '\x1b\x45\x00' + item.CreateDate + '\x1b\x61\x00' + '\x1b\x61\x02' + '\x1b\x45\x01' + '  Due:' + '\x1b\x45\x00' + item.DueDate + '\x1b\x61\x02' + '\n\n' + '\x1b\x61\x00' + '\x1b\x4d\x00' + '\x1b\x45\x01' + 'Qty' + '\x1b\x45\x01' + '\x1b\x4d\x00' + '\x1b\x61\x00' + '\x1b\x61\x01' + '\x1b\x4d\x00' + '\x1b\x45\x01' + '        Item(s)' + '\x1b\x45\x01' + '\x1b\x4d\x00' + '\x1b\x61\x01' + '\x1b\x61\x01' + '\x1b\x4d\x00' + '\x1b\x45\x01' + '    Total(PKR)' + '\x1b\x45\x01' + '\x1b\x4d\x00' + '\x1b\x61\x01' + '\n' + '\x1b\x4d\x01' + '\x1b\x45\x00' + Cashmemo + '\n' + '\x1b\x45\x01' + 'Subtotal:' + '\x1b\x45\x00' + sub + '\n' + '\x1b\x45\x01' + 'Discount:' + '\x1b\x45\x00' + dis + '\n' + '\x1b\x45\x01' + 'Total:' + '\x1b\x45\x00' + tot + '\n\n\n';
            //this.testPrinter(data);
            this.syncService.getInvoiceItems(item.Iid).then((data) => {
                console.log(data);
                let s = '';
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
                        let Qty = items[i].Qty.toString();
                        Qty = Qty.padEnd(8, ' ');
                        let total1 = total.toString();
                        total1 = total1.padStart(8, ' ');
                        let items1 = items[i].Description.toString() + '(' + items[i].Qty.toString() + 'x' + items[i].CostPrice.toString() + ')';
                        items1 = items1.padEnd(23, ' ');
                        s += Qty + items1 + total1 + '\n';
                    }
                }
                //this.testPrinter(this.z);
                //console.log(this.z)
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
                console.log(this.pdfObj);
                printData = printData.replace(Cashmemo, s);
                //printData=printData.replace(',',' ');
                let ser = 'PKR ' + (item.Total + item.Discount).toLocaleString();
                ser = ser.padStart(30, ' ');
                printData = printData.replace(sub, ser);
                let das = 'PKR ' + item.Discount.toLocaleString();
                das = das.padStart(30, ' ');
                printData = printData.replace(dis, das);
                let tat = 'PKR ' + item.Total.toLocaleString();
                tat = tat.padStart(33, ' ');
                printData = printData.replace(tot, tat);
                //this.testPrinter('\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+this.company+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+'\x1b\x45\x01'+item.Fname +' '+ item.Lname +'\x1b\x45\x00'+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+item.Shop + ',' + item.BillingAddress + ',' + item.City+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n'+'\x1b\x61\x02'+'\x1b\x4d\x01'+'\x1b\x21\x30'+'\x1b\x45\x01'+'INVOICE'+'\x1b\x45\x00'+'\x1b\x21\x00'+'\x1b\x4d\x01'+'\x1b\x61\x02'+'\n\n'+'\x1b\x61\x00'+'\x1b\x45\x01'+'Dated:'+'\x1b\x45\x00'+item.CreateDate+'\x1b\x61\x00'+'\x1b\x61\x02'+'\x1b\x45\x01'+'  Due:'+'\x1b\x45\x00'+item.DueDate+'\x1b\x61\x02'+'\n\n'+'\x1b\x61\x00'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'Qty'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x00'+'\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'        Item(s)'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\x1b\x61\x01'+'\x1b\x4d\x00'+'\x1b\x45\x01'+'    Total(PKR)'+'\x1b\x45\x01'+'\x1b\x4d\x00'+'\x1b\x61\x01'+'\n');
                this.testPrinter(printData);
                /*setTimeout( () => {
                  this.testPrinter('hello\n');
             },2000 );*/
            });
        });
    }
    ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint8Array(buf));
    }
    downloadPdf1() {
        var binaryArray;
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer((buffer) => {
                // var blob = new Blob([buffer], { type: 'application/pdf' });
                console.log(buffer.length);
                var utf8 = new Uint8Array(buffer);
                //this.testPrinter(utf8);
                binaryArray = utf8.buffer;
                var blob = new Blob([binaryArray], { type: 'application/pdf' });
                const a = new Date().getTime().toString();
                this.file.writeFile(this.file.dataDirectory, a + '.pdf', blob).then(fileEntry => {
                    console.log(fileEntry);
                    //this.fileOpener.open(this.file.dataDirectory+ a + '.pdf', 'application/pdf');        
                });
                console.log(this.file.dataDirectory + a + '.pdf');
                //this.testPrinter(this.file.dataDirectory+ a + '.pdf');
                //;
                /*this.socialSharing.share("test", null, this.file.dataDirectory + a + '.pdf', null).then(() => {
                  loading.dismiss();
                  console.log('social share');
                  console.log(this.file.dataDirectory);
                  }).catch(() => {
              
                  });*/
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
    share1(item) {
        this.alrtCtrl.create({
            header: 'Share Option',
            subHeader: '',
            message: 'Do you want to share pdf or text?',
            buttons: [
                {
                    text: 'PDF',
                    handler: () => {
                        console.log('Cancel clicked');
                        this.createPdf(item);
                    }
                },
                {
                    text: 'TEXT',
                    handler: (data) => {
                        this.shareText(item);
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    shareText(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            let message = this.company + ' - ' + 'Invoice No: ' + item.Iid +
                '\n' + item.Fname + ' ' + item.Lname +
                '\n' + item.CreateDate +
                '\nDue Date: ' + item.DueDate +
                '\nDetail';
            // let message = 'From- \nCustomer Account name - ' + item.Fname + ' ' + item.Lname + '\nShop - ' + item.Shop +
            // '\nAddress - ' + item.BillingAddress + '\nCity - ' + item.City +
            // '\nInvoice Items Details Are As Follow:';
            // for(let i=0; i<this.addedItems.length; i++) {
            //   message = message +  '\nItem No. - ' + i + 1 + '\nItem - ' + this.addedItems[i].Description + '\nQty - ' + this.addedItems[i].Qty;
            // }
            let items = [];
            this.syncService.getInvoiceItems(item.Iid).then((data) => {
                items = data;
                const itemss = [];
                console.log(items);
                for (let i = 0; i < items.length; i++) {
                    message = message + '\n' + (i + 1) + '. ' + items[i].Description + ' | ' + items[i].Qty + 'x' + items[i].CostPrice + ' | ' + 'Subtotal - ' + this.currency + (items[i].Qty * items[i].CostPrice);
                }
                if (item.Discount > 0) {
                    message = message + '\nDiscount - ' + this.currency + ' ' + item.Discount + ' | ' + 'Total - ' + this.currency + item.Total;
                }
                if (item.Discount === 0) {
                    message = message + '\nTotal - ' + this.currency + item.Total;
                }
                this.socialSharing.share(message, null, null, null).then(() => {
                    loading.dismiss();
                }).catch(() => {
                });
            });
        });
    }
};
InvoicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_8__["SyncService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"] },
    { type: src_app_services_print_service__WEBPACK_IMPORTED_MODULE_17__["PrintService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__["FileOpener"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
InvoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice',
        template: __webpack_require__(/*! raw-loader!./invoice.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/invoice/invoice.page.html"),
        styles: [__webpack_require__(/*! ./invoice.page.scss */ "./src/app/pages/invoice/invoice.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_8__["SyncService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"],
        src_app_services_print_service__WEBPACK_IMPORTED_MODULE_17__["PrintService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__["FileOpener"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], InvoicePage);



/***/ }),

/***/ "./src/app/services/print.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/print.service.ts ***!
  \*******************************************/
/*! exports provided: PrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let PrintService = class PrintService {
    constructor(btSerial, alertCtrl) {
        this.btSerial = btSerial;
        this.alertCtrl = alertCtrl;
    }
    searchBt() {
        return this.btSerial.list();
    }
    connectBT(address) {
        return this.btSerial.connect(address);
    }
    testPrint(address, printData) {
        //let printData=" Big man in a suit of armour\n\n\n Take that of who are you\n\n\n Genius\n Billionare\n Playboy\n Philantropist\n"
        this.btSerial.isEnabled().then(() => {
            console.log('enabled');
            let xyz = this.connectBT(address).subscribe(data => {
                this.btSerial.write(printData).then((dataz) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log("WRITE SUCCESS", dataz);
                    let mno = yield this.alertCtrl.create({
                        header: "Print SUCCESS!",
                        buttons: ['Dismiss']
                    });
                    mno.present();
                    xyz.unsubscribe();
                }), (errx) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log("WRITE FAILED", errx);
                    let mno = yield this.alertCtrl.create({
                        header: "ERROR " + errx,
                        buttons: ['Dismiss']
                    });
                    mno.present();
                }));
            }, (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log("CONNECTION ERROR", err);
                let mno = yield this.alertCtrl.create({
                    header: "ERROR " + err,
                    buttons: ['Dismiss']
                });
                mno.present();
            }));
        }, () => {
            //alert("Kindly turn on bluetooth");
            //this.enableBluetooth();
        });
    }
    enableBluetooth() {
        this.btSerial.enable().then(() => {
            alert("Bluetooth is enabled");
        }, () => {
            alert("The user did *not* enable Bluetooth");
        });
    }
};
PrintService.ctorParameters = () => [
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
PrintService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], PrintService);



/***/ })

}]);
//# sourceMappingURL=invoice-invoice-module-es2015.js.map