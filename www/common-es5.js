(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic-native/call-number/ngx/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/call-number/ngx/index.js ***!
  \*************************************************************/
/*! exports provided: CallNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallNumber", function() { return CallNumber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var CallNumber = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CallNumber, _super);
    function CallNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallNumber.prototype.callNumber = function (numberToCall, bypassAppChooser) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "callNumber", { "callbackOrder": "reverse" }, arguments); };
    CallNumber.prototype.isCallSupported = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCallSupported", {}, arguments); };
    CallNumber.pluginName = "CallNumber";
    CallNumber.plugin = "call-number";
    CallNumber.pluginRef = "plugins.CallNumber";
    CallNumber.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
    CallNumber.platforms = ["Android", "iOS"];
    CallNumber.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return CallNumber;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtbnVtYmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCeEMsOEJBQWlCOzs7O0lBVS9DLCtCQUFVLGFBQUMsWUFBb0IsRUFBRSxnQkFBeUI7SUFTMUQsb0NBQWU7Ozs7Ozs7Z0JBcEJoQixVQUFVOztxQkEvQlg7RUFnQ2dDLGlCQUFpQjtTQUFwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQ2FsbCBOdW1iZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ2FsbCBhIG51bWJlciBkaXJlY3RseSBmcm9tIHlvdXIgQ29yZG92YS9Jb25pYyBhcHBsaWNhdGlvbi5cbiAqICoqTk9URSoqOiBUaGUgaU9TIFNpbXVsYXRvciAoYW5kIG1heWJlIEFuZHJvaWQgU2ltdWxhdG9ycykgZG8gbm90IHByb3ZpZGUgYWNjZXNzIHRvIHRoZSBwaG9uZSBzdWJzeXN0ZW0uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYWxsTnVtYmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYWxsLW51bWJlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsbE51bWJlcjogQ2FsbE51bWJlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2FsbE51bWJlci5jYWxsTnVtYmVyKFwiMTgwMDEwMTAxMDFcIiwgdHJ1ZSlcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdMYXVuY2hlZCBkaWFsZXIhJywgcmVzKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgbGF1bmNoaW5nIGRpYWxlcicsIGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbGxOdW1iZXInLFxuICBwbHVnaW46ICdjYWxsLW51bWJlcicsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuQ2FsbE51bWJlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vUm9oZm9zaG8vQ29yZG92YUNhbGxOdW1iZXJQbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsbE51bWJlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENhbGxzIGEgcGhvbmUgbnVtYmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBudW1iZXJUb0NhbGwgVGhlIHBob25lIG51bWJlciB0byBjYWxsIGFzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYnlwYXNzQXBwQ2hvb3NlciBTZXQgdG8gdHJ1ZSB0byBieXBhc3MgdGhlIGFwcCBjaG9vc2VyIGFuZCBnbyBkaXJlY3RseSB0byBkaWFsZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FsbE51bWJlcihudW1iZXJUb0NhbGw6IHN0cmluZywgYnlwYXNzQXBwQ2hvb3NlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGNhbGwgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0NhbGxTdXBwb3J0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@ionic-native/date-picker/ngx/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/date-picker/ngx/index.js ***!
  \*************************************************************/
/*! exports provided: DatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var DatePicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DatePicker, _super);
    function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @hidden
         */
        _this.ANDROID_THEMES = {
            THEME_TRADITIONAL: 1,
            THEME_HOLO_DARK: 2,
            THEME_HOLO_LIGHT: 3,
            THEME_DEVICE_DEFAULT_DARK: 4,
            THEME_DEVICE_DEFAULT_LIGHT: 5,
        };
        return _this;
    }
    DatePicker.prototype.show = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", {}, arguments); };
    DatePicker.pluginName = "DatePicker";
    DatePicker.plugin = "cordova-plugin-datepicker";
    DatePicker.pluginRef = "datePicker";
    DatePicker.repo = "https://github.com/VitaliiBlagodir/cordova-plugin-datepicker";
    DatePicker.platforms = ["Android", "iOS", "Windows"];
    DatePicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return DatePicker;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RhdGUtcGlja2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTBKeEMsOEJBQWlCOzs7UUFDL0M7O1dBRUc7UUFDSCxvQkFBYyxHQUFHO1lBQ2YsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixlQUFlLEVBQUUsQ0FBQztZQUNsQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLHlCQUF5QixFQUFFLENBQUM7WUFDNUIsMEJBQTBCLEVBQUUsQ0FBQztTQUM5QixDQUFDOzs7SUFRRix5QkFBSSxhQUFDLE9BQTBCOzs7Ozs7O2dCQW5CaEMsVUFBVTs7cUJBMUpYO0VBMkpnQyxpQkFBaUI7U0FBcEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVQaWNrZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBtb2RlIG9mIHRoZSBkYXRlIHBpY2tlclxuICAgKiBWYWx1ZXM6IGRhdGUgfCB0aW1lIHwgZGF0ZXRpbWVcbiAgICovXG4gIG1vZGU6IHN0cmluZztcblxuICAvKipcbiAgICogU2VsZWN0ZWQgZGF0ZVxuICAgKi9cbiAgZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogTWluaW11bSBkYXRlXG4gICAqIERlZmF1bHQ6IGVtcHR5IFN0cmluZ1xuICAgKi9cbiAgbWluRGF0ZT86IERhdGUgfCBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gZGF0ZVxuICAgKiBEZWZhdWx0OiBlbXB0eSBTdHJpbmdcbiAgICovXG4gIG1heERhdGU/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBmb3IgdGhlIGRpYWxvZyB0aXRsZS4gSWYgZW1wdHksIHVzZXMgYW5kcm9pZCBkZWZhdWx0IChTZXQgZGF0ZS9TZXQgdGltZSkuXG4gICAqIERlZmF1bHQ6IGVtcHR5IFN0cmluZ1xuICAgKi9cbiAgdGl0bGVUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBvZiBCVVRUT05fUE9TSVRJVkUgKGRvbmUgYnV0dG9uKSBvbiBBbmRyb2lkXG4gICAqL1xuICBva1RleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIEJVVFRPTl9ORUdBVElWRSAoY2FuY2VsIGJ1dHRvbikuIElmIGVtcHR5LCB1c2VzIGFuZHJvaWQuUi5zdHJpbmcuY2FuY2VsLlxuICAgKi9cbiAgY2FuY2VsVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogTGFiZWwgb2YgdG9kYXkgYnV0dG9uLiBJZiBlbXB0eSwgZG9lc24ndCBzaG93IHRoZSBvcHRpb24gdG8gc2VsZWN0IGN1cnJlbnQgZGF0ZS5cbiAgICovXG4gIHRvZGF5VGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogTGFiZWwgb2Ygbm93IGJ1dHRvbi4gSWYgZW1wdHksIGRvZXNuJ3Qgc2hvdyB0aGUgb3B0aW9uIHRvIHNlbGVjdCBjdXJyZW50IHRpbWUuXG4gICAqL1xuICBub3dUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTaG93cyB0aW1lIGRpYWxvZyBpbiAyNCBob3VycyBmb3JtYXQuXG4gICAqL1xuICBpczI0SG91cj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENob29zZSB0aGUgQW5kcm9pZCB0aGVtZSBmb3IgdGhlIHBpY2tlci4gWW91IGNhbiB1c2UgdGhlIERhdGVQaWNrZXIuQU5EUk9JRF9USEVNRVMgcHJvcGVydHkuXG4gICAqIFZhbHVlczogMTogVEhFTUVfVFJBRElUSU9OQUwgfCAyOiBUSEVNRV9IT0xPX0RBUksgfCAzOiBUSEVNRV9IT0xPX0xJR0hUIHwgNDogVEhFTUVfREVWSUNFX0RFRkFVTFRfREFSSyB8IDU6IFRIRU1FX0RFVklDRV9ERUZBVUxUX0xJR0hUXG4gICAqL1xuICBhbmRyb2lkVGhlbWU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3dzIG9yIGhpZGUgZGF0ZXMgZWFybGllciB0aGVuIHNlbGVjdGVkIGRhdGUuXG4gICAqL1xuICBhbGxvd09sZERhdGVzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvd3Mgb3IgaGlkZSBkYXRlcyBhZnRlciBzZWxlY3RlZCBkYXRlLlxuICAgKi9cbiAgYWxsb3dGdXR1cmVEYXRlcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIGRvbmUgYnV0dG9uLlxuICAgKi9cbiAgZG9uZUJ1dHRvbkxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIZXggY29sb3Igb2YgZG9uZSBidXR0b24uXG4gICAqL1xuICBkb25lQnV0dG9uQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIGNhbmNlbCBidXR0b24uXG4gICAqL1xuICBjYW5jZWxCdXR0b25MYWJlbD86IHN0cmluZztcblxuICAvKipcbiAgICogSGV4IGNvbG9yIG9mIGNhbmNlbCBidXR0b24uXG4gICAqL1xuICBjYW5jZWxCdXR0b25Db2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogWCBwb3NpdGlvbiBvZiBkYXRlIHBpY2tlci4gVGhlIHBvc2l0aW9uIGlzIGFic29sdXRlIHRvIHRoZSByb290IHZpZXcgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgeD86IG51bWJlcjtcblxuICAvKipcbiAgICogWSBwb3NpdGlvbiBvZiBkYXRlIHBpY2tlci4gVGhlIHBvc2l0aW9uIGlzIGFic29sdXRlIHRvIHRoZSByb290IHZpZXcgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgeT86IG51bWJlcjtcblxuICAvKipcbiAgICogSW50ZXJ2YWwgYmV0d2VlbiBvcHRpb25zIGluIHRoZSBtaW51dGUgc2VjdGlvbiBvZiB0aGUgZGF0ZSBwaWNrZXIuXG4gICAqL1xuICBtaW51dGVJbnRlcnZhbD86IG51bWJlcjtcblxuICAvKipcbiAgICogRm9yY2UgdGhlIFVJUG9wb3ZlckFycm93RGlyZWN0aW9uIGVudW0uIFRoZSB2YWx1ZSBhbnkgd2lsbCByZXZlcnQgdG8gZGVmYXVsdCBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbkFueSBhbmQgbGV0IHRoZSBhcHAgY2hvb3NlIHRoZSBwcm9wZXIgZGlyZWN0aW9uIGl0c2VsZi5cbiAgICovXG4gIHBvcG92ZXJBcnJvd0RpcmVjdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogRm9yY2UgbG9jYWxlIGZvciBkYXRlUGlja2VyLlxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIERhdGUgUGlja2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBEYXRlUGlja2VyIHBsdWdpbiBhbGxvd3MgdGhlIHVzZXIgdG8gZmV0Y2ggZGF0ZSBvciB0aW1lIHVzaW5nIG5hdGl2ZSBkaWFsb2dzLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGF0ZS1waWNrZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVQaWNrZXI6IERhdGVQaWNrZXIpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5kYXRlUGlja2VyLnNob3coe1xuICogICBkYXRlOiBuZXcgRGF0ZSgpLFxuICogICBtb2RlOiAnZGF0ZScsXG4gKiAgIGFuZHJvaWRUaGVtZTogdGhpcy5kYXRlUGlja2VyLkFORFJPSURfVEhFTUVTLlRIRU1FX0hPTE9fREFSS1xuICogfSkudGhlbihcbiAqICAgZGF0ZSA9PiBjb25zb2xlLmxvZygnR290IGRhdGU6ICcsIGRhdGUpLFxuICogICBlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIG9jY3VycmVkIHdoaWxlIGdldHRpbmcgZGF0ZTogJywgZXJyKVxuICogKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIERhdGVQaWNrZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGF0ZVBpY2tlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRhdGVwaWNrZXInLFxuICBwbHVnaW5SZWY6ICdkYXRlUGlja2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9WaXRhbGlpQmxhZ29kaXIvY29yZG92YS1wbHVnaW4tZGF0ZXBpY2tlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBBTkRST0lEX1RIRU1FUyA9IHtcbiAgICBUSEVNRV9UUkFESVRJT05BTDogMSxcbiAgICBUSEVNRV9IT0xPX0RBUks6IDIsXG4gICAgVEhFTUVfSE9MT19MSUdIVDogMyxcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9EQVJLOiA0LFxuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0xJR0hUOiA1LFxuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgZGF0ZSBhbmQvb3IgdGltZSBwaWNrZXIgZGlhbG9nKHMpXG4gICAqIEBwYXJhbSB7RGF0ZVBpY2tlck9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIGRhdGUgcGlja2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEYXRlPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBwaWNrZWQgZGF0ZSBhbmQvb3IgdGltZSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93KG9wdGlvbnM6IERhdGVQaWNrZXJPcHRpb25zKTogUHJvbWlzZTxEYXRlPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/sms/ngx/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ionic-native/sms/ngx/index.js ***!
  \*****************************************************/
/*! exports provided: SMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMS", function() { return SMS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var SMS = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SMS, _super);
    function SMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMS.prototype.send = function (phoneNumber, message, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "send", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    SMS.prototype.hasPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasPermission", { "platforms": ["Android"] }, arguments); };
    SMS.pluginName = "SMS";
    SMS.plugin = "cordova-sms-plugin";
    SMS.pluginRef = "sms";
    SMS.repo = "https://github.com/cordova-sms/cordova-sms-plugin";
    SMS.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    SMS.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return SMS;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Ntcy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFvRC9DLHVCQUFpQjs7OztJQVl4QyxrQkFBSSxhQUFDLFdBQThCLEVBQUUsT0FBZSxFQUFFLE9BQW9CO0lBVzFFLDJCQUFhOzs7Ozs7O2dCQXhCZCxVQUFVOztjQXBEWDtFQXFEeUIsaUJBQWlCO1NBQTdCLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBPcHRpb25zIGZvciBzZW5kaW5nIGFuIFNNU1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFNtc09wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gcmVwbGFjZSBcXG4gYnkgYSBuZXcgbGluZS4gRGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHJlcGxhY2VMaW5lQnJlYWtzPzogYm9vbGVhbjtcblxuICBhbmRyb2lkPzogU21zT3B0aW9uc0FuZHJvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU21zT3B0aW9uc0FuZHJvaWQge1xuICAvKipcbiAgICogU2V0IHRvIFwiSU5URU5UXCIgdG8gc2VuZCBTTVMgd2l0aCB0aGUgbmF0aXZlIGFuZHJvaWQgU01TIG1lc3NhZ2luZy4gTGVhdmluZyBpdCBlbXB0eSB3aWxsIHNlbmQgdGhlIFNNUyB3aXRob3V0IG9wZW5pbmcgYW55IGFwcC5cbiAgICovXG4gIGludGVudD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBTTVNcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXNtcy1wbHVnaW4uIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtTTVMgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXNtcy9jb3Jkb3ZhLXNtcy1wbHVnaW4pLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU01TIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zbXMvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNtczogU01TKSB7IH1cbiAqXG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIFNlbmQgYSB0ZXh0IG1lc3NhZ2UgdXNpbmcgZGVmYXVsdCBvcHRpb25zXG4gKiB0aGlzLnNtcy5zZW5kKCc0MTYxMjM0NTYnLCAnSGVsbG8gd29ybGQhJyk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBTbXNPcHRpb25zXG4gKiBTbXNPcHRpb25zQW5kcm9pZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1NNUycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtc21zLXBsdWdpbicsXG4gIHBsdWdpblJlZjogJ3NtcycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1zbXMvY29yZG92YS1zbXMtcGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNNUyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNlbmRzIHNtcyB0byBhIG51bWJlclxuICAgKiBAcGFyYW0gcGhvbmVOdW1iZXIge3N0cmluZ3xzdHJpbmdbXX0gUGhvbmUgbnVtYmVyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2VcbiAgICogQHBhcmFtIG9wdGlvbnMge1Ntc09wdGlvbnN9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgcHJvbWlzZSB3aGVuIHRoZSBTTVMgaGFzIGJlZW4gc2VudFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICB9KVxuICBzZW5kKHBob25lTnVtYmVyOiBzdHJpbmcgfCBzdHJpbmdbXSwgbWVzc2FnZTogc3RyaW5nLCBvcHRpb25zPzogU21zT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gbGV0cyB5b3Uga25vdyBpZiB0aGUgYXBwIGhhcyBwZXJtaXNzaW9uIHRvIHNlbmQgU01TXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgd2UgaGF2ZSBwZXJtaXNzaW9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js ***!
  \*************************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/printer-list-modal/printer-list-modal.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/printer-list-modal/printer-list-modal.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n  <ion-toolbar color=\"primary\">\n    <ion-title>Printer List</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n<ion-list>\n  <ion-item *ngFor=\"let item of printerList\" (tap)=\"select(item)\">\n    {{item.name}} {{item.id}}\n  </ion-item>\n</ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/printer-list-modal/printer-list-modal.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/printer-list-modal/printer-list-modal.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaW50ZXItbGlzdC1tb2RhbC9wcmludGVyLWxpc3QtbW9kYWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/printer-list-modal/printer-list-modal.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/printer-list-modal/printer-list-modal.page.ts ***!
  \*********************************************************************/
/*! exports provided: PrinterListModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterListModalPage", function() { return PrinterListModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var PrinterListModalPage = /** @class */ (function () {
    function PrinterListModalPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.printerList = [];
        this.printerList = this.navParams.get('data');
    }
    PrinterListModalPage.prototype.ngOnInit = function () {
    };
    PrinterListModalPage.prototype.ionViewDidLoad = function () {
    };
    PrinterListModalPage.prototype.select = function (data) {
        this.modalCtrl.dismiss(data);
    };
    PrinterListModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    PrinterListModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-printer-list-modal',
            template: __webpack_require__(/*! raw-loader!./printer-list-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/printer-list-modal/printer-list-modal.page.html"),
            styles: [__webpack_require__(/*! ./printer-list-modal.page.scss */ "./src/app/pages/printer-list-modal/printer-list-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], PrinterListModalPage);
    return PrinterListModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map