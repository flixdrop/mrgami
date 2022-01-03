(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirm-confirm-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm/confirm.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm/confirm.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppConfirmConfirmPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\r\n  <div class=\"confirmation\">\r\n    <div class=\"ion-text-center\">\r\n\r\n      <div class=\"outer-circle\">\r\n        <div class=\"inner-circle\">\r\n          <img src=\"../../assets/like.png\" />\r\n        </div>\r\n      </div>\r\n\r\n      <h2>Confirmation</h2>\r\n      <p>\r\n        You have successfully <br>\r\n        completed your payment procedure\r\n      </p>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer translucent=\"true\" class=\"ion-no-border\" mode=\"md\">\r\n  <ion-toolbar color=\"translucent\">\r\n    <ion-button expand=\"block\" class=\"main-button\" routerLink=\"/home\" routerDirection=\"back\">Back to Home</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/confirm/confirm-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/confirm/confirm-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ConfirmPageRoutingModule */

    /***/
    function srcAppConfirmConfirmRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageRoutingModule", function () {
        return ConfirmPageRoutingModule;
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


      var _confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm.page */
      "./src/app/confirm/confirm.page.ts");

      var routes = [{
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmPage"]
      }];

      var ConfirmPageRoutingModule = function ConfirmPageRoutingModule() {
        _classCallCheck(this, ConfirmPageRoutingModule);
      };

      ConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/confirm/confirm.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/confirm/confirm.module.ts ***!
      \*******************************************/

    /*! exports provided: ConfirmPageModule */

    /***/
    function srcAppConfirmConfirmModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function () {
        return ConfirmPageModule;
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


      var _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-routing.module */
      "./src/app/confirm/confirm-routing.module.ts");
      /* harmony import */


      var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm.page */
      "./src/app/confirm/confirm.page.ts");

      var ConfirmPageModule = function ConfirmPageModule() {
        _classCallCheck(this, ConfirmPageModule);
      };

      ConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmPageRoutingModule"]],
        declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
      })], ConfirmPageModule);
      /***/
    },

    /***/
    "./src/app/confirm/confirm.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/confirm/confirm.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppConfirmConfirmPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".confirmation {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.confirmation .outer-circle {\n  width: 200px;\n  height: 200px;\n  background: #f8f8f8;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.confirmation .outer-circle .inner-circle {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  background: #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.confirmation .outer-circle .inner-circle img {\n  max-width: 30%;\n}\nion-footer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\nion-footer .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybS9jb25maXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUNZO0VBQ0ksY0FBQTtBQUNoQjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFDSSwyQkFBQTtBQURSIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybS9jb25maXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtYXRpb24ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAub3V0ZXItY2lyY2xlIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuaW5uZXItY2lyY2xlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuXHJcbiAgICAubWFpbi1idXR0b246OmFmdGVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/confirm/confirm.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/confirm/confirm.page.ts ***!
      \*****************************************/

    /*! exports provided: ConfirmPage */

    /***/
    function srcAppConfirmConfirmPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmPage", function () {
        return ConfirmPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ConfirmPage = /*#__PURE__*/function () {
        function ConfirmPage() {
          _classCallCheck(this, ConfirmPage);
        }

        _createClass(ConfirmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConfirmPage;
      }();

      ConfirmPage.ctorParameters = function () {
        return [];
      };

      ConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./confirm.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm/confirm.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./confirm.page.scss */
        "./src/app/confirm/confirm.page.scss"))["default"]]
      })], ConfirmPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=confirm-confirm-module-es5.js.map