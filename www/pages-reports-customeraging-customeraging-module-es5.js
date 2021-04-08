(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reports-customeraging-customeraging-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reports/customeraging/customeraging.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reports/customeraging/customeraging.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n    <ion-title>Customer Aging</ion-title>\n    <ion-label padding slot=\"end\" (click)=\"share()\">Share</ion-label>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"container-outer\">\n    <div class=\"container-inner\" >\n      <ngx-datatable\n \n [rows]=\"data\"\n [ngClass]=\"style\"\n [rowHeight]=\"'auto'\"\n [headerHeight]=\"'auto'\"\n [columnMode]=\"'force'\"\n (activate)=\"onActivate($event)\"\n >\n \n    <ngx-datatable-column name=\"Client\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Total\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Current Due\" prop=\"due\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"1-15 Past Due\" prop=\"due1\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"15+ Past Due\" prop=\"due2\"></ngx-datatable-column>\n\n\n    <!-- <ngx-datatable-column name=\"Actions\">\n        <ng-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n            <ion-button (click)=\"open(rowIndex,row)\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"danger\" style=\"width: auto;\">Delete</ion-button>\n         </ng-template>\n    </ngx-datatable-column> -->\n \n\n    \n</ngx-datatable>\n      </div>\n    \n </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/reports/customeraging/customeraging-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/reports/customeraging/customeraging-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomeragingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomeragingPageRoutingModule", function() { return CustomeragingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customeraging_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customeraging.page */ "./src/app/pages/reports/customeraging/customeraging.page.ts");




var routes = [
    {
        path: '',
        component: _customeraging_page__WEBPACK_IMPORTED_MODULE_3__["CustomeragingPage"]
    }
];
var CustomeragingPageRoutingModule = /** @class */ (function () {
    function CustomeragingPageRoutingModule() {
    }
    CustomeragingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CustomeragingPageRoutingModule);
    return CustomeragingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/reports/customeraging/customeraging.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/reports/customeraging/customeraging.module.ts ***!
  \*********************************************************************/
/*! exports provided: CustomeragingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomeragingPageModule", function() { return CustomeragingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customeraging_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customeraging-routing.module */ "./src/app/pages/reports/customeraging/customeraging-routing.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _customeraging_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customeraging.page */ "./src/app/pages/reports/customeraging/customeraging.page.ts");












var CustomeragingPageModule = /** @class */ (function () {
    function CustomeragingPageModule() {
    }
    CustomeragingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _customeraging_routing_module__WEBPACK_IMPORTED_MODULE_8__["CustomeragingPageRoutingModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"]
            ],
            providers: [
                _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"],
                _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__["SocialSharing"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]
            ],
            declarations: [_customeraging_page__WEBPACK_IMPORTED_MODULE_10__["CustomeragingPage"]]
        })
    ], CustomeragingPageModule);
    return CustomeragingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/reports/customeraging/customeraging.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/reports/customeraging/customeraging.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-outer {\n  overflow: scroll;\n  width: 100%;\n  height: 100%;\n}\n\n.container-inner {\n  width: 150%;\n}\n\n.datatable-header {\n  height: 50px !important;\n  display: -webkit-box !important;\n  display: flex !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0cy9jdXN0b21lcmFnaW5nL0M6XFx3YW1wNjRcXHd3d1xcaW52b2ljZS5way9zcmNcXGFwcFxccGFnZXNcXHJlcG9ydHNcXGN1c3RvbWVyYWdpbmdcXGN1c3RvbWVyYWdpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXBvcnRzL2N1c3RvbWVyYWdpbmcvY3VzdG9tZXJhZ2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBbUIsZ0JBQUE7RUFBa0IsV0FBQTtFQUFhLFlBQUE7QUNJbEQ7O0FESEE7RUFBbUIsV0FBQTtBQ09uQjs7QUROQTtFQUFtQix1QkFBQTtFQUF5QiwrQkFBQTtFQUFBLHdCQUFBO0FDVzVDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVwb3J0cy9jdXN0b21lcmFnaW5nL2N1c3RvbWVyYWdpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1vdXRlciB7IG92ZXJmbG93OiBzY3JvbGw7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IH1cclxuLmNvbnRhaW5lci1pbm5lciB7IHdpZHRoOiAxNTAlOyB9XHJcbi5kYXRhdGFibGUtaGVhZGVyeyBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDsgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9IiwiLmNvbnRhaW5lci1vdXRlciB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaW5uZXIge1xuICB3aWR0aDogMTUwJTtcbn1cblxuLmRhdGF0YWJsZS1oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/reports/customeraging/customeraging.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/reports/customeraging/customeraging.page.ts ***!
  \*******************************************************************/
/*! exports provided: CustomeragingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomeragingPage", function() { return CustomeragingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");












pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10___default.a.pdfMake.vfs;
var CustomeragingPage = /** @class */ (function () {
    function CustomeragingPage(router, syncService, loadingCtrl, datePipe, plt, socialSharing, file, fileOpener, storage) {
        var _this = this;
        this.router = router;
        this.syncService = syncService;
        this.loadingCtrl = loadingCtrl;
        this.datePipe = datePipe;
        this.plt = plt;
        this.socialSharing = socialSharing;
        this.file = file;
        this.fileOpener = fileOpener;
        this.storage = storage;
        this.style = 'bootstrap';
        this.data = [];
        this.items = [];
        this.total = [];
        this.pdfObj = null;
        this.company = '';
        this.currency = '';
        storage.get('currency').then(function (val) {
            if (val !== null) {
                _this.currency = val.toString();
                debugger;
            }
        });
        this.storage.get('COM').then(function (val) {
            _this.company = val;
        });
        this.getData();
    }
    CustomeragingPage.prototype.ngOnInit = function () {
    };
    CustomeragingPage.prototype.share = function () {
        // this.getData();
        this.createPdf();
    };
    CustomeragingPage.prototype.back = function () {
        this.router.navigate(['/menu/reports']);
    };
    CustomeragingPage.prototype.onActivate = function (event) {
        if (event.type === 'click') {
            console.log(event.row);
        }
    };
    CustomeragingPage.prototype.getData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, now, a, start, b;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        now = new Date().toString();
                        a = this.datePipe.transform(now, 'dd MMM yyyy');
                        start = new Date().setHours(0, 0, 0, 0).toString();
                        b = this.datePipe.transform(start, 'dd MMM yyyy');
                        // alert('start:' + b + '\ncurrent:' + a);
                        this.syncService.getCustomerAging().then(function (data) {
                            _this.total = data;
                            for (var i = 0; i < _this.total.length; i++) {
                                var a_1 = parseInt(_this.total[i].Paid) - parseInt(_this.total[i].Total);
                                // alert('y' + a)
                                var data1 = {
                                    client: _this.total[i].Name,
                                    total: _this.currency + _this.total[i].Total,
                                    due: _this.currency + _this.total[i].Due,
                                    due1: _this.currency + _this.total[i].Due1,
                                    due2: _this.currency + _this.total[i].Due2,
                                };
                                _this.data.push(data1);
                            }
                            _this.data = _this.data.slice();
                            loading.dismiss();
                            //  alert('y' + this.total[0].Total + 'p' + this.total[0].Paid);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomeragingPage.prototype.createPdf = function () {
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
                                { text: this.data[i].client.toString(), fontSize: 12, color: '#000000' },
                                { text: this.data[i].total.toString(), fontSize: 12, color: '#000000' },
                                { text: this.data[i].due.toString(), fontSize: 12, color: '#000000' },
                                { text: this.data[i].due1.toString(), fontSize: 12, color: '#000000' },
                                { text: this.data[i].due2.toString(), fontSize: 12, color: '#000000' }
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
                                { text: 'CUSTOMER AGING', bold: true, alignment: 'center', fontSize: 25, style: 'subheader' },
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
                                        { text: 'Client ', style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
                                        { text: '                       Total', style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
                                        { text: '               Current Due', style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
                                        { text: '              1-15 Past Due', style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
                                        { text: '              15+ Past Due', style: 'subheader', bold: true, fontSize: 14, color: '#000000' },
                                    ]
                                },
                                {
                                    margin: [0, 5, 0, 0],
                                    style: 'totalsTable',
                                    table: {
                                        widths: [100, 100, 115, 115, 115],
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
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomeragingPage.prototype.downloadPdf = function (loading) {
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
    CustomeragingPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
        { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] }
    ]; };
    CustomeragingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customeraging',
            template: __webpack_require__(/*! raw-loader!./customeraging.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reports/customeraging/customeraging.page.html"),
            styles: [__webpack_require__(/*! ./customeraging.page.scss */ "./src/app/pages/reports/customeraging/customeraging.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
    ], CustomeragingPage);
    return CustomeragingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-reports-customeraging-customeraging-module-es5.js.map