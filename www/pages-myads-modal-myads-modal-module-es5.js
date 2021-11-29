(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-myads-modal-myads-modal-module"], {
    /***/
    "./src/app/pages/myads-modal/myads-modal-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/myads-modal/myads-modal-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: MyadsModalPageRoutingModule */

    /***/
    function srcAppPagesMyadsModalMyadsModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyadsModalPageRoutingModule", function () {
        return MyadsModalPageRoutingModule;
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


      var _myads_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./myads-modal.page */
      "./src/app/pages/myads-modal/myads-modal.page.ts");

      var routes = [{
        path: '',
        component: _myads_modal_page__WEBPACK_IMPORTED_MODULE_3__["MyadsModalPage"]
      }];

      var MyadsModalPageRoutingModule = function MyadsModalPageRoutingModule() {
        _classCallCheck(this, MyadsModalPageRoutingModule);
      };

      MyadsModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyadsModalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/myads-modal/myads-modal.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/myads-modal/myads-modal.module.ts ***!
      \*********************************************************/

    /*! exports provided: MyadsModalPageModule */

    /***/
    function srcAppPagesMyadsModalMyadsModalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyadsModalPageModule", function () {
        return MyadsModalPageModule;
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


      var _myads_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./myads-modal-routing.module */
      "./src/app/pages/myads-modal/myads-modal-routing.module.ts");
      /* harmony import */


      var _myads_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./myads-modal.page */
      "./src/app/pages/myads-modal/myads-modal.page.ts");

      var MyadsModalPageModule = function MyadsModalPageModule() {
        _classCallCheck(this, MyadsModalPageModule);
      };

      MyadsModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _myads_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyadsModalPageRoutingModule"]],
        declarations: [_myads_modal_page__WEBPACK_IMPORTED_MODULE_6__["MyadsModalPage"]]
      })], MyadsModalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-myads-modal-myads-modal-module-es5.js.map