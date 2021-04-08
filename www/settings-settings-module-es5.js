(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Settings</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content >\n <!-- <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Account</h2>  \n  </ion-label>\n  <ion-label>\n     <span style=\"float:right;color: grey;\">\n        PKR\n     </span>\n   </ion-label>\n </ion-item>\n <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Reset Password</h2>  \n  </ion-label>\n  <ion-icon name=\"arrow-forward\"></ion-icon>\n </ion-item> -->\n <ion-item>\n  <ion-label (click)=\"logout()\">\n    <h2  text-capitalize style=\"padding-left: 5px;color: red;\">Signout</h2>  \n  </ion-label>\n </ion-item>\n <ion-item lines=\"none\">\n  <ion-label style=\"color:royalblue;\">\n      <h2 text-capitalize >Sync</h2>\n  </ion-label>\n</ion-item>\n     <ion-button (click)=\"syncData()\" expand=\"block\" text-capitalize=\"false\"  size=\"medium\" style=\"width: 80%; margin-left: auto;margin-right: auto;--border-radius: 15px;\"> <ion-icon slot=\"start\" name=\"sync\"></ion-icon>Sync Data</ion-button>\n     <ion-item lines=\"none\" no-padding>\n      <ion-label text-center style=\"color:grey;\">Last Synced: {{lastsynced}}</ion-label>\n   </ion-item>\n <ion-item lines=\"none\">\n\n  <ion-label style=\"color:royalblue;\">\n      <h2 text-capitalize >General</h2>\n  </ion-label>\n</ion-item>\n<!-- <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px; color:grey;\">My Business</h2>  \n  </ion-label>\n  <ion-icon name=\"arrow-forward\"></ion-icon>\n </ion-item> -->\n <ion-item (click)=\"dueDate()\">\n  <ion-label>\n    <h2  text-capitalize style=\"padding-left: 5px;\">Invoice Due date</h2>  \n  </ion-label>\n  <ion-icon name=\"arrow-forward\"></ion-icon>\n </ion-item>\n <ion-item (click)=\"bName()\">\n  <ion-label>\n    <h2  text-capitalize style=\"padding-left: 5px;\">Buisness Name</h2>  \n  </ion-label>\n  <ion-icon name=\"arrow-forward\"></ion-icon>\n </ion-item>\n <ion-item (click)=\"selectImage()\">\n  <ion-label>\n    <h2  text-capitalize style=\"padding-left: 5px;\">Business Logo</h2>  \n  </ion-label>\n  <!-- <ion-list>\n    <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\n      <ion-thumbnail slot=\"start\">\n        <img  style=\"border-radius:50%;\" [src]=\"img.path\" height=\"60\" width=\"60\">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list> -->\n  <ion-icon name=\"arrow-forward\"></ion-icon>\n </ion-item>\n <!-- <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Style</h2>  \n  </ion-label>\n  <ion-label>\n     <span style=\"float:right;color:grey;\" color=\"light\">\n        classic\n     </span>\n   </ion-label>\n   <ion-icon item-end name=\"arrow-forward\"></ion-icon>\n </ion-item>\n <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Labels</h2>  \n  </ion-label>\n  <ion-icon name=\"arrow-forward\"></ion-icon>\n </ion-item>\n <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Financial year starts</h2>  \n  </ion-label>\n  <span style=\"float:right;color:grey;\" color=\"light\">\n    Jan\n </span>\n </ion-item>\n <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Country</h2>  \n  </ion-label>\n  <ion-label>\n     <span style=\"float:right;color:grey;\" color=\"light\">\n        classic\n     </span>\n   </ion-label>\n   <ion-icon item-end name=\"arrow-forward\"></ion-icon>\n </ion-item> -->\n <ion-item (click)=\"setCurrency()\">\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px\">Currency</h2>  \n  </ion-label>\n  <ion-label>\n     <span style=\"float:right;color:grey;\" color=\"light\">\n        \n     </span>\n   </ion-label>\n   <ion-icon item-end name=\"arrow-forward\"></ion-icon>\n </ion-item>\n <!-- <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Date Format</h2>  \n  </ion-label>\n  <ion-label>\n     <span style=\"float:right;color:grey;\" color=\"light\">\n        10/21/2019\n     </span>\n   </ion-label>\n   <ion-icon item-end name=\"arrow-forward\"></ion-icon>\n </ion-item> -->\n <!-- <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Discount</h2>  \n  </ion-label>\n  <ion-label>\n     <span style=\"float:right;color:grey;\" color=\"light\">\n        Discount on Subtotal\n     </span>\n   </ion-label>\n   <ion-icon item-end name=\"arrow-forward\"></ion-icon>\n </ion-item>\n <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Shipping Fields</h2>  \n  </ion-label>\n  <ion-toggle></ion-toggle>\n </ion-item>\n <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Payment Info</h2>  \n  </ion-label>\n  <ion-icon name=\"arrow-forward\"></ion-icon>\n </ion-item> -->\n <!-- <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Invoice Reminders</h2>  \n  </ion-label>\n  <ion-icon name=\"arrow-forward\"></ion-icon>\n </ion-item> -->\n <!-- <ion-item lines=\"none\">\n  <ion-label style=\"color:royalblue;\">\n      <h2 text-capitalize >Tax</h2>\n  </ion-label>\n</ion-item>\n<ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Tax Type</h2>  \n  </ion-label>\n  <ion-label>\n     <span style=\"float:right;color:grey;\" color=\"light\">\n       Single Tax\n     </span>\n   </ion-label>\n   <ion-icon item-end name=\"arrow-forward\"></ion-icon>\n </ion-item>\n <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Vat</h2>  \n  </ion-label>\n  <ion-label>\n     <span style=\"float:right;color:grey;\" color=\"light\">\n       8.75%\n     </span>\n   </ion-label>\n </ion-item>\n <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Witholding Fields</h2>  \n  </ion-label>\n  <ion-toggle></ion-toggle>\n </ion-item>\n <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Shipping Fields</h2>  \n  </ion-label>\n  <ion-label>\n    <span style=\"float:right;color:grey;\" color=\"light\">\n      \n    </span>\n  </ion-label>\n </ion-item> -->\n <!-- <ion-item lines=\"none\">\n  <ion-label style=\"color:royalblue;\">\n      <h2 text-capitalize >DEFAULTS</h2>\n  </ion-label>\n</ion-item> -->\n<!-- <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Terms</h2>  \n  </ion-label>\n  <ion-label>\n     <span style=\"float:right;color:grey;\" color=\"light\">\n       30 Days\n     </span>\n   </ion-label>\n </ion-item> -->\n <!-- <ion-item (click)=\"comments()\">\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;\">Comments</h2>  \n  </ion-label>\n  <ion-icon name=\"arrow-forward\"></ion-icon>\n </ion-item>\n <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Email Settings</h2>  \n  </ion-label>\n  <ion-icon name=\"arrow-forward\"></ion-icon>\n </ion-item> -->\n <!-- <ion-item lines=\"none\">\n  <ion-label style=\"color:royalblue;\">\n      <h2 text-capitalize >SECURITY</h2>\n  </ion-label>\n</ion-item>\n<ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Passcode</h2>  \n  </ion-label>\n  <ion-label>\n     <span style=\"float:right;color:grey;\" color=\"light\">\n        off\n     </span>\n   </ion-label>\n   <ion-icon item-end name=\"arrow-forward\"></ion-icon>\n </ion-item> -->\n <!-- <ion-item lines=\"none\">\n  <ion-label style=\"color:royalblue;\">\n      <h2 text-capitalize >SUPPORT</h2>\n  </ion-label>\n</ion-item>\n<ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Private Policy</h2>  \n  </ion-label>\n  <ion-icon name=\"arrow-forward\"></ion-icon>\n </ion-item>\n <ion-item>\n  <ion-label>\n    <h2 text-capitalize style=\"padding-left: 5px;color:grey;\">Send Feedback</h2>  \n  </ion-label>\n  <ion-icon name=\"arrow-forward\"></ion-icon>\n </ion-item> -->\n <!-- <ion-item lines=\"none\">\n  <ion-label text-center style=\"color:grey;\">{{businessName}}</ion-label>\n</ion-item> -->\n<!-- <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\n \n<ion-list>\n  <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\n    <ion-thumbnail slot=\"start\">\n      <ion-img [src]=\"img.path\"></ion-img>\n    </ion-thumbnail>\n  </ion-item>\n</ion-list> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");














var routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_12__["SettingsPage"]
    }
];
var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
                _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"],
                _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],
                _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"],
                _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"]
            ],
            declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_12__["SettingsPage"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mylogo {\n  position: absolute;\n  left: 4%;\n  right: 0;\n  margin: 0 auto;\n  top: 25%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n}\n\n.mypic {\n  width: 120px;\n  height: 120px;\n}\n\n.mytext {\n  position: absolute;\n  left: 4%;\n  right: 0;\n  margin: 0 auto;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  font-weight: bold;\n}\n\n.mytext2 {\n  position: absolute;\n  left: 2%;\n  right: 0;\n  margin: 0 auto;\n  top: 58%;\n  font-size: 11px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n}\n\n.pos {\n  position: fixed;\n  left: 5%;\n  bottom: 10%;\n  right: 0;\n}\n\n.shadow-blue {\n  width: 93%;\n  border-radius: 5px;\n  text-align: center;\n}\n\n.alert {\n  padding: 20px;\n  background-color: #f44336;\n  color: white;\n}\n\n.closebtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  float: right;\n  font-size: 22px;\n  line-height: 20px;\n  cursor: pointer;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.closebtn:hover {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvQzpcXHdhbXA2NFxcd3d3XFxpbnZvaWNlLnBrL3NyY1xcYXBwXFxwYWdlc1xcc2V0dGluZ3NcXHNldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUE7RUFFSSxZQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNHSjs7QUREQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FET0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDSko7O0FET0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0pKOztBRE9FO0VBQ0UsWUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5teWxvZ28ge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0JTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIHRvcDoyNSU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubXlwaWN7XHJcblxyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OjEyMHB4O1xyXG59XHJcbi5teXRleHR7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgdG9wOjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm15dGV4dDJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgdG9wOjU4JTtcclxuICAgIGZvbnQtc2l6ZToxMXB4O1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnBvc3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4uc2hhZG93LWJsdWV7XHJcbiAgICB3aWR0aDogOTMlO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4vLyBhIHtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgfVxyXG4vLyAgICBpb24taXRlbSB7XHJcbi8vICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xyXG4vLyAgIH1cclxuLy8gICAubXl0ZXh0M3tcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcbi5hbGVydCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZWJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfSIsIi5teWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQlO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDogMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm15cGljIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4ubXl0ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0JTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubXl0ZXh0MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMiU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiA1OCU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3Mge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUlO1xuICBib3R0b206IDEwJTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5zaGFkb3ctYmx1ZSB7XG4gIHdpZHRoOiA5MyU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWxlcnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jbG9zZWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNsb3NlYnRuOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");

















var STORAGE_KEY = 'my_images';
var SettingsPage = /** @class */ (function () {
    function SettingsPage(alertController, navCtrl, googlePlus, databaseprovider, platform, camera, file, http, webview, actionSheetController, toastController, storage, loadingController, ref, filePath, events, router, syncService, datePipe, network, alrtCtrl, nativeHttp) {
        var _this = this;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.googlePlus = googlePlus;
        this.databaseprovider = databaseprovider;
        this.platform = platform;
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.storage = storage;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.events = events;
        this.router = router;
        this.syncService = syncService;
        this.datePipe = datePipe;
        this.network = network;
        this.alrtCtrl = alrtCtrl;
        this.nativeHttp = nativeHttp;
        this.image = '';
        this.accounts = [];
        this.info = [];
        this.infos = [];
        this.images = [];
        this.days = '';
        this.businessName = '';
        this.currency = '';
        this.lastsynced = '';
        this.buttonClicked = false;
        this.storage.get('userId').then(function (val) {
            _this.usdId = val;
            console.log(_this.usdId);
        });
        this.storage.get('Sync').then(function (val) {
            _this.lastsynced = val;
            console.log(_this.lastsynced);
        });
        // storage.set('duedate',15);
        storage.get('duedate').then(function (val) {
            if (val !== null) {
                _this.days = val.toString();
            }
        });
        storage.get('currency').then(function (val) {
            if (val !== null) {
                _this.currency = val.toString();
            }
        });
        storage.get('COM').then(function (val) {
            _this.businessName = val;
        });
        //   this.databaseprovider.getDatabaseState().subscribe(rdy => {
        //   if (rdy) {
        //     this.loadAccountData();
        //   }
        // });
        this.storage.get('id').then(function (val) {
            console.log(val);
            _this.find = val;
        });
        storage.get('loginEmail').then(function (val) {
            console.log('Email:', val);
        });
        storage.get('loginStatus').then(function (val) {
            console.log('status:', val);
        });
        // this.storage.set('loginStatus', 'true');
        // this.storage.set('loginEmail', 'true');
        var your_json_object = { "name": "John", "age": 30, "car": null };
        // set a key/value
        storage.set('my-json', your_json_object);
        // to get a key/value pair
        storage.get('my-json').then(function (val) {
            console.log('Your json is', val);
        });
    }
    SettingsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.databaseprovider.getDatabaseState().subscribe(function (rdy) {
            if (rdy) {
                _this.loadAccountData();
            }
        });
    };
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.loadStoredImages();
        });
    };
    SettingsPage.prototype.submitEvent = function () {
        this.events.publish('hello', 'Bro');
    };
    SettingsPage.prototype.loadStoredImages = function () {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            if (images) {
                var arr = JSON.parse(images);
                _this.images = [];
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var img = arr_1[_i];
                    var filePath = _this.file.dataDirectory + img;
                    var resPath = _this.pathForImage(filePath);
                    // tslint:disable-next-line: object-literal-shorthand
                    _this.images.push({ name: img, path: resPath, filePath: filePath });
                    ;
                    console.log(images.resPath);
                }
            }
        });
    };
    SettingsPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    SettingsPage.prototype.presentToast = function (text) {
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
    SettingsPage.prototype.selectImage = function () {
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
                                        // tslint:disable-next-line: no-
                                        ;
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
    SettingsPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 30,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
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
    SettingsPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + '.jpg';
        return newFileName;
    };
    SettingsPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            _this.updateStoredImages(newFileName);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    SettingsPage.prototype.updateStoredImages = function (name) {
        var _this = this;
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var newImages = [name];
            _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            _this.storage.set('imgUrl', JSON.stringify(newImages));
            // if (!arr) {
            //     const newImages = [name];
            //     this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            // }
            //  else {
            //     arr.push(name);
            //     this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            // }
            var filePath = _this.file.dataDirectory + name;
            var resPath = _this.pathForImage(filePath);
            var newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            _this.images = [];
            _this.images = [newEntry].concat(_this.images);
            _this.ref.detectChanges(); // trigger change detection cycle
            _this.events.publish('user:created', 'saad', _this.businessName);
            _this.acttype = 'You changed business logo';
            _this.AddLog();
        });
    };
    SettingsPage.prototype.loadAccountData = function () {
        var _this = this;
        this.databaseprovider.getAllAccount().then(function (data) {
            _this.accounts = data;
        });
    };
    SettingsPage.prototype.addInfo = function () {
        var _this = this;
        this.databaseprovider.addinfo(this.accounts.passcode, this.info['name'], this.road)
            .then(function (data) {
            _this.loadInfoData();
        });
        console.log("Data Added");
    };
    SettingsPage.prototype.updateAccount = function () {
        var _this = this;
        this.databaseprovider.getAccountUpdate(this.find, this.info['name'], this.road)
            .then(function (data) {
            _this.loadInfoData();
            _this.onButtonClick();
            _this.submitEvent();
        });
    };
    SettingsPage.prototype.onButtonClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Data Updated',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alert',
                            subHeader: 'Subtitle',
                            message: 'This is an alert message.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        setTimeout(function () { return alert.present(); }, 3000);
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.loadInfoData = function () {
        var _this = this;
        this.databaseprovider.getAllInfo().then(function (data) {
            _this.infos = data;
        });
    };
    SettingsPage.prototype.getUp = function () {
        this.updateAccount();
    };
    SettingsPage.prototype.comments = function () {
        this.router.navigate(['defaultcomment']);
    };
    SettingsPage.prototype.logout = function () {
        var _this = this;
        this.googlePlus.trySilentLogin({})
            .then(function (res) {
            console.log(res);
            _this.googlePlus.logout()
                .then(function (res) {
                console.log(res);
                _this.acttype = 'You Signed Out from app';
                _this.AddLog();
                _this.userId = '';
                _this.storage.set('ID', null);
                _this.storage.get('ID').then(function (val) {
                    console.log('After logout:' + val);
                });
                _this.router.navigate(['login']);
            })
                .catch(function (err) { return console.error(err); });
        })
            .catch(function (err) { return console.error(err); });
    };
    SettingsPage.prototype.AddLog = function () {
        var _this = this;
        //this.name = 'Purchased Order';
        var now = new Date().toString();
        var a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
        this.lgdate = 'at ' + a;
        this.tblName = '';
        this.tblId = 0;
        this.name = '';
        // this.tblId = this.PO.ID;
        // this.tblId = this.syncService.getUpdatedPOID();
        this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
        this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(function (data) {
            console.log("Log has been added");
            _this.syncService.syncAddedLog();
            //this.GetLogs();
        });
    };
    SettingsPage.prototype.syncData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var now, a, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        now = new Date().toString();
                        a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
                        this.storage.set('Sync', a).then(function () {
                            _this.storage.get('Sync').then(function (val) {
                                _this.lastsynced = val;
                                console.log(_this.usdId);
                            });
                        });
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Synchronizing',
                            })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.network.type === 'none') {
                            alert('Kindly connect to internet first');
                        }
                        else {
                            this.syncService.emptyLocalDB().then(function () {
                                loading.dismiss();
                                var url = _this.databaseprovider.getURL();
                                _this.nativeHttp.setDataSerializer("json");
                                // let nativeCall = this.nativeHttp.post(url , 
                                //   {
                                //     'Name': 'sqliteSync1',
                                //     "AccountId": '113008225657937776461'
                                //   } , 
                                //   {
                                //     'Content-Type': 'application/json',
                                //     'x-api-key': '28b32377-cd77-44b3-8cbb-a9dc69bfddf4'
                                //   });
                                // from(nativeCall).pipe(
                                //   finalize(() =>{} )
                                // )
                                // .subscribe(data => {
                                //   console.log('Native data:',data);
                                //   const g = JSON.parse(data.data);
                                //   if (g.success === 1) {
                                //     alert('yes');
                                //     if (typeof g.vendors !== 'undefined')  {
                                //       console.log('vendors');
                                //       alert('vendors')
                                //       for (let i=0;i<g.vendors.length;i++) {
                                //        const data = [ g.vendors[i].ID, g.vendors[i].Name, g.vendors[i].Address, g.vendors[i].Phone, g.vendors[i].Email,  g.vendors[i].bActive,g.vendors[i].Balance, 1 ];
                                //        // tslint:disable-next-line: max-line-length
                                //        this.database.executeSql('INSERT INTO  tblvendors (ID,Name,Address,Phone,Email,bActive,Balance,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
                                //        .then(data => {
                                //          console.log('successfully Created item');
                                //          return data;
                                //        }, err => {
                                //          console.log('Error: ', err);
                                //          return err;
                                //        });
                                //       }
                                //     }
                                //     if( typeof g.items !== 'undefined') {
                                //       alert('items');
                                //       console.log('items');
                                //       for (let i=0;i<g.items.length;i++) {
                                //         const data = [g.items[i].itemid,'113008225657937776461', g.items[i].Description, g.items[i].Rate, g.items[i].Cost, g.items[i].Instock, g.items[i].Active, 1 ];
                                //         // tslint:disable-next-line: max-line-length
                                //         this.database.executeSql('INSERT INTO  items (itemid,AccountId, Description,Rate,Cost,Instock,Active,Sync) VALUES (?,?,?,?,?,?,?,?)', data)
                                //         .then(data => {
                                //           console.log('successfully Created item');
                                //           return data;
                                //         }, err => {
                                //           console.log('Error: ', err);
                                //           return err;
                                //         });
                                //       }
                                //     }
                                //     if( typeof g.clients !== 'undefined') {
                                //       alert('clients')
                                //       console.log('clients from server:', g.clients);
                                //       for (let i=0;i<g.clients.length;i++) {
                                //         const data = [g.clients[i].Cid,'113008225657937776461', g.clients[i].Fname, g.clients[i].Lname, g.clients[i].Shop, g.clients[i].BillingAddress, g.clients[i].City, g.clients[i].Cell, g.clients[i].Active, g.clients[i].Balance,1 ];
                                //      }
                                //     }
                                //   }
                                // });
                            });
                            //this.syncService.syncDataServertoApp();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage.prototype.dueDate = function () {
        var _this = this;
        this.alertController.create({
            header: 'Invoice Duedate in days',
            inputs: [
                {
                    name: 'Days',
                    placeholder: '15 Days',
                    value: this.days
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
                        _this.days = data.Days;
                        _this.storage.set('duedate', _this.days.toString());
                        _this.acttype = 'You changed duedate to ' + _this.days.toString();
                        _this.AddLog();
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    SettingsPage.prototype.setCurrency = function () {
        var _this = this;
        this.alrtCtrl.create({
            header: 'Currency',
            inputs: [
                {
                    type: 'radio',
                    label: 'PKR',
                    value: 'PKR '
                },
                {
                    type: 'radio',
                    label: '$',
                    value: '$ '
                }
            ],
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
                        _this.databaseprovider.setupdateinvoice(1);
                        _this.databaseprovider.setupdatePOS(1);
                        _this.databaseprovider.setupdatevendors(1);
                        _this.databaseprovider.setupdateclients(1);
                        _this.databaseprovider.setupdateexpenses(1);
                        console.log('selected' + data);
                        if (data === '$ ') {
                            _this.currency = '$ ';
                            _this.storage.set('currency', '$ ');
                            _this.acttype = 'You changed currency to $';
                            _this.AddLog();
                        }
                        else {
                            _this.currency = 'PKR ';
                            _this.storage.set('currency', 'PKR ');
                            _this.acttype = 'You changed currency to PKR';
                            _this.AddLog();
                        }
                        ;
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    SettingsPage.prototype.bName = function () {
        var _this = this;
        this.alertController.create({
            header: 'Business Name',
            inputs: [
                {
                    name: 'Name',
                    placeholder: 'Business Name',
                    value: this.businessName
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
                        _this.businessName = data.Name;
                        _this.storage.set('COM', _this.businessName);
                        _this.acttype = 'You changed business name to ' + _this.businessName.toString();
                        _this.AddLog();
                        _this.events.publish('user:created', 'saad', _this.businessName);
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    SettingsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"] },
        { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
        { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_13__["SyncService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"] },
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__["Network"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"] }
    ]; };
    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/settings/settings.page.html"),
            styles: [__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"], src_app_services_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_11__["FilePath"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_13__["SyncService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__["Network"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_8__["HTTP"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es5.js.map