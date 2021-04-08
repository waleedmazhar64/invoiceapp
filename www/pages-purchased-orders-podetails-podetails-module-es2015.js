(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-purchased-orders-podetails-podetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/purchased-orders/podetails/podetails.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/purchased-orders/podetails/podetails.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <div style=\"width: 100%;\">\n        <ion-toolbar color=\"primary\">\n            <ion-label padding slot=\"start\" (click)=\"back()\">Close</ion-label>\n\n            <!-- <ion-icon padding  name=\"close\" (click)=\"back()\"></ion-icon> -->\n            <!-- <ion-icon padding  slot=\"end\" name=\"share-alt\" (click)=\"share()\"></ion-icon> -->\n            <ion-label *ngIf=\"PO.Active == 1 && tempTotal !== total\" padding slot=\"end\" (click)=\"share()\">Save</ion-label>\n            <span  style=\"float:right;padding-right: 5px;font-weight: bold;\">\n              <a (click)=\"copypaste()\">{{client}}</a>\n          </span>  \n          <!-- <span style=\"float:right;padding-right: 5px;font-size: 85%;\">\n              {{info3}}\n            </span>      -->\n          </ion-toolbar>\n      </div>\n      <ion-grid>\n        <ion-row>\n            <ion-col size=\"6\">\n                \n                    <p  style=\"text-align:left;padding-left: 5px;font-size: 140%;\"> Purchase Order\n                    </p>\n           </ion-col>\n              <ion-col size=\"6\">\n                                  <p   style=\"position: absolute;left: 20%;right: 0%;top: 20%;font-size: 70%;\"> Dated: {{Date}}\n                  </p>\n               \n              </ion-col>\n        </ion-row>\n      </ion-grid>\n        <div >\n          <p  style=\"text-align:left;padding-left: 5px;\">\n            <span (click)=\"call()\">Call</span> \n           <span (click)=\"Sms()\" style=\"float:right;padding-right: 5px;\">\n              SMS\n           </span>\n         </p>\n           \n        </div>\n      \n      </ion-toolbar>\n  \n  </ion-header>\n  \n  <ion-content>\n      <ion-list>\n       \n        \n          <ion-item (click)=\"addItem()\" *ngIf=\"tempActiveItems.length === 0\">            \n              <ion-avatar slot=\"start\" >\n                  <img src=\"assets/plus.png\">\n                  \n              </ion-avatar>\n              <ion-label>\n                <h2 text-capitalize>Item</h2>\n              </ion-label>\n          </ion-item> \n         \n          <ion-item lines=\"none\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <ion-item no-padding lines=\"none\" style=\"text-align: right;\">\n                        <p class=\"my-label1\"  style=\"font-weight: bold;\"> Qty\n                        </p>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-item lines=\"none\" style=\"text-align: left;\">\n                      <p class=\"my-label1\"  style=\"font-weight: bold;\"> Item(s)\n                      </p>\n                    </ion-item>\n                  </ion-col>\n                  <!--<ion-col size=\"3\">\n                    <ion-item lines=\"none\" style=\"text-align: right;\">\n                      <p class=\"my-label1\"  style=\"font-weight: bold;\"> Price\n                      </p>\n                    </ion-item>\n                  </ion-col>-->\n                  <ion-col size=\"4\">\n                    <ion-item lines=\"none\"style=\"text-align: right;\">\n                        <p class=\"my-label1\"  style=\"font-weight: bold;\">Total</p>\n                        <p class=\"my-label3\"  style=\"font-weight: bold;\">({{currency}})</p>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n          </ion-item>\n              \n            <ion-list no-padding>\n                <ion-item-sliding  *ngFor=\"let item of addedItems;index as pos\" >\n                    <!-- <ion-item-options side=\"end\">\n                        <ion-item-option color=\"danger\">Delete</ion-item-option>\n                      </ion-item-options> -->\n              <ion-item  >\n                <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"2\">\n                        <ion-item no-padding lines=\"none\">\n                            <!-- <ion-icon (click)=\"quantityDecrement(item)\" name=\"remove-circle\" color=\"danger\"></ion-icon>\n                            <ion-label text-center > {{item.Qty}}\n                            </ion-label>\n                            <ion-icon (click)=\"quantityIncrement(item)\" name=\"add-circle\" color=\"success\"></ion-icon> -->\n                            <!-- <ion-input (ionInput)=\"update($event,pos)\" maxlength=\"5\" text-center type=\"tel\" no-padding style=\"border: none;text-align: center;\" [(ngModel)]=\"item.Qty\"></ion-input>  -->\n                            <ion-input class=\"my-label\" [readonly]=\"true\" (ionInput)=\"updateItem($event,item)\"  maxlength=\"5\"  type=\"tel\" no-padding style=\"border: none;text-align: right;\" [(ngModel)]=\"item.Qty\"></ion-input> \n\n                          </ion-item>\n                      </ion-col>\n                      <ion-col size=\"7\">\n                          <ion-item lines=\"none\"style=\"float: left;\">\n                              <p class=\"my-label\"  >{{item.Description}}<span><ion-input [readonly]=\"true\" (ionInput)=\"updateTotal($event,item)\" maxlength=\"5\"  type=\"tel\" no-padding style=\"border: none;text-align: left;max-width: 100%;\" [(ngModel)]=\"item.CostPrice\">{{item.Qty}}x</ion-input></span></p>\n                          </ion-item>\n                      </ion-col>\n                      <!--<ion-col size=\"3\">\n                        <ion-item lines=\"none\">\n                            <ion-label text-center >{{item.Rate}}</ion-label> \n                            <ion-input [readonly]=\"true\" (ionInput)=\"updateTotal($event,item)\" maxlength=\"5\" text-center type=\"tel\" no-padding style=\"border: none;text-align: right;\" [(ngModel)]=\"item.CostPrice\"></ion-input> \n                        </ion-item>\n                      </ion-col>-->\n                      <ion-col size=\"3\">\n                        <ion-item lines=\"none\"style=\"float: right;\">\n                          <p class=\"my-label\"  >{{item.Qty * item.CostPrice}}</p>\n                      </ion-item>\n                      </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <!-- <ion-label>1</ion-label>\n                <ion-label>1</ion-label>\n                <ion-label text-center style=\"color:royalblue;\">show less</ion-label>\n                <span style=\"float:right;\" class=\"cancel\">\n                    PKR \n                </span> -->\n\n              </ion-item>\n              </ion-item-sliding>\n              <!-- <ion-item *ngIf=\"addedItems.length !== items.length\"> \n                <ion-button  (click)=\"AddItems()\"  expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;border-radius: 50px; --border-radius: 15px;\" >\n                <ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon>\n                Add Item\n                </ion-button>\n            </ion-item> -->\n            </ion-list>   \n            <!-- <ion-button *ngIf=\"selectedItems.length > 0\" (click)=\"addItemafter()\" expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;border-radius: 50px; --border-radius: 15px;\" >\n                <ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon>\n              Item\n            </ion-button> -->\n          <ion-item color=\"light\">            \n            \n                      <ion-label>\n                              <h3 text-capitalize style=\"padding-left: 5px;\"  class=\"lightgrey\">Subtotal <ion-icon  name=\"pricetag\"></ion-icon></h3>  \n                       </ion-label>\n                       <ion-label>\n                       <span style=\"float:right;\" color=\"dark\">\n                          {{subtotal | currency:currency:true:\"1.2\"}}\n                          </span>\n                      </ion-label>\n             \n          </ion-item>    \n          <ion-item color=\"light\" >            \n                  <ion-label>\n                          <h3 text-capitalize style=\"padding-left: 5px;\" class=\"lightgrey\">Discount</h3>\n                        </ion-label>\n                        <ion-label>\n                            <span style=\"float:right;\" class=\"cancel\">\n                                {{discount | currency:currency:true:\"1.2\"}}\n                            </span>\n                        </ion-label>\n                 \n           </ion-item>\n           <ion-item color=\"dark\">            \n                  <ion-label>\n                          <h1 text-capitalize style=\"padding-left: 5px;font-size: 135%;\">Total</h1>\n                          <!-- <h5 style=\"font-size: 10px;\">Paid:PKR {{payed}}</h5> -->\n                   </ion-label>\n                   <ion-label>\n                            <span style=\"float:right;\" >\n                              <h1 style=\"font-size: 135%;\"> {{subtotal - discount | currency:currency:true:\"1.2\"}}</h1> \n                              <!-- <h6 style=\"font-size: 10px;\">Balance Due:PKR {{duepayment}}</h6>  -->\n                            </span>\n                    </ion-label>\n                 \n           </ion-item>  \n           <ion-item *ngIf=\"PO.Remarks !== ''\">\n            <p><span  style=\"font-weight: bold;float:right;\">Remarks:&nbsp;</span></p>\n            <p> {{message}}</p>\n          </ion-item>\n           <!-- <ion-button (click)=\"presentPrompt()\" expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;border-radius: 50px; --border-radius: 15px;\" >Remarks</ion-button> -->\n           <!-- <ion-list *ngFor=\"let item of images;index as pos\">\n               <ion-item >\n                  <ion-thumbnail slot=\"start\">\n                      <ion-img [src]=\"item.path\"></ion-img>\n                    </ion-thumbnail>\n                    <ion-label>\n                      Attachment\n                    </ion-label>\n                    <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(item, pos)\" class=\"ion-md-time\">\n                      <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                    </ion-button>\n               </ion-item>\n           </ion-list> -->\n           <!-- <ion-button (click)=\"selectImage()\" expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;--border-radius: 15px;\"> <ion-icon slot=\"start\" name=\"attach\"></ion-icon>Attachments</ion-button> -->\n\n</ion-list>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/purchased-orders/podetails/podetails.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/purchased-orders/podetails/podetails.module.ts ***!
  \**********************************************************************/
/*! exports provided: PodetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodetailsPageModule", function() { return PodetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _podetails_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./podetails.page */ "./src/app/pages/purchased-orders/podetails/podetails.page.ts");

















const routes = [
    {
        path: '',
        component: _podetails_page__WEBPACK_IMPORTED_MODULE_15__["PodetailsPage"]
    }
];
let PodetailsPageModule = class PodetailsPageModule {
};
PodetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"],
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_7__["SMS"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_10__["FilePath"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_12__["WebView"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"],
        ],
        declarations: [_podetails_page__WEBPACK_IMPORTED_MODULE_15__["PodetailsPage"]]
    })
], PodetailsPageModule);



/***/ }),

/***/ "./src/app/pages/purchased-orders/podetails/podetails.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/purchased-orders/podetails/podetails.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-label {\n  font-size: 100%;\n}\n\n.my-label1 {\n  font-size: 100%;\n}\n\n.my-label3 {\n  font-size: 65%;\n}\n\na {\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVyY2hhc2VkLW9yZGVycy9wb2RldGFpbHMvQzpcXHdhbXA2NFxcd3d3XFxpbnZvaWNlLnBrL3NyY1xcYXBwXFxwYWdlc1xccHVyY2hhc2VkLW9yZGVyc1xccG9kZXRhaWxzXFxwb2RldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wdXJjaGFzZWQtb3JkZXJzL3BvZGV0YWlscy9wb2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtBQ0dGOztBRERBO0VBQUksY0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHVyY2hhc2VkLW9yZGVycy9wb2RldGFpbHMvcG9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcbi5teS1sYWJlbDEge1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxufSBcclxuLm15LWxhYmVsMyB7XHJcbiAgZm9udC1zaXplOiA2NSU7XHJcbn1cclxuYSB7IGNvbG9yOiBpbmhlcml0OyB9IFxyXG4iLCIubXktbGFiZWwge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbi5teS1sYWJlbDEge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbi5teS1sYWJlbDMge1xuICBmb250LXNpemU6IDY1JTtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/purchased-orders/podetails/podetails.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/purchased-orders/podetails/podetails.page.ts ***!
  \********************************************************************/
/*! exports provided: PodetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodetailsPage", function() { return PodetailsPage; });
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");





















let PodetailsPage = class PodetailsPage {
    constructor(location, alrtCtrl, router, toastController, storage, loadingController, ref, filePath, datePipe, events, file, webview, actionSheetController, camera, plt, http, databaseprovider, nativeHttp, alertCtrl, syncService, network, callnumber, sms, socialSharing, nav) {
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
        this.nativeHttp = nativeHttp;
        this.alertCtrl = alertCtrl;
        this.syncService = syncService;
        this.network = network;
        this.callnumber = callnumber;
        this.sms = sms;
        this.socialSharing = socialSharing;
        this.nav = nav;
        this.message = '';
        this.client = 'Vendor';
        this.subtotal = 0;
        this.discount = 0;
        this.total = 0;
        this.payed = 0;
        this.duepayment = 0;
        this.currentDate = new Date().toString();
        this.data = [
        // {
        //   no: '1',
        //   date: '10/28/2019',
        //  amount: '10.00'
        //  }
        ];
        this.Date = '';
        this.vendors = [];
        this.activeVendors = [];
        this.tempActiveVendors = [];
        this.raio = [];
        this.selectedVendorID = '';
        this.selectedVendorName = '';
        this.items = [];
        this.activeItems = [];
        this.tempActiveItems = [
            {
                itemid: '',
                AccountId: '',
                Description: '',
                Rate: 0,
                Cost: 0,
                Active: '',
                Qty: 0,
                Sync: 0
            }
        ];
        this.PO = {
            Address: '',
            Date: '',
            Email: '',
            ID: '',
            Name: '',
            Phone: '',
            ReceivedBy: '',
            Remarks: ' ',
            Discount: '',
            Total: '',
            VendorID: '',
            Active: 0
        };
        this.prev = '';
        this.a = 0;
        this.initialQty = [];
        this.tempTotal = 0;
        this.addedItems = [];
        this.remainingItems = [];
        this.currency = '';
        this.storage.get('userId').then((val) => {
            this.usdId = val;
            console.log(this.usdId);
        });
        storage.get('currency').then((val) => {
            if (val !== null) {
                this.currency = val.toString();
                debugger;
            }
        });
        // this.getAllClients();
        this.getAllVendors();
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.PO !== 'undefined') {
                debugger;
                this.events.publish('refreshLogs', 'saad2', '');
                this.events.publish('refreshPOS', 'saad2', '');
                this.PO = this.router.getCurrentNavigation().extras.state.PO;
                this.prev = this.router.getCurrentNavigation().extras.state.url;
                this.selectedVendorID = this.PO.VendorID;
                this.selectedVendorName = this.PO.Name;
                this.client = this.PO.Name;
                this.info3 = this.PO.Address;
                if (this.PO.Remarks != null) {
                    this.message = this.PO.Remarks;
                }
                this.Date = this.PO.Date;
                this.discount = parseInt(this.PO.Discount);
                this.subtotal = parseInt(this.PO.Total) + parseInt(this.PO.Discount);
                this.total = parseInt(this.PO.Total);
                this.tempTotal = parseInt(this.PO.Total);
                this.items = this.router.getCurrentNavigation().extras.state.Items;
                debugger;
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].Qty > 0) {
                        this.addedItems.push(this.items[i]);
                    }
                    else {
                        this.remainingItems.push(this.items[i]);
                    }
                }
                // this.initialQty = this.router.getCurrentNavigation().extras.state.Items;
                for (let i = 0; i < this.items.length; i++) {
                    this.items[i].Qty = parseInt(this.items[i].Qty);
                    // this.initialQty[i].Qty = parseInt(this.items[i].Qty);
                    this.items[i].CostPrice = parseInt(this.items[i].CostPrice);
                    this.items[i]['stock'] = 0;
                    this.items[i]['temp'] = parseInt(this.items[i].Qty);
                }
                if (this.network.type === 'none') {
                }
                else {
                    debugger;
                    this.syncdelPOS();
                }
                debugger;
            }
        }
    }
    ngOnInit() {
    }
    back() {
        // this.router.navigate(['invoicedetails']);
        // this.location.back();
        if (this.PO.Active === 1 && (this.tempTotal !== this.total)) {
            this.showALert('', '', 'Save this purchase order?');
        }
        else {
            this.databaseprovider.setupdatePOS(1);
            this.nav.navigateRoot(this.prev);
            // this.location.back();
        }
    }
    showALert(head, sub, msg) {
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'alertSize',
            buttons: [
                {
                    text: 'Exit',
                    cssClass: 'customClass',
                    role: 'cancel',
                    handler: () => {
                        //  this.location.back();
                        this.clearAll();
                        this.router.navigate(['menu/purchased-orders']);
                        console.log('Confirm Cancel');
                        this.clearAll();
                        debugger;
                    }
                },
                {
                    text: 'Save',
                    handler: () => {
                        console.log('Confirm Ok');
                        if (this.selectedVendorName !== '' && this.selectedVendorName.length > 0 && this.subtotal > 0) {
                            // this.savePO();
                            this.updatePO();
                        }
                        else {
                            alert('Kindly select Vendor');
                        }
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    share() {
        const msg = 'Save <br/><br/> Preview <br/><br/> Email <br/><br/> Share <br/><br/> Add Credits <br/><br/> Print ';
        // this.shareALert('','','');
        this.saveALert('', '', 'Are you sure you want to update PO?');
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
                    handler: () => {
                        console.log('Confirm Cancel');
                        if (this.selectedVendorName !== '' && this.selectedVendorName.length > 0 && this.subtotal > 0) {
                            // this.savePO();
                            this.updatePO();
                        }
                        else {
                            alert('Kindly select Vendor');
                        }
                    }
                },
                {
                    text: 'Preview',
                    cssClass: 'alert-button-inner',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                },
                {
                    text: 'Email',
                    cssClass: 'alert-button-inner',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                },
                {
                    text: 'Share',
                    cssClass: 'alert-button-inner',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                },
                {
                    text: 'Cancel',
                    cssClass: 'cancel',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                },
            ]
        }).then(alert => alert.present());
    }
    addClient() {
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
    // addItemafter() {
    //   this.databaseprovider.saveArray(this.selectedItems);
    //   this.router.navigate(['add-item/additem-items']);
    // }
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
        this.discount = 0.00;
        this.subtotal = 0.00;
        this.total = 0.00;
        this.message = 'Thanks for your business';
        this.client = 'Vendor';
        this.tempActiveItems = [];
        this.databaseprovider.setItemUrl('');
    }
    // removeSelected(pos) {
    //   debugger;
    //   this.selectedItems.splice(pos,1);
    //   debugger
    // }
    openAlert() {
        this.alrtCtrl.create({
            header: 'Vendors',
            inputs: this.raio,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'OK',
                    handler: (data) => {
                        console.log('selected' + data);
                        var fields = data.split(',');
                        this.selectedVendorName = fields[0];
                        this.client = this.selectedVendorName;
                        this.selectedVendorID = fields[1];
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    getAllClients() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create();
            yield loading.present();
            const url = this.databaseprovider.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url, {
                'Name': 'getAllVendors',
            }, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                const g = JSON.parse(data.data);
                this.vendors = g.vendors;
                console.log(this.vendors[0]);
                this.sortClients();
                this.activeVendors = [];
                for (let i = 0; i < this.vendors.length; i++) {
                    if (this.vendors[i].bActive === '1') {
                        this.activeVendors.push(this.vendors[i]);
                        const a = {
                            type: 'radio',
                            label: this.vendors[i].Name,
                            value: this.vendors[i].Name + ',' + this.vendors[i].ID
                        };
                        this.raio.push(a);
                    }
                }
                debugger;
                //  this.selectActive();
                // debugger;
                // this.initializeItems();
                this.initializeactiveVendors();
                this.databaseprovider.setupdatevendors(0);
                //this.getAllItems();
            }, err => {
                console.log('JS call error', err);
            });
        });
    }
    sortClients() {
        debugger;
        this.vendors = this.vendors.sort((a, b) => {
            if (a.Name < b.Name) {
                return -1;
            }
            if (a.Name > b.Name) {
                return 1;
            }
            return 0;
        });
    }
    initializeactiveVendors() {
        this.tempActiveVendors = this.activeVendors;
    }
    getAllItems() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create();
            yield loading.present();
            const url = this.databaseprovider.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url, {
                'Name': 'getAllItem',
                "AccountId": '113008225657937776461'
            }, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                const g = JSON.parse(data.data);
                this.items = g.items;
                // console.log(this.clients[0]);
                this.sortItems();
                //this.inactiveItems = [];
                this.activeItems = [];
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].Active === '1') {
                        this.items[i]['Qty'] = 0;
                        this.activeItems.push(this.items[i]);
                    }
                }
                // this.initializeItems();
                this.initializeActiveItems();
                this.databaseprovider.setupdateitems(0);
                debugger;
            }, err => {
                console.log('JS call error', err);
            });
        });
    }
    sortItems() {
        debugger;
        this.items = this.items.sort((a, b) => {
            if (a.Description < b.Description) {
                return -1;
            }
            if (a.Description > b.Description) {
                return 1;
            }
            return 0;
        });
    }
    initializeActiveItems() {
        this.tempActiveItems = this.activeItems;
        debugger;
    }
    quantityIncrement(item) {
        item.Qty = item.Qty + 1;
        this.subtotal = this.subtotal + (1 * item.CostPrice);
        this.total = this.subtotal - this.discount;
        debugger;
    }
    quantityDecrement(item) {
        if (item.Qty > 0) {
            this.subtotal = this.subtotal - (1 * item.CostPrice);
            this.total = this.subtotal - this.discount;
            item.Qty = item.Qty - 1;
        }
        debugger;
    }
    change() {
    }
    presentPrompt() {
        this.alertCtrl.create({
            header: 'Message',
            inputs: [
                {
                    name: 'Message',
                    placeholder: this.message,
                    value: this.message
                }
            ],
            buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                }
                // {
                //   text: 'Submit',
                //   handler: data => {
                //    console.log(data);
                //    this.message = data.Message;
                //   }
                // }
            ]
        }).then(alert => alert.present());
    }
    savePO() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create();
            yield loading.present();
            this.Date;
            this.selectedVendorID;
            this.tempActiveItems;
            this.discount;
            this.total;
            this.message;
            this.items;
            for (let i = 0; i < this.tempActiveItems.length; i++) {
                if (this.tempActiveItems[i].Sync === 1) {
                    this.tempActiveItems[i].Sync = 2;
                }
            }
            const itemsArray = [];
            for (let i = 0; i < this.items.length; i++) {
                const a = {
                    Id: parseInt(this.items[i].Id),
                    Qty: this.items[i].Qty,
                    CostPrice: this.items[i].CostPrice,
                    stock: (this.items[i].temp - this.items[i].Qty) * (-1)
                };
                itemsArray.push(a);
            }
            itemsArray;
            debugger;
            const url = this.databaseprovider.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url + '/updatePO.php', {
                "PoId": this.PO.ID,
                "VendorID": this.selectedVendorID,
                "Date": this.Date,
                "ReceivedBy": "rizwanali",
                "Total": this.subtotal - this.discount,
                "Remarks": this.message,
                "Discount": this.discount,
                "Items": itemsArray
            }, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                const g = JSON.parse(data.data);
                if (g.success === 1) {
                    this.databaseprovider.setupdatePOS(1);
                    this.router.navigate(['/menu/purchased-orders']);
                }
            }, err => {
                console.log('JS call error', err);
            });
        });
    }
    updatePO() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].Sync === 1) {
                this.items[i].Sync = 2;
            }
        }
        debugger;
        const itemsArray = [];
        for (let i = 0; i < this.items.length; i++) {
            const a = {
                Id: parseInt(this.items[i].Id),
                Qty: parseInt(this.items[i].Qty),
                CostPrice: parseInt(this.items[i].CostPrice),
                Stock: parseInt(this.items[i].Qty) - this.items[i].temp,
                Sync: this.items[i].Sync
            };
            itemsArray.push(a);
        }
        debugger;
        const VendorBalance = this.total - this.tempTotal;
        debugger;
        // tslint:disable-next-line: max-line-length
        this.syncService.updatePO(this.PO.ID, this.selectedVendorID, this.Date, 'rizwanali', this.subtotal - this.discount, this.message, this.discount, itemsArray, VendorBalance)
            .then(data => {
            debugger;
            this.databaseprovider.setupdatePOS(1);
            this.router.navigate(['/menu/purchased-orders']);
            if (this.network.type === 'none') {
            }
            else {
                debugger;
                this.syncUpdatedPO();
            }
        });
    }
    discountPrompt() {
        if (this.total > 0) {
            this.alertCtrl.create({
                header: 'Discount',
                inputs: [
                    {
                        name: 'Discount',
                        placeholder: this.discount.toString(),
                        value: this.discount,
                        type: 'number'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Submit',
                        handler: data => {
                            console.log(data);
                            if (data.Discount === '') {
                                this.discount = 0;
                            }
                            else {
                                this.discount = data.Discount;
                            }
                        }
                    }
                ]
            }).then(alert => alert.present());
        }
        else {
        }
    }
    updateTotal(searchbar, item) {
        const x = item.CostPrice * item.Qty;
        this.subtotal = this.subtotal - x;
        const q = searchbar.srcElement.value;
        const b = q * item.Qty;
        this.subtotal = this.subtotal + b;
        this.total = this.subtotal - this.discount;
    }
    // updateItem(searchbar, item) {
    //   const x = item.Rate * item.Qty;
    //   this.subtotal = this.subtotal - x;
    //   const q = searchbar.srcElement.value;
    //   const b = q * item.Rate;
    //   this.subtotal = this.subtotal + b;
    //   this.total = this.subtotal - this.discount;
    // }
    getAllVendors() {
        this.syncService.getAllActiveVendors().then((data) => {
            this.vendors = data;
            this.sortClients();
            this.activeVendors = [];
            for (let i = 0; i < this.vendors.length; i++) {
                if (this.vendors[i].bActive === 1) {
                    this.activeVendors.push(this.vendors[i]);
                    const a = {
                        type: 'radio',
                        label: this.vendors[i].Name,
                        value: this.vendors[i].Name + ',' + this.vendors[i].ID
                    };
                    this.raio.push(a);
                }
            }
            this.initializeactiveVendors();
            this.databaseprovider.setupdatevendors(0);
            // this.getAllItemsLocal();
        });
    }
    // AddLog(){
    //   if (this.usdId === 1) {
    //     this.acttype = 'Adnan Ali edited';
    //   } else {
    //     this.acttype = 'Test edited';
    //   }
    //   this.name = 'Purchased Order';
    //   let now = new Date().toString();
    //   const a = this.datePipe.transform(now, 'MMMM dd, yyy h:mm a');
    //   this.lgdate = 'at ' + a;
    //   this.tblName = 'tblpurchasedorder';
    //   // this.tblId = this.PO.ID;
    //   this.tblId = this.syncService.getUpdatedPOID();
    //   this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate
    //   debugger
    //   this.syncService.addLogs(this.tblName,this.tblId,this.usdId,this.acttype,this.name,this.lgdate).then(data => {
    //         console.log("Log has been added");
    //         this.syncService.syncAddedLog();
    //         //this.GetLogs();
    //   });
    // }
    syncUpdatedPO() {
        debugger;
        this.syncService.getAlldelPOS().then((data) => {
            if (data.length > 0) {
                const url = this.databaseprovider.getURL();
                debugger;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url + '/delPOS.php', {
                    "POSIDS": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => { }))
                    .subscribe(data => {
                    // this.AddLog();
                    debugger;
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        this.syncService.updatedelsPOS().then((data) => {
                        });
                        this.syncService.syncAddedPOS().then((data) => {
                            if (data.length > 0) {
                                const IDs = [];
                                for (let i = 0; i < data.length; i++) {
                                    IDs[i] = data[i].ID;
                                }
                                const url = this.databaseprovider.getURL();
                                debugger;
                                this.nativeHttp.setDataSerializer("json");
                                let nativeCall = this.nativeHttp.post(url, {
                                    'Name': 'syncAddedPOs',
                                    "POS": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => { }))
                                    .subscribe(data => {
                                    console.log('Native data:', data);
                                    const g = JSON.parse(data.data);
                                    if (g.success === 1) {
                                        // alert('success');
                                        this.syncService.updateSyncedPOS(IDs).then((data) => {
                                        });
                                        this.syncService.syncAddedPOsItems().then((data) => {
                                            if (data.length > 0) {
                                                const IDs = [];
                                                for (let i = 0; i < data.length; i++) {
                                                    IDs[i] = data[i].ID;
                                                }
                                                const url = this.databaseprovider.getURL();
                                                debugger;
                                                this.nativeHttp.setDataSerializer("json");
                                                let nativeCall = this.nativeHttp.post(url, {
                                                    'Name': 'syncAddedPOsItems',
                                                    "POSItems": data
                                                }, {
                                                    'Content-Type': 'application/json',
                                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                });
                                                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => { }))
                                                    .subscribe(data => {
                                                    console.log('Native data:', data);
                                                    const g = JSON.parse(data.data);
                                                    if (g.success === 1) {
                                                        //alert('success');
                                                        this.syncService.updateSyncedPOSItems(IDs).then((data) => {
                                                        });
                                                    }
                                                    else {
                                                        //alert('failed');
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
                                        }).then(data4 => {
                                            this.syncService.syncUpdatedItems().then((data) => {
                                                if (data.length > 0) {
                                                    const IDs = [];
                                                    for (let i = 0; i < data.length; i++) {
                                                        IDs[i] = data[i].itemid;
                                                    }
                                                    const url = this.databaseprovider.getURL();
                                                    debugger;
                                                    this.nativeHttp.setDataSerializer("json");
                                                    let nativeCall = this.nativeHttp.post(url, {
                                                        'Name': 'syncUpdatedItems',
                                                        "Items": data
                                                    }, {
                                                        'Content-Type': 'application/json',
                                                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                    });
                                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => { }))
                                                        .subscribe(data => {
                                                        console.log('Native data:', data);
                                                        const g = JSON.parse(data.data);
                                                        if (g.success === 1) {
                                                            //alert('success Updated');
                                                            this.syncService.updateSyncedItems(IDs).then((data) => {
                                                            });
                                                        }
                                                        else {
                                                            //  alert('failed');
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
            }
            debugger;
        });
    }
    syncdelPOS() {
        this.syncService.getAlldelPOS().then((data) => {
            if (data.length > 0) {
                const url = this.databaseprovider.getURL();
                debugger;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url + '/delPOS.php', {
                    "POSIDS": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        this.syncService.updatedelsPOS().then((data) => {
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
            }
            debugger;
        });
    }
    // update(searchbar, pos) {
    //   debugger
    //   this.initialQty;
    //   let tempSubtotal = 0;
    //   const q = parseInt(searchbar.srcElement.value);
    //   // tslint:disable-next-line: prefer-for-of
    //   for (let i = 0; i < this.items.length; i++) {
    //      if (i === pos) {
    //       tempSubtotal = tempSubtotal + (this.items[i].CostPrice * q);
    //      } else {
    //       tempSubtotal = tempSubtotal + (this.items[i].CostPrice * parseInt(this.items[i].Qty));
    //      }
    //   }
    //   debugger;
    //   this.subtotal =  tempSubtotal;
    // }
    updateItem(searchbar, item) {
        debugger;
        const x = item.CostPrice * item.Qty;
        this.subtotal = this.subtotal - x;
        const q = searchbar.srcElement.value;
        const b = q * item.CostPrice;
        this.subtotal = this.subtotal + b;
        this.total = this.subtotal - this.discount;
    }
    saveALert(head, sub, msg) {
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'alertSize',
            buttons: [
                {
                    text: 'Cancel',
                    cssClass: 'customClass',
                    role: 'cancel',
                    handler: () => {
                        //  this.location.back();
                    }
                },
                {
                    text: 'Save',
                    handler: () => {
                        console.log('Confirm Ok');
                        console.log('Confirm Cancel');
                        if (this.selectedVendorName !== '' && this.selectedVendorName.length > 0 && this.subtotal > 0) {
                            // this.savePO();
                            this.updatePO();
                        }
                        else {
                            alert('Kindly select Vendor');
                        }
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    AddItems() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create();
            yield loading.present();
            this.addedItems = this.items;
            loading.dismiss();
        });
    }
    call() {
        debugger;
        const number = this.PO.Phone.toString();
        this.callnumber.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    Sms() {
        const number = this.PO.Phone.toString();
        this.socialSharing.shareViaSMS('', number).then(() => {
        }).catch(() => {
        });
    }
    copypaste() {
        console.log("1");
        this.syncService.getLedgerVendor(this.selectedVendorID);
    }
};
PodetailsPage.ctorParameters = () => [
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
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_14__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_15__["SyncService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__["Network"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__["CallNumber"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_18__["SMS"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PodetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-podetails',
        template: __webpack_require__(/*! raw-loader!./podetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/purchased-orders/podetails/podetails.page.html"),
        styles: [__webpack_require__(/*! ./podetails.page.scss */ "./src/app/pages/purchased-orders/podetails/podetails.page.scss")]
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
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_10__["DatabaseService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_14__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_15__["SyncService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__["Network"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__["CallNumber"],
        _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_18__["SMS"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__["SocialSharing"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PodetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-purchased-orders-podetails-podetails-module-es2015.js.map