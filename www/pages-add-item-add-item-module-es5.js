(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-item-add-item-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-item/add-item.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-item/add-item.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-icon padding  name=\"arrow-back\" (click)=\"back()\" size=\"medium\"></ion-icon>   \n      </ion-buttons>\n      <ion-title>Add Item</ion-title>\n      <ion-label padding slot=\"end\" (click)=\"login()\">Next</ion-label>\n      <ion-label padding slot=\"end\" (click)=\"logout()\">Out</ion-label>\n\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button tab=\"additem-items\">\n        <ion-icon name=\"logo-dropbox\"></ion-icon>\n        <ion-label></ion-label>\n\n      </ion-tab-button>\n      <!-- <ion-tab-button tab=\"additem-time\">\n          <ion-icon name=\"logo-dropbox\"></ion-icon>\n          <ion-label></ion-label>\n  \n        </ion-tab-button> -->\n        <ion-tab-button tab=\"additem-expenses\">\n            <ion-icon name=\"paper\"></ion-icon>\n            <ion-label></ion-label>\n    \n          </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/add-item/add-item.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/add-item/add-item.module.ts ***!
  \***************************************************/
/*! exports provided: AddItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPageModule", function() { return AddItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-item.page */ "./src/app/pages/add-item/add-item.page.ts");







var routes = [
    {
        path: '',
        component: _add_item_page__WEBPACK_IMPORTED_MODULE_6__["AddItemPage"],
        children: [
            { path: 'additem-items', loadChildren: '../additem-items/additem-items.module#AdditemItemsPageModule' },
            { path: 'additem-time', loadChildren: '../additem-time/additem-time.module#AdditemTimePageModule' },
            { path: 'additem-expenses', loadChildren: '../additem-expenses/additem-expenses.module#AdditemExpensesPageModule' },
        ]
    }
];
var AddItemPageModule = /** @class */ (function () {
    function AddItemPageModule() {
    }
    AddItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_item_page__WEBPACK_IMPORTED_MODULE_6__["AddItemPage"]]
        })
    ], AddItemPageModule);
    return AddItemPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-item/add-item.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/add-item/add-item.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1pdGVtL2FkZC1pdGVtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/add-item/add-item.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/add-item/add-item.page.ts ***!
  \*************************************************/
/*! exports provided: AddItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemPage", function() { return AddItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");








var AddItemPage = /** @class */ (function () {
    function AddItemPage(location, router, databaseprovider, alrtCtrl, googlePlus, syncService) {
        this.location = location;
        this.router = router;
        this.databaseprovider = databaseprovider;
        this.alrtCtrl = alrtCtrl;
        this.googlePlus = googlePlus;
        this.syncService = syncService;
        this.selectedItems = [];
        if (this.router.getCurrentNavigation().extras.state) {
            this.url = this.router.getCurrentNavigation().extras.state.url;
            debugger;
        }
    }
    AddItemPage.prototype.ngOnInit = function () {
    };
    AddItemPage.prototype.back = function () {
        // this.location.back();
        this.router.navigate([this.url]);
    };
    AddItemPage.prototype.next = function () {
        this.selectedItems = this.databaseprovider.getSeletedItems();
        this.url = this.databaseprovider.getItemUrl();
        if (this.selectedItems.length > 0) {
            var navigationExtras = {
                state: {
                    user: this.selectedItems,
                    url: this.url
                }
            };
            this.router.navigate(['itemamount'], navigationExtras);
            console.log(this.selectedItems);
        }
        else {
            this.showALert('Warning', '', 'Item description cant be empty');
        }
    };
    AddItemPage.prototype.showALert = function (head, sub, msg) {
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            // cssClass: 'alertSize',
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () {
                        console.log('Confirm Ok');
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    AddItemPage.prototype.login = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(res);
                this.syncService.checKEmail(res.email).then(function (data) {
                    if (data[0].success === 1) {
                        console.log('matched');
                        _this.router.navigate(['/menu/clients']);
                        // this.storage.set("UserName" , res.displayName);
                        // this.storage.set('loginStatus', 'true');
                        // this.storage.set('loginEmail', res.email);
                        // this.storage.set('ID', data[0].ID);
                        // this.events.publish('refreshShowPages', 'saad', '');
                        // this.addAccount(res.email, res.userId);
                        // loading.dismiss();
                    }
                    if (data[0].success === 0) {
                        _this.logout();
                        // loading.dismiss();
                        // this.onButtonClick();
                    }
                });
                return [2 /*return*/];
            });
        }); });
    };
    AddItemPage.prototype.logout = function () {
        var _this = this;
        this.googlePlus.trySilentLogin({})
            .then(function (res) {
            console.log(res);
            _this.googlePlus.logout()
                .then(function (res) {
                console.log(res);
                alert('logout ' + res);
            })
                .catch(function (err) { return console.error(err); });
        })
            .catch(function (err) { return console.error(err); });
    };
    AddItemPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_7__["SyncService"] }
    ]; };
    AddItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! raw-loader!./add-item.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-item/add-item.page.html"),
            styles: [__webpack_require__(/*! ./add-item.page.scss */ "./src/app/pages/add-item/add-item.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_7__["SyncService"]])
    ], AddItemPage);
    return AddItemPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-item-add-item-module-es5.js.map