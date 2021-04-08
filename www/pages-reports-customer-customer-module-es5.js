(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reports-customer-customer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reports/customer/customer.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reports/customer/customer.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\" no-padding>\n    <!-- <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n    <ion-title  (click)=\"optionsOpen()\">Sales by Clients<ion-icon (click)=\"optionsOpen()\" *ngIf=\"option == false\" name=\"arrow-dropdown\"></ion-icon><ion-icon (click)=\"optionsOpen()\" *ngIf=\"option == true\" name=\"arrow-dropup\"></ion-icon></ion-title>\n    <p  style=\"font-size: 2px;\">({{startdate}}-{{enddate}})</p>\n    <ion-label padding slot=\"end\" (click)=\"share()\">Share</ion-label> -->\n    <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n    <ion-grid >\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col size=\"10\">\n          <p no-padding style=\"font-size: 18px;\"   (click)=\"optionsOpen()\">Sales by Clients<ion-icon (click)=\"optionsOpen()\" *ngIf=\"option == false\" name=\"arrow-dropdown\"></ion-icon><ion-icon (click)=\"optionsOpen()\" *ngIf=\"option == true\" name=\"arrow-dropup\"></ion-icon></p>\n          <!-- <p no-padding style=\"font-size: 12px;\" (click)=\"optionsOpen()\">({{displaystartdate}}-{{displayenddate}})</p> -->\n          <p no-padding style=\"font-size: 12px;\" *ngIf=\"selected !== 0\" (click)=\"optionsOpen()\">({{displaystartdate}}-{{displayenddate}})</p>\n          <p no-padding style=\"font-size: 12px;\" *ngIf=\"selected === 0\" (click)=\"optionsOpen()\">All time</p>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-label padding slot=\"end\" (click)=\"share()\">Share</ion-label>\n\n  </ion-toolbar>\n \n \n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"option == true\">\n    <ion-item color=\"light\" (click)=\"selectStartDate()\">            \n      <ion-label>\n              <h3 text-capitalize style=\"padding-left: 5px;\" class=\"lightgrey\">Start Date</h3>\n            </ion-label>\n            <ion-label>\n                <span style=\"float:right;\" class=\"cancel\">\n                     {{startdate}}\n                </span>\n              </ion-label>\n     \n  </ion-item>\n  <ion-item color=\"light\" (click)=\"selectEndDate()\">            \n    <ion-label>\n            <h3 text-capitalize style=\"padding-left: 5px;\" class=\"lightgrey\">End Date</h3>\n          </ion-label>\n          <ion-label>\n              <span style=\"float:right;\" class=\"cancel\">\n                   {{enddate}}\n              </span>\n            </ion-label>\n   \n  </ion-item>\n  <ion-item>\n    <ion-button (click)=\"all()\"  text-capitalize=\"false\" fill=\"outline\" size=\"small\" [color]=\"allcolor\" style=\"width: auto;\">All</ion-button>\n    <ion-button (click)=\"thisMonth()\"  text-capitalize=\"false\" fill=\"outline\" size=\"small\"  [color]=\"thismonthcolor\" style=\"width: auto;\">This Month</ion-button>\n    <ion-button (click)=\"lastMonth()\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  [color]=\"lastmonthcolor\" style=\"width: auto;\">Last Month</ion-button>\n    <ion-button (click)=\"thisquarter()\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  [color]=\"thisquartercolor\" style=\"width: auto;\">This Quarter</ion-button>\n\n  </ion-item>\n  </div>\n \n  <div class=\"container-outer\" *ngIf=\"option == false\">\n    <div class=\"container-inner\" >\n      <ngx-datatable\n \n [rows]=\"data\"\n [ngClass]=\"style\"\n [rowHeight]=\"'auto'\"\n [headerHeight]=\"'auto'\"\n [columnMode]=\"'force'\"\n (activate)=\"onActivate($event)\"\n >\n \n    <ngx-datatable-column name=\"Client\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Sales\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Paid\"></ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"Actions\">\n        <ng-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n            <ion-button (click)=\"open(rowIndex,row)\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"danger\" style=\"width: auto;\">Delete</ion-button>\n         </ng-template>\n    </ngx-datatable-column> -->\n \n\n    \n</ngx-datatable>\n</div>\n    \n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/reports/customer/customer-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/reports/customer/customer-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageRoutingModule", function() { return CustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.page */ "./src/app/pages/reports/customer/customer.page.ts");




var routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_3__["CustomerPage"]
    }
];
var CustomerPageRoutingModule = /** @class */ (function () {
    function CustomerPageRoutingModule() {
    }
    CustomerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CustomerPageRoutingModule);
    return CustomerPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/reports/customer/customer.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/reports/customer/customer.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/pages/reports/customer/customer-routing.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer.page */ "./src/app/pages/reports/customer/customer.page.ts");













var CustomerPageModule = /** @class */ (function () {
    function CustomerPageModule() {
    }
    CustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _customer_routing_module__WEBPACK_IMPORTED_MODULE_9__["CustomerPageRoutingModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"]
            ],
            providers: [
                _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__["FileOpener"],
                _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]
            ],
            declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_11__["CustomerPage"]]
        })
    ], CustomerPageModule);
    return CustomerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/reports/customer/customer.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/reports/customer/customer.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-outer {\n  overflow: scroll;\n  width: 100%;\n  height: 100%;\n}\n\n.container-inner {\n  width: 120%;\n}\n\n.datatable-header {\n  height: 50px !important;\n  display: -webkit-box !important;\n  display: flex !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0cy9jdXN0b21lci9DOlxcd2FtcDY0XFx3d3dcXGludm9pY2UucGsvc3JjXFxhcHBcXHBhZ2VzXFxyZXBvcnRzXFxjdXN0b21lclxcY3VzdG9tZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXBvcnRzL2N1c3RvbWVyL2N1c3RvbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFtQixnQkFBQTtFQUFrQixXQUFBO0VBQWEsWUFBQTtBQ0lsRDs7QURIQTtFQUFtQixXQUFBO0FDT25COztBRE5BO0VBQW1CLHVCQUFBO0VBQXlCLCtCQUFBO0VBQUEsd0JBQUE7QUNXNUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBvcnRzL2N1c3RvbWVyL2N1c3RvbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItb3V0ZXIgeyBvdmVyZmxvdzogc2Nyb2xsOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9XHJcbi5jb250YWluZXItaW5uZXIgeyB3aWR0aDogMTIwJTsgfVxyXG4uZGF0YXRhYmxlLWhlYWRlcnsgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7IGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgfSIsIi5jb250YWluZXItb3V0ZXIge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlubmVyIHtcbiAgd2lkdGg6IDEyMCU7XG59XG5cbi5kYXRhdGFibGUtaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/reports/customer/customer.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/reports/customer/customer.page.ts ***!
  \*********************************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");








// import { start } from 'repl';





pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11___default.a.pdfMake.vfs;
var CustomerPage = /** @class */ (function () {
    function CustomerPage(router, syncService, loadingCtrl, datePipe, datepicker, plt, socialSharing, file, fileOpener, storage) {
        var _this = this;
        this.router = router;
        this.syncService = syncService;
        this.loadingCtrl = loadingCtrl;
        this.datePipe = datePipe;
        this.datepicker = datepicker;
        this.plt = plt;
        this.socialSharing = socialSharing;
        this.file = file;
        this.fileOpener = fileOpener;
        this.storage = storage;
        this.style = 'bootstrap';
        this.data = [];
        this.items = [];
        this.total = [];
        this.option = false;
        this.startdate = new Date().setHours(0, 0, 0, 0).toString();
        this.enddate = new Date().setHours(23, 59, 59, 999).toString();
        this.allcolor = 'dark';
        this.thismonthcolor = 'dark';
        this.lastmonthcolor = 'dark';
        this.thisquartercolor = 'dark';
        this.year = new Date().toString();
        this.displaystartdate = '';
        this.displayenddate = '';
        this.pdfObj = null;
        this.company = '';
        this.selected = 0;
        this.storage.get('COM').then(function (val) {
            _this.company = val;
        });
        this.year = this.datePipe.transform(this.year, 'yyyy');
        this.startdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy h:mm a');
        this.enddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy h:mm a');
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        // this.getDataTime();
        this.getAllData();
        storage.get('currency').then(function (val) {
            if (val !== null) {
                _this.currency = val.toString();
                debugger;
            }
        });
    }
    CustomerPage.prototype.ngOnInit = function () {
    };
    CustomerPage.prototype.share = function () {
        // this.getData();
        this.createPdf();
    };
    CustomerPage.prototype.back = function () {
        this.router.navigate(['/menu/reports']);
    };
    CustomerPage.prototype.onActivate = function (event) {
        if (event.type === 'click') {
            console.log(event.row);
        }
    };
    CustomerPage.prototype.getDataTime = function () {
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
                        this.syncService.getSalesByCustomertime(this.startdate, this.enddate, this.currency).then(function (data) {
                            _this.total = data;
                            for (var i = 0; i < _this.total.length; i++) {
                                var data1 = {
                                    client: _this.total[i].Name,
                                    sales: _this.total[i].Total,
                                    paid: _this.total[i].Paid
                                };
                                _this.data.push(data1);
                            }
                            _this.data = _this.data.slice();
                            _this.option = false;
                            _this.selected = 1;
                            loading.dismiss();
                            //alert('1' + this.total[0].Name + 'p' + this.total[1].Name);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.prototype.getAllData = function () {
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
                        this.syncService.getSalesByCustomer(this.currency).then(function (data) {
                            _this.total = data;
                            for (var i = 0; i < _this.total.length; i++) {
                                var data1 = {
                                    client: _this.total[i].Name,
                                    sales: _this.total[i].Total,
                                    paid: _this.total[i].Paid
                                };
                                _this.data.push(data1);
                            }
                            _this.data = _this.data.slice();
                            _this.selected = 0;
                            loading.dismiss();
                            _this.option = false;
                            //alert('1' + this.total[0].Name + 'p' + this.total[1].Name);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.prototype.optionsOpen = function () {
        if (this.option === true) {
            this.option = false;
            // alert('option: ' + this.option);
        }
        else {
            this.option = true;
            // alert('option: ' + this.option);
        }
    };
    CustomerPage.prototype.selectStartDate = function () {
        var _this = this;
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datepicker.show(options).then(function (date) {
            _this.startdate = _this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
            _this.data = [];
            _this.getDataTime();
            _this.thismonthcolor = 'dark';
            _this.lastmonthcolor = 'dark';
            _this.thisquartercolor = 'dark';
            _this.allcolor = 'dark';
            // console.log('selected:',this.myDate);
        });
    };
    CustomerPage.prototype.selectEndDate = function () {
        var _this = this;
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datepicker.show(options).then(function (date) {
            date.setHours(23, 59, 59, 999);
            _this.enddate = _this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
            _this.displayenddate = _this.datePipe.transform(_this.enddate, 'dd MMM yyyy');
            _this.thismonthcolor = 'dark';
            _this.lastmonthcolor = 'dark';
            _this.thisquartercolor = 'dark';
            _this.allcolor = 'dark';
            _this.data = [];
            _this.getDataTime();
            // console.log('selected:',this.myDate);
        });
    };
    CustomerPage.prototype.all = function () {
        this.allcolor = 'primary';
        this.thismonthcolor = 'dark';
        this.lastmonthcolor = 'dark';
        this.thisquartercolor = 'dark';
        this.data = [];
        this.getAllData();
    };
    CustomerPage.prototype.thisMonth = function () {
        this.thismonthcolor = 'primary';
        this.lastmonthcolor = 'dark';
        this.thisquartercolor = 'dark';
        this.allcolor = 'dark';
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).setHours(0, 0, 0, 0);
        this.startdate = this.datePipe.transform(firstDay, 'dd MMM yyyy h:mm a');
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).setHours(23, 59, 59, 999);
        this.enddate = this.datePipe.transform(lastDay, 'dd MMM yyyy h:mm a');
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        // alert('first: ' + this.startdate + 'Last: ' + this.enddate);
        this.data = [];
        this.getDataTime();
    };
    CustomerPage.prototype.lastMonth = function () {
        this.lastmonthcolor = 'primary';
        this.thisquartercolor = 'dark';
        this.allcolor = 'dark';
        this.thismonthcolor = 'dark';
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1).setHours(0, 0, 0, 0);
        this.startdate = this.datePipe.transform(firstDay, 'dd MMM yyyy h:mm a');
        var lastDay = new Date(date.getFullYear(), date.getMonth(), 0).setHours(23, 59, 59, 999);
        this.enddate = this.datePipe.transform(lastDay, 'dd MMM yyyy h:mm a');
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        // alert('first: ' + this.startdate + 'Last: ' + this.enddate);
        this.data = [];
        this.getDataTime();
    };
    CustomerPage.prototype.thisquarter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, current, currentmonth, currentYear;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.thisquartercolor = 'primary';
                        this.allcolor = 'dark';
                        this.thismonthcolor = 'dark';
                        this.lastmonthcolor = 'dark';
                        current = new Date();
                        currentmonth = current.getMonth() + 1;
                        currentYear = current.getFullYear().toString();
                        if (currentmonth >= 1 && currentmonth <= 3) {
                            this.data = [];
                            this.getQ1();
                            this.option = false;
                            loading.dismiss();
                        }
                        if (currentmonth >= 4 && currentmonth <= 6) {
                            this.data = [];
                            this.getQ2();
                            this.option = false;
                            loading.dismiss();
                        }
                        if (currentmonth >= 7 && currentmonth <= 9) {
                            this.data = [];
                            this.getQ3();
                            this.option = false;
                            loading.dismiss();
                        }
                        if (currentmonth >= 10 && currentmonth <= 12) {
                            this.data = [];
                            this.getQ4();
                            this.option = false;
                            loading.dismiss();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.prototype.getQ1 = function () {
        var firstdayofmonth = new Date(parseInt(this.year), 0, 1).setHours(0, 0, 0, 0);
        var first1 = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
        var lastdayofmonth = new Date(parseInt(this.year), 2 + 1, 0).setHours(23, 59, 59, 999);
        var last1 = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
        this.startdate = first1;
        this.enddate = last1;
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        var a = Math.round((new Date(first1)).getTime() / 1000);
        var b = Math.round((new Date(last1)).getTime() / 1000);
        this.getDataTime();
    };
    CustomerPage.prototype.getQ2 = function () {
        var firstdayofmonth = new Date(parseInt(this.year), 3, 1).setHours(0, 0, 0, 0);
        var first1 = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
        var lastdayofmonth = new Date(parseInt(this.year), 5 + 1, 0).setHours(23, 59, 59, 999);
        var last1 = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
        this.startdate = first1;
        this.enddate = last1;
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        var a = Math.round((new Date(first1)).getTime() / 1000);
        var b = Math.round((new Date(last1)).getTime() / 1000);
        this.getDataTime();
    };
    CustomerPage.prototype.getQ3 = function () {
        var firstdayofmonth = new Date(parseInt(this.year), 6, 1).setHours(0, 0, 0, 0);
        var first1 = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
        var lastdayofmonth = new Date(parseInt(this.year), 8 + 1, 0).setHours(23, 59, 59, 999);
        var last1 = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
        this.startdate = first1;
        this.enddate = last1;
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        this.getDataTime();
    };
    CustomerPage.prototype.getQ4 = function () {
        var firstdayofmonth = new Date(parseInt(this.year), 9, 1).setHours(0, 0, 0, 0);
        var first1 = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
        var lastdayofmonth = new Date(parseInt(this.year), 11 + 1, 0).setHours(23, 59, 59, 999);
        var last1 = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
        this.startdate = first1;
        this.enddate = last1;
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        this.getDataTime();
    };
    CustomerPage.prototype.createPdf = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var a, x, y, z, left, right, items, loading, itemss, i, docDefinition;
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
                        itemss = [];
                        for (i = 0; i < this.data.length; i++) {
                            itemss.push([
                                { text: this.data[i].client.toString(), fontSize: 18, color: '#000000' },
                                { text: this.data[i].sales.toString(), fontSize: 18, color: '#000000' },
                                { text: this.data[i].paid.toString(), fontSize: 18, color: '#000000' }
                            ]);
                        }
                        left = {
                            text: [
                                { text: this.company, bold: true, fontSize: 20, alignment: 'left' },
                            ]
                        };
                        right = {
                            text: [
                                { text: this.datePipe.transform(new Date(), 'dd MMM yyyy'), color: '#000000', fontSize: 18, alignment: 'right' },
                            ]
                        };
                        docDefinition = {
                            pageSize: 'A4',
                            pageMargins: [20, 20, 20, 20],
                            content: [
                                { text: 'SALES BY CLIENT', bold: true, alignment: 'center', fontSize: 25, style: 'subheader' },
                                { text: this.displaystartdate + ' - ' + this.displayenddate, bold: true, alignment: 'center', fontSize: 25, style: 'subheader' },
                                // { margin: [0, 10, 0, 0],
                                //   text: 'CUSTOMER STATEMENT', style: 'header', fontSize: 25, alignment: 'left', color: '#ff0000' },
                                {
                                    margin: [0, 10, 0, 0],
                                    canvas: [
                                        {
                                            type: 'line',
                                            x1: 0, y1: 0,
                                            x2: 555, y2: 0,
                                            lineWidth: 3
                                        },
                                    ]
                                },
                                {
                                    margin: [0, 5, 0, 0],
                                    style: 'totalsTable',
                                    table: {
                                        widths: [300, 250],
                                        body: [
                                            [
                                                left, right
                                            ],
                                        ],
                                    },
                                    layout: 'noBorders'
                                },
                                {
                                    margin: [0, 20, 0, 0],
                                    text: [
                                        { text: 'Client ', style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
                                        { text: '                                  Total', style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
                                        { text: '                         Paid', style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
                                    ]
                                },
                                {
                                    margin: [0, 5, 0, 0],
                                    style: 'totalsTable',
                                    table: {
                                        widths: [220, 160, 200],
                                        body: itemss
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
                        this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10___default.a.createPdf(docDefinition);
                        this.downloadPdf(loading);
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.prototype.downloadPdf = function (loading) {
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
                    // this.fileOpener.open(this.file.dataDirectory + a + '.pdf', 'application/pdf'); 
                    // loading.dismiss();
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
    CustomerPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["DatePicker"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
    ]; };
    CustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! raw-loader!./customer.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reports/customer/customer.page.html"),
            styles: [__webpack_require__(/*! ./customer.page.scss */ "./src/app/pages/reports/customer/customer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["DatePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], CustomerPage);
    return CustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-reports-customer-customer-module-es5.js.map