(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-orders-my-orders-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMyOrdersMyOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons class=\"btn-shape\" slot=\"start\" routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\r\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{doTranslation('MY ORDERS')}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"content-color\">\r\n  <ion-toolbar class=\"center\" color=\"none\">\r\n    <ion-text color=\"danger\">{{doTranslation('MY ORDERS')}}</ion-text>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/cart/cart1.png\" /></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Ox</ion-text>\r\n                <ion-text>Bengaluru</ion-text>\r\n                <ion-text>Rs 60000</ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-button size=\"small\" expand=\"block\" color=\"primary\">{{doTranslation('Order Again')}}</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/cart/cart2.png\" /></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Ox</ion-text>\r\n                <ion-text>Bengaluru</ion-text>\r\n                <ion-text>Rs 60000</ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-button size=\"small\" expand=\"block\" color=\"primary\">{{doTranslation('Order Again')}}</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/cart/cart3.png\" /></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Ox</ion-text>\r\n                <ion-text>Bengaluru</ion-text>\r\n                <ion-text>Rs 60000</ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-button size=\"small\" expand=\"block\" color=\"primary\">{{doTranslation('Order Again')}}</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <!-- <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src='../../assets/cart/cart4.png' />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Women shirt</p>\r\n          <p>Plus Point</p>\r\n          <p>$54.00</p>\r\n\r\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card> -->\r\n  <!-- <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src='../../assets/cart/cart5.png' />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Shirt</p>\r\n          <p>Cat's Eye</p>\r\n          <p>$50.00</p>\r\n\r\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card> -->\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/my-orders/my-orders-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/my-orders/my-orders-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: MyOrdersPageRoutingModule */

    /***/
    function srcAppMyOrdersMyOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyOrdersPageRoutingModule", function () {
        return MyOrdersPageRoutingModule;
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


      var _my_orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-orders.page */
      "./src/app/my-orders/my-orders.page.ts");

      var routes = [{
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_3__["MyOrdersPage"]
      }];

      var MyOrdersPageRoutingModule = function MyOrdersPageRoutingModule() {
        _classCallCheck(this, MyOrdersPageRoutingModule);
      };

      MyOrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyOrdersPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/my-orders/my-orders.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/my-orders/my-orders.module.ts ***!
      \***********************************************/

    /*! exports provided: MyOrdersPageModule */

    /***/
    function srcAppMyOrdersMyOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyOrdersPageModule", function () {
        return MyOrdersPageModule;
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


      var _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-orders-routing.module */
      "./src/app/my-orders/my-orders-routing.module.ts");
      /* harmony import */


      var _my_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-orders.page */
      "./src/app/my-orders/my-orders.page.ts");

      var MyOrdersPageModule = function MyOrdersPageModule() {
        _classCallCheck(this, MyOrdersPageModule);
      };

      MyOrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyOrdersPageRoutingModule"]],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPage"]]
      })], MyOrdersPageModule);
      /***/
    },

    /***/
    "./src/app/my-orders/my-orders.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/my-orders/my-orders.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppMyOrdersMyOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  margin: 0;\n  padding: 0;\n}\n\nion-card {\n  margin: 0;\n  padding: 0;\n}\n\nion-thumbnail {\n  height: 100%;\n  width: 100%;\n}\n\nion-thumbnail img {\n  height: 150px;\n  width: 100%;\n}\n\n.center {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.left-align {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n.web-view {\n  width: 100%;\n}\n\n@media (min-width: 700px) {\n  .web-view {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUtJLFlBQUE7RUFDQSxXQUFBO0FBSEo7O0FBRkk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUlSOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxVQUFBO0VBQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL215LW9yZGVycy9teS1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tdGh1bWJuYWlse1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0LWFsaWdue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLndlYi12aWV3e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCl7XHJcbiAgICAud2ViLXZpZXd7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/my-orders/my-orders.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/my-orders/my-orders.page.ts ***!
      \*********************************************/

    /*! exports provided: MyOrdersPage */

    /***/
    function srcAppMyOrdersMyOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyOrdersPage", function () {
        return MyOrdersPage;
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


      var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/translate.service */
      "./src/app/services/translate.service.ts");

      var MyOrdersPage = /*#__PURE__*/function () {
        function MyOrdersPage(translateService) {
          _classCallCheck(this, MyOrdersPage);

          this.translateService = translateService;
        }

        _createClass(MyOrdersPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
            return translateText;
          }
        }]);

        return MyOrdersPage;
      }();

      MyOrdersPage.ctorParameters = function () {
        return [{
          type: _services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      };

      MyOrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-orders.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-orders.page.scss */
        "./src/app/my-orders/my-orders.page.scss"))["default"]]
      })], MyOrdersPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=my-orders-my-orders-module-es5.js.map