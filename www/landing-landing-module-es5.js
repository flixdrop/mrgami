(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLandingLandingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\n        <img src=\"../../assets/back-dark.svg\" />\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons >\n      <ion-button>\n        <ion-searchbar placeholder=\"Search Cattles\"></ion-searchbar>\n        <!-- <ion-icon name=\"search-outline\" color=\"dark\"></ion-icon> -->\n      </ion-button>\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n        <span>&nbsp;</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- <div>\n  <label>Buy Animal</label>\n</div> -->\n<ion-content>\n   <ion-grid>\n     <ion-row>\n      <ion-col size=\"6\">\n        <ion-button class=\"curved\" (click)=goToBuy()><img src=\"../../assets/icon/sell-cow-icon.png\" width= \"90px\"\n          height=\" 90px\"></ion-button>\n       </ion-col>\n       <ion-col size=\"6\">\n         <ion-button class=\"curved\" (click)=goToMedicine()><img src=\"../../assets/icon/cow-medicine.png\" width= \"90px\"\n          height=\" 90px\"></ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n      <ion-col size=\"6\">\n       <ion-button class=\"curved\" (click)=goToFeed()><img src=\"../../assets/icon/animal-feed.png\" width= \"90px\"\n        height=\" 90px\"></ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button class=\"curved\" (click)=goToSemen()><img src=\"../../assets/icon/cow-semen.png\" width= \"90px\"\n          height=\" 90px\"></ion-button>\n       </ion-col>\n     </ion-row>\n   </ion-grid>\n   <div class=\"category-slider ion-padding-start\">\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\n      <ion-slide *ngFor=\"let category of categories\">\n        <ion-col>\n          <h4>{{ category.name }}</h4>\n          <img src=\"{{ category.image }}\" />\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n   <!-- <ion-card class=\"card\">\n     <ion-card-title>Today's Offers</ion-card-title>\n    <ion-slides pager=\"false\" class=\"product-slider\">\n      <ion-slide>\n        <img src=\"../../assets/product-slider/prod-slide1.jpg\" height=\"100px\"/>\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/product-slider/prod-slide1.jpg\" height=\"100px\"/>\n      </ion-slide>\n      <ion-slide>\n        <img src=\"../../assets/product-slider/prod-slide1.jpg\" height=\"100px\"/>\n      </ion-slide>\n    </ion-slides>\n    </ion-card> -->\n  <!-- <ion-slides pager=\"true\" class=\"product-slider\">\n    <ion-slide>\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\n    </ion-slide>\n  </ion-slides> -->\n  <!-- <div class=\"seperator\">\n    <hr>\n  </div>\n  <div class=\"ion-padding-vertical-custom\">\n    \n    <h4 class=\"price\">\n      Rs 40000\n      <span class=\"real-price\">Rs 80000</span>\n    </h4>\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div> -->\n\n  \n\n\n\n\n  <!-- <div class=\"variation\">\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"size\">\n      <ion-segment-button value=\"size\">\n        <ion-label>Select Size</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"color\">\n        <ion-label>Select Color</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div class=\"seperator\">\n    <hr>\n  </div>\n\n  <div class=\"variation-selector\">\n    <div class=\"sizes\" [class.active-variation]=\"activeVariation == 'size'\">\n      <div [class.active]=\"selectedSize == 1\" (click)=\"changeSize(1)\">\n        S\n      </div>\n      <div [class.active]=\"selectedSize == 2\" (click)=\"changeSize(2)\">\n        M\n      </div>\n      <div [class.active]=\"selectedSize == 3\" (click)=\"changeSize(3)\">\n        L\n      </div>\n      <div [class.active]=\"selectedSize == 4\" (click)=\"changeSize(4)\">\n        XL\n      </div>\n    </div>\n\n    <div class=\"colors\" [class.active-variation]=\"activeVariation == 'color'\">\n      <div [class.active]=\"selectedColor == 1\" (click)=\"changeColor(1)\">\n        BLACK\n      </div>\n      <div [class.active]=\"selectedColor == 2\" (click)=\"changeColor(2)\">\n        GREEN\n      </div>\n      <div [class.active]=\"selectedColor == 3\" (click)=\"changeColor(3)\">\n        BLUE\n      </div>\n    </div>\n  </div> -->\n\n";
      /***/
    },

    /***/
    "./src/app/landing/landing-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/landing/landing-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: LandingPageRoutingModule */

    /***/
    function srcAppLandingLandingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function () {
        return LandingPageRoutingModule;
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


      var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./landing.page */
      "./src/app/landing/landing.page.ts");

      var routes = [{
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
      }];

      var LandingPageRoutingModule = function LandingPageRoutingModule() {
        _classCallCheck(this, LandingPageRoutingModule);
      };

      LandingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LandingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/landing/landing.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/landing/landing.module.ts ***!
      \*******************************************/

    /*! exports provided: LandingPageModule */

    /***/
    function srcAppLandingLandingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageModule", function () {
        return LandingPageModule;
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


      var _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./landing-routing.module */
      "./src/app/landing/landing-routing.module.ts");
      /* harmony import */


      var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./landing.page */
      "./src/app/landing/landing.page.ts");

      var LandingPageModule = function LandingPageModule() {
        _classCallCheck(this, LandingPageModule);
      };

      LandingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageRoutingModule"]],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
      })], LandingPageModule);
      /***/
    },

    /***/
    "./src/app/landing/landing.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/landing/landing.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppLandingLandingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 80px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n  --background: url('bgman.jpg') no-repeat center/cover fixed;\n  box-shadow: inset 0 0 0 50vw rgba(7, 76, 155, 0.3);\n}\n\nion-grid {\n  padding: 150px 5px 5px 20px;\n}\n\n.item-name {\n  color: #2bff00;\n}\n\n.price {\n  color: #3CF185;\n}\n\n.price span {\n  color: #3CF185;\n  text-decoration: line-through;\n  margin-left: 20px;\n  font-size: medium;\n  vertical-align: top;\n}\n\n.seperator hr {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  background: #818080;\n}\n\nh5 {\n  color: #23ac08;\n  font-size: larger;\n}\n\n.count {\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--ion-color-primary);\n  font-size: large;\n}\n\n.count span {\n  color: #26ff73;\n  align-content: space-around;\n}\n\n.review {\n  margin-top: 16px;\n  color: #9dad0d;\n}\n\n.review .rating {\n  display: inline-block;\n  color: #9dad0d;\n  background: var(--ion-color-primary);\n  padding: 10px 20px 10px 20px;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n\n.ion-padding-vertical-custom {\n  padding-top: 5px;\n}\n\n.curved {\n  border-radius: 100% 0% 100% 0%/0% 100% 0% 100%;\n  color: #36363F;\n  width: 120px;\n  height: 120px;\n}\n\n.description {\n  padding-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  zoom: 250%;\n}\n\n.description h5 {\n  color: #9dad0d;\n  padding-top: 10px;\n}\n\n.description p {\n  color: #9dad0d;\n}\n\n.description .colleft {\n  justify-content: start;\n  zoom: 250%;\n}\n\n.description .colright {\n  justify-content: end;\n  align-items: flex-end;\n  zoom: 250%;\n}\n\n.variation {\n  padding-top: 16px;\n}\n\n.variation ion-segment-button {\n  color: #9dad0d;\n}\n\n.variation-selector {\n  margin-top: 30px;\n  display: flex;\n  position: relative;\n}\n\n.variation-selector .active-variation {\n  opacity: 1 !important;\n  z-index: 1 !important;\n}\n\n.variation-selector .sizes {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  z-index: 0;\n  padding-bottom: 30px;\n}\n\n.variation-selector .sizes div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #9dad0d;\n  width: 50px;\n  height: 50px;\n  margin-right: 8px;\n  transition: 0.5s ease-in-out;\n}\n\n.variation-selector .sizes .active {\n  color: #1a0000;\n  background-color: var(--ion-color-primary);\n}\n\n.variation-selector .colors {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  z-index: 0;\n  padding-bottom: 30px;\n}\n\n.variation-selector .colors div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #9dad0d;\n  width: 70px;\n  height: 50px;\n  margin-right: 8px;\n  transition: 0.5s ease-in-out;\n}\n\n.variation-selector .colors .active {\n  color: #9dad0d;\n  background-color: var(--ion-color-primary);\n}\n\n.card {\n  background-color: #000000b8;\n  text-align: center;\n  box-shadow: none;\n}\n\nion-footer ion-row {\n  padding: 0;\n}\n\nion-footer ion-row ion-col {\n  padding: 0;\n}\n\nion-footer ion-row ion-col ion-button {\n  margin: 0;\n  height: 50px;\n  font-size: 18px;\n  box-shadow: none;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n.footer-md::before {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyREFBQTtFQUNBLGtEQUFBO0FBQ0o7O0FBSUE7RUFDSSwyQkFBQTtBQURKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUVJO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBSUk7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7QUFGUjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUlJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFGUjs7QUFPQTtFQUdJLGdCQUFBO0FBTko7O0FBUUE7RUFDQSw4Q0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUxBOztBQVFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBTEo7O0FBTUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFKUjs7QUFRSTtFQUNJLGNBQUE7QUFOUjs7QUFRSTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtBQU5SOztBQVFJO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFQUjs7QUFXQTtFQUNJLGlCQUFBO0FBUko7O0FBVUk7RUFDSSxjQUFBO0FBUlI7O0FBWUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVRKOztBQVdJO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtBQVRSOztBQVlJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBVlI7O0FBWVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBVlo7O0FBYVE7RUFDSSxjQUFBO0VBQ0EsMENBQUE7QUFYWjs7QUFlSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQWJSOztBQWVRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQWJaOztBQWdCUTtFQUNJLGNBQUE7RUFDQSwwQ0FBQTtBQWRaOztBQXFCQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWxCSjs7QUFxQkk7RUFDSSxVQUFBO0FBbEJSOztBQW9CUTtFQUNJLFVBQUE7QUFsQlo7O0FBb0JZO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFsQmhCOztBQXVCQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQXBCSjs7QUF1QkE7RUFDSSxpQ0FBQTtBQXBCSiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5ub3RpZmljYXRpb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy10b3A6IDgwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjZweDtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmdtYW4uanBnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDUwdncgcmdiYSg3LCA3NiwgMTU1LCAwLjMpXG4gICAgXG4gICAgXG4gICAgLy8gLS1iYWNrZ3JvdW5kLWNvbG9yOiMxZTFlMWU7XG59XG5pb24tZ3JpZHtcbiAgICBwYWRkaW5nOiAxNTBweCA1cHggNXB4IDIwcHg7XG59XG4uaXRlbS1uYW1lIHtcbiAgICBjb2xvcjogIzJiZmYwMDtcbn1cblxuLnByaWNlIHtcbiAgICBjb2xvcjogIzNDRjE4NTtcblxuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogIzNDRjE4NTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG59XG5cbi5zZXBlcmF0b3Ige1xuICAgIGhyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogIzgxODA4MDtcbiAgICB9XG59XG5oNXtcbiAgICBjb2xvcjojMjNhYzA4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIFxufVxuLmNvdW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogIzI2ZmY3MztcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbn1cbi5yZXZpZXcge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgY29sb3I6ICM5ZGFkMGQ7XG5cbiAgICAucmF0aW5nIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogIzlkYWQwZDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiBcbn1cbi5pb24tcGFkZGluZy12ZXJ0aWNhbC1jdXN0b20ge1xuICAgIC8vIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICAvLyAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5jdXJ2ZWR7XG5ib3JkZXItcmFkaXVzOjEwMCUgMCUgMTAwJSAwJSAvIDAlIDEwMCUgMCUgMTAwJSA7IC8vMTAwJSAwJSAxMCUgOTAlIC8gMTAwJSA4OCUgMTIlIDAlIDtcbmNvbG9yOiMzNjM2M0Y7XG53aWR0aDogMTIwcHg7XG5oZWlnaHQ6IDEyMHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHpvb206MjUwJTtcbiAgICBoNSB7XG4gICAgICAgIGNvbG9yOiAjOWRhZDBkO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjOWRhZDBkO1xuICAgIH1cbiAgICAuY29sbGVmdHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgem9vbToyNTAlO1xuICAgIH1cbiAgICAuY29scmlnaHR7XG4gICAgICAgIFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICB6b29tOjI1MCU7XG4gICAgfVxufVxuXG4udmFyaWF0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcblxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiAjOWRhZDBkO1xuICAgIH1cbn1cblxuLnZhcmlhdGlvbi1zZWxlY3RvciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5hY3RpdmUtdmFyaWF0aW9uIHtcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnNpemVzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlkYWQwZDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzFhMDAwMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb2xvcnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRhZDBkO1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOWRhZDBkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gaW9uLWNhcmR7XG4vLyAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjNGO1xuLy8gfVxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiODsgLy8gYmxhY2tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuaW9uLWZvb3RlciB7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbn1cbi8vIFRoaXMgd2lsbCByZW1vdmUgZm9vdGVyIHNoYWRvdyBvbiBhbmRyb2lkXG4uZm9vdGVyLW1kOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/landing/landing.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/landing/landing.page.ts ***!
      \*****************************************/

    /*! exports provided: LandingPage */

    /***/
    function srcAppLandingLandingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPage", function () {
        return LandingPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../util.service */
      "./src/app/util.service.ts");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../data.service */
      "./src/app/data.service.ts");

      var LandingPage = /*#__PURE__*/function () {
        function LandingPage(util, navCtrl, data) {
          _classCallCheck(this, LandingPage);

          this.util = util;
          this.navCtrl = navCtrl;
          this.data = data;
          this.categories = [];
        }

        _createClass(LandingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categories = this.data.getTodaysOffers();
          }
        }, {
          key: "goToBuy",
          value: function goToBuy() {
            this.navCtrl.navigateRoot('home', {
              animationDirection: 'forward'
            });
          }
        }, {
          key: "goToMedicine",
          value: function goToMedicine() {
            this.navCtrl.navigateRoot('medicines', {
              animationDirection: 'forward'
            });
          }
        }, {
          key: "goToFeed",
          value: function goToFeed() {
            this.navCtrl.navigateRoot('home', {
              animationDirection: 'forward'
            });
          }
        }, {
          key: "goToSemen",
          value: function goToSemen() {
            this.navCtrl.navigateRoot('home', {
              animationDirection: 'forward'
            });
          }
        }]);

        return LandingPage;
      }();

      LandingPage.ctorParameters = function () {
        return [{
          type: _util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }];
      };

      LandingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./landing.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./landing.page.scss */
        "./src/app/landing/landing.page.scss"))["default"]]
      })], LandingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=landing-landing-module-es5.js.map