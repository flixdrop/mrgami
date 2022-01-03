(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-cart-my-cart-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMyCartMyCartPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons class=\"btn-shape\" slot=\"start\" routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\r\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{doTranslation('MY CART')}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"content-color\">\r\n  <ion-toolbar class=\"center\" color=\"none\">\r\n    <ion-text color=\"danger\">{{doTranslation('CART ITEMS')}}</ion-text>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/cart/cart1.png\" /></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Cows</ion-text>\r\n                <ion-text>Bengaluru</ion-text>\r\n                <ion-text>Rs 40000</ion-text>\r\n                <ion-toolbar color=\"none\">\r\n                  <ion-item slot=\"end\" lines=\"none\" color=\"none\">\r\n                    <ion-icon (click)=\"onDecrease()\" color=\"medium\" name=\"remove-circle\" expand=\"block\"></ion-icon>\r\n                    <ion-label>{{num}}</ion-label>\r\n                    <ion-icon (click)=\"onIncrease()\" color=\"medium\" name=\"add-circle\" expand=\"block\"></ion-icon>\r\n                  </ion-item>\r\n                </ion-toolbar>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/cart/cart2.png\" /></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Ox</ion-text>\r\n                <ion-text>Bengaluru</ion-text>\r\n                <ion-text>Rs 60000</ion-text>\r\n                <ion-toolbar color=\"none\">\r\n                  <ion-item slot=\"end\" lines=\"none\" color=\"none\">\r\n                    <ion-icon (click)=\"onDecrease()\" color=\"medium\" name=\"remove-circle\" expand=\"block\"></ion-icon>\r\n                    <ion-label>{{num}}</ion-label>\r\n                    <ion-icon (click)=\"onIncrease()\" color=\"medium\" name=\"add-circle\" expand=\"block\"></ion-icon>\r\n                  </ion-item>\r\n                </ion-toolbar>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n        <ion-button size=\"small\" expand=\"block\" routerLink=\"/checkout\" color=\"primary\" routerDirection=\"forward\">\r\n          {{doTranslation('Continue')}}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <!-- <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src=\"../../assets/cart/cart3.png\" />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Shirt</p>\r\n          <p>Next</p>\r\n          <p>$54.00</p>\r\n\r\n          <div class=\"qty-selector\">\r\n            <ion-button fill=\"clear\">-</ion-button>\r\n            <ion-label>1</ion-label>\r\n            <ion-button fill=\"clear\">+</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src=\"../../assets/cart/cart4.png\" />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Women shirt</p>\r\n          <p>Plus Point</p>\r\n          <p>$34.00</p>\r\n\r\n          <div class=\"qty-selector\">\r\n            <ion-button fill=\"clear\">-</ion-button>\r\n            <ion-label>1</ion-label>\r\n            <ion-button fill=\"clear\">+</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src=\"../../assets/cart/cart5.png\" />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Shirt</p>\r\n          <p>Cat's Eye</p>\r\n          <p>$44.00</p>\r\n\r\n          <div class=\"qty-selector\">\r\n            <ion-button fill=\"clear\">-</ion-button>\r\n            <ion-label>1</ion-label>\r\n            <ion-button fill=\"clear\">+</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card> -->\r\n  <!-- </div> -->\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/my-cart/my-cart-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/my-cart/my-cart-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: MyCartPageRoutingModule */

    /***/
    function srcAppMyCartMyCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyCartPageRoutingModule", function () {
        return MyCartPageRoutingModule;
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


      var _my_cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-cart.page */
      "./src/app/my-cart/my-cart.page.ts");

      var routes = [{
        path: '',
        component: _my_cart_page__WEBPACK_IMPORTED_MODULE_3__["MyCartPage"]
      }];

      var MyCartPageRoutingModule = function MyCartPageRoutingModule() {
        _classCallCheck(this, MyCartPageRoutingModule);
      };

      MyCartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyCartPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/my-cart/my-cart.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/my-cart/my-cart.module.ts ***!
      \*******************************************/

    /*! exports provided: MyCartPageModule */

    /***/
    function srcAppMyCartMyCartModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyCartPageModule", function () {
        return MyCartPageModule;
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


      var _my_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-cart-routing.module */
      "./src/app/my-cart/my-cart-routing.module.ts");
      /* harmony import */


      var _my_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-cart.page */
      "./src/app/my-cart/my-cart.page.ts");

      var MyCartPageModule = function MyCartPageModule() {
        _classCallCheck(this, MyCartPageModule);
      };

      MyCartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyCartPageRoutingModule"]],
        declarations: [_my_cart_page__WEBPACK_IMPORTED_MODULE_6__["MyCartPage"]]
      })], MyCartPageModule);
      /***/
    },

    /***/
    "./src/app/my-cart/my-cart.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/my-cart/my-cart.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppMyCartMyCartPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  margin: 0;\n  padding: 0;\n}\n\nion-card {\n  margin: 0;\n  padding: 0;\n}\n\nion-thumbnail {\n  height: 100%;\n  width: 100%;\n}\n\nion-thumbnail img {\n  height: 150px;\n  width: 100%;\n}\n\n.center {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.left-align {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n.web-view {\n  width: 100%;\n}\n\n@media (min-width: 700px) {\n  .web-view {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2FydC9teS1jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQXhFSjs7QUEyRUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQXhFSjs7QUEyRUE7RUFLSSxZQUFBO0VBQ0EsV0FBQTtBQTVFSjs7QUF1RUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQXJFUjs7QUEyRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBeEVKOztBQTJFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUF4RUo7O0FBMkVBO0VBQ0ksV0FBQTtBQXhFSjs7QUEyRUE7RUFDSTtJQUNJLFVBQUE7RUF4RU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL215LWNhcnQvbXktY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gLmNhcnQtaXRlbXMge1xyXG4vLyAgICAgaW9uLWNhcmQge1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuLy8gICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuLy8gICAgICAgICAgICAgLml0ZW0taW1nIHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIGltZyB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgLml0ZW0taW5mbyB7XHJcbi8vICAgICAgICAgICAgICAgICBwIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgLnF0eS1zZWxlY3RvciB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiAjNTY1NjU2O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NjU2NTYgIWltcG9ydGFudDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gaW9uLWZvb3RlciB7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuLy8gICAgIC5tYWluLWJ1dHRvbjo6YWZ0ZXIge1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tdGh1bWJuYWlse1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0LWFsaWdue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLndlYi12aWV3e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCl7XHJcbiAgICAud2ViLXZpZXd7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/my-cart/my-cart.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/my-cart/my-cart.page.ts ***!
      \*****************************************/

    /*! exports provided: MyCartPage */

    /***/
    function srcAppMyCartMyCartPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyCartPage", function () {
        return MyCartPage;
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

      var MyCartPage = /*#__PURE__*/function () {
        function MyCartPage(translateService) {
          _classCallCheck(this, MyCartPage);

          this.translateService = translateService;
        }

        _createClass(MyCartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onDecrease",
          value: function onDecrease() {
            this.num = 0;

            if (this.num < 0) {
              alert("Item quantity cannot be 0");
            } else {
              this.num -= 1;
            }
          }
        }, {
          key: "onIncrease",
          value: function onIncrease() {
            this.num = 0;

            if (this.num < 0) {
              alert("Item quantity cannot be 0");
            } else {
              this.num += 1;
            }
          }
        }, {
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
            return translateText;
          }
        }]);

        return MyCartPage;
      }();

      MyCartPage.ctorParameters = function () {
        return [{
          type: _services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      };

      MyCartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./my-cart.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./my-cart.page.scss */
        "./src/app/my-cart/my-cart.page.scss"))["default"]]
      })], MyCartPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=my-cart-my-cart-module-es5.js.map