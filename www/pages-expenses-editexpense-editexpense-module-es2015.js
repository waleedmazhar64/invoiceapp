(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expenses-editexpense-editexpense-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/expenses/editexpense/editexpense.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/expenses/editexpense/editexpense.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <div style=\"width: 100%;\">\n        <ion-toolbar color=\"primary\">\n          <ion-grid>\n            <ion-row>\n                <ion-icon padding  name=\"close\" (click)=\"back()\"></ion-icon>\n                <ion-title *ngIf=\"edit == false\">Expense</ion-title>\n                <ion-title *ngIf=\"edit == true\">Expense</ion-title>\n                <!-- <ion-label padding *ngIf=\"edit == false\" (click)=\"edit = true\">Edit</ion-label>\n                <ion-label padding *ngIf=\"edit == true\" (click)=\"save()\">Save</ion-label> -->\n                <ion-label padding *ngIf=\"showEdit === 1\" (click)=\"del()\">Delete</ion-label>\n            </ion-row>\n          </ion-grid>\n          \n        </ion-toolbar>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n              <div>\n                  <span *ngIf=\"edit == false\" style=\"float:right;padding-right: 5px;\">{{expense.Date}}</span>\n\n                  <span *ngIf=\"edit == true\" (click)=\"showDate()\" style=\"float:right;padding-right: 5px;\">{{expense.selectedDate}}</span>\n              </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      </ion-toolbar>\n  \n  </ion-header>\n\n<ion-content *ngIf=\"categoriesClicked == false && edit == false\">\n    <ion-item *ngIf=\"images.length>0\">\n        <ion-img [src]=\"images[0].path\" ></ion-img>\n     </ion-item>\n    <!-- <ion-list *ngFor=\"let item of images;index as pos\">\n        <ion-item >\n           <ion-thumbnail slot=\"start\">\n               <ion-img [src]=\"item.path\" (click)=\"selectImage()\"></ion-img>\n             </ion-thumbnail>\n        </ion-item>\n    </ion-list> -->\n    <!-- <ion-item lines=\"none\">\n        <ion-label text-center style=\"color:royalblue;\">\n         <ion-icon  name=\"add-circle-outline\"></ion-icon> Attached Image\n        </ion-label>\n      </ion-item> -->\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n              <ion-input [readonly]=\"true\" [(ngModel)]=\"tempName\" padding placeholder=\"Expense Name\"></ion-input>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item >\n        <ion-grid no-padding>\n              <ion-row>\n                <ion-col style=\"margin-top:2%;\">\n                   Total Amount\n                </ion-col>\n                <ion-col>\n                    <span no-padding style=\"float: right;margin-right:12px;\">\n                        <ion-input [readonly]=\"true\" type=\"number\" placeholder=\"0.0\" style=\"border: none;text-align: right;\" [(ngModel)]=\"temptotalAmount\"></ion-input>\n                      </span>\n                </ion-col>\n              </ion-row>\n            </ion-grid> \n  \n        </ion-item >\n            <ion-item>\n                <ion-grid>\n                  <ion-row>\n                      <ion-input  [readonly]=\"true\" [(ngModel)]=\"tempcategory\" padding placeholder=\"Category\">\n                        <ion-icon name=\"filing\" style=\"margin-right: 1%;\" slot=\"start\"></ion-icon>\n                        \n                      </ion-input>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n              <ion-item>\n                  <ion-grid>\n                    <ion-row>\n                        <ion-input  [readonly]=\"true\" padding placeholder=\"Description\" [(ngModel)]=\"tempdescription\">\n                          <ion-icon  padding-right name=\"clipboard\" style=\"margin-right: 1%;\" slot=\"start\"></ion-icon>\n                        </ion-input>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <!-- <ion-item  lines=\"none\"  >\n                    <ion-label  text-center style=\"color:royalblue;\">\n                     <ion-icon  name=\"cash\"></ion-icon> {{label}}\n                    </ion-label>\n                  </ion-item> -->\n</ion-content>\n<ion-content *ngIf=\"categoriesClicked == false && edit == true\">\n    <ion-item *ngIf=\"images.length>0\">\n        <ion-img [src]=\"images[0].path\" (click)=\"selectImage()\"></ion-img>\n     </ion-item>\n    <!-- <ion-list *ngFor=\"let item of images;index as pos\">\n        <ion-item >\n           <ion-thumbnail slot=\"start\">\n               <ion-img [src]=\"item.path\" (click)=\"selectImage()\"></ion-img>\n             </ion-thumbnail>\n        </ion-item>\n    </ion-list> -->\n    <!-- <ion-item lines=\"none\"  (click)=\"selectImage()\">\n        <ion-label text-center style=\"color:royalblue;\">\n         <ion-icon  name=\"add-circle-outline\"></ion-icon> Attached Image\n        </ion-label>\n      </ion-item> -->\n      <form [formGroup]=\"loginform\">\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n                <ion-input [(ngModel)]=\"tempName\" formControlName=\"expenseName\" padding placeholder=\"Expense Name\">{{expense.expenseName}}</ion-input>\n                <ng-container *ngFor=\"let error of errormessages.expenseName\">\n                  <div  style=\"color: red;\" *ngIf=\"loginform.get('expenseName').hasError(error.type) && (loginform.get('expenseName').dirty || loginform.get('expenseName').touched)\">\n                    *{{ error.message }}\n                  </div>\n                </ng-container>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item >\n          <ion-grid no-padding>\n                <ion-row>\n                  <ion-col style=\"margin-top:2%;\">\n                     Total Amount\n                  </ion-col>\n                  <ion-col>\n                      <span no-padding style=\"float: right;margin-right:12px;\">\n                          <ion-input  type=\"number\" placeholder=\"0.0\" formControlName=\"totalAmount\" style=\"border: none;text-align: right;\" [(ngModel)]=\"temptotalAmount\"></ion-input>\n                          <ng-container *ngFor=\"let error of errormessages.totalAmount\">\n                            <div  style=\"color: red;\" *ngIf=\"loginform.get('totalAmount').hasError(error.type) && (loginform.get('totalAmount').dirty || loginform.get('totalAmount').touched)\">\n                              *{{ error.message }}\n                            </div>\n                          </ng-container>\n                        </span>\n                  </ion-col>\n                </ion-row>\n              </ion-grid> \n    \n          </ion-item >\n        </form>\n          <ion-item>\n                  <ion-grid>\n                    <ion-row>\n                        <ion-input (click)=\"categoriesClicked = true\" [(ngModel)]=\"tempcategory\" padding placeholder=\"Category(s)\">\n                          <ion-icon name=\"filing\" style=\"margin-right: 1%;\" slot=\"start\"></ion-icon>\n                        </ion-input>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <ion-item>\n                    <ion-grid>\n                      <ion-row>\n                          <ion-input padding placeholder=\"Description\" [(ngModel)]=\"tempdescription\">\n                            <ion-icon  padding-right name=\"clipboard\" style=\"margin-right: 1%;\" slot=\"start\"></ion-icon>\n                          </ion-input>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-item>\n</ion-content>\n\n<ion-content *ngIf=\"categoriesClicked == true\">\n    <ion-searchbar (ionInput)=\"geItems($event)\" placeholder=\"Category\" showCancelButton=\"focus\"></ion-searchbar>\n  \n    <ion-virtual-scroll  [items]=\"tempCategories\" approxItemHeight=\"70px\">\n    \n      <ion-item-divider *virtualHeader=\"let header\" color=\"primary\">\n        <ion-label>{{ header }}</ion-label>\n      </ion-item-divider>\n      <ion-item *virtualItem=\"let item\" (click)=\"itemClicked(item)\">\n          <ion-avatar slot=\"start\">\n              <img src=\"assets/plus.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2 text-capitalize>{{ item }}</h2>\n            <!-- <p>{{ client.email }}</p> -->\n          </ion-label>\n      </ion-item>\n    \n    </ion-virtual-scroll>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/expenses/editexpense/editexpense.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/expenses/editexpense/editexpense.module.ts ***!
  \******************************************************************/
/*! exports provided: EditexpensePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditexpensePageModule", function() { return EditexpensePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editexpense_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editexpense.page */ "./src/app/pages/expenses/editexpense/editexpense.page.ts");
















const routes = [
    {
        path: '',
        component: _editexpense_page__WEBPACK_IMPORTED_MODULE_13__["EditexpensePage"]
    }
];
let EditexpensePageModule = class EditexpensePageModule {
};
EditexpensePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["DatePicker"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_10__["Network"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"]
        ],
        declarations: [_editexpense_page__WEBPACK_IMPORTED_MODULE_13__["EditexpensePage"]]
    })
], EditexpensePageModule);



/***/ }),

/***/ "./src/app/pages/expenses/editexpense/editexpense.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/expenses/editexpense/editexpense.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGVuc2VzL2VkaXRleHBlbnNlL2VkaXRleHBlbnNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/expenses/editexpense/editexpense.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/expenses/editexpense/editexpense.page.ts ***!
  \****************************************************************/
/*! exports provided: EditexpensePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditexpensePage", function() { return EditexpensePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



















const STORAGE_KEY = 'expense_images';
let EditexpensePage = class EditexpensePage {
    constructor(router, location, datePicker, datepipe, alrtCtrl, toastController, storage, loadingController, ref, filePath, datePipe, events, file, webview, actionSheetController, camera, plt, http, formbuilder, databaseprovider, syncService, nativeHttp, network, nav) {
        this.router = router;
        this.location = location;
        this.datePicker = datePicker;
        this.datepipe = datepipe;
        this.alrtCtrl = alrtCtrl;
        this.toastController = toastController;
        this.storage = storage;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.datePipe = datePipe;
        this.events = events;
        this.file = file;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.plt = plt;
        this.http = http;
        this.formbuilder = formbuilder;
        this.databaseprovider = databaseprovider;
        this.syncService = syncService;
        this.nativeHttp = nativeHttp;
        this.network = network;
        this.nav = nav;
        this.edit = false;
        this.expense = {
            expenseName: 'name',
            selectedDate: 'da',
            Amount: 0,
            Category: 'category',
            Description: 'description',
            Date: '',
            Name: '',
            ID: 0,
            Sync: 0
        };
        this.prev = '';
        this.tempExpense = {};
        this.tempCategories = [];
        this.categoriesClicked = false;
        this.client = {
            id: 0,
            billing: {
                first_name: '',
            }
        };
        this.tempName = '';
        this.temptotalAmount = 0;
        this.tempcategory = '';
        this.tempdescription = '';
        this.tblName = "items";
        this.acttype = "added";
        this.lgdate = "2019-11-21";
        this.getId = [];
        this.categories = [];
        this.label = 'Assign to Client';
        this.images = [];
        this.errormessages = {
            expenseName: [
                { type: 'requird', message: 'First Name is required' },
                { type: 'pattern', message: 'Enter valid is required' }
            ],
            totalAmount: [
                { type: 'requird', message: 'Email is required' },
                { type: 'pattern', message: 'Enter valid is required' }
            ],
        };
        this.showEdit = 0;
        this.storage.get('app').then((val1) => {
            if (val1 === 'invoice') {
                this.storage.get('ID').then((val) => {
                    this.syncService.getbValue(val, 'Expense Edit').then((data) => {
                        this.showEdit = data[0].bValue;
                    });
                });
            }
            else {
                this.showEdit = 1;
            }
        });
        this.storage.get('userId').then((val) => {
            this.usdId = val;
            console.log(this.usdId);
        });
        this.plt.ready().then(() => {
            this.expense.selectedDate = this.datepipe.transform(new Date(), 'dd MMM yyyy');
        });
        this.sortItems();
        this.initializeItems();
        if (this.router.getCurrentNavigation().extras.state) {
            this.prev = this.router.getCurrentNavigation().extras.state.url;
            if (this.prev === '/menu/expenses') {
                this.events.publish('refreshExpenses', 'saad2', '');
            }
            if (this.prev === '/menu/logs') {
                this.events.publish('refreshLogs', 'saad2', '');
            }
            this.expense = this.router.getCurrentNavigation().extras.state.expense;
            this.tempName = this.expense.Name;
            this.temptotalAmount = this.expense.Amount;
            this.tempcategory = this.expense.Category;
            this.tempdescription = this.expense.Description;
        }
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.ngOnInit();
            }
            // Instance of should be: 
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
        this.loginform = this.formbuilder.group({
            expenseName: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required,
            ])),
            totalAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["Validators"].required,
            ]))
        });
    }
    ngOnInit() {
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.client !== 'undefined') {
                // this.expense.billTo = this.router.getCurrentNavigation().extras.state.client;
                // this.label ='Bill to ' + this.router.getCurrentNavigation().extras.state.client.billing.first_name;
                // debugger
            }
        }
    }
    back() {
        // if (this.prev === '/menu/expenses') {
        //    this.nav.navigateRoot(this.prev);
        // } else {
        //   this.location.back();
        // }
        // this.router.navigate(['/menu/expenses']);
        this.nav.navigateRoot(this.prev);
    }
    // save() {
    //   this.router.navigate(['expenses']);
    // }
    showDate() {
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datePicker.show(options).then((date) => {
            this.expense.selectedDate = this.datepipe.transform(date, 'dd-MM-yyyy');
            console.log('selected:', this.expense.selectedDate);
        });
        // this.datePicker.show({
        //   date: new Date(),
        //   mode: 'date',
        //   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        // }).then(
        //   date => console.log('Got date: ', date),
        //   err => console.log('Error occurred while getting date: ', err)
        // );
    }
    attchimage() {
    }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Image source',
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            // tslint:disable-next-line: no-debugger
                            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    takePicture(sourceType) {
        const options = {
            quality: 30,
            sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                    const correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    const currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
            }
            else {
                const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                const correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            }
        });
    }
    createFileName() {
        const d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    }
    copyFileToLocalDir(namePath, currentName, newFileName) {
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
            this.updateStoredImages(newFileName);
        }, error => {
            this.presentToast('Error while storing file.');
        });
    }
    updateStoredImages(name) {
        this.storage.get(STORAGE_KEY).then(images => {
            const arr = JSON.parse(images);
            if (!arr) {
                const newImages = [name];
                this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            const filePath = this.file.dataDirectory + name;
            const resPath = this.pathForImage(filePath);
            const newEntry = {
                name,
                path: resPath,
                filePath
            };
            // this.images = [];
            debugger;
            this.images = [newEntry, ...this.images];
            // this.images[0] = [newEntry, ...this.images];
            this.ref.detectChanges(); // trigger change detection cycle
            // this.startUpload(newEntry);
        });
    }
    deleteImage(imgEntry, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            loading.present();
            debugger;
            this.images.splice(position, 1);
            this.storage.get(STORAGE_KEY).then(images => {
                const arr = JSON.parse(images);
                const filtered = arr.filter(name => name !== imgEntry.name);
                this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
                const correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
                debugger;
                this.file.removeFile(correctPath, imgEntry.name).then(res => {
                    this.presentToast('File removed.');
                });
            });
            loading.dismiss();
        });
    }
    startUpload(imgEntry) {
        this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(entry => {
            entry.file(file => this.readFile(file));
        })
            .catch(err => {
            this.presentToast('Error while reading file.');
        });
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const formData = new FormData();
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('file', imgBlob, file.name);
            this.uploadImageData(formData);
        };
        reader.readAsArrayBuffer(file);
    }
    uploadImageData(formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Uploading image',
            });
            yield loading.present();
            this.http.post('http://192.168.100.5/ionicimage/upload.php', formData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => {
                loading.dismiss();
            }))
                .subscribe(res => {
                // tslint:disable-next-line: no-string-literal
                if (res['success']) {
                    this.presentToast('File upload complete.');
                }
                else {
                    this.presentToast('File upload failed.');
                }
            });
        });
    }
    pathForImage(img) {
        if (img === null) {
            return '';
        }
        else {
            const converted = this.webview.convertFileSrc(img);
            return converted;
        }
    }
    presentToast(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                position: 'bottom',
                duration: 3000
            });
            toast.present();
        });
    }
    itemClicked(item) {
        debugger;
        // this.expense.category = item;
        this.categoriesClicked = false;
    }
    clicked() {
        this.categoriesClicked = true;
    }
    geItems(searchbar) {
        this.initializeItems();
        const q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.tempCategories = this.tempCategories.filter((v) => {
            if (v && q) {
                if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    }
    initializeItems() {
        this.tempCategories = this.categories;
    }
    sortItems() {
        debugger;
        this.categories = this.categories.sort((a, b) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
        debugger;
    }
    save() {
        this.expense;
        const index = this.images.length;
        // this.expense.image = this.images[index-1];
        const navigationExtras = {
            state: {
                expense: this.expense
            }
        };
        this.router.navigate(['/menu/expenses'], navigationExtras);
        debugger;
    }
    del() {
        this.shareALert("Warning", '', 'Are you sure you want to delete this expense?');
    }
    shareALert(head, sub, msg) {
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
                    handler: () => {
                        console.log('yes');
                        // this.deleteClient();
                        this.deleteExpense();
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
    addClient() {
        this.url = this.router.url;
        const navigationExtras = {
            state: {
                url: this.url
            }
        };
        this.router.navigate(['add-client-clients'], navigationExtras);
    }
    deleteExpense() {
        this.expense;
        debugger;
        if (this.expense.Sync === 1) {
            this.expense.Sync = 2;
        }
        debugger;
        this.syncService.deleteExpense(this.expense.ID, this.expense.Sync).then(() => {
            this.AddLog();
            this.databaseprovider.setupdateexpenses(1);
            this.router.navigate(['/menu/expenses']);
            if (this.network.type === 'none') {
            }
            else {
                debugger;
                this.syncAddedExpenses();
                this.syncUpdatedExpenses();
            }
        });
    }
    AddLog() {
        if (this.usdId === 1) {
            this.acttype = 'Adnan Ali delete';
        }
        else {
            this.acttype = 'Test deleted';
        }
        this.name = 'Expense';
        let now = new Date().toString();
        const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName = 'tblexpenses';
        this.tblId = this.expense.ID;
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        debugger;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(data => {
            console.log("Log has been added");
            this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    }
    syncAddedExpenses() {
        this.syncService.syncAddedExpenses().then((data) => {
            debugger;
            if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                    IDs[i] = data[i].ID;
                }
                const url = this.databaseprovider.getURL();
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url + '/syncAddedExpenses.php', {
                    "Expenses": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        this.syncService.updateSyncedExpenses(IDs);
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
    syncUpdatedExpenses() {
        this.syncService.syncUpdatedExpenses().then((data) => {
            debugger;
            if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                    IDs[i] = data[i].ID;
                }
                const url = this.databaseprovider.getURL();
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url + '/syncDeletedExpenses.php', {
                    "Expenses": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_18__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        this.syncService.updateSyncedExpenses(IDs);
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
    getAllCategoriesLocaldb() {
        this.syncService.getAllCategories().then((data) => {
            this.categories = data;
            this.tempCategories = data;
            for (let i = 0; i < this.categories.length; i++) {
                this.tempCategories[i] = this.categories[i].name;
            }
        });
    }
};
EditexpensePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__["FilePath"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_13__["DatabaseService"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_17__["SyncService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
EditexpensePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editexpense',
        template: __webpack_require__(/*! raw-loader!./editexpense.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/expenses/editexpense/editexpense.page.html"),
        styles: [__webpack_require__(/*! ./editexpense.page.scss */ "./src/app/pages/expenses/editexpense/editexpense.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"],
        _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"],
        _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__["FilePath"],
        _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
        _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_13__["DatabaseService"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_17__["SyncService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
], EditexpensePage);



/***/ })

}]);
//# sourceMappingURL=pages-expenses-editexpense-editexpense-module-es2015.js.map