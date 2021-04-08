(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["additem-items-additem-items-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/additem-items/additem-items.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/additem-items/additem-items.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n        <ion-list lines=\"none\"  *ngFor=\"let item of selected;index as pos\" no-padding>\n          <ion-item>\n              <ion-button (click)=\"removeSelected(pos)\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"dark\" style=\"width: auto;\">{{item.name}}</ion-button>\n          </ion-item>\n        </ion-list>\n\n    <ion-item>\n        <ion-textarea rows=\"1\" style=\"font-size: 12px;\" [(ngModel)]=\"description\" placeholder=\"Enter a new item description or add the following iems.\">\n        </ion-textarea>\n        <ion-icon (click)=\"clearDescription()\" name=\"close\" size=\"small\" *ngIf=\"!!description\"></ion-icon>\n    </ion-item>\n  <ion-list *ngFor=\"let item of activeItems\" no-padding>\n   <ion-item lines=\"none\" (click)=\"itemClicked(item)\">\n     <ion-label>\n       <h3>{{item.name}}</h3>\n     </ion-label>\n     <ion-icon name=\"add\"></ion-icon>\n   </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/additem-items/additem-items.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/additem-items/additem-items.module.ts ***!
  \*************************************************************/
/*! exports provided: AdditemItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditemItemsPageModule", function() { return AdditemItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _additem_items_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./additem-items.page */ "./src/app/pages/additem-items/additem-items.page.ts");








const routes = [
    {
        path: '',
        component: _additem_items_page__WEBPACK_IMPORTED_MODULE_7__["AdditemItemsPage"]
    }
];
let AdditemItemsPageModule = class AdditemItemsPageModule {
};
AdditemItemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
        ],
        declarations: [_additem_items_page__WEBPACK_IMPORTED_MODULE_7__["AdditemItemsPage"]]
    })
], AdditemItemsPageModule);



/***/ }),

/***/ "./src/app/pages/additem-items/additem-items.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/additem-items/additem-items.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZGl0ZW0taXRlbXMvYWRkaXRlbS1pdGVtcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/additem-items/additem-items.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/additem-items/additem-items.page.ts ***!
  \***********************************************************/
/*! exports provided: AdditemItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditemItemsPage", function() { return AdditemItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let AdditemItemsPage = class AdditemItemsPage {
    constructor(databaseprovider, nativeHttp, plt, loadingCtrl, router) {
        this.databaseprovider = databaseprovider;
        this.nativeHttp = nativeHttp;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.items = [];
        this.tempItems = [];
        this.tempActiveItems = [];
        this.tempInactiveItems = [];
        this.inactiveItems = [];
        this.activeItems = [];
        this.description = '';
        this.selected = [];
        if (this.router.getCurrentNavigation().extras.state) {
            this.url = this.router.getCurrentNavigation().extras.state.url;
            databaseprovider.setItemUrl(this.url);
            debugger;
        }
        this.databaseprovider.deleteAllSelectedItems();
        this.getDataNativeHttp();
        // this.router.events.pipe(
        //   filter(event => event instanceof NavigationStart)
        // ).subscribe((route: NavigationStart) => {
        //     console.log('Route: '+route.url);
        //     const a = this.databaseprovider.getupdateitems();
        //     debugger;
        //     if(route.url == '/add-item/additem-items' && a === 1) {
        //     this.getDataNativeHttp();
        //     }
        // });
        // if(this.items.length === 0) {
        //   debugger;
        //    this.getDataNativeHttp();
        // }
    }
    ngOnInit() {
    }
    clearDescription() {
        this.description = '';
    }
    itemClicked(item) {
        const selecteditem = this.activeItems.find(x => x.name === item.name);
        this.selected.push(selecteditem);
        this.databaseprovider.pushItem(selecteditem);
        console.log(this.selected);
    }
    removeSelected(pos) {
        debugger;
        let a = this.databaseprovider.getSeletedItems();
        this.selected.splice(pos, 1);
        this.databaseprovider.removeSelectedItem(pos);
        a = this.databaseprovider.getSeletedItems();
        debugger;
    }
    initializeActiveItems() {
        this.tempActiveItems = this.activeItems;
    }
    getDataNativeHttp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            let nativeCall = this.nativeHttp.get('https://riz.livauto.com/wp-json/wc/v3/products', {}, {
                'Content-Type': 'application/json',
                'Authorization': 'Basic Y2tfOWNlMGIyZmZmYjZlNzJlMTM3NGY3MTgzOTQ0NDBhMDkwNmNiOWVkZDpjc183MmIxMDQyMWExM2I4MmQzN2M0ODE0MDI5YmRmN2E0NTIyYzBjMTI4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                this.items = JSON.parse(data.data);
                this.activeItems = [];
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].reviews_allowed === true) {
                        this.activeItems.push(this.items[i]);
                    }
                }
                // this.initializeItems();
                this.initializeActiveItems();
                this.databaseprovider.setupdateitems(0);
                debugger;
            }, err => {
                console.log('JS call error', err);
            });
        });
    }
};
AdditemItemsPage.ctorParameters = () => [
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
AdditemItemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-additem-items',
        template: __webpack_require__(/*! raw-loader!./additem-items.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/additem-items/additem-items.page.html"),
        styles: [__webpack_require__(/*! ./additem-items.page.scss */ "./src/app/pages/additem-items/additem-items.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], AdditemItemsPage);



/***/ })

}]);
//# sourceMappingURL=additem-items-additem-items-module-es2015.js.map