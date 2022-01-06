(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-page-onboarding-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding-page/onboarding-page.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding-page/onboarding-page.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" zoom=\"true\" #mySlider>\n    <ion-slide class=\"slide\">\n      <div class=\"top-pos\">\n        <img class=\"logo-img\" src=\"../../../assets/logo-green.png\"/>\n      </div>\n      <div class=\"bottom-pos center select-color\">\n          <ion-label color=\"light\">Language</ion-label>\n          <ion-select interface=\"action-sheet\" (ionChange)=\"onLanguageChanged($event)\" [(ngModel)]=\"selectedLanguage\">\n            <ion-select-option value=\"english\">English</ion-select-option>\n            <ion-select-option value=\"ಕನ್ನಡ\">ಕನ್ನಡ</ion-select-option>\n          </ion-select>\n      </div>\n      <ion-toolbar color=\"none\">\n        <ion-icon color=\"primary\" [hidden]=\"mySlider.isBeginning()\" size=\"large\" slot=\"start\"\n          name=\"chevron-back-outline\" (click)=\"prev()\"></ion-icon>\n        <ion-icon color=\"primary\" size=\"large\" slot=\"end\" name=\"chevron-forward-outline\" (click)=\"next()\"></ion-icon>\n      </ion-toolbar>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <img class=\"img\" src=\"../../../assets/Screen 1.png\"/>\n      <ion-text>{{doTranslation('Sell your cattle at the best price online.')}}</ion-text>\n      <ion-text>{{doTranslation('Buy your preferred breed of cattle from wide range in just one click')}}</ion-text>\n      <ion-toolbar color=\"none\">\n        <ion-icon color=\"primary\" size=\"large\" slot=\"start\"\n          name=\"chevron-back-outline\" (click)=\"prev()\"></ion-icon>\n        <ion-icon color=\"primary\" size=\"large\" slot=\"end\" name=\"chevron-forward-outline\" (click)=\"next()\"></ion-icon>\n      </ion-toolbar>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <img class=\"img\" src=\"../../../assets/Screen 2.png\"/>\n      <ion-text>{{doTranslation('Order Animal Medicine at huge discount by ‘search’ or by ‘uploading doctor’s prescription’. Get Home Delivery')}}</ion-text>\n      <ion-toolbar color=\"none\">\n        <ion-icon color=\"primary\" size=\"large\" slot=\"start\" name=\"chevron-back-outline\" (click)=\"prev()\"></ion-icon>\n        <ion-icon color=\"primary\" size=\"large\" slot=\"end\" name=\"chevron-forward-outline\" (click)=\"next()\"></ion-icon>\n      </ion-toolbar>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <img class=\"img\" src=\"../../../assets/Screen 3.png\"/>\n      <ion-text>{{doTranslation('Order best Cattle Feeds from famous suppliers at anywhere in India. Increase Milk yield.')}}</ion-text>\n      <ion-toolbar color=\"none\">\n        <ion-icon color=\"primary\" size=\"large\" slot=\"start\" name=\"chevron-back-outline\" (click)=\"prev()\"></ion-icon>\n        <ion-button expand=\"block\" color=\"primary\" size=\"small\" slot=\"end\" name=\"chevron-forward-outline\" (click)=\"onClickFinish()\">{{doTranslation('FINISH')}}</ion-button>\n      </ion-toolbar>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/onboarding-page/onboarding-page-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/onboarding-page/onboarding-page-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: OnboardingPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPagePageRoutingModule", function() { return OnboardingPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _onboarding_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding-page.page */ "./src/app/pages/onboarding-page/onboarding-page.page.ts");




const routes = [
    {
        path: '',
        component: _onboarding_page_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPagePage"]
    }
];
let OnboardingPagePageRoutingModule = class OnboardingPagePageRoutingModule {
};
OnboardingPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnboardingPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/onboarding-page/onboarding-page.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/onboarding-page/onboarding-page.module.ts ***!
  \*****************************************************************/
/*! exports provided: OnboardingPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPagePageModule", function() { return OnboardingPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _onboarding_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding-page-routing.module */ "./src/app/pages/onboarding-page/onboarding-page-routing.module.ts");
/* harmony import */ var _onboarding_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboarding-page.page */ "./src/app/pages/onboarding-page/onboarding-page.page.ts");







let OnboardingPagePageModule = class OnboardingPagePageModule {
};
OnboardingPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _onboarding_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPagePageRoutingModule"]
        ],
        declarations: [_onboarding_page_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPagePage"]]
    })
], OnboardingPagePageModule);



/***/ }),

/***/ "./src/app/pages/onboarding-page/onboarding-page.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/onboarding-page/onboarding-page.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slide {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  height: 100%;\n  width: 100%;\n}\n\n.top-pos {\n  position: fixed;\n  top: 15%;\n}\n\n.bottom-pos {\n  position: fixed;\n  bottom: 25%;\n}\n\nion-slides {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n}\n\nion-toolbar {\n  position: fixed;\n  bottom: 5%;\n  padding: 0% 7%;\n}\n\n.logo-img {\n  height: 30%;\n  width: 70%;\n}\n\nion-label {\n  z-index: 2;\n}\n\nion-text {\n  z-index: 2;\n  color: black;\n  opacity: 75%;\n  font-size: 125%;\n}\n\nion-select {\n  width: 100%;\n  color: white;\n}\n\nion-select ion-select-option {\n  -webkit-text-decoration: 1px solid underline white !important;\n          text-decoration: 1px solid underline white !important;\n}\n\n.select-color {\n  font-size: 125%;\n  padding: 0 2%;\n  width: 70%;\n  height: 70px;\n  border-radius: 5px;\n  background-color: #329632;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy1wYWdlL29uYm9hcmRpbmctcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFHQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsUUFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFESjs7QUFJRTtFQUNFLFVBQUE7QUFESjs7QUFJRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREo7O0FBRUk7RUFDRSw2REFBQTtVQUFBLHFEQUFBO0FBQU47O0FBSUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy1wYWdlL29uYm9hcmRpbmctcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYxRjI5O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzRjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3AtcG9ze1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tLXBvc3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjUlO1xyXG4gIH1cclxuXHJcbiAgaW9uLXNsaWRlc3tcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRvb2xiYXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgcGFkZGluZzogMCUgNyU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvLWltZ3tcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVse1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRleHR7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogNzUlO1xyXG4gICAgZm9udC1zaXplOiAxMjUlO1xyXG4gIH1cclxuICBcclxuICBpb24tc2VsZWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBpb24tc2VsZWN0LW9wdGlvbntcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiAxcHggc29saWQgdW5kZXJsaW5lIHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0LWNvbG9ye1xyXG4gICAgZm9udC1zaXplOiAxMjUlO1xyXG4gICAgcGFkZGluZzogMCAyJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAgMTUwIDUwKTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/onboarding-page/onboarding-page.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/onboarding-page/onboarding-page.page.ts ***!
  \***************************************************************/
/*! exports provided: OnboardingPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPagePage", function() { return OnboardingPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_geo_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/geo-location.service */ "./src/app/services/geo-location.service.ts");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/translate.service */ "./src/app/services/translate.service.ts");





let OnboardingPagePage = class OnboardingPagePage {
    constructor(router, translateService, locService) {
        this.router = router;
        this.translateService = translateService;
        this.locService = locService;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
        };
        this.selectedLanguage = '';
        // this.locService.getGeolocation();
        // console.log('current-location in onboarding page- ', this.locService.currentLocation.value);
        // if(this.locService.currentLocation.value === "Karnataka"){
        //   this.selectedLanguage = "kannada";
        // }
    }
    ngOnInit() {
        console.log('Timeout started');
        // this.locService.getGeolocation();
        console.log('current-location in onboarding page- ', this.locService.currentLocation.value);
        if (this.locService.currentLocation.value === "Karnataka") {
            this.selectedLanguage = "ಕನ್ನಡ";
        }
        console.log('Timeout ended');
    }
    next() {
        this.slides.slideNext();
    }
    prev() {
        this.slides.slidePrev();
    }
    onClickFinish() {
        this.router.navigateByUrl('/login');
    }
    onLanguageChanged(event) {
        this.selectedLanguage = event.detail.value;
        this.translateService.currentLanguage.next(this.selectedLanguage);
    }
    doTranslation(text) {
        var translateText = this.translateService.doTranslation(text, this.selectedLanguage);
        return translateText;
    }
};
OnboardingPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: src_app_services_geo_location_service__WEBPACK_IMPORTED_MODULE_3__["GeoLocationService"] }
];
OnboardingPagePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['mySlider',] }]
};
OnboardingPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboarding-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./onboarding-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding-page/onboarding-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./onboarding-page.page.scss */ "./src/app/pages/onboarding-page/onboarding-page.page.scss")).default]
    })
], OnboardingPagePage);



/***/ })

}]);
//# sourceMappingURL=pages-onboarding-page-onboarding-page-module-es2015.js.map