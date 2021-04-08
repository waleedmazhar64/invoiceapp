(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vendors-add-add-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendors/add/add.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendors/add/add.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-icon padding  name=\"close\" (click)=\"close()\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Add Vendor</ion-title>\n    <ion-label padding slot=\"end\" (click)=\"save()\">Save</ion-label>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-item>\n    <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n    <ion-input placeholder=\"Vendor Name\"  type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"vendor.Name\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\n    <ion-input placeholder=\"Address\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"vendor.Address\"></ion-input>\n </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n    <ion-input placeholder=\"Phone\" type=\"tel\" style=\"border: none;text-align: left;\" [(ngModel)]=\"vendor.Phone\"></ion-input>\n </ion-item>\n   <ion-item>\n     <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n     <ion-input placeholder=\"Email\"  type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"vendor.Email\"></ion-input>\n   </ion-item> -->\n   <form [formGroup]=\"loginform\">\n      <ion-grid>\n          <ion-row justify-content-center>\n            <ion-col class=\"col-md-6\">\n                <ion-item>\n                    <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n\n                    <ion-input type=\"text\" placeholder=\"Vendor Name\"  formControlName=\"Name\" [(ngModel)]=\"vendor.Name\"></ion-input>\n                </ion-item>\n                <ng-container *ngFor=\"let error of errormessages.Name\">\n                  <div  style=\"color: red;\" *ngIf=\"loginform.get('Name').hasError(error.type) && (loginform.get('Name').dirty || loginform.get('Name').touched)\">\n                    *{{ error.message }}\n                  </div>\n                </ng-container>\n            </ion-col>\n          </ion-row>\n          <ion-row justify-content-center>\n               <ion-col class=\"col-md-6\">\n                   <ion-item>\n                      <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\n                      <ion-input type=\"text\" placeholder=\"Address\"  formControlName=\"Address\" [(ngModel)]=\"vendor.Address\"></ion-input>\n                   </ion-item>\n                   <ng-container *ngFor=\"let error of errormessages.Address\">\n                     <div style=\"color: red;\" *ngIf=\"loginform.get('Address').hasError(error.type) && (loginform.get('Address').dirty || loginform.get('Address').touched)\">\n                       *{{ error.message }}\n                     </div>\n                   </ng-container>\n               </ion-col>\n             </ion-row>\n             <ion-row justify-content-center>\n                  <ion-col class=\"col-md-6\">\n                      <ion-item>\n                          <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n                          <ion-input type=\"tel\" placeholder=\"Phone\" formControlName=\"Phone\" [(ngModel)]=\"vendor.Phone\"></ion-input>\n                      </ion-item>\n                      <ng-container *ngFor=\"let error of errormessages.Phone\">\n                        <div style=\"color: red;\" *ngIf=\"loginform.get('Phone').hasError(error.type) && (loginform.get('Phone').dirty || loginform.get('Phone').touched)\">\n                          *{{ error.message }}\n                        </div>\n                      </ng-container>\n                  </ion-col>\n                </ion-row>\n              \n      </ion-grid>\n      </form>\n      <ion-row justify-content-center>\n          <ion-col class=\"col-md-6\">\n              <ion-item>\n                 <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n                  <ion-input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"vendor.Email\"></ion-input>\n              </ion-item>\n          </ion-col>\n        </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/vendors/add/add.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/vendors/add/add.module.ts ***!
  \*************************************************/
/*! exports provided: AddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPageModule", function() { return AddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/contacts */ "./node_modules/@ionic-native/contacts/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add.page */ "./src/app/pages/vendors/add/add.page.ts");












const routes = [
    {
        path: '',
        component: _add_page__WEBPACK_IMPORTED_MODULE_9__["AddPage"]
    }
];
let AddPageModule = class AddPageModule {
};
AddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_7__["Contacts"]
        ],
        declarations: [_add_page__WEBPACK_IMPORTED_MODULE_9__["AddPage"]]
    })
], AddPageModule);



/***/ }),

/***/ "./src/app/pages/vendors/add/add.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/vendors/add/add.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvcnMvYWRkL2FkZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/vendors/add/add.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/vendors/add/add.page.ts ***!
  \***********************************************/
/*! exports provided: AddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPage", function() { return AddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/contacts */ "./node_modules/@ionic-native/contacts/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
















let AddPage = class AddPage {
    constructor(router, location, alertCtrl, contacts, plt, http, nativeHttp, loadingCtrl, databaseservice, databaseprovider, syncService, network, storage, datePipe, formbuilder) {
        this.router = router;
        this.location = location;
        this.alertCtrl = alertCtrl;
        this.contacts = contacts;
        this.plt = plt;
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.loadingCtrl = loadingCtrl;
        this.databaseservice = databaseservice;
        this.databaseprovider = databaseprovider;
        this.syncService = syncService;
        this.network = network;
        this.storage = storage;
        this.datePipe = datePipe;
        this.formbuilder = formbuilder;
        this.tblName = "vendors";
        this.acttype = "added";
        this.lgdate = "2019-11-21";
        this.getId = [];
        this.vendor = {
            Name: '',
            Address: '',
            Phone: '',
            Email: ''
        };
        this.errormessages = {
            Name: [
                { type: 'requird', message: 'First Name is required' },
                { type: 'pattern', message: 'Enter valid is required' }
            ],
            Address: [
                { type: 'requird', message: 'Email is required' },
                { type: 'pattern', message: 'Enter valid is required' }
            ],
            Phone: [
                { type: 'requird', message: 'Email is required' },
                { type: 'pattern', message: 'Enter valid phone number' },
                { type: 'minlength', message: 'Enter valid phone number' },
                { type: 'maxlength', message: 'Enter valid phone number' }
            ],
        };
        this.storage.get('userId').then((val) => {
            this.usdId = val;
            console.log(this.usdId);
        });
        this.getformattedDate();
        this.loginform = this.formbuilder.group({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
            ])),
            Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
            ])),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
                //Validators.minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].minLength(11),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].maxLength(11)
            ])),
        });
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
    ngOnInit() {
    }
    close() {
        this.location.back();
    }
    save() {
        if ((this.vendor.Name.length > 0 && this.vendor.Address.length > 0)) {
            //this.getDataNativeHttp();
            // this.addVendor();
            if (this.loginform.valid === true) {
                this.addVendor();
                //this.getCid();
            }
            else {
                alert('Kindly enter correct information in fields');
            }
        }
        else {
            this.alertCtrl.create({
                header: 'Warning',
                message: 'Kindly fill Vendor Name and Address Field(s)',
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
            const url = this.databaseprovider.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url + '/createVendor.php', this.vendor, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                this.databaseservice.setupdatevendors(1);
                this.router.navigate(['/menu/vendors']);
                // this.initializeItems();
            }, err => {
                loading.dismiss();
                this.databaseservice.setupdatevendors(1);
                this.router.navigate(['/menu/vendors']);
                console.log('JS call error', err);
                const error = JSON.parse(err.error);
                alert(error.message);
                console.log('Native data:', JSON.parse(error));
            });
        });
    }
    AddLog() {
        if (this.usdId === 1) {
            this.acttype = 'You added a new vendor';
        }
        else {
            this.acttype = 'You added a new vendor';
        }
        this.name;
        debugger;
        let now = new Date().toString();
        const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
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
        this.syncService.getVendorssonspot().then(data => {
            this.getId = data;
            console.log(this.getId);
            this.tblId = this.getId[0].ID;
            this.name = this.getId[0].Name;
            debugger;
            console.log(this.tblId);
            this.AddLog();
        });
    }
    addVendor() {
        // tslint:disable-next-line: max-line-length
        this.syncService.addvendor(this.vendor.Name, this.vendor.Address, this.vendor.Phone, this.vendor.Email)
            .then(data => {
            data;
            this.getCid();
            this.databaseservice.setupdatevendors(1);
            this.router.navigate(['/menu/vendors']);
            if (this.network.type === 'none') {
            }
            else {
                this.syncService.syncAddedVendors().then((data) => {
                    if (data.length > 0) {
                        const IDs = [];
                        for (let i = 0; i < data.length; i++) {
                            IDs[i] = data[i].ID;
                        }
                        const url = this.databaseprovider.getURL();
                        debugger;
                        this.nativeHttp.setDataSerializer("json");
                        let nativeCall = this.nativeHttp.post(url, {
                            'Name': 'syncAddedVendors',
                            "Vendors": data
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => { }))
                            .subscribe(data => {
                            console.log('Native data:', data);
                            const g = JSON.parse(data.data);
                            if (g.success === 1) {
                                // alert('success');
                                console.log('start');
                                this.syncService.updateSyncedVendors(IDs).then((data) => {
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
                        debugger;
                    }
                });
            }
        });
    }
};
AddPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_5__["Contacts"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__["SyncService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"] }
];
AddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: __webpack_require__(/*! raw-loader!./add.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendors/add/add.page.html"),
        styles: [__webpack_require__(/*! ./add.page.scss */ "./src/app/pages/vendors/add/add.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_5__["Contacts"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__["SyncService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]])
], AddPage);



/***/ })

}]);
//# sourceMappingURL=pages-vendors-add-add-module-es2015.js.map