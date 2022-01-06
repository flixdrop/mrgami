(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-medicines-medicines-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medicines/medicines.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medicines/medicines.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesMedicinesMedicinesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons class=\"btn-shape\" slot=\"start\" routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\r\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{doTranslation('MEDICINES')}}</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"search-color\">\r\n    <ion-item lines=\"none\" color=\"none\">\r\n      <ion-searchbar placeholder=\"{{doTranslation('Search medicines')}}\" [(ngModel)]=\"searchTerm\" mode=\"md\"></ion-searchbar>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"content-color\">\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge=\"true\">\r\n    <ion-fab-button color=\"success\" (click)=\"openCart()\" #cart>\r\n      <div class=\"cart-length\">{{ cartItemCount | async }}</div>\r\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-refresher class=\"center\" slot=\"fixed\" pullMin=\"120\" pullMax=\"50\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" refreshingSpinner=\"lines\"\r\n      refreshingText=\"{{doTranslation('Please Wait...')}}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n\r\n  <ion-toolbar class=\"center\" color=\"dark\">\r\n    <ion-label class=\"contact-title\" color=\"danger\">ORDER THROUGH</ion-label>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button class=\"contact-logo\" color=\"danger\">\r\n          <ion-icon name=\"call-outline\"></ion-icon>\r\n          CALL\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button class=\"contact-logo\" color=\"danger\">\r\n          <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n          <a href=\"https://api.whatsapp.com/send?phone=+919860067118\">MESSAGE</a>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-toolbar>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"vertical-center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-card class=\"card-color custom-card\" *ngFor=\"let p of products | filter:searchTerm; let i=index\">\r\n          <ion-grid (click)=\"medModal(p)\">\r\n            <ion-row>\r\n              <ion-col class=\"vertical-center\" size=\"6\">\r\n                <ion-thumbnail>\r\n                  <ion-img src=\"{{p.image}}\"></ion-img>\r\n                </ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"horizontal-padding\" size=\"6\">\r\n                <div class=\"center\"> \r\n                  <ion-label color=\"primary\">{{p.name}}</ion-label>\r\n                </div>\r\n                <ion-text color=\"light\">REFIT ANIMAL CARE – 10 Kg Chelated Mineral Mixture for\r\n                  <!-- Buffalo,Cow,Cattle,Poultry,\r\n                  Goat & Pig (RIGMIN Forte Powder) -->\r\n                </ion-text>\r\n                <ion-toolbar color=\"none\">\r\n                  <ion-text slot=\"start\" color=\"success\">{{ p.price | currency:'INR' }}</ion-text>\r\n                  <ion-button slot=\"end\" color=\"danger\" expand=\"block\" size=\"small\" (click)=\"addToCart(p)\">\r\n                    {{doTranslation('Add to cart')}}\r\n                  </ion-button>\r\n                </ion-toolbar>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n</ion-content>\r\n\r\n<!-- <ion-footer>\r\n    <ion-tabs>\r\n      <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n        <ion-tab-button tab=\"landing\">\r\n          <ion-icon name=\"cart\" ></ion-icon>\r\n          <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/home.png\" />\r\n          <ion-label style=\"color: #EC5B5B;\">Home</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"landing\" style=\"margin-left: -50px;\">\r\n          <ion-icon name=\"cafe\"></ion-icon>\r\n          <img style=\"height: 30px; width: 30px; \" src=\"../../assets/icon/ad.png\" />\r\n          <ion-label style=\"color: #06D25A;\">My Ads</ion-label>\r\n          <ion-badge *ngIf=\"new_message\">{{new_message}}</ion-badge>\r\n        </ion-tab-button>\r\n\r\n        <svg height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"#1f1f1f\" fill-rule=\"evenodd\"></path></svg>\r\n\r\n        <ion-tab-button tab=\"medicines\" style=\" margin-right: -60px;\">\r\n          <ion-icon name=\"bandage\"></ion-icon>\r\n          <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/old-purchase.png\" />\r\n          <ion-label style=\"color: #06D25A;\">Purchase</ion-label>\r\n          <ion-badge *ngIf=\"new_activities\">{{new_activities}}</ion-badge>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n    </ion-tabs>\r\n\r\n  </ion-footer> -->";
      /***/
    },

    /***/
    "./src/app/pages/medicines/medicines-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/medicines/medicines-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: MedicinesPageRoutingModule */

    /***/
    function srcAppPagesMedicinesMedicinesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicinesPageRoutingModule", function () {
        return MedicinesPageRoutingModule;
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


      var _medicines_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./medicines.page */
      "./src/app/pages/medicines/medicines.page.ts");

      var routes = [{
        path: '',
        component: _medicines_page__WEBPACK_IMPORTED_MODULE_3__["MedicinesPage"]
      }];

      var MedicinesPageRoutingModule = function MedicinesPageRoutingModule() {
        _classCallCheck(this, MedicinesPageRoutingModule);
      };

      MedicinesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MedicinesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/medicines/medicines.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/medicines/medicines.module.ts ***!
      \*****************************************************/

    /*! exports provided: MedicinesPageModule */

    /***/
    function srcAppPagesMedicinesMedicinesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicinesPageModule", function () {
        return MedicinesPageModule;
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


      var _medicines_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./medicines-routing.module */
      "./src/app/pages/medicines/medicines-routing.module.ts");
      /* harmony import */


      var _medicines_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./medicines.page */
      "./src/app/pages/medicines/medicines.page.ts");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

      var MedicinesPageModule = function MedicinesPageModule() {
        _classCallCheck(this, MedicinesPageModule);
      };

      MedicinesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _medicines_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicinesPageRoutingModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]],
        declarations: [_medicines_page__WEBPACK_IMPORTED_MODULE_6__["MedicinesPage"]]
      })], MedicinesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/medicines/medicines.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/medicines/medicines.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesMedicinesMedicinesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-searchbar {\n  color: white;\n  font-weight: bold;\n  --background: transparent;\n  background-color: transparent;\n  --box-shadow: none !important;\n}\n\nion-thumbnail {\n  width: 100%;\n  height: 100%;\n  margin: 0 2%;\n}\n\n.custom-card {\n  margin: 1% 0;\n}\n\n.custom-card ion-row {\n  margin: 0 1%;\n}\n\n.contact-logo {\n  width: 100%;\n  height: 70px;\n}\n\n.contact-logo ion-icon {\n  height: 45px;\n  width: 45px;\n}\n\n.contact-logo a {\n  color: white;\n}\n\n.contact-title {\n  font-weight: bold;\n  font-size: 150%;\n}\n\n@media (min-width: 500px) {\n  ion-card {\n    width: 75%;\n  }\n}\n\n@media (min-width: 700px) {\n  ion-card {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVkaWNpbmVzL21lZGljaW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0pBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FBdkpGOztBQTBKRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXZKSjs7QUEwSkU7RUFDRSxZQUFBO0FBdkpKOztBQXdKSTtFQUNFLFlBQUE7QUF0Sk47O0FBMEpFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUF2Sko7O0FBd0pFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUF0Sko7O0FBd0pFO0VBQ0UsWUFBQTtBQXRKSjs7QUEwSkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUF2SkY7O0FBMEpFO0VBQ0U7SUFDSSxVQUFBO0VBdkpOO0FBQ0Y7O0FBMEpFO0VBQ0U7SUFDSSxVQUFBO0VBeEpOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZWRpY2luZXMvbWVkaWNpbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1tZW51LWJ1dHRvbiB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLmZpbHRlciB7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5zZWFyY2gge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbi8vICAgICBpb24taXRlbSB7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuXHJcbi8vICAgICAgICAgaW9uLWljb24ge1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpb24taW5wdXQge1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRjRGNEY0O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLnRpdGxlIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbi8vICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG5cclxuLy8gICAgIGgyIHtcclxuLy8gICAgICAgICBtYXJnaW46IDAgMCAwIDE2cHg7XHJcbi8vICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcCB7XHJcbi8vICAgICAgICAgbWFyZ2luOiAwIDE2cHggMCAwO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAuY2F0ZWdvcnktc2xpZGVyIHtcclxuLy8gICAgIGlvbi1zbGlkZSB7XHJcbi8vICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4vLyAgICAgICAgIGlvbi1jb2wge1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuLy8gICAgICAgICAgICAgaDQge1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGltZyB7XHJcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuLy8gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4vLyAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCAwcHggcmdiYSgxNDUsIDE0MywgMTQzLCAwLjE2KTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAubWVkLXByaWNle1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuLy8gfVxyXG4vLyAubWVkLWltZ3tcclxuLy8gICAgIHdpZHRoOiA4MCU7XHJcbi8vICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4vLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgcGFkZGluZzogMTBweDtcclxuLy8gfVxyXG4vLyAuZm9udC1ib2xkIHtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZHVjdC1zbGlkZXIge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbi8vICAgICBpb24tc2xpZGUge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuLy8gICAgICAgICBpb24tY29sIHtcclxuLy8gICAgICAgICAgICAgaW1nIHtcclxuLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuLy8gICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBwIHtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGg2IHtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC8vIFJlbW92aW5nIGhpZ2hsaWdodCB3aGVuIGZvY3VzZWQvY2xpY2tlZCBvbiBwcm9kdWN0XHJcbi8vIGlvbi1zbGlkZTpmb2N1cyB7XHJcbi8vICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1jb2w6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblx0XHJcbi8vIGlvbi1mYWItYnV0dG9uIHtcclxuLy8gICBoZWlnaHQ6IDcwcHg7XHJcbi8vICAgd2lkdGg6IDcwcHg7XHJcbiAgXHJcbi8vIH1cclxuIFxyXG4vLyAuY2FydC1pY29uIHtcclxuLy8gICBmb250LXNpemU6IDUwcHg7XHJcbi8vIH1cclxuIFxyXG4vLyAuY2FydC1sZW5ndGgge1xyXG4vLyAgIGNvbG9yOiAjMGZkMTVkO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDE4cHg7XHJcbi8vICAgbGVmdDogMjVweDtcclxuLy8gICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgIG1pbi13aWR0aDogMjVweDtcclxuLy8gICB6LWluZGV4OiAxMDtcclxuLy8gfVxyXG5pb24tc2VhcmNoYmFye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRodW1ibmFpbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDIlO1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1jYXJke1xyXG4gICAgbWFyZ2luOiAxJSAwO1xyXG4gICAgaW9uLXJvd3tcclxuICAgICAgbWFyZ2luOiAwIDElO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtbG9nb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gIGlvbi1pY29ue1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgfVxyXG4gIGF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdC10aXRsZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH0gICAgICBcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gICAgaW9uLWNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH0gICAgICBcclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/medicines/medicines.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/medicines/medicines.page.ts ***!
      \***************************************************/

    /*! exports provided: MedicinesPage */

    /***/
    function srcAppPagesMedicinesMedicinesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicinesPage", function () {
        return MedicinesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../data.service */
      "./src/app/data.service.ts");
      /* harmony import */


      var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/cart.service */
      "./src/app/services/cart.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _pages_cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pages/cart-modal/cart-modal.page */
      "./src/app/pages/cart-modal/cart-modal.page.ts");
      /* harmony import */


      var _med_modal_med_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../med-modal/med-modal.page */
      "./src/app/pages/med-modal/med-modal.page.ts");
      /* harmony import */


      var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/translate.service */
      "./src/app/services/translate.service.ts");

      var MedicinesPage = /*#__PURE__*/function () {
        function MedicinesPage(data, cartService, modalCtrl, translateService) {
          _classCallCheck(this, MedicinesPage);

          this.data = data;
          this.cartService = cartService;
          this.modalCtrl = modalCtrl;
          this.translateService = translateService;
          this.cart = [];
          this.products = [];
        }

        _createClass(MedicinesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.products = this.cartService.getProducts();
            this.cart = this.cartService.getCart();
            this.cartItemCount = this.cartService.getCartItemCount();
          }
        }, {
          key: "addToCart",
          value: function addToCart(product) {
            this.cartService.addProduct(product);
            this.animateCSS("tada");
          }
        }, {
          key: "openCart",
          value: function openCart() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.animateCSS("bounceOutLeft", true);
                      _context.next = 3;
                      return this.modalCtrl.create({
                        component: _pages_cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__["CartModalPage"],
                        cssClass: "cart-modal"
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onWillDismiss().then(function () {
                        _this.fab.nativeElement.classList.remove("animated", "bounceOutLeft");

                        _this.animateCSS("bounceInLeft");
                      });
                      modal.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "animateCSS",
          value: function animateCSS(animationName) {
            var keepAnimated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var node = this.fab.nativeElement;
            node.classList.add("animated", animationName); //https://github.com/daneden/animate.css

            function handleAnimationEnd() {
              if (!keepAnimated) {
                node.classList.remove("animated", animationName);
              }

              node.removeEventListener("animationend", handleAnimationEnd);
            }

            node.addEventListener("animationend", handleAnimationEnd);
          }
        }, {
          key: "medModal",
          value: function medModal(product) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: _med_modal_med_modal_page__WEBPACK_IMPORTED_MODULE_6__["MedModalPage"],
                        cssClass: "cart-modal",
                        componentProps: {
                          'name': product.name,
                          'image': product.image,
                          'price': product.price
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
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

        return MedicinesPage;
      }();

      MedicinesPage.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      MedicinesPage.propDecorators = {
        fab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["cart", {
            "static": false,
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      MedicinesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-medicines",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./medicines.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medicines/medicines.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./medicines.page.scss */
        "./src/app/pages/medicines/medicines.page.scss"))["default"]]
      })], MedicinesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-medicines-medicines-module-es5.js.map