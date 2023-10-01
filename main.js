"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 4233:
/*!******************************************!*\
  !*** ./account/data-access/src/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthFacade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.AuthFacade),
/* harmony export */   AuthServiceImpl: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.AuthServiceImpl),
/* harmony export */   AuthServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.AuthServiceMock),
/* harmony export */   GroupFacade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.GroupFacade),
/* harmony export */   GroupServiceImpl: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.GroupServiceImpl),
/* harmony export */   GroupServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.GroupServiceMock),
/* harmony export */   SignIn: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.SignIn),
/* harmony export */   UserFacade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UserFacade),
/* harmony export */   UserServiceImpl: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UserServiceImpl),
/* harmony export */   UserServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UserServiceMock),
/* harmony export */   provideAuth: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideAuth),
/* harmony export */   provideAuthFacade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideAuthFacade),
/* harmony export */   provideAuthService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideAuthService),
/* harmony export */   provideAuthServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideAuthServiceMock),
/* harmony export */   provideGroup: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideGroup),
/* harmony export */   provideGroupFacade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideGroupFacade),
/* harmony export */   provideGroupService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideGroupService),
/* harmony export */   provideGroupServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideGroupServiceMock),
/* harmony export */   provideUser: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideUser),
/* harmony export */   provideUserFacade: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideUserFacade),
/* harmony export */   provideUserService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideUserService),
/* harmony export */   provideUserServiceMock: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideUserServiceMock)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 9156);


/***/ }),

/***/ 287:
/*!****************************************************************!*\
  !*** ./account/data-access/src/lib/application/auth.facade.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthFacade: () => (/* binding */ AuthFacade)
/* harmony export */ });
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 3563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3738);


class AuthFacade extends _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.Store {
  get accessToken() {
    return this.authService.accessToken;
  }
  constructor(authService) {
    console.log(authService);
    super({
      authUser: null,
      warning: null,
      loading: false
    });
    this.authService = authService;
    this.authUser$ = this.select(state => state.authUser);
    this.warning$ = this.select(state => state.warning);
    this.loading$ = this.select(state => state.loading);
  }
  login(signIn) {
    this.setState({
      loading: true
    });
    const authUser$ = this.authService.login(signIn).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(() => this.authService.me()), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.take)(1));
    authUser$.subscribe(authUser => this.setState({
      authUser,
      loading: false
    }));
  }
  me() {
    return this.authService.me().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(authUser => this.setState({
      authUser
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.take)(1));
  }
  register(createUser) {
    this.setState({
      loading: true
    });
    const createUser$ = this.authService.register(createUser).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.take)(1));
    createUser$.subscribe(authUser => this.setState({
      authUser,
      loading: false
    }));
  }
  logout() {
    this.authService.accessToken = null;
    this.setState({
      authUser: null
    });
  }
}

/***/ }),

/***/ 6187:
/*!*****************************************************************!*\
  !*** ./account/data-access/src/lib/application/group.facade.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupFacade: () => (/* binding */ GroupFacade)
/* harmony export */ });
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);

class GroupFacade extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Facade {}

/***/ }),

/***/ 4713:
/*!**********************************************************!*\
  !*** ./account/data-access/src/lib/application/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthFacade: () => (/* reexport safe */ _auth_facade__WEBPACK_IMPORTED_MODULE_0__.AuthFacade),
/* harmony export */   GroupFacade: () => (/* reexport safe */ _group_facade__WEBPACK_IMPORTED_MODULE_1__.GroupFacade),
/* harmony export */   UserFacade: () => (/* reexport safe */ _user_facade__WEBPACK_IMPORTED_MODULE_2__.UserFacade)
/* harmony export */ });
/* harmony import */ var _auth_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.facade */ 287);
/* harmony import */ var _group_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group.facade */ 6187);
/* harmony import */ var _user_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.facade */ 1312);




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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2389);


class UserFacade extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Facade {
  constructor(service) {
    super(service);
  }
  updatePassword(value) {
    const update$ = this.service.updatePassword(value);
    update$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError)).subscribe(selected => {
      this.setState({
        selected
      });
      this.findOne(value.id);
    });
  }
}

/***/ }),

/***/ 8608:
/*!**********************************************************!*\
  !*** ./account/data-access/src/lib/dtos/create-group.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3358:
/*!*********************************************************!*\
  !*** ./account/data-access/src/lib/dtos/create-user.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9022:
/*!***************************************************!*\
  !*** ./account/data-access/src/lib/dtos/group.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3847:
/*!***************************************************!*\
  !*** ./account/data-access/src/lib/dtos/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignIn: () => (/* reexport safe */ _sign_in__WEBPACK_IMPORTED_MODULE_3__.SignIn)
/* harmony export */ });
/* harmony import */ var _create_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-group */ 8608);
/* harmony import */ var _create_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user */ 3358);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group */ 9022);
/* harmony import */ var _sign_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in */ 6008);
/* harmony import */ var _update_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-group */ 6981);
/* harmony import */ var _update_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-password */ 9220);
/* harmony import */ var _update_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-user */ 9254);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user */ 5561);









/***/ }),

/***/ 6008:
/*!*****************************************************!*\
  !*** ./account/data-access/src/lib/dtos/sign-in.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignIn: () => (/* reexport safe */ _dev_account_domain__WEBPACK_IMPORTED_MODULE_0__.SignIn)
/* harmony export */ });
/* harmony import */ var _dev_account_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/account-domain */ 864);


/***/ }),

/***/ 6981:
/*!**********************************************************!*\
  !*** ./account/data-access/src/lib/dtos/update-group.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9220:
/*!*************************************************************!*\
  !*** ./account/data-access/src/lib/dtos/update-password.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


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

/***/ 1866:
/*!*************************************************************************!*\
  !*** ./account/data-access/src/lib/infrastructure/auth.service.impl.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthServiceImpl: () => (/* binding */ AuthServiceImpl)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1527);

class AuthServiceImpl {
  get accessToken() {
    return localStorage.getItem('accessToken');
  }
  set accessToken(value) {
    if (value) localStorage.setItem('accessToken', value);else localStorage.removeItem('accessToken');
  }
  constructor(http, url) {
    this.http = http;
    this.url = url;
  }
  login(value) {
    return this.http.post(`${this.url}/login`, value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(({
      accessToken
    }) => this.accessToken = accessToken), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
  }
  register(value) {
    return this.http.post(`${this.url}/register`, value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
  }
  me() {
    return this.http.get(`${this.url}/me`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1));
  }
}

/***/ }),

/***/ 6720:
/*!*************************************************************************!*\
  !*** ./account/data-access/src/lib/infrastructure/auth.service.mock.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthServiceMock: () => (/* binding */ AuthServiceMock)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4980);

const MOCK_USER = {
  name: 'mock',
  username: 'username',
  email: 'mock@user.dev',
  id: 'mo-ck-id'
};
const MOCK_AUTH = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YjU2YTlkNy0wMWMwLTQ4NjEtYmY0MC1jMzMwNjMzY2E3MWQiLCJuYW1lIjoiR3VpbGhlcm1lIiwidXNlcm5hbWUiOiJndWlzZWVrIiwiZW1haWwiOiJlbWFpbEBndWlzZWVrLmRldiIsImlhdCI6MTY5NjEzMzMzMywiZXhwIjoxNjk2MjE5NzMzfQ.SyeK25DlNIJNl3eu8Jabjd0XaQWm-j_WSB8f5MoYEGE`;
class AuthServiceMock {
  get accessToken() {
    return localStorage.getItem('accessToken');
  }
  set accessToken(value) {
    if (value) localStorage.setItem('accessToken', value);else localStorage.removeItem('accessToken');
  }
  login(value) {
    console.log(`login: `, value);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({
      accessToken: MOCK_AUTH
    });
  }
  register(value) {
    console.log(`register: `, value);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(MOCK_USER);
  }
  me() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(MOCK_USER);
  }
}

/***/ }),

/***/ 6301:
/*!**************************************************************************!*\
  !*** ./account/data-access/src/lib/infrastructure/group.service.impl.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupServiceImpl: () => (/* binding */ GroupServiceImpl)
/* harmony export */ });
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 3563);

class GroupServiceImpl extends _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.BaseService {}

/***/ }),

/***/ 4154:
/*!**************************************************************************!*\
  !*** ./account/data-access/src/lib/infrastructure/group.service.mock.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupServiceMock: () => (/* binding */ GroupServiceMock)
/* harmony export */ });
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 3563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);


class GroupServiceMock extends _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.MockService {
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

/***/ 8984:
/*!*************************************************************!*\
  !*** ./account/data-access/src/lib/infrastructure/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthServiceImpl: () => (/* reexport safe */ _auth_service_impl__WEBPACK_IMPORTED_MODULE_0__.AuthServiceImpl),
/* harmony export */   AuthServiceMock: () => (/* reexport safe */ _auth_service_mock__WEBPACK_IMPORTED_MODULE_1__.AuthServiceMock),
/* harmony export */   GroupServiceImpl: () => (/* reexport safe */ _group_service_impl__WEBPACK_IMPORTED_MODULE_2__.GroupServiceImpl),
/* harmony export */   GroupServiceMock: () => (/* reexport safe */ _group_service_mock__WEBPACK_IMPORTED_MODULE_3__.GroupServiceMock),
/* harmony export */   UserServiceImpl: () => (/* reexport safe */ _user_service_impl__WEBPACK_IMPORTED_MODULE_4__.UserServiceImpl),
/* harmony export */   UserServiceMock: () => (/* reexport safe */ _user_service_mock__WEBPACK_IMPORTED_MODULE_5__.UserServiceMock)
/* harmony export */ });
/* harmony import */ var _auth_service_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service.impl */ 1866);
/* harmony import */ var _auth_service_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service.mock */ 6720);
/* harmony import */ var _group_service_impl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.service.impl */ 6301);
/* harmony import */ var _group_service_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group.service.mock */ 4154);
/* harmony import */ var _user_service_impl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service.impl */ 2152);
/* harmony import */ var _user_service_mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service.mock */ 8365);







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
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 3563);

class UserServiceImpl extends _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  updatePassword(value) {
    return this.http.put(`${this.url}/password`, value);
  }
}

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
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 3563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);


class UserServiceMock extends _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.MockService {
  updatePassword(value) {
    return this.findOne(value.id);
  }
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

/***/ 5810:
/*!*******************************************************!*\
  !*** ./account/data-access/src/lib/providers/auth.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideAuth: () => (/* binding */ provideAuth),
/* harmony export */   provideAuthFacade: () => (/* binding */ provideAuthFacade),
/* harmony export */   provideAuthService: () => (/* binding */ provideAuthService),
/* harmony export */   provideAuthServiceMock: () => (/* binding */ provideAuthServiceMock)
/* harmony export */ });
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../infrastructure */ 8984);
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dev/shared-data-access */ 3563);
/* harmony import */ var _dev_account_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dev/account-domain */ 864);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application */ 4713);




function provideAuthService(url = '/api') {
  return {
    provide: _dev_account_domain__WEBPACK_IMPORTED_MODULE_2__.AuthService,
    useFactory(http) {
      return new _infrastructure__WEBPACK_IMPORTED_MODULE_0__.AuthServiceImpl(http, url);
    },
    deps: [_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.Http]
  };
}
function provideAuthServiceMock() {
  return {
    provide: _dev_account_domain__WEBPACK_IMPORTED_MODULE_2__.AuthService,
    useClass: _infrastructure__WEBPACK_IMPORTED_MODULE_0__.AuthServiceMock
  };
}
function provideAuthFacade() {
  return {
    provide: _application__WEBPACK_IMPORTED_MODULE_3__.AuthFacade,
    deps: [_dev_account_domain__WEBPACK_IMPORTED_MODULE_2__.AuthService]
  };
}
const provideAuth = (0,_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.provideByEnv)(provideAuthService, provideAuthServiceMock, provideAuthFacade());

/***/ }),

/***/ 6486:
/*!********************************************************!*\
  !*** ./account/data-access/src/lib/providers/group.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideGroup: () => (/* binding */ provideGroup),
/* harmony export */   provideGroupFacade: () => (/* binding */ provideGroupFacade),
/* harmony export */   provideGroupService: () => (/* binding */ provideGroupService),
/* harmony export */   provideGroupServiceMock: () => (/* binding */ provideGroupServiceMock)
/* harmony export */ });
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 3563);
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../infrastructure */ 8984);
/* harmony import */ var _dev_account_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dev/account-domain */ 864);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application */ 4713);




function provideGroupService(api) {
  return {
    provide: _dev_account_domain__WEBPACK_IMPORTED_MODULE_2__.GroupService,
    useFactory(http) {
      return new _infrastructure__WEBPACK_IMPORTED_MODULE_1__.GroupServiceImpl(http, api);
    },
    deps: [_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.Http]
  };
}
function provideGroupServiceMock(collection = []) {
  return (0,_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.provideServiceMock)(_dev_account_domain__WEBPACK_IMPORTED_MODULE_2__.GroupService, _infrastructure__WEBPACK_IMPORTED_MODULE_1__.GroupServiceMock, collection);
}
function provideGroupFacade() {
  return {
    provide: _application__WEBPACK_IMPORTED_MODULE_3__.GroupFacade,
    deps: [_dev_account_domain__WEBPACK_IMPORTED_MODULE_2__.GroupService]
  };
}
const provideGroup = (0,_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.provideByEnv)(provideGroupService, provideGroupServiceMock, provideGroupFacade());

/***/ }),

/***/ 8388:
/*!********************************************************!*\
  !*** ./account/data-access/src/lib/providers/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideAuth: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.provideAuth),
/* harmony export */   provideAuthFacade: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.provideAuthFacade),
/* harmony export */   provideAuthService: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.provideAuthService),
/* harmony export */   provideAuthServiceMock: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.provideAuthServiceMock),
/* harmony export */   provideGroup: () => (/* reexport safe */ _group__WEBPACK_IMPORTED_MODULE_1__.provideGroup),
/* harmony export */   provideGroupFacade: () => (/* reexport safe */ _group__WEBPACK_IMPORTED_MODULE_1__.provideGroupFacade),
/* harmony export */   provideGroupService: () => (/* reexport safe */ _group__WEBPACK_IMPORTED_MODULE_1__.provideGroupService),
/* harmony export */   provideGroupServiceMock: () => (/* reexport safe */ _group__WEBPACK_IMPORTED_MODULE_1__.provideGroupServiceMock),
/* harmony export */   provideUser: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.provideUser),
/* harmony export */   provideUserFacade: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.provideUserFacade),
/* harmony export */   provideUserService: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.provideUserService),
/* harmony export */   provideUserServiceMock: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_2__.provideUserServiceMock)
/* harmony export */ });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ 5810);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group */ 6486);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ 7494);




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
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 3563);
/* harmony import */ var _infrastructure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../infrastructure */ 8984);
/* harmony import */ var _dev_account_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dev/account-domain */ 864);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../application */ 4713);




function provideUserService(api = '/api/account') {
  return {
    provide: _dev_account_domain__WEBPACK_IMPORTED_MODULE_2__.UserService,
    useFactory(http) {
      return new _infrastructure__WEBPACK_IMPORTED_MODULE_1__.UserServiceImpl(http, api);
    },
    deps: [_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.Http]
  };
}
function provideUserServiceMock(collection = []) {
  return (0,_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.provideServiceMock)(_dev_account_domain__WEBPACK_IMPORTED_MODULE_2__.UserService, _infrastructure__WEBPACK_IMPORTED_MODULE_1__.UserServiceMock, collection);
}
function provideUserFacade() {
  return {
    provide: _application__WEBPACK_IMPORTED_MODULE_3__.UserFacade,
    deps: [_dev_account_domain__WEBPACK_IMPORTED_MODULE_2__.UserService]
  };
}
const provideUser = (0,_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.provideByEnv)(provideUserService, provideUserServiceMock, provideUserFacade());

/***/ }),

/***/ 9156:
/*!***********************************************!*\
  !*** ./account/data-access/src/public-api.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthFacade: () => (/* reexport safe */ _lib_application__WEBPACK_IMPORTED_MODULE_1__.AuthFacade),
/* harmony export */   AuthServiceImpl: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.AuthServiceImpl),
/* harmony export */   AuthServiceMock: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.AuthServiceMock),
/* harmony export */   GroupFacade: () => (/* reexport safe */ _lib_application__WEBPACK_IMPORTED_MODULE_1__.GroupFacade),
/* harmony export */   GroupServiceImpl: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.GroupServiceImpl),
/* harmony export */   GroupServiceMock: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.GroupServiceMock),
/* harmony export */   SignIn: () => (/* reexport safe */ _lib_dtos__WEBPACK_IMPORTED_MODULE_3__.SignIn),
/* harmony export */   UserFacade: () => (/* reexport safe */ _lib_application__WEBPACK_IMPORTED_MODULE_1__.UserFacade),
/* harmony export */   UserServiceImpl: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.UserServiceImpl),
/* harmony export */   UserServiceMock: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.UserServiceMock),
/* harmony export */   provideAuth: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideAuth),
/* harmony export */   provideAuthFacade: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideAuthFacade),
/* harmony export */   provideAuthService: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideAuthService),
/* harmony export */   provideAuthServiceMock: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideAuthServiceMock),
/* harmony export */   provideGroup: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideGroup),
/* harmony export */   provideGroupFacade: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideGroupFacade),
/* harmony export */   provideGroupService: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideGroupService),
/* harmony export */   provideGroupServiceMock: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideGroupServiceMock),
/* harmony export */   provideUser: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideUser),
/* harmony export */   provideUserFacade: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideUserFacade),
/* harmony export */   provideUserService: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideUserService),
/* harmony export */   provideUserServiceMock: () => (/* reexport safe */ _lib_providers__WEBPACK_IMPORTED_MODULE_2__.provideUserServiceMock)
/* harmony export */ });
/* harmony import */ var _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/infrastructure */ 8984);
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
/* harmony export */   ActivateUserAuthUseCase: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.ActivateUserAuthUseCase),
/* harmony export */   AuthService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.AuthService),
/* harmony export */   CreateUserAccountUseCase: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.CreateUserAccountUseCase),
/* harmony export */   CryptoService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.CryptoService),
/* harmony export */   GroupRepository: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.GroupRepository),
/* harmony export */   GroupService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.GroupService),
/* harmony export */   JwtService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.JwtService),
/* harmony export */   SignIn: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.SignIn),
/* harmony export */   SignInUserAccountUseCase: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.SignInUserAccountUseCase),
/* harmony export */   UserRepository: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UserRepository),
/* harmony export */   UserService: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UserService)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 3780);


/***/ }),

/***/ 1977:
/*!*****************************************************!*\
  !*** ./account/domain/src/lib/dtos/access-token.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7607:
/*!*****************************************************!*\
  !*** ./account/domain/src/lib/dtos/auth-request.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1162:
/*!**************************************************!*\
  !*** ./account/domain/src/lib/dtos/auth-user.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 2945:
/*!*****************************************************!*\
  !*** ./account/domain/src/lib/dtos/create-group.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignIn: () => (/* reexport safe */ _sign_in__WEBPACK_IMPORTED_MODULE_5__.SignIn)
/* harmony export */ });
/* harmony import */ var _access_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-token */ 1977);
/* harmony import */ var _auth_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-request */ 7607);
/* harmony import */ var _auth_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-user */ 1162);
/* harmony import */ var _create_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-group */ 2945);
/* harmony import */ var _create_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-user */ 1394);
/* harmony import */ var _sign_in__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in */ 2758);
/* harmony import */ var _update_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-group */ 712);
/* harmony import */ var _update_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-password */ 4001);
/* harmony import */ var _update_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-user */ 9846);










/***/ }),

/***/ 2758:
/*!************************************************!*\
  !*** ./account/domain/src/lib/dtos/sign-in.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignIn: () => (/* binding */ SignIn)
/* harmony export */ });
class SignIn {}

/***/ }),

/***/ 712:
/*!*****************************************************!*\
  !*** ./account/domain/src/lib/dtos/update-group.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4001:
/*!********************************************************!*\
  !*** ./account/domain/src/lib/dtos/update-password.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9846:
/*!****************************************************!*\
  !*** ./account/domain/src/lib/dtos/update-user.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4392:
/*!**************************************************!*\
  !*** ./account/domain/src/lib/entities/group.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3139:
/*!**************************************************!*\
  !*** ./account/domain/src/lib/entities/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group */ 4392);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ 630);



/***/ }),

/***/ 630:
/*!*************************************************!*\
  !*** ./account/domain/src/lib/entities/user.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8782:
/*!******************************************************!*\
  !*** ./account/domain/src/lib/ports/auth.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
class AuthService {}

/***/ }),

/***/ 8528:
/*!********************************************************!*\
  !*** ./account/domain/src/lib/ports/crypto.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CryptoService: () => (/* binding */ CryptoService)
/* harmony export */ });
class CryptoService {}

/***/ }),

/***/ 9301:
/*!**********************************************************!*\
  !*** ./account/domain/src/lib/ports/group.repository.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupRepository: () => (/* binding */ GroupRepository)
/* harmony export */ });
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);

class GroupRepository extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Repository {}

/***/ }),

/***/ 6048:
/*!*******************************************************!*\
  !*** ./account/domain/src/lib/ports/group.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupService: () => (/* binding */ GroupService)
/* harmony export */ });
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);

class GroupService extends _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Service {}

/***/ }),

/***/ 3402:
/*!***********************************************!*\
  !*** ./account/domain/src/lib/ports/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService),
/* harmony export */   CryptoService: () => (/* reexport safe */ _crypto_service__WEBPACK_IMPORTED_MODULE_1__.CryptoService),
/* harmony export */   GroupRepository: () => (/* reexport safe */ _group_repository__WEBPACK_IMPORTED_MODULE_2__.GroupRepository),
/* harmony export */   GroupService: () => (/* reexport safe */ _group_service__WEBPACK_IMPORTED_MODULE_3__.GroupService),
/* harmony export */   JwtService: () => (/* reexport safe */ _jwt_service__WEBPACK_IMPORTED_MODULE_4__.JwtService),
/* harmony export */   UserRepository: () => (/* reexport safe */ _user_repository__WEBPACK_IMPORTED_MODULE_5__.UserRepository),
/* harmony export */   UserService: () => (/* reexport safe */ _user_service__WEBPACK_IMPORTED_MODULE_6__.UserService)
/* harmony export */ });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 8782);
/* harmony import */ var _crypto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crypto.service */ 8528);
/* harmony import */ var _group_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.repository */ 9301);
/* harmony import */ var _group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group.service */ 6048);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ 6261);
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.repository */ 7515);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ 470);








/***/ }),

/***/ 6261:
/*!*****************************************************!*\
  !*** ./account/domain/src/lib/ports/jwt.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtService: () => (/* binding */ JwtService)
/* harmony export */ });
class JwtService {}

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

/***/ 7936:
/*!****************************************************************!*\
  !*** ./account/domain/src/lib/use-cases/activate-user-auth.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivateUserAuthUseCase: () => (/* binding */ ActivateUserAuthUseCase)
/* harmony export */ });
class ActivateUserAuthUseCase {
  constructor(jwtService, jwtConfig) {
    this.jwtService = jwtService;
    this.jwtConfig = jwtConfig;
  }
  execute(input) {
    try {
      return this.jwtService.verify(input, this.jwtConfig);
    } catch {
      throw new Error(`Acesso não autorizado`);
    }
  }
}

/***/ }),

/***/ 348:
/*!*****************************************************************!*\
  !*** ./account/domain/src/lib/use-cases/create-user-account.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateUserAccountUseCase: () => (/* binding */ CreateUserAccountUseCase)
/* harmony export */ });
/* harmony import */ var _home_runner_work_dev_dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);

class CreateUserAccountUseCase {
  constructor(userRepository, groupRepository, cryptoService) {
    this.userRepository = userRepository;
    this.groupRepository = groupRepository;
    this.cryptoService = cryptoService;
  }
  execute(input) {
    var _this = this;
    return (0,_home_runner_work_dev_dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const groups = [];
      const group = yield _this.groupRepository.findOne('permission', 1);
      if (group) groups.push(group);
      const password = _this.cryptoService.hash(input.password);
      try {
        return yield _this.userRepository.create({
          ...input,
          password,
          groups
        });
      } catch {
        throw new Error(`Erro ao criar usuário ${input.name}`);
      }
    })();
  }
}

/***/ }),

/***/ 5773:
/*!***************************************************!*\
  !*** ./account/domain/src/lib/use-cases/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivateUserAuthUseCase: () => (/* reexport safe */ _activate_user_auth__WEBPACK_IMPORTED_MODULE_0__.ActivateUserAuthUseCase),
/* harmony export */   CreateUserAccountUseCase: () => (/* reexport safe */ _create_user_account__WEBPACK_IMPORTED_MODULE_1__.CreateUserAccountUseCase),
/* harmony export */   SignInUserAccountUseCase: () => (/* reexport safe */ _sign_in_user_account__WEBPACK_IMPORTED_MODULE_2__.SignInUserAccountUseCase)
/* harmony export */ });
/* harmony import */ var _activate_user_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate-user-auth */ 7936);
/* harmony import */ var _create_user_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user-account */ 348);
/* harmony import */ var _sign_in_user_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in-user-account */ 2606);




/***/ }),

/***/ 2606:
/*!******************************************************************!*\
  !*** ./account/domain/src/lib/use-cases/sign-in-user-account.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInUserAccountUseCase: () => (/* binding */ SignInUserAccountUseCase)
/* harmony export */ });
/* harmony import */ var _home_runner_work_dev_dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);

class SignInUserAccountUseCase {
  constructor(userRepository, cryptoService, jwtService, jwtConfig) {
    this.userRepository = userRepository;
    this.cryptoService = cryptoService;
    this.jwtService = jwtService;
    this.jwtConfig = jwtConfig;
  }
  execute(input) {
    var _this = this;
    return (0,_home_runner_work_dev_dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = yield _this.userRepository.findByUsernameOrEmail(input.username);
      if (!user) throw new Error(`Credenciais inválidas`);
      const verified = _this.cryptoService.compare(input.password, user.password);
      if (!verified) throw new Error(`Credenciais inválidas`);
      const {
        name,
        username,
        email,
        id
      } = user;
      const payload = {
        sub: id,
        name,
        username,
        email
      };
      const accessToken = _this.jwtService.sign(payload, _this.jwtConfig);
      return {
        accessToken
      };
    })();
  }
}

/***/ }),

/***/ 3780:
/*!******************************************!*\
  !*** ./account/domain/src/public-api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivateUserAuthUseCase: () => (/* reexport safe */ _lib_use_cases__WEBPACK_IMPORTED_MODULE_3__.ActivateUserAuthUseCase),
/* harmony export */   AuthService: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.AuthService),
/* harmony export */   CreateUserAccountUseCase: () => (/* reexport safe */ _lib_use_cases__WEBPACK_IMPORTED_MODULE_3__.CreateUserAccountUseCase),
/* harmony export */   CryptoService: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.CryptoService),
/* harmony export */   GroupRepository: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.GroupRepository),
/* harmony export */   GroupService: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.GroupService),
/* harmony export */   JwtService: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.JwtService),
/* harmony export */   SignIn: () => (/* reexport safe */ _lib_dtos__WEBPACK_IMPORTED_MODULE_0__.SignIn),
/* harmony export */   SignInUserAccountUseCase: () => (/* reexport safe */ _lib_use_cases__WEBPACK_IMPORTED_MODULE_3__.SignInUserAccountUseCase),
/* harmony export */   UserRepository: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.UserRepository),
/* harmony export */   UserService: () => (/* reexport safe */ _lib_ports__WEBPACK_IMPORTED_MODULE_1__.UserService)
/* harmony export */ });
/* harmony import */ var _lib_dtos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/dtos */ 6188);
/* harmony import */ var _lib_ports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ports */ 3402);
/* harmony import */ var _lib_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/entities */ 3139);
/* harmony import */ var _lib_use_cases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/use-cases */ 5773);





/***/ }),

/***/ 7947:
/*!**************************************!*\
  !*** ./account/ui-auth/src/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountUiAuthModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.AccountUiAuthModule),
/* harmony export */   SignInComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.SignInComponent),
/* harmony export */   SignUpComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.SignUpComponent)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 8496);


/***/ }),

/***/ 2521:
/*!***********************************************************!*\
  !*** ./account/ui-auth/src/lib/account-ui-auth.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountUiAuthModule: () => (/* binding */ AccountUiAuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2164);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 7950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);











class AccountUiAuthModule {
  static #_ = this.ɵfac = function AccountUiAuthModule_Factory(t) {
    return new (t || AccountUiAuthModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AccountUiAuthModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountUiAuthModule, {
    declarations: [_components__WEBPACK_IMPORTED_MODULE_0__.SignInComponent, _components__WEBPACK_IMPORTED_MODULE_0__.SignUpComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule],
    exports: [_components__WEBPACK_IMPORTED_MODULE_0__.SignInComponent, _components__WEBPACK_IMPORTED_MODULE_0__.SignUpComponent]
  });
})();

/***/ }),

/***/ 7950:
/*!*****************************************************!*\
  !*** ./account/ui-auth/src/lib/components/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInComponent: () => (/* reexport safe */ _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__.SignInComponent),
/* harmony export */   SignUpComponent: () => (/* reexport safe */ _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent)
/* harmony export */ });
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 1474);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 8988);



/***/ }),

/***/ 1474:
/*!*************************************************************************!*\
  !*** ./account/ui-auth/src/lib/components/sign-in/sign-in.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInComponent: () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms */ 3918);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);









const _c0 = ["username"];
class SignInComponent {
  constructor() {
    this.signIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.form = new _forms__WEBPACK_IMPORTED_MODULE_0__.SignInForm();
    this.message$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
  }
  focus() {
    this.usernameRef.nativeElement.focus();
  }
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.signIn.emit(this.form.getRawValue());
    }
  }
  static #_ = this.ɵfac = function SignInComponent_Factory(t) {
    return new (t || SignInComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SignInComponent,
    selectors: [["dev-sign-in"]],
    viewQuery: function SignInComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.usernameRef = _t.first);
      }
    },
    outputs: {
      signIn: "signIn"
    },
    decls: 23,
    vars: 4,
    consts: [[3, "formGroup", "submit"], ["matInput", "", "name", "username", "id", "username", "autocomplete", "username", "formControlName", "username", "autofocus", ""], ["username", ""], ["matInput", "", "type", "password", "name", "password", "id", "password", "autocomplete", "current-password", "formControlName", "password"], [1, "row-reverse"], ["mat-stroked-button", "", "color", "primary"], ["mat-button", "", "disabled", ""]],
    template: function SignInComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SignInComponent_Template_form_submit_0_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section")(2, "mat-form-field")(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Usu\u00E1rio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Obrigat\u00F3rio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Palavra-chave ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " M\u00EDnimo 6 caracteres ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "footer", 4)(19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Esqueci a senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 2, ctx.message$));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 8px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FjY291bnQvdWktYXV0aC9zcmMvbGliL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiA4cHg7XG5cbiAgZm9ybSBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICBmb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 8988:
/*!*************************************************************************!*\
  !*** ./account/ui-auth/src/lib/components/sign-up/sign-up.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpComponent: () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms */ 3918);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);










const _c0 = ["name"];
class SignUpComponent {
  constructor() {
    this.signUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.form = new _forms__WEBPACK_IMPORTED_MODULE_0__.SignUpForm();
    this.message$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
  }
  focus() {
    this.nameRef.nativeElement.focus();
  }
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.signUp.emit(this.form.getValue());
    }
  }
  static #_ = this.ɵfac = function SignUpComponent_Factory(t) {
    return new (t || SignUpComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SignUpComponent,
    selectors: [["dev-sign-up"]],
    viewQuery: function SignUpComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nameRef = _t.first);
      }
    },
    outputs: {
      signUp: "signUp"
    },
    decls: 42,
    vars: 6,
    consts: [[3, "formGroup", "submit"], ["matInput", "", "id", "name", "autofocus", "", "autocomplete", "name", "formControlName", "name"], ["name", ""], ["matInput", "", "type", "email", "id", "email", "autocomplete", "email", "formControlName", "email"], ["matInput", "", "id", "username", "autocomplete", "username", "formControlName", "username"], ["matInput", "", "type", "password", "id", "password", "autocomplete", "new-password", "formControlName", "password"], ["matInput", "", "formControlName", "birthdate", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["picker", ""], [1, "row-reverse"], ["mat-stroked-button", "", "color", "primary"], ["mat-button", "", "disabled", ""]],
    template: function SignUpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function SignUpComponent_Template_form_submit_0_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section")(2, "mat-form-field")(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Nome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Obrigat\u00F3rio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " E-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Obrigat\u00F3rio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field")(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Usu\u00E1rio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Obrigat\u00F3rio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field")(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Palavra-chave ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " M\u00EDnimo 6 caracteres ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field")(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Nascimento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 6)(31, "mat-datepicker-toggle", 7)(32, "mat-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "footer", 9)(38, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Esqueci a senha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 4, ctx.message$));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerToggle, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 8px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n[_nghost-%COMP%]   footer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FjY291bnQvdWktYXV0aC9zcmMvbGliL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiA4cHg7XG5cbiAgZm9ybSBzZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICBmb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 3918:
/*!************************************************!*\
  !*** ./account/ui-auth/src/lib/forms/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInForm: () => (/* reexport safe */ _sign_in__WEBPACK_IMPORTED_MODULE_0__.SignInForm),
/* harmony export */   SignUpForm: () => (/* reexport safe */ _sign_up__WEBPACK_IMPORTED_MODULE_1__.SignUpForm)
/* harmony export */ });
/* harmony import */ var _sign_in__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in */ 6686);
/* harmony import */ var _sign_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up */ 5993);



/***/ }),

/***/ 6686:
/*!**************************************************!*\
  !*** ./account/ui-auth/src/lib/forms/sign-in.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInForm: () => (/* binding */ SignInForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _dev_shared_ui_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-ui-forms */ 3791);


class SignInForm extends _dev_shared_ui_forms__WEBPACK_IMPORTED_MODULE_0__.TypedFormGroup {
  constructor() {
    super({
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)]
      })
    });
  }
}

/***/ }),

/***/ 5993:
/*!**************************************************!*\
  !*** ./account/ui-auth/src/lib/forms/sign-up.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpForm: () => (/* binding */ SignUpForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _dev_shared_ui_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-ui-forms */ 3791);


class SignUpForm extends _dev_shared_ui_forms__WEBPACK_IMPORTED_MODULE_0__.TypedFormGroup {
  constructor() {
    super({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
      }),
      birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
      }),
      username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)]
      })
    });
  }
}

/***/ }),

/***/ 8496:
/*!*******************************************!*\
  !*** ./account/ui-auth/src/public-api.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountUiAuthModule: () => (/* reexport safe */ _lib_account_ui_auth_module__WEBPACK_IMPORTED_MODULE_0__.AccountUiAuthModule),
/* harmony export */   SignInComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_1__.SignInComponent),
/* harmony export */   SignUpComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent)
/* harmony export */ });
/* harmony import */ var _lib_account_ui_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/account-ui-auth.module */ 2521);
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components */ 7950);



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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 3563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _dev_account_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dev/account-data-access */ 4233);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2164);
/* harmony import */ var _shared_ui_base_src_lib_directives_menu_items_link_active_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui-base/src/lib/directives/menu-items-link-active.directive */ 9151);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/loader.component */ 2036);
















function AppComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 13)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-menu", 7, 14)(6, "button", 15)(7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "logado como");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_ng_container_22_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const auth_r3 = ctx.ngIf;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", auth_r3.email, " ");
  }
}
function AppComponent_dev_loader_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "dev-loader");
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
class AppComponent {
  constructor() {
    this.loader = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.Loader);
    this.media = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.MediaMatcher);
    this.changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef);
    this.authFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_dev_account_data_access__WEBPACK_IMPORTED_MODULE_1__.AuthFacade);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    const _mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(_mobileQueryListener);
  }
  logout() {
    this.authFacade.logout();
    this.router.navigate(['/auth']);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["dev-root"]],
    decls: 29,
    vars: 15,
    consts: [[1, "app-container"], ["color", "primary", 1, "app-toolbar"], ["routerLink", "/"], ["src", "./assets/logo.svg", "alt", "Quero Ser Dev"], ["routerLink", "/", 1, "app-name"], [1, "spacer"], ["mat-button", "", "menuItemsLinkActive", "active", "menuItemsBaseLink", "/account", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["beforeMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/account", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["mat-menu-item", "", "routerLink", "/account/groups", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], [4, "ngIf"], [1, "app-sidenav-container"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["accountMenu", "matMenu"], ["mat-menu-item", "", "disabled", ""], ["mat-menu-item", "", 3, "click"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 4)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Quero Ser Dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Contas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-menu", 7, 8)(12, "a", 9)(13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "people_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Usu\u00E1rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 10)(18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Grupos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AppComponent_ng_container_22_Template, 17, 2, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-sidenav-container", 12)(25, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AppComponent_dev_loader_27_Template, 1, 0, "dev-loader", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("app-is-mobile", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 9, ctx.authFacade.authUser$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 56 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 11, ctx.loader.active$));
      }
    },
    dependencies: [_shared_ui_base_src_lib_directives_menu_items_link_active_directive__WEBPACK_IMPORTED_MODULE_2__.MenuItemsLinkActiveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContent, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  overflow: visible;\n  z-index: 10;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-button-base[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: color 150ms ease-in-out;\n  font-size: 1rem;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-button-base.active[_ngcontent-%COMP%] {\n  color: #3df950;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-button-base[_ngcontent-%COMP%]:not(.mat-mdc-icon-button) {\n  padding: 0 16px;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]   .mat-mdc-button-base.mat-mdc-icon-button[_ngcontent-%COMP%] {\n  width: 64px;\n}\n[_nghost-%COMP%]   .app-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n[_nghost-%COMP%]   .app-is-mobile[_ngcontent-%COMP%]   .app-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n\n  z-index: 2;\n}\n[_nghost-%COMP%]   a.app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: rgba(255, 255, 255, 0.5215686275);\n  transition: color 300ms ease-in-out;\n}\n[_nghost-%COMP%]   a.app-name[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n[_nghost-%COMP%]   .app-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .mat-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n[_nghost-%COMP%]   .app-is-mobile[_ngcontent-%COMP%]   .app-sidenav-container[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFGRjtBQUtJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBSE47QUFLSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtBQUpOO0FBTU07RUFDRSxjQUFBO0FBSlI7QUFPTTtFQUNFLGVBQUE7QUFMUjtBQU9NO0VBQ0UsV0FBQTtBQUxSO0FBVUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFSSjtBQVdFO0VBQ0UsZUFBQTtFQUNBLDhFQUFBO0VBQ0EsVUFBQTtBQVRKO0FBWUU7RUFDRSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUNBQUE7QUFWSjtBQVdJO0VBQ0UsY0FBQTtBQVROO0FBYUU7RUFDRSxPQUFBO0FBWEo7QUFjRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7QUFaSjtBQWVFO0VBQ0UsY0FBQTtBQWJKIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnLi4vc2Nzcy9wYWxldHRlJyBhcyBndWk7XG5AdXNlICdzYXNzOm1hcCcgYXMgbWFwO1xuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAubWF0LXRvb2xiYXIge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG4gICAgLm1hdC1tZGMtYnV0dG9uLWJhc2Uge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDE1MG1zIGVhc2UtaW4tb3V0O1xuXG4gICAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6IG1hcC5nZXQoZ3VpLiRhY2NlbnQtcGFsZXR0ZSwgNTAwKTtcbiAgICAgIH1cblxuICAgICAgJjpub3QoLm1hdC1tZGMtaWNvbi1idXR0b24pIHtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgfVxuICAgICAgJi5tYXQtbWRjLWljb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFwcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLmFwcC1pcy1tb2JpbGUgLmFwcC10b29sYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xuICAgIHotaW5kZXg6IDI7XG4gIH1cblxuICBhLmFwcC1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmODU7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cblxuICAuYXBwLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLmFwcC1pcy1tb2JpbGUgLmFwcC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

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
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-data-access */ 3563);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





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
  static #_ = this.ɵfac = function AppInterceptor_Factory(t) {
    return new (t || AppInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_0__.Loader));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AppInterceptor,
    factory: AppInterceptor.ɵfac
  });
}

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
/* harmony import */ var _dev_account_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/account-data-access */ 4233);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _dev_shared_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dev/shared-data-access */ 3563);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _dev_account_ui_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dev/account-ui-auth */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _dev_shared_ui_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dev/shared-ui-base */ 5070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 2164);
/* harmony import */ var _angular_common_locales_extra_br__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/locales/extra/br */ 7663);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/pt */ 7595);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.interceptor */ 8059);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.component */ 4384);
/* harmony import */ var _app_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.interceptor */ 9634);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ 7470);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loader */ 8110);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared */ 3144);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routes */ 3565);
/* harmony import */ var _envs_env__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../envs/env */ 934);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 6515);































(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.registerLocaleData)(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13__["default"], 'pt-BR', _angular_common_locales_extra_br__WEBPACK_IMPORTED_MODULE_14__["default"]);
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
    providers: [(0,_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.provideHttp)(_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient), (0,_dev_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.provideLoader)(), (0,_dev_account_data_access__WEBPACK_IMPORTED_MODULE_0__.provideUser)(_envs_env__WEBPACK_IMPORTED_MODULE_11__.env.level, _envs_env__WEBPACK_IMPORTED_MODULE_11__.env.api.account), (0,_dev_account_data_access__WEBPACK_IMPORTED_MODULE_0__.provideGroup)(_envs_env__WEBPACK_IMPORTED_MODULE_11__.env.level, _envs_env__WEBPACK_IMPORTED_MODULE_11__.env.api.accountGroups), (0,_dev_account_data_access__WEBPACK_IMPORTED_MODULE_0__.provideAuth)(_envs_env__WEBPACK_IMPORTED_MODULE_11__.env.level, _envs_env__WEBPACK_IMPORTED_MODULE_11__.env.api.accountAuth), {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_15__.LOCALE_ID,
      useValue: 'pt-BR'
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HTTP_INTERCEPTORS,
      useClass: _app_interceptor__WEBPACK_IMPORTED_MODULE_6__.AppInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HTTP_INTERCEPTORS,
      useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptor,
      multi: true
    }],
    imports: [_dev_shared_ui_base__WEBPACK_IMPORTED_MODULE_3__.UiBaseModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _dev_account_ui_auth__WEBPACK_IMPORTED_MODULE_2__.AccountUiAuthModule, _shared__WEBPACK_IMPORTED_MODULE_9__.SharedMaterial.forApp(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_10__.appRoutes, {
      useHash: true,
      anchorScrolling: 'enabled',
      // enableTracing: !env.production,
      initialNavigation: 'enabledBlocking'
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent, _loader__WEBPACK_IMPORTED_MODULE_8__.LoaderComponent, _auth_auth_component__WEBPACK_IMPORTED_MODULE_5__.AuthComponent],
    imports: [_dev_shared_ui_base__WEBPACK_IMPORTED_MODULE_3__.UiBaseModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _dev_account_ui_auth__WEBPACK_IMPORTED_MODULE_2__.AccountUiAuthModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__.LayoutModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
  });
})();

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
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.component */ 4384);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.guard */ 4119);


const appRoutes = [{
  path: 'account',
  canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.authGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "account_feature_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @dev/account-feature */ 7043)).then(m => m.AccountFeatureModule)
}, {
  path: 'auth',
  component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'account'
}];

/***/ }),

/***/ 4384:
/*!********************************************!*\
  !*** ./app/src/app/auth/auth.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthComponent: () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var _dev_account_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/account-data-access */ 4233);
/* harmony import */ var _dev_account_ui_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dev/account-ui-auth */ 7947);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _account_ui_auth_src_lib_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../account/ui-auth/src/lib/components/sign-in/sign-in.component */ 1474);
/* harmony import */ var _account_ui_auth_src_lib_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../account/ui-auth/src/lib/components/sign-up/sign-up.component */ 8988);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);











class AuthComponent {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this.#tabIndex = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(0);
    this.tabIndex$ = this.#tabIndex.asObservable();
    this.authFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_dev_account_data_access__WEBPACK_IMPORTED_MODULE_0__.AuthFacade);
    this.#destroy = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  #tabIndex;
  #destroy;
  ngOnInit() {
    this.authFacade.authUser$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(600), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.#destroy), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.filter)(authUser => !!authUser)).subscribe(authUser => {
      if (authUser) {
        this.router.navigate(['/account']);
        this.#destroy.complete();
        this.#destroy.next();
      }
    });
  }
  onSelectedIndexChange(index) {
    this.#tabIndex.next(index);
  }
  onTabChanged() {
    if (this.#tabIndex.value) {
      this.signUpComponent.focus();
    } else {
      this.signInComponent.focus();
    }
  }
  onSignUp(createUser) {
    this.authFacade.register(createUser);
    this.onSelectedIndexChange(0);
  }
  static #_ = this.ɵfac = function AuthComponent_Factory(t) {
    return new (t || AuthComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AuthComponent,
    selectors: [["dev-auth"]],
    viewQuery: function AuthComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_dev_account_ui_auth__WEBPACK_IMPORTED_MODULE_1__.SignInComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_dev_account_ui_auth__WEBPACK_IMPORTED_MODULE_1__.SignUpComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.signInComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.signUpComponent = _t.first);
      }
    },
    decls: 7,
    vars: 3,
    consts: [["dynamicHeight", "", 3, "selectedIndex", "selectedIndexChange", "animationDone"], ["label", "Login"], [3, "signIn"], ["label", "Nova conta"], [3, "signUp"]],
    template: function AuthComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card")(1, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedIndexChange", function AuthComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
          return ctx.onSelectedIndexChange($event);
        })("animationDone", function AuthComponent_Template_mat_tab_group_animationDone_1_listener() {
          return ctx.onTabChanged();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-tab", 1)(4, "dev-sign-in", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("signIn", function AuthComponent_Template_dev_sign_in_signIn_4_listener($event) {
          return ctx.authFacade.login($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-tab", 3)(6, "dev-sign-up", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("signUp", function AuthComponent_Template_dev_sign_up_signUp_6_listener($event) {
          return ctx.onSignUp($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx.tabIndex$));
      }
    },
    dependencies: [_account_ui_auth_src_lib_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__.SignInComponent, _account_ui_auth_src_lib_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__.SignUpComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  width: 320px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcC9zcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLm1hdC1tZGMtY2FyZCB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 4119:
/*!****************************************!*\
  !*** ./app/src/app/auth/auth.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2164);
/* harmony import */ var _dev_account_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/account-data-access */ 4233);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const authGuard = () => {
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  const authFacade = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_dev_account_data_access__WEBPACK_IMPORTED_MODULE_0__.AuthFacade);
  return authFacade.me().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)((err, user) => {
    if (err) {
      router.navigate(['/', 'auth']);
      throw err;
    }
    return user;
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(user => !!user), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1));
};

/***/ }),

/***/ 8059:
/*!**********************************************!*\
  !*** ./app/src/app/auth/auth.interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _dev_account_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/account-data-access */ 4233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2164);






class AuthInterceptor {
  constructor(router, authFacade) {
    this.router = router;
    this.authFacade = authFacade;
  }
  intercept(req, next) {
    if (!this.authFacade.accessToken) {
      this.router.navigate(['/', 'auth']);
      this.authFacade.logout();
    }
    const bearerToken = `Bearer ${this.authFacade.accessToken}`;
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', bearerToken)
    });
    return next.handle(authRequest);
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_dev_account_data_access__WEBPACK_IMPORTED_MODULE_0__.AuthFacade));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}

/***/ }),

/***/ 8110:
/*!*************************************!*\
  !*** ./app/src/app/loader/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* reexport safe */ _loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent)
/* harmony export */ });
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.component */ 2036);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class LoaderComponent {
  static #_ = this.ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["dev-loader"]],
    decls: 1,
    vars: 0,
    consts: [[1, "sky"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
      }
    },
    styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.3137254902);\n}\n[_nghost-%COMP%]   .sky[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  border-radius: 100px 100px 0 0;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0)) 70% 30%, linear-gradient(90deg, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0)) 72% 32%, linear-gradient(0deg, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0)) 26% 42%, linear-gradient(90deg, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0)) 23% 44%, linear-gradient(0deg, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0)) 51% 54%, linear-gradient(90deg, rgba(0, 0, 0, 0), #fff, rgba(0, 0, 0, 0)) 51% 53% #020308;\n  background-size: 2px 10px, 10px 2px;\n  background-repeat: no-repeat;\n  position: relative;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .sky[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .sky[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  inset: 100% auto auto 20px;\n  height: 3px;\n  width: 20px;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0), #fff);\n  transform-origin: right;\n  transform: rotate(-20deg) translate(-20px);\n  animation: _ngcontent-%COMP%_sky 1s infinite;\n}\n[_nghost-%COMP%]   .sky[_ngcontent-%COMP%]:after {\n  inset: 100% auto auto -5px;\n}\n\n@keyframes _ngcontent-%COMP%_sky {\n  100% {\n    transform: rotate(-20deg) translate(120px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcC9zcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbURBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLDJjQUFBO0VBTUEsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU9FOztFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwREFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtBQUxKO0FBUUU7RUFDRSwwQkFBQTtBQU5KOztBQVVBO0VBQ0U7SUFDRSwwQ0FBQTtFQVBGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjUwO1xuXG4gIC5za3kge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweCAxMDBweCAwIDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwLCAjZmZmLCAjMDAwMCkgNzAlIDMwJSxcbiAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMDAsICNmZmYsICMwMDAwKSA3MiUgMzIlLFxuICAgICAgbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwLCAjZmZmLCAjMDAwMCkgMjYlIDQyJSxcbiAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMDAsICNmZmYsICMwMDAwKSAyMyUgNDQlLFxuICAgICAgbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMDAwLCAjZmZmLCAjMDAwMCkgNTElIDU0JSxcbiAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMDAsICNmZmYsICMwMDAwKSA1MSUgNTMlICMwMjAzMDg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAycHggMTBweCwgMTBweCAycHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5za3k6YmVmb3JlLFxuICAuc2t5OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaW5zZXQ6IDEwMCUgYXV0byBhdXRvIDIwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwMCwgI2ZmZik7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKSB0cmFuc2xhdGUoLTIwcHgpO1xuICAgIGFuaW1hdGlvbjogc2t5IDFzIGluZmluaXRlO1xuICB9XG5cbiAgLnNreTphZnRlciB7XG4gICAgaW5zZXQ6IDEwMCUgYXV0byBhdXRvIC01cHg7XG4gICAgLy8gYW5pbWF0aW9uLWRlbGF5OiAwLjc1cztcbiAgfVxufVxuQGtleWZyYW1lcyBza3kge1xuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpIHRyYW5zbGF0ZSgxMjBweCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 3144:
/*!*************************************!*\
  !*** ./app/src/app/shared/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedMaterial: () => (/* reexport safe */ _material__WEBPACK_IMPORTED_MODULE_0__.SharedMaterial)
/* harmony export */ });
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material */ 582);


/***/ }),

/***/ 582:
/*!****************************************!*\
  !*** ./app/src/app/shared/material.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedMaterial: () => (/* binding */ SharedMaterial)
/* harmony export */ });
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);









class SharedMaterial {
  static forApp() {
    return [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.LayoutModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__.MatDividerModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__.MatSidenavModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule];
  }
}

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
  level: 'testing',
  api: {
    account: [],
    accountAuth: '',
    accountGroups: []
  }
};

/***/ }),

/***/ 3872:
/*!*************************!*\
  !*** ./app/src/main.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8974);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 3563:
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
/* harmony export */   provideByEnv: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.provideByEnv),
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3317);

class Store {
  #state;
  get state() {
    return this.#state.getValue();
  }
  constructor(initialState) {
    const state = Object.freeze(initialState);
    this.#state = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(state);
  }
  select(mapFn) {
    return this.#state.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(state => mapFn(state)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
  }
  setState(newState) {
    this.#state.next({
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
/* harmony export */   provideByEnv: () => (/* binding */ provideByEnv),
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
function provideByEnv(prod, dev, ...others) {
  return (level, api) => {
    switch (level) {
      case 'staging':
      case 'production':
      case 'development':
        return [prod(api), ...others];
      case 'testing':
      default:
        return [dev(api), ...others];
    }
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4980);

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
/* harmony import */ var _home_runner_work_dev_dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);

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
class IndexedDbService {
  #database;
  #pendingTransactions = [];
  constructor(database, name) {
    this.name = name;
    this.#database = database;
  }
  static create(name, version, stores) {
    return (0,_home_runner_work_dev_dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const database = yield IndexedDbService.#openDatabase(name, version, stores);
      return new IndexedDbService(database, name);
    })();
  }
  static #openDatabase(name, version, stores) {
    return (0,_home_runner_work_dev_dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        return yield IndexedDbService.#doOpenDatabase(name, version, stores);
      } catch (err) {
        if (err instanceof MissingStoresError) {
          console.info(`Attempting to recreate the IndexedDB once.`, name);
          try {
            // Try to delete the db
            yield IndexedDbService.#deleteDatabase(err.db);
          } catch (error) {
            console.error(`Error while deleting the IndexedDB`, error
            // getErrorMessage(error)
            );

            throw error;
          }
          return yield IndexedDbService.#doOpenDatabase(name, version, stores);
        }
        throw err;
      }
    })();
  }
  static #deleteDatabase(indexedDB) {
    return new Promise((c, e) => {
      // Close any opened connections
      indexedDB.close();
      // Delete the db
      const deleteRequest = window.indexedDB.deleteDatabase(indexedDB.name);
      deleteRequest.onerror = () => e(deleteRequest.error);
      deleteRequest.onsuccess = () => c();
    });
  }
  static #doOpenDatabase(name, version, stores) {
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
  hasPendingTransactions() {
    return this.#pendingTransactions.length > 0;
  }
  close() {
    if (this.#pendingTransactions.length) {
      this.#pendingTransactions.splice(0, this.#pendingTransactions.length).forEach(transaction => transaction.abort());
    }
    this.#database?.close();
    this.#database = null;
  }
  runInTransaction(store, transactionMode, dbRequestFn) {
    var _this = this;
    return (0,_home_runner_work_dev_dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.#database) {
        throw new DBClosedError(_this.name);
      }
      const transaction = _this.#database.transaction(store, transactionMode);
      _this.#pendingTransactions.push(transaction);
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
      }).finally(() => _this.#pendingTransactions.splice(_this.#pendingTransactions.indexOf(transaction), 1));
    })();
  }
  getKeyValues(store, isValid) {
    var _this2 = this;
    return (0,_home_runner_work_dev_dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.#database) {
        throw new DBClosedError(_this2.name);
      }
      const transaction = _this2.#database.transaction(store, 'readonly');
      _this2.#pendingTransactions.push(transaction);
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
      }).finally(() => _this2.#pendingTransactions.splice(_this2.#pendingTransactions.indexOf(transaction), 1));
    })();
  }
}
// const db = IndexedDbService.create('db', undefined, ['store1'])
// console.log(db)

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
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
    const user = this.collection.find(item => item.id === id);
    if (!user) throw new Error('not found');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(user ?? null);
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

/***/ 4571:
/*!*************************************************!*\
  !*** ./shared/data-access/src/lib/types/env.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5623:
/*!***************************************************!*\
  !*** ./shared/data-access/src/lib/types/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ 4571);
/* harmony import */ var _provide_svc_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provide-svc.ts */ 9749);
/* harmony import */ var _svc_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svc-of */ 8194);




/***/ }),

/***/ 9749:
/*!************************************************************!*\
  !*** ./shared/data-access/src/lib/types/provide-svc.ts.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8194:
/*!****************************************************!*\
  !*** ./shared/data-access/src/lib/types/svc-of.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


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
/* harmony export */   provideByEnv: () => (/* reexport safe */ _lib_data_access__WEBPACK_IMPORTED_MODULE_1__.provideByEnv),
/* harmony export */   provideHttp: () => (/* reexport safe */ _lib_data_access__WEBPACK_IMPORTED_MODULE_1__.provideHttp),
/* harmony export */   provideLoader: () => (/* reexport safe */ _lib_data_access__WEBPACK_IMPORTED_MODULE_1__.provideLoader),
/* harmony export */   provideServiceMock: () => (/* reexport safe */ _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__.provideServiceMock)
/* harmony export */ });
/* harmony import */ var _lib_infrastructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/infrastructure */ 7499);
/* harmony import */ var _lib_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/data-access */ 6412);
/* harmony import */ var _lib_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/application */ 5295);
/* harmony import */ var _lib_ports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ports */ 2359);
/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/types */ 5623);






/***/ }),

/***/ 5070:
/*!*************************************!*\
  !*** ./shared/ui-base/src/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureContainer: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.FeatureContainer),
/* harmony export */   FormDialog: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.FormDialog),
/* harmony export */   ListSelectable: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.ListSelectable),
/* harmony export */   SelectionMenu: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.SelectionMenu),
/* harmony export */   SelectionMenuComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.SelectionMenuComponent),
/* harmony export */   SharedMaterial: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.SharedMaterial),
/* harmony export */   UiBaseModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UiBaseModule)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 5995);


/***/ }),

/***/ 8122:
/*!**********************************************************!*\
  !*** ./shared/ui-base/src/lib/base/feature-container.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureContainer: () => (/* binding */ FeatureContainer)
/* harmony export */ });
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dev/shared-util-data */ 6866);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ 3806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);






class FeatureContainer {
  constructor() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource();
    this.selection = new _components__WEBPACK_IMPORTED_MODULE_1__.SelectionMenu(true, []);
  }
  get meta$() {
    return this.facade.meta$;
  }
  initialize() {
    const pagination$ = (this.list ? this.list.paginator : this.paginator).page.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.takeUntilDestroyed)(this.destroyRef));
    const sorted$ = (this.list ? this.list.sort : this.sort).sortChange.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.takeUntilDestroyed)(this.destroyRef));
    const items$ = this.facade.data$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.takeUntilDestroyed)(this.destroyRef));
    const warnings$ = this.facade.warning$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.takeUntilDestroyed)(this.destroyRef));
    pagination$.subscribe(value => {
      const order = this.sort.direction ? _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Order.ASC : _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Order.DESC;
      this.update(this.sort.active, order, value.pageIndex);
    });
    sorted$.subscribe(value => {
      const order = value.direction ? _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Order.ASC : _dev_shared_util_data__WEBPACK_IMPORTED_MODULE_0__.Order.DESC;
      this.update(value.active, order, this.paginator.pageIndex);
    });
    items$.subscribe(data => {
      this.selection.clear();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.data = data;
    });
    warnings$.subscribe(warnings => {
      if (warnings) this.snackBar.open(warnings, 'OK', {
        duration: 6000
      });
    });
    this.facade.find();
  }
  get columnsHasSelect() {
    const columns = this.columns.value ?? [];
    return columns.includes('select');
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
  onCreate() {
    const ref = this.openCreateDialog();
    ref.componentInstance.message$ = this.facade.warning$;
    ref.componentInstance.form.submitted$.subscribe(value => {
      if (value) {
        this.facade.create(value);
        ref.close();
      }
    });
  }
  onUpdate(data) {
    const ref = this.openUpdateDialog(data);
    ref.componentInstance.message$ = this.facade.warning$;
    ref.componentInstance.form.submitted$.subscribe(value => {
      if (value) {
        this.facade.update(value);
        ref.close();
      }
    });
  }
  filter(where) {
    this.facade.filter({
      where
    });
  }
  update(sort, order, page) {
    this.facade.find({
      options: {
        page: page + 1,
        sort,
        order
      }
    });
  }
  remove(id) {
    this.facade.remove(id);
  }
  removeBulk() {
    if (this.selection.hasValue()) {
      const ids = this.selection.selected.map(({
        id
      }) => id);
      this.facade.removeBulk(ids);
      this.selection.clear();
    }
  }
  static #_ = this.ɵfac = function FeatureContainer_Factory(t) {
    return new (t || FeatureContainer)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: FeatureContainer
  });
}

/***/ }),

/***/ 721:
/*!****************************************************!*\
  !*** ./shared/ui-base/src/lib/base/form-dialog.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormDialog: () => (/* binding */ FormDialog)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4980);

class FormDialog {
  constructor() {
    this.message$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
  }
}

/***/ }),

/***/ 5256:
/*!**********************************************!*\
  !*** ./shared/ui-base/src/lib/base/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureContainer: () => (/* reexport safe */ _feature_container__WEBPACK_IMPORTED_MODULE_0__.FeatureContainer),
/* harmony export */   FormDialog: () => (/* reexport safe */ _form_dialog__WEBPACK_IMPORTED_MODULE_1__.FormDialog),
/* harmony export */   ListSelectable: () => (/* reexport safe */ _list_selectable__WEBPACK_IMPORTED_MODULE_2__.ListSelectable)
/* harmony export */ });
/* harmony import */ var _feature_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-container */ 8122);
/* harmony import */ var _form_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-dialog */ 721);
/* harmony import */ var _list_selectable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-selectable */ 394);




/***/ }),

/***/ 394:
/*!********************************************************!*\
  !*** ./shared/ui-base/src/lib/base/list-selectable.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListSelectable: () => (/* binding */ ListSelectable)
/* harmony export */ });
class ListSelectable {
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
}

/***/ }),

/***/ 3806:
/*!****************************************************!*\
  !*** ./shared/ui-base/src/lib/components/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectionMenu: () => (/* reexport safe */ _selection_menu_selection_menu__WEBPACK_IMPORTED_MODULE_1__.SelectionMenu),
/* harmony export */   SelectionMenuComponent: () => (/* reexport safe */ _selection_menu_selection_menu_component__WEBPACK_IMPORTED_MODULE_0__.SelectionMenuComponent)
/* harmony export */ });
/* harmony import */ var _selection_menu_selection_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection-menu/selection-menu.component */ 6269);
/* harmony import */ var _selection_menu_selection_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selection-menu/selection-menu */ 6197);



/***/ }),

/***/ 6269:
/*!**************************************************************************************!*\
  !*** ./shared/ui-base/src/lib/components/selection-menu/selection-menu.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectionMenuComponent: () => (/* binding */ SelectionMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _selection_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection-menu */ 6197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);






const _c0 = [[["mat-menu"]]];
const _c1 = ["mat-menu"];
class SelectionMenuComponent {
  static #_ = this.ɵfac = function SelectionMenuComponent_Factory(t) {
    return new (t || SelectionMenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SelectionMenuComponent,
    selectors: [["dev-selection-menu"]],
    contentQueries: function SelectionMenuComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenu, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
      }
    },
    inputs: {
      selection: "selection"
    },
    ngContentSelectors: _c1,
    decls: 6,
    vars: 2,
    consts: [["mat-stroked-button", "", 3, "disabled", "matMenuTriggerFor"]],
    template: function SelectionMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "checklist");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Com selecionados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.selection.hasValue() === false)("matMenuTriggerFor", ctx.menu);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuTrigger],
    styles: ["[_nghost-%COMP%] {\n        display: block;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NoYXJlZC91aS1iYXNlL3NyYy9saWIvY29tcG9uZW50cy9zZWxlY3Rpb24tbWVudS9zZWxlY3Rpb24tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0UsY0FBYztNQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6197:
/*!****************************************************************************!*\
  !*** ./shared/ui-base/src/lib/components/selection-menu/selection-menu.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectionMenu: () => (/* binding */ SelectionMenu)
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ 636);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);


class SelectionMenu extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.SelectionModel {
  get selected$() {
    return this.changed.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(() => this.selected));
  }
}

/***/ }),

/***/ 1926:
/*!****************************************************!*\
  !*** ./shared/ui-base/src/lib/directives/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuItemsLinkActiveDirective: () => (/* reexport safe */ _menu_items_link_active_directive__WEBPACK_IMPORTED_MODULE_0__.MenuItemsLinkActiveDirective)
/* harmony export */ });
/* harmony import */ var _menu_items_link_active_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items-link-active.directive */ 9151);


/***/ }),

/***/ 9151:
/*!*******************************************************************************!*\
  !*** ./shared/ui-base/src/lib/directives/menu-items-link-active.directive.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuItemsLinkActiveDirective: () => (/* binding */ MenuItemsLinkActiveDirective)
/* harmony export */ });
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2164);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






class MenuItemsLinkActiveDirective {
  constructor(router, destroyRef, elementRef) {
    this.menuItemsBaseLink = '';
    this.menuItemsLinkActive = 'active';
    router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(destroyRef)).subscribe(() => {
      if (router.url.startsWith(this.menuItemsBaseLink)) {
        elementRef.nativeElement.classList.add(this.menuItemsLinkActive ?? 'active');
      } else {
        elementRef.nativeElement.classList.remove(this.menuItemsLinkActive ?? 'active');
      }
    });
  }
  static #_ = this.ɵfac = function MenuItemsLinkActiveDirective_Factory(t) {
    return new (t || MenuItemsLinkActiveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.DestroyRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
    type: MenuItemsLinkActiveDirective,
    selectors: [["", "devMenuLinkActive", ""], ["", "menuItemsLinkActive", ""]],
    inputs: {
      menuItemsBaseLink: "menuItemsBaseLink",
      menuItemsLinkActive: "menuItemsLinkActive"
    }
  });
}

/***/ }),

/***/ 6767:
/*!*************************************************!*\
  !*** ./shared/ui-base/src/lib/modules/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedMaterial: () => (/* reexport safe */ _shared_material__WEBPACK_IMPORTED_MODULE_0__.SharedMaterial)
/* harmony export */ });
/* harmony import */ var _shared_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-material */ 5698);


/***/ }),

/***/ 5698:
/*!***********************************************************!*\
  !*** ./shared/ui-base/src/lib/modules/shared-material.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedMaterial: () => (/* binding */ SharedMaterial)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);












class SharedMaterial {
  static #_ = this.ɵfac = function SharedMaterial_Factory(t) {
    return new (t || SharedMaterial)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: SharedMaterial
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedMaterial, {
    exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule]
  });
})();

/***/ }),

/***/ 163:
/*!**************************************************!*\
  !*** ./shared/ui-base/src/lib/ui-base.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiBaseModule: () => (/* binding */ UiBaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2164);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 3806);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ 1926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);








class UiBaseModule {
  static #_ = this.ɵfac = function UiBaseModule_Factory(t) {
    return new (t || UiBaseModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: UiBaseModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiBaseModule, {
    declarations: [_components__WEBPACK_IMPORTED_MODULE_0__.SelectionMenuComponent, _directives__WEBPACK_IMPORTED_MODULE_1__.MenuItemsLinkActiveDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuModule],
    exports: [_components__WEBPACK_IMPORTED_MODULE_0__.SelectionMenuComponent, _directives__WEBPACK_IMPORTED_MODULE_1__.MenuItemsLinkActiveDirective]
  });
})();

/***/ }),

/***/ 5995:
/*!******************************************!*\
  !*** ./shared/ui-base/src/public-api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureContainer: () => (/* reexport safe */ _lib_base__WEBPACK_IMPORTED_MODULE_3__.FeatureContainer),
/* harmony export */   FormDialog: () => (/* reexport safe */ _lib_base__WEBPACK_IMPORTED_MODULE_3__.FormDialog),
/* harmony export */   ListSelectable: () => (/* reexport safe */ _lib_base__WEBPACK_IMPORTED_MODULE_3__.ListSelectable),
/* harmony export */   SelectionMenu: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_1__.SelectionMenu),
/* harmony export */   SelectionMenuComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_1__.SelectionMenuComponent),
/* harmony export */   SharedMaterial: () => (/* reexport safe */ _lib_modules__WEBPACK_IMPORTED_MODULE_2__.SharedMaterial),
/* harmony export */   UiBaseModule: () => (/* reexport safe */ _lib_ui_base_module__WEBPACK_IMPORTED_MODULE_0__.UiBaseModule)
/* harmony export */ });
/* harmony import */ var _lib_ui_base_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui-base.module */ 163);
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components */ 3806);
/* harmony import */ var _lib_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/modules */ 6767);
/* harmony import */ var _lib_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/base */ 5256);





/***/ }),

/***/ 3791:
/*!**************************************!*\
  !*** ./shared/ui-forms/src/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.FilterByComponent),
/* harmony export */   FilterByForm: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.FilterByForm),
/* harmony export */   FilterFieldsComponent: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.FilterFieldsComponent),
/* harmony export */   FilterFieldsForm: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.FilterFieldsForm),
/* harmony export */   TypedFormArray: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.TypedFormArray),
/* harmony export */   TypedFormGroup: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.TypedFormGroup),
/* harmony export */   UiFormsModule: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UiFormsModule)
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 5741);


/***/ }),

/***/ 9363:
/*!***********************************************!*\
  !*** ./shared/ui-forms/src/lib/base/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypedFormArray: () => (/* reexport safe */ _typed_form_array__WEBPACK_IMPORTED_MODULE_0__.TypedFormArray),
/* harmony export */   TypedFormGroup: () => (/* reexport safe */ _typed_form_group__WEBPACK_IMPORTED_MODULE_1__.TypedFormGroup)
/* harmony export */ });
/* harmony import */ var _typed_form_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typed-form-array */ 8273);
/* harmony import */ var _typed_form_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typed-form-group */ 1599);



/***/ }),

/***/ 8273:
/*!**********************************************************!*\
  !*** ./shared/ui-forms/src/lib/base/typed-form-array.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypedFormArray: () => (/* binding */ TypedFormArray)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 8849);

class TypedFormArray extends _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray {}

/***/ }),

/***/ 1599:
/*!**********************************************************!*\
  !*** ./shared/ui-forms/src/lib/base/typed-form-group.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypedFormGroup: () => (/* binding */ TypedFormGroup)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);


class TypedFormGroup extends _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup {
  constructor() {
    super(...arguments);
    this.#submitted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.submitted$ = this.#submitted.asObservable();
  }
  #submitted;
  getValue() {
    return this.value;
  }
  submit() {
    if (this.valid) {
      this.#submitted.next(this.value);
    } else {
      this.markAllAsTouched();
    }
  }
}

/***/ }),

/***/ 4189:
/*!*****************************************************************************!*\
  !*** ./shared/ui-forms/src/lib/components/filter-by/filter-by.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByComponent: () => (/* binding */ FilterByComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 3517);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var _filter_by_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-by.form */ 8835);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);















const _c0 = ["boolPortalField"];
const _c1 = ["numberPortalField"];
const _c2 = ["textPortalField"];
const _c3 = ["datePortalField"];
function FilterByComponent_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", field_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", field_r10.text, " ");
  }
}
function FilterByComponent_ng_template_7_Template(rf, ctx) {}
function FilterByComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "mat-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r3.selected$)) == null ? null : tmp_0_0.text, " ");
  }
}
function FilterByComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r5.selected$)) == null ? null : tmp_0_0.text, " ");
  }
}
function FilterByComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r7.selected$)) == null ? null : tmp_0_0.text, " ");
  }
}
function FilterByComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 14)(5, "mat-datepicker-toggle", 15)(6, "mat-datepicker", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, ctx_r9.selected$)) == null ? null : tmp_0_0.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r11);
  }
}
class FilterByComponent {
  #selected;
  #viewContainerRef;
  onFieldChange(field) {
    this.#selected.next(field);
    this.form.controls.value.reset();
    this.selectedPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.TemplatePortal(this.#getTemplateByFieldType(field), this.#viewContainerRef);
  }
  constructor(destroyRef) {
    this.destroyRef = destroyRef;
    this.form = new _filter_by_form__WEBPACK_IMPORTED_MODULE_0__.FilterByForm();
    this.fields = [];
    this.filterByChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.#selected = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.selected$ = this.#selected.asObservable();
    this.#viewContainerRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef);
  }
  ngOnInit() {
    this.form.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(400), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef)).subscribe(({
      field,
      value = ''
    }) => {
      const prop = field.value;
      this.filterByChange.emit({
        [prop]: value
      });
    });
  }
  #getTemplateByFieldType(field) {
    switch (field.type) {
      case 'bool':
        return this.boolPortalField;
      case 'text':
        return this.textPortalField;
      case 'number':
        return this.numberPortalField;
      case 'date':
        return this.datePortalField;
      default:
        return this.textPortalField;
    }
  }
  static #_ = this.ɵfac = function FilterByComponent_Factory(t) {
    return new (t || FilterByComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FilterByComponent,
    selectors: [["dev-filter-by"]],
    viewQuery: function FilterByComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.boolPortalField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.numberPortalField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.textPortalField = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.datePortalField = _t.first);
      }
    },
    inputs: {
      form: "form",
      fields: "fields"
    },
    outputs: {
      filterByChange: "filterByChange"
    },
    decls: 16,
    vars: 3,
    consts: [[1, "row", 3, "formGroup"], [1, "col-3"], ["formControlName", "field", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-4"], [3, "cdkPortalOutlet"], ["boolPortalField", ""], ["numberPortalField", ""], ["textPortalField", ""], ["datePortalField", ""], [3, "value"], ["formControlName", "value"], ["matInput", "", "type", "number", "formControlName", "value"], ["matInput", "", "formControlName", "value"], ["matInput", "", "formControlName", "value", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["picker", ""]],
    template: function FilterByComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Buscar por");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function FilterByComponent_Template_mat_select_selectionChange_4_listener($event) {
          return ctx.onFieldChange($event.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FilterByComponent_mat_option_5_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FilterByComponent_ng_template_7_Template, 0, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FilterByComponent_ng_template_8_Template, 4, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FilterByComponent_ng_template_10_Template, 5, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FilterByComponent_ng_template_12_Template, 5, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FilterByComponent_ng_template_14_Template, 8, 5, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkPortalOutlet", ctx.selectedPortal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.CdkPortalOutlet, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 8835:
/*!************************************************************************!*\
  !*** ./shared/ui-forms/src/lib/components/filter-by/filter-by.form.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByForm: () => (/* binding */ FilterByForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base */ 9363);


class FilterByForm extends _base__WEBPACK_IMPORTED_MODULE_0__.TypedFormGroup {
  constructor(value) {
    super({
      field: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
      }),
      value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl()
    });
    if (value) {
      this.controls.field.patchValue(value);
    }
  }
}

/***/ }),

/***/ 1374:
/*!*************************************************************************************!*\
  !*** ./shared/ui-forms/src/lib/components/filter-fields/filter-fields.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterFieldsComponent: () => (/* binding */ FilterFieldsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _filter_fields_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-fields.form */ 131);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 655);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);












function FilterFieldsComponent_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", field_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", field_r1.text, " ");
  }
}
function makeFilter(fields = [], value) {
  return fields.reduce((prev, curr) => ({
    ...prev,
    [`${curr}`]: value
  }), {});
}
class FilterFieldsComponent {
  constructor(destroyRef) {
    this.destroyRef = destroyRef;
    this.form = new _filter_fields_form__WEBPACK_IMPORTED_MODULE_0__.FilterFieldsForm();
    this.fields = [];
    this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    this.form.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(400), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.takeUntilDestroyed)(this.destroyRef)).subscribe(({
      fields,
      search = ''
    }) => {
      this.filterChange.emit(makeFilter(fields, search));
    });
  }
  static #_ = this.ɵfac = function FilterFieldsComponent_Factory(t) {
    return new (t || FilterFieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FilterFieldsComponent,
    selectors: [["dev-filter-fields"]],
    inputs: {
      form: "form",
      fields: "fields"
    },
    outputs: {
      filterChange: "filterChange"
    },
    decls: 13,
    vars: 2,
    consts: [[1, "row", 3, "formGroup"], [1, "col-2"], ["formControlName", "fields", "multiple", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-8"], ["matPrefix", ""], ["matInput", "", "formControlName", "search"], [3, "value"]],
    template: function FilterFieldsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Buscar em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FilterFieldsComponent_mat_option_5_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Busca ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6)(12, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fields);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatPrefix, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 131:
/*!********************************************************************************!*\
  !*** ./shared/ui-forms/src/lib/components/filter-fields/filter-fields.form.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterFieldsForm: () => (/* binding */ FilterFieldsForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 8849);

class FilterFieldsForm extends _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup {
  constructor(fields = []) {
    super({
      fields: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(),
      search: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl()
    });
    this.patchValue({
      fields
    });
  }
}

/***/ }),

/***/ 1629:
/*!*****************************************************!*\
  !*** ./shared/ui-forms/src/lib/components/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByComponent: () => (/* reexport safe */ _filter_by_filter_by_component__WEBPACK_IMPORTED_MODULE_2__.FilterByComponent),
/* harmony export */   FilterByForm: () => (/* reexport safe */ _filter_by_filter_by_form__WEBPACK_IMPORTED_MODULE_3__.FilterByForm),
/* harmony export */   FilterFieldsComponent: () => (/* reexport safe */ _filter_fields_filter_fields_component__WEBPACK_IMPORTED_MODULE_0__.FilterFieldsComponent),
/* harmony export */   FilterFieldsForm: () => (/* reexport safe */ _filter_fields_filter_fields_form__WEBPACK_IMPORTED_MODULE_1__.FilterFieldsForm)
/* harmony export */ });
/* harmony import */ var _filter_fields_filter_fields_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-fields/filter-fields.component */ 1374);
/* harmony import */ var _filter_fields_filter_fields_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-fields/filter-fields.form */ 131);
/* harmony import */ var _filter_by_filter_by_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-by/filter-by.component */ 4189);
/* harmony import */ var _filter_by_filter_by_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-by/filter-by.form */ 8835);





/***/ }),

/***/ 2658:
/*!***************************************************************************************!*\
  !*** ./shared/ui-forms/src/lib/components/visible-fields/visible-fields.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisibleFieldsComponent: () => (/* binding */ VisibleFieldsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 5309);









function VisibleFieldsComponent_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sele\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function VisibleFieldsComponent_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", field_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r3.text, " ");
  }
}
function VisibleFieldsComponent_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "a\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class VisibleFieldsComponent extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor {
  get showSelectOption() {
    return this.extra.includes('select');
  }
  get showActionsOption() {
    return this.extra.includes('actions');
  }
  get control() {
    return this.ngControl.control;
  }
  constructor(renderer2, elementRef, ngControl) {
    super(renderer2, elementRef);
    this.ngControl = ngControl;
    this.fields = [];
    this.extra = [];
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
    this.getStore = id => {
      return JSON.parse(localStorage.getItem(id) ?? 'null');
    };
    this.setStore = id => value => {
      localStorage.setItem(id, JSON.stringify(value));
    };
    ngControl.valueAccessor = this;
  }
  ngOnInit() {
    const idForStoreOnStorage = this.id;
    if (idForStoreOnStorage) {
      const value = this.getStore(idForStoreOnStorage);
      if (value) this.control.setValue(value);
      this.control.valueChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_2__.takeUntilDestroyed)(this.destroyRef)).subscribe(this.setStore(idForStoreOnStorage));
    }
  }
  static #_ = this.ɵfac = function VisibleFieldsComponent_Factory(t) {
    return new (t || VisibleFieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: VisibleFieldsComponent,
    selectors: [["dev-visible-fields"]],
    inputs: {
      fields: "fields",
      id: "id",
      extra: "extra"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    decls: 7,
    vars: 4,
    consts: [["multiple", "", 3, "formControl"], ["value", "select", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "actions", 4, "ngIf"], ["value", "select"], [3, "value"], ["value", "actions"]],
    template: function VisibleFieldsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Campos vis\u00EDveis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisibleFieldsComponent_mat_option_4_Template, 2, 0, "mat-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VisibleFieldsComponent_mat_option_5_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VisibleFieldsComponent_mat_option_6_Template, 2, 0, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSelectOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showActionsOption);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
    styles: ["[_nghost-%COMP%] {\n        display: block;\n      }\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NoYXJlZC91aS1mb3Jtcy9zcmMvbGliL2NvbXBvbmVudHMvdmlzaWJsZS1maWVsZHMvdmlzaWJsZS1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGNBQWM7TUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 1010:
/*!********************************************************!*\
  !*** ./shared/ui-forms/src/lib/interfaces/field-by.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3486:
/*!************************************************************!*\
  !*** ./shared/ui-forms/src/lib/interfaces/field-option.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3797:
/*!*****************************************************!*\
  !*** ./shared/ui-forms/src/lib/interfaces/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-by */ 1010);
/* harmony import */ var _field_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-option */ 3486);



/***/ }),

/***/ 8144:
/*!************************************************!*\
  !*** ./shared/ui-forms/src/lib/types/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typed_form_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typed-form-model */ 875);
/* harmony import */ var _typed_form_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typed-form-validator */ 620);
/* harmony import */ var _typed_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typed-form */ 9683);




/***/ }),

/***/ 875:
/*!***********************************************************!*\
  !*** ./shared/ui-forms/src/lib/types/typed-form-model.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 620:
/*!***************************************************************!*\
  !*** ./shared/ui-forms/src/lib/types/typed-form-validator.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9683:
/*!*****************************************************!*\
  !*** ./shared/ui-forms/src/lib/types/typed-form.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7414:
/*!****************************************************!*\
  !*** ./shared/ui-forms/src/lib/ui-forms.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UiFormsModule: () => (/* binding */ UiFormsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ 3517);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 1629);
/* harmony import */ var _components_visible_fields_visible_fields_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/visible-fields/visible-fields.component */ 2658);
/* harmony import */ var _components_filter_by_filter_by_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/filter-by/filter-by.component */ 4189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);


















class UiFormsModule {
  static #_ = this.ɵfac = function UiFormsModule_Factory(t) {
    return new (t || UiFormsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: UiFormsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.PortalModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatNativeDateModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UiFormsModule, {
    declarations: [_components__WEBPACK_IMPORTED_MODULE_0__.FilterFieldsComponent, _components_visible_fields_visible_fields_component__WEBPACK_IMPORTED_MODULE_1__.VisibleFieldsComponent, _components_filter_by_filter_by_component__WEBPACK_IMPORTED_MODULE_2__.FilterByComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.PortalModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatNativeDateModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule],
    exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipsModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__.MatSlideToggleModule, _components__WEBPACK_IMPORTED_MODULE_0__.FilterFieldsComponent, _components_visible_fields_visible_fields_component__WEBPACK_IMPORTED_MODULE_1__.VisibleFieldsComponent, _components_filter_by_filter_by_component__WEBPACK_IMPORTED_MODULE_2__.FilterByComponent]
  });
})();

/***/ }),

/***/ 5741:
/*!*******************************************!*\
  !*** ./shared/ui-forms/src/public-api.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterByComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_1__.FilterByComponent),
/* harmony export */   FilterByForm: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_1__.FilterByForm),
/* harmony export */   FilterFieldsComponent: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_1__.FilterFieldsComponent),
/* harmony export */   FilterFieldsForm: () => (/* reexport safe */ _lib_components__WEBPACK_IMPORTED_MODULE_1__.FilterFieldsForm),
/* harmony export */   TypedFormArray: () => (/* reexport safe */ _lib_base__WEBPACK_IMPORTED_MODULE_4__.TypedFormArray),
/* harmony export */   TypedFormGroup: () => (/* reexport safe */ _lib_base__WEBPACK_IMPORTED_MODULE_4__.TypedFormGroup),
/* harmony export */   UiFormsModule: () => (/* reexport safe */ _lib_ui_forms_module__WEBPACK_IMPORTED_MODULE_0__.UiFormsModule)
/* harmony export */ });
/* harmony import */ var _lib_ui_forms_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui-forms.module */ 7414);
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components */ 1629);
/* harmony import */ var _lib_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/interfaces */ 3797);
/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/types */ 8144);
/* harmony import */ var _lib_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/base */ 9363);






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
/* harmony export */   UseCase: () => (/* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.UseCase),
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2389);
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
/* harmony export */   Store: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_4__.Store),
/* harmony export */   UseCase: () => (/* reexport safe */ _use_case__WEBPACK_IMPORTED_MODULE_5__.UseCase)
/* harmony export */ });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ 3766);
/* harmony import */ var _facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facade */ 9628);
/* harmony import */ var _page_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-meta */ 9487);
/* harmony import */ var _paged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paged */ 5150);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ 7076);
/* harmony import */ var _use_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-case */ 3135);







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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3317);

class Store {
  #state;
  get state() {
    return this.#state.getValue();
  }
  constructor(initialState) {
    const state = Object.freeze(initialState);
    this.#state = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(state);
  }
  select(mapFn) {
    return this.#state.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(state => mapFn(state)), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
  }
  setState(newState) {
    this.#state.next({
      ...this.state,
      ...newState
    });
  }
}

/***/ }),

/***/ 3135:
/*!***************************************************!*\
  !*** ./shared/util-data/src/lib/base/use-case.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UseCase: () => (/* binding */ UseCase)
/* harmony export */ });
class UseCase {}

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

/***/ 2276:
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

/***/ 6706:
/*!****************************************************!*\
  !*** ./shared/util-data/src/lib/types/abstract.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


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
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ 6706);
/* harmony import */ var _fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fn */ 9926);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ 3420);
/* harmony import */ var _where__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./where */ 9938);





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
/* harmony export */   UseCase: () => (/* reexport safe */ _lib_base__WEBPACK_IMPORTED_MODULE_1__.UseCase),
/* harmony export */   by: () => (/* reexport safe */ _lib_filter__WEBPACK_IMPORTED_MODULE_5__.by),
/* harmony export */   create: () => (/* reexport safe */ _lib_di__WEBPACK_IMPORTED_MODULE_0__.create),
/* harmony export */   enumOptions: () => (/* reexport safe */ _lib_mapper__WEBPACK_IMPORTED_MODULE_6__.enumOptions),
/* harmony export */   orderOptions: () => (/* reexport safe */ _lib_sort__WEBPACK_IMPORTED_MODULE_3__.orderOptions),
/* harmony export */   token: () => (/* reexport safe */ _lib_di__WEBPACK_IMPORTED_MODULE_0__.token),
/* harmony export */   where: () => (/* reexport safe */ _lib_filter__WEBPACK_IMPORTED_MODULE_5__.where)
/* harmony export */ });
/* harmony import */ var _lib_di__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/di */ 2276);
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