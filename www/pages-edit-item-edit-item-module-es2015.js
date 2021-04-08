(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-item-edit-item-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/edit-item/edit-item.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/edit-item/edit-item.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n          <ion-icon padding  name=\"arrow-back\"  size=\"medium\" (click)=\"back()\"></ion-icon>   \n        </ion-buttons>\n        <ion-title>Item Amount</ion-title>\n        <ion-label padding slot=\"end\" (click)=\"save()\">Save</ion-label>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list *ngFor=\"let item of selectdItems;index as pos\">\n  <ion-item>\n    <ion-grid padding>\n        <ion-item lines=\"none\" no-padding>\n            <ion-icon  name=\"radio-button-on\"></ion-icon>  \n            <ion-input style=\"border: none;\" [(ngModel)]=\"item.name\"></ion-input>\n        </ion-item>\n      <ion-item lines=\"none\" no-padding>\n      <ion-grid no-padding>\n            <ion-row>\n              <ion-col>\n                  <ion-label no-padding>\n                      <h3>Rgular Price</h3>\n                    </ion-label>\n              </ion-col>\n              <ion-col>\n                  <span no-padding style=\"float: right;margin-right:12px;\">\n                      <!-- <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.regular_price\"></ion-input> -->\n                      {{tempItem.regular_price}}\n                    </span>\n              </ion-col>\n            </ion-row>\n          </ion-grid> \n\n      </ion-item >\n      <ion-item lines=\"none\" no-padding>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col>\n                <ion-label no-padding>\n                    <h3>Sale Price</h3>\n                  </ion-label>\n            </ion-col>\n            <ion-col>\n                <span no-padding style=\"float: right;margin-right:12px;\">\n                    <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"tempItem.sale_price\"></ion-input>\n                  </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </ion-item>\n        <ion-item lines=\"none\" no-padding>\n            <ion-grid no-padding>\n                <ion-row>\n                  <ion-col>\n                      <ion-label>\n                          <h3>Qty</h3>\n                        </ion-label>\n                  </ion-col>\n                  <ion-col>\n                      <span no-padding style=\"float: right;margin-right:12px;\">\n                          <ion-input (click)=\"qtyClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"tempItem.menu_order\"></ion-input>\n                        </span>\n                  </ion-col>\n                </ion-row>\n              </ion-grid> \n        </ion-item>\n          <ion-item lines=\"none\" no-padding>\n              <ion-grid no-padding>\n                  <ion-row>\n                    <ion-col>\n                        <ion-label>\n                            <h3>Amount</h3>\n                          </ion-label>\n                    </ion-col>\n                    <ion-col>\n                        <span  style=\"float: right;margin-right:12px;\">\n                          {{tempItem.sale_price * tempItem.menu_order}}\n                           </span>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid> \n          </ion-item>\n          <ion-item lines=\"none\" no-padding>\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col>\n                    <ion-label>\n                        <h3>Tax</h3>\n                      </ion-label>\n                </ion-col>\n                <ion-col>\n                    <span no-padding style=\"float: right;\">\n                        <ion-toggle [(ngModel)]=\"item.tax\" [checked]=\"item.tax\" (ionChange)=\"tax($event,pos)\" size=\"small\"  color=\"primary\"></ion-toggle>\n                    </span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <!--here is new code-->\n\n\n    </ion-grid>\n  </ion-item>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/edit-item/edit-item.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-item/edit-item.module.ts ***!
  \*****************************************************/
/*! exports provided: EditItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemPageModule", function() { return EditItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-item.page */ "./src/app/pages/edit-item/edit-item.page.ts");







const routes = [
    {
        path: '',
        component: _edit_item_page__WEBPACK_IMPORTED_MODULE_6__["EditItemPage"]
    }
];
let EditItemPageModule = class EditItemPageModule {
};
EditItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_edit_item_page__WEBPACK_IMPORTED_MODULE_6__["EditItemPage"]]
    })
], EditItemPageModule);



/***/ }),

/***/ "./src/app/pages/edit-item/edit-item.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-item/edit-item.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtaXRlbS9lZGl0LWl0ZW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/edit-item/edit-item.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/edit-item/edit-item.page.ts ***!
  \***************************************************/
/*! exports provided: EditItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemPage", function() { return EditItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let EditItemPage = class EditItemPage {
    constructor(router) {
        this.router = router;
        this.selectdItems = [];
        this.rate = [];
        this.qty = [];
        if (this.router.getCurrentNavigation().extras.state) {
            debugger;
            this.item = this.router.getCurrentNavigation().extras.state.edititem;
            this.tempItem = this.item;
            this.pos = this.router.getCurrentNavigation().extras.state.position;
            this.url = this.router.getCurrentNavigation().extras.state.url;
            this.selectdItems.push(this.item);
            debugger;
        }
    }
    ngOnInit() {
    }
    save() {
        let num = 0;
        let des = 0;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.selectdItems.length; i++) {
            if (!this.selectdItems[i].menu_order || this.selectdItems[i].menu_order === null) {
                // alert('Must add Quantity of Items');
                num = 0;
            }
            if (!this.selectdItems[i].regular_price || this.selectdItems[i].regular_price === null) {
                num = 0;
            }
            if (!this.selectdItems[i].name || this.selectdItems[i].name === null) {
                num = 0;
                des = 1;
            }
            else {
                num = num + 1;
            }
        }
        if (num === this.selectdItems.length && des === 0) {
            // alert('finally');
            const navigationExtras = {
                state: {
                    edititem: this.selectdItems[0],
                    position: this.pos
                }
            };
            this.router.navigate([this.url], navigationExtras);
        }
        else {
            if (des === 0) {
                alert('Please enter Rate and Qty of items');
            }
            else {
                alert('Error Description of product cannot be empty');
            }
        }
        console.log(this.selectdItems);
    }
    back() {
        debugger;
        const navigationExtras = {
            state: {
                edititem: this.item,
                position: this.pos
            }
        };
        //this.selectdItems = [];
        this.router.navigate([this.url], navigationExtras);
    }
    rateClicked(position) {
        const a = this.selectdItems[position].qty;
        // tslint:disable-next-line: radix
        if (a === '') {
            const index = this.qty.findIndex(x => x.pos === position);
            const b = this.qty[index].qty;
            this.selectdItems[position].qty = b;
            // this.qty.splice(index, 1);
        }
        console.log(position);
        const obj = {
            pos: position,
            rate: this.selectdItems[position].rate
        };
        // this.rate.push(obj);
        this.rate.unshift(obj);
        this.selectdItems[position].rate = '';
        console.log(this.rate);
    }
    qtyClicked(position) {
        const a = this.selectdItems[position].rate;
        // tslint:disable-next-line: radix
        if (a === '') {
            const index = this.rate.findIndex(x => x.pos === position);
            const b = this.rate[index].rate;
            this.selectdItems[position].rate = b.toString();
            //  this.rate.splice(index, 1);
        }
        const obj = {
            pos: position,
            qty: this.selectdItems[position].qty
        };
        this.qty.unshift(obj);
        this.selectdItems[position].qty = '';
        console.log(this.selectdItems[position].rate);
    }
    tax(value, position) {
        console.log(value.detail.checked, position);
        this.selectdItems[position].tax = value.detail.checked;
    }
};
EditItemPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EditItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-item',
        template: __webpack_require__(/*! raw-loader!./edit-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/edit-item/edit-item.page.html"),
        styles: [__webpack_require__(/*! ./edit-item.page.scss */ "./src/app/pages/edit-item/edit-item.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], EditItemPage);



/***/ })

}]);
//# sourceMappingURL=pages-edit-item-edit-item-module-es2015.js.map