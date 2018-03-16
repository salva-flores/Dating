webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, izi) {
        this.authService = authService;
        this.router = router;
        this.izi = izi;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.izi.error({ position: 'topRight', title: 'Error', message: 'Not logged in!', transitionIn: 'fadeInLeft', transitionOut: 'fadeOut', animateInside: false });
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__["b" /* Ng2IzitoastService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/prevent-unsaved-changes.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreventUnsavedChanges; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreventUnsavedChanges = /** @class */ (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return confirm('Desea continuar sin guardar sus cambios');
        }
        return true;
    };
    PreventUnsavedChanges = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PreventUnsavedChanges);
    return PreventUnsavedChanges;
}());



/***/ }),

/***/ "../../../../../src/app/_models/pagination.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatedResult; });
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/lists.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// tslint:disable-next-line:import-blacklist



var ListsResolver = /** @class */ (function () {
    function ListsResolver(userService, router, izi) {
        this.userService = userService;
        this.router = router;
        this.izi = izi;
        this.pageSize = 5;
        this.pageNumber = 1;
        this.likesParam = 'Likers';
    }
    ListsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).catch(function (error) {
            _this.izi.error({ position: 'topRight', title: 'Error!', message: 'Hubo un problema al recuperar los datos...' });
            _this.router.navigate(['/home']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].of(null);
        });
    };
    ListsResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng2_izitoast__["b" /* Ng2IzitoastService */]])
    ], ListsResolver);
    return ListsResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/member-detail.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// tslint:disable-next-line:import-blacklist



var MemberDetailResolver = /** @class */ (function () {
    function MemberDetailResolver(userService, router, izi) {
        this.userService = userService;
        this.router = router;
        this.izi = izi;
    }
    MemberDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(route.params['id']).catch(function (error) {
            _this.izi.error({ position: 'topRight', title: 'Error!', message: 'Hubo un problema al recuperar los datos...' });
            _this.router.navigate(['/members']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].of(null);
        });
    };
    MemberDetailResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng2_izitoast__["b" /* Ng2IzitoastService */]])
    ], MemberDetailResolver);
    return MemberDetailResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/member-edit.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberEditResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// tslint:disable-next-line:import-blacklist



var MemberEditResolver = /** @class */ (function () {
    function MemberEditResolver(userService, router, izi, authService) {
        this.userService = userService;
        this.router = router;
        this.izi = izi;
        this.authService = authService;
    }
    MemberEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).catch(function (error) {
            _this.izi.error({ position: 'topRight', title: 'Error!', message: 'Hubo un problema al recuperar los datos...' });
            _this.router.navigate(['/members']);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].of(null);
        });
    };
    MemberEditResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ng2_izitoast__["b" /* Ng2IzitoastService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], MemberEditResolver);
    return MemberEditResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/member-list.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// tslint:disable-next-line:import-blacklist



var MemberListResolver = /** @class */ (function () {
    function MemberListResolver(userService, router, izi) {
        this.userService = userService;
        this.router = router;
        this.izi = izi;
        this.pageSize = 5;
        this.pageNumber = 1;
    }
    MemberListResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize).catch(function (error) {
            _this.izi.error({ position: 'topRight', title: 'Error!', message: 'Hubo un problema al recuperar los datos...' });
            _this.router.navigate(['/home']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].of(null);
        });
    };
    MemberListResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng2_izitoast__["b" /* Ng2IzitoastService */]])
    ], MemberListResolver);
    return MemberListResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/message.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// tslint:disable-next-line:import-blacklist




var MessageResolver = /** @class */ (function () {
    function MessageResolver(userService, router, izi, authService) {
        this.userService = userService;
        this.router = router;
        this.izi = izi;
        this.authService = authService;
        this.pageSize = 5;
        this.pageNumber = 1;
        this.messageContainer = 'Unread';
    }
    MessageResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).catch(function (error) {
            _this.izi.error({ position: 'topRight', title: 'Error!', message: 'Hubo un problema al recuperar los datos...' });
            _this.router.navigate(['/members']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].of(null);
        });
    };
    MessageResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng2_izitoast__["b" /* Ng2IzitoastService */], __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]])
    ], MessageResolver);
    return MessageResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl;
        this.photoUrl = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('../../assets/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
    }
    AuthService.prototype.changeMemberPhoto = function (photoUrl) { this.photoUrl.next(photoUrl); };
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'auth/login', model, { headers: new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["e" /* HttpHeaders */]().set('Content-Type', 'application/json') }).map(function (user) {
            if (user) {
                localStorage.setItem('token', user.tokenString);
                localStorage.setItem('user', JSON.stringify(user.user));
                _this.decodedToken = _this.jwtHelperService.decodeToken(user.tokenString);
                _this.currentUser = user.user;
                _this.userToken = user.tokenString;
                if (_this.currentUser.photoUrl == null) {
                    _this.changeMemberPhoto('../../assets/user.png');
                }
                else {
                    _this.changeMemberPhoto(_this.currentUser.photoUrl);
                }
            } // console.log(this.decodedToken);
        });
    };
    AuthService.prototype.register = function (user) { return this.http.post(this.baseUrl + 'auth/register', user, { headers: new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["e" /* HttpHeaders */]().set('Content-Type', 'application/json') }); };
    AuthService.prototype.loggedIn = function () {
        // return tokenNotExpired('token'); replaced with following snippet to use new jwt
        var token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        return !this.jwtHelperService.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/error.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ErrorInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).catch(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
                // if (error.status === 400) {return Observable.throw(error._body); }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(applicationError);
                }
                var serverError = error.error;
                var modelStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(modelStateErrors || serverError || 'Server error');
            }
        });
    };
    ErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_pagination__ = __webpack_require__("../../../../../src/app/_models/pagination.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function () {
    function UserService(authHttp) {
        this.authHttp = authHttp;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
    }
    // private handleError(error: any) {
    //   if (error.status === 400) {return Observable.throw(error._body); }
    //   const applicationError = error.headers.get('Application-Error');
    //   if (applicationError) {return Observable.throw(applicationError); }
    //   const serverError = error.json();
    //   let modelStateErrors = '';
    //   if (serverError) {
    //     for (const key in serverError) {
    //       if (serverError[key]) {modelStateErrors += serverError[key] + '\n'; }
    //     }
    //   }
    //   return Observable.throw(modelStateErrors || 'Server error');
    // }
    UserService.prototype.getUsers = function (page, itemsPerPage, userParams, likesParam) {
        var paginatedResult = new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* PaginatedResult */]();
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["f" /* HttpParams */]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (likesParam === 'Likers') {
            params = params.append('Likers', 'true');
        }
        if (likesParam === 'Likees') {
            params = params.append('Likees', 'true');
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
        }
        return this.authHttp.get(this.baseUrl + 'users', { observe: 'response', params: params }).map(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        });
    };
    UserService.prototype.getUser = function (id) { return this.authHttp.get(this.baseUrl + 'users/' + id); };
    UserService.prototype.updateUser = function (id, user) { return this.authHttp.put(this.baseUrl + 'users/' + id, user); };
    UserService.prototype.setMainPhoto = function (userId, id) { return this.authHttp.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {}); };
    UserService.prototype.deletePhoto = function (userId, id) { return this.authHttp.delete(this.baseUrl + 'users/' + userId + '/photos/' + id); };
    UserService.prototype.sendLike = function (id, recipientId) { return this.authHttp.post(this.baseUrl + 'users/' + id + '/like/' + recipientId, {}); };
    UserService.prototype.getMessages = function (id, page, itemsPerPage, messageContainer) {
        var paginatedResult = new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* PaginatedResult */]();
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["f" /* HttpParams */];
        params = params.append('MessageContainer', messageContainer);
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        return this.authHttp.get(this.baseUrl + 'users/' + id + '/messages', { observe: 'response', params: params })
            .map(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        });
    };
    UserService.prototype.getMessageThread = function (id, recipientId) { return this.authHttp.get(this.baseUrl + 'users/' + id + '/messages/thread/' + recipientId); };
    UserService.prototype.sendMessage = function (id, message) { return this.authHttp.post(this.baseUrl + 'users/' + id + '/messages', message); };
    UserService.prototype.deleteMessage = function (id, userId) { return this.authHttp.post(this.baseUrl + 'users/' + userId + '/messages/' + id, {}); };
    UserService.prototype.markAsRead = function (userId, messageId) { return this.authHttp.post(this.baseUrl + 'users/' + userId + '/messages/' + messageId + '/read', {}).subscribe(); };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n    \n<!-- <app-home></app-home> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    // title = 'app';
    // jwtHelper: JwtHelper = new JwtHelper(); these two lines removed to user new jwt helper service below whrn decoding the token
    function AppComponent(authService, jwtHelperService) {
        this.authService = authService;
        this.jwtHelperService = jwtHelperService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
            if (this.authService.currentUser.photoUrl == null) {
                this.authService.changeMemberPhoto('../assets/user.png');
            }
            else {
                this.authService.changeMemberPhoto(user.photoUrl);
            }
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAccessToken */
/* unused harmony export jwtConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_prevent_unsaved_changes_guard__ = __webpack_require__("../../../../../src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resolvers_member_list_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-list.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__resolvers_member_edit_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-edit.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__resolvers_member_detail_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-detail.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__members_member_card_member_card_component__ = __webpack_require__("../../../../../src/app/members/member-card/member-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__members_member_list_member_list_component__ = __webpack_require__("../../../../../src/app/members/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__members_member_detail_member_detail_component__ = __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__members_member_edit_member_edit_component__ = __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__members_photo_editor_photo_editor_component__ = __webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__lists_lists_component__ = __webpack_require__("../../../../../src/app/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__resolvers_lists_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/lists.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__resolvers_message_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/message.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__messages_member_messages_member_messages_component__ = __webpack_require__("../../../../../src/app/messages/member-messages/member-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_error_interceptor__ = __webpack_require__("../../../../../src/app/_services/error.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































function getAccessToken() { return localStorage.getItem('token'); }
var jwtConfig = { tokenGetter: getAccessToken, whitelistedDomains: ['localhost:59211'] };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_20__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_21__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__members_member_list_member_list_component__["a" /* MemberListComponent */],
                __WEBPACK_IMPORTED_MODULE_28__lists_lists_component__["a" /* ListsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__members_member_card_member_card_component__["a" /* MemberCardComponent */],
                __WEBPACK_IMPORTED_MODULE_25__members_member_detail_member_detail_component__["a" /* MemberDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_26__members_member_edit_member_edit_component__["a" /* MemberEditComponent */],
                __WEBPACK_IMPORTED_MODULE_27__members_photo_editor_photo_editor_component__["a" /* PhotoEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_30_time_ago_pipe__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_33__messages_member_messages_member_messages_component__["a" /* MemberMessagesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_izitoast__["a" /* Ng2IziToastModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["b" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["e" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_gallery__["NgxGalleryModule"],
                __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["d" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["c" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__auth0_angular_jwt__["b" /* JwtModule */].forRoot({ config: jwtConfig })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_17__resolvers_member_detail_resolver__["a" /* MemberDetailResolver */],
                __WEBPACK_IMPORTED_MODULE_15__resolvers_member_list_resolver__["a" /* MemberListResolver */],
                __WEBPACK_IMPORTED_MODULE_16__resolvers_member_edit_resolver__["a" /* MemberEditResolver */],
                __WEBPACK_IMPORTED_MODULE_12__guards_prevent_unsaved_changes_guard__["a" /* PreventUnsavedChanges */],
                __WEBPACK_IMPORTED_MODULE_31__resolvers_lists_resolver__["a" /* ListsResolver */],
                __WEBPACK_IMPORTED_MODULE_32__resolvers_message_resolver__["a" /* MessageResolver */],
                __WEBPACK_IMPORTED_MODULE_34__services_error_interceptor__["a" /* ErrorInterceptorProvider */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "  <div *ngIf=\"!registerMode\" class=\"d-flex flex-row justify-content-center\">\n    <div class=\"card border-0 pt-3\">\n      <div class=\"card-body p-0\">\n        <h4 class=\"card-title\">Encuentra tu pareja!</h4>\n        <h6 class=\"card-subtitle text-muted\">Solo necesitas registrarte!</h6>\n    </div>\n    <div class=\"card-body p-0 pt-2\">\n      <p class=\"card-text\">Text</p>\n      <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"registerToggle()\">Registrarse</button>\n      <button type=\"button\" class=\"btn btn-secondary btn-sm\">Más información</button>\n    </div>\n  </div>\n</div>\n  <div *ngIf=\"registerMode\" class=\"d-flex flex-row  justify-content-center\">\n    <div class=\"card border-0 pt-3\">\n      <div class=\"card-body p-0\">\n        <h4 class=\"card-title\">Crea tu cuenta</h4><hr>\n        <app-register (cancelRegister)=\"resetRegisterMode($event)\"></app-register>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    HomeComponent.prototype.resetRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lists/lists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-center m-2\"></div>\n    <div class=\"d-flex\">\n      <div class=\"btn-group ml-2\">\n        <button type=\"button\" name=\"orderBy\" [(ngModel)]=\"likesParam\"  (click)=\"loadUsers()\" class=\"btn btn-primary btn-sm mr-2\" btnRadio=\"Likers\">A quienes les gusto?</button>\n        <button type=\"button\" name=\"orderBy\" [(ngModel)]=\"likesParam\" (click)=\"loadUsers()\" class=\"btn btn-primary btn-sm\" btnRadio=\"Likees\">Quienes me gustan?</button>\n      </div>\n      <h4>{{likesParam === 'Likers' ? 'Les gusto' : 'Me gustan'}} : {{pagination.totalItems}}</h4>\n    </div>\n    <div class=\"row  justify-content-center\">\n      <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-4\">\n        <app-member-card [user]=\"user\"></app-member-card>\n      </div>\n    </div>\n    <div class=\"row justify-content-center\">\n      <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" (pageChanged)=\"pageChanged($event)\"\n      [(ngModel)]=\"pagination.currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n      lastText=\"&raquo;\"></pagination>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/lists/lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListsComponent = /** @class */ (function () {
    function ListsComponent(authService, userService, izi, route) {
        this.authService = authService;
        this.userService = userService;
        this.izi = izi;
        this.route = route;
    }
    ListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) { _this.users = data['users'].result; _this.pagination = data['users'].pagination; });
        this.likesParam = 'Likers';
    };
    ListsComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) { _this.izi.error({ position: 'topRight', title: 'Error', message: error }); });
    };
    ListsComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    ListsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__("../../../../../src/app/lists/lists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lists/lists.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4_ng2_izitoast__["b" /* Ng2IzitoastService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* img {transform: scale(1,1); transition-duration: 300ms; transition-timing-function: ease-out;} */\r\nimg {-webkit-transform: scale(1,1);transform: scale(1,1); -webkit-transition-duration: 400ms; transition-duration: 400ms; -webkit-transition-timing-function: ease-out; transition-timing-function: ease-out; position: relative}\r\n.card:hover img {-webkit-transform: scale(1.2,1.2);transform: scale(1.2,1.2); -webkit-transition-duration: 600ms; transition-duration: 600ms; -webkit-transition-timing-function: ease-out; transition-timing-function: ease-out; opacity: 0.7;}\r\n.btn-group {position: absolute; bottom: 20%; left: 0; right: 0; margin-right: auto; margin-left: auto; opacity: 0.4; }\r\n/* .btn-group-animate {transition: all 0.3s ease-in-out; } */\r\n/* .card-title {position: absolute; bottom: 25%; left: 0; right: 0; margin-right: auto; margin-left: auto; }  */\r\n/* .btn-group {position: absolute; bottom: 20%; left: 0; right: 0; margin-right: auto; margin-left: auto; opacity: 0.4; } */\r\n/* .card {overflow: hidden;} */\r\n/* .btn-group .i {position: absolute; bottom: -30%; left: 0; right: 0; margin-right: auto; margin-left: auto; opacity: 0.8;} */\r\n/* .card:hover i {bottom: 0; opacity: 1;} */\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-0 p-2\">\n  <img class=\"card-img\" src=\"{{user.photoUrl ? user.photoUrl : '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\">\n  <div class=\"btn-group justify-content-center\">\n      <button type=\"button\" class=\"btn btn-xs btn-primary m-1\" [routerLink]=\"['/members/', user.id]\" routerLinkActive=\"router-link-active\" ><i class=\"fa fa-user\"></i></button>\n      <button type=\"button\" class=\"btn btn-xs btn-primary p-1 m-1\" (click)=\"sendLike(user.id)\"><i class=\"fa fa-heart\"></i></button>\n      <button type=\"button\" class=\"btn btn-xs btn-primary p-2 m-1\"  [routerLink]=\"['/members/', user.id]\" [queryParams]=\"{tab: '3'}\"><i class=\"fa fa-envelope\"></i></button>\n  </div>\n  <div class=\"card-body\">\n    <h6 class=\"text-small text-center\"><i class=\"fa fa-user pr-1\"></i>{{user.knownAs}}, {{user.age}}</h6>\n    <p class=\"card-text text-center\">{{user.city}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent(authService, userService, izi) {
        this.authService = authService;
        this.userService = userService;
        this.izi = izi;
    }
    MemberCardComponent.prototype.ngOnInit = function () { };
    MemberCardComponent.prototype.sendLike = function (id) {
        var _this = this;
        this.userService.sendLike(this.authService.decodedToken.nameid, id).subscribe(function (data) { _this.izi.success({ position: 'topRight', title: 'OK', message: 'Le diste un Like a ... ' + _this.user.knownAs }); }, function (error) { _this.izi.error({ position: 'topRight', title: 'Error', message: error }); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MemberCardComponent.prototype, "user", void 0);
    MemberCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-card',
            template: __webpack_require__("../../../../../src/app/members/member-card/member-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-card/member-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3_ng2_izitoast__["b" /* Ng2IzitoastService */]])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{user.knownAs}}'s Profile</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <img class=\"card-img\" src=\"{{user.photoUrl ? user.photoUrl : '../../../assets/user.png' }}\" alt=\"{{user.knownAs}}\">\n        <div class=\"card-body\">\n          <div>\n            <strong>Location: </strong>{{user.city}}, {{user.country}}</div>\n          <div>\n            <strong>Age: </strong>{{user.age}}</div>\n          <div>\n            <strong>Last Active: </strong>{{user.lastActive | timeAgo}}</div>\n          <div>\n            <strong>Member Since: </strong>{{user.created | date}}</div>\n        </div>\n      </div>\n      <div class=\"card-footer right border-0 bg-light p-1\">\n        <!-- <div class=\"btn-group justify-content-center\"> -->\n        <button type=\"button\" class=\"btn btn-sm btn-primary m-1\"><i class=\"fa fa-thumb-up\"></i>Like</button>\n        <button type=\"button\" class=\"btn btn-sm btn-success m-1\" (click)=\"selectTab(3)\"><i class=\"fa fa-mail\"></i>Message</button>\n        <!-- </div> -->\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <tabset #memberTabs>\n        <tab heading=\"About {{user.knownAs}}\">\n          <h4>Description: </h4>\n          <p>{{user.introduction}}</p>\n          <h4>Looking For: </h4>\n          <p>{{user.lookingFor}}</p>\n        </tab>\n        <tab heading=\"Interests\">\n          <h4>Description: </h4>\n          <p>{{user.interests}}</p>\n        </tab>\n        <tab heading=\"Photos\">\n          <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n        </tab>\n        <tab heading=\"Messages\">\n          <app-member-messages [userId]=\"user.id\"></app-member-messages>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent(userService, izi, route) {
        this.userService = userService;
        this.izi = izi;
        this.route = route;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) { _this.user = data['user']; });
        this.route.queryParams.subscribe(function (params) { var selectedTab = params['tab']; _this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true; });
        this.galleryOptions = [{ width: '600px', height: '400px', thumbnailsColumns: 4, imageAnimation: __WEBPACK_IMPORTED_MODULE_4_ngx_gallery__["NgxGalleryAnimation"].Slide, preview: false }];
        this.galleryImages = this.getImages();
    };
    MemberDetailComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var i = 0; i < this.user.photos.length; i++) {
            imageUrls.push({ small: this.user.photos[i].url, medium: this.user.photos[i].url, big: this.user.photos[i].url, description: this.user.photos[i].description });
        }
        return imageUrls;
    };
    MemberDetailComponent.prototype.selectTab = function (tabId) { this.memberTabs.tabs[tabId].active = true; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('memberTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["f" /* TabsetComponent */])
    ], MemberDetailComponent.prototype, "memberTabs", void 0);
    MemberDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-detail',
            template: __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__["b" /* Ng2IzitoastService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-4\"><h2>Mi Perfil</h2></div>\n        <div class=\"col-sm-8\">\n            <div class=\"alert-info\" [hidden]=\"!editForm.dirty\">\n                <p><strong>Alerta:</strong>Los cambios sin guardar se perderan!</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <div class=\"card\">\n                <img class=\"card-img\" src=\"{{photoUrl}}\" alt=\"{{user.knownAs}}\">\n                <div class=\"card-body\">\n                    <div><strong>Ubicación: </strong>{{user.city}}, {{user.country}}</div>\n                    <div><strong>Edad: </strong>{{user.age}}</div>\n                    <div><strong>Last Active: </strong>{{user.lastActive | date}}</div>\n                    <div><strong>Member Since: </strong>{{user.created | date}}</div>\n                </div>\n            </div>\n            <div class=\"card-footer right border-0 bg-light p-1\">\n                <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-success btn-block\">Guardar cambios</button>\n            </div>\n        </div>\n        <div class=\"col-sm-8\">\n            <tabset>\n                <tab heading=\"Editar Perfil\">\n                    <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateUser()\">\n                        <h4>Descripción: </h4>\n                        <textarea name=\"introduction\" class=\"form-control\" rows=\"6\" [(ngModel)]=\"user.introduction\"></textarea>\n                        <h4>Buscando: </h4>\n                        <textarea name=\"lookingFor\" class=\"form-control\" rows=\"6\" [(ngModel)]=\"user.lookingFor\"></textarea>\n                        <h4>Intereses: </h4>\n                        <textarea name=\"interests\" class=\"form-control\" rows=\"6\" [(ngModel)]=\"user.interests\"></textarea>\n                        <h4>Direccion</h4>\n                        <div class=\"for-inline\">\n                            <label for=\"city\">Ciudad: </label>\n                            <input name=\"city\" type=\"text\" class=\"form-control\" [(ngModel)]=\"user.city\">\n                            <label for=\"country\">Pais: </label>\n                            <input name=\"country\" type=\"text\" class=\"form-control\" [(ngModel)]=\"user.country\">\n                        </div>\n                    </form>\n                </tab>\n                <tab heading=\"Editar Galería\">\n                    <app-photo-editor [photos]=\"user.photos\" (getMemberPhotoChange)=\"updateMainPhoto($event)\"></app-photo-editor>\n                </tab>\n            </tabset>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(route, izi, authService, userService) {
        this.route = route;
        this.izi = izi;
        this.authService = authService;
        this.userService = userService;
    }
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) { _this.user = data['user']; });
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    MemberEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(function (next) {
            _this.izi.success({ position: 'topRight', title: 'OK', message: 'Perfil actualizado con éxito.' });
            _this.editForm.reset(_this.user);
        }, function (error) { _this.izi.error({ position: 'topRight', title: 'Error!', message: 'No pudo actualizar el perfil!.' }); });
        // console.log(this.user);
    };
    MemberEditComponent.prototype.updateMainPhoto = function (photoUrl) { this.user.photoUrl = photoUrl; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* NgForm */])
    ], MemberEditComponent.prototype, "editForm", void 0);
    MemberEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-edit',
            template: __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__["b" /* Ng2IzitoastService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center m-2\"><h2>Tus resultados : {{pagination.totalItems}} parejas</h2></div>\n  <div class=\"row justify-content-between m-2\">\n    <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadUsers()\" novalidate>\n      <div class=\"form-group ml-2\">\n        <label for=\"minAge\">Desde</label>\n        <input type=\"number\" class=\"form-control form-control-sm \" style=\"width: 70px\" id=\"minAge\" name=\"minAge\" [(ngModel)]=\"userParams.minAge\">\n      </div>\n      <div class=\"form-group ml-2\">\n        <label for=\"maxAge\">Hasta</label>\n        <input type=\"number\" class=\"form-control form-control-sm \" style=\"width: 70px\" id=\"maxAge\" name=\"maxAge\"  [(ngModel)]=\"userParams.maxAge\">\n      </div>\n      <div class=\"form-group ml-2\">\n        <label for=\"gender\">Mostrar</label>\n        <select class=\"form-control form-control-sm \" style=\"width: 130px\" id=\"gender\" name=\"gender\"  [(ngModel)]=\"userParams.gender\">\n          <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">{{gender.display}}</option>\n        </select>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-sm ml-2\">Apicar Filtros</button>\n      <button type=\"button\" class=\"btn btn-info btn-sm ml-2\" (click)=\"resetFilters()\">Limpiar Filtros</button>\n    </form>\n    <div class=\"d-flex\">\n      <label for=\"orderBy\">Orden:</label>\n      <div class=\"btn-group ml-2\">\n        <button type=\"button\" name=\"orderBy\" [(ngModel)]=\"userParams.orderBy\"  (click)=\"loadUsers()\" class=\"btn btn-primary btn-sm mr-2\" btnRadio=\"lastActive\">Ultima actividad</button>\n        <button type=\"button\" name=\"orderBy\" [(ngModel)]=\"userParams.orderBy\" (click)=\"loadUsers()\" class=\"btn btn-primary btn-sm\" btnRadio=\"created\">Miembros recientes</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row  justify-content-center\">\n    <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-4\">\n      <app-member-card [user]=\"user\"></app-member-card>\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" (pageChanged)=\"pageChanged($event)\"\n      [(ngModel)]=\"pagination.currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n      lastText=\"&raquo;\"></pagination>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(userService, izi, route) {
        this.userService = userService;
        this.izi = izi;
        this.route = route;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.genderList = [
            { value: 'male', display: 'Hombres' },
            { value: 'female', display: 'Mujeres' }
        ];
        this.userParams = {};
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
    };
    MemberListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService
            .getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.izi.error({
                position: 'topRight',
                title: 'Error',
                message: error
            });
        });
    };
    MemberListComponent.prototype.resetFilters = function () {
        this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
        this.loadUsers();
    };
    MemberListComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.pagination.currentPage = event.page;
        this.loadUsers();
        console.log('Page changed to: ' + event.page, event.itemsPerPage);
    };
    MemberListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__("../../../../../src/app/members/member-list/member-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__["b" /* Ng2IzitoastService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.thumbnail {height: 100px; width: 100px; margin-bottom: 2px;}\r\n.nv-file-over { border: dotted 3px red; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\n    <img src=\"{{photo.url}}\" alt=\"\" class=\"thumbnail\">\n    <div class=\"text-center\">\n      <button type=\"button\" class=\"btn btn-xs btn-success\" (click)=\"setMainPhoto(photo)\" [ngClass]=\"photo.isMain ? 'btn-success active': 'btn-default'\" [disabled]=\"photo.isMain\"><i class=\"fa fa-check\"></i></button>\n      <button type=\"button\" class=\"btn btn-xs btn-danger\" (click)=\"deletePhoto(photo.id)\" [disabled]=\"photo.isMain\"><i class=\"fa fa-trash-o\"></i></button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\"> \n    <div class=\"col-md-3\">\n        <h3>Agregar fotos</h3>\n        <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\" class=\" my-drop-zone\">Ponga sus foto aqui</div>\n        Multiple<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n        Single<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n    </div>\n    <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n        <h3>Upload queue</h3>\n        <p>Queue length: {{ uploader?.queue?.length }}</p>\n        <table class=\"table\">\n            <thead>\n                <tr><th width=\"50%\">Name</th><th>Size</th></tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                    <td><strong>{{ item?.file?.name }}</strong></td>\n                    <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                </tr>\n            </tbody>\n        </table>\n\n        <div>\n            <div>\n                Queue progress:\n                <div class=\"progress\">\n                    <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-success btn-s\"\n                    (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                <span class=\"glyphicon glyphicon-upload\"></span> Subir\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-s\"\n                    (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancelar\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-s\"\n                    (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                <span class=\"glyphicon glyphicon-trash\"></span> Quitar\n            </button>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(authService, userService, izi) {
        this.authService = authService;
        this.userService = userService;
        this.izi = izi;
        this.hasBaseDropZoneOver = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
        this.getMemberPhotoChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PhotoEditorComponent.prototype.ngOnInit = function () { this.initializaUploader(); };
    PhotoEditorComponent.prototype.fileOverBase = function (e) { this.hasBaseDropZoneOver = e; };
    PhotoEditorComponent.prototype.initializaUploader = function () {
        var _this = this;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = { id: res.id, url: res.url, dateAdded: res.dateAdded, description: res.description, isMain: res.isMain };
                _this.photos.push(photo);
                if (photo.isMain) {
                    _this.authService.changeMemberPhoto(photo.url);
                    _this.authService.currentUser.photoUrl = photo.url;
                    localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
                }
            }
        };
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photo) {
        var _this = this;
        this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(function () {
            _this.currentMain = __WEBPACK_IMPORTED_MODULE_6_underscore__["findWhere"](_this.photos, { isMain: true });
            _this.currentMain.isMain = false;
            photo.isMain = true;
            _this.authService.changeMemberPhoto(photo.url);
            _this.authService.currentUser.photoUrl = photo.url;
            localStorage.setItem('user', JSON.stringify(_this.authService.currentUser));
            console.log('foto establecida satisfactoriamente!');
        }, function (error) { _this.izi.error({ position: 'topRight', title: 'ERROR!', message: 'No se pudo establecer... ' }); });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (id) {
        var _this = this;
        this.userService.deletePhoto(this.authService.decodedToken.nameid, id).subscribe(function () {
            _this.photos.splice(__WEBPACK_IMPORTED_MODULE_6_underscore__["findIndex"](_this.photos, { id: id }), 1);
            _this.izi.success({ message: 'Foto eliminada' });
        });
        // this.izi.question({
        //   title: 'ELIMINAR', message: 'Seguro que desea eliminar la fotografía?',
        //   buttons: [
        //     ['<button><b>SI</b></button>', function () {
        //       console.log('SI... borrar');
        //       this.userService.deletePhoto(this.authService.decodedToken.nameid, id).subscribe(() => {
        //         this.photos.splice(_.findIndex(this.photos, { id: id}), 1);
        //         this.izi.success({message: 'Foto eliminada'});
        //       });
        //      }, true],
        //     ['<button>NO</button>', function (instance, toast) {instance.hide({ transitionOut: 'fadeOut' }, toast, 'button'); }]
        //   ],
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PhotoEditorComponent.prototype, "getMemberPhotoChange", void 0);
    PhotoEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo-editor',
            template: __webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5_ng2_izitoast__["b" /* Ng2IzitoastService */]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/member-messages/member-messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat {list-style: none; margin: 0; padding:0;}\r\n.chat li {margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dotted #B3A9a9;}\r\n.img-circle {height: 45px; width: 45px;}\r\n.card-body {overflow-y: scroll; height: 400px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/member-messages/member-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div *ngIf=\"messages?.length === 0\" class=\"text\">\n      No hay mensajes\n    </div>\n    <ul class=\"chat\">\n      <li *ngFor=\"let message of messages\">\n        <div *ngIf=\"message.senderId == userId\">\n          <span class=\"chat-img pull-left\">\n            <img src=\"{{message.senderPhotoUrl}}\" class=\"img-circle\">\n          </span>\n          <div class=\"chat-body\">\n            <div class=\"header\">\n              <strong class=\"primary-font\">{{message.senderKnownAs}}</strong>\n              <small class=\"text-muted pull-right\">\n                <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\n              </small>\n            </div>\n            <p>{{message.content}}</p>\n          </div>\n        </div>\n\n        <div *ngIf=\"message.senderId != userId\">\n            <span class=\"chat-img pull-right\">\n              <img src=\"{{message.senderPhotoUrl}}\" class=\"img-circle\">\n            </span>\n            <div class=\"chat-body\">\n              <div class=\"header\">\n                <small class=\"text-muted\">\n                  <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\n                  <span *ngIf=\"!message.isRead\" class=\"text-muted text-danger\">(No Leido)</span>\n                  <span *ngIf=\"message.isRead\" class=\"text-muted text-success\">(Leido {{message.dateRead | timeAgo}})</span>\n                </small>\n                <strong class=\"primary-font pull-right\">{{message.senderKnownAs}}</strong>\n              </div>\n              <p>{{message.content}}</p>\n            </div>\n          </div>\n\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-footer\">\n    <form #messageForm=\"ngForm\" (ngSubmit)=\"messageForm.valid && sendMessage()\">\n      <div class=\"input-group\">\n        <input  type=\"text\" class=\"form-control input-sm\" required name=\"content\" [(ngModel)]=\"newMessage.content\" placeholder=\"Envia un mensaje privado...\">\n        <span class=\"input-group-btn\"><button class=\"btn btn-primary btn-sm\" [disabled]=\"!messageForm.valid\">Enviar</button></span>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/member-messages/member-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberMessagesComponent = /** @class */ (function () {
    function MemberMessagesComponent(userService, izi, authService) {
        this.userService = userService;
        this.izi = izi;
        this.authService = authService;
        this.newMessage = {};
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MemberMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        var currentUserId = +this.authService.decodedToken.nameid; // that plus sign helps to match with the message.recipientId in the condition below
        this.userService.getMessageThread(this.authService.decodedToken.nameid, this.userId)
            .do(function (messages) {
            __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](messages, function (message) {
                if (message.isRead === false && message.recipientId === currentUserId) {
                    _this.userService.markAsRead(currentUserId, message.id);
                }
            });
        })
            .subscribe(function (messages) { _this.messages = messages; }, function (error) { _this.izi.error({ position: 'topRight', title: 'Error!', message: error }); });
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        this.newMessage.recipientId = this.userId;
        this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage)
            .subscribe(function (message) { _this.messages.unshift(message); _this.newMessage.content = ''; }, function (error) { _this.izi.error({ position: 'topRight', title: 'Error!', message: error }); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MemberMessagesComponent.prototype, "userId", void 0);
    MemberMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-messages',
            template: __webpack_require__("../../../../../src/app/messages/member-messages/member-messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/member-messages/member-messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__["b" /* Ng2IzitoastService */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], MemberMessagesComponent);
    return MemberMessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-circle {height: 45px; width: 45px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-2\">\n  <div class=\"row justify-content-center\">\n      <div class=\"btn-group\" role=\"group\">\n          <button type=\"button\" class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Unread\" (click)=\"loadMessages()\"><i class=\"fa fa-envelope mr-1\"></i>Unread</button>\n          <button type=\"button\" class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Inbox\" (click)=\"loadMessages()\"><i class=\"fa fa-envelope-open mr-1\"></i>Inbox</button>\n          <button type=\"button\" class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Outbox\" (click)=\"loadMessages()\"><i class=\"fa fa-paper-plane mr-1\"></i>Outbox</button>\n        </div>\n  </div>\n  <div class=\"row\" *ngIf=\"messages?.length === 0\"><h3>No tienes mensajes</h3></div>\n\n<div class=\"row justify-content-center mt-2\" *ngIf=\"messages.length > 0\">\n  <table class=\"table table-hover\" style=\"cursor: pointer\">\n    <tr>\n      <th style=\"width: 40%\">Mensaje</th>\n      <th style=\"width: 20%\">De / Para</th>\n      <th style=\"width: 20%\">Enviado / Recibido</th>\n      <th style=\"width: 20%\"></th>\n    </tr>\n    <tr *ngFor=\"let message of messages\" [routerLink]=\"['/members', messageContainer == 'Outbox' ? message.recipientId : message.senderId]\" [queryParams]=\"{tab: '3'}\">\n      <td>{{message.content}}</td>\n      <td>\n        <div *ngIf=\"messageContainer != 'Outbox'\">\n          <img [src]=\"message.senderPhotoUrl\" class=\"img-circle\">\n          <strong>{{message.senderKnownAs}}</strong>\n        </div>\n        <div *ngIf=\"messageContainer == 'Outbox'\">\n          <img [src]=\"message.recipientPhotoUrl\" class=\"img-circle\">\n          <strong>{{message.recipientKnownAs}}</strong>\n        </div>\n      </td>\n      <td>{{message.messageSent | timeAgo}}</td>\n      <td>\n        <button class=\"btn btn-danger\" (click)=\"$event.stopPropagation\" (click)=\"deleteMessage(message.id)\">Borrar</button>\n      </td>\n    </tr>\n  </table>\n\n  <!-- <div class=\"row justify-content-center\"> -->\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" (pageChanged)=\"pageChanged($event)\"\n      [(ngModel)]=\"pagination.currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n      lastText=\"&raquo;\"></pagination>\n  <!-- </div> -->\n</div>  \n  \n  </div>"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(authService, userService, izi, route) {
        this.authService = authService;
        this.userService = userService;
        this.izi = izi;
        this.route = route;
        this.messageContainer = 'Unread';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) { _this.messages = data['messages'].result; _this.pagination = data['messages'].pagination; });
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer)
            .subscribe(function (res) { _this.messages = res.result; _this.pagination = res.pagination; }, function (error) { _this.izi.error({ position: 'topRight', title: 'Error', message: error }); });
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.userService.deleteMessage(id, this.authService.decodedToken.nameid)
            .subscribe(function () { _this.messages.splice(__WEBPACK_IMPORTED_MODULE_5_underscore__["findIndex"](_this.messages, { id: id }), 1); _this.izi.success({ position: 'topRight', title: 'Ok', message: 'Mensaje borrado.' }); }, function (error) { _this.izi.error({ position: 'topRight', title: 'Error', message: 'No se pudo borrar el mensaje.' }); });
    };
    MessagesComponent.prototype.pageChanged = function (event) { this.pagination.currentPage = event.page; this.loadMessages(); };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3_ng2_izitoast__["b" /* Ng2IzitoastService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {max-height: 40px; display: inline;}\r\n.img-circle { border-radius: 50%; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary pr-2 pl-2 p-1\">\n<a class=\"navbar-brand\" href=\"javascript:\"[routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" >WebApp</a>\n<img width=\"30\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\" *ngIf=\"loggedIn()\">\n        <li class=\"nav-item active\"><a class=\"nav-link\" [routerLink]=\"['/members']\" routerLinkActive=\"active\">Matches <span class=\"sr-only\">(current)</span></a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/lists']\" routerLinkActive=\"active\">List</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/messages']\" routerLinkActive=\"active\">Messages</a></li>\n      </ul>\n        <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline \" (ngSubmit)=\"login()\" >\n          <input class=\"form-control form-control-sm mr-sm-2\" type=\"text\" placeholder=\"usuario\" required name=\"username\" [(ngModel)]=\"model.username\">\n          <input class=\"form-control form-control-sm mr-sm-2\" type=\"password\" placeholder=\"contraseña\" required  name=\"password\" [(ngModel)]=\"model.password\">\n          <button class=\"btn btn-dark btn-sm\" type=\"submit\" [disabled]=\"!loginForm.valid\">Entrar</button>\n        </form>\n      <ul class=\"navbar-nav right\" *ngIf=\"loggedIn()\">\n        <li><img src=\"{{photoUrl}}\" class=\"img-circle\"></li>\n        <li class=\"nav-item dropdown\" dropdown>\n          <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" href=\"javascript:\" dropdownToggle>{{ authService.decodedToken?.unique_name | titlecase}}</a>\n          <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\n            <a class=\"dropdown-item\" [routerLink]=\"['/member/edit']\" routerLinkActive=\"router-link-active\"  ><i class=\"fa fa-user mr-2\"></i>Perfil</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"javascript:\" (click)=\"logout()\"><i class=\"fa fa-sign-out mr-2\"></i>Cerrar sesión</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(authService, iziToast, router) {
        this.authService = authService;
        this.iziToast = iziToast;
        this.router = router;
        this.model = {};
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (data) { _this.iziToast.success({ position: 'topRight', title: 'OK', message: 'Bienvenido... ' }); }, function (error) { _this.iziToast.error({ position: 'topRight', title: 'Error', message: 'Credenciales inválidas', transitionIn: 'fadeInLeft', transitionOut: 'fadeOut', animateInside: false }); }, function () { _this.router.navigate(['/members']); });
    };
    NavComponent.prototype.logout = function () {
        this.authService.userToken = null;
        this.authService.currentUser = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.iziToast.info({ position: 'topRight', title: 'OK', message: 'Gracias por tu visita... ' });
        this.router.navigate(['/home']);
    };
    NavComponent.prototype.loggedIn = function () { return this.authService.loggedIn(); };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__["b" /* Ng2IzitoastService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form #registerForm=\"ngForm\" (ngSubmit)=\"register()\"> -->\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n  <div class=\"form-group mb-1\">\n    <label class=\"control-label form-control-sm\">Soy:</label>\n    <label class=\"radio-inline pl-2 form-control-sm\">\n      <input type=\"radio\" value=\"male\" formControlName=\"gender\"> Masculino</label>\n    <label class=\"radio-inline pl-2 form-control-sm\">\n      <input type=\"radio\" value=\"female\" formControlName=\"gender\"> Femenino</label>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"username\" placeholder=\"Nombre de usuario\" [ngClass]=\"{'is-invalid': registerForm.get('username').errors && registerForm.get('username').touched}\">\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('username').hasError('required') && registerForm.get('username').touched\">Campo requerido!</span>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"knownAs\" placeholder=\"Conocido como...\" [ngClass]=\"{'is-invalid': registerForm.get('knownAs').errors && registerForm.get('knownAs').touched}\">\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('knownAs').hasError('required') && registerForm.get('knownAs').touched\">Campo requerido!</span>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\" class=\"form-control form-control-sm\" formControlName=\"dateOfBirth\" placeholder=\"Fecha de nacimiento\" [ngClass]=\"{'is-invalid': registerForm.get('dateOfBirth').errors && registerForm.get('dateOfBirth').touched}\">\n    <!-- <input type=\"date\" class=\"form-control form-control-sm\" formControlName=\"dateOfBirth\" placeholder=\"Fecha de nacimiento\" [ngClass]=\"{'is-invalid': registerForm.get('dateOfBirth').errors && registerForm.get('dateOfBirth').touched}\"> -->\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('dateOfBirth').hasError('required') && registerForm.get('dateOfBirth').touched\">Campo requerido!</span>\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"city\" placeholder=\"Ciudad\" [ngClass]=\"{'is-invalid': registerForm.get('city').errors && registerForm.get('city').touched}\">\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('city').hasError('required') && registerForm.get('city').touched\">Campo requerido!</span>\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"country\" placeholder=\"País\" [ngClass]=\"{'is-invalid': registerForm.get('country').errors && registerForm.get('country').touched}\">\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('country').hasError('required') && registerForm.get('country').touched\">Campo requerido!</span>\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control form-control-sm\" formControlName=\"password\" placeholder=\"Contraseña\" [ngClass]=\"{'is-invalid': registerForm.get('password').errors && registerForm.get('password').touched}\">\n    <!-- <input type=\"password\" class=\"form-control form-control-sm\" formControlName=\"password\" placeholder=\"Contraseña\" > -->\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\">Campo requerido!</span>\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('minlength') && registerForm.get('password').touched\">Tiene que tener al menos 4 caracteres.</span>\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('maxlength') && registerForm.get('password').touched\">No puede exceder de 8 caracteres.</span>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"password\" class=\"form-control form-control-sm\" formControlName=\"confirmPassword\" placeholder=\"Confirmar contraseña\"\n      [ngClass]=\"{'is-invalid': registerForm.get('confirmPassword').errors && registerForm.get('confirmPassword').touched || registerForm.get('confirmPassword').touched && registerForm.hasError('mismatch')}\">\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('confirmPassword').hasError('required') && registerForm.get('confirmPassword').touched\">Campo requerido!</span>\n    <span class=\"invalid-feedback\" *ngIf=\"registerForm.get('confirmPassword').touched && registerForm.hasError('mismatch')\">No concuerdan!</span>\n  </div>\n\n  <div class=\"text-center\">\n    <button type=\"submit\" class=\"btn btn-success btn-sm\" [disabled]=\"!registerForm.valid\">Crear</button>\n    <button type=\"submit\" class=\"btn btn-default btn-sm\" (click)=\"cancel()\">Cancelar</button>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__ = __webpack_require__("../../../../ng2-izitoast/ng2-izitoast.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, iziToast, fb, router) {
        this.authService = authService;
        this.iziToast = iziToast;
        this.fb = fb;
        this.router = router;
        this.cancelRegister = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.bsConfig = { containerClass: 'theme-red' };
        this.createRegisterForm();
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            knownAs: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            dateOfBirth: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            country: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(8)]],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        }, { validator: this.passwordMatchValidator });
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) { return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true }; };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            console.log(this.user);
            this.authService.register(this.user).subscribe(function () {
                _this.iziToast.success({ title: 'OK', message: 'Te has registrado satisfactoriamente.' });
            }, function (error) {
                _this.iziToast.error({ title: 'ERROR!', message: 'No se pudo registrar el usuario.' });
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/members']);
                });
            });
        }
        // this.authService.register(this.model)
        // .subscribe(() => {console.log(this.model + ' Registered succesfully');
        // error => {console.log('Error=>', error); });
        // console.log(this.registerForm.value);
    };
    RegisterComponent.prototype.cancel = function () { this.cancelRegister.emit(false); console.log(' cancelled'); };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ng2_izitoast__["b" /* Ng2IzitoastService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__members_member_list_member_list_component__ = __webpack_require__("../../../../../src/app/members/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lists_lists_component__ = __webpack_require__("../../../../../src/app/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__members_member_detail_member_detail_component__ = __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resolvers_member_detail_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-detail.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resolvers_member_list_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-list.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__members_member_edit_member_edit_component__ = __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resolvers_member_edit_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-edit.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_prevent_unsaved_changes_guard__ = __webpack_require__("../../../../../src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__resolvers_lists_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/lists.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__resolvers_message_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/message.resolver.ts");













var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    {
        path: '', runGuardsAndResolvers: 'always',
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'members', component: __WEBPACK_IMPORTED_MODULE_1__members_member_list_member_list_component__["a" /* MemberListComponent */], resolve: { users: __WEBPACK_IMPORTED_MODULE_7__resolvers_member_list_resolver__["a" /* MemberListResolver */] } },
            { path: 'members/:id', component: __WEBPACK_IMPORTED_MODULE_5__members_member_detail_member_detail_component__["a" /* MemberDetailComponent */], resolve: { user: __WEBPACK_IMPORTED_MODULE_6__resolvers_member_detail_resolver__["a" /* MemberDetailResolver */] } },
            { path: 'member/edit', component: __WEBPACK_IMPORTED_MODULE_8__members_member_edit_member_edit_component__["a" /* MemberEditComponent */], resolve: { user: __WEBPACK_IMPORTED_MODULE_9__resolvers_member_edit_resolver__["a" /* MemberEditResolver */] }, canDeactivate: [__WEBPACK_IMPORTED_MODULE_10__guards_prevent_unsaved_changes_guard__["a" /* PreventUnsavedChanges */]] },
            { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_2__messages_messages_component__["a" /* MessagesComponent */], resolve: { messages: __WEBPACK_IMPORTED_MODULE_12__resolvers_message_resolver__["a" /* MessageResolver */] } },
            { path: 'lists', component: __WEBPACK_IMPORTED_MODULE_3__lists_lists_component__["a" /* ListsComponent */], resolve: { users: __WEBPACK_IMPORTED_MODULE_11__resolvers_lists_resolver__["a" /* ListsResolver */] } },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:59211/api/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map