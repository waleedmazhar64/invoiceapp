(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-printer-list-modal-printer-list-modal-module"],{

/***/ "./src/app/pages/printer-list-modal/printer-list-modal-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/printer-list-modal/printer-list-modal-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PrinterListModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterListModalPageRoutingModule", function() { return PrinterListModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _printer_list_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printer-list-modal.page */ "./src/app/pages/printer-list-modal/printer-list-modal.page.ts");




var routes = [
    {
        path: '',
        component: _printer_list_modal_page__WEBPACK_IMPORTED_MODULE_3__["PrinterListModalPage"]
    }
];
var PrinterListModalPageRoutingModule = /** @class */ (function () {
    function PrinterListModalPageRoutingModule() {
    }
    PrinterListModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PrinterListModalPageRoutingModule);
    return PrinterListModalPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/printer-list-modal/printer-list-modal.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/printer-list-modal/printer-list-modal.module.ts ***!
  \***********************************************************************/
/*! exports provided: PrinterListModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterListModalPageModule", function() { return PrinterListModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _printer_list_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./printer-list-modal-routing.module */ "./src/app/pages/printer-list-modal/printer-list-modal-routing.module.ts");
/* harmony import */ var _printer_list_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./printer-list-modal.page */ "./src/app/pages/printer-list-modal/printer-list-modal.page.ts");







var PrinterListModalPageModule = /** @class */ (function () {
    function PrinterListModalPageModule() {
    }
    PrinterListModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _printer_list_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrinterListModalPageRoutingModule"]
            ],
            declarations: [_printer_list_modal_page__WEBPACK_IMPORTED_MODULE_6__["PrinterListModalPage"]]
        })
    ], PrinterListModalPageModule);
    return PrinterListModalPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-printer-list-modal-printer-list-modal-module-es5.js.map