(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-input-input-module"],{

/***/ "./src/app/transaction/input/input.module.ts":
/*!***************************************************!*\
  !*** ./src/app/transaction/input/input.module.ts ***!
  \***************************************************/
/*! exports provided: InputPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageModule", function() { return InputPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input.page */ "./src/app/transaction/input/input.page.ts");








var InputPageModule = /** @class */ (function () {
    function InputPageModule() {
    }
    InputPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _input_page__WEBPACK_IMPORTED_MODULE_7__["InputPage"]
                    }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_input_page__WEBPACK_IMPORTED_MODULE_7__["InputPage"]]
        })
    ], InputPageModule);
    return InputPageModule;
}());



/***/ }),

/***/ "./src/app/transaction/input/input.page.html":
/*!***************************************************!*\
  !*** ./src/app/transaction/input/input.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Inputs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding> <div></div> </ion-content>\n\n<!-- TODO: create `input` in `shared` components - see OutputPage -->\n"

/***/ }),

/***/ "./src/app/transaction/input/input.page.scss":
/*!***************************************************!*\
  !*** ./src/app/transaction/input/input.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL2lucHV0L2lucHV0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/transaction/input/input.page.ts":
/*!*************************************************!*\
  !*** ./src/app/transaction/input/input.page.ts ***!
  \*************************************************/
/*! exports provided: InputPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPage", function() { return InputPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputPage = /** @class */ (function () {
    function InputPage() {
    }
    InputPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-page',
            template: __webpack_require__(/*! ./input.page.html */ "./src/app/transaction/input/input.page.html"),
            styles: [__webpack_require__(/*! ./input.page.scss */ "./src/app/transaction/input/input.page.scss")]
        })
    ], InputPage);
    return InputPage;
}());



/***/ })

}]);
//# sourceMappingURL=transaction-input-input-module.js.map