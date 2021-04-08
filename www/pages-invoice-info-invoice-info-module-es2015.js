(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-invoice-info-invoice-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/invoice-info/invoice-info.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/invoice-info/invoice-info.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n      <ion-title>Invoice Info</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-item  >\n        <ion-grid>\n              <ion-row>\n                <ion-col>\n                    <ion-label size=\"3\">\n                        <h2>INV#:</h2>\n                      </ion-label>\n                </ion-col>\n                <ion-col size=\"9\">\n                    <span no-padding style=\"float: right;margin-right:12px;\">\n                        <ion-input no-padding style=\"border: none;text-align: right;\" [(ngModel)]=\"invoice.name\"></ion-input>  \n                      </span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        </ion-item >\n        <ion-item >\n          <ion-grid no-padding>\n                <ion-row>\n                  <ion-col>\n                      <ion-label size=\"3\">\n                          <h2>Date:</h2>\n                        </ion-label>\n                  </ion-col>\n                  <ion-col size=\"9\">\n                      <span no-padding style=\"float: right;margin-right:12px;\">\n                          <!-- <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.regular_price\"></ion-input> -->\n                           {{invoice.created}}\n                        </span>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n          </ion-item >\n          <ion-item >\n            <ion-grid no-padding>\n                  <ion-row>\n                    <ion-col>\n                        <ion-label size=\"3\">\n                            <h2>Terms:</h2>\n                          </ion-label>\n                    </ion-col>\n                    <ion-col size=\"9\" (click)=\"openAlert()\">\n                        <span no-padding style=\"float: right;margin-right:12px;\">\n                            <!-- <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.regular_price\"></ion-input> -->\n                             {{invoice.terms}}\n                          </span>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n            </ion-item >\n            <ion-item >\n              <ion-grid no-padding>\n                    <ion-row>\n                      <ion-col>\n                          <ion-label size=\"3\">\n                              <h2>Due Date:</h2>\n                            </ion-label>\n                      </ion-col>\n                      <ion-col size=\"9\" (click)=\"selectDueDate()\">\n                          <span no-padding style=\"float: right;margin-right:12px;\">\n                              <!-- <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.regular_price\"></ion-input> -->\n                               {{invoice.duedate}}\n                            </span>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n              </ion-item >\n      <!-- <ion-item>\n          <ion-label >Date</ion-label>\n          <ion-datetime [(ngModel)]=\"invoice.created\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n            <ion-label>Terms</ion-label>\n            <ion-input [(ngModel)]=\"terms\"  placeholder=\"Text Input\"></ion-input>\n          </ion-item>\n          <ion-item>\n          <ion-label>Due</ion-label>\n          <ion-datetime [(ngModel)]=\"invoice.duedate\"></ion-datetime>\n          </ion-item> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/invoice-info/invoice-info.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/invoice-info/invoice-info.module.ts ***!
  \***********************************************************/
/*! exports provided: InvoiceInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceInfoPageModule", function() { return InvoiceInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invoice_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invoice-info.page */ "./src/app/pages/invoice-info/invoice-info.page.ts");









const routes = [
    {
        path: '',
        component: _invoice_info_page__WEBPACK_IMPORTED_MODULE_7__["InvoiceInfoPage"]
    }
];
let InvoiceInfoPageModule = class InvoiceInfoPageModule {
};
InvoiceInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_invoice_info_page__WEBPACK_IMPORTED_MODULE_7__["InvoiceInfoPage"]]
    })
], InvoiceInfoPageModule);



/***/ }),

/***/ "./src/app/pages/invoice-info/invoice-info.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/invoice-info/invoice-info.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludm9pY2UtaW5mby9pbnZvaWNlLWluZm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/invoice-info/invoice-info.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/invoice-info/invoice-info.page.ts ***!
  \*********************************************************/
/*! exports provided: InvoiceInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceInfoPage", function() { return InvoiceInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let InvoiceInfoPage = class InvoiceInfoPage {
    constructor(storage, router, datePipe, datePicker, alertCtrl) {
        this.storage = storage;
        this.router = router;
        this.datePipe = datePipe;
        this.datePicker = datePicker;
        this.alertCtrl = alertCtrl;
        this.terms = 'Due on Receipt';
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.invoice !== 'undefined') {
                debugger;
                this.invoice = this.router.getCurrentNavigation().extras.state.invoice;
            }
        }
        // this.getformattedDate();
        // this.getDueDate();
        // this.Inv=localStorage.getItem("INV");
        // this.data=localStorage.getItem("DATE");
        // this.terms=localStorage.getItem("TERMS");
        // this.dueDate=localStorage.getItem("DUE");
    }
    ngOnInit() {
        // localStorage.setItem('INV','300')
        // localStorage.setItem('DATE',this.dates)
        // localStorage.setItem('TERMS','30')
        // localStorage.setItem('DUE',this.due)
    }
    // getformattedDate()
    // {
    //    var dateObj=new Date();
    //    var year= dateObj.getFullYear().toString();
    //    var month= dateObj.getMonth().toString();
    //    var date= dateObj.getDate().toString();
    //    var monthArray=['01','02','03','04','05','06','07','08','09','10','11','12'];
    //    this.dates=monthArray[month]+'/'+date+'/'+year;
    //    console.log(this.dates);
    // }
    // getDueDate()
    // {
    //    var dateObj1=new Date(localStorage.getItem('DATE'));
    //    console.log(dateObj1);
    //    var dateObj = new Date();
    //    this.getTerm=localStorage.getItem('TERMS');
    //    var g = parseInt(this.getTerm)
    //    console.log(g);
    //    dateObj.setDate(dateObj1.getDate()+g);
    //    var year= dateObj.getFullYear().toString();
    //    var month= dateObj.getMonth().toString();
    //    var date= dateObj.getDate().toString();
    //    var monthArray=['01','02','03','04','05','06','07','08','09','10','11','12'];
    //    this.due=monthArray[month]+'/'+date+'/'+year;
    //    console.log("New Date");
    //    console.log(this.due);
    //    localStorage.setItem('DUE',this.due);
    // }
    //  refresh(){
    //    localStorage.setItem('INV',this.Inv)
    //    localStorage.setItem('DATE',this.data)
    //    localStorage.setItem('TERMS',this.terms)
    //    localStorage.setItem('DUE',this.due);  
    //  }
    back() {
        const navigationExtras = {
            state: {
                // user: this.received
                invoice: this.invoice
            }
        };
        this.router.navigate(['addinvoice'], navigationExtras);
    }
    selectDate() {
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datePicker.show(options).then((date) => {
            this.invoice.created = this.datePipe.transform(date, 'dd-MM-yyyy');
            // console.log('selected:',this.myDate);
        });
    }
    selectDueDate() {
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datePicker.show(options).then((date) => {
            this.invoice.duedate = this.datePipe.transform(date, 'dd-MM-yyyy');
            // console.log('selected:',this.myDate);
        });
    }
    openAlert() {
        this.alertCtrl.create({
            header: 'Terms',
            inputs: [
                {
                    type: 'radio',
                    label: '3 Days',
                    value: '3 Days'
                },
                {
                    type: 'radio',
                    label: '7 Days',
                    value: '7 Days'
                },
                {
                    type: 'radio',
                    label: '14 Days',
                    value: '14 Days'
                },
                {
                    type: 'radio',
                    label: '21 Days',
                    value: '21 Days'
                },
                {
                    type: 'radio',
                    label: '30 Days',
                    value: '30 Days'
                },
                {
                    type: 'radio',
                    label: '45 Days',
                    value: '45 Days'
                },
                {
                    type: 'radio',
                    label: '60 Days',
                    value: '60 Days'
                },
                {
                    type: 'radio',
                    label: '180 Days',
                    value: '180 Days'
                },
                {
                    type: 'radio',
                    label: 'Due on Receipt',
                    value: 'Due on Receipt'
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
                        this.invoice.terms = data;
                    }
                }
            ]
        }).then(alert => alert.present());
    }
};
InvoiceInfoPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
InvoiceInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice-info',
        template: __webpack_require__(/*! raw-loader!./invoice-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/invoice-info/invoice-info.page.html"),
        styles: [__webpack_require__(/*! ./invoice-info.page.scss */ "./src/app/pages/invoice-info/invoice-info.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
        _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], InvoiceInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-invoice-info-invoice-info-module-es2015.js.map