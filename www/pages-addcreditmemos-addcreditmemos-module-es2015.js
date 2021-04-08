(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addcreditmemos-addcreditmemos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addcreditmemos/addcreditmemos.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addcreditmemos/addcreditmemos.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <div style=\"width: 100%;\">\n        <ion-toolbar color=\"primary\">\n            <ion-icon padding  name=\"close\" (click)=\"back()\"></ion-icon>\n            <ion-icon padding  slot=\"end\" name=\"share-alt\" (click)=\"share()\"></ion-icon>\n        </ion-toolbar>\n      </div>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n              <div>\n                  <span style=\"float:right;padding-right: 5px; font-size: 4rem;\">C MEMO</span>\n              </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n        <div (click)=\"orderInfo()\">\n            <p  style=\"text-align:left;padding-left: 5px;\">\n                {{creditmemo.created}}\n                <span  style=\"float:right;padding-right: 5px;\">\n                    \n                </span>\n            </p>\n            <p  style=\"text-align:left;padding-left: 5px;\">\n               \n                <span  style=\"float:right;padding-right: 5px;\">\n                    {{creditmemo.name}}\n                </span>\n            </p>\n           \n        </div>\n      \n      </ion-toolbar>\n  \n  </ion-header>\n  \n  <ion-content>\n      <ion-list>\n       \n          <ion-item (click)=\"addClient()\">            \n              <ion-avatar slot=\"start\" >\n                  <img src=\"assets/plus.png\">\n                  \n              </ion-avatar>\n              <ion-label>\n                <h2 text-capitalize>{{ client }}</h2>\n                <!-- <p style=\"font-size: 10px;\">{{ add1 }}</p> -->\n                <p style=\"font-size: 10px;\">{{ add1 }}</p>\n                <!-- <p style=\"font-size: 10px;\">{{ add2 }}</p>\n                <p style=\"font-size: 10px;\">{{ add3 }}</p> -->\n            \n              </ion-label>\n             \n          </ion-item> \n          <ion-item (click)=\"addItem()\" *ngIf=\"selectedItems.length === 0\">            \n              <ion-avatar slot=\"start\" >\n                  <img src=\"assets/plus.png\">\n                  \n              </ion-avatar>\n              <ion-label>\n                <h2 text-capitalize>Item</h2>\n              </ion-label>\n          </ion-item>     \n            <ion-list *ngIf=\"selectedItems.length > 0\" >\n                <ion-item-sliding  *ngFor=\"let item of selectedItems;index as pos\" >\n                    <ion-item-options side=\"end\">\n                        <ion-item-option color=\"danger\" (click)=\"removeSelected(pos)\">Delete</ion-item-option>\n                      </ion-item-options>\n              <ion-item (click)=\"editItem(item,pos)\" >\n                  <!-- <ion-avatar slot=\"start\" >\n                      <img src=\"assets/b.png\">\n                  </ion-avatar> -->\n                  <span style=\"background-color:#ddd;text-align: center;margin-right: 10px;padding-top: 2%;padding-bottom: 2%;width: 10%;\">{{pos + 1 }}</span>\n\n                  <ion-label>\n                    <h2 text-capitalize>{{item.name}}</h2>\n                    <p>{{item.menu_order}}x{{item.sale_price}}({{item.regular_price}})</p>\n                  </ion-label>\n                  <ion-label>\n                      <span style=\"float:right;\" class=\"cancel\">\n                          PKR {{ item.menu_order * item.sale_price }}\n                      </span>\n                  </ion-label>\n              </ion-item>\n              </ion-item-sliding>\n            </ion-list>   \n            <ion-button *ngIf=\"selectedItems.length > 0\" (click)=\"addItemafter()\" expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;border-radius: 50px; --border-radius: 15px;\" >\n                <ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon>\n              Item\n            </ion-button>\n          <ion-item color=\"light\">            \n            \n                      <ion-label>\n                              <h3 text-capitalize style=\"padding-left: 5px;\"  class=\"lightgrey\">Subtotal <ion-icon  name=\"pricetag\"></ion-icon></h3>  \n                       </ion-label>\n                       <ion-label>\n                       <span style=\"float:right;\" color=\"dark\">\n                                  PKR {{subtotal}}\n                          </span>\n                      </ion-label>\n             \n          </ion-item>    \n          <ion-item color=\"light\">            \n                  <ion-label>\n                          <h3 text-capitalize style=\"padding-left: 5px;\" class=\"lightgrey\">Discount</h3>\n                        </ion-label>\n                        <ion-label>\n                            <span style=\"float:right;\" class=\"cancel\">\n                                PKR {{discount}}\n                            </span>\n                        </ion-label>\n                 \n           </ion-item>\n           <ion-item color=\"dark\">            \n                  <ion-label>\n                          <h1 text-capitalize style=\"padding-left: 5px;\">Total</h1>\n                          <h5 style=\"font-size: 10px;\">Paid:PKR {{payed}}</h5>\n                   </ion-label>\n                   <ion-label>\n                            <span style=\"float:right;\" >\n                              <h1> PKR{{total}}</h1> \n                              <h6 style=\"font-size: 10px;\">Balance Due:PKR {{duepayment}}</h6> \n\n                            </span>\n                    </ion-label>\n                 \n           </ion-item>  \n           <ion-button (click)=\"comment()\" expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;border-radius: 50px; --border-radius: 15px;\" >{{ message }}</ion-button>\n           <ion-list *ngFor=\"let item of images;index as pos\">\n               <ion-item >\n                  <ion-thumbnail slot=\"start\">\n                      <ion-img [src]=\"item.path\"></ion-img>\n                    </ion-thumbnail>\n                    <ion-label>\n                      Attachment\n                    </ion-label>\n                    <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(item, pos)\" class=\"ion-md-time\">\n                      <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                    </ion-button>\n               </ion-item>\n           </ion-list>\n           <ion-button (click)=\"selectImage()\" expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;--border-radius: 15px;\"> <ion-icon slot=\"start\" name=\"attach\"></ion-icon>Attachments</ion-button>\n\n</ion-list>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/addcreditmemos/addcreditmemos.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/addcreditmemos/addcreditmemos.module.ts ***!
  \***************************************************************/
/*! exports provided: AddcreditmemosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcreditmemosPageModule", function() { return AddcreditmemosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addcreditmemos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcreditmemos.page */ "./src/app/pages/addcreditmemos/addcreditmemos.page.ts");







const routes = [
    {
        path: '',
        component: _addcreditmemos_page__WEBPACK_IMPORTED_MODULE_6__["AddcreditmemosPage"]
    }
];
let AddcreditmemosPageModule = class AddcreditmemosPageModule {
};
AddcreditmemosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_addcreditmemos_page__WEBPACK_IMPORTED_MODULE_6__["AddcreditmemosPage"]]
    })
], AddcreditmemosPageModule);



/***/ }),

/***/ "./src/app/pages/addcreditmemos/addcreditmemos.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/addcreditmemos/addcreditmemos.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZGNyZWRpdG1lbW9zL2FkZGNyZWRpdG1lbW9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/addcreditmemos/addcreditmemos.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/addcreditmemos/addcreditmemos.page.ts ***!
  \*************************************************************/
/*! exports provided: AddcreditmemosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcreditmemosPage", function() { return AddcreditmemosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");














const STORAGE_KEY = 'cm_images';
let AddcreditmemosPage = class AddcreditmemosPage {
    constructor(location, alrtCtrl, router, toastController, storage, loadingController, ref, filePath, datePipe, events, file, webview, actionSheetController, camera, plt, http, databaseprovider) {
        this.location = location;
        this.alrtCtrl = alrtCtrl;
        this.router = router;
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
        this.databaseprovider = databaseprovider;
        this.creditmemo = {
            created: '',
            name: 'CM01',
            terms: 'Issued'
        };
        this.images = [];
        this.message = '';
        this.client = 'Client';
        this.email = '';
        this.add1 = '';
        this.add2 = '';
        this.add3 = '';
        this.shippingTo = '';
        this.sAdd1 = '';
        this.sAdd2 = '';
        this.sAdd3 = '';
        this.selectedItems = [];
        this.subtotal = 0;
        this.discount = 0;
        this.total = 0;
        this.payed = 0;
        this.duepayment = 0;
        this.time = new Date();
        this.currentDate = new Date().toString();
        this.data = [
        // {
        //   no: '1',
        //   date: '10/28/2019',
        //  amount: '10.00'
        //  }
        ];
        this.url = this.router.url;
        this.creditmemo.created = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy');
        const a = 'menu' + this.router.url;
        debugger;
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.ngOnInit();
            }
            // Instance of should be: 
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
        if (this.router.getCurrentNavigation().extras.state) {
            this.message = this.router.getCurrentNavigation().extras.state.user;
        }
        else {
            this.message = 'Thanks for your business';
        }
        if (this.router.getCurrentNavigation().extras.state) {
            this.client = this.router.getCurrentNavigation().extras.state.name;
        }
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.meta_data !== 'undefined') {
                debugger;
                this.data = this.router.getCurrentNavigation().extras.state.meta_data;
                this.payed = this.router.getCurrentNavigation().extras.state.payed;
                this.duepayment = this.router.getCurrentNavigation().extras.state.duepayment;
            }
        }
        debugger;
    }
    ngOnInit() {
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.message !== 'undefined') {
                // debugger;
                this.message = this.router.getCurrentNavigation().extras.state.message;
            }
        }
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.client !== 'undefined') {
                debugger;
                this.selectedClient = this.router.getCurrentNavigation().extras.state.client;
                this.client = this.router.getCurrentNavigation().extras.state.client.first_name;
                this.add1 = this.router.getCurrentNavigation().extras.state.client.billing.address_1;
            }
        }
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.items !== 'undefined') {
                debugger;
                this.subtotal = 0;
                this.discount = 0;
                this.total = 0;
                for (let i = 0; i < this.router.getCurrentNavigation().extras.state.items.length; i++) {
                    this.selectedItems.push(this.router.getCurrentNavigation().extras.state.items[i]);
                }
                console.log('y' + this.selectedItems.length);
                for (let i = 0; i < this.selectedItems.length; i++) {
                    this.subtotal = this.subtotal + (this.selectedItems[i].menu_order * this.selectedItems[i].regular_price);
                    this.discount = this.discount + (this.selectedItems[i].regular_price - this.selectedItems[i].sale_price);
                    this.total = this.subtotal - this.discount;
                    const a = parseFloat(this.discount.toString()).toFixed(2);
                    const b = parseFloat(this.total.toString()).toFixed(2);
                    const c = parseFloat(this.subtotal.toString()).toFixed(2);
                    this.discount = parseFloat(a);
                    this.total = parseFloat(b);
                    this.subtotal = parseFloat(c);
                    this.duepayment = this.total - this.payed;
                    debugger;
                }
            }
            if (typeof this.router.getCurrentNavigation().extras.state.edititem !== 'undefined') {
                this.subtotal = 0;
                this.discount = 0;
                this.total = 0;
                this.selectedItems[this.router.getCurrentNavigation().extras.state.position] = this.router.getCurrentNavigation().extras.state.edititem;
                for (let i = 0; i < this.selectedItems.length; i++) {
                    this.subtotal = this.subtotal + (this.selectedItems[i].menu_order * this.selectedItems[i].regular_price);
                    this.discount = this.discount + (this.selectedItems[i].regular_price - this.selectedItems[i].sale_price) * this.selectedItems[i].menu_order;
                    this.total = this.subtotal - this.discount;
                    const a = parseFloat(this.discount.toString()).toFixed(2);
                    const b = parseFloat(this.total.toString()).toFixed(2);
                    const c = parseFloat(this.subtotal.toString()).toFixed(2);
                    this.discount = parseFloat(a);
                    this.total = parseFloat(b);
                    this.subtotal = parseFloat(c);
                    this.duepayment = this.total - this.payed;
                    debugger;
                }
            }
        }
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.meta_data !== 'undefined') {
                debugger;
                this.data = this.router.getCurrentNavigation().extras.state.meta_data;
                this.payed = this.router.getCurrentNavigation().extras.state.payed;
                this.duepayment = this.router.getCurrentNavigation().extras.state.duepayment;
            }
        }
        // if (this.router.getCurrentNavigation().extras.state) {
        //   if ( typeof this.router.getCurrentNavigation().extras.state.invoice !== 'undefined') {
        //    // debugger;
        //     this.invoice = this.router.getCurrentNavigation().extras.state.invoice;
        //   }
        // }
    }
    orderInfo() {
        debugger;
        const navigationExtras = {
            state: {
                // user: this.received
                creditmemo: this.creditmemo
            }
        };
        this.router.navigate(['credit-memo-info'], navigationExtras);
    }
    back() {
        // this.router.navigate(['invoicedetails']);
        // this.location.back();
        this.showALert('', '', 'Save this credit memo?');
    }
    showALert(head, sub, msg) {
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
                        this.images = [];
                        //  this.location.back();
                        this.router.navigate(['menu/creditmemos']);
                        console.log('Confirm Cancel');
                        this.selectedItems = [];
                        this.discount = 0.00;
                        this.subtotal = 0.00;
                        this.total = 0.00;
                        this.images = [];
                        this.message = 'Thanks for your business';
                        this.client = 'Client';
                        this.email = '';
                        this.add1 = '';
                        this.add2 = '';
                        this.add3 = '';
                        this.shippingTo = '';
                        this.sAdd1 = '';
                        this.sAdd2 = '';
                        this.sAdd3 = '';
                    }
                },
                {
                    text: 'Save',
                    handler: () => {
                        console.log('Confirm Ok');
                        this.selectedClient;
                        this.selectedItems;
                        this.total;
                        this.discount;
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    share() {
        const msg = 'Save <br/><br/> Preview <br/><br/> Email <br/><br/> Share <br/><br/> Add Credits <br/><br/> Print ';
        this.shareALert('', '', '');
    }
    shareALert(head, sub, msg) {
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'changeAvatar',
            buttons: [
                {
                    text: 'Save',
                    cssClass: 'alert-button-inner',
                    role: 'cancel',
                    handler: () => {
                        console.log('Confirm Cancel');
                        this.selectedItems;
                        this.selectedClient;
                        this.data;
                        debugger;
                    }
                },
                {
                    text: 'Preview',
                    cssClass: 'alert-button-inner',
                    role: 'cancel',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                },
                {
                    text: 'Email',
                    cssClass: 'alert-button-inner',
                    role: 'cancel',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                },
                {
                    text: 'Share',
                    cssClass: 'alert-button-inner',
                    role: 'cancel',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                },
                {
                    text: 'Cancel',
                    cssClass: 'cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                },
            ]
        }).then(alert => alert.present());
    }
    loadStoredImages() {
        this.storage.get(STORAGE_KEY).then(images => {
            if (images) {
                const arr = JSON.parse(images);
                this.images = [];
                for (const img of arr) {
                    const filePath = this.file.dataDirectory + img;
                    const resPath = this.pathForImage(filePath);
                    // tslint:disable-next-line: object-literal-shorthand
                    this.images.push({ name: img, path: resPath, filePath: filePath });
                    console.log(images.resPath);
                }
            }
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
            this.images = [newEntry, ...this.images];
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
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
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
    wait(ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }
    addClient() {
        // const navigationExtras: NavigationExtras = {
        //   state: {
        //     name: this.client,
        //     email: this.email,
        //     add1: this.add1,
        //     add2: this.add2,
        //     add3: this.add3,
        //     shippingTo: this.shippingTo,
        //     sAdd1: this.sAdd1,
        //     sAdd2: this.sAdd2,
        //     sAdd3: this.sAdd3
        //   }
        // };
        // this.router.navigate(['add-client'], navigationExtras);
        const navigationExtras = {
            state: {
                url: this.url
            }
        };
        this.router.navigate(['add-client-clients'], navigationExtras);
    }
    addItem() {
        const navigationExtras = {
            state: {
                url: this.url
            }
        };
        this.router.navigate(['add-item/additem-items'], navigationExtras);
    }
    comment() {
        const navigationExtras = {
            state: {
                user: this.message,
                url: this.url
            }
        };
        this.router.navigate(['comment'], navigationExtras);
        //  this.router.navigate(['comment']);
    }
    addItemafter() {
        this.databaseprovider.saveArray(this.selectedItems);
        this.router.navigate(['add-item/additem-items']);
    }
    editItem(item, pos) {
        console.log(pos);
        this.url = this.router.url;
        const navigationExtras = {
            state: {
                // user: this.received
                edititem: item,
                position: pos,
                url: this.url
            }
        };
        this.router.navigate(['edit-item'], navigationExtras);
    }
    clearAll() {
        this.selectedItems = [];
        this.discount = 0.00;
        this.subtotal = 0.00;
        this.total = 0.00;
        this.images = [];
        this.message = 'Thanks for your business';
        this.client = 'Client';
        this.email = '';
        this.add1 = '';
        this.add2 = '';
        this.add3 = '';
        this.shippingTo = '';
        this.sAdd1 = '';
        this.sAdd2 = '';
        this.sAdd3 = '';
        this.databaseprovider.setItemUrl('');
    }
    removeSelected(pos) {
        debugger;
        // let a = this.databaseprovider.getSeletedItems();
        this.selectedItems.splice(pos, 1);
        // this.databaseprovider.removeSelectedItem(pos);
        // a = this.databaseprovider.getSeletedItems();
        debugger;
    }
};
AddcreditmemosPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__["FilePath"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"] }
];
AddcreditmemosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addcreditmemos',
        template: __webpack_require__(/*! raw-loader!./addcreditmemos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addcreditmemos/addcreditmemos.page.html"),
        styles: [__webpack_require__(/*! ./addcreditmemos.page.scss */ "./src/app/pages/addcreditmemos/addcreditmemos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_4__["FilePath"],
        _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"]])
], AddcreditmemosPage);



/***/ })

}]);
//# sourceMappingURL=pages-addcreditmemos-addcreditmemos-module-es2015.js.map