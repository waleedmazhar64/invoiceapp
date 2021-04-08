(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expenses-expenses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/expenses/expenses.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/expenses/expenses.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button *ngIf=\"s == 0\"></ion-menu-button>\n        <ion-icon padding  *ngIf=\"s == 1\" (click)=\"s = 0\" name=\"arrow-back\"></ion-icon>\n      </ion-buttons>\n      <ion-title *ngIf=\"s == 0\">Expenses(s)</ion-title>\n      <ion-icon slot=\"end\" name=\"search\" padding (click)=\"s=1\"></ion-icon>\n      <ion-input (ionInput)=\"geItems($event)\" padding placeholder=\"Search Invoices\" *ngIf=\"s == 1\"></ion-input>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab *ngIf=\"showAdd === 1\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addIcon()\">\n        <ion-fab-button>\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    \n          <ion-virtual-scroll [items]=\"tempExpenses\" approxItemHeight=\"70px\" >\n   \n\n              <ion-item-sliding *virtualItem=\"let expenses;index as pos\" >\n                  <!-- <ion-item-options side=\"start\">\n                      <ion-item-option (click)=\"edit(expenses)\">Edit</ion-item-option>\n                      <ion-item-option color=\"danger\" (click)=\"delete(expenses)\">Delete</ion-item-option>\n          \n                    </ion-item-options> -->\n              <ion-item (click)=\"itemClicked(expenses,pos)\">\n                \n                  <img padding src=\"assets/expenses.png\">\n                  <ion-label>\n                    <h2 text-capitalize>{{ expenses.Name }}</h2>\n                    <p>{{ expenses.Date }}</p>\n                  </ion-label>\n                  <!-- <ion-label>\n                    <h2 text-capitalize style=\"visibility: hidden;\">{{ expenses.Category }}</h2>\n                    <p>{{ expenses.Date }}</p>\n                  </ion-label> -->\n                  <ion-label>\n                      <span (click)=\"edit()\" style=\"float:right;\">\n                          {{currency}} {{ expenses.Amount }}\n                      </span>\n                  </ion-label>\n              </ion-item>\n              </ion-item-sliding>\n            \n            </ion-virtual-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/expenses/expenses.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/expenses/expenses.module.ts ***!
  \***************************************************/
/*! exports provided: ExpensesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesPageModule", function() { return ExpensesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expenses_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expenses.page */ "./src/app/pages/expenses/expenses.page.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");









var routes = [
    {
        path: '',
        component: _expenses_page__WEBPACK_IMPORTED_MODULE_7__["ExpensesPage"]
    }
];
var ExpensesPageModule = /** @class */ (function () {
    function ExpensesPageModule() {
    }
    ExpensesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"],
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
            ],
            declarations: [_expenses_page__WEBPACK_IMPORTED_MODULE_7__["ExpensesPage"]]
        })
    ], ExpensesPageModule);
    return ExpensesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/expenses/expenses.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/expenses/expenses.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  width: 30px;\n  height: 30px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXhwZW5zZXMvQzpcXHdhbXA2NFxcd3d3XFxpbnZvaWNlLnBrL3NyY1xcYXBwXFxwYWdlc1xcZXhwZW5zZXNcXGV4cGVuc2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXhwZW5zZXMvZXhwZW5zZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHBlbnNlcy9leHBlbnNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICB3aWR0aDogMzBweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gIH0iLCJpb24taWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/expenses/expenses.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/expenses/expenses.page.ts ***!
  \*************************************************/
/*! exports provided: ExpensesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesPage", function() { return ExpensesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");










var ExpensesPage = /** @class */ (function () {
    function ExpensesPage(router, nativeHttp, plt, loadingCtrl, databaseprovider, callnumber, syncService, alrtCtrl, storage, route, events) {
        var _this = this;
        this.router = router;
        this.nativeHttp = nativeHttp;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.databaseprovider = databaseprovider;
        this.callnumber = callnumber;
        this.syncService = syncService;
        this.alrtCtrl = alrtCtrl;
        this.storage = storage;
        this.route = route;
        this.events = events;
        this.expenses = [];
        this.tempExpenses = [];
        this.s = 0;
        this.currency = '';
        this.showAdd = 0;
        this.showDetails = 0;
        this.storage.get('app').then(function (val1) {
            if (val1 === 'invoice') {
                _this.storage.get('ID').then(function (val) {
                    _this.syncService.getbValue(val, 'Expense Add').then(function (data) {
                        _this.showAdd = data[0].bValue;
                    });
                    _this.syncService.getbValue(val, 'Expense Details').then(function (data) {
                        _this.showDetails = data[0].bValue;
                    });
                });
            }
            else {
                _this.showAdd = 1;
                _this.showDetails = 1;
            }
        });
        events.subscribe('refreshExpenses', function (user, time) {
            storage.get('currency').then(function (val) {
                if (val !== null) {
                    _this.currency = val.toString();
                }
            });
            _this.getAllExpenses();
        });
        //    this.router.events.pipe(
        //   filter(event => event instanceof NavigationStart)
        // ).subscribe((route: NavigationStart) => {
        //     console.log('Route: '+route.url);
        //     const a = this.databaseprovider.getupdateexpenses();
        //     ;
        //     storage.get('currency').then((val) => {
        //       if (val !== null) {
        //           this.currency = val.toString();
        //           
        //       }
        //     });
        //     if(route.url === '/menu/expenses' && a === 1) {
        //       this.getAllExpenses();
        //     }
        // });
        if (this.expenses.length === 0) {
            ;
            // this.getDataNativeHttp();
            storage.get('currency').then(function (val) {
                if (val !== null) {
                    _this.currency = val.toString();
                }
            });
            this.getAllExpenses();
        }
        // this.sortClients();
        // this.initializeItems();
    }
    ExpensesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; })).subscribe(function (route) {
            console.log('Route: ' + route.url);
            var a = _this.databaseprovider.getupdateexpenses();
            ;
            _this.storage.get('currency').then(function (val) {
                if (val !== null) {
                    _this.currency = val.toString();
                }
            });
            if (route.url === '/menu/expenses' && a === 1) {
                _this.getAllExpenses();
            }
        });
    };
    ExpensesPage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
        // this.databaseprovider.setupdateinvoice(1);
    };
    ExpensesPage.prototype.ngOnInit = function () {
    };
    ExpensesPage.prototype.addIcon = function () {
        this.router.navigate(['new-expense']);
    };
    ExpensesPage.prototype.edit = function (item) {
    };
    ExpensesPage.prototype.delete = function (item) {
    };
    ExpensesPage.prototype.itemClicked = function (item) {
        if (this.showDetails === 1) {
            this.databaseprovider.setLogsnav(1);
            var navigationExtras = {
                state: {
                    expense: item,
                    url: '/menu/expenses'
                }
            };
            this.router.navigate(['editexpense'], navigationExtras);
        }
    };
    ExpensesPage.prototype.initializeItems = function () {
        console.log('ini');
        this.tempExpenses = this.expenses;
    };
    ExpensesPage.prototype.geItems = function (searchbar) {
        this.initializeItems();
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.tempExpenses = this.tempExpenses.filter(function (v) {
            if (v.Name && q) {
                if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    console.log("true");
                    return true;
                }
                console.log("false");
                return false;
            }
        });
    };
    ExpensesPage.prototype.sortClients = function () {
        ;
        this.expenses = this.expenses.sort(function (a, b) {
            if (a.category < b.category) {
                return -1;
            }
            if (a.category > b.category) {
                return 1;
            }
            return 0;
        });
    };
    ExpensesPage.prototype.getAllExpenses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.syncService.getAllExpenses().then(function (data) {
                            _this.expenses = data;
                            // this.sortClients();
                            _this.initializeItems();
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ExpensesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_8__["SyncService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] }
    ]; };
    ExpensesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expenses',
            template: __webpack_require__(/*! raw-loader!./expenses.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/expenses/expenses.page.html"),
            styles: [__webpack_require__(/*! ./expenses.page.scss */ "./src/app/pages/expenses/expenses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_8__["SyncService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
    ], ExpensesPage);
    return ExpensesPage;
}());



/***/ })

}]);
//# sourceMappingURL=expenses-expenses-module-es5.js.map