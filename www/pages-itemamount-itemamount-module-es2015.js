(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-itemamount-itemamount-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/itemamount/itemamount.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/itemamount/itemamount.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n          <ion-icon padding  name=\"arrow-back\"  size=\"medium\" (click)=\"back()\"></ion-icon>   \n        </ion-buttons>\n        <ion-title>Item Amount</ion-title>\n        <ion-label padding slot=\"end\" (click)=\"save()\">Save</ion-label>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list *ngFor=\"let item of selectdItems;index as pos\">\n  <ion-item>\n    <ion-grid padding>\n        <ion-item lines=\"none\" no-padding>\n            <ion-icon  name=\"radio-button-on\"></ion-icon>  \n            <ion-input style=\"border: none;\" [(ngModel)]=\"item.name\"></ion-input>\n        </ion-item>\n      <ion-item lines=\"none\" no-padding>\n      <ion-grid no-padding>\n            <ion-row>\n              <ion-col>\n                  <ion-label no-padding>\n                      <h3>Regular Price</h3>\n                    </ion-label>\n              </ion-col>\n              <ion-col>\n                  <span no-padding style=\"float: right;margin-right:12px;\">\n                      <!-- <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.regular_price\"></ion-input> -->\n                        {{item.regular_price}}\n                    </span>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n      </ion-item >\n      <ion-item lines=\"none\" no-padding>\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col>\n                <ion-label no-padding>\n                    <h3>Sale Price</h3>\n                  </ion-label>\n            </ion-col>\n            <ion-col>\n                <span no-padding style=\"float: right;margin-right:12px;\">\n                    <ion-input (click)=\"rateClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.sale_price\"></ion-input>\n                  </span>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </ion-item>\n        <ion-item lines=\"none\" no-padding>\n            <ion-grid no-padding>\n                <ion-row>\n                  <ion-col>\n                      <ion-label>\n                          <h3>Qty</h3>\n                        </ion-label>\n                  </ion-col>\n                  <ion-col>\n                      <span no-padding style=\"float: right;margin-right:12px;\">\n                          <ion-input (click)=\"qtyClicked(pos)\"  type=\"number\" style=\"border: none;text-align: right;\" [(ngModel)]=\"item.menu_order\"></ion-input>\n                        </span>\n                  </ion-col>\n                </ion-row>\n              </ion-grid> \n        </ion-item>\n          <ion-item lines=\"none\" no-padding>\n              <ion-grid no-padding>\n                  <ion-row>\n                    <ion-col>\n                        <ion-label>\n                            <h3>Amount</h3>\n                          </ion-label>\n                    </ion-col>\n                    <ion-col>\n                        <span  style=\"float: right;margin-right:12px;\">\n                            {{item.sale_price * item.menu_order}}\n                           </span>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid> \n          </ion-item>\n          <ion-item lines=\"none\" no-padding>\n            <ion-grid no-padding>\n              <ion-row>\n                <ion-col>\n                    <ion-label>\n                        <h3>Tax</h3>\n                      </ion-label>\n                </ion-col>\n                <ion-col>\n                    <span no-padding style=\"float: right;\">\n                        <ion-toggle [(ngModel)]=\"item.tax\" [checked]=\"item.tax\" (ionChange)=\"tax($event,pos)\" size=\"small\"  color=\"primary\"></ion-toggle>\n                    </span>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n          <!--here is new code-->\n\n\n    </ion-grid>\n  </ion-item>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/itemamount/itemamount.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/itemamount/itemamount.module.ts ***!
  \*******************************************************/
/*! exports provided: ItemamountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemamountPageModule", function() { return ItemamountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _itemamount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./itemamount.page */ "./src/app/pages/itemamount/itemamount.page.ts");







const routes = [
    {
        path: '',
        component: _itemamount_page__WEBPACK_IMPORTED_MODULE_6__["ItemamountPage"]
    }
];
let ItemamountPageModule = class ItemamountPageModule {
};
ItemamountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_itemamount_page__WEBPACK_IMPORTED_MODULE_6__["ItemamountPage"]]
    })
], ItemamountPageModule);



/***/ }),

/***/ "./src/app/pages/itemamount/itemamount.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/itemamount/itemamount.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW1hbW91bnQvaXRlbWFtb3VudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/itemamount/itemamount.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/itemamount/itemamount.page.ts ***!
  \*****************************************************/
/*! exports provided: ItemamountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemamountPage", function() { return ItemamountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let ItemamountPage = class ItemamountPage {
    constructor(router, databaseprovider, platform) {
        // if (this.router.getCurrentNavigation().extras.state) {
        //   this.selectdItems = null;
        //   this.selectdItems = this.router.getCurrentNavigation().extras.state.user;
        //   console.log('sel:' + this.selectdItems);
        //   console.log('test:' + this.testItems);
        this.router = router;
        this.databaseprovider = databaseprovider;
        this.platform = platform;
        this.itemsname = [];
        this.selectdItems = [];
        this.testItems = [
            {
                description: 'pepsi',
                rate: '100',
                cost: '32',
                qty: '1',
                code: '9871',
                tax: false
            },
            {
                description: '7up',
                rate: '10',
                cost: '32',
                qty: '1',
                code: '9871',
                tax: false
            },
            {
                description: 'Coke',
                rate: '10',
                cost: '32',
                qty: '1',
                code: '9871',
                tax: false
            }
        ];
        this.rate = [];
        this.qty = [];
        this.quantity = 1;
        // }
        this.selectdItems = this.databaseprovider.getSeletedItems();
        this.url = databaseprovider.getItemUrl();
        //   for( let i = 0;i < this.selectdItems.length; i++) {
        //     this.itemsname[i] = this.selectdItems[i].name;
        //   }
        // //  this.itemname = this.selectdItems[0].name;
        debugger;
        this.platform.backButton.subscribeWithPriority(0, () => {
            console.log('hi here');
        });
    }
    ngOnInit() {
        // this.selectdItems = this.databaseprovider.getSeletedItems();
    }
    change(value) {
        if (value < 0) {
            console.log('no');
        }
        if (value > 0) {
            console.log('yeso');
        }
        // console.log('yes');
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
    save() {
        this.selectdItems;
        let num = 0;
        let des = 0;
        let a = true;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.selectdItems.length; i++) {
            if (!this.selectdItems[i].menu_order || this.selectdItems[i].menu_order === null) {
                // alert('Must add Quantity of Items');
                a = false;
            }
            if (!this.selectdItems[i].regular_price || this.selectdItems[i].regular_price === null) {
                a = false;
            }
            if (!this.selectdItems[i].name || this.selectdItems[i].name === null) {
                a = false;
                des = 1;
            }
            else {
                num = num + 1;
            }
        }
        if (a === true && des === 0) {
            // alert('finally');
            const navigationExtras = {
                state: {
                    items: this.selectdItems
                }
            };
            this.router.navigate([this.url], navigationExtras);
        }
        else {
            if (des === 0) {
                alert('Please enter Rate and Qty of all items');
            }
            else {
                alert('Error Description of products cannot be empty');
            }
        }
        console.log(this.selectdItems);
    }
    tax(value, position) {
        console.log(value.detail.checked, position);
        this.selectdItems[position].tax = value.detail.checked;
    }
    back() {
        debugger;
        this.databaseprovider.deleteAllSelectedItems();
        this.selectdItems = [];
        this.router.navigate([this.url]);
    }
    ionViewDidEnter() {
        document.addEventListener("backbutton", function (e) {
            console.log("disable back button");
        }, false);
    }
    isReadonly() { return true; }
};
ItemamountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
ItemamountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-itemamount',
        template: __webpack_require__(/*! raw-loader!./itemamount.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/itemamount/itemamount.page.html"),
        styles: [__webpack_require__(/*! ./itemamount.page.scss */ "./src/app/pages/itemamount/itemamount.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], ItemamountPage);



/***/ })

}]);
//# sourceMappingURL=pages-itemamount-itemamount-module-es2015.js.map