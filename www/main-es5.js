(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app class=\"app\">\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" [disabled]=\"!isMenuEnabled\">\n      <ion-content>\n        <div class=\"main-list\">\n          <ion-list id=\"inbox-list\">\n\n            <ion-menu-toggle auto-hide=\"false\">\n              <ion-item lines=\"none\" (click)=\"navigate('/home', 1)\" detail=\"false\" class=\"ion-text-center\" [class.selected]=\"selectedIndex == 1\">\n                <ion-label>Home</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n            <ion-menu-toggle auto-hide=\"false\">\n              <ion-item lines=\"none\" (click)=\"navigate('/profile', 2)\" detail=\"false\" class=\"ion-text-center\" [class.selected]=\"selectedIndex == 2\">\n                <ion-label>Profile</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n            <ion-menu-toggle auto-hide=\"false\">\n              <ion-item lines=\"none\" (click)=\"navigate('/my-cart', 3)\" detail=\"false\" class=\"ion-text-center\" [class.selected]=\"selectedIndex == 3\">\n                <ion-label>My Cart</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n            <ion-menu-toggle auto-hide=\"false\">\n              <ion-item lines=\"none\" (click)=\"navigate('/favorite', 4)\" detail=\"false\" class=\"ion-text-center\" [class.selected]=\"selectedIndex == 4\">\n                <ion-label>Favorite</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n            <ion-menu-toggle auto-hide=\"false\">\n              <ion-item lines=\"none\" (click)=\"navigate('/my-orders', 5)\" detail=\"false\" class=\"ion-text-center\" [class.selected]=\"selectedIndex == 5\">\n                <ion-label>My Orders</ion-label>\n              </ion-item>\n            </ion-menu-toggle>\n          </ion-list>\n\n          <!-- Close Button -->\n          <ion-button fill=\"clear\" color=\"dark\" (click)=\"close()\">\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\n          </ion-button>\n        </div>\n       \n      </ion-content>\n      \n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

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


      __webpack_exports__["default"] = "<ion-header class=\"ion-padding\">\r\n  <ion-toolbar color=\"none\">\r\n    <ion-searchbar class=\"searchbar\" slot=\"start\" placeholder=\"Search Cattles\" mode=\"md\" color=\"none\"></ion-searchbar>\r\n    <ion-item color=\"none\" lines=\"none\" slot=\"end\">\r\n      <ion-icon size=\"large\" slot=\"end\" name=\"notifications-outline\" color=\"danger\"></ion-icon>\r\n    </ion-item>\r\n    <!-- <ion-button size=\"large\" slot=\"end\" class=\"notification\" color=\"none\" fill=\"clear\"> -->\r\n      <!-- <span>&nbsp;</span> -->\r\n    <!-- </ion-button> -->\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n    <!-- <ion-buttons>\r\n      <ion-button>\r\n        <ion-icon name=\"search-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content>\r\n   <ion-grid>\r\n     <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button class=\"curved\" (click)=goToBuy()><img src=\"../../assets/icon/sell-cow-icon.png\" width= \"90px\"\r\n          height=\" 90px\"></ion-button>\r\n       </ion-col>\r\n       <ion-col size=\"6\">\r\n         <ion-button class=\"curved\" (click)=goToMedicine()><img src=\"../../assets/icon/cow-medicine.png\" width= \"90px\"\r\n          height=\" 90px\"></ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n      <ion-col size=\"6\">\r\n       <ion-button class=\"curved\" (click)=goToFeed()><img src=\"../../assets/icon/animal-feed.png\" width= \"90px\"\r\n        height=\" 90px\"></ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button class=\"curved\" (click)=goToSemen()><img src=\"../../assets/icon/cow-semen.png\" width= \"90px\"\r\n          height=\" 90px\"></ion-button>\r\n       </ion-col>\r\n     </ion-row>\r\n   </ion-grid>\r\n   <div class=\"category-slider ion-padding-start\">\r\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\r\n      <ion-slide *ngFor=\"let category of categories\">\r\n        <ion-col>\r\n          <h4>{{ category.name }}</h4>\r\n          <img src=\"{{ category.image }}\" />\r\n        </ion-col>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content> -->\r\n\r\n\r\n<ion-card class=\"backgroundCard\">\r\n\r\n</ion-card>\r\n\r\n<ion-content class=\"content ion-padding\" [fullscreen]=\"true\">\r\n\r\n  <ion-toolbar color=\"none\">\r\n    <ion-button size=\"large\" expand=\"block\" color=\"light\" (click)=\"recordAudio()\">\r\n      <ion-label color=\"danger\">FREE VET DOCTOR 24/7</ion-label>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n  <ion-grid>\r\n    <ion-row (click)=\"goToBuy()\" class=\"bigBtn gradient\">\r\n      <ion-col class=\"reverseCenter\" size=\"6\">\r\n        <ion-item lines=\"none\" color=\"none\">\r\n          <ion-thumbnail>\r\n            <ion-img class=\"btnImg\" src=\"../../assets/icon/sell-cow-icon.png\"></ion-img>\r\n          </ion-thumbnail>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col class=\"reverseCenter\" size=\"6\">\r\n        <span>\r\n          <ion-label color=\"success\">BUY</ion-label>\r\n        </span>\r\n        <span>\r\n          <ion-label color=\"light\">ANIMAL</ion-label>\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"smallBtn\">\r\n      <ion-col (click)=\"goToFeed()\" class=\"reverseCenter gradient\" size=\"5.5\">\r\n        <ion-item lines=\"none\" color=\"none\">\r\n          <ion-thumbnail>\r\n            <ion-img class=\"btnImg\" src=\"../../assets/icon/animal-feed.png\"></ion-img>\r\n          </ion-thumbnail>\r\n        </ion-item>\r\n        <span class=\"reverseCenter\">\r\n          <ion-label color=\"success\">BUY ANIMAL</ion-label>\r\n        </span>\r\n        <span class=\"reverseCenter\">\r\n          <ion-label color=\"light\">FEED</ion-label>\r\n        </span>\r\n      </ion-col>\r\n      <ion-col (click)=\"goToMedicine()\" class=\"reverseCenter gradient\" size=\"5.5\">\r\n        <ion-item lines=\"none\" color=\"none\">\r\n          <ion-thumbnail>\r\n            <ion-img class=\"btnImg\" src=\"../../assets/icon/cow-medicine.png\"></ion-img>\r\n          </ion-thumbnail>\r\n        </ion-item>\r\n        <span class=\"reverseCenter\">\r\n          <ion-label color=\"success\">BUY ANIMAL</ion-label>\r\n        </span>\r\n        <span class=\"reverseCenter\">\r\n          <ion-label color=\"light\">MEDICINE</ion-label>\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-toolbar class=\"center toolbar\" color=\"none\">\r\n      <ion-chip color=\"none\">\r\n        <ion-icon size=\"large\" name=\"alarm-sharp\" color=\"warning\"></ion-icon>\r\n        <ion-label color=\"light\">Today's Offers</ion-label>\r\n      </ion-chip>\r\n  </ion-toolbar>\r\n\r\n  <ion-card class=\"card\">\r\n    <ion-slides #slides [options]=\"slideOpts\">\r\n      <ion-slide *ngFor=\"let img of images; let i=index\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col class=\"offersSlide\" size=\"12\">\r\n                <ion-img class=\"offersImg\" src=\"{{img}}\" class=\"img\"></ion-img>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col class=\"offersSlide\" size=\"12\">\r\n                <ion-label color=\"dark\">Offer Details</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ion-card class=\"card\">\r\n     <ion-card-title>Today's Offers</ion-card-title>\r\n    <ion-slides pager=\"false\" class=\"product-slider\">\r\n      <ion-slide>\r\n        <img src=\"../../assets/product-slider/prod-slide1.jpg\" height=\"100px\"/>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <img src=\"../../assets/product-slider/prod-slide1.jpg\" height=\"100px\"/>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <img src=\"../../assets/product-slider/prod-slide1.jpg\" height=\"100px\"/>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    </ion-card> -->\r\n<!-- <ion-slides pager=\"true\" class=\"product-slider\">\r\n    <ion-slide>\r\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\r\n    </ion-slide>\r\n  </ion-slides> -->\r\n<!-- <div class=\"seperator\">\r\n    <hr>\r\n  </div>\r\n  <div class=\"ion-padding-vertical-custom\">\r\n    \r\n    <h4 class=\"price\">\r\n      Rs 40000\r\n      <span class=\"real-price\">Rs 80000</span>\r\n    </h4>\r\n  </div>\r\n\r\n  <div class=\"seperator\">\r\n    <hr>\r\n  </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"variation\">\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"size\">\r\n      <ion-segment-button value=\"size\">\r\n        <ion-label>Select Size</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"color\">\r\n        <ion-label>Select Color</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n\r\n  <div class=\"seperator\">\r\n    <hr>\r\n  </div>\r\n\r\n  <div class=\"variation-selector\">\r\n    <div class=\"sizes\" [class.active-variation]=\"activeVariation == 'size'\">\r\n      <div [class.active]=\"selectedSize == 1\" (click)=\"changeSize(1)\">\r\n        S\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 2\" (click)=\"changeSize(2)\">\r\n        M\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 3\" (click)=\"changeSize(3)\">\r\n        L\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 4\" (click)=\"changeSize(4)\">\r\n        XL\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"colors\" [class.active-variation]=\"activeVariation == 'color'\">\r\n      <div [class.active]=\"selectedColor == 1\" (click)=\"changeColor(1)\">\r\n        BLACK\r\n      </div>\r\n      <div [class.active]=\"selectedColor == 2\" (click)=\"changeColor(2)\">\r\n        GREEN\r\n      </div>\r\n      <div [class.active]=\"selectedColor == 3\" (click)=\"changeColor(3)\">\r\n        BLUE\r\n      </div>\r\n    </div>\r\n  </div> -->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"backbtn\" routerLink=\"/welcome\" routerDirection=\"back\">\r\n        <img src=\"../../assets/back.svg\" />\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content class=\"ion-padding\">\r\n  <div class=\"ion-padding container\">\r\n    <h1>Login</h1>\r\n\r\n    <div class=\"form-container\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Password</ion-label>\r\n        <ion-input type=\"password\"></ion-input>\r\n        <ion-icon name=\"eye\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-button expand=\"block\" class=\"main-button\" (click)=\"login()\">Log in</ion-button>\r\n\r\n      <div class=\"sign-up\">\r\n        Don't have an account? <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/signup\" routerDirection=\"forward\">Sign up</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content> -->\r\n\r\n\r\n<!-- <div class=\"container\">\r\n<ion-card class=\"card-center\">\r\n  <ng-otp-input  (onInputChange)=\"onOtpChange($event)\"  [config]=\"{length:5}\"></ng-otp-input>\r\n<ion-item>\r\n<ion-button  color=\"primary\">Click Me</ion-button>\r\n</ion-item>\r\n</ion-card>\r\n<button class=\"btn btn-success\">\r\n  Click Me\r\n</button>\r\n\r\n</div> -->\r\n\r\n<!-- <div class=\"card\" style=\"width: 80%;margin: 200px 30px 30px 150px;\">\r\n<div class=\"card-center\" >\r\n  <div>\r\n    <h5  >Login</h5>\r\n    <p >Resend Otp?</p>\r\n    <ng-otp-input  (onInputChange)=\"onOtpChange($event)\"  [config]=\"{length:5}\"></ng-otp-input>\r\n    <ion-button  color=\"primary\">Click Me</ion-button>\r\n  </div>\r\n\r\n</div>\r\n\r\n</div> -->\r\n\r\n<!-- <ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n  \r\n    <ion-row *ngIf='!isNumberSubmitted'>\r\n      <ion-col size=\"12\" class=\"center\">\r\n        <ion-toolbar>\r\n          <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">NAME</ion-label>\r\n            <ion-input [(ngModel)]='name'></ion-input>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf='!isNumberSubmitted'>\r\n      <ion-col size=\"12\" class=\"center\">\r\n        <ion-toolbar>\r\n          <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">PHONE NO.</ion-label>\r\n            <ion-input [(ngModel)]='inputNumber'></ion-input>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf='!isNumberSubmitted'>\r\n      <ion-col size=\"12\" class=\"center\">\r\n        <ion-toolbar>\r\n          <ion-button expand=\"block\" (click)=\"onNumberSubmitted()\" color=\"medium\">LOGIN WITH OTP</ion-button>\r\n        </ion-toolbar>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf='isNumberSubmitted'>\r\n      <ion-col size=\"12\" class=\"center\">\r\n            <ng-otp-input (onInputChange)=\"onOtpChange($event)\" [config]=\"{length:6}\"></ng-otp-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf='isNumberSubmitted'>\r\n      <ion-col size=\"12\" class=\"center\">\r\n        <ion-toolbar>\r\n          <ion-button expand=\"block\" (click)=\"onLogin()\" color=\"medium\">LOGIN</ion-button>\r\n        </ion-toolbar>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\">\r\n        <ion-item class=\"center\" lines=\"none\" color=\"none\">\r\n          <ion-icon size=\"large\" name=\"logo-google\" color=\"medium\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item class=\"center\" lines=\"none\" color=\"none\">\r\n          <ion-icon size=\"large\" name=\"logo-facebook\" color=\"medium\"></ion-icon>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\">\r\n          <ion-button fill=\"clear\" expand=\"block\" routerLink=\"/tabs/landing\" color=\"medium\" routerDirection=\"forward\">Skip now<ion-icon size=\"large\" slot=\"end\" name=\"log-in-outline\"></ion-icon></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n \r\n\r\n</ion-content> -->\r\n<ion-content>\r\n<ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title color=\"warning\">\r\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n      Please Sign In\r\n    </ion-card-title>\r\n    <ion-card-subtitle>\r\n      Enter your phone number you registered with and we'll send you a one-time secret sign-in code via SMS. Your phone # is your username.\r\n    </ion-card-subtitle>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <form>\r\n\r\n      <ion-label color=\"success\">Phone Number</ion-label>\r\n    <ion-input placeholder=\"Phone Number\" [formControl]=\"sms\" type=\"sms\" required>\r\n\r\n    </ion-input>\r\n  </form>\r\n  <ion-button color=\"warning\" (click)=\"signIn()\" [disabled]=\"(busy | async)\">\r\nSEND SIGN IN CODE\r\n<ion-spinner *ngIf=\"busy | async\" name=\"bubbles\"></ion-spinner>\r\n  </ion-button>\r\n  <p>Not registered yet? <a routerLink='/signup' routerLinkActive=\"active\">Sign up</a></p>\r\n  </ion-card-content>\r\n  <ion-button fill=\"clear\" expand=\"block\" routerLink=\"/tabs/landing\" color=\"medium\" routerDirection=\"forward\">Skip for now<ion-icon size=\"large\" slot=\"end\" name=\"log-in-outline\"></ion-icon></ion-button>\r\n  <p *ngIf=\"errorMessage | async\">{{ errorMessage | async }}</p>\r\n\r\n  <ion-grid>\r\n  <ion-row>\r\n    <ion-col class=\"center\" size=\"12\">\r\n      <ion-item class=\"center\" lines=\"none\" color=\"none\">\r\n        <ion-icon size=\"large\" name=\"logo-google\" color=\"medium\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item class=\"center\" lines=\"none\" color=\"none\">\r\n        <ion-icon size=\"large\" name=\"logo-facebook\" color=\"medium\"></ion-icon>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n</ion-card>\r\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/answer-challenge/answer-challenge.page.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/answer-challenge/answer-challenge.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAnswerChallengeAnswerChallengePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n\n  <ion-card>\n  <ion-card-header>\n    <ion-card-title>\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>\n      Sign-In\n    </ion-card-title>\n    <ion-card-subtitle>\n      Please enter the secret code you received to complete sign-in\n    </ion-card-subtitle>\n  </ion-card-header>\n  \n  \n    <ion-row >\n  \n       <ion-input class=\"x\" required maxLength=\"1\" [formControl]=\"digit1\" #digit1el >\n       </ion-input>\n       <ion-input class=\"x\" required maxLength=\"1\" [formControl]=\"digit2\" #digit2el >\n       </ion-input>\n       <ion-input class=\"x\"  required maxLength=\"1\" [formControl]=\"digit3\" #digit3el  >\n       </ion-input>\n  \n       <ion-input class=\"x\"  required maxLength=\"1\" [formControl]=\"digit4\" #digit4el  >\n      </ion-input>\n  \n      <ion-input class=\"x\"   required maxLength=\"1\" [formControl]=\"digit5\" #digit5el >\n      </ion-input>\n  \n      <ion-input class=\"x\"   required maxLength=\"1\" [formControl]=\"digit6\" #digit6el>\n      </ion-input>\n  \n  \n    </ion-row>\n    <ion-button  *ngIf=\"(busy | async) !==true\" color=\"primary\" (click)=\"submit()\">\n      CONTINUE\n      <ion-spinner *ngIf=\"busy | async\" name=\"bubbles\"></ion-spinner>\n    </ion-button>\n  </ion-card>\n  \n    <!-- <mat-card-actions>\n      <div fxFlex></div>\n      <button mat-stroked-button color=\"primary\" (click)=\"submit()\">\n        <div fxFlex></div>\n        <div *ngIf=\"(busy | async) !==true\">CONTINUE</div>\n        <mat-spinner *ngIf=\"busy | async\" [diameter]=\"35\"></mat-spinner>\n        <div fxFlex></div>\n      </button>\n      <div fxFlex></div>\n    </mat-card-actions> -->\n  \n    <p *ngIf=\"errorMessage | async\">{{ errorMessage | async }}</p>\n  \n  <!-- </mat-card> -->\n  </ion-content>\n  ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart-modal/cart-modal.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart-modal/cart-modal.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesCartModalCartModalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "  <!-- <ion-content fullscreen>\r\n\r\n    <div class=\"ion-text-end\">\r\n      <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\r\n        <ion-icon name=\"close\" slot=\"start\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"ion-padding\" style=\"color: #0fd15dc5 ;\">\r\n\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let p of cart\" class=\"ion-text-wrap\">\r\n          <ion-grid style=\"color: #0fd15d ;\">\r\n            <ion-row class=\"ion-align-items-center\">\r\n              <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n                <ion-button color=\"medium\" fill=\"clear\" (click)=\"decreaseCartItem(p)\">\r\n                  <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"1\" class=\"ion-align-self-center\">\r\n                {{ p.amount }}\r\n              </ion-col>\r\n\r\n              <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n                <ion-button color=\"medium\" fill=\"clear\" (click)=\"increaseCartItem(p)\">\r\n                  <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"2\" offset=\"5\">\r\n                <ion-button color=\"medium\" fill=\"clear\" (click)=\"removeCartItem(p)\">\r\n                  <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"9\">\r\n                <b>{{ p.name }}</b>\r\n              </ion-col>\r\n              <ion-col size=\"3\" class=\"ion-text-end\">\r\n                {{ p.amount * p.price | currency:'INR' }}\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid style=\"color: #0fd15d ;\">\r\n            <ion-row>\r\n              <ion-col size=\"9\">\r\n                Total:\r\n              </ion-col>\r\n              <ion-col size=\"3\" class=\"ion-text-end\">\r\n                {{ getTotal() | currency:'INR' }}\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-button color=\"success\" expand=\"full\" (click)=\"makePayment()\">\r\n        Checkout\r\n      </ion-button>\r\n    </div>\r\n\r\n  </ion-content> -->\r\n\r\n  <ion-content>\r\n    <ion-toolbar>\r\n      <ion-icon (click)=\"close()\" size=\"large\" name=\"close\" slot=\"end\"></ion-icon>\r\n    </ion-toolbar>\r\n  <ion-card class=\"card\" color=\"none\">\r\n    <ion-list class=\"list\" color=\"none\" *ngFor=\"let c of cart; let i=index\">\r\n      <ion-toolbar color=\"none\">\r\n        <ion-grid (click)=\"medModal(c)\">\r\n          <ion-row>\r\n            <ion-col class=\"itemDetails\" size=\"12\">\r\n              <ion-label color=\"danger\">REFIT ANIMAL CARE- 10KG</ion-label>\r\n              <p>Celebrate Mineral Mixture...</p>\r\n              <p>Delivery By- 6th October</p>\r\n              <p>Delivery Fees- &#x20B9;50</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <a>Save for later</a>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <ion-grid slot=\"end\">\r\n          <ion-row>\r\n            <ion-col size=\"3\"></ion-col>\r\n            <ion-col (click)=\"medModal(c)\" class=\"center\" size=\"6\">\r\n              <ion-thumbnail><ion-img src=\"{{c.image}}\" ></ion-img></ion-thumbnail>\r\n            </ion-col>\r\n            <ion-col size=\"3\"><ion-icon color=\"danger\" name=\"trash-sharp\" (click)=\"removeCartItem(c)\"></ion-icon></ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"center\" size=\"12\">\r\n              <ion-text color=\"primary\">{{c.name}}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"center\" size=\"2\">\r\n              <ion-icon size=\"large\" name=\"remove-circle-sharp\" color=\"primary\" (click)=\"decreaseCartItem(c)\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col class=\"center\" size=\"8\">\r\n              <ion-item lines=\"none\" color=\"none\">\r\n                <ion-text color=\"warning\">{{c.amount}}</ion-text>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col class=\"center\" size=\"2\">\r\n              <ion-icon size=\"large\" name=\"add-circle-sharp\" color=\"primary\" (click)=\"increaseCartItem(c)\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-toolbar>\r\n      <ion-button shape=\"round\" expand=\"block\" color=\"light\">You have a Promo Code? Apply Here</ion-button>\r\n    </ion-list>\r\n    <!-- <ion-toolbar color=\"none\">\r\n      <ion-item lines=\"full\" color=\"none\">\r\n        <ion-label slot=\"start\" color=\"primary\">PRICE DETAILS</ion-label>\r\n      </ion-item>\r\n    </ion-toolbar>\r\n    <ion-toolbar class=\"priceTable\" color=\"none\">\r\n      <ion-item lines=\"none\" color=\"none\">\r\n        <ion-label slot=\"start\" color=\"primary\">{{'Price of c.amount Item'}})</ion-label>\r\n        <ion-label slot=\"end\">1440</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" color=\"none\">\r\n        <ion-label slot=\"start\" color=\"primary\">Discount</ion-label>\r\n        <ion-label slot=\"end\">&#x20B9;68</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"full\" color=\"none\">\r\n        <ion-label slot=\"start\" color=\"primary\">Delivery Charges</ion-label>\r\n        <ion-label slot=\"end\">Free</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" color=\"none\">\r\n        <ion-label slot=\"start\" color=\"primary\">Total Cost</ion-label>\r\n        <ion-label slot=\"end\" color=\"warning\">&#x20B9;{{'c.amount*c.price'}}</ion-label>\r\n      </ion-item>\r\n    </ion-toolbar> -->\r\n  </ion-card>\r\n  <ion-toolbar color=\"none\">\r\n    <ion-item lines=\"full\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"primary\">PRICE DETAILS</ion-label>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"priceTable\" color=\"none\">\r\n    <!-- <ion-item lines=\"none\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"primary\">PRICE</ion-label>\r\n      <ion-label slot=\"end\"></ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"primary\">Discount</ion-label>\r\n      <ion-label slot=\"end\">&#x20B9;68</ion-label>\r\n    </ion-item> -->\r\n    <ion-item lines=\"full\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"primary\">Delivery Charges</ion-label>\r\n      <ion-label slot=\"end\">Free</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"primary\">Total Cost</ion-label>\r\n      <ion-label slot=\"end\" color=\"warning\">{{ getTotal() | currency:'INR' }}</ion-label>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-content>\r\n\r\n  <ion-footer>\r\n    <ion-button expand=\"block\" color=\"success\" (click)=\"close()\" (click)=\"makePayment()\"><ion-icon slot=\"end\" name=\"checkmark-done-sharp\"></ion-icon>PLACE ORDER!</ion-button>\r\n  </ion-footer>\r\n  ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/med-modal/med-modal.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/med-modal/med-modal.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesMedModalMedModalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-item lines=\"none\" color=\"warning\">\r\n    <ion-icon slot=\"end\" name=\"close\" (click)=\"dismiss()\"></ion-icon>\r\n  </ion-item>\r\n  <ion-card class=\"ion-padding\">\r\n    <ion-card-header >\r\n     <ion-label color=\"light\"> {{ name}} </ion-label> \r\n    </ion-card-header>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"reverseCenter\" size=\"12\">\r\n          <ion-thumbnail>\r\n            <ion-img src=\"{{image}}\"></ion-img>\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n        \r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"reverseCenter\" size=\"12\">\r\n          <ion-label>REFIT ANIMAL CARE – 10 Kg Chelated Mineral Mixture for\r\n            Buffalo,Cow,Cattle,Poultry,\r\n            Goat & Pig (RIGMIN Forte Powder)\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-toolbar color=\"none\">\r\n      <ion-item slot=\"start\" lines=\"none\" color=\"none\">\r\n        <ion-label color=\"success\">{{ price | currency:'INR' }}</ion-label>\r\n      </ion-item>\r\n    </ion-toolbar>\r\n  </ion-card>\r\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"backbtn\" routerLink=\"/welcome\" routerDirection=\"back\">\n        <img src=\"../../assets/back.svg\" />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"ion-padding container\">\n    <h1>Signup</h1>\n\n    <div class=\"form-container\">\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\"></ion-input>\n        <ion-icon name=\"eye\" slot=\"end\"></ion-icon>\n      </ion-item>\n\n      <ion-button expand=\"block\" class=\"main-button\">Sign Up</ion-button>\n\n      <div class=\"sign-up\">\n        Already have an account? <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/login\" routerDirection=\"forward\">Sign in</ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content> -->\n<ion-card>\n  <ion-card-header>\n    <ion-card-title>\n      Please Sign Up\n    </ion-card-title>\n    <ion-card-subtitle>\n      We'd be happy to have you join our community!\n    </ion-card-subtitle>\n  </ion-card-header>\n  \n    <!-- <mat-card-header>\n      <mat-icon mat-card-avatar>lock</mat-icon>\n      <mat-card-title>Please Sign Up</mat-card-title>\n      <mat-card-subtitle>We'd be happy to have you join our community!</mat-card-subtitle>\n    </mat-card-header> -->\n  \n    <ion-card-content>\n      <form>\n        <ion-label color=\"success\">Full Name</ion-label>\n        <ion-input  placeholder=\"Full Name\" [formControl]=\"fullName\" name=\"name\" required></ion-input>\n        <ion-label color=\"success\">Phone Number</ion-label>\n        <ion-input placeholder=\"Phone Number (e.g. +919999922222)\" [formControl]=\"sms\" name=\"sms\" required></ion-input>\n      </form>\n      <ion-button *ngIf=\"(busy | async) !==true\" color=\"success\" (click)=\"signup()\">\n        SIGN UP<ion-spinner *ngIf=\"busy | async\" name=\"bubbles\">\n        </ion-spinner>\n      </ion-button>\n    </ion-card-content>\n  \n  \n  \n  \n    <!-- <mat-card-content>\n      <form fxLayout=\"column\">\n        <mat-form-field>\n          <input matInput placeholder=\"Full Name\" [formControl]=\"fullName\" name=\"name\" autocomplete=\"name\" required/>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Phone Number (e.g. +12065551211)\" [formControl]=\"sms\" type=\"sms\" sms name=\"sms\"\n            autocomplete=\"username sms\" required/>\n        </mat-form-field>\n      </form>\n    </mat-card-content> -->\n  \n    <!-- <mat-card-actions>\n      <div fxFlex></div>\n      <button mat-stroked-button color=\"primary\" (click)=\"signup()\">\n        <div fxFlex></div>\n        <div *ngIf=\"(busy | async) !==true\">SIGN UP</div>\n        <mat-spinner *ngIf=\"busy | async\" [diameter]=\"35\"></mat-spinner>\n        <div fxFlex></div>\n      </button>\n      <div fxFlex></div>\n    </mat-card-actions> -->\n  \n    <p *ngIf=\"errorMessage | async\">{{ errorMessage | async }}</p>\n  \n    <ion-card-content>\n      <ion-card-subtitle>\n        Already signed up? <a routerLink='/login' routerLinkActive=\"active success\" >Sign in</a>\n      </ion-card-subtitle>\n  \n    </ion-card-content>\n  \n  \n  </ion-card>\n  ";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _landing_landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./landing/landing.page */
      "./src/app/landing/landing.page.ts");
      /* harmony import */


      var _login_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/login.page */
      "./src/app/login/login.page.ts");
      /* harmony import */


      var _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/auth.guard */
      "./src/app/services/auth.guard.ts");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | welcome-welcome-module */
          "welcome-welcome-module").then(__webpack_require__.bind(null,
          /*! ./welcome/welcome.module */
          "./src/app/welcome/welcome.module.ts")).then(function (m) {
            return m.WelcomePageModule;
          });
        }
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        },
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["IsNotAuthenticated"]]
      }, {
        path: 'cart-modal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/cart-modal/cart-modal.module */
          "./src/app/pages/cart-modal/cart-modal.module.ts")).then(function (m) {
            return m.CartModalPageModule;
          });
        }
      }, {
        path: 'myads-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-myads-modal-myads-modal-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-myads-modal-myads-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/myads-modal/myads-modal.module */
          "./src/app/pages/myads-modal/myads-modal.module.ts")).then(function (m) {
            return m.MyadsModalPageModule;
          });
        }
      }, {
        path: 'med-modal',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-med-modal-med-modal-module */
          "pages-med-modal-med-modal-module").then(__webpack_require__.bind(null,
          /*! ./pages/med-modal/med-modal.module */
          "./src/app/pages/med-modal/med-modal.module.ts")).then(function (m) {
            return m.MedModalPageModule;
          });
        }
      }, {
        path: 'login/:id',
        component: _login_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"],
        children: [{
          path: 'landing',
          component: _landing_landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
        }]
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./signup/signup.module */
          "./src/app/signup/signup.module.ts")).then(function (m) {
            return m.SignupPageModule;
          });
        },
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["IsNotAuthenticated"]]
      }, {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
      }, {
        path: 'answer-challenge',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/answer-challenge/answer-challenge.module */
          "./src/app/pages/answer-challenge/answer-challenge.module.ts")).then(function (m) {
            return m.AnswerChallengePageModule;
          });
        },
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["IsNotAuthenticated"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule); // import { NgModule } from '@angular/core';
      // import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
      // const routes: Routes = [
      //   {
      //         path: '',
      //         loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule),
      //       },
      //     {
      //         path: 'login',
      //         loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
      //       },
      //       {
      //         path: 'signup',
      //         loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
      //       },
      //   {
      //     path: 'cart-modal',
      //     loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
      //   },
      //   {
      //     path: 'myads-modal',
      //     loadChildren: () => import('./pages/myads-modal/myads-modal.module').then( m => m.MyadsModalPageModule)
      //   },
      //   {
      //     path: 'med-modal',
      //     loadChildren: () => import('./pages/med-modal/med-modal.module').then( m => m.MedModalPageModule)
      //   },
      //   {
      //     path: '',
      //     redirectTo: 'welcome',
      //     pathMatch: 'full',
      //   },
      //   // {
      //   //   path: 'welcome',
      //   //   loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule),
      //   //   children:[
      //   //     {
      //   //       path: 'login',
      //   //       loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
      //   //     },
      //   //     {
      //   //       path: 'signup',
      //   //       loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
      //   //     },
      //   //   ],
      //   // },
      // ];
      // @NgModule({
      //   imports: [
      //     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
      //   ],
      //   exports: [RouterModule]
      // })
      // export class AppRoutingModule {}

      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".app {\n  background-color: #1F1F29;\n}\n\nion-menu {\n  --width: 100%;\n}\n\n.main-list {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-list ion-list {\n  width: 100%;\n}\n\n.main-list ion-list ion-item {\n  font-size: 18px;\n  font-weight: 100;\n}\n\n.main-list ion-list .selected {\n  border-left: 5px solid var(--ion-color-primary);\n  color: var(--ion-color-primary);\n}\n\n.main-list ion-button {\n  position: absolute;\n  bottom: 10%;\n  right: 10%;\n  font-size: 24px;\n  --ripple-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFFO0VBQ0UsV0FBQTtBQUVKOztBQUFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRU47O0FBQ0k7RUFDRSwrQ0FBQTtFQUNBLCtCQUFBO0FBQ047O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYxRjI5O1xufVxuaW9uLW1lbnUge1xuICAtLXdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpb24tbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBpb24taXRlbSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgIH1cblxuICAgIC5zZWxlY3RlZCB7XG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAlO1xuICAgIHJpZ2h0OiAxMCU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./util.service */
      "./src/app/util.service.ts");
      /* harmony import */


      var _ionic_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/core */
      "./node_modules/@ionic/core/dist/esm/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, util, router) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.util = util;
          this.router = router;
          this.isMenuEnabled = true;
          this.selectedIndex = 0;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({});
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              if (_this.platform.is('android')) {
                _this.statusBar.styleLightContent();
              }

              _this.splashScreen.hide();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.selectedIndex = 1;
            this.util.getMenuState().subscribe(function (menuState) {
              _this2.isMenuEnabled = menuState;
            });
          }
        }, {
          key: "navigate",
          value: function navigate(path, selectedId) {
            this.selectedIndex = selectedId;
            this.router.navigate([path]);
          }
        }, {
          key: "close",
          value: function close() {
            _ionic_core__WEBPACK_IMPORTED_MODULE_6__["menuController"].toggle();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _seller_form_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./seller-form.pipe */
      "./src/app/seller-form.pipe.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/stepper */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_login_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./services/login.service */
      "./src/app/services/login.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/cart-modal/cart-modal.module */
      "./src/app/pages/cart-modal/cart-modal.module.ts");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _pages_med_modal_med_modal_page__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/med-modal/med-modal.page */
      "./src/app/pages/med-modal/med-modal.page.ts");
      /* harmony import */


      var _app_services_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../app/services/auth.guard */
      "./src/app/services/auth.guard.ts");
      /* harmony import */


      var _login_login_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./login/login.module */
      "./src/app/login/login.module.ts");
      /* harmony import */


      var _pages_answer_challenge_answer_challenge_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pages/answer-challenge/answer-challenge.module */
      "./src/app/pages/answer-challenge/answer-challenge.module.ts");
      /* harmony import */


      var _signup_signup_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./signup/signup.module */
      "./src/app/signup/signup.module.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _seller_form_pipe__WEBPACK_IMPORTED_MODULE_9__["SellerFormPipe"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_18__["CartModalPageModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_23__["LoginPageModule"], _pages_answer_challenge_answer_challenge_module__WEBPACK_IMPORTED_MODULE_24__["AnswerChallengePageModule"], _signup_signup_module__WEBPACK_IMPORTED_MODULE_25__["SignupPageModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_14__["NativeGeocoder"], _services_login_service__WEBPACK_IMPORTED_MODULE_16__["LoginService"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_19__["MediaCapture"], _pages_med_modal_med_modal_page__WEBPACK_IMPORTED_MODULE_21__["MedModalPage"], _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_20__["FileOpener"], _app_services_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"], _app_services_auth_guard__WEBPACK_IMPORTED_MODULE_22__["IsAuthenticated"], _app_services_auth_guard__WEBPACK_IMPORTED_MODULE_22__["IsNotAuthenticated"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/data.service.ts":
    /*!*********************************!*\
      !*** ./src/app/data.service.ts ***!
      \*********************************/

    /*! exports provided: DataService */

    /***/
    function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DataService = /*#__PURE__*/function () {
        function DataService() {
          _classCallCheck(this, DataService);
        }

        _createClass(DataService, [{
          key: "getTodaysOffers",
          value: function getTodaysOffers() {
            var todaysOffers = [];
            var cat1 = {
              id: 1,
              name: '',
              image: '../../assets/product-slider/prod-slide3.jpg'
            };
            var cat2 = {
              id: 2,
              name: '',
              image: '../../assets/product-slider/prod-slide3.jpg'
            };
            var cat3 = {
              id: 3,
              name: '',
              image: '../../assets/product-slider/prod-slide3.jpg'
            };
            todaysOffers.push(cat1, cat2, cat3);
            return todaysOffers;
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var categories = [];
            var cat1 = {
              id: 1,
              name: 'Cows',
              image: '../../assets/categories/category-1.png'
            };
            var cat2 = {
              id: 2,
              name: 'Goats',
              image: '../../assets/categories/category-2.png'
            };
            var cat3 = {
              id: 3,
              name: 'Buffalos',
              image: '../../assets/categories/category-3.png'
            };
            categories.push(cat1, cat2, cat3);
            return categories;
          }
        }, {
          key: "getFeaturedProducts",
          value: function getFeaturedProducts() {
            var products = [];
            var prod1 = {
              id: 1,
              name: 'Heifer',
              price: 55000,
              image: '../../assets/products/prod-1.png'
            };
            var prod2 = {
              id: 2,
              name: 'Ox',
              price: 140000,
              image: '../../assets/products/prod-2.png'
            };
            var prod3 = {
              id: 1,
              name: 'Goat',
              price: 20000,
              image: '../../assets/products/prod-3.png'
            };
            products.push(prod1, prod2, prod3);
            return products;
          }
        }, {
          key: "getBestSellProducts",
          value: function getBestSellProducts() {
            var products = [];
            var prod1 = {
              id: 1,
              name: 'Cow',
              price: 55000,
              image: '../../assets/products/prod-4.png'
            };
            var prod2 = {
              id: 2,
              name: 'Buffalo',
              price: 34000,
              image: '../../assets/products/prod-5.png'
            };
            var prod3 = {
              id: 1,
              name: 'Ox',
              price: 40000,
              image: '../../assets/products/prod-6.png'
            };
            products.push(prod1, prod2, prod3);
            return products;
          }
        }]);

        return DataService;
      }();

      DataService.ctorParameters = function () {
        return [];
      };

      DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DataService);
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


      __webpack_exports__["default"] = ".card {\n  background: transparent;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 75%;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 2;\n  top: 0;\n  left: 0;\n}\n\n.img {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\nion-slides {\n  z-index: 2;\n  --background: transparent !important;\n  height: 25%;\n  padding: 0;\n  margin: 0;\n}\n\nion-slide {\n  --background: transparent !important;\n  z-index: 2;\n  height: 100%;\n  width: 100%;\n}\n\nion-slide ion-label {\n  font-size: 12px;\n}\n\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\nion-thumbnail {\n  height: 100px;\n  width: 120px;\n}\n\n.toolbar {\n  margin: 5% 0;\n}\n\nion-content {\n  margin: 0;\n  padding: 0;\n}\n\nion-text {\n  font-size: 15px;\n}\n\nion-searchbar {\n  border: none;\n  border-radius: 0;\n}\n\n.offersImg {\n  border: 3px solid white;\n}\n\n.textCenter {\n  text-align: center;\n}\n\n.reverseCenter {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.gradient {\n  border-radius: 10px;\n  background: linear-gradient(180deg, #1777AD 10.94%, rgba(23, 119, 173, 0) 100%);\n}\n\nion-grid {\n  margin: 0;\n  padding: 0;\n}\n\nion-item {\n  margin: 0;\n  padding: 0;\n}\n\n.bigBtn {\n  margin: 7% 0%;\n}\n\n.smallBtn {\n  display: flex;\n  justify-content: space-between;\n}\n\n.content {\n  z-index: 2;\n  --background: transparent !important;\n}\n\n.backgroundCard {\n  margin: 0;\n  padding: 0;\n  opacity: 25%;\n  position: fixed;\n  background-image: url('bgman.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  border-bottom-left-radius: 15%;\n  border-bottom-right-radius: 15%;\n  z-index: 1;\n}\n\nion-searchbar {\n  border-bottom: 1px solid silver;\n  --box-shadow: none !important;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2UkE7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBNVJKOztBQStSRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQTVSSjs7QUErUkU7RUFDRSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUE1Uko7O0FBK1JFO0VBQ0Usb0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUE1Uko7O0FBNlJJO0VBQ0UsZUFBQTtBQTNSTjs7QUErUkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBNVJKOztBQStSRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBNVJKOztBQStSRTtFQUNFLFlBQUE7QUE1Uko7O0FBK1JFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUE1Uko7O0FBK1JFO0VBQ0UsZUFBQTtBQTVSSjs7QUErUkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUE1Uko7O0FBK1JFO0VBQ0UsdUJBQUE7QUE1Uko7O0FBK1JFO0VBQ0Usa0JBQUE7QUE1Uko7O0FBK1JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTVSSjs7QUErUkU7RUFDRSxtQkFBQTtFQUNBLCtFQUFBO0FBNVJKOztBQStSRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBNVJKOztBQStSRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBNVJKOztBQStSRTtFQUNFLGFBQUE7QUE1Uko7O0FBK1JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBNVJKOztBQStSRTtFQUNFLFVBQUE7RUFDQSxvQ0FBQTtBQTVSSjs7QUErUkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0FBNVJKOztBQStSRTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBNVJKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iYWNrYnRuIHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAubm90aWZpY2F0aW9uIHtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbnRlbnQge1xyXG4vLyAgICAgLS1wYWRkaW5nLXRvcDogODBweDtcclxuLy8gICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbi8vICAgICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XHJcbi8vICAgICAtLXBhZGRpbmctZW5kOiAyNnB4O1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JnbWFuLmpwZykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxuLy8gICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDUwdncgcmdiYSg3LCA3NiwgMTU1LCAwLjMpXHJcbiAgICBcclxuICAgIFxyXG4vLyAgICAgLy8gLS1iYWNrZ3JvdW5kLWNvbG9yOiMxZTFlMWU7XHJcbi8vIH1cclxuLy8gaW9uLWdyaWR7XHJcbi8vICAgICBwYWRkaW5nOiAxNTBweCA1cHggNXB4IDIwcHg7XHJcbi8vIH1cclxuLy8gLml0ZW0tbmFtZSB7XHJcbi8vICAgICBjb2xvcjogIzJiZmYwMDtcclxuLy8gfVxyXG5cclxuLy8gLnByaWNlIHtcclxuLy8gICAgIGNvbG9yOiAjM0NGMTg1O1xyXG5cclxuLy8gICAgIHNwYW4ge1xyXG4vLyAgICAgICAgIGNvbG9yOiAjM0NGMTg1O1xyXG4vLyAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4vLyAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC5zZXBlcmF0b3Ige1xyXG4vLyAgICAgaHIge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICM4MTgwODA7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gaDV7XHJcbi8vICAgICBjb2xvcjojMjNhYzA4O1xyXG4vLyAgICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBcclxuLy8gfVxyXG4vLyAuY291bnQge1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgLy8gZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4vLyAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbi8vICAgICBzcGFuIHtcclxuLy8gICAgICAgICBjb2xvcjogIzI2ZmY3MztcclxuLy8gICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLnJldmlldyB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4vLyAgICAgY29sb3I6ICM5ZGFkMGQ7XHJcblxyXG4vLyAgICAgLnJhdGluZyB7XHJcbi8vICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjOWRhZDBkO1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vICAgICB9XHJcblxyXG4gXHJcbi8vIH1cclxuLy8gLmlvbi1wYWRkaW5nLXZlcnRpY2FsLWN1c3RvbSB7XHJcbi8vICAgICAvLyAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbi8vICAgICAvLyAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4vLyB9XHJcbi8vIC5jdXJ2ZWR7XHJcbi8vIGJvcmRlci1yYWRpdXM6MTAwJSAwJSAxMDAlIDAlIC8gMCUgMTAwJSAwJSAxMDAlIDsgLy8xMDAlIDAlIDEwJSA5MCUgLyAxMDAlIDg4JSAxMiUgMCUgO1xyXG4vLyBjb2xvcjojMzYzNjNGO1xyXG4vLyB3aWR0aDogMTIwcHg7XHJcbi8vIGhlaWdodDogMTIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5kZXNjcmlwdGlvbiB7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgICB6b29tOjI1MCU7XHJcbi8vICAgICBoNSB7XHJcbi8vICAgICAgICAgY29sb3I6ICM5ZGFkMGQ7XHJcbi8vICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcCB7XHJcbi8vICAgICAgICAgY29sb3I6ICM5ZGFkMGQ7XHJcbi8vICAgICB9XHJcbi8vICAgICAuY29sbGVmdHtcclxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4vLyAgICAgICAgIHpvb206MjUwJTtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jb2xyaWdodHtcclxuICAgICAgICBcclxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuLy8gICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbi8vICAgICAgICAgem9vbToyNTAlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAudmFyaWF0aW9uIHtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG5cclxuLy8gICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbi8vICAgICAgICAgY29sb3I6ICM5ZGFkMGQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC52YXJpYXRpb24tc2VsZWN0b3Ige1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4vLyAgICAgLmFjdGl2ZS12YXJpYXRpb24ge1xyXG4vLyAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuLy8gICAgICAgICB6LWluZGV4OiAxICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLnNpemVzIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgei1pbmRleDogMDtcclxuLy8gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHJcbi8vICAgICAgICAgZGl2IHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZGFkMGQ7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4vLyAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLmFjdGl2ZSB7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiAjMWEwMDAwO1xyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5jb2xvcnMge1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICB6LWluZGV4OiAwO1xyXG4vLyAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG5cclxuLy8gICAgICAgICBkaXYge1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlkYWQwZDtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbi8vICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAuYWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgY29sb3I6ICM5ZGFkMGQ7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLy8gaW9uLWNhcmR7XHJcbi8vIC8vICAgICAtLWJhY2tncm91bmQtY29sb3I6ICMzNjM2M0Y7XHJcbi8vIC8vIH1cclxuLy8gLmNhcmQge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGI4OyAvLyBibGFja1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gICB9XHJcbi8vIGlvbi1mb290ZXIge1xyXG4vLyAgICAgaW9uLXJvdyB7XHJcbi8vICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbi8vICAgICAgICAgaW9uLWNvbCB7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4vLyAgICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gYXtcclxuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbi8vIH1cclxuLy8gLy8gVGhpcyB3aWxsIHJlbW92ZSBmb290ZXIgc2hhZG93IG9uIGFuZHJvaWRcclxuLy8gLmZvb3Rlci1tZDo6YmVmb3JlIHtcclxuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuXHJcbi8vIC5jYXJke1xyXG4vLyAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly93d3cudGhlaW5kaWFmb3J1bS5pbi9zaXRlcy9kZWZhdWx0L2ZpbGVzL2ZpZWxkL2ltYWdlLzIwMjEvMDUvMjgvcmFta3VtYXItcmFkaGFrcmlzaG5hbi13aWtpbWVkaWEtMTYyMjE5MzMwNC5qcGVnJyk7XHJcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyAgIHBhZGRpbmc6IDUlO1xyXG4vLyB9XHJcblxyXG4vLyAuaW1ne1xyXG4vLyAgIGhlaWdodDogMTAwJTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuLy8gfVxyXG5cclxuLy8gaW9uLXNsaWRlcyB7XHJcbi8vICAgaGVpZ2h0OiAyNSU7XHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1zbGlkZXtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgaW9uLWxhYmVse1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmNlbnRlcntcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi10aHVtYm5haWx7XHJcbi8vICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICB3aWR0aDogMTIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC50b29sYmFye1xyXG4vLyAgIG1hcmdpbjogNSUgMDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbnRlbnR7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyAgIHBhZGRpbmc6IDA7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi10ZXh0e1xyXG4vLyAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLXNlYXJjaGJhcntcclxuLy8gICBib3JkZXI6IG5vbmU7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMDtcclxuLy8gfVxyXG5cclxuLy8gLm9mZmVyc0ltZ3tcclxuLy8gICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuLy8gfVxyXG5cclxuXHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IDc1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWd7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNsaWRle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBpb24tdGh1bWJuYWlse1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2xiYXJ7XHJcbiAgICBtYXJnaW46IDUlIDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuICAub2ZmZXJzSW1ne1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0Q2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucmV2ZXJzZUNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZ3JhZGllbnR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzE3NzdBRCAxMC45NCUsIHJnYmEoMjMsIDExOSwgMTczLCAwKSAxMDAlKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWdyaWR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBpb24taXRlbXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5iaWdCdG57XHJcbiAgICBtYXJnaW46IDclIDAlO1xyXG4gIH1cclxuICBcclxuICAuc21hbGxCdG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrZ3JvdW5kQ2FyZHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvcGFjaXR5OiAyNSU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9iZ21hbi5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNSU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTUlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlYXJjaGJhcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */";
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
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/file-opener/ngx */
      "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");

      var LandingPage = /*#__PURE__*/function () {
        function LandingPage(util, navCtrl, data, media, opener) {
          _classCallCheck(this, LandingPage);

          this.util = util;
          this.navCtrl = navCtrl;
          this.data = data;
          this.media = media;
          this.opener = opener;
          this.categories = [];
          this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 3,
            spaceBetween: 25,
            speed: 500
          };
          this.keys = [];
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
            this.navCtrl.navigateRoot('tabs/home', {
              animationDirection: 'forward'
            });
          }
        }, {
          key: "goToMedicine",
          value: function goToMedicine() {
            this.navCtrl.navigateRoot('tabs/medicines', {
              animationDirection: 'forward'
            });
          }
        }, {
          key: "goToFeed",
          value: function goToFeed() {
            this.navCtrl.navigateRoot('tabs/home', {
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
        }, {
          key: "recordAudio",
          value: function recordAudio() {
            var _this3 = this;

            var option = {
              limit: 1
            };
            this.media.captureAudio(option).then(function (mediaFile) {
              _this3.audio = mediaFile[0];
              _this3.keys = Object.keys(_this3.audio);
            });
          }
        }, {
          key: "playAudio",
          value: function playAudio() {
            this.opener.open(this.audio.fullPath, "audio/mpeg");
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
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__["MediaCapture"]
        }, {
          type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"]
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
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-otp-input */
      "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n}\n\nng-otp-input {\n  color: #f5600a;\n}\n\nion-content {\n  margin: 0;\n  padding: 0;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-input {\n  --background: transparent;\n}\n\nion-item {\n  --background: transparent;\n}\n\nng-opt-input {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-weight: bold;\n  font-size: 150%;\n  color: #685b51;\n}\n\nion-card {\n  --background: #36363F;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFqREY7O0FBb0RFO0VBQ0UsY0FBQTtBQWpESjs7QUFvREU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWpESjs7QUE4REU7RUFDRSx5QkFBQTtBQTNESjs7QUE4REU7RUFDRSx5QkFBQTtBQTNESjs7QUE4REU7RUFDRSx5QkFBQTtBQTNESjs7QUE4REU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTNESjs7QUE2REU7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBMURKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gVGhpcyB3aWxsIHJlbW92ZSBpT1MgSGVhZGVyIExpbmVcclxuLy8gaW9uLXRvb2xiYXIge1xyXG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLy8gUmVtb3ZpbmcgQW5kcm9pZCBIZWFkZXIgTGluZVxyXG4vLyAuaGVhZGVyLW1kOjphZnRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5jb250YWluZXIgaDEge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMDtcclxuLy8gfVxyXG5cclxuLy8gLmJhY2tidG4ge1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5mb3JtLWNvbnRhaW5lciB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZm9ybS1jb250YWluZXIgaW9uLWl0ZW0ge1xyXG4vLyAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4vLyAgICAgLS1ib3JkZXItY29sb3I6ICNEQURBREE7XHJcbi8vIH1cclxuXHJcbi8vIC5mb3JtLWNvbnRhaW5lciBpb24taXRlbSBpb24tbGFiZWwge1xyXG4vLyAgICAgY29sb3I6ICNBNkE2QTY7XHJcbi8vIH1cclxuXHJcbi8vIC5mb3JtLWNvbnRhaW5lciBpb24taXRlbSBpb24taWNvbiB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4vLyAgICAgY29sb3I6ICNjNmNiZDQ7XHJcbi8vIH1cclxuXHJcbi8vIC5mb3JtLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDQ4cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5zaWduLXVwIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5zaWduLXVwIGlvbi1idXR0b24ge1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4uY2VudGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgbmctb3RwLWlucHV0e1xyXG4gICAgY29sb3I6IHJnYigyNDUsIDk2LCAxMCk7XHJcbiAgfVxyXG5cclxuICBpb24tY29udGVudHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAvLyBpb24tZ3JpZHtcclxuICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyAgIHRvcDogMjUlO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gaW9uLWltZ3tcclxuICAvLyAgIHdpZHRoOiA3NSU7XHJcbiAgLy8gICBoZWlnaHQ6IDc1JTtcclxuICAvLyB9XHJcblxyXG4gIGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWlucHV0e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIG5nLW9wdC1pbnB1dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIGNvbG9yOiByZ2IoMTA0LCA5MSwgODEpO1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIC0tYmFja2dyb3VuZDogIzM2MzYzRjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js"); // import { Component, OnInit } from '@angular/core';
      // import { NavController } from '@ionic/angular';
      // import { UtilService } from '../util.service';
      // @Component({
      //   selector: 'app-login',
      //   templateUrl: './login.page.html',
      //   styleUrls: ['./login.page.scss'],
      // })
      // export class LoginPage implements OnInit {
      //   constructor(
      //     private util: UtilService,
      //     private navCtrl: NavController,
      //   ) { }
      //   ngOnInit() {
      //   }
      //   login() {
      //     // Enabling Side Menu
      //     this.util.setMenuState(true);
      //     this.navCtrl.navigateRoot('landing', { animationDirection: 'forward' });
      //   }
      // }
      //Twillio based login
      // import { Component } from "@angular/core";
      // import { Router } from "@angular/router";
      // import { NavController } from "@ionic/angular";
      // import { LoginService } from "../services/login.service";
      // import { UtilService } from "../util.service";
      // @Component({
      //   selector: "app-login",
      //   templateUrl: "./login.page.html",
      //   styleUrls: ["./login.page.scss"],
      // })
      // export class LoginPage {
      //   inputNumber;
      //   isNumberSubmitted: boolean;
      //   name;
      //   otpreceived = "889963";
      //   otp: any;
      //   constructor(
      //     private navCtrl: NavController,
      //     private router: Router,
      //     private login: LoginService,
      //     private util: UtilService
      //   ) {}
      //   onOtpChange(otp) {
      //     this.otp = otp;
      //     console.log(otp);
      //   }
      //   onLogin() {
      //     //this.isNumberSubmitted =true;
      //     this.login.validateOtp(this.name, this.inputNumber, this.otp).subscribe(
      //       (response) => {
      //         //this.isNumberSubmitted =true;
      //         console.log("onLogin with OTP", response);
      //         //this.router.navigate(['welcome']);
      //         this.navCtrl.navigateRoot("tabs/landing", { animationDirection: "forward" });
      //         this.util.setMenuState(true);
      //         console.log("Clicked");
      //       },
      //       (error) => {
      //         //this.isNumberSubmitted = false;
      //         console.log("Error in onLogin()", error);
      //       }
      //     );
      //   }
      //   onNumberSubmitted() {
      //     this.login.generateOtp(this.name, this.inputNumber).subscribe(
      //       (response) => {
      //         this.isNumberSubmitted = true;
      //         console.log("NumberSubmitted", response);
      //         localStorage.setItem("isLoggedIn", "true");
      //       },
      //       (error) => {
      //         this.isNumberSubmitted = false;
      //       }
      //     );
      //   }
      // }


      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(router, auth) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.auth = auth;
          this.sms = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('+919860067118');
          this.busy_ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
          this.busy = this.busy_.asObservable();
          this.errorMessage_ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
          this.errorMessage = this.errorMessage_.asObservable();
        }

        _createClass(LoginPage, [{
          key: "signIn",
          value: function signIn() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('In SignIn', this.sms.value);
                      this.busy_.next(true); //this.errorMessage_.next('');

                      _context.prev = 2;
                      _context.next = 5;
                      return this.auth.signIn(this.sms.value);

                    case 5:
                      console.log(this.sms.value);
                      this.router.navigate(['/answer-challenge']);
                      _context.next = 12;
                      break;

                    case 9:
                      _context.prev = 9;
                      _context.t0 = _context["catch"](2);
                      this.errorMessage_.next(_context.t0.message || _context.t0);

                    case 12:
                      _context.prev = 12;
                      this.busy_.next(false);
                      return _context.finish(12);

                    case 15:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[2, 9, 12, 15]]);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "./src/app/pages/answer-challenge/answer-challenge-routing.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/answer-challenge/answer-challenge-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: AnswerChallengePageRoutingModule */

    /***/
    function srcAppPagesAnswerChallengeAnswerChallengeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnswerChallengePageRoutingModule", function () {
        return AnswerChallengePageRoutingModule;
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


      var _answer_challenge_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./answer-challenge.page */
      "./src/app/pages/answer-challenge/answer-challenge.page.ts");

      var routes = [{
        path: '',
        component: _answer_challenge_page__WEBPACK_IMPORTED_MODULE_3__["AnswerChallengePage"]
      }];

      var AnswerChallengePageRoutingModule = function AnswerChallengePageRoutingModule() {
        _classCallCheck(this, AnswerChallengePageRoutingModule);
      };

      AnswerChallengePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AnswerChallengePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/answer-challenge/answer-challenge.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/answer-challenge/answer-challenge.module.ts ***!
      \*******************************************************************/

    /*! exports provided: AnswerChallengePageModule */

    /***/
    function srcAppPagesAnswerChallengeAnswerChallengeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnswerChallengePageModule", function () {
        return AnswerChallengePageModule;
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


      var _answer_challenge_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./answer-challenge-routing.module */
      "./src/app/pages/answer-challenge/answer-challenge-routing.module.ts");
      /* harmony import */


      var _answer_challenge_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./answer-challenge.page */
      "./src/app/pages/answer-challenge/answer-challenge.page.ts");

      var AnswerChallengePageModule = function AnswerChallengePageModule() {
        _classCallCheck(this, AnswerChallengePageModule);
      };

      AnswerChallengePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _answer_challenge_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnswerChallengePageRoutingModule"]],
        declarations: [_answer_challenge_page__WEBPACK_IMPORTED_MODULE_6__["AnswerChallengePage"]]
      })], AnswerChallengePageModule);
      /***/
    },

    /***/
    "./src/app/pages/answer-challenge/answer-challenge.page.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/answer-challenge/answer-challenge.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAnswerChallengeAnswerChallengePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".digit-input {\n  text-align: center;\n  font-size: 1.7em;\n}\n\n.x {\n  color: antiquewhite;\n  background-color: #ffae00;\n  padding-left: 15px;\n  letter-spacing: 42px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5zd2VyLWNoYWxsZW5nZS9hbnN3ZXItY2hhbGxlbmdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fuc3dlci1jaGFsbGVuZ2UvYW5zd2VyLWNoYWxsZW5nZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlnaXQtaW5wdXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxuICB9XHJcbiAgLnh7XHJcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA0MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/answer-challenge/answer-challenge.page.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/answer-challenge/answer-challenge.page.ts ***!
      \*****************************************************************/

    /*! exports provided: AnswerChallengePage */

    /***/
    function srcAppPagesAnswerChallengeAnswerChallengePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnswerChallengePage", function () {
        return AnswerChallengePage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* eslint-disable @typescript-eslint/member-ordering */

      /* eslint-disable no-underscore-dangle */


      var AnswerChallengePage = /*#__PURE__*/function () {
        function AnswerChallengePage(auth, router) {
          _classCallCheck(this, AnswerChallengePage);

          this.auth = auth;
          this.router = router;
          this.digit1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
          this.digit2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
          this.digit3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
          this.digit4 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
          this.digit5 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
          this.digit6 = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
          this.errorMessage_ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
          this.errorMessage = this.errorMessage_.asObservable();
          this.busy_ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
          this.busy = this.busy_.asObservable();
          this.allSubscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
          this.sms_ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
          this.sms = this.sms_.asObservable();
        }

        _createClass(AnswerChallengePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            // Get e-mail address the code was sent to
            // It is a public challenge parameter so let's try it that way
            this.auth.getPublicChallengeParameters().then(function (param) {
              return _this4.sms_.next(param.sms);
            }); // Move focus to next field upon entry of a digit

            [2, 3, 4, 5, 6].forEach(function (digit) {
              var prev = _this4["digit".concat(digit - 1)];

              var next = _this4["digit".concat(digit, "element")];

              console.log(next);

              _this4.allSubscriptions.add(prev.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
                if (prev.value) {
                  console.log(prev.value, prev, next); //  console.log('BeforesetTimeout');
                  //  setTimeout(() => {

                  console.log(next.nativeElement);
                  next.nativeElement.focus();
                  next.nativeElement.setSelectionRange(0, 1);
                  console.log(next.nativeElement); //  }, 5000);
                }
              })).subscribe());
            }); // If the user copy pastes the code into the first digit field
            // we'll be so kind to cut it in 6 pieces and distribute it to the right fields

            this.allSubscriptions.add(this.digit1.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (value) {
              if (value && value.length > 1) {
                var digits = value.split('').slice(0, 6);

                _this4.digit1.setValue(digits[0]);

                _this4.digit2.setValue(digits[1]);

                _this4.digit3.setValue(digits[2]);

                _this4.digit4.setValue(digits[3]);

                _this4.digit5.setValue(digits[4]);

                _this4.digit6.setValue(digits[5]);
              }
            })).subscribe());
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.allSubscriptions.unsubscribe();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (1) {
              try {
                this.digit1element.nativeElement.focus();
                console.log('Hello TRY ngAfterContentInit');
              } catch (_a) {
                console.log('Hello Catch ngAfterContentInit');
              }
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var answer, loginSucceeded;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      this.errorMessage_.next('');
                      this.busy_.next(true);
                      answer = [1, 2, 3, 4, 5, 6].map(function (digit) {
                        return _this5["digit".concat(digit)].value;
                      }).join('');
                      _context2.next = 6;
                      return this.auth.answerCustomChallenge(answer);

                    case 6:
                      loginSucceeded = _context2.sent;

                      if (loginSucceeded) {
                        this.router.navigate(['/tabs/landing']);
                      } else {
                        this.errorMessage_.next('That\'s not the right code');
                      }

                      _context2.next = 13;
                      break;

                    case 10:
                      _context2.prev = 10;
                      _context2.t0 = _context2["catch"](0);
                      this.errorMessage_.next(_context2.t0.message || _context2.t0);

                    case 13:
                      _context2.prev = 13;
                      this.busy_.next(false);
                      return _context2.finish(13);

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 10, 13, 16]]);
            }));
          }
        }]);

        return AnswerChallengePage;
      }();

      AnswerChallengePage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AnswerChallengePage.propDecorators = {
        digit1element: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['digit1el', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        digit2element: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['digit2el', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        digit3element: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['digit3el', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        digit4element: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['digit4el', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        digit5element: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['digit5el', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        digit6element: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['digit6el', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }]
      };
      AnswerChallengePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-answer-challenge',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./answer-challenge.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/answer-challenge/answer-challenge.page.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./answer-challenge.page.scss */
        "./src/app/pages/answer-challenge/answer-challenge.page.scss"))["default"]]
      })], AnswerChallengePage);
      /***/
    },

    /***/
    "./src/app/pages/cart-modal/cart-modal-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/cart-modal/cart-modal-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CartModalPageRoutingModule */

    /***/
    function srcAppPagesCartModalCartModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartModalPageRoutingModule", function () {
        return CartModalPageRoutingModule;
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


      var _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart-modal.page */
      "./src/app/pages/cart-modal/cart-modal.page.ts");

      var routes = [{
        path: '',
        component: _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__["CartModalPage"]
      }];

      var CartModalPageRoutingModule = function CartModalPageRoutingModule() {
        _classCallCheck(this, CartModalPageRoutingModule);
      };

      CartModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartModalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/cart-modal/cart-modal.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/cart-modal/cart-modal.module.ts ***!
      \*******************************************************/

    /*! exports provided: CartModalPageModule */

    /***/
    function srcAppPagesCartModalCartModalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartModalPageModule", function () {
        return CartModalPageModule;
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


      var _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart-modal-routing.module */
      "./src/app/pages/cart-modal/cart-modal-routing.module.ts");
      /* harmony import */


      var _cart_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cart-modal.page */
      "./src/app/pages/cart-modal/cart-modal.page.ts");

      var CartModalPageModule = function CartModalPageModule() {
        _classCallCheck(this, CartModalPageModule);
      };

      CartModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartModalPageRoutingModule"]],
        declarations: [_cart_modal_page__WEBPACK_IMPORTED_MODULE_6__["CartModalPage"]]
      })], CartModalPageModule);
      /***/
    },

    /***/
    "./src/app/pages/cart-modal/cart-modal.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/cart-modal/cart-modal.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesCartModalCartModalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-text {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.list {\n  margin: 3%;\n}\n\nion-content {\n  margin: 0;\n  padding: 0;\n}\n\nion-card {\n  margin: 0;\n  padding: 0;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n}\n\nion-avatar {\n  border: 3px solid white;\n}\n\n.itemDetails {\n  font-size: 10px;\n}\n\na {\n  text-decoration: underline;\n}\n\n.priceTable {\n  opacity: 50%;\n  font-size: 10px;\n  font-weight: lighter;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC1tb2RhbC9jYXJ0LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWNFO0VBQ0UsVUFBQTtBQVhKOztBQWNFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFYSjs7QUFjRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBWEo7O0FBY0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFYSjs7QUFjRTtFQUNFLHVCQUFBO0FBWEo7O0FBY0U7RUFDRSxlQUFBO0FBWEo7O0FBY0U7RUFDRSwwQkFBQTtBQVhKOztBQWNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQVhKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC1tb2RhbC9jYXJ0LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1idXR0b257XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IzBmZDE1ZDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbnRlbnR7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZClcclxuLy8gfVxyXG5cclxuLy8gaW9uLWl0ZW17XHJcbi8vICAgICAtLWJhY2tncm91bmQ6dmFyKC0tYmFja2dyb3VuZClcclxuLy8gfVxyXG5cclxuaW9uLXRleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLmxpc3R7XHJcbiAgICBtYXJnaW46IDMlO1xyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJke1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWF2YXRhcntcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuaXRlbURldGFpbHN7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNlVGFibGV7XHJcbiAgICBvcGFjaXR5OiA1MCU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICB9XHJcbiAgIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/cart-modal/cart-modal.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/cart-modal/cart-modal.page.ts ***!
      \*****************************************************/

    /*! exports provided: CartModalPage */

    /***/
    function srcAppPagesCartModalCartModalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartModalPage", function () {
        return CartModalPage;
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


      var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/cart.service */
      "./src/app/services/cart.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _med_modal_med_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../med-modal/med-modal.page */
      "./src/app/pages/med-modal/med-modal.page.ts");

      var CartModalPage = /*#__PURE__*/function () {
        function CartModalPage(cartService, modalCtrl, alertCtrl) {
          _classCallCheck(this, CartModalPage);

          this.cartService = cartService;
          this.modalCtrl = modalCtrl;
          this.alertCtrl = alertCtrl;
          this.cart = [];
          this.paymentHandler = null;
          this.setPayment = false;
        }

        _createClass(CartModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cart = this.cartService.getCart();
            this.invokeStripe();
          }
        }, {
          key: "decreaseCartItem",
          value: function decreaseCartItem(product) {
            this.cartService.decreaseProduct(product);
          }
        }, {
          key: "increaseCartItem",
          value: function increaseCartItem(product) {
            this.cartService.addProduct(product);
          }
        }, {
          key: "removeCartItem",
          value: function removeCartItem(product) {
            this.cartService.removeProduct(product);
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            return this.cart.reduce(function (i, j) {
              return i + j.price * j.amount;
            }, 0);
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          } //Payment gateway integration

        }, {
          key: "onPayClick",
          value: function onPayClick() {
            this.setPayment = true;
            console.log(this.setPayment);
          }
        }, {
          key: "makePayment",
          value: function makePayment() {
            var am = this.getTotal();
            console.log('am', am); // eslint-disable-next-line @typescript-eslint/consistent-type-assertions

            var paymentHandler = window.StripeCheckout.configure({
              key: 'pk_test_51JqTubSAZUn6C88GS5ILZDMBqPPT6muJJTGbEpEzlU75uqDp67cgfdQQ9Tmho6oiGa0Sw3Fbwe1RnbaPpaDHVz3900da13KE72',
              locale: 'auto',
              currency: 'inr',
              email: 'prathamesh@flixdrop.com',
              card: '5698478569851452',
              // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
              token: function token(stripeToken) {
                console.log(stripeToken);
                alert('Stripe token generated!');
              }
            });
            paymentHandler.open({
              name: 'Flixdrop-Medicine-Accessories',
              description: 'Medicine',
              amount: am * 100
            });
          }
        }, {
          key: "invokeStripe",
          value: function invokeStripe() {
            var _this6 = this;

            if (!window.document.getElementById('stripe-script')) {
              var script = window.document.createElement('script');
              script.id = 'stripe-script';
              script.type = 'text/javascript';
              script.src = 'https://checkout.stripe.com/checkout.js';

              script.onload = function () {
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                _this6.paymentHandler = window.StripeCheckout.configure({
                  key: 'pk_test_51JqTubSAZUn6C88GS5ILZDMBqPPT6muJJTGbEpEzlU75uqDp67cgfdQQ9Tmho6oiGa0Sw3Fbwe1RnbaPpaDHVz3900da13KE72',
                  locale: 'auto',
                  currency: 'inr',
                  email: 'prathamesh@flixdrop.com',
                  card: '5698478569851452',
                  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                  token: function token(stripeToken) {
                    console.log(stripeToken);
                    alert('Payment has been successfull!');
                  }
                });
              };

              window.document.body.appendChild(script);
            }
          }
        }, {
          key: "checkout",
          value: function checkout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }, {
          key: "medModal",
          value: function medModal(product) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalCtrl.create({
                        component: _med_modal_med_modal_page__WEBPACK_IMPORTED_MODULE_4__["MedModalPage"],
                        cssClass: "cart-modal",
                        componentProps: {
                          'name': product.name,
                          'image': product.image,
                          'price': product.price
                        }
                      });

                    case 2:
                      modal = _context4.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            console.log("Begin async operation");
            setTimeout(function () {
              console.log("Async operation has ended");
              event.target.complete();
            }, 2500);
          }
        }]);

        return CartModalPage;
      }();

      CartModalPage.ctorParameters = function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      CartModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart-modal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart-modal/cart-modal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart-modal.page.scss */
        "./src/app/pages/cart-modal/cart-modal.page.scss"))["default"]]
      })], CartModalPage);
      /***/
    },

    /***/
    "./src/app/pages/med-modal/med-modal.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/med-modal/med-modal.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesMedModalMedModalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-thumbnail {\n  width: 100%;\n  height: 100%;\n}\n\nion-card {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVkLW1vZGFsL21lZC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lZC1tb2RhbC9tZWQtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRodW1ibmFpbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/med-modal/med-modal.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/med-modal/med-modal.page.ts ***!
      \***************************************************/

    /*! exports provided: MedModalPage */

    /***/
    function srcAppPagesMedModalMedModalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedModalPage", function () {
        return MedModalPage;
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

      var MedModalPage = /*#__PURE__*/function () {
        function MedModalPage(modalController) {
          _classCallCheck(this, MedModalPage);

          this.modalController = modalController;
        }

        _createClass(MedModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('name- ', this.name);
            console.log('image- ', this.image);
            console.log('price- ', this.price);
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            // using the injected ModalController this page
            // can "dismiss" itself and optionally pass back data
            this.modalController.dismiss({
              'dismissed': true
            });
          }
        }]);

        return MedModalPage;
      }();

      MedModalPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      MedModalPage.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        price: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      MedModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-med-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./med-modal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/med-modal/med-modal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./med-modal.page.scss */
        "./src/app/pages/med-modal/med-modal.page.scss"))["default"]]
      })], MedModalPage);
      /***/
    },

    /***/
    "./src/app/seller-form.pipe.ts":
    /*!*************************************!*\
      !*** ./src/app/seller-form.pipe.ts ***!
      \*************************************/

    /*! exports provided: SellerFormPipe */

    /***/
    function srcAppSellerFormPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerFormPipe", function () {
        return SellerFormPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SellerFormPipe = /*#__PURE__*/function () {
        function SellerFormPipe() {
          _classCallCheck(this, SellerFormPipe);
        }

        _createClass(SellerFormPipe, [{
          key: "transform",
          value: function transform(value) {
            return null;
          }
        }]);

        return SellerFormPipe;
      }();

      SellerFormPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sellerForm'
      })], SellerFormPipe);
      /***/
    },

    /***/
    "./src/app/services/auth.guard.ts":
    /*!****************************************!*\
      !*** ./src/app/services/auth.guard.ts ***!
      \****************************************/

    /*! exports provided: AuthGuard, IsAuthenticated, IsNotAuthenticated */

    /***/
    function srcAppServicesAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsAuthenticated", function () {
        return IsAuthenticated;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IsNotAuthenticated", function () {
        return IsNotAuthenticated;
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts"); // import { Injectable } from '@angular/core';
      // import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
      // import { Observable } from 'rxjs';
      // import { AuthService } from './auth.service';
      // @Injectable({
      //   providedIn: 'root'
      // })
      // export class AuthGuard implements CanActivate {
      //   constructor(private auth: AuthService, private router: Router){}
      //   canActivate(){
      //     if(this.auth.isLoggedIn()){
      //       return true;
      //     }
      //     this.router.navigate(['/login']);
      //     return false;
      //     }
      // }


      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard() {
          _classCallCheck(this, AuthGuard);
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);

      var IsAuthenticated = /*#__PURE__*/function () {
        function IsAuthenticated(auth, router) {
          _classCallCheck(this, IsAuthenticated);

          this.auth = auth;
          this.router = router;
        }

        _createClass(IsAuthenticated, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.auth.isAuthenticated();

                    case 2:
                      if (!_context5.sent) {
                        _context5.next = 4;
                        break;
                      }

                      return _context5.abrupt("return", true);

                    case 4:
                      this.router.navigate(['/login']);
                      return _context5.abrupt("return", false);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return IsAuthenticated;
      }();

      IsAuthenticated.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      IsAuthenticated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], IsAuthenticated);

      var IsNotAuthenticated = /*#__PURE__*/function () {
        function IsNotAuthenticated(auth, router) {
          _classCallCheck(this, IsNotAuthenticated);

          this.auth = auth;
          this.router = router;
        }

        _createClass(IsNotAuthenticated, [{
          key: "canActivate",
          value: function canActivate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.auth.isAuthenticated();

                    case 2:
                      if (_context6.sent) {
                        _context6.next = 4;
                        break;
                      }

                      return _context6.abrupt("return", true);

                    case 4:
                      this.router.navigateByUrl('/tabs/landing');
                      return _context6.abrupt("return", false);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return IsNotAuthenticated;
      }();

      IsNotAuthenticated.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      IsNotAuthenticated = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], IsNotAuthenticated);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! aws-amplify */
      "./node_modules/aws-amplify/lib-esm/index.js"); // import { Injectable } from '@angular/core';
      // @Injectable({
      //   providedIn: 'root'
      // })
      // export class AuthService {
      //   constructor() { }
      //   isLoggedIn(){
      //     return !!localStorage.getItem("isLoggedIn");
      //   }
      // }


      var AuthService = /*#__PURE__*/function () {
        function AuthService(document) {
          _classCallCheck(this, AuthService);

          this.document = document;
          this.window = this.document.defaultView;
        }

        _createClass(AuthService, [{
          key: "signIn",
          value: function signIn(sms) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      console.log('Service', sms, aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"]);
                      _context7.next = 3;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signIn(sms);

                    case 3:
                      this.cognitoUser = _context7.sent;
                      console.log('Service this.cognitoUser', this.cognitoUser);

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut();

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));
          }
        }, {
          key: "answerCustomChallenge",
          value: function answerCustomChallenge(answer) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].sendCustomChallengeAnswer(this.cognitoUser, answer);

                    case 2:
                      this.cognitoUser = _context9.sent;
                      return _context9.abrupt("return", this.isAuthenticated());

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "getPublicChallengeParameters",
          value: function getPublicChallengeParameters() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      return _context10.abrupt("return", this.cognitoUser.challengeParam);

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "signUp",
          value: function signUp(sms, fullName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var params;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      params = {
                        username: sms,
                        password: this.getRandomString(30),
                        attributes: {
                          name: fullName
                        }
                      };
                      _context11.next = 3;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp(params);

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "getRandomString",
          value: function getRandomString(bytes) {
            var randomValues = new Uint8Array(bytes);
            this.window.crypto.getRandomValues(randomValues);
            return Array.from(randomValues).map(this.intToHex).join('');
          }
        }, {
          key: "intToHex",
          value: function intToHex(nr) {
            return nr.toString(16).padStart(2, '0');
          } // eslint-disable-next-line @typescript-eslint/member-ordering

        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;
                      _context12.next = 3;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentSession();

                    case 3:
                      return _context12.abrupt("return", true);

                    case 6:
                      _context12.prev = 6;
                      _context12.t0 = _context12["catch"](0);
                      return _context12.abrupt("return", false);

                    case 9:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, null, [[0, 6]]);
            }));
          } // eslint-disable-next-line @typescript-eslint/member-ordering

        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (this.cognitoUser) {
                        _context13.next = 4;
                        break;
                      }

                      _context13.next = 3;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser();

                    case 3:
                      this.cognitoUser = _context13.sent;

                    case 4:
                      _context13.next = 6;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].userAttributes(this.cognitoUser);

                    case 6:
                      return _context13.abrupt("return", _context13.sent);

                    case 7:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/services/cart.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/cart.service.ts ***!
      \******************************************/

    /*! exports provided: CartService */

    /***/
    function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var CartService = /*#__PURE__*/function () {
        function CartService() {
          _classCallCheck(this, CartService);

          this.data = [{
            id: 0,
            name: 'Medicine1',
            price: 120,
            image: '../../assets/products/medicine1.jpg',
            amount: 0
          }, {
            id: 1,
            name: 'Medicine2',
            price: 150,
            image: '../../assets/products/medicine2.jpg',
            amount: 0
          }, {
            id: 2,
            name: 'Medicine3',
            price: 100,
            image: '../../assets/products/medicine3.jpg',
            amount: 0
          }, {
            id: 3,
            name: 'Medicine4',
            price: 200,
            image: '../../assets/products/medicine4.jpg',
            amount: 0
          }];
          this.cart = [];
          this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        }

        _createClass(CartService, [{
          key: "getProducts",
          value: function getProducts() {
            return this.data;
          }
        }, {
          key: "getCart",
          value: function getCart() {
            return this.cart;
          }
        }, {
          key: "getCartItemCount",
          value: function getCartItemCount() {
            return this.cartItemCount;
          }
        }, {
          key: "addProduct",
          value: function addProduct(product) {
            var added = false;

            var _iterator = _createForOfIteratorHelper(this.cart),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var p = _step.value;

                if (p.id === product.id) {
                  p.amount += 1;
                  added = true;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (!added) {
              product.amount = 1;
              this.cart.push(product);
            }

            this.cartItemCount.next(this.cartItemCount.value + 1);
          }
        }, {
          key: "decreaseProduct",
          value: function decreaseProduct(product) {
            var _iterator2 = _createForOfIteratorHelper(this.cart.entries()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _step2$value = _slicedToArray(_step2.value, 2),
                    index = _step2$value[0],
                    p = _step2$value[1];

                if (p.id === product.id) {
                  p.amount -= 1;

                  if (p.amount == 0) {
                    this.cart.splice(index, 1);
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.cartItemCount.next(this.cartItemCount.value - 1);
          }
        }, {
          key: "removeProduct",
          value: function removeProduct(product) {
            var _iterator3 = _createForOfIteratorHelper(this.cart.entries()),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _step3$value = _slicedToArray(_step3.value, 2),
                    index = _step3$value[0],
                    p = _step3$value[1];

                if (p.id === product.id) {
                  this.cartItemCount.next(this.cartItemCount.value - p.amount);
                  this.cart.splice(index, 1);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "getTodaysOffers",
          value: function getTodaysOffers() {
            var todaysOffers = [];
            var cat1 = {
              id: 1,
              name: '',
              image: '../../assets/product-slider/prod-slide3.jpg'
            };
            var cat2 = {
              id: 2,
              name: '',
              image: '../../assets/product-slider/prod-slide3.jpg'
            };
            var cat3 = {
              id: 3,
              name: '',
              image: '../../assets/product-slider/prod-slide3.jpg'
            };
            todaysOffers.push(cat1, cat2, cat3);
            return todaysOffers;
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var categories = [];
            var cat1 = {
              id: 1,
              name: 'Cows',
              image: '../../assets/categories/category-1.png'
            };
            var cat2 = {
              id: 2,
              name: 'Goats',
              image: '../../assets/categories/category-2.png'
            };
            var cat3 = {
              id: 3,
              name: 'Buffalos',
              image: '../../assets/categories/category-3.png'
            };
            categories.push(cat1, cat2, cat3);
            return categories;
          }
        }, {
          key: "getFeaturedProducts",
          value: function getFeaturedProducts() {
            var products = [];
            var prod1 = {
              id: 1,
              name: 'Heifer',
              price: 55000,
              image: '../../assets/products/prod-1.png'
            };
            var prod2 = {
              id: 2,
              name: 'Ox',
              price: 140000,
              image: '../../assets/products/prod-2.png'
            };
            var prod3 = {
              id: 1,
              name: 'Goat',
              price: 20000,
              image: '../../assets/products/prod-3.png'
            };
            products.push(prod1, prod2, prod3);
            return products;
          }
        }, {
          key: "getBestSellProducts",
          value: function getBestSellProducts() {
            var products = [];
            var prod1 = {
              id: 1,
              name: 'Cow',
              price: 55000,
              image: '../../assets/products/prod-4.png'
            };
            var prod2 = {
              id: 2,
              name: 'Buffalo',
              price: 34000,
              image: '../../assets/products/prod-5.png'
            };
            var prod3 = {
              id: 1,
              name: 'Ox',
              price: 40000,
              image: '../../assets/products/prod-6.png'
            };
            products.push(prod1, prod2, prod3);
            return products;
          }
        }]);

        return CartService;
      }();

      CartService.ctorParameters = function () {
        return [];
      };

      CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CartService);
      /***/
    },

    /***/
    "./src/app/services/login.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/login.service.ts ***!
      \*******************************************/

    /*! exports provided: LoginService */

    /***/
    function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(http) {
          _classCallCheck(this, LoginService);

          this.http = http; //private baseUrl = 'http://localhost:8080/api/v1/otp/';

          this.baseUrl = 'http://loginotp-env.eba-2hxmjsnv.ap-south-1.elasticbeanstalk.com/api/otp/';
        } //PostRequest to generate OTP


        _createClass(LoginService, [{
          key: "generateOtp",
          value: function generateOtp(username, mobilenumber) {
            var headers = {
              'content-type': 'application/json'
            };
            var body = JSON.stringify({
              name: username,
              phone: mobilenumber
            });
            console.log('Body', body);
            return this.http.post(this.baseUrl + 'generate', body, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "validateOtp",
          value: function validateOtp(username, mobilenumber, otpreceived) {
            var headers = {
              'content-type': 'application/json'
            };
            var body = JSON.stringify({
              name: username,
              phone: mobilenumber,
              otp: otpreceived
            });
            console.log('Body', body);
            return this.http.post(this.baseUrl + 'validate', body, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 0) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error("Backend returned code ".concat(error.status, ", body was: "), error.error);
            } // Return an observable with a user-facing error message.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
          }
        }]);

        return LoginService;
      }();

      LoginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LoginService);
      /***/
    },

    /***/
    "./src/app/signup/signup-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/signup/signup.page.ts");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      };

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/signup/signup.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "./src/app/signup/signup-routing.module.ts");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/signup/signup.page.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var SignupPageModule = function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      };

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "./src/app/signup/signup.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --border-width: 0 !important;\n}\n\n.header-md::after {\n  background: none !important;\n}\n\n.container h1 {\n  margin-top: 0;\n}\n\n.backbtn {\n  margin-left: 20px;\n}\n\n.form-container {\n  margin-top: 48px;\n}\n\n.form-container ion-item {\n  --padding-start: 0;\n  --border-color: #40454d;\n}\n\n.form-container ion-item ion-label {\n  color: #A6A6A6;\n}\n\n.form-container ion-item ion-icon {\n  margin-top: auto;\n  color: #40454d;\n}\n\n.form-container ion-button {\n  margin-top: 48px;\n}\n\n.sign-up {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sign-up ion-button {\n  margin: 0;\n}\n\nion-input {\n  color: #dddcdc;\n}\n\nion-card {\n  --background:#36363F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw0QkFBQTtBQUFKOztBQUlBO0VBQ0ksMkJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFNBQUE7QUFESjs7QUFHQTtFQUNJLGNBQUE7QUFBSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgd2lsbCByZW1vdmUgaU9TIEhlYWRlciBMaW5lXG5pb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuLy8gUmVtb3ZpbmcgQW5kcm9pZCBIZWFkZXIgTGluZVxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciBoMSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmJhY2tidG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDQ4cHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjNDA0NTRkO1xufVxuXG4uZm9ybS1jb250YWluZXIgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgICBjb2xvcjogI0E2QTZBNjtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGNvbG9yOiAjNDA0NTRkO1xufVxuXG4uZm9ybS1jb250YWluZXIgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNDhweDtcbn1cblxuLnNpZ24tdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNpZ24tdXAgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwO1xufVxuaW9uLWlucHV0e1xuICAgIGNvbG9yOiAjZGRkY2RjO1xufVxuaW9uLWNhcmR7XG4gICAgLS1iYWNrZ3JvdW5kOiMzNjM2M0Y7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/signup/signup.page.ts":
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /*! exports provided: SignupPage */

    /***/
    function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(router, auth) {
          _classCallCheck(this, SignupPage);

          this.router = router;
          this.auth = auth;
          this.sms = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
          this.fullName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
          this.busy_ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
          this.busy = this.busy_.asObservable();
          this.errorMessage_ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
          this.errorMessage = this.errorMessage_.asObservable();
        }

        _createClass(SignupPage, [{
          key: "signup",
          value: function signup() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.errorMessage_.next('');
                      this.busy_.next(true);
                      _context14.prev = 2;
                      _context14.next = 5;
                      return this.auth.signUp(this.sms.value, this.fullName.value);

                    case 5:
                      _context14.next = 7;
                      return this.auth.signIn(this.sms.value);

                    case 7:
                      this.router.navigate(['/answer-challenge']);
                      _context14.next = 14;
                      break;

                    case 10:
                      _context14.prev = 10;
                      _context14.t0 = _context14["catch"](2);
                      console.log(_context14.t0);
                      this.errorMessage_.next(_context14.t0.message || _context14.t0);

                    case 14:
                      _context14.prev = 14;
                      this.busy_.next(false);
                      return _context14.finish(14);

                    case 17:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this, [[2, 10, 14, 17]]);
            }));
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signup.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./signup.page.scss */
        "./src/app/signup/signup.page.scss"))["default"]]
      })], SignupPage);
      /***/
    },

    /***/
    "./src/app/util.service.ts":
    /*!*********************************!*\
      !*** ./src/app/util.service.ts ***!
      \*********************************/

    /*! exports provided: UtilService */

    /***/
    function srcAppUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilService", function () {
        return UtilService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var UtilService = /*#__PURE__*/function () {
        function UtilService() {
          _classCallCheck(this, UtilService);

          this.isMenuEnabled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        } // Creating method to handle Side Menu State (Enabled or Disabeld)


        _createClass(UtilService, [{
          key: "setMenuState",
          value: function setMenuState(enabled) {
            this.isMenuEnabled.next(enabled);
          } // Method for get the Menu State

        }, {
          key: "getMenuState",
          value: function getMenuState() {
            return this.isMenuEnabled;
          }
        }]);

        return UtilService;
      }();

      UtilService.ctorParameters = function () {
        return [];
      };

      UtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UtilService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        region: 'ap-south-1',
        userPoolId: 'ap-south-1_n3TvdnvWf',
        userPoolWebClientId: '7e3uugo9ggktsv6nrcmlethb1r'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var aws_amplify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! aws-amplify */
      "./node_modules/aws-amplify/lib-esm/index.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      aws_amplify__WEBPACK_IMPORTED_MODULE_4__["default"].configure({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Auth: {
          region: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].region,
          userPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userPoolId,
          userPoolWebClientId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userPoolWebClientId
        }
      });
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\flixd\Documents\GitHub\mrgami\src\main.ts */
      "./src/main.ts");
      /***/
    },

    /***/
    1:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map