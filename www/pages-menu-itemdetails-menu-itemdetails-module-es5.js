(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-itemdetails-menu-itemdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu-itemdetails/menu-itemdetails.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu-itemdetails/menu-itemdetails.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-icon padding  name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n      </ion-buttons>\n      <ion-title>Details</ion-title>\n      <ion-label padding slot=\"end\" *ngIf=\"showEdit === 1\" (click)=\"edit()\">Edit</ion-label>\n      <ion-label *ngIf=\"item.Active == '1' && showEdit === 1\" padding slot=\"end\"  (click)=\"del()\">Delete</ion-label>\n      <ion-label *ngIf=\"item.Active == '0' && showEdit === 1\" padding slot=\"end\"  (click)=\"activate()\">Activate</ion-label>\n\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <ion-img src=\"assets/fill.png\"></ion-img>\n    </ion-avatar>\n    <ion-label>\n        <h2 text-capitalize>{{currency}} {{ item.Rate }}</h2>\n      </ion-label>\n      <!-- <ion-icon style=\"float:right;\" name=\"mail\" color=\"primary\"></ion-icon> -->\n  </ion-item>\n  <ion-item>\n      <ion-label>\n          <h2  text-capitalize style=\"color:royalblue;\">Description</h2>\n          <ion-label >\n              <p>{{ item.Description }}</p>\n          </ion-label>\n        </ion-label> \n    </ion-item>\n    <ion-item>\n        <ion-label>\n            <h2  text-capitalize style=\"color:royalblue;\">Cost</h2>\n            <ion-label >\n                <p>{{currency}} {{ item.Cost }}</p>\n            </ion-label>\n          </ion-label> \n      </ion-item>\n      <ion-item>\n        <ion-label>\n            <h2  text-capitalize style=\"color:royalblue;\">In Stock</h2>\n            <ion-label >\n                <p>{{ item.Instock }}</p>\n            </ion-label>\n          </ion-label> \n      </ion-item>\n    \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/menu-itemdetails/menu-itemdetails.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/menu-itemdetails/menu-itemdetails.module.ts ***!
  \*******************************************************************/
/*! exports provided: MenuItemdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemdetailsPageModule", function() { return MenuItemdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_itemdetails_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-itemdetails.page */ "./src/app/pages/menu-itemdetails/menu-itemdetails.page.ts");










var routes = [
    {
        path: '',
        component: _menu_itemdetails_page__WEBPACK_IMPORTED_MODULE_8__["MenuItemdetailsPage"]
    }
];
var MenuItemdetailsPageModule = /** @class */ (function () {
    function MenuItemdetailsPageModule() {
    }
    MenuItemdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
                _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ],
            declarations: [_menu_itemdetails_page__WEBPACK_IMPORTED_MODULE_8__["MenuItemdetailsPage"]]
        })
    ], MenuItemdetailsPageModule);
    return MenuItemdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu-itemdetails/menu-itemdetails.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/menu-itemdetails/menu-itemdetails.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtaXRlbWRldGFpbHMvbWVudS1pdGVtZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/menu-itemdetails/menu-itemdetails.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/menu-itemdetails/menu-itemdetails.page.ts ***!
  \*****************************************************************/
/*! exports provided: MenuItemdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemdetailsPage", function() { return MenuItemdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");













var MenuItemdetailsPage = /** @class */ (function () {
    function MenuItemdetailsPage(router, location, alertCtrl, loadingCtrl, databaseservice, nativeHttp, alrtCtrl, syncService, network, storage, datePipe, nav, events) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseservice = databaseservice;
        this.nativeHttp = nativeHttp;
        this.alrtCtrl = alrtCtrl;
        this.syncService = syncService;
        this.network = network;
        this.storage = storage;
        this.datePipe = datePipe;
        this.nav = nav;
        this.events = events;
        this.tblName = "items";
        this.acttype = "deactivated";
        this.lgdate = "2019-11-21";
        this.prev = '';
        this.item = {
            itemid: '',
            AccountId: '',
            Description: '',
            Rate: '',
            Cost: '',
            Active: '',
            Instock: 0,
            Sync: 0
        };
        this.currency = '';
        this.showEdit = 0;
        this.storage.get('app').then(function (val1) {
            if (val1 === 'invoice') {
                _this.storage.get('ID').then(function (val) {
                    _this.syncService.getbValue(val, 'Item Edit').then(function (data) {
                        _this.showEdit = data[0].bValue;
                    });
                });
            }
            else {
                _this.showEdit = 1;
            }
        });
        storage.get('currency').then(function (val) {
            if (val !== null) {
                _this.currency = val.toString();
            }
        });
        if (this.router.getCurrentNavigation().extras.state) {
            this.events.publish('refreshLogs', 'saad2', '');
            this.item = this.router.getCurrentNavigation().extras.state.edititem;
            this.id = this.router.getCurrentNavigation().extras.state.edititem.id;
            this.prev = this.router.getCurrentNavigation().extras.state.url;
            if (this.network.type === 'none') {
            }
            else {
                this.syncAddedItems();
            }
        }
        this.storage.get('userId').then(function (val) {
            _this.usdId = val;
            console.log(_this.usdId);
        });
        this.getformattedDate();
    }
    MenuItemdetailsPage.prototype.getformattedDate = function () {
        var dateObj = new Date();
        var year = dateObj.getFullYear().toString();
        var month = dateObj.getMonth().toString();
        var date = dateObj.getDate().toString();
        var monthArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        var hour = dateObj.getHours();
        var min = dateObj.getMinutes();
        var sec = dateObj.getSeconds();
        this.lgdate = date + '/' + monthArray[month] + '/' + year + '  ' + hour + ':' + min + ':' + sec;
        console.log(this.lgdate);
    };
    MenuItemdetailsPage.prototype.ngOnInit = function () {
    };
    MenuItemdetailsPage.prototype.back = function () {
        this.nav.navigateRoot(this.prev);
        // this.location.back();
    };
    MenuItemdetailsPage.prototype.edit = function () {
        var navigationExtras = {
            state: {
                edititem: this.item
            }
        };
        this.router.navigate(['menu-edititem'], navigationExtras);
    };
    MenuItemdetailsPage.prototype.shareALert = function (head, sub, msg) {
        var _this = this;
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'alertSize',
            buttons: [
                {
                    text: 'Delete',
                    cssClass: 'customClass',
                    role: 'cancel',
                    handler: function () {
                        console.log('yes');
                        // this.deleteItem();
                        _this.deleteItemlocaldb();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Confirm Ok');
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    MenuItemdetailsPage.prototype.del = function () {
        this.shareALert("Warning", '', 'Are you sure you want to delete this item?');
    };
    MenuItemdetailsPage.prototype.deleteItem = function () {
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
                        url = this.databaseservice.getURL();
                        debugger;
                        this.nativeHttp.setDataSerializer("json");
                        nativeCall = this.nativeHttp.post(url + '/deleteItem.php', {
                            "itemid": this.item.itemid
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            _this.databaseservice.setupdateitems(1);
                            _this.router.navigate(['/menu/items']);
                            // this.initializeItems();
                        }, function (err) {
                            loading.dismiss();
                            console.log('JS call error', err);
                            var error = JSON.parse(err.error);
                            alert(error.message);
                            console.log('Native data:', JSON.parse(error));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuItemdetailsPage.prototype.activateALert = function (head, sub, msg) {
        var _this = this;
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'alertSize',
            buttons: [
                {
                    text: 'Activate',
                    cssClass: 'cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('yes');
                        //  this.activateItem();
                        _this.activateItemlocaldb();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Confirm Ok');
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    MenuItemdetailsPage.prototype.activate = function () {
        this.activateALert("Warning", '', 'Are you sure you want to activate this item?');
    };
    MenuItemdetailsPage.prototype.activateItem = function () {
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
                        url = this.databaseservice.getURL();
                        debugger;
                        this.nativeHttp.setDataSerializer("json");
                        nativeCall = this.nativeHttp.post(url + '/activateItem.php', {
                            "itemid": this.item.itemid
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            _this.databaseservice.setupdateitems(1);
                            _this.router.navigate(['/menu/items']);
                            // this.initializeItems();
                        }, function (err) {
                            loading.dismiss();
                            console.log('JS call error', err);
                            var error = JSON.parse(err.error);
                            alert(error.message);
                            console.log('Native data:', JSON.parse(error));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuItemdetailsPage.prototype.AddLog = function () {
        var _this = this;
        if (this.acttype === 'deactivated') {
            if (this.usdId === 1) {
                this.acttype = 'You deactivated item';
            }
            else {
                this.acttype = 'You deactivated item';
            }
        }
        if (this.acttype === 'activated') {
            if (this.usdId === 1) {
                this.acttype = 'You activated item';
            }
            else {
                this.acttype = 'You activated item';
            }
        }
        this.name = this.item.Description;
        this.tblName, this.tblId, this.usdId, this.acttype, this.lgdate;
        var now = new Date().toString();
        var a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        debugger;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(function (data) {
            console.log("Log has been added");
            _this.syncService.syncAddedLog();
            _this.GetLogs();
        });
    };
    MenuItemdetailsPage.prototype.GetLogs = function () {
        this.syncService.getAllLogs().then(function (data) {
            console.log(data);
        });
    };
    MenuItemdetailsPage.prototype.deleteItemlocaldb = function () {
        var _this = this;
        if (this.item.Sync === 1) {
            this.item.Sync = 2;
        }
        this.syncService.deleteItem(this.item.itemid, this.item.Sync)
            .then(function (data) {
            data;
            _this.tblId = _this.item.itemid;
            _this.AddLog();
            _this.databaseservice.setupdateitems(1);
            _this.router.navigate(['/menu/items']);
            if (_this.network.type === 'none') {
            }
            else {
                debugger;
                _this.syncUpdatedItems();
            }
        });
    };
    MenuItemdetailsPage.prototype.activateItemlocaldb = function () {
        var _this = this;
        if (this.item.Sync === 1) {
            this.item.Sync = 2;
        }
        this.syncService.activateItem(this.item.itemid, this.item.Sync)
            .then(function (data) {
            data;
            _this.tblId = _this.item.itemid;
            _this.acttype = "activated";
            _this.AddLog();
            _this.databaseservice.setupdateitems(1);
            _this.router.navigate(['/menu/items']);
            if (_this.network.type === 'none') {
            }
            else {
                debugger;
                _this.syncUpdatedItems();
            }
        });
    };
    MenuItemdetailsPage.prototype.syncUpdatedItems = function () {
        var _this = this;
        this.syncService.syncUpdatedItems().then(function (data) {
            if (data.length > 0) {
                var IDs_1 = [];
                for (var i = 0; i < data.length; i++) {
                    IDs_1[i] = data[i].itemid;
                }
                var url = _this.databaseservice.getURL();
                debugger;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncUpdatedItems',
                    "Items": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        //alert('success Updated');
                        _this.syncService.updateSyncedItems(IDs_1).then(function (data) {
                        });
                    }
                    else {
                        //  alert('failed');
                    }
                    // this.initializeItems();
                }, function (err) {
                    console.log('JS call error', err);
                    var error = JSON.parse(err.error);
                    // alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
            }
            debugger;
        });
    };
    MenuItemdetailsPage.prototype.syncAddedItems = function () {
        var _this = this;
        this.syncService.syncAddedItems().then(function (data) {
            if (data.length > 0) {
                var IDs_2 = [];
                for (var i = 0; i < data.length; i++) {
                    IDs_2[i] = data[i].itemid;
                }
                var url = _this.databaseservice.getURL();
                debugger;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncAddedItems',
                    "Items": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        _this.syncService.updateSyncedItems(IDs_2).then(function (data) {
                        });
                    }
                    else {
                        // alert('failed');
                    }
                    // this.initializeItems();
                }, function (err) {
                    console.log('JS call error', err);
                    var error = JSON.parse(err.error);
                    // alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
            }
            debugger;
        });
    };
    MenuItemdetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__["SyncService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] }
    ]; };
    MenuItemdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-itemdetails',
            template: __webpack_require__(/*! raw-loader!./menu-itemdetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu-itemdetails/menu-itemdetails.page.html"),
            styles: [__webpack_require__(/*! ./menu-itemdetails.page.scss */ "./src/app/pages/menu-itemdetails/menu-itemdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__["SyncService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])
    ], MenuItemdetailsPage);
    return MenuItemdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-itemdetails-menu-itemdetails-module-es5.js.map