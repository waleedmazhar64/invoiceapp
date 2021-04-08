(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-credit-memo-info-credit-memo-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/credit-memo-info/credit-memo-info.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/credit-memo-info/credit-memo-info.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n      <ion-title>Credit Memo Info</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-item  >\n        <ion-grid>\n              <ion-row>\n                <ion-col>\n                    <ion-label size=\"3\">\n                        <h2>CM #:</h2>\n                      </ion-label>\n                </ion-col>\n                <ion-col size=\"9\">\n                    <span no-padding style=\"float: right;margin-right:12px;\">\n                        <ion-input no-padding style=\"border: none;text-align: right;\" [(ngModel)]=\"creditmemo.name\"></ion-input>  \n                      </span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        </ion-item >\n        <ion-item >\n          <ion-grid no-padding>\n                <ion-row>\n                  <ion-col>\n                      <ion-label size=\"3\">\n                          <h2>Date:</h2>\n                        </ion-label>\n                  </ion-col>\n                  <ion-col size=\"9\" (click)=\"selectDate()\">\n                      <span no-padding style=\"float: right;margin-right:12px;\">\n                          <!-- <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.regular_price\"></ion-input> -->\n                           {{creditmemo.created}}\n                        </span>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n          </ion-item >\n          <ion-item >\n            <ion-grid no-padding>\n                  <ion-row>\n                    <ion-col>\n                        <ion-label size=\"3\">\n                            <h2>Terms:</h2>\n                          </ion-label>\n                    </ion-col>\n                    <ion-col size=\"9\" (click)=\"openAlert()\">\n                        <span no-padding style=\"float: right;margin-right:12px;\">\n                            <!-- <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.regular_price\"></ion-input> -->\n                             {{creditmemo.terms}}\n                          </span>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n            </ion-item >\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/credit-memo-info/credit-memo-info.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/credit-memo-info/credit-memo-info.module.ts ***!
  \*******************************************************************/
/*! exports provided: CreditMemoInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditMemoInfoPageModule", function() { return CreditMemoInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _credit_memo_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./credit-memo-info.page */ "./src/app/pages/credit-memo-info/credit-memo-info.page.ts");








const routes = [
    {
        path: '',
        component: _credit_memo_info_page__WEBPACK_IMPORTED_MODULE_7__["CreditMemoInfoPage"]
    }
];
let CreditMemoInfoPageModule = class CreditMemoInfoPageModule {
};
CreditMemoInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"],
        ],
        declarations: [_credit_memo_info_page__WEBPACK_IMPORTED_MODULE_7__["CreditMemoInfoPage"]]
    })
], CreditMemoInfoPageModule);



/***/ }),

/***/ "./src/app/pages/credit-memo-info/credit-memo-info.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/credit-memo-info/credit-memo-info.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWRpdC1tZW1vLWluZm8vY3JlZGl0LW1lbW8taW5mby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/credit-memo-info/credit-memo-info.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/credit-memo-info/credit-memo-info.page.ts ***!
  \*****************************************************************/
/*! exports provided: CreditMemoInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditMemoInfoPage", function() { return CreditMemoInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let CreditMemoInfoPage = class CreditMemoInfoPage {
    constructor(storage, router, datePipe, datePicker, alertCtrl) {
        this.storage = storage;
        this.router = router;
        this.datePipe = datePipe;
        this.datePicker = datePicker;
        this.alertCtrl = alertCtrl;
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.creditmemo !== 'undefined') {
                debugger;
                this.creditmemo = this.router.getCurrentNavigation().extras.state.creditmemo;
            }
        }
    }
    ngOnInit() {
    }
    back() {
        const navigationExtras = {
            state: {
                // user: this.received
                credit: this.creditmemo
            }
        };
        this.router.navigate(['addcreditmemos'], navigationExtras);
    }
    selectDate() {
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datePicker.show(options).then((date) => {
            this.creditmemo.created = this.datePipe.transform(date, 'dd-MM-yyyy');
            // console.log('selected:',this.myDate);
        });
    }
    openAlert() {
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
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: (data) => {
                        console.log('selected' + data);
                        this.creditmemo.terms = data;
                    }
                }
            ]
        }).then(alert => alert.present());
    }
};
CreditMemoInfoPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
CreditMemoInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-credit-memo-info',
        template: __webpack_require__(/*! raw-loader!./credit-memo-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/credit-memo-info/credit-memo-info.page.html"),
        styles: [__webpack_require__(/*! ./credit-memo-info.page.scss */ "./src/app/pages/credit-memo-info/credit-memo-info.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
        _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], CreditMemoInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-credit-memo-info-credit-memo-info-module-es2015.js.map