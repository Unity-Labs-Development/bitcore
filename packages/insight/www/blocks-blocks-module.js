(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blocks-blocks-module"],{

/***/ "./src/app/blocks/block-list/block-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/blocks/block-list/block-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-block\n    *ngFor=\"let block of blocks$ | async\"\n    [block]=\"block\"\n    [routerLink]=\"['/' + (chain$ | async).code + '/block/' + block.hash]\"\n    [displayValueCode]=\"displayValueCode\"\n></app-block>\n"

/***/ }),

/***/ "./src/app/blocks/block-list/block-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/blocks/block-list/block-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-block {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ob25neGluaHVpL2dpdGh1Yi5jb20vVW5pdHktTGFicy1EZXZlbG9wbWVudC9iaXRjb3JlL3BhY2thZ2VzL2luc2lnaHQvc3JjL2FwcC9ibG9ja3MvYmxvY2stbGlzdC9ibG9jay1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmxvY2tzL2Jsb2NrLWxpc3QvYmxvY2stbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1ibG9jayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/blocks/block-list/block-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/blocks/block-list/block-list.component.ts ***!
  \***********************************************************/
/*! exports provided: BlockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockListComponent", function() { return BlockListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/api.service */ "./src/app/services/api/api.service.ts");






var BlockListComponent = /** @class */ (function () {
    function BlockListComponent(apiService) {
        this.apiService = apiService;
        this.displayValueCode = 'BCH';
    }
    BlockListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blocks$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.chain$, this.query$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var chain = _a[0], query = _a[1];
            return _this.apiService.streamBlocks(chain, query);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BlockListComponent.prototype, "chain$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], BlockListComponent.prototype, "query$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockListComponent.prototype, "displayValueCode", void 0);
    BlockListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-list',
            template: __webpack_require__(/*! ./block-list.component.html */ "./src/app/blocks/block-list/block-list.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./block-list.component.scss */ "./src/app/blocks/block-list/block-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], BlockListComponent);
    return BlockListComponent;
}());



/***/ }),

/***/ "./src/app/blocks/blocks.module.ts":
/*!*****************************************!*\
  !*** ./src/app/blocks/blocks.module.ts ***!
  \*****************************************/
/*! exports provided: BlocksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksPageModule", function() { return BlocksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block-list/block-list.component */ "./src/app/blocks/block-list/block-list.component.ts");
/* harmony import */ var _blocks_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks.page */ "./src/app/blocks/blocks.page.ts");









var BlocksPageModule = /** @class */ (function () {
    function BlocksPageModule() {
    }
    BlocksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _blocks_page__WEBPACK_IMPORTED_MODULE_8__["BlocksPage"]
                    }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_blocks_page__WEBPACK_IMPORTED_MODULE_8__["BlocksPage"], _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_7__["BlockListComponent"]]
        })
    ], BlocksPageModule);
    return BlocksPageModule;
}());



/***/ }),

/***/ "./src/app/blocks/blocks.page.html":
/*!*****************************************!*\
  !*** ./src/app/blocks/blocks.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Blocks</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <app-block-list\n    [chain$]=\"config.currentChain$\"\n    [query$]=\"query$\"\n    [displayValueCode]=\"config.displayValueCode$ | async\"\n  ></app-block-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/blocks/blocks.page.scss":
/*!*****************************************!*\
  !*** ./src/app/blocks/blocks.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2Nrcy9ibG9ja3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/blocks/blocks.page.ts":
/*!***************************************!*\
  !*** ./src/app/blocks/blocks.page.ts ***!
  \***************************************/
/*! exports provided: BlocksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksPage", function() { return BlocksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config/config.service */ "./src/app/services/config/config.service.ts");




var BlocksPage = /** @class */ (function () {
    function BlocksPage(config) {
        this.config = config;
        this.query$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            limit: 20,
            direction: -1 /* descending */,
            paging: 'height'
        });
    }
    BlocksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blocks-page',
            template: __webpack_require__(/*! ./blocks.page.html */ "./src/app/blocks/blocks.page.html"),
            styles: [__webpack_require__(/*! ./blocks.page.scss */ "./src/app/blocks/blocks.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], BlocksPage);
    return BlocksPage;
}());



/***/ })

}]);
//# sourceMappingURL=blocks-blocks-module.js.map