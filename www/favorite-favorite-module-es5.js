(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorite-favorite-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFavoriteFavoritePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons class=\"btn-shape\" slot=\"start\" routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\r\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{doTranslation('FAVORITES')}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"content-color\">\r\n  <ion-toolbar class=\"center\" color=\"none\">\r\n    <ion-text color=\"danger\">{{doTranslation('FAVORITES')}}</ion-text>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/products/prod-1.png\"/></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Rs 40000</ion-text>\r\n                <ion-text>Cow</ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/products/prod-2.png\"/></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Rs 40000</ion-text>\r\n                <ion-text>Cow</ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/products/prod-3.png\"/></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Rs 40000</ion-text>\r\n                <ion-text>Cow</ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/products/prod-4.png\"/></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Rs 40000</ion-text>\r\n                <ion-text>Cow</ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/products/prod-5.png\"/></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Rs 40000</ion-text>\r\n                <ion-text>Cow</ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/favorite/favorite-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/favorite/favorite-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: FavoritePageRoutingModule */

    /***/
    function srcAppFavoriteFavoriteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritePageRoutingModule", function () {
        return FavoritePageRoutingModule;
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


      var _favorite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./favorite.page */
      "./src/app/favorite/favorite.page.ts");

      var routes = [{
        path: '',
        component: _favorite_page__WEBPACK_IMPORTED_MODULE_3__["FavoritePage"]
      }];

      var FavoritePageRoutingModule = function FavoritePageRoutingModule() {
        _classCallCheck(this, FavoritePageRoutingModule);
      };

      FavoritePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FavoritePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/favorite/favorite.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/favorite/favorite.module.ts ***!
      \*********************************************/

    /*! exports provided: FavoritePageModule */

    /***/
    function srcAppFavoriteFavoriteModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritePageModule", function () {
        return FavoritePageModule;
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


      var _favorite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favorite-routing.module */
      "./src/app/favorite/favorite-routing.module.ts");
      /* harmony import */


      var _favorite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./favorite.page */
      "./src/app/favorite/favorite.page.ts");

      var FavoritePageModule = function FavoritePageModule() {
        _classCallCheck(this, FavoritePageModule);
      };

      FavoritePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favorite_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritePageRoutingModule"]],
        declarations: [_favorite_page__WEBPACK_IMPORTED_MODULE_6__["FavoritePage"]]
      })], FavoritePageModule);
      /***/
    },

    /***/
    "./src/app/favorite/favorite.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/favorite/favorite.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppFavoriteFavoritePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  margin: 0;\n  padding: 0;\n}\n\nion-card {\n  margin: 0;\n  padding: 0;\n}\n\nion-thumbnail {\n  height: 100%;\n  width: 100%;\n}\n\nion-thumbnail img {\n  height: 150px;\n  width: 100%;\n}\n\n.center {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.left-align {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n.web-view {\n  width: 100%;\n}\n\n@media (min-width: 700px) {\n  .web-view {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBcERKOztBQXVEQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBcERKOztBQXVEQTtFQUtJLFlBQUE7RUFDQSxXQUFBO0FBeERKOztBQW1ESTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBakRSOztBQXVEQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFwREo7O0FBdURBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQXBESjs7QUF1REE7RUFDSSxXQUFBO0FBcERKOztBQXVEQTtFQUNJO0lBQ0ksVUFBQTtFQXBETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmJhY2tidG4ge1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5ub3RpZmljYXRpb24ge1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY29udGVudCB7XHJcbi8vICAgICAtLXBhZGRpbmctdG9wOiAxNnB4O1xyXG4vLyAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcclxuLy8gICAgIC0tcGFkZGluZy1zdGFydDogMjZweDtcclxuLy8gICAgIC0tcGFkZGluZy1lbmQ6IDI2cHg7XHJcbi8vIH1cclxuXHJcbi8vIC50aXRsZSB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAwO1xyXG4vLyAgICAgY29sb3I6ICM0MzQzNDM7XHJcbi8vIH1cclxuXHJcbi8vIC5mYXZvcml0ZS1pdGVtcyB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuLy8gICAgIGlvbi1jb2wge1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgaW1nIHtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbi8vICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBwIHtcclxuLy8gICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgaDYge1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAucGFkZGluZy1sZWZ0MCB7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnBhZGRpbmctcmlnaHQwIHtcclxuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tdGh1bWJuYWlse1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0LWFsaWdue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLndlYi12aWV3e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCl7XHJcbiAgICAud2ViLXZpZXd7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/favorite/favorite.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/favorite/favorite.page.ts ***!
      \*******************************************/

    /*! exports provided: FavoritePage */

    /***/
    function srcAppFavoriteFavoritePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoritePage", function () {
        return FavoritePage;
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

      var FavoritePage = /*#__PURE__*/function () {
        function FavoritePage(translateService) {
          _classCallCheck(this, FavoritePage);

          this.translateService = translateService;
        }

        _createClass(FavoritePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
            return translateText;
          }
        }]);

        return FavoritePage;
      }();

      FavoritePage.ctorParameters = function () {
        return [{
          type: _services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      };

      FavoritePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./favorite.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./favorite.page.scss */
        "./src/app/favorite/favorite.page.scss"))["default"]]
      })], FavoritePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=favorite-favorite-module-es5.js.map