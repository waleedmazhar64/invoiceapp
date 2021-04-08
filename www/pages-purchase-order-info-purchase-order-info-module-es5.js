(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-purchase-order-info-purchase-order-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/purchase-order-info/purchase-order-info.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/purchase-order-info/purchase-order-info.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n      <ion-title>Invoice Info</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-item  >\n        <ion-grid>\n              <ion-row>\n                <ion-col>\n                    <ion-label size=\"3\">\n                        <h2>PO#:</h2>\n                      </ion-label>\n                </ion-col>\n                <ion-col size=\"9\">\n                    <span no-padding style=\"float: right;margin-right:12px;\">\n                        <ion-input no-padding style=\"border: none;text-align: right;\" [(ngModel)]=\"order.name\"></ion-input>  \n                      </span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        </ion-item >\n        <ion-item >\n          <ion-grid no-padding>\n                <ion-row>\n                  <ion-col>\n                      <ion-label size=\"3\">\n                          <h2>Date:</h2>\n                        </ion-label>\n                  </ion-col>\n                  <ion-col size=\"9\" (click)=\"selectDate()\">\n                      <span no-padding style=\"float: right;margin-right:12px;\">\n                          <!-- <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.regular_price\"></ion-input> -->\n                           {{order.created}}\n                        </span>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n          </ion-item >\n          <ion-item >\n            <ion-grid no-padding>\n                  <ion-row>\n                    <ion-col>\n                        <ion-label size=\"3\">\n                            <h2>Terms:</h2>\n                          </ion-label>\n                    </ion-col>\n                    <ion-col size=\"9\" (click)=\"openAlert()\">\n                        <span no-padding style=\"float: right;margin-right:12px;\">\n                            <!-- <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.regular_price\"></ion-input> -->\n                             {{order.terms}}\n                          </span>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n            </ion-item >\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/purchase-order-info/purchase-order-info.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/purchase-order-info/purchase-order-info.module.ts ***!
  \*************************************************************************/
/*! exports provided: PurchaseOrderInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderInfoPageModule", function() { return PurchaseOrderInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _purchase_order_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purchase-order-info.page */ "./src/app/pages/purchase-order-info/purchase-order-info.page.ts");









var routes = [
    {
        path: '',
        component: _purchase_order_info_page__WEBPACK_IMPORTED_MODULE_7__["PurchaseOrderInfoPage"]
    }
];
var PurchaseOrderInfoPageModule = /** @class */ (function () {
    function PurchaseOrderInfoPageModule() {
    }
    PurchaseOrderInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ],
            declarations: [_purchase_order_info_page__WEBPACK_IMPORTED_MODULE_7__["PurchaseOrderInfoPage"]]
        })
    ], PurchaseOrderInfoPageModule);
    return PurchaseOrderInfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/purchase-order-info/purchase-order-info.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/purchase-order-info/purchase-order-info.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1cmNoYXNlLW9yZGVyLWluZm8vcHVyY2hhc2Utb3JkZXItaW5mby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/purchase-order-info/purchase-order-info.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/purchase-order-info/purchase-order-info.page.ts ***!
  \***********************************************************************/
/*! exports provided: PurchaseOrderInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrderInfoPage", function() { return PurchaseOrderInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var PurchaseOrderInfoPage = /** @class */ (function () {
    function PurchaseOrderInfoPage(storage, router, datePipe, datePicker, alertCtrl) {
        this.storage = storage;
        this.router = router;
        this.datePipe = datePipe;
        this.datePicker = datePicker;
        this.alertCtrl = alertCtrl;
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.order !== 'undefined') {
                debugger;
                this.order = this.router.getCurrentNavigation().extras.state.order;
            }
        }
    }
    PurchaseOrderInfoPage.prototype.ngOnInit = function () {
    };
    PurchaseOrderInfoPage.prototype.back = function () {
        var navigationExtras = {
            state: {
                // user: this.received
                order: this.order
            }
        };
        this.router.navigate(['addpurchasedorder'], navigationExtras);
    };
    PurchaseOrderInfoPage.prototype.selectDate = function () {
        var _this = this;
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datePicker.show(options).then(function (date) {
            _this.order.created = _this.datePipe.transform(date, 'dd-MM-yyyy');
            // console.log('selected:',this.myDate);
        });
    };
    PurchaseOrderInfoPage.prototype.openAlert = function () {
        var _this = this;
        this.alertCtrl.create({
            header: 'Terms',
            inputs: [
                {
                    type: 'radio',
                    label: 'Issued',
                    value: 'Issued'
                },
                {
                    type: 'radio',
                    label: 'Apprved',
                    value: 'Approved'
                },
                {
                    type: 'radio',
                    label: 'Pending',
                    value: 'Pending'
                },
                {
                    type: 'radio',
                    label: 'Withdrawn',
                    value: 'Withdrawn'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log('selected' + data);
                        _this.order.terms = data;
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    PurchaseOrderInfoPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
    ]; };
    PurchaseOrderInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-order-info',
            template: __webpack_require__(/*! raw-loader!./purchase-order-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/purchase-order-info/purchase-order-info.page.html"),
            styles: [__webpack_require__(/*! ./purchase-order-info.page.scss */ "./src/app/pages/purchase-order-info/purchase-order-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], PurchaseOrderInfoPage);
    return PurchaseOrderInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-purchase-order-info-purchase-order-info-module-es5.js.map