(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-defaultcomment-defaultcomment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/settings/defaultcomment/defaultcomment.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/settings/defaultcomment/defaultcomment.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-icon padding slot=\"start\" name=\"arrow-back\" (click)=\"back()\" ></ion-icon>\n    <ion-title>Default Comment</ion-title>\n    <ion-label padding slot=\"end\" (click)=\"save()\">Save</ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <!-- <textarea rows=\"10\" [(ngModel)]=\"message\"></textarea> -->\n    <ion-textarea rows=\"1\" [(ngModel)]=\"comment\"></ion-textarea>\n  </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/settings/defaultcomment/defaultcomment.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/settings/defaultcomment/defaultcomment.module.ts ***!
  \************************************************************************/
/*! exports provided: DefaultcommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultcommentPageModule", function() { return DefaultcommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _defaultcomment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaultcomment.page */ "./src/app/pages/settings/defaultcomment/defaultcomment.page.ts");







var routes = [
    {
        path: '',
        component: _defaultcomment_page__WEBPACK_IMPORTED_MODULE_6__["DefaultcommentPage"]
    }
];
var DefaultcommentPageModule = /** @class */ (function () {
    function DefaultcommentPageModule() {
    }
    DefaultcommentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_defaultcomment_page__WEBPACK_IMPORTED_MODULE_6__["DefaultcommentPage"]]
        })
    ], DefaultcommentPageModule);
    return DefaultcommentPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/defaultcomment/defaultcomment.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/settings/defaultcomment/defaultcomment.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL2RlZmF1bHRjb21tZW50L2RlZmF1bHRjb21tZW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/settings/defaultcomment/defaultcomment.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/settings/defaultcomment/defaultcomment.page.ts ***!
  \**********************************************************************/
/*! exports provided: DefaultcommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultcommentPage", function() { return DefaultcommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var DefaultcommentPage = /** @class */ (function () {
    function DefaultcommentPage(location, storage) {
        var _this = this;
        this.location = location;
        this.storage = storage;
        this.comment = '';
        storage.get('comment').then(function (val) {
            if (val !== null) {
                _this.comment = val;
            }
        });
    }
    DefaultcommentPage.prototype.ngOnInit = function () {
    };
    DefaultcommentPage.prototype.back = function () {
        this.location.back();
    };
    DefaultcommentPage.prototype.save = function () {
        this.storage.set('comment', this.comment.toString());
        this.location.back();
    };
    DefaultcommentPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    DefaultcommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-defaultcomment',
            template: __webpack_require__(/*! raw-loader!./defaultcomment.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/settings/defaultcomment/defaultcomment.page.html"),
            styles: [__webpack_require__(/*! ./defaultcomment.page.scss */ "./src/app/pages/settings/defaultcomment/defaultcomment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], DefaultcommentPage);
    return DefaultcommentPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-settings-defaultcomment-defaultcomment-module-es5.js.map