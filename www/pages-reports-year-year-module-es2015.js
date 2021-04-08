(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reports-year-year-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reports/year/year.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reports/year/year.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n    <ion-title>Sales by Year</ion-title>\n    <ion-label padding slot=\"end\" (click)=\"share()\">Share</ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container-outer\">\n    <div class=\"container-inner\" >\n      <ngx-datatable\n \n [rows]=\"data\"\n [ngClass]=\"style\"\n [rowHeight]=\"'auto'\"\n [headerHeight]=\"'auto'\"\n [columnMode]=\"'force'\"\n (activate)=\"onActivate($event)\"\n >\n \n    <ngx-datatable-column name=\"Year\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Sales\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Paid\"></ngx-datatable-column>\n    <!-- <ngx-datatable-column name=\"Actions\">\n        <ng-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n            <ion-button (click)=\"open(rowIndex,row)\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"danger\" style=\"width: auto;\">Delete</ion-button>\n         </ng-template>\n    </ngx-datatable-column> -->\n \n\n    \n</ngx-datatable>\n</div>\n    \n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/reports/year/year-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/reports/year/year-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: YearPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearPageRoutingModule", function() { return YearPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _year_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./year.page */ "./src/app/pages/reports/year/year.page.ts");




const routes = [
    {
        path: '',
        component: _year_page__WEBPACK_IMPORTED_MODULE_3__["YearPage"]
    }
];
let YearPageRoutingModule = class YearPageRoutingModule {
};
YearPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], YearPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reports/year/year.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/reports/year/year.module.ts ***!
  \***************************************************/
/*! exports provided: YearPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearPageModule", function() { return YearPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _year_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./year-routing.module */ "./src/app/pages/reports/year/year-routing.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _year_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./year.page */ "./src/app/pages/reports/year/year.page.ts");












let YearPageModule = class YearPageModule {
};
YearPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _year_routing_module__WEBPACK_IMPORTED_MODULE_8__["YearPageRoutingModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"]
        ],
        providers: [
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]
        ],
        declarations: [_year_page__WEBPACK_IMPORTED_MODULE_10__["YearPage"]]
    })
], YearPageModule);



/***/ }),

/***/ "./src/app/pages/reports/year/year.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/reports/year/year.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-outer {\n  overflow: scroll;\n  width: 100%;\n  height: 100%;\n}\n\n.container-inner {\n  width: 120%;\n}\n\n.datatable-header {\n  height: 50px !important;\n  display: -webkit-box !important;\n  display: flex !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0cy95ZWFyL0M6XFx3YW1wNjRcXHd3d1xcaW52b2ljZS5way9zcmNcXGFwcFxccGFnZXNcXHJlcG9ydHNcXHllYXJcXHllYXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXBvcnRzL3llYXIveWVhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBbUIsZ0JBQUE7RUFBa0IsV0FBQTtFQUFhLFlBQUE7QUNJbEQ7O0FESEE7RUFBbUIsV0FBQTtBQ09uQjs7QUROQTtFQUFtQix1QkFBQTtFQUF5QiwrQkFBQTtFQUFBLHdCQUFBO0FDVzVDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVwb3J0cy95ZWFyL3llYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1vdXRlciB7IG92ZXJmbG93OiBzY3JvbGw7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IH1cclxuLmNvbnRhaW5lci1pbm5lciB7IHdpZHRoOiAxMjAlOyB9XHJcbi5kYXRhdGFibGUtaGVhZGVyeyBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDsgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9IiwiLmNvbnRhaW5lci1vdXRlciB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICB3aWR0aDogMTIwJTtcbn1cblxuLmRhdGF0YWJsZS1oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/reports/year/year.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/reports/year/year.page.ts ***!
  \*************************************************/
/*! exports provided: YearPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearPage", function() { return YearPage; });
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












pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10___default.a.pdfMake.vfs;
let YearPage = class YearPage {
    constructor(router, syncService, loadingCtrl, datePipe, storage, plt, socialSharing, file, fileOpener) {
        this.router = router;
        this.syncService = syncService;
        this.loadingCtrl = loadingCtrl;
        this.datePipe = datePipe;
        this.storage = storage;
        this.plt = plt;
        this.socialSharing = socialSharing;
        this.file = file;
        this.fileOpener = fileOpener;
        this.style = 'bootstrap';
        this.data = [];
        this.items = [];
        this.total = [];
        this.company = '';
        this.year = '';
        this.pdfObj = null;
        this.storage.get('COM').then((val) => {
            this.company = val;
        });
        const last = new Date(new Date().getFullYear(), 11, 31);
        const lastdateofyear = this.datePipe.transform(last, 'dd MMM yyyy');
        this.year = this.datePipe.transform(last, 'yyyy');
        this.getData();
        storage.get('currency').then((val) => {
            if (val !== null) {
                this.currency = val.toString();
                debugger;
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
    getData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            this.syncService.getSalesByYear('2020').then((data) => {
                this.total = data;
                // alert(this.total[0].Total);
                for (let i = 0; i < this.total.length; i++) {
                    const data1 = {
                        year: this.total[i].Year,
                        sales: this.currency + this.total[i].Total,
                        paid: this.currency + this.total[i].Paid,
                    };
                    this.data.push(data1);
                }
                this.data = [...this.data];
                loading.dismiss();
                //alert('1' + this.total[0].Name + 'p' + this.total[1].Name);
            });
            // this.syncService.getSalesByYear('2019').then((data) => {
            //   this.total = data;
            //   for (let i=0; i<this.total.length; i++) {
            //     const data1 = {
            //       year:   this.total[i].Year,
            //       sales: this.currency + this.total[i].Total,
            //       paid: this.currency + this.total[i].Paid,
            //     };
            //     this.data.push(data1);
            //   }
            //   this.data = [...this.data];
            //   loading.dismiss();
            // });
            // this.syncService.getSalesByYear('2018').then((data) => {
            //   this.total = data;
            //   for (let i=0; i<this.total.length; i++) {
            //     const data1 = {
            //       year:   this.total[i].Year,
            //       sales: this.currency + this.total[i].Total,
            //       paid: this.currency + this.total[i].Paid,
            //     };
            //     this.data.push(data1);
            //   }
            //   this.data = [...this.data];
            //   loading.dismiss();
            // });
        });
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
                    { text: this.data[i].year.toString(), fontSize: 18, color: '#000000' },
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
                    { text: 'SALES BY YEAR', bold: true, alignment: 'center', fontSize: 25, style: 'subheader' },
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
                            { text: 'Qurter ', style: 'subheader', bold: true, fontSize: 20, color: '#000000' },
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
YearPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"] }
];
YearPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-year',
        template: __webpack_require__(/*! raw-loader!./year.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reports/year/year.page.html"),
        styles: [__webpack_require__(/*! ./year.page.scss */ "./src/app/pages/reports/year/year.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"]])
], YearPage);



/***/ })

}]);
//# sourceMappingURL=pages-reports-year-year-module-es2015.js.map