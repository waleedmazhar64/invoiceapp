(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-expense-new-expense-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/new-expense/new-expense.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/new-expense/new-expense.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <div style=\"width: 100%;\">\n        <ion-toolbar color=\"primary\">\n          <ion-grid>\n            <ion-row>\n                <ion-icon padding  name=\"close\" (click)=\"back()\"></ion-icon>\n                <ion-title>New Expenses</ion-title>\n                <ion-label padding (click)=\"save()\">Save</ion-label>\n            </ion-row>\n          </ion-grid>\n          \n        </ion-toolbar>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n              <div>\n                  <span style=\"float:right;padding-right: 5px;\">{{expense.selectedDate}}</span>\n              </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      </ion-toolbar>\n  \n  </ion-header>\n\n<ion-content *ngIf=\"categoriesClicked == false\">\n    <ion-item *ngIf=\"images.length>0\">\n        <ion-img [src]=\"images[0].path\" (click)=\"selectImage()\"></ion-img>\n     </ion-item>\n    <!-- <ion-list *ngFor=\"let item of images;index as pos\">\n        <ion-item >\n           <ion-thumbnail slot=\"start\">\n               <ion-img [src]=\"item.path\" (click)=\"selectImage()\"></ion-img>\n             </ion-thumbnail>\n        </ion-item>\n    </ion-list> -->\n    <!-- <ion-item lines=\"none\"  (click)=\"selectImage()\">\n        <ion-label text-center style=\"color:royalblue;\">\n         <ion-icon  name=\"add-circle-outline\"></ion-icon> Attached Image\n        </ion-label>\n      </ion-item> -->\n      <form [formGroup]=\"loginform\">\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n              <ion-input [(ngModel)]=\"expense.expenseName\" formControlName=\"expenseName\" padding placeholder=\"Expense Name\"></ion-input>\n              <ng-container *ngFor=\"let error of errormessages.expenseName\">\n                <div  style=\"color: red;\" *ngIf=\"loginform.get('expenseName').hasError(error.type) && (loginform.get('expenseName').dirty || loginform.get('expenseName').touched)\">\n                  *{{ error.message }}\n                </div>\n              </ng-container>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item >\n        <ion-grid no-padding>\n              <ion-row>\n                <ion-col style=\"margin-top:2%;\">\n                   Total Amount\n                </ion-col>\n                <ion-col>\n                    <span no-padding style=\"float: right;margin-right:12px;\">\n                        <ion-input  type=\"number\" placeholder=\"0.0\" formControlName=\"totalAmount\" style=\"border: none;text-align: right;\" [(ngModel)]=\"expense.totalAmount\"></ion-input>\n                        <ng-container *ngFor=\"let error of errormessages.totalAmount\">\n                          <div  style=\"color: red;\" *ngIf=\"loginform.get('totalAmount').hasError(error.type) && (loginform.get('totalAmount').dirty || loginform.get('totalAmount').touched)\">\n                            *{{ error.message }}\n                          </div>\n                        </ng-container>\n                      </span>\n                </ion-col>\n              </ion-row>\n            </ion-grid> \n  \n        </ion-item >\n      </form>\n        <ion-item>\n                <ion-grid>\n                  <ion-row>\n                      <ion-input (click)=\"categoriesClicked = true\" [(ngModel)]=\"expense.category\" padding placeholder=\"Category(s)\">\n                        <ion-icon name=\"filing\" style=\"margin-right: 1%;\" slot=\"start\"></ion-icon>\n                      </ion-input>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n              <ion-item>\n                  <ion-grid>\n                    <ion-row>\n                        <ion-input padding placeholder=\"Description\" [(ngModel)]=\"expense.description\">\n                          <ion-icon  padding-right name=\"clipboard\" style=\"margin-right: 1%;\" slot=\"start\"></ion-icon>\n                        </ion-input>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n                <!-- <ion-item lines=\"none\"  (click)=\"addClient()\">\n                    <ion-label text-center style=\"color:royalblue;\">\n                     <ion-icon  name=\"cash\"></ion-icon> {{label}} {{a}}\n                    </ion-label>\n                  </ion-item> -->\n\n                    <!-- <form [formGroup]=\"loginform\">\n                <ion-grid>\n                    <ion-row justify-content-center>\n                      <ion-input [(ngModel)]=\"expense.expenseName\" formControlName=\"expenseName\" padding placeholder=\"Expense Name\"></ion-input>\n                      <ng-container *ngFor=\"let error of errormessages.expenseName\">\n                        <div  style=\"color: red;\" *ngIf=\"loginform.get('expenseName').hasError(error.type) && (loginform.get('expenseName').dirty || loginform.get('expenseName').touched)\">\n                          *{{ error.message }}\n                        </div>\n                      </ng-container>\n                    </ion-row>\n                    <ion-row justify-content-center>\n                      <ion-col style=\"margin-top:2%;\">\n                        Total Amount\n                     </ion-col>\n                     <ion-col>\n                         <span no-padding style=\"float: right;margin-right:12px;\">\n                             <ion-input  type=\"number\" placeholder=\"0.0\" formControlName=\"totalAmount\" style=\"border: none;text-align: right;\" [(ngModel)]=\"expense.totalAmount\"></ion-input>\n                             <ng-container *ngFor=\"let error of errormessages.totalAmount\">\n                               <div  style=\"color: red;\" *ngIf=\"loginform.get('totalAmount').hasError(error.type) && (loginform.get('totalAmount').dirty || loginform.get('totalAmount').touched)\">\n                                 *{{ error.message }}\n                               </div>\n                             </ng-container>\n                           </span>\n                     </ion-col>\n                       </ion-row>\n                       <ion-row justify-content-center>\n                        <ion-input (click)=\"categoriesClicked = true\" [(ngModel)]=\"expense.category\" padding placeholder=\"Category(s)\">\n                          <ion-icon name=\"filing\" style=\"margin-right: 1%;\" slot=\"start\"></ion-icon>\n                        </ion-input>\n                          </ion-row>\n                        </ion-grid>\n                    </form>  -->\n</ion-content>\n\n<ion-content *ngIf=\"categoriesClicked == true\">\n    <ion-searchbar (ionInput)=\"geItems($event)\" placeholder=\"Category\" showCancelButton=\"focus\"></ion-searchbar>\n  \n    <ion-virtual-scroll  [items]=\"tempCategories\" approxItemHeight=\"70px\">\n    \n      <ion-item-divider *virtualHeader=\"let header\" color=\"primary\">\n        <ion-label>{{ header }}</ion-label>\n      </ion-item-divider>\n      <ion-item *virtualItem=\"let item\" (click)=\"itemClicked(item)\">\n          <ion-avatar slot=\"start\">\n              <img src=\"assets/plus.png\">\n          </ion-avatar>\n          <ion-label>\n            <h2 text-capitalize>{{ item }}</h2>\n            <!-- <p>{{ client.email }}</p> -->\n          </ion-label>\n      </ion-item>\n    \n    </ion-virtual-scroll>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/new-expense/new-expense.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/new-expense/new-expense.module.ts ***!
  \*********************************************************/
/*! exports provided: NewExpensePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewExpensePageModule", function() { return NewExpensePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_expense_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./new-expense.page */ "./src/app/pages/new-expense/new-expense.page.ts");
















var routes = [
    {
        path: '',
        component: _new_expense_page__WEBPACK_IMPORTED_MODULE_13__["NewExpensePage"]
    }
];
var NewExpensePageModule = /** @class */ (function () {
    function NewExpensePageModule() {
    }
    NewExpensePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_10__["DatePicker"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
                _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_8__["WebView"],
                _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
                _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"],
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__["HTTP"]
            ],
            declarations: [_new_expense_page__WEBPACK_IMPORTED_MODULE_13__["NewExpensePage"]]
        })
    ], NewExpensePageModule);
    return NewExpensePageModule;
}());



/***/ }),

/***/ "./src/app/pages/new-expense/new-expense.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/new-expense/new-expense.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1leHBlbnNlL25ldy1leHBlbnNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/new-expense/new-expense.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/new-expense/new-expense.page.ts ***!
  \*******************************************************/
/*! exports provided: NewExpensePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewExpensePage", function() { return NewExpensePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");




















var STORAGE_KEY = 'expense_images';
var NewExpensePage = /** @class */ (function () {
    function NewExpensePage(router, location, datePicker, datepipe, alrtCtrl, toastController, storage, loadingController, ref, filePath, datePipe, events, file, webview, actionSheetController, syncService, camera, plt, http, databaseprovider, formbuilder, network, nativeHttp) {
        var _this = this;
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
        this.syncService = syncService;
        this.camera = camera;
        this.plt = plt;
        this.http = http;
        this.databaseprovider = databaseprovider;
        this.formbuilder = formbuilder;
        this.network = network;
        this.nativeHttp = nativeHttp;
        this.expense = {
            expenseName: '',
            selectedDate: '',
            totalAmount: '',
            category: '',
            description: ''
        };
        this.tempCategories = [];
        this.categoriesClicked = false;
        this.categories = [];
        this.images = [];
        this.label = 'Assign to Client';
        this.a = '';
        this.tblName = "items";
        this.acttype = "added";
        this.lgdate = "2019-11-21";
        this.getId = [];
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
        this.getAllCategoriesLocaldb();
        this.storage.get('userId').then(function (val) {
            _this.usdId = val;
            console.log(_this.usdId);
        });
        this.plt.ready().then(function () {
            _this.expense.selectedDate = _this.datepipe.transform(new Date(), 'dd MMM yyyy');
        });
        this.sortItems();
        this.initializeItems();
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.ngOnInit();
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
    NewExpensePage.prototype.ngOnInit = function () {
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.client !== 'undefined') {
                // this.expense.billTo = this.router.getCurrentNavigation().extras.state.client;
                // this.label ='Bill to ' + this.router.getCurrentNavigation().extras.state.client.billing.first_name;
                // debugger
            }
        }
    };
    NewExpensePage.prototype.back = function () {
        this.router.navigate(['/menu/expenses']);
    };
    NewExpensePage.prototype.getCid = function () {
        var _this = this;
        debugger;
        this.syncService.getExpenesonspot().then(function (data) {
            _this.getId = data;
            console.log(_this.getId);
            _this.tblId = _this.getId[0].ID;
            // this.name = this.getId[0].Fname + ' ' + this.getId[0].Lname;
            debugger;
            console.log(_this.tblId);
            _this.AddLog();
        });
    };
    NewExpensePage.prototype.showDate = function () {
        var _this = this;
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datePicker.show(options).then(function (date) {
            _this.expense.selectedDate = _this.datepipe.transform(date, 'dd MMM yyyy');
            console.log('selected:', _this.expense.selectedDate);
        });
        // this.datePicker.show({
        //   date: new Date(),
        //   mode: 'date',
        //   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        // }).then(
        //   date => console.log('Got date: ', date),
        //   err => console.log('Error occurred while getting date: ', err)
        // );
    };
    NewExpensePage.prototype.attchimage = function () {
    };
    NewExpensePage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Image source',
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        // tslint:disable-next-line: no-debugger
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewExpensePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 30,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.plt.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    NewExpensePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    };
    NewExpensePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            _this.updateStoredImages(newFileName);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    NewExpensePage.prototype.updateStoredImages = function (name) {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            if (!arr) {
                var newImages = [name];
                _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            var filePath = _this.file.dataDirectory + name;
            var resPath = _this.pathForImage(filePath);
            var newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            // this.images = [];
            debugger;
            _this.images = [newEntry].concat(_this.images);
            // this.images[0] = [newEntry, ...this.images];
            _this.ref.detectChanges(); // trigger change detection cycle
            // this.startUpload(newEntry);
        });
    };
    NewExpensePage.prototype.deleteImage = function (imgEntry, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please wait...'
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        debugger;
                        this.images.splice(position, 1);
                        this.storage.get(STORAGE_KEY).then(function (images) {
                            var arr = JSON.parse(images);
                            var filtered = arr.filter(function (name) { return name !== imgEntry.name; });
                            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
                            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
                            debugger;
                            _this.file.removeFile(correctPath, imgEntry.name).then(function (res) {
                                _this.presentToast('File removed.');
                            });
                        });
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewExpensePage.prototype.startUpload = function (imgEntry) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            _this.presentToast('Error while reading file.');
        });
    };
    NewExpensePage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('file', imgBlob, file.name);
            _this.uploadImageData(formData);
        };
        reader.readAsArrayBuffer(file);
    };
    NewExpensePage.prototype.uploadImageData = function (formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Uploading image',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.http.post('http://192.168.100.5/ionicimage/upload.php', formData)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () {
                            loading.dismiss();
                        }))
                            .subscribe(function (res) {
                            // tslint:disable-next-line: no-string-literal
                            if (res['success']) {
                                _this.presentToast('File upload complete.');
                            }
                            else {
                                _this.presentToast('File upload failed.');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NewExpensePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    NewExpensePage.prototype.presentToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewExpensePage.prototype.itemClicked = function (item) {
        debugger;
        this.expense.category = item;
        this.categoriesClicked = false;
    };
    NewExpensePage.prototype.clicked = function () {
        this.categoriesClicked = true;
    };
    NewExpensePage.prototype.geItems = function (searchbar) {
        this.initializeItems();
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.tempCategories = this.tempCategories.filter(function (v) {
            if (v && q) {
                if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    NewExpensePage.prototype.initializeItems = function () {
        this.tempCategories = this.categories;
    };
    NewExpensePage.prototype.sortItems = function () {
        debugger;
        this.categories = this.categories.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
        debugger;
    };
    NewExpensePage.prototype.save = function () {
        if (this.loginform.valid === true) {
            this.addExpense();
            this.getCid();
        }
        else {
            alert('Kindly enter correct information in fields');
        }
        this.expense;
        var index = this.images.length;
        // this.expense.image = this.images[index-1];
        debugger;
    };
    NewExpensePage.prototype.addClient = function () {
        this.url = this.router.url;
        var navigationExtras = {
            state: {
                url: this.url
            }
        };
        this.router.navigate(['add-client-clients'], navigationExtras);
    };
    NewExpensePage.prototype.addExpense = function () {
        var _this = this;
        debugger;
        var now = new Date().toString();
        var a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.syncService.addExpense(this.expense.expenseName, a, this.expense.totalAmount, this.expense.category, this.expense.description)
            .then(function (data) {
            data;
            _this.databaseprovider.setupdateexpenses(1);
            _this.router.navigate(['/menu/expenses']);
            if (_this.network.type === 'none') {
            }
            else {
                debugger;
                _this.syncAddedExpenses();
            }
        });
    };
    NewExpensePage.prototype.syncAddedExpenses = function () {
        var _this = this;
        this.syncService.syncAddedExpenses().then(function (data) {
            if (data.length > 0) {
                var IDs_1 = [];
                for (var i = 0; i < data.length; i++) {
                    IDs_1[i] = data[i].ID;
                }
                var url = _this.databaseprovider.getURL();
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncAddedExpenses',
                    "Expenses": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        _this.syncService.updateSyncedExpenses(IDs_1);
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
        }).then(function () {
            _this.syncService.syncAddedLedger().then(function (data) {
                if (data.length > 0) {
                    var IDs_2 = [];
                    for (var i = 0; i < data.length; i++) {
                        IDs_2[i] = data[i].ID;
                    }
                    var url = _this.databaseprovider.getURL();
                    debugger;
                    _this.nativeHttp.setDataSerializer("json");
                    var nativeCall = _this.nativeHttp.post(url, {
                        'Name': 'syncAddedLedger',
                        "Payments": data
                    }, {
                        'Content-Type': 'application/json',
                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                    });
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { }))
                        .subscribe(function (data) {
                        console.log('Native data:', data);
                        var g = JSON.parse(data.data);
                        if (g.success === 1) {
                            // alert('success');
                            _this.syncService.updateSyncedAddedLedger(IDs_2).then(function (data) {
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
                    debugger;
                }
            });
        });
    };
    NewExpensePage.prototype.AddLog = function () {
        var _this = this;
        if (this.usdId === 1) {
            this.acttype = 'You added new';
        }
        else {
            this.acttype = 'You added new';
        }
        this.name = 'Expense';
        var now = new Date().toString();
        var a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName = 'tblexpenses';
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        debugger;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(function (data) {
            console.log("Log has been added");
            _this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    };
    NewExpensePage.prototype.getAllCategoriesLocaldb = function () {
        var _this = this;
        this.syncService.getAllCategories().then(function (data) {
            _this.categories = data;
            _this.tempCategories = data;
            for (var i = 0; i < _this.categories.length; i++) {
                _this.tempCategories[i] = _this.categories[i].name;
            }
        });
    };
    NewExpensePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_17__["SyncService"] },
        { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_14__["DatabaseService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_18__["Network"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] }
    ]; };
    NewExpensePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-expense',
            template: __webpack_require__(/*! raw-loader!./new-expense.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/new-expense/new-expense.page.html"),
            styles: [__webpack_require__(/*! ./new-expense.page.scss */ "./src/app/pages/new-expense/new-expense.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_15__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Events"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_17__["SyncService"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_14__["DatabaseService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormBuilder"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_18__["Network"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]])
    ], NewExpensePage);
    return NewExpensePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-new-expense-new-expense-module-es5.js.map