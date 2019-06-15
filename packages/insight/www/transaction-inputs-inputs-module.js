(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-inputs-inputs-module"],{

/***/ "./src/app/transaction/inputs/inputs.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/transaction/inputs/inputs.module.ts ***!
  \*****************************************************/
/*! exports provided: InputsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsPageModule", function() { return InputsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _inputs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inputs.page */ "./src/app/transaction/inputs/inputs.page.ts");








var InputsPageModule = /** @class */ (function () {
    function InputsPageModule() {
    }
    InputsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _inputs_page__WEBPACK_IMPORTED_MODULE_7__["InputsPage"]
                    }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_inputs_page__WEBPACK_IMPORTED_MODULE_7__["InputsPage"]]
        })
    ], InputsPageModule);
    return InputsPageModule;
}());



/***/ }),

/***/ "./src/app/transaction/inputs/inputs.page.html":
/*!*****************************************************!*\
  !*** ./src/app/transaction/inputs/inputs.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Inputs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    TODO: summary card – # Inputs in Transaction TXID, aggregate visualization\n    of the amounts contributed (e.g. a scatter plot), aggregate visualization of\n    script types (e.g. a pie chart 50% P2PKH, 25% 2-of-3 P2SH, 25% 3-of-3 P2SH),\n    other details? This section should blend into the page, rather than being a\n    clickable-card.\n  </div>\n  <div>TODO: inputs list</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/transaction/inputs/inputs.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/transaction/inputs/inputs.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL2lucHV0cy9pbnB1dHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/transaction/inputs/inputs.page.ts":
/*!***************************************************!*\
  !*** ./src/app/transaction/inputs/inputs.page.ts ***!
  \***************************************************/
/*! exports provided: InputsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsPage", function() { return InputsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputsPage = /** @class */ (function () {
    function InputsPage() {
    }
    InputsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inputs-page',
            template: __webpack_require__(/*! ./inputs.page.html */ "./src/app/transaction/inputs/inputs.page.html"),
            styles: [__webpack_require__(/*! ./inputs.page.scss */ "./src/app/transaction/inputs/inputs.page.scss")]
        })
    ], InputsPage);
    return InputsPage;
}());



/***/ })

}]);
//# sourceMappingURL=transaction-inputs-inputs-module.js.map