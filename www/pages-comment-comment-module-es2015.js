(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-comment-comment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/comment/comment.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/comment/comment.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-icon padding  name=\"arrow-back\" (click)=\"cancel()\"></ion-icon>\n      </ion-buttons>\n      <ion-title>Comment</ion-title>\n      <ion-icon padding slot=\"end\" name=\"checkmark\" (click)=\"back()\" ></ion-icon>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n\n<ion-content>\n<!-- Textarea in an item with a placeholder -->\n<ion-item>\n    <!-- <textarea rows=\"10\" [(ngModel)]=\"message\"></textarea> -->\n    <ion-textarea rows=\"1\" [(ngModel)]=\"message\"></ion-textarea>\n  </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/comment/comment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/comment/comment.module.ts ***!
  \*************************************************/
/*! exports provided: CommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPageModule", function() { return CommentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _comment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment.page */ "./src/app/pages/comment/comment.page.ts");







const routes = [
    {
        path: '',
        component: _comment_page__WEBPACK_IMPORTED_MODULE_6__["CommentPage"]
    }
];
let CommentPageModule = class CommentPageModule {
};
CommentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_comment_page__WEBPACK_IMPORTED_MODULE_6__["CommentPage"]]
    })
], CommentPageModule);



/***/ }),

/***/ "./src/app/pages/comment/comment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/comment/comment.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1lbnQvY29tbWVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/comment/comment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/comment/comment.page.ts ***!
  \***********************************************/
/*! exports provided: CommentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPage", function() { return CommentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");





let CommentPage = class CommentPage {
    constructor(location, router, storage) {
        this.location = location;
        this.router = router;
        this.storage = storage;
        this.message = '';
        this.received = '';
        storage.get('comment').then((val) => {
            if (val !== null) {
                this.message = val;
            }
        });
        if (this.router.getCurrentNavigation().extras.state) {
            this.message = this.router.getCurrentNavigation().extras.state.user;
            this.received = this.router.getCurrentNavigation().extras.state.user;
            this.url = this.router.getCurrentNavigation().extras.state.url;
        }
    }
    ngOnInit() {
    }
    back() {
        const navigationExtras = {
            state: {
                //  user: this.message
                message: this.message
            }
        };
        this.router.navigate([this.url], navigationExtras);
        //  this.location.back();
    }
    cancel() {
        const navigationExtras = {
            state: {
                // user: this.received
                message: this.received
            }
        };
        this.router.navigate([this.url], navigationExtras);
    }
};
CommentPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
CommentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment',
        template: __webpack_require__(/*! raw-loader!./comment.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/comment/comment.page.html"),
        styles: [__webpack_require__(/*! ./comment.page.scss */ "./src/app/pages/comment/comment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], CommentPage);



/***/ })

}]);
//# sourceMappingURL=pages-comment-comment-module-es2015.js.map