(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["items-items-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/items/items.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/items/items.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Item(s)</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\"> \n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n    <ion-fab *ngIf=\"showAdd === 1\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addItem()\">\n        <ion-fab-button>\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    <ion-searchbar (ionInput)=\"geItems($event)\" placeholder=\"Search Item(s)\" showCancelButton=\"focus\"></ion-searchbar>\n    <ion-button (click)=\"selectActive()\" [fill]=\"active\"  text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"primary\" style=\"width: auto;\">Active</ion-button>\n    <ion-button (click)=\"selectInActive()\" [fill]=\"inactive\"  text-capitalize=\"false\" fill=\"outline\" size=\"small\"  color=\"primary\" style=\"width: auto;\">Inactive</ion-button>\n    <ion-button (click)=\"sorting()\" [fill]=\"sortColor\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  color=\"primary\" style=\"width: auto;\">Sort</ion-button>\n\n    <ion-virtual-scroll *ngIf=\"selected === 'act'\" [items]=\"tempActiveItems\" approxItemHeight=\"70px\">\n    \n      <!-- <ion-item-divider *virtualHeader=\"let header\" color=\"primary\">\n        <ion-label>{{ header }}</ion-label>\n      </ion-item-divider> -->\n      <ion-item *virtualItem=\"let item\" (click)=\"itemClicked(item)\">\n          <ion-avatar slot=\"start\">\n              <img src=\"assets/plus.png\">\n          </ion-avatar>\n          <p>\n            <span style=\"float:left;\">{{ item.Description }}</span>\n            <!-- <p>{{ client.email }}</p> -->\n          </p>\n          <ion-label>\n              <span  style=\"float:right;\">\n                 {{ item.Instock }}\n              </span>\n          </ion-label>\n      </ion-item>\n    \n    </ion-virtual-scroll>\n    <ion-virtual-scroll *ngIf=\"selected === 'inact'\" [items]=\"tempInactiveItems\" approxItemHeight=\"70px\">\n    \n      <!-- <ion-item-divider *virtualHeader=\"let header\" color=\"primary\">\n        <ion-label>{{ header }}</ion-label>\n      </ion-item-divider> -->\n      <ion-item *virtualItem=\"let item\" (click)=\"itemClicked(item)\">\n          <ion-avatar slot=\"start\">\n              <img src=\"assets/plus.png\">\n          </ion-avatar>\n          <p>\n            <span style=\"float:left;\">{{ item.Description }}</span>\n            <!-- <p>{{ client.email }}</p> -->\n          </p>\n          <ion-label style=\"width: auto;\">\n              <span  style=\"float:right;\">\n                 {{ item.Instock }}\n              </span>\n          </ion-label>\n      </ion-item>\n    \n    </ion-virtual-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/items/items.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/items/items.module.ts ***!
  \*********************************************/
/*! exports provided: ItemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items.page */ "./src/app/pages/items/items.page.ts");








var routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_7__["ItemsPage"]
    }
];
var ItemsPageModule = /** @class */ (function () {
    function ItemsPageModule() {
    }
    ItemsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
            ],
            declarations: [_items_page__WEBPACK_IMPORTED_MODULE_7__["ItemsPage"]]
        })
    ], ItemsPageModule);
    return ItemsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/items/items.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/items/items.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW1zL2l0ZW1zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/items/items.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/items/items.page.ts ***!
  \*******************************************/
/*! exports provided: ItemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPage", function() { return ItemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");












var ItemsPage = /** @class */ (function () {
    function ItemsPage(router, http, nativeHttp, plt, loadingCtrl, databaseprovider, syncService, storage) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.plt = plt;
        this.loadingCtrl = loadingCtrl;
        this.databaseprovider = databaseprovider;
        this.syncService = syncService;
        this.storage = storage;
        this.items = [];
        this.tempItems = [];
        this.tempActiveItems = [];
        this.tempInactiveItems = [];
        this.inactiveItems = [];
        this.activeItems = [];
        this.active = 'solid';
        this.inactive = 'outline';
        this.showSpinner = true;
        this.selected = 'act';
        this.currency = '';
        this.sortActive = 0;
        this.sortColor = 'outline';
        this.showAdd = 0;
        this.showDetails = 0;
        this.storage.get('app').then(function (val1) {
            if (val1 === 'invoice') {
                _this.storage.get('ID').then(function (val) {
                    _this.syncService.getbValue(val, 'Item Add').then(function (data) {
                        _this.showAdd = data[0].bValue;
                    });
                    _this.syncService.getbValue(val, 'Item Details').then(function (data) {
                        _this.showDetails = data[0].bValue;
                    });
                });
            }
            else {
                _this.showAdd = 1;
                _this.showDetails = 1;
            }
        });
        storage.get('currency').then(function (val) {
            if (val !== null) {
                _this.currency = val.toString();
            }
        });
        // this.router.events.pipe(
        //   filter(event => event instanceof NavigationStart)
        // ).subscribe((route: NavigationStart) => {
        //     console.log('Route: '+route.url);
        //     const a = this.databaseprovider.getupdateitems();
        //     ;
        //     if(route.url == '/menu/items' && a === 1) {
        //       this.getAllItemsLocaldb();
        //       storage.get('currency').then((val) => {
        //         if (val !== null) {
        //             this.currency = val.toString();
        //             
        //         }
        //       });
        //       
        //    // this.getDataNativeHttp();
        //     }
        // });
        if (this.items.length === 0) {
            ;
            storage.get('currency').then(function (val) {
                if (val !== null) {
                    _this.currency = val.toString();
                }
            });
            this.getAllItemsLocaldb();
        }
        // this.sortItems();
        // this.initializeItems();
    }
    ItemsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.subscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; })).subscribe(function (route) {
            console.log('Route: ' + route.url);
            var a = _this.databaseprovider.getupdateitems();
            ;
            if (route.url == '/menu/items' && a === 1) {
                _this.getAllItemsLocaldb();
                _this.storage.get('currency').then(function (val) {
                    if (val !== null) {
                        _this.currency = val.toString();
                    }
                });
            }
        });
    };
    ItemsPage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
        // this.databaseprovider.setupdateinvoice(1);
    };
    ItemsPage.prototype.ngOnInit = function () {
        //  this.sortItems();
        //  this.initializeItems();
    };
    ItemsPage.prototype.sortItems = function () {
        this.items = this.items.sort(function (a, b) {
            if (a.Description < b.Description) {
                return -1;
            }
            if (a.Description > b.Description) {
                return 1;
            }
            return 0;
        });
    };
    ItemsPage.prototype.separateLetter = function (item, itemIndex, items) {
        if (itemIndex === 0) {
            return item.Description[0].toUpperCase();
        }
        var first_prev = items[itemIndex - 1].Description[0];
        var first_current = item.Description[0];
        if (first_prev !== first_current) {
            return first_current.toUpperCase();
        }
        return null;
    };
    ItemsPage.prototype.initializeItems = function () {
        this.tempItems = this.items;
    };
    ItemsPage.prototype.initializeActiveItems = function () {
        this.tempActiveItems = this.activeItems;
    };
    ItemsPage.prototype.initializeInactiveItems = function () {
        this.tempInactiveItems = this.inactiveItems;
    };
    ItemsPage.prototype.geItems = function (searchbar) {
        if (this.selected === 'act') {
            this.initializeActiveItems();
            var q_1 = searchbar.srcElement.value;
            if (!q_1) {
                return;
            }
            this.tempActiveItems = this.tempActiveItems.filter(function (v) {
                if (v.Description && q_1) {
                    if (v.Description.toLowerCase().indexOf(q_1.toLowerCase()) > -1) {
                        return true;
                    }
                    return false;
                }
            });
        }
        if (this.selected === 'inact') {
            this.initializeInactiveItems();
            var q_2 = searchbar.srcElement.value;
            if (!q_2) {
                return;
            }
            this.tempInactiveItems = this.tempInactiveItems.filter(function (v) {
                if (v.Description && q_2) {
                    if (v.Description.toLowerCase().indexOf(q_2.toLowerCase()) > -1) {
                        return true;
                    }
                    return false;
                }
            });
        }
        //  this.initializeItems();
        //  // set q to the value of the searchbar
        //  const q = searchbar.srcElement.value;
        //  //;
        //  // if the value is an empty string don't filter the items
        //  if (!q) {
        //    return;
        //  }
        //  this.tempItems = this.tempItems.filter((v) => {
        //    if (v.name && q) {
        //      if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        //        ;
        //        return true;
        //      }
        //      ;
        //      return false;
        //    }
        //  });
        //   console.log(q, this.items.length);
    };
    ItemsPage.prototype.doRefresh = function (refresher) {
        this.getAllItemsLocaldb();
        refresher.target.complete();
    };
    ItemsPage.prototype.addItem = function () {
        this.router.navigate(['menu-additem']);
    };
    ItemsPage.prototype.itemClicked = function (item) {
        if (this.showDetails === 1) {
            this.databaseprovider.setLogsnav(1);
            this.syncService.getItem(item.itemid, '/menu/items');
        }
        // this.syncService.getItem(item.itemid).then((data) => {
        //   item = data;
        //   const navigationExtras: NavigationExtras = {
        //     state: {
        //       edititem: item
        //     }
        //   };
        //   this.router.navigate(['menu-itemdetails'], navigationExtras);
        // });
        // ;
    };
    ItemsPage.prototype.getDataNativeHttp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, url, nativeCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        url = this.databaseprovider.getURL();
                        this.nativeHttp.setDataSerializer("json");
                        nativeCall = this.nativeHttp.post(url, {
                            'Name': 'getAllItem',
                            "AccountId": '113008225657937776461'
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            _this.items = g.items;
                            // console.log(this.clients[0]);
                            // this.sortItems();
                            _this.inactiveItems = [];
                            _this.activeItems = [];
                            for (var i = 0; i < _this.items.length; i++) {
                                if (_this.items[i].Active === '0') {
                                    _this.inactiveItems.push(_this.items[i]);
                                }
                                else {
                                    _this.activeItems.push(_this.items[i]);
                                }
                            }
                            // this.initializeItems();
                            _this.initializeActiveItems();
                            _this.initializeInactiveItems();
                            _this.databaseprovider.setupdateitems(0);
                            ;
                        }, function (err) {
                            console.log('JS call error', err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemsPage.prototype.selectActive = function () {
        this.active = 'solid';
        this.inactive = 'outline';
        this.selected = 'act';
    };
    ItemsPage.prototype.selectInActive = function () {
        this.active = 'outline';
        this.inactive = 'solid';
        this.selected = 'inact';
    };
    ItemsPage.prototype.getAllItemsLocaldb = function () {
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
                        this.syncService.getAllItems().then(function (data) {
                            _this.items = data;
                            // this.sortItems();
                            _this.inactiveItems = [];
                            _this.activeItems = [];
                            for (var i = 0; i < _this.items.length; i++) {
                                if (_this.items[i].Active === 0 || _this.items[i].Instock === 0) {
                                    _this.inactiveItems.push(_this.items[i]);
                                }
                                if (_this.items[i].Active === 1 && _this.items[i].Instock > 0) {
                                    _this.activeItems.push(_this.items[i]);
                                }
                            }
                            // this.initializeItems();
                            _this.initializeActiveItems();
                            _this.initializeInactiveItems();
                            loading.dismiss();
                            _this.databaseprovider.setupdateitems(0);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemsPage.prototype.sorting = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.sortActive === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.sortItems();
                        this.inactiveItems = [];
                        this.activeItems = [];
                        for (i = 0; i < this.items.length; i++) {
                            if (this.items[i].Active === 0 || this.items[i].Instock === 0) {
                                this.inactiveItems.push(this.items[i]);
                            }
                            if (this.items[i].Active === 1 && this.items[i].Instock > 0) {
                                this.activeItems.push(this.items[i]);
                            }
                        }
                        // this.initializeItems();
                        this.initializeActiveItems();
                        this.initializeInactiveItems();
                        this.sortActive = 1;
                        this.sortColor = 'solid';
                        loading.dismiss();
                        return [3 /*break*/, 4];
                    case 3:
                        this.Unsorting();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ItemsPage.prototype.Unsorting = function () {
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
                        // this.sortItems();
                        this.items = [];
                        this.syncService.getAllItems().then(function (data) {
                            _this.items = data;
                            _this.inactiveItems = [];
                            _this.activeItems = [];
                            for (var i = 0; i < _this.items.length; i++) {
                                if (_this.items[i].Active === 0 || _this.items[i].Instock === 0) {
                                    _this.inactiveItems.push(_this.items[i]);
                                }
                                if (_this.items[i].Active === 1 && _this.items[i].Instock > 0) {
                                    _this.activeItems.push(_this.items[i]);
                                }
                            }
                            // this.initializeItems();
                            _this.initializeActiveItems();
                            _this.initializeInactiveItems();
                            _this.sortActive = 0;
                            _this.sortColor = 'outline';
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__["SyncService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] }
    ]; };
    ItemsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! raw-loader!./items.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/items/items.page.html"),
            styles: [__webpack_require__(/*! ./items.page.scss */ "./src/app/pages/items/items.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__["SyncService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]])
    ], ItemsPage);
    return ItemsPage;
}());



/***/ })

}]);
//# sourceMappingURL=items-items-module-es5.js.map