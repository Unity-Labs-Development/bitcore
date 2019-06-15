(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["block-block-transactions-block-transactions-module"],{

/***/ "./src/app/block/block-transactions/block-transactions.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/block/block-transactions/block-transactions.module.ts ***!
  \***********************************************************************/
/*! exports provided: BlockTransactionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTransactionsPageModule", function() { return BlockTransactionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _block_transactions_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block-transactions.page */ "./src/app/block/block-transactions/block-transactions.page.ts");








var BlockTransactionsPageModule = /** @class */ (function () {
    function BlockTransactionsPageModule() {
    }
    BlockTransactionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _block_transactions_page__WEBPACK_IMPORTED_MODULE_7__["BlockTransactionsPage"]
                    }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_block_transactions_page__WEBPACK_IMPORTED_MODULE_7__["BlockTransactionsPage"]]
        })
    ], BlockTransactionsPageModule);
    return BlockTransactionsPageModule;
}());



/***/ }),

/***/ "./src/app/block/block-transactions/block-transactions.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/block/block-transactions/block-transactions.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Transactions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    TODO: summary card – X Transactions in Block #123456, mined time, other\n    details? This section should blend into the page, rather than being a\n    clickable-card. (Here's a placeholder:)\n    <app-block\n      *ngIf=\"(block$ | async) as block\"\n      [block]=\"block\"\n      [displayValueCode]=\"config.displayValueCode$ | async\"\n    ></app-block>\n  </div>\n  <app-transaction-list\n    [chain$]=\"config.currentChain$\"\n    [query$]=\"query$\"\n    [displayValueCode]=\"config.displayValueCode$ | async\"\n  ></app-transaction-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/block/block-transactions/block-transactions.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/block/block-transactions/block-transactions.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrL2Jsb2NrLXRyYW5zYWN0aW9ucy9ibG9jay10cmFuc2FjdGlvbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/block/block-transactions/block-transactions.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/block/block-transactions/block-transactions.page.ts ***!
  \*********************************************************************/
/*! exports provided: BlockTransactionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTransactionsPage", function() { return BlockTransactionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/api.service */ "./src/app/services/api/api.service.ts");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/config/config.service */ "./src/app/services/config/config.service.ts");







var BlockTransactionsPage = /** @class */ (function () {
    function BlockTransactionsPage(config, route, apiService) {
        var _this = this;
        this.config = config;
        this.route = route;
        this.apiService = apiService;
        this._query$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.query$ = this._query$.asObservable();
        this.hash = this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (param) { return param['hash']; }))
            .toPromise();
        this.block$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.hash), this.config.currentChain$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var hash = _a[0], chain = _a[1];
            return _this.apiService.streamBlock(chain, hash);
        }));
    }
    BlockTransactionsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.hash.then(function (hash) {
            _this._query$.next({
                blockHash: hash,
                limit: 20,
                direction: 1 /* ascending */,
                paging: 'txid'
            });
        });
    };
    BlockTransactionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-transactions-page',
            template: __webpack_require__(/*! ./block-transactions.page.html */ "./src/app/block/block-transactions/block-transactions.page.html"),
            styles: [__webpack_require__(/*! ./block-transactions.page.scss */ "./src/app/block/block-transactions/block-transactions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], BlockTransactionsPage);
    return BlockTransactionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=block-block-transactions-block-transactions-module.js.map