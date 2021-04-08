(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addinvoice-addinvoice-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/addinvoice/addinvoice.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/addinvoice/addinvoice.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <div style=\"width: 100%;\">\n      <ion-toolbar color=\"primary\">\n          <ion-label padding slot=\"start\" (click)=\"back()\">Close</ion-label>\n          <!-- <ion-icon padding  name=\"close\" (click)=\"back()\"></ion-icon> -->\n          <!-- <ion-icon padding  slot=\"end\" name=\"share-alt\" (click)=\"share()\"></ion-icon> -->\n          <ion-label *ngIf=\"outOfStockItems === 0\" padding slot=\"end\" (click)=\"share()\">Save</ion-label>\n      </ion-toolbar>\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <div>\n                <span style=\"float:right;padding-right: 5px; font-size: 4rem;\">Invoice</span>\n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n      <div>\n          <!-- <p  style=\"text-align:left;padding-left: 5px;\">\n              {{invoice.created}}\n              <span  style=\"float:right;padding-right: 5px;\">\n                  \n              </span>\n          </p> -->\n          <p  style=\"text-align:left;padding-left: 5px;\">\n              <span style=\"font-size: 75%;\" (click)=\"selectDueDate()\"> Due date: {{invoice.duedate}}</span>\n              <span *ngIf=\"selectedClientID === 0\" (click)=\"addClient()\" style=\"float:right;padding-right: 5px;font-weight:bold;\">\n                 {{client}}\n              </span>\n              <span *ngIf=\"selectedClientID > 0\" (click)=\"addClient()\" style=\"float:right;padding-right: 5px;font-weight:bold;\">\n                {{client}} \n             </span>\n             <br>\n                <span *ngIf=\"selectedClientID > 0 && selectedClientBalance > 0\" style=\"font-size: 70%; color: rgb(151, 9, 37); float:right;padding-right: 5px;\">\n                  Outstanding Balance: {{currency}} {{ selectedClientBalance }}/-\n                </span>\n                <span *ngIf=\"selectedClientID > 0 && selectedClientBalance === 0\" style=\"font-size: 70%; color: rgb(151, 9, 37); float:right;padding-right: 5px;\">\n                  Outstanding Balance: NIL\n                </span>\n          </p>\n         \n      </div>\n    \n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n       \n    <!-- <ion-item (click)=\"addClient()\">            \n        <ion-avatar slot=\"start\" >\n            <img src=\"assets/plus.png\">\n            \n        </ion-avatar>\n        <ion-label>\n          <h2 text-capitalize>{{ client }}</h2>\n        </ion-label>\n       \n    </ion-item>  -->\n    <ion-item (click)=\"addItem()\" *ngIf=\"tempActiveItems.length === 0\">            \n        <ion-avatar slot=\"start\" >\n            <img src=\"assets/plus.png\">\n            \n        </ion-avatar>\n        <ion-label>\n          <h2 text-capitalize>Item</h2>\n        </ion-label>\n    </ion-item> \n   \n    <ion-item >\n      <ion-grid>\n          <ion-row>\n            <ion-col size=\"2\">\n              <ion-item no-padding lines=\"none\" style=\"text-align: right;\">\n                  <p class=\"my-label1\"  style=\"font-weight: bold;\"> Qty\n                  </p>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\" style=\"text-align: left;\">\n                <p class=\"my-label1\"  style=\"font-weight: bold;\"> Item(s)\n                </p>\n              </ion-item>\n            </ion-col>\n            <!-- <ion-col size=\"3\">\n              <ion-item lines=\"none\" style=\"text-align: right;\">\n                <p class=\"my-label1\"  style=\"font-weight: bold;\"> Price(PKR)\n                </p>\n              </ion-item>\n            </ion-col> -->\n            <ion-col size=\"4\">\n              <ion-item lines=\"none\"style=\"text-align: right;\">\n                  <p class=\"my-label1\"  style=\"font-weight: bold;\">Total</p>\n                  <p class=\"my-label3\"  style=\"font-weight: bold;\">({{currency}})</p>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n  </ion-item>\n        \n      <ion-list no-padding>\n          <ion-item-sliding  *ngFor=\"let item of tempActiveItems;index as pos\" >\n              <!-- <ion-item-options side=\"end\">\n                  <ion-item-option color=\"danger\" (click)=\"removeSelected(pos)\">Delete</ion-item-option>\n                </ion-item-options> -->\n        <ion-item  >\n          <ion-grid>\n              <ion-row>\n                <ion-col size=\"2\">\n                  <ion-item no-padding lines=\"none\">\n                      <!--<ion-icon (click)=\"quantityDecrement(item)\" name=\"remove-circle\" color=\"danger\"></ion-icon>\n                      <ion-label text-center > {{item.Qty}}\n                      </ion-label>\n                      <ion-icon (click)=\"quantityIncrement(item)\" name=\"add-circle\" color=\"success\"></ion-icon>-->\n                      <span *ngIf=\"item.Star == 1\" style=\"color: red;\">*</span>\n                      <ion-input (click)=\"clearVal(item)\"  (ionInput)=\"updateItem($event,item)\"  maxlength=\"5\"  type=\"tel\" no-padding style=\"border: none;text-align: center;\" [(ngModel)]=\"item.Qty\"></ion-input> \n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"7\">\n                  <!--<ion-item  lines=\"none\">\n                      <ion-label  class=\"my-label\" style=\"text-align: left;\" >{{item.Description}}</ion-label>\n                  </ion-item>-->\n\n                  <ion-item lines=\"none\"style=\"float: left;\">\n                    <p class=\"my-label\" >{{item.Description}} <span *ngIf=\"item.Instock > 0\" style=\"color: green;\">({{item.Instock}})</span><span *ngIf=\"item.Instock === 0\" style=\"color: red;\">(out of stock)</span><span><ion-input class=\"my-label\" (click)=\"clearVal1(item)\"  (ionInput)=\"updateTotal($event,item)\"  maxlength=\"5\"  type=\"tel\" no-padding style=\"border: none;text-align: left;max-width: 100%;\" [(ngModel)]=\"item.Rate\">\n                    {{item.Qty}}x</ion-input></span></p>\n                    \n                  </ion-item>\n                  \n                </ion-col>\n                <!-- <ion-col  size=\"3\">\n                  <ion-item no-padding lines=\"none\" >\n                       <ion-label text-center >{{item.Rate}}</ion-label> \n                      <ion-input class=\"my-label\" (ionInput)=\"updateTotal($event,item)\"  maxlength=\"5\"  type=\"tel\" no-padding style=\"border: none;text-align: right;\" [(ngModel)]=\"item.Rate\"></ion-input> \n                  </ion-item>\n                </ion-col> -->\n                <ion-col size=\"3\">\n                  <!--<ion-item  lines=\"none\">\n                      <ion-label style=\"text-align:right;float:right;\" class=\"my-label\"  >{{item.Qty * item.Rate}}</ion-label>\n                  </ion-item>-->\n                  <ion-item lines=\"none\"style=\"float: right;\">\n                    \n                    <p class=\"my-label\"  >{{item.Qty * item.Rate}}</p>\n                    \n                                    </ion-item>\n                </ion-col>\n              </ion-row>\n          </ion-grid>\n          <!-- <ion-label>1</ion-label>\n          <ion-label>1</ion-label>\n          <ion-label text-center style=\"color:royalblue;\">show less</ion-label>\n          <span style=\"float:right;\" class=\"cancel\">\n              PKR \n          </span> -->\n\n        </ion-item>\n        </ion-item-sliding>\n      </ion-list>   \n      <ion-button *ngIf=\"selectedItems.length > 0\" (click)=\"addItemafter()\" expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;border-radius: 50px; --border-radius: 15px;\" >\n          <ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon>\n        Item\n      </ion-button>\n    <ion-item color=\"light\">            \n      \n                <ion-label>\n                        <h3 text-capitalize style=\"padding-left: 5px;\"  class=\"lightgrey\">Subtotal <ion-icon  name=\"pricetag\"></ion-icon></h3>  \n                 </ion-label>\n                 <ion-label>\n                 <span style=\"float:right;\" color=\"dark\">\n                            {{subtotal | currency:currency:true:\"1.2\"}}\n                    </span>\n                </ion-label>\n       \n    </ion-item>    \n    <ion-item color=\"light\" (click)=\"discountPrompt()\">            \n            <ion-label>\n                    <h3 text-capitalize style=\"padding-left: 5px;\" class=\"lightgrey\">Discount</h3>\n                  </ion-label>\n                  <ion-label>\n                      <span style=\"float:right;\" class=\"cancel\">\n                           {{discount | currency:currency:true:\"1.2\"}}\n                      </span>\n                    </ion-label>\n           \n     </ion-item>\n     <ion-item (click)=\"paymentInfo()\" color=\"dark\">            \n            <ion-label>\n                    <h2 text-capitalize style=\"padding-left: 5px;font-size: 135%;\">Total</h2>\n                    <!-- <h5 style=\"font-size: 10px;\">Paid:PKR {{payed}}</h5> -->\n             </ion-label>\n             <ion-label>\n                      <span style=\"float:right;\" >\n                        <h2 style=\"font-size: 135%\">  {{subtotal - discount | currency:currency:true:\"1.2\"}}</h2> \n                        <!-- <h6 style=\"font-size: 10px;\">Balance Due:PKR {{duepayment}}</h6>  -->\n                      </span>\n              </ion-label>\n           \n     </ion-item>  \n     <ion-button (click)=\"presentPrompt()\" expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;border-radius: 50px; --border-radius: 15px;\" >Remarks</ion-button>\n     <!-- <ion-list *ngFor=\"let item of images;index as pos\">\n         <ion-item >\n            <ion-thumbnail slot=\"start\">\n                <ion-img [src]=\"item.path\"></ion-img>\n              </ion-thumbnail>\n              <ion-label>\n                Attachment\n              </ion-label>\n              <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(item, pos)\" class=\"ion-md-time\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n         </ion-item>\n     </ion-list> -->\n     <!-- <ion-button (click)=\"selectImage()\" expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;--border-radius: 15px;\"> <ion-icon slot=\"start\" name=\"attach\"></ion-icon>Attachments</ion-button> -->\n\n</ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/addinvoice/addinvoice.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/addinvoice/addinvoice.module.ts ***!
  \*******************************************************/
/*! exports provided: AddinvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddinvoicePageModule", function() { return AddinvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addinvoice_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./addinvoice.page */ "./src/app/pages/addinvoice/addinvoice.page.ts");














var routes = [
    {
        path: '',
        component: _addinvoice_page__WEBPACK_IMPORTED_MODULE_13__["AddinvoicePage"]
    }
];
var AddinvoicePageModule = /** @class */ (function () {
    function AddinvoicePageModule() {
    }
    AddinvoicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
                _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],
                _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
                _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__["HTTP"],
                _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_10__["DatePicker"],
                _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"]
            ],
            declarations: [_addinvoice_page__WEBPACK_IMPORTED_MODULE_13__["AddinvoicePage"]]
        })
    ], AddinvoicePageModule);
    return AddinvoicePageModule;
}());



/***/ }),

/***/ "./src/app/pages/addinvoice/addinvoice.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/addinvoice/addinvoice.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonCss button.alert-button.exit-button {\n  color: red;\n}\n.buttonCss button.alert-button.cancel-button {\n  color: green;\n}\n.d {\n  color: red;\n}\n.customClass {\n  color: #e74c3c !important;\n}\n.my-label {\n  font-size: 85%;\n}\n.my-label1 {\n  font-size: 80%;\n}\n.my-label2 {\n  font-size: 60%;\n}\n.my-label3 {\n  font-size: 65%;\n}\n.my-label4 {\n  font-size: 85%;\n}\nion-toolbar {\n  --background: #084e1b;\n}\nion-button {\n  --border-color: #084e1b;\n}\nion-select {\n  --placeholder-color: red !important;\n}\nion-select {\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkaW52b2ljZS9DOlxcd2FtcDY0XFx3d3dcXGludm9pY2UucGsvc3JjXFxhcHBcXHBhZ2VzXFxhZGRpbnZvaWNlXFxhZGRpbnZvaWNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkaW52b2ljZS9hZGRpbnZvaWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLFVBQUE7QUNESjtBRElFO0VBQ0UsWUFBQTtBQ0ZKO0FES0E7RUFDRSxVQUFBO0FDRkY7QURJQTtFQUNFLHlCQUFBO0FDREY7QURHQztFQUNDLGNBQUE7QUNBRjtBREVBO0VBQ0UsY0FBQTtBQ0NGO0FEQ0E7RUFDRSxjQUFBO0FDRUY7QURBQTtFQUNFLGNBQUE7QUNHRjtBRERBO0VBQ0UsY0FBQTtBQ0lGO0FERkE7RUFFRSxxQkFBQTtBQ0lGO0FEQUE7RUFDRSx1QkFBQTtBQ0dGO0FEREE7RUFDRSxtQ0FBQTtBQ0lGO0FERkE7RUFDRyxxQkFBQTtBQ0tIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkaW52b2ljZS9hZGRpbnZvaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25Dc3Mge1xyXG5cclxuICBidXR0b24uYWxlcnQtYnV0dG9uLmV4aXQtYnV0dG9ue1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbi5hbGVydC1idXR0b24uY2FuY2VsLWJ1dHRvbntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcbn1cclxuLmR7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4uY3VzdG9tQ2xhc3N7XHJcbiAgY29sb3I6I2U3NGMzYyAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLm15LWxhYmVsIHtcclxuICBmb250LXNpemU6IDg1JTtcclxufVxyXG4ubXktbGFiZWwxIHtcclxuICBmb250LXNpemU6IDgwJTtcclxufSBcclxuLm15LWxhYmVsMiB7XHJcbiAgZm9udC1zaXplOiA2MCU7XHJcbn1cclxuLm15LWxhYmVsMyB7XHJcbiAgZm9udC1zaXplOiA2NSU7XHJcbn1cclxuLm15LWxhYmVsNCB7XHJcbiAgZm9udC1zaXplOiA4NSU7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG5cclxuICAtLWJhY2tncm91bmQ6ICMwODRlMWI7XHJcbiAgXHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgLS1ib3JkZXItY29sb3I6ICMwODRlMWI7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICAgb3BhY2l0eTogMS4wICFpbXBvcnRhbnQ7XHJcbiAgLy8gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufSIsIi5idXR0b25Dc3MgYnV0dG9uLmFsZXJ0LWJ1dHRvbi5leGl0LWJ1dHRvbiB7XG4gIGNvbG9yOiByZWQ7XG59XG4uYnV0dG9uQ3NzIGJ1dHRvbi5hbGVydC1idXR0b24uY2FuY2VsLWJ1dHRvbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uY3VzdG9tQ2xhc3Mge1xuICBjb2xvcjogI2U3NGMzYyAhaW1wb3J0YW50O1xufVxuXG4ubXktbGFiZWwge1xuICBmb250LXNpemU6IDg1JTtcbn1cblxuLm15LWxhYmVsMSB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4ubXktbGFiZWwyIHtcbiAgZm9udC1zaXplOiA2MCU7XG59XG5cbi5teS1sYWJlbDMge1xuICBmb250LXNpemU6IDY1JTtcbn1cblxuLm15LWxhYmVsNCB7XG4gIGZvbnQtc2l6ZTogODUlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzA4NGUxYjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjMDg0ZTFiO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/addinvoice/addinvoice.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/addinvoice/addinvoice.page.ts ***!
  \*****************************************************/
/*! exports provided: AddinvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddinvoicePage", function() { return AddinvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");



















var STORAGE_KEY = 'my_images';
var AddinvoicePage = /** @class */ (function () {
    function AddinvoicePage(location, alrtCtrl, router, toastController, storage, loadingController, ref, filePath, datePipe, events, file, webview, actionSheetController, camera, plt, http, databaseprovider, nativeHttp, datepicker, syncService, network, nav) {
        var _this = this;
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
        this.datepicker = datepicker;
        this.syncService = syncService;
        this.network = network;
        this.nav = nav;
        this.invoice = {
            created: '',
            duedate: '',
            name: 'INV-INV1',
            terms: 'Due on Receipt'
        };
        this.images = [];
        this.message = '';
        this.client = 'Select Client';
        this.bal = [];
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
        this.totalCredit = '';
        this.totalDebit = '';
        this.lastPayment = '0';
        this.clients = [];
        this.activeClients = [];
        this.currentDate = new Date().toString();
        this.raio = [];
        this.tempActiveClients = [];
        this.items = [];
        this.activeItems = [];
        this.tempActiveItems = [];
        this.selectedClintName = '';
        this.selectedClientID = 0;
        this.selectedClientSync = 0;
        this.info = '';
        this.dueDate = '';
        this.outOfStockItems = 0;
        this.currency = '';
        this.outStandingBalance = 0;
        this.data = [
        // {
        //   no: '1',
        //   date: '10/28/2019',
        //  amount: '10.00'
        //  }
        ];
        this.storage.get('userId').then(function (val) {
            _this.usdId = val;
            console.log(_this.usdId);
        });
        storage.get('currency').then(function (val) {
            if (val !== null) {
                _this.currency = val.toString();
            }
        });
        this.storage.get('duedate').then(function (val) {
            _this.dueDate = val;
            _this.invoice.created = _this.datePipe.transform(_this.currentDate, 'dd MMM yyyy');
            _this.time.setDate(_this.time.getDate() + parseInt(_this.dueDate));
            _this.invoice.duedate = _this.datePipe.transform(_this.time, 'dd MMM yyyy');
            console.log(_this.usdId);
        });
        storage.get('comment').then(function (val) {
            if (val !== null) {
                //this.message = val;
            }
        });
        this.url = this.router.url;
        this.getAllClientsLocaldb();
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.ngOnInit();
            }
        });
        if (this.router.getCurrentNavigation().extras.state) {
            this.message = this.router.getCurrentNavigation().extras.state.user;
        }
        else {
            this.message = '';
        }
        if (this.router.getCurrentNavigation().extras.state) {
            this.client = this.router.getCurrentNavigation().extras.state.name;
        }
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.meta_data !== 'undefined') {
                ;
                this.data = this.router.getCurrentNavigation().extras.state.meta_data;
                this.payed = this.router.getCurrentNavigation().extras.state.payed;
                this.duepayment = this.router.getCurrentNavigation().extras.state.duepayment;
            }
        }
    }
    AddinvoicePage.prototype.ngOnInit = function () {
        ;
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.ID !== 'undefined') {
                ;
                this.selectedClientID = this.router.getCurrentNavigation().extras.state.ID;
                this.selectedClintName = this.router.getCurrentNavigation().extras.state.Name;
                this.selectedClientBalance = this.router.getCurrentNavigation().extras.state.Balance;
                this.selectedClientSync = this.router.getCurrentNavigation().extras.state.Sync;
                this.client = this.router.getCurrentNavigation().extras.state.Name;
                this.info = this.router.getCurrentNavigation().extras.state.info;
            }
        }
    };
    AddinvoicePage.prototype.selectDueDate = function () {
        var _this = this;
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datepicker.show(options).then(function (date) {
            _this.invoice.duedate = _this.datePipe.transform(date, 'dd MMM yyyy');
            // console.log('selected:',this.myDate);
        });
    };
    AddinvoicePage.prototype.back = function () {
        // this.router.navigate(['invoicedetails']);
        // this.location.back();
        this.showALert('', '', 'Are you sure, you want to save this invoice?');
    };
    AddinvoicePage.prototype.share = function () {
        var msg = 'Save <br/><br/> Preview <br/><br/> Email <br/><br/> Share <br/><br/> Add Credits <br/><br/> Print ';
        // this.shareALert('','','');
        this.saveALert('', '', 'Are you sure, you want to save this invoice?');
    };
    AddinvoicePage.prototype.showALert = function (head, sub, msg) {
        var _this = this;
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'alertSize',
            buttons: [
                // {
                //   text: 'Delete',
                //   cssClass: 'cancel1',
                //   role: 'cancel',
                //   handler: () => {
                //     console.log('Confirm Cancel');
                //   }
                // },
                {
                    text: 'Exit',
                    cssClass: 'customClass',
                    role: 'cancel',
                    handler: function () {
                        console.log('dele');
                        _this.images = [];
                        //  this.location.back();
                        _this.router.navigate(['menu/invoice']);
                        console.log('Confirm Cancel');
                        _this.selectedItems = [];
                        _this.discount = 0.00;
                        _this.subtotal = 0.00;
                        _this.total = 0.00;
                        _this.images = [];
                        _this.message = '';
                        _this.client = 'Client';
                        _this.email = '';
                        _this.add1 = '';
                        _this.add2 = '';
                        _this.add3 = '';
                        _this.shippingTo = '';
                        _this.sAdd1 = '';
                        _this.sAdd2 = '';
                        _this.sAdd3 = '';
                        _this.databaseprovider.setItemUrl('');
                    }
                },
                {
                    text: 'Save',
                    handler: function () {
                        console.log('Confirm Ok');
                        _this.selectedClient;
                        _this.selectedItems;
                        _this.total;
                        _this.discount;
                        if (typeof _this.selectedClintName !== 'undefined' && _this.selectedClintName !== '' && _this.subtotal > 0) {
                            // this.saveInvoice();
                            _this.saveInvoiceLocaldb();
                        }
                        else {
                            if (typeof _this.selectedClintName === 'undefined' || _this.selectedClintName === '') {
                                alert('Kindly select Client');
                            }
                            else {
                                alert('The price for the item(s) can not be 0');
                            }
                        }
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    AddinvoicePage.prototype.shareALert = function (head, sub, msg) {
        var _this = this;
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'changeAvatar',
            buttons: [
                {
                    text: 'Save',
                    cssClass: 'alert-button-inner',
                    handler: function () {
                        console.log('Confirm Save');
                        _this.selectedItems;
                        _this.selectedClient;
                        _this.data;
                        if (typeof _this.selectedClintName !== 'undefined' && _this.selectedClintName !== '' && _this.subtotal > 0) {
                            // this.saveInvoice();
                            _this.saveInvoiceLocaldb();
                        }
                        else {
                            if (typeof _this.selectedClintName === 'undefined' || _this.selectedClintName === '') {
                                alert('Kindly select Client');
                            }
                            else {
                                alert('The price for the item(s) can not be 0');
                            }
                        }
                    }
                },
                {
                    text: 'Preview',
                    cssClass: 'alert-button-inner',
                    handler: function () {
                        console.log('Confirm Preview');
                    }
                },
                {
                    text: 'Email',
                    cssClass: 'alert-button-inner',
                    handler: function () {
                        console.log('Confirm Email');
                    }
                },
                {
                    text: 'Share',
                    cssClass: 'alert-button-inner',
                    handler: function () {
                        console.log('Confirm Share');
                    }
                },
                {
                    text: 'Cancel',
                    cssClass: 'cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Confirm Cancel');
                    }
                },
            ]
        }).then(function (alert) { return alert.present(); });
    };
    AddinvoicePage.prototype.addClient = function () {
        var navigationExtras = {
            state: {
                url: this.url
            }
        };
        this.router.navigate(['add-client-clients'], navigationExtras);
    };
    AddinvoicePage.prototype.addItem = function () {
        // const navigationExtras: NavigationExtras = {
        //   state: {
        //     url: this.url
        //   }
        // };
        // this.router.navigate(['add-item/additem-items'], navigationExtras);
        this.alrtCtrl.create({
            header: 'Alert',
            subHeader: '',
            message: 'Please add your item(s) to continue',
            cssClass: 'alertSize',
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    AddinvoicePage.prototype.comment = function () {
        var navigationExtras = {
            state: {
                user: this.message,
                url: this.url
            }
        };
        this.router.navigate(['comment'], navigationExtras);
        //  this.router.navigate(['comment']);
    };
    AddinvoicePage.prototype.addItemafter = function () {
        this.databaseprovider.saveArray(this.selectedItems);
        this.router.navigate(['add-item/additem-items']);
    };
    AddinvoicePage.prototype.editItem = function (item, pos) {
        console.log(pos);
        this.url = this.router.url;
        var navigationExtras = {
            state: {
                // user: this.received
                edititem: item,
                position: pos,
                url: this.url
            }
        };
        this.router.navigate(['edit-item'], navigationExtras);
    };
    AddinvoicePage.prototype.paymentInfo = function () {
        ;
        if (this.selectedItems.length > 0) {
            this.data;
            this.meta_data;
            var navigationExtras = {
                state: {
                    // user: this.received
                    meta_data: this.data,
                    duepayment: this.duepayment,
                    payed: this.payed
                }
            };
            this.router.navigate(['payment-info'], navigationExtras);
        }
    };
    AddinvoicePage.prototype.openAlert = function () {
        var _this = this;
        if (this.raio.length > 0) {
            this.alrtCtrl.create({
                header: 'Clients',
                inputs: this.raio,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'OK',
                        handler: function (data) {
                            console.log('selected' + data);
                            var fields = data.split(',');
                            _this.selectedClintName = fields[0];
                            _this.client = _this.selectedClintName;
                            _this.selectedClientID = parseInt(fields[1]);
                            _this.selectedClientSync = parseInt(fields[2]);
                        }
                    }
                ]
            }).then(function (alert) { return alert.present(); });
        }
        else {
            this.emptyAlert('Alert', '', 'Please add your client(s) to continue');
        }
    };
    AddinvoicePage.prototype.getAllClients = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, url, nativeCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        url = this.databaseprovider.getURL();
                        // let nativeCall = this.nativeHttp.get(url +'/getAllClients.php?AccountId=113008225657937776461',{},{
                        //   'Content-Type':'application/json',
                        //   'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        // });
                        this.nativeHttp.setDataSerializer("json");
                        nativeCall = this.nativeHttp.post(url, {
                            'Name': 'getAllClients',
                            'AccountId': '113008225657937776461'
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            _this.clients = g.clients;
                            console.log(_this.clients[0]);
                            _this.sortClients();
                            _this.activeClients = [];
                            ;
                            for (var i = 0; i < _this.clients.length; i++) {
                                if (_this.clients[i].Active === '1') {
                                    _this.activeClients.push(_this.clients[i]);
                                    var a = {
                                        type: 'radio',
                                        label: _this.clients[i].Fname + ' ' + _this.clients[i].Lname,
                                        value: _this.clients[i].Fname + ',' + _this.clients[i].Cid
                                    };
                                    _this.raio.push(a);
                                }
                            }
                            //  this.selectActive();
                            // ;
                            // this.initializeItems();
                            _this.initializeactiveVendors();
                            _this.databaseprovider.setupdatevendors(0);
                            _this.getAllItems();
                        }, function (err) {
                            console.log('JS call error', err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddinvoicePage.prototype.sortClients = function () {
        ;
        this.clients = this.clients.sort(function (a, b) {
            if (a.Fname < b.Fname) {
                return -1;
            }
            if (a.Fname > b.Fname) {
                return 1;
            }
            return 0;
        });
    };
    AddinvoicePage.prototype.initializeactiveVendors = function () {
        this.tempActiveClients = this.activeClients;
    };
    AddinvoicePage.prototype.getAllItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, url, nativeCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        url = this.databaseprovider.getURL();
                        nativeCall = this.nativeHttp.post(url, {
                            'Name': 'getAllItems',
                            'AccountId': '113008225657937776461'
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            _this.items = g.items;
                            // console.log(this.clients[0]);
                            _this.sortItems();
                            //this.inactiveItems = [];
                            _this.activeItems = [];
                            for (var i = 0; i < _this.items.length; i++) {
                                if (_this.items[i].Active === '1') {
                                    _this.items[i]['Qty'] = 0;
                                    _this.activeItems.push(_this.items[i]);
                                }
                            }
                            // this.initializeItems();
                            _this.initializeActiveItems();
                            _this.databaseprovider.setupdateitems(0);
                            ;
                        }, function (err) {
                            console.log('JS call error', err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddinvoicePage.prototype.sortItems = function () {
        this.items = this.items.sort(function (a, b) {
            if (a.Description < b.Description) {
                return -1;
            }
            if (a.Description > b.Description) {
                return 1;
            }
            return 0;
        });
    };
    AddinvoicePage.prototype.initializeActiveItems = function () {
        this.tempActiveItems = this.activeItems;
    };
    AddinvoicePage.prototype.quantityIncrement = function (item) {
        if (item.Qty < parseInt(item.Instock)) {
            item.Qty = item.Qty + 1;
            this.subtotal = this.subtotal + (1 * item.Rate);
            this.total = this.subtotal - this.discount;
        }
        else {
            this.showToast();
        }
    };
    AddinvoicePage.prototype.quantityDecrement = function (item) {
        if (item.Qty > 0) {
            this.subtotal = this.subtotal - (1 * item.Rate);
            this.total = this.subtotal - this.discount;
            item.Qty = item.Qty - 1;
        }
    };
    AddinvoicePage.prototype.change = function () {
    };
    AddinvoicePage.prototype.clearAll = function () {
        this.discount = 0.00;
        this.subtotal = 0.00;
        this.total = 0.00;
        this.message = '';
        this.client = 'Select Client';
        this.tempActiveItems = [];
        this.databaseprovider.setItemUrl('');
    };
    AddinvoicePage.prototype.clearVal = function (item) {
        if (item.Qty == 0) {
            item.Qty = " ";
        }
    };
    AddinvoicePage.prototype.clearVal1 = function (item) {
        if (item.Rate == 0) {
            item.Rate = " ";
        }
    };
    AddinvoicePage.prototype.discountPrompt = function () {
        var _this = this;
        if (this.total > 0) {
            this.alrtCtrl.create({
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
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Submit',
                        handler: function (data) {
                            console.log(data);
                            if (data.Discount === '') {
                                _this.discount = 0;
                            }
                            else {
                                _this.discount = data.Discount;
                            }
                        }
                    }
                ]
            }).then(function (alert) { return alert.present(); });
        }
        else {
        }
    };
    AddinvoicePage.prototype.saveInvoice = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, itemsArray, i, a, url, nativeCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        // this.order.created;
                        // this.selectedVendorID;
                        this.tempActiveItems;
                        this.discount;
                        this.total;
                        this.message;
                        itemsArray = [];
                        for (i = 0; i < this.tempActiveItems.length; i++) {
                            a = {
                                Id: parseInt(this.tempActiveItems[i].itemid),
                                Qty: this.tempActiveItems[i].Qty,
                                CostPrice: this.tempActiveItems[i].Rate
                            };
                            itemsArray.push(a);
                        }
                        itemsArray;
                        this.nativeHttp.setDataSerializer("json");
                        url = this.databaseprovider.getURL();
                        nativeCall = this.nativeHttp.post(url + '/addInvoice.php', {
                            "AccountId": "113008225657937776461",
                            "Cid": this.selectedClientID,
                            "Name": "INV01",
                            "CreateDate": this.invoice.created,
                            "Terms": "Isl",
                            "DueDate": this.invoice.duedate,
                            "Items": itemsArray,
                            "Subtotal": this.subtotal,
                            "Discount": this.discount,
                            "Total": this.subtotal - this.discount,
                            "Message": this.message,
                            "Status": "Pending"
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            if (g.success === 1) {
                                _this.databaseprovider.setupdateinvoice(1);
                                _this.router.navigate(['/menu/invoice']);
                                // this.nav.navigateRoot('/menu/invoice');
                            }
                            // this.databaseprovider.setupdateitems(0);
                        }, function (err) {
                            console.log('JS call error', err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddinvoicePage.prototype.invoiceInfo = function () {
        ;
        var navigationExtras = {
            state: {
                // user: this.received
                invoice: this.invoice
            }
        };
        this.router.navigate(['invoice-info'], navigationExtras);
    };
    AddinvoicePage.prototype.removeSelected = function (pos) {
        ;
        // let a = this.databaseprovider.getSeletedItems();
        this.selectedItems.splice(pos, 1);
        this.updateCalculations();
        // this.databaseprovider.removeSelectedItem(pos);
        // a = this.databaseprovider.getSeletedItems();
    };
    AddinvoicePage.prototype.saveLedger = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, createDate, duedate, nativeCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        createDate = this.datePipe.transform(this.invoice.created, 'dd MMM yyyy');
                        duedate = this.datePipe.transform(this.invoice.duedate, 'dd MMM yyyy');
                        this.nativeHttp.setDataSerializer("json");
                        nativeCall = this.nativeHttp.post('http://192.168.100.4/rizAdnanApp/orderPlaced.php', {
                            "InvoiceID": id.toString(),
                            "Date": createDate.toString(),
                            "Amount": this.total.toString(),
                            "CustomerID": this.selectedClient.id,
                            "IsCredit": 0,
                            "Duedate": duedate.toString(),
                            "ByUserId": "rizwanali",
                            "Remarks": this.message
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            _this.deleteData();
                            loading.dismiss();
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            _this.router.navigate(['/menu/invoice']);
                            // this.nav.navigateRoot('/menu/invoice');
                            // this.databaseservice.setupdateclients(1);
                            // this.router.navigate(['/menu/clients']);
                            // this.initializeItems();
                        }, function (err) {
                            loading.dismiss();
                            ;
                            //  this.databaseservice.setupdateclients(1);
                            //  this.router.navigate(['/menu/clients']);
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
    AddinvoicePage.prototype.updateCalculations = function () {
        if (this.selectedItems.length == 0) {
            this.discount = 0;
            this.total = 0;
            this.subtotal = 0;
            // this.duepayment = 0;
        }
        for (var i = 0; i < this.selectedItems.length; i++) {
            this.subtotal = this.subtotal + (this.selectedItems[i].menu_order * this.selectedItems[i].regular_price);
            this.discount = this.discount + (this.selectedItems[i].regular_price - this.selectedItems[i].weight) * this.selectedItems[i].menu_order;
            this.total = this.subtotal - this.discount;
            var a = parseFloat(this.discount.toString()).toFixed(2);
            var b = parseFloat(this.total.toString()).toFixed(2);
            var c = parseFloat(this.subtotal.toString()).toFixed(2);
            this.discount = parseFloat(a);
            this.total = parseFloat(b);
            this.subtotal = parseFloat(c);
            //this.duepayment = this.total - this.payed;
            ;
        }
    };
    AddinvoicePage.prototype.deleteData = function () {
        this.selectedItems = [];
        this.discount = 0.00;
        this.subtotal = 0.00;
        this.total = 0.00;
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
        this.databaseprovider.setItemUrl('');
    };
    AddinvoicePage.prototype.presentPrompt = function () {
        var _this = this;
        this.alrtCtrl.create({
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
                        _this.message = data.Message;
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    AddinvoicePage.prototype.updateTotal = function (searchbar, item) {
        var x = item.Rate * item.Qty;
        this.subtotal = this.subtotal - x;
        var q = searchbar.srcElement.value;
        var b = q * item.Qty;
        this.subtotal = this.subtotal + b;
        this.total = this.subtotal - this.discount;
    };
    AddinvoicePage.prototype.updateItem = function (searchbar, item) {
        var temp = item.Qty;
        var q = searchbar.srcElement.value;
        if (q <= parseInt(item.Instock)) {
            if (item.Star === 1) {
                item.Star = 0;
                this.outOfStockItems = this.outOfStockItems - 1;
            }
            var x = item.Rate * item.Qty;
            this.subtotal = this.subtotal - x;
            var b = q * item.Rate;
            this.subtotal = this.subtotal + b;
            this.total = this.subtotal - this.discount;
        }
        else {
            if (item.Star === 0) {
                item.Star = 1;
                this.outOfStockItems = this.outOfStockItems + 1;
            }
            var x = item.Rate * item.Qty;
            this.subtotal = this.subtotal - x;
            var b = q * item.Rate;
            this.subtotal = this.subtotal + b;
            this.total = this.subtotal - this.discount;
            this.showToast();
        }
    };
    // updateItem(searchbar, item) {
    //   
    //   const x = item.Rate * item.Qty;
    //   this.subtotal = this.subtotal - x;
    //   const q = searchbar.srcElement.value;
    //   const b = q * item.Rate;
    //   this.subtotal = this.subtotal + b;
    //   this.total = this.subtotal - this.discount;
    // }
    AddinvoicePage.prototype.showToast = function () {
        this.toast = this.toastController.create({
            message: 'Product Out Of Stock',
            duration: 2000
        }).then(function (toastData) {
            console.log(toastData);
            toastData.present();
        });
    };
    AddinvoicePage.prototype.HideToast = function () {
        this.toast = this.toastController.dismiss();
    };
    AddinvoicePage.prototype.getAllClientsLocaldb = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.syncService.getAllActiveClients().then(function (data) {
                            _this.clients = data;
                            _this.bal = data;
                            _this.balance = _this.bal.Balance;
                            console.log(_this.clients[0]);
                            _this.sortClients();
                            _this.activeClients = [];
                            ;
                            for (var i = 0; i < _this.clients.length; i++) {
                                if (_this.clients[i].Active === 1) {
                                    _this.activeClients.push(_this.clients[i]);
                                    var a = {
                                        type: 'radio',
                                        label: _this.clients[i].Fname + ' ' + _this.clients[i].Lname + ' ' + _this.clients[i].Shop,
                                        value: _this.clients[i].Fname + ',' + _this.clients[i].Cid + ',' + _this.clients[i].Balance
                                    };
                                    _this.raio.push(a);
                                }
                            }
                            //  this.selectActive();
                            // ;
                            // this.initializeItems();
                            _this.initializeactiveVendors();
                            _this.databaseprovider.setupdatevendors(0);
                            loading.dismiss();
                            _this.getAllItemsLocaldb();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddinvoicePage.prototype.getAllItemsLocaldb = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.syncService.getAllActiveItems().then(function (data) {
                            _this.items = data;
                            debugger;
                            // console.log(this.clients[0]);
                            //this.sortItems();
                            //this.inactiveItems = [];
                            _this.activeItems = [];
                            for (var i = 0; i < _this.items.length; i++) {
                                if (_this.items[i].Instock > 0) {
                                    if (_this.items[i].Active === 1) {
                                        _this.items[i]['Qty'] = 0;
                                        _this.items[i]['Star'] = 0;
                                        _this.activeItems.push(_this.items[i]);
                                    }
                                }
                            }
                            debugger;
                            // this.initializeItems();
                            _this.initializeActiveItems();
                            _this.databaseprovider.setupdateitems(0);
                            loading.dismiss();
                            ;
                        }, function (err) {
                            console.log('JS call error', err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddinvoicePage.prototype.AddLog = function () {
        var _this = this;
        if (this.usdId === 1) {
            this.acttype = 'You added a new';
        }
        else {
            this.acttype = 'You added a new';
        }
        this.name = 'Invoice';
        var now = new Date().toString();
        var a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a'); //'MMMM dd, yyy h:mm a'
        this.lgdate = 'at ' + a;
        this.tblName = 'invoices';
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(function (data) {
            console.log("Log has been added");
            _this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    };
    AddinvoicePage.prototype.saveInvoiceLocaldb = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, itemsArray, i, i, a_1, now, a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        itemsArray = [];
                        for (i = 0; i < this.tempActiveItems.length; i++) {
                            if (this.tempActiveItems[i].Sync === 1) {
                                this.tempActiveItems[i].Sync = 2;
                            }
                        }
                        for (i = 0; i < this.tempActiveItems.length; i++) {
                            a_1 = {
                                Id: parseInt(this.tempActiveItems[i].itemid),
                                Qty: this.tempActiveItems[i].Qty,
                                CostPrice: this.tempActiveItems[i].Rate,
                                Sync: this.tempActiveItems[i].Sync
                            };
                            itemsArray.push(a_1);
                        }
                        itemsArray;
                        this.selectedClientSync;
                        if (this.selectedClientSync === 1) {
                            this.selectedClientSync = 2;
                        }
                        now = new Date().toString();
                        a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
                        // tslint:disable-next-line: max-line-length
                        this.syncService.addInvoice('113008225657937776461', this.selectedClientID, this.selectedClientSync, 'INV01', a, 'ISL', this.invoice.duedate, itemsArray, this.subtotal, this.discount, this.subtotal - this.discount, this.message, 'Pending')
                            .then(function (data) {
                            _this.data;
                            _this.tblId = data;
                            _this.events.publish('refreshClients', 'saad2', '');
                            _this.databaseprovider.setupdateinvoice(1);
                            _this.databaseprovider.setupdateclients(1);
                            loading.dismiss();
                            //this.router.navigate(['/menu/invoice']);
                            _this.nav.navigateRoot('/menu/invoice');
                            _this.AddLog();
                            if (_this.network.type === 'none') {
                            }
                            else {
                                _this.syncAddedInvoice();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddinvoicePage.prototype.syncAddedInvoice = function () {
        var _this = this;
        this.syncService.syncAddedInvoices().then(function (data) {
            if (data.length > 0) {
                var IDs_1 = [];
                for (var i = 0; i < data.length; i++) {
                    IDs_1[i] = data[i].Iid;
                }
                var url = _this.databaseprovider.getURL();
                ;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncAddedInvoices',
                    "Invoices": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        _this.syncService.updateSyncedInvoices(IDs_1).then(function (data) {
                        });
                        _this.syncService.syncAddedInvoicesItems().then(function (data) {
                            if (data.length > 0) {
                                var IDs_2 = [];
                                for (var i = 0; i < data.length; i++) {
                                    IDs_2[i] = data[i].Iiid;
                                }
                                var url_1 = _this.databaseprovider.getURL();
                                ;
                                _this.nativeHttp.setDataSerializer("json");
                                var nativeCall_1 = _this.nativeHttp.post(url_1, {
                                    'Name': 'syncAddedInvoicesItems',
                                    "InvoiceItems": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(nativeCall_1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { }))
                                    .subscribe(function (data) {
                                    console.log('Native data:', data);
                                    var g = JSON.parse(data.data);
                                    if (g.success === 1) {
                                        // alert('success');
                                        _this.syncService.updateSyncedInvoicesItems(IDs_2).then(function (data) {
                                        });
                                        _this.syncService.syncAddedLedger().then(function (data) {
                                            if (data.length > 0) {
                                                var IDs_3 = [];
                                                for (var i = 0; i < data.length; i++) {
                                                    IDs_3[i] = data[i].ID;
                                                }
                                                var url_2 = _this.databaseprovider.getURL();
                                                ;
                                                _this.nativeHttp.setDataSerializer("json");
                                                var nativeCall_2 = _this.nativeHttp.post(url_2, {
                                                    'Name': 'syncAddedLedger',
                                                    "Payments": data
                                                }, {
                                                    'Content-Type': 'application/json',
                                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                });
                                                Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(nativeCall_2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { }))
                                                    .subscribe(function (data) {
                                                    console.log('Native data:', data);
                                                    var g = JSON.parse(data.data);
                                                    if (g.success === 1) {
                                                        // alert('success');
                                                        _this.syncService.updateSyncedAddedLedger(IDs_3).then(function (data) {
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
                                            }
                                        }).then(function (data4) {
                                            _this.syncService.syncUpdatedItems().then(function (data) {
                                                if (data.length > 0) {
                                                    var IDs_4 = [];
                                                    for (var i = 0; i < data.length; i++) {
                                                        IDs_4[i] = data[i].itemid;
                                                    }
                                                    var url_3 = _this.databaseprovider.getURL();
                                                    ;
                                                    _this.nativeHttp.setDataSerializer("json");
                                                    var nativeCall_3 = _this.nativeHttp.post(url_3, {
                                                        'Name': 'syncUpdatedItems',
                                                        "Items": data
                                                    }, {
                                                        'Content-Type': 'application/json',
                                                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                    });
                                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(nativeCall_3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { }))
                                                        .subscribe(function (data) {
                                                        console.log('Native data:', data);
                                                        var g = JSON.parse(data.data);
                                                        if (g.success === 1) {
                                                            //alert('success Updated');
                                                            _this.syncService.updateSyncedItems(IDs_4).then(function (data) {
                                                            });
                                                        }
                                                        else {
                                                            //  alert('failed');
                                                        }
                                                        // this.initializeItems();
                                                    }, function (err) {
                                                        console.log('JS call error', err);
                                                        var error = JSON.parse(err.error);
                                                        // alert(error.message);
                                                        console.log('Native data:', JSON.parse(error));
                                                    });
                                                }
                                            }).then(function () {
                                                _this.syncService.syncUpdatedClients().then(function (data) {
                                                    if (data.length > 0) {
                                                        var IDs_5 = [];
                                                        for (var i = 0; i < data.length; i++) {
                                                            IDs_5[i] = data[i].Cid;
                                                        }
                                                        var url_4 = _this.databaseprovider.getURL();
                                                        ;
                                                        _this.nativeHttp.setDataSerializer("json");
                                                        var nativeCall_4 = _this.nativeHttp.post(url_4, {
                                                            'Name': 'syncUpdatedClients',
                                                            "Clients": data
                                                        }, {
                                                            'Content-Type': 'application/json',
                                                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                        });
                                                        Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["from"])(nativeCall_4).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["finalize"])(function () { }))
                                                            .subscribe(function (data) {
                                                            console.log('Native data:', data);
                                                            var g = JSON.parse(data.data);
                                                            if (g.success === 1) {
                                                                //alert('success');
                                                                _this.syncService.updateSyncedClients(IDs_5).then(function (data) {
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
                                            });
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
                            }
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
    AddinvoicePage.prototype.emptyAlert = function (head, sub, msg) {
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'alertSize',
            buttons: [
                {
                    text: 'OK',
                    cssClass: 'cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    AddinvoicePage.prototype.saveALert = function (head, sub, msg) {
        var _this = this;
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            cssClass: 'alertSize',
            buttons: [
                // {
                //   text: 'Delete',
                //   cssClass: 'cancel1',
                //   role: 'cancel',
                //   handler: () => {
                //     console.log('Confirm Cancel');
                //   }
                // },
                {
                    text: 'Cancel',
                    cssClass: 'customClass',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Save',
                    handler: function () {
                        console.log('Confirm Ok');
                        _this.selectedClient;
                        ;
                        _this.selectedItems;
                        _this.total;
                        _this.discount;
                        if (typeof _this.selectedClintName !== 'undefined' && _this.selectedClintName !== '' && _this.subtotal > 0) {
                            console.log(_this.selectedClientID);
                            _this.select = _this.selectedClientID;
                            /*this.syncService.getClient(this.select).then(data=>{
                              ;
                              console.log(data);
                              this.bal=data;
                      console.log(this.bal);
                      this.selectedClientBalance=this.bal[0].Balance;
                      console.log(this.selectedClientBalance);
                        ;
                        if(this.selectedClientBalance==null)
                        {
                          this.balance=0+this.total-this.discount;
                        }
                        else
                        {
                        this.balance=this.selectedClientBalance-this.total+this.discount;
                        }
                        this.updateClient();
                            });*/
                            _this.saveInvoiceLocaldb();
                        }
                        else {
                            if (typeof _this.selectedClintName === 'undefined' || _this.selectedClintName === '') {
                                alert('Kindly select Client');
                            }
                            else {
                                alert('The price for the item(s) can not be 0');
                            }
                        }
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    // GetClient(){
    //   this.syncService.getClient(this.selectedClientID).then(data=>{
    //     console.log(data);
    //   });
    // }
    AddinvoicePage.prototype.updateClient = function () {
        this.syncService.updateClientBalance(this.selectedClientID, this.balance).then(function (data) {
            console.log("Client Updated");
        });
    };
    AddinvoicePage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_9__["DatabaseService"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__["HTTP"] },
        { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_15__["DatePicker"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_16__["SyncService"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_17__["Network"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
    ]; };
    AddinvoicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addinvoice',
            template: __webpack_require__(/*! raw-loader!./addinvoice.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/addinvoice/addinvoice.page.html"),
            styles: [__webpack_require__(/*! ./addinvoice.page.scss */ "./src/app/pages/addinvoice/addinvoice.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"],
            src_app_services_database_service__WEBPACK_IMPORTED_MODULE_9__["DatabaseService"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__["HTTP"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_15__["DatePicker"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_16__["SyncService"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_17__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], AddinvoicePage);
    return AddinvoicePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-addinvoice-addinvoice-module-es5.js.map