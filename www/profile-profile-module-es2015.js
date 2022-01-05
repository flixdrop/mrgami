(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons class=\"btn-shape\" slot=\"start\" routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\r\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{doTranslation('USER PROFILE')}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding content-color\">\r\n  <ion-toolbar class=\"card-color\">\r\n      <ion-label class=\"center\">{{doTranslation('User Profile')}}</ion-label>\r\n      <ion-button fill=\"clear\" slot=\"end\">\r\n        {{doTranslation('edit')}} \r\n        <ion-icon name=\"create-outline\"></ion-icon>\r\n      </ion-button>\r\n  </ion-toolbar>\r\n\r\n  <ion-card class=\"card-color custom-card\">\r\n\r\n\r\n    <div *ngFor=\"let detail of (userDetails | async)\">\r\n      <ion-toolbar color=\"none\">\r\n        <ion-text>{{detail.Value}}</ion-text>\r\n        <ion-spinner *ngIf=\"busy | async\" name=\"bubbles\"></ion-spinner>\r\n      </ion-toolbar>\r\n    </div>\r\n\r\n    <!-- <form [formGroup]=\"userDetailsForm\" >\r\n      <div *ngFor=\"let detail of (userDetails | async)\">\r\n            <ion-input matInput readonly placeholder=\"{{ detail.Name }}\" [formControlName]=\"detail.Name\"></ion-input>\r\n      </div>\r\n          <ion-spinner *ngIf=\"busy | async\" name=\"bubbles\"></ion-spinner>\r\n  </form> -->\r\n\r\n    <!-- <ion-toolbar>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"danger\">Name</ion-label>\r\n        <ion-input value=\"Flixdrop User\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"danger\">Address Lane</ion-label>\r\n        <ion-input value=\"Bengaluru\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"danger\">City</ion-label>\r\n        <ion-input value=\"Bengaluru\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"danger\">Gender</ion-label>\r\n      <ion-input value=\"Male\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"danger\">Email</ion-label>\r\n      <ion-input value=\"flix@flixdrop.com\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"danger\">Phone Number</ion-label>\r\n      <ion-input value=\"+91 1236547892\"></ion-input>\r\n    </ion-item>\r\n  </ion-toolbar> -->\r\n  </ion-card>\r\n\r\n  <ion-button expand=\"block\" size=\"small\" color=\"danger\" (click)=\"onClickLogout()\">\r\n    <ion-icon slot=\"end\" name=\"power-outline\"></ion-icon>\r\n    <ion-label>{{doTranslation('Logout')}}</ion-label>\r\n  </ion-button>\r\n\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\n.custom-card {\n  padding: 0 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSxpQkFBQTtBQWpCSjs7QUFvQkE7RUFDSSxrQkFBQTtBQWpCSjs7QUFvQkE7RUFDSSxhQUFBO0FBakJKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5wcm9maWxlLWluZm8ge1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDUlO1xyXG5cclxuLy8gICAgIGlvbi1pdGVtIHtcclxuLy8gICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDUlO1xyXG4vLyAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjOTc5Nzk3MTM7XHJcblxyXG4vLyAgICAgICAgIGlvbi1sYWJlbCB7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4vLyAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlvbi1pbnB1dCB7XHJcbi8vICAgICAgICAgICAgIC0tY29sb3I6ICM0MzQzNDM7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4uYmFja2J0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tY2FyZHtcclxuICAgIHBhZGRpbmc6IDAgMyU7XHJcbn0iXX0= */");

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
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/translate.service */ "./src/app/services/translate.service.ts");







let ProfilePage = class ProfilePage {
    constructor(auth, router, translateService) {
        this.auth = auth;
        this.router = router;
        this.translateService = translateService;
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
                    console.log('form-data- ', this.userDetailsForm);
                });
                this.userDetails_.next(userDetails);
                console.log('user-details- ', userDetails);
                console.log('userId- ', userDetails[0]['Value']);
            }
            catch (err) {
                this.errorMessage_.next(err.message || err);
            }
            finally {
                console.log('user-details- ', this.userDetails);
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
    doTranslation(text) {
        var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
        return translateText;
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_translate_service__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
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