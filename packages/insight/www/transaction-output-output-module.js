(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-output-output-module"],{

/***/ "./src/app/transaction/output/output.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/transaction/output/output.module.ts ***!
  \*****************************************************/
/*! exports provided: OutputPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputPageModule", function() { return OutputPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _output_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./output.page */ "./src/app/transaction/output/output.page.ts");








var OutputPageModule = /** @class */ (function () {
    function OutputPageModule() {
    }
    OutputPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _output_page__WEBPACK_IMPORTED_MODULE_7__["OutputPage"]
                    }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_output_page__WEBPACK_IMPORTED_MODULE_7__["OutputPage"]]
        })
    ], OutputPageModule);
    return OutputPageModule;
}());



/***/ }),

/***/ "./src/app/transaction/output/output.page.html":
/*!*****************************************************!*\
  !*** ./src/app/transaction/output/output.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Output</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <app-output\n    *ngIf=\"(coin$ | async) as coin\"\n    [coin]=\"coin\"\n    [summary]=\"false\"\n    [displayValueCode]=\"config.displayValueCode$ | async\"\n  ></app-output>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/transaction/output/output.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/transaction/output/output.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL291dHB1dC9vdXRwdXQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/transaction/output/output.page.ts":
/*!***************************************************!*\
  !*** ./src/app/transaction/output/output.page.ts ***!
  \***************************************************/
/*! exports provided: OutputPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputPage", function() { return OutputPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/config/config.service */ "./src/app/services/config/config.service.ts");







var OutputPage = /** @class */ (function () {
    function OutputPage(config, route, apiService) {
        this.config = config;
        this.route = route;
        this.apiService = apiService;
    }
    OutputPage.prototype.ngOnInit = function () {
        var _this = this;
        this.coin$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.config.currentChain$, this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([params.get('hash'), params.get('output')]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (_a) {
            var hash = _a[0], output = _a[1];
            return hash !== null && output !== null;
        }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var chain = _a[0], _b = _a[1], hash = _b[0], index = _b[1];
            return _this.apiService
                .streamTransactionCoins(chain, hash)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (listing) { return listing.outputs[index]; }));
        }));
    };
    OutputPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-output-page',
            template: __webpack_require__(/*! ./output.page.html */ "./src/app/transaction/output/output.page.html"),
            styles: [__webpack_require__(/*! ./output.page.scss */ "./src/app/transaction/output/output.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], OutputPage);
    return OutputPage;
}());



/***/ })

}]);
//# sourceMappingURL=transaction-output-output-module.js.map