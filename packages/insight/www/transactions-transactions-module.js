(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transactions-transactions-module"],{

/***/ "./src/app/transactions/transactions.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/transactions/transactions.module.ts ***!
  \*****************************************************/
/*! exports provided: TransactionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPageModule", function() { return TransactionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _transactions_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transactions.page */ "./src/app/transactions/transactions.page.ts");








var TransactionsPageModule = /** @class */ (function () {
    function TransactionsPageModule() {
    }
    TransactionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _transactions_page__WEBPACK_IMPORTED_MODULE_7__["TransactionsPage"]
                    }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_transactions_page__WEBPACK_IMPORTED_MODULE_7__["TransactionsPage"]]
        })
    ], TransactionsPageModule);
    return TransactionsPageModule;
}());



/***/ }),

/***/ "./src/app/transactions/transactions.page.html":
/*!*****************************************************!*\
  !*** ./src/app/transactions/transactions.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Transactions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <app-transaction-list\n    [chain$]=\"config.currentChain$\"\n    [query$]=\"query$\"\n    [displayValueCode]=\"config.displayValueCode$ | async\"\n  ></app-transaction-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/transactions/transactions.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/transactions/transactions.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/transactions/transactions.page.ts":
/*!***************************************************!*\
  !*** ./src/app/transactions/transactions.page.ts ***!
  \***************************************************/
/*! exports provided: TransactionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsPage", function() { return TransactionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config/config.service */ "./src/app/services/config/config.service.ts");




var TransactionsPage = /** @class */ (function () {
    function TransactionsPage(config) {
        this.config = config;
        this.query$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            blockHeight: -1 /* pending */,
            limit: 20,
            direction: -1 /* descending */,
            paging: 'blockTimeNormalized'
        });
    }
    TransactionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transactions-page',
            template: __webpack_require__(/*! ./transactions.page.html */ "./src/app/transactions/transactions.page.html"),
            styles: [__webpack_require__(/*! ./transactions.page.scss */ "./src/app/transactions/transactions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], TransactionsPage);
    return TransactionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=transactions-transactions-module.js.map