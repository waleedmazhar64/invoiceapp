(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/landing/landing.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n                <ion-text>\n                                <h1 class=\"mytext\" style=\"color: #01379d;margin-top: 45px;\"><b> Welcome </b></h1>\n                              </ion-text>\n        <div class=\"mylogo\">\n                <img  src=\"{{imageUrl}}\" class=\"mypic\">\n              </div>\n          <div>\n            <!-- <ion-text>\n              <h1 class=\"mytext1\" style=\"color: #01379d;margin-top: 45px;\"> {{company}} </h1>\n            </ion-text> -->\n          </div>\n              <div>\n                <img  src=\"/assets/Softisans_Logo.png\" class=\"mono\">\n              </div>\n              <div>\n                  <h6 class=\"rights\">© 2019 All rights are reserved</h6>\n                </div>     \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing.page */ "./src/app/pages/landing/landing.page.ts");








const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_7__["LandingPage"]
    }
];
let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"]
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_7__["LandingPage"]]
    })
], LandingPageModule);



/***/ }),

/***/ "./src/app/pages/landing/landing.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mylogo {\n  position: absolute;\n  left: 4%;\n  right: 0;\n  margin: 0 auto;\n  top: 42%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n}\n\nion-content {\n  --background: #fff url(\"/assets/bg.jpg\") no-repeat center center / cover;\n}\n\n.mono {\n  position: absolute;\n  left: 6%;\n  right: 0;\n  top: 87%;\n  width: 124px;\n  height: auto;\n}\n\n.rights {\n  position: absolute;\n  left: 6%;\n  right: 0;\n  top: 93%;\n  width: 124px;\n  height: auto;\n  font-size: 9Px;\n}\n\n.mytext1 {\n  position: absolute;\n  left: 4%;\n  right: 0;\n  margin: 0 auto;\n  top: 54%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  font-weight: bold;\n  font-size: large;\n}\n\n.mytext {\n  position: absolute;\n  left: 4%;\n  right: 0;\n  margin: 0 auto;\n  top: 60%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  text-align: center;\n  font-size: -webkit-xxx-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9DOlxcd2FtcDY0XFx3d3dcXGludm9pY2UucGsvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxsYW5kaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksd0VBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWxvZ28ge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0JTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIHRvcDo0MiU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoJy9hc3NldHMvYmcuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxufVxyXG4ubW9ub3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDYlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDg3JTtcclxuICAgIHdpZHRoOiAxMjRweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4ucmlnaHRze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNiU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogOTMlO1xyXG4gICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiA5UHg7XHJcbn1cclxuLm15dGV4dDF7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgdG9wOjU0JTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5teXRleHR7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgdG9wOjYwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAtd2Via2l0LXh4eC1sYXJnZTtcclxufSIsIi5teWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQlO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDogNDIlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiL2Fzc2V0cy9iZy5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuLm1vbm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDYlO1xuICByaWdodDogMDtcbiAgdG9wOiA4NyU7XG4gIHdpZHRoOiAxMjRweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmlnaHRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2JTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogOTMlO1xuICB3aWR0aDogMTI0cHg7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiA5UHg7XG59XG5cbi5teXRleHQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0JTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDU0JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ubXl0ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0JTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDYwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogLXdlYmtpdC14eHgtbGFyZ2U7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/landing/landing.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");







let LandingPage = class LandingPage {
    constructor(plt, nav, googleplus, databaseprovider, platform, router, storage) {
        /*this.storage.get('status').then ((val)=>{
          console.log(val);
          this.num=val;
        this.navigationMode();
        });*/
        // this.databaseprovider.setLanding(1);
        // if (this.databaseprovider.getLanding() === 1) {
        //     this.router.navigateByUrl('/menu/dashboard');
        //   }
        this.plt = plt;
        this.nav = nav;
        this.googleplus = googleplus;
        this.databaseprovider = databaseprovider;
        this.platform = platform;
        this.router = router;
        this.storage = storage;
        this.accounts = [];
        this.acc = [];
        this.company = '';
        this.imageUrl = '/assets/tinyinvoice.png';
        this.data = [];
        this.islogger = false;
        // this.router.events.pipe(
        //   filter(event => event instanceof NavigationStart)
        // ).subscribe((route: NavigationStart) => {
        //   if (this.databaseprovider.getLanding() === 1) {
        //     this.router.navigateByUrl('/menu/dashboard');
        //     this.databaseprovider.setLanding(0);
        //   //  alert('yes');
        //   } else {
        //     this.databaseprovider.setLanding(1);
        //   }
        // });
        this.storage.get('ID').then((val) => {
            if (val !== null) {
                console.log('app is not running for first time');
                setTimeout(() => {
                    // this.router.navigateByUrl('/menu/dashboard');
                    this.nav.navigateRoot('/menu/dashboard');
                }, 3000);
                debugger;
                console.log('val1=' + val);
            }
            else {
                setTimeout(() => {
                    // this.nav.navigateRoot('/menu/dashboard');
                    this.router.navigateByUrl('/login');
                }, 3000);
                console.log('val=' + val);
                debugger;
            }
        });
        storage.get('first_time').then((val) => {
            if (val !== null) {
                console.log('app is not running for first time');
                // this.first = 0;
                storage.get('COM').then((val) => {
                    this.company = val;
                });
            }
            else {
                // this.company = 'Invoice.pk';
                // this.company = 'Tiny Invoice';
                this.storage.set('Sync', '');
                //  this.storage.set('COM', 'Tiny Invoice');
                // this.storage.set('COM', 'M.A. Traders Alipur Chatha');
                // this.storage.set('COM', 'Tiny Invoice');
                this.storage.set('COM', 'invoice.pk');
                // this.storage.set('imgUrl',this.imageUrl);
                storage.get('COM').then((val) => {
                    this.company = val;
                });
            }
        });
        /*localStorage.getItem('file');
        console.log(localStorage.getItem('file'));
        if(localStorage.getItem('file')==null) { // if not login
          this.router.navigateByUrl('/login');
       
       //this will also work
       //this.navCtrl.goRoot('/');
      
        }
        else{ // if lo
          this.checkLogin();
          this.router.navigateByUrl('/menu/dashboard');
          //this will also work
          //this.navCtrl.goRoot('/app');
         
        }*/
        /*this.storage.get('status').then ((val)=>{
          console.log(val);
         
          if( val==null) { // if not login
            this.router.navigateByUrl('/login');
         
         //this will also work
         //this.navCtrl.goRoot('/');
        
          }
          else{ // if login
          this.router.navigateByUrl('/menu/dashboard');
          //this will also work
          //this.navCtrl.goRoot('/app');
         
          }
       });*/
        /*platform.ready().then(() => {
          
          if( this.status==false) { // if not login
            this.router.navigateByUrl('/login');
         
         this will also work
         this.navCtrl.goRoot('/');
        
        } else { // if login
           this.router.navigateByUrl('/menu/dashboard');
          this will also work
          this.navCtrl.goRoot('/app');
         
        }
            
          });*/
        // this.storage.set('COM',this.company);
    }
    ngOnInit() {
        //this.navigationMode();
    }
    checkLogin() {
        this.googleplus.trySilentLogin({})
            .then(res => {
            console.log(res);
        })
            .catch(err => console.error(err));
    }
    account() {
        this.databaseprovider.getLogAccount(this.status).then(data => {
            this.loadInfo();
            this.accounts = data;
            this.confirm = this.accounts.logup;
            console.log(this.accounts.logup);
        });
    }
    loadInfo() {
        this.databaseprovider.getAllAccount().then(res => {
            this.acc = res;
        });
    }
    navigationMode() {
        //localStorage.getItem('file');
        //console.log(localStorage.getItem('file'));
        //if(localStorage.getItem('file')=='true') { // if not login
        //this.checkLogin();
        //this.router.navigateByUrl('/menu/dashboard');
        //this will also work
        //this.navCtrl.goRoot('/');
        //}
        //if(localStorage.getItem('file')=='false'||localStorage.getItem('file')==null)
        //{
        //this.router.navigateByUrl('/login');
        //}
        setTimeout(() => {
            this.router.navigateByUrl('/login');
        }, 6000);
    }
    addIt() {
        this.databaseprovider.addcompanyData()
            .then(data => {
            this.getAll();
        });
        console.log("Data Added");
    }
    getAll() {
        this.databaseprovider.getAllAccountData().then(data => {
            this.accounts = data;
            //console.log(this.company);
            console.log(this.imageUrl);
        });
    }
};
LandingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.page.html"),
        styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/pages/landing/landing.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_6__["GooglePlus"], src_app_services_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module-es2015.js.map