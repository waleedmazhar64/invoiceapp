(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-additem-additem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/additem/additem.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/additem/additem.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>additem</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/additem/additem.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/additem/additem.module.ts ***!
  \*************************************************/
/*! exports provided: AdditemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditemPageModule", function() { return AdditemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _additem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./additem.page */ "./src/app/pages/additem/additem.page.ts");







var routes = [
    {
        path: '',
        component: _additem_page__WEBPACK_IMPORTED_MODULE_6__["AdditemPage"]
    }
];
var AdditemPageModule = /** @class */ (function () {
    function AdditemPageModule() {
    }
    AdditemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_additem_page__WEBPACK_IMPORTED_MODULE_6__["AdditemPage"]]
        })
    ], AdditemPageModule);
    return AdditemPageModule;
}());



/***/ }),

/***/ "./src/app/pages/additem/additem.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/additem/additem.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZGl0ZW0vYWRkaXRlbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/additem/additem.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/additem/additem.page.ts ***!
  \***********************************************/
/*! exports provided: AdditemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditemPage", function() { return AdditemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdditemPage = /** @class */ (function () {
    function AdditemPage() {
    }
    AdditemPage.prototype.ngOnInit = function () {
    };
    AdditemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-additem',
            template: __webpack_require__(/*! raw-loader!./additem.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/additem/additem.page.html"),
            styles: [__webpack_require__(/*! ./additem.page.scss */ "./src/app/pages/additem/additem.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdditemPage);
    return AdditemPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-additem-additem-module-es5.js.map