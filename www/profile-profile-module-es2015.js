(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons class=\"btn-shape\" slot=\"start\" routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\r\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{doTranslation('USER PROFILE')}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"content\">\r\n\r\n  <ion-card class=\"card-color custom-card\">\r\n      <div class=\"center\">\r\n          <ion-icon class=\"person\" name=\"person\" color=\"medium\"></ion-icon>\r\n      </div>\r\n\r\n      <ion-toolbar class=\"card-color\">\r\n        <ion-label class=\"center\" color=\"danger\">{{doTranslation('User Profile')}}</ion-label>\r\n        <ion-button fill=\"clear\" slot=\"end\">\r\n          {{doTranslation('edit')}} \r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-chip class=\"chip\" color=\"light\">\r\n            <ion-text  color=\"light\">{{(userDetails | async)[1].Name}}</ion-text>\r\n            <ion-text color=\"light\">{{(userDetails | async)[1].Value}}</ion-text>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-chip class=\"chip\" color=\"light\">\r\n            <ion-text color=\"light\">{{(userDetails | async)[3].Name}}</ion-text>\r\n            <ion-text color=\"light\">{{(userDetails | async)[3].Value}}</ion-text>\r\n          </ion-chip>        \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <!-- <form [formGroup]=\"userDetailsForm\" >\r\n      <div *ngFor=\"let detail of (userDetails | async)\">\r\n            <ion-input matInput readonly placeholder=\"{{ detail.Name }}\" [formControlName]=\"detail.Name\"></ion-input>\r\n      </div>\r\n          <ion-spinner *ngIf=\"busy | async\" name=\"bubbles\"></ion-spinner>\r\n  </form> -->\r\n\r\n    <!-- <ion-toolbar>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"danger\">Name</ion-label>\r\n        <ion-input value=\"Flixdrop User\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"danger\">Address Lane</ion-label>\r\n        <ion-input value=\"Bengaluru\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"danger\">City</ion-label>\r\n        <ion-input value=\"Bengaluru\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"danger\">Gender</ion-label>\r\n      <ion-input value=\"Male\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"danger\">Email</ion-label>\r\n      <ion-input value=\"flix@flixdrop.com\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" color=\"danger\">Phone Number</ion-label>\r\n      <ion-input value=\"+91 1236547892\"></ion-input>\r\n    </ion-item>\r\n  </ion-toolbar> -->\r\n  </ion-card>\r\n\r\n  <ion-button expand=\"block\" size=\"small\" color=\"danger\" (click)=\"onClickLogout()\">\r\n    <ion-icon slot=\"end\" name=\"power-outline\"></ion-icon>\r\n    <ion-label>{{doTranslation('Logout')}}</ion-label>\r\n  </ion-button>\r\n\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".backbtn {\n  margin-left: 15px;\n}\n\n.content {\n  --background: linear-gradient(180deg, rgb(25,25,25), rgb(50,50,50), rgb(75,75,75)) !important;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-origin: border-box;\n  background-position: center center;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\n.chip {\n  padding: 0 5%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\ndiv {\n  width: 100%;\n}\n\n.person {\n  height: 100px;\n  width: 100px;\n}\n\n.custom-card {\n  padding: 0 2%;\n  margin: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSxpQkFBQTtBQWpCSjs7QUFvQkE7RUFDSSw2RkFBQTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0FBakJOOztBQW9CQTtFQUNJLGtCQUFBO0FBakJKOztBQW9CQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQWpCSjs7QUFvQkE7RUFDSSxXQUFBO0FBakJKOztBQW9CQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBakJKOztBQW9CQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0FBakJKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5wcm9maWxlLWluZm8ge1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDUlO1xyXG5cclxuLy8gICAgIGlvbi1pdGVtIHtcclxuLy8gICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDUlO1xyXG4vLyAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjOTc5Nzk3MTM7XHJcblxyXG4vLyAgICAgICAgIGlvbi1sYWJlbCB7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4vLyAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlvbi1pbnB1dCB7XHJcbi8vICAgICAgICAgICAgIC0tY29sb3I6ICM0MzQzNDM7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4uYmFja2J0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYigyNSwyNSwyNSksIHJnYig1MCw1MCw1MCksIHJnYig3NSw3NSw3NSkpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGlwe1xyXG4gICAgcGFkZGluZzogMCA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBlcnNvbntcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tY2FyZHtcclxuICAgIHBhZGRpbmc6IDAgMiU7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59Il19 */");

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