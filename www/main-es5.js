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


      __webpack_exports__["default"] = "<ion-app class=\"app\">\r\n  <ion-split-pane contentId=\"main-content\" when=\"sm md lg xl\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\" [disabled]=\"!isMenuEnabled\">\r\n      <ion-header>\r\n        <ion-toolbar color=\"danger\">\r\n          <ion-buttons (click)=\"close()\" class=\"btn-shape\" slot=\"start\">\r\n              <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\r\n              <ion-label color=\"danger\">BACK</ion-label>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content class=\"content\">\r\n          <ion-list class=\"main-list\">\r\n            <ion-menu-toggle auto-hide=\"false\">\r\n              <ion-item lines=\"full\" (click)=\"navigate('/tabs/home', 1)\" detail=\"false\" class=\"ion-text-center\"\r\n                [class.selected]=\"selectedIndex == 1\">\r\n                <ion-icon color=\"medium\" name=\"home\"></ion-icon>\r\n                <ion-text color=\"medium\">{{doTranslation('HOME')}}</ion-text>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle auto-hide=\"false\">\r\n              <ion-item lines=\"full\" (click)=\"navigate('/tabs/profile', 2)\" detail=\"false\" class=\"ion-text-center\"\r\n                [class.selected]=\"selectedIndex == 2\">\r\n                <ion-icon color=\"medium\" name=\"person-sharp\"></ion-icon>\r\n                <ion-text color=\"medium\">{{doTranslation('PROFILE')}}</ion-text>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle auto-hide=\"false\">\r\n              <ion-item lines=\"full\" (click)=\"navigate('/tabs/my-cart', 3)\" detail=\"false\" class=\"ion-text-center\"\r\n                [class.selected]=\"selectedIndex == 3\">\r\n                <ion-icon size=\"large\" color=\"medium\" name=\"cart-sharp\"></ion-icon>\r\n                <ion-text color=\"medium\">{{doTranslation('MY CART')}}</ion-text>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle auto-hide=\"false\">\r\n              <ion-item lines=\"full\" (click)=\"navigate('/tabs/favorite', 4)\" detail=\"false\" class=\"ion-text-center\"\r\n                [class.selected]=\"selectedIndex == 4\">\r\n                <ion-icon color=\"medium\" name=\"star\"></ion-icon>\r\n                <ion-text color=\"medium\">{{doTranslation('FAVORITES')}}</ion-text>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n            <ion-menu-toggle auto-hide=\"false\">\r\n              <ion-item lines=\"none\" (click)=\"navigate('/tabs/my-orders', 5)\" detail=\"false\" class=\"ion-text-center\"\r\n                [class.selected]=\"selectedIndex == 5\">\r\n                <ion-icon color=\"medium\" name=\"card\"></ion-icon>\r\n                <ion-text color=\"medium\">{{doTranslation('ORDERS')}}</ion-text>\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n          </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n\r\n";
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


      __webpack_exports__["default"] = "<ion-header class=\"ion-padding header\">\r\n  <ion-toolbar class=\"header\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <ion-icon size=\"large\" name=\"menu\" color=\"danger\"></ion-icon>\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-searchbar slot=\"start\" placeholder=\"{{doTranslation('Search Cattles')}}\" mode=\"md\" color=\"none\"></ion-searchbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon size=\"large\" slot=\"end\" name=\"notifications\" color=\"danger\"></ion-icon>\r\n      <ion-icon *ngIf=\"isAuthenticated !== undefined\" size=\"large\" slot=\"end\" color=\"danger\" name=\"log-out\" (click)=\"onClickLogout()\"></ion-icon>\r\n    </ion-buttons>   \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-button size=\"large\" slot=\"end\" class=\"notification\" color=\"none\" fill=\"clear\"> -->\r\n  <!-- <span>&nbsp;</span> -->\r\n<!-- </ion-button> -->\r\n<!-- <ion-buttons slot=\"start\">\r\n  <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\r\n  </ion-button>\r\n</ion-buttons> -->\r\n<!-- <ion-buttons>\r\n  <ion-button>\r\n    <ion-icon name=\"search-outline\" color=\"dark\"></ion-icon>\r\n  </ion-button>\r\n</ion-buttons> -->\r\n<!-- <ion-content>\r\n   <ion-grid>\r\n     <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button class=\"curved\" (click)=goToBuy()><img src=\"../../assets/icon/sell-cow-icon.png\" width= \"90px\"\r\n          height=\" 90px\"></ion-button>\r\n       </ion-col>\r\n       <ion-col size=\"6\">\r\n         <ion-button class=\"curved\" (click)=goToMedicine()><img src=\"../../assets/icon/cow-medicine.png\" width= \"90px\"\r\n          height=\" 90px\"></ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n      <ion-col size=\"6\">\r\n       <ion-button class=\"curved\" (click)=goToFeed()><img src=\"../../assets/icon/animal-feed.png\" width= \"90px\"\r\n        height=\" 90px\"></ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button class=\"curved\" (click)=goToSemen()><img src=\"../../assets/icon/cow-semen.png\" width= \"90px\"\r\n          height=\" 90px\"></ion-button>\r\n       </ion-col>\r\n     </ion-row>\r\n   </ion-grid>\r\n   <div class=\"category-slider ion-padding-start\">\r\n    <ion-slides [options]=\"{ slidesPerView: 'auto', zoom: false, grabCursor: true }\">\r\n      <ion-slide *ngFor=\"let category of categories\">\r\n        <ion-col>\r\n          <h4>{{ category.name }}</h4>\r\n          <img src=\"{{ category.image }}\" />\r\n        </ion-col>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content> -->\r\n\r\n<ion-content class=\"content-color\" [fullscreen]=\"true\">\r\n  <!-- <div class=\"background\"> -->\r\n  <ion-grid class=\"background mobile-view\">\r\n    <ion-toolbar class=\"top-space\" color=\"none\">\r\n      <ion-button class=\"glow-on-hover\" size=\"large\" expand=\"block\" (click)=\"recordAudio()\">\r\n        <ion-label color=\"danger\">{{doTranslation('FREE VET DOCTOR 24/7')}}</ion-label>\r\n      </ion-button>\r\n    </ion-toolbar>\r\n\r\n  <div class=\"vertical-flex\">\r\n    <ion-row (click)=\"goToBuy()\" class=\"row-size-bigbtn gradient\">\r\n      <ion-col class=\"button-img\" size=\"8\" style=\"background-image: url('../../assets/icon/sell-cow-icon.png');\">\r\n      </ion-col>\r\n      <ion-col class=\"vertical-flex\" size=\"4\">\r\n          <ion-label class=\"green\">{{doTranslation('BUY/SELL')}}</ion-label>\r\n          <ion-label class=\" white\">{{doTranslation('ANIMAL')}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <div class=\"inline-flex\">\r\n    <ion-row class=\"row-size gradient\">\r\n      <ion-col class=\"bottom-center button-img\" (click)=\"goToFeed()\" size=\"12\" style=\"background-image: url('../../assets/icon/animal-feed.png');\">\r\n        <ion-label class=\"green\">{{doTranslation('VET')}}</ion-label>\r\n        <ion-label class=\"white\">{{doTranslation('FEED')}}</ion-label>\r\n      </ion-col>\r\n     \r\n      <!-- <ion-col size=\"6\" class=\"vertical-flex\">\r\n        <ion-label class=\"green\">VET</ion-label>\r\n        <ion-label class=\"white\">FEED</ion-label>\r\n      </ion-col> -->\r\n    </ion-row>\r\n    <ion-row class=\"row-size gradient\">\r\n        <ion-col class=\"bottom-center button-img\" (click)=\"goToMedicine()\" size=\"12\" style=\"background-image: url('../../assets/icon/cow-medicine.png');\">\r\n          <ion-label class=\"green\">{{doTranslation('VET')}}</ion-label>\r\n            <ion-label class=\"white\">{{doTranslation('MEDICINE')}}</ion-label>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"6\" class=\"vertical-flex\">\r\n            <ion-label class=\"green\">VET</ion-label>\r\n            <ion-label class=\"white\">MEDICINE</ion-label>\r\n        </ion-col> -->\r\n    </ion-row>\r\n  </div>\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"background top-space web-view\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n        <ion-toolbar class=\"searchbar-webview\" color=\"none\">\r\n          <ion-searchbar class=\"searchbar\" slot=\"start\" placeholder=\"Search Cattles\" mode=\"md\" color=\"none\"></ion-searchbar>\r\n        </ion-toolbar>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    \r\n      <ion-row (click)=\"goToBuy()\" class=\"row-size-bigbtn gradient\">\r\n        <ion-col class=\"button-img\" size=\"8\" style=\"background-image: url('../../assets/icon/sell-cow-icon.png');\">\r\n        </ion-col>\r\n        <ion-col class=\"vertical-flex\" size=\"4\">\r\n          <ion-label class=\"green\">{{doTranslation('BUY/SELL')}}</ion-label>\r\n          <ion-label class=\" white\">{{doTranslation('ANIMAL')}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row class=\"row-size gradient\">\r\n        <ion-col class=\"button-img\" (click)=\"goToFeed()\" size=\"8\" style=\"background-image: url('../../assets/icon/animal-feed.png');\">\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"vertical-flex\">\r\n          <ion-label class=\"green\">{{doTranslation('VET')}}</ion-label>\r\n        <ion-label class=\"white\">{{doTranslation('FEED')}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"row-size gradient\">\r\n          <ion-col class=\"button-img\" (click)=\"goToMedicine()\" size=\"8\" style=\"background-image: url('../../assets/icon/cow-medicine.png');\">\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"vertical-flex\">\r\n            <ion-label class=\"green\">{{doTranslation('VET')}}</ion-label>\r\n            <ion-label class=\"white\">{{doTranslation('MEDICINE')}}</ion-label>\r\n          </ion-col>\r\n      </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"offer-card-margin\">\r\n    <ion-row>\r\n      <ion-col class=\"inline-flex\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n  <ion-toolbar class=\"inline-flex\" color=\"none\">\r\n      <ion-chip color=\"none\">\r\n        <ion-icon size=\"large\" name=\"alarm-sharp\" color=\"medium\"></ion-icon>\r\n        <ion-label class=\"text-shadow\" color=\"medium\">{{doTranslation(\"TODAY's OFFERS\")}}</ion-label>\r\n      </ion-chip>\r\n  </ion-toolbar>\r\n</ion-col>\r\n</ion-row>\r\n<ion-row>\r\n  <ion-col class=\"inline-flex\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n    <ion-card class=\"custom-card\">\r\n      <ion-slides #slides [options]=\"slideOpts\">\r\n        <ion-slide *ngFor=\"let img of images; let i=index\">\r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col class=\"vertical-flex gradient offer-img-bg\" size=\"12\">\r\n                  <ion-img src=\"{{img}}\" class=\"img\"></ion-img>\r\n                  <ion-label class=\"white\">{{doTranslation('Offer Details')}}</ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n              <!-- <ion-row>\r\n                <ion-col class=\"vertical-flex\" size=\"12\">\r\n                </ion-col>\r\n              </ion-row> -->\r\n            </ion-grid>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </ion-card>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n\r\n<ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" translucent=\"true\">\r\n  <ion-fab-button size=\"large\" (click)=\"onClickChatbot()\" color=\"success\">\r\n    <ion-icon size=\"large\" name=\"logo-android\" color=\"dark\"></ion-icon></ion-fab-button>\r\n    <ion-label class=\"center\" color=\"success\">{{doTranslation('HELP')}}</ion-label>\r\n</ion-fab>\r\n<!-- </div> -->\r\n</ion-content>\r\n<!-- \r\n<ion-footer>\r\n  <ion-toolbar color=\"none\">\r\n    <ion-button size=\"large\" expand=\"full\" color=\"light\" (click)=\"recordAudio()\">\r\n      <ion-label color=\"danger\">FREE VET DOCTOR 24/7</ion-label>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer> -->\r\n\r\n<!-- <ion-card class=\"card\">\r\n     <ion-card-title>Today's Offers</ion-card-title>\r\n    <ion-slides pager=\"false\" class=\"product-slider\">\r\n      <ion-slide>\r\n        <img src=\"../../assets/product-slider/prod-slide1.jpg\" height=\"100px\"/>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <img src=\"../../assets/product-slider/prod-slide1.jpg\" height=\"100px\"/>\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <img src=\"../../assets/product-slider/prod-slide1.jpg\" height=\"100px\"/>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    </ion-card> -->\r\n<!-- <ion-slides pager=\"true\" class=\"product-slider\">\r\n    <ion-slide>\r\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"../../assets/product-slider/prod-slide1.png\" />\r\n    </ion-slide>\r\n  </ion-slides> -->\r\n<!-- <div class=\"seperator\">\r\n    <hr>\r\n  </div>\r\n  <div class=\"ion-padding-vertical-custom\">\r\n    \r\n    <h4 class=\"price\">\r\n      Rs 40000\r\n      <span class=\"real-price\">Rs 80000</span>\r\n    </h4>\r\n  </div>\r\n\r\n  <div class=\"seperator\">\r\n    <hr>\r\n  </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"variation\">\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"size\">\r\n      <ion-segment-button value=\"size\">\r\n        <ion-label>Select Size</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"color\">\r\n        <ion-label>Select Color</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n\r\n  <div class=\"seperator\">\r\n    <hr>\r\n  </div>\r\n\r\n  <div class=\"variation-selector\">\r\n    <div class=\"sizes\" [class.active-variation]=\"activeVariation == 'size'\">\r\n      <div [class.active]=\"selectedSize == 1\" (click)=\"changeSize(1)\">\r\n        S\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 2\" (click)=\"changeSize(2)\">\r\n        M\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 3\" (click)=\"changeSize(3)\">\r\n        L\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 4\" (click)=\"changeSize(4)\">\r\n        XL\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"colors\" [class.active-variation]=\"activeVariation == 'color'\">\r\n      <div [class.active]=\"selectedColor == 1\" (click)=\"changeColor(1)\">\r\n        BLACK\r\n      </div>\r\n      <div [class.active]=\"selectedColor == 2\" (click)=\"changeColor(2)\">\r\n        GREEN\r\n      </div>\r\n      <div [class.active]=\"selectedColor == 3\" (click)=\"changeColor(3)\">\r\n        BLUE\r\n      </div>\r\n    </div>\r\n  </div> -->";
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


      __webpack_exports__["default"] = "<!-- <ion-content class=\"ion-padding\">\r\n  <div class=\"ion-padding container\">\r\n    <h1>Login</h1>\r\n\r\n    <div class=\"form-container\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Password</ion-label>\r\n        <ion-input type=\"password\"></ion-input>\r\n        <ion-icon name=\"eye\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-button expand=\"block\" class=\"main-button\" (click)=\"login()\">Log in</ion-button>\r\n\r\n      <div class=\"sign-up\">\r\n        Don't have an account? <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/signup\" routerDirection=\"forward\">Sign up</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content> -->\r\n\r\n\r\n<!-- <div class=\"container\">\r\n<ion-card class=\"card-center\">\r\n  <ng-otp-input  (onInputChange)=\"onOtpChange($event)\"  [config]=\"{length:5}\"></ng-otp-input>\r\n<ion-item>\r\n<ion-button  color=\"primary\">Click Me</ion-button>\r\n</ion-item>\r\n</ion-card>\r\n<button class=\"btn btn-success\">\r\n  Click Me\r\n</button>\r\n</div> -->\r\n\r\n<!-- <div class=\"card\" style=\"width: 80%;margin: 200px 30px 30px 150px;\">\r\n<div class=\"card-center\" >\r\n  <div>\r\n    <h5  >Login</h5>\r\n    <p >Resend Otp?</p>\r\n    <ng-otp-input  (onInputChange)=\"onOtpChange($event)\"  [config]=\"{length:5}\"></ng-otp-input>\r\n    <ion-button  color=\"primary\">Click Me</ion-button>\r\n  </div>\r\n\r\n</div>\r\n\r\n</div> -->\r\n\r\n<!-- <ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n  \r\n    <ion-row *ngIf='!isNumberSubmitted'>\r\n      <ion-col size=\"12\" class=\"center\">\r\n        <ion-toolbar>\r\n          <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">NAME</ion-label>\r\n            <ion-input [(ngModel)]='name'></ion-input>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf='!isNumberSubmitted'>\r\n      <ion-col size=\"12\" class=\"center\">\r\n        <ion-toolbar>\r\n          <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">PHONE NO.</ion-label>\r\n            <ion-input [(ngModel)]='inputNumber'></ion-input>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf='!isNumberSubmitted'>\r\n      <ion-col size=\"12\" class=\"center\">\r\n        <ion-toolbar>\r\n          <ion-button expand=\"block\" (click)=\"onNumberSubmitted()\" color=\"medium\">LOGIN WITH OTP</ion-button>\r\n        </ion-toolbar>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf='isNumberSubmitted'>\r\n      <ion-col size=\"12\" class=\"center\">\r\n            <ng-otp-input (onInputChange)=\"onOtpChange($event)\" [config]=\"{length:6}\"></ng-otp-input>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf='isNumberSubmitted'>\r\n      <ion-col size=\"12\" class=\"center\">\r\n        <ion-toolbar>\r\n          <ion-button expand=\"block\" (click)=\"onLogin()\" color=\"medium\">LOGIN</ion-button>\r\n        </ion-toolbar>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\">\r\n        <ion-item class=\"center\" lines=\"none\" color=\"none\">\r\n          <ion-icon size=\"large\" name=\"logo-google\" color=\"medium\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item class=\"center\" lines=\"none\" color=\"none\">\r\n          <ion-icon size=\"large\" name=\"logo-facebook\" color=\"medium\"></ion-icon>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\">\r\n          <ion-button fill=\"clear\" expand=\"block\" routerLink=\"/tabs/landing\" color=\"medium\" routerDirection=\"forward\">Skip now<ion-icon size=\"large\" slot=\"end\" name=\"log-in-outline\"></ion-icon></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content> -->\r\n\r\n<!-- <ion-card class=\"background_1\"></ion-card>\r\n<ion-card class=\"background_2\"></ion-card> -->\r\n<!-- <ion-content class=\"content\">\r\n\r\n</ion-content> -->\r\n<!-- <img class=\"content-bg\" src=\"../../assets/bg_1.png\"/> -->\r\n<!-- <img class=\"card-img\" src=\"../../assets/bg_2.png\"/> -->\r\n<!-- <ion-img class=\"card-img\" src=\"../../assets/bg_2.png\"></ion-img> -->\r\n<!-- <ion-toolbar class=\"title-toolbar\">\r\n  <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n  <ion-label>Sign In</ion-label>\r\n</ion-toolbar> -->\r\n\r\n<ion-content class=\"card-color\">\r\n  <div class=\"div vertical-center\">\r\n    <!-- <ion-thumbnail> -->\r\n      <img src=\"../../assets/welcome.png\" />\r\n    <!-- </ion-thumbnail> -->\r\n    <ion-grid class=\"content vertical-center\">\r\n    <ion-row>\r\n      <ion-col class=\"vertical-center phno\" size=\"12\">\r\n            <ion-label color=\"tertiary\">{{doTranslation('Phone Number')}}</ion-label>\r\n            <ion-item lines=\"full\" color=\"none\">\r\n              <ion-input placeholder=\"enter 10-digits phone no.\" size=\"large\" color=\"medium\" [formControl]=\"sms\" type=\"sms\" required></ion-input>\r\n            </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\">\r\n        <ion-button class=\"loginButton\" expand=\"block\" color=\"tertiary\" (click)=\"signIn()\" [disabled]=\"(busy | async)\">\r\n          <ion-label>{{doTranslation('GET OTP')}}</ion-label>\r\n          <ion-spinner *ngIf=\"busy | async\" name=\"lines\"></ion-spinner>\r\n        </ion-button>\r\n        <!-- <ion-item lines=\"none\">\r\n          <ion-text>Not registered yet?</ion-text><ion-button size=\"small\" fill=\"clear\" color=\"medium\" routerLink='/signup' routerLinkActive=\"active primary\">Sign up</ion-button>\r\n        </ion-item> -->\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-button fill=\"clear\" expand=\"block\" routerLink=\"/tabs/landing\" routerDirection=\"forward\">Skip for\r\n          now<ion-icon size=\"large\" slot=\"end\" name=\"log-in-outline\"></ion-icon>\r\n        </ion-button>\r\n        <ion-text *ngIf=\"errorMessage | async\">{{ errorMessage | async }}</ion-text>\r\n      </ion-col>\r\n    </ion-row> -->\r\n    <!-- <ion-row>\r\n      <ion-col class=\"flex col_4\" size=\"12\">\r\n        <ion-item class=\"center\" lines=\"none\" color=\"none\">\r\n          <ion-icon size=\"large\" name=\"logo-google\" color=\"medium\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item class=\"center\" lines=\"none\" color=\"none\">\r\n          <ion-icon size=\"large\" name=\"logo-facebook\" color=\"medium\"></ion-icon>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  </ion-grid>\r\n</div>\r\n\r\n</ion-content>";
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


      __webpack_exports__["default"] = "<!-- <ion-content>\r\n\r\n  <ion-card>\r\n  <ion-card-header>\r\n    <ion-card-title>\r\n      <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n      Sign-In\r\n    </ion-card-title>\r\n    <ion-card-subtitle>\r\n      Please enter the secret code you received to complete sign-in\r\n    </ion-card-subtitle>\r\n  </ion-card-header>\r\n  \r\n    <ion-row >\r\n  \r\n       <ion-input class=\"x\" required maxLength=\"1\" [formControl]=\"digit1\" #digit1el >\r\n       </ion-input>\r\n       <ion-input class=\"x\" required maxLength=\"1\" [formControl]=\"digit2\" #digit2el >\r\n       </ion-input>\r\n       <ion-input class=\"x\"  required maxLength=\"1\" [formControl]=\"digit3\" #digit3el  >\r\n       </ion-input>\r\n  \r\n       <ion-input class=\"x\"  required maxLength=\"1\" [formControl]=\"digit4\" #digit4el  >\r\n      </ion-input>\r\n  \r\n      <ion-input class=\"x\"   required maxLength=\"1\" [formControl]=\"digit5\" #digit5el >\r\n      </ion-input>\r\n  \r\n      <ion-input class=\"x\"   required maxLength=\"1\" [formControl]=\"digit6\" #digit6el>\r\n      </ion-input>\r\n\r\n    </ion-row>\r\n    <ion-button  *ngIf=\"(busy | async) !==true\" color=\"primary\" (click)=\"submit()\">\r\n      CONTINUE\r\n      <ion-spinner *ngIf=\"busy | async\" name=\"bubbles\"></ion-spinner>\r\n    </ion-button>\r\n  </ion-card>  \r\n    <p *ngIf=\"errorMessage | async\">{{ errorMessage | async }}</p>\r\n  </ion-content>\r\n   -->\r\n\r\n<ion-content class=\"content ion-padding\">\r\n  <ion-card class=\"vertical-center card-color custom-card\">\r\n    <ion-toolbar color=\"card-color\">\r\n      <ion-item class=\"title\" lines=\"full\" color=\"none\">\r\n        <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n        {{doTranslation('Sign-In')}}\r\n      </ion-item>\r\n    </ion-toolbar>\r\n    <ion-toolbar color=\"none\">\r\n      <ion-text>\r\n        {{doTranslation('Please enter the secret code you received to complete sign-in')}}\r\n      </ion-text>\r\n    </ion-toolbar>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"flex\" size=\"12\">\r\n          <ion-input class=\"input\" name=\"a\" #a (keyup)=\"moveFocus($event,b,'')\" type=\"tel\" maxlength=\"1\">\r\n          </ion-input>\r\n          <ion-input class=\"input\" name=\"b\" #b (keyup)=\"moveFocus($event,c,a)\" type=\"tel\" maxlength=\"1\">\r\n          </ion-input>\r\n          <ion-input class=\"input\" name=\"c\" #c (keyup)=\"moveFocus($event,d,b)\" type=\"tel\" maxlength=\"1\">\r\n          </ion-input>\r\n          <ion-input class=\"input\" name=\"d\" #d (keyup)=\"moveFocus($event,e,c)\" type=\"tel\" maxlength=\"1\">\r\n          </ion-input>\r\n          <ion-input class=\"input\" name=\"e\" #e (keyup)=\"moveFocus($event,f,d)\" type=\"tel\" maxlength=\"1\">\r\n          </ion-input>\r\n          <ion-input class=\"input\" name=\"f\" #f (keyup)=\"moveFocus($event,f,e)\" type=\"tel\" maxlength=\"1\">\r\n          </ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-button *ngIf=\"(busy | async) !==true\" size=\"small\" color=\"success\" expand=\"block\" (click)=\"submit()\">\r\n            {{doTranslation('Continue')}}\r\n            <ion-spinner *ngIf=\"busy | async\" name=\"bubbles\"></ion-spinner>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"errmsg\" size=\"12\">\r\n          <ion-text color=\"warning\">{{answer_1}}</ion-text>\r\n          <ion-text color=\"danger\" *ngIf=\"errorMessage | async\">{{ errorMessage | async }}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>";
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


      __webpack_exports__["default"] = "  <!-- <ion-content fullscreen>\r\n\r\n    <div class=\"ion-text-end\">\r\n      <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\r\n        <ion-icon name=\"close\" slot=\"start\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"ion-padding\" style=\"color: #0fd15dc5 ;\">\r\n\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let p of cart\" class=\"ion-text-wrap\">\r\n          <ion-grid style=\"color: #0fd15d ;\">\r\n            <ion-row class=\"ion-align-items-center\">\r\n              <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n                <ion-button color=\"medium\" fill=\"clear\" (click)=\"decreaseCartItem(p)\">\r\n                  <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"1\" class=\"ion-align-self-center\">\r\n                {{ p.amount }}\r\n              </ion-col>\r\n\r\n              <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n                <ion-button color=\"medium\" fill=\"clear\" (click)=\"increaseCartItem(p)\">\r\n                  <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"2\" offset=\"5\">\r\n                <ion-button color=\"medium\" fill=\"clear\" (click)=\"removeCartItem(p)\">\r\n                  <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"9\">\r\n                <b>{{ p.name }}</b>\r\n              </ion-col>\r\n              <ion-col size=\"3\" class=\"ion-text-end\">\r\n                {{ p.amount * p.price | currency:'INR' }}\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-grid style=\"color: #0fd15d ;\">\r\n            <ion-row>\r\n              <ion-col size=\"9\">\r\n                Total:\r\n              </ion-col>\r\n              <ion-col size=\"3\" class=\"ion-text-end\">\r\n                {{ getTotal() | currency:'INR' }}\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-button color=\"success\" expand=\"full\" (click)=\"makePayment()\">\r\n        Checkout\r\n      </ion-button>\r\n    </div>\r\n\r\n  </ion-content> -->\r\n\r\n  <ion-content class=\"ion-padding content-color\" *ngIf=\"flag === false\">\r\n   \r\n  <ion-card class=\"card-color\">\r\n    <ion-item lines=\"none\" color=\"none\">\r\n      <ion-icon (click)=\"close()\" size=\"large\" name=\"close\" color=\"medium\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-list class=\"list\" *ngFor=\"let c of cart; let i=index\">\r\n      <ion-toolbar class=\"card-color\">\r\n        <ion-grid (click)=\"medModal(c)\">\r\n          <ion-row>\r\n            <ion-col class=\"itemDetails\" size=\"12\">\r\n              <ion-label color=\"danger\">REFIT ANIMAL CARE- 10KG</ion-label>\r\n              <p>Celebrate Mineral Mixture...</p>\r\n              <p>Delivery By- 6th October</p>\r\n              <p>Delivery Fees- &#x20B9;50</p>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <a>{{doTranslation('Save for later')}}</a>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n        <ion-grid slot=\"end\">\r\n          <ion-row>\r\n            <ion-col size=\"3\"></ion-col>\r\n            <ion-col (click)=\"medModal(c)\" class=\"center\" size=\"6\">\r\n              <ion-thumbnail><ion-img src=\"{{c.image}}\" ></ion-img></ion-thumbnail>\r\n            </ion-col>\r\n            <ion-col size=\"3\"><ion-icon color=\"danger\" name=\"trash-sharp\" (click)=\"removeCartItem(c)\"></ion-icon></ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"center\" size=\"12\">\r\n              <ion-text color=\"primary\">{{c.name}}</ion-text>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"center\" size=\"2\">\r\n              <ion-icon size=\"large\" name=\"remove-circle-sharp\" color=\"primary\" (click)=\"decreaseCartItem(c)\"></ion-icon>\r\n            </ion-col>\r\n            <ion-col class=\"center\" size=\"8\">\r\n              <ion-item lines=\"none\" color=\"none\">\r\n                <ion-text color=\"warning\">{{c.amount}}</ion-text>\r\n              </ion-item>\r\n            </ion-col>\r\n            <ion-col class=\"center\" size=\"2\">\r\n              <ion-icon size=\"large\" name=\"add-circle-sharp\" color=\"primary\" (click)=\"increaseCartItem(c)\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-toolbar>\r\n      <ion-toolbar class=\"card-color\">\r\n        <ion-button shape=\"round\" expand=\"block\" size=\"small\" color=\"medium\">{{doTranslation('You have a Promo Code? Apply Here')}}</ion-button>\r\n      </ion-toolbar>\r\n    </ion-list>\r\n    <!-- <ion-toolbar color=\"none\">\r\n      <ion-item lines=\"full\" color=\"none\">\r\n        <ion-label slot=\"start\" color=\"primary\">PRICE DETAILS</ion-label>\r\n      </ion-item>\r\n    </ion-toolbar>\r\n    <ion-toolbar class=\"priceTable\" color=\"none\">\r\n      <ion-item lines=\"none\" color=\"none\">\r\n        <ion-label slot=\"start\" color=\"primary\">{{'Price of c.amount Item'}})</ion-label>\r\n        <ion-label slot=\"end\">1440</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" color=\"none\">\r\n        <ion-label slot=\"start\" color=\"primary\">Discount</ion-label>\r\n        <ion-label slot=\"end\">&#x20B9;68</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"full\" color=\"none\">\r\n        <ion-label slot=\"start\" color=\"primary\">Delivery Charges</ion-label>\r\n        <ion-label slot=\"end\">Free</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" color=\"none\">\r\n        <ion-label slot=\"start\" color=\"primary\">Total Cost</ion-label>\r\n        <ion-label slot=\"end\" color=\"warning\">&#x20B9;{{'c.amount*c.price'}}</ion-label>\r\n      </ion-item>\r\n    </ion-toolbar> -->\r\n  </ion-card>\r\n  <ion-toolbar class=\"card-color\">\r\n    <ion-item lines=\"full\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"primary\">PRICE DETAILS</ion-label>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"priceTable card-color\">\r\n    <!-- <ion-item lines=\"none\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"primary\">PRICE</ion-label>\r\n      <ion-label slot=\"end\"></ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"primary\">Discount</ion-label>\r\n      <ion-label slot=\"end\">&#x20B9;68</ion-label>\r\n    </ion-item> -->\r\n    <ion-item lines=\"full\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"primary\">Delivery Charges</ion-label>\r\n      <ion-label slot=\"end\">Free</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"primary\">Total Cost</ion-label>\r\n      <ion-label slot=\"end\" color=\"warning\">{{ getTotal() | currency:'INR' }}</ion-label>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n\r\n  <ion-button size=\"small\" expand=\"block\" color=\"success\" (click)=\"nextAddress()\"><ion-icon size=\"small\" slot=\"end\" name=\"checkmark-done-sharp\"></ion-icon>PLACE ORDER!</ion-button>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"flag === true\" class=\"ion-padding content-color\">\r\n  <!-- <ion-toolbar>\r\n    <ion-item lines=\"full\">\r\n      <ion-label class=\"title\">Provide your address</ion-label>\r\n    </ion-item>\r\n  </ion-toolbar> -->\r\n  <ion-card class=\"card-color\">\r\n    <ion-item lines=\"none\" color=\"none\">\r\n      <ion-icon (click)=\"close()\" size=\"large\" name=\"close\" color=\"medium\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <form [formGroup]=\"addressForm\">\r\n      <ion-toolbar class=\"card-color\">\r\n        <ion-item lines=\"full\" color=\"none\" *ngFor=\"let control of jsonform.address\">\r\n          <ion-label position=\"floating\" color=\"danger\">{{control.label}}</ion-label>\r\n          <ion-input [type]=\"control.type\" [formControlName]=\"control.name\" [value]=\"control.value\"></ion-input>\r\n        </ion-item>\r\n      </ion-toolbar>\r\n    </form>\r\n    <ion-button [disabled]=\"!addressForm.get('address').dirty\" expand=\"full\" fill=\"clear\" size=\"small\" color=\"primary\" (click)=\"addAddress()\">Add Address<ion-icon size=\"small\" slot=\"end\" color=\"primary\" name=\"add\"></ion-icon></ion-button>\r\n\r\n      <ion-list>\r\n        <ion-radio-group value=\"{{addressData[0]}}\" (ionChange)=\"onSelectAddress($event)\">\r\n          <ion-item lines=\"full\" color=\"none\" *ngFor=\"let address of addressData; let i=index\">\r\n            <ion-text>{{address}}</ion-text>\r\n            <ion-radio slot=\"start\" value=\"{{address}}\"></ion-radio>\r\n            <ion-icon class=\"del-icon\" slot=\"end\" name=\"close\" (click)=\"deleteAddress(i)\"></ion-icon>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n    </ion-card>\r\n\r\n  <ion-button expand=\"full\" size=\"small\" color=\"success\" (click)=\"makePayment()\">\r\n    <ion-icon size=\"small\" slot=\"end\" name=\"tick\"></ion-icon>\r\n    <ion-label size=\"small\" expand=\"block\">PROCEED PAYMENT</ion-label>\r\n  </ion-button>\r\n\r\n</ion-content>\r\n\r\n\r\n  <!-- <ion-footer>\r\n    <ion-button expand=\"block\" color=\"success\" (click)=\"close()\" (click)=\"makePayment()\"><ion-icon slot=\"end\" name=\"checkmark-done-sharp\"></ion-icon>PLACE ORDER!</ion-button>\r\n  </ion-footer> -->\r\n  ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatbot/chatbot.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatbot/chatbot.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesChatbotChatbotPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons (click)=\"dismiss()\" class=\"btn-shape\" slot=\"start\">\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-color\">\n  <ion-text class=\"center\" color=\"warning\">{{doTranslation('BOT-CHAT ASSISTANCE')}}</ion-text>\n  <ion-grid>\n    <ion-row *ngFor=\"let message of messages\">\n      <ion-col *ngIf=\"currentUser !== message.user\" class=\"person-1 vertical-flex\" size=\"9\">\n        <ion-toolbar color=\"none\">\n          <ion-label color=\"success\">{{message.user}}</ion-label>\n        </ion-toolbar>\n        <ion-text>{{message.msg}}</ion-text>\n        <ion-toolbar color=\"none\">\n          <ion-text slot=\"end\" color=\"primary\">{{message.createdAt | date:'short'}}</ion-text>\n        </ion-toolbar>\n      </ion-col>\n      <ion-col *ngIf=\"currentUser === message.user\" class=\"person-2 vertical-flex\" offset=\"3\" size=\"9\">\n        <ion-toolbar color=\"none\">\n          <ion-label color=\"success\">{{message.user}}</ion-label>\n        </ion-toolbar>\n        <ion-text>{{message.msg}}</ion-text>\n        <ion-toolbar color=\"none\">\n          <ion-text slot=\"end\" color=\"primary\">{{message.createdAt | date:'short'}}</ion-text>\n        </ion-toolbar>      \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer class=\"content-color\">\n  <ion-toolbar class=\"search-color\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"10\">\n          <textarea class=\"search-color\" autosize maxRows=\"4\" [(ngModel)]=\"newMsg\"></textarea>\n        </ion-col>\n        <ion-col class=\"vertical-center\" size=\"2\">\n          <ion-button size=\"small\" fill=\"clear\" expand=\"block\" color=\"primary\" [disabled]=\"newMsg === ''\" (click)=\"sendMessage()\">\n            <ion-icon slot=\"icon-only\" size=\"large\" name=\"send\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";
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


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding content-color\">\r\n  <ion-card class=\"card-color\">\r\n    <ion-item lines=\"none\" color=\"none\">\r\n      <ion-icon slot=\"end\" name=\"close\" color=\"medium\" (click)=\"dismiss()\"></ion-icon>\r\n    </ion-item>\r\n    <ion-card-header >\r\n     <ion-label color=\"light\"> {{ name}} </ion-label> \r\n    </ion-card-header>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"reverseCenter\" size=\"12\">\r\n          <ion-thumbnail>\r\n            <ion-img src=\"{{image}}\"></ion-img>\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n        \r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"reverseCenter\" size=\"12\">\r\n          <ion-label>REFIT ANIMAL CARE – 10 Kg Chelated Mineral Mixture for\r\n            Buffalo,Cow,Cattle,Poultry,\r\n            Goat & Pig (RIGMIN Forte Powder)\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-toolbar color=\"none\">\r\n      <ion-item slot=\"start\" lines=\"none\" color=\"none\">\r\n        <ion-label color=\"success\">{{ price | currency:'INR' }}</ion-label>\r\n      </ion-item>\r\n    </ion-toolbar>\r\n  </ion-card>\r\n</ion-content>";
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


      __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"backbtn\" routerLink=\"/welcome\" routerDirection=\"back\">\r\n        <img src=\"../../assets/back.svg\" />\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"ion-padding container\">\r\n    <h1>Signup</h1>\r\n\r\n    <div class=\"form-container\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Name</ion-label>\r\n        <ion-input></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Password</ion-label>\r\n        <ion-input type=\"password\"></ion-input>\r\n        <ion-icon name=\"eye\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-button expand=\"block\" class=\"main-button\">Sign Up</ion-button>\r\n\r\n      <div class=\"sign-up\">\r\n        Already have an account? <ion-button color=\"dark\" fill=\"clear\" routerLink=\"/login\" routerDirection=\"forward\">Sign in</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content> -->\r\n<!-- <mat-card-header>\r\n  <mat-icon mat-card-avatar>lock</mat-icon>\r\n  <mat-card-title>Please Sign Up</mat-card-title>\r\n  <mat-card-subtitle>We'd be happy to have you join our community!</mat-card-subtitle>\r\n</mat-card-header> -->\r\n\r\n<!-- <mat-card-content>\r\n      <form fxLayout=\"column\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Full Name\" [formControl]=\"fullName\" name=\"name\" autocomplete=\"name\" required/>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Phone Number (e.g. +12065551211)\" [formControl]=\"sms\" type=\"sms\" sms name=\"sms\"\r\n            autocomplete=\"username sms\" required/>\r\n        </mat-form-field>\r\n      </form>\r\n    </mat-card-content> -->\r\n\r\n<!-- <mat-card-actions>\r\n      <div fxFlex></div>\r\n      <button mat-stroked-button color=\"primary\" (click)=\"signup()\">\r\n        <div fxFlex></div>\r\n        <div *ngIf=\"(busy | async) !==true\">SIGN UP</div>\r\n        <mat-spinner *ngIf=\"busy | async\" [diameter]=\"35\"></mat-spinner>\r\n        <div fxFlex></div>\r\n      </button>\r\n      <div fxFlex></div>\r\n    </mat-card-actions> -->\r\n\r\n<ion-content class=\"content-color ion-padding\">\r\n  <ion-card class=\"card-color custom-card\">\r\n    <ion-toolbar class=\"center\" color=\"none\">\r\n      <ion-text color=\"warning\">{{doTranslation('Please Sign Up')}}</ion-text>\r\n    </ion-toolbar>\r\n    <ion-toolbar class=\"center\" color=\"none\">\r\n      <ion-text>{{doTranslation(\"We'd be happy to have you join our community!\")}}</ion-text>\r\n    </ion-toolbar>\r\n    <ion-toolbar class=\"center\" color=\"none\">\r\n      <ion-text color=\"primary\">{{doTranslation('You are almost there!')}}</ion-text>\r\n    </ion-toolbar>\r\n\r\n    <form [formGroup]=\"signup_form\">\r\n      <ion-toolbar color=\"none\">\r\n        <ion-item lines=\"none\" color=\"none\">\r\n          <ion-label position=\"floating\" color=\"danger\">{{doTranslation('Full Name')}}</ion-label>\r\n          <ion-input placeholder=\"enter your name.\" formControlName=\"fullname\" required></ion-input>\r\n        </ion-item>\r\n      </ion-toolbar>\r\n      <ion-toolbar color=\"none\">\r\n        <ion-item lines=\"none\" color=\"none\">\r\n          <ion-label position=\"floating\" color=\"danger\">{{doTranslation('Phone Number')}}</ion-label>\r\n          <ion-input formControlName=\"sms\" [value]=\"phno\"></ion-input>\r\n        </ion-item>\r\n        </ion-toolbar>\r\n    </form>\r\n    <ion-button *ngIf=\"(busy | async) !==true\" expand=\"block\" size=\"small\" color=\"success\" (click)=\"signup()\">\r\n      {{doTranslation('SIGN UP')}}<ion-spinner *ngIf=\"busy | async\" name=\"bubbles\"></ion-spinner>\r\n    </ion-button>\r\n    <ion-button size=\"small\" color=\"primary\" expand=\"block\" (click)=\"dismiss()\">{{doTranslation('Continue without login')}}</ion-button>\r\n\r\n    <ion-toolbar color=\"none\">\r\n      <ion-text *ngIf=\"errorMessage | async\">{{ errorMessage | async }}</ion-text>\r\n    </ion-toolbar>\r\n    <ion-toolbar color=\"none\">\r\n      <ion-text>\r\n        {{doTranslation('Already signed up?')}}<a routerLink='/login' routerLinkActive=\"active success\">{{doTranslation('Sign in')}}</a>\r\n      </ion-text>\r\n    </ion-toolbar>\r\n\r\n  </ion-card>\r\n</ion-content>\r\n";
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

      var routes = [// {
      //   path: '',
      //   loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
      // },
      {
        path: "",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-onboarding-page-onboarding-page-module */
          "pages-onboarding-page-onboarding-page-module").then(__webpack_require__.bind(null,
          /*! ./pages/onboarding-page/onboarding-page.module */
          "./src/app/pages/onboarding-page/onboarding-page.module.ts")).then(function (m) {
            return m.OnboardingPagePageModule;
          });
        }
      }, {
        path: "tabs",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | tabs-tabs-module */
          [__webpack_require__.e("common"), __webpack_require__.e("tabs-tabs-module")]).then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: "login",
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        },
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["IsNotAuthenticated"]]
      }, {
        path: "cart-modal",
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/cart-modal/cart-modal.module */
          "./src/app/pages/cart-modal/cart-modal.module.ts")).then(function (m) {
            return m.CartModalPageModule;
          });
        }
      }, {
        path: "myads-modal",
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
        path: "med-modal",
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
        path: "signup",
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./signup/signup.module */
          "./src/app/signup/signup.module.ts")).then(function (m) {
            return m.SignupPageModule;
          });
        },
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["IsNotAuthenticated"]]
      }, {
        path: "answer-challenge",
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/answer-challenge/answer-challenge.module */
          "./src/app/pages/answer-challenge/answer-challenge.module.ts")).then(function (m) {
            return m.AnswerChallengePageModule;
          });
        },
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["IsNotAuthenticated"]]
      }, {
        path: "preview-modal",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-preview-modal-preview-modal-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-preview-modal-preview-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/preview-modal/preview-modal.module */
          "./src/app/pages/preview-modal/preview-modal.module.ts")).then(function (m) {
            return m.PreviewModalPageModule;
          });
        }
      }, {
        path: "login/:id",
        component: _login_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"],
        children: [{
          path: "landing",
          component: _landing_landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
        }]
      }, {
        path: "feed-modal",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-feed-modal-feed-modal-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-feed-modal-feed-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/feed-modal/feed-modal.module */
          "./src/app/pages/feed-modal/feed-modal.module.ts")).then(function (m) {
            return m.FeedModalPageModule;
          });
        }
      }, {
        path: "feedback-modal",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-feedback-modal-feedback-modal-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-feedback-modal-feedback-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/feedback-modal/feedback-modal.module */
          "./src/app/pages/feedback-modal/feedback-modal.module.ts")).then(function (m) {
            return m.FeedbackModalPageModule;
          });
        }
      }, {
        path: 'chatbot',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-chatbot-chatbot-module */
          "pages-chatbot-chatbot-module").then(__webpack_require__.bind(null,
          /*! ./pages/chatbot/chatbot.module */
          "./src/app/pages/chatbot/chatbot.module.ts")).then(function (m) {
            return m.ChatbotPageModule;
          });
        }
      }, {
        path: "",
        redirectTo: "/welcome",
        pathMatch: "full"
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


      __webpack_exports__["default"] = ".app {\n  --background: #36363F;\n  background-color: #1F1F29;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  background-clip: border-box;\n}\n\n.main-list {\n  padding: 5%;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.main-list ion-text {\n  padding: 0% 5%;\n  font-weight: bold;\n}\n\n.main-list ion-list {\n  width: 100%;\n}\n\n.main-list ion-list .selected {\n  border-left: 5px solid var(--ion-color-primary);\n  color: var(--ion-color-primary);\n}\n\n.main-list ion-item {\n  padding: 5%;\n  width: inherit;\n}\n\n.main-list ion-menu-toggle {\n  width: 100%;\n}\n\n.content {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-menu {\n  opacity: 95%;\n  --width: 50% !important;\n  --ion-background-color: #36363F;\n}\n\nion-menu ion-item {\n  --background: transparent;\n}\n\nion-menu ion-list {\n  background: transparent;\n}\n\n@media (min-width: 400px) {\n  ion-menu {\n    --width: 50% !important;\n  }\n}\n\n@media (min-width: 600px) {\n  ion-menu {\n    --width: 40% !important;\n  }\n}\n\n@media (min-width: 800px) {\n  ion-menu {\n    --width: 30% !important;\n  }\n}\n\n.footer {\n  display: none;\n}\n\n@media (min-width: 700px) {\n  .footer {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBS0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSkY7O0FBTEU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFFRTtFQUNFLFdBQUE7QUFBSjs7QUFDSTtFQUNFLCtDQUFBO0VBQ0EsK0JBQUE7QUFDTjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUU7RUFDRSxXQUFBO0FBQUo7O0FBSUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQURGOztBQUVFO0VBQ0UseUJBQUE7QUFBSjs7QUFFRTtFQUNFLHVCQUFBO0FBQUo7O0FBSUE7RUFDRTtJQUNFLHVCQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsdUJBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0U7SUFDRSx1QkFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRSxhQUFBO0FBSkY7O0FBT0E7RUFDRTtJQUNFLGNBQUE7RUFKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcHtcclxuICAtLWJhY2tncm91bmQ6ICMzNjM2M0Y7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGMUYyOTtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9iZ18xLnBuZycpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubWFpbi1saXN0IHtcclxuICBwYWRkaW5nOiA1JTtcclxuICBpb24tdGV4dHtcclxuICAgIHBhZGRpbmc6IDAlIDUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuc2VsZWN0ZWQge1xyXG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gIH1cclxuICBpb24tbWVudS10b2dnbGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLW1lbnV7XHJcbiAgb3BhY2l0eTogOTUlO1xyXG4gIC0td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMzNjM2M0Y7XHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBpb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCl7XHJcbiAgaW9uLW1lbnV7XHJcbiAgICAtLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCl7XHJcbiAgaW9uLW1lbnV7XHJcbiAgICAtLXdpZHRoOiA0MCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCl7XHJcbiAgaW9uLW1lbnV7XHJcbiAgICAtLXdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KXtcclxuICAuZm9vdGVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59Il19 */";
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
      /* harmony import */


      var _services_translate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/translate.service */
      "./src/app/services/translate.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, util, router, translateService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.util = util;
          this.router = router;
          this.translateService = translateService;
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
        }, {
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
            return translateText;
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
        }, {
          type: _services_translate_service__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
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


      __webpack_exports__["default"] = ".custom-card {\n  width: 100%;\n  height: inherit;\n  --background: transparent;\n  border-radius: 5px;\n  margin: 0;\n  padding: 0;\n}\n\n.img {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\nion-slides {\n  --background: transparent !important;\n  height: 10%;\n  padding: 0;\n  margin: 0;\n}\n\nion-slide {\n  --background: transparent !important;\n  height: 100%;\n  width: 100%;\n}\n\nion-slide ion-label {\n  font-size: 12px;\n}\n\nion-thumbnail {\n  height: 100%;\n  width: 100%;\n}\n\nion-content {\n  margin: 0;\n  padding: 0;\n}\n\nion-text {\n  font-size: 15px;\n}\n\nion-searchbar {\n  border: none;\n  border-radius: 0;\n}\n\n.top-space {\n  margin: 5% 0%;\n}\n\n.bottom-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n  text-align: center;\n}\n\n.offer-card-margin {\n  margin-top: 5%;\n}\n\n.gradient {\n  box-shadow: 0px 3px #000;\n  border-radius: 5px;\n  background: linear-gradient(180deg, #1777AD 100%, rgba(23, 119, 173, 0) 100%);\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n.row-size {\n  margin: 2%;\n  height: 120px;\n  width: 35%;\n}\n\n.row-size-bigbtn {\n  margin: 2%;\n  height: 100px;\n  width: 70%;\n}\n\n.vertical-flex {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.vertical-flex ion-label {\n  margin: 0;\n  padding: 0;\n}\n\n.offer-img-bg {\n  padding: 10%;\n}\n\n.inline-flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.button-img {\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-clip: border-box;\n  background-position: center center;\n}\n\n.green {\n  color: lawngreen;\n}\n\n.white {\n  font-size: 110%;\n  color: white;\n}\n\n.background {\n  border-radius: 0px;\n  position: relative;\n  --background: transparent !important;\n  background-image: url('new-bg.png') !important;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: top left;\n  background-clip: border-box;\n  background-attachment: scroll;\n}\n\n.header {\n  --background: #36363F;\n  background-color: #36363F;\n}\n\nion-searchbar {\n  width: 100%;\n  --box-shadow: none !important;\n}\n\n.glow-on-hover {\n  --background: rgb(255, 255, 255, 0.5);\n  background-clip: padding-box;\n  width: 100%;\n  height: 50px;\n  margin-bottom: 10%;\n  border: none;\n  outline: none;\n  color: #fff;\n  cursor: pointer;\n  position: relative;\n  z-index: 0;\n  border-radius: 10px;\n}\n\n.text-shadow {\n  text-shadow: 2px 2px 4px #000;\n}\n\n.glow-on-hover:before {\n  content: \"\";\n  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  background-size: 400%;\n  z-index: -1;\n  filter: blur(5px);\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  -webkit-animation: glowing 20s linear infinite;\n          animation: glowing 20s linear infinite;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n  border-radius: 10px;\n}\n\n.glow-on-hover:active {\n  color: #000;\n}\n\n.glow-on-hover:active:after {\n  background: transparent;\n}\n\n.glow-on-hover:hover:before {\n  opacity: 1;\n}\n\n.glow-on-hover:after {\n  z-index: -1;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  border-radius: 10px;\n}\n\n.web-view {\n  display: none;\n}\n\n.searchbar-webview {\n  border-bottom: 1px solid #9c8d8d;\n}\n\n@-webkit-keyframes glowing {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n@keyframes glowing {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n@media (min-width: 400px) {\n  .custom-card {\n    width: 75%;\n    height: inherit;\n  }\n}\n\n@media (min-width: 600px) {\n  .custom-card {\n    width: 50%;\n    height: inherit;\n  }\n}\n\n@media (min-width: 700px) {\n  .custom-card {\n    width: 40%;\n    height: inherit;\n  }\n\n  .web-view {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .mobile-view {\n    display: none;\n  }\n\n  .header {\n    display: none;\n  }\n\n  ion-grid {\n    margin-top: 5%;\n  }\n\n  .row-size-bigbtn {\n    width: 40%;\n    height: 125px;\n  }\n\n  .row-size {\n    height: 125px;\n  }\n\n  .background {\n    background-size: 50% 100%;\n    background-position: top center;\n  }\n}\n\n@media (min-width: 800px) {\n  .custom-card {\n    width: 30%;\n    height: inherit;\n  }\n}\n\n@media (min-width: 800px) {\n  .card {\n    width: 50%;\n    height: inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2UkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQTVSSjs7QUErUkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUE1Uko7O0FBK1JFO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUE1Uko7O0FBK1JFO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQTVSSjs7QUE2Ukk7RUFDRSxlQUFBO0FBM1JOOztBQStSRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBNVJKOztBQStSRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBNVJKOztBQStSRTtFQUNFLGVBQUE7QUE1Uko7O0FBK1JFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBNVJKOztBQStSRTtFQUNFLGFBQUE7QUE1Uko7O0FBK1JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBNVJKOztBQStSRTtFQUNFLGNBQUE7QUE1Uko7O0FBK1JFO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZFQUFBO0VBRUEsb0RBQUE7QUE3Uko7O0FBZ1NFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBN1JKOztBQWdTRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQTdSSjs7QUFnU0U7RUFLRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFqU0o7O0FBd1JJO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUF0Uk47O0FBZ1NFO0VBQ0UsWUFBQTtBQTdSSjs7QUFnU0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBN1JKOztBQWdTRTtFQUNFLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0FBN1JKOztBQWdTRTtFQUNFLGdCQUFBO0FBN1JKOztBQWdTRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBN1JKOztBQWdTRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQTdSSjs7QUFnU0U7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FBN1JKOztBQWdTRTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtBQTdSSjs7QUFnU0U7RUFDRSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQTdSSjs7QUErUkE7RUFDRSw2QkFBQTtBQTVSRjs7QUErUkE7RUFDSSxXQUFBO0VBQ0EsbUhBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FBNVJKOztBQStSQTtFQUNJLFdBQUE7QUE1Uko7O0FBK1JBO0VBQ0ksdUJBQUE7QUE1Uko7O0FBK1JBO0VBQ0ksVUFBQTtBQTVSSjs7QUErUkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLG1CQUFBO0FBNVJKOztBQStSQTtFQUNFLGFBQUE7QUE1UkY7O0FBK1JBO0VBQ0UsZ0NBQUE7QUE1UkY7O0FBK1JBO0VBQ0k7SUFBSyx3QkFBQTtFQTNSUDtFQTRSRTtJQUFNLDJCQUFBO0VBelJSO0VBMFJFO0lBQU8sd0JBQUE7RUF2UlQ7QUFDRjs7QUFtUkE7RUFDSTtJQUFLLHdCQUFBO0VBM1JQO0VBNFJFO0lBQU0sMkJBQUE7RUF6UlI7RUEwUkU7SUFBTyx3QkFBQTtFQXZSVDtBQUNGOztBQXlSQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGVBQUE7RUF2UkY7QUFDRjs7QUEwUkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBeFJGO0FBQ0Y7O0FBMlJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZUFBQTtFQXpSRjs7RUEyUkE7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBeFJGOztFQTBSQTtJQUNFLGFBQUE7RUF2UkY7O0VBeVJBO0lBQ0UsYUFBQTtFQXRSRjs7RUF3UkE7SUFDRSxjQUFBO0VBclJGOztFQXVSQTtJQUNFLFVBQUE7SUFDQSxhQUFBO0VBcFJGOztFQXNSQTtJQUNFLGFBQUE7RUFuUkY7O0VBcVJBO0lBQ0UseUJBQUE7SUFDQSwrQkFBQTtFQWxSRjtBQUNGOztBQXFSQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGVBQUE7RUFuUkY7QUFDRjs7QUFzUkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBcFJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmJhY2tidG4ge1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5ub3RpZmljYXRpb24ge1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY29udGVudCB7XHJcbi8vICAgICAtLXBhZGRpbmctdG9wOiA4MHB4O1xyXG4vLyAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcclxuLy8gICAgIC0tcGFkZGluZy1zdGFydDogMjZweDtcclxuLy8gICAgIC0tcGFkZGluZy1lbmQ6IDI2cHg7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmdtYW4uanBnKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xyXG4vLyAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNTB2dyByZ2JhKDcsIDc2LCAxNTUsIDAuMylcclxuICAgIFxyXG4gICAgXHJcbi8vICAgICAvLyAtLWJhY2tncm91bmQtY29sb3I6IzFlMWUxZTtcclxuLy8gfVxyXG4vLyBpb24tZ3JpZHtcclxuLy8gICAgIHBhZGRpbmc6IDE1MHB4IDVweCA1cHggMjBweDtcclxuLy8gfVxyXG4vLyAuaXRlbS1uYW1lIHtcclxuLy8gICAgIGNvbG9yOiAjMmJmZjAwO1xyXG4vLyB9XHJcblxyXG4vLyAucHJpY2Uge1xyXG4vLyAgICAgY29sb3I6ICMzQ0YxODU7XHJcblxyXG4vLyAgICAgc3BhbiB7XHJcbi8vICAgICAgICAgY29sb3I6ICMzQ0YxODU7XHJcbi8vICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbi8vICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLnNlcGVyYXRvciB7XHJcbi8vICAgICBociB7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIGxlZnQ6IDA7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogIzgxODA4MDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBoNXtcclxuLy8gICAgIGNvbG9yOiMyM2FjMDg7XHJcbi8vICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIFxyXG4vLyB9XHJcbi8vIC5jb3VudCB7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbi8vICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbi8vICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuLy8gICAgIHNwYW4ge1xyXG4vLyAgICAgICAgIGNvbG9yOiAjMjZmZjczO1xyXG4vLyAgICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAucmV2aWV3IHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbi8vICAgICBjb2xvcjogIzlkYWQwZDtcclxuXHJcbi8vICAgICAucmF0aW5nIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgICAgY29sb3I6ICM5ZGFkMGQ7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gICAgIH1cclxuXHJcbiBcclxuLy8gfVxyXG4vLyAuaW9uLXBhZGRpbmctdmVydGljYWwtY3VzdG9tIHtcclxuLy8gICAgIC8vIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuLy8gICAgIC8vIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcclxuLy8gICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbi8vIH1cclxuLy8gLmN1cnZlZHtcclxuLy8gYm9yZGVyLXJhZGl1czoxMDAlIDAlIDEwMCUgMCUgLyAwJSAxMDAlIDAlIDEwMCUgOyAvLzEwMCUgMCUgMTAlIDkwJSAvIDEwMCUgODglIDEyJSAwJSA7XHJcbi8vIGNvbG9yOiMzNjM2M0Y7XHJcbi8vIHdpZHRoOiAxMjBweDtcclxuLy8gaGVpZ2h0OiAxMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLmRlc2NyaXB0aW9uIHtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICAgIHpvb206MjUwJTtcclxuLy8gICAgIGg1IHtcclxuLy8gICAgICAgICBjb2xvcjogIzlkYWQwZDtcclxuLy8gICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwIHtcclxuLy8gICAgICAgICBjb2xvcjogIzlkYWQwZDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jb2xsZWZ0e1xyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbi8vICAgICAgICAgem9vbToyNTAlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNvbHJpZ2h0e1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuLy8gICAgICAgICB6b29tOjI1MCU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC52YXJpYXRpb24ge1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcblxyXG4vLyAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuLy8gICAgICAgICBjb2xvcjogIzlkYWQwZDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLnZhcmlhdGlvbi1zZWxlY3RvciB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbi8vICAgICAuYWN0aXZlLXZhcmlhdGlvbiB7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgIHotaW5kZXg6IDEgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuc2l6ZXMge1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgb3BhY2l0eTogMDtcclxuLy8gICAgICAgICB6LWluZGV4OiAwO1xyXG4vLyAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG5cclxuLy8gICAgICAgICBkaXYge1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlkYWQwZDtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbi8vICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAuYWN0aXZlIHtcclxuLy8gICAgICAgICAgICAgY29sb3I6ICMxYTAwMDA7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmNvbG9ycyB7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgICAgIHotaW5kZXg6IDA7XHJcbi8vICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcblxyXG4vLyAgICAgICAgIGRpdiB7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRhZDBkO1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuLy8gICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC5hY3RpdmUge1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogIzlkYWQwZDtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAvLyBpb24tY2FyZHtcclxuLy8gLy8gICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzRjtcclxuLy8gLy8gfVxyXG4vLyAuY2FyZCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYjg7IC8vIGJsYWNrXHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBib3gtc2hhZG93OiBub25lO1xyXG4vLyAgIH1cclxuLy8gaW9uLWZvb3RlciB7XHJcbi8vICAgICBpb24tcm93IHtcclxuLy8gICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuLy8gICAgICAgICBpb24tY29sIHtcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbi8vICAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBhe1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuLy8gfVxyXG4vLyAvLyBUaGlzIHdpbGwgcmVtb3ZlIGZvb3RlciBzaGFkb3cgb24gYW5kcm9pZFxyXG4vLyAuZm9vdGVyLW1kOjpiZWZvcmUge1xyXG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG5cclxuLy8gLmNhcmR7XHJcbi8vICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3d3dy50aGVpbmRpYWZvcnVtLmluL3NpdGVzL2RlZmF1bHQvZmlsZXMvZmllbGQvaW1hZ2UvMjAyMS8wNS8yOC9yYW1rdW1hci1yYWRoYWtyaXNobmFuLXdpa2ltZWRpYS0xNjIyMTkzMzA0LmpwZWcnKTtcclxuLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4vLyAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMDtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vICAgcGFkZGluZzogNSU7XHJcbi8vIH1cclxuXHJcbi8vIC5pbWd7XHJcbi8vICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tc2xpZGVzIHtcclxuLy8gICBoZWlnaHQ6IDI1JTtcclxuLy8gICBwYWRkaW5nOiAwO1xyXG4vLyAgIG1hcmdpbjogMDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLXNsaWRle1xyXG4vLyAgIGhlaWdodDogMTAwJTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBpb24tbGFiZWx7XHJcbi8vICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAuY2VudGVye1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLXRodW1ibmFpbHtcclxuLy8gICBoZWlnaHQ6IDEwMHB4O1xyXG4vLyAgIHdpZHRoOiAxMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLnRvb2xiYXJ7XHJcbi8vICAgbWFyZ2luOiA1JSAwO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY29udGVudHtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLXRleHR7XHJcbi8vICAgZm9udC1zaXplOiAxNXB4O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tc2VhcmNoYmFye1xyXG4vLyAgIGJvcmRlcjogbm9uZTtcclxuLy8gICBib3JkZXItcmFkaXVzOiAwO1xyXG4vLyB9XHJcblxyXG4vLyAub2ZmZXJzSW1ne1xyXG4vLyAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4vLyB9XHJcblxyXG5cclxuLmN1c3RvbS1jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLmltZ3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zbGlkZXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aHVtYm5haWx7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBpb24tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlYXJjaGJhcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAudG9wLXNwYWNle1xyXG4gICAgbWFyZ2luOiA1JSAwJTtcclxuICB9XHJcblxyXG4gIC5ib3R0b20tY2VudGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5vZmZlci1jYXJkLW1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gIH1cclxuXHJcbiAgLmdyYWRpZW50e1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAgIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxNzc3QUQgMTAwJSwgcmdiYSgyMywgMTE5LCAxNzMsIDApIDEwMCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzE3NzdBRCAxMC45NCUsIHJnYmEoMjMsIDExOSwgMTczLCAwKSAxMDAlKTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3ctc2l6ZXtcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICB9XHJcblxyXG4gIC5yb3ctc2l6ZS1iaWdidG57XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG5cclxuICAudmVydGljYWwtZmxleHtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm9mZmVyLWltZy1iZ3tcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICB9XHJcblxyXG4gIC5pbmxpbmUtZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLWltZ3tcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5ncmVlbntcclxuICAgIGNvbG9yOiBsYXduZ3JlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC53aGl0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTEwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5iYWNrZ3JvdW5ke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvbmV3LWJnLnBuZycpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcntcclxuICAgIC0tYmFja2dyb3VuZDogIzM2MzYzRjsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjNGO1xyXG4gIH1cclxuXHJcbiAgaW9uLXNlYXJjaGJhcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZ2xvdy1vbi1ob3ZlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnRleHQtc2hhZG93e1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCAjMDAwO1xyXG59XHJcblxyXG4uZ2xvdy1vbi1ob3ZlcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjAwMDAsICNmZjczMDAsICNmZmZiMDAsICM0OGZmMDAsICMwMGZmZDUsICMwMDJiZmYsICM3YTAwZmYsICNmZjAwYzgsICNmZjAwMDApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gICAgbGVmdDotMnB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA0cHgpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA0cHgpO1xyXG4gICAgYW5pbWF0aW9uOiBnbG93aW5nIDIwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZ2xvdy1vbi1ob3ZlcjphY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDBcclxufVxyXG5cclxuLmdsb3ctb24taG92ZXI6YWN0aXZlOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZ2xvdy1vbi1ob3Zlcjpob3ZlcjpiZWZvcmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmdsb3ctb24taG92ZXI6YWZ0ZXIge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi53ZWItdmlld3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoYmFyLXdlYnZpZXd7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNTYsIDE0MSwgMTQxKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBnbG93aW5nIHtcclxuICAgIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XHJcbiAgICA1MCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MDAlIDA7IH1cclxuICAgIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KXtcclxuICAuY3VzdG9tLWNhcmR7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KXtcclxuICAuY3VzdG9tLWNhcmR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KXtcclxuICAuY3VzdG9tLWNhcmR7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIH1cclxuICAud2ViLXZpZXd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLm1vYmlsZS12aWV3e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIGlvbi1ncmlke1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIC5yb3ctc2l6ZS1iaWdidG57XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICB9XHJcbiAgLnJvdy1zaXple1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICB9XHJcbiAgLmJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCl7XHJcbiAgLmN1c3RvbS1jYXJke1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCl7XHJcbiAgLmNhcmR7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIH1cclxufSJdfQ== */";
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _pages_chatbot_chatbot_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../pages/chatbot/chatbot.page */
      "./src/app/pages/chatbot/chatbot.page.ts");
      /* harmony import */


      var _services_translate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/translate.service */
      "./src/app/services/translate.service.ts");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_geo_location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/geo-location.service */
      "./src/app/services/geo-location.service.ts");

      var LandingPage = /*#__PURE__*/function () {
        function LandingPage(util, navCtrl, router, data, media, opener, modalCtrl, translateService, auth, locService) {
          _classCallCheck(this, LandingPage);

          this.util = util;
          this.navCtrl = navCtrl;
          this.router = router;
          this.data = data;
          this.media = media;
          this.opener = opener;
          this.modalCtrl = modalCtrl;
          this.translateService = translateService;
          this.auth = auth;
          this.locService = locService;
          this.categories = [];
          this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 3,
            spaceBetween: 10,
            speed: 500
          };
          this.keys = [];
          this.isAuthenticated = undefined;
        }

        _createClass(LandingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.categories = this.data.getTodaysOffers();
            this.images = ["../assets/todaysoffers.PNG", "../assets/todaysoffers.PNG", "../assets/todaysoffers.PNG", "../assets/todaysoffers.PNG", "../assets/todaysoffers.PNG", "../assets/todaysoffers.PNG", "../assets/todaysoffers.PNG", "../assets/todaysoffers.PNG"];
            var userDetails = this.auth.getUserDetails().then(function (data) {
              console.log('data- ', data);
              _this3.isAuthenticated = data;
            });
            this.locService.getGeolocation();
          }
        }, {
          key: "goToBuy",
          value: function goToBuy() {
            this.navCtrl.navigateRoot("tabs/home", {
              animationDirection: "forward"
            });
          }
        }, {
          key: "goToMedicine",
          value: function goToMedicine() {
            this.navCtrl.navigateRoot("tabs/medicines", {
              animationDirection: "forward"
            });
          }
        }, {
          key: "goToFeed",
          value: function goToFeed() {
            this.navCtrl.navigateRoot("tabs/animal-feeds", {
              animationDirection: "forward"
            });
          } // goToSemen() {
          //   this.navCtrl.navigateRoot("home", { animationDirection: "forward" });
          // }

        }, {
          key: "recordAudio",
          value: function recordAudio() {
            var _this4 = this;

            var option = {
              limit: 1
            };
            this.media.captureAudio(option).then(function (mediaFile) {
              _this4.audio = mediaFile[0];
              _this4.keys = Object.keys(_this4.audio);
            });
          }
        }, {
          key: "playAudio",
          value: function playAudio() {
            this.opener.open(this.audio.fullPath, "audio/mpeg");
          }
        }, {
          key: "onClickChatbot",
          value: function onClickChatbot() {
            this.chatModal();
            this.router.navigateByUrl('/tabs/chatbot');
          }
        }, {
          key: "chatModal",
          value: function chatModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _pages_chatbot_chatbot_page__WEBPACK_IMPORTED_MODULE_8__["ChatbotPage"],
                        cssClass: "cart-modal"
                      });

                    case 2:
                      modal = _context.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
            return translateText;
          }
        }, {
          key: "onClickLogout",
          value: function onClickLogout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isAuthenticated = undefined;
                      _context2.next = 3;
                      return this.auth.signOut();

                    case 3:
                      this.router.navigateByUrl('/tabs/landing');

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__["MediaCapture"]
        }, {
          type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _services_translate_service__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
        }, {
          type: _services_geo_location_service__WEBPACK_IMPORTED_MODULE_11__["GeoLocationService"]
        }];
      };

      LandingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-landing",
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


      __webpack_exports__["default"] = ".div {\n  padding: 10% 0%;\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  height: 20%;\n  width: 40%;\n}\n\n.loginButton {\n  color: #000000;\n  --box-shadow: 0px 2px black;\n}\n\nion-grid {\n  height: 70%;\n  width: 90%;\n  margin: 0;\n  padding: 0;\n  font-weight: bold;\n  color: white;\n}\n\n.phno {\n  font-size: 200%;\n  font-weight: bolder;\n}\n\nion-label {\n  text-shadow: 1px 2px black;\n}\n\n.content {\n  background-image: url('bg_2.png') !important;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n@media (min-width: 700px) {\n  .content {\n    background-size: 70% 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWxFRjs7QUFxRUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQWxFRjs7QUFxRUU7RUFDRSxjQUFBO0VBQ0YsMkJBQUE7QUFsRUY7O0FBcUVFO0VBRUUsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQW5FSjs7QUFzRUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFuRUo7O0FBc0VFO0VBQ0UsMEJBQUE7QUFuRUo7O0FBc0VFO0VBRUUsNENBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUFwRUo7O0FBdUVJO0VBQ0U7SUFFQSx5QkFBQTtFQXJFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gVGhpcyB3aWxsIHJlbW92ZSBpT1MgSGVhZGVyIExpbmVcclxuLy8gaW9uLXRvb2xiYXIge1xyXG4vLyAgICAgLS1ib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLy8gUmVtb3ZpbmcgQW5kcm9pZCBIZWFkZXIgTGluZVxyXG4vLyAuaGVhZGVyLW1kOjphZnRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5jb250YWluZXIgaDEge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMDtcclxuLy8gfVxyXG5cclxuLy8gLmJhY2tidG4ge1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5mb3JtLWNvbnRhaW5lciB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZm9ybS1jb250YWluZXIgaW9uLWl0ZW0ge1xyXG4vLyAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4vLyAgICAgLS1ib3JkZXItY29sb3I6ICNEQURBREE7XHJcbi8vIH1cclxuXHJcbi8vIC5mb3JtLWNvbnRhaW5lciBpb24taXRlbSBpb24tbGFiZWwge1xyXG4vLyAgICAgY29sb3I6ICNBNkE2QTY7XHJcbi8vIH1cclxuXHJcbi8vIC5mb3JtLWNvbnRhaW5lciBpb24taXRlbSBpb24taWNvbiB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4vLyAgICAgY29sb3I6ICNjNmNiZDQ7XHJcbi8vIH1cclxuXHJcbi8vIC5mb3JtLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDQ4cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5zaWduLXVwIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5zaWduLXVwIGlvbi1idXR0b24ge1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4vLyAuY2VudGVye1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4vLyAgIH1cclxuXHJcbi8vIG5nLW9wdC1pbnB1dHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTUwJTtcclxuLy8gICBjb2xvcjogcmdiKDEwNCwgOTEsIDgxKTtcclxuLy8gfVxyXG5cclxuLmRpdntcclxuICBwYWRkaW5nOiAxMCUgMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuICAubG9naW5CdXR0b257XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAtLWJveC1zaGFkb3c6IDBweCAycHggYmxhY2s7XHJcbiAgfVxyXG5cclxuICBpb24tZ3JpZHtcclxuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5waG5ve1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbHtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMnB4IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnRcclxuICAgIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2JnXzIucG5nJykhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpe1xyXG4gICAgICAuY29udGVudFxyXG4gICAge1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDcwJSAxMDAlO1xyXG4gICAgfVxyXG4gICAgfSJdfQ== */";
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
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _signup_signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../signup/signup.page */
      "./src/app/signup/signup.page.ts");
      /* harmony import */


      var _services_translate_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/translate.service */
      "./src/app/services/translate.service.ts"); // import { Component, OnInit } from '@angular/core';
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
        function LoginPage(router, auth, modalCtrl, translateService) {
          _classCallCheck(this, LoginPage);

          this.router = router;
          this.auth = auth;
          this.modalCtrl = modalCtrl;
          this.translateService = translateService;
          this.sms = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("+919860067118");
          this.busy_ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
          this.busy = this.busy_.asObservable();
          this.errorMessage_ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]("");
          this.errorMessage = this.errorMessage_.asObservable();
        }

        _createClass(LoginPage, [{
          key: "signIn",
          value: function signIn() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log("In SignIn", this.sms.value);
                      this.busy_.next(true); //this.errorMessage_.next('');

                      _context3.prev = 2;
                      _context3.next = 5;
                      return this.auth.signIn(this.sms.value);

                    case 5:
                      console.log(this.sms.value);
                      this.router.navigate(["/answer-challenge"]);
                      _context3.next = 14;
                      break;

                    case 9:
                      _context3.prev = 9;
                      _context3.t0 = _context3["catch"](2);
                      this.errorMessage_.next(_context3.t0.message || _context3.t0);
                      this.router.navigateByUrl('/tabs/landing');
                      this.nonUsers(this.sms.value);

                    case 14:
                      _context3.prev = 14;
                      this.busy_.next(false);
                      return _context3.finish(14);

                    case 17:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[2, 9, 14, 17]]);
            }));
          }
        }, {
          key: "nonUsers",
          value: function nonUsers(phno) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.modalCtrl.create({
                        component: _signup_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"],
                        cssClass: "cart-modal",
                        componentProps: {
                          "phno": phno
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
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
            return translateText;
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _services_translate_service__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
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


      __webpack_exports__["default"] = ".input {\n  border: 1px solid black;\n  border-radius: 5px;\n  font-weight: bold;\n  margin: 1%;\n  color: black;\n  background-color: white;\n  text-align: center;\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.content {\n  margin: 0;\n  padding: 0;\n  --background: transparent;\n}\n\n.vertical-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.custom-card {\n  top: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5zd2VyLWNoYWxsZW5nZS9hbnN3ZXItY2hhbGxlbmdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUhOOztBQU1JO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQUhOOztBQU1JO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhOOztBQU1JO0VBQ0UsUUFBQTtBQUhOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYW5zd2VyLWNoYWxsZW5nZS9hbnN3ZXItY2hhbGxlbmdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5kaWdpdC1pbnB1dCB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4vLyAgIH1cclxuICAuaW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZsZXh7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnR7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtY2VudGVye1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY3VzdG9tLWNhcmR7XHJcbiAgICAgIHRvcDogMzAlXHJcbiAgICB9Il19 */";
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/translate.service */
      "./src/app/services/translate.service.ts"); // import { Component, OnInit, OnDestroy, AfterContentInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
      // import { Router } from '@angular/router';
      // import { FormControl } from '@angular/forms';
      // import { AuthService } from '../../services/auth.service';
      // import {  BehaviorSubject, Subscription } from 'rxjs';
      // import { tap } from 'rxjs/operators';
      // @Component({
      //   selector: 'app-answer-challenge',
      //   templateUrl: './answer-challenge.page.html',
      //   styleUrls: ['./answer-challenge.page.scss'],
      //   changeDetection: ChangeDetectionStrategy.OnPush,
      // })
      // export class AnswerChallengePage implements OnInit, OnDestroy, AfterContentInit {
      //   digit1 = new FormControl('');
      //   digit2 = new FormControl('');
      //   digit3 = new FormControl('');
      //   digit4 = new FormControl('');
      //   digit5 = new FormControl('');
      //   digit6 = new FormControl('');
      //   @ViewChild('digit1el', { read: ElementRef }) digit1element: ElementRef;
      //   @ViewChild('digit2el', { read: ElementRef }) digit2element: ElementRef;
      //   @ViewChild('digit3el', { read: ElementRef }) digit3element: ElementRef;
      //   @ViewChild('digit4el', { read: ElementRef }) digit4element: ElementRef;
      //   @ViewChild('digit5el', { read: ElementRef }) digit5element: ElementRef;
      //   @ViewChild('digit6el', { read: ElementRef }) digit6element: ElementRef;
      //   private errorMessage_ = new BehaviorSubject('');
      //   public errorMessage = this.errorMessage_.asObservable();
      //   private busy_ = new BehaviorSubject(false);
      //   public busy = this.busy_.asObservable();
      //   private allSubscriptions = new Subscription();
      //   private sms_ = new BehaviorSubject('');
      //   public sms = this.sms_.asObservable();
      //   constructor(private auth: AuthService, private router: Router) { }
      //    ngOnInit() {
      //     // Get e-mail address the code was sent to
      //     // It is a public challenge parameter so let's try it that way
      //      this.auth.getPublicChallengeParameters()
      //       .then(param => this.sms_.next(param.sms));
      //     // Move focus to next field upon entry of a digit
      //     [2, 3, 4, 5, 6].forEach(digit => {
      //       const prev = this[`digit${digit - 1}`] as FormControl;
      //       const next = this[`digit${digit}element`] ;
      //       console.log(next);
      //       this.allSubscriptions.add(prev.valueChanges.pipe(
      //         tap(() => {
      //           if (prev.value) {
      //            console.log(prev.value, prev,next);
      //           //  console.log('BeforesetTimeout');
      //           //  setTimeout(() => {
      //             console.log(next.nativeElement);
      //             next.nativeElement.focus();
      //             next.nativeElement.setSelectionRange(0, 1);
      //              console.log(next.nativeElement);
      //           //  }, 5000);
      //           }
      //         })
      //       ).subscribe());
      //     });
      //     // If the user copy pastes the code into the first digit field
      //     // we'll be so kind to cut it in 6 pieces and distribute it to the right fields
      //     this.allSubscriptions.add(
      //       this.digit1.valueChanges.pipe(
      //         tap(value => {
      //           if (value && value.length > 1) {
      //             const digits = value.split('').slice(0, 6);
      //             this.digit1.setValue(digits[0]);
      //             this.digit2.setValue(digits[1]);
      //             this.digit3.setValue(digits[2]);
      //             this.digit4.setValue(digits[3]);
      //             this.digit5.setValue(digits[4]);
      //             this.digit6.setValue(digits[5]);
      //           }
      //         })
      //       ).subscribe()
      //     );
      //   }
      //   ngOnDestroy() {
      //     this.allSubscriptions.unsubscribe();
      //   }
      //   ngAfterContentInit() {
      //     if(1){
      //     try{
      //       this.digit1element.nativeElement.focus();
      //       console.log('Hello TRY ngAfterContentInit');
      //     }catch{
      //       console.log('Hello Catch ngAfterContentInit');
      //     }
      //   }
      //   }
      //   public async submit() {
      //     try {
      //       this.errorMessage_.next('');
      //       this.busy_.next(true);
      //       const answer = [1, 2, 3, 4, 5, 6]
      //         .map(digit => (this[`digit${digit}`] as FormControl).value)
      //         .join('');
      //       const loginSucceeded = await this.auth.answerCustomChallenge(answer);
      //       if (loginSucceeded) {
      //         this.router.navigate(['/tabs/landing']);
      //       } else {
      //         this.errorMessage_.next('That\'s not the right code');
      //       }
      //     } catch (err) {
      //       this.errorMessage_.next(err.message || err);
      //     } finally {
      //       this.busy_.next(false);
      //     }
      //   }
      // }


      var AnswerChallengePage = /*#__PURE__*/function () {
        // private allSubscriptions = new Subscription();
        // private sms_ = new BehaviorSubject('');
        // public sms = this.sms_.asObservable();
        function AnswerChallengePage(auth, router, translateService) {
          _classCallCheck(this, AnswerChallengePage);

          this.auth = auth;
          this.router = router;
          this.translateService = translateService; // digit1 = new FormControl('');
          // digit2 = new FormControl('');
          // digit3 = new FormControl('');
          // digit4 = new FormControl('');
          // digit5 = new FormControl('');
          // digit6 = new FormControl('');
          // @ViewChild('digit1el', { read: ElementRef }) digit1element: ElementRef;
          // @ViewChild('digit2el', { read: ElementRef }) digit2element: ElementRef;
          // @ViewChild('digit3el', { read: ElementRef }) digit3element: ElementRef;
          // @ViewChild('digit4el', { read: ElementRef }) digit4element: ElementRef;
          // @ViewChild('digit5el', { read: ElementRef }) digit5element: ElementRef;
          // @ViewChild('digit6el', { read: ElementRef }) digit6element: ElementRef;
          // @ViewChild('a', { read: ElementRef }) digit1element: ElementRef;
          // @ViewChild('b', { read: ElementRef }) digit2element: ElementRef;
          // @ViewChild('c', { read: ElementRef }) digit3element: ElementRef;
          // @ViewChild('d', { read: ElementRef }) digit4element: ElementRef;
          // @ViewChild('e', { read: ElementRef }) digit5element: ElementRef;
          // @ViewChild('f', { read: ElementRef }) digit6element: ElementRef;

          this.otpString = [];
          this.errorMessage_ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
          this.errorMessage = this.errorMessage_.asObservable();
          this.busy_ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
          this.busy = this.busy_.asObservable();
        } //  ngOnInit() {
        //   // Get e-mail address the code was sent to
        //   // It is a public challenge parameter so let's try it that way
        //    this.auth.getPublicChallengeParameters()
        //     .then(param => this.sms_.next(param.sms));
        //   // Move focus to next field upon entry of a digit
        //   [2, 3, 4, 5, 6].forEach(digit => {
        //     const prev = this[`digit${digit - 1}`] as FormControl;
        //     const next = this[`digit${digit}element`];
        //     console.log(next);
        //     this.allSubscriptions.add(prev.valueChanges.pipe(
        //       tap(() => {
        //         // if (prev.value) {
        //         //  console.log(prev.value, prev,next);
        //         // //  console.log('BeforesetTimeout');
        //         // //  setTimeout(() => {
        //         //   console.log(next.nativeElement);
        //         //   next.nativeElement.focus();
        //         //   next.nativeElement.setSelectionRange(0, 1);
        //         //    console.log(next.nativeElement);
        //         // //  }, 5000);
        //         // }
        //         if (prev.value === 8 && prev) {
        //           prev.value.setFocus();
        //         } else if (prev.value >= 48 && prev.value <= 57) {
        //           if (next) {
        //             next.setFocus();
        //           }
        //         } else if (prev.value >= 96 && prev.value <= 105) {
        //           if (next) {
        //             next.setFocus();
        //           }
        //         } else {
        //           // prev = '';
        //         }
        //       }
        //       )
        //     ).subscribe());
        //   });
        //   // If the user copy pastes the code into the first digit field
        //   // we'll be so kind to cut it in 6 pieces and distribute it to the right fields
        //   this.allSubscriptions.add(
        //     this.digit1.valueChanges.pipe(
        //       tap(value => {
        //         if (value && value.length > 1) {
        //           const digits = value.split('').slice(0, 6);
        //           this.digit1.setValue(digits[0]);
        //           this.digit2.setValue(digits[1]);
        //           this.digit3.setValue(digits[2]);
        //           this.digit4.setValue(digits[3]);
        //           this.digit5.setValue(digits[4]);
        //           this.digit6.setValue(digits[5]);
        //         }
        //       })
        //     ).subscribe()
        //   );
        // }
        // ngOnDestroy() {
        //   this.allSubscriptions.unsubscribe();
        // }
        // ngAfterContentInit() {
        //   if(1){
        //   try{
        //     this.digit1element.nativeElement.focus();
        //     console.log('Hello TRY ngAfterContentInit');
        //   }catch{
        //     console.log('Hello Catch ngAfterContentInit');
        //   }
        // }
        // }


        _createClass(AnswerChallengePage, [{
          key: "moveFocus",
          value: function moveFocus(event, nextElement, previousElement) {
            console.log(nextElement);
            console.log(previousElement);

            if (event.keyCode == 8 && previousElement) {
              previousElement.setFocus();
              this.otpString.pop();
            } else if (event.keyCode >= 48 && event.keyCode <= 57) {
              if (nextElement) {
                nextElement.setFocus();
                this.otpString.push(event.key);
              }
            } else if (event.keyCode >= 96 && event.keyCode <= 105) {
              if (nextElement) {
                nextElement.setFocus();
              }
            } else {
              event.path[0].value = '';
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var answer, loginSucceeded;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      this.errorMessage_.next('');
                      this.busy_.next(true); // const answer = [1, 2, 3, 4, 5, 6]
                      //   .map(digit => (this[`digit${digit}`] as FormControl).value)
                      //   .join('');

                      answer = this.otpString.join('');
                      this.answer_1 = this.otpString.join('');
                      _context5.next = 7;
                      return this.auth.answerCustomChallenge(answer);

                    case 7:
                      loginSucceeded = _context5.sent;

                      if (loginSucceeded) {
                        this.router.navigate(['/tabs/landing']);
                      } else {
                        this.errorMessage_.next('That\'s not the right code');
                      }

                      _context5.next = 14;
                      break;

                    case 11:
                      _context5.prev = 11;
                      _context5.t0 = _context5["catch"](0);
                      this.errorMessage_.next(_context5.t0.message || _context5.t0);

                    case 14:
                      _context5.prev = 14;
                      this.busy_.next(false);
                      return _context5.finish(14);

                    case 17:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 11, 14, 17]]);
            }));
          }
        }, {
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
            return translateText;
          }
        }]);

        return AnswerChallengePage;
      }();

      AnswerChallengePage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartModalPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
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


      __webpack_exports__["default"] = "ion-text {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.list {\n  margin: 3%;\n}\n\nion-content {\n  margin: 0;\n  padding: 0;\n}\n\nion-card {\n  margin: 0;\n  padding: 0;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n}\n\nion-avatar {\n  border: 3px solid white;\n}\n\n.itemDetails {\n  font-size: 10px;\n}\n\na {\n  text-decoration: underline;\n}\n\n.priceTable {\n  opacity: 50%;\n  font-size: 10px;\n  font-weight: lighter;\n}\n\n.center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\np {\n  font-size: 70%;\n}\n\n.del-icon {\n  z-index: 2;\n}\n\nion-grid {\n  margin: 0;\n  padding: 0;\n}\n\nion-row {\n  margin: 0;\n  padding: 0;\n}\n\nion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.pager {\n  border-bottom: 1px solid silver;\n}\n\n.form {\n  margin: 0;\n  padding: 0;\n}\n\nion-slides {\n  margin: 0;\n  padding: 0;\n}\n\nion-slide {\n  margin: 0;\n  padding: 0;\n}\n\n.form-heading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-title {\n  color: white;\n}\n\nion-input {\n  color: white;\n}\n\nion-select {\n  width: 100%;\n  --ion-text-color: white !important;\n  --background: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC1tb2RhbC9jYXJ0LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWNFO0VBQ0UsVUFBQTtBQVhKOztBQWNFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFYSjs7QUFjRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBWEo7O0FBY0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFYSjs7QUFjRTtFQUNFLHVCQUFBO0FBWEo7O0FBY0U7RUFDRSxlQUFBO0FBWEo7O0FBY0U7RUFDRSwwQkFBQTtBQVhKOztBQWNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQVhKOztBQWVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVpKOztBQWVFO0VBQ0UsY0FBQTtBQVpKOztBQWVFO0VBQ0UsVUFBQTtBQVpKOztBQXNCRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBbkJKOztBQXNCRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBbkJKOztBQXNCRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBbkJKOztBQXNCRTtFQUNFLCtCQUFBO0FBbkJKOztBQXNCRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBbkJKOztBQXNCRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBbkJKOztBQXNCRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBbkJKOztBQXNCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBbkJKOztBQXNCRTtFQUNFLFlBQUE7QUFuQko7O0FBc0JFO0VBQ0UsWUFBQTtBQW5CSjs7QUFzQkU7RUFDRSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtBQW5CSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQtbW9kYWwvY2FydC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tYnV0dG9ue1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiMwZmQxNWQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1jb250ZW50e1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpXHJcbi8vIH1cclxuXHJcbi8vIGlvbi1pdGVte1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOnZhcigtLWJhY2tncm91bmQpXHJcbi8vIH1cclxuXHJcbmlvbi10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0e1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1hdmF0YXJ7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW1EZXRhaWxze1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmljZVRhYmxle1xyXG4gICAgb3BhY2l0eTogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBwe1xyXG4gICAgZm9udC1zaXplOiA3MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZWwtaWNvbntcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGlvbi10b29sYmFye1xyXG4gIC8vICAgaW9uLWl0ZW17XHJcbiAgLy8gICAgIC0tYmFja2dyb3VuZDogIzM2MzYzRjtcclxuICAvLyAgIH1cclxuICAvLyAgIC0tYmFja2dyb3VuZDogIzM2MzYzRjtcclxuICAvLyB9XHJcbiAgXHJcbiAgaW9uLWdyaWR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBpb24tcm93e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3Jte1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNsaWRlc3tcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zbGlkZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWhlYWRpbmd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pbnB1dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlbGVjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLS1pb24tdGV4dC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgIl19 */";
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
      /* harmony import */


      var _services_adform_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/adform.json */
      "./src/app/services/adform.json");

      var _services_adform_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../../services/adform.json */
      "./src/app/services/adform.json", 1);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/translate.service */
      "./src/app/services/translate.service.ts");

      var CartModalPage = /*#__PURE__*/function () {
        function CartModalPage(fb, cartService, modalCtrl, alertCtrl, translateService) {
          _classCallCheck(this, CartModalPage);

          this.fb = fb;
          this.cartService = cartService;
          this.modalCtrl = modalCtrl;
          this.alertCtrl = alertCtrl;
          this.translateService = translateService;
          this.cart = [];
          this.paymentHandler = null;
          this.setPayment = false;
          this.jsonform = _services_adform_json__WEBPACK_IMPORTED_MODULE_5__;
          this.addressForm = this.fb.group({});
          this.flag = false;
          this.addressData = [];
        }

        _createClass(CartModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addressForm = this.fb.group({});
            this.createForm(this.jsonform.address);
            this.cart = this.cartService.getCart();
            this.invokeStripe();
          }
        }, {
          key: "createForm",
          value: function createForm(controls) {
            var _iterator = _createForOfIteratorHelper(controls),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var control = _step.value;
                var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
                this.addressForm.addControl(control.name, formControl);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
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
          key: "nextAddress",
          value: function nextAddress() {
            this.flag = true;
          }
        }, {
          key: "onSelectAddress",
          value: function onSelectAddress(event) {
            console.log("event- ", event);
          }
        }, {
          key: "addAddress",
          value: function addAddress() {
            this.addressData.push(this.addressForm.get("address").value);
            this.addressForm.reset();
          }
        }, {
          key: "deleteAddress",
          value: function deleteAddress(i) {
            this.addressData.splice(i, 1);
          } //Payment gateway integration

        }, {
          key: "onPayClick",
          value: function onPayClick() {
            this.setPayment = true;
            console.log(this.setPayment);
          }
        }, {
          key: "close",
          value: function close() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "makePayment",
          value: function makePayment() {
            this.addressForm.reset();
            var am = this.getTotal();
            console.log("am", am); // eslint-disable-next-line @typescript-eslint/consistent-type-assertions

            var paymentHandler = window.StripeCheckout.configure({
              key: "pk_test_51JqTubSAZUn6C88GS5ILZDMBqPPT6muJJTGbEpEzlU75uqDp67cgfdQQ9Tmho6oiGa0Sw3Fbwe1RnbaPpaDHVz3900da13KE72",
              locale: "auto",
              currency: "inr",
              email: "prathamesh@flixdrop.com",
              card: "5698478569851452",
              // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
              token: function token(stripeToken) {
                console.log(stripeToken);
                alert("Stripe token generated!");
              }
            });
            paymentHandler.open({
              name: "Flixdrop-Medicine-Accessories",
              description: "Medicine",
              amount: am * 100
            });
            this.cartService.resetCartItemCount();
            this.modalCtrl.dismiss();
          }
        }, {
          key: "invokeStripe",
          value: function invokeStripe() {
            var _this5 = this;

            if (!window.document.getElementById("stripe-script")) {
              var script = window.document.createElement("script");
              script.id = "stripe-script";
              script.type = "text/javascript";
              script.src = "https://checkout.stripe.com/checkout.js";

              script.onload = function () {
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                _this5.paymentHandler = window.StripeCheckout.configure({
                  key: "pk_test_51JqTubSAZUn6C88GS5ILZDMBqPPT6muJJTGbEpEzlU75uqDp67cgfdQQ9Tmho6oiGa0Sw3Fbwe1RnbaPpaDHVz3900da13KE72",
                  locale: "auto",
                  currency: "inr",
                  email: "prathamesh@flixdrop.com",
                  card: "5698478569851452",
                  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                  token: function token(stripeToken) {
                    console.log(stripeToken);
                    alert("Payment has been successfull!");
                  }
                });
              };

              window.document.body.appendChild(script);
            }
          }
        }, {
          key: "checkout",
          value: function checkout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }, {
          key: "medModal",
          value: function medModal(product) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var modal;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.modalCtrl.create({
                        component: _med_modal_med_modal_page__WEBPACK_IMPORTED_MODULE_4__["MedModalPage"],
                        cssClass: "cart-modal",
                        componentProps: {
                          name: product.name,
                          image: product.image,
                          price: product.price
                        }
                      });

                    case 2:
                      modal = _context7.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
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
        }, {
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
            return translateText;
          }
        }]);

        return CartModalPage;
      }();

      CartModalPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      CartModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-cart-modal",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart-modal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart-modal/cart-modal.page.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart-modal.page.scss */
        "./src/app/pages/cart-modal/cart-modal.page.scss"))["default"]]
      })], CartModalPage);
      /***/
    },

    /***/
    "./src/app/pages/chatbot/chatbot.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/chatbot/chatbot.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesChatbotChatbotPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".person-1 {\n  margin: 2%;\n  padding: 0% 2%;\n  background-color: white;\n  border-radius: 0px 10px 10px 10px;\n  box-shadow: 1px 2px silver;\n}\n\n.person-2 {\n  margin: 2%;\n  padding: 0% 2%;\n  background-color: orange;\n  border-radius: 10px 0px 10px 10px;\n  box-shadow: -2px 1px silver;\n}\n\ntextarea {\n  resize: none;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdGJvdC9jaGF0Ym90LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXRib3QvY2hhdGJvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVyc29uLTF7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgcGFkZGluZzogMCUgMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggc2lsdmVyO1xyXG59XHJcblxyXG4ucGVyc29uLTJ7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgcGFkZGluZzogMCUgMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAtMnB4IDFweCBzaWx2ZXI7XHJcbn1cclxuXHJcbnRleHRhcmVhe1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/chatbot/chatbot.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/chatbot/chatbot.page.ts ***!
      \***********************************************/

    /*! exports provided: ChatbotPage */

    /***/
    function srcAppPagesChatbotChatbotPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatbotPage", function () {
        return ChatbotPage;
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


      var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/translate.service */
      "./src/app/services/translate.service.ts");

      var ChatbotPage = /*#__PURE__*/function () {
        function ChatbotPage(modalCtrl, translateService) {
          _classCallCheck(this, ChatbotPage);

          this.modalCtrl = modalCtrl;
          this.translateService = translateService;
          this.messages = [{
            user: "prathamesh",
            createdAt: new Date().getTime(),
            msg: "Hii, how are you?"
          }, {
            user: "vaishnao",
            createdAt: new Date().getTime(),
            msg: "I'm good, thanks! What about you?"
          }];
          this.currentUser = 'vaishnao';
          this.newMsg = '';
        }

        _createClass(ChatbotPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            this.messages.push({
              user: 'vaishnao',
              createdAt: new Date().getTime(),
              msg: this.newMsg
            });
            this.newMsg = '';
            this.content.scrollToBottom(250);
          }
        }, {
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
            return translateText;
          }
        }]);

        return ChatbotPage;
      }();

      ChatbotPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      };

      ChatbotPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]]
        }]
      };
      ChatbotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chatbot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./chatbot.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chatbot/chatbot.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./chatbot.page.scss */
        "./src/app/pages/chatbot/chatbot.page.scss"))["default"]]
      })], ChatbotPage);
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
    "./src/app/services/adform.json":
    /*!**************************************!*\
      !*** ./src/app/services/adform.json ***!
      \**************************************/

    /*! exports provided: form_1, form_2, userprofile, address, default */

    /***/
    function srcAppServicesAdformJson(module) {
      module.exports = JSON.parse("{\"form_1\":[{\"name\":\"animalName\",\"label\":\"Animal Name\",\"value\":\"\",\"type\":\"text\"},{\"animaltype\":[\"cow\",\"buffalo\",\"ox\"],\"name\":\"type\",\"label\":\"Animal Type\",\"value\":\"\",\"type\":\"select\"},{\"cow\":[\"cow 1\",\"cow 2\",\"cow 3\"],\"buffalo\":[\"buffalo 1\",\"buffalo 2\",\"buffalo 3\"],\"ox\":[\"ox 1\",\"ox 2\",\"ox 3\"],\"name\":\"breed\",\"label\":\"Animal Breed\",\"value\":\"\",\"type\":\"select\"},{\"name\":\"description\",\"label\":\"Description about the Animal\",\"value\":\"\",\"type\":\"textarea\",\"placeholder\":\"describe your animal.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"quotedPrice\",\"label\":\"Asking Price\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter expected price.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"weight\",\"label\":\"Animal Weight\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter animal wieght.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"age\",\"label\":\"Animal Age\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter animal age.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"lactationNumber\",\"label\":\"Lactation\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter no. of lactation.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"milkPerDay\",\"label\":\"Milk/Day\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter milk quantity per day.\",\"validators\":{\"required\":true,\"minLength\":10}}],\"form_2\":[{\"name\":\"ownerName\",\"label\":\"Owner Name\",\"value\":\"\",\"type\":\"text\",\"placeholder\":\"enter your name.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"phone\",\"label\":\"Phone No.\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter your Phone No.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"state\",\"label\":\"State\",\"value\":\"\",\"type\":\"select\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"district\",\"label\":\"District\",\"value\":\"\",\"type\":\"select\"},{\"name\":\"town\",\"label\":\"Town\",\"value\":\"\",\"type\":\"text\",\"placeholder\":\"enter your town name.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"imagesList\",\"label\":\"Upload Images\",\"value\":\"\",\"type\":\"file\"}],\"userprofile\":[{\"name\":\"name\",\"label\":\"Name\",\"value\":\"\",\"type\":\"text\",\"placeholder\":\"enter your name.\"},{\"name\":\"address\",\"label\":\"Address\",\"value\":\"\",\"type\":\"textarea\",\"placeholder\":\"enter your address.\"},{\"name\":\"city\",\"label\":\"City\",\"value\":\"\",\"type\":\"select\"},{\"name\":\"gender\",\"label\":\"Gender\",\"value\":\"\",\"type\":\"toggle\"},{\"name\":\"quotedPrice\",\"label\":\"Asking price\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter expected price.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"weight\",\"label\":\"Animal weight\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter animal wieght.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"age\",\"label\":\"Animal age\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter animal age.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"lactationNumber\",\"label\":\"Lactation\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter no. of lactation.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"milkPerDay\",\"label\":\"Milk/Day\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter milk quantity per day.\",\"validators\":{\"required\":true,\"minLength\":10}}],\"address\":[{\"name\":\"address\",\"label\":\"Address\",\"value\":\"\",\"type\":\"textarea\"}]}");
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.auth.isAuthenticated();

                    case 2:
                      if (!_context8.sent) {
                        _context8.next = 4;
                        break;
                      }

                      return _context8.abrupt("return", true);

                    case 4:
                      this.router.navigate(['/login']);
                      return _context8.abrupt("return", false);

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.auth.isAuthenticated();

                    case 2:
                      if (_context9.sent) {
                        _context9.next = 4;
                        break;
                      }

                      return _context9.abrupt("return", true);

                    case 4:
                      this.router.navigateByUrl('/tabs/landing');
                      return _context9.abrupt("return", false);

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      console.log('Service', sms, aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"]);
                      _context10.next = 3;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signIn(sms);

                    case 3:
                      this.cognitoUser = _context10.sent;
                      console.log('Service this.cognitoUser', this.cognitoUser);

                    case 5:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut();

                    case 2:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));
          }
        }, {
          key: "answerCustomChallenge",
          value: function answerCustomChallenge(answer) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].sendCustomChallengeAnswer(this.cognitoUser, answer);

                    case 2:
                      this.cognitoUser = _context12.sent;
                      return _context12.abrupt("return", this.isAuthenticated());

                    case 4:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "getPublicChallengeParameters",
          value: function getPublicChallengeParameters() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      return _context13.abrupt("return", this.cognitoUser.challengeParam);

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "signUp",
          value: function signUp(sms, fullName) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var params;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      params = {
                        username: sms,
                        password: this.getRandomString(30),
                        attributes: {
                          name: fullName
                        }
                      };
                      _context14.next = 3;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp(params);

                    case 3:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.prev = 0;
                      _context15.next = 3;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentSession();

                    case 3:
                      return _context15.abrupt("return", true);

                    case 6:
                      _context15.prev = 6;
                      _context15.t0 = _context15["catch"](0);
                      return _context15.abrupt("return", false);

                    case 9:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, null, [[0, 6]]);
            }));
          } // eslint-disable-next-line @typescript-eslint/member-ordering

        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      if (this.cognitoUser) {
                        _context16.next = 4;
                        break;
                      }

                      _context16.next = 3;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser();

                    case 3:
                      this.cognitoUser = _context16.sent;

                    case 4:
                      _context16.next = 6;
                      return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].userAttributes(this.cognitoUser);

                    case 6:
                      return _context16.abrupt("return", _context16.sent);

                    case 7:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
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
          this.data_1 = [{
            id: 0,
            name: 'Feed1',
            price: 250,
            image: '../../assets/animal-feed/feed_1.jpg',
            amount: 0
          }, {
            id: 1,
            name: 'Feed2',
            price: 350,
            image: '../../assets/animal-feed/feed_2.jpg',
            amount: 0
          }, {
            id: 2,
            name: 'Feed3',
            price: 400,
            image: '../../assets/animal-feed/feed_3.jpg',
            amount: 0
          }, {
            id: 3,
            name: 'Feed4',
            price: 500,
            image: '../../assets/animal-feed/feed_4.jpg',
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
          key: "getAnimalFeed",
          value: function getAnimalFeed() {
            return this.data_1;
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
          key: "resetCartItemCount",
          value: function resetCartItemCount() {
            this.cartItemCount.next(0);
            this.cart = [];
          }
        }, {
          key: "addProduct",
          value: function addProduct(product) {
            var added = false;

            var _iterator2 = _createForOfIteratorHelper(this.cart),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var p = _step2.value;

                if (p.id === product.id) {
                  p.amount += 1;
                  added = true;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
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
            var _iterator3 = _createForOfIteratorHelper(this.cart.entries()),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _step3$value = _slicedToArray(_step3.value, 2),
                    index = _step3$value[0],
                    p = _step3$value[1];

                if (p.id === product.id) {
                  p.amount -= 1;

                  if (p.amount == 0) {
                    this.cart.splice(index, 1);
                  }
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this.cartItemCount.next(this.cartItemCount.value - 1);
          }
        }, {
          key: "removeProduct",
          value: function removeProduct(product) {
            var _iterator4 = _createForOfIteratorHelper(this.cart.entries()),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _step4$value = _slicedToArray(_step4.value, 2),
                    index = _step4$value[0],
                    p = _step4$value[1];

                if (p.id === product.id) {
                  this.cartItemCount.next(this.cartItemCount.value - p.amount);
                  this.cart.splice(index, 1);
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
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
    "./src/app/services/geo-location.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/services/geo-location.service.ts ***!
      \**************************************************/

    /*! exports provided: GeoLocationService */

    /***/
    function srcAppServicesGeoLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeoLocationService", function () {
        return GeoLocationService;
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


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");

      var GeoLocationService = /*#__PURE__*/function () {
        function GeoLocationService(geolocation, nativeGeocoder) {
          _classCallCheck(this, GeoLocationService);

          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder; //Geocoder configuration

          this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
          };
        } //Get current coordinates of device


        _createClass(GeoLocationService, [{
          key: "getGeolocation",
          value: function getGeolocation() {
            var _this6 = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              _this6.latitude = resp.coords.latitude;
              _this6.longitude = resp.coords.longitude;
              _this6.accuracy = resp.coords.accuracy;

              _this6.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
            })["catch"](function (error) {
              alert('Error getting location' + JSON.stringify(error));
            });
          } //geocoder method to fetch address from coordinates passed as arguments

        }, {
          key: "getGeoencoder",
          value: function getGeoencoder(latitude, longitude) {
            var _this7 = this;

            this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions).then(function (result) {
              console.log("In geolocation", result);
              _this7.address = result[0]['subLocality'] + ',' + result[0]['locality'] + ',' + result[0]['administrativeArea']; // this.fullAddress= this.generateAddress(result[0]);

              console.log('address- ', _this7.address);
            })["catch"](function (error) {
              alert('Error getting location' + JSON.stringify(error));
            });
          } //Return Comma saperated address

        }, {
          key: "generateAddress",
          value: function generateAddress(addressObj) {
            var obj = [];
            var address = "";

            for (var key in addressObj) {
              obj.push(addressObj[key]);
            }

            obj.reverse();

            for (var val in obj) {
              if (obj[val].length) {
                address += obj[val] + ', ';
              }
            }

            return address.slice(0, -2);
          }
        }]);

        return GeoLocationService;
      }();

      GeoLocationService.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]
        }];
      };

      GeoLocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GeoLocationService);
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
    "./src/app/services/translate.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/translate.service.ts ***!
      \***********************************************/

    /*! exports provided: TranslateService */

    /***/
    function srcAppServicesTranslateServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslateService", function () {
        return TranslateService;
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

      var TranslateService = /*#__PURE__*/function () {
        function TranslateService() {
          _classCallCheck(this, TranslateService);

          this.currentLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
          this.languages = {
            kannada: {
              "Phone Number": "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
              "GET OTP": "ಒಟಿಪಿ ಪಡೆಯಿರಿ",
              "Please Sign Up": "ದಯವಿಟ್ಟು ಸೈನ್ ಅಪ್ ಮಾಡಿ",
              "We'd be happy to have you join our community!": "ನೀವು ನಮ್ಮ ಸಮುದಾಯವನ್ನು ಸೇರಲು ನಾವು ಸಂತೋಷಪಡುತ್ತೇವೆ!",
              "You are almost there!": "ನೀವು ಬಹುತೇಕ ಅಲ್ಲಿದ್ದೀರಿ!",
              "Full Name": "ಪೂರ್ಣ ಹೆಸರು",
              "Continue without login": "ಲಾಗಿನ್ ಮಾಡದೆಯೇ ಮುಂದುವರಿಸಿ",
              "SIGN UP": "ಸೈನ್ ಅಪ್ ಮಾಡಿ",
              "Already signed up?": "ಈಗಾಗಲೇ ಸೈನ್ ಅಪ್ ಮಾಡಲಾಗಿದೆ?",
              "Sign in": "ಸೈನ್ ಇನ್ ಮಾಡಿ",
              "Sign-In": "ಸೈನ್-ಇನ್",
              "Please enter the secret code you received to complete sign-in": "ಸೈನ್-ಇನ್ ಅನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ನೀವು ಸ್ವೀಕರಿಸಿದ ರಹಸ್ಯ ಕೋಡ್ ಅನ್ನು ನಮೂದಿಸಿ",
              "Continue": "ಮುಂದುವರಿಸಿ",
              "Sell your cattle at the best price online.": "ನಿಮ್ಮ ಜಾನುವಾರುಗಳನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಉತ್ತಮ ಬೆಲೆಗೆ ಮಾರಾಟ ಮಾಡಿ.",
              "Buy your preferred breed of cattle from wide range in just one click": "ಕೇವಲ ಒಂದು ಕ್ಲಿಕ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಆದ್ಯತೆಯ ತಳಿಯ ಜಾನುವಾರುಗಳನ್ನು ವ್ಯಾಪಕ ಶ್ರೇಣಿಯಿಂದ ಖರೀದಿಸಿ",
              "Order Animal Medicine at huge discount by ‘search’ or by ‘uploading doctor’s prescription’. Get Home Delivery": "'ಹುಡುಕಾಟ' ಅಥವಾ 'ವೈದ್ಯರ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡುವ ಮೂಲಕ' ಅನಿಮಲ್ ಮೆಡಿಸಿನ್ ಅನ್ನು ಭಾರಿ ರಿಯಾಯಿತಿಯಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ. ಹೋಮ್ ಡೆಲಿವರಿ ಪಡೆಯಿರಿ",
              "Order best Cattle Feeds from famous suppliers at anywhere in India. Increase Milk yield.": "ಭಾರತದಲ್ಲಿ ಎಲ್ಲಿಯಾದರೂ ಪ್ರಸಿದ್ಧ ಪೂರೈಕೆದಾರರಿಂದ ಉತ್ತಮ ಜಾನುವಾರು ಮೇವುಗಳನ್ನು ಆರ್ಡರ್ ಮಾಡಿ. ಹಾಲಿನ ಇಳುವರಿ ಹೆಚ್ಚಿಸಿ.",
              "FINISH": "ಮುಗಿಸು",
              "Search Cattles": "ದನಗಳನ್ನು ಹುಡುಕಿ",
              "FREE VET DOCTOR 24/7": "ಉಚಿತ ವೆಟ್ ಡಾಕ್ಟರ್ 24/7",
              "BUY/SELL": "ಖರೀದಿ/ಮಾರಾಟ",
              "ANIMAL": "ಪ್ರಾಣಿ",
              "VET": "ಪಶುವೈದ್ಯಕೀಯ",
              "FEED": "ಫೀಡ್",
              "MEDICINE": "ಔಷಧಿ",
              "MEDICINES": "ಔಷಧಿಗಳು",
              "TODAY's OFFERS": "ಇಂದಿನ ಕೊಡುಗೆಗಳು",
              "Offer Details": "ಆಫರ್ ವಿವರಗಳು",
              "HELP": "ಸಹಾಯ",
              "HOME": "ಮನೆ",
              "PROFILE": "ಖಾತೆ",
              "MY CART": "ನನ್ನ ವಸ್ತುಗಳು",
              "FAVORITES": "ನೆಚ್ಚಿನ",
              "ORDERS": "ಆದೇಶಗಳು",
              "MY ORDERS": "ಆದೇಶಗಳು",
              "MY ADs": "ನನ್ನ ಜಾಹೀರಾತು",
              "VET PHARMA": "ಪಶುವೈದ್ಯಕೀಯ ಔಷಧಿ",
              "BACK": "ಹಿಂದೆ",
              "BLOG PAGE": "ಬ್ಲಾಗ್ ಪುಟ",
              "Blogs and Feedback": "ಬ್ಲಾಗ್‌ಗಳು ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ",
              "ARTICLE TITLE": "ಲೇಖನ ಶೀರ್ಷಿಕೆ",
              "SUB TITLE OF THE ARTICLE": "ಲೇಖನದ ಉಪಶೀರ್ಷಿಕೆ",
              "READ LESS": "ಕಡಿಮೆ ಓದಿ",
              "READ MORE...": "ಮತ್ತಷ್ಟು ಓದು...",
              "Give Feedback...": "ಪ್ರತಿಕ್ರಿಯೆ ನೀಡಿ...",
              "Cattle Name": "ಜಾನುವಾರು ಹೆಸರು",
              "Price": "ಬೆಲೆ",
              "Breed": "ತಳಿ",
              "Lactation": "ಹಾಲುಣಿಸುವಿಕೆ",
              "Milk/Day": "ಹಾಲು/ದಿನ",
              "Age": "ವಯಸ್ಸು",
              "DISCARD": "ತಿರಸ್ಕರಿಸು",
              "POST THIS": "ಇದನ್ನು ಪೋಸ್ಟ್ ಮಾಡಿ",
              "Search my ADs": "ನನ್ನ ಹುಡುಕಿ ಜಾಹೀರಾತು",
              "Please Wait...": "ದಯಮಾಡಿ ನಿರೀಕ್ಷಿಸಿ...",
              "Status": "ಸ್ಥಿತಿ",
              "Calf": "ಕರು",
              "SUCCESSFULLY POSTED!": "ಯಶಸ್ವಿಯಾಗಿ ಪೋಸ್ಟ್ ಮಾಡಲಾಗಿದೆ!",
              "OK!": "ಸರಿ!",
              "ANIMAL FEEDS": "ಪ್ರಾಣಿ ಆಹಾರ",
              "Add to cart": "ಕಾರ್ಟ್ಗೆ ಸೇರಿಸಿ",
              "Save for later": "ನಂತರಕ್ಕೆ ಉಳಿಸು",
              "You have a Promo Code? Apply Here": "ನೀವು ಪ್ರೋಮೋ ಕೋಡ್ ಹೊಂದಿದ್ದೀರಾ? ಇಲ್ಲಿ ಅನ್ವಯಿಸಿ",
              "BOT-CHAT ASSISTANCE": "ಸಂದೇಶ ಸಹಾಯಕ",
              "E-Mail": "ಇಮೇಲ್",
              "Give Feedback": "ಪ್ರತಿಕ್ರಿಯೆ ನೀಡಿ",
              "Send Feedback": "ಪ್ರತಿಕ್ರಿಯೆ ಕಳುಹಿಸಿ",
              "Search medicines": "ಔಷಧಿಗಳನ್ನು ಹುಡುಕಿ",
              "Animal Details": "ಪ್ರಾಣಿಗಳ ವಿವರಗಳು",
              "Animal Name": "ಪ್ರಾಣಿಯ ಹೆಸರು -",
              "Animal Type": "ಪ್ರಾಣಿ ಪ್ರಕಾರ -",
              "Animal Breed": "ಪ್ರಾಣಿ ತಳಿ -",
              "Description about the Animal": "ಪ್ರಾಣಿಯ ಬಗ್ಗೆ ವಿವರಣೆ-",
              "Asking Price": "ಬೆಲೆ ಕೇಳಲಾಗುತ್ತಿದೆ -",
              "Animal Weight": "ಪ್ರಾಣಿಗಳ ತೂಕ -",
              "Milk Per Day": "ದಿನಕ್ಕೆ ಹಾಲು -",
              "Seller Details": "ಮಾರಾಟಗಾರರ ವಿವರಗಳು",
              "Owner Name": "ಮಾಲೀಕರ ಹೆಸರು-",
              "Phone No.": "ದೂರವಾಣಿ ಸಂಖ್ಯೆ.-",
              "District": "ಜಿಲ್ಲೆ-",
              "State": "ರಾಜ್ಯ-",
              "Town": "ಪಟ್ಟಣ -",
              "Save": "ಉಳಿಸಿ",
              "USER PROFILE": "ಬಳಕೆದಾರರ ಪ್ರೊಫೈಲ್",
              "User Profile": "ಬಳಕೆದಾರರ ಪ್ರೊಫೈಲ್",
              "edit": "ತಿದ್ದು",
              "PUBLISH ADs": "ಜಾಹೀರಾತುಗಳನ್ನು ಪ್ರಕಟಿಸಿ",
              "Seller Form": "ಮಾರಾಟಗಾರರ ಫಾರ್ಮ್",
              "Animal Form": "ಪ್ರಾಣಿ ರೂಪ",
              "Upload Images": "ಚಿತ್ರಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ",
              "Animal Age": "ಪ್ರಾಣಿ ವಯಸ್ಸು",
              "BUY ANIMALS": "ಪ್ರಾಣಿಗಳನ್ನು ಖರೀದಿಸಿ",
              "Type of Cattles": "ಜಾನುವಾರುಗಳ ವಿಧ",
              "See all": "ಎಲ್ಲವನ್ನೂ ನೋಡು",
              "Featured": "ವೈಶಿಷ್ಟ್ಯಗೊಳಿಸಲಾಗಿದೆ",
              "New AD": "ಹೊಸದು ಜಾಹೀರಾತು",
              "Next": "ಮುಂದೆ",
              "Preview": "ಮುನ್ನೋಟ",
              "AD CREATED SUCCESSFULLY": "ಜಾಹೀರಾತು ಯಶಸ್ವಿಯಾಗಿ ರಚಿಸಲಾಗಿದೆ",
              "Logout": "ಲಾಗ್ ಔಟ್",
              "CART ITEMS": "ಕಾರ್ಟ್ ಐಟಂಗಳು",
              "Order Again": "ಮತ್ತೆ ಆರ್ಡರ್ ಮಾಡಿ",
              "Best Sell": "ಅತ್ಯುತ್ತಮ ಮಾರಾಟ"
            }
          };
        }

        _createClass(TranslateService, [{
          key: "doTranslation",
          value: function doTranslation(text, value) {
            var val = value;

            if (val === null) {
              val = "en";
            }

            var languageObj = this.languages[val];

            if (languageObj !== undefined) {
              if (languageObj[text] !== undefined) {
                return languageObj[text];
              } else {
                return text;
              }
            } else {
              return text;
            }
          }
        }]);

        return TranslateService;
      }();

      TranslateService.ctorParameters = function () {
        return [];
      };

      TranslateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TranslateService);
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


      __webpack_exports__["default"] = ".center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.custom-card {\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  top: 15%;\n}\n\nion-content {\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQTNESjs7QUE4REE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FBM0RKOztBQThEQTtFQUNJLG9DQUFBO0FBM0RKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyBUaGlzIHdpbGwgcmVtb3ZlIGlPUyBIZWFkZXIgTGluZVxyXG4vLyBpb24tdG9vbGJhciB7XHJcbi8vICAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAvLyBSZW1vdmluZyBBbmRyb2lkIEhlYWRlciBMaW5lXHJcbi8vIC5oZWFkZXItbWQ6OmFmdGVyIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmNvbnRhaW5lciBoMSB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAwO1xyXG4vLyB9XHJcblxyXG4vLyAuYmFja2J0biB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLmZvcm0tY29udGFpbmVyIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDQ4cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5mb3JtLWNvbnRhaW5lciBpb24taXRlbSB7XHJcbi8vICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbi8vICAgICAtLWJvcmRlci1jb2xvcjogIzQwNDU0ZDtcclxuLy8gfVxyXG5cclxuLy8gLmZvcm0tY29udGFpbmVyIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbi8vICAgICBjb2xvcjogI0E2QTZBNjtcclxuLy8gfVxyXG5cclxuLy8gLmZvcm0tY29udGFpbmVyIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbi8vICAgICBjb2xvcjogIzQwNDU0ZDtcclxuLy8gfVxyXG5cclxuLy8gLmZvcm0tY29udGFpbmVyIGlvbi1idXR0b24ge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNDhweDtcclxuLy8gfVxyXG5cclxuLy8gLnNpZ24tdXAge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLnNpZ24tdXAgaW9uLWJ1dHRvbiB7XHJcbi8vICAgICBtYXJnaW46IDA7XHJcbi8vIH1cclxuLy8gaW9uLWlucHV0e1xyXG4vLyAgICAgY29sb3I6ICNkZGRjZGM7XHJcbi8vIH1cclxuLy8gaW9uLWNhcmR7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IzM2MzYzRjtcclxuLy8gfVxyXG5cclxuLy8gLmNvbnRlbnR7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyB9XHJcblxyXG4uY2VudGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmN1c3RvbS1jYXJke1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHRvcDogMTUlO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufSJdfQ== */";
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_translate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/translate.service */
      "./src/app/services/translate.service.ts");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(router, auth, modalCtrl, translateService) {
          _classCallCheck(this, SignupPage);

          this.router = router;
          this.auth = auth;
          this.modalCtrl = modalCtrl;
          this.translateService = translateService;
          this.busy_ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
          this.busy = this.busy_.asObservable();
          this.errorMessage_ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
          this.errorMessage = this.errorMessage_.asObservable();
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signup_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
              sms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.phno, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])
            });
          }
        }, {
          key: "signup",
          value: function signup() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      this.errorMessage_.next('');
                      this.busy_.next(true);
                      _context17.prev = 2;
                      _context17.next = 5;
                      return this.auth.signUp(this.signup_form.get('sms').value, this.signup_form.get('fullname').value);

                    case 5:
                      _context17.next = 7;
                      return this.auth.signIn(this.signup_form.get('sms').value);

                    case 7:
                      this.modalCtrl.dismiss();
                      this.router.navigate(['/answer-challenge']);
                      _context17.next = 15;
                      break;

                    case 11:
                      _context17.prev = 11;
                      _context17.t0 = _context17["catch"](2);
                      console.log(_context17.t0);
                      this.errorMessage_.next(_context17.t0.message || _context17.t0);

                    case 15:
                      _context17.prev = 15;
                      this.busy_.next(false);
                      return _context17.finish(15);

                    case 18:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this, [[2, 11, 15, 18]]);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
            return translateText;
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_translate_service__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      SignupPage.propDecorators = {
        phno: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
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
      /*! C:\Users\flixd\OneDrive\Documents\GitHub\mrgami\src\main.ts */
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