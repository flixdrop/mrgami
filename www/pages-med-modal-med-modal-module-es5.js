(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-med-modal-med-modal-module"], {
    /***/
    "./src/app/pages/med-modal/med-modal-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/med-modal/med-modal-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: MedModalPageRoutingModule */

    /***/
    function srcAppPagesMedModalMedModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedModalPageRoutingModule", function () {
        return MedModalPageRoutingModule;
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


      var _med_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./med-modal.page */
      "./src/app/pages/med-modal/med-modal.page.ts");

      var routes = [{
        path: '',
        component: _med_modal_page__WEBPACK_IMPORTED_MODULE_3__["MedModalPage"]
      }];

      var MedModalPageRoutingModule = function MedModalPageRoutingModule() {
        _classCallCheck(this, MedModalPageRoutingModule);
      };

      MedModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MedModalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/med-modal/med-modal.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/med-modal/med-modal.module.ts ***!
      \*****************************************************/

    /*! exports provided: MedModalPageModule */

    /***/
    function srcAppPagesMedModalMedModalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedModalPageModule", function () {
        return MedModalPageModule;
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


      var _med_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./med-modal-routing.module */
      "./src/app/pages/med-modal/med-modal-routing.module.ts");
      /* harmony import */


      var _med_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./med-modal.page */
      "./src/app/pages/med-modal/med-modal.page.ts");

      var MedModalPageModule = function MedModalPageModule() {
        _classCallCheck(this, MedModalPageModule);
      };

      MedModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _med_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedModalPageRoutingModule"]],
        declarations: [_med_modal_page__WEBPACK_IMPORTED_MODULE_6__["MedModalPage"]]
      })], MedModalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-med-modal-med-modal-module-es5.js.map