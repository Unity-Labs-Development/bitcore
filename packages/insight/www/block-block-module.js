(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["block-block-module"],{

/***/ "./src/app/block/block.module.ts":
/*!***************************************!*\
  !*** ./src/app/block/block.module.ts ***!
  \***************************************/
/*! exports provided: BlockPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPageModule", function() { return BlockPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _block_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.page */ "./src/app/block/block.page.ts");








var BlockPageModule = /** @class */ (function () {
    function BlockPageModule() {
    }
    BlockPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _block_page__WEBPACK_IMPORTED_MODULE_7__["BlockPage"]
                    }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_block_page__WEBPACK_IMPORTED_MODULE_7__["BlockPage"]]
        })
    ], BlockPageModule);
    return BlockPageModule;
}());



/***/ }),

/***/ "./src/app/block/block.page.html":
/*!***************************************!*\
  !*** ./src/app/block/block.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Block</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <app-block\n    *ngIf=\"(block$ | async) as block\"\n    [block]=\"block\"\n    [summary]=\"false\"\n    [displayValueCode]=\"config.displayValueCode$ | async\"\n  ></app-block>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/block/block.page.scss":
/*!***************************************!*\
  !*** ./src/app/block/block.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrL2Jsb2NrLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/block/block.page.ts":
/*!*************************************!*\
  !*** ./src/app/block/block.page.ts ***!
  \*************************************/
/*! exports provided: BlockPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPage", function() { return BlockPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config/config.service */ "./src/app/services/config/config.service.ts");







var BlockPage = /** @class */ (function () {
    function BlockPage(config, route, apiService) {
        this.config = config;
        this.route = route;
        this.apiService = apiService;
    }
    BlockPage.prototype.ngOnInit = function () {
        var _this = this;
        this.block$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.config.currentChain$, this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(params.get('hash')); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (hash) { return typeof hash === 'string'; }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var chain = _a[0], hash = _a[1];
            return _this.apiService.streamBlock(chain, hash);
        }));
    };
    BlockPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-page',
            template: __webpack_require__(/*! ./block.page.html */ "./src/app/block/block.page.html"),
            styles: [__webpack_require__(/*! ./block.page.scss */ "./src/app/block/block.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], BlockPage);
    return BlockPage;
}());



/***/ })

}]);
//# sourceMappingURL=block-block-module.js.map