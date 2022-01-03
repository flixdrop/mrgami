(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-onboarding-page-onboarding-page-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding-page/onboarding-page.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding-page/onboarding-page.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesOnboardingPageOnboardingPagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" zoom=\"true\" #mySlider>\n    <ion-slide class=\"slide\">\n        <ion-item lines=\"none\" color=\"none\">\n          <ion-label>Language</ion-label>\n          <ion-select class=\"content-color\" interface=\"action-sheet\" (ionChange)=\"onLanguageChanged($event)\" [(ngModel)]=\"selectedLanguage\">\n            <ion-select-option value=\"english\">English</ion-select-option>\n            <ion-select-option value=\"kannada\">Kannada</ion-select-option>\n          </ion-select>\n        </ion-item>\n      <ion-toolbar color=\"none\">\n        <ion-icon color=\"primary\" [hidden]=\"mySlider.isBeginning()\" size=\"large\" slot=\"start\"\n          name=\"chevron-back-outline\" (click)=\"prev()\"></ion-icon>\n        <ion-icon color=\"primary\" size=\"large\" slot=\"end\" name=\"chevron-forward-outline\" (click)=\"next()\"></ion-icon>\n      </ion-toolbar>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <img class=\"img\" src=\"../../../assets/Screen 1.png\"/>\n      <ion-text>{{doTranslation('Sell your cattle at the best price online.')}}</ion-text>\n      <ion-text>{{doTranslation('Buy your preferred breed of cattle from wide range in just one click')}}</ion-text>\n      <ion-toolbar color=\"none\">\n        <ion-icon color=\"primary\" [hidden]=\"mySlider.isBeginning()\" size=\"large\" slot=\"start\"\n          name=\"chevron-back-outline\" (click)=\"prev()\"></ion-icon>\n        <ion-icon color=\"primary\" size=\"large\" slot=\"end\" name=\"chevron-forward-outline\" (click)=\"next()\"></ion-icon>\n      </ion-toolbar>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <img class=\"img\" src=\"../../../assets/Screen 2.png\"/>\n      <ion-text>{{doTranslation('Order Animal Medicine at huge discount by ‘search’ or by ‘uploading doctor’s prescription’. Get Home Delivery')}}</ion-text>\n      <ion-toolbar color=\"none\">\n        <ion-icon color=\"primary\" size=\"large\" slot=\"start\" name=\"chevron-back-outline\" (click)=\"prev()\"></ion-icon>\n        <ion-icon color=\"primary\" size=\"large\" slot=\"end\" name=\"chevron-forward-outline\" (click)=\"next()\"></ion-icon>\n      </ion-toolbar>\n    </ion-slide>\n    <ion-slide class=\"slide\">\n      <img class=\"img\" src=\"../../../assets/Screen 3.png\"/>\n      <ion-text>{{doTranslation('Order best Cattle Feeds from famous suppliers at anywhere in India. Increase Milk yield.')}}</ion-text>\n      <ion-toolbar color=\"none\">\n        <ion-icon color=\"primary\" size=\"large\" slot=\"start\" name=\"chevron-back-outline\" (click)=\"prev()\"></ion-icon>\n        <ion-button expand=\"block\" color=\"primary\" size=\"small\" slot=\"end\" name=\"chevron-forward-outline\" (click)=\"onClickFinish()\">{{doTranslation('FINISH')}}</ion-button>\n      </ion-toolbar>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/pages/onboarding-page/onboarding-page-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/onboarding-page/onboarding-page-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: OnboardingPagePageRoutingModule */

    /***/
    function srcAppPagesOnboardingPageOnboardingPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPagePageRoutingModule", function () {
        return OnboardingPagePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _onboarding_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./onboarding-page.page */
      "./src/app/pages/onboarding-page/onboarding-page.page.ts");

      var routes = [{
        path: '',
        component: _onboarding_page_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPagePage"]
      }];

      var OnboardingPagePageRoutingModule = function OnboardingPagePageRoutingModule() {
        _classCallCheck(this, OnboardingPagePageRoutingModule);
      };

      OnboardingPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OnboardingPagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/onboarding-page/onboarding-page.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/onboarding-page/onboarding-page.module.ts ***!
      \*****************************************************************/

    /*! exports provided: OnboardingPagePageModule */

    /***/
    function srcAppPagesOnboardingPageOnboardingPageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPagePageModule", function () {
        return OnboardingPagePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _onboarding_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./onboarding-page-routing.module */
      "./src/app/pages/onboarding-page/onboarding-page-routing.module.ts");
      /* harmony import */


      var _onboarding_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./onboarding-page.page */
      "./src/app/pages/onboarding-page/onboarding-page.page.ts");

      var OnboardingPagePageModule = function OnboardingPagePageModule() {
        _classCallCheck(this, OnboardingPagePageModule);
      };

      OnboardingPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _onboarding_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPagePageRoutingModule"]],
        declarations: [_onboarding_page_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPagePage"]]
      })], OnboardingPagePageModule);
      /***/
    },

    /***/
    "./src/app/pages/onboarding-page/onboarding-page.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/onboarding-page/onboarding-page.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesOnboardingPageOnboardingPagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".slide {\n  margin: 0;\n  padding: 0;\n  padding-top: 100%;\n  background-color: white;\n  color: silver;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n}\n\nion-slides {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n}\n\nion-toolbar {\n  position: fixed;\n  bottom: 5%;\n  padding: 0% 7%;\n}\n\n.img {\n  position: fixed;\n  top: 0;\n  z-index: 0;\n  height: 75%;\n  width: 100%;\n}\n\nion-label {\n  z-index: 2;\n}\n\nion-text {\n  z-index: 2;\n  color: black;\n  opacity: 75%;\n  font-size: 125%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb25ib2FyZGluZy1wYWdlL29uYm9hcmRpbmctcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBR0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxVQUFBO0FBREo7O0FBSUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vbmJvYXJkaW5nLXBhZ2Uvb25ib2FyZGluZy1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwJTtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxRjFGMjk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjNGO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogc2lsdmVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zbGlkZXN7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10b29sYmFye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIHBhZGRpbmc6IDAlIDclO1xyXG4gIH1cclxuICBcclxuICAuaW1ne1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10ZXh0e1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDc1JTtcclxuICAgIGZvbnQtc2l6ZTogMTI1JTtcclxuICB9XHJcbiAgIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/onboarding-page/onboarding-page.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/onboarding-page/onboarding-page.page.ts ***!
      \***************************************************************/

    /*! exports provided: OnboardingPagePage */

    /***/
    function srcAppPagesOnboardingPageOnboardingPagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnboardingPagePage", function () {
        return OnboardingPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/translate.service */
      "./src/app/services/translate.service.ts");

      var OnboardingPagePage = /*#__PURE__*/function () {
        function OnboardingPagePage(router, service) {
          _classCallCheck(this, OnboardingPagePage);

          this.router = router;
          this.service = service;
          this.slideOpts = {
            initialSlide: 0,
            speed: 400
          };
          this.selectedLanguage = "english";
        }

        _createClass(OnboardingPagePage, [{
          key: "next",
          value: function next() {
            this.slides.slideNext();
          }
        }, {
          key: "prev",
          value: function prev() {
            this.slides.slidePrev();
          }
        }, {
          key: "onClickFinish",
          value: function onClickFinish() {
            this.router.navigateByUrl('/login');
          }
        }, {
          key: "onLanguageChanged",
          value: function onLanguageChanged(event) {
            this.selectedLanguage = event.detail.value;
            this.service.currentLanguage.next(this.selectedLanguage);
          }
        }, {
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.service.doTranslation(text, this.selectedLanguage);
            return translateText;
          }
        }]);

        return OnboardingPagePage;
      }();

      OnboardingPagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      };

      OnboardingPagePage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['mySlider']
        }]
      };
      OnboardingPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboarding-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./onboarding-page.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/onboarding-page/onboarding-page.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./onboarding-page.page.scss */
        "./src/app/pages/onboarding-page/onboarding-page.page.scss"))["default"]]
      })], OnboardingPagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-onboarding-page-onboarding-page-module-es5.js.map