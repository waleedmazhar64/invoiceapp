(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding class=\"animated fadeIn login auth-page\" >\n  <div class=\"mylogo\">\n    <img  src=\"{{imageUrl}}\" class=\"mypic\">\n  </div>\n  <div >\n\n  </div>\n  <div >\n      <ion-text>\n      <h1 class=\"mytext\" style=\"color: #01379d\"> {{company}} </h1>\n    </ion-text>\n    <ion-text >\n      <h4 class =\"mytext2\" style=\"color: #01379d\"> Railway Road Alipur Chattha </h4>\n      </ion-text>\n  </div>\n <!-- <div >\n  <ion-text >\n    <h4 class =\"mytext2\" style=\"color: #01379d\">The easiest accounting software you'll ever use!</h4>\n    </ion-text>\n</div>-->\n<div class=\"pos\">\n    <ion-button  class=\"shadow-blue\"  expand=\"full\" color=\"#01379d\"  (click)=\"login()\">Login with Google</ion-button>\n  </div>\n  <!--<div class=\"mono1\">\n    <p text-center ion-text style=\"color: #01379d\">Or Sign in with:</p>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <button  style=\"background-color:#3b5998; background-color: #3b5998; width: 88%; height: auto\" ion-button icon-only block class=\"btn-facebook\">\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <button  style=\"background-color:#00acee; width: 88%; height: auto\" ion-button icon-only block class=\"btn-twitter\">\n            <ion-icon name=\"logo-twitter\"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-4>\n          <button  class=\"alllogo\" style=\"background-color:#ea4335; width: 88%; height: auto\" ion-button icon-only block class=\"btn-gplus\">\n            <ion-icon name=\"logo-googleplus\"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>-->\n  <div>\n      <img  src=\"/assets/Softisans_Logo.png\" class=\"mono\">\n    </div>\n    <div>\n        <h6 class=\"rights\">© 2020 All rights are reserved</h6>\n    </div>\n  <!-- <div class=\"pos1\">\n    <ion-button  class=\"shadow-blue\" style=\"width: 88%;\" shape=\"round\" color=\"light\" fill=\"outline\" >I'll use facebook</ion-button>\n  </div> -->\n  <!-- <div class=\"foo\">\n    \n        <ion-row>\n          <ion-col>\n            <a color=\"#000000\" href=\"/invoice\">\n              <ion-icon name=\"logo-facebook\"></ion-icon>\n              </a>\n            </ion-col>\n          <ion-col>\n              <a color=\"#000000\" href=\"/invoice\">\n                <ion-icon name=\"logo-twitter\"></ion-icon>\n                </a>\n              </ion-col>\n            <ion-col>\n                <a color=\"#000000\" href=\"/invoice\">\n                  <ion-icon name=\"logo-linkedin\"></ion-icon>\n                  </a>\n                </ion-col>\n            </ion-row>\n            <br>\n          \n      </div> -->\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");











const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_9__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_5__["Network"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_9__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mylogo {\n  position: absolute;\n  left: 4%;\n  right: 0;\n  margin: 0 auto;\n  top: 27%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n}\n\n.mono {\n  position: absolute;\n  left: 6%;\n  right: 0;\n  top: 87%;\n  width: 124px;\n  height: auto;\n}\n\n.rights {\n  position: absolute;\n  left: 6%;\n  right: 0;\n  top: 93%;\n  width: 124px;\n  height: auto;\n  font-size: 9Px;\n}\n\n.mypic {\n  width: 250px;\n  height: auto;\n}\n\n.mytext {\n  position: absolute;\n  left: 4%;\n  right: 0;\n  margin: 0 auto;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  font-weight: bold;\n}\n\n.mytext2 {\n  position: absolute;\n  left: 2%;\n  right: 0;\n  margin: 0 auto;\n  top: 55%;\n  font-size: 11px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n}\n\n.mono1 {\n  position: absolute;\n  left: 2%;\n  right: 0;\n  margin: 0 auto;\n  top: 74%;\n  font-size: 15px;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n}\n\n.pos {\n  position: fixed;\n  left: 5%;\n  bottom: 35%;\n  right: 0;\n}\n\n.pos1 {\n  position: fixed;\n  left: 5%;\n  bottom: 26%;\n  right: 0;\n  width: inherit;\n}\n\n.pos2 {\n  position: fixed;\n  left: 5%;\n  bottom: 15%;\n  right: 0;\n  width: inherit;\n}\n\n.shadow-blue {\n  width: 93%;\n  border-radius: 6px;\n  text-align: center;\n  background-color: #01379d;\n}\n\na {\n  text-decoration: none;\n}\n\n.foo {\n  left: 37%;\n  top: 87%;\n  position: absolute;\n}\n\n.alllogo {\n  background-color: #3b5998;\n  width: 77%;\n  height: auto;\n}\n\nion-icon {\n  color: #ffffffff;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n}\n\nion-content {\n  --background: rgb(255, 255, 255)\n   url(\"/assets/bg.jpg\") no-repeat center center / cover;\n}\n\nion-button {\n  box-shadow: 5px 5px 5px 0px #5c595c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXHdhbXA2NFxcd3d3XFxpbnZvaWNlLnBrL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBRUksWUFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQ1FKOztBRE5BO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUNTSjs7QURQQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNVSjs7QURSQTtFQUNJLHFCQUFBO0FDV0o7O0FEVEc7RUFDQyxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDWUo7O0FEUkU7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDV0o7O0FEUkU7RUFDSSxnQkFBQTtFQUNGLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNXSjs7QURUQTtFQUNJO3dEQUFBO0FDYUo7O0FEVkE7RUFHQSxtQ0FBQTtBQ2FBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15bG9nbyB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgdG9wOjI3JTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tb25ve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNiU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogODclO1xyXG4gICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5yaWdodHN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2JTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA5MyU7XHJcbiAgICB3aWR0aDogMTI0cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDlQeDtcclxufVxyXG4ubXlwaWN7XHJcblxyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbn1cclxuLm15dGV4dHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDogNCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubXl0ZXh0MntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgbGVmdDogMiU7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICB0b3A6NTUlO1xyXG4gICAgZm9udC1zaXplOjExcHg7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubW9ubzF7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgdG9wOjc0JTtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnBvc3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgYm90dG9tOiAzNSU7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4ucG9zMXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgYm90dG9tOiAyNiU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG59XHJcbi5wb3Mye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICBib3R0b206IDE1JTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbn1cclxuLnNoYWRvdy1ibHVle1xyXG4gICAgd2lkdGg6IDkzJTtcclxuICAgIGJvcmRlci1yYWRpdXM6NnB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMTM3OWQ7XHJcbn1cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIH1cclxuICAgLmZvbyB7XHJcbiAgICBsZWZ0OiAzNyU7XHJcbiAgICB0b3A6IDg3JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgXHJcbiAgIFxyXG4gIH1cclxuICAuYWxsbG9nb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgICB3aWR0aDogNzclO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiNmZmZmZmZmZjtcclxuICAgIHdpZHRoOiAzMHB4OyAvL1ByZWZlcnJlZCBzaXplIGhlcmVcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpXHJcbiAgICAgdXJsKCcvYXNzZXRzL2JnLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoOTIsODksOTIsMSk7XHJcbi1tb3otYm94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4IHJnYmEoOTIsODksOTIsMSk7XHJcbmJveC1zaGFkb3c6IDVweCA1cHggNXB4IDBweCByZ2JhKDkyLDg5LDkyLDEpO1xyXG4gIH0iLCIubXlsb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0JTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDI3JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb25vIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2JTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogODclO1xuICB3aWR0aDogMTI0cHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnJpZ2h0cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNiU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDkzJTtcbiAgd2lkdGg6IDEyNHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogOVB4O1xufVxuXG4ubXlwaWMge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm15dGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNCU7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm15dGV4dDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIlO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDogNTUlO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9ubzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIlO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDogNzQlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9zIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA1JTtcbiAgYm90dG9tOiAzNSU7XG4gIHJpZ2h0OiAwO1xufVxuXG4ucG9zMSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNSU7XG4gIGJvdHRvbTogMjYlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5wb3MyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiA1JTtcbiAgYm90dG9tOiAxNSU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLnNoYWRvdy1ibHVlIHtcbiAgd2lkdGg6IDkzJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTM3OWQ7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb28ge1xuICBsZWZ0OiAzNyU7XG4gIHRvcDogODclO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5hbGxsb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgd2lkdGg6IDc3JTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmZmY7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KVxuICAgdXJsKFwiL2Fzc2V0cy9iZy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4ICM1YzU5NWM7XG4gIC1tb3otYm94LXNoYWRvdzogNXB4IDVweCA1cHggMHB4ICM1YzU5NWM7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDBweCAjNWM1OTVjO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");











let LoginPage = class LoginPage {
    constructor(platform, router, googlePlus, databaseprovider, storage, alrtCtrl, network, loadingController, statusbar, toastController, syncService, datePipe, nav, events) {
        this.platform = platform;
        this.router = router;
        this.googlePlus = googlePlus;
        this.databaseprovider = databaseprovider;
        this.storage = storage;
        this.alrtCtrl = alrtCtrl;
        this.network = network;
        this.loadingController = loadingController;
        this.statusbar = statusbar;
        this.toastController = toastController;
        this.syncService = syncService;
        this.datePipe = datePipe;
        this.nav = nav;
        this.events = events;
        // company:any='invoice.pk';
        this.company = 'M.A. Traders Alipur Chatha';
        // company:any='Tiny Invoice';
        this.imageUrl = '/assets/icon.png';
        this.menuLogo = '/assets/icon.png';
        this.isLoggedIn = false;
        this.accounts = [];
        this.emails = ['adnan@rizwanali.pk', 'test@rizwanali.pk'];
        this.executed = 0;
        this.first = 0;
        this.userName = '';
        this.storeUsers();
        // this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
        //        if (this.constructor.name=="LoginPage")
        //        {
        //          navigator["app"].exitApp();
        //        }
        // });
        this.statusbar.backgroundColorByHexString('#4c8dff');
        this.databaseprovider.getDatabaseState().subscribe(rdy => {
            if (rdy) {
                this.account();
            }
        });
        storage.get('first_time').then((val) => {
            if (val !== null) {
                console.log('app is not running for first time');
                this.first = 0;
                storage.get('COM').then((val) => {
                    this.company = val;
                });
            }
            else {
                this.first = 1;
                console.log('probably the first time');
                storage.set('first_time', 'done');
                storage.set('comment', 'Thank you for your business');
                storage.set('duedate', '15');
                storage.set('currency', 'PKR ');
                this.storage.set('COM', 'M.A. Traders Alipur Chatha');
                // this.storage.set('COM', 'invoice.pk');
                // this.storage.set('COM', 'Tiny Invoice');
                this.storage.set('Sync', '');
            }
        });
        this.storage.set('COM', this.company);
        this.storage.set('Sync', '');
        this.storage.set('imgUrl', this.imageUrl);
        this.storage.set('menuLogo', this.menuLogo);
        storage.get('COM').then((val) => {
            this.company = val;
        });
        storage.get('imgUrl').then((val) => {
            this.imageUrl = val;
        });
        //this.getAll();
    }
    ngOnInit() {
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            loading.present();
            if (this.network.type === 'none') {
                loading.dismiss();
                alert('kindly connect to internet');
            }
            else {
                this.googlePlus.login({})
                    .then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    console.log(res);
                    console.log('here i am in login');
                    this.userId = res.userId;
                    this.email = res.email;
                    // alert('u' + res.givenName);
                    if (res.givenName = "Adnan ALi") {
                        // alert('1' + res.givenName);
                        this.storage.set("userId", 1);
                        this.usdId = 1;
                        if (this.first === 1) {
                            // this.syncService.serverSync();
                            // this.AddLog();
                        }
                        else {
                            // this.AddLog();
                        }
                    }
                    if (res.givenName = "Rizwan Ali") {
                        // alert('yes12' + res.givenName);
                        this.storage.set("userId", 4);
                        this.usdId = 1;
                        if (this.first === 1) {
                            // this.syncService.serverSync();
                            // this.AddLog();
                        }
                        else {
                            // this.AddLog();
                        }
                    }
                    if (res.givenName = "Rizwan Ali") {
                        // alert('yes1' + res.givenName);
                        this.storage.set("userId", 4);
                        this.usdId = 1;
                        if (this.first === 1) {
                            // this.syncService.serverSync();
                            // this.AddLog();
                        }
                        else {
                            // this.AddLog();
                        }
                    }
                    else {
                        // alert('2' + res.givenName);
                        this.userName = res.displayName;
                        this.storage.set("userId", 2);
                        this.usdId = 2;
                        if (this.first === 1) {
                            // this.syncService.serverSync();
                            // this.AddLog();
                        }
                        else {
                            //  this.AddLog();
                        }
                    }
                    this.syncService.checKEmail(this.email).then((data) => {
                        if (data[0].success === 1) {
                            console.log('matched');
                            this.storage.set("UserName", res.displayName);
                            this.storage.set('loginStatus', 'true');
                            this.storage.set('loginEmail', res.email);
                            this.storage.set('ID', data[0].ID);
                            this.events.publish('refreshShowPages', 'saad', '');
                            this.addAccount(res.email, res.userId);
                            loading.dismiss();
                        }
                        if (data[0].success === 0) {
                            this.logout();
                            loading.dismiss();
                            this.onButtonClick();
                        }
                    });
                    this.router.navigate(['/menu/dashboard']);
                    //   // this.addAccount(res.email, res.userId);
                    //   this.account();
                    //   this.storage.set('id', this.userId);
                    //   if (this.email === this.emails[0] || this.email === this.emails[1] || this.email === this.emails[2]  || this.email === this.emails[3])
                    //   {
                    //   // alert('3' + res.givenName);
                    //   if (this.confirm === this.userId)
                    //   {
                    //     this.storage.set("UserName" , res.displayName);
                    //     this.isLoggedIn = true;
                    //     localStorage.setItem('file', 'true');
                    //     this.getStatus();
                    //     this.storage.set('status', this.userId);
                    //    // location.href="/menu/dashboard"; // working
                    //     loading.dismiss();
                    //     this.storage.set('ID', '1');
                    //     this.storage.get('ID').then((val) => {
                    //       console.log('After login:' + val);
                    //      });
                    //      
                    //      this.AddLog(res.displayName);
                    //    // this.router.navigate(['/menu/dashboard']);
                    //     ;
                    //   }
                    //   else {
                    //     this.storage.set("UserName" , res.displayName);
                    //     this.storage.set('loginStatus', 'true');
                    //     this.storage.set('loginEmail', res.email);
                    //     this.addAccount(res.email, res.userId);
                    //     loading.dismiss();
                    //     this.storage.set('ID', '1');
                    //     this.storage.get('ID').then((val) => {
                    //       console.log('After login:' + val);
                    //      });
                    //      this.AddLog(res.displayName);
                    //     // this.showALert('Login Failed', '', 'You dont have account first Signup');
                    //   }
                    // }
                    // else{
                    //   this.logout();
                    //   loading.dismiss();
                    //   this.onButtonClick();
                    // }
                }))
                    .catch(err => console.error);
            }
        });
    }
    onButtonClick() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Invalid Email',
                duration: 2000
            });
            toast.present();
        });
    }
    addAccount(email, userId) {
        // alert('addaccount');
        this.databaseprovider.addaccount(email, userId)
            .then(data => {
            // this.loadAccountData();
            this.AddLog();
            this.nav.navigateRoot('/menu/clients');
            // this.router.navigate(['/menu/dashboard']);
        });
        console.log("Data Added");
    }
    logout() {
        this.googlePlus.logout()
            .then(res => {
            console.log(res);
            this.userId = "";
        })
            .catch(err => console.error(err));
    }
    account() {
        this.databaseprovider.getAccount(this.userId).then(data => {
            this.accounts = data;
            this.confirm = this.accounts.passcode;
            ;
            console.log(this.accounts.passcode);
        });
    }
    getStatus() {
        this.databaseprovider.getLogUpdate(this.userId, this.isLoggedIn).then(data => {
            this.loadInfo();
            this.accounts = data;
        });
    }
    loadInfo() {
        this.databaseprovider.getAllAccount().then(data => {
            this.accounts = data;
        });
    }
    showALert(head, sub, msg) {
        this.alrtCtrl.create({
            header: head,
            subHeader: sub,
            message: msg,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Signup',
                    handler: () => {
                        this.router.navigate(['home']);
                        console.log('Confirm Ok');
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    SignupPage() {
        this.router.navigate(['home']);
    }
    AddLog() {
        // this.userName = name;
        if (this.executed === 0) {
            if (this.usdId === 1) {
                this.acttype = 'You Signed In the app';
            }
            else {
                this.acttype = 'You Signed In the app';
            }
            // this.name = 'Purchased Order';
            let now = new Date().toString();
            const a = this.datePipe.transform(now, 'dd MMM yyyy h:mm a');
            this.lgdate = 'at ' + a;
            this.tblName = '';
            this.tblId = 0;
            this.name = '';
            // this.tblId = this.PO.ID;
            // this.tblId = this.syncService.getUpdatedPOID();
            this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate;
            this.syncService.addLogs(this.tblName, this.tblId, this.usdId, this.acttype, this.name, this.lgdate).then(data => {
                console.log("Log has been added");
                this.syncService.syncAddedLog();
                //this.GetLogs();
            });
            this.executed = 1;
        }
    }
    storeUsers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.syncService.getUsersFromServer();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__["GooglePlus"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__["SyncService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__["GooglePlus"],
        src_app_services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_sync_service__WEBPACK_IMPORTED_MODULE_9__["SyncService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map