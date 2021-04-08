(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchased-orders-purchased-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/purchased-orders/purchased-orders.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/purchased-orders/purchased-orders.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button *ngIf=\"s == 0\"></ion-menu-button>\n      <ion-icon padding  *ngIf=\"s == 1\" (click)=\"back()\" name=\"arrow-back\"></ion-icon>\n\t  <ion-icon padding  *ngIf=\"s == 2\" (click)=\"back1()\" name=\"arrow-back\"></ion-icon>\n      <ion-title *ngIf=\"s == 2\" >Outstanding PO(s)</ion-title>\n    </ion-buttons>\n    <ion-title *ngIf=\"s == 0\">Purchased Order(s)</ion-title>\n    <ion-icon slot=\"end\" name=\"search\" padding (click)=\"s=1\"></ion-icon>\n    <ion-input (ionInput)=\"geItems($event)\" padding placeholder=\"Search Invoices\" *ngIf=\"s == 1\"></ion-input>\n  </ion-toolbar>\n  <!-- <ion-toolbar *ngIf=\"s == 1\" color=\"primary\">\n    <ion-grid >\n      \n      <ion-row>\n          <ion-col text-center>\n              <ion-button (click)=\"paid()\" [color]=\"paidcolor\">Paid</ion-button>\n            </ion-col>\n            <ion-col text-center >\n                <ion-button (click)=\"unpaid()\" [color]=\"unpaidcolor\">Unpaid</ion-button>\n            </ion-col>\n      </ion-row> \n      \n    </ion-grid>\n  </ion-toolbar> -->\n \n</ion-header>\n\n<ion-content padding>\n  <!-- <p style=\"text-align:left;\">\n      <span *ngIf=\"editSelected == false\">{{tempPOS.length}} PO(s)</span>\n      <span *ngIf=\"editSelected == true\">Selected {{ selectedCount }}</span>\n        \n      \n        <span (click)=\"editSelected = false\" *ngIf=\"editSelected == true\" style=\"float:right;\" >\n          Done\n      </span>\n    </p> -->\n       <!-- fab placed to the bottom end -->\n<ion-fab *ngIf=\"showAdd === 1\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addIcon()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\"> \n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher> -->\n  <ion-list *ngIf=\"editSelected == false\">\n              \n          <ion-item-sliding  *ngFor=\"let item of tempPOS\">\n              <ion-item-options side=\"start\">\n                <ion-item-option color=\"danger\" (click)=\"del(item)\">Delete</ion-item-option>\n    \n              </ion-item-options>\n              <ion-item-options side=\"end\">\n                <ion-item-option color=\"primary\" (click)=\"createPdf(item)\">Share</ion-item-option>\n              </ion-item-options>\n              <ion-item (click)=\"itemClicked(item)\">\n    \n                \n                \n                  <img padding src=\"assets/cart.png\">\n                  <ion-label>\n                    <h2 text-capitalize>{{ item.Name }}</h2>\n                    <p>{{ item.Date }}</p>\n                  </ion-label>\n                  <p style=\"font-size:80%;\">  \n                    <span (click)=\"edit()\" style=\"float:right;\">\n                    {{ item.Total | currency:currency:true:\"1.2\"}}\n                     </span>\n                   </p>\n               </ion-item>          \n            </ion-item-sliding>\n            <ion-icon slot=\"end\" name=\"add-circle\"></ion-icon>\n\n            </ion-list>\n            <!-- <ion-list *ngIf=\"editSelected == true\">\n              \n              <ion-item-sliding  *ngFor=\"let item of POs\">\n                  <ion-item *ngIf=\"item.selected == true\"  (click)=\"item.selected = false\" (click)=\"update()\">\n                      <ion-avatar slot=\"start\" >\n                          <img *ngIf=\"item.selected == false\" src=\"assets/out.png\">\n                          <img *ngIf=\"item.selected == true\" src=\"assets/fill.png\">\n                      </ion-avatar>\n                      <ion-label>\n                        <h2 text-capitalize>{{ item.Name }}</h2>\n                        <p>{{ item.Date }}</p>\n                      </ion-label>\n                      <ion-label>\n                          <p style=\"font-size:80%;\">\n                          <span (click)=\"edit()\" style=\"float:right;\">\n                              {{ item.Total | currency:currency:true:\"1.2\"}}\n                          </span>\n                          </p>\n                      </ion-label>\n                   </ion-item>  \n                   <ion-item *ngIf=\"item.selected == false\"  (click)=\"item.selected = true\" (click)=\"update()\">\n        \n                    \n                    <ion-avatar slot=\"start\" >\n                        <img *ngIf=\"item.selected == false\" src=\"assets/out.png\">\n                        <img *ngIf=\"item.selected == true\" src=\"assets/fill.png\">\n                    </ion-avatar>\n                    <ion-label>\n                      <h2 text-capitalize>{{ item.Name }}</h2>\n                      <p>{{ item.Date }}</p>\n                    </ion-label>\n                    <p>\n                        <span (click)=\"edit()\" style=\"float:right;\">\n                            PKR {{ item.Total }}\n                        </span>\n                      </p>\n                 </ion-item>                  \n                </ion-item-sliding>\n                <ion-icon slot=\"end\" name=\"add-circle\"></ion-icon>\n  \n                </ion-list> -->\n    \n<ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"loading more...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n<ion-footer *ngIf=\"editSelected == true\">\n\n  <div style=\"text-align: center;\">\n    <ion-toolbar color=\"light\">\n        <ion-grid text-center>\n            <ion-row text-center>\n                <ion-button (click)=\"deleteSelected()\" color=\"danger\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  style=\"width: 80%; margin-left: auto;margin-right: auto;--border-radius: 15px;\">Delete</ion-button>\n\n            </ion-row>\n            \n            <ion-row text-center>\n                <ion-buttons slot=\"end\">\n                    <ion-button>\n                      <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n                      forward\n                    </ion-button>\n                  </ion-buttons>\n            </ion-row>\n            <ion-row>\n            </ion-row>\n            </ion-grid>\n\n    </ion-toolbar>\n  </div>\n\n\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/purchased-orders/purchased-orders.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/purchased-orders/purchased-orders.module.ts ***!
  \*******************************************************************/
/*! exports provided: PurchasedOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedOrdersPageModule", function() { return PurchasedOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _purchased_orders_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./purchased-orders.page */ "./src/app/pages/purchased-orders/purchased-orders.page.ts");














const routes = [
    {
        path: '',
        component: _purchased_orders_page__WEBPACK_IMPORTED_MODULE_12__["PurchasedOrdersPage"]
    }
];
let PurchasedOrdersPageModule = class PurchasedOrdersPageModule {
};
PurchasedOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__["FileOpener"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"]
        ],
        declarations: [_purchased_orders_page__WEBPACK_IMPORTED_MODULE_12__["PurchasedOrdersPage"]]
    })
], PurchasedOrdersPageModule);



/***/ }),

/***/ "./src/app/pages/purchased-orders/purchased-orders.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/purchased-orders/purchased-orders.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  width: 30px;\n  height: 30px;\n  color: #ffffff;\n}\n\nh1 {\n  font-size: 401%;\n  color: #ffffff;\n  position: absolute;\n  left: 21%;\n  top: 15%;\n}\n\n.loo {\n  font-size: 98%;\n  color: #ffffff;\n  position: absolute;\n  left: 5%;\n  top: 75%;\n  text-decoration: none;\n}\n\n.boo {\n  font-size: 97%;\n  color: #ffffff;\n  position: absolute;\n  left: 5%;\n  bottom: 5%;\n  text-decoration: none;\n}\n\n.coo {\n  font-size: 90%;\n  color: #ffffff;\n  position: absolute;\n  left: 77%;\n  bottom: 5%;\n  text-decoration: none;\n}\n\n.foo {\n  background: #5252d1;\n  height: 31%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVyY2hhc2VkLW9yZGVycy9DOlxcd2FtcDY0XFx3d3dcXGludm9pY2UucGsvc3JjXFxhcHBcXHBhZ2VzXFxwdXJjaGFzZWQtb3JkZXJzXFxwdXJjaGFzZWQtb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHVyY2hhc2VkLW9yZGVycy9wdXJjaGFzZWQtb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ05KOztBRFFFO0VBRUUsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDTko7O0FEUUU7RUFFRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtBQ05KOztBRFNFO0VBRUUsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNQSjs7QURVRTtFQUVFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDUko7O0FEVUU7RUFDRSxtQkFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ1BSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHVyY2hhc2VkLW9yZGVycy9wdXJjaGFzZWQtb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1oZWFkZXIge1xyXG4vLyAgICAgaGVpZ2h0OiA0M3B4Oy8vYnkgZGVmYXVsdCA1NnB4XHJcbi8vICAgfVxyXG4vLyAgIGlvbi10b29sYmFyIHtcclxuLy8gICAgIGhlaWdodDogNjRweDtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogIzUyNTJkMTtcclxuLy8gICB9XHJcbiAgaW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDMwcHg7IC8vUHJlZmVycmVkIHNpemUgaGVyZVxyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxuICB9XHJcbiAgaDEge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogNDAxJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjElO1xyXG4gICAgdG9wOiAxNSVcclxuICB9XHJcbiAgLmxvb3tcclxuICBcclxuICAgIGZvbnQtc2l6ZTogOTglO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICAgIHRvcDogNzUlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIFxyXG4gIH1cclxuICAuYm9ve1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiA5NyU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBcclxuICB9XHJcbiAgLmNvb3tcclxuICBcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA3NyU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgfVxyXG4gIC5mb297XHJcbiAgICBiYWNrZ3JvdW5kOiM1MjUyZDE7XHJcbiAgICAgICAgaGVpZ2h0OiAzMSU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAiLCJpb24taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNDAxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjElO1xuICB0b3A6IDE1JTtcbn1cblxuLmxvbyB7XG4gIGZvbnQtc2l6ZTogOTglO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgdG9wOiA3NSU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJvbyB7XG4gIGZvbnQtc2l6ZTogOTclO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1JTtcbiAgYm90dG9tOiA1JTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29vIHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDc3JTtcbiAgYm90dG9tOiA1JTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9vIHtcbiAgYmFja2dyb3VuZDogIzUyNTJkMTtcbiAgaGVpZ2h0OiAzMSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/purchased-orders/purchased-orders.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/purchased-orders/purchased-orders.page.ts ***!
  \*****************************************************************/
/*! exports provided: PurchasedOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedOrdersPage", function() { return PurchasedOrdersPage; });
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
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");




















pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_16___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_17___default.a.pdfMake.vfs;
let PurchasedOrdersPage = class PurchasedOrdersPage {
    constructor(router, http, nativeHttp, plt, loadingCtrl, databaseprovider, callnumber, syncService, network, storage, datePipe, alertCtrl, socialSharing, file, fileOpener, events, location) {
        this.router = router;
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.databaseprovider = databaseprovider;
        this.callnumber = callnumber;
        this.syncService = syncService;
        this.network = network;
        this.storage = storage;
        this.datePipe = datePipe;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.file = file;
        this.fileOpener = fileOpener;
        this.events = events;
        this.location = location;
        this.paidcolor = 'primary';
        this.unpaidcolor = 'primary';
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
        this.POs = [];
        this.POitems = [];
        this.tempPOS = [];
        this.editSelected = false;
        this.itemSelected = false;
        this.selectedCount = this.items.filter(x => x.selected === true).length;
        this.s = 0;
        this.buttonClicked = false;
        this.company = '';
        this.pdfObj = null;
        this.currency = '';
        this.page = 0;
        this.maximumPages = 1;
        this.refresh = false;
        this.records = 0;
        this.totalRecords = 0;
        this.showAdd = 0;
        this.showDetails = 0;
        this.storage.get('app').then((val1) => {
            if (val1 === 'invoice') {
                this.storage.get('ID').then((val) => {
                    this.syncService.getbValue(val, 'PO Add').then((data) => {
                        this.showAdd = data[0].bValue;
                    });
                    this.syncService.getbValue(val, 'PO Details').then((data) => {
                        this.showDetails = data[0].bValue;
                    });
                });
            }
            else {
                this.showAdd = 1;
                this.showDetails = 1;
            }
        });
        events.subscribe('refreshPOS', (user, time) => {
            this.infiniteScroll.target.disabled = false;
            this.items = [];
            this.page = 0;
            this.maximumPages = 1;
            this.refresh = false;
            this.POs = [];
            this.records = 0;
            this.totalRecords = 0;
            this.getAllPosLocaldb();
        });
        this.storage.get('COM').then((val) => {
            this.company = val;
        });
        this.storage.get('userId').then((val) => {
            this.usdId = val;
            console.log(this.usdId);
        });
        storage.get('currency').then((val) => {
            if (val !== null) {
                this.currency = val.toString();
                debugger;
            }
        });
        this.getAllPosLocaldb();
        if (databaseprovider.getFrom() === 1) {
            this.s = 2;
        }
        // this.router.events.pipe(
        //   filter(event => event instanceof NavigationStart)
        // ).subscribe((route: NavigationStart) => {
        //     console.log('Route: ' + route.url);
        //     const a = this.databaseprovider.getupdatePOS();
        //     debugger;
        //     storage.get('currency').then((val) => {
        //       if (val !== null) {
        //           this.currency = val.toString();
        //           debugger
        //       }
        //     });
        //     if (route.url == '/menu/purchased-orders' && a === 1) {
        //       this.page = 0;
        //       this.maximumPages = 1;
        //       this.refresh = false;
        //       this.POs = [];
        //       this.records = 0;
        //       this.totalRecords = 0;
        //       this.getAllPosLocaldb();
        //     }
        // });
        // if(this.POs.length === 0) {
        //   storage.get('currency').then((val) => {
        //     if (val !== null) {
        //         this.currency = val.toString();
        //         debugger
        //     }
        //   });
        //   this.getAllPosLocaldb();
        //   this.syncDeletedPO();
        // }
    }
    ionViewDidEnter() {
        // this.getAllPosLocaldb();
        this.subscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"])).subscribe((route) => {
            console.log('Route: ' + route.url);
            // alert('route' + route.url);
            this.items = [];
            this.page = 0;
            this.maximumPages = 1;
            this.refresh = false;
            this.POs = [];
            this.records = 0;
            this.totalRecords = 0;
            this.getAllPosLocaldb();
        });
    }
    ionViewWillLeave() {
        this.subscription.unsubscribe();
    }
    geItems(searchbar) {
        this.initializePOs();
        const q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.tempPOS = this.tempPOS.filter((v) => {
            if (v.Name && q) {
                if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    console.log("true");
                    return true;
                }
                console.log("false");
                return false;
            }
        });
        debugger;
    }
    ngOnInit() {
    }
    addIcon() {
        this.router.navigate(['addpurchasedorder']);
    }
    edittxt() {
        alert('edit');
    }
    doRefresh(refresher) {
        this.getAllPosLocaldb();
        refresher.target.complete();
        //   this.data.subscribe(data => {
        //     this.items = data.results;
        //     refresher.target.complete();
        //  });
        //this.items = this.items;
    }
    itemClicked(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.showDetails === 1) {
                let loading = yield this.loadingCtrl.create();
                yield loading.present();
                debugger;
                let items = [];
                this.syncService.getPOItems(item.ID).then((data) => {
                    debugger;
                    items = data;
                    const navigationExtras = {
                        state: {
                            PO: item,
                            Items: items,
                            url: '/menu/purchased-orders'
                        }
                    };
                    this.router.navigate(['podetails'], navigationExtras);
                    loading.dismiss();
                });
            }
            // for(let i = 0;i<this.POitems.length;i++) {
            //      if(this.POitems[i].Poid === item.ID) {
            //         items.push(this.POitems[i]);
            //      }
            // }
            debugger;
        });
    }
    edit(item) {
        alert('edit:' + item.total);
    }
    del(item) {
        this.shareALert("Warning", '', 'Are you sure you want to delete this Purchased Order?', item);
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
    delete(item) {
        debugger;
        // alert('del:' + item.total);
        this.tblId = item.ID;
        this.syncService.getVendorSync(item.VendorID).then((data) => {
            data;
            let vendorSync = data[0].Sync;
            if (vendorSync === 1) {
                vendorSync = 2;
            }
            debugger;
            this.syncService.deletePO(item.ID, item.Total, item.VendorID, vendorSync).then(() => {
                this.databaseprovider.setupdatevendors(1);
                this.databaseprovider.setupdatevendorLeger(1);
                this.databaseprovider.setupdateitems(1);
                this.getAllPosLocaldb();
                this.AddLog();
                if (this.network.type === 'none') {
                }
                else {
                    debugger;
                    this.syncDeletedPO();
                }
            });
        });
        // this.syncService.deletePO(item.ID).then(() => {
        //   this.getAllPosLocaldb();
        //   this.AddLog();
        //   if (this.network.type === 'none') {
        //   }else {
        //     debugger
        //     this.syncDeletedPO();
        //   }
        // });
    }
    // del(item) {
    //   this.shareALert("Warning",'','Are you sure you want to delete this Purchased Order?',item);
    // }
    // shareALert(head, sub, msg, item) {
    //   this.alrtCtrl.create({
    //     header: head,
    //     subHeader: sub,
    //     message: msg,
    //     cssClass: 'alertSize',
    //     buttons: [
    //       {
    //         text: 'Delete',
    //         cssClass: 'customClass',
    //         role: 'cancel',
    //         handler: () => {
    //            console.log('yes')
    //           // this.deleteClient();
    //            this.delete(item);
    //         }
    //       },
    //        {
    //         text: 'Cancel',
    //         handler: () => {
    //           console.log('Confirm Ok');
    //         }
    //       }
    //     ]
    //   }).then(alert => alert.present());
    // }
    syncDeletedPO() {
        this.syncService.syncUpdatedPOSIDS().then((POIDS) => {
            debugger;
            POIDS;
            const Ids = [];
            if (POIDS.length > 0) {
                for (let i = 0; i < POIDS.length; i++) {
                    Ids.push(POIDS[i].ID);
                }
                const url = this.databaseprovider.getURL();
                debugger;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url, {
                    'Name': 'syncDeletedPOS',
                    "POS": POIDS
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        this.syncService.updateSyncedPOS(Ids).then((data) => {
                            console.log('It Worked');
                        });
                        this.syncService.syncAddedLedgerVendor().then((data) => {
                            if (data.length > 0) {
                                const IDs = [];
                                for (let i = 0; i < data.length; i++) {
                                    IDs[i] = data[i].ID;
                                }
                                const url = this.databaseprovider.getURL();
                                debugger;
                                this.nativeHttp.setDataSerializer("json");
                                let nativeCall = this.nativeHttp.post(url, {
                                    'Name': 'syncAddedLedgerVendor',
                                    "Payments": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { }))
                                    .subscribe(data => {
                                    console.log('Native data:', data);
                                    const g = JSON.parse(data.data);
                                    if (g.success === 1) {
                                        // alert('success');
                                        this.syncService.updateSyncedAddedLedgerVendors(IDs).then((data) => {
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
                            this.syncService.syncUpdatedVendors().then((data) => {
                                if (data.length > 0) {
                                    const IDs = [];
                                    for (let i = 0; i < data.length; i++) {
                                        IDs[i] = data[i].ID;
                                    }
                                    const url = this.databaseprovider.getURL();
                                    debugger;
                                    this.nativeHttp.setDataSerializer("json");
                                    let nativeCall = this.nativeHttp.post(url, {
                                        'Name': 'syncUpdatedVendors',
                                        "Vendors": data
                                    }, {
                                        'Content-Type': 'application/json',
                                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                    });
                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { }))
                                        .subscribe(data => {
                                        console.log('Native data:', data);
                                        const g = JSON.parse(data.data);
                                        if (g.success === 1) {
                                            // alert('success');
                                            this.syncService.updateSyncedVendors(IDs).then((data) => {
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
                                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { }))
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
        this.selectedCount = this.POs.filter(x => x.selected === true).length;
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
    back1() {
        this.router.navigate(['/menu/dashboard']);
    }
    getAllPOS() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const url = this.databaseprovider.getURL();
            let nativeCall = this.nativeHttp.get(url + '/getPurchasedOrders.php', {}, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                const g = JSON.parse(data.data);
                this.POs = g.Po;
                this.POitems = g.items;
                console.log(this.POs[0]);
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
                this.initializePOs();
                // this.initializeactiveItems();
                // this.initializeinactiveItems();
                this.databaseprovider.setupdatePOS(0);
            }, err => {
                console.log('JS call error', err);
            });
        });
    }
    initializePOs() {
        this.tempPOS = this.POs;
    }
    editClick() {
        this.items;
        this.POitems;
        this.tempPOS;
        this.editSelected = true;
        this.POs;
        for (let i = 0; i < this.POs.length; i++) {
            this.POs[i]['selected'] = false;
        }
        debugger;
    }
    deleteSelected() {
        this.POs;
        debugger;
    }
    getAllPosLocaldb() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            // this.syncService.getAllActivePOS().then((data) => {
            //   debugger
            //   this.POs = data;
            //   this.databaseprovider.setupdatePOS(0);
            //   this.initializePOs();
            //   loading.dismiss();
            //   debugger
            // });
            this.syncService.getActivePOSPagination(this.records).then((data) => {
                debugger;
                this.POs = data;
                this.databaseprovider.setupdatePOS(0);
                this.initializePOs();
                loading.dismiss();
                this.totalRecords = data[0].Total1;
                this.maximumPages = 1;
                this.records = this.records + 10;
                //  alert('toa' + this.totalRecords + 'current' + this.records)
                debugger;
            });
        });
    }
    doInfinite(infiniteScroll) {
        this.infiniteScroll = infiniteScroll;
        if (this.totalRecords <= this.records) {
            infiniteScroll.target.disabled = true;
        }
        else {
            this.page++;
            this.syncService.getActivePOSPagination(this.records).then((data) => {
                this.POs = this.POs.concat(data);
                this.initializePOs();
                infiniteScroll.target.complete();
                this.records = this.records + 10;
            });
        }
    }
    AddLog() {
        if (this.usdId === 1) {
            this.acttype = 'You deleted';
        }
        else {
            this.acttype = 'You added deleted';
        }
        this.name = 'Purchased Order';
        let now = new Date().toString();
        const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName = 'tblpurchasedorder';
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        debugger;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(data => {
            console.log("Log has been added");
            this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    }
    share(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            item;
            debugger;
            this.socialSharing.share().then(() => {
                loading.dismiss();
            }).catch(() => {
            });
        });
    }
    createPdf(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = [];
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            this.syncService.getPOItems(item.ID).then((data) => {
                items = data;
                const itemss = [];
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
                console.log(itemss);
                const right = {
                    text: [
                        { text: '                              Dated: ', bold: true, fontSize: 6, alignment: 'right' },
                        { text: item.Date, color: '#000000', fontSize: 6, alignment: 'right' },
                    ]
                };
                const left = {
                    text: [
                        { text: 'Purchase Order', bold: true, fontSize: 12, alignment: 'left' },
                    ],
                };
                var docDefinition = {
                    pageSize: {
                        width: 226.77192,
                        height: 'auto'
                    },
                    pageMargins: [10, 15, 10, 15],
                    content: [
                        { text: this.company, bold: true, alignment: 'center', style: 'subheader' },
                        { text: item.Name, bold: true, fontSize: 6, alignment: 'right' },
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
                        //   {
                        //     text: [
                        //       { text: '                              Dated: ' , bold: true, fontSize: 6, alignment: 'right' },
                        //       { text:  item.Date , color: '#000000' ,  fontSize: 6, alignment: 'right'},
                        //     ]
                        //   },
                        //   {
                        //   text: [
                        //     { text: 'Purchase Order', bold: true, fontSize: 12, alignment: 'left'},
                        //   ],
                        // },
                        // { text: 'Purchased Order', style: 'header', fontSize: 40,  color: '#ff0000' },
                        // { text: this.datePipe.transform(new Date().toString(), 'dd MMM yyyy h:mm a'), alignment: 'right' },
                        // { text: this.company , style: 'header', fontSize: 30,  color: '#000000'},
                        //   {
                        //     margin: [0, 30, 0, 0],
                        //     style: 'totalsTable',
                        //     table: {
                        //         widths: [ 100, 'auto' ],
                        //         body: [
                        //             [
                        //                 {text: 'Vendor:', bold: true, fontSize: 15},
                        //                  item.Name,
                        //             ],
                        //             [
                        //                 {text: 'Dated:', bold: true, fontSize: 15},
                        //                 item.Date,
                        //             ],
                        //         ]
                        //     },
                        //     layout: 'noBorders'
                        // },
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
                            margin: [0, 10, 0, 0],
                            style: 'totalsTable',
                            table: {
                                //  alignment: 'center',
                                widths: [30, 120, 50],
                                body: itemss
                            },
                            layout: 'noBorders'
                        },
                        {
                            margin: [0, 5, 0, 0],
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
                this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_16___default.a.createPdf(docDefinition);
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
PurchasedOrdersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_10__["SyncService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_18__["FileOpener"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] }
];
PurchasedOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchased-orders',
        template: __webpack_require__(/*! raw-loader!./purchased-orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/purchased-orders/purchased-orders.page.html"),
        styles: [__webpack_require__(/*! ./purchased-orders.page.scss */ "./src/app/pages/purchased-orders/purchased-orders.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_10__["SyncService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
        _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_18__["FileOpener"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"],
        _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"]])
], PurchasedOrdersPage);



/***/ })

}]);
//# sourceMappingURL=purchased-orders-purchased-orders-module-es2015.js.map