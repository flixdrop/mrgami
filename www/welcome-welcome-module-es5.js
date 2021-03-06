(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWelcomeWelcomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n \n</ion-header>\n\n<ion-content class=\"ion-padding ion-text-center\">\n  <div class=\"container\">\n    <div class=\"page-header\">\n      <h1>Welcome to MRGAMI</h1>\n      <h3>Get the best for your cattle</h3>\n    </div>\n\n    <img src=\"../../assets/welcome.png\" />\n\n    <div class=\"button-container\">\n      <ion-button expand=\"block\" class=\"main-button\" routerLink=\"login\" routerDirection=\"forward\">Log in</ion-button>\n      <ion-button expand=\"block\" color=\"dark\" fill=\"clear\" routerLink=\"signup\" routerDirection=\"forward\">Signup</ion-button>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/welcome/welcome-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/welcome/welcome-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: WelcomePageRoutingModule */

    /***/
    function srcAppWelcomeWelcomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function () {
        return WelcomePageRoutingModule;
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


      var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./welcome.page */
      "./src/app/welcome/welcome.page.ts");

      var routes = [{
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
      }];

      var WelcomePageRoutingModule = function WelcomePageRoutingModule() {
        _classCallCheck(this, WelcomePageRoutingModule);
      };

      WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WelcomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/welcome/welcome.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/welcome/welcome.module.ts ***!
      \*******************************************/

    /*! exports provided: WelcomePageModule */

    /***/
    function srcAppWelcomeWelcomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function () {
        return WelcomePageModule;
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


      var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./welcome-routing.module */
      "./src/app/welcome/welcome-routing.module.ts");
      /* harmony import */


      var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./welcome.page */
      "./src/app/welcome/welcome.page.ts");

      var WelcomePageModule = function WelcomePageModule() {
        _classCallCheck(this, WelcomePageModule);
      };

      WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
      })], WelcomePageModule);
      /***/
    },

    /***/
    "./src/app/welcome/welcome.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/welcome/welcome.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppWelcomeWelcomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  height: 100%;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  color: aliceblue;\n}\n\n.page-header h1 {\n  margin-top: 0;\n}\n\n.button-container {\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuLnBhZ2UtaGVhZGVyIGgxIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/welcome/welcome.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/welcome/welcome.page.ts ***!
      \*****************************************/

    /*! exports provided: WelcomePage */

    /***/
    function srcAppWelcomeWelcomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomePage", function () {
        return WelcomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var WelcomePage = /*#__PURE__*/function () {
        function WelcomePage() {
          _classCallCheck(this, WelcomePage);
        }

        _createClass(WelcomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WelcomePage;
      }();

      WelcomePage.ctorParameters = function () {
        return [];
      };

      WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./welcome.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./welcome.page.scss */
        "./src/app/welcome/welcome.page.scss"))["default"]]
      })], WelcomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=welcome-welcome-module-es5.js.map