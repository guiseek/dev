"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["account_feature_src_index_ts"],{

/***/ 7043:
/*!**************************************!*\
  !*** ./account/feature/src/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountFeatureModule: () => (/* reexport safe */ _lib_account_feature_module__WEBPACK_IMPORTED_MODULE_0__.AccountFeatureModule)
/* harmony export */ });
/* harmony import */ var _lib_account_feature_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/account-feature.module */ 9185);


/***/ }),

/***/ 7100:
/*!**************************************************************!*\
  !*** ./account/feature/src/lib/account-feature.container.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountFeatureContainer: () => (/* binding */ AccountFeatureContainer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9058);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2541);
var _class;


class AccountFeatureContainer {}
_class = AccountFeatureContainer;
_class.ɵfac = function AccountFeatureContainer_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["dev-account-feature"]],
  decls: 1,
  vars: 0,
  template: function AccountFeatureContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtZmVhdHVyZS5jb250YWluZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoiYWNjb3VudC1mZWF0dXJlLmNvbnRhaW5lci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FjY291bnQvZmVhdHVyZS9zcmMvbGliL2FjY291bnQtZmVhdHVyZS5jb250YWluZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFDQSw0YUFBNGEiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 9185:
/*!***********************************************************!*\
  !*** ./account/feature/src/lib/account-feature.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountFeatureModule: () => (/* binding */ AccountFeatureModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 2541);
/* harmony import */ var _dev_shared_ui_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-ui-forms */ 3791);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 8433);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 1515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 4818);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 4130);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 4313);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 5518);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 6318);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 2112);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 4952);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 500);
/* harmony import */ var _account_feature_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-feature.routes */ 8650);
/* harmony import */ var _account_feature_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-feature.container */ 7100);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ 2338);
/* harmony import */ var _dev_shared_ui_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dev/shared-ui-base */ 5070);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers */ 2262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 9058);
var _class;




















class AccountFeatureModule {}
_class = AccountFeatureModule;
_class.ɵfac = function AccountFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _dev_shared_ui_forms__WEBPACK_IMPORTED_MODULE_0__.UiFormsModule, _dev_shared_ui_base__WEBPACK_IMPORTED_MODULE_4__.UiBaseModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(_account_feature_routes__WEBPACK_IMPORTED_MODULE_1__.accountFeatureRoutes)]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AccountFeatureModule, {
    declarations: [_account_feature_container__WEBPACK_IMPORTED_MODULE_2__.AccountFeatureContainer, _containers__WEBPACK_IMPORTED_MODULE_5__.UsersContainer, _components__WEBPACK_IMPORTED_MODULE_3__.CreateUserDialog, _components__WEBPACK_IMPORTED_MODULE_3__.UpdateUserDialog],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _dev_shared_ui_forms__WEBPACK_IMPORTED_MODULE_0__.UiFormsModule, _dev_shared_ui_base__WEBPACK_IMPORTED_MODULE_4__.UiBaseModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
  });
})();

/***/ }),

/***/ 8650:
/*!***********************************************************!*\
  !*** ./account/feature/src/lib/account-feature.routes.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accountFeatureRoutes: () => (/* binding */ accountFeatureRoutes)
/* harmony export */ });
/* harmony import */ var _account_feature_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-feature.container */ 7100);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers */ 2262);


const accountFeatureRoutes = [{
  path: '',
  component: _account_feature_container__WEBPACK_IMPORTED_MODULE_0__.AccountFeatureContainer,
  children: [{
    path: '',
    component: _containers__WEBPACK_IMPORTED_MODULE_1__.UsersContainer
  }]
}];

/***/ }),

/***/ 8972:
/*!******************************************************************************!*\
  !*** ./account/feature/src/lib/components/create-user/create-user.dialog.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateUserDialog: () => (/* binding */ CreateUserDialog)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms */ 3293);
/* harmony import */ var _dev_shared_ui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dev/shared-ui-base */ 5070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9058);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 7258);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 3660);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 8433);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5518);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4849);
var _class;









class CreateUserDialog extends _dev_shared_ui_base__WEBPACK_IMPORTED_MODULE_1__.FormDialog {
  constructor() {
    super(...arguments);
    this.form = new _forms__WEBPACK_IMPORTED_MODULE_0__.CreateUserForm();
  }
}
_class = CreateUserDialog;
_class.ɵfac = /*@__PURE__*/function () {
  let ɵCreateUserDialog_BaseFactory;
  return function CreateUserDialog_Factory(t) {
    return (ɵCreateUserDialog_BaseFactory || (ɵCreateUserDialog_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["dev-create-user"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 17,
  vars: 4,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 3, "formGroup", "submit"], ["matInput", "", "formControlName", "name"], ["type", "button", "mat-button", "", "mat-dialog-close", ""], ["mat-stroked-button", "", "color", "primary"]],
  template: function CreateUserDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Criar usu\u00E1rio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function CreateUserDialog_Template_form_submit_2_listener() {
        return ctx.form.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field")(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Nome ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Obrigat\u00F3rio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "footer")(13, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Enviar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 2, ctx.message$));
    }
  },
  dependencies: [_angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  gap: 8px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS11c2VyLmRpYWxvZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDTiIsImZpbGUiOiJjcmVhdGUtdXNlci5kaWFsb2cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDM4MHB4O1xuXG4gIGZvcm0ge1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgIGZvb3RlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FjY291bnQvZmVhdHVyZS9zcmMvbGliL2NvbXBvbmVudHMvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuZGlhbG9nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNOO0FBQ0EsNHpCQUE0ekIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzODBweDtcblxuICBmb3JtIHtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICBmb290ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 2338:
/*!*****************************************************!*\
  !*** ./account/feature/src/lib/components/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateUserDialog: () => (/* reexport safe */ _create_user_create_user_dialog__WEBPACK_IMPORTED_MODULE_0__.CreateUserDialog),
/* harmony export */   UpdateUserDialog: () => (/* reexport safe */ _update_user_update_user_dialog__WEBPACK_IMPORTED_MODULE_1__.UpdateUserDialog)
/* harmony export */ });
/* harmony import */ var _create_user_create_user_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-user/create-user.dialog */ 8972);
/* harmony import */ var _update_user_update_user_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-user/update-user.dialog */ 8455);



/***/ }),

/***/ 8455:
/*!******************************************************************************!*\
  !*** ./account/feature/src/lib/components/update-user/update-user.dialog.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateUserDialog: () => (/* binding */ UpdateUserDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5518);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms */ 3293);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9058);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 7258);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 3660);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 8433);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4849);
var _class;










class UpdateUserDialog {
  constructor(data) {
    this.data = data;
    this.message$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    this.form = new _forms__WEBPACK_IMPORTED_MODULE_0__.UpdateUserForm(data);
  }
}
_class = UpdateUserDialog;
_class.ɵfac = function UpdateUserDialog_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["dev-update-user"]],
  decls: 23,
  vars: 4,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 3, "formGroup", "submit"], ["matInput", "", "formControlName", "id", "readonly", "", "tabindex", "-1"], ["matInput", "", "formControlName", "name", "autofocus", ""], ["type", "button", "mat-button", "", "mat-dialog-close", ""], ["mat-stroked-button", "", "color", "primary"]],
  template: function UpdateUserDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Editar user");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function UpdateUserDialog_Template_form_submit_2_listener() {
        return ctx.form.submit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field")(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Id ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Obrigat\u00F3rio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Nome ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Obrigat\u00F3rio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "footer")(19, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Enviar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 2, ctx.message$));
    }
  },
  dependencies: [_angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  gap: 8px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS11c2VyLmRpYWxvZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDTiIsImZpbGUiOiJ1cGRhdGUtdXNlci5kaWFsb2cuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDM4MHB4O1xuXG4gIGZvcm0ge1xuICAgIGdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAgIGZvb3RlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FjY291bnQvZmVhdHVyZS9zcmMvbGliL2NvbXBvbmVudHMvdXBkYXRlLXVzZXIvdXBkYXRlLXVzZXIuZGlhbG9nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNOO0FBQ0EsNHpCQUE0ekIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzODBweDtcblxuICBmb3JtIHtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgICBmb290ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 2262:
/*!*****************************************************!*\
  !*** ./account/feature/src/lib/containers/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersContainer: () => (/* reexport safe */ _users_users_container__WEBPACK_IMPORTED_MODULE_0__.UsersContainer)
/* harmony export */ });
/* harmony import */ var _users_users_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users/users.container */ 882);


/***/ }),

/***/ 882:
/*!*********************************************************************!*\
  !*** ./account/feature/src/lib/containers/users/users.container.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersContainer: () => (/* binding */ UsersContainer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 9058);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 500);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 2112);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 5518);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 4952);
/* harmony import */ var _dev_account_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/account-data-access */ 4233);
/* harmony import */ var _dev_shared_ui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dev/shared-ui-base */ 5070);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ 2338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4849);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 4694);
/* harmony import */ var _shared_ui_forms_src_lib_components_visible_fields_visible_fields_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../shared/ui-forms/src/lib/components/visible-fields/visible-fields.component */ 2658);
/* harmony import */ var _shared_ui_forms_src_lib_components_filter_by_filter_by_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/ui-forms/src/lib/components/filter-by/filter-by.component */ 4189);
/* harmony import */ var _shared_ui_base_src_lib_components_selection_menu_selection_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../shared/ui-base/src/lib/components/selection-menu/selection-menu.component */ 6269);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 4313);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 4818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 8433);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 1515);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 6318);
var _class;






















function UsersContainer_mat_card_content_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card-content")(1, "dev-selection-menu", 18)(2, "mat-menu", null, 19)(4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersContainer_mat_card_content_4_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.removeBulk());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "delete_sweep");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Remover ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " itens");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selection", ctx_r0.selection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.selection.selected.length);
  }
}
function UsersContainer_th_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 21)(1, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UsersContainer_th_7_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event ? ctx_r18.toggleAllRows() : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected());
  }
}
function UsersContainer_td_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 23)(1, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersContainer_td_8_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("change", function UsersContainer_td_8_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const row_r20 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event ? ctx_r22.selection.toggle(row_r20) : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r20));
  }
}
function UsersContainer_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UsersContainer_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r24.id);
  }
}
function UsersContainer_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UsersContainer_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r25.name);
  }
}
function UsersContainer_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Criado em ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UsersContainer_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, row_r26.createdAt));
  }
}
function UsersContainer_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Alterado em ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UsersContainer_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, row_r27.updatedAt));
  }
}
function UsersContainer_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "A\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function UsersContainer_td_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 23)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersContainer_td_23_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const row_r28 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.onUpdate(row_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersContainer_td_23_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const row_r28 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.remove(row_r28.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function UsersContainer_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 27);
  }
}
function UsersContainer_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 28);
  }
}
const _c0 = function () {
  return ["select", "actions"];
};
class UsersContainer extends _dev_shared_ui_base__WEBPACK_IMPORTED_MODULE_1__.FeatureContainer {
  constructor() {
    super(...arguments);
    this.columnList = [{
      text: 'nome',
      value: 'name',
      type: 'text'
    }];
    this.columns = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(['select', 'name', 'createdAt', 'updatedAt']);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_6__.DestroyRef);
    this.facade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_dev_account_data_access__WEBPACK_IMPORTED_MODULE_0__.UserFacade);
    this.dialog = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog);
  }
  ngAfterViewInit() {
    this.initialize();
  }
  openCreateDialog() {
    return this.dialog.open(_components__WEBPACK_IMPORTED_MODULE_2__.CreateUserDialog);
  }
  openUpdateDialog(data) {
    return this.dialog.open(_components__WEBPACK_IMPORTED_MODULE_2__.UpdateUserDialog, {
      data
    });
  }
}
_class = UsersContainer;
_class.ɵfac = /*@__PURE__*/function () {
  let ɵUsersContainer_BaseFactory;
  return function UsersContainer_Factory(t) {
    return (ɵUsersContainer_BaseFactory || (ɵUsersContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](_class)))(t || _class);
  };
}();
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["dev-users"]],
  viewQuery: function UsersContainer_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  decls: 32,
  vars: 15,
  consts: [[1, "row"], [1, "col-12", 3, "fields", "filterByChange"], [1, "col-4", 3, "formControl", "fields", "extra"], [4, "ngIf"], ["mat-table", "", "matSort", "", "matSortActive", "createdAt", "matSortDirection", "desc", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["matColumnDef", "name"], ["matColumnDef", "createdAt"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", 4, "matHeaderCellDef"], ["matColumnDef", "updatedAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["hidePageSize", "", 3, "length", "pageSize"], ["type", "button", "mat-fab", "", 1, "fixed", "b20", "r20", 3, "click"], [3, "selection"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", ""], ["type", "button", "mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function UsersContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card")(1, "header", 0)(2, "dev-filter-by", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("filterByChange", function UsersContainer_Template_dev_filter_by_filterByChange_2_listener($event) {
        return ctx.filter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "dev-visible-fields", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, UsersContainer_mat_card_content_4_Template, 12, 2, "mat-card-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "table", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, UsersContainer_th_7_Template, 2, 2, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, UsersContainer_td_8_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](9, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, UsersContainer_th_10_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, UsersContainer_td_11_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](12, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, UsersContainer_th_13_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, UsersContainer_td_14_Template, 2, 1, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](15, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, UsersContainer_th_16_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, UsersContainer_td_17_Template, 3, 3, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](18, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, UsersContainer_th_19_Template, 2, 0, "th", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, UsersContainer_td_20_Template, 3, 3, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](21, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, UsersContainer_th_22_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, UsersContainer_td_23_Template, 7, 0, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, UsersContainer_tr_24_Template, 1, 0, "tr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, UsersContainer_tr_25_Template, 1, 0, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "mat-paginator", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsersContainer_Template_button_click_29_listener() {
        return ctx.onCreate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      let tmp_8_0;
      let tmp_9_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fields", ctx.columnList);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.columns)("fields", ctx.columnList)("extra", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.columnsHasSelect);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columns.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columns.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 10, ctx.meta$)) == null ? null : tmp_8_0.itemCount)("pageSize", (tmp_9_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 12, ctx.meta$)) == null ? null : tmp_9_0.take);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _shared_ui_forms_src_lib_components_visible_fields_visible_fields_component__WEBPACK_IMPORTED_MODULE_3__.VisibleFieldsComponent, _shared_ui_forms_src_lib_components_filter_by_filter_by_component__WEBPACK_IMPORTED_MODULE_4__.FilterByComponent, _shared_ui_base_src_lib_components_selection_menu_selection_menu_component__WEBPACK_IMPORTED_MODULE_5__.SelectionMenuComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatFabButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatRow, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: ["[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n[_nghost-%COMP%]   header[_ngcontent-%COMP%] {\n  flex: 1;\n  gap: 16px;\n  margin: 16px;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmNvbnRhaW5lci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QUFDSjtBQUVFO0VBQ0UsT0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQUoiLCJmaWxlIjoidXNlcnMuY29udGFpbmVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcblxuICBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgaGVhZGVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGdhcDogMTZweDtcbiAgICBtYXJnaW46IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FjY291bnQvZmVhdHVyZS9zcmMvbGliL2NvbnRhaW5lcnMvdXNlcnMvdXNlcnMuY29udGFpbmVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQUNKO0FBRUU7RUFDRSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUNBLG92QkFBb3ZCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG5cbiAgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgZmxleDogMTtcbiAgICBnYXA6IDE2cHg7XG4gICAgbWFyZ2luOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 3609:
/*!******************************************************!*\
  !*** ./account/feature/src/lib/forms/create-user.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateUserForm: () => (/* binding */ CreateUserForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 500);
/* harmony import */ var _dev_shared_ui_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-ui-forms */ 3791);


class CreateUserForm extends _dev_shared_ui_forms__WEBPACK_IMPORTED_MODULE_0__.TypedFormGroup {
  constructor() {
    super({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
      })
    });
  }
}

/***/ }),

/***/ 3293:
/*!************************************************!*\
  !*** ./account/feature/src/lib/forms/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateUserForm: () => (/* reexport safe */ _create_user__WEBPACK_IMPORTED_MODULE_0__.CreateUserForm),
/* harmony export */   UpdateUserForm: () => (/* reexport safe */ _update_user__WEBPACK_IMPORTED_MODULE_1__.UpdateUserForm)
/* harmony export */ });
/* harmony import */ var _create_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-user */ 3609);
/* harmony import */ var _update_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-user */ 6875);



/***/ }),

/***/ 6875:
/*!******************************************************!*\
  !*** ./account/feature/src/lib/forms/update-user.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateUserForm: () => (/* binding */ UpdateUserForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 500);
/* harmony import */ var _dev_shared_ui_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-ui-forms */ 3791);


class UpdateUserForm extends _dev_shared_ui_forms__WEBPACK_IMPORTED_MODULE_0__.TypedFormGroup {
  constructor(value) {
    super({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
      }),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl()
    });
    this.patchValue(value);
  }
}

/***/ })

}]);
//# sourceMappingURL=account_feature_src_index_ts.js.map