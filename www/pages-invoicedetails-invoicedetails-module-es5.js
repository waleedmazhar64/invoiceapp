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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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

















var routes = [
    {
        path: '',
        component: _invoicedetails_page__WEBPACK_IMPORTED_MODULE_16__["InvoicedetailsPage"]
    }
];
var InvoicedetailsPageModule = /** @class */ (function () {
    function InvoicedetailsPageModule() {
    }
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
    return InvoicedetailsPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
var InvoicedetailsPage = /** @class */ (function () {
    function InvoicedetailsPage(location, alrtCtrl, router, toastController, storage, loadingController, ref, filePath, datePipe, events, nav, file, webview, actionSheetController, 
    // private camera: Camera,
    plt, http, databaseprovider, nativeHttp, datepicker, syncService, network, callnumber, sms, socialSharing, loadingCtrl) {
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
        this.storage.get('COM').then(function (val) {
            _this.company = val;
        });
        this.storage.get('userId').then(function (val) {
            _this.usdId = val;
            console.log(_this.usdId);
        });
        storage.get('currency').then(function (val) {
            if (val !== null) {
                _this.currency = val.toString();
            }
        });
        this.url = this.router.url;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.ngOnInit();
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
                for (var i = 0; i < this.items.length; i++) {
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
                for (var i = 0; i < this.items.length; i++) {
                    this.items[i].Qty = parseInt(this.items[i].Qty);
                    this.items[i].CostPrice = parseInt(this.items[i].CostPrice);
                    this.items[i]['stock'] = 0;
                    this.items[i]['temp'] = parseInt(this.items[i].Qty);
                }
                ;
            }
        }
    }
    InvoicedetailsPage.prototype.getCustmerBalance = function () {
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
                        this.nativeHttp.setDataSerializer("json");
                        nativeCall = this.nativeHttp.post(url + '/payments.php', {
                            "CustomerID": this.selectedClientID
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            if (g.TotalDebit == null) {
                                g.TotalDebit = 0;
                            }
                            if (g.TotalCredit == null) {
                                g.TotalCredit = 0;
                            }
                            if (g.Amount == null) {
                                g.Amount = 0;
                            }
                            _this.credit = g.TotalCredit;
                            _this.debit = g.TotalDebit;
                            _this.duepayment = parseInt(_this.debit) - parseInt(_this.credit);
                            _this.lastPayment = g.Amount;
                            _this.paidamount = g.Amount;
                            _this.dueamount = _this.duepayment;
                        }, function (err) {
                            loading.dismiss();
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
    InvoicedetailsPage.prototype.share = function () {
        var msg = 'Save <br/><br/> Preview <br/><br/> Email <br/><br/> Share <br/><br/> Add Credits <br/><br/> Print ';
        // this.shareALert('','','');
        this.saveALert('', '', 'Save this invoice?');
    };
    InvoicedetailsPage.prototype.showALert = function (head, sub, msg) {
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
                        //  this.location.back();
                        _this.router.navigate(['menu/invoice']);
                        console.log('Confirm Cancel');
                        _this.selectedItems = [];
                        _this.discount = 0.00;
                        _this.subtotal = 0.00;
                        _this.total = 0.00;
                        _this.message = 'Thanks for your business';
                        _this.client = 'Client';
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
                        if (_this.selectedClintName !== '' && _this.subtotal > 0) {
                            if (_this.payed > 0) {
                                // this.saveInvoicePayed();
                                _this.updateInvoicePaymentLocaldb();
                            }
                            else {
                                // this.saveInvoice();
                                _this.updateInvoiceLocaldb();
                            }
                        }
                        else {
                            alert('Kindly select client and Items first');
                        }
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    InvoicedetailsPage.prototype.shareALert = function (head, sub, msg) {
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
                        if (_this.selectedClintName !== '' && _this.subtotal > 0) {
                            if (_this.payed > 0) {
                                // this.saveInvoicePayed();
                                _this.updateInvoicePaymentLocaldb();
                            }
                            else {
                                // this.saveInvoice();
                                _this.updateInvoiceLocaldb();
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
    InvoicedetailsPage.prototype.ngOnInit = function () {
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
    };
    InvoicedetailsPage.prototype.selectDueDate = function () {
        var _this = this;
        var options = {
            date: new Date(),
            mode: 'date',
            androidTheme: this.datepicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
        };
        this.datepicker.show(options).then(function (date) {
            _this.duedate = _this.datePipe.transform(date, 'dd MMM yyyy');
            _this.invoice.DueDate = _this.datePipe.transform(date, 'dd MMM yyyy');
            // console.log('selected:',this.myDate);
        });
    };
    InvoicedetailsPage.prototype.back = function () {
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
    };
    InvoicedetailsPage.prototype.addClient = function () {
        var navigationExtras = {
            state: {
                url: this.url
            }
        };
        this.router.navigate(['add-client-clients'], navigationExtras);
    };
    InvoicedetailsPage.prototype.openAlert = function () {
        var _this = this;
        this.alrtCtrl.create({
            header: 'Vendors',
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
                        _this.selectedClientID = fields[1];
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    InvoicedetailsPage.prototype.getAllClients = function () {
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
                        this.nativeHttp.setDataSerializer("json");
                        nativeCall = this.nativeHttp.post(url, {
                            'Name': 'getAllClients',
                            "AccountId": '113008225657937776461'
                        }, {
                            'Content-Type': 'application/json',
                            'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                        });
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { return loading.dismiss; }))
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
                                        label: _this.clients[i].Fname,
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
                        }, function (err) {
                            console.log('JS call error', err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InvoicedetailsPage.prototype.sortClients = function () {
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
    InvoicedetailsPage.prototype.initializeactiveVendors = function () {
        this.tempActiveClients = this.activeClients;
    };
    InvoicedetailsPage.prototype.quantityIncrement = function (item) {
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
    };
    InvoicedetailsPage.prototype.quantityDecrement = function (item) {
        if (item.Qty > 0) {
            // this.subtotal = this.subtotal - (1 * item.Rate);
            this.subtotal = this.subtotal - (1 * parseInt(item.CostPrice));
            this.total = this.subtotal - this.discount;
            item.Qty = item.Qty - 1;
            item.stock = item.stock - 1;
        }
    };
    InvoicedetailsPage.prototype.change = function () {
    };
    InvoicedetailsPage.prototype.discountPrompt = function () {
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
    InvoicedetailsPage.prototype.saveInvoicePayed = function () {
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
                        this.templkj;
                        this.items;
                        itemsArray = [];
                        for (i = 0; i < this.items.length; i++) {
                            a = {
                                Id: parseInt(this.items[i].itemid),
                                Qty: this.items[i].Qty,
                                CostPrice: this.items[i].CostPrice,
                                stock: (this.items[i].temp - this.items[i].Qty) * (-1)
                            };
                            itemsArray.push(a);
                        }
                        itemsArray;
                        this.nativeHttp.setDataSerializer("json");
                        url = this.databaseprovider.getURL();
                        nativeCall = this.nativeHttp.post(url + '/updateInvoicePartialPayment.php', {
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
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            if (g.success === 1) {
                                _this.databaseprovider.setupdateinvoice(1);
                                _this.router.navigate(['/menu/invoice']);
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
    InvoicedetailsPage.prototype.saveInvoice = function () {
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
                        this.templkj;
                        this.items;
                        itemsArray = [];
                        for (i = 0; i < this.items.length; i++) {
                            a = {
                                Id: parseInt(this.items[i].itemid),
                                Qty: this.items[i].Qty,
                                CostPrice: this.items[i].CostPrice,
                                stock: (this.items[i].temp - this.items[i].Qty) * (-1)
                            };
                            itemsArray.push(a);
                        }
                        itemsArray;
                        this.nativeHttp.setDataSerializer("json");
                        url = this.databaseprovider.getURL();
                        nativeCall = this.nativeHttp.post(url + '/updateInvoice.php', {
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
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            loading.dismiss();
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            if (g.success === 1) {
                                _this.databaseprovider.setupdateinvoice(1);
                                _this.router.navigate(['/menu/invoice']);
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
    InvoicedetailsPage.prototype.invoiceInfo = function () {
        ;
        var navigationExtras = {
            state: {
                // user: this.received
                invoice: this.invoice
            }
        };
        this.router.navigate(['invoice-info'], navigationExtras);
    };
    InvoicedetailsPage.prototype.removeSelected = function (pos) {
        ;
        // let a = this.databaseprovider.getSeletedItems();
        this.selectedItems.splice(pos, 1);
        this.updateCalculations();
        // this.databaseprovider.removeSelectedItem(pos);
        // a = this.databaseprovider.getSeletedItems();
    };
    InvoicedetailsPage.prototype.saveLedger = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, createDate, duedate, url, nativeCall;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        createDate = this.datePipe.transform(this.created, 'dd MMM yyyy');
                        duedate = this.datePipe.transform(this.duedate, 'dd MMM yyyy');
                        url = this.databaseprovider.getURL();
                        this.nativeHttp.setDataSerializer("json");
                        nativeCall = this.nativeHttp.post(url + '/orderPlaced.php', {
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
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { return loading.dismiss; }))
                            .subscribe(function (data) {
                            _this.deleteData();
                            loading.dismiss();
                            console.log('Native data:', data);
                            var g = JSON.parse(data.data);
                            _this.router.navigate(['/menu/invoice']);
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
    InvoicedetailsPage.prototype.updateCalculations = function () {
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
    InvoicedetailsPage.prototype.deleteData = function () {
        this.selectedItems = [];
        this.discount = 0.00;
        this.subtotal = 0.00;
        this.total = 0.00;
        this.message = 'Thanks for your business';
        this.client = 'Client';
        this.databaseprovider.setItemUrl('');
    };
    InvoicedetailsPage.prototype.presentPrompt = function () {
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
    InvoicedetailsPage.prototype.updateTotal = function (searchbar, item) {
        var x = item.CostPrice * item.Qty;
        this.subtotal = this.subtotal - x;
        var q = searchbar.srcElement.value;
        var b = q * item.Qty;
        this.subtotal = this.subtotal + b;
        this.total = this.subtotal - this.discount;
    };
    InvoicedetailsPage.prototype.paymentInfo = function () {
        ;
        if (this.selectedClientID !== '') {
            // this.data;
            // this.meta_data;
            var navigationExtras = {
                state: {
                    // user: this.received
                    meta_data: '',
                    duepayment: this.duepayment,
                    payed: this.payed
                }
            };
            this.router.navigate(['payment-info'], navigationExtras);
        }
    };
    InvoicedetailsPage.prototype.paymentPrompt = function () {
        var _this = this;
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        console.log(data);
                        _this.payed = data.Payment;
                        if (_this.index === 0) {
                            if (data.Payment > 0) {
                                _this.duepayment = _this.duepayment - _this.payed;
                                _this.lastPayment = data.Payment;
                                _this.index = 1;
                            }
                            else {
                                _this.lastPayment = _this.paidamount.toString();
                                _this.duepayment = _this.dueamount;
                            }
                        }
                        else {
                            if (data.Payment > 0) {
                                _this.duepayment = _this.duepayment + parseInt(_this.lastPayment);
                                _this.duepayment = _this.duepayment - _this.payed;
                                _this.lastPayment = data.Payment;
                            }
                            else {
                                _this.lastPayment = _this.paidamount.toString();
                                _this.duepayment = _this.dueamount;
                                _this.index = 0;
                            }
                        }
                        var a = parseInt(_this.debit) - _this.payed;
                        _this.debit = a.toString();
                        //this.saveLedger();
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    InvoicedetailsPage.prototype.showToast = function () {
        this.toast = this.toastController.create({
            message: 'Product Out Of Stock',
            duration: 2000
        }).then(function (toastData) {
            console.log(toastData);
            toastData.present();
        });
    };
    InvoicedetailsPage.prototype.HideToast = function () {
        this.toast = this.toastController.dismiss();
    };
    InvoicedetailsPage.prototype.getAllClientsLocaldb = function () {
        var _this = this;
        this.syncService.getAllActiveClients().then(function (data) {
            _this.clients = data;
            console.log(_this.clients[0]);
            _this.sortClients();
            _this.activeClients = [];
            ;
            for (var i = 0; i < _this.clients.length; i++) {
                if (_this.clients[i].Active === 1) {
                    _this.activeClients.push(_this.clients[i]);
                    var a = {
                        type: 'radio',
                        label: _this.clients[i].Fname,
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
            //this.getAllItemsLocaldb();
        });
    };
    InvoicedetailsPage.prototype.getCustomerBalanceLocaldb = function () {
        var _this = this;
        this.syncService.getCustomerbalance(this.selectedClientID).then(function (data) {
            //this.clients = data;
            // const g = JSON.parse(data);
            var g = data;
            if (g.TotalDebit == null) {
                g.TotalDebit = 0;
            }
            if (g.TotalCredit == null) {
                g.TotalCredit = 0;
            }
            if (g.Amount == null) {
                g.Amount = 0;
            }
            _this.credit = g.TotalCredit;
            _this.debit = g.TotalDebit;
            _this.duepayment = parseInt(_this.debit) - parseInt(_this.credit);
            _this.lastPayment = g.Amount;
            _this.paidamount = g.Amount;
            _this.dueamount = _this.duepayment;
        });
    };
    InvoicedetailsPage.prototype.updateInvoiceLocaldb = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, i, itemsArray, i, a, CustomerBalance;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        for (i = 0; i < this.items.length; i++) {
                            if (this.items[i].Sync === 1) {
                                this.items[i].Sync = 2;
                            }
                        }
                        itemsArray = [];
                        for (i = 0; i < this.items.length; i++) {
                            a = {
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
                        CustomerBalance = this.total - this.tempTotal;
                        this.syncService.updateInvoice(this.invoice.Iid, '113008225657937776461', this.selectedClientID, 'INV01', this.created, 'ISL', this.duedate, itemsArray, this.subtotal, this.discount, this.subtotal - this.discount, this.message, this.Status, CustomerBalance)
                            .then(function (data) {
                            _this.databaseprovider.setupdateinvoice(1);
                            _this.databaseprovider.setupdateclientLeger(1);
                            loading.dismiss();
                            _this.router.navigate(['/menu/invoice']);
                            //this.AddLog();
                            if (_this.network.type === 'none') {
                            }
                            else {
                                _this.syncdelInvoices();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InvoicedetailsPage.prototype.updateInvoicePaymentLocaldb = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, itemsArray, i, a;
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
                        for (i = 0; i < this.items.length; i++) {
                            a = {
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
                            .then(function (data) {
                            _this.databaseprovider.setupdateinvoice(1);
                            loading.dismiss();
                            _this.router.navigate(['/menu/invoice']);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InvoicedetailsPage.prototype.AddLog = function () {
        var _this = this;
        if (this.usdId === 1) {
            this.acttype = 'You edited';
        }
        else {
            this.acttype = 'You edited';
        }
        this.name = 'Invoice';
        var now = new Date().toString();
        var a = this.datePipe.transform(now, 'dd MMM yyyy');
        this.lgdate = 'at ' + a;
        this.tblName = 'invoices';
        this.tblId = this.syncService.getUpdatedIid();
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(function (data) {
            console.log("Log has been added");
            _this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    };
    InvoicedetailsPage.prototype.syncUpdatedInvoice = function () {
        var _this = this;
        this.syncService.getAlldelInvoices().then(function (data) {
            if (data.length > 0) {
                var url = _this.databaseprovider.getURL();
                ;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url + '/delInvoices.php', {
                    "InvoiceIDS": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        _this.syncService.updatedelsInvoices().then(function (data) {
                        });
                    }
                    else {
                        // alert('failed');
                    }
                    // this.initializeItems();
                }, function (err) {
                    console.log('JS call error', err);
                    var error = JSON.parse(err.error);
                    ///alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
            }
        });
    };
    InvoicedetailsPage.prototype.syncdelInvoices = function () {
        var _this = this;
        this.syncService.getAlldelInvoices().then(function (data) {
            if (data.length > 0) {
                var url = _this.databaseprovider.getURL();
                ;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url + '/delInvoices.php', {
                    "InvoiceIDS": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success');
                        _this.syncService.updatedelsInvoices().then(function (data) {
                        });
                        _this.syncService.syncAddedInvoices().then(function (data) {
                            if (data.length > 0) {
                                var IDs_1 = [];
                                for (var i = 0; i < data.length; i++) {
                                    IDs_1[i] = data[i].Iid;
                                }
                                var url_1 = _this.databaseprovider.getURL();
                                ;
                                _this.nativeHttp.setDataSerializer("json");
                                var nativeCall_1 = _this.nativeHttp.post(url_1, {
                                    'Name': 'syncAddedInvoices',
                                    "Invoices": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall_1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
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
                                                var url_2 = _this.databaseprovider.getURL();
                                                ;
                                                _this.nativeHttp.setDataSerializer("json");
                                                var nativeCall_2 = _this.nativeHttp.post(url_2, {
                                                    'Name': 'syncAddedInvoicesItems',
                                                    "InvoiceItems": data
                                                }, {
                                                    'Content-Type': 'application/json',
                                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                });
                                                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall_2).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
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
                                                                var url_3 = _this.databaseprovider.getURL();
                                                                ;
                                                                _this.nativeHttp.setDataSerializer("json");
                                                                var nativeCall_3 = _this.nativeHttp.post(url_3, {
                                                                    'Name': 'syncAddedLedger',
                                                                    "Payments": data
                                                                }, {
                                                                    'Content-Type': 'application/json',
                                                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                                });
                                                                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall_3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
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
                                                            _this.syncService.syncUpdatedItems().then(function (data6) {
                                                                console.log('updayed executed');
                                                                if (data6.length > 0) {
                                                                    var IDs_4 = [];
                                                                    for (var i = 0; i < data6.length; i++) {
                                                                        IDs_4[i] = data6[i].itemid;
                                                                    }
                                                                    var url_4 = _this.databaseprovider.getURL();
                                                                    ;
                                                                    _this.nativeHttp.setDataSerializer("json");
                                                                    var nativeCall_4 = _this.nativeHttp.post(url_4, {
                                                                        'Name': 'syncUpdatedItems',
                                                                        "Items": data6
                                                                    }, {
                                                                        'Content-Type': 'application/json',
                                                                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                                    });
                                                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall_4).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
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
                    }
                    else {
                        // alert('failed');
                    }
                    // this.initializeItems();
                }, function (err) {
                    console.log('JS call error', err);
                    var error = JSON.parse(err.error);
                    ///alert(error.message);
                    console.log('Native data:', JSON.parse(error));
                });
            }
        });
    };
    InvoicedetailsPage.prototype.syncupdatedItems = function () {
        var _this = this;
        this.syncService.syncUpdatedItems().then(function (data6) {
            console.log('updayed executed');
            if (data6.length > 0) {
                var IDs_5 = [];
                for (var i = 0; i < data6.length; i++) {
                    IDs_5[i] = data6[i].itemid;
                }
                var url = _this.databaseprovider.getURL();
                ;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncUpdatedItems',
                    "Items": data6
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        //alert('success Updated');
                        _this.syncService.updateSyncedItems(IDs_5).then(function (data) {
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
        });
    };
    InvoicedetailsPage.prototype.saveALert = function (head, sub, msg) {
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
                        _this.selectedItems;
                        _this.total;
                        _this.discount;
                        if (_this.selectedClintName !== '' && _this.subtotal > 0) {
                            if (_this.payed > 0) {
                                // this.saveInvoicePayed();
                                _this.updateInvoicePaymentLocaldb();
                            }
                            else {
                                // this.saveInvoice();
                                _this.updateInvoiceLocaldb();
                            }
                        }
                        else {
                            alert('Kindly select client and Items first');
                        }
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    InvoicedetailsPage.prototype.AddItems = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.addedItems = this.items;
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    InvoicedetailsPage.prototype.call = function () {
        var number = this.Cell.toString();
        this.callnumber.callNumber(number, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    InvoicedetailsPage.prototype.Sms = function () {
        var count = 1;
        var message = 'From- \nCustomer Account name - ' + this.client + '\nShop - ' + this.invoice.Shop +
            '\nAddress - ' + this.invoice.BillingAddress + '\nCity - ' + this.invoice.City +
            '\nInvoice Items Details Are As Follow:';
        for (var i = 0; i < this.addedItems.length; i++) {
            message = message + '\nItem No. - ' + count + '\nItem - ' + this.addedItems[i].Description + '\nQty - ' + this.addedItems[i].Qty;
            count = count + 1;
        }
        message = message + '\nTotal - ' + this.currency + this.invoice.Total;
        var number = this.Cell.toString();
        this.socialSharing.shareViaSMS(message, number).then(function () {
        }).catch(function () {
        });
    };
    InvoicedetailsPage.prototype.copypaste = function () {
        console.log("1");
        this.syncService.getLedger(this.selectedClientID);
    };
    InvoicedetailsPage.prototype.email = function () {
        this.createPdf();
    };
    InvoicedetailsPage.prototype.markAsPaid = function () {
        var _this = this;
        this.databaseprovider.setupdateinvoice(1);
        if (this.paid === 0) {
            this.paid = 1;
        }
        else {
            this.paid = 0;
        }
        this.syncService.invoiceMarkAsPaid(this.invoice.Iid).then(function () {
            _this.syncMarkeAsPaidInvoices();
            _this.events.publish('user:created', 'saad', '');
        });
    };
    InvoicedetailsPage.prototype.share1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items, loading, message;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = [];
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        message = 'Client Name:' + this.client + '\n'
                            + 'Dated:' + this.invoice.CreateDate + '\n'
                            + 'Due Date:' + this.duedate + '\n'
                            + 'Subtotal:' + this.subtotal + '\n'
                            + 'Discount:' + this.discount + '\n'
                            + 'Total:' + this.invoice.Total + '\n';
                        this.socialSharing.share(message).then(function () {
                            loading.dismiss();
                        }).catch(function () {
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InvoicedetailsPage.prototype.createPdf = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var items, loading, date;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        items = [];
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        date = this.invoice.CreateDate.bold();
                        this.syncService.getInvoiceItems(this.invoice.Iid).then(function (data) {
                            items = data;
                            var itemss = [];
                            console.log(items);
                            for (var i = 0; i < items.length; i++) {
                                if (items[i].Qty > 0) {
                                    var total = items[i].Qty * items[i].CostPrice;
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
                            var left = {
                                text: [
                                    { text: 'Dated: ', bold: true, fontSize: 6, alignment: 'left' },
                                    { text: _this.invoice.CreateDate, color: '#000000', fontSize: 6, alignment: 'left' },
                                ]
                            };
                            var right = {
                                text: [
                                    { text: '                         Due Date: ', bold: true, fontSize: 6, alignment: 'right' },
                                    { text: _this.invoice.DueDate, color: '#000000', fontSize: 6, alignment: 'right' },
                                ]
                            };
                            var docDefinition = {
                                pageSize: {
                                    width: 226.77192,
                                    height: 'auto'
                                },
                                pageMargins: [10, 15, 10, 15],
                                content: [
                                    { text: _this.company, bold: true, alignment: 'center', style: 'subheader' },
                                    { text: _this.client, bold: true, fontSize: 6, alignment: 'right' },
                                    {
                                        text: [
                                            // {text: item.Fname + ' ' + item.Lname, fontSize: 6, alignment: 'right'},
                                            { text: _this.invoice.Shop + ',' + _this.invoice.BillingAddress + ',' + _this.invoice.City, fontSize: 6, alignment: 'right' },
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
                                                    { text: 'PKR ' + (_this.invoice.Total + _this.invoice.Discount).toLocaleString(), fontSize: 8, alignment: 'right' }
                                                ],
                                                [
                                                    { text: 'Distcount:', bold: true, fontSize: 8 },
                                                    { text: 'PKR ' + _this.invoice.Discount.toLocaleString(), fontSize: 8, alignment: 'right' }
                                                ],
                                                [
                                                    { text: 'Total:', bold: true, fontSize: 8 },
                                                    { text: 'PKR ' + _this.invoice.Total.toLocaleString(), fontSize: 8, alignment: 'right' }
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
                            _this.pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_20___default.a.createPdf(docDefinition);
                            _this.downloadPdf(loading);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InvoicedetailsPage.prototype.downloadPdf = function (loading) {
        var _this = this;
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer(function (buffer) {
                // var blob = new Blob([buffer], { type: 'application/pdf' });
                var utf8 = new Uint8Array(buffer);
                var binaryArray = utf8.buffer;
                var blob = new Blob([binaryArray], { type: 'application/pdf' });
                var a = new Date().getTime().toString();
                _this.file.writeFile(_this.file.dataDirectory, a + '.pdf', blob).then(function (fileEntry) {
                    //  this.fileOpener.open(this.file.dataDirectory + 'Invoice.pdf', 'application/pdf');        
                });
                // this.socialSharing.share("test", null, this.file.dataDirectory + a + '.pdf', null).then(() => {
                //   loading.dismiss();
                //   console.log('social share');
                //   console.log(this.file.dataDirectory);
                //   }).catch(() => {
                //   });
                // tslint:disable-next-line: max-line-length
                _this.socialSharing.shareViaEmail('Some message', 'Some Subject', [''], [''], [''], _this.file.dataDirectory + a + '.pdf').then(function () {
                    loading.dismiss();
                    console.log('social share');
                    console.log(_this.file.dataDirectory);
                }).catch(function () {
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
    };
    InvoicedetailsPage.prototype.syncMarkeAsPaidInvoices = function () {
        var _this = this;
        this.syncService.syncUpdatedInvoices().then(function (Iids) {
            Iids;
            var Ids = [];
            if (Iids.length > 0) {
                for (var i = 0; i < Iids.length; i++) {
                    Ids.push(Iids[i].Iid);
                }
                var url = _this.databaseprovider.getURL();
                console.log('ids:' + Ids);
                ;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncMarkAsPaidIvoices',
                    "invoices": Iids
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        alert('success');
                        // alert(g.success);
                        _this.syncService.updateSyncedInvoices(Ids).then(function (data) {
                            console.log('It Worked');
                        });
                        // this.initializeItems();
                    }
                });
            }
        });
    };
    InvoicedetailsPage.prototype.confirmPaid = function () {
        this.showALert1('', '', 'Are you sure, you want to make this invoice as Paid?');
    };
    InvoicedetailsPage.prototype.showALert1 = function (head, sub, msg) {
        var _this = this;
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
                    handler: function () {
                    }
                },
                {
                    text: 'Paid',
                    handler: function () {
                        _this.markAsPaid();
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    InvoicedetailsPage.prototype.editOrder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading_1, i, itemsArray, i, a, CustomerBalance;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.subtotal > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.loadingController.create()];
                    case 1:
                        loading_1 = _a.sent();
                        return [4 /*yield*/, loading_1.present()];
                    case 2:
                        _a.sent();
                        if (this.invoice.clientSync === 1) {
                            this.invoice.clientSync = 2;
                        }
                        // if (this.invoice.vendorSync === 1) {
                        //   this.invoice.vendorSync = 2;
                        // }
                        if (this.invoice.Sync === 1) {
                            this.invoice.Sync = 2;
                        }
                        for (i = 0; i < this.items.length; i++) {
                            if (this.items[i].Sync === 1) {
                                this.items[i].Sync = 2;
                            }
                        }
                        itemsArray = [];
                        for (i = 0; i < this.items.length; i++) {
                            a = {
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
                        CustomerBalance = this.total - this.tempTotal;
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
                            .then(function (data) {
                            _this.events.publish('refreshClients', 'saad2', '');
                            _this.databaseprovider.setupdateinvoice(1);
                            _this.databaseprovider.setupdateclientLeger(1);
                            loading_1.dismiss();
                            _this.router.navigate(['/menu/invoice']);
                            //this.AddLog();
                            if (_this.network.type === 'none') {
                            }
                            else {
                                setTimeout(function () {
                                    return _this.syncUpdatedOrder();
                                }, 1000);
                            }
                        });
                        ;
                        return [3 /*break*/, 4];
                    case 3:
                        alert('The price for the item(s) can not be 0');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    InvoicedetailsPage.prototype.clearVal = function (item) {
        if (item.Qty == 0) {
            item.Qty = " ";
        }
    };
    InvoicedetailsPage.prototype.clearVal1 = function (item) {
        if (item.CostPrice == 0) {
            item.CostPrice = " ";
        }
    };
    InvoicedetailsPage.prototype.editClicked = function () {
        this.edit = 1;
    };
    // updateItem(searchbar, item) {
    //   const x = item.CostPrice * item.Qty;
    //   this.subtotal = this.subtotal - x;
    //   const q = searchbar.srcElement.value;
    //   const b = q * item.CostPrice;
    //   this.subtotal = this.subtotal + b;
    //   this.total = this.subtotal - this.discount;
    // }
    InvoicedetailsPage.prototype.updateItem = function (searchbar, item) {
        debugger;
        var temp = item.Qty;
        var q = searchbar.srcElement.value;
        if (q <= parseInt(item.Instock)) {
            debugger;
            if (item.Star === 1) {
                item.Star = 0;
                this.outOfStockItems = this.outOfStockItems - 1;
            }
            var x = item.CostPrice * item.Qty;
            this.subtotal = this.subtotal - x;
            var b = q * item.CostPrice;
            this.subtotal = this.subtotal + b;
            this.total = this.subtotal - this.discount;
        }
        else {
            debugger;
            if (item.Star === 0) {
                item.Star = 1;
                this.outOfStockItems = this.outOfStockItems + 1;
            }
            var x = item.CostPrice * item.Qty;
            this.subtotal = this.subtotal - x;
            var b = q * item.CostPrice;
            this.subtotal = this.subtotal + b;
            this.total = this.subtotal - this.discount;
            this.showToast();
        }
    };
    InvoicedetailsPage.prototype.syncUpdatedOrder = function () {
        var _this = this;
        this.syncService.syncUpdatedOrder().then(function (data) {
            if (data.length > 0) {
                var IDs_6 = [];
                for (var i = 0; i < data.length; i++) {
                    IDs_6[i] = data[i].Iid;
                }
                var url = _this.databaseprovider.getURL();
                ;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncUpdatedInvoices',
                    "Invoices": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
                    .subscribe(function (data) {
                    console.log('Native data:', data);
                    var g = JSON.parse(data.data);
                    if (g.success === 1) {
                        // alert('success1');
                        _this.syncService.updateSyncedInvoices(IDs_6).then(function (data) {
                        });
                        _this.syncService.syncUpdatedInvoicesItems().then(function (data) {
                            if (data.length > 0) {
                                var IDs_7 = [];
                                for (var i = 0; i < data.length; i++) {
                                    IDs_7[i] = data[i].Iiid;
                                }
                                var url_5 = _this.databaseprovider.getURL();
                                ;
                                _this.nativeHttp.setDataSerializer("json");
                                var nativeCall_5 = _this.nativeHttp.post(url_5, {
                                    'Name': 'syncUpdatedInvoicesItems',
                                    "InvoiceItems": data
                                }, {
                                    'Content-Type': 'application/json',
                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                });
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall_5).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
                                    .subscribe(function (data) {
                                    console.log('Native data:', data);
                                    var g = JSON.parse(data.data);
                                    if (g.success === 1) {
                                        // alert('success2');
                                        _this.syncService.updateSyncedInvoicesItems(IDs_7).then(function (data) {
                                        });
                                        _this.syncService.syncDeletedLedger().then(function (data) {
                                            // alert('syncdeletedledger')
                                            if (data.length > 0) {
                                                var IDs_8 = [];
                                                for (var i = 0; i < data.length; i++) {
                                                    IDs_8[i] = data[i].Oid;
                                                }
                                                var url_6 = _this.databaseprovider.getURL();
                                                ;
                                                _this.nativeHttp.setDataSerializer("json");
                                                var nativeCall_6 = _this.nativeHttp.post(url_6, {
                                                    'Name': 'syncDeletedLedger',
                                                    "Ledgers": data
                                                }, {
                                                    'Content-Type': 'application/json',
                                                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                });
                                                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall_6).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
                                                    .subscribe(function (data) {
                                                    // alert('hurreh')
                                                    console.log('Native data:', data);
                                                    var g = JSON.parse(data.data);
                                                    if (g.success === 1) {
                                                        // alert('deleted Ledger');//2
                                                        _this.syncService.updatedSyncedDeletedLedger(IDs_8).then(function (data) {
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
                                            // setTimeout(() =>
                                            //   this.syncUpdatedOrder()
                                            //        , 1000)
                                        }).then(function () {
                                            _this.syncService.syncUpdatedClients().then(function (data) {
                                                if (data.length > 0) {
                                                    var IDs_9 = [];
                                                    for (var i = 0; i < data.length; i++) {
                                                        IDs_9[i] = data[i].Cid;
                                                    }
                                                    var url_7 = _this.databaseprovider.getURL();
                                                    ;
                                                    _this.nativeHttp.setDataSerializer("json");
                                                    var nativeCall_7 = _this.nativeHttp.post(url_7, {
                                                        'Name': 'syncUpdatedClients',
                                                        "Clients": data
                                                    }, {
                                                        'Content-Type': 'application/json',
                                                        'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                                    });
                                                    Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall_7).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
                                                        .subscribe(function (data) {
                                                        console.log('Native data:', data);
                                                        var g = JSON.parse(data.data);
                                                        if (g.success === 1) {
                                                            // alert('success4' );
                                                            _this.syncService.updateSyncedClients(IDs_9).then(function (data) {
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
                                        }).then(function () {
                                            // this.syncVendorsdata();
                                            setTimeout(function () {
                                                return _this.syncLedger();
                                            }, 1000);
                                        });
                                        // });
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
    InvoicedetailsPage.prototype.syncLedger = function () {
        var _this = this;
        this.syncService.syncAddedLedger().then(function (data) {
            if (data.length > 0) {
                var IDs_10 = [];
                for (var i = 0; i < data.length; i++) {
                    IDs_10[i] = data[i].ID;
                    console.log('dara = ' + data[i].Amount);
                }
                var url = _this.databaseprovider.getURL();
                ;
                _this.nativeHttp.setDataSerializer("json");
                var nativeCall = _this.nativeHttp.post(url, {
                    'Name': 'syncAddedLedger',
                    "Payments": data
                }, {
                    'Content-Type': 'application/json',
                    'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["from"])(nativeCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () { }))
                    .subscribe(function (datal) {
                    console.log('debuh: ', datal);
                    var g = JSON.parse(datal.data);
                    if (g.success === 1) {
                        //  alert('success3');
                        _this.syncService.updateSyncedAddedLedger(IDs_10).then(function (data) {
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
    };
    InvoicedetailsPage.ctorParameters = function () { return [
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
    ]; };
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
    return InvoicedetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-invoicedetails-invoicedetails-module-es5.js.map