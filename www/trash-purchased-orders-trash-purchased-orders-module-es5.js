(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trash-purchased-orders-trash-purchased-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/trash-purchased-orders/trash-purchased-orders.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/trash-purchased-orders/trash-purchased-orders.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button *ngIf=\"s == 0\"></ion-menu-button>\n      <ion-icon padding  *ngIf=\"s == 1\" (click)=\"back()\" name=\"arrow-back\"></ion-icon>\n    </ion-buttons>\n    <ion-title *ngIf=\"s == 0\">Deleted Purchased Order(s)</ion-title>\n    <ion-icon slot=\"end\" name=\"search\" padding (click)=\"s=1\"></ion-icon>\n    <ion-input (ionInput)=\"geItems($event)\" padding placeholder=\"Search Invoices\" *ngIf=\"s == 1\"></ion-input>\n  </ion-toolbar>\n  <!-- <ion-toolbar *ngIf=\"s == 1\" color=\"primary\">\n    <ion-grid >\n      \n      <ion-row>\n          <ion-col text-center>\n              <ion-button (click)=\"paid()\" [color]=\"paidcolor\">Paid</ion-button>\n            </ion-col>\n            <ion-col text-center >\n                <ion-button (click)=\"unpaid()\" [color]=\"unpaidcolor\">Unpaid</ion-button>\n            </ion-col>\n      </ion-row> \n      \n    </ion-grid>\n  </ion-toolbar> -->\n \n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-item no-padding lines=\"full\"></ion-item> -->\n  <p style=\"text-align:left;\">\n      <span *ngIf=\"editSelected == false\">{{tempPOS.length}} PO(s)</span>\n      <span *ngIf=\"editSelected == true\">Selected {{ selectedCount }}</span>\n        \n        <!-- <span (click)=\"editClick()\" *ngIf=\"editSelected == false\" style=\"float:right;\" >\n            Edit\n        </span> -->\n        <span (click)=\"editSelected = false\" *ngIf=\"editSelected == true\" style=\"float:right;\" >\n          Done\n      </span>\n    </p>\n       <!-- fab placed to the bottom end -->\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addIcon()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\"> \n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n  <ion-list *ngIf=\"editSelected == false\">\n              \n          <ion-item-sliding  *ngFor=\"let item of tempPOS\">\n              <ion-item-options side=\"start\">\n                <!-- <ion-item-option (click)=\"edit(item)\">Edit</ion-item-option> -->\n                <ion-item-option color=\"danger\" (click)=\"restore(item)\">Restore</ion-item-option>\n    \n              </ion-item-options>\n              <ion-item-options side=\"end\">\n                <!-- <ion-item-option (click)=\"edit(item)\">Share</ion-item-option> -->\n                <ion-item-option color=\"primary\" (click)=\"createPdf(item)\">Share</ion-item-option>\n              </ion-item-options>\n              <ion-item (click)=\"itemClicked(item)\">\n    \n                \n                  <!-- <ion-avatar slot=\"start\">\n                      <img src=\"assets/plus.png\">\n                  </ion-avatar> -->\n                  <img padding src=\"assets/cart.png\">\n                  <ion-label>\n                    <h2 text-capitalize>{{ item.Name }}</h2>\n                    <p>{{ item.Date }}</p>\n                  </ion-label>\n                  <p>\n                      <span  style=\"float:right;\">\n                        {{ item.Total | currency:currency:true:\"1.2\"}}\n                      </span>\n                  </p>\n               </ion-item>          \n            </ion-item-sliding>\n            <ion-icon slot=\"end\" name=\"add-circle\"></ion-icon>\n\n            </ion-list>\n            <ion-list *ngIf=\"editSelected == true\">\n              \n              <ion-item-sliding  *ngFor=\"let item of POs\">\n                  <ion-item *ngIf=\"item.selected == true\"  (click)=\"item.selected = false\" (click)=\"update()\">\n                      <ion-avatar slot=\"start\" >\n                          <img *ngIf=\"item.selected == false\" src=\"assets/out.png\">\n                          <img *ngIf=\"item.selected == true\" src=\"assets/fill.png\">\n                      </ion-avatar>\n                      <ion-label>\n                        <h2 text-capitalize>{{ item.Name }}</h2>\n                        <p>{{ item.Date }}</p>\n                      </ion-label>\n                      <ion-label>\n                          <span (click)=\"edit()\" style=\"float:right;\">\n                            {{ item.Total | currency:currency:true:\"1.2\"}}\n                          </span>\n                      </ion-label>\n                   </ion-item>  \n                   <ion-item *ngIf=\"item.selected == false\"  (click)=\"item.selected = true\" (click)=\"update()\">\n        \n                    \n                    <ion-avatar slot=\"start\" >\n                        <img *ngIf=\"item.selected == false\" src=\"assets/out.png\">\n                        <img *ngIf=\"item.selected == true\" src=\"assets/fill.png\">\n                    </ion-avatar>\n                    <ion-label>\n                      <h2 text-capitalize>{{ item.Name }}</h2>\n                      <p>{{ item.Date }}</p>\n                    </ion-label>\n                    <p>\n                        <span (click)=\"edit()\" style=\"float:right;\">\n                          {{ item.Total | currency:currency:true:\"1.2\"}}\n                        </span>\n                      </p>\n                 </ion-item>                  \n                </ion-item-sliding>\n                <ion-icon slot=\"end\" name=\"add-circle\"></ion-icon>\n  \n                </ion-list>\n<!--     \n<ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"loading more...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n</ion-content>\n\n<ion-footer *ngIf=\"editSelected == true\">\n\n  <div style=\"text-align: center;\">\n    <ion-toolbar color=\"light\">\n        <ion-grid text-center>\n            <ion-row text-center>\n                <ion-button (click)=\"deleteSelected()\" color=\"danger\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  style=\"width: 80%; margin-left: auto;margin-right: auto;--border-radius: 15px;\">Delete</ion-button>\n\n            </ion-row>\n            \n            <ion-row text-center>\n                <ion-buttons slot=\"end\">\n                    <ion-button>\n                      <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n                      forward\n                    </ion-button>\n                  </ion-buttons>\n            </ion-row>\n            <ion-row>\n            </ion-row>\n            </ion-grid>\n\n    </ion-toolbar>\n  </div>\n\n\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/trash-purchased-orders/trash-purchased-orders.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/trash-purchased-orders/trash-purchased-orders.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TrashPurchasedOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashPurchasedOrdersPageModule", function() { return TrashPurchasedOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trash_purchased_orders_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trash-purchased-orders.page */ "./src/app/pages/trash-purchased-orders/trash-purchased-orders.page.ts");














var routes = [
    {
        path: '',
        component: _trash_purchased_orders_page__WEBPACK_IMPORTED_MODULE_12__["TrashPurchasedOrdersPage"]
    }
];
var TrashPurchasedOrdersPageModule = /** @class */ (function () {
    function TrashPurchasedOrdersPageModule() {
    }
    TrashPurchasedOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
                _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"],
                _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"]
            ],
            declarations: [_trash_purchased_orders_page__WEBPACK_IMPORTED_MODULE_12__["TrashPurchasedOrdersPage"]]
        })
    ], TrashPurchasedOrdersPageModule);
    return TrashPurchasedOrdersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/trash-purchased-orders/trash-purchased-orders.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/trash-purchased-orders/trash-purchased-orders.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  width: 30px;\n  height: 30px;\n  color: #ffffff;\n}\n\nh1 {\n  font-size: 401%;\n  color: #ffffff;\n  position: absolute;\n  left: 21%;\n  top: 15%;\n}\n\n.loo {\n  font-size: 98%;\n  color: #ffffff;\n  position: absolute;\n  left: 5%;\n  top: 75%;\n  text-decoration: none;\n}\n\n.boo {\n  font-size: 97%;\n  color: #ffffff;\n  position: absolute;\n  left: 5%;\n  bottom: 5%;\n  text-decoration: none;\n}\n\n.coo {\n  font-size: 90%;\n  color: #ffffff;\n  position: absolute;\n  left: 77%;\n  bottom: 5%;\n  text-decoration: none;\n}\n\n.foo {\n  background: #5252d1;\n  height: 31%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhc2gtcHVyY2hhc2VkLW9yZGVycy9DOlxcd2FtcDY0XFx3d3dcXGludm9pY2UucGsvc3JjXFxhcHBcXHBhZ2VzXFx0cmFzaC1wdXJjaGFzZWQtb3JkZXJzXFx0cmFzaC1wdXJjaGFzZWQtb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHJhc2gtcHVyY2hhc2VkLW9yZGVycy90cmFzaC1wdXJjaGFzZWQtb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ1BKOztBRFNFO0VBRUUsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDUEo7O0FEU0U7RUFFRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtBQ1BKOztBRFVFO0VBRUUsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNSSjs7QURXRTtFQUVFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDVEo7O0FEV0U7RUFDRSxtQkFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHJhc2gtcHVyY2hhc2VkLW9yZGVycy90cmFzaC1wdXJjaGFzZWQtb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1oZWFkZXIge1xyXG4vLyAgICAgaGVpZ2h0OiA0M3B4Oy8vYnkgZGVmYXVsdCA1NnB4XHJcbi8vICAgfVxyXG4vLyAgIGlvbi10b29sYmFyIHtcclxuLy8gICAgIGhlaWdodDogNjRweDtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogIzUyNTJkMTtcclxuLy8gICB9XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICB3aWR0aDogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gIH1cclxuICBoMSB7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiA0MDElO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMSU7XHJcbiAgICB0b3A6IDE1JVxyXG4gIH1cclxuICAubG9ve1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiA5OCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgdG9wOiA3NSU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgXHJcbiAgfVxyXG4gIC5ib297XHJcbiAgXHJcbiAgICBmb250LXNpemU6IDk3JTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIFxyXG4gIH1cclxuICAuY29ve1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDc3JTtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICB9XHJcbiAgLmZvb3tcclxuICAgIGJhY2tncm91bmQ6IzUyNTJkMTtcclxuICAgICAgICBoZWlnaHQ6IDMxJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICIsImlvbi1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0MDElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMSU7XG4gIHRvcDogMTUlO1xufVxuXG4ubG9vIHtcbiAgZm9udC1zaXplOiA5OCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xuICB0b3A6IDc1JTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYm9vIHtcbiAgZm9udC1zaXplOiA5NyU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUlO1xuICBib3R0b206IDUlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb28ge1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNzclO1xuICBib3R0b206IDUlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb28ge1xuICBiYWNrZ3JvdW5kOiAjNTI1MmQxO1xuICBoZWlnaHQ6IDMxJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/trash-purchased-orders/trash-purchased-orders.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/trash-purchased-orders/trash-purchased-orders.page.ts ***!
  \*****************************************************************************/
/*! exports provided: TrashPurchasedOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashPurchasedOrdersPage", function() { return TrashPurchasedOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");




















pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_16___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_17___default.a.pdfMake.vfs;
var TrashPurchasedOrdersPage = /** @class */ (function () {
    function TrashPurchasedOrdersPage(router, http, nativeHttp, plt, loadingCtrl, databaseprovider, callnumber, syncService, network, storage, datePipe, alertCtrl, socialSharing, file, fileOpener) {
        var _this = this;
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
        this.selectedCount = this.items.filter(function (x) { return x.selected === true; }).length;
        this.s = 0;
        this.company = '';
        this.pdfObj = null;
        this.currency = '';
        this.storage.get('COM').then(function (val) {
            _this.company = val;
        });
        this.storage.get('userId').then(function (val) {
            _this.usdId = val;
            console.log(_this.usdId);
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; })).subscribe(function (route) {
            console.log('Route: ' + route.url);
            var a = _this.databaseprovider.getupdatePOS();
            debugger;
            storage.get('currency').then(function (val) {
                if (val !== null) {
                    _this.currency = val.toString();
                    debugger;
                }
            });
            if (route.url == '/menu/trash-purchased-orders' && a === 1)
                _this.getAllPosLocaldb();
            // this.getAllPOS();
        });
        if (this.POs.length === 0) {
            debugger;
            // this.getAllPOS();
            storage.get('currency').then(function (val) {
                if (val !== null) {
                    _this.currency = val.toString();
                    debugger;
                }
            });
            this.getAllPosLocaldb();
            this.syncRestoredPO();
        }
    }
    TrashPurchasedOrdersPage.prototype.geItems = function (searchbar) {
        this.initializePOs();
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.tempPOS = this.tempPOS.filter(function (v) {
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
    };
    TrashPurchasedOrdersPage.prototype.ngOnInit = function () {
    };
    TrashPurchasedOrdersPage.prototype.addIcon = function () {
        this.router.navigate(['addpurchasedorder']);
    };
    TrashPurchasedOrdersPage.prototype.edittxt = function () {
        alert('edit');
    };
    TrashPurchasedOrdersPage.prototype.doRefresh = function (refresher) {
        this.getAllPosLocaldb();
        refresher.target.complete();
        //   this.data.subscribe(data => {
        //     this.items = data.results;
        //     refresher.target.complete();
        //  });
        //this.items = this.items;
    };
    TrashPurchasedOrdersPage.prototype.itemClicked = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, items;
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
                        this.syncService.getPOItems(item.ID).then(function (data) {
                            debugger;
                            items = data;
                            var navigationExtras = {
                                state: {
                                    PO: item,
                                    Items: items
                                }
                            };
                            _this.router.navigate(['podetails'], navigationExtras);
                            loading.dismiss();
                        });
                        // for(let i = 0;i<this.POitems.length;i++) {
                        //      if(this.POitems[i].Poid === item.ID) {
                        //         items.push(this.POitems[i]);
                        //      }
                        // }
                        debugger;
                        return [2 /*return*/];
                }
            });
        });
    };
    TrashPurchasedOrdersPage.prototype.edit = function (item) {
        alert('edit:' + item.total);
    };
    TrashPurchasedOrdersPage.prototype.restore = function (item) {
        var _this = this;
        debugger;
        this.tblId = item.ID;
        this.syncService.getVendorSync(item.VendorID).then(function (data) {
            data;
            var vendorSync = data[0].Sync;
            if (vendorSync === 1) {
                vendorSync = 2;
            }
            debugger;
            _this.syncService.restorePO(item.ID, item.Total, item.VendorID, vendorSync).then(function () {
                _this.databaseprovider.setupdatevendors(1);
                _this.databaseprovider.setupdatePOS(1);
                _this.databaseprovider.setupdatevendors(1);
                _this.databaseprovider.setupdatevendorLeger(1);
                _this.getAllPosLocaldb();
                _this.AddLog();
                if (_this.network.type === 'none') {
                }
                else {
                    debugger;
                    _this.syncRestoredPO();
                }
            });
        });
        // alert('del:' + item.total);
        // this.syncService.restorePO(item.ID).then(() => {
        //   this.getAllPosLocaldb();
        //   if (this.network.type === 'none') {
        //   }else {
        //     debugger
        //     this.syncRestoredPO();
        //   }
        // });
    };
    TrashPurchasedOrdersPage.prototype.syncRestoredPO = function () {
        var _this = this;
        this.syncService.syncUpdatedPOSIDS().then(function (POIDS) {
            debugger;
            POIDS;
            var Ids = [];
            if (POIDS.length > 0) {
                for (var i = 0; i < POIDS.length; i++) {
                    Ids.push(POIDS[i].ID);
                }
                var url = _this.databaseprovider.getURL();
                debugger;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncRestoredPOS',
                    "POS": POIDS
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    debugger;
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        _this.syncService.updateSyncedPOS(Ids).then(function (data) {
                            console.log('It Worked');
                        });
                        _this.syncService.syncAddedLedgerVendor().then(function (data) {
                            if (data.length > 0) {
                                var IDs_1 = [];
                                for (var i = 0; i < data.length; i++) {
                                    IDs_1[i] = data[i].ID;
                                }
                                var url_1 = _this.databaseprovider.getURL();
                                debugger;
                                _this.nativeHttp.setDataSerializer("json");
                                var nativeCall_1 = _this.nativeHttp.post(url_1, {
                                    'Name': 'syncAddedLedgerVendor',
                                    "Payments": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall_1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { }))
                                    .subscribe(function (data) {
                                    console.log('Native data:', data);
                                    var g = JSON.parse(data.data);
                                    if (g.success === 1) {
                                        // alert('success');
                                        _this.syncService.updateSyncedAddedLedgerVendors(IDs_1).then(function (data) {
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
                            _this.syncService.syncUpdatedVendors().then(function (data) {
                                if (data.length > 0) {
                                    var IDs_2 = [];
                                    for (var i = 0; i < data.length; i++) {
                                        IDs_2[i] = data[i].ID;
                                    }
                                    var url_2 = _this.databaseprovider.getURL();
                                    debugger;
                                    _this.nativeHttp.setDataSerializer("json");
                                    var nativeCall_2 = _this.nativeHttp.post(url_2, {
                                        'Name': 'syncUpdatedVendors',
                                        "Vendors": data
                                    }, {
                                        'Content-Type': 'application/json',
                                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                    });
                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall_2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { }))
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
                                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall_3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { }))
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
    TrashPurchasedOrdersPage.prototype.update = function () {
        //debugger;
        this.selectedCount = this.POs.filter(function (x) { return x.selected === true; }).length;
    };
    TrashPurchasedOrdersPage.prototype.paid = function () {
        this.paidcolor = 'success';
        this.unpaidcolor = 'primary';
    };
    TrashPurchasedOrdersPage.prototype.unpaid = function () {
        this.unpaidcolor = 'success';
        this.paidcolor = 'primary';
    };
    TrashPurchasedOrdersPage.prototype.back = function () {
        this.s = 0;
        this.paidcolor = 'primary';
        this.unpaidcolor = 'primary';
    };
    TrashPurchasedOrdersPage.prototype.getAllPOS = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, url, nativeCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        url = this.databaseprovider.getURL();
                        nativeCall = this.nativeHttp.get(url + '/getPurchasedOrders.php', {}, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            _this.POs = g.Po;
                            _this.POitems = g.items;
                            console.log(_this.POs[0]);
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
                            _this.initializePOs();
                            // this.initializeactiveItems();
                            // this.initializeinactiveItems();
                            _this.databaseprovider.setupdatePOS(0);
                        }, function (err) {
                            console.log('JS call error', err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TrashPurchasedOrdersPage.prototype.initializePOs = function () {
        this.tempPOS = this.POs;
    };
    TrashPurchasedOrdersPage.prototype.editClick = function () {
        this.items;
        this.POitems;
        this.tempPOS;
        this.editSelected = true;
        this.POs;
        for (var i = 0; i < this.POs.length; i++) {
            this.POs[i]['selected'] = false;
        }
        debugger;
    };
    TrashPurchasedOrdersPage.prototype.deleteSelected = function () {
        this.POs;
        debugger;
    };
    TrashPurchasedOrdersPage.prototype.getAllPosLocaldb = function () {
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
                        this.syncService.getAllDeletedPOS().then(function (data) {
                            debugger;
                            _this.POs = data;
                            _this.databaseprovider.setupdatePOS(0);
                            _this.initializePOs();
                            loading.dismiss();
                            debugger;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TrashPurchasedOrdersPage.prototype.AddLog = function () {
        var _this = this;
        debugger;
        if (this.usdId === 1) {
            this.acttype = 'You restored';
        }
        else {
            this.acttype = 'You restored';
        }
        this.name = 'Purchased Order';
        var now = new Date().toString();
        var a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName = 'tblpurchasedorder';
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        debugger;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(function (data) {
            console.log("Log has been added");
            _this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    };
    TrashPurchasedOrdersPage.prototype.createPdf = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items, loading;
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
                        this.syncService.getPOItems(item.ID).then(function (data) {
                            items = data;
                            var itemss = [];
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
                            console.log(itemss);
                            var right = {
                                text: [
                                    { text: '                              Dated: ', bold: true, fontSize: 6, alignment: 'right' },
                                    { text: item.Date, color: '#000000', fontSize: 6, alignment: 'right' },
                                ]
                            };
                            var left = {
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
                                    { text: _this.company, bold: true, alignment: 'center', style: 'subheader' },
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
                            _this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_16___default.a.createPdf(docDefinition);
                            _this.downloadPdf(loading);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TrashPurchasedOrdersPage.prototype.downloadPdf = function (loading) {
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
    TrashPurchasedOrdersPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_10__["SyncService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_18__["FileOpener"] }
    ]; };
    TrashPurchasedOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trash-purchased-orders',
            template: __webpack_require__(/*! raw-loader!./trash-purchased-orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/trash-purchased-orders/trash-purchased-orders.page.html"),
            styles: [__webpack_require__(/*! ./trash-purchased-orders.page.scss */ "./src/app/pages/trash-purchased-orders/trash-purchased-orders.page.scss")]
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
            _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["Storage"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_18__["FileOpener"]])
    ], TrashPurchasedOrdersPage);
    return TrashPurchasedOrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=trash-purchased-orders-trash-purchased-orders-module-es5.js.map