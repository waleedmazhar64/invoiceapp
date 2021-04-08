(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-invoicedetails-invoicedetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/invoicedetails/invoicedetails.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/invoicedetails/invoicedetails.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\" *ngIf=\"paid === 0\">\r\n    <div style=\"width: 100%;\">\r\n      <ion-toolbar [color]=\"paid\" *ngIf=\"paid === 0\">\r\n          <ion-label style=\"font-size: 80%;\" padding slot=\"start\" (click)=\"back()\">Close</ion-label>\r\n          <ion-label style=\"font-size: 80%;\" slot=\"start\" (click)=\"email()\">Email</ion-label>\r\n          <ion-label style=\"font-size: 80%;\" padding slot=\"start\" (click)=\"confirmPaid()\">Mark As Paid</ion-label>\r\n          <span *ngIf=\"edit === 1\" style=\"font-weight: bold;\">\r\n            <a style=\"font-size: 80%;\" *ngIf=\"outOfStockItems === 0\" (click)=\"editOrder()\">Save</a>\r\n          </span> \r\n          <span *ngIf=\"edit === 0\" style=\"font-weight: bold;\">\r\n            <a style=\"font-size: 80%;\" (click)=\"editClicked()\">Edit</a>\r\n          </span>  \r\n          <!-- <ion-icon padding  name=\"close\" (click)=\"back()\"></ion-icon> -->\r\n          <!-- <ion-icon padding  slot=\"end\" name=\"share-alt\" (click)=\"share()\"></ion-icon> -->\r\n          <!-- <ion-label *ngIf=\"tempTotal !== total\" padding slot=\"end\" (click)=\"share()\">Save</ion-label> -->\r\n          <span  style=\"float:right;padding-right: 5px;font-size: 80%;font-weight: bold;\">\r\n            <a (click)=\"copypaste()\">{{client}}</a>\r\n            \r\n        </span>\r\n        <span style=\"float:right;padding-right: 5px;font-size: 50%;position:absolute;top:60%;right:1%;\">\r\n          {{info1}}\r\n        </span>\r\n      </ion-toolbar>\r\n    </div>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n            <div>\r\n                <span style=\"float:right;padding-right: 5px; font-size: 4rem;\">Invoice</span>\r\n            </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <span *ngIf=\"edit === 0\" style=\"float:left;padding-left: 3px;font-size: 60%;padding-top:7%;\">\r\n            Due: {{invoice.DueDate}}\r\n          </span>\r\n          <span *ngIf=\"edit === 1\" (click)=\"selectDueDate()\" style=\"float:left;padding-left: 3px;font-size: 60%;padding-top:7%;\">\r\n            Due: {{invoice.DueDate}}\r\n          </span>\r\n        </ion-col>\r\n        <ion-col>\r\n          <span  style=\"float:right;padding-right: 3px;font-size: 60%;padding-top:7%;\">\r\n            Dated: {{invoice.CreateDate}}\r\n          </span>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <span style=\"font-size: 80%;\" (click)=\"call()\" style=\"float:left;padding-right: 3px;\">\r\n            Call\r\n          </span>\r\n        </ion-col>\r\n        <ion-col>\r\n          <span style=\"font-size: 80%;\" (click)=\"Sms()\" style=\"float:right;padding-right: 3px;\">\r\n            SMS\r\n         </span>\r\n        </ion-col>\r\n    </ion-row>\r\n    </ion-grid>\r\n      <!-- <div>\r\n          <p style=\"font-size: 60%;\" style=\"text-align:left;padding-left: 5px;\">\r\n             Dated: {{invoice.CreateDate}}\r\n              <span  style=\"float:right;padding-right: 5px;\">\r\n                Due date: {{invoice.DueDate}}\r\n              </span>\r\n          </p>\r\n          <p style=\"font-size: 60%;\" style=\"text-align:left;padding-left: 5px;\">\r\n               <span (click)=\"call()\">Call</span> \r\n              <span (click)=\"Sms()\" style=\"float:right;padding-right: 5px;\">\r\n                 SMS\r\n              </span>\r\n          </p>\r\n         \r\n      </div> -->\r\n    \r\n    </ion-toolbar>\r\n    <ion-toolbar color=\"success\" *ngIf=\"paid === 1\">\r\n      <div style=\"width: 100%;\">\r\n        <ion-toolbar color=\"succes\" *ngIf=\"paid === 1\">\r\n            <ion-label style=\"font-size: 80%;\" padding slot=\"start\" (click)=\"back()\">Close</ion-label>\r\n            <ion-label style=\"font-size: 80%;\" slot=\"start\" (click)=\"email()\">Email</ion-label>\r\n            <!-- <ion-label padding slot=\"start\" (click)=\"markAsPaid()\">Mark As Paid</ion-label> -->\r\n            <!-- <ion-icon padding  name=\"close\" (click)=\"back()\"></ion-icon> -->\r\n            <!-- <ion-icon padding  slot=\"end\" name=\"share-alt\" (click)=\"share()\"></ion-icon> -->\r\n            <!-- <ion-label *ngIf=\"tempTotal !== total\" padding slot=\"end\" (click)=\"share()\">Save</ion-label> -->\r\n            <span style=\"float:right;padding-right: 5px;font-weight: bold;font-size: 80%;\">\r\n              <a (click)=\"copypaste()\">{{client}}</a>\r\n              \r\n          </span>\r\n          <span style=\"float:right;padding-right: 5px;font-size: 50%;position:absolute;top:60%;right:1%;\">\r\n            {{info1}}\r\n          </span>\r\n        </ion-toolbar>\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n              <div>\r\n                  <span style=\"float:right;padding-right: 5px; font-size: 4rem;\">Invoice</span>\r\n              </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n        <div>\r\n            <p  style=\"text-align:left;padding-left: 5px;font-size: 60%\">\r\n               Dated: {{invoice.CreateDate}}\r\n                <span  style=\"float:right;padding-right: 5px;\">\r\n                  Due date: {{duedate}}\r\n                </span>\r\n            </p>\r\n            <p  style=\"text-align:left;padding-left: 5px;font-size: 80%\">\r\n                 <span (click)=\"call()\">Call</span> \r\n                <span (click)=\"Sms()\" style=\"float:right;padding-right: 5px;\">\r\n                   SMS\r\n                </span>\r\n            </p>\r\n           \r\n        </div>\r\n      \r\n      </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n       \r\n    <!-- <ion-item>            \r\n        <ion-avatar slot=\"start\" >\r\n            <img src=\"assets/plus.png\">\r\n            \r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2 text-capitalize>{{ client }}</h2>\r\n      \r\n        </ion-label>\r\n       \r\n    </ion-item>  -->\r\n    <!-- <ion-item  *ngIf=\"tempActiveItems.length === 0\">            \r\n        <ion-avatar slot=\"start\" >\r\n            <img src=\"assets/plus.png\">\r\n            \r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2 text-capitalize>Item</h2>\r\n        </ion-label>\r\n    </ion-item>  -->\r\n   \r\n      <ion-item lines=\"none\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"2\">\r\n                <ion-item no-padding lines=\"none\" style=\"text-align: right;\">\r\n                    <p class=\"my-label1\"  style=\"font-weight: bold;\"> Qty\r\n                    </p>\r\n                </ion-item>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <ion-item lines=\"none\" style=\"text-align: left;\">\r\n                  <p class=\"my-label1\"  style=\"font-weight: bold;\"> Item(s)\r\n                  </p>\r\n                </ion-item>\r\n              </ion-col>\r\n              <!--<ion-col size=\"3\">\r\n                <ion-item lines=\"none\" style=\"text-align: right;\">\r\n                  <p class=\"my-label1\"  style=\"font-weight: bold;\"> Price\r\n                  </p>\r\n                </ion-item>\r\n              </ion-col>-->\r\n              <ion-col size=\"4\">\r\n                <ion-item lines=\"none\"style=\"text-align: right;\">\r\n                    <p class=\"my-label1\"  style=\"font-weight: bold;\">Total</p>\r\n                    <p class=\"my-label3\"  style=\"font-weight: bold;\">({{currency}})</p>\r\n                </ion-item>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n      </ion-item>\r\n        \r\n      <ion-list no-padding>\r\n          <ion-item-sliding  *ngFor=\"let item of addedItems;index as pos\" >\r\n              <!-- <ion-item-options side=\"end\">\r\n                  <ion-item-option color=\"danger\" >Delete</ion-item-option>\r\n                </ion-item-options> -->\r\n        <ion-item  >\r\n          <ion-grid>\r\n              <ion-row>\r\n                <ion-col size=\"2\">\r\n                  <ion-item no-padding lines=\"none\">\r\n                      <!-- <ion-icon (click)=\"quantityDecrement(item)\" name=\"remove-circle\" color=\"danger\"></ion-icon> -->\r\n                      <!-- <ion-label text-center > {{item.Qty}}\r\n                      </ion-label> -->\r\n                      <ion-label *ngIf=\"edit === 0\" text-center class=\"my-label\"> {{item.Qty}}\r\n                      </ion-label>\r\n                      <span *ngIf=\"item.Star == 1\" style=\"color: red;\">*</span>\r\n                      <ion-input *ngIf=\"edit === 1\" class=\"my-label\" (click)=\"clearVal(item)\"  (ionInput)=\"updateItem($event,item)\"  maxlength=\"5\"  type=\"tel\" no-padding style=\"border: none;text-align: center;\" [(ngModel)]=\"item.Qty\"></ion-input> \r\n                      <!-- <ion-icon (click)=\"quantityIncrement(item)\" name=\"add-circle\" color=\"success\"></ion-icon> -->\r\n                  </ion-item>\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                  <ion-item lines=\"none\"style=\"float: left;\">\r\n                    <!-- <p class=\"my-label\" >{{item.Description}} <span><ion-input class=\"my-label\"  [readonly]=\"true\" (ionInput)=\"updateTotal($event,item)\"  maxlength=\"5\"  type=\"tel\" no-padding style=\"border: none;text-align: left;max-width: 100%;\" [(ngModel)]=\"item.CostPrice\">\r\n                        {{item.Qty}}x</ion-input></span> </p> -->\r\n                        <p class=\"my-label\" *ngIf=\"edit === 0\" >{{item.Description}} <span><ion-input class=\"my-label\"  [readonly]=\"true\" (ionInput)=\"updateTotal($event,item)\"  maxlength=\"5\"  type=\"tel\" no-padding style=\"border: none;text-align: left;max-width: 100%;\" [(ngModel)]=\"item.CostPrice\">\r\n                          {{item.Qty}}x</ion-input></span> </p>\r\n                      <p class=\"my-label\" *ngIf=\"edit === 1\" >{{item.Description}} <span><ion-input class=\"my-label\" (click)=\"clearVal1(item)\" (ionInput)=\"updateTotal($event,item)\"  maxlength=\"5\"  type=\"tel\" no-padding style=\"border: none;text-align: left;max-width: 100%;\" [(ngModel)]=\"item.CostPrice\">\r\n                            {{item.Qty}}x</ion-input></span> </p>\r\n                       \r\n                    <!-- <span *ngIf=\"item.Instock > 0\" style=\"color: green;\">({{item.Instock}})</span><span *ngIf=\"item.Instock === 0\" style=\"color: red;\">(out of stock)</span> -->\r\n                  </ion-item>\r\n                </ion-col>\r\n                <!--<ion-col size=\"3\">\r\n                  <ion-item lines=\"none\">\r\n                       <ion-label text-center >{{item.Rate}}</ion-label> \r\n                      <p class=\"my-label\" >{{item.CostPrice}} </p>\r\n                       <ion-input [readonly]=\"true\" (ionInput)=\"updateTotal($event,item)\"  maxlength=\"5\" text-center type=\"tel\" no-padding style=\"border: none;text-align: center;\" [(ngModel)]=\"item.CostPrice\"></ion-input>  \r\n                  </ion-item>\r\n                </ion-col>-->\r\n                <ion-col size=\"4\">\r\n                  <ion-item lines=\"none\"style=\"float: right;\">\r\n                    <p class=\"my-label\"  >{{item.Qty * item.CostPrice}}</p>\r\n                </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n          </ion-grid>\r\n          <!-- <ion-label>1</ion-label>\r\n          <ion-label>1</ion-label>\r\n          <ion-label text-center style=\"color:royalblue;\">show less</ion-label>\r\n          <span style=\"float:right;\" class=\"cancel\">\r\n              PKR \r\n          </span> -->\r\n\r\n        </ion-item>\r\n       \r\n        </ion-item-sliding>\r\n        <!-- <ion-item *ngIf=\"addedItems.length !== items.length\"> \r\n          <ion-button  (click)=\"AddItems()\"  expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;border-radius: 50px; --border-radius: 15px;\" >\r\n          <ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon>\r\n          Add Item\r\n          </ion-button>\r\n      </ion-item> -->\r\n      </ion-list>   \r\n      <ion-button *ngIf=\"selectedItems.length > 0\"  expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;border-radius: 50px; --border-radius: 15px;\" >\r\n          <ion-icon name=\"add-circle-outline\" slot=\"start\"></ion-icon>\r\n        Item\r\n      </ion-button>\r\n    <ion-item color=\"light\">            \r\n      \r\n                <ion-label>\r\n                        <h3 text-capitalize style=\"padding-left: 5px;\"  class=\"lightgrey\">Subtotal <ion-icon  name=\"pricetag\"></ion-icon></h3>  \r\n                 </ion-label>\r\n                 <ion-label>\r\n                 <span style=\"float:right;\" color=\"dark\">\r\n                            {{subtotal | currency:currency:true:\"1.2\"}}\r\n                    </span>\r\n                </ion-label>\r\n       \r\n    </ion-item>    \r\n    <ion-item color=\"light\"  *ngIf=\"edit === 0\">            \r\n      <ion-label>\r\n              <h3 text-capitalize style=\"padding-left: 5px;\" class=\"lightgrey\">Discount</h3>\r\n            </ion-label>\r\n            <ion-label>\r\n                <span style=\"float:right;\" class=\"cancel\">\r\n                     {{discount | currency:currency:true:\"1.2\"}}\r\n                </span>\r\n            </ion-label>\r\n     \r\n</ion-item>\r\n<ion-item color=\"light\" *ngIf=\"edit === 1\" (click)=\"discountPrompt()\">            \r\n<ion-label>\r\n        <h3 text-capitalize style=\"padding-left: 5px;\" class=\"lightgrey\">Discount</h3>\r\n      </ion-label>\r\n      <ion-label>\r\n          <span style=\"float:right;\" class=\"cancel\">\r\n               {{discount | currency:currency:true:\"1.2\"}}\r\n          </span>\r\n      </ion-label>\r\n\r\n</ion-item>\r\n     <ion-item  color=\"dark\">            \r\n            <ion-label>\r\n                    <h1 text-capitalize style=\"padding-left: 5px;font-size: 135%;\">Total</h1>\r\n                    <!-- <h5 style=\"font-size: 10px;\">Paid:PKR {{lastPayment}}</h5> -->\r\n             </ion-label>\r\n             <ion-label>\r\n                      <span style=\"float:right;\" >\r\n                        <h1 style=\"font-size: 135%\">  {{subtotal - discount | currency:currency:true:\"1.2\"}}</h1> \r\n                        <!-- <h6 style=\"font-size: 10px;\">Balance Due:PKR {{duepayment}}</h6>  -->\r\n                      </span>\r\n              </ion-label>\r\n           \r\n     </ion-item>  \r\n     <ion-item *ngIf=\"invoice.Message !== ''\">\r\n       <p><span style=\"font-weight: bold;float:right;\">Remarks:&nbsp;</span></p>\r\n       <p> {{message}}</p>\r\n     </ion-item>\r\n     \r\n     <!-- <ion-button (click)=\"presentPrompt()\" expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;border-radius: 50px; --border-radius: 15px;\" >Remarks</ion-button> -->\r\n     <!-- <ion-list *ngFor=\"let item of images;index as pos\">\r\n         <ion-item >\r\n            <ion-thumbnail slot=\"start\">\r\n                <ion-img [src]=\"item.path\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label>\r\n                Attachment\r\n              </ion-label>\r\n              <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(item, pos)\" class=\"ion-md-time\">\r\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n              </ion-button>\r\n         </ion-item>\r\n     </ion-list> -->\r\n     <!-- <ion-button (click)=\"selectImage()\" expand=\"block\" text-capitalize=\"false\" fill=\"outline\" size=\"large\" style=\"width: 80%; margin-left: auto;margin-right: auto;--border-radius: 15px;\"> <ion-icon slot=\"start\" name=\"attach\"></ion-icon>Attachments</ion-button> -->\r\n\r\n</ion-list>\r\n\r\n</ion-content>\r\n<!-- <ion-footer >\r\n \r\n  <div style=\"text-align: center;\">\r\n    <ion-toolbar color=\"light\">\r\n        <ion-grid>\r\n            <ion-row>\r\n              <ion-col text-center>\r\n                <ion-button fill=\"outline\" color=\"primary\">\r\n                    <ion-icon name=\"mail\" color=\"danger\"></ion-icon><br>\r\n                    <label color=\"primary\">Email</label>\r\n                </ion-button>\r\n                <ion-icon name=\"mail\" color=\"primary\"></ion-icon>\r\n                <ion-label>hihbj</ion-label>\r\n                  <ion-button color=\"primary\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  style=\"width: auto;\">Move to</ion-button>\r\n              </ion-col>\r\n              <ion-col text-center>\r\n                  <ion-button color=\"success\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  style=\"width: auto;\">Mark As Paid</ion-button>\r\n        \r\n              </ion-col>\r\n              <ion-col text-center>\r\n                  <ion-button color=\"danger\" text-capitalize=\"false\" fill=\"outline\" size=\"small\"  style=\"width: auto;\">Email</ion-button>\r\n        \r\n              </ion-col>\r\n            </ion-row>\r\n            \r\n            <ion-row text-center>\r\n                <ion-buttons slot=\"end\">\r\n                    <ion-button>\r\n                      <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\r\n                      forward\r\n                    </ion-button>\r\n                  </ion-buttons>\r\n            </ion-row>\r\n            <ion-row>\r\n            </ion-row>\r\n            </ion-grid>\r\n\r\n    </ion-toolbar>\r\n  </div>\r\n\r\n\r\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/pages/invoicedetails/invoicedetails.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/invoicedetails/invoicedetails.module.ts ***!
  \***************************************************************/
/*! exports provided: InvoicedetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicedetailsPageModule", function() { return InvoicedetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _invoicedetails_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./invoicedetails.page */ "./src/app/pages/invoicedetails/invoicedetails.page.ts");

















const routes = [
    {
        path: '',
        component: _invoicedetails_page__WEBPACK_IMPORTED_MODULE_16__["InvoicedetailsPage"]
    }
];
let InvoicedetailsPageModule = class InvoicedetailsPageModule {
};
InvoicedetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["DatePicker"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_12__["CallNumber"],
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_13__["SMS"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_15__["FileOpener"]
        ],
        declarations: [_invoicedetails_page__WEBPACK_IMPORTED_MODULE_16__["InvoicedetailsPage"]]
    })
], InvoicedetailsPageModule);



/***/ }),

/***/ "./src/app/pages/invoicedetails/invoicedetails.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/invoicedetails/invoicedetails.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-label3 {\n  font-size: 65%;\n}\n\na {\n  color: inherit;\n}\n\nion-footer {\n  background-image: none;\n  border-radius: 50px !important;\n}\n\n.my-label {\n  font-size: 80%;\n}\n\n.my-label1 {\n  font-size: 85%;\n}\n\n.my-label2 {\n  font-size: 60%;\n}\n\n.my-label3 {\n  font-size: 65%;\n}\n\n.my-label4 {\n  font-size: 85%;\n}\n\nion-toolbar {\n  --background: #084e1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52b2ljZWRldGFpbHMvQzpcXHdhbXA2NFxcd3d3XFxpbnZvaWNlLnBrL3NyY1xcYXBwXFxwYWdlc1xcaW52b2ljZWRldGFpbHNcXGludm9pY2VkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW52b2ljZWRldGFpbHMvaW52b2ljZWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtBQ0FKOztBREVFO0VBQUksY0FBQTtBQ0VOOztBRERFO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtBQ0lKOztBREZBO0VBQ0UsY0FBQTtBQ0tGOztBREhBO0VBQ0UsY0FBQTtBQ01GOztBREpBO0VBQ0UsY0FBQTtBQ09GOztBRExBO0VBQ0UsY0FBQTtBQ1FGOztBRE5BO0VBQ0UsY0FBQTtBQ1NGOztBRFBBO0VBRUUscUJBQUE7QUNTRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludm9pY2VkZXRhaWxzL2ludm9pY2VkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5teS1sYWJlbDMge1xyXG4gICAgZm9udC1zaXplOiA2NSU7XHJcbiAgfVxyXG4gIGEgeyBjb2xvcjogaW5oZXJpdDsgfSBcclxuICBpb24tZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm15LWxhYmVsIHtcclxuICBmb250LXNpemU6IDgwJTtcclxufVxyXG4ubXktbGFiZWwxIHtcclxuICBmb250LXNpemU6IDg1JTtcclxufSBcclxuLm15LWxhYmVsMiB7XHJcbiAgZm9udC1zaXplOiA2MCU7XHJcbn1cclxuLm15LWxhYmVsMyB7XHJcbiAgZm9udC1zaXplOiA2NSU7XHJcbn1cclxuLm15LWxhYmVsNCB7XHJcbiAgZm9udC1zaXplOiA4NSU7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIFxyXG4gIC0tYmFja2dyb3VuZDogIzA4NGUxYjtcclxuICBcclxufSIsIi5teS1sYWJlbDMge1xuICBmb250LXNpemU6IDY1JTtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xufVxuXG4ubXktbGFiZWwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLm15LWxhYmVsMSB7XG4gIGZvbnQtc2l6ZTogODUlO1xufVxuXG4ubXktbGFiZWwyIHtcbiAgZm9udC1zaXplOiA2MCU7XG59XG5cbi5teS1sYWJlbDMge1xuICBmb250LXNpemU6IDY1JTtcbn1cblxuLm15LWxhYmVsNCB7XG4gIGZvbnQtc2l6ZTogODUlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzA4NGUxYjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/invoicedetails/invoicedetails.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/invoicedetails/invoicedetails.page.ts ***!
  \*************************************************************/
/*! exports provided: InvoicedetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicedetailsPage", function() { return InvoicedetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_21__);








// import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';















pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_20___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_21___default.a.pdfMake.vfs;
let InvoicedetailsPage = class InvoicedetailsPage {
    constructor(location, alrtCtrl, router, toastController, storage, loadingController, ref, filePath, datePipe, events, nav, file, webview, actionSheetController, 
    // private camera: Camera,
    plt, http, databaseprovider, nativeHttp, datepicker, syncService, network, callnumber, sms, socialSharing, loadingCtrl) {
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
        this.nav = nav;
        this.file = file;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.plt = plt;
        this.http = http;
        this.databaseprovider = databaseprovider;
        this.nativeHttp = nativeHttp;
        this.datepicker = datepicker;
        this.syncService = syncService;
        this.network = network;
        this.callnumber = callnumber;
        this.sms = sms;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.edit = 0;
        this.Client = 'Select Client';
        this.add1 = '';
        this.selectedClintName = '';
        this.selectedClientID = '';
        this.selectedItems = [];
        this.subtotal = 0;
        this.discount = 0;
        this.total = 0;
        this.payed = 0;
        this.tempActiveItems = [];
        this.duepayment = 0;
        this.info = {
            Amount: "",
            TotalDebit: "",
            ID: "",
            InvoiceID: "",
            Date: "",
            CustomerID: "",
            IsCredit: "",
            Duedate: "",
            ByUserId: "",
            Remarks: ""
        };
        this.invoice = {
            AccountId: '',
            BillingAddress: '',
            Cid: '',
            CreateDate: '',
            Discount: '',
            DueDate: '',
            clientSync: 0,
            Fname: '',
            Shop: '',
            City: '',
            Lname: '',
            Iid: '',
            Message: '',
            Name: '',
            Status: '',
            Subtotal: '',
            Terms: '',
            Total: '',
            Sync: 0,
            Cell: 0
        };
        this.tempActiveitems = {
            Cost: '',
            Description: '',
            Iid: '',
            Qty: '',
            Rate: '',
            itemid: ''
        };
        this.prev = '';
        this.paid = 0;
        this.Cell = 0;
        this.items = [];
        this.duedate = '';
        this.raio = [];
        this.client = 'Client';
        this.clients = [];
        this.activeClients = [];
        this.tempActiveClients = [];
        this.activeItems = [];
        this.message = '';
        this.created = '';
        this.templkj = [];
        this.credit = '';
        this.debit = '';
        this.lastPayment = '0';
        this.Status = 0;
        this.currentDate = new Date().toString();
        this.index = 0;
        this.paidamount = 0;
        this.dueamount = 0;
        this.info1 = '';
        this.url = '';
        this.tempTotal = 0;
        this.CustomerBalance = 0;
        this.addedItems = [];
        this.remainingItems = [];
        this.SelectedClientSync = 0;
        this.currency = '';
        this.company = 'PKR';
        this.pdfObj = null;
        this.outOfStockItems = 0;
        this.events.publish('user:created1', 'saad1', '');
        this.storage.get('COM').then((val) => {
            this.company = val;
        });
        this.storage.get('userId').then((val) => {
            this.usdId = val;
            console.log(this.usdId);
        });
        storage.get('currency').then((val) => {
            if (val !== null) {
                this.currency = val.toString();
            }
        });
        this.url = this.router.url;
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                this.ngOnInit();
            }
            // Instance of should be:
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
        // this.getAllClients();
        this.getAllClientsLocaldb();
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.invoice !== 'undefined') {
                this.prev = this.router.getCurrentNavigation().extras.state.url;
                if (this.prev === 'Outstanding') {
                    this.events.publish('refreshOutInvoices', 'saad2', '');
                }
                if (this.prev === '/menu/invoice') {
                    this.events.publish('refreshInvoices', 'saad2', '');
                }
                if (this.prev === '/menu/logs') {
                    this.events.publish('refreshLogs', 'saad2', '');
                }
                this.currentDate = this.datePipe.transform(this.currentDate, 'dd MMM yyyy');
                this.invoice = this.router.getCurrentNavigation().extras.state.invoice;
                this.Cell = this.invoice.Cell;
                this.created = this.invoice.CreateDate;
                this.duedate = this.invoice.DueDate;
                this.selectedClintName = this.invoice.Fname;
                this.selectedClientID = this.invoice.Cid;
                this.client = this.invoice.Fname + ' ' + this.invoice.Lname;
                this.subtotal = parseInt(this.invoice.Subtotal);
                this.discount = parseInt(this.invoice.Discount);
                this.total = parseInt(this.invoice.Total);
                this.tempTotal = parseInt(this.invoice.Total);
                this.message = this.invoice.Message;
                this.Status = parseInt(this.invoice.Status);
                this.items = this.router.getCurrentNavigation().extras.state.Items;
                this.templkj = this.router.getCurrentNavigation().extras.state.Items;
                this.info1 = this.invoice.Shop + ', ' + this.invoice.BillingAddress + ', ' + this.invoice.City,
                    // this.getCustmerBalance();
                    this.getCustomerBalanceLocaldb();
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].Qty > 0) {
                        this.items[i]['Star'] = 0;
                        this.addedItems.push(this.items[i]);
                    }
                    else {
                        this.remainingItems.push(this.items[i]);
                    }
                }
                if (this.invoice.Status === '3') {
                    this.paid = 1;
                }
                for (let i = 0; i < this.items.length; i++) {
                    this.items[i].Qty = parseInt(this.items[i].Qty);
                    this.items[i].CostPrice = parseInt(this.items[i].CostPrice);
                    this.items[i]['stock'] = 0;
                    this.items[i]['temp'] = parseInt(this.items[i].Qty);
                }
                ;
            }
        }
    }
    getCustmerBalance() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create();
            yield loading.present();
            const url = this.databaseprovider.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url + '/payments.php', {
                "CustomerID": this.selectedClientID
            }, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                const g = JSON.parse(data.data);
                if (g.TotalDebit == null) {
                    g.TotalDebit = 0;
                }
                if (g.TotalCredit == null) {
                    g.TotalCredit = 0;
                }
                if (g.Amount == null) {
                    g.Amount = 0;
                }
                this.credit = g.TotalCredit;
                this.debit = g.TotalDebit;
                this.duepayment = parseInt(this.debit) - parseInt(this.credit);
                this.lastPayment = g.Amount;
                this.paidamount = g.Amount;
                this.dueamount = this.duepayment;
            }, err => {
                loading.dismiss();
                console.log('JS call error', err);
                const error = JSON.parse(err.error);
                alert(error.message);
                console.log('Native data:', JSON.parse(error));
            });
        });
    }
    share() {
        const msg = 'Save <br/><br/> Preview <br/><br/> Email <br/><br/> Share <br/><br/> Add Credits <br/><br/> Print ';
        // this.shareALert('','','');
        this.saveALert('', '', 'Save this invoice?');
    }
    showALert(head, sub, msg) {
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
                    handler: () => {
                        console.log('dele');
                        //  this.location.back();
                        this.router.navigate(['menu/invoice']);
                        console.log('Confirm Cancel');
                        this.selectedItems = [];
                        this.discount = 0.00;
                        this.subtotal = 0.00;
                        this.total = 0.00;
                        this.message = 'Thanks for your business';
                        this.client = 'Client';
                        this.databaseprovider.setItemUrl('');
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
                        if (this.selectedClintName !== '' && this.subtotal > 0) {
                            if (this.payed > 0) {
                                // this.saveInvoicePayed();
                                this.updateInvoicePaymentLocaldb();
                            }
                            else {
                                // this.saveInvoice();
                                this.updateInvoiceLocaldb();
                            }
                        }
                        else {
                            alert('Kindly select client and Items first');
                        }
                    }
                }
            ]
        }).then(alert => alert.present());
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
                        console.log('Confirm Save');
                        this.selectedItems;
                        this.selectedClient;
                        if (this.selectedClintName !== '' && this.subtotal > 0) {
                            if (this.payed > 0) {
                                // this.saveInvoicePayed();
                                this.updateInvoicePaymentLocaldb();
                            }
                            else {
                                // this.saveInvoice();
                                this.updateInvoiceLocaldb();
                            }
                        }
                        else {
                            alert('Kindly select client and Items first');
                        }
                    }
                },
                {
                    text: 'Preview',
                    cssClass: 'alert-button-inner',
                    handler: () => {
                        console.log('Confirm Preview');
                    }
                },
                {
                    text: 'Email',
                    cssClass: 'alert-button-inner',
                    handler: () => {
                        console.log('Confirm Email');
                    }
                },
                {
                    text: 'Share',
                    cssClass: 'alert-button-inner',
                    handler: () => {
                        console.log('Confirm Share');
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
    ngOnInit() {
        ;
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.ID !== 'undefined') {
                ;
                this.selectedClientID = this.router.getCurrentNavigation().extras.state.ID;
                this.selectedClintName = this.router.getCurrentNavigation().extras.state.Name;
                this.client = this.router.getCurrentNavigation().extras.state.Name;
                this.info = this.router.getCurrentNavigation().extras.state.info;
            }
        }
    }
    selectDueDate() {
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datepicker.show(options).then((date) => {
            this.duedate = this.datePipe.transform(date, 'dd MMM yyyy');
            this.invoice.DueDate = this.datePipe.transform(date, 'dd MMM yyyy');
            // console.log('selected:',this.myDate);
        });
    }
    back() {
        //  if (this.tempTotal !== this.total) {
        //   this.showALert('','','Save this Invoice?');
        //  } else {
        //   this.router.navigate(['menu/invoice']);
        //  }
        this.events.publish('user:created', 'saad', '');
        // if (this.databaseprovider.getupdateinvoice() === 1) {
        //     this.databaseprovider.setupdateinvoice(0);
        //     this.nav.navigateRoot('outstanding');
        //  } else {
        //    this.nav.navigateRoot(this.prev);
        //  }
        if (this.prev === 'Outstanding') {
            this.location.back();
        }
        else {
            this.nav.navigateRoot(this.prev);
        }
        // this.nav.navigateRoot('outstanding');
    }
    addClient() {
        const navigationExtras = {
            state: {
                url: this.url
            }
        };
        this.router.navigate(['add-client-clients'], navigationExtras);
    }
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
                        this.selectedClintName = fields[0];
                        this.client = this.selectedClintName;
                        this.selectedClientID = fields[1];
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
                'Name': 'getAllClients',
                "AccountId": '113008225657937776461'
            }, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                const g = JSON.parse(data.data);
                this.clients = g.clients;
                console.log(this.clients[0]);
                this.sortClients();
                this.activeClients = [];
                ;
                for (let i = 0; i < this.clients.length; i++) {
                    if (this.clients[i].Active === '1') {
                        this.activeClients.push(this.clients[i]);
                        const a = {
                            type: 'radio',
                            label: this.clients[i].Fname,
                            value: this.clients[i].Fname + ',' + this.clients[i].Cid
                        };
                        this.raio.push(a);
                    }
                }
                //  this.selectActive();
                // ;
                // this.initializeItems();
                this.initializeactiveVendors();
                this.databaseprovider.setupdatevendors(0);
            }, err => {
                console.log('JS call error', err);
            });
        });
    }
    sortClients() {
        ;
        this.clients = this.clients.sort((a, b) => {
            if (a.Fname < b.Fname) {
                return -1;
            }
            if (a.Fname > b.Fname) {
                return 1;
            }
            return 0;
        });
    }
    initializeactiveVendors() {
        this.tempActiveClients = this.activeClients;
    }
    quantityIncrement(item) {
        if (item.stock < parseInt(item.Instock)) {
            item.Qty = item.Qty + 1;
            item.stock = item.stock + 1;
            // this.subtotal = this.subtotal + (1 * item.Rate);
            this.subtotal = this.subtotal + (1 * parseInt(item.CostPrice));
            this.total = this.subtotal - this.discount;
        }
        else {
            this.showToast();
        }
    }
    quantityDecrement(item) {
        if (item.Qty > 0) {
            // this.subtotal = this.subtotal - (1 * item.Rate);
            this.subtotal = this.subtotal - (1 * parseInt(item.CostPrice));
            this.total = this.subtotal - this.discount;
            item.Qty = item.Qty - 1;
            item.stock = item.stock - 1;
        }
    }
    change() {
    }
    discountPrompt() {
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
    saveInvoicePayed() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create();
            yield loading.present();
            // this.order.created;
            // this.selectedVendorID;
            this.tempActiveItems;
            this.discount;
            this.total;
            this.message;
            this.templkj;
            this.items;
            const itemsArray = [];
            for (let i = 0; i < this.items.length; i++) {
                const a = {
                    Id: parseInt(this.items[i].itemid),
                    Qty: this.items[i].Qty,
                    CostPrice: this.items[i].CostPrice,
                    stock: (this.items[i].temp - this.items[i].Qty) * (-1)
                };
                itemsArray.push(a);
            }
            itemsArray;
            this.nativeHttp.setDataSerializer("json");
            const url = this.databaseprovider.getURL();
            let nativeCall = this.nativeHttp.post(url + '/updateInvoicePartialPayment.php', {
                "invoiceId": this.invoice.Iid,
                "AccountId": "113008225657937776461",
                "Cid": this.selectedClientID,
                "Name": "INV01",
                "CreateDate": this.created,
                "Terms": "Isl",
                "DueDate": this.duedate,
                "Items": itemsArray,
                "Subtotal": this.subtotal,
                "Discount": this.discount,
                "Total": this.subtotal - this.discount,
                "payments": [
                    {
                        "PaidDate": this.currentDate.toString(),
                        "Paid": this.payed
                    }
                ],
                "Message": this.message,
                "Status": "Pending"
            }, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                const g = JSON.parse(data.data);
                if (g.success === 1) {
                    this.databaseprovider.setupdateinvoice(1);
                    this.router.navigate(['/menu/invoice']);
                }
                // this.databaseprovider.setupdateitems(0);
            }, err => {
                console.log('JS call error', err);
            });
        });
    }
    saveInvoice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create();
            yield loading.present();
            // this.order.created;
            // this.selectedVendorID;
            this.tempActiveItems;
            this.discount;
            this.total;
            this.message;
            this.templkj;
            this.items;
            const itemsArray = [];
            for (let i = 0; i < this.items.length; i++) {
                const a = {
                    Id: parseInt(this.items[i].itemid),
                    Qty: this.items[i].Qty,
                    CostPrice: this.items[i].CostPrice,
                    stock: (this.items[i].temp - this.items[i].Qty) * (-1)
                };
                itemsArray.push(a);
            }
            itemsArray;
            this.nativeHttp.setDataSerializer("json");
            const url = this.databaseprovider.getURL();
            let nativeCall = this.nativeHttp.post(url + '/updateInvoice.php', {
                "invoiceId": this.invoice.Iid,
                "AccountId": "113008225657937776461",
                "Cid": this.selectedClientID,
                "Name": "INV01",
                "CreateDate": this.created,
                "Terms": "Isl",
                "DueDate": this.duedate,
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
            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                loading.dismiss();
                console.log('Native data:', data);
                const g = JSON.parse(data.data);
                if (g.success === 1) {
                    this.databaseprovider.setupdateinvoice(1);
                    this.router.navigate(['/menu/invoice']);
                }
                // this.databaseprovider.setupdateitems(0);
            }, err => {
                console.log('JS call error', err);
            });
        });
    }
    invoiceInfo() {
        ;
        const navigationExtras = {
            state: {
                // user: this.received
                invoice: this.invoice
            }
        };
        this.router.navigate(['invoice-info'], navigationExtras);
    }
    removeSelected(pos) {
        ;
        // let a = this.databaseprovider.getSeletedItems();
        this.selectedItems.splice(pos, 1);
        this.updateCalculations();
        // this.databaseprovider.removeSelectedItem(pos);
        // a = this.databaseprovider.getSeletedItems();
    }
    saveLedger() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create();
            yield loading.present();
            const createDate = this.datePipe.transform(this.created, 'dd MMM yyyy');
            const duedate = this.datePipe.transform(this.duedate, 'dd MMM yyyy');
            const url = this.databaseprovider.getURL();
            this.nativeHttp.setDataSerializer("json");
            let nativeCall = this.nativeHttp.post(url + '/orderPlaced.php', {
                "InvoiceID": this.invoice.Iid.toString(),
                "Date": this.currentDate.toString(),
                "Amount": this.payed,
                "CustomerID": this.selectedClient.id,
                "IsCredit": 1,
                "Duedate": duedate.toString(),
                "ByUserId": "rizwanali",
                "Remarks": this.message
            }, {
                'Content-Type': 'application/json',
                'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => loading.dismiss))
                .subscribe(data => {
                this.deleteData();
                loading.dismiss();
                console.log('Native data:', data);
                const g = JSON.parse(data.data);
                this.router.navigate(['/menu/invoice']);
                // this.databaseservice.setupdateclients(1);
                // this.router.navigate(['/menu/clients']);
                // this.initializeItems();
            }, err => {
                loading.dismiss();
                ;
                //  this.databaseservice.setupdateclients(1);
                //  this.router.navigate(['/menu/clients']);
                console.log('JS call error', err);
                const error = JSON.parse(err.error);
                alert(error.message);
                console.log('Native data:', JSON.parse(error));
            });
        });
    }
    updateCalculations() {
        if (this.selectedItems.length == 0) {
            this.discount = 0;
            this.total = 0;
            this.subtotal = 0;
            // this.duepayment = 0;
        }
        for (let i = 0; i < this.selectedItems.length; i++) {
            this.subtotal = this.subtotal + (this.selectedItems[i].menu_order * this.selectedItems[i].regular_price);
            this.discount = this.discount + (this.selectedItems[i].regular_price - this.selectedItems[i].weight) * this.selectedItems[i].menu_order;
            this.total = this.subtotal - this.discount;
            const a = parseFloat(this.discount.toString()).toFixed(2);
            const b = parseFloat(this.total.toString()).toFixed(2);
            const c = parseFloat(this.subtotal.toString()).toFixed(2);
            this.discount = parseFloat(a);
            this.total = parseFloat(b);
            this.subtotal = parseFloat(c);
            //this.duepayment = this.total - this.payed;
            ;
        }
    }
    deleteData() {
        this.selectedItems = [];
        this.discount = 0.00;
        this.subtotal = 0.00;
        this.total = 0.00;
        this.message = 'Thanks for your business';
        this.client = 'Client';
        this.databaseprovider.setItemUrl('');
    }
    presentPrompt() {
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
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: data => {
                        console.log(data);
                        this.message = data.Message;
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    updateTotal(searchbar, item) {
        const x = item.CostPrice * item.Qty;
        this.subtotal = this.subtotal - x;
        const q = searchbar.srcElement.value;
        const b = q * item.Qty;
        this.subtotal = this.subtotal + b;
        this.total = this.subtotal - this.discount;
    }
    paymentInfo() {
        ;
        if (this.selectedClientID !== '') {
            // this.data;
            // this.meta_data;
            const navigationExtras = {
                state: {
                    // user: this.received
                    meta_data: '',
                    duepayment: this.duepayment,
                    payed: this.payed
                }
            };
            this.router.navigate(['payment-info'], navigationExtras);
        }
    }
    paymentPrompt() {
        this.alrtCtrl.create({
            header: 'Payment',
            inputs: [
                {
                    name: 'Payment',
                    placeholder: this.duepayment.toString(),
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
                        this.payed = data.Payment;
                        if (this.index === 0) {
                            if (data.Payment > 0) {
                                this.duepayment = this.duepayment - this.payed;
                                this.lastPayment = data.Payment;
                                this.index = 1;
                            }
                            else {
                                this.lastPayment = this.paidamount.toString();
                                this.duepayment = this.dueamount;
                            }
                        }
                        else {
                            if (data.Payment > 0) {
                                this.duepayment = this.duepayment + parseInt(this.lastPayment);
                                this.duepayment = this.duepayment - this.payed;
                                this.lastPayment = data.Payment;
                            }
                            else {
                                this.lastPayment = this.paidamount.toString();
                                this.duepayment = this.dueamount;
                                this.index = 0;
                            }
                        }
                        const a = parseInt(this.debit) - this.payed;
                        this.debit = a.toString();
                        //this.saveLedger();
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    showToast() {
        this.toast = this.toastController.create({
            message: 'Product Out Of Stock',
            duration: 2000
        }).then((toastData) => {
            console.log(toastData);
            toastData.present();
        });
    }
    HideToast() {
        this.toast = this.toastController.dismiss();
    }
    getAllClientsLocaldb() {
        this.syncService.getAllActiveClients().then((data) => {
            this.clients = data;
            console.log(this.clients[0]);
            this.sortClients();
            this.activeClients = [];
            ;
            for (let i = 0; i < this.clients.length; i++) {
                if (this.clients[i].Active === 1) {
                    this.activeClients.push(this.clients[i]);
                    const a = {
                        type: 'radio',
                        label: this.clients[i].Fname,
                        value: this.clients[i].Fname + ',' + this.clients[i].Cid
                    };
                    this.raio.push(a);
                }
            }
            //  this.selectActive();
            // ;
            // this.initializeItems();
            this.initializeactiveVendors();
            this.databaseprovider.setupdatevendors(0);
            //this.getAllItemsLocaldb();
        });
    }
    getCustomerBalanceLocaldb() {
        this.syncService.getCustomerbalance(this.selectedClientID).then((data) => {
            //this.clients = data;
            // const g = JSON.parse(data);
            const g = data;
            if (g.TotalDebit == null) {
                g.TotalDebit = 0;
            }
            if (g.TotalCredit == null) {
                g.TotalCredit = 0;
            }
            if (g.Amount == null) {
                g.Amount = 0;
            }
            this.credit = g.TotalCredit;
            this.debit = g.TotalDebit;
            this.duepayment = parseInt(this.debit) - parseInt(this.credit);
            this.lastPayment = g.Amount;
            this.paidamount = g.Amount;
            this.dueamount = this.duepayment;
        });
    }
    updateInvoiceLocaldb() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // alert('updateInvoiceLocaldb');
            let loading = yield this.loadingController.create();
            yield loading.present();
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].Sync === 1) {
                    this.items[i].Sync = 2;
                }
            }
            const itemsArray = [];
            for (let i = 0; i < this.items.length; i++) {
                const a = {
                    Id: parseInt(this.items[i].Id),
                    Qty: this.items[i].Qty,
                    CostPrice: this.items[i].CostPrice,
                    stock: (this.items[i].temp - this.items[i].Qty) * (-1),
                    Sync: this.items[i].Sync
                };
                itemsArray.push(a);
            }
            itemsArray;
            loading.dismiss;
            const CustomerBalance = this.total - this.tempTotal;
            this.syncService.updateInvoice(this.invoice.Iid, '113008225657937776461', this.selectedClientID, 'INV01', this.created, 'ISL', this.duedate, itemsArray, this.subtotal, this.discount, this.subtotal - this.discount, this.message, this.Status, CustomerBalance)
                .then(data => {
                this.databaseprovider.setupdateinvoice(1);
                this.databaseprovider.setupdateclientLeger(1);
                loading.dismiss();
                this.router.navigate(['/menu/invoice']);
                //this.AddLog();
                if (this.network.type === 'none') {
                }
                else {
                    this.syncdelInvoices();
                }
            });
        });
    }
    updateInvoicePaymentLocaldb() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create();
            yield loading.present();
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
            loading.dismiss;
            this.syncService.updateInvoicePayment(this.invoice.Iid, '113008225657937776461', this.selectedClientID, 'INV01', this.created, 'ISL', this.duedate, itemsArray, this.subtotal, this.discount, this.subtotal - this.discount, this.currentDate, this.payed, this.message, 'Pending')
                .then(data => {
                this.databaseprovider.setupdateinvoice(1);
                loading.dismiss();
                this.router.navigate(['/menu/invoice']);
            });
        });
    }
    AddLog() {
        if (this.usdId === 1) {
            this.acttype = 'You edited';
        }
        else {
            this.acttype = 'You edited';
        }
        this.name = 'Invoice';
        let now = new Date().toString();
        const a = this.datePipe.transform(now, 'dd MMM yyyy');
        this.lgdate = 'at ' + a;
        this.tblName = 'invoices';
        this.tblId = this.syncService.getUpdatedIid();
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(data => {
            console.log("Log has been added");
            this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    }
    syncUpdatedInvoice() {
        this.syncService.getAlldelInvoices().then((data) => {
            if (data.length > 0) {
                const url = this.databaseprovider.getURL();
                ;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url + '/delInvoices.php', {
                    "InvoiceIDS": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        this.syncService.updatedelsInvoices().then((data) => {
                        });
                    }
                    else {
                        // alert('failed');
                    }
                    // this.initializeItems();
                }, err => {
                    console.log('JS call error', err);
                    const error = JSON.parse(err.error);
                    ///alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
            }
        });
    }
    syncdelInvoices() {
        this.syncService.getAlldelInvoices().then((data) => {
            if (data.length > 0) {
                const url = this.databaseprovider.getURL();
                ;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url + '/delInvoices.php', {
                    "InvoiceIDS": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        this.syncService.updatedelsInvoices().then((data) => {
                        });
                        this.syncService.syncAddedInvoices().then((data) => {
                            if (data.length > 0) {
                                const IDs = [];
                                for (let i = 0; i < data.length; i++) {
                                    IDs[i] = data[i].Iid;
                                }
                                const url = this.databaseprovider.getURL();
                                ;
                                this.nativeHttp.setDataSerializer("json");
                                let nativeCall = this.nativeHttp.post(url, {
                                    'Name': 'syncAddedInvoices',
                                    "Invoices": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                                    .subscribe(data => {
                                    console.log('Native data:', data);
                                    const g = JSON.parse(data.data);
                                    if (g.success === 1) {
                                        // alert('success');
                                        this.syncService.updateSyncedInvoices(IDs).then((data) => {
                                        });
                                        this.syncService.syncAddedInvoicesItems().then((data) => {
                                            if (data.length > 0) {
                                                const IDs = [];
                                                for (let i = 0; i < data.length; i++) {
                                                    IDs[i] = data[i].Iiid;
                                                }
                                                const url = this.databaseprovider.getURL();
                                                ;
                                                this.nativeHttp.setDataSerializer("json");
                                                let nativeCall = this.nativeHttp.post(url, {
                                                    'Name': 'syncAddedInvoicesItems',
                                                    "InvoiceItems": data
                                                }, {
                                                    'Content-Type': 'application/json',
                                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                });
                                                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                                                    .subscribe(data => {
                                                    console.log('Native data:', data);
                                                    const g = JSON.parse(data.data);
                                                    if (g.success === 1) {
                                                        // alert('success');
                                                        this.syncService.updateSyncedInvoicesItems(IDs).then((data) => {
                                                        });
                                                        this.syncService.syncAddedLedger().then((data) => {
                                                            if (data.length > 0) {
                                                                const IDs = [];
                                                                for (let i = 0; i < data.length; i++) {
                                                                    IDs[i] = data[i].ID;
                                                                }
                                                                const url = this.databaseprovider.getURL();
                                                                ;
                                                                this.nativeHttp.setDataSerializer("json");
                                                                let nativeCall = this.nativeHttp.post(url, {
                                                                    'Name': 'syncAddedLedger',
                                                                    "Payments": data
                                                                }, {
                                                                    'Content-Type': 'application/json',
                                                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                                });
                                                                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                                                                    .subscribe(data => {
                                                                    console.log('Native data:', data);
                                                                    const g = JSON.parse(data.data);
                                                                    if (g.success === 1) {
                                                                        // alert('success');
                                                                        this.syncService.updateSyncedAddedLedger(IDs).then((data) => {
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
                                                        }).then(data4 => {
                                                            this.syncService.syncUpdatedItems().then((data6) => {
                                                                console.log('updayed executed');
                                                                if (data6.length > 0) {
                                                                    const IDs = [];
                                                                    for (let i = 0; i < data6.length; i++) {
                                                                        IDs[i] = data6[i].itemid;
                                                                    }
                                                                    const url = this.databaseprovider.getURL();
                                                                    ;
                                                                    this.nativeHttp.setDataSerializer("json");
                                                                    let nativeCall = this.nativeHttp.post(url, {
                                                                        'Name': 'syncUpdatedItems',
                                                                        "Items": data6
                                                                    }, {
                                                                        'Content-Type': 'application/json',
                                                                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                                    });
                                                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
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
                        });
                    }
                    else {
                        // alert('failed');
                    }
                    // this.initializeItems();
                }, err => {
                    console.log('JS call error', err);
                    const error = JSON.parse(err.error);
                    ///alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
            }
        });
    }
    syncupdatedItems() {
        this.syncService.syncUpdatedItems().then((data6) => {
            console.log('updayed executed');
            if (data6.length > 0) {
                const IDs = [];
                for (let i = 0; i < data6.length; i++) {
                    IDs[i] = data6[i].itemid;
                }
                const url = this.databaseprovider.getURL();
                ;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url, {
                    'Name': 'syncUpdatedItems',
                    "Items": data6
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
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
        });
    }
    saveALert(head, sub, msg) {
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
                    handler: () => {
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
                        if (this.selectedClintName !== '' && this.subtotal > 0) {
                            if (this.payed > 0) {
                                // this.saveInvoicePayed();
                                this.updateInvoicePaymentLocaldb();
                            }
                            else {
                                // this.saveInvoice();
                                this.updateInvoiceLocaldb();
                            }
                        }
                        else {
                            alert('Kindly select client and Items first');
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
        const number = this.Cell.toString();
        this.callnumber.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    Sms() {
        let count = 1;
        let message = 'From- \nCustomer Account name - ' + this.client + '\nShop - ' + this.invoice.Shop +
            '\nAddress - ' + this.invoice.BillingAddress + '\nCity - ' + this.invoice.City +
            '\nInvoice Items Details Are As Follow:';
        for (let i = 0; i < this.addedItems.length; i++) {
            message = message + '\nItem No. - ' + count + '\nItem - ' + this.addedItems[i].Description + '\nQty - ' + this.addedItems[i].Qty;
            count = count + 1;
        }
        message = message + '\nTotal - ' + this.currency + this.invoice.Total;
        const number = this.Cell.toString();
        this.socialSharing.shareViaSMS(message, number).then(() => {
        }).catch(() => {
        });
    }
    copypaste() {
        console.log("1");
        this.syncService.getLedger(this.selectedClientID);
    }
    email() {
        this.createPdf();
    }
    markAsPaid() {
        this.databaseprovider.setupdateinvoice(1);
        if (this.paid === 0) {
            this.paid = 1;
        }
        else {
            this.paid = 0;
        }
        this.syncService.invoiceMarkAsPaid(this.invoice.Iid).then(() => {
            this.syncMarkeAsPaidInvoices();
            this.events.publish('user:created', 'saad', '');
        });
    }
    share1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = [];
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            // item.Subtotal = parseFloat(item.Subtotal).toFixed(2);
            const message = 'Client Name:' + this.client + '\n'
                + 'Dated:' + this.invoice.CreateDate + '\n'
                + 'Due Date:' + this.duedate + '\n'
                + 'Subtotal:' + this.subtotal + '\n'
                + 'Discount:' + this.discount + '\n'
                + 'Total:' + this.invoice.Total + '\n';
            this.socialSharing.share(message).then(() => {
                loading.dismiss();
            }).catch(() => {
            });
            // this.syncService.getInvoiceItems(item.Iid).then((data) => {
            //   items = data;
            // });
        });
    }
    createPdf() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = [];
            let loading = yield this.loadingCtrl.create();
            yield loading.present();
            const date = this.invoice.CreateDate.bold();
            this.syncService.getInvoiceItems(this.invoice.Iid).then((data) => {
                items = data;
                const itemss = [];
                console.log(items);
                for (let i = 0; i < items.length; i++) {
                    if (items[i].Qty > 0) {
                        const total = items[i].Qty * items[i].CostPrice;
                        itemss.push([
                            { text: items[i].Qty.toString(), fontSize: 8, color: '#000000' },
                            { text: items[i].Description.toString() + '(' + items[i].Qty.toString() + 'x' + items[i].CostPrice.toString() + ')',
                                fontSize: 8,
                                color: '#000000'
                            },
                            { text: total.toString(), fontSize: 8, color: '#000000' },
                        ]);
                    }
                }
                const left = {
                    text: [
                        { text: 'Dated: ', bold: true, fontSize: 6, alignment: 'left' },
                        { text: this.invoice.CreateDate, color: '#000000', fontSize: 6, alignment: 'left' },
                    ]
                };
                const right = {
                    text: [
                        { text: '                         Due Date: ', bold: true, fontSize: 6, alignment: 'right' },
                        { text: this.invoice.DueDate, color: '#000000', fontSize: 6, alignment: 'right' },
                    ]
                };
                var docDefinition = {
                    pageSize: {
                        width: 226.77192,
                        height: 'auto'
                    },
                    pageMargins: [10, 15, 10, 15],
                    content: [
                        { text: this.company, bold: true, alignment: 'center', style: 'subheader' },
                        { text: this.client, bold: true, fontSize: 6, alignment: 'right' },
                        {
                            text: [
                                // {text: item.Fname + ' ' + item.Lname, fontSize: 6, alignment: 'right'},
                                { text: this.invoice.Shop + ',' + this.invoice.BillingAddress + ',' + this.invoice.City, fontSize: 6, alignment: 'right' },
                            ]
                        },
                        { text: 'INVOICE', fontSize: 18, color: '#ff0000', alignment: 'right' },
                        // { text: this.datePipe.transform(new Date().toString(), 'dd MMM yyyy h:mm a'), fontSize: 12, alignment: 'center' },
                        {
                            margin: [0, 5, 0, 0],
                            style: 'totalsTable',
                            table: {
                                widths: [100, 100],
                                body: [
                                    [
                                        left, right
                                    ],
                                ],
                            },
                            layout: 'noBorders'
                        },
                        {
                            margin: [0, 10, 0, 0],
                            text: [
                                { text: 'Qty  ', style: 'subheader', color: '#000000' },
                                { text: '                 Item(s)', style: 'subheader', color: '#000000' },
                                { text: '                       Total(PKR)', style: 'subheader', color: '#000000' },
                            ]
                        },
                        {
                            //  alignment: 'center',
                            margin: [0, 5, 0, 0],
                            style: 'totalsTable',
                            table: {
                                //  alignment: 'center',
                                widths: [30, 120, 50],
                                body: itemss
                            },
                            layout: 'noBorders'
                        },
                        {
                            margin: [0, 10, 0, 0],
                            style: 'totalsTable',
                            table: {
                                widths: [100, 100],
                                body: [
                                    [
                                        { text: 'Subtotal:', bold: true, fontSize: 8 },
                                        { text: 'PKR ' + (this.invoice.Total + this.invoice.Discount).toLocaleString(), fontSize: 8, alignment: 'right' }
                                    ],
                                    [
                                        { text: 'Distcount:', bold: true, fontSize: 8 },
                                        { text: 'PKR ' + this.invoice.Discount.toLocaleString(), fontSize: 8, alignment: 'right' }
                                    ],
                                    [
                                        { text: 'Total:', bold: true, fontSize: 8 },
                                        { text: 'PKR ' + this.invoice.Total.toLocaleString(), fontSize: 8, alignment: 'right' }
                                    ],
                                ]
                            },
                            layout: 'noBorders'
                        },
                    ],
                    styles: {
                        header: {
                            fontSize: 18,
                            bold: true,
                        },
                        subheader: {
                            fontSize: 10,
                            bold: true,
                            // margin: [0, 15, 0, 0],
                            color: '#000000'
                        },
                        story: {
                            italic: true,
                            alignment: 'center',
                            width: '50%',
                        },
                        backgroundcolor: ''
                    }
                };
                this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_20___default.a.createPdf(docDefinition);
                this.downloadPdf(loading);
            });
        });
    }
    downloadPdf(loading) {
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer((buffer) => {
                // var blob = new Blob([buffer], { type: 'application/pdf' });
                var utf8 = new Uint8Array(buffer);
                var binaryArray = utf8.buffer;
                var blob = new Blob([binaryArray], { type: 'application/pdf' });
                const a = new Date().getTime().toString();
                this.file.writeFile(this.file.dataDirectory, a + '.pdf', blob).then(fileEntry => {
                    //  this.fileOpener.open(this.file.dataDirectory + 'Invoice.pdf', 'application/pdf');        
                });
                // this.socialSharing.share("test", null, this.file.dataDirectory + a + '.pdf', null).then(() => {
                //   loading.dismiss();
                //   console.log('social share');
                //   console.log(this.file.dataDirectory);
                //   }).catch(() => {
                //   });
                // tslint:disable-next-line: max-line-length
                this.socialSharing.shareViaEmail('Some message', 'Some Subject', [''], [''], [''], this.file.dataDirectory + a + '.pdf').then(() => {
                    loading.dismiss();
                    console.log('social share');
                    console.log(this.file.dataDirectory);
                }).catch(() => {
                });
                // Save the PDF to the data Directory of our App
                // this.file.writeFile(this.file.dataDirectory, 'Invoice4.pdf', blob).then(fileEntry => {
                //  this.fileOpener.open(this.file.dataDirectory + 'Invoice.pdf', 'application/pdf');        
                // });
            });
        }
        else {
            // On a browser simply use download!
            this.pdfObj.download();
        }
    }
    syncMarkeAsPaidInvoices() {
        this.syncService.syncUpdatedInvoices().then((Iids) => {
            Iids;
            const Ids = [];
            if (Iids.length > 0) {
                for (let i = 0; i < Iids.length; i++) {
                    Ids.push(Iids[i].Iid);
                }
                const url = this.databaseprovider.getURL();
                console.log('ids:' + Ids);
                ;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url, {
                    'Name': 'syncMarkAsPaidIvoices',
                    "invoices": Iids
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        alert('success');
                        // alert(g.success);
                        this.syncService.updateSyncedInvoices(Ids).then((data) => {
                            console.log('It Worked');
                        });
                        // this.initializeItems();
                    }
                });
            }
        });
    }
    confirmPaid() {
        this.showALert1('', '', 'Are you sure, you want to make this invoice as Paid?');
    }
    showALert1(head, sub, msg) {
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
                    }
                },
                {
                    text: 'Paid',
                    handler: () => {
                        this.markAsPaid();
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    editOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.subtotal > 0) {
                let loading = yield this.loadingController.create();
                yield loading.present();
                if (this.invoice.clientSync === 1) {
                    this.invoice.clientSync = 2;
                }
                // if (this.invoice.vendorSync === 1) {
                //   this.invoice.vendorSync = 2;
                // }
                if (this.invoice.Sync === 1) {
                    this.invoice.Sync = 2;
                }
                for (let i = 0; i < this.items.length; i++) {
                    if (this.items[i].Sync === 1) {
                        this.items[i].Sync = 2;
                    }
                }
                const itemsArray = [];
                for (let i = 0; i < this.items.length; i++) {
                    const a = {
                        Iiid: parseInt(this.items[i].Iiid),
                        Id: parseInt(this.items[i].Id),
                        Qty: this.items[i].Qty,
                        CostPrice: this.items[i].CostPrice,
                        stock: (this.items[i].temp - this.items[i].Qty) * (-1),
                        Sync: this.items[i].Sync
                    };
                    itemsArray.push(a);
                }
                itemsArray;
                this.total = this.subtotal - this.discount;
                const CustomerBalance = this.total - this.tempTotal;
                this.invoice.Iid;
                this.selectedClientID;
                this.created;
                this.duedate;
                itemsArray;
                this.subtotal;
                this.discount;
                this.message;
                this.Status;
                CustomerBalance;
                // alert('editO')
                this.syncService.updateOrder(this.invoice.Iid, '113008225657937776461', this.selectedClientID, 'INV01', this.created, 'ISL', this.duedate, itemsArray, this.subtotal, this.discount, this.subtotal - this.discount, this.message, this.Status, CustomerBalance, this.invoice.clientSync, this.invoice.Sync)
                    .then(data => {
                    this.events.publish('refreshClients', 'saad2', '');
                    this.databaseprovider.setupdateinvoice(1);
                    this.databaseprovider.setupdateclientLeger(1);
                    loading.dismiss();
                    this.router.navigate(['/menu/invoice']);
                    //this.AddLog();
                    if (this.network.type === 'none') {
                    }
                    else {
                        setTimeout(() => this.syncUpdatedOrder(), 1000);
                    }
                });
                ;
            }
            else {
                alert('The price for the item(s) can not be 0');
            }
        });
    }
    clearVal(item) {
        if (item.Qty == 0) {
            item.Qty = " ";
        }
    }
    clearVal1(item) {
        if (item.CostPrice == 0) {
            item.CostPrice = " ";
        }
    }
    editClicked() {
        this.edit = 1;
    }
    // updateItem(searchbar, item) {
    //   const x = item.CostPrice * item.Qty;
    //   this.subtotal = this.subtotal - x;
    //   const q = searchbar.srcElement.value;
    //   const b = q * item.CostPrice;
    //   this.subtotal = this.subtotal + b;
    //   this.total = this.subtotal - this.discount;
    // }
    updateItem(searchbar, item) {
        debugger;
        const temp = item.Qty;
        const q = searchbar.srcElement.value;
        if (q <= parseInt(item.Instock)) {
            debugger;
            if (item.Star === 1) {
                item.Star = 0;
                this.outOfStockItems = this.outOfStockItems - 1;
            }
            const x = item.CostPrice * item.Qty;
            this.subtotal = this.subtotal - x;
            const b = q * item.CostPrice;
            this.subtotal = this.subtotal + b;
            this.total = this.subtotal - this.discount;
        }
        else {
            debugger;
            if (item.Star === 0) {
                item.Star = 1;
                this.outOfStockItems = this.outOfStockItems + 1;
            }
            const x = item.CostPrice * item.Qty;
            this.subtotal = this.subtotal - x;
            const b = q * item.CostPrice;
            this.subtotal = this.subtotal + b;
            this.total = this.subtotal - this.discount;
            this.showToast();
        }
    }
    syncUpdatedOrder() {
        this.syncService.syncUpdatedOrder().then((data) => {
            if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                    IDs[i] = data[i].Iid;
                }
                const url = this.databaseprovider.getURL();
                ;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url, {
                    'Name': 'syncUpdatedInvoices',
                    "Invoices": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                    .subscribe(data => {
                    console.log('Native data:', data);
                    const g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success1');
                        this.syncService.updateSyncedInvoices(IDs).then((data) => {
                        });
                        this.syncService.syncUpdatedInvoicesItems().then((data) => {
                            if (data.length > 0) {
                                const IDs = [];
                                for (let i = 0; i < data.length; i++) {
                                    IDs[i] = data[i].Iiid;
                                }
                                const url = this.databaseprovider.getURL();
                                ;
                                this.nativeHttp.setDataSerializer("json");
                                let nativeCall = this.nativeHttp.post(url, {
                                    'Name': 'syncUpdatedInvoicesItems',
                                    "InvoiceItems": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                                    .subscribe(data => {
                                    console.log('Native data:', data);
                                    const g = JSON.parse(data.data);
                                    if (g.success === 1) {
                                        // alert('success2');
                                        this.syncService.updateSyncedInvoicesItems(IDs).then((data) => {
                                        });
                                        this.syncService.syncDeletedLedger().then((data) => {
                                            // alert('syncdeletedledger')
                                            if (data.length > 0) {
                                                const IDs = [];
                                                for (let i = 0; i < data.length; i++) {
                                                    IDs[i] = data[i].Oid;
                                                }
                                                const url = this.databaseprovider.getURL();
                                                ;
                                                this.nativeHttp.setDataSerializer("json");
                                                let nativeCall = this.nativeHttp.post(url, {
                                                    'Name': 'syncDeletedLedger',
                                                    "Ledgers": data
                                                }, {
                                                    'Content-Type': 'application/json',
                                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                });
                                                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                                                    .subscribe(data => {
                                                    // alert('hurreh')
                                                    console.log('Native data:', data);
                                                    const g = JSON.parse(data.data);
                                                    if (g.success === 1) {
                                                        // alert('deleted Ledger');//2
                                                        this.syncService.updatedSyncedDeletedLedger(IDs).then((data) => {
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
                                        }).then(data4 => {
                                            // setTimeout(() =>
                                            //   this.syncUpdatedOrder()
                                            //        , 1000)
                                        }).then(() => {
                                            this.syncService.syncUpdatedClients().then((data) => {
                                                if (data.length > 0) {
                                                    const IDs = [];
                                                    for (let i = 0; i < data.length; i++) {
                                                        IDs[i] = data[i].Cid;
                                                    }
                                                    const url = this.databaseprovider.getURL();
                                                    ;
                                                    this.nativeHttp.setDataSerializer("json");
                                                    let nativeCall = this.nativeHttp.post(url, {
                                                        'Name': 'syncUpdatedClients',
                                                        "Clients": data
                                                    }, {
                                                        'Content-Type': 'application/json',
                                                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                    });
                                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                                                        .subscribe(data => {
                                                        console.log('Native data:', data);
                                                        const g = JSON.parse(data.data);
                                                        if (g.success === 1) {
                                                            // alert('success4' );
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
                                                }
                                            });
                                        }).then(() => {
                                            // this.syncVendorsdata();
                                            setTimeout(() => this.syncLedger(), 1000);
                                        });
                                        // });
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
        });
    }
    syncLedger() {
        this.syncService.syncAddedLedger().then((data) => {
            if (data.length > 0) {
                const IDs = [];
                for (let i = 0; i < data.length; i++) {
                    IDs[i] = data[i].ID;
                    console.log('dara = ' + data[i].Amount);
                }
                const url = this.databaseprovider.getURL();
                ;
                this.nativeHttp.setDataSerializer("json");
                let nativeCall = this.nativeHttp.post(url, {
                    'Name': 'syncAddedLedger',
                    "Payments": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(() => { }))
                    .subscribe(datal => {
                    console.log('debuh: ', datal);
                    const g = JSON.parse(datal.data);
                    if (g.success === 1) {
                        //  alert('success3');
                        this.syncService.updateSyncedAddedLedger(IDs).then((data) => {
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
        });
    }
};
InvoicedetailsPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_14__["DatePicker"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_15__["SyncService"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__["Network"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__["CallNumber"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_18__["SMS"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__["SocialSharing"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
InvoicedetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoicedetails',
        template: __webpack_require__(/*! raw-loader!./invoicedetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/invoicedetails/invoicedetails.page.html"),
        styles: [__webpack_require__(/*! ./invoicedetails.page.scss */ "./src/app/pages/invoicedetails/invoicedetails.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__["FilePath"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__["HTTP"],
        _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_14__["DatePicker"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_15__["SyncService"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__["Network"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__["CallNumber"],
        _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_18__["SMS"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_19__["SocialSharing"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], InvoicedetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-invoicedetails-invoicedetails-module-es2015.js.map