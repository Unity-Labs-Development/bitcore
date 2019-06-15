(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-outputs-outputs-module"],{

/***/ "./src/app/transaction/outputs/outputs.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/transaction/outputs/outputs.module.ts ***!
  \*******************************************************/
/*! exports provided: OutputsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputsPageModule", function() { return OutputsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _outputs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./outputs.page */ "./src/app/transaction/outputs/outputs.page.ts");








var OutputsPageModule = /** @class */ (function () {
    function OutputsPageModule() {
    }
    OutputsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _outputs_page__WEBPACK_IMPORTED_MODULE_7__["OutputsPage"]
                    }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_outputs_page__WEBPACK_IMPORTED_MODULE_7__["OutputsPage"]]
        })
    ], OutputsPageModule);
    return OutputsPageModule;
}());



/***/ }),

/***/ "./src/app/transaction/outputs/outputs.page.html":
/*!*******************************************************!*\
  !*** ./src/app/transaction/outputs/outputs.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Outputs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    TODO: summary card – # Outputs in Transaction TXID, aggregate visualization\n    of the amounts (e.g. a scatter plot), aggregate visualization of spent-ness\n    (e.g. timeline of when each coin was spent), other details? This section\n    should blend into the page, rather than being a clickable-card.\n  </div>\n  <app-outputs-list\n    [chain$]=\"config.currentChain$\"\n    [txHash$]=\"txHash$\"\n    [displayValueCode]=\"config.displayValueCode$ | async\"\n  ></app-outputs-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/transaction/outputs/outputs.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/transaction/outputs/outputs.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL291dHB1dHMvb3V0cHV0cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/transaction/outputs/outputs.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/transaction/outputs/outputs.page.ts ***!
  \*****************************************************/
/*! exports provided: OutputsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputsPage", function() { return OutputsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/config/config.service */ "./src/app/services/config/config.service.ts");





var OutputsPage = /** @class */ (function () {
    function OutputsPage(config, route) {
        this.config = config;
        this.route = route;
        this.txHash$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (param) { return param['hash']; }));
    }
    OutputsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-outputs-page',
            template: __webpack_require__(/*! ./outputs.page.html */ "./src/app/transaction/outputs/outputs.page.html"),
            styles: [__webpack_require__(/*! ./outputs.page.scss */ "./src/app/transaction/outputs/outputs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OutputsPage);
    return OutputsPage;
}());



/***/ })

}]);
//# sourceMappingURL=transaction-outputs-outputs-module.js.map