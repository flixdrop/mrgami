(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-form-seller-form-module"], {
    /***/
    "./src/app/seller-form/seller-form-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/seller-form/seller-form-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SellerFormPageRoutingModule */

    /***/
    function srcAppSellerFormSellerFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerFormPageRoutingModule", function () {
        return SellerFormPageRoutingModule;
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


      var _seller_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./seller-form.page */
      "./src/app/seller-form/seller-form.page.ts");

      var routes = [{
        path: '',
        component: _seller_form_page__WEBPACK_IMPORTED_MODULE_3__["SellerFormPage"]
      }];

      var SellerFormPageRoutingModule = function SellerFormPageRoutingModule() {
        _classCallCheck(this, SellerFormPageRoutingModule);
      };

      SellerFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SellerFormPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/seller-form/seller-form.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/seller-form/seller-form.module.ts ***!
      \***************************************************/

    /*! exports provided: SellerFormPageModule */

    /***/
    function srcAppSellerFormSellerFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerFormPageModule", function () {
        return SellerFormPageModule;
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


      var _seller_form_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./seller-form.page */
      "./src/app/seller-form/seller-form.page.ts");
      /* harmony import */


      var _seller_form_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./seller-form-routing.module */
      "./src/app/seller-form/seller-form-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var SellerFormPageModule = function SellerFormPageModule() {
        _classCallCheck(this, SellerFormPageModule);
      };

      SellerFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _seller_form_routing_module__WEBPACK_IMPORTED_MODULE_6__["SellerFormPageRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
        declarations: [_seller_form_page__WEBPACK_IMPORTED_MODULE_5__["SellerFormPage"]],
        bootstrap: [_seller_form_page__WEBPACK_IMPORTED_MODULE_5__["SellerFormPage"]]
      })], SellerFormPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=seller-form-seller-form-module-es5.js.map