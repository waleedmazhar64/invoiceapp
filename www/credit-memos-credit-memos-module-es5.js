(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["credit-memos-credit-memos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/credit-memos/credit-memos.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/credit-memos/credit-memos.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button *ngIf=\"s == 0\"></ion-menu-button>\n        <ion-icon padding  *ngIf=\"s == 1\" (click)=\"back()\" name=\"arrow-back\"></ion-icon>\n      </ion-buttons>\n      <ion-title *ngIf=\"s == 0\">Credit Memos</ion-title>\n      <ion-icon slot=\"end\" name=\"search\" padding (click)=\"s=1\"></ion-icon>\n      <ion-input padding placeholder=\"Search Invoices\" *ngIf=\"s == 1\"></ion-input>\n    </ion-toolbar>\n    <!-- <ion-toolbar color=\"primary\" *ngIf=\"s == 1\">\n      <ion-row no-padding>\n        <ion-label>Suggested Searchs</ion-label>\n      </ion-row>\n    </ion-toolbar> -->\n    <ion-toolbar *ngIf=\"s == 1\" color=\"primary\">\n      <ion-grid >\n        \n        <ion-row>\n            <ion-col text-center>\n                <ion-button (click)=\"paid()\" [color]=\"paidcolor\">Issued</ion-button>\n              </ion-col>\n              <ion-col text-center >\n                  <ion-button (click)=\"unpaid()\" [color]=\"unpaidcolor\">Approved</ion-button>\n              </ion-col>\n        </ion-row> \n        \n      </ion-grid>\n    </ion-toolbar>\n    <ion-toolbar *ngIf=\"s == 1\" color=\"primary\">\n        <ion-grid >\n          \n          <ion-row>\n              <ion-col text-center>\n                  <ion-button (click)=\"pending()\" [color]=\"pend\">Pending</ion-button>\n                </ion-col>\n                <ion-col text-center >\n                    <ion-button (click)=\"withdrawn()\" [color]=\"with\">Withdrawn</ion-button>\n                </ion-col>\n          </ion-row> \n          \n        </ion-grid>\n      </ion-toolbar>\n   \n  </ion-header>\n\n<ion-content padding>\n    <!-- <ion-item no-padding lines=\"full\"></ion-item> -->\n    <p style=\"text-align:left;\">\n        <span *ngIf=\"editSelected == false\">1 invoice</span>\n        <span *ngIf=\"editSelected == true\">Selected {{ selectedCount }}</span>\n          \n          <span (click)=\"editSelected = true\" *ngIf=\"editSelected == false\" style=\"float:right;\" >\n              Edit\n          </span>\n          <span (click)=\"editSelected = false\" *ngIf=\"editSelected == true\" style=\"float:right;\" >\n            Done\n        </span>\n      </p>\n         <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addIcon()\">\n      <ion-fab-button>\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\"> \n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n    <ion-list *ngIf=\"editSelected == false\">\n                \n            <ion-item-sliding  *ngFor=\"let item of items\">\n                <ion-item-options side=\"start\">\n                  <ion-item-option (click)=\"edit(item)\">Edit</ion-item-option>\n                  <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option>\n      \n                </ion-item-options>\n                <ion-item (click)=\"itemClicked(item)\">\n      \n                  \n                    <ion-avatar slot=\"start\" >\n                        <img src=\"assets/plus.png\">\n                    </ion-avatar>\n                    <ion-label>\n                      <h2 text-capitalize>{{ item.name }} {{ item.duedate }}</h2>\n                      <p>{{ item.date }}</p>\n                    </ion-label>\n                    <ion-label>\n                        <span (click)=\"edit()\" style=\"float:right;\">\n                            $ {{ item.total }}\n                        </span>\n                    </ion-label>\n                 </ion-item>          \n              </ion-item-sliding>\n              <ion-icon slot=\"end\" name=\"add-circle\"></ion-icon>\n\n              </ion-list>\n              <ion-list *ngIf=\"editSelected == true\">\n                \n                <ion-item-sliding  *ngFor=\"let item of items\">\n                    <!-- <ion-item-options side=\"start\">\n                      <ion-item-option (click)=\"edit(item)\">Edit</ion-item-option>\n                      <ion-item-option color=\"danger\" (click)=\"delete(item)\">Delete</ion-item-option>\n          \n                    </ion-item-options>-->\n                    <ion-item *ngIf=\"item.selected == true\"  (click)=\"item.selected = false\" (click)=\"update()\">\n          \n                      \n                        <ion-avatar slot=\"start\" >\n                            <img *ngIf=\"item.selected == false\" src=\"assets/out.png\">\n                            <img *ngIf=\"item.selected == true\" src=\"assets/fill.png\">\n                        </ion-avatar>\n                        <ion-label>\n                          <h2 text-capitalize>{{ item.name }} {{ item.duedate }}</h2>\n                          <p>{{ item.date }}</p>\n                        </ion-label>\n                        <ion-label>\n                            <span (click)=\"edit()\" style=\"float:right;\">\n                                $ {{ item.total }}\n                            </span>\n                        </ion-label>\n                     </ion-item>  \n                     <ion-item *ngIf=\"item.selected == false\"  (click)=\"item.selected = true\" (click)=\"update()\">\n          \n                      \n                      <ion-avatar slot=\"start\" >\n                          <img *ngIf=\"item.selected == false\" src=\"assets/out.png\">\n                          <img *ngIf=\"item.selected == true\" src=\"assets/fill.png\">\n                      </ion-avatar>\n                      <ion-label>\n                        <h2 text-capitalize>{{ item.name }} {{ item.duedate }}</h2>\n                        <p>{{ item.date }}</p>\n                      </ion-label>\n                      <ion-label>\n                          <span (click)=\"edit()\" style=\"float:right;\">\n                              $ {{ item.total }}\n                          </span>\n                      </ion-label>\n                   </ion-item>                  \n                  </ion-item-sliding>\n                  <ion-icon slot=\"end\" name=\"add-circle\"></ion-icon>\n    \n                  </ion-list>\n<!--     \n  <ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"doInfinite($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"loading more...\"></ion-infinite-scroll-content>\n    </ion-infinite-scroll> -->\n</ion-content>\n\n<ion-footer *ngIf=\"editSelected == true\">\n \n    <div style=\"text-align: center;\">\n      <ion-toolbar color=\"light\">\n          <ion-grid text-center>\n              <ion-row text-center>\n                  <ion-button color=\"danger\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  style=\"width: 80%; margin-left: auto;margin-right: auto;--border-radius: 15px;\">Delete</ion-button>\n\n              </ion-row>\n              \n              <ion-row text-center>\n                  <ion-buttons slot=\"end\">\n                      <ion-button>\n                        <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n                        forward\n                      </ion-button>\n                    </ion-buttons>\n              </ion-row>\n              <ion-row>\n              </ion-row>\n              </ion-grid>\n\n      </ion-toolbar>\n    </div>\n\n\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/credit-memos/credit-memos.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/credit-memos/credit-memos.module.ts ***!
  \***********************************************************/
/*! exports provided: CreditMemosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditMemosPageModule", function() { return CreditMemosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _credit_memos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credit-memos.page */ "./src/app/pages/credit-memos/credit-memos.page.ts");







var routes = [
    {
        path: '',
        component: _credit_memos_page__WEBPACK_IMPORTED_MODULE_6__["CreditMemosPage"]
    }
];
var CreditMemosPageModule = /** @class */ (function () {
    function CreditMemosPageModule() {
    }
    CreditMemosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_credit_memos_page__WEBPACK_IMPORTED_MODULE_6__["CreditMemosPage"]]
        })
    ], CreditMemosPageModule);
    return CreditMemosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/credit-memos/credit-memos.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/credit-memos/credit-memos.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  width: 30px;\n  height: 30px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlZGl0LW1lbW9zL0M6XFx3YW1wNjRcXHd3d1xcaW52b2ljZS5way9zcmNcXGFwcFxccGFnZXNcXGNyZWRpdC1tZW1vc1xcY3JlZGl0LW1lbW9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3JlZGl0LW1lbW9zL2NyZWRpdC1tZW1vcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWRpdC1tZW1vcy9jcmVkaXQtbWVtb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWhlYWRlciB7XHJcbi8vICAgICBoZWlnaHQ6IDQzcHg7Ly9ieSBkZWZhdWx0IDU2cHhcclxuLy8gICB9XHJcbi8vICAgaW9uLXRvb2xiYXIge1xyXG4vLyAgICAgaGVpZ2h0OiA2NHB4O1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjNTI1MmQxO1xyXG4vLyAgIH1cclxuICBpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gIH0iLCJpb24taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/credit-memos/credit-memos.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/credit-memos/credit-memos.page.ts ***!
  \*********************************************************/
/*! exports provided: CreditMemosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditMemosPage", function() { return CreditMemosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CreditMemosPage = /** @class */ (function () {
    function CreditMemosPage(router) {
        this.router = router;
        this.paidcolor = 'primary';
        this.unpaidcolor = 'primary';
        this.pend = 'primary';
        this.with = 'primary';
        this.items = [
            {
                name: 'saad',
                date: '10/09/2019',
                duedate: '24',
                total: '108',
                selected: false
            },
            {
                name: 'saad',
                date: '10/09/2019',
                duedate: '24',
                total: '109',
                selected: false
            }
        ];
        this.editSelected = false;
        this.itemSelected = false;
        this.selectedCount = this.items.filter(function (x) { return x.selected === true; }).length;
        this.s = 0;
    }
    CreditMemosPage.prototype.ngOnInit = function () {
    };
    CreditMemosPage.prototype.addIcon = function () {
        this.router.navigate(['addcreditmemos']);
    };
    CreditMemosPage.prototype.edittxt = function () {
        alert('edit');
    };
    CreditMemosPage.prototype.doRefresh = function (refresher) {
        //   this.data.subscribe(data => {
        //     this.items = data.results;
        //     refresher.target.complete();
        //  });
        this.items = this.items;
    };
    CreditMemosPage.prototype.itemClicked = function (item) {
        var navigationExtras = {
            state: {
                user: item
            }
        };
        this.router.navigate(['invoicedetails'], navigationExtras);
    };
    CreditMemosPage.prototype.edit = function (item) {
        alert('edit:' + item.total);
    };
    CreditMemosPage.prototype.delete = function (item) {
        alert('del:' + item.total);
    };
    CreditMemosPage.prototype.update = function () {
        //debugger;
        this.selectedCount = this.items.filter(function (x) { return x.selected === true; }).length;
    };
    CreditMemosPage.prototype.paid = function () {
        this.paidcolor = 'success';
        this.unpaidcolor = 'primary';
        this.with = 'primary';
        this.pend = 'primary';
    };
    CreditMemosPage.prototype.unpaid = function () {
        this.unpaidcolor = 'success';
        this.paidcolor = 'primary';
        this.with = 'primary';
        this.pend = 'primary';
    };
    CreditMemosPage.prototype.back = function () {
        this.s = 0;
        this.paidcolor = 'primary';
        this.unpaidcolor = 'primary';
        this.with = 'primary';
        this.pend = 'primary';
    };
    CreditMemosPage.prototype.pending = function () {
        this.paidcolor = 'primary';
        this.unpaidcolor = 'primary';
        this.with = 'primary';
        this.pend = 'success';
    };
    CreditMemosPage.prototype.withdrawn = function () {
        this.paidcolor = 'primary';
        this.unpaidcolor = 'primary';
        this.with = 'success';
        this.pend = 'primary';
        // this.content.();
    };
    CreditMemosPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CreditMemosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credit-memos',
            template: __webpack_require__(/*! raw-loader!./credit-memos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/credit-memos/credit-memos.page.html"),
            styles: [__webpack_require__(/*! ./credit-memos.page.scss */ "./src/app/pages/credit-memos/credit-memos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreditMemosPage);
    return CreditMemosPage;
}());



/***/ })

}]);
//# sourceMappingURL=credit-memos-credit-memos-module-es5.js.map