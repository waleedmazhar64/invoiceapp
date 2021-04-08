(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reports-day-day-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reports/day/day.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reports/day/day.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n    <!-- <ion-title>Sales by Day(<span (click)=\"selectDate()\">{{day}}</span>)</ion-title> -->\n    <ion-title>Sales by Day</ion-title>\n\n    <ion-label padding slot=\"end\" (click)=\"share()\">Share</ion-label>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-item>\n    <ion-label>Month</ion-label>\n    <ion-datetime displayFormat=\"MMM YYYY\" [min]=\"min\" [max]=\"max\" (ionChange)=\"changeDate()\"  [(ngModel)]=\"day\">\n    </ion-datetime>\n  </ion-item>\n  <div class=\"container-outer\">\n    <div class=\"container-inner\" >\n      <ngx-datatable\n \n [rows]=\"data\"\n [ngClass]=\"style\"\n [rowHeight]=\"'auto'\"\n [headerHeight]=\"'auto'\"\n [columnMode]=\"'force'\"\n (activate)=\"onActivate($event)\"\n >\n \n    <ngx-datatable-column name=\"Day\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Sales\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Paid\"></ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"Actions\">\n        <ng-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n            <ion-button (click)=\"open(rowIndex,row)\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"danger\" style=\"width: auto;\">Delete</ion-button>\n         </ng-template>\n    </ngx-datatable-column> -->\n \n\n    \n</ngx-datatable>\n      </div>\n    \n </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/reports/day/day-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/reports/day/day-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DayPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayPageRoutingModule", function() { return DayPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _day_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day.page */ "./src/app/pages/reports/day/day.page.ts");




const routes = [
    {
        path: '',
        component: _day_page__WEBPACK_IMPORTED_MODULE_3__["DayPage"]
    }
];
let DayPageRoutingModule = class DayPageRoutingModule {
};
DayPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DayPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reports/day/day.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/reports/day/day.module.ts ***!
  \*************************************************/
/*! exports provided: DayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayPageModule", function() { return DayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _day_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./day-routing.module */ "./src/app/pages/reports/day/day-routing.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _day_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./day.page */ "./src/app/pages/reports/day/day.page.ts");













let DayPageModule = class DayPageModule {
};
DayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _day_routing_module__WEBPACK_IMPORTED_MODULE_9__["DayPageRoutingModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"]
        ],
        providers: [
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__["FileOpener"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["DatePicker"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]
        ],
        declarations: [_day_page__WEBPACK_IMPORTED_MODULE_11__["DayPage"]]
    })
], DayPageModule);



/***/ }),

/***/ "./src/app/pages/reports/day/day.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/reports/day/day.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-outer {\n  overflow: scroll;\n  width: 100%;\n  height: 100%;\n}\n\n.container-inner {\n  width: 120%;\n}\n\n.datatable-header {\n  height: 50px !important;\n  display: -webkit-box !important;\n  display: flex !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0cy9kYXkvQzpcXHdhbXA2NFxcd3d3XFxpbnZvaWNlLnBrL3NyY1xcYXBwXFxwYWdlc1xccmVwb3J0c1xcZGF5XFxkYXkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXBvcnRzL2RheS9kYXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQW1CLGdCQUFBO0VBQWtCLFdBQUE7RUFBYSxZQUFBO0FDRWxEOztBRERBO0VBQW1CLFdBQUE7QUNLbkI7O0FESkE7RUFBbUIsdUJBQUE7RUFBeUIsK0JBQUE7RUFBQSx3QkFBQTtBQ1M1QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydHMvZGF5L2RheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY29udGFpbmVyLW91dGVyIHsgb3ZlcmZsb3c6IHNjcm9sbDsgd2lkdGg6IDUwMHB4OyBoZWlnaHQ6IDIxMHB4OyB9XHJcbi8vIC5jb250YWluZXItaW5uZXIgeyB3aWR0aDogMTAwMDBweDsgfVxyXG4uY29udGFpbmVyLW91dGVyIHsgb3ZlcmZsb3c6IHNjcm9sbDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgfVxyXG4uY29udGFpbmVyLWlubmVyIHsgd2lkdGg6IDEyMCU7IH1cclxuLmRhdGF0YWJsZS1oZWFkZXJ7IGhlaWdodDogNTBweCAhaW1wb3J0YW50OyBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7IH0iLCIuY29udGFpbmVyLW91dGVyIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pbm5lciB7XG4gIHdpZHRoOiAxMjAlO1xufVxuXG4uZGF0YXRhYmxlLWhlYWRlciB7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/reports/day/day.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/reports/day/day.page.ts ***!
  \***********************************************/
/*! exports provided: DayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayPage", function() { return DayPage; });
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
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");














// import { lstat } from 'fs';
pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_12___default.a.pdfMake.vfs;
let DayPage = class DayPage {
    constructor(router, syncService, loadingCtrl, datePipe, datepicker, plt, socialSharing, file, fileOpener, storage, databaseservice) {
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
        this.databaseservice = databaseservice;
        this.style = 'bootstrap';
        this.data = [];
        this.items = [];
        this.total = [];
        this.day = new Date().toString();
        this.start = new Date().setHours(0, 0, 0, 0).toString();
        this.end = new Date().setHours(23, 59, 59, 999).toString();
        this.i = 0;
        this.currency = '';
        this.pdfObj = null;
        this.company = '';
        this.displaystart = '';
        this.displayend = '';
        this.a = 0;
        this.salesvalue = 0;
        this.min = '2020';
        this.max = '';
        const last = new Date(new Date().getFullYear(), 11, 31);
        this.max = this.datePipe.transform(last, 'yyyy');
        this.storage.get('COM').then((val) => {
            this.company = val;
        });
        storage.get('currency').then((val) => {
            if (val !== null) {
                this.currency = val.toString();
                debugger;
            }
        });
        this.salesvalue = this.databaseservice.getSalesByDayValue();
        this.day = this.datePipe.transform(this.day, 'MMM yyyy h:mm a');
        const firstdayofmonth = new Date(new Date(this.day).getFullYear(), new Date(this.day).getMonth(), 1).setHours(0, 0, 0, 0);
        const first1 = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
        const lastdayofmonth = new Date(new Date(this.day).getFullYear(), new Date(this.day).getMonth() + 1, 0).setHours(23, 59, 59, 999);
        const last1 = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
        this.displaystart = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy');
        this.displayend = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy');
        this.start = first1;
        this.end = last1;
        // alert('start: ' + this.start + '\n' + this.end);
        this.getData();
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
    getData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            let now = new Date().toString();
            const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
            let start = new Date().setHours(0, 0, 0, 0).toString();
            const b = this.datePipe.transform(start, 'dd MMM yyyy h:mm a');
            // alert('start:' + this.start + '\ncurrent:' + this.end);
            // alert('day:' + this.day)
            this.syncService.getTodaysSales(this.start, this.end, this.currency).then((data) => {
                this.total = data;
                console.log(data);
                for (let i = 0; i < this.total.length; i++) {
                    const data1 = {
                        day: this.total[i].Date,
                        sales: this.total[i].Total,
                        paid: this.total[i].Paid
                    };
                    this.data.push(data1);
                }
                this.data = [...this.data];
                loading.dismiss();
                //  alert('y' + this.total[0].Total + 'p' + this.total[0].Paid);
            });
        });
    }
    selectDate() {
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datepicker.show(options).then((date) => {
            this.day = this.datePipe.transform(date, 'dd MMM yyyy h:mm a');
            this.data = [];
            this.getData();
            // console.log('selected:',this.myDate);
        });
    }
    changeDate() {
        //alert('yes' + this.data.length);
        //alert('y' + this.start);
        if (this.i === 2 || (this.a === 0 && this.i === this.salesvalue)) {
            this.i = 0;
            this.a = 1;
            const firstdayofmonth = new Date(new Date(this.day).getFullYear(), new Date(this.day).getMonth(), 1).setHours(0, 0, 0, 0);
            const first1 = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy h:mm a');
            const lastdayofmonth = new Date(new Date(this.day).getFullYear(), new Date(this.day).getMonth() + 1, 0).setHours(23, 59, 59, 999);
            const last1 = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy h:mm a');
            this.displaystart = this.datePipe.transform(firstdayofmonth, 'dd MMM yyyy');
            this.displayend = this.datePipe.transform(lastdayofmonth, 'dd MMM yyyy');
            // const s = new Date(this.day).setHours(0, 0, 0, 0).toString();
            // const l = new Date(this.day).setHours(23, 59, 59, 999).toString();
            this.start = first1;
            this.end = last1;
            // this.start =  this.datePipe.transform(s, 'dd MMM yyyy h:mm a');
            // this.end =  this.datePipe.transform(l, 'dd MMM yyyy h:mm a');
            // alert('s: ' + first1 + '\nL: ' + last1 );
            this.data = [];
            this.getData();
        }
        this.i = this.i + 1;
        this.day = this.datePipe.transform(this.day, 'dd MMM yyyy h:mm a');
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
                    { text: this.data[i].day.toString(), fontSize: 18, color: '#000000' },
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
            var docDefinition = {
                pageSize: 'A4',
                pageMargins: [20, 20, 20, 20],
                content: [
                    { text: 'SALES BY DAY', bold: true, alignment: 'center', fontSize: 25, style: 'subheader' },
                    { text: this.displaystart + ' - ' + this.displayend, bold: true, alignment: 'center', fontSize: 20, style: 'subheader' },
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
            this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_11___default.a.createPdf(docDefinition);
            this.downloadPdf(loading);
            //   });
        });
    }
    ionViewWillLeave() {
        this.databaseservice.setSalesByDayValue(2);
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
DayPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["DatePicker"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__["FileOpener"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"] }
];
DayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-day',
        template: __webpack_require__(/*! raw-loader!./day.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reports/day/day.page.html"),
        styles: [__webpack_require__(/*! ./day.page.scss */ "./src/app/pages/reports/day/day.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
        _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["DatePicker"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__["FileOpener"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"]])
], DayPage);



/***/ })

}]);
//# sourceMappingURL=pages-reports-day-day-module-es2015.js.map