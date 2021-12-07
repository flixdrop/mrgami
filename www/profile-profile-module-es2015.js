(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>User Profile</ion-title>\r\n      <ion-button slot=\"start\" color=\"danger\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\r\n        <img src='../../assets/back-dark.svg' />\r\n      </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-toolbar>\r\n    <ion-item lines=\"full\" color=\"none\">\r\n      <ion-label class=\"title\">User Profile</ion-label>\r\n      <ion-button fill=\"clear\" slot=\"end\">\r\n        edit \r\n        <ion-icon name=\"create-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n\r\n  <ion-card class=\"profileCard\">\r\n\r\n\r\n\r\n    <form [formGroup]=\"userDetailsForm\" >\r\n      <div *ngFor=\"let detail of (userDetails | async)\" >\r\n\r\n              <ion-input matInput readonly placeholder=\"{{ detail.Name }}\" [formControlName]=\"detail.Name\"></ion-input>\r\n\r\n      </div>\r\n\r\n\r\n          <ion-spinner *ngIf=\"busy | async\" name=\"bubbles\"></ion-spinner>\r\n\r\n\r\n  </form>\r\n\r\n    <!-- <ion-toolbar>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"danger\">Name</ion-label>\r\n        <ion-input value=\"Flixdrop User\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"danger\">Address Lane</ion-label>\r\n        <ion-input value=\"Bengaluru\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"danger\">City</ion-label>\r\n        <ion-input value=\"Bengaluru\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"danger\">Gender</ion-label>\r\n      <ion-input value=\"Male\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"danger\">Email</ion-label>\r\n      <ion-input value=\"flix@flixdrop.com\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"danger\">Phone Number</ion-label>\r\n      <ion-input value=\"+91 1236547892\"></ion-input>\r\n    </ion-item>\r\n  </ion-toolbar> -->\r\n  </ion-card>\r\n\r\n  <ion-button expand=\"full\" size=\"small\" color=\"danger\" (click)=\"onClickLogout()\">\r\n    <ion-icon slot=\"end\" name=\"power-outline\" color=\"light\"></ion-icon>\r\n    <ion-label color=\"light\">Logout</ion-label>\r\n  </ion-button>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-title {\n  color: white;\n}\n\n.profileCard {\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  --background: #36363F;\n}\n\n.profileCard ion-item {\n  --background: #36363F;\n}\n\nion-toolbar {\n  --background: #36363F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQW9CQTtFQUlJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQXBCSjs7QUFjSTtFQUNJLHFCQUFBO0FBWlI7O0FBb0JBO0VBQ0kscUJBQUE7QUFqQkoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tidG4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vIC5wcm9maWxlLWluZm8ge1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDUlO1xyXG5cclxuLy8gICAgIGlvbi1pdGVtIHtcclxuLy8gICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDUlO1xyXG4vLyAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjOTc5Nzk3MTM7XHJcblxyXG4vLyAgICAgICAgIGlvbi1sYWJlbCB7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4vLyAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlvbi1pbnB1dCB7XHJcbi8vICAgICAgICAgICAgIC0tY29sb3I6ICM0MzQzNDM7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4ucHJvZmlsZUNhcmR7XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMzNjM2M0Y7XHJcbiAgICB9XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC0tYmFja2dyb3VuZDogIzM2MzYzRjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzNjM2M0Y7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let ProfilePage = class ProfilePage {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.userDetails_ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](undefined);
        this.userDetails = this.userDetails_.asObservable();
        this.userDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({});
        this.busy_ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.busy = this.busy_.asObservable();
        this.errorMessage_ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.errorMessage = this.errorMessage_.asObservable();
    }
    ngOnInit() {
        this.getUserDetails();
    }
    getUserDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.busy_.next(true);
            this.errorMessage_.next('');
            try {
                const userDetails = yield this.auth.getUserDetails();
                userDetails.forEach(detail => {
                    const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](detail.getValue());
                    this.userDetailsForm.addControl(detail.getName(), control);
                });
                this.userDetails_.next(userDetails);
            }
            catch (err) {
                this.errorMessage_.next(err.message || err);
            }
            finally {
                this.busy_.next(false);
            }
        });
    }
    onClickLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.auth.signOut();
            this.router.navigateByUrl('/tabs/landing');
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map