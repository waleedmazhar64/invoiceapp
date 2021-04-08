(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-client-add-client-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-client/add-client.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-client/add-client.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-icon padding  name=\"arrow-back\" size=\"medium\" (click)=\"back()\"></ion-icon>\n      </ion-buttons>\n      <ion-title>Add Client</ion-title>\n      <ion-label padding slot=\"end\" (click)=\"save()\">save</ion-label>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n        <ion-input  plceholder=\"Name\" [(ngModel)]=\"name\"></ion-input><ion-icon (click)=\"openList()\" name=\"person\"></ion-icon>\n    </ion-item>\n    <ion-item >\n      <ion-list no-lines lines=\"none\" *ngFor=\"let client of clients\">\n        <ion-button (click)=\"setInfo(client)\" text-capitalize=\"false\" fill=\"outline\" size=\"small\" color=\"dark\" style=\"width: 80%;\">{{client.name}}</ion-button>\n      </ion-list>\n        <ion-icon slot=\"end\" name=\"text\" (click)=\"clientsPage()\"></ion-icon>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-icon slot=\"start\" name=\"mail\"></ion-icon>\n      <ion-input placeholder=\"Email\" [(ngModel)]=\"email\"></ion-input>\n      <ion-icon name=\"close\" size=\"small\" *ngIf=\"!!email\" (click)=\"clearEmail()\"></ion-icon>\n    </ion-item>\n    <br>\n    <ion-item>\n        <ion-icon slot=\"start\" name=\"home\"></ion-icon>\n        <ion-input placeholder=\"Address Line 1\" [(ngModel)]=\"add1\"></ion-input>\n        <ion-icon name=\"close\" size=\"small\" *ngIf=\"!!add1\" (click)=\"clearadd1()\"></ion-icon>    \n    </ion-item>\n    <ion-item>\n        <ion-icon slot=\"start\"></ion-icon>\n        <ion-input placeholder=\"Address Line 2\" [(ngModel)]=\"add2\"></ion-input>\n        <ion-icon name=\"close\" size=\"small\" *ngIf=\"!!add2\" (click)=\"clearadd2()\"></ion-icon>    \n    </ion-item>\n    <ion-item>\n        <ion-icon slot=\"start\" ></ion-icon>\n        <ion-input placeholder=\"Address Line 3\" [(ngModel)]=\"add3\"></ion-input>\n        <ion-icon name=\"close\" size=\"small\" *ngIf=\"!!add3\" (click)=\"clearadd3()\"></ion-icon>    \n    </ion-item>\n    <br>\n    <ion-item>\n        <ion-icon slot=\"start\" name=\"logo-model-s\"></ion-icon>\n        <ion-input placeholder=\"Shipping to\" [(ngModel)]=\"shippingTo\"></ion-input>\n        <ion-icon name=\"close\" size=\"small\" *ngIf=\"!!shippingTo\" (click)=\"clearShippingTo()\"></ion-icon>    \n    </ion-item>\n    <ion-item>\n        <ion-icon slot=\"start\"></ion-icon>\n        <ion-input placeholder=\"Shippind Address Line 1\" [(ngModel)]=\"sAdd1\" ></ion-input>\n        <ion-icon name=\"close\" size=\"small\" *ngIf=\"!!sAdd1\" (click)=\"clearSadd1()\" ></ion-icon>    \n    </ion-item>\n    <ion-item>\n        <ion-icon slot=\"start\" ></ion-icon>\n        <ion-input placeholder=\"Shippind Address Line 2\" [(ngModel)]=\"sAdd2\" ></ion-input>\n        <ion-icon name=\"close\" size=\"small\" *ngIf=\"!!sAdd2\" (click)=\"clearSadd2()\"></ion-icon>    \n    </ion-item>\n    <ion-item>\n        <ion-icon slot=\"start\"></ion-icon>\n        <ion-input placeholder=\"Shippind Address Line 3\" [(ngModel)]=\"sAdd3\"></ion-input>\n        <ion-icon name=\"close\" size=\"small\" *ngIf=\"!!sAdd3\" (click)=\"clearSadd3()\"></ion-icon>    \n    </ion-item>\n     \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/add-client/add-client.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-client/add-client.module.ts ***!
  \*******************************************************/
/*! exports provided: AddClientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientPageModule", function() { return AddClientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_client_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-client.page */ "./src/app/pages/add-client/add-client.page.ts");







var routes = [
    {
        path: '',
        component: _add_client_page__WEBPACK_IMPORTED_MODULE_6__["AddClientPage"]
    }
];
var AddClientPageModule = /** @class */ (function () {
    function AddClientPageModule() {
    }
    AddClientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_client_page__WEBPACK_IMPORTED_MODULE_6__["AddClientPage"]]
        })
    ], AddClientPageModule);
    return AddClientPageModule;
}());



/***/ }),

/***/ "./src/app/pages/add-client/add-client.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/add-client/add-client.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1jbGllbnQvYWRkLWNsaWVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/add-client/add-client.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/add-client/add-client.page.ts ***!
  \*****************************************************/
/*! exports provided: AddClientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientPage", function() { return AddClientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/contacts */ "./node_modules/@ionic-native/contacts/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddClientPage = /** @class */ (function () {
    function AddClientPage(location, contacts, plt, router, alrtCtrl) {
        this.location = location;
        this.contacts = contacts;
        this.plt = plt;
        this.router = router;
        this.alrtCtrl = alrtCtrl;
        this.email = '';
        this.add1 = '';
        this.add2 = '';
        this.add3 = '';
        this.shippingTo = '';
        this.sAdd1 = '';
        this.sAdd2 = '';
        this.sAdd3 = '';
        this.clients = [
            {
                name: 'saad',
                email: 'saad@gmail.com',
                add1: 'islamabad',
                add2: '',
                add3: '',
                shippingTo: 'usman',
                sAdd1: '',
                sAdd2: '',
                sAdd3: '',
            },
            {
                name: 'usman',
                email: 'usman@gmail.com',
                add1: 'islamabad',
                add2: '',
                add3: '',
                shippingTo: 'usman',
                sAdd1: '',
                sAdd2: '',
                sAdd3: '',
            },
            {
                name: 'daniyal',
                email: 'daniyal@gmail.com',
                add1: 'islamabad',
                add2: '',
                add3: '',
                shippingTo: 'usman',
                sAdd1: '',
                sAdd2: '',
                sAdd3: '',
            }
        ];
        if (this.router.getCurrentNavigation().extras.state) {
            if (typeof this.router.getCurrentNavigation().extras.state.name !== 'undefined') {
                if (this.router.getCurrentNavigation().extras.state.name === 'Client') {
                    this.name = '';
                }
                else {
                    this.name = this.router.getCurrentNavigation().extras.state.name;
                }
                if (typeof this.router.getCurrentNavigation().extras.state.email !== 'undefined') {
                    this.email = this.router.getCurrentNavigation().extras.state.email;
                }
                if (typeof this.router.getCurrentNavigation().extras.state.add1 !== 'undefined') {
                    this.add1 = this.router.getCurrentNavigation().extras.state.add1;
                }
                if (typeof this.router.getCurrentNavigation().extras.state.add2 !== 'undefined') {
                    this.add2 = this.router.getCurrentNavigation().extras.state.add2;
                }
                if (typeof this.router.getCurrentNavigation().extras.state.add3 !== 'undefined') {
                    this.add3 = this.router.getCurrentNavigation().extras.state.add3;
                }
                if (typeof this.router.getCurrentNavigation().extras.state.shippingTo !== 'undefined') {
                    this.shippingTo = this.router.getCurrentNavigation().extras.state.shippingTo;
                }
                if (typeof this.router.getCurrentNavigation().extras.state.sAdd1 !== 'undefined') {
                    this.sAdd1 = this.router.getCurrentNavigation().extras.state.sAdd1;
                }
                if (typeof this.router.getCurrentNavigation().extras.state.sAdd2 !== 'undefined') {
                    this.sAdd2 = this.router.getCurrentNavigation().extras.state.sAdd2;
                }
                if (typeof this.router.getCurrentNavigation().extras.state.sAdd3 !== 'undefined') {
                    this.sAdd3 = this.router.getCurrentNavigation().extras.state.sAdd3;
                }
            }
        }
    }
    AddClientPage.prototype.ngOnInit = function () {
    };
    AddClientPage.prototype.back = function () {
        // this.location.back();
        this.router.navigate(['addinvoice']);
    };
    AddClientPage.prototype.save = function () {
        debugger;
        if (this.name !== '' && typeof this.name !== 'undefined') {
            var navigationExtras = {
                state: {
                    name: this.name,
                    email: this.email,
                    add1: this.add1,
                    add2: this.add2,
                    add3: this.add3,
                    shippingTo: this.shippingTo,
                    sAdd1: this.sAdd1,
                    sAdd2: this.sAdd2,
                    sAdd3: this.sAdd3
                }
            };
            this.router.navigate(['addinvoice'], navigationExtras);
        }
        else {
            this.shareALert('Warning', '', 'Name cant be empty.');
        }
    };
    AddClientPage.prototype.shareALert = function (head, sub, msg) {
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
                        console.log('Confirm Cancel');
                    }
                }
            ]
        }).then(function (alert) { return alert.present(); });
    };
    AddClientPage.prototype.setInfo = function (client) {
        if (client.name !== '') {
            this.name = client.name;
        }
        if (client.email !== '') {
            this.email = client.email;
        }
        if (client.add1 !== '') {
            this.add1 = client.add1;
        }
        if (client.shippingTo !== '') {
            this.shippingTo = client.shippingTo;
        }
    };
    AddClientPage.prototype.clearEmail = function () {
        this.email = '';
    };
    AddClientPage.prototype.clearadd1 = function () {
        this.add1 = '';
    };
    AddClientPage.prototype.clearadd2 = function () {
        this.add2 = '';
    };
    AddClientPage.prototype.clearadd3 = function () {
        this.add3 = '';
    };
    AddClientPage.prototype.clearShippingTo = function () {
        this.shippingTo = '';
    };
    AddClientPage.prototype.clearSadd1 = function () {
        this.sAdd1 = '';
    };
    AddClientPage.prototype.clearSadd2 = function () {
        this.sAdd2 = '';
    };
    AddClientPage.prototype.clearSadd3 = function () {
        this.sAdd3 = '';
    };
    AddClientPage.prototype.initContacts = function () {
        // let contact: Contact = this.contacts.create();
        var _this = this;
        // contact.name = new ContactName(null, 'Smith', 'John');
        // contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
        // contact.save().then(
        //   () => console.log('Contact saved!', contact),
        //   (error: any) => console.error('Error saving contact.', error)
        // );
        // If you want to open the native contacts screen and select the contacts from there use pickContact()
        this.contacts.pickContact()
            .then(function (response) {
            console.log(response);
            _this.name = response.displayName;
        });
    };
    AddClientPage.prototype.openList = function () {
        var _this = this;
        debugger;
        this.plt.ready().then(function (readySource) {
            console.log('Platform ready from', readySource);
            // Platform now ready, execute any required native code
            _this.initContacts();
        });
    };
    AddClientPage.prototype.clientsPage = function () {
        this.router.navigate(['add-client-clients']);
    };
    AddClientPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_3__["Contacts"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
    ]; };
    AddClientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(/*! raw-loader!./add-client.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-client/add-client.page.html"),
            styles: [__webpack_require__(/*! ./add-client.page.scss */ "./src/app/pages/add-client/add-client.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _ionic_native_contacts__WEBPACK_IMPORTED_MODULE_3__["Contacts"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], AddClientPage);
    return AddClientPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-client-add-client-module-es5.js.map