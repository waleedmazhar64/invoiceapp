(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-outstanding-outstanding-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/outstanding/outstanding.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/outstanding/outstanding.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button *ngIf=\"s == 0\"></ion-menu-button> -->\n      <ion-icon padding   (click)=\"back()\" name=\"arrow-back\"></ion-icon>\n    </ion-buttons>\n    <ion-title *ngIf=\"s == 0\">Outstanding Invoice(s)</ion-title>\n    <ion-icon slot=\"end\" name=\"search\" padding (click)=\"s=1\"></ion-icon>\n    <ion-input (ionInput)=\"geItems($event)\" padding placeholder=\"Search Invoices\" *ngIf=\"s == 1\"></ion-input>\n  </ion-toolbar>\n\n  <!-- <ion-toolbar *ngIf=\"s == 1\" color=\"primary\">\n    <ion-grid >\n      \n      <ion-row>\n          <ion-col text-center>\n              <ion-button (click)=\"paid()\" [color]=\"paidcolor\">Paid</ion-button>\n            </ion-col>\n            <ion-col text-center >\n                <ion-button (click)=\"unpaid()\" [color]=\"unpaidcolor\">Unpaid</ion-button>\n            </ion-col>\n      </ion-row> \n      \n    </ion-grid>\n  </ion-toolbar> -->\n \n</ion-header>\n\n<ion-content padding>\n    <!-- <p style=\"text-align:left;\">\n      <span *ngIf=\"editSelected == false\">{{tempInvoices.length}} invoice(s)</span>\n      <span *ngIf=\"editSelected == true\">Selected {{ selectedCount }}</span>\n      \n        <span (click)=\"editSelected = false\" *ngIf=\"editSelected == true\" style=\"float:right;\" >\n          Done\n      </span>\n    </p> -->\n    \n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addIcon()\">\n      <ion-fab-button>\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab> -->\n   \n    \n    <!-- <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\"> \n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher> -->\n    <ion-list *ngIf=\"editSelected == false\">\n                \n            <ion-item-sliding  *ngFor=\"let item of tempInvoices\">\n                <ion-item-options side=\"start\">\n                  <ion-item-option color=\"danger\" (click)=\"del(item)\">Delete</ion-item-option>\n      \n                </ion-item-options>\n                <ion-item-options side=\"end\">\n                  <ion-item-option color=\"primary\" (click)=\"createPdf(item)\">Share</ion-item-option>\n                </ion-item-options>\n                <ion-item (click)=\"itemClicked(item)\">\n      \n                    <img padding src=\"assets/bill.png\">\n\n\n                    <ion-label>\n                      <h2 text-capitalize>{{ item.Fname }}</h2>\n                      <p>{{ item.CreateDate }}</p>\n                    </ion-label>\n                    <p style=\"font-size: 80%;\">\n                        <span  style=\"float:right;\">\n                             {{ item.Total | currency:currency:true:\"1.2\" }}\n                        </span>\n                    </p>\n                      \n                    \n                 </ion-item>          \n              </ion-item-sliding>\n              <ion-icon slot=\"end\" name=\"add-circle\"></ion-icon>\n\n              </ion-list>\n              <!-- <ion-list *ngIf=\"editSelected == true\">\n                \n                <ion-item-sliding  *ngFor=\"let item of tempInvoices\">\n                    <ion-item-options side=\"start\">\n                      <ion-item-option (click)=\"edit(item)\">Edit</ion-item-option>\n                      <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option>\n          \n                    </ion-item-options>\n                    <ion-item *ngIf=\"item.selected == true\"  (click)=\"item.selected = false\" (click)=\"update()\">\n          \n                      \n                        <ion-avatar slot=\"start\" >\n                            <img *ngIf=\"item.selected == false\" src=\"assets/out.png\">\n                            <img *ngIf=\"item.selected == true\" src=\"assets/fill.png\">\n                        </ion-avatar>\n                        <ion-label>\n                          <h2 text-capitalize>{{ item.Fname }}</h2>\n                          <p>{{ item.CreateDate }}</p>\n                        </ion-label>\n                        <p style=\"font-size: 80%;\">\n                            <span  style=\"float:right;\">\n                                 {{ item.Total | currency:currency:true:\"1.2\" }}\n                            </span>\n                        </p>\n                     </ion-item>  \n                     <ion-item *ngIf=\"item.selected == false\"  (click)=\"item.selected = true\" (click)=\"update()\">\n          \n                      \n                      <ion-avatar slot=\"start\" >\n                          <img *ngIf=\"item.selected == false\" src=\"assets/out.png\">\n                          <img *ngIf=\"item.selected == true\" src=\"assets/fill.png\">\n                      </ion-avatar>\n                      <ion-label>\n                        <h2 text-capitalize>{{ item.Fname }}</h2>\n                        <p>{{ item.CreateDate }}</p>\n                      </ion-label>\n                      <p style=\"font-size: 80%;\">\n                          <span  style=\"float:right;\">\n                               {{ item.Total | currency:currency:true:\"1.2\" }}\n                          </span>\n                      </p>\n                   </ion-item>                  \n                  </ion-item-sliding>\n                  <ion-icon slot=\"end\" name=\"add-circle\"></ion-icon>\n    \n                  </ion-list> -->\n    \n  <ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"doInfinite($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"loading more...\"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  \n\n</ion-content>\n<ion-footer *ngIf=\"editSelected == true\">\n \n    <div style=\"text-align: center;\">\n      <ion-toolbar color=\"light\">\n          <ion-grid>\n              <ion-row>\n                <ion-col text-center>\n                    <ion-button color=\"primary\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  style=\"width: auto;\">Move to</ion-button>\n                </ion-col>\n                <ion-col text-center>\n                    <ion-button color=\"success\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  style=\"width: auto;\">Paid</ion-button>\n          \n                </ion-col>\n                <ion-col text-center>\n                    <ion-button color=\"danger\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  style=\"width: auto;\">Delete</ion-button>\n          \n                </ion-col>\n              </ion-row>\n              \n              <ion-row text-center>\n                  <ion-buttons slot=\"end\">\n                      <ion-button>\n                        <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n                        forward\n                      </ion-button>\n                    </ion-buttons>\n              </ion-row>\n              <ion-row>\n              </ion-row>\n              </ion-grid>\n\n      </ion-toolbar>\n    </div>\n\n\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/outstanding/outstanding-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/outstanding/outstanding-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OutstandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutstandingPageRoutingModule", function() { return OutstandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _outstanding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outstanding.page */ "./src/app/pages/outstanding/outstanding.page.ts");




var routes = [
    {
        path: '',
        component: _outstanding_page__WEBPACK_IMPORTED_MODULE_3__["OutstandingPage"]
    }
];
var OutstandingPageRoutingModule = /** @class */ (function () {
    function OutstandingPageRoutingModule() {
    }
    OutstandingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OutstandingPageRoutingModule);
    return OutstandingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/outstanding/outstanding.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/outstanding/outstanding.module.ts ***!
  \*********************************************************/
/*! exports provided: OutstandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutstandingPageModule", function() { return OutstandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _outstanding_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./outstanding-routing.module */ "./src/app/pages/outstanding/outstanding-routing.module.ts");
/* harmony import */ var _outstanding_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./outstanding.page */ "./src/app/pages/outstanding/outstanding.page.ts");













var OutstandingPageModule = /** @class */ (function () {
    function OutstandingPageModule() {
    }
    OutstandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
                _outstanding_routing_module__WEBPACK_IMPORTED_MODULE_10__["OutstandingPageRoutingModule"]
            ],
            providers: [
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
                _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
                _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"]
            ],
            declarations: [_outstanding_page__WEBPACK_IMPORTED_MODULE_11__["OutstandingPage"]]
        })
    ], OutstandingPageModule);
    return OutstandingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/outstanding/outstanding.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/outstanding/outstanding.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  width: 30px;\n  height: 30px;\n  color: #ffffff;\n}\n\nh1 {\n  font-size: 401%;\n  color: #ffffff;\n  position: absolute;\n  left: 21%;\n  top: 15%;\n}\n\n.loo {\n  font-size: 98%;\n  color: #ffffff;\n  position: absolute;\n  left: 5%;\n  top: 75%;\n  text-decoration: none;\n}\n\n.boo {\n  font-size: 97%;\n  color: #ffffff;\n  position: absolute;\n  left: 5%;\n  bottom: 5%;\n  text-decoration: none;\n}\n\n.coo {\n  font-size: 90%;\n  color: #ffffff;\n  position: absolute;\n  left: 77%;\n  bottom: 5%;\n  text-decoration: none;\n}\n\n.foo {\n  background: #5252d1;\n  height: 31%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3V0c3RhbmRpbmcvQzpcXHdhbXA2NFxcd3d3XFxpbnZvaWNlLnBrL3NyY1xcYXBwXFxwYWdlc1xcb3V0c3RhbmRpbmdcXG91dHN0YW5kaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3V0c3RhbmRpbmcvb3V0c3RhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTko7O0FEUUU7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNOSjs7QURRRTtFQUVFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0FDTko7O0FEU0U7RUFFRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ1BKOztBRFVFO0VBRUUsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNSSjs7QURVRTtFQUNFLG1CQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdXRzdGFuZGluZy9vdXRzdGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taGVhZGVyIHtcclxuLy8gICBoZWlnaHQ6IDQzcHg7Ly9ieSBkZWZhdWx0IDU2cHhcclxuLy8gfVxyXG4vLyBpb24tdG9vbGJhciB7XHJcbi8vICAgaGVpZ2h0OiA2NHB4O1xyXG4vLyAgIC0tYmFja2dyb3VuZDogIzUyNTJkMTtcclxuLy8gfVxyXG5pb24taWNvbiB7XHJcbiAgICB3aWR0aDogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gIH1cclxuICBoMSB7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiA0MDElO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMSU7XHJcbiAgICB0b3A6IDE1JVxyXG4gIH1cclxuICAubG9ve1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiA5OCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgdG9wOiA3NSU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgXHJcbiAgfVxyXG4gIC5ib297XHJcbiAgXHJcbiAgICBmb250LXNpemU6IDk3JTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIFxyXG4gIH1cclxuICAuY29ve1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDc3JTtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICB9XHJcbiAgLmZvb3tcclxuICAgIGJhY2tncm91bmQ6IzUyNTJkMTtcclxuICAgICAgICBoZWlnaHQ6IDMxJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICIsImlvbi1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0MDElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMSU7XG4gIHRvcDogMTUlO1xufVxuXG4ubG9vIHtcbiAgZm9udC1zaXplOiA5OCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xuICB0b3A6IDc1JTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYm9vIHtcbiAgZm9udC1zaXplOiA5NyU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xuICBib3R0b206IDUlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb28ge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNzclO1xuICBib3R0b206IDUlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb28ge1xuICBiYWNrZ3JvdW5kOiAjNTI1MmQxO1xuICBoZWlnaHQ6IDMxJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/outstanding/outstanding.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/outstanding/outstanding.page.ts ***!
  \*******************************************************/
/*! exports provided: OutstandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutstandingPage", function() { return OutstandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");



















pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_15___default.a.pdfMake.vfs;
var OutstandingPage = /** @class */ (function () {
    function OutstandingPage(location, actionSheetController, router, databaseprovider, loadingCtrl, nativeHttp, syncService, datePipe, network, socialSharing, alertCtrl, navCtrl, plt, file, fileOpener, storage, nav, platform, events) {
        var _this = this;
        this.location = location;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.databaseprovider = databaseprovider;
        this.loadingCtrl = loadingCtrl;
        this.nativeHttp = nativeHttp;
        this.syncService = syncService;
        this.datePipe = datePipe;
        this.network = network;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.storage = storage;
        this.nav = nav;
        this.platform = platform;
        this.events = events;
        this.invoice = [];
        this.total = 0;
        this.tempItems = [];
        this.invoices = [];
        this.tempInvoices = [];
        this.invoiceItems = [];
        this.page = 0;
        this.maximumPages = 1;
        this.refresh = false;
        this.records = 0;
        this.totalRecords = 0;
        this.title = '';
        this.items = [];
        this.editSelected = false;
        this.itemSelected = false;
        this.selectedCount = this.items.filter(function (x) { return x.selected === true; }).length;
        this.s = 0;
        this.letterObj = {
            to: '',
            from: '',
            text: ''
        };
        this.company = '';
        this.currency = '';
        this.pdfObj = null;
        this.buttonClicked = false;
        events.subscribe('refreshOutInvoices', function (user, time) {
            _this.infiniteScroll.target.disabled = false;
            _this.items = [];
            _this.page = 0;
            _this.maximumPages = 1;
            _this.refresh = false;
            _this.invoices = [];
            _this.records = 0;
            _this.totalRecords = 0;
            _this.getAllInvoicesLocaldb();
        });
        this.storage.get('COM').then(function (val) {
            _this.company = val;
        });
        if (this.items.length === 0 || this.databaseprovider.getupdateinvoice() === 1) {
            storage.get('currency').then(function (val) {
                if (val !== null) {
                    _this.currency = val.toString();
                    debugger;
                }
            });
            // alert('2.a=' + this.databaseprovider.getupdateinvoice() + ', items:' + this.items.length + ', route:' + router.url);
            this.getAllInvoicesLocaldb();
        }
        if (this.router.getCurrentNavigation().extras.state) {
            this.title = this.router.getCurrentNavigation().extras.state.title;
        }
        this.GetInvoices();
    }
    OutstandingPage.prototype.initializeactiveItems = function () {
        this.tempItems = this.items;
    };
    OutstandingPage.prototype.getAllInvoicesLocaldb = function () {
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
                        // this.syncService.getAllInvoices2().then((data) => {
                        //   debugger
                        //   this.invoices = data;
                        //   this.databaseprovider.setupdateinvoice(0);
                        //   this.initializeInvoices();
                        //   loading.dismiss();
                        //   debugger
                        // });
                        //alert('records:' + this.records);
                        this.syncService.OustandingInvoices2Pagination(this.records).then(function (data) {
                            _this.invoices = _this.invoices.concat(data);
                            _this.databaseprovider.setupdateinvoice(0);
                            _this.initializeInvoices();
                            loading.dismiss();
                            _this.records = _this.records + 10;
                            _this.totalRecords = data[0].Total1;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OutstandingPage.prototype.itemClicked = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, items, ClientSync;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        debugger;
                        items = [];
                        ClientSync = 0;
                        // this.syncService.getCustomerSync(item.Cid).then((data) => {
                        //   data 
                        //   debugger
                        // });
                        this.syncService.getInvoiceItems(item.Iid).then(function (data) {
                            debugger;
                            items = data;
                            var navigationExtras = {
                                state: {
                                    invoice: item,
                                    Items: items,
                                    url: 'Outstanding'
                                }
                            };
                            _this.router.navigate(['invoicedetails'], navigationExtras);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OutstandingPage.prototype.ngOnInit = function () {
    };
    OutstandingPage.prototype.ionViewDidEnter = function () {
        this.items = [];
        this.page = 0;
        this.maximumPages = 1;
        this.refresh = false;
        this.invoices = [];
        this.records = 0;
        this.totalRecords = 0;
        this.getAllInvoicesLocaldb();
        if (this.databaseprovider.getupdateinvoice() === 1) {
        }
        //   this.subscription = this.router.events.pipe(
        //    filter(event => event instanceof NavigationStart)
        //  ).subscribe((route: NavigationStart) => {
        //      console.log('Route: ' + route.url);
        //     // alert('route' + route.url);
        //      debugger;
        //      this.items = [];
        //      this.page = 0;
        //      this.maximumPages = 1;
        //      this.refresh = false;
        //      this.invoices = [];
        //      this.records = 0;
        //      this.totalRecords = 0;
        //      this.getAllInvoicesLocaldb();
        //  });
        //   this.sub1 = this.platform.backButton.subscribe(() => {
        //   this.nav.back();
        //  });
    };
    OutstandingPage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
        //  this.sub1.unsubscribe();
        //  this.databaseprovider.setupdateinvoice(1);
    };
    OutstandingPage.prototype.delete = function (item) {
        var _this = this;
        debugger;
        // this.syncService.deleteBalance(item.Iid).then(()=>{
        //      console.log("Nice");
        // });
        // alert('del:' + item.total);
        this.tblId = item.Iid;
        this.syncService.getCustomerSync(item.Cid).then(function (data) {
            data;
            debugger;
            var customerSync = data[0].Sync;
            if (customerSync === 1) {
                customerSync = 2;
            }
            debugger;
            _this.syncService.deleteInvoice(item.Iid, item.Total, item.Cid, customerSync).then(function () {
                _this.databaseprovider.setupdateclients(1);
                _this.getAllInvoicesLocaldb();
                _this.AddLog();
                if (_this.network.type === 'none') {
                }
                else {
                    debugger;
                    _this.syncDeletedInvoices();
                }
            });
        });
        //  this.tblId = item.Iid;
        // this.syncService.deleteInvoice(item.Iid).then(() => {
        //    this.getAllInvoicesLocaldb();
        //    this.AddLog();
        //    if (this.network.type === 'none') {
        //    }else {
        //      debugger
        //      this.syncDeletedInvoices();
        //    }
        //  });
        // alert('del:' + item.total);
    };
    OutstandingPage.prototype.del = function (item) {
        this.shareALert("Warning", '', 'Are you sure you want to delete this Invoice?', item);
    };
    OutstandingPage.prototype.shareALert = function (head, sub, msg, item) {
        var _this = this;
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
                    handler: function () {
                        console.log('yes');
                        // this.deleteClient();
                        _this.delete(item);
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
    OutstandingPage.prototype.syncDeletedInvoices = function () {
        var _this = this;
        this.syncService.syncUpdatedInvoices().then(function (Iids) {
            debugger;
            Iids;
            var Ids = [];
            if (Iids.length > 0) {
                for (var i = 0; i < Iids.length; i++) {
                    Ids.push(Iids[i].Iid);
                }
                var url = _this.databaseprovider.getURL();
                debugger;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncDeletedInvoices',
                    "POS": Iids
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        _this.syncService.updateSyncedPOS(Ids).then(function (data) {
                            console.log('It Worked');
                        });
                        _this.syncService.syncAddedLedger().then(function (data) {
                            if (data.length > 0) {
                                var IDs_1 = [];
                                for (var i = 0; i < data.length; i++) {
                                    IDs_1[i] = data[i].ID;
                                }
                                var url_1 = _this.databaseprovider.getURL();
                                debugger;
                                _this.nativeHttp.setDataSerializer("json");
                                var nativeCall_1 = _this.nativeHttp.post(url_1, {
                                    'Name': 'syncAddedLedger',
                                    "Payments": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall_1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { }))
                                    .subscribe(function (data) {
                                    console.log('Native data:', data);
                                    var g = JSON.parse(data.data);
                                    if (g.success === 1) {
                                        // alert('success');
                                        _this.syncService.updateSyncedAddedLedger(IDs_1).then(function (data) {
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
                        }).then(function () {
                            _this.syncService.syncUpdatedClients().then(function (data) {
                                if (data.length > 0) {
                                    var IDs_2 = [];
                                    for (var i = 0; i < data.length; i++) {
                                        IDs_2[i] = data[i].Cid;
                                    }
                                    var url_2 = _this.databaseprovider.getURL();
                                    debugger;
                                    _this.nativeHttp.setDataSerializer("json");
                                    var nativeCall_2 = _this.nativeHttp.post(url_2, {
                                        'Name': 'syncUpdatedClients',
                                        "Clients": data
                                    }, {
                                        'Content-Type': 'application/json',
                                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                    });
                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall_2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { }))
                                        .subscribe(function (data) {
                                        console.log('Native data:', data);
                                        var g = JSON.parse(data.data);
                                        if (g.success === 1) {
                                            //alert('success');
                                            _this.syncService.updateSyncedClients(IDs_2).then(function (data) {
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
                                    debugger;
                                }
                            }).then(function () {
                                _this.syncService.syncUpdatedItems().then(function (data) {
                                    if (data.length > 0) {
                                        var IDs_3 = [];
                                        for (var i = 0; i < data.length; i++) {
                                            IDs_3[i] = data[i].itemid;
                                        }
                                        var url_3 = _this.databaseprovider.getURL();
                                        debugger;
                                        _this.nativeHttp.setDataSerializer("json");
                                        var nativeCall_3 = _this.nativeHttp.post(url_3, {
                                            'Name': 'syncUpdatedItems',
                                            "Items": data
                                        }, {
                                            'Content-Type': 'application/json',
                                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                        });
                                        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(nativeCall_3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () { }))
                                            .subscribe(function (data) {
                                            console.log('Native data:', data);
                                            var g = JSON.parse(data.data);
                                            if (g.success === 1) {
                                                //alert('success Updated');
                                                _this.syncService.updateSyncedItems(IDs_3).then(function (data) {
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
                                    debugger;
                                });
                            });
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
    };
    OutstandingPage.prototype.geItems = function (searchbar) {
        this.initializeInvoices();
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.tempInvoices = this.tempInvoices.filter(function (v) {
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
    };
    OutstandingPage.prototype.initializeInvoices = function () {
        debugger;
        this.tempInvoices = this.invoices;
    };
    OutstandingPage.prototype.AddLog = function () {
        var _this = this;
        if (this.usdId === 1) {
            this.acttype = 'You deleted';
        }
        else {
            this.acttype = 'You deleted';
        }
        this.name = 'Invoice';
        var now = new Date().toString();
        var a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName = 'invoices';
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        debugger;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(function (data) {
            console.log("Log has been added");
            _this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    };
    OutstandingPage.prototype.share = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items, loading, message;
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
                        message = 'Client Name:' + item.Fname + ' ' + item.Lname + '\n'
                            + 'Dated:' + item.CreateDate + '\n'
                            + 'Due Date:' + item.DueDate + '\n'
                            + 'Subtotal:' + item.Subtotal + '\n'
                            + 'Discount:' + item.Discount + '\n'
                            + 'Total:' + item.Total + '\n';
                        debugger;
                        this.socialSharing.share(message).then(function () {
                            loading.dismiss();
                        }).catch(function () {
                        });
                        this.syncService.getInvoiceItems(item.Iid).then(function (data) {
                            items = data;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OutstandingPage.prototype.createPdf = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items, loading, date;
            var _this = this;
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
                        date = item.CreateDate.bold();
                        this.syncService.getInvoiceItems(item.Iid).then(function (data) {
                            items = data;
                            var itemss = [];
                            console.log(items);
                            for (var i = 0; i < items.length; i++) {
                                if (items[i].Qty > 0) {
                                    var total = items[i].Qty * items[i].CostPrice;
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
                            var left = {
                                text: [
                                    { text: 'Dated: ', bold: true, fontSize: 6, alignment: 'left' },
                                    { text: item.CreateDate, color: '#000000', fontSize: 6, alignment: 'left' },
                                ]
                            };
                            var right = {
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
                                    { text: _this.company, bold: true, alignment: 'center', style: 'subheader' },
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
                            _this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_14___default.a.createPdf(docDefinition);
                            _this.downloadPdf(loading);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OutstandingPage.prototype.downloadPdf = function (loading) {
        var _this = this;
        debugger;
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
    };
    OutstandingPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.infiniteScroll = infiniteScroll;
        // alert('total:' + this.totalRecords + '\n current: ' + this.records);
        if (this.totalRecords <= this.records) {
            infiniteScroll.target.disabled = true;
            debugger;
        }
        else {
            debugger;
            this.page++;
            this.syncService.getInvoices2Pagination(this.records).then(function (data) {
                _this.invoices = _this.invoices.concat(data);
                infiniteScroll.target.complete();
                _this.initializeInvoices();
                _this.records = _this.records + 10;
            });
        }
    };
    OutstandingPage.prototype.back = function () {
        this.nav.navigateRoot('/menu/dashboard');
    };
    OutstandingPage.prototype.GetInvoices = function () {
        var _this = this;
        this.syncService.getAllInvoices().then(function (data) {
            _this.invoice = data;
            for (var i = 0; i < data.length; i++) {
                debugger;
                _this.ddate = _this.invoice[i].DueDate;
                console.log(_this.ddate);
                _this.getStartDate();
                if (_this.diff <= 30 && _this.diff > 0) {
                    _this.total = _this.total + _this.invoice[i].Total;
                }
            }
            console.log(_this.total);
        });
    };
    OutstandingPage.prototype.getStartDate = function () {
        var dateObj = new Date();
        var year = dateObj.getFullYear().toString();
        var month = dateObj.getMonth().toString();
        var date = dateObj.getDate().toString();
        var monthArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.dates = monthArray[month] + '/' + date + '/' + year;
        console.log(this.dates);
        this.difference();
    };
    OutstandingPage.prototype.difference = function () {
        this.diff = Math.floor((Date.parse(this.dates) - Date.parse(this.ddate)) / 86400000);
        console.log(this.diff);
    };
    OutstandingPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__["FileOpener"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] }
    ]; };
    OutstandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-outstanding',
            template: __webpack_require__(/*! raw-loader!./outstanding.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/outstanding/outstanding.page.html"),
            styles: [__webpack_require__(/*! ./outstanding.page.scss */ "./src/app/pages/outstanding/outstanding.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_16__["FileOpener"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
    ], OutstandingPage);
    return OutstandingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-outstanding-outstanding-module-es5.js.map