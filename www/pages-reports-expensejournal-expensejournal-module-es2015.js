(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reports-expensejournal-expensejournal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reports/expensejournal/expensejournal.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reports/expensejournal/expensejournal.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\" no-padding>\n    <!-- <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n    <ion-title  (click)=\"optionsOpen()\">Sales by Clients<ion-icon (click)=\"optionsOpen()\" *ngIf=\"option == false\" name=\"arrow-dropdown\"></ion-icon><ion-icon (click)=\"optionsOpen()\" *ngIf=\"option == true\" name=\"arrow-dropup\"></ion-icon></ion-title>\n    <p  style=\"font-size: 2px;\">({{startdate}}-{{enddate}})</p>\n    <ion-label padding slot=\"end\" (click)=\"share()\">Share</ion-label> -->\n    <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n    <ion-grid >\n      <ion-row>\n        <ion-col>\n        </ion-col>\n        <ion-col size=\"10\">\n          <p no-padding style=\"font-size: 18px;\"   (click)=\"optionsOpen()\">Expense Journal<ion-icon (click)=\"optionsOpen()\" *ngIf=\"option == false\" name=\"arrow-dropdown\"></ion-icon><ion-icon (click)=\"optionsOpen()\" *ngIf=\"option == true\" name=\"arrow-dropup\"></ion-icon></p>\n          <p no-padding style=\"font-size: 12px;\" *ngIf=\"selected !== 0\" (click)=\"optionsOpen()\">({{displaystartdate}}-{{displayenddate}})</p>\n          <p no-padding style=\"font-size: 12px;\" *ngIf=\"selected === 0\" (click)=\"optionsOpen()\">All time</p>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-label padding slot=\"end\" (click)=\"share()\">Share</ion-label>\n\n  </ion-toolbar>\n \n \n</ion-header>\n\n<ion-content>\n  <ion-item (click)=\"showBasicPicker()\">\n    <ion-label>Category</ion-label>\n    <ion-label text-right>{{ category }}</ion-label>\n  </ion-item>\n  <div *ngIf=\"option == true\">\n    <ion-item color=\"light\" (click)=\"selectStartDate()\">            \n      <ion-label>\n              <h3 text-capitalize style=\"padding-left: 5px;\" class=\"lightgrey\">Start Date</h3>\n            </ion-label>\n            <ion-label>\n                <span style=\"float:right;\" class=\"cancel\">\n                     {{startdate}}\n                </span>\n              </ion-label>\n     \n  </ion-item>\n  <ion-item color=\"light\" (click)=\"selectEndDate()\">            \n    <ion-label>\n            <h3 text-capitalize style=\"padding-left: 5px;\" class=\"lightgrey\">End Date</h3>\n          </ion-label>\n          <ion-label>\n              <span style=\"float:right;\" class=\"cancel\">\n                   {{enddate}}\n              </span>\n            </ion-label>\n   \n  </ion-item>\n  <ion-item>\n    <ion-button (click)=\"all()\"  text-capitalize=\"false\" fill=\"outline\" size=\"small\" [color]=\"allcolor\" style=\"width: auto;\">All</ion-button>\n    <ion-button (click)=\"thisMonth()\"  text-capitalize=\"false\" fill=\"outline\" size=\"small\"  [color]=\"thismonthcolor\" style=\"width: auto;\">This Month</ion-button>\n    <ion-button (click)=\"lastMonth()\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  [color]=\"lastmonthcolor\" style=\"width: auto;\">Last Month</ion-button>\n    <ion-button (click)=\"thisquarter()\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  [color]=\"thisquartercolor\" style=\"width: auto;\">This Quarter</ion-button>\n\n  </ion-item>\n  </div>\n \n  <div class=\"container-outer\" >\n    <div class=\"container-inner\" >\n      <ngx-datatable\n \n [rows]=\"data\"\n [ngClass]=\"style\"\n [rowHeight]=\"'auto'\"\n [headerHeight]=\"'auto'\"\n [columnMode]=\"'force'\"\n (activate)=\"onActivate($event)\"\n >\n \n   <ngx-datatable-column name=\"Date\" width='100px'></ngx-datatable-column>\n<ngx-datatable-column name=\"Category\"></ngx-datatable-column>\n<ngx-datatable-column name=\"Name\"></ngx-datatable-column>\n<ngx-datatable-column name=\"Description\"></ngx-datatable-column>\n<ngx-datatable-column name=\"Total\"></ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"Actions\">\n        <ng-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n            <ion-button (click)=\"open(rowIndex,row)\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"danger\" style=\"width: auto;\">Delete</ion-button>\n         </ng-template>\n    </ngx-datatable-column> -->\n \n\n    \n</ngx-datatable>\n</div>\n    \n</div>\n</ion-content>\n\n<!-- <ngx-datatable-column name=\"Date\" width='100px'></ngx-datatable-column>\n<ngx-datatable-column name=\"Category\"></ngx-datatable-column>\n<ngx-datatable-column name=\"Name\"></ngx-datatable-column>\n<ngx-datatable-column name=\"Description\"></ngx-datatable-column>\n<ngx-datatable-column name=\"Total\"></ngx-datatable-column> -->"

/***/ }),

/***/ "./src/app/pages/reports/expensejournal/expensejournal-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/reports/expensejournal/expensejournal-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ExpensejournalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensejournalPageRoutingModule", function() { return ExpensejournalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _expensejournal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expensejournal.page */ "./src/app/pages/reports/expensejournal/expensejournal.page.ts");




const routes = [
    {
        path: '',
        component: _expensejournal_page__WEBPACK_IMPORTED_MODULE_3__["ExpensejournalPage"]
    }
];
let ExpensejournalPageRoutingModule = class ExpensejournalPageRoutingModule {
};
ExpensejournalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExpensejournalPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reports/expensejournal/expensejournal.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/reports/expensejournal/expensejournal.module.ts ***!
  \***********************************************************************/
/*! exports provided: ExpensejournalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensejournalPageModule", function() { return ExpensejournalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expensejournal_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expensejournal-routing.module */ "./src/app/pages/reports/expensejournal/expensejournal-routing.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _expensejournal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./expensejournal.page */ "./src/app/pages/reports/expensejournal/expensejournal.page.ts");













let ExpensejournalPageModule = class ExpensejournalPageModule {
};
ExpensejournalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _expensejournal_routing_module__WEBPACK_IMPORTED_MODULE_9__["ExpensejournalPageRoutingModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"]
        ],
        providers: [
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["DatePicker"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]
        ],
        declarations: [_expensejournal_page__WEBPACK_IMPORTED_MODULE_11__["ExpensejournalPage"]]
    })
], ExpensejournalPageModule);



/***/ }),

/***/ "./src/app/pages/reports/expensejournal/expensejournal.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/reports/expensejournal/expensejournal.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-outer {\n  overflow: scroll;\n  width: 100%;\n  height: 100%;\n}\n\n.container-inner {\n  width: 200%;\n}\n\n.datatable-header {\n  height: 50px !important;\n  display: -webkit-box !important;\n  display: flex !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0cy9leHBlbnNlam91cm5hbC9DOlxcd2FtcDY0XFx3d3dcXGludm9pY2UucGsvc3JjXFxhcHBcXHBhZ2VzXFxyZXBvcnRzXFxleHBlbnNlam91cm5hbFxcZXhwZW5zZWpvdXJuYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXBvcnRzL2V4cGVuc2Vqb3VybmFsL2V4cGVuc2Vqb3VybmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFtQixnQkFBQTtFQUFrQixXQUFBO0VBQWEsWUFBQTtBQ0lsRDs7QURIQTtFQUFtQixXQUFBO0FDT25COztBRE5BO0VBQW1CLHVCQUFBO0VBQXlCLCtCQUFBO0VBQUEsd0JBQUE7QUNXNUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBvcnRzL2V4cGVuc2Vqb3VybmFsL2V4cGVuc2Vqb3VybmFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItb3V0ZXIgeyBvdmVyZmxvdzogc2Nyb2xsOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyB9XHJcbi5jb250YWluZXItaW5uZXIgeyB3aWR0aDogMjAwJTsgfVxyXG4uZGF0YXRhYmxlLWhlYWRlcnsgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7IGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgfVxyXG4vLyAuY29udGFpbmVyLW91dGVyIHsgb3ZlcmZsb3c6IHNjcm9sbDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgfVxyXG4vLyAuY29udGFpbmVyLWlubmVyIHsgd2lkdGg6IDEyMCU7IH1cclxuLy8gLmRhdGF0YWJsZS1oZWFkZXJ7IGhlaWdodDogNTBweCAhaW1wb3J0YW50OyBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IH0iLCIuY29udGFpbmVyLW91dGVyIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIHdpZHRoOiAyMDAlO1xufVxuXG4uZGF0YXRhYmxlLWhlYWRlciB7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/reports/expensejournal/expensejournal.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/reports/expensejournal/expensejournal.page.ts ***!
  \*********************************************************************/
/*! exports provided: ExpensejournalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensejournalPage", function() { return ExpensejournalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");












pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10___default.a.pdfMake.vfs;

// import { start } from 'repl';
let ExpensejournalPage = class ExpensejournalPage {
    constructor(router, syncService, loadingCtrl, datePipe, storage, plt, socialSharing, file, fileOpener, datepicker, pickerCtrl) {
        this.router = router;
        this.syncService = syncService;
        this.loadingCtrl = loadingCtrl;
        this.datePipe = datePipe;
        this.storage = storage;
        this.plt = plt;
        this.socialSharing = socialSharing;
        this.file = file;
        this.fileOpener = fileOpener;
        this.datepicker = datepicker;
        this.pickerCtrl = pickerCtrl;
        this.style = 'bootstrap';
        this.data = [];
        this.items = [];
        this.total = [];
        this.option = false;
        this.displaystartdate = '';
        this.displayenddate = '';
        this.pdfObj = null;
        this.startdate = new Date().setHours(0, 0, 0, 0).toString();
        this.enddate = new Date().setHours(23, 59, 59, 999).toString();
        this.company = '';
        this.allcolor = 'dark';
        this.thismonthcolor = 'dark';
        this.lastmonthcolor = 'dark';
        this.thisquartercolor = 'dark';
        this.createstatementcolor = 'success';
        this.selected = 0;
        this.categoryselected = 0;
        this.year = new Date().toString();
        this.category = 'All';
        this.year = this.datePipe.transform(this.year, 'yyyy');
        this.startdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy h:mm a');
        this.enddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy h:mm a');
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        this.storage.get('COM').then((val) => {
            this.company = val;
        });
        this.getAllData();
        storage.get('currency').then((val) => {
            if (val !== null) {
                this.currency = val.toString();
            }
        });
    }
    ngOnInit() {
    }
    share() {
        // this.getData();
        this.createPdf();
    }
    back() {
        this.router.navigate(['/menu/reports']);
    }
    onActivate(event) {
        if (event.type === 'click') {
            console.log(event.row);
        }
    }
    showBasicPicker() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let opts = {
                buttons: [
                    {
                        text: 'Cancel',
                        handler: (value) => {
                            console.log(value, 'cancel');
                            //  ('can')
                            this.pickerCtrl.dismiss();
                        }
                    },
                    {
                        text: 'Done',
                        handler: (value) => {
                            // (value.Categorie.text);
                            this.category = value.Categorie.text;
                            if (this.category === 'All') {
                                this.categoryselected = 0;
                            }
                            else {
                                this.categoryselected = 1;
                            }
                            // ('cat ' + this.categoryselected + '\nbutton '+ this.selected);
                            if (this.categoryselected === 0 && this.selected === 0) {
                                this.data = [];
                                this.getAllData();
                            }
                            else if (this.categoryselected === 1 && this.selected === 0) {
                                this.data = [];
                                this.getDataCategory();
                            }
                            else if (this.categoryselected === 0 && this.selected === 1) {
                                this.data = [];
                                this.getDataTime();
                            }
                            else if (this.categoryselected === 1 && this.selected === 1) {
                                this.data = [];
                                this.getDataCategoryAndTime();
                            }
                        }
                    }
                ],
                columns: [
                    {
                        name: 'Categorie',
                        options: [
                            { text: 'All', value: 'All' },
                            { text: 'Accomodation', value: 'Accomodation' },
                            { text: 'Advertising', value: 'Advertising' },
                            { text: 'Airface', value: 'Airface' },
                            { text: 'Car Rental', value: 'Car Rental' },
                            { text: 'Clothing', value: 'Clothing' },
                            { text: 'Communication', value: 'Communication' },
                            { text: 'Entertainment', value: 'Entertainment' },
                            { text: 'Food and Beverages', value: 'Food and Beverages' },
                            { text: 'General', value: 'General' },
                            { text: 'Groceries', value: 'Groceries' },
                            { text: 'Health', value: 'Health' },
                            { text: 'Office Supplies', value: 'Office Supplies' },
                            { text: 'Rent or Lease', value: 'Rent or Lease' },
                        ]
                    }
                ]
            };
            let picker = yield this.pickerCtrl.create(opts);
            picker.present();
        });
    }
    getDataTime() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            this.syncService.getExpenseJournalByTime(this.startdate, this.enddate, this.currency).then((data) => {
                this.total = data;
                for (let i = 0; i < this.total.length; i++) {
                    const data1 = {
                        date: this.total[i].Date,
                        category: this.total[i].Category,
                        name: this.total[i].Name,
                        description: this.total[i].Description,
                        total: this.total[i].Amount,
                    };
                    this.data.push(data1);
                }
                this.data = [...this.data];
                this.option = false;
                loading.dismiss();
                //('1' + this.total[0].Name + 'p' + this.total[1].Name);
            });
        });
    }
    getDataCategory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            this.syncService.getExpenseJournalByCategory(this.category, this.enddate).then((data) => {
                this.total = data;
                for (let i = 0; i < this.total.length; i++) {
                    const data1 = {
                        date: this.total[i].Date,
                        category: this.total[i].Category,
                        name: this.total[i].Name,
                        description: this.total[i].Description,
                        total: this.total[i].Amount,
                    };
                    this.data.push(data1);
                }
                this.data = [...this.data];
                this.option = false;
                loading.dismiss();
                //('1' + this.total[0].Name + 'p' + this.total[1].Name);
            });
        });
    }
    getDataCategoryAndTime() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            this.syncService.getExpenseJournalByTimeAndCategory(this.startdate, this.enddate, this.category, this.currency).then((data) => {
                this.total = data;
                for (let i = 0; i < this.total.length; i++) {
                    const data1 = {
                        date: this.total[i].Date,
                        category: this.total[i].Category,
                        name: this.total[i].Name,
                        description: this.total[i].Description,
                        total: this.total[i].Amount,
                    };
                    this.data.push(data1);
                }
                this.data = [...this.data];
                this.option = false;
                loading.dismiss();
                //('1' + this.total[0].Name + 'p' + this.total[1].Name);
            });
        });
    }
    getAllData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            this.syncService.getExpenseJournal(this.currency).then((data) => {
                this.total = data;
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < this.total.length; i++) {
                    const data1 = {
                        date: this.total[i].Date,
                        category: this.total[i].Category,
                        name: this.total[i].Name,
                        description: this.total[i].Description,
                        total: this.total[i].Amount,
                    };
                    this.data.push(data1);
                }
                this.data = [...this.data];
                loading.dismiss();
                this.option = false;
                //('1' + this.total[0].Name + 'p' + this.total[1].Name);
            });
        });
    }
    optionsOpen() {
        if (this.option === true) {
            this.option = false;
            // ('option: ' + this.option);
        }
        else {
            this.option = true;
            // ('option: ' + this.option);
        }
    }
    selectStartDate() {
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datepicker.show(options).then((date) => {
            this.selected = 1;
            // ('cat ' + this.categoryselected + '\nbutton ' + this.selected);
            this.startdate = this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
            this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
            this.data = [];
            if (this.categoryselected === 0 && this.selected === 0) {
                this.data = [];
                this.getAllData();
            }
            else if (this.categoryselected === 1 && this.selected === 0) {
                this.data = [];
                this.getDataCategory();
            }
            else if (this.categoryselected === 0 && this.selected === 1) {
                this.data = [];
                this.getDataTime();
            }
            else if (this.categoryselected === 1 && this.selected === 1) {
                this.data = [];
                this.getDataCategoryAndTime();
            }
            this.thismonthcolor = 'dark';
            this.lastmonthcolor = 'dark';
            this.thisquartercolor = 'dark';
            this.allcolor = 'dark';
            this.option = false;
            // console.log('selected:',this.myDate);
        });
    }
    selectEndDate() {
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datepicker.show(options).then((date) => {
            this.selected = 1;
            ('cat ' + this.categoryselected + '\nbutton ' + this.selected);
            date.setHours(23, 59, 59, 999);
            this.enddate = this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
            this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
            this.thismonthcolor = 'dark';
            this.lastmonthcolor = 'dark';
            this.thisquartercolor = 'dark';
            this.allcolor = 'dark';
            this.data = [];
            if (this.categoryselected === 0 && this.selected === 0) {
                this.data = [];
                this.getAllData();
            }
            else if (this.categoryselected === 1 && this.selected === 0) {
                this.data = [];
                this.getDataCategory();
            }
            else if (this.categoryselected === 0 && this.selected === 1) {
                this.data = [];
                this.getDataTime();
            }
            else if (this.categoryselected === 1 && this.selected === 1) {
                this.data = [];
                this.getDataCategoryAndTime();
            }
            this.option = false;
            // console.log('selected:',this.myDate);
        });
    }
    all() {
        this.selected = 0;
        this.thisquartercolor = 'dark';
        this.allcolor = 'primary';
        this.thismonthcolor = 'dark';
        this.lastmonthcolor = 'dark';
        this.data = [];
        if (this.categoryselected === 0 && this.selected === 0) {
            this.data = [];
            this.getAllData();
        }
        else if (this.categoryselected === 1 && this.selected === 0) {
            this.data = [];
            this.getDataCategory();
        }
        else if (this.categoryselected === 0 && this.selected === 1) {
            this.data = [];
            this.getDataTime();
        }
        else if (this.categoryselected === 1 && this.selected === 1) {
            this.data = [];
            this.getDataCategoryAndTime();
        }
        this.option = false;
        // ('cat ' + this.categoryselected + '\nbutton '+ this.selected);
    }
    thisMonth() {
        this.selected = 1;
        this.thismonthcolor = 'primary';
        this.lastmonthcolor = 'dark';
        this.thisquartercolor = 'dark';
        this.allcolor = 'dark';
        const date = new Date();
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).setHours(0, 0, 0, 0);
        this.startdate = this.datePipe.transform(firstDay, 'dd MMM yyyy h:mm a');
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).setHours(23, 59, 59, 999);
        this.enddate = this.datePipe.transform(lastDay, 'dd MMM yyyy h:mm a');
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        // ('first: ' + this.startdate + 'Last: ' + this.enddate);
        this.data = [];
        if (this.categoryselected === 0 && this.selected === 0) {
            this.data = [];
            this.getAllData();
        }
        else if (this.categoryselected === 1 && this.selected === 0) {
            this.data = [];
            this.getDataCategory();
        }
        else if (this.categoryselected === 0 && this.selected === 1) {
            this.data = [];
            this.getDataTime();
        }
        else if (this.categoryselected === 1 && this.selected === 1) {
            this.data = [];
            this.getDataCategoryAndTime();
        }
        this.option = false;
        // ('cat ' + this.categoryselected + '\nbutton '+ this.selected);
    }
    lastMonth() {
        this.selected = 1;
        this.lastmonthcolor = 'primary';
        this.thisquartercolor = 'dark';
        this.allcolor = 'dark';
        this.thismonthcolor = 'dark';
        const date = new Date();
        const firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1).setHours(0, 0, 0, 0);
        this.startdate = this.datePipe.transform(firstDay, 'dd MMM yyyy h:mm a');
        const lastDay = new Date(date.getFullYear(), date.getMonth(), 0).setHours(23, 59, 59, 999);
        this.enddate = this.datePipe.transform(lastDay, 'dd MMM yyyy h:mm a');
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        // ('first: ' + this.startdate + 'Last: ' + this.enddate);
        this.data = [];
        if (this.categoryselected === 0 && this.selected === 0) {
            this.data = [];
            this.getAllData();
        }
        else if (this.categoryselected === 1 && this.selected === 0) {
            this.data = [];
            this.getDataCategory();
        }
        else if (this.categoryselected === 0 && this.selected === 1) {
            this.data = [];
            this.getDataTime();
        }
        else if (this.categoryselected === 1 && this.selected === 1) {
            this.data = [];
            this.getDataCategoryAndTime();
        }
        this.option = false;
        // ('cat ' + this.categoryselected + '\nbutton '+ this.selected);
    }
    thisquarter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.selected = 1;
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            this.thisquartercolor = 'primary';
            this.allcolor = 'dark';
            this.thismonthcolor = 'dark';
            this.lastmonthcolor = 'dark';
            const current = new Date();
            const currentmonth = current.getMonth() + 1;
            const currentYear = current.getFullYear().toString();
            // ('cat ' + this.categoryselected + '\nbutton ' + this.selected);
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
        });
    }
    test() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.thisquartercolor = 'primary';
            this.allcolor = 'dark';
            this.thismonthcolor = 'dark';
            this.lastmonthcolor = 'dark';
            this.data = [];
            if (this.categoryselected === 0 && this.selected === 0) {
                this.data = [];
                this.getAllData();
            }
            else if (this.categoryselected === 1 && this.selected === 0) {
                this.data = [];
                this.getDataCategory();
            }
            else if (this.categoryselected === 0 && this.selected === 1) {
                this.data = [];
                this.getDataTime();
            }
            else if (this.categoryselected === 1 && this.selected === 1) {
                this.data = [];
                this.getDataCategoryAndTime();
            }
            this.option = false;
        });
    }
    getQ1() {
        const firstdayofmonth = new Date(parseInt(this.year), 0, 1).setHours(0, 0, 0, 0);
        const first1 = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
        const lastdayofmonth = new Date(parseInt(this.year), 2 + 1, 0).setHours(23, 59, 59, 999);
        const last1 = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
        this.startdate = first1;
        this.enddate = last1;
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        const a = Math.round((new Date(first1)).getTime() / 1000);
        const b = Math.round((new Date(last1)).getTime() / 1000);
        if (this.categoryselected === 0 && this.selected === 0) {
            this.data = [];
            this.getAllData();
        }
        else if (this.categoryselected === 1 && this.selected === 0) {
            this.data = [];
            this.getDataCategory();
        }
        else if (this.categoryselected === 0 && this.selected === 1) {
            this.data = [];
            this.getDataTime();
        }
        else if (this.categoryselected === 1 && this.selected === 1) {
            this.data = [];
            this.getDataCategoryAndTime();
        }
    }
    getQ2() {
        const firstdayofmonth = new Date(parseInt(this.year), 3, 1).setHours(0, 0, 0, 0);
        const first1 = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
        const lastdayofmonth = new Date(parseInt(this.year), 5 + 1, 0).setHours(23, 59, 59, 999);
        const last1 = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
        this.startdate = first1;
        this.enddate = last1;
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        const a = Math.round((new Date(first1)).getTime() / 1000);
        const b = Math.round((new Date(last1)).getTime() / 1000);
        if (this.categoryselected === 0 && this.selected === 0) {
            this.data = [];
            this.getAllData();
        }
        else if (this.categoryselected === 1 && this.selected === 0) {
            this.data = [];
            this.getDataCategory();
        }
        else if (this.categoryselected === 0 && this.selected === 1) {
            this.data = [];
            this.getDataTime();
        }
        else if (this.categoryselected === 1 && this.selected === 1) {
            this.data = [];
            this.getDataCategoryAndTime();
        }
    }
    getQ3() {
        const firstdayofmonth = new Date(parseInt(this.year), 6, 1).setHours(0, 0, 0, 0);
        const first1 = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
        const lastdayofmonth = new Date(parseInt(this.year), 8 + 1, 0).setHours(23, 59, 59, 999);
        const last1 = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
        this.startdate = first1;
        this.enddate = last1;
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        if (this.categoryselected === 0 && this.selected === 0) {
            this.data = [];
            this.getAllData();
        }
        else if (this.categoryselected === 1 && this.selected === 0) {
            this.data = [];
            this.getDataCategory();
        }
        else if (this.categoryselected === 0 && this.selected === 1) {
            this.data = [];
            this.getDataTime();
        }
        else if (this.categoryselected === 1 && this.selected === 1) {
            this.data = [];
            this.getDataCategoryAndTime();
        }
    }
    getQ4() {
        const firstdayofmonth = new Date(parseInt(this.year), 9, 1).setHours(0, 0, 0, 0);
        const first1 = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
        const lastdayofmonth = new Date(parseInt(this.year), 11 + 1, 0).setHours(23, 59, 59, 999);
        const last1 = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
        this.startdate = first1;
        this.enddate = last1;
        this.displaystartdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy');
        this.displayenddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy');
        if (this.categoryselected === 0 && this.selected === 0) {
            this.data = [];
            this.getAllData();
        }
        else if (this.categoryselected === 1 && this.selected === 0) {
            this.data = [];
            this.getDataCategory();
        }
        else if (this.categoryselected === 0 && this.selected === 1) {
            this.data = [];
            this.getDataTime();
        }
        else if (this.categoryselected === 1 && this.selected === 1) {
            this.data = [];
            this.getDataCategoryAndTime();
        }
    }
    createPdf() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let a;
            let x;
            let y;
            let z;
            let left;
            let right;
            let items = [];
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const itemss = [];
            for (let i = 0; i < this.data.length; i++) {
                itemss.push([
                    { text: this.data[i].date.toString(), fontSize: 12, color: '#000000' },
                    { text: this.data[i].category.toString(), fontSize: 12, color: '#000000' },
                    { text: this.data[i].name.toString(), fontSize: 12, color: '#000000' },
                    { text: this.data[i].description.toString(), fontSize: 12, color: '#000000' },
                    { text: this.data[i].total.toString(), fontSize: 12, color: '#000000' }
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
            var docDefinition = {
                pageSize: 'A4',
                pageMargins: [20, 20, 20, 20],
                content: [
                    { text: 'EXPENSE JOURNAL', bold: true, alignment: 'center', fontSize: 25, style: 'subheader' },
                    // { text: this.year, bold: true, alignment: 'center', fontSize: 25, style: 'subheader'},
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
                            { text: 'Date ', style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
                            { text: '                               Category', style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
                            { text: '                 Name', style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
                            { text: '              Description', style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
                            { text: '                    Total', style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
                        ]
                    },
                    {
                        margin: [0, 5, 0, 0],
                        style: 'totalsTable',
                        table: {
                            widths: [140, 100, 100, 110, 100],
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
            this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9___default.a.createPdf(docDefinition);
            this.downloadPdf(loading);
            //   });
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
                    // this.fileOpener.open(this.file.dataDirectory + a + '.pdf', 'application/pdf'); 
                    // loading.dismiss();
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
ExpensejournalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_12__["DatePicker"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"] }
];
ExpensejournalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expensejournal',
        template: __webpack_require__(/*! raw-loader!./expensejournal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reports/expensejournal/expensejournal.page.html"),
        styles: [__webpack_require__(/*! ./expensejournal.page.scss */ "./src/app/pages/reports/expensejournal/expensejournal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"],
        _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_12__["DatePicker"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PickerController"]])
], ExpensejournalPage);



/***/ })

}]);
//# sourceMappingURL=pages-reports-expensejournal-expensejournal-module-es2015.js.map