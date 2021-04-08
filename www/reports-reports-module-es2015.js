(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/reports/reports.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/reports/reports.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Reports</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-grid style=\"height: 100%\">\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      Under Construction\n    </ion-row>\n  </ion-grid> -->\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col>\n              Sales by day\n      </ion-col>\n      <ion-col>\n        Sales by day\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n              Sales by day\n      </ion-col>\n      <ion-col>\n        Sales by day\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n              Sales by day\n      </ion-col>\n      <ion-col>\n        Sales by day\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n              Sales by day\n      </ion-col>\n      <ion-col>\n        Sales by day\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n  <div id=\"div1\">\n    <ion-card (click)=\"day()\">\n      <ion-card-header padding>\n       \n        \n      </ion-card-header>\n    \n      <ion-card-content padding>\n        <ion-card-subtitle>Sales by</ion-card-subtitle>\n        <ion-card-title>DAY</ion-card-title>\n         <ion-item lines=\"none\">\n          <ion-icon slot=\"end\" name=\"calendar\"></ion-icon>\n          </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div id=\"div2\">\n    <ion-card (click)=\"month()\">\n      <ion-card-header padding>\n       \n        \n      </ion-card-header>\n    \n      <ion-card-content padding>\n        <ion-card-subtitle>Sales by</ion-card-subtitle>\n        <ion-card-title>MONTH</ion-card-title>\n         <ion-item lines=\"none\">\n          <ion-icon slot=\"end\" name=\"calendar\"></ion-icon>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div id=\"div3\">\n    <ion-card (click)=\"quarter()\">\n      <ion-card-header padding>\n       \n        \n      </ion-card-header>\n    \n      <ion-card-content padding>\n        <ion-card-subtitle>Sales by</ion-card-subtitle>\n        <ion-card-title>QUARTER</ion-card-title>\n         <ion-item lines=\"none\">\n          <ion-icon slot=\"end\" name=\"calendar\"></ion-icon>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div id=\"div4\">\n    <ion-card (click)=\"year()\">\n      <ion-card-header padding>\n       \n        \n      </ion-card-header>\n    \n      <ion-card-content padding>\n        <ion-card-subtitle>Sales by</ion-card-subtitle>\n        <ion-card-title>YEAR</ion-card-title>\n         <ion-item lines=\"none\">\n          <ion-icon slot=\"end\" name=\"calendar\"></ion-icon>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div id=\"div5\">\n    <ion-card (click)=\"client()\">\n      <ion-card-header padding>\n       \n\n      </ion-card-header>\n    \n      <ion-card-content padding>\n        <ion-card-subtitle>Sales by</ion-card-subtitle>\n        <ion-card-title>CLIENT</ion-card-title>\n         <ion-item lines=\"none\">\n           <ion-icon slot=\"end\" name=\"person\"></ion-icon>\n         </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div id=\"div6\">\n  <ion-card (click)=\"item()\">\n      <ion-card-header padding>\n       \n        \n      </ion-card-header>\n    \n      <ion-card-content padding>\n        <ion-card-subtitle>Sales by</ion-card-subtitle>\n        <ion-card-title>ITEM</ion-card-title>\n         <ion-item lines=\"none\">\n           <ion-icon slot=\"end\" name=\"cube\"></ion-icon>\n         </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div id=\"div3\">\n    <ion-card (click)=\"customerAging()\">\n      <ion-card-header padding>\n       \n        \n      </ion-card-header>\n    \n      <ion-card-content padding>\n        <ion-card-subtitle>Customer</ion-card-subtitle>\n        <ion-card-title>AGING</ion-card-title>\n         <ion-item lines=\"none\">\n          <ion-icon slot=\"end\" name=\"alarm\"></ion-icon>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div id=\"div4\">\n    <ion-card (click)=\"customerStatement()\">\n      <ion-card-header padding>\n       \n        \n      </ion-card-header>\n    \n      <ion-card-content padding>\n        <ion-card-subtitle>Customer</ion-card-subtitle>\n        <ion-card-title>STATMENT</ion-card-title>\n         <ion-item lines=\"none\" color=''>\n          <ion-icon slot=\"end\" name=\"document\"></ion-icon>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div id=\"div5\">\n    <ion-card (click)=\"expenseJournal()\">\n      <ion-card-header padding>\n       \n\n      </ion-card-header>\n    \n      <ion-card-content padding>\n        <ion-card-subtitle>Expnese</ion-card-subtitle>\n        <ion-card-title>JOURNAL</ion-card-title>\n         <ion-item lines=\"none\">\n           <ion-icon slot=\"end\" name=\"journal\"></ion-icon>\n         </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div id=\"div6\">\n  <ion-card (click)=\"expenseCategory()\">\n      <ion-card-header padding>\n       \n        \n      </ion-card-header>\n    \n      <ion-card-content padding>\n        <ion-card-subtitle>Expense by</ion-card-subtitle>\n        <ion-card-title>CATEGORY</ion-card-title>\n         <ion-item lines=\"none\">\n           <ion-icon slot=\"end\" name=\"filing\"></ion-icon>\n         </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/reports/reports.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/reports/reports.module.ts ***!
  \*************************************************/
/*! exports provided: ReportsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function() { return ReportsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.page */ "./src/app/pages/reports/reports.page.ts");







const routes = [
    {
        path: '',
        component: _reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]
    }
];
let ReportsPageModule = class ReportsPageModule {
};
ReportsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]]
    })
], ReportsPageModule);



/***/ }),

/***/ "./src/app/pages/reports/reports.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/reports/reports.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\ndiv {\n  width: 50%;\n  height: 25%;\n  float: left;\n}\n\nion-card {\n  border-radius: 10px;\n  background-color: #d6d4d4;\n  height: 96%;\n}\n\nion-icon {\n  font-size: 50px;\n}\n\nion-item {\n  --ion-background-color:rgb(214, 212, 212);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0cy9DOlxcd2FtcDY0XFx3d3dcXGludm9pY2UucGsvc3JjXFxhcHBcXHBhZ2VzXFxyZXBvcnRzXFxyZXBvcnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVwb3J0cy9yZXBvcnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFhLFlBQUE7RUFBYyxVQUFBO0VBQVksU0FBQTtBQ0l2Qzs7QURIQTtFQUFNLFVBQUE7RUFBWSxXQUFBO0VBQWEsV0FBQTtBQ1MvQjs7QURGQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0FDTUo7O0FESEU7RUFDRSx5Q0FBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVwb3J0cy9yZXBvcnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDsgfVxyXG5kaXYgeyB3aWR0aDogNTAlOyBoZWlnaHQ6IDI1JTsgZmxvYXQ6IGxlZnQ7IH1cclxuLy8gI2RpdjEgeyBiYWNrZ3JvdW5kOiAjREREOyB9XHJcbi8vICNkaXYyIHsgYmFja2dyb3VuZDogI0FBQTsgfVxyXG4vLyAjZGl2MyB7IGJhY2tncm91bmQ6ICM3Nzc7IH1cclxuLy8gI2RpdjQgeyBiYWNrZ3JvdW5kOiAjNDQ0OyB9XHJcbi8vICNkaXY1IHsgYmFja2dyb3VuZDogI2Q3NzsgfVxyXG4vLyAjZGl2NiB7IGJhY2tncm91bmQ6ICM0NDc7IH1cclxuaW9uLWNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxMiwgMjEyKTtcclxuICAgIGhlaWdodDogOTYlO1xyXG59XHJcbmlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbiAgfVxyXG4gXHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTQsIDIxMiwgMjEyKTtcclxuIH1cclxuIiwiaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5kaXYge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDRkNDtcbiAgaGVpZ2h0OiA5NiU7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDIxNCwgMjEyLCAyMTIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/reports/reports.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/reports/reports.page.ts ***!
  \***********************************************/
/*! exports provided: ReportsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsPage", function() { return ReportsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");




let ReportsPage = class ReportsPage {
    constructor(router, databaseservice) {
        this.router = router;
        this.databaseservice = databaseservice;
    }
    ngOnInit() {
    }
    day() {
        this.databaseservice.setSalesByDayValue(2);
        this.router.navigate(['day']);
    }
    month() {
        this.databaseservice.setSalesByDayValue(2);
        this.router.navigate(['month']);
    }
    client() {
        this.databaseservice.setSalesByDayValue(2);
        this.router.navigate(['customer']);
    }
    item() {
        this.databaseservice.setSalesByDayValue(2);
        this.router.navigate(['item']);
    }
    expenseCategory() {
        this.databaseservice.setSalesByDayValue(2);
        this.router.navigate(['expensecategory']);
    }
    expenseJournal() {
        this.databaseservice.setSalesByDayValue(2);
        this.router.navigate(['expensejournal']);
    }
    customerAging() {
        this.databaseservice.setSalesByDayValue(2);
        this.router.navigate(['customeraging']);
    }
    year() {
        this.databaseservice.setSalesByDayValue(2);
        this.router.navigate(['year']);
    }
    quarter() {
        this.databaseservice.setSalesByDayValue(2);
        this.router.navigate(['quarter']);
    }
    customerStatement() {
        this.databaseservice.setSalesByDayValue(2);
        this.router.navigate(['customerstatement']);
    }
};
ReportsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] }
];
ReportsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__(/*! raw-loader!./reports.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/reports/reports.page.html"),
        styles: [__webpack_require__(/*! ./reports.page.scss */ "./src/app/pages/reports/reports.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
], ReportsPage);



/***/ })

}]);
//# sourceMappingURL=reports-reports-module-es2015.js.map