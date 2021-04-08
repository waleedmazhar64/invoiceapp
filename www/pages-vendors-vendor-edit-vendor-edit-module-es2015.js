(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vendors-vendor-edit-vendor-edit-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/vendors/vendor-edit/vendor-edit.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/vendors/vendor-edit/vendor-edit.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-icon padding  name=\"close\" (click)=\"close()\"></ion-icon>\n    </ion-buttons>\n    <ion-title *ngIf=\"edit == false\">Details</ion-title>\n    <ion-title *ngIf=\"edit == true\">Edit Vendor</ion-title>\n    <ion-label *ngIf=\"vendor.bActive === 1 && showEdit === 1\" slot=\"end\" (click)=\"del()\">Deactivate</ion-label>\n    <ion-label *ngIf=\"vendor.bActive === 0 && showEdit === 1\" slot=\"end\" (click)=\"activate()\">Activate</ion-label>\n    <ion-label *ngIf=\"edit == true\" padding slot=\"end\" (click)=\"save()\">Save</ion-label>\n    <ion-label *ngIf=\"edit == false && showEdit === 1\" padding slot=\"end\" (click)=\"edit = true\">Edit</ion-label>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content *ngIf=\"edit == true\">\n    <form [formGroup]=\"loginform\">\n        <ion-grid>\n            <ion-row justify-content-center>\n              <ion-col class=\"col-md-6\">\n                  <ion-item>\n                      <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n  \n                      <ion-input type=\"text\" placeholder=\"Vendor Name\"  formControlName=\"Name\" [(ngModel)]=\"vendor.Name\"></ion-input>\n                  </ion-item>\n                  <ng-container *ngFor=\"let error of errormessages.Name\">\n                    <div  style=\"color: red;\" *ngIf=\"loginform.get('Name').hasError(error.type) && (loginform.get('Name').dirty || loginform.get('Name').touched)\">\n                      *{{ error.message }}\n                    </div>\n                  </ng-container>\n              </ion-col>\n            </ion-row>\n            <ion-row justify-content-center>\n                 <ion-col class=\"col-md-6\">\n                     <ion-item>\n                        <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\n                        <ion-input type=\"text\" placeholder=\"Address\"  formControlName=\"Address\" [(ngModel)]=\"vendor.Address\"></ion-input>\n                     </ion-item>\n                     <ng-container *ngFor=\"let error of errormessages.Address\">\n                       <div style=\"color: red;\" *ngIf=\"loginform.get('Address').hasError(error.type) && (loginform.get('Address').dirty || loginform.get('Address').touched)\">\n                         *{{ error.message }}\n                       </div>\n                     </ng-container>\n                 </ion-col>\n               </ion-row>\n               <ion-row justify-content-center>\n                    <ion-col class=\"col-md-6\">\n                        <ion-item>\n                            <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n                            <ion-input type=\"text\" placeholder=\"Phone\" formControlName=\"Phone\" [(ngModel)]=\"vendor.Phone\"></ion-input>\n                        </ion-item>\n                        <ng-container *ngFor=\"let error of errormessages.Phone\">\n                          <div style=\"color: red;\" *ngIf=\"loginform.get('Phone').hasError(error.type) && (loginform.get('Phone').dirty || loginform.get('Phone').touched)\">\n                            *{{ error.message }}\n                          </div>\n                        </ng-container>\n                    </ion-col>\n                  </ion-row>\n                \n        </ion-grid>\n        </form>\n        <ion-row justify-content-center>\n            <ion-col class=\"col-md-6\">\n                <ion-item>\n                   <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n                    <ion-input type=\"text\" placeholder=\"Email\" [(ngModel)]=\"vendor.Email\"></ion-input>\n                </ion-item>\n            </ion-col>\n          </ion-row>\n \n</ion-content>\n<ion-content *ngIf=\"edit == false\">\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n    <ion-input [readonly]=\"true\" placeholder=\"Vendor Name\"  type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"vendor.Name\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\n    <ion-input [readonly]=\"true\" placeholder=\"Address\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"vendor.Address\"></ion-input>\n </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n    <ion-input [readonly]=\"true\" placeholder=\"Phone\" type=\"tel\" style=\"border: none;text-align: left;\" [(ngModel)]=\"vendor.Phone\"></ion-input>\n </ion-item>\n   <ion-item>\n     <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n     <ion-input [readonly]=\"true\" placeholder=\"Email\"  type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"vendor.Email\"></ion-input>\n   </ion-item>\n \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/vendors/vendor-edit/vendor-edit.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/vendors/vendor-edit/vendor-edit.module.ts ***!
  \*****************************************************************/
/*! exports provided: VendorEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorEditPageModule", function() { return VendorEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/contacts */ "./node_modules/@ionic-native/contacts/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vendor_edit_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendor-edit.page */ "./src/app/pages/vendors/vendor-edit/vendor-edit.page.ts");












const routes = [
    {
        path: '',
        component: _vendor_edit_page__WEBPACK_IMPORTED_MODULE_9__["VendorEditPage"]
    }
];
let VendorEditPageModule = class VendorEditPageModule {
};
VendorEditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_vendor_edit_page__WEBPACK_IMPORTED_MODULE_9__["VendorEditPage"]]
    })
], VendorEditPageModule);



/***/ }),

/***/ "./src/app/pages/vendors/vendor-edit/vendor-edit.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/vendors/vendor-edit/vendor-edit.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlbmRvcnMvdmVuZG9yLWVkaXQvdmVuZG9yLWVkaXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/vendors/vendor-edit/vendor-edit.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/vendors/vendor-edit/vendor-edit.page.ts ***!
  \***************************************************************/
/*! exports provided: VendorEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorEditPage", function() { return VendorEditPage; });
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
















let VendorEditPage = class VendorEditPage {
    constructor(router, location, alertCtrl, contacts, plt, http, nativeHttp, loadingCtrl, databaseservice, alrtCtrl, syncService, network, storage, datePipe, formbuilder) {
        this.router = router;
        this.location = location;
        this.alertCtrl = alertCtrl;
        this.contacts = contacts;
        this.plt = plt;
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.loadingCtrl = loadingCtrl;
        this.databaseservice = databaseservice;
        this.alrtCtrl = alrtCtrl;
        this.syncService = syncService;
        this.network = network;
        this.storage = storage;
        this.datePipe = datePipe;
        this.formbuilder = formbuilder;
        this.tblName = "vendors";
        this.acttype = "edited";
        this.lgdate = "2019-11-21";
        this.vendor = {
            VendorID: '',
            Name: '',
            Address: '',
            Phone: '',
            Email: '',
            bActive: 0,
            Balance: '',
            Sync: 0
        };
        this.tempVendor = {
            ID: '',
            Name: '',
            Address: '',
            Phone: '',
            Email: '',
            bActive: 0,
            Balance: '',
            Sync: 0
        };
        this.edit = false;
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
                { type: 'pattern', message: 'Enter valid is required' }
            ],
        };
        this.showEdit = 0;
        this.storage.get('app').then((val1) => {
            if (val1 === 'invoice') {
                this.storage.get('ID').then((val) => {
                    this.syncService.getbValue(val, 'Vendor Edit').then((data) => {
                        this.showEdit = data[0].bValue;
                    });
                });
            }
            else {
                this.showEdit = 1;
                debugger;
            }
        });
        if (this.router.getCurrentNavigation().extras.state) {
            this.tempVendor = this.router.getCurrentNavigation().extras.state.editvendor;
            this.vendor.VendorID = this.tempVendor.ID;
            this.vendor.Name = this.tempVendor.Name;
            this.vendor.Address = this.tempVendor.Address;
            this.vendor.Phone = this.tempVendor.Phone;
            this.vendor.Email = this.tempVendor.Email;
            this.vendor.bActive = this.tempVendor.bActive;
            this.vendor.Balance = this.tempVendor.Balance;
            this.vendor.Sync = this.tempVendor.Sync;
            if (this.network.type === 'none') {
            }
            else {
                debugger;
                this.syncAddedVendors();
            }
            debugger;
        }
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
    save() {
        if ((this.vendor.Name.length > 0 && this.vendor.Address.length > 0)) {
            // this.getDataNativeHttp();
            // this.updateVendor();
            if (this.loginform.valid === true) {
                this.updateVendor();
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
    close() {
        this.router.navigate(['/menu/vendors']);
    }
    getDataNativeHttp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            debugger;
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const url = this.databaseservice.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url + '/updateVendor.php', this.vendor, {
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
    del() {
        this.shareALert("Warning", '', 'Are you sure you want to deactivate this Vendor?');
    }
    shareALert(head, sub, msg) {
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'alertSize',
            buttons: [
                {
                    text: 'Deactivate',
                    cssClass: 'customClass',
                    role: 'cancel',
                    handler: () => {
                        console.log('yes');
                        // this.deleteClient();
                        this.deleteVendorlocaldb();
                    }
                },
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Confirm Ok');
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const url = this.databaseservice.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url + '/deactivateVendor.php', {
                "VendorID": this.vendor.VendorID
            }, {
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
    activateALert(head, sub, msg) {
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
                    handler: () => {
                        console.log('yes');
                        this.activateVendorlocaldb();
                    }
                },
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Confirm Ok');
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    activate() {
        this.activateALert("Warning", '', 'Are you sure you want to activate this Vendor?');
    }
    activateItem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const url = this.databaseservice.getURL();
            debugger;
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url + '/activateVendor.php', {
                "VendorID": this.vendor.VendorID
            }, {
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
                console.log('JS call error', err);
                const error = JSON.parse(err.error);
                alert(error.message);
                console.log('Native data:', JSON.parse(error));
            });
        });
    }
    AddLog() {
        if (this.acttype === 'edited') {
            if (this.usdId === 1) {
                this.acttype = 'You edited Vendor';
            }
            else {
                this.acttype = 'You edited Vendor';
            }
        }
        if (this.acttype === 'activated') {
            if (this.usdId === 1) {
                this.acttype = 'You activated Vendor';
            }
            else {
                this.acttype = 'You activated Vendor';
            }
        }
        if (this.acttype === 'deactivated') {
            if (this.usdId === 1) {
                this.acttype = 'You deactivated Vendor';
            }
            else {
                this.acttype = 'You deactivated Vendor';
            }
        }
        this.name = this.vendor.Name;
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
    updateVendor() {
        if (this.vendor.Sync === 1) {
            this.vendor.Sync = 2;
        }
        this.vendor.Balance;
        this.syncService.updateVendor(this.vendor.Name, this.vendor.Address, this.vendor.Phone, this.vendor.Email, this.vendor.VendorID, this.vendor.Balance, this.vendor.Sync)
            .then(data => {
            data;
            this.tblId = this.vendor.VendorID;
            this.AddLog();
            this.databaseservice.setupdatevendors(1);
            this.router.navigate(['/menu/vendors']);
            if (this.network.type === 'none') {
            }
            else {
                debugger;
                this.syncVendors();
            }
        });
    }
    deleteVendorlocaldb() {
        debugger;
        if (this.vendor.Sync === 1) {
            this.vendor.Sync = 2;
        }
        this.syncService.deleteVendor(this.vendor.VendorID, this.vendor.Sync)
            .then(data => {
            data;
            this.tblId = this.vendor.VendorID;
            this.acttype = "deactivated";
            this.AddLog();
            this.databaseservice.setupdatevendors(1);
            this.router.navigate(['/menu/vendors']);
            if (this.network.type === 'none') {
            }
            else {
                debugger;
                this.syncVendors();
            }
        });
    }
    activateVendorlocaldb() {
        if (this.vendor.Sync === 1) {
            this.vendor.Sync = 2;
        }
        this.syncService.activateVendor(this.vendor.VendorID, this.vendor.Sync)
            .then(data => {
            data;
            this.tblId = this.vendor.VendorID;
            this.acttype = "activated";
            this.AddLog();
            this.databaseservice.setupdatevendors(1);
            this.router.navigate(['/menu/vendors']);
            if (this.network.type === 'none') {
            }
            else {
                debugger;
                this.syncVendors();
            }
        });
    }
    syncVendors() {
        this.syncService.syncUpdatedVendors().then((data) => {
            if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                    IDs[i] = data[i].ID;
                }
                const url = this.databaseservice.getURL();
                debugger;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url, {
                    'Name': 'syncUpdatedVendors',
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
    syncAddedVendors() {
        this.syncService.syncAddedVendors().then((data) => {
            if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                    IDs[i] = data[i].ID;
                }
                const url = this.databaseservice.getURL();
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
};
VendorEditPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_5__["Contacts"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__["SyncService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"] }
];
VendorEditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-edit',
        template: __webpack_require__(/*! raw-loader!./vendor-edit.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/vendors/vendor-edit/vendor-edit.page.html"),
        styles: [__webpack_require__(/*! ./vendor-edit.page.scss */ "./src/app/pages/vendors/vendor-edit/vendor-edit.page.scss")]
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__["SyncService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]])
], VendorEditPage);



/***/ })

}]);
//# sourceMappingURL=pages-vendors-vendor-edit-vendor-edit-module-es2015.js.map