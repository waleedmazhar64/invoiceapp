(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-editclient-menu-editclient-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu-editclient/menu-editclient.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu-editclient/menu-editclient.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n   <ion-toolbar color=\"primary\">\n     <ion-buttons slot=\"start\">\n       <ion-icon padding  name=\"close\" (click)=\"close()\"></ion-icon>\n     </ion-buttons>\n     <ion-title>Details</ion-title>\n     <ion-label padding slot=\"end\" (click)=\"save()\">Save</ion-label>\n   </ion-toolbar>\n </ion-header>\n\n<ion-content>\n <!-- <ion-item lines=\"none\">\n     <ion-label style=\"color:royalblue;\">\n         <h2 text-capitalize >Billing Name</h2>\n     </ion-label>\n </ion-item> -->\n   <!-- <ion-item>\n       <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n       <ion-input placeholder=\"First Name\"  type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.Fname\"></ion-input>\n     </ion-item>\n     <ion-item>\n        <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n        <ion-input placeholder=\"Last Name\"  type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.Lname\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"cart\"></ion-icon>\n        <ion-input placeholder=\"Shop\"  type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.Shop\"></ion-input>\n      </ion-item>\n     <ion-item>\n         <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\n         <ion-input placeholder=\"Billing Address\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.BillingAddress\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n        <ion-input placeholder=\"City\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.City\"></ion-input>\n      \n     </ion-item>\n     <ion-item>\n        <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n        <ion-input placeholder=\"Cell\" type=\"tel\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.Cell\"></ion-input>\n      \n     </ion-item> -->\n     <form [formGroup]=\"loginform\">\n         <ion-grid>\n             <ion-row justify-content-center>\n               <ion-col class=\"col-md-6\">\n                   <ion-item>\n                       <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n                       <ion-input type=\"text\" placeholder=\"First Name\"  formControlName=\"Fname\" [(ngModel)]=\"client.Fname\"></ion-input>\n                   </ion-item>\n                   <ng-container *ngFor=\"let error of errormessages.Fname\">\n                     <div  style=\"color: red;\" *ngIf=\"loginform.get('Fname').hasError(error.type) && (loginform.get('Fname').dirty || loginform.get('Fname').touched)\">\n                       *{{ error.message }}\n                     </div>\n                   </ng-container>\n               </ion-col>\n             </ion-row>\n             <ion-row justify-content-center>\n                  <ion-col class=\"col-md-6\">\n                      <ion-item>\n                          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n                          <ion-input type=\"text\" placeholder=\"Last Name\"  formControlName=\"Lname\" [(ngModel)]=\"client.Lname\"></ion-input>\n                      </ion-item>\n                      <ng-container *ngFor=\"let error of errormessages.Lname\">\n                        <div style=\"color: red;\" *ngIf=\"loginform.get('Lname').hasError(error.type) && (loginform.get('Lname').dirty || loginform.get('Lname').touched)\">\n                          *{{ error.message }}\n                        </div>\n                      </ng-container>\n                  </ion-col>\n                </ion-row>\n                <ion-row justify-content-center>\n                     <ion-col class=\"col-md-6\">\n                         <ion-item>\n                              <ion-icon slot=\"start\" name=\"cart\"></ion-icon>\n                             <ion-input type=\"text\" placeholder=\"Shop\" formControlName=\"Shop\" [(ngModel)]=\"client.Shop\"></ion-input>\n                         </ion-item>\n                         <ng-container *ngFor=\"let error of errormessages.Shop\">\n                           <div style=\"color: red;\" *ngIf=\"loginform.get('Shop').hasError(error.type) && (loginform.get('Shop').dirty || loginform.get('Shop').touched)\">\n                             *{{ error.message }}\n                           </div>\n                         </ng-container>\n                     </ion-col>\n                   </ion-row>\n                   <ion-row justify-content-center>\n                        <ion-col class=\"col-md-6\">\n                            <ion-item>\n                                 <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\n                                <ion-input type=\"text\" placeholder=\"Billing Address\" formControlName=\"BAddress\" [(ngModel)]=\"client.BillingAddress\"></ion-input>\n                            </ion-item>\n                            <ng-container *ngFor=\"let error of errormessages.BAddress\">\n                              <div style=\"color: red;\" *ngIf=\"loginform.get('BAddress').hasError(error.type) && (loginform.get('BAddress').dirty || loginform.get('BAddress').touched)\">\n                                *{{ error.message }}\n                              </div>\n                            </ng-container>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row justify-content-center>\n                           <ion-col class=\"col-md-6\">\n                               <ion-item>\n                                    <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n                                   <ion-input type=\"text\" placeholder=\"City\" formControlName=\"City\" [(ngModel)]=\"client.City\"></ion-input>\n                               </ion-item>\n                               <ng-container *ngFor=\"let error of errormessages.City\">\n                                 <div style=\"color: red;\" *ngIf=\"loginform.get('City').hasError(error.type) && (loginform.get('City').dirty || loginform.get('City').touched)\">\n                                   *{{ error.message }}\n                                 </div>\n                               </ng-container>\n                           </ion-col>\n                         </ion-row>\n                         <ion-row justify-content-center>\n                              <ion-col class=\"col-md-6\">\n                                  <ion-item>\n                                       <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n                                      <ion-input type=\"tel\" placeholder=\"Cell\" formControlName=\"Cell\" [(ngModel)]=\"client.Cell\"></ion-input>\n                                  </ion-item>\n                                  <ng-container *ngFor=\"let error of errormessages.Cell\">\n                                    <div style=\"color: red;\" *ngIf=\"loginform.get('Cell').hasError(error.type) && (loginform.get('Cell').dirty || loginform.get('Cell').touched)\">\n                                      *{{ error.message }}\n                                    </div>\n                                  </ng-container>\n                              </ion-col>\n                            </ion-row>\n              \n           </ion-grid>\n     </form>\n   \n      <!-- <ion-item>\n         <ion-icon slot=\"start\"></ion-icon>\n         <ion-input placeholder=\"Line 2\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add2\"></ion-input>\n      </ion-item>\n      <ion-item>\n         <ion-icon slot=\"start\"></ion-icon>\n         <ion-input placeholder=\"Line 3\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add3\"></ion-input>  \n      </ion-item>\n      <ion-item lines=\"none\">\n         <ion-label style=\"color:royalblue;\">\n             <h2 text-capitalize >Contact Details</h2>\n         </ion-label>\n     </ion-item>\n     <ion-item>\n         <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n         <ion-input placeholder=\"Email\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add1\"></ion-input>\n       \n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"showmore == true\" (click)=\"showless()\">\n        <ion-label text-center style=\"color:royalblue;\">show more</ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"showmore == false\">\n         <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n         <ion-input placeholder=\"Contact Name\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.contactName\"></ion-input>\n       \n      </ion-item>\n      <ion-item *ngIf=\"showmore == false\">\n         <ion-icon slot=\"start\" name=\"phone-portrait\"></ion-icon>\n         <ion-input placeholder=\"Phone\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.phone\"></ion-input>\n       \n      </ion-item>\n      <ion-item *ngIf=\"showmore == false\">\n         <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n         <ion-input placeholder=\"Cell\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.cell\"></ion-input>\n       \n      </ion-item>\n      <ion-item *ngIf=\"showmore == false\">\n         <ion-icon slot=\"start\" name=\"print\"></ion-icon>\n         <ion-input placeholder=\"Fax\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add1\"></ion-input>\n       \n      </ion-item>\n      <ion-item *ngIf=\"showmore == false\">\n         <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\n         <ion-input placeholder=\"Website\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add1\"></ion-input>\n       \n      </ion-item >\n      <ion-item lines=\"none\" *ngIf=\"showmore == false\">\n         <ion-label style=\"color:royalblue;\">\n             <h2 text-capitalize >Shipping Address</h2>\n         </ion-label>\n     </ion-item>\n     <ion-item *ngIf=\"showmore == false\">\n         <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n         <ion-input placeholder=\"Shipping to\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add1\"></ion-input>\n       \n      </ion-item>\n      <ion-item *ngIf=\"showmore == false\">\n         <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\n         <ion-input placeholder=\"Line 1\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add1\"></ion-input>\n       \n      </ion-item>\n      <ion-item *ngIf=\"showmore == false\">\n         <ion-icon slot=\"start\"></ion-icon>\n         <ion-input placeholder=\"Line 2\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add2\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"showmore == false\">\n         <ion-icon slot=\"start\"></ion-icon>\n         <ion-input placeholder=\"Line 3\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add3\"></ion-input>  \n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"showmore == false\">\n         <ion-label style=\"color:royalblue;\">\n             <h2 text-capitalize >Miscellaneous</h2>\n         </ion-label>\n     </ion-item>\n     <ion-item (click)=\"openAlert()\" *ngIf=\"showmore == false\">\n         <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n         <ion-label>{{client.days}} Days</ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"showmore == false\">\n         <ion-label style=\"color:royalblue;\">\n             <h2 text-capitalize >Notes</h2>\n         </ion-label>\n     </ion-item>\n     <ion-item *ngIf=\"showmore == false\">\n         <ion-icon slot=\"start\" name=\"clipboard\"></ion-icon>\n         <ion-input placeholder=\"Notes\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.notes\"></ion-input>  \n      </ion-item>\n      <ion-item lines=\"none\" *ngIf=\"showmore == false\" (click)=\"showmor()\">\n         <ion-label text-center style=\"color:royalblue;\">show less</ion-label>\n       </ion-item> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/menu-editclient/menu-editclient.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/menu-editclient/menu-editclient.module.ts ***!
  \*****************************************************************/
/*! exports provided: MenuEditclientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuEditclientPageModule", function() { return MenuEditclientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/contacts */ "./node_modules/@ionic-native/contacts/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_editclient_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu-editclient.page */ "./src/app/pages/menu-editclient/menu-editclient.page.ts");












const routes = [
    {
        path: '',
        component: _menu_editclient_page__WEBPACK_IMPORTED_MODULE_9__["MenuEditclientPage"]
    }
];
let MenuEditclientPageModule = class MenuEditclientPageModule {
};
MenuEditclientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
        declarations: [_menu_editclient_page__WEBPACK_IMPORTED_MODULE_9__["MenuEditclientPage"]]
    })
], MenuEditclientPageModule);



/***/ }),

/***/ "./src/app/pages/menu-editclient/menu-editclient.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/menu-editclient/menu-editclient.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtZWRpdGNsaWVudC9tZW51LWVkaXRjbGllbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/menu-editclient/menu-editclient.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-editclient/menu-editclient.page.ts ***!
  \***************************************************************/
/*! exports provided: MenuEditclientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuEditclientPage", function() { return MenuEditclientPage; });
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
















let MenuEditclientPage = class MenuEditclientPage {
    constructor(router, location, alertCtrl, contacts, plt, http, nativeHttp, loadingCtrl, databaseservice, syncService, network, storage, datePipe, formbuilder) {
        this.router = router;
        this.location = location;
        this.alertCtrl = alertCtrl;
        this.contacts = contacts;
        this.plt = plt;
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.loadingCtrl = loadingCtrl;
        this.databaseservice = databaseservice;
        this.syncService = syncService;
        this.network = network;
        this.storage = storage;
        this.datePipe = datePipe;
        this.formbuilder = formbuilder;
        this.id = '';
        this.data = [];
        this.username = '';
        this.tblName = "clients";
        this.acttype = "edited";
        this.lgdate = "2019-11-21";
        this.client = {
            Cid: '',
            AccountId: '',
            Fname: '',
            Lname: '',
            Shop: '',
            BillingAddress: '',
            City: '',
            Cell: '',
            Active: '',
            Balance: 0,
            Sync: 0
        };
        this.days = '30';
        this.notes = '';
        this.contactName = '';
        this.cell = '';
        this.phone = '';
        this.test = '';
        this.errormessages = {
            Fname: [
                { type: 'requird', message: 'First Name is required' },
                { type: 'pattern', message: 'Enter valid is required' }
            ],
            Shop: [
                { type: 'requird', message: 'Email is required' },
                { type: 'pattern', message: 'Enter valid is required' }
            ],
            BAddress: [
                { type: 'requird', message: 'Email is required' },
                { type: 'pattern', message: 'Enter valid is required' }
            ],
            City: [
                { type: 'requird', message: 'Email is required' },
                { type: 'pattern', message: 'Enter valid is required' }
            ],
            Cell: [
                { type: 'requird', message: 'Email is required' },
                { type: 'pattern', message: 'Enter valid phone number' },
                { type: 'minlength', message: 'Enter valid phone number' },
                { type: 'maxlength', message: 'Enter valid phone number' }
            ],
            Lname: [
                { type: 'requird', message: 'Password is required' },
                { type: 'minlength', message: 'Enter atleast 6 characters' }
            ]
        };
        if (this.router.getCurrentNavigation().extras.state) {
            this.client = this.router.getCurrentNavigation().extras.state.editclient;
            // this.id = this.router.getCurrentNavigation().extras.state.editclient.id;
            // this.username = this.router.getCurrentNavigation().extras.state.editclient.username;
            // this.phone = this.router.getCurrentNavigation().extras.state.editclient.billing.phone;
            debugger;
            this.storage.get('userId').then((val) => {
                this.usdId = val;
                console.log(this.usdId);
            });
            this.getformattedDate();
            this.loginform = this.formbuilder.group({
                Fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
                ])),
                Lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
                ])),
                BAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
                ])),
                City: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
                ])),
                Cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
                    // Validators.pattern('03[0-9]{2}-(?!1234567)(?!1111111)(?!7654321)[0-9]{7}'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].minLength(11),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].maxLength(11)
                ])),
                Shop: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
                ]))
            });
        }
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
        if ((this.client.Fname.length > 0 && this.client.Lname.length > 0 && this.client.Shop.length > 0 && this.client.BillingAddress.length > 0 && this.client.City.length > 0 && this.client.Cell !== "")) {
            // this.getDataNativeHttp();
            // this.updateClient();
            if (this.loginform.valid === true) {
                this.updateClient();
                // this.getCid();
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
            // const z = this.client.billing.phone;
            // const p = this.phone.toString();
            // const a = +new Date();
            // const b = this.client.first_name + a + '@gmail.com';
            // const c = this.client.first_name + b;
            debugger;
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const url = this.databaseservice.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url + '/updateClient.php', this.client, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                this.data = JSON.parse(data.data);
                console.log(this.data[0]);
                this.databaseservice.setupdateclients(1);
                this.router.navigate(['/menu/clients']);
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
        if (this.usdId === 1) {
            this.acttype = 'You  edited client';
        }
        else {
            this.acttype = 'You edited client';
        }
        this.name = this.client.Fname + ' ' + this.client.Lname;
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
    updateClient() {
        if (this.client.Sync === 1) {
            this.client.Sync = 2;
        }
        this.syncService.updateClient(this.client.Fname, this.client.Lname, this.client.Shop, this.client.BillingAddress, this.client.City, this.client.Cell, this.client.Cid, this.client.Balance, this.client.Sync)
            .then(data => {
            data;
            console.log(this.client.Cid);
            this.tblId = this.client.Cid;
            this.AddLog();
            this.databaseservice.setupdateclients(1);
            this.router.navigate(['/menu/clients']);
            if (this.network.type === 'none') {
            }
            else {
                debugger;
                this.syncUpdateClients();
            }
        });
    }
    syncUpdateClients() {
        this.syncService.syncUpdatedClients().then((data) => {
            if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                    IDs[i] = data[i].Cid;
                }
                const url = this.databaseservice.getURL();
                debugger;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url, {
                    'Name': 'syncUpdatedClients',
                    "Clients": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        //alert('success');
                        this.syncService.updateSyncedClients(IDs).then((data) => {
                        });
                    }
                    else {
                        // alert('failed');
                    }
                    // this.initializeItems();
                }, err => {
                    console.log('JS call error', err);
                    const error = JSON.parse(err.error);
                    //alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
                debugger;
            }
        });
    }
};
MenuEditclientPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_5__["Contacts"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__["SyncService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"] }
];
MenuEditclientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-editclient',
        template: __webpack_require__(/*! raw-loader!./menu-editclient.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu-editclient/menu-editclient.page.html"),
        styles: [__webpack_require__(/*! ./menu-editclient.page.scss */ "./src/app/pages/menu-editclient/menu-editclient.page.scss")]
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
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__["SyncService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__["Network"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormBuilder"]])
], MenuEditclientPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-editclient-menu-editclient-module-es2015.js.map