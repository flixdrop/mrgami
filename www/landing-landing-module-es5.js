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


      __webpack_exports__["default"] = "<ion-header class=\"ion-padding\">\r\n  <ion-toolbar color=\"none\">\r\n    <ion-searchbar slot=\"start\" placeholder=\"Search Cattles\" mode=\"md\" color=\"dark\"></ion-searchbar>\r\n    <ion-item color=\"none\" lines=\"none\" slot=\"end\">\r\n      <ion-icon size=\"large\" slot=\"end\" name=\"notifications-outline\" color=\"danger\"></ion-icon>\r\n    </ion-item>\r\n    <!-- <ion-button size=\"large\" slot=\"end\" class=\"notification\" color=\"none\" fill=\"clear\"> -->\r\n      <!-- <span>&nbsp;</span> -->\r\n    <!-- </ion-button> -->\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <!-- <ion-buttons>\r\n      <ion-button>\r\n        <ion-icon name=\"search-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content>\r\n   <ion-grid>\r\n     <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button class=\"curved\" (click)=goToBuy()><img src=\"../../assets/icon/sell-cow-icon.png\" width= \"90px\"\r\n          height=\" 90px\"></ion-button>\r\n       </ion-col>\r\n       <ion-col size=\"6\">\r\n         <ion-button class=\"curved\" (click)=goToMedicine()><img src=\"../../assets/icon/cow-medicine.png\" width= \"90px\"\r\n          height=\" 90px\"></ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n      <ion-col size=\"6\">\r\n       <ion-button class=\"curved\" (click)=goToFeed()><img src=\"../../assets/icon/animal-feed.png\" width= \"90px\"\r\n        height=\" 90px\"></ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button class=\"curved\" (click)=goToSemen()><img src=\"../../assets/icon/cow-semen.png\" width= \"90px\"\r\n          height=\" 90px\"></ion-button>\r\n       </ion-col>\r\n     </ion-row>\r\n   </ion-grid>\r\n   <div class=\"category-slider ion-padding-start\">\r\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\r\n      <ion-slide *ngFor=\"let category of categories\">\r\n        <ion-col>\r\n          <h4>{{ category.name }}</h4>\r\n          <img src=\"{{ category.image }}\" />\r\n        </ion-col>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content> -->\r\n\r\n\r\n<ion-card class=\"backgroundCard\">\r\n\r\n</ion-card>\r\n\r\n<ion-content class=\"content ion-padding\" [fullscreen]=\"true\">\r\n\r\n  <ion-toolbar color=\"none\">\r\n    <ion-button size=\"large\" expand=\"block\" color=\"light\">\r\n      <ion-label color=\"danger\">FREE VET DOCTOR 24/7</ion-label>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid>\r\n    <ion-row (click)=\"goToBuy()\" class=\"bigBtn gradient\">\r\n      <ion-col class=\"reverseCenter\" size=\"6\">\r\n        <ion-item lines=\"none\" color=\"none\">\r\n          <ion-thumbnail>\r\n            <ion-img class=\"btnImg\" src=\"../../assets/icon/sell-cow-icon.png\"></ion-img>\r\n          </ion-thumbnail>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col class=\"reverseCenter\" size=\"6\">\r\n        <span>\r\n          <ion-label color=\"success\">BUY</ion-label>\r\n        </span>\r\n        <span>\r\n          <ion-label color=\"light\">ANIMAL</ion-label>\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"smallBtn\">\r\n      <ion-col (click)=\"goToFeed()\" class=\"reverseCenter gradient\" size=\"5.5\">\r\n        <ion-item lines=\"none\" color=\"none\">\r\n          <ion-thumbnail>\r\n            <ion-img class=\"btnImg\" src=\"../../assets/icon/animal-feed.png\"></ion-img>\r\n          </ion-thumbnail>\r\n        </ion-item>\r\n        <span class=\"reverseCenter\">\r\n          <ion-label color=\"success\">BUY ANIMAL</ion-label>\r\n        </span>\r\n        <span class=\"reverseCenter\">\r\n          <ion-label color=\"light\">FEED</ion-label>\r\n        </span>\r\n      </ion-col>\r\n      <ion-col (click)=\"goToMedicine()\" class=\"reverseCenter gradient\" size=\"5.5\">\r\n        <ion-item lines=\"none\" color=\"none\">\r\n          <ion-thumbnail>\r\n            <ion-img class=\"btnImg\" src=\"../../assets/icon/cow-medicine.png\"></ion-img>\r\n          </ion-thumbnail>\r\n        </ion-item>\r\n        <span class=\"reverseCenter\">\r\n          <ion-label color=\"success\">BUY ANIMAL</ion-label>\r\n        </span>\r\n        <span class=\"reverseCenter\">\r\n          <ion-label color=\"light\">MEDICINE</ion-label>\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-toolbar class=\"center toolbar\" color=\"none\">\r\n      <ion-chip color=\"none\">\r\n        <ion-icon size=\"large\" name=\"alarm-sharp\" color=\"warning\"></ion-icon>\r\n        <ion-label color=\"light\">Today's Offers</ion-label>\r\n      </ion-chip>\r\n  </ion-toolbar>\r\n\r\n  <ion-card class=\"card\">\r\n    <ion-slides #slides [options]=\"slideOpts\">\r\n      <ion-slide *ngFor=\"let img of images; let i=index\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col class=\"offersSlide\" size=\"12\">\r\n                <ion-img class=\"offersImg\" src=\"{{img}}\" class=\"img\"></ion-img>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col class=\"offersSlide\" size=\"12\">\r\n                <ion-label color=\"dark\">Offer Details</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ion-card class=\"card\">\r\n     <ion-card-title>Today's Offers</ion-card-title>\r\n    <ion-slides pager=\"false\" class=\"product-slider\">\r\n      <ion-slide>\r\n        <img src=\"../../assets/product-slider/prod-slide1.jpg\" height=\"100px\"/>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <img src=\"../../assets/product-slider/prod-slide1.jpg\" height=\"100px\"/>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <img src=\"../../assets/product-slider/prod-slide1.jpg\" height=\"100px\"/>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    </ion-card> -->\r\n<!-- <ion-slides pager=\"true\" class=\"product-slider\">\r\n    <ion-slide>\r\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\r\n    </ion-slide>\r\n  </ion-slides> -->\r\n<!-- <div class=\"seperator\">\r\n    <hr>\r\n  </div>\r\n  <div class=\"ion-padding-vertical-custom\">\r\n    \r\n    <h4 class=\"price\">\r\n      Rs 40000\r\n      <span class=\"real-price\">Rs 80000</span>\r\n    </h4>\r\n  </div>\r\n\r\n  <div class=\"seperator\">\r\n    <hr>\r\n  </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"variation\">\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"size\">\r\n      <ion-segment-button value=\"size\">\r\n        <ion-label>Select Size</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"color\">\r\n        <ion-label>Select Color</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n\r\n  <div class=\"seperator\">\r\n    <hr>\r\n  </div>\r\n\r\n  <div class=\"variation-selector\">\r\n    <div class=\"sizes\" [class.active-variation]=\"activeVariation == 'size'\">\r\n      <div [class.active]=\"selectedSize == 1\" (click)=\"changeSize(1)\">\r\n        S\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 2\" (click)=\"changeSize(2)\">\r\n        M\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 3\" (click)=\"changeSize(3)\">\r\n        L\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 4\" (click)=\"changeSize(4)\">\r\n        XL\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"colors\" [class.active-variation]=\"activeVariation == 'color'\">\r\n      <div [class.active]=\"selectedColor == 1\" (click)=\"changeColor(1)\">\r\n        BLACK\r\n      </div>\r\n      <div [class.active]=\"selectedColor == 2\" (click)=\"changeColor(2)\">\r\n        GREEN\r\n      </div>\r\n      <div [class.active]=\"selectedColor == 3\" (click)=\"changeColor(3)\">\r\n        BLUE\r\n      </div>\r\n    </div>\r\n  </div> -->";
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


      __webpack_exports__["default"] = ".card {\n  background: transparent;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 75%;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 2;\n  top: 0;\n  left: 0;\n}\n\n.img {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\nion-slides {\n  z-index: 2;\n  --background: transparent !important;\n  height: 25%;\n  padding: 0;\n  margin: 0;\n}\n\nion-slide {\n  --background: transparent !important;\n  z-index: 2;\n  height: 100%;\n  width: 100%;\n}\n\nion-slide ion-label {\n  font-size: 12px;\n}\n\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\nion-thumbnail {\n  height: 100px;\n  width: 120px;\n}\n\n.toolbar {\n  margin: 5% 0;\n}\n\nion-content {\n  margin: 0;\n  padding: 0;\n}\n\nion-text {\n  font-size: 15px;\n}\n\nion-searchbar {\n  border: none;\n  border-radius: 0;\n}\n\n.offersImg {\n  border: 3px solid white;\n}\n\n.textCenter {\n  text-align: center;\n}\n\n.reverseCenter {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.gradient {\n  border-radius: 10px;\n  background: linear-gradient(180deg, #1777AD 10.94%, rgba(23, 119, 173, 0) 100%);\n}\n\nion-grid {\n  margin: 0;\n  padding: 0;\n}\n\nion-item {\n  margin: 0;\n  padding: 0;\n}\n\n.bigBtn {\n  margin: 7% 0%;\n}\n\n.smallBtn {\n  display: flex;\n  justify-content: space-between;\n}\n\n.content {\n  z-index: 2;\n  --background: transparent !important;\n}\n\n.backgroundCard {\n  margin: 0;\n  padding: 0;\n  opacity: 25%;\n  position: fixed;\n  background-image: url('bgman.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  border-bottom-left-radius: 15%;\n  border-bottom-right-radius: 15%;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2UkE7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBNVJKOztBQStSRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQTVSSjs7QUErUkU7RUFDRSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUE1Uko7O0FBK1JFO0VBQ0Usb0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE1Uko7O0FBNlJJO0VBQ0UsZUFBQTtBQTNSTjs7QUErUkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBNVJKOztBQStSRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBNVJKOztBQStSRTtFQUNFLFlBQUE7QUE1Uko7O0FBK1JFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUE1Uko7O0FBK1JFO0VBQ0UsZUFBQTtBQTVSSjs7QUErUkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUE1Uko7O0FBK1JFO0VBQ0UsdUJBQUE7QUE1Uko7O0FBK1JFO0VBQ0Usa0JBQUE7QUE1Uko7O0FBK1JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTVSSjs7QUErUkU7RUFDRSxtQkFBQTtFQUNBLCtFQUFBO0FBNVJKOztBQStSRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBNVJKOztBQStSRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBNVJKOztBQStSRTtFQUNFLGFBQUE7QUE1Uko7O0FBK1JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBNVJKOztBQStSRTtFQUNFLFVBQUE7RUFDQSxvQ0FBQTtBQTVSSjs7QUErUkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0FBNVJKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iYWNrYnRuIHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAubm90aWZpY2F0aW9uIHtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbnRlbnQge1xyXG4vLyAgICAgLS1wYWRkaW5nLXRvcDogODBweDtcclxuLy8gICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbi8vICAgICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XHJcbi8vICAgICAtLXBhZGRpbmctZW5kOiAyNnB4O1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JnbWFuLmpwZykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxuLy8gICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDUwdncgcmdiYSg3LCA3NiwgMTU1LCAwLjMpXHJcbiAgICBcclxuICAgIFxyXG4vLyAgICAgLy8gLS1iYWNrZ3JvdW5kLWNvbG9yOiMxZTFlMWU7XHJcbi8vIH1cclxuLy8gaW9uLWdyaWR7XHJcbi8vICAgICBwYWRkaW5nOiAxNTBweCA1cHggNXB4IDIwcHg7XHJcbi8vIH1cclxuLy8gLml0ZW0tbmFtZSB7XHJcbi8vICAgICBjb2xvcjogIzJiZmYwMDtcclxuLy8gfVxyXG5cclxuLy8gLnByaWNlIHtcclxuLy8gICAgIGNvbG9yOiAjM0NGMTg1O1xyXG5cclxuLy8gICAgIHNwYW4ge1xyXG4vLyAgICAgICAgIGNvbG9yOiAjM0NGMTg1O1xyXG4vLyAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4vLyAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC5zZXBlcmF0b3Ige1xyXG4vLyAgICAgaHIge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICM4MTgwODA7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gaDV7XHJcbi8vICAgICBjb2xvcjojMjNhYzA4O1xyXG4vLyAgICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBcclxuLy8gfVxyXG4vLyAuY291bnQge1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgLy8gZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4vLyAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbi8vICAgICBzcGFuIHtcclxuLy8gICAgICAgICBjb2xvcjogIzI2ZmY3MztcclxuLy8gICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLnJldmlldyB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4vLyAgICAgY29sb3I6ICM5ZGFkMGQ7XHJcblxyXG4vLyAgICAgLnJhdGluZyB7XHJcbi8vICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjOWRhZDBkO1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vICAgICB9XHJcblxyXG4gXHJcbi8vIH1cclxuLy8gLmlvbi1wYWRkaW5nLXZlcnRpY2FsLWN1c3RvbSB7XHJcbi8vICAgICAvLyAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbi8vICAgICAvLyAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4vLyB9XHJcbi8vIC5jdXJ2ZWR7XHJcbi8vIGJvcmRlci1yYWRpdXM6MTAwJSAwJSAxMDAlIDAlIC8gMCUgMTAwJSAwJSAxMDAlIDsgLy8xMDAlIDAlIDEwJSA5MCUgLyAxMDAlIDg4JSAxMiUgMCUgO1xyXG4vLyBjb2xvcjojMzYzNjNGO1xyXG4vLyB3aWR0aDogMTIwcHg7XHJcbi8vIGhlaWdodDogMTIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5kZXNjcmlwdGlvbiB7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgICB6b29tOjI1MCU7XHJcbi8vICAgICBoNSB7XHJcbi8vICAgICAgICAgY29sb3I6ICM5ZGFkMGQ7XHJcbi8vICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcCB7XHJcbi8vICAgICAgICAgY29sb3I6ICM5ZGFkMGQ7XHJcbi8vICAgICB9XHJcbi8vICAgICAuY29sbGVmdHtcclxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4vLyAgICAgICAgIHpvb206MjUwJTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jb2xyaWdodHtcclxuICAgICAgICBcclxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuLy8gICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbi8vICAgICAgICAgem9vbToyNTAlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAudmFyaWF0aW9uIHtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG5cclxuLy8gICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbi8vICAgICAgICAgY29sb3I6ICM5ZGFkMGQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC52YXJpYXRpb24tc2VsZWN0b3Ige1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4vLyAgICAgLmFjdGl2ZS12YXJpYXRpb24ge1xyXG4vLyAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuLy8gICAgICAgICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLnNpemVzIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgei1pbmRleDogMDtcclxuLy8gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHJcbi8vICAgICAgICAgZGl2IHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZGFkMGQ7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4vLyAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLmFjdGl2ZSB7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiAjMWEwMDAwO1xyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5jb2xvcnMge1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICB6LWluZGV4OiAwO1xyXG4vLyAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG5cclxuLy8gICAgICAgICBkaXYge1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlkYWQwZDtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbi8vICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAuYWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgY29sb3I6ICM5ZGFkMGQ7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLy8gaW9uLWNhcmR7XHJcbi8vIC8vICAgICAtLWJhY2tncm91bmQtY29sb3I6ICMzNjM2M0Y7XHJcbi8vIC8vIH1cclxuLy8gLmNhcmQge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGI4OyAvLyBibGFja1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gICB9XHJcbi8vIGlvbi1mb290ZXIge1xyXG4vLyAgICAgaW9uLXJvdyB7XHJcbi8vICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbi8vICAgICAgICAgaW9uLWNvbCB7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4vLyAgICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gYXtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbi8vIH1cclxuLy8gLy8gVGhpcyB3aWxsIHJlbW92ZSBmb290ZXIgc2hhZG93IG9uIGFuZHJvaWRcclxuLy8gLmZvb3Rlci1tZDo6YmVmb3JlIHtcclxuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuXHJcbi8vIC5jYXJke1xyXG4vLyAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly93d3cudGhlaW5kaWFmb3J1bS5pbi9zaXRlcy9kZWZhdWx0L2ZpbGVzL2ZpZWxkL2ltYWdlLzIwMjEvMDUvMjgvcmFta3VtYXItcmFkaGFrcmlzaG5hbi13aWtpbWVkaWEtMTYyMjE5MzMwNC5qcGVnJyk7XHJcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyAgIHBhZGRpbmc6IDUlO1xyXG4vLyB9XHJcblxyXG4vLyAuaW1ne1xyXG4vLyAgIGhlaWdodDogMTAwJTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuLy8gfVxyXG5cclxuLy8gaW9uLXNsaWRlcyB7XHJcbi8vICAgaGVpZ2h0OiAyNSU7XHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1zbGlkZXtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgaW9uLWxhYmVse1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmNlbnRlcntcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi10aHVtYm5haWx7XHJcbi8vICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICB3aWR0aDogMTIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC50b29sYmFye1xyXG4vLyAgIG1hcmdpbjogNSUgMDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbnRlbnR7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyAgIHBhZGRpbmc6IDA7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi10ZXh0e1xyXG4vLyAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLXNlYXJjaGJhcntcclxuLy8gICBib3JkZXI6IG5vbmU7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMDtcclxuLy8gfVxyXG5cclxuLy8gLm9mZmVyc0ltZ3tcclxuLy8gICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuLy8gfVxyXG5cclxuXHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IDc1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWd7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNsaWRle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBpb24tdGh1bWJuYWlse1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2xiYXJ7XHJcbiAgICBtYXJnaW46IDUlIDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAub2ZmZXJzSW1ne1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0Q2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucmV2ZXJzZUNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZ3JhZGllbnR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzE3NzdBRCAxMC45NCUsIHJnYmEoMjMsIDExOSwgMTczLCAwKSAxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWdyaWR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5iaWdCdG57XHJcbiAgICBtYXJnaW46IDclIDAlO1xyXG4gIH1cclxuICBcclxuICAuc21hbGxCdG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrZ3JvdW5kQ2FyZHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvcGFjaXR5OiAyNSU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9iZ21hbi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNSU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTUlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgIl19 */";
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
          this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 3,
            spaceBetween: 25,
            speed: 500
          };
        }

        _createClass(LandingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categories = this.data.getTodaysOffers();
            this.images = ['../assets/todaysoffers.PNG', '../assets/todaysoffers.PNG', '../assets/todaysoffers.PNG', '../assets/todaysoffers.PNG', '../assets/todaysoffers.PNG', '../assets/todaysoffers.PNG', '../assets/todaysoffers.PNG', '../assets/todaysoffers.PNG'];
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