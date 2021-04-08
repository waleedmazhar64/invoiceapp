(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-additem-menu-additem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu-additem/menu-additem.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu-additem/menu-additem.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-icon padding  name=\"close\" (click)=\"close()\"></ion-icon>\n      </ion-buttons>\n      <ion-title>New Item</ion-title>\n      <ion-label padding slot=\"end\" (click)=\"save()\">Save</ion-label>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <!-- <ion-item lines=\"none\">\n        <ion-label style=\"color:royalblue;\">\n            <h2 text-capitalize >Description</h2>\n        </ion-label>\n    </ion-item>\n      <ion-item>\n          <ion-input placeholder=\"Tap here to add description\"  type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"item.Description\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n          <ion-label style=\"color:royalblue;\">\n              <h2 text-capitalize >Rate</h2>\n          </ion-label>\n      </ion-item>\n        <ion-item>\n            <ion-input placeholder=\"PKR0.00\"  type=\"number\" style=\"border: none;text-align: left;\" [(ngModel)]=\"item.Rate\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n            <ion-label style=\"color:royalblue;\">\n                <h2 text-capitalize >Cost</h2>\n            </ion-label>\n        </ion-item>\n          <ion-item>\n              <ion-input placeholder=\"PKR0.00\"  type=\"number\" style=\"border: none;text-align: left;\" [(ngModel)]=\"item.Cost\"></ion-input>\n          </ion-item> -->\n          <form [formGroup]=\"loginform\">\n                <ion-grid>\n                    <ion-row justify-content-center>\n                      <ion-col class=\"col-md-6\">\n                            <ion-item lines=\"none\">\n                                    <ion-label style=\"color:royalblue;\">\n                                        <h2 text-capitalize >Description</h2>\n                                    </ion-label>\n                                </ion-item>\n                                  <ion-item>\n                                      <ion-input placeholder=\"Tap here to add description\" formControlName=\"Description\"  type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"item.Description\"></ion-input>\n                                  </ion-item>\n                          <ng-container *ngFor=\"let error of errormessages.Description\">\n                            <div  style=\"color: red;\" *ngIf=\"loginform.get('Description').hasError(error.type) && (loginform.get('Description').dirty || loginform.get('Description').touched)\">\n                              *{{ error.message }}\n                            </div>\n                          </ng-container>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row justify-content-center>\n                         <ion-col class=\"col-md-6\">\n                                <ion-item lines=\"none\">\n                                        <ion-label style=\"color:royalblue;\">\n                                            <h2 text-capitalize >Rate</h2>\n                                        </ion-label>\n                                    </ion-item>\n                                      <ion-item>\n                                          <ion-input placeholder=\"PKR0.00\" formControlName=\"Rate\"  type=\"number\" style=\"border: none;text-align: left;\" [(ngModel)]=\"item.Rate\"></ion-input>\n                                      </ion-item>\n                             <ng-container *ngFor=\"let error of errormessages.Rate\">\n                               <div style=\"color: red;\" *ngIf=\"loginform.get('Rate').hasError(error.type) && (loginform.get('Rate').dirty || loginform.get('Rate').touched)\">\n                                 *{{ error.message }}\n                               </div>\n                             </ng-container>\n                         </ion-col>\n                       </ion-row>\n                       <ion-row justify-content-center>\n                            <ion-col class=\"col-md-6\">\n                                    <ion-item lines=\"none\">\n                                            <ion-label style=\"color:royalblue;\">\n                                                <h2 text-capitalize >Cost</h2>\n                                            </ion-label>\n                                        </ion-item>\n                                          <ion-item>\n                                              <ion-input placeholder=\"PKR0.00\" formControlName=\"Cost\"  type=\"number\" style=\"border: none;text-align: left;\" [(ngModel)]=\"item.Cost\"></ion-input>\n                                          </ion-item>\n                                <ng-container *ngFor=\"let error of errormessages.Cost\">\n                                  <div style=\"color: red;\" *ngIf=\"loginform.get('Cost').hasError(error.type) && (loginform.get('Cost').dirty || loginform.get('Cost').touched)\">\n                                    *{{ error.message }}\n                                  </div>\n                                </ng-container>\n                            </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                    </form>          \n          \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/menu-additem/menu-additem.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/menu-additem/menu-additem.module.ts ***!
  \***********************************************************/
/*! exports provided: MenuAdditemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAdditemPageModule", function() { return MenuAdditemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/contacts */ "./node_modules/@ionic-native/contacts/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_additem_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu-additem.page */ "./src/app/pages/menu-additem/menu-additem.page.ts");













const routes = [
    {
        path: '',
        component: _menu_additem_page__WEBPACK_IMPORTED_MODULE_9__["MenuAdditemPage"]
    }
];
let MenuAdditemPageModule = class MenuAdditemPageModule {
};
MenuAdditemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_7__["Contacts"]
        ],
        declarations: [_menu_additem_page__WEBPACK_IMPORTED_MODULE_9__["MenuAdditemPage"]]
    })
], MenuAdditemPageModule);



/***/ }),

/***/ "./src/app/pages/menu-additem/menu-additem.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/menu-additem/menu-additem.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtYWRkaXRlbS9tZW51LWFkZGl0ZW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/menu-additem/menu-additem.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/menu-additem/menu-additem.page.ts ***!
  \*********************************************************/
/*! exports provided: MenuAdditemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAdditemPage", function() { return MenuAdditemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/contacts */ "./node_modules/@ionic-native/contacts/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
















let MenuAdditemPage = class MenuAdditemPage {
    constructor(location, alertCtrl, contacts, plt, http, nativeHttp, loadingCtrl, databaseservice, router, syncService, network, storage, datePipe, formbuilder) {
        this.location = location;
        this.alertCtrl = alertCtrl;
        this.contacts = contacts;
        this.plt = plt;
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.loadingCtrl = loadingCtrl;
        this.databaseservice = databaseservice;
        this.router = router;
        this.syncService = syncService;
        this.network = network;
        this.storage = storage;
        this.datePipe = datePipe;
        this.formbuilder = formbuilder;
        this.tblName = "items";
        this.acttype = "added";
        this.lgdate = "2019-11-21";
        this.getId = [];
        this.item = {
            AccountId: '113008225657937776461',
            Description: '',
            Rate: '',
            Cost: ''
        };
        this.errormessages = {
            Description: [
                { type: 'requird', message: 'First Name is required' },
                { type: 'pattern', message: 'Enter valid is required' }
            ],
            Rate: [
                { type: 'requird', message: 'Email is required' },
                { type: 'pattern', message: 'Enter valid is required' }
            ],
            Cost: [
                { type: 'requird', message: 'Email is required' },
                { type: 'pattern', message: 'Enter valid is required' }
            ],
        };
        this.storage.get('userId').then((val) => {
            this.usdId = val;
            console.log(this.usdId);
        });
        this.getformattedDate();
        this.loginform = this.formbuilder.group({
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
            ])),
            Rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
            ])),
            Cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
            ])),
        });
    }
    ngOnInit() {
    }
    getformattedDate() {
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
    }
    close() {
        this.location.back();
    }
    save() {
        debugger;
        if ((this.item.Description.length > 0 && (this.item.Cost !== null && this.item.Cost !== '') && (this.item.Rate !== null && this.item.Rate !== ''))) {
            //this.getDataNativeHttp();
            // this.addItem();
            if (this.loginform.valid === true) {
                this.addItem();
                //this.getCid();
            }
            else {
                alert('Kindly enter correct information in fields');
            }
        }
        else {
            this.alertCtrl.create({
                header: 'Warning',
                message: 'Kindly Fill All Fields',
                buttons: [
                    {
                        text: 'OK',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            }).then(alert => alert.present());
        }
    }
    getDataNativeHttp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            debugger;
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const url = this.databaseservice.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url + '/createItem.php', this.item, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                this.databaseservice.setupdateitems(1);
                this.router.navigate(['/menu/items']);
                // this.initializeItems();
            }, err => {
                loading.dismiss();
                this.databaseservice.setupdateitems(1);
                this.router.navigate(['/menu/items']);
                console.log('JS call error', err);
                const error = JSON.parse(err.error);
                alert(error.message);
                console.log('Native data:', JSON.parse(error));
            });
        });
    }
    AddLog() {
        if (this.usdId === 1) {
            this.acttype = 'You  added a new item';
        }
        else {
            this.acttype = 'You added a new item';
        }
        let now = new Date().toString();
        const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName, this.tblId, this.usdId, this.acttype, this.lgdate;
        debugger;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(data => {
            console.log("Log has been added");
            this.syncService.syncAddedLog();
            this.GetLogs();
        });
    }
    GetLogs() {
        this.syncService.getAllLogs().then(data => {
            console.log(data);
        });
    }
    getCid() {
        this.syncService.getItemssonspot().then(data => {
            this.getId = data;
            console.log(this.getId);
            this.tblId = this.getId[0].itemid;
            this.name = this.getId[0].Description;
            debugger;
            console.log(this.tblId);
            this.AddLog();
        });
    }
    addItem() {
        this.syncService.additem(this.item.Description, this.item.Rate, this.item.Cost)
            .then(data => {
            data;
            this.getCid();
            this.databaseservice.setupdateitems(1);
            this.router.navigate(['/menu/items']);
            if (this.network.type === 'none') {
            }
            else {
                debugger;
                this.syncAddedItems();
            }
        });
    }
    syncAddedItems() {
        this.syncService.syncAddedItems().then((data) => {
            if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                    IDs[i] = data[i].itemid;
                }
                const url = this.databaseservice.getURL();
                debugger;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url, {
                    'Name': 'syncAddedItems',
                    "Items": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    debugger;
                    if (g.success === 1) {
                        // alert('success');
                        this.syncService.updateSyncedItems(IDs).then((data) => {
                        });
                    }
                    else {
                        // alert('failed');
                    }
                    // this.initializeItems();
                }, err => {
                    console.log('JS call error', err);
                    const error = JSON.parse(err.error);
                    // alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
            }
            debugger;
        });
    }
};
MenuAdditemPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_4__["Contacts"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_9__["DatabaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__["SyncService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"] }
];
MenuAdditemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-additem',
        template: __webpack_require__(/*! raw-loader!./menu-additem.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu-additem/menu-additem.page.html"),
        styles: [__webpack_require__(/*! ./menu-additem.page.scss */ "./src/app/pages/menu-additem/menu-additem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_4__["Contacts"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_9__["DatabaseService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__["SyncService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]])
], MenuAdditemPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-additem-menu-additem-module-es2015.js.map