"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["dashboard_feature_src_index_ts"],{

/***/ 7293:
/*!****************************************!*\
  !*** ./dashboard/feature/src/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardFeatureModule: () => (/* reexport safe */ _lib_dashboard_feature_module__WEBPACK_IMPORTED_MODULE_0__.DashboardFeatureModule),
/* harmony export */   dashboardFeatureRoutes: () => (/* reexport safe */ _lib_dashboard_feature_routes__WEBPACK_IMPORTED_MODULE_1__.dashboardFeatureRoutes)
/* harmony export */ });
/* harmony import */ var _lib_dashboard_feature_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/dashboard-feature.module */ 5698);
/* harmony import */ var _lib_dashboard_feature_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/dashboard-feature.routes */ 4812);




/***/ }),

/***/ 5758:
/*!******************************************************************!*\
  !*** ./dashboard/feature/src/lib/dashboard-feature.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardFeatureComponent: () => (/* binding */ DashboardFeatureComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ 6331);
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ 3509);
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js */ 119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 9058);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4849);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ 1695);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 6318);



var _class;





function DashboardFeatureComponent_mat_grid_tile_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-grid-tile", 3)(1, "mat-card", 4)(2, "mat-card-content", 5)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", card_r1.cols)("rowspan", card_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](card_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](card_r1.title);
  }
}
var _cards = /*#__PURE__*/new WeakMap();
class DashboardFeatureComponent {
  constructor() {
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _cards, {
      writable: true,
      value: void 0
    });
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _cards, new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([{
      title: 'Conteúdos',
      value: (Math.random() * 99).toFixed(),
      cols: 1,
      rows: 1
    }, {
      title: 'Contas',
      value: (Math.random() * 99).toFixed(),
      cols: 1,
      rows: 1
    }, {
      title: 'Trilhas',
      value: (Math.random() * 99).toFixed(),
      cols: 1,
      rows: 1
    }]));
    this.cards$ = (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _cards).asObservable();
  }
}
_class = DashboardFeatureComponent;
_class.ɵfac = function DashboardFeatureComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["dev-dashboard-feature"]],
  decls: 6,
  vars: 3,
  consts: [[1, "mat-h1"], ["cols", "3", "rowHeight", "350px"], [3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"], [1, "dashboard-card"], [1, "dashboard-card-content"]],
  template: function DashboardFeatureComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header")(1, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-grid-list", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DashboardFeatureComponent_mat_grid_tile_4_Template, 7, 4, "mat-grid-tile", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx.cards$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridTile, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  margin: 16px 16px 0;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n[_nghost-%COMP%]   .dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .dashboard-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 40px 20px;\n  font-size: 600%;\n}\n[_nghost-%COMP%]   .more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n[_nghost-%COMP%]   .dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1mZWF0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7QUFBSjtBQUNJO0VBQ0UsU0FBQTtBQUNOO0FBR0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKO0FBR0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFETjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUhKO0FBTUU7RUFDRSxrQkFBQTtBQUpKIiwiZmlsZSI6ImRhc2hib2FyZC1mZWF0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWFkZXIge1xuICAgIG1hcmdpbjogMTZweCAxNnB4IDA7XG4gICAgaDEge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5kYXNoYm9hcmQtY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGJvdHRvbTogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBoMiB7XG4gICAgICBtYXJnaW46IDAgNDBweCAyMHB4O1xuICAgICAgZm9udC1zaXplOiA2MDAlO1xuICAgIH1cbiAgfVxuXG4gIC5tb3JlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2Rhc2hib2FyZC9mZWF0dXJlL3NyYy9saWIvZGFzaGJvYXJkLWZlYXR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQUFKO0FBQ0k7RUFDRSxTQUFBO0FBQ047QUFHRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7QUFHSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUROO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBSEo7QUFNRTtFQUNFLGtCQUFBO0FBSko7QUFDQSx3c0NBQXdzQyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVhZGVyIHtcbiAgICBtYXJnaW46IDE2cHggMTZweCAwO1xuICAgIGgxIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAuZGFzaGJvYXJkLWNhcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaDIge1xuICAgICAgbWFyZ2luOiAwIDQwcHggMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogNjAwJTtcbiAgICB9XG4gIH1cblxuICAubW9yZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICByaWdodDogMTBweDtcbiAgfVxuXG4gIC5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 5698:
/*!***************************************************************!*\
  !*** ./dashboard/feature/src/lib/dashboard-feature.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardFeatureModule: () => (/* binding */ DashboardFeatureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2541);
/* harmony import */ var _dashboard_feature_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-feature.routes */ 4812);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ 1695);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 6318);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 4818);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 4313);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 8433);
/* harmony import */ var _dashboard_feature_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-feature.component */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9058);
var _class;











class DashboardFeatureModule {}
_class = DashboardFeatureModule;
_class.ɵfac = function DashboardFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_dashboard_feature_routes__WEBPACK_IMPORTED_MODULE_0__.dashboardFeatureRoutes), _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardFeatureModule, {
    declarations: [_dashboard_feature_component__WEBPACK_IMPORTED_MODULE_1__.DashboardFeatureComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule]
  });
})();

/***/ }),

/***/ 4812:
/*!***************************************************************!*\
  !*** ./dashboard/feature/src/lib/dashboard-feature.routes.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dashboardFeatureRoutes: () => (/* binding */ dashboardFeatureRoutes)
/* harmony export */ });
/* harmony import */ var _dashboard_feature_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-feature.component */ 5758);

const dashboardFeatureRoutes = [{
  path: '',
  component: _dashboard_feature_component__WEBPACK_IMPORTED_MODULE_0__.DashboardFeatureComponent
}];

/***/ }),

/***/ 1695:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/grid-list.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatGridAvatarCssMatStyler: () => (/* binding */ MatGridAvatarCssMatStyler),
/* harmony export */   MatGridList: () => (/* binding */ MatGridList),
/* harmony export */   MatGridListModule: () => (/* binding */ MatGridListModule),
/* harmony export */   MatGridTile: () => (/* binding */ MatGridTile),
/* harmony export */   MatGridTileFooterCssMatStyler: () => (/* binding */ MatGridTileFooterCssMatStyler),
/* harmony export */   MatGridTileHeaderCssMatStyler: () => (/* binding */ MatGridTileHeaderCssMatStyler),
/* harmony export */   MatGridTileText: () => (/* binding */ MatGridTileText),
/* harmony export */   "ɵTileCoordinator": () => (/* binding */ ɵTileCoordinator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9058);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 3102);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 6680);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 8247);
var _class, _class2, _class3, _class4, _class5, _class6, _class7;






/**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * @docs-private
 */
const _c0 = ["*"];
const _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
const _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
const _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}";
class TileCoordinator {
  constructor() {
    /** Index at which the search for the next gap will start. */
    this.columnIndex = 0;
    /** The current row index. */
    this.rowIndex = 0;
  }
  /** Gets the total number of rows occupied by tiles */
  get rowCount() {
    return this.rowIndex + 1;
  }
  /**
   * Gets the total span of rows occupied by tiles.
   * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
   */
  get rowspan() {
    const lastRowMax = Math.max(...this.tracker);
    // if any of the tiles has a rowspan that pushes it beyond the total row count,
    // add the difference to the rowcount
    return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
  }
  /**
   * Updates the tile positions.
   * @param numColumns Amount of columns in the grid.
   * @param tiles Tiles to be positioned.
   */
  update(numColumns, tiles) {
    this.columnIndex = 0;
    this.rowIndex = 0;
    this.tracker = new Array(numColumns);
    this.tracker.fill(0, 0, this.tracker.length);
    this.positions = tiles.map(tile => this._trackTile(tile));
  }
  /** Calculates the row and col position of a tile. */
  _trackTile(tile) {
    // Find a gap large enough for this tile.
    const gapStartIndex = this._findMatchingGap(tile.colspan);
    // Place tile in the resulting gap.
    this._markTilePosition(gapStartIndex, tile);
    // The next time we look for a gap, the search will start at columnIndex, which should be
    // immediately after the tile that has just been placed.
    this.columnIndex = gapStartIndex + tile.colspan;
    return new TilePosition(this.rowIndex, gapStartIndex);
  }
  /** Finds the next available space large enough to fit the tile. */
  _findMatchingGap(tileCols) {
    if (tileCols > this.tracker.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`mat-grid-list: tile with colspan ${tileCols} is wider than ` + `grid with cols="${this.tracker.length}".`);
    }
    // Start index is inclusive, end index is exclusive.
    let gapStartIndex = -1;
    let gapEndIndex = -1;
    // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
    do {
      // If we've reached the end of the row, go to the next row.
      if (this.columnIndex + tileCols > this.tracker.length) {
        this._nextRow();
        gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
        gapEndIndex = this._findGapEndIndex(gapStartIndex);
        continue;
      }
      gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
      // If there are no more empty spaces in this row at all, move on to the next row.
      if (gapStartIndex == -1) {
        this._nextRow();
        gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
        gapEndIndex = this._findGapEndIndex(gapStartIndex);
        continue;
      }
      gapEndIndex = this._findGapEndIndex(gapStartIndex);
      // If a gap large enough isn't found, we want to start looking immediately after the current
      // gap on the next iteration.
      this.columnIndex = gapStartIndex + 1;
      // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
      // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
    } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0);
    // If we still didn't manage to find a gap, ensure that the index is
    // at least zero so the tile doesn't get pulled out of the grid.
    return Math.max(gapStartIndex, 0);
  }
  /** Move "down" to the next row. */
  _nextRow() {
    this.columnIndex = 0;
    this.rowIndex++;
    // Decrement all spaces by one to reflect moving down one row.
    for (let i = 0; i < this.tracker.length; i++) {
      this.tracker[i] = Math.max(0, this.tracker[i] - 1);
    }
  }
  /**
   * Finds the end index (exclusive) of a gap given the index from which to start looking.
   * The gap ends when a non-zero value is found.
   */
  _findGapEndIndex(gapStartIndex) {
    for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
      if (this.tracker[i] != 0) {
        return i;
      }
    }
    // The gap ends with the end of the row.
    return this.tracker.length;
  }
  /** Update the tile tracker to account for the given tile in the given space. */
  _markTilePosition(start, tile) {
    for (let i = 0; i < tile.colspan; i++) {
      this.tracker[start + i] = tile.rowspan;
    }
  }
}
/**
 * Simple data structure for tile position (row, col).
 * @docs-private
 */
class TilePosition {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}

/**
 * Injection token used to provide a grid list to a tile and to avoid circular imports.
 * @docs-private
 */
const MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_GRID_LIST');
class MatGridTile {
  constructor(_element, _gridList) {
    this._element = _element;
    this._gridList = _gridList;
    this._rowspan = 1;
    this._colspan = 1;
  }
  /** Amount of rows that the grid tile takes up. */
  get rowspan() {
    return this._rowspan;
  }
  set rowspan(value) {
    this._rowspan = Math.round((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value));
  }
  /** Amount of columns that the grid tile takes up. */
  get colspan() {
    return this._colspan;
  }
  set colspan(value) {
    this._colspan = Math.round((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value));
  }
  /**
   * Sets the style of the grid-tile element.  Needs to be set manually to avoid
   * "Changed after checked" errors that would occur with HostBinding.
   */
  _setStyle(property, value) {
    this._element.nativeElement.style[property] = value;
  }
}
_class = MatGridTile;
_class.ɵfac = function _class_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8));
};
_class.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["mat-grid-tile"]],
  hostAttrs: [1, "mat-grid-tile"],
  hostVars: 2,
  hostBindings: function _class_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
    }
  },
  inputs: {
    rowspan: "rowspan",
    colspan: "colspan"
  },
  exportAs: ["matGridTile"],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "mat-grid-tile-content"]],
  template: function _class_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-grid-tile',
      exportAs: 'matGridTile',
      host: {
        'class': 'mat-grid-tile',
        // Ensures that the "rowspan" and "colspan" input value is reflected in
        // the DOM. This is needed for the grid-tile harness.
        '[attr.rowspan]': 'rowspan',
        '[attr.colspan]': 'colspan'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"mat-grid-tile-content\">\n  <ng-content></ng-content>\n</div>\n",
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_GRID_LIST]
      }]
    }];
  }, {
    rowspan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    colspan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatGridTileText {
  constructor(_element) {
    this._element = _element;
  }
  ngAfterContentInit() {
    (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.setLines)(this._lines, this._element);
  }
}
_class2 = MatGridTileText;
_class2.ɵfac = function _class2_Factory(t) {
  return new (t || _class2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
_class2.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class2,
  selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
  contentQueries: function _class2_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatLine, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
    }
  },
  ngContentSelectors: _c2,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-grid-list-text"]],
  template: function _class2_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-grid-tile-header, mat-grid-tile-footer',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    _lines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatLine, {
        descendants: true
      }]
    }]
  });
})();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridAvatarCssMatStyler {}
_class3 = MatGridAvatarCssMatStyler;
_class3.ɵfac = function _class3_Factory(t) {
  return new (t || _class3)();
};
_class3.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class3,
  selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
  hostAttrs: [1, "mat-grid-avatar"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-grid-avatar], [matGridAvatar]',
      host: {
        'class': 'mat-grid-avatar'
      }
    }]
  }], null, null);
})();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridTileHeaderCssMatStyler {}
_class4 = MatGridTileHeaderCssMatStyler;
_class4.ɵfac = function _class4_Factory(t) {
  return new (t || _class4)();
};
_class4.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class4,
  selectors: [["mat-grid-tile-header"]],
  hostAttrs: [1, "mat-grid-tile-header"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-grid-tile-header',
      host: {
        'class': 'mat-grid-tile-header'
      }
    }]
  }], null, null);
})();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridTileFooterCssMatStyler {}
_class5 = MatGridTileFooterCssMatStyler;
_class5.ɵfac = function _class5_Factory(t) {
  return new (t || _class5)();
};
_class5.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class5,
  selectors: [["mat-grid-tile-footer"]],
  hostAttrs: [1, "mat-grid-tile-footer"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-grid-tile-footer',
      host: {
        'class': 'mat-grid-tile-footer'
      }
    }]
  }], null, null);
})();

/**
 * RegExp that can be used to check whether a value will
 * be allowed inside a CSS `calc()` expression.
 */
const cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * @docs-private
 */
class TileStyler {
  constructor() {
    this._rows = 0;
    this._rowspan = 0;
  }
  /**
   * Adds grid-list layout info once it is available. Cannot be processed in the constructor
   * because these properties haven't been calculated by that point.
   *
   * @param gutterSize Size of the grid's gutter.
   * @param tracker Instance of the TileCoordinator.
   * @param cols Amount of columns in the grid.
   * @param direction Layout direction of the grid.
   */
  init(gutterSize, tracker, cols, direction) {
    this._gutterSize = normalizeUnits(gutterSize);
    this._rows = tracker.rowCount;
    this._rowspan = tracker.rowspan;
    this._cols = cols;
    this._direction = direction;
  }
  /**
   * Computes the amount of space a single 1x1 tile would take up (width or height).
   * Used as a basis for other calculations.
   * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
   * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
   * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
   */
  getBaseTileSize(sizePercent, gutterFraction) {
    // Take the base size percent (as would be if evenly dividing the size between cells),
    // and then subtracting the size of one gutter. However, since there are no gutters on the
    // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
    // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
    // edge evenly among the cells).
    return `(${sizePercent}% - (${this._gutterSize} * ${gutterFraction}))`;
  }
  /**
   * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
   * @param offset Number of tiles that have already been rendered in the row/column.
   * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
   * @return Position of the tile as a CSS calc() expression.
   */
  getTilePosition(baseSize, offset) {
    // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
    // row/column (offset).
    return offset === 0 ? '0' : calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
  }
  /**
   * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
   * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
   * @param span The tile's rowspan or colspan.
   * @return Size of the tile as a CSS calc() expression.
   */
  getTileSize(baseSize, span) {
    return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
  }
  /**
   * Sets the style properties to be applied to a tile for the given row and column index.
   * @param tile Tile to which to apply the styling.
   * @param rowIndex Index of the tile's row.
   * @param colIndex Index of the tile's column.
   */
  setStyle(tile, rowIndex, colIndex) {
    // Percent of the available horizontal space that one column takes up.
    let percentWidthPerTile = 100 / this._cols;
    // Fraction of the vertical gutter size that each column takes up.
    // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
    let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
    this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
  }
  /** Sets the horizontal placement of the tile in the list. */
  setColStyles(tile, colIndex, percentWidth, gutterWidth) {
    // Base horizontal size of a column.
    let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
    // The width and horizontal position of each tile is always calculated the same way, but the
    // height and vertical position depends on the rowMode.
    let side = this._direction === 'rtl' ? 'right' : 'left';
    tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
    tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
  }
  /**
   * Calculates the total size taken up by gutters across one axis of a list.
   */
  getGutterSpan() {
    return `${this._gutterSize} * (${this._rowspan} - 1)`;
  }
  /**
   * Calculates the total size taken up by tiles across one axis of a list.
   * @param tileHeight Height of the tile.
   */
  getTileSpan(tileHeight) {
    return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
  }
  /**
   * Calculates the computed height and returns the correct style property to set.
   * This method can be implemented by each type of TileStyler.
   * @docs-private
   */
  getComputedHeight() {
    return null;
  }
}
/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example `<mat-grid-list cols="3" rowHeight="100px">`
 * @docs-private
 */
class FixedTileStyler extends TileStyler {
  constructor(fixedRowHeight) {
    super();
    this.fixedRowHeight = fixedRowHeight;
  }
  init(gutterSize, tracker, cols, direction) {
    super.init(gutterSize, tracker, cols, direction);
    this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
    if (!cssCalcAllowedValue.test(this.fixedRowHeight) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`);
    }
  }
  setRowStyles(tile, rowIndex) {
    tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
    tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
  }
  getComputedHeight() {
    return ['height', calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)];
  }
  reset(list) {
    list._setListStyle(['height', null]);
    if (list._tiles) {
      list._tiles.forEach(tile => {
        tile._setStyle('top', null);
        tile._setStyle('height', null);
      });
    }
  }
}
/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
 * @docs-private
 */
class RatioTileStyler extends TileStyler {
  constructor(value) {
    super();
    this._parseRatio(value);
  }
  setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
    let percentHeightPerTile = percentWidth / this.rowHeightRatio;
    this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
    // Use padding-top and margin-top to maintain the given aspect ratio, as
    // a percentage-based value for these properties is applied versus the *width* of the
    // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
    tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));
    tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
  }
  getComputedHeight() {
    return ['paddingBottom', calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)];
  }
  reset(list) {
    list._setListStyle(['paddingBottom', null]);
    list._tiles.forEach(tile => {
      tile._setStyle('marginTop', null);
      tile._setStyle('paddingTop', null);
    });
  }
  _parseRatio(value) {
    const ratioParts = value.split(':');
    if (ratioParts.length !== 2 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`mat-grid-list: invalid ratio given for row-height: "${value}"`);
    }
    this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
  }
}
/**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
 *
 * @docs-private
 */
class FitTileStyler extends TileStyler {
  setRowStyles(tile, rowIndex) {
    // Percent of the available vertical space that one row takes up.
    let percentHeightPerTile = 100 / this._rowspan;
    // Fraction of the horizontal gutter size that each column takes up.
    let gutterHeightPerTile = (this._rows - 1) / this._rows;
    // Base vertical size of a column.
    let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
    tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
    tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
  }
  reset(list) {
    if (list._tiles) {
      list._tiles.forEach(tile => {
        tile._setStyle('top', null);
        tile._setStyle('height', null);
      });
    }
  }
}
/** Wraps a CSS string in a calc function */
function calc(exp) {
  return `calc(${exp})`;
}
/** Appends pixels to a CSS string if no units are given. */
function normalizeUnits(value) {
  return value.match(/([A-Za-z%]+)$/) ? value : `${value}px`;
}

// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
const MAT_FIT_MODE = 'fit';
class MatGridList {
  constructor(_element, _dir) {
    this._element = _element;
    this._dir = _dir;
    /** The amount of space between tiles. This will be something like '5px' or '2em'. */
    this._gutter = '1px';
  }
  /** Amount of columns in the grid list. */
  get cols() {
    return this._cols;
  }
  set cols(value) {
    this._cols = Math.max(1, Math.round((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value)));
  }
  /** Size of the grid list's gutter in pixels. */
  get gutterSize() {
    return this._gutter;
  }
  set gutterSize(value) {
    this._gutter = `${value == null ? '' : value}`;
  }
  /** Set internal representation of row height from the user-provided value. */
  get rowHeight() {
    return this._rowHeight;
  }
  set rowHeight(value) {
    const newValue = `${value == null ? '' : value}`;
    if (newValue !== this._rowHeight) {
      this._rowHeight = newValue;
      this._setTileStyler(this._rowHeight);
    }
  }
  ngOnInit() {
    this._checkCols();
    this._checkRowHeight();
  }
  /**
   * The layout calculation is fairly cheap if nothing changes, so there's little cost
   * to run it frequently.
   */
  ngAfterContentChecked() {
    this._layoutTiles();
  }
  /** Throw a friendly error if cols property is missing */
  _checkCols() {
    if (!this.cols && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`mat-grid-list: must pass in number of columns. ` + `Example: <mat-grid-list cols="3">`);
    }
  }
  /** Default to equal width:height if rowHeight property is missing */
  _checkRowHeight() {
    if (!this._rowHeight) {
      this._setTileStyler('1:1');
    }
  }
  /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
  _setTileStyler(rowHeight) {
    if (this._tileStyler) {
      this._tileStyler.reset(this);
    }
    if (rowHeight === MAT_FIT_MODE) {
      this._tileStyler = new FitTileStyler();
    } else if (rowHeight && rowHeight.indexOf(':') > -1) {
      this._tileStyler = new RatioTileStyler(rowHeight);
    } else {
      this._tileStyler = new FixedTileStyler(rowHeight);
    }
  }
  /** Computes and applies the size and position for all children grid tiles. */
  _layoutTiles() {
    if (!this._tileCoordinator) {
      this._tileCoordinator = new TileCoordinator();
    }
    const tracker = this._tileCoordinator;
    const tiles = this._tiles.filter(tile => !tile._gridList || tile._gridList === this);
    const direction = this._dir ? this._dir.value : 'ltr';
    this._tileCoordinator.update(this.cols, tiles);
    this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
    tiles.forEach((tile, index) => {
      const pos = tracker.positions[index];
      this._tileStyler.setStyle(tile, pos.row, pos.col);
    });
    this._setListStyle(this._tileStyler.getComputedHeight());
  }
  /** Sets style on the main grid-list element, given the style name and value. */
  _setListStyle(style) {
    if (style) {
      this._element.nativeElement.style[style[0]] = style[1];
    }
  }
}
_class6 = MatGridList;
_class6.ɵfac = function _class6_Factory(t) {
  return new (t || _class6)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Directionality, 8));
};
_class6.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class6,
  selectors: [["mat-grid-list"]],
  contentQueries: function _class6_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
    }
  },
  hostAttrs: [1, "mat-grid-list"],
  hostVars: 1,
  hostBindings: function _class6_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
    }
  },
  inputs: {
    cols: "cols",
    gutterSize: "gutterSize",
    rowHeight: "rowHeight"
  },
  exportAs: ["matGridList"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_GRID_LIST,
    useExisting: _class6
  }])],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  template: function _class6_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [_c3],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-grid-list',
      exportAs: 'matGridList',
      host: {
        'class': 'mat-grid-list',
        // Ensures that the "cols" input value is reflected in the DOM. This is
        // needed for the grid-list harness.
        '[attr.cols]': 'cols'
      },
      providers: [{
        provide: MAT_GRID_LIST,
        useExisting: MatGridList
      }],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<div>\n  <ng-content></ng-content>\n</div>",
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size)}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size)}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size)}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size)}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    _tiles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatGridTile, {
        descendants: true
      }]
    }],
    cols: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    gutterSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatGridListModule {}
_class7 = MatGridListModule;
_class7.ɵfac = function _class7_Factory(t) {
  return new (t || _class7)();
};
_class7.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class7
});
_class7.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatLineModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatLineModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatLineModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      exports: [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatLineModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
      declarations: [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
    }]
  }], null, null);
})();

// Privately exported for the grid-list harness.
const ɵTileCoordinator = TileCoordinator;

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=dashboard_feature_src_index_ts.js.map