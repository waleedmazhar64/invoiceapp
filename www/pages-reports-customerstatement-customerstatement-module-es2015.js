(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reports-customerstatement-customerstatement-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reports/customerstatement/customerstatement.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reports/customerstatement/customerstatement.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n    <!-- <ion-title>Sales by Day(<span (click)=\"selectDate()\">{{day}}</span>)</ion-title> -->\n    <ion-title>Customer Statement</ion-title>\n\n    <!-- <ion-label padding slot=\"end\" (click)=\"share()\">Share</ion-label> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n        <ion-virtual-scroll [items]=\"total\" approxItemHeight=\"70px\" >\n \n\n            <ion-item-sliding *virtualItem=\"let customer;index as pos\" >\n                <!-- <ion-item-options side=\"start\">\n                    <ion-item-option (click)=\"edit(expenses)\">Edit</ion-item-option>\n                    <ion-item-option color=\"danger\" (click)=\"delete(expenses)\">Delete</ion-item-option>\n                  </ion-item-options> -->\n            <ion-item (click)=\"itemClicked(customer,pos)\">\n              \n                <img padding src=\"assets/blackcircle.png\">\n                <ion-label>\n                  <h2 text-capitalize>{{ customer.Name }}</h2>\n                  <p>{{ customer.Date }}</p>\n                </ion-label>\n                <!-- <ion-label>\n                  <h2 text-capitalize style=\"visibility: hidden;\">{{ expenses.Category }}</h2>\n                  <p>{{ expenses.Date }}</p>\n                </ion-label> -->\n                <ion-label style=\"text-align: right;\">\n                  <span  style=\"float:right;\">\n                    <p style=\"color: grey;\">Amount Due</p>\n                    <span  >\n                      {{ customer.Total - customer.Paid  | currency:currency:true:\"1.2\" }}\n                    </span>\n                  </span>\n               \n\n                </ion-label>\n            </ion-item>\n              <div  *ngIf=\"customer.div == true\">\n                <ion-item color=\"light\" (click)=\"selectStartDate()\">            \n                  <ion-label>\n                          <h3 text-capitalize style=\"padding-left: 5px;\" class=\"lightgrey\">Start Date</h3>\n                        </ion-label>\n                        <ion-label>\n                            <span style=\"float:right;\" *ngIf=\"selected == 1 || selected == 2 || selected == 0\" class=\"cancel\">\n                                 {{startdate}}\n                            </span>\n                            <span style=\"float:right;\" *ngIf=\"selected == 3\" class=\"lightgrey\">\n                              {{startdate}}\n                            </span>\n                          </ion-label>\n                 \n              </ion-item>\n              <ion-item color=\"light\" (click)=\"selectEndDate()\">            \n                <ion-label>\n                        <h3 text-capitalize style=\"padding-left: 5px;\" class=\"lightgrey\">End Date</h3>\n                      </ion-label>\n                      <ion-label>\n                          <span style=\"float:right;\" *ngIf=\"selected == 1 || selected == 2 || selected == 0\" class=\"cancel\">\n                               {{enddate}}\n                          </span>\n                          <span style=\"float:right;\" *ngIf=\"selected == 3\" class=\"lightgrey\">\n                            {{enddate}}\n                          </span>\n                        </ion-label>\n               \n              </ion-item>\n              <ion-item>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <ion-button (click)=\"thisMonth()\"  text-capitalize=\"false\" fill=\"outline\" size=\"small\"  [color]=\"thismonthcolor\" style=\"width: auto;\">Current Month</ion-button>\n                    </ion-col>\n                    <ion-col>\n                      <ion-button (click)=\"lastMonth()\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  [color]=\"lastmonthcolor\" style=\"width: auto;\">Last Month</ion-button>\n                    </ion-col>\n                    <ion-col>\n                      <ion-button (click)=\"all()\"  text-capitalize=\"false\" fill=\"outline\" size=\"small\" [color]=\"allcolor\" style=\"width: auto;\">All Time</ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n              <ion-item text-center>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                    </ion-col>\n                    <ion-col>\n                      <ion-button (click)=\"createStatement(customer)\"  text-capitalize=\"false\" fill=\"outline\" size=\"small\" [color]=\"createstatementcolor\" style=\"width: auto;\">Create Statement</ion-button>\n                    </ion-col>\n                    <ion-col>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                <!-- <div style=\"text-align: center;\">\n                </div> -->\n              </ion-item>\n             \n              </div>\n            </ion-item-sliding>\n          </ion-virtual-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/reports/customerstatement/customerstatement-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/reports/customerstatement/customerstatement-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomerstatementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerstatementPageRoutingModule", function() { return CustomerstatementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customerstatement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerstatement.page */ "./src/app/pages/reports/customerstatement/customerstatement.page.ts");




const routes = [
    {
        path: '',
        component: _customerstatement_page__WEBPACK_IMPORTED_MODULE_3__["CustomerstatementPage"]
    }
];
let CustomerstatementPageRoutingModule = class CustomerstatementPageRoutingModule {
};
CustomerstatementPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerstatementPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reports/customerstatement/customerstatement.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/reports/customerstatement/customerstatement.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomerstatementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerstatementPageModule", function() { return CustomerstatementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customerstatement_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customerstatement-routing.module */ "./src/app/pages/reports/customerstatement/customerstatement-routing.module.ts");
/* harmony import */ var _customerstatement_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customerstatement.page */ "./src/app/pages/reports/customerstatement/customerstatement.page.ts");












let CustomerstatementPageModule = class CustomerstatementPageModule {
};
CustomerstatementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _customerstatement_routing_module__WEBPACK_IMPORTED_MODULE_9__["CustomerstatementPageRoutingModule"]
        ],
        providers: [
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["DatePicker"]
        ],
        declarations: [_customerstatement_page__WEBPACK_IMPORTED_MODULE_10__["CustomerstatementPage"]]
    })
], CustomerstatementPageModule);



/***/ }),

/***/ "./src/app/pages/reports/customerstatement/customerstatement.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/reports/customerstatement/customerstatement.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydHMvY3VzdG9tZXJzdGF0ZW1lbnQvY3VzdG9tZXJzdGF0ZW1lbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/reports/customerstatement/customerstatement.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/reports/customerstatement/customerstatement.page.ts ***!
  \***************************************************************************/
/*! exports provided: CustomerstatementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerstatementPage", function() { return CustomerstatementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");













pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_11___default.a.pdfMake.vfs;
let CustomerstatementPage = class CustomerstatementPage {
    constructor(router, syncService, loadingCtrl, datePipe, datepicker, plt, socialSharing, file, fileOpener, storage) {
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
        this.data = [];
        this.items = [];
        this.total = [];
        this.currency = 'PKR ';
        this.option = false;
        this.startdate = new Date().setHours(0, 0, 0, 0).toString();
        this.enddate = new Date().setHours(23, 59, 59, 999).toString();
        this.allcolor = 'dark';
        this.thismonthcolor = 'dark';
        this.lastmonthcolor = 'dark';
        this.thisquartercolor = 'dark';
        this.createstatementcolor = 'success';
        this.selected = 0;
        this.customers = [];
        this.customerinvoices = [];
        this.company = '';
        this.pdfObj = null;
        this.customersales = [];
        this.customerpaid = [];
        this.selected = 0;
        this.storage.get('COM').then((val) => {
            this.company = val;
        });
        this.startdate = this.datePipe.transform(this.startdate, 'dd MMM yyyy h:mm a');
        this.enddate = this.datePipe.transform(this.enddate, 'dd MMM yyyy h:mm a');
        storage.get('currency').then((val) => {
            if (val !== null) {
                this.currency = val.toString();
                debugger;
            }
        });
        this.getAllData();
    }
    ngOnInit() {
    }
    share() {
        // this.getData();
    }
    back() {
        this.router.navigate(['/menu/reports']);
    }
    getAllData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            this.syncService.getSalesByCustomerStatement().then((data) => {
                this.total = data;
                // for (let i=0; i<this.total.length; i++) {
                //   const data1 = {
                //     client:   this.total[i].Name,
                //     sales: this.currency + this.total[i].Total,
                //     paid: this.currency + this.total[i].Paid
                //   };
                //   this.data.push(data1);
                //   this.total[i].div = false;
                // }
                // this.data = [...this.data];
                loading.dismiss();
                this.option = false;
                //alert('1' + this.total[0].Name + 'p' + this.total[1].Name);
            });
        });
    }
    itemClicked(customer, pos) {
        // this.total[pos].div = true;
        if (this.total[pos].div === true) {
            this.total[pos].div = false;
        }
        else {
            this.total[pos].div = true;
        }
        this.total = [...this.total];
    }
    selectStartDate() {
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datepicker.show(options).then((date) => {
            date.setHours(0, 0, 0, 0);
            this.startdate = this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
            this.allcolor = 'dark';
            this.thismonthcolor = 'dark';
            this.lastmonthcolor = 'dark';
            this.selected = 0;
        });
    }
    selectEndDate() {
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datepicker.show(options).then((date) => {
            date.setHours(23, 59, 59, 999);
            this.enddate = this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
            this.allcolor = 'dark';
            this.thismonthcolor = 'dark';
            this.lastmonthcolor = 'dark';
            this.selected = 0;
            // console.log('selected:',this.myDate);
        });
    }
    all() {
        this.allcolor = 'primary';
        this.thismonthcolor = 'dark';
        this.lastmonthcolor = 'dark';
        this.selected = 3;
    }
    thisMonth() {
        this.thismonthcolor = 'primary';
        this.lastmonthcolor = 'dark';
        this.allcolor = 'dark';
        this.selected = 1;
        const date = new Date();
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).setHours(0, 0, 0, 0);
        this.startdate = this.datePipe.transform(firstDay, 'dd MMM yyyy h:mm a');
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).setHours(23, 59, 59, 999);
        this.enddate = this.datePipe.transform(lastDay, 'dd MMM yyyy h:mm a');
    }
    lastMonth() {
        this.lastmonthcolor = 'primary';
        this.allcolor = 'dark';
        this.thismonthcolor = 'dark';
        this.selected = 2;
        const date = new Date();
        const firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1).setHours(0, 0, 0, 0);
        this.startdate = this.datePipe.transform(firstDay, 'dd MMM yyyy h:mm a');
        const lastDay = new Date(date.getFullYear(), date.getMonth(), 0).setHours(23, 59, 59, 999);
        this.enddate = this.datePipe.transform(lastDay, 'dd MMM yyyy h:mm a');
    }
    createStatement(customer) {
        // alert('s ' + customer.Cid);
        if (this.selected === 3) {
            this.syncService.getSalesByCustomerId(customer.Cid).then((data) => {
                this.customerinvoices = data;
                // alert('y' + this.customerinvoices.length);
                this.createPdf(customer);
            });
        }
        else {
            // alert('s ' + this.startdate + 'end ' + this.enddate);
            this.syncService.getSalesByCustomerIdTime(customer.Cid, this.startdate, this.enddate, this.currency).then((data) => {
                this.customerinvoices = data;
                // alert('y' + this.customerinvoices.length);
                this.syncService.getSalesAndPaidByCustomertime(customer.Cid, this.startdate, this.enddate).then((data1) => {
                    this.customersales = data1;
                    // this.customerpaid = data1.Paid;
                });
                this.createPdf(customer);
            });
        }
    }
    createPdf(customer) {
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
            for (let i = 0; i < this.customerinvoices.length; i++) {
                itemss.push([
                    { text: this.customerinvoices[i].CreateDate.toString(), fontSize: 18, color: '#000000' },
                    { text: this.customerinvoices[i].DueDate.toString(), fontSize: 18, color: '#000000' },
                    { text: this.customerinvoices[i].Total.toString(), fontSize: 18, color: '#000000' }
                ]);
            }
            if (this.selected === 3) {
                left = {
                    text: [
                        { text: customer.Shop, bold: true, fontSize: 20, alignment: 'left' },
                    ]
                };
                right = {
                    text: [
                        { text: 'All Time', color: '#000000', fontSize: 18, alignment: 'right' },
                    ]
                };
                x = [
                    { text: 'Total:', bold: true, fontSize: 20 },
                    { text: this.currency + customer.Total.toLocaleString(), fontSize: 20, alignment: 'right' }
                ];
                y = [
                    { text: 'Paid:', bold: true, fontSize: 20 },
                    { text: this.currency + customer.Paid.toLocaleString(), fontSize: 20, alignment: 'right' }
                ];
                z = [
                    { text: 'Due:', bold: true, fontSize: 20 },
                    { text: this.currency + (customer.Total - customer.Paid).toLocaleString(), fontSize: 20, alignment: 'right' }
                ];
            }
            else {
                left = {
                    text: [
                        { text: customer.Shop, bold: true, fontSize: 20, alignment: 'left' },
                    ]
                };
                right = {
                    text: [
                        { text: this.datePipe.transform(this.startdate, 'dd MMM yyyy') + ' - ' + this.datePipe.transform(this.enddate, 'dd MMM yyyy'), color: '#000000', fontSize: 18, alignment: 'right' },
                    ]
                };
                x = [
                    { text: 'Total:', bold: true, fontSize: 20 },
                    { text: this.currency + this.customersales[0].Total.toLocaleString(), fontSize: 20, alignment: 'right' }
                ];
                y = [
                    { text: 'Paid:', bold: true, fontSize: 20 },
                    { text: this.currency + this.customersales[0].Paid.toLocaleString(), fontSize: 20, alignment: 'right' }
                ];
                if (this.customersales[0].Total - this.customersales[0].Paid > 0) {
                    z = [
                        { text: 'Due:', bold: true, fontSize: 20 },
                        { text: this.currency + (this.customersales[0].Total - this.customersales[0].Paid).toLocaleString(), fontSize: 20, alignment: 'right' }
                    ];
                }
                else {
                    z = [
                        { text: 'Due:', bold: true, fontSize: 20 },
                        { text: this.currency + '0', fontSize: 20, alignment: 'right' }
                    ];
                }
            }
            var docDefinition = {
                pageSize: 'A4',
                pageMargins: [20, 20, 20, 20],
                content: [
                    { text: this.company, bold: true, alignment: 'center', fontSize: 25, style: 'subheader' },
                    { margin: [0, 10, 0, 0],
                        text: 'CUSTOMER STATEMENT', style: 'header', fontSize: 25, alignment: 'left', color: '#ff0000' },
                    // { text: this.datePipe.transform(new Date().toString(), 'dd MMM yyyy h:mm a'), alignment: 'right' },
                    { margin: [0, 10, 0, 0],
                        text: customer.Name, bold: true, fontSize: 20 },
                    // {text: customer.Shop, bold: true, fontSize: 20},
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
                    // {
                    //   margin: [0, 0, 0, 0],
                    //   style: 'totalsTable',
                    //   table: {
                    //       widths: [ 350, 200 ],
                    //       body: [
                    //        a
                    //         ]
                    //       },
                    //       layout: 'noBorders'
                    //     },
                    {
                        margin: [0, 20, 0, 0],
                        text: [
                            { text: 'Date ', style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
                            { text: '                                  Due Date', style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
                            { text: '                         Amount', style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
                        ]
                    },
                    {
                        margin: [0, 5, 0, 0],
                        style: 'totalsTable',
                        table: {
                            widths: [200, 200, 200],
                            body: itemss
                        },
                        layout: 'noBorders'
                    },
                    {
                        margin: [0, 10, 0, 0],
                        style: 'totalsTable',
                        table: {
                            widths: [350, 200],
                            body: [
                                x, y, z
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
            this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_10___default.a.createPdf(docDefinition);
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
                    this.fileOpener.open(this.file.dataDirectory + a + '.pdf', 'application/pdf');
                    loading.dismiss();
                });
                // this.socialSharing.share("test", null, this.file.dataDirectory + a + '.pdf', null).then(() => {
                //   loading.dismiss();
                //   console.log('social share');
                //   console.log(this.file.dataDirectory);
                //   }).catch(() => {
                //   });
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
CustomerstatementPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["DatePicker"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
CustomerstatementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerstatement',
        template: __webpack_require__(/*! raw-loader!./customerstatement.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reports/customerstatement/customerstatement.page.html"),
        styles: [__webpack_require__(/*! ./customerstatement.page.scss */ "./src/app/pages/reports/customerstatement/customerstatement.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
        _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["DatePicker"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__["FileOpener"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
], CustomerstatementPage);



/***/ })

}]);
//# sourceMappingURL=pages-reports-customerstatement-customerstatement-module-es2015.js.map