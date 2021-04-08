(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-client-client-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/client/client.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/client/client.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button  style=\" color:#ffffff;\" defaultHref=\"/invoice\"></ion-back-button>\n        </ion-buttons>\n    <ion-title  style=\" color: #ffffff;position: absolute;top: 34%;left: 31%\">Client-Info</ion-title>\n    <a class =\"loo\" slot=\"secondary\" href=\"/invoice\">Save</a>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n     <ion-item>\n        <ion-input [(ngModel)]=\"name\" type=\"text\" placeholder=\"Name\"></ion-input>\n      </ion-item>\n      <ion-icon class=\"icon\" ios=\"ios-contact\" md=\"md-contact\" (click)=\"getContact()\"></ion-icon>\n      <ion-item>\n          <ion-icon ios=\"ios-mail\" md=\"md-mail\"></ion-icon>\n          <ion-input [(ngModel)]=\"email\" style=\"position: absolute;left: 16%;\" type=\"text\" placeholder=\"Email\"></ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n            <ion-icon ios=\"ios-call\" md=\"md-call\"></ion-icon>\n            <ion-input [(ngModel)]=\"phone\" style=\"position: absolute;left: 16%;\" type=\"text\" placeholder=\"Phone\"></ion-input>\n          </ion-item>\n          <br>\n        <ion-item>\n            <ion-icon class=\"icon1\" ios=\"ios-home\" md=\"md-home\"></ion-icon>\n            <ion-input [(ngModel)]=\"address\" style=\"left: 16%;\" placeholder=\"Address Line 1\"></ion-input>\n          </ion-item>\n          <br>\n          <ion-item>\n              <ion-icon class=\"icon1\" ios=\"ios-car\" md=\"md-car\"></ion-icon>\n              <ion-input [(ngModel)]=\"shipping\" style=\"left: 16%;\" placeholder=\"Shipping to\"></ion-input>\n            </ion-item>\n            <ion-button (click)=\"addClientInfo()\"> submit</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/client/client.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/client/client.module.ts ***!
  \***********************************************/
/*! exports provided: ClientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageModule", function() { return ClientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _client_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client.page */ "./src/app/pages/client/client.page.ts");







const routes = [
    {
        path: '',
        component: _client_page__WEBPACK_IMPORTED_MODULE_6__["ClientPage"]
    }
];
let ClientPageModule = class ClientPageModule {
};
ClientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_client_page__WEBPACK_IMPORTED_MODULE_6__["ClientPage"]]
    })
], ClientPageModule);



/***/ }),

/***/ "./src/app/pages/client/client.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/client/client.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  height: 64px;\n  --background: #5252d1;\n}\n\n.loo {\n  font-size: 134%;\n  color: #ffffff;\n  text-decoration: none;\n  position: absolute;\n  left: 82%;\n  top: 33%;\n}\n\n.icon {\n  position: absolute;\n  top: 5%;\n  left: 85%;\n  height: 4%;\n  width: 9%;\n}\n\n.icon1 {\n  position: absolute;\n  top: 5%;\n  left: -17%;\n  height: 57%;\n  width: 42%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2xpZW50L0M6XFx3YW1wNjRcXHd3d1xcaW52b2ljZS5way9zcmNcXGFwcFxccGFnZXNcXGNsaWVudFxcY2xpZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2xpZW50L2NsaWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUVFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDQUo7O0FERUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2xpZW50L2NsaWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM1MjUyZDE7XHJcbiAgfVxyXG5cclxuICAubG9ve1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTM0JTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogODIlO1xyXG4gICAgdG9wOiAzMyU7XHJcbn1cclxuLmljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgbGVmdDogODUlO1xyXG4gICAgaGVpZ2h0OiA0JTtcclxuICAgIHdpZHRoOiA5JVxyXG59XHJcbi5pY29uMXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiAtMTclO1xyXG4gICAgaGVpZ2h0OiA1NyU7XHJcbiAgICB3aWR0aDogNDIlO1xyXG59XHJcbiIsImlvbi10b29sYmFyIHtcbiAgaGVpZ2h0OiA2NHB4O1xuICAtLWJhY2tncm91bmQ6ICM1MjUyZDE7XG59XG5cbi5sb28ge1xuICBmb250LXNpemU6IDEzNCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogODIlO1xuICB0b3A6IDMzJTtcbn1cblxuLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIGxlZnQ6IDg1JTtcbiAgaGVpZ2h0OiA0JTtcbiAgd2lkdGg6IDklO1xufVxuXG4uaWNvbjEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIGxlZnQ6IC0xNyU7XG4gIGhlaWdodDogNTclO1xuICB3aWR0aDogNDIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/client/client.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/client/client.page.ts ***!
  \*********************************************/
/*! exports provided: ClientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPage", function() { return ClientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/contacts */ "./node_modules/@ionic-native/contacts/index.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");





let ClientPage = class ClientPage {
    constructor(contacts, databaseprovider, storage) {
        this.contacts = contacts;
        this.databaseprovider = databaseprovider;
        this.storage = storage;
        this.contactsfound = [];
        this.clients = [];
        this.contactor = {
            displayName: null,
            phoneNumbers: null,
            email: null
        };
        this.storage.get('id').then((val) => {
            console.log(val);
            this.userId = val;
        });
        this.getStartDate();
    }
    ngOnInit() {
    }
    getContact() {
        this.contacts.pickContact().then((contact) => {
            this.contactsfound = contact;
            console.log(this.contactsfound);
            this.contactor.displayName = contact.displayName;
            this.contactor.phoneNumbers = contact.phoneNumbers[0].value;
            this.contactor.email = contact.emails[0].value;
            this.name = this.contactor.displayName;
            this.phone = this.contactor.phoneNumbers;
            this.email = this.contactor.email;
            console.log(this.email);
            console.log(this.phone);
            console.log(this.name);
        });
    }
    addClientInfo() {
        this.databaseprovider.addClient(this.userId, this.name, this.email, this.phone, this.address, this.shipping, this.ldates, this.ldates, this.userId, this.userId)
            .then(data => {
            this.loadClientData();
        });
        console.log("Data Added");
    }
    loadClientData() {
        this.databaseprovider.getAllClient().then(data => {
            this.clients = data;
        });
    }
    Cickit() {
        console.log(this.email);
        console.log(this.phone);
        console.log(this.name);
        console.log(this.address);
        console.log(this.shipping);
    }
    getStartDate() {
        var dateObj = new Date();
        var year = dateObj.getFullYear().toString();
        var month = dateObj.getMonth().toString();
        var date = dateObj.getDate().toString();
        var monthArray = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.ldates = monthArray[month] + '/' + date + '/' + year;
        console.log(this.ldates);
    }
};
ClientPage.ctorParameters = () => [
    { type: _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_2__["Contacts"] },
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
ClientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client',
        template: __webpack_require__(/*! raw-loader!./client.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/client/client.page.html"),
        styles: [__webpack_require__(/*! ./client.page.scss */ "./src/app/pages/client/client.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_contacts__WEBPACK_IMPORTED_MODULE_2__["Contacts"], src_app_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], ClientPage);



/***/ })

}]);
//# sourceMappingURL=pages-client-client-module-es2015.js.map