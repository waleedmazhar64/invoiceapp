(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n  <ion-menu contentId=\"content\">\n \n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n \n    <ion-content>\n      <ion-list *ngIf=\"images.length === 0\" >\n                  <div class=\"mylogo\">\n                      <img  style=\"border-radius:50%;\"  src=\"{{imageUrl}}\" height=\"60\" width=\"60\">\n                      <p  class=\"margin-top-m margin-bottom-m\">{{company}}</p>\n                  </div>\n      </ion-list>\n      <ion-list *ngFor=\"let img of images; index as pos\" >\n          \n        <div class=\"mylogo\">\n            <img  style=\"border-radius:50%;\" *ngIf=\"images.length > 0\" [src]=\"img.path\" height=\"60\" width=\"60\">\n            <p  class=\"margin-top-m margin-bottom-m\">{{company}}</p>\n        </div>\n            \n         </ion-list>\n      <!-- <ion-list>          \n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath.startsWith(p.url)\">\n            <ion-label>\n              {{ p.title }}\n            </ion-label>\n          </ion-item>\n          <ion-item button *ngIf=\"p.childern?.length > 0\" (click)=\"p.open = !p.open\"\n              [class.active-parent]=\"!!p.open\" detail=\"false\">\n              <ion-icon slot=\"end\" name=\"arrow-forward\" *ngIf=\"!p.open\"></ion-icon>\n              <ion-icon slot=\"end\" name=\"arrow-down\" *ngIf=\"!!p.open\"></ion-icon>\n              <ion-label>\n                  {{ p.title }}\n                </ion-label>\n            </ion-item>\n            <ion-list *ngIf=\"!!p.open\">\n                <ion-menu-toggle>\n                    <ion-item class=\"sub-item\" *ngFor=\"let sub of p.childern\" [routerLink]=\"sub.url\" routerDirection=\"root\" routerLinkActive=\"active\" >\n                      <ion-icon [name]=\"sub.icon\" slot=\"start\"></ion-icon>\n                      <ion-label>\n                        {{ sub.title }}\n                      </ion-label>\n                    </ion-item>    \n                  </ion-menu-toggle>\n            </ion-list>\n  \n        </ion-menu-toggle>\n        \n\n        <ion-item (click)=\"getUp()\" routerLink=\"/login\" routerDirection=\"root\">Logout</ion-item>\n      </ion-list> -->\n      \n    \n\n      <div *ngFor=\"let p of pages\">\n          <ion-menu-toggle *ngIf=\"p.url && p.childern == undefined\">\n            <!-- <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\" > -->\n              <ion-item (click)=\"hi(p.url)\" routerLinkActive=\"active\" >\n\n              <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\n              <ion-label>\n                {{ p.title }}\n              </ion-label>\n            </ion-item>\n\n          </ion-menu-toggle>\n          <ion-item  *ngIf=\"p.childern?.length > 0\" >\n            <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\n           \n            <ion-label   (click)=\"hi(p.url)\">\n                {{ p.title }}\n              </ion-label>\n              <ion-icon item-end name=\"arrow-forward\" *ngIf=\"!p.open\"  (click)=\"p.open = !p.open\"\n            [class.active-parent]=\"!!p.open\" detail=\"false\"></ion-icon>\n            <ion-icon item-end name=\"arrow-down\" *ngIf=\"!!p.open\" (click)=\"p.open = !p.open\"\n            [class.active-parent]=\"!!p.open\" detail=\"false\"></ion-icon>\n          </ion-item>\n          <ion-list *ngIf=\"!!p.open\">\n              <ion-menu-toggle>\n                  <ion-item class=\"sub-item\" *ngFor=\"let sub of p.childern\" [routerLink]=\"sub.url\" routerDirection=\"root\" routerLinkActive=\"active\" >\n                    <ion-icon slot=\"start\"></ion-icon>\n                    <ion-icon class=\"icon\" no-padding [name]=\"sub.icon\" slot=\"start\"></ion-icon>\n                    {{sub.title}}\n                   \n                    <!-- <ion-label>\n                        \n                      {{ sub.title }}\n                    </ion-label> -->\n                  </ion-item>    \n                </ion-menu-toggle>\n          </ion-list>\n\n        </div>\n \n    </ion-content>\n    <ion-footer>\n        <ion-menu-toggle auto-hide=\"false\">\n       <ion-row auto-hide=\"false\">\n          <ion-col  >\n            <!-- <ion-tab-button tab=\"schedule\" [routerLink]=\"'/menu/clients'\" routerDirection=\"root\" > -->\n            <ion-tab-button tab=\"schedule\" (click)=\"hi('/menu/clients')\" routerDirection=\"root\" >\n\n              <ion-icon name=\"person-add\"></ion-icon>\n              <ion-label>Client</ion-label>\n              <!-- <ion-badge>6</ion-badge> -->\n            </ion-tab-button>\n          </ion-col>\n          <ion-col  >\n            <!-- <ion-tab-button tab=\"schedule\" [routerLink]=\"/menu/logs\" routerDirection=\"root\"> -->\n            <ion-tab-button tab=\"schedule\" (click)=\"hi('/menu/logs')\" routerDirection=\"root\">\n             <ion-icon name=\"albums\"></ion-icon>\n              <ion-label>Logs</ion-label>\n              <!-- <ion-badge>6</ion-badge> -->\n            </ion-tab-button>\n          </ion-col>\n          <ion-col  >\n            <!-- <ion-tab-button tab=\"schedule\" [routerLink]=\"'/menu/settings'\" routerDirection=\"root\"> -->\n            <ion-tab-button tab=\"schedule\" (click)=\"hi('/menu/settings')\" routerDirection=\"root\">\n              <ion-icon name=\"cog\"></ion-icon>\n              <ion-label>Settings</ion-label>\n            </ion-tab-button>\n           </ion-col>\n           <ion-col  >\n            <!-- <ion-tab-button tab=\"schedule\" [routerLink]=\"'/menu/settings'\" routerDirection=\"root\"> -->\n            <ion-tab-button tab=\"schedule\" (click)=\"exitApp()\" routerDirection=\"root\">\n              <!-- <ion-icon name=\"cog\"></ion-icon> -->\n              <ion-icon name=\"exit\"></ion-icon>\n              <ion-label>Exit</ion-label>\n            </ion-tab-button>\n           </ion-col>\n      </ion-row> \n    </ion-menu-toggle>\n  </ion-footer>\n  </ion-menu>\n \n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n \n</ion-split-pane>"

/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");









var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_8__["MenuPage"],
        children: [
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardPageModule' },
            // { path: 'estimate', loadChildren: '../estimate/estimate.module#EstimatePageModule' },
            { path: 'invoice', loadChildren: '../invoice/invoice.module#InvoicePageModule' },
            { path: 'purchased-orders', loadChildren: '../purchased-orders/purchased-orders.module#PurchasedOrdersPageModule' },
            { path: 'trash-purchased-orders', loadChildren: '../trash-purchased-orders/trash-purchased-orders.module#TrashPurchasedOrdersPageModule' },
            { path: 'creditmemos', loadChildren: '../credit-memos/credit-memos.module#CreditMemosPageModule' },
            { path: 'trash-credit-memos', loadChildren: '../trash-credit-memos/trash-credit-memos.module#TrashCreditMemosPageModule' },
            { path: 'expenses', loadChildren: '../expenses/expenses.module#ExpensesPageModule' },
            { path: 'reports', loadChildren: '../reports/reports.module#ReportsPageModule' },
            { path: 'clients', loadChildren: '../clients/clients.module#ClientsPageModule' },
            { path: 'items', loadChildren: '../items/items.module#ItemsPageModule' },
            { path: 'settings', loadChildren: '../settings/settings.module#SettingsPageModule' },
            { path: 'vendors', loadChildren: '../vendors/vendors.module#VendorsPageModule' },
            {
                path: 'logs',
                loadChildren: function () { return __webpack_require__.e(/*! import() | logs-logs-module */ "logs-logs-module").then(__webpack_require__.bind(null, /*! ../logs/logs.module */ "./src/app/pages/logs/logs.module.ts")).then(function (m) { return m.LogsPageModule; }); }
            },
            {
                path: 'trash-invoices',
                loadChildren: '../trash-invoices/trash-invoices.module#TrashInvoicesPageModule'
            },
        ]
    }
];
// const footer: Routes = [
//   {
//     path: '',
//     component: MenuPage,
//     children: [
//       { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardPageModule' },
//       // { path: 'estimate', loadChildren: '../estimate/estimate.module#EstimatePageModule' },
//       { path: 'invoice', loadChildren: '../invoice/invoice.module#InvoicePageModule' },
//       { path: 'expenses', loadChildren: '../expenses/expenses.module#ExpensesPageModule' },
//       { path: 'reports', loadChildren: '../reports/reports.module#ReportsPageModule' },
//       { path: 'settings', loadChildren: '../settings/settings.module#SettingsPageModule' },
//     ]
//   }
// ];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
                _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"]
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_8__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid var(--ion-color-primary);\n}\n\n.mylogo {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9DOlxcd2FtcDY0XFx3d3dcXGludm9pY2UucGsvc3JjXFxhcHBcXHBhZ2VzXFxtZW51XFxtZW51LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0FDQ0o7O0FEQ0E7RUFFSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtaXRlbSB7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4ubXlsb2dvIHtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiLmFjdGl2ZS1pdGVtIHtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5teWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");



// import { GooglePlus } from '@ionic-native/google-plus/ngx';










var STORAGE_KEY = 'my_images';
var MenuPage = /** @class */ (function () {
    function MenuPage(events, databaseprovider, router, 
    //private googlePlus: GooglePlus,
    storage, menuCtrl, alertController, nav, platform, 
    // private camera: Camera,
    syncService, file, webview, datePipe, googlePlus) {
        var _this = this;
        this.events = events;
        this.databaseprovider = databaseprovider;
        this.router = router;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.alertController = alertController;
        this.nav = nav;
        this.platform = platform;
        this.syncService = syncService;
        this.file = file;
        this.webview = webview;
        this.datePipe = datePipe;
        this.googlePlus = googlePlus;
        this.images = [];
        this.accounts = [];
        this.isLoggedIn = false;
        this.selectedPath = '';
        this.businessName = '';
        this.pages = [
            {
                title: 'Dashboard',
                url: '/menu/dashboard',
                icon: 'clock',
            },
            {
                title: 'Invoice',
                url: '/menu/invoice',
                icon: 'paper',
                childern: [
                    {
                        title: 'Trash',
                        url: '/menu/trash-invoices',
                        icon: 'trash'
                    },
                ]
            },
            {
                title: 'Purchased Orders',
                url: '/menu/purchased-orders',
                icon: 'cart',
                childern: [
                    {
                        title: 'Trash',
                        url: '/menu/trash-purchased-orders',
                        icon: 'trash'
                    },
                ]
            },
            {
                title: 'Vendors',
                url: '/menu/vendors',
                icon: 'person',
            },
            {
                title: 'Items',
                url: '/menu/items',
                icon: 'logo-dropbox',
            },
            // {
            //   title: 'Users',
            //   url: '/menu/users',
            //   icon: 'person',
            // },
            // {
            //   title: 'Credit Memos',
            //   url: '/menu/creditmemos',
            //   icon: 'copy',
            //   childern: [
            //     {
            //       title: 'Trash',
            //       url: '/menu/trash-credit-memos',
            //       icon: 'trash'
            //     },
            //   ]
            // },
            {
                title: 'Expenses',
                url: '/menu/expenses',
                icon: 'book',
            },
            {
                title: 'Reports',
                url: '/menu/reports',
                icon: 'copy',
            },
            // {
            //   title: 'Reports',
            //   url: '/menu/reports',
            //   icon: 'browsers',
            // },
            {
                title: 'Logout',
                // url: '/menu/settings',
                icon: 'log-out'
            }
        ];
        this.platform.ready().then(function () {
            _this.loadStoredImages();
        });
        events.subscribe('user:created', function (user, time) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.company = time;
            _this.platform.ready().then(function () {
                _this.loadStoredImages();
            });
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]; })).subscribe(function (route) {
        });
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
        events.subscribe('hello', function (name) {
            // user and time are the same arguments passed in `events.publish(user, time)`
            _this.storage.get('id').then(function (val) {
                console.log(val);
                _this.find = val;
            });
            storage.get('COM').then(function (val) {
                _this.company = val;
            });
        });
        storage.get('COM').then(function (val) {
            _this.company = val;
        });
        //   storage.get('imgUrl').then((val)=>{
        //    this.imageUrl=val;
        //  });
        storage.get('menuLogo').then(function (val) {
            _this.imageUrl = val;
        });
    }
    MenuPage.prototype.loadStoredImages = function () {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            if (images) {
                var arr = JSON.parse(images);
                _this.images = [];
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var img = arr_1[_i];
                    var filePath = _this.file.dataDirectory + img;
                    var resPath = _this.pathForImage(filePath);
                    // tslint:disable-next-line: object-literal-shorthand
                    _this.images.push({ name: img, path: resPath, filePath: filePath });
                    console.log(images.resPath);
                }
            }
        });
    };
    MenuPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    MenuPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('id').then(function (val) {
            console.log(val);
            _this.find = val;
        });
        this.storage.get('COM').then(function (val) {
            _this.company = val;
        });
    };
    MenuPage.prototype.ngOnInit = function () {
    };
    // logout() {
    //   localStorage.setItem('file','false');
    //   this.googlePlus.logout()
    //     .then(res => {
    //       console.log(res);
    //       this.email = "";
    //       this.userId = "";   
    //       this.getStatus();
    //       this.storage.set('id',null);
    //     })
    //     .catch(err => console.error(err));
    // }
    MenuPage.prototype.removeAll = function () {
    };
    MenuPage.prototype.getUp = function () {
        // this.logout();
        this.removeAll();
    };
    MenuPage.prototype.getAll = function () {
        var _this = this;
        this.databaseprovider.getAccount(this.find).then(function (data) {
            _this.accounts = data;
            // this.company=this.accounts.companyName;
            // this.imageUrl=this.accounts.linkage;
            console.log(_this.company);
            console.log(_this.imageUrl);
        });
    };
    MenuPage.prototype.getStatus = function () {
        var _this = this;
        this.databaseprovider.getLogUpdate(this.find, this.isLoggedIn).then(function (data) {
            _this.loadInfo();
            _this.accounts = data;
        });
    };
    MenuPage.prototype.loadInfo = function () {
        var _this = this;
        this.databaseprovider.getAllAccount().then(function (data) {
            _this.accounts = data;
        });
    };
    MenuPage.prototype.hi = function (url) {
        url;
        this.databaseprovider.setFrom(0);
        // this.router.navigate([url]);
        this.nav.navigateRoot(url);
        this.menuCtrl.close();
    };
    MenuPage.prototype.clicked = function () {
        var _this = this;
        this.alertController.create({
            header: 'Business Name',
            inputs: [
                {
                    name: 'Name',
                    placeholder: 'Business Name',
                    value: this.businessName
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        console.log(data);
                        _this.businessName = data.Name;
                        _this.storage.set('COM', _this.businessName);
                        _this.company = _this.businessName;
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    MenuPage.prototype.exitApp = function () {
        // navigator['app'].exitApp();
        this.shareALert("Warning", '', 'Are you sure you want to exit app?');
    };
    MenuPage.prototype.shareALert = function (head, sub, msg) {
        var _this = this;
        this.alertController.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'alertSize',
            buttons: [
                {
                    text: 'Exit',
                    cssClass: 'customClass',
                    role: 'cancel',
                    handler: function () {
                        console.log('yes');
                        // this.deleteClient();
                        // navigator['app'].exitApp();
                        _this.logout();
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
    MenuPage.prototype.logout = function () {
        var _this = this;
        this.googlePlus.trySilentLogin({})
            .then(function (res) {
            console.log(res);
            _this.googlePlus.logout()
                .then(function (res) {
                console.log(res);
                _this.acttype = 'You Signed Out from app';
                _this.AddLog();
                _this.userId = '';
                _this.storage.set('ID', null);
                _this.storage.get('ID').then(function (val) {
                    console.log('After logout:' + val);
                });
                navigator['app'].exitApp();
            })
                .catch(function (err) { return console.error(err); });
        })
            .catch(function (err) { return console.error(err); });
    };
    MenuPage.prototype.AddLog = function () {
        var _this = this;
        //this.name = 'Purchased Order';
        var now = new Date().toString();
        var a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName = '';
        this.tblId = 0;
        this.name = '';
        // this.tblId = this.PO.ID;
        // this.tblId = this.syncService.getUpdatedPOID();
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(function (data) {
            console.log("Log has been added");
            _this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    };
    MenuPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__["SyncService"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__["GooglePlus"] }
    ]; };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__["SyncService"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_10__["GooglePlus"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module-es5.js.map