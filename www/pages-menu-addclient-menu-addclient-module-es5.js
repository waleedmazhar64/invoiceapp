(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-addclient-menu-addclient-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu-addclient/menu-addclient.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu-addclient/menu-addclient.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-icon padding  name=\"close\" (click)=\"close()\"></ion-icon>\n      </ion-buttons>\n      <ion-title>Details</ion-title>\n      <ion-label  padding slot=\"end\" (click)=\"save()\">Save</ion-label>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <!-- <ion-item lines=\"none\">\n      <ion-label style=\"color:royalblue;\">\n          <h2 text-capitalize >Billing Name</h2>\n      </ion-label>\n  </ion-item> -->\n  <!-- <form [formGroup]=\"loginform\">\n   <ion-item>\n      <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n      <ion-input placeholder=\"First Name\"   type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.Fname\"></ion-input>\n   </ion-item>\n    <ion-item>\n       <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n       <ion-input placeholder=\"Last Name\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.Lname\"></ion-input>\n     </ion-item>\n     <ion-item>\n       <ion-icon slot=\"start\" name=\"cart\"></ion-icon>\n       <ion-input placeholder=\"Shop\"  type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.Shop\"></ion-input>\n     </ion-item>\n    <ion-item>\n        <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\n        <ion-input (ionInput)=\"geItems($event)\" placeholder=\"Billing Address\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.BillingAddress\"></ion-input>\n       \n     </ion-item>\n     <ion-item>\n       <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n       <ion-input placeholder=\"City\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.City\"></ion-input>\n      \n    </ion-item>\n\n    <ion-item>\n       <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n       <ion-input placeholder=\"Cell\" type=\"tel\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.Cell\"></ion-input>\n     \n    </ion-item>  \n  </form> -->\n\n    <form [formGroup]=\"loginform\">\n      <ion-grid>\n          <ion-row justify-content-center>\n            <ion-col class=\"col-md-6\">\n                <ion-item>\n                    <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n                    <ion-input type=\"text\" placeholder=\"First Name\"  formControlName=\"Fname\" [(ngModel)]=\"client.Fname\"></ion-input>\n                </ion-item>\n                <ng-container *ngFor=\"let error of errormessages.Fname\">\n                  <div  style=\"color: red;\" *ngIf=\"loginform.get('Fname').hasError(error.type) && (loginform.get('Fname').dirty || loginform.get('Fname').touched)\">\n                    *{{ error.message }}\n                  </div>\n                </ng-container>\n            </ion-col>\n          </ion-row>\n          <ion-row justify-content-center>\n               <ion-col class=\"col-md-6\">\n                   <ion-item>\n                       <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n                       <ion-input type=\"text\" placeholder=\"Last Name\"  formControlName=\"Lname\" [(ngModel)]=\"client.Lname\"></ion-input>\n                   </ion-item>\n                   <ng-container *ngFor=\"let error of errormessages.Lname\">\n                     <div style=\"color: red;\" *ngIf=\"loginform.get('Lname').hasError(error.type) && (loginform.get('Lname').dirty || loginform.get('Lname').touched)\">\n                       *{{ error.message }}\n                     </div>\n                   </ng-container>\n               </ion-col>\n             </ion-row>\n             <ion-row justify-content-center>\n                  <ion-col class=\"col-md-6\">\n                      <ion-item>\n                           <ion-icon slot=\"start\" name=\"cart\"></ion-icon>\n                          <ion-input type=\"text\" placeholder=\"Shop\" formControlName=\"Shop\" [(ngModel)]=\"client.Shop\"></ion-input>\n                      </ion-item>\n                      <ng-container *ngFor=\"let error of errormessages.Shop\">\n                        <div style=\"color: red;\" *ngIf=\"loginform.get('Shop').hasError(error.type) && (loginform.get('Shop').dirty || loginform.get('Shop').touched)\">\n                          *{{ error.message }}\n                        </div>\n                      </ng-container>\n                  </ion-col>\n                </ion-row>\n                <ion-row justify-content-center>\n                     <ion-col class=\"col-md-6\">\n                         <ion-item>\n                              <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\n                             <ion-input type=\"text\" placeholder=\"Billing Address\" formControlName=\"BAddress\" [(ngModel)]=\"client.BillingAddress\"></ion-input>\n                         </ion-item>\n                         <ng-container *ngFor=\"let error of errormessages.BAddress\">\n                           <div style=\"color: red;\" *ngIf=\"loginform.get('BAddress').hasError(error.type) && (loginform.get('BAddress').dirty || loginform.get('BAddress').touched)\">\n                             *{{ error.message }}\n                           </div>\n                         </ng-container>\n                     </ion-col>\n                   </ion-row>\n                   <ion-row justify-content-center>\n                        <ion-col class=\"col-md-6\">\n                            <ion-item>\n                                 <ion-icon slot=\"start\" name=\"business\"></ion-icon>\n                                <ion-input type=\"text\" placeholder=\"City\" formControlName=\"City\" [(ngModel)]=\"client.City\"></ion-input>\n                            </ion-item>\n                            <ng-container *ngFor=\"let error of errormessages.City\">\n                              <div style=\"color: red;\" *ngIf=\"loginform.get('City').hasError(error.type) && (loginform.get('City').dirty || loginform.get('City').touched)\">\n                                *{{ error.message }}\n                              </div>\n                            </ng-container>\n                        </ion-col>\n                      </ion-row>\n                     \n           \n        </ion-grid>\n  </form>\n  <form [formGroup]=\"loginform1\">\n       <ion-row justify-content-center>\n          <ion-col class=\"col-md-6\">\n                               <ion-item>\n                                    <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n                                   <ion-input type=\"tel\" placeholder=\"Cell\" formControlName=\"Cell\" [(ngModel)]=\"client.Cell\"></ion-input>\n                               </ion-item>\n                               <ng-container *ngFor=\"let error of errormessages.Cell\">\n                                 <div style=\"color: red;\" *ngIf=\"loginform1.get('Cell').hasError(error.type) && (loginform1.get('Cell').dirty || loginform1.get('Cell').touched)\">\n                                   *{{ error.message }}\n                                 </div>\n                               </ng-container>\n                           </ion-col>\n                         </ion-row>\n                         </form>\n       <!-- <ion-item>\n          <ion-icon slot=\"start\"></ion-icon>\n          <ion-input placeholder=\"Line 2\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add2\"></ion-input>\n       </ion-item>\n       <ion-item>\n          <ion-icon slot=\"start\"></ion-icon>\n          <ion-input placeholder=\"Line 3\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add3\"></ion-input>  \n       </ion-item>\n       <ion-item lines=\"none\">\n          <ion-label style=\"color:royalblue;\">\n              <h2 text-capitalize >Contact Details</h2>\n          </ion-label>\n      </ion-item>\n      <ion-item>\n          <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n          <ion-input placeholder=\"Email\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add1\"></ion-input>\n        \n       </ion-item>\n       <ion-item lines=\"none\" *ngIf=\"showmore == true\" (click)=\"showless()\">\n         <ion-label text-center style=\"color:royalblue;\">show more</ion-label>\n       </ion-item>\n       <ion-item *ngIf=\"showmore == false\">\n          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n          <ion-input placeholder=\"Contact Name\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.contactName\"></ion-input>\n        \n       </ion-item>\n       <ion-item *ngIf=\"showmore == false\">\n          <ion-icon slot=\"start\" name=\"phone-portrait\"></ion-icon>\n          <ion-input placeholder=\"Phone\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.phone\"></ion-input>\n        \n       </ion-item>\n       <ion-item *ngIf=\"showmore == false\">\n          <ion-icon slot=\"start\" name=\"call\"></ion-icon>\n          <ion-input placeholder=\"Cell\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.cell\"></ion-input>\n        \n       </ion-item>\n       <ion-item *ngIf=\"showmore == false\">\n          <ion-icon slot=\"start\" name=\"print\"></ion-icon>\n          <ion-input placeholder=\"Fax\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add1\"></ion-input>\n        \n       </ion-item>\n       <ion-item *ngIf=\"showmore == false\">\n          <ion-icon slot=\"start\" name=\"globe\"></ion-icon>\n          <ion-input placeholder=\"Website\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add1\"></ion-input>\n        \n       </ion-item >\n       <ion-item lines=\"none\" *ngIf=\"showmore == false\">\n          <ion-label style=\"color:royalblue;\">\n              <h2 text-capitalize >Shipping Address</h2>\n          </ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"showmore == false\">\n          <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n          <ion-input placeholder=\"Shipping to\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add1\"></ion-input>\n        \n       </ion-item>\n       <ion-item *ngIf=\"showmore == false\">\n          <ion-icon slot=\"start\" name=\"pin\"></ion-icon>\n          <ion-input placeholder=\"Line 1\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add1\"></ion-input>\n        \n       </ion-item>\n       <ion-item *ngIf=\"showmore == false\">\n          <ion-icon slot=\"start\"></ion-icon>\n          <ion-input placeholder=\"Line 2\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add2\"></ion-input>\n       </ion-item>\n       <ion-item *ngIf=\"showmore == false\">\n          <ion-icon slot=\"start\"></ion-icon>\n          <ion-input placeholder=\"Line 3\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.add3\"></ion-input>  \n       </ion-item>\n       <ion-item lines=\"none\" *ngIf=\"showmore == false\">\n          <ion-label style=\"color:royalblue;\">\n              <h2 text-capitalize >Miscellaneous</h2>\n          </ion-label>\n      </ion-item>\n      <ion-item (click)=\"openAlert()\" *ngIf=\"showmore == false\">\n          <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n          <ion-label>{{client.days}} Days</ion-label>\n       </ion-item>\n       <ion-item lines=\"none\" *ngIf=\"showmore == false\">\n          <ion-label style=\"color:royalblue;\">\n              <h2 text-capitalize >Notes</h2>\n          </ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"showmore == false\">\n          <ion-icon slot=\"start\" name=\"clipboard\"></ion-icon>\n          <ion-input placeholder=\"Notes\" type=\"text\" style=\"border: none;text-align: left;\" [(ngModel)]=\"client.notes\"></ion-input>  \n       </ion-item>\n       <ion-item lines=\"none\" *ngIf=\"showmore == false\" (click)=\"showmor()\">\n          <ion-label text-center style=\"color:royalblue;\">show less</ion-label>\n        </ion-item> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/menu-addclient/menu-addclient.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-addclient/menu-addclient.module.ts ***!
  \***************************************************************/
/*! exports provided: MenuAddclientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAddclientPageModule", function() { return MenuAddclientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/contacts */ "./node_modules/@ionic-native/contacts/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_addclient_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu-addclient.page */ "./src/app/pages/menu-addclient/menu-addclient.page.ts");













var routes = [
    {
        path: '',
        component: _menu_addclient_page__WEBPACK_IMPORTED_MODULE_9__["MenuAddclientPage"]
    }
];
var MenuAddclientPageModule = /** @class */ (function () {
    function MenuAddclientPageModule() {
    }
    MenuAddclientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            declarations: [_menu_addclient_page__WEBPACK_IMPORTED_MODULE_9__["MenuAddclientPage"]]
        })
    ], MenuAddclientPageModule);
    return MenuAddclientPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu-addclient/menu-addclient.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-addclient/menu-addclient.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtYWRkY2xpZW50L21lbnUtYWRkY2xpZW50LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/menu-addclient/menu-addclient.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu-addclient/menu-addclient.page.ts ***!
  \*************************************************************/
/*! exports provided: MenuAddclientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAddclientPage", function() { return MenuAddclientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/contacts */ "./node_modules/@ionic-native/contacts/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
















var MenuAddclientPage = /** @class */ (function () {
    function MenuAddclientPage(router, location, alertCtrl, contacts, plt, http, nativeHttp, loadingCtrl, databaseservice, syncService, network, storage, datePipe, formbuilder) {
        var _this = this;
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
        this.billingAddress = [
            {
                address: 'Islamabad',
            },
            {
                address: 'Rawalpindi'
            }
        ];
        this.tempBillingAddresses = [];
        this.showmore = true;
        this.data = [];
        this.billing = {};
        this.getId = [];
        this.tblName = "clients";
        this.acttype = "added";
        this.lgdate = "2019-11-21";
        this.client = {
            AccountId: '113008225657937776461',
            Fname: '',
            Lname: '',
            Shop: '',
            BillingAddress: '',
            City: '',
            Cell: '',
        };
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
        this.storage.get('userId').then(function (val) {
            _this.usdId = val;
            console.log(_this.usdId);
        });
        this.getformattedDate();
        this.loginform1 = this.formbuilder.group({
            Cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
                //Validators.minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].minLength(11),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].maxLength(11)
            ]))
        });
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
            Shop: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["Validators"].required,
            ]))
        });
    }
    MenuAddclientPage.prototype.ngOnInit = function () {
    };
    MenuAddclientPage.prototype.getformattedDate = function () {
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
    MenuAddclientPage.prototype.close = function () {
        ;
        this.location.back();
    };
    MenuAddclientPage.prototype.save = function () {
        // tslint:disable-next-line: max-line-length
        if ((this.client.Fname.length > 0 && this.client.Lname.length > 0 && this.client.Shop.length > 0 && this.client.BillingAddress.length > 0 && this.client.City.length > 0)) {
            //this.getDataNativeHttp();
            if (this.loginform.valid === true) {
                this.addClient();
                this.getCid();
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
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            }).then(function (alert) { return alert.present(); });
        }
        //  this.getDataNativeHttp();
        // console.log('client:'+ this.client.contactName+' '+ this.client.cell);
    };
    //   openAlert() {
    //     this.alertCtrl.create({
    //      header: 'Terms',
    //      inputs: [
    //        {
    //          type: 'radio',
    //          label: '3 Days',
    //          value: '3'
    //        },
    //        {
    //          type: 'radio',
    //          label: '7 Days',
    //          value: '7'
    //        },
    //        {
    //          type: 'radio',
    //          label: '14 Days',
    //          value: '14'
    //        },
    //        {
    //          type: 'radio',
    //          label: '21 Days',
    //          value: '21'
    //        },
    //        {
    //          type: 'radio',
    //          label: '30 Days',
    //          value: '30'
    //        },
    //        {
    //          type: 'radio',
    //          label: '45 Days',
    //          value: '45'
    //        },
    //        {
    //          type: 'radio',
    //          label: '60 Days',
    //          value: '60'
    //        },
    //        {
    //          type: 'radio',
    //          label: '180 Days',
    //          value: '180'
    //        },
    //        {
    //          type: 'radio',
    //          label: 'Due on Receipt',
    //          value: 'Due on Receipt'
    //        },
    //      ],
    //      buttons: [
    //        {
    //          text: 'Cancel',
    //          role: 'cancel',
    //          handler: () => {
    //            console.log('Cancel clicked');
    //          }
    //        },
    //        {
    //          text: 'OK',
    //          handler: (data:string) => {
    //            console.log('selected' + data);
    //            this.client.days = data;
    //        }
    //        }
    //      ]
    //    }).then(alert => alert.present());
    //  }
    //  opeList() {
    //    this.plt.ready().then((readySource) => {
    //      console.log('Platform ready from', readySource);
    //      // Platform now ready, execute any required native code
    //      this.contacts.pickContact()
    //      .then((response: Contact) => { 
    //         console.log(response);
    //         this.client.name = response.displayName;
    //         this.client.contactName = response.displayName;
    //         this.client.cell = response.phoneNumbers[0].value.toString();
    //      });
    //    });
    //  }
    MenuAddclientPage.prototype.AddLog = function () {
        var _this = this;
        if (this.usdId === 1) {
            this.acttype = 'You  added a new client';
        }
        else {
            this.acttype = 'You added a new client';
        }
        this.name;
        var now = new Date().toString();
        var a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(function (data) {
            console.log("Log has been added");
            _this.GetLogs();
            _this.syncService.syncAddedLog();
        });
    };
    MenuAddclientPage.prototype.GetLogs = function () {
        this.syncService.getAllLogs().then(function (data) {
            console.log(data);
        });
    };
    MenuAddclientPage.prototype.getCid = function () {
        var _this = this;
        this.syncService.getClientsonspot().then(function (data) {
            _this.getId = data;
            console.log(_this.getId);
            _this.tblId = _this.getId[0].Cid;
            _this.name = _this.getId[0].Fname + ' ' + _this.getId[0].Lname;
            ;
            console.log(_this.tblId);
            _this.AddLog();
        });
    };
    MenuAddclientPage.prototype.showless = function () {
        this.showmore = false;
    };
    MenuAddclientPage.prototype.showmor = function () {
        this.showmore = true;
    };
    MenuAddclientPage.prototype.getDataNativeHttp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, url, nativeCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // const a = +new Date();
                        // const b = this.client.first_name + a + '@gmail.com';
                        // const c = this.client.first_name + b;
                        ;
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        url = "http://demoopm.tk";
                        this.nativeHttp.setDataSerializer("json");
                        nativeCall = this.nativeHttp.post(url + '/createClient.php', this.client, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            _this.databaseservice.setupdateclients(1);
                            _this.router.navigate(['/menu/clients']);
                            // this.initializeItems();
                        }, function (err) {
                            loading.dismiss();
                            _this.databaseservice.setupdateclients(1);
                            _this.router.navigate(['/menu/clients']);
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
    MenuAddclientPage.prototype.addClient = function () {
        var _this = this;
        this.client.Fname = this.client.Fname.charAt(0).toUpperCase() + this.client.Fname.substring(1);
        // tslint:disable-next-line: max-line-length
        this.syncService.addclient(this.client.Fname, this.client.Lname, this.client.Shop, this.client.BillingAddress, this.client.City, this.client.Cell)
            .then(function (data) {
            data;
            _this.databaseservice.setupdateclients(1);
            _this.router.navigate(['/menu/clients']);
            if (_this.network.type === 'none') {
            }
            else {
                _this.syncClients();
            }
        });
    };
    MenuAddclientPage.prototype.syncClients = function () {
        var _this = this;
        this.syncService.syncAddedClients().then(function (data) {
            if (data.length > 0) {
                var IDs_1 = [];
                for (var i = 0; i < data.length; i++) {
                    IDs_1[i] = data[i].Cid;
                }
                var url = _this.databaseservice.getURL();
                ;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncAddedClients',
                    "Clients": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        //alert('success');
                        _this.syncService.updateSyncedClients(IDs_1).then(function (data) {
                        });
                    }
                    else {
                        // alert('failed');
                    }
                    // this.initializeItems();
                }, function (err) {
                    console.log('JS call error', err);
                    var error = JSON.parse(err.error);
                    //alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
            }
        });
    };
    MenuAddclientPage.prototype.geItems = function (searchbar) {
        this.initializeBillingAddress();
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.tempBillingAddresses = this.tempBillingAddresses.filter(function (v) {
            if (v.address && q) {
                if (v.address.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    MenuAddclientPage.prototype.initializeBillingAddress = function () {
        this.tempBillingAddresses = this.billingAddress;
    };
    MenuAddclientPage.ctorParameters = function () { return [
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
    ]; };
    MenuAddclientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-addclient',
            template: __webpack_require__(/*! raw-loader!./menu-addclient.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu-addclient/menu-addclient.page.html"),
            styles: [__webpack_require__(/*! ./menu-addclient.page.scss */ "./src/app/pages/menu-addclient/menu-addclient.page.scss")]
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
    ], MenuAddclientPage);
    return MenuAddclientPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-addclient-menu-addclient-module-es5.js.map