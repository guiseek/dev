"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 4233:
/*!******************************************!*\
  !*** ./account/data-access/src/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserFacade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UserFacade),
/* harmony export */   UserServiceImpl: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UserServiceImpl),
/* harmony export */   UserServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UserServiceMock),
/* harmony export */   provideUser: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideUser),
/* harmony export */   provideUserFacade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideUserFacade),
/* harmony export */   provideUserService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideUserService),
/* harmony export */   provideUserServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideUserServiceMock)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 9156);


/***/ }),

/***/ 4713:
/*!**********************************************************!*\
  !*** ./account/data-access/src/lib/application/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserFacade: () => (/* reexport safe */ _user_facade__WEBPACK_IMPORTED_MODULE_0__.UserFacade)
/* harmony export */ });
/* harmony import */ var _user_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.facade */ 1312);


/***/ }),

/***/ 1312:
/*!****************************************************************!*\
  !*** ./account/data-access/src/lib/application/user.facade.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserFacade: () => (/* binding */ UserFacade)
/* harmony export */ });
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);

class UserFacade extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Facade {}

/***/ }),

/***/ 3358:
/*!*********************************************************!*\
  !*** ./account/data-access/src/lib/dtos/create-user.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3847:
/*!***************************************************!*\
  !*** ./account/data-access/src/lib/dtos/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ 5561);
/* harmony import */ var _create_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user */ 3358);
/* harmony import */ var _update_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-user */ 9254);




/***/ }),

/***/ 9254:
/*!*********************************************************!*\
  !*** ./account/data-access/src/lib/dtos/update-user.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5561:
/*!**************************************************!*\
  !*** ./account/data-access/src/lib/dtos/user.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7144:
/*!*************************************************************!*\
  !*** ./account/data-access/src/lib/infrastructure/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserServiceImpl: () => (/* reexport safe */ _user_service_impl__WEBPACK_IMPORTED_MODULE_0__.UserServiceImpl),
/* harmony export */   UserServiceMock: () => (/* reexport safe */ _user_service_mock__WEBPACK_IMPORTED_MODULE_1__.UserServiceMock)
/* harmony export */ });
/* harmony import */ var _user_service_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service.impl */ 2152);
/* harmony import */ var _user_service_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service.mock */ 8365);



/***/ }),

/***/ 2152:
/*!*************************************************************************!*\
  !*** ./account/data-access/src/lib/infrastructure/user.service.impl.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserServiceImpl: () => (/* binding */ UserServiceImpl)
/* harmony export */ });
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 6231);

class UserServiceImpl extends _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.BaseService {}

/***/ }),

/***/ 8365:
/*!*************************************************************************!*\
  !*** ./account/data-access/src/lib/infrastructure/user.service.mock.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserServiceMock: () => (/* binding */ UserServiceMock)
/* harmony export */ });
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5761);


class UserServiceMock extends _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.MockService {
  create(value) {
    const entity = {
      ...value,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.collection.push(entity);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(entity);
  }
}

/***/ }),

/***/ 8388:
/*!********************************************************!*\
  !*** ./account/data-access/src/lib/providers/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideUser: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_0__.provideUser),
/* harmony export */   provideUserFacade: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_0__.provideUserFacade),
/* harmony export */   provideUserService: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_0__.provideUserService),
/* harmony export */   provideUserServiceMock: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_0__.provideUserServiceMock)
/* harmony export */ });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ 7494);


/***/ }),

/***/ 7494:
/*!*******************************************************!*\
  !*** ./account/data-access/src/lib/providers/user.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideUser: () => (/* binding */ provideUser),
/* harmony export */   provideUserFacade: () => (/* binding */ provideUserFacade),
/* harmony export */   provideUserService: () => (/* binding */ provideUserService),
/* harmony export */   provideUserServiceMock: () => (/* binding */ provideUserServiceMock)
/* harmony export */ });
/* harmony import */ var _dev_account_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/account-domain */ 864);
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../infrastructure */ 7144);
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dev/shared-data-access */ 6231);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application */ 4713);




function provideUserService(api) {
  return {
    provide: _dev_account_domain__WEBPACK_IMPORTED_MODULE_0__.UserService,
    useFactory(http) {
      return new _infrastructure__WEBPACK_IMPORTED_MODULE_1__.UserServiceImpl(http, api);
    },
    deps: [_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_2__.Http]
  };
}
function provideUserServiceMock(collection = []) {
  return (0,_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_2__.provideServiceMock)(_dev_account_domain__WEBPACK_IMPORTED_MODULE_0__.UserService, _infrastructure__WEBPACK_IMPORTED_MODULE_1__.UserServiceMock, collection);
}
function provideUserFacade() {
  return {
    provide: _application__WEBPACK_IMPORTED_MODULE_3__.UserFacade,
    deps: [_dev_account_domain__WEBPACK_IMPORTED_MODULE_0__.UserService]
  };
}
function provideUser(production = false, api = []) {
  const providers = [];
  providers.push(production ? provideUserService(api) : provideUserServiceMock(api));
  providers.push(provideUserFacade());
  return providers;
}

/***/ }),

/***/ 9156:
/*!***********************************************!*\
  !*** ./account/data-access/src/public-api.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserFacade: () => (/* reexport safe */ _lib_application__WEBPACK_IMPORTED_MODULE_1__.UserFacade),
/* harmony export */   UserServiceImpl: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.UserServiceImpl),
/* harmony export */   UserServiceMock: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.UserServiceMock),
/* harmony export */   provideUser: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideUser),
/* harmony export */   provideUserFacade: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideUserFacade),
/* harmony export */   provideUserService: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideUserService),
/* harmony export */   provideUserServiceMock: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideUserServiceMock)
/* harmony export */ });
/* harmony import */ var _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/infrastructure */ 7144);
/* harmony import */ var _lib_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/application */ 4713);
/* harmony import */ var _lib_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/providers */ 8388);
/* harmony import */ var _lib_dtos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dtos */ 3847);





/***/ }),

/***/ 864:
/*!*************************************!*\
  !*** ./account/domain/src/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRepository: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UserRepository),
/* harmony export */   UserService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UserService)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 3780);


/***/ }),

/***/ 1394:
/*!****************************************************!*\
  !*** ./account/domain/src/lib/dtos/create-user.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 6188:
/*!**********************************************!*\
  !*** ./account/domain/src/lib/dtos/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-user */ 1394);
/* harmony import */ var _update_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-user */ 9846);



/***/ }),

/***/ 9846:
/*!****************************************************!*\
  !*** ./account/domain/src/lib/dtos/update-user.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3139:
/*!**************************************************!*\
  !*** ./account/domain/src/lib/entities/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ 630);


/***/ }),

/***/ 630:
/*!*************************************************!*\
  !*** ./account/domain/src/lib/entities/user.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3402:
/*!***********************************************!*\
  !*** ./account/domain/src/lib/ports/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRepository: () => (/* reexport safe */ _user_repository__WEBPACK_IMPORTED_MODULE_0__.UserRepository),
/* harmony export */   UserService: () => (/* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_1__.UserService)
/* harmony export */ });
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.repository */ 7515);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 470);



/***/ }),

/***/ 7515:
/*!*********************************************************!*\
  !*** ./account/domain/src/lib/ports/user.repository.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRepository: () => (/* binding */ UserRepository)
/* harmony export */ });
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);

class UserRepository extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Repository {}

/***/ }),

/***/ 470:
/*!******************************************************!*\
  !*** ./account/domain/src/lib/ports/user.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);

class UserService extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Service {}

/***/ }),

/***/ 3780:
/*!******************************************!*\
  !*** ./account/domain/src/public-api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRepository: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.UserRepository),
/* harmony export */   UserService: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.UserService)
/* harmony export */ });
/* harmony import */ var _lib_dtos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/dtos */ 6188);
/* harmony import */ var _lib_ports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ports */ 3402);
/* harmony import */ var _lib_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/entities */ 3139);




/***/ }),

/***/ 7470:
/*!**************************************!*\
  !*** ./app/src/app/app.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ 4146);
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 6231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9058);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4849);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 2599);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 1569);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 4818);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 4130);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 8433);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 4313);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2541);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader.component */ 2036);
var _class;













function AppComponent_dev_loader_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "dev-loader");
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
class AppComponent {
  constructor() {
    this.loader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.Loader);
    this.media = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.MediaMatcher);
    this.changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    const _mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(_mobileQueryListener);
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["dev-root"]],
  decls: 51,
  vars: 12,
  consts: [[1, "app-container"], ["color", "primary", 1, "app-toolbar"], ["mat-icon-button", "", 3, "click"], ["routerLink", "/"], ["src", "./assets/logo.svg", "alt", "Quero Ser Dev"], [1, "app-app-name"], [1, "spacer"], ["routerLink", "/", "routerLinkActive", "active", "mat-button", "", 3, "routerLinkActiveOptions"], ["routerLink", "/content", "routerLinkActive", "active", "mat-button", ""], ["routerLink", "/account", "routerLinkActive", "active", "mat-button", ""], ["routerLink", "/learning", "routerLinkActive", "active", "mat-button", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["beforeMenu", "matMenu"], ["mat-menu-item", "", "disabled", ""], ["mat-menu-item", "", "routerLink", "/account"], ["svgIcon", "smb-share"], ["mat-menu-item", ""], [1, "app-sidenav-container"], ["fixedTopGap", "56", 3, "mode", "fixedInViewport"], ["snav", ""], [4, "ngIf"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](46);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r1.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Quero Ser Dev");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Conte\u00FAdo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Conta");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Aprender");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11)(19, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "account_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-menu", 12, 13)(23, "button", 14)(24, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "logado como");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " email@guiseek.dev ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Meu conte\u00FAdo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 15)(34, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Configura\u00E7\u00F5es");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 17)(40, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-sidenav-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "mat-sidenav", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-sidenav-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, AppComponent_dev_loader_49_Template, 1, 0, "dev-loader", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("app-is-mobile", ctx.mobileQuery.matches);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 56 : 0, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 9, ctx.loader.active$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkActive, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  overflow: visible;\n  z-index: 10;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-button-base[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 150ms ease-in-out;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-button-base.active[_ngcontent-%COMP%] {\n  color: #3df950;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-button-base[_ngcontent-%COMP%]:not(.mat-mdc-icon-button) {\n  padding: 0 16px;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-button-base.mat-mdc-icon-button[_ngcontent-%COMP%] {\n  width: 64px;\n}\n[_nghost-%COMP%]   .app-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n[_nghost-%COMP%]   .app-is-mobile[_ngcontent-%COMP%]   .app-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n\n  z-index: 2;\n}\n[_nghost-%COMP%]   h1.app-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n[_nghost-%COMP%]   .app-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .app-is-mobile[_ngcontent-%COMP%]   .app-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFGRjtBQUtJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBSE47QUFLSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0FBSE47QUFLTTtFQUNFLGNBQUE7QUFIUjtBQU1NO0VBQ0UsZUFBQTtBQUpSO0FBTU07RUFDRSxXQUFBO0FBSlI7QUFTRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQVBKO0FBVUU7RUFDRSxlQUFBO0VBQ0EsOEVBQUE7RUFDQSxVQUFBO0FBUko7QUFXRTtFQUNFLGdCQUFBO0FBVEo7QUFZRTtFQUNFLE9BQUE7QUFWSjtBQWFFO0VBQ0UsY0FBQTtBQVhKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4uL3Njc3MvcGFsZXR0ZScgYXMgZ3VpO1xuQHVzZSAnc2FzczptYXAnIGFzIG1hcDtcblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuICAgIC5tYXQtbWRjLWJ1dHRvbi1iYXNlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAxNTBtcyBlYXNlLWluLW91dDtcblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBjb2xvcjogbWFwLmdldChndWkuJGFjY2VudC1wYWxldHRlLCA1MDApO1xuICAgICAgfVxuXG4gICAgICAmOm5vdCgubWF0LW1kYy1pY29uLWJ1dHRvbikge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICB9XG4gICAgICAmLm1hdC1tZGMtaWNvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYXBwLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICAuYXBwLWlzLW1vYmlsZSAuYXBwLXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIGgxLmFwcC1hcHAtbmFtZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuXG4gIC5hcHAtc2lkZW5hdi1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAuYXBwLWlzLW1vYmlsZSAuYXBwLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxIDAgYXV0bztcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFGRjtBQUtJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBSE47QUFLSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0FBSE47QUFLTTtFQUNFLGNBQUE7QUFIUjtBQU1NO0VBQ0UsZUFBQTtBQUpSO0FBTU07RUFDRSxXQUFBO0FBSlI7QUFTRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQVBKO0FBVUU7RUFDRSxlQUFBO0VBQ0EsOEVBQUE7RUFDQSxVQUFBO0FBUko7QUFXRTtFQUNFLGdCQUFBO0FBVEo7QUFZRTtFQUNFLE9BQUE7QUFWSjtBQWFFO0VBQ0UsY0FBQTtBQVhKO0FBQ0Esd3FFQUF3cUUiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICcuLi9zY3NzL3BhbGV0dGUnIGFzIGd1aTtcbkB1c2UgJ3Nhc3M6bWFwJyBhcyBtYXA7XG5cbjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIC5tYXQtdG9vbGJhciB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cbiAgICAubWF0LW1kYy1idXR0b24tYmFzZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMTUwbXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6IG1hcC5nZXQoZ3VpLiRhY2NlbnQtcGFsZXR0ZSwgNTAwKTtcbiAgICAgIH1cblxuICAgICAgJjpub3QoLm1hdC1tZGMtaWNvbi1idXR0b24pIHtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgfVxuICAgICAgJi5tYXQtbWRjLWljb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFwcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmFwcC1pcy1tb2JpbGUgLmFwcC10b29sYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xuICAgIHotaW5kZXg6IDI7XG4gIH1cblxuICBoMS5hcHAtYXBwLW5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cblxuICAuYXBwLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLmFwcC1pcy1tb2JpbGUgLmFwcC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 9634:
/*!****************************************!*\
  !*** ./app/src/app/app.interceptor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppInterceptor: () => (/* binding */ AppInterceptor)
/* harmony export */ });
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9058);
var _class;





class AppInterceptor {
  constructor(loader) {
    this.loader = loader;
  }
  intercept(request, next) {
    this.loader.activate();
    return next.handle(request).pipe(
    // delay(300),
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => this.loader.deActivate()));
  }
}
_class = AppInterceptor;
_class.ɵfac = function AppInterceptor_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.Loader));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});

/***/ }),

/***/ 8974:
/*!***********************************!*\
  !*** ./app/src/app/app.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 6290);
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 6231);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 2454);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 9058);
/* harmony import */ var _angular_common_locales_extra_br__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/extra/br */ 7042);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/pt */ 6307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 2541);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ 1569);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 4818);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 2599);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ 4130);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 8433);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 4313);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ 4146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 7202);
/* harmony import */ var _dev_account_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dev/account-data-access */ 4233);
/* harmony import */ var _dev_learning_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dev/learning-data-access */ 3144);
/* harmony import */ var _dev_content_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dev/content-data-access */ 368);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader/loader.component */ 2036);
/* harmony import */ var _app_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.interceptor */ 9634);
/* harmony import */ var _app_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.providers */ 1390);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ 7470);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes */ 3565);
/* harmony import */ var _envs_env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../envs/env */ 934);
var _class;



























(0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.registerLocaleData)(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_11__["default"], 'pt-BR', _angular_common_locales_extra_br__WEBPACK_IMPORTED_MODULE_12__["default"]);
class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  providers: [(0,_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.provideHttp)(_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient), (0,_dev_account_data_access__WEBPACK_IMPORTED_MODULE_1__.provideUser)(_envs_env__WEBPACK_IMPORTED_MODULE_9__.env.production, _envs_env__WEBPACK_IMPORTED_MODULE_9__.env.api.account), (0,_dev_learning_data_access__WEBPACK_IMPORTED_MODULE_2__.provideRail)(_envs_env__WEBPACK_IMPORTED_MODULE_9__.env.production, _envs_env__WEBPACK_IMPORTED_MODULE_9__.env.api.learning), (0,_dev_content_data_access__WEBPACK_IMPORTED_MODULE_3__.provideContent)(_envs_env__WEBPACK_IMPORTED_MODULE_9__.env.production, _envs_env__WEBPACK_IMPORTED_MODULE_9__.env.api.content), (0,_app_providers__WEBPACK_IMPORTED_MODULE_6__.provideAppIcons)(), (0,_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.provideLoader)(), {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_13__.LOCALE_ID,
    useValue: 'pt-BR'
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
    useClass: _app_interceptor__WEBPACK_IMPORTED_MODULE_5__.AppInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__.LayoutModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_8__.appRoutes, {
    useHash: true,
    initialNavigation: 'enabledBlocking'
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__.LayoutModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule]
  });
})();

/***/ }),

/***/ 1390:
/*!**************************************!*\
  !*** ./app/src/app/app.providers.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideAppIcons: () => (/* binding */ provideAppIcons)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9058);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 4313);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 2454);



const provideAppIcons = () => {
  return {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_INITIALIZER,
    useFactory(registry, sanitizer) {
      const SMB_SHARE = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M485-440h163q26 0 44-18t18-44q0-26-18-44.5T648-565h-2q-5-32-29-53.5T560-640q-26 0-47 13.5T481-590q-30 2-50.5 23.5T410-515q0 30 21.5 52.5T485-440ZM120-120q-33 0-56.5-23.5T40-200v-520h80v520h680v80H120Zm160-160q-33 0-56.5-23.5T200-360v-440q0-33 23.5-56.5T280-880h200l80 80h280q33 0 56.5 23.5T920-720v360q0 33-23.5 56.5T840-280H280Zm0-80h560v-360H527l-80-80H280v440Zm0 0v-440 440Z"/>
        </svg>`;
      registry.addSvgIconLiteral('smb-share', sanitizer.bypassSecurityTrustHtml(SMB_SHARE));
    },
    deps: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconRegistry, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer]
  };
};

/***/ }),

/***/ 3565:
/*!***********************************!*\
  !*** ./app/src/app/app.routes.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
const appRoutes = [{
  path: 'learning',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-shared_ui-base_src_index_ts-shared_ui-forms_src_index_ts-node_modules_angular_materia-474a44"), __webpack_require__.e("learning_feature_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @dev/learning-feature */ 4321)).then(m => m.LearningFeatureModule)
}, {
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("dashboard_feature_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @dev/dashboard-feature */ 7293)).then(m => m.DashboardFeatureModule)
}, {
  path: 'account',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-shared_ui-base_src_index_ts-shared_ui-forms_src_index_ts-node_modules_angular_materia-474a44"), __webpack_require__.e("account_feature_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @dev/account-feature */ 7043)).then(m => m.AccountFeatureModule)
}, {
  path: 'content',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_card_mjs"), __webpack_require__.e("default-shared_ui-base_src_index_ts-shared_ui-forms_src_index_ts-node_modules_angular_materia-474a44"), __webpack_require__.e("content_feature_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @dev/content-feature */ 5877)).then(m => m.ContentFeatureModule)
}];

/***/ }),

/***/ 2036:
/*!************************************************!*\
  !*** ./app/src/app/loader/loader.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9058);
var _class;

class LoaderComponent {}
_class = LoaderComponent;
_class.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["dev-loader"]],
  decls: 1,
  vars: 0,
  consts: [[1, "sky"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    }
  },
  styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.3137254902);\n}\n[_nghost-%COMP%]   .sky[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  border-radius: 100px 100px 0 0;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0)) 70% 30%, linear-gradient(90deg, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0)) 72% 32%, linear-gradient(0deg, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0)) 26% 42%, linear-gradient(90deg, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0)) 23% 44%, linear-gradient(0deg, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0)) 51% 54%, linear-gradient(90deg, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0)) 51% 53% #020308;\n  background-size: 2px 10px, 10px 2px;\n  background-repeat: no-repeat;\n  position: relative;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .sky[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .sky[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  inset: 100% auto auto 20px;\n  height: 3px;\n  width: 20px;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0), #fff);\n  transform-origin: right;\n  transform: rotate(-20deg) translate(-20px);\n  animation: _ngcontent-%COMP%_sky 1s infinite;\n}\n[_nghost-%COMP%]   .sky[_ngcontent-%COMP%]:after {\n  inset: 100% auto auto -5px;\n}\n\n@keyframes _ngcontent-%COMP%_sky {\n  100% {\n    transform: rotate(-20deg) translate(120px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtREFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsMmNBQUE7RUFNQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUpKO0FBT0U7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBEQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtFQUNBLDBCQUFBO0FBTEo7QUFRRTtFQUNFLDBCQUFBO0FBTko7O0FBVUE7RUFDRTtJQUNFLDBDQUFBO0VBUEY7QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjUwO1xuXG4gIC5za3kge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweCAxMDBweCAwIDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwLCAjZmZmLCAjMDAwMCkgNzAlIDMwJSxcbiAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMDAsICNmZmYsICMwMDAwKSA3MiUgMzIlLFxuICAgICAgbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwLCAjZmZmLCAjMDAwMCkgMjYlIDQyJSxcbiAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMDAsICNmZmYsICMwMDAwKSAyMyUgNDQlLFxuICAgICAgbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwLCAjZmZmLCAjMDAwMCkgNTElIDU0JSxcbiAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMDAsICNmZmYsICMwMDAwKSA1MSUgNTMlICMwMjAzMDg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAycHggMTBweCwgMTBweCAycHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5za3k6YmVmb3JlLFxuICAuc2t5OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDEwMCUgYXV0byBhdXRvIDIwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwMCwgI2ZmZik7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKSB0cmFuc2xhdGUoLTIwcHgpO1xuICAgIGFuaW1hdGlvbjogc2t5IDFzIGluZmluaXRlO1xuICB9XG5cbiAgLnNreTphZnRlciB7XG4gICAgaW5zZXQ6IDEwMCUgYXV0byBhdXRvIC01cHg7XG4gICAgLy8gYW5pbWF0aW9uLWRlbGF5OiAwLjc1cztcbiAgfVxufVxuQGtleWZyYW1lcyBza3kge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpIHRyYW5zbGF0ZSgxMjBweCk7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcC9zcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbURBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDJjQUFBO0VBTUEsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU9FOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwREFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtBQUxKO0FBUUU7RUFDRSwwQkFBQTtBQU5KOztBQVVBO0VBQ0U7SUFDRSwwQ0FBQTtFQVBGO0FBQ0Y7QUFDQSw0MEVBQTQwRSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTA7XG5cbiAgLnNreSB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4IDEwMHB4IDAgMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMDAsICNmZmYsICMwMDAwKSA3MCUgMzAlLFxuICAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwMCwgI2ZmZiwgIzAwMDApIDcyJSAzMiUsXG4gICAgICBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMDAsICNmZmYsICMwMDAwKSAyNiUgNDIlLFxuICAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwMCwgI2ZmZiwgIzAwMDApIDIzJSA0NCUsXG4gICAgICBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzAwMDAsICNmZmYsICMwMDAwKSA1MSUgNTQlLFxuICAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwMCwgI2ZmZiwgIzAwMDApIDUxJSA1MyUgIzAyMDMwODtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDJweCAxMHB4LCAxMHB4IDJweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnNreTpiZWZvcmUsXG4gIC5za3k6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMTAwJSBhdXRvIGF1dG8gMjBweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDAwLCAjZmZmKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpIHRyYW5zbGF0ZSgtMjBweCk7XG4gICAgYW5pbWF0aW9uOiBza3kgMXMgaW5maW5pdGU7XG4gIH1cblxuICAuc2t5OmFmdGVyIHtcbiAgICBpbnNldDogMTAwJSBhdXRvIGF1dG8gLTVweDtcbiAgICAvLyBhbmltYXRpb24tZGVsYXk6IDAuNzVzO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNreSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZykgdHJhbnNsYXRlKDEyMHB4KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 934:
/*!*****************************!*\
  !*** ./app/src/envs/env.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   env: () => (/* binding */ env)
/* harmony export */ });
const env = {
  production: false,
  api: {
    content: [],
    account: [],
    learning: []
  }
};

/***/ }),

/***/ 3872:
/*!*************************!*\
  !*** ./app/src/main.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2454);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8974);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 368:
/*!******************************************!*\
  !*** ./content/data-access/src/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentFacade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.ContentFacade),
/* harmony export */   ContentServiceImpl: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.ContentServiceImpl),
/* harmony export */   ContentServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.ContentServiceMock),
/* harmony export */   provideContent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideContent),
/* harmony export */   provideContentFacade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideContentFacade),
/* harmony export */   provideContentService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideContentService),
/* harmony export */   provideContentServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideContentServiceMock)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 2079);


/***/ }),

/***/ 3164:
/*!*******************************************************************!*\
  !*** ./content/data-access/src/lib/application/content.facade.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentFacade: () => (/* binding */ ContentFacade)
/* harmony export */ });
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);

class ContentFacade extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Facade {}

/***/ }),

/***/ 2702:
/*!**********************************************************!*\
  !*** ./content/data-access/src/lib/application/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentFacade: () => (/* reexport safe */ _content_facade__WEBPACK_IMPORTED_MODULE_0__.ContentFacade)
/* harmony export */ });
/* harmony import */ var _content_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.facade */ 3164);


/***/ }),

/***/ 4471:
/*!*****************************************************!*\
  !*** ./content/data-access/src/lib/dtos/content.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4403:
/*!************************************************************!*\
  !*** ./content/data-access/src/lib/dtos/create-content.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8009:
/*!***************************************************!*\
  !*** ./content/data-access/src/lib/dtos/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ 4471);
/* harmony import */ var _create_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-content */ 4403);
/* harmony import */ var _update_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-content */ 2794);




/***/ }),

/***/ 2794:
/*!************************************************************!*\
  !*** ./content/data-access/src/lib/dtos/update-content.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5770:
/*!****************************************************************************!*\
  !*** ./content/data-access/src/lib/infrastructure/content.service.impl.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentServiceImpl: () => (/* binding */ ContentServiceImpl)
/* harmony export */ });
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 6231);

class ContentServiceImpl extends _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.BaseService {}

/***/ }),

/***/ 8547:
/*!****************************************************************************!*\
  !*** ./content/data-access/src/lib/infrastructure/content.service.mock.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentServiceMock: () => (/* binding */ ContentServiceMock)
/* harmony export */ });
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5761);


class ContentServiceMock extends _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.MockService {
  create(value) {
    const entity = {
      ...value,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.collection.push(entity);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(entity);
  }
}

/***/ }),

/***/ 5521:
/*!*************************************************************!*\
  !*** ./content/data-access/src/lib/infrastructure/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentServiceImpl: () => (/* reexport safe */ _content_service_impl__WEBPACK_IMPORTED_MODULE_0__.ContentServiceImpl),
/* harmony export */   ContentServiceMock: () => (/* reexport safe */ _content_service_mock__WEBPACK_IMPORTED_MODULE_1__.ContentServiceMock)
/* harmony export */ });
/* harmony import */ var _content_service_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.service.impl */ 5770);
/* harmony import */ var _content_service_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.service.mock */ 8547);



/***/ }),

/***/ 8279:
/*!**********************************************************!*\
  !*** ./content/data-access/src/lib/providers/content.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideContent: () => (/* binding */ provideContent),
/* harmony export */   provideContentFacade: () => (/* binding */ provideContentFacade),
/* harmony export */   provideContentService: () => (/* binding */ provideContentService),
/* harmony export */   provideContentServiceMock: () => (/* binding */ provideContentServiceMock)
/* harmony export */ });
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../infrastructure */ 5521);
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dev/shared-data-access */ 6231);
/* harmony import */ var _dev_content_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dev/content-domain */ 4648);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application */ 2702);




function provideContentService(api) {
  return {
    provide: _dev_content_domain__WEBPACK_IMPORTED_MODULE_2__.ContentService,
    useFactory(http) {
      return new _infrastructure__WEBPACK_IMPORTED_MODULE_0__.ContentServiceImpl(http, api);
    },
    deps: [_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.Http]
  };
}
function provideContentServiceMock(collection = []) {
  return (0,_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.provideServiceMock)(_dev_content_domain__WEBPACK_IMPORTED_MODULE_2__.ContentService, _infrastructure__WEBPACK_IMPORTED_MODULE_0__.ContentServiceMock, collection);
}
function provideContentFacade() {
  return {
    provide: _application__WEBPACK_IMPORTED_MODULE_3__.ContentFacade,
    deps: [_dev_content_domain__WEBPACK_IMPORTED_MODULE_2__.ContentService]
  };
}
function provideContent(production = false, api = []) {
  const providers = [];
  providers.push(production ? provideContentService(api) : provideContentServiceMock(api));
  providers.push(provideContentFacade());
  return providers;
}

/***/ }),

/***/ 6955:
/*!********************************************************!*\
  !*** ./content/data-access/src/lib/providers/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideContent: () => (/* reexport safe */ _content__WEBPACK_IMPORTED_MODULE_0__.provideContent),
/* harmony export */   provideContentFacade: () => (/* reexport safe */ _content__WEBPACK_IMPORTED_MODULE_0__.provideContentFacade),
/* harmony export */   provideContentService: () => (/* reexport safe */ _content__WEBPACK_IMPORTED_MODULE_0__.provideContentService),
/* harmony export */   provideContentServiceMock: () => (/* reexport safe */ _content__WEBPACK_IMPORTED_MODULE_0__.provideContentServiceMock)
/* harmony export */ });
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ 8279);


/***/ }),

/***/ 2079:
/*!***********************************************!*\
  !*** ./content/data-access/src/public-api.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentFacade: () => (/* reexport safe */ _lib_application__WEBPACK_IMPORTED_MODULE_1__.ContentFacade),
/* harmony export */   ContentServiceImpl: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.ContentServiceImpl),
/* harmony export */   ContentServiceMock: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.ContentServiceMock),
/* harmony export */   provideContent: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideContent),
/* harmony export */   provideContentFacade: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideContentFacade),
/* harmony export */   provideContentService: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideContentService),
/* harmony export */   provideContentServiceMock: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideContentServiceMock)
/* harmony export */ });
/* harmony import */ var _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/infrastructure */ 5521);
/* harmony import */ var _lib_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/application */ 2702);
/* harmony import */ var _lib_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/providers */ 6955);
/* harmony import */ var _lib_dtos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dtos */ 8009);





/***/ }),

/***/ 4648:
/*!*************************************!*\
  !*** ./content/domain/src/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentRepository: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.ContentRepository),
/* harmony export */   ContentService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.ContentService)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 9221);


/***/ }),

/***/ 4275:
/*!*******************************************************!*\
  !*** ./content/domain/src/lib/dtos/create-content.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3824:
/*!**********************************************!*\
  !*** ./content/domain/src/lib/dtos/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-content */ 4275);
/* harmony import */ var _update_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-content */ 6359);



/***/ }),

/***/ 6359:
/*!*******************************************************!*\
  !*** ./content/domain/src/lib/dtos/update-content.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7653:
/*!****************************************************!*\
  !*** ./content/domain/src/lib/entities/content.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 789:
/*!**************************************************!*\
  !*** ./content/domain/src/lib/entities/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ 7653);


/***/ }),

/***/ 5049:
/*!************************************************************!*\
  !*** ./content/domain/src/lib/ports/content.repository.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentRepository: () => (/* binding */ ContentRepository)
/* harmony export */ });
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);

class ContentRepository extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Repository {}

/***/ }),

/***/ 5119:
/*!*********************************************************!*\
  !*** ./content/domain/src/lib/ports/content.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentService: () => (/* binding */ ContentService)
/* harmony export */ });
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);

class ContentService extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Service {}

/***/ }),

/***/ 4173:
/*!***********************************************!*\
  !*** ./content/domain/src/lib/ports/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentRepository: () => (/* reexport safe */ _content_repository__WEBPACK_IMPORTED_MODULE_0__.ContentRepository),
/* harmony export */   ContentService: () => (/* reexport safe */ _content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService)
/* harmony export */ });
/* harmony import */ var _content_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.repository */ 5049);
/* harmony import */ var _content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.service */ 5119);



/***/ }),

/***/ 9221:
/*!******************************************!*\
  !*** ./content/domain/src/public-api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentRepository: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.ContentRepository),
/* harmony export */   ContentService: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.ContentService)
/* harmony export */ });
/* harmony import */ var _lib_dtos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/dtos */ 3824);
/* harmony import */ var _lib_ports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ports */ 4173);
/* harmony import */ var _lib_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/entities */ 789);




/***/ }),

/***/ 3144:
/*!*******************************************!*\
  !*** ./learning/data-access/src/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailFacade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.RailFacade),
/* harmony export */   RailServiceImpl: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.RailServiceImpl),
/* harmony export */   RailServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.RailServiceMock),
/* harmony export */   provideRail: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideRail),
/* harmony export */   provideRailFacade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideRailFacade),
/* harmony export */   provideRailService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideRailService),
/* harmony export */   provideRailServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideRailServiceMock)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 9029);


/***/ }),

/***/ 7854:
/*!***********************************************************!*\
  !*** ./learning/data-access/src/lib/application/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailFacade: () => (/* reexport safe */ _rail_facade__WEBPACK_IMPORTED_MODULE_0__.RailFacade)
/* harmony export */ });
/* harmony import */ var _rail_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rail.facade */ 4476);


/***/ }),

/***/ 4476:
/*!*****************************************************************!*\
  !*** ./learning/data-access/src/lib/application/rail.facade.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailFacade: () => (/* binding */ RailFacade)
/* harmony export */ });
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);

class RailFacade extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Facade {}

/***/ }),

/***/ 3625:
/*!**********************************************************!*\
  !*** ./learning/data-access/src/lib/dtos/create-rail.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1956:
/*!****************************************************!*\
  !*** ./learning/data-access/src/lib/dtos/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_rail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-rail */ 3625);
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rail */ 8366);
/* harmony import */ var _update_rail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-rail */ 4458);




/***/ }),

/***/ 8366:
/*!***************************************************!*\
  !*** ./learning/data-access/src/lib/dtos/rail.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4458:
/*!**********************************************************!*\
  !*** ./learning/data-access/src/lib/dtos/update-rail.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8631:
/*!**************************************************************!*\
  !*** ./learning/data-access/src/lib/infrastructure/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailServiceImpl: () => (/* reexport safe */ _rail_service_impl__WEBPACK_IMPORTED_MODULE_0__.RailServiceImpl),
/* harmony export */   RailServiceMock: () => (/* reexport safe */ _rail_service_mock__WEBPACK_IMPORTED_MODULE_1__.RailServiceMock)
/* harmony export */ });
/* harmony import */ var _rail_service_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rail.service.impl */ 7579);
/* harmony import */ var _rail_service_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rail.service.mock */ 2431);



/***/ }),

/***/ 7579:
/*!**************************************************************************!*\
  !*** ./learning/data-access/src/lib/infrastructure/rail.service.impl.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailServiceImpl: () => (/* binding */ RailServiceImpl)
/* harmony export */ });
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 6231);

class RailServiceImpl extends _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.BaseService {}

/***/ }),

/***/ 2431:
/*!**************************************************************************!*\
  !*** ./learning/data-access/src/lib/infrastructure/rail.service.mock.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailServiceMock: () => (/* binding */ RailServiceMock)
/* harmony export */ });
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5761);


class RailServiceMock extends _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.MockService {
  create(value) {
    const entity = {
      ...value,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.collection.push(entity);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(entity);
  }
}

/***/ }),

/***/ 389:
/*!*********************************************************!*\
  !*** ./learning/data-access/src/lib/providers/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideRail: () => (/* reexport safe */ _rail__WEBPACK_IMPORTED_MODULE_0__.provideRail),
/* harmony export */   provideRailFacade: () => (/* reexport safe */ _rail__WEBPACK_IMPORTED_MODULE_0__.provideRailFacade),
/* harmony export */   provideRailService: () => (/* reexport safe */ _rail__WEBPACK_IMPORTED_MODULE_0__.provideRailService),
/* harmony export */   provideRailServiceMock: () => (/* reexport safe */ _rail__WEBPACK_IMPORTED_MODULE_0__.provideRailServiceMock)
/* harmony export */ });
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rail */ 409);


/***/ }),

/***/ 409:
/*!********************************************************!*\
  !*** ./learning/data-access/src/lib/providers/rail.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideRail: () => (/* binding */ provideRail),
/* harmony export */   provideRailFacade: () => (/* binding */ provideRailFacade),
/* harmony export */   provideRailService: () => (/* binding */ provideRailService),
/* harmony export */   provideRailServiceMock: () => (/* binding */ provideRailServiceMock)
/* harmony export */ });
/* harmony import */ var _dev_learning_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/learning-domain */ 6884);
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../infrastructure */ 8631);
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dev/shared-data-access */ 6231);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application */ 7854);




function provideRailService(api) {
  return {
    provide: _dev_learning_domain__WEBPACK_IMPORTED_MODULE_0__.RailService,
    useFactory(http) {
      return new _infrastructure__WEBPACK_IMPORTED_MODULE_1__.RailServiceImpl(http, api);
    },
    deps: [_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_2__.Http]
  };
}
function provideRailServiceMock(collection = []) {
  return (0,_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_2__.provideServiceMock)(_dev_learning_domain__WEBPACK_IMPORTED_MODULE_0__.RailService, _infrastructure__WEBPACK_IMPORTED_MODULE_1__.RailServiceMock, collection);
}
function provideRailFacade() {
  return {
    provide: _application__WEBPACK_IMPORTED_MODULE_3__.RailFacade,
    deps: [_dev_learning_domain__WEBPACK_IMPORTED_MODULE_0__.RailService]
  };
}
function provideRail(production = false, api = []) {
  const providers = [];
  providers.push(production ? provideRailService(api) : provideRailServiceMock(api));
  providers.push(provideRailFacade());
  return providers;
}

/***/ }),

/***/ 9029:
/*!************************************************!*\
  !*** ./learning/data-access/src/public-api.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailFacade: () => (/* reexport safe */ _lib_application__WEBPACK_IMPORTED_MODULE_1__.RailFacade),
/* harmony export */   RailServiceImpl: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.RailServiceImpl),
/* harmony export */   RailServiceMock: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.RailServiceMock),
/* harmony export */   provideRail: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideRail),
/* harmony export */   provideRailFacade: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideRailFacade),
/* harmony export */   provideRailService: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideRailService),
/* harmony export */   provideRailServiceMock: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideRailServiceMock)
/* harmony export */ });
/* harmony import */ var _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/infrastructure */ 8631);
/* harmony import */ var _lib_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/application */ 7854);
/* harmony import */ var _lib_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/providers */ 389);
/* harmony import */ var _lib_dtos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dtos */ 1956);





/***/ }),

/***/ 6884:
/*!**************************************!*\
  !*** ./learning/domain/src/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailRepository: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.RailRepository),
/* harmony export */   RailService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.RailService)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 7697);


/***/ }),

/***/ 5771:
/*!*****************************************************!*\
  !*** ./learning/domain/src/lib/dtos/create-rail.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5947:
/*!***********************************************!*\
  !*** ./learning/domain/src/lib/dtos/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_rail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-rail */ 5771);
/* harmony import */ var _update_rail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-rail */ 8693);



/***/ }),

/***/ 8693:
/*!*****************************************************!*\
  !*** ./learning/domain/src/lib/dtos/update-rail.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 6166:
/*!***************************************************!*\
  !*** ./learning/domain/src/lib/entities/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rail */ 5916);


/***/ }),

/***/ 5916:
/*!**************************************************!*\
  !*** ./learning/domain/src/lib/entities/rail.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4928:
/*!************************************************!*\
  !*** ./learning/domain/src/lib/ports/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailRepository: () => (/* reexport safe */ _rail_repository__WEBPACK_IMPORTED_MODULE_0__.RailRepository),
/* harmony export */   RailService: () => (/* reexport safe */ _rail_service__WEBPACK_IMPORTED_MODULE_1__.RailService)
/* harmony export */ });
/* harmony import */ var _rail_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rail.repository */ 1831);
/* harmony import */ var _rail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rail.service */ 7170);



/***/ }),

/***/ 1831:
/*!**********************************************************!*\
  !*** ./learning/domain/src/lib/ports/rail.repository.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailRepository: () => (/* binding */ RailRepository)
/* harmony export */ });
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);

class RailRepository extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Repository {}

/***/ }),

/***/ 7170:
/*!*******************************************************!*\
  !*** ./learning/domain/src/lib/ports/rail.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailService: () => (/* binding */ RailService)
/* harmony export */ });
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);

class RailService extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Service {}

/***/ }),

/***/ 7697:
/*!*******************************************!*\
  !*** ./learning/domain/src/public-api.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RailRepository: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.RailRepository),
/* harmony export */   RailService: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.RailService)
/* harmony export */ });
/* harmony import */ var _lib_dtos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/dtos */ 5947);
/* harmony import */ var _lib_ports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ports */ 4928);
/* harmony import */ var _lib_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/entities */ 6166);




/***/ }),

/***/ 6231:
/*!*****************************************!*\
  !*** ./shared/data-access/src/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.BaseService),
/* harmony export */   DBClosedError: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.DBClosedError),
/* harmony export */   Http: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Http),
/* harmony export */   InMemoryService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.InMemoryService),
/* harmony export */   IndexedDbService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.IndexedDbService),
/* harmony export */   Loader: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Loader),
/* harmony export */   MockService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.MockService),
/* harmony export */   Store: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Store),
/* harmony export */   provideHttp: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideHttp),
/* harmony export */   provideLoader: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideLoader),
/* harmony export */   provideServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideServiceMock)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 1226);


/***/ }),

/***/ 5295:
/*!*********************************************************!*\
  !*** ./shared/data-access/src/lib/application/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loader: () => (/* reexport safe */ _loader__WEBPACK_IMPORTED_MODULE_0__.Loader),
/* harmony export */   Store: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.Store)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ 2579);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ 5176);



/***/ }),

/***/ 2579:
/*!**********************************************************!*\
  !*** ./shared/data-access/src/lib/application/loader.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loader: () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ 5176);

class Loader extends _store__WEBPACK_IMPORTED_MODULE_0__.Store {
  constructor() {
    super({
      active: false
    });
    this.active$ = this.select(state => state.active);
  }
  activate() {
    this.setState({
      active: true
    });
  }
  deActivate() {
    this.setState({
      active: false
    });
  }
}

/***/ }),

/***/ 5176:
/*!*********************************************************!*\
  !*** ./shared/data-access/src/lib/application/store.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Store: () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ 6331);
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js */ 119);
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ 3509);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3846);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2631);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1300);




var _state = /*#__PURE__*/new WeakMap();
class Store {
  get state() {
    return (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _state).getValue();
  }
  constructor(initialState) {
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _state, {
      writable: true,
      value: void 0
    });
    const state = Object.freeze(initialState);
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _state, new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(state));
  }
  select(mapFn) {
    return (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _state).asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(state => mapFn(state)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
  }
  setState(newState) {
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _state).next({
      ...this.state,
      ...newState
    });
  }
}

/***/ }),

/***/ 6412:
/*!***************************************************!*\
  !*** ./shared/data-access/src/lib/data-access.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideHttp: () => (/* binding */ provideHttp),
/* harmony export */   provideLoader: () => (/* binding */ provideLoader)
/* harmony export */ });
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ 5295);
/* harmony import */ var _ports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ports */ 2359);


function provideHttp(http) {
  return {
    provide: _ports__WEBPACK_IMPORTED_MODULE_1__.Http,
    useClass: http
  };
}
function provideLoader() {
  return {
    provide: _application__WEBPACK_IMPORTED_MODULE_0__.Loader
  };
}

/***/ }),

/***/ 7987:
/*!*******************************************************************!*\
  !*** ./shared/data-access/src/lib/infrastructure/base-service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseService: () => (/* binding */ BaseService)
/* harmony export */ });
class BaseService {
  constructor(http, url) {
    this.http = http;
    this.url = url;
  }
  find({
    options
  } = {
    options: {}
  }) {
    return this.http.get(this.url, {
      params: options
    });
  }
  count(where = {}) {
    return this.http.post(`${this.url}/count`, where);
  }
  filter({
    where = {},
    options
  } = {
    where: {},
    options: {}
  }) {
    return this.http.post(`${this.url}/filter`, where, {
      params: options
    });
  }
  create(value) {
    return this.http.post(this.url, value);
  }
  update(value) {
    return this.http.put(this.url, value);
  }
  remove(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  removeBulk(...ids) {
    return this.http.delete(`${this.url}/bulk`, {
      params: {
        ids
      }
    });
  }
  findOne(value) {
    return this.http.delete(`${this.url}/${value}`);
  }
}

/***/ }),

/***/ 7408:
/*!************************************************************************!*\
  !*** ./shared/data-access/src/lib/infrastructure/in-memory.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InMemoryService: () => (/* binding */ InMemoryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5761);

class InMemoryService {
  createDb(reqInfo, ...items) {
    console.log(reqInfo);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)([...items]);
  }
  genId() {
    return crypto.randomUUID();
  }
}

/***/ }),

/***/ 7499:
/*!************************************************************!*\
  !*** ./shared/data-access/src/lib/infrastructure/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseService: () => (/* reexport safe */ _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService),
/* harmony export */   DBClosedError: () => (/* reexport safe */ _indexed_db_service_impl__WEBPACK_IMPORTED_MODULE_2__.DBClosedError),
/* harmony export */   InMemoryService: () => (/* reexport safe */ _in_memory_service__WEBPACK_IMPORTED_MODULE_1__.InMemoryService),
/* harmony export */   IndexedDbService: () => (/* reexport safe */ _indexed_db_service_impl__WEBPACK_IMPORTED_MODULE_2__.IndexedDbService),
/* harmony export */   MockService: () => (/* reexport safe */ _mock_service__WEBPACK_IMPORTED_MODULE_3__.MockService),
/* harmony export */   provideServiceMock: () => (/* reexport safe */ _mock_service__WEBPACK_IMPORTED_MODULE_3__.provideServiceMock)
/* harmony export */ });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-service */ 7987);
/* harmony import */ var _in_memory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./in-memory.service */ 7408);
/* harmony import */ var _indexed_db_service_impl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexed-db.service.impl */ 5516);
/* harmony import */ var _mock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock.service */ 3568);





/***/ }),

/***/ 5516:
/*!******************************************************************************!*\
  !*** ./shared/data-access/src/lib/infrastructure/indexed-db.service.impl.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DBClosedError: () => (/* binding */ DBClosedError),
/* harmony export */   IndexedDbService: () => (/* binding */ IndexedDbService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1415);
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ 6331);
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ 3509);
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classStaticPrivateMethodGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classStaticPrivateMethodGet.js */ 8298);
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js */ 119);





var _class, _openDatabase3;
// function arrayBufferToBlob<B extends ArrayBuffer, T extends string>(
//   buffer: B,
//   type: T
// ) {
//   return new Blob([buffer], {type: type})
// }
// function blobToArrayBuffer(blob: Blob) {
//   return new Promise<ArrayBuffer>((resolve, reject) => {
//     const reader = new FileReader()
//     reader.addEventListener('loadend', () => {
//       if (reader.result instanceof ArrayBuffer) {
//         resolve(reader.result)
//       }
//     })
//     reader.addEventListener('error', reject)
//     reader.readAsArrayBuffer(blob)
//   })
// }
class MissingStoresError extends Error {
  constructor(db) {
    super('Missing stores');
    this.db = db;
  }
}
class DBClosedError extends Error {
  constructor(dbName) {
    super(`IndexedDB database '${dbName}' is closed.`);
    this.code = 'DBClosed';
  }
}
var _database = /*#__PURE__*/new WeakMap();
var _pendingTransactions = /*#__PURE__*/new WeakMap();
class IndexedDbService {
  constructor(database, name) {
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _database, {
      writable: true,
      value: void 0
    });
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _pendingTransactions, {
      writable: true,
      value: []
    });
    this.name = name;
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _database, database);
  }
  static create(name, version, stores) {
    return (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const database = yield (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classStaticPrivateMethodGet_js__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexedDbService, IndexedDbService, _openDatabase).call(IndexedDbService, name, version, stores);
      return new IndexedDbService(database, name);
    })();
  }
  hasPendingTransactions() {
    return (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _pendingTransactions).length > 0;
  }
  close() {
    if ((0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _pendingTransactions).length) {
      (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _pendingTransactions).splice(0, (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _pendingTransactions).length).forEach(transaction => transaction.abort());
    }
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _database)?.close();
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _database, null);
  }
  runInTransaction(store, transactionMode, dbRequestFn) {
    var _this = this;
    return (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _database)) {
        throw new DBClosedError(_this.name);
      }
      const transaction = (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _database).transaction(store, transactionMode);
      (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _pendingTransactions).push(transaction);
      return new Promise((c, e) => {
        transaction.oncomplete = () => {
          if (Array.isArray(request)) {
            c(request.map(r => r.result));
          } else {
            c(request.result);
          }
        };
        transaction.onerror = () => e(transaction.error);
        transaction.onabort = () => e(transaction.error);
        const request = dbRequestFn(transaction.objectStore(store));
      }).finally(() => (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _pendingTransactions).splice((0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _pendingTransactions).indexOf(transaction), 1));
    })();
  }
  getKeyValues(store, isValid) {
    var _this2 = this;
    return (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2, _database)) {
        throw new DBClosedError(_this2.name);
      }
      const transaction = (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2, _database).transaction(store, 'readonly');
      (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2, _pendingTransactions).push(transaction);
      return new Promise(resolve => {
        const items = new Map();
        const objectStore = transaction.objectStore(store);
        // Open a IndexedDB Cursor to iterate over key/values
        const cursor = objectStore.openCursor();
        if (!cursor) {
          return resolve(items); // this means the `ItemTable` was empty
        }
        // Iterate over rows of `ItemTable` until the end
        cursor.onsuccess = () => {
          if (cursor.result) {
            // Keep cursor key/value in our map
            if (isValid(cursor.result.value)) {
              items.set(cursor.result.key.toString(), cursor.result.value);
            }
            // Advance cursor to next row
            cursor.result.continue();
          } else {
            resolve(items); // reached end of table
          }
        };
        // Error handlers
        const onError = error => {
          // console.error(`IndexedDB getKeyValues(): ${toErrorMessage(error, true)}`);
          console.error(`IndexedDB getKeyValues(): ${error}`);
          resolve(items);
        };
        cursor.onerror = () => onError(cursor.error);
        transaction.onerror = () => onError(transaction.error);
      }).finally(() => (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2, _pendingTransactions).splice((0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2, _pendingTransactions).indexOf(transaction), 1));
    })();
  }
}
// const db = IndexedDbService.create('db', undefined, ['store1'])
// console.log(db)
_class = IndexedDbService;
function _openDatabase(_x, _x2, _x3) {
  return (_openDatabase3 = _openDatabase3 || (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (name, version, stores) {
    try {
      return yield (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classStaticPrivateMethodGet_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_class, _class, _doOpenDatabase).call(_class, name, version, stores);
    } catch (err) {
      if (err instanceof MissingStoresError) {
        console.info(`Attempting to recreate the IndexedDB once.`, name);
        try {
          // Try to delete the db
          yield (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classStaticPrivateMethodGet_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_class, _class, _deleteDatabase).call(_class, err.db);
        } catch (error) {
          console.error(`Error while deleting the IndexedDB`, error
          // getErrorMessage(error)
          );

          throw error;
        }
        return yield (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classStaticPrivateMethodGet_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_class, _class, _doOpenDatabase).call(_class, name, version, stores);
      }
      throw err;
    }
  })).apply(this, arguments);
}
function _deleteDatabase(indexedDB) {
  return new Promise((c, e) => {
    // Close any opened connections
    indexedDB.close();
    // Delete the db
    const deleteRequest = window.indexedDB.deleteDatabase(indexedDB.name);
    deleteRequest.onerror = () => e(deleteRequest.error);
    deleteRequest.onsuccess = () => c();
  });
}
function _doOpenDatabase(name, version, stores) {
  return new Promise((c, e) => {
    const request = window.indexedDB.open(name, version);
    request.onerror = () => e(request.error);
    request.onsuccess = () => {
      const db = request.result;
      for (const store of stores) {
        if (!db.objectStoreNames.contains(store)) {
          console.error(`Error while opening IndexedDB. Could not find '${store}'' object store`);
          e(new MissingStoresError(db));
          return;
        }
      }
      c(db);
    };
    request.onupgradeneeded = () => {
      const db = request.result;
      for (const store of stores) {
        if (!db.objectStoreNames.contains(store)) {
          db.createObjectStore(store);
        }
      }
    };
  });
}

/***/ }),

/***/ 3568:
/*!*******************************************************************!*\
  !*** ./shared/data-access/src/lib/infrastructure/mock.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockService: () => (/* binding */ MockService),
/* harmony export */   provideServiceMock: () => (/* binding */ provideServiceMock)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5761);
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);


function provideServiceMock(base, impl, collection) {
  return {
    provide: base,
    useFactory() {
      return new impl(collection);
    }
  };
}
class MockService extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Service {
  constructor(collection = []) {
    super();
    this.collection = collection;
  }
  find(params = {
    where: {},
    options: {}
  }) {
    const {
      skip = 0,
      take = 10,
      order,
      sort = 'createdAt'
    } = params.options ?? {};
    const ord = order === 'ASC' ? 1 : -1;
    console.log(this.collection);
    const entities = this.collection
    // .filter(where(params.where ?? {}))
    .slice(skip, skip + take).sort((a, b) => {
      return a[sort] > b[sort] ? ord : ord * -1;
    });
    const options = params.options ?? {};
    const itemCount = entities.length;
    const pageMetaDto = new _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.PageMeta({
      itemCount,
      options
    });
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Paged(entities, pageMetaDto));
  }
  filter(params) {
    return this.find(params);
  }
  count(params) {
    const entities = this.collection.filter((0,_dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.where)(params));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(entities.length);
  }
  // abstract override create(value: Partial<T>): Observable<T>
  update(value) {
    const index = this.collection.findIndex(item => item.id === value.id);
    const entity = {
      ...this.collection[index],
      ...value
    };
    this.collection[index] = entity;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(entity);
  }
  remove(id) {
    const index = this.collection.findIndex(item => item.id === id);
    const entity = this.collection[index];
    this.collection.splice(index, 1);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(entity);
  }
  removeBulk(...ids) {
    const {
      length
    } = ids.map(id => this.remove(id));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({
      affected: length
    });
  }
  findOne(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.collection.find(item => item.id === id) ?? null);
  }
}

/***/ }),

/***/ 5051:
/*!**************************************************!*\
  !*** ./shared/data-access/src/lib/ports/http.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Http: () => (/* binding */ Http)
/* harmony export */ });
class Http {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
}


/***/ }),

/***/ 2359:
/*!***************************************************!*\
  !*** ./shared/data-access/src/lib/ports/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Http: () => (/* reexport safe */ _http__WEBPACK_IMPORTED_MODULE_0__.Http)
/* harmony export */ });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ 5051);


/***/ }),

/***/ 1226:
/*!**********************************************!*\
  !*** ./shared/data-access/src/public-api.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseService: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.BaseService),
/* harmony export */   DBClosedError: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.DBClosedError),
/* harmony export */   Http: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_3__.Http),
/* harmony export */   InMemoryService: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.InMemoryService),
/* harmony export */   IndexedDbService: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.IndexedDbService),
/* harmony export */   Loader: () => (/* reexport safe */ _lib_application__WEBPACK_IMPORTED_MODULE_2__.Loader),
/* harmony export */   MockService: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.MockService),
/* harmony export */   Store: () => (/* reexport safe */ _lib_application__WEBPACK_IMPORTED_MODULE_2__.Store),
/* harmony export */   provideHttp: () => (/* reexport safe */ _lib_data_access__WEBPACK_IMPORTED_MODULE_1__.provideHttp),
/* harmony export */   provideLoader: () => (/* reexport safe */ _lib_data_access__WEBPACK_IMPORTED_MODULE_1__.provideLoader),
/* harmony export */   provideServiceMock: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.provideServiceMock)
/* harmony export */ });
/* harmony import */ var _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/infrastructure */ 7499);
/* harmony import */ var _lib_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/data-access */ 6412);
/* harmony import */ var _lib_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/application */ 5295);
/* harmony import */ var _lib_ports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ports */ 2359);





/***/ }),

/***/ 6866:
/*!***************************************!*\
  !*** ./shared/util-data/src/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cast: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Cast),
/* harmony export */   Collection: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Collection),
/* harmony export */   Entity: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Entity),
/* harmony export */   Facade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Facade),
/* harmony export */   Order: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Order),
/* harmony export */   PageMeta: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.PageMeta),
/* harmony export */   Paged: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Paged),
/* harmony export */   Repository: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Repository),
/* harmony export */   Service: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Service),
/* harmony export */   Store: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.Store),
/* harmony export */   by: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.by),
/* harmony export */   create: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.create),
/* harmony export */   enumOptions: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.enumOptions),
/* harmony export */   orderOptions: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.orderOptions),
/* harmony export */   token: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.token),
/* harmony export */   where: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.where)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 6603);


/***/ }),

/***/ 3766:
/*!*************************************************!*\
  !*** ./shared/util-data/src/lib/base/entity.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Entity: () => (/* binding */ Entity)
/* harmony export */ });
class Entity {}

/***/ }),

/***/ 9628:
/*!*************************************************!*\
  !*** ./shared/util-data/src/lib/base/facade.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Facade: () => (/* binding */ Facade)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3040);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2045);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ 7076);


class Facade extends _store__WEBPACK_IMPORTED_MODULE_0__.Store {
  constructor(service) {
    super({
      data: [],
      meta: {
        hasNextPage: false,
        hasPreviousPage: false,
        itemCount: 0,
        page: 1,
        pageCount: 0,
        take: 10
      },
      loading: false,
      selected: null,
      warning: null,
      count: 0
    });
    this.service = service;
    this.selected$ = this.select(state => state.selected);
    this.loading$ = this.select(state => state.loading);
    this.warning$ = this.select(state => state.warning);
    this.count$ = this.select(state => state.count);
    this.data$ = this.select(state => state.data);
    this.meta$ = this.select(state => state.meta);
    this.handleError = (err, caught) => {
      if (err) {
        this.setState({
          warning: err.error.message
        });
        throw err.error.message;
      }
      return caught;
    };
  }
  find(params) {
    const find$ = this.service.find(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    find$.subscribe(response => this.setState(response));
  }
  count(where) {
    const find$ = this.service.count(where).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    find$.subscribe(count => this.setState({
      count
    }));
  }
  filter(params) {
    const find$ = this.service.filter(params).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    find$.subscribe(response => this.setState(response));
  }
  findOne(id) {
    const findOne$ = this.service.findOne(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    findOne$.subscribe(selected => this.setState({
      selected
    }));
  }
  create(createContent) {
    const create$ = this.service.create(createContent).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    create$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError)).subscribe(selected => {
      this.setState({
        selected
      });
      this.find();
    });
  }
  update(updateContent) {
    const update$ = this.service.update(updateContent).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    update$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError)).subscribe(selected => {
      this.setState({
        selected
      });
      this.find();
    });
  }
  remove(id) {
    const remove$ = this.service.remove(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    remove$.subscribe(selected => {
      this.setState({
        selected
      });
      this.find();
    });
  }
  removeBulk(ids) {
    const remove$ = this.service.removeBulk(...ids).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
    remove$.subscribe(() => this.find());
  }
}

/***/ }),

/***/ 6450:
/*!************************************************!*\
  !*** ./shared/util-data/src/lib/base/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Entity: () => (/* reexport safe */ _entity__WEBPACK_IMPORTED_MODULE_0__.Entity),
/* harmony export */   Facade: () => (/* reexport safe */ _facade__WEBPACK_IMPORTED_MODULE_1__.Facade),
/* harmony export */   PageMeta: () => (/* reexport safe */ _page_meta__WEBPACK_IMPORTED_MODULE_2__.PageMeta),
/* harmony export */   Paged: () => (/* reexport safe */ _paged__WEBPACK_IMPORTED_MODULE_3__.Paged),
/* harmony export */   Store: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_4__.Store)
/* harmony export */ });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ 3766);
/* harmony import */ var _facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facade */ 9628);
/* harmony import */ var _page_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-meta */ 9487);
/* harmony import */ var _paged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paged */ 5150);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ 7076);






/***/ }),

/***/ 9487:
/*!****************************************************!*\
  !*** ./shared/util-data/src/lib/base/page-meta.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageMeta: () => (/* binding */ PageMeta)
/* harmony export */ });
class PageMeta {
  constructor({
    options,
    itemCount
  }) {
    this.page = options.page ?? 1;
    this.take = options.take ?? 10;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}

/***/ }),

/***/ 5150:
/*!************************************************!*\
  !*** ./shared/util-data/src/lib/base/paged.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Paged: () => (/* binding */ Paged)
/* harmony export */ });
class Paged {
  constructor(data, meta) {
    this.data = data;
    this.meta = meta;
  }
}

/***/ }),

/***/ 7076:
/*!************************************************!*\
  !*** ./shared/util-data/src/lib/base/store.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Store: () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ 6331);
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js */ 119);
/* harmony import */ var _home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ 3509);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3846);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2631);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1300);




var _state = /*#__PURE__*/new WeakMap();
class Store {
  get state() {
    return (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _state).getValue();
  }
  constructor(initialState) {
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _state, {
      writable: true,
      value: void 0
    });
    const state = Object.freeze(initialState);
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _state, new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(state));
  }
  select(mapFn) {
    return (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _state).asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(state => mapFn(state)), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)());
  }
  setState(newState) {
    (0,_home_runner_work_dev_dev_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _state).next({
      ...this.state,
      ...newState
    });
  }
}

/***/ }),

/***/ 9106:
/*!**************************************************!*\
  !*** ./shared/util-data/src/lib/di/container.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token */ 9258);

const container = new Map();
function create(name, ...values) {
  const uniqueToken = (0,_token__WEBPACK_IMPORTED_MODULE_0__.token)(name);
  container.set(uniqueToken, values);
  return {
    token: uniqueToken,
    container,
    add(value) {
      const values = container.get(uniqueToken) ?? [];
      container.set(uniqueToken, [...values, value]);
    },
    getAll() {
      return container.get(uniqueToken) ?? [];
    }
  };
}

/***/ }),

/***/ 8984:
/*!**********************************************!*\
  !*** ./shared/util-data/src/lib/di/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_0__.create),
/* harmony export */   token: () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_1__.token)
/* harmony export */ });
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ 9106);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token */ 9258);



/***/ }),

/***/ 9258:
/*!**********************************************!*\
  !*** ./shared/util-data/src/lib/di/token.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   token: () => (/* binding */ token)
/* harmony export */ });
const token = name => {
  const symbol = Symbol(name);
  return symbol;
};

/***/ }),

/***/ 325:
/*!***********************************************!*\
  !*** ./shared/util-data/src/lib/filter/by.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   by: () => (/* binding */ by)
/* harmony export */ });
const by = (key, value) => item => item[key] === value;

/***/ }),

/***/ 6626:
/*!*******************************************************!*\
  !*** ./shared/util-data/src/lib/filter/collection.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collection: () => (/* binding */ Collection)
/* harmony export */ });
class Collection extends Array {
  constructor(...items) {
    super(...items);
  }
  order(params) {
    return this.sort((a, b) => {
      return Object.entries(params).map(([key, direction]) => {
        const valueA = a[key];
        const valueB = b[key];
        if (direction === 'ASC') {
          if (valueA < valueB) return -1;
          if (valueA > valueB) return 1;
          return 0;
        } else {
          if (valueA > valueB) return -1;
          if (valueA < valueB) return 1;
          return 0;
        }
      }).reduce((prev, curr) => prev > curr ? 1 : -1);
    });
  }
  findOneBy(key, value) {
    return this.find(item => item[key] === value);
  }
  where(params) {
    return this.filter(entity => {
      return Object.entries(params).filter(([, val]) => val).some(([key, val]) => entity[key] === val);
    });
  }
}

/***/ }),

/***/ 8612:
/*!**************************************************!*\
  !*** ./shared/util-data/src/lib/filter/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collection: () => (/* reexport safe */ _collection__WEBPACK_IMPORTED_MODULE_1__.Collection),
/* harmony export */   by: () => (/* reexport safe */ _by__WEBPACK_IMPORTED_MODULE_0__.by),
/* harmony export */   where: () => (/* reexport safe */ _where__WEBPACK_IMPORTED_MODULE_2__.where)
/* harmony export */ });
/* harmony import */ var _by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./by */ 325);
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collection */ 6626);
/* harmony import */ var _where__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./where */ 1213);




/***/ }),

/***/ 1213:
/*!**************************************************!*\
  !*** ./shared/util-data/src/lib/filter/where.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   where: () => (/* binding */ where)
/* harmony export */ });
function where(where) {
  return entity => {
    Object.entries(where).filter(([, val]) => val).some(([key, val]) => entity[key] === val);
  };
}

/***/ }),

/***/ 7278:
/*!************************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/bulk-result.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 2931:
/*!*******************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/create.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5568:
/*!************************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/find-one-by.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 6707:
/*!*********************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/find-one.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3560:
/*!************************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/find-params.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5161:
/*!*****************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/find.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7435:
/*!******************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Repository: () => (/* reexport safe */ _repository__WEBPACK_IMPORTED_MODULE_9__.Repository),
/* harmony export */   Service: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_10__.Service)
/* harmony export */ });
/* harmony import */ var _bulk_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bulk-result */ 7278);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ 2931);
/* harmony import */ var _find_one_by__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find-one-by */ 5568);
/* harmony import */ var _find_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-one */ 6707);
/* harmony import */ var _find_params__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find-params */ 3560);
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./find */ 5161);
/* harmony import */ var _page_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-options */ 7703);
/* harmony import */ var _page_params__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-params */ 3002);
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./remove */ 3615);
/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./repository */ 5969);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service */ 2131);
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update */ 5908);






// export * from './page-meta'


// export * from './paged'





/***/ }),

/***/ 7703:
/*!*************************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/page-options.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3002:
/*!************************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/page-params.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3615:
/*!*******************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/remove.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5969:
/*!***********************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/repository.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Repository: () => (/* binding */ Repository)
/* harmony export */ });
class Repository {}

/***/ }),

/***/ 2131:
/*!********************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Service: () => (/* binding */ Service)
/* harmony export */ });
class Service {}

/***/ }),

/***/ 5908:
/*!*******************************************************!*\
  !*** ./shared/util-data/src/lib/interfaces/update.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1989:
/*!*************************************************!*\
  !*** ./shared/util-data/src/lib/mapper/cast.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cast: () => (/* binding */ Cast)
/* harmony export */ });
class Cast {
  static toString(value) {
    return String(value) === '[object Object]' ? JSON.stringify(value) : String(value);
  }
  static fromString(value) {
    if (!isNaN(+value)) return +value;
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }
}

/***/ }),

/***/ 3852:
/*!*********************************************************!*\
  !*** ./shared/util-data/src/lib/mapper/enum-options.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enumOptions: () => (/* binding */ enumOptions)
/* harmony export */ });
const enumOptions = value => Object.entries(value).map(([value, text]) => ({
  value,
  text
}));

/***/ }),

/***/ 7719:
/*!**************************************************!*\
  !*** ./shared/util-data/src/lib/mapper/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cast: () => (/* reexport safe */ _cast__WEBPACK_IMPORTED_MODULE_0__.Cast),
/* harmony export */   enumOptions: () => (/* reexport safe */ _enum_options__WEBPACK_IMPORTED_MODULE_1__.enumOptions)
/* harmony export */ });
/* harmony import */ var _cast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast */ 1989);
/* harmony import */ var _enum_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum-options */ 3852);



/***/ }),

/***/ 4696:
/*!************************************************!*\
  !*** ./shared/util-data/src/lib/sort/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Order: () => (/* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_0__.Order),
/* harmony export */   orderOptions: () => (/* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_0__.orderOptions)
/* harmony export */ });
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order */ 7116);


/***/ }),

/***/ 7116:
/*!************************************************!*\
  !*** ./shared/util-data/src/lib/sort/order.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Order: () => (/* binding */ Order),
/* harmony export */   orderOptions: () => (/* binding */ orderOptions)
/* harmony export */ });
/* harmony import */ var _mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mapper */ 7719);

var Order;
(function (Order) {
  Order["ASC"] = "ASC";
  Order["DESC"] = "DESC";
})(Order || (Order = {}));
const orderOptions = (0,_mapper__WEBPACK_IMPORTED_MODULE_0__.enumOptions)(Order);

/***/ }),

/***/ 9926:
/*!**********************************************!*\
  !*** ./shared/util-data/src/lib/types/fn.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4161:
/*!*************************************************!*\
  !*** ./shared/util-data/src/lib/types/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fn */ 9926);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ 3420);
/* harmony import */ var _where__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./where */ 9938);




/***/ }),

/***/ 3420:
/*!************************************************!*\
  !*** ./shared/util-data/src/lib/types/type.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9938:
/*!*************************************************!*\
  !*** ./shared/util-data/src/lib/types/where.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 6603:
/*!********************************************!*\
  !*** ./shared/util-data/src/public-api.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cast: () => (/* reexport safe */ _lib_mapper__WEBPACK_IMPORTED_MODULE_6__.Cast),
/* harmony export */   Collection: () => (/* reexport safe */ _lib_filter__WEBPACK_IMPORTED_MODULE_5__.Collection),
/* harmony export */   Entity: () => (/* reexport safe */ _lib_base__WEBPACK_IMPORTED_MODULE_1__.Entity),
/* harmony export */   Facade: () => (/* reexport safe */ _lib_base__WEBPACK_IMPORTED_MODULE_1__.Facade),
/* harmony export */   Order: () => (/* reexport safe */ _lib_sort__WEBPACK_IMPORTED_MODULE_3__.Order),
/* harmony export */   PageMeta: () => (/* reexport safe */ _lib_base__WEBPACK_IMPORTED_MODULE_1__.PageMeta),
/* harmony export */   Paged: () => (/* reexport safe */ _lib_base__WEBPACK_IMPORTED_MODULE_1__.Paged),
/* harmony export */   Repository: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_4__.Repository),
/* harmony export */   Service: () => (/* reexport safe */ _lib_interfaces__WEBPACK_IMPORTED_MODULE_4__.Service),
/* harmony export */   Store: () => (/* reexport safe */ _lib_base__WEBPACK_IMPORTED_MODULE_1__.Store),
/* harmony export */   by: () => (/* reexport safe */ _lib_filter__WEBPACK_IMPORTED_MODULE_5__.by),
/* harmony export */   create: () => (/* reexport safe */ _lib_di__WEBPACK_IMPORTED_MODULE_0__.create),
/* harmony export */   enumOptions: () => (/* reexport safe */ _lib_mapper__WEBPACK_IMPORTED_MODULE_6__.enumOptions),
/* harmony export */   orderOptions: () => (/* reexport safe */ _lib_sort__WEBPACK_IMPORTED_MODULE_3__.orderOptions),
/* harmony export */   token: () => (/* reexport safe */ _lib_di__WEBPACK_IMPORTED_MODULE_0__.token),
/* harmony export */   where: () => (/* reexport safe */ _lib_filter__WEBPACK_IMPORTED_MODULE_5__.where)
/* harmony export */ });
/* harmony import */ var _lib_di__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/di */ 8984);
/* harmony import */ var _lib_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/base */ 6450);
/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/types */ 4161);
/* harmony import */ var _lib_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/sort */ 4696);
/* harmony import */ var _lib_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/interfaces */ 7435);
/* harmony import */ var _lib_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/filter */ 8612);
/* harmony import */ var _lib_mapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/mapper */ 7719);








/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3872)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map