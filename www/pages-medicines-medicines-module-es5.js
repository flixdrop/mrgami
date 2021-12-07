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


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons style=\"\r\n    clip-path: ellipse(100% 54% at 0% 50%); background-color: #36363f;\r\n    background-color: #36363f;width:80px; height: 40px; border-radius: 5%; \" slot=\"start\">\r\n      <ion-buttons routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #3CF185; width: 30px; height: 200px;\"></ion-icon>\r\n      </ion-buttons>\r\n      <span style=\"color: azure;\">BACK</span>\r\n    </ion-buttons>\r\n    <ion-title color=\"dark\">Medicines</ion-title>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button class=\"notification\">\r\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-item lines=\"full\" color=\"dark\">\r\n      <ion-searchbar [(ngModel)]=\"searchTerm\" color=\"dark\" mode=\"md\"></ion-searchbar>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge=\"true\">\r\n    <ion-fab-button style=\"--background: #0fd15dc5 ;\" (click)=\"openCart()\" #cart>\r\n      <div class=\"cart-length\">{{ cartItemCount | async }}</div>\r\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-refresher class=\"center\" slot=\"fixed\" pullMin=\"120\" pullMax=\"50\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" refreshingSpinner=\"lines\"\r\n      refreshingText=\"Please Wait...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n    <ion-card class=\"ion-padding\" *ngFor=\"let p of products | filter:searchTerm; let i=index\">\r\n      <ion-card-header>\r\n        {{ p.name }}     \r\n      </ion-card-header>\r\n      <ion-grid (click)=\"medModal(p)\">\r\n        <ion-row>\r\n          <ion-col class=\"reverseCenter\" size=\"6\">\r\n            <ion-thumbnail>\r\n              <ion-img src=\"{{p.image}}\"></ion-img>\r\n            </ion-thumbnail>\r\n          </ion-col>\r\n          <ion-col class=\"reverseCenter\" size=\"6\">\r\n            <ion-label>REFIT ANIMAL CARE – 10 Kg Chelated Mineral Mixture for\r\n              Buffalo,Cow,Cattle,Poultry,\r\n              Goat & Pig (RIGMIN Forte Powder)\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-toolbar color=\"none\">\r\n        <ion-item slot=\"start\" lines=\"none\" color=\"none\">\r\n          <ion-label color=\"success\">{{ p.price | currency:'INR' }}</ion-label>\r\n        </ion-item>\r\n          <ion-button slot=\"end\" color=\"danger\" size=\"small\" expand=\"block\" (click)=\"addToCart(p)\">\r\n            Add to cart\r\n          </ion-button>\r\n      </ion-toolbar>\r\n    </ion-card>\r\n  </ion-content>\r\n  \r\n  <!-- <ion-footer>\r\n    <ion-tabs>\r\n      <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n        <ion-tab-button tab=\"landing\">\r\n          <ion-icon name=\"cart\" ></ion-icon>\r\n          <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/home.png\" />\r\n          <ion-label style=\"color: #EC5B5B;\">Home</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"landing\" style=\"margin-left: -50px;\">\r\n          <ion-icon name=\"cafe\"></ion-icon>\r\n          <img style=\"height: 30px; width: 30px; \" src=\"../../assets/icon/ad.png\" />\r\n          <ion-label style=\"color: #06D25A;\">My Ads</ion-label>\r\n          <ion-badge *ngIf=\"new_message\">{{new_message}}</ion-badge>\r\n        </ion-tab-button>\r\n\r\n        <svg height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"#1f1f1f\" fill-rule=\"evenodd\"></path></svg>\r\n\r\n        <ion-tab-button tab=\"medicines\" style=\" margin-right: -60px;\">\r\n          <ion-icon name=\"bandage\"></ion-icon>\r\n          <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/old-purchase.png\" />\r\n          <ion-label style=\"color: #06D25A;\">Purchase</ion-label>\r\n          <ion-badge *ngIf=\"new_activities\">{{new_activities}}</ion-badge>\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n    </ion-tabs>\r\n\r\n  </ion-footer> -->";
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


      __webpack_exports__["default"] = "ion-menu-button {\n  margin-left: 10px;\n}\n\n.filter {\n  margin-right: 10px;\n}\n\n.search {\n  margin-bottom: 20px;\n}\n\n.search ion-item {\n  border-radius: 10px;\n  box-shadow: 0px 13px 30px 0px rgba(0, 0, 0, 0.09);\n  padding: 8px;\n}\n\n.search ion-item ion-icon {\n  margin-right: 16px;\n}\n\n.search ion-item ion-input {\n  padding-left: 10px !important;\n  border-left: 1px solid #F4F4F4;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 32px;\n  color: aliceblue;\n}\n\n.title h2 {\n  margin: 0 0 0 16px;\n  color: #ffffff;\n}\n\n.title p {\n  margin: 0 16px 0 0;\n  color: #ffffff;\n}\n\n.category-slider ion-slide {\n  width: 150px;\n  height: 100px;\n  margin-right: 10px;\n  margin-left: 20px;\n  margin-bottom: 30px;\n}\n\n.category-slider ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category-slider ion-slide ion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\n\n.category-slider ion-slide ion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  box-shadow: 0px 15px 20px 0px rgba(145, 143, 143, 0.16);\n}\n\n.med-price {\n  padding-left: 10px;\n  font-size: large;\n}\n\n.med-img {\n  width: 80%;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 20px;\n  padding: 10px;\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.product-slider {\n  margin-bottom: 30px;\n}\n\n.product-slider ion-slide {\n  width: 150px;\n  height: auto;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n\n.product-slider ion-slide ion-col img {\n  width: 100%;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n}\n\n.product-slider ion-slide ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.product-slider ion-slide ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\nion-slide:focus {\n  outline: none !important;\n}\n\nion-col:focus {\n  outline: none !important;\n}\n\nion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: #0fd15d;\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n\nion-searchbar {\n  border-bottom: 1px solid silver;\n  --box-shadow: none !important;\n}\n\n.reverseCenter {\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  align-items: center;\n  padding: 5%;\n}\n\nion-thumbnail {\n  width: 100%;\n  height: 100%;\n}\n\nion-card {\n  margin: 5%;\n}\n\nion-card ion-card-header {\n  margin: 0;\n  padding: 0;\n  padding-left: 5%;\n  text-decoration: underline;\n  font-weight: bold;\n}\n\nion-row {\n  margin: 0;\n  padding: 0;\n}\n\nion-col {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVkaWNpbmVzL21lZGljaW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUNRO0VBQ0ksa0JBQUE7QUFDWjs7QUFFUTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7QUFBWjs7QUFLQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBRlI7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFIUjs7QUFRSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTFI7O0FBT1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMWjs7QUFPWTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FBTGhCOztBQVFZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHVEQUFBO0FBTmhCOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBUEo7O0FBU0E7RUFDSSxpQkFBQTtBQU5KOztBQVNBO0VBQ0ksbUJBQUE7QUFOSjs7QUFRSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU5SOztBQVNZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQaEI7O0FBVVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFSaEI7O0FBV1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFUaEI7O0FBZ0JBO0VBQ0ksd0JBQUE7QUFiSjs7QUFnQkE7RUFDSSx3QkFBQTtBQWJKOztBQWdCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBYkY7O0FBaUJBO0VBQ0UsZUFBQTtBQWRGOztBQWlCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFkRjs7QUFpQkE7RUFDSSwrQkFBQTtFQUNBLDZCQUFBO0FBZEo7O0FBaUJFO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFkTjs7QUFpQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWRKOztBQWlCRTtFQVFJLFVBQUE7QUFyQk47O0FBY007RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQVpWOztBQWlCRTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBZE47O0FBaUJFO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFkTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lZGljaW5lcy9tZWRpY2luZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNGNEY0RjQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDAgMTZweCAwIDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1zbGlkZXIge1xyXG4gICAgaW9uLXNsaWRlIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IDBweCByZ2JhKDE0NSwgMTQzLCAxNDMsIDAuMTYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5tZWQtcHJpY2V7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5tZWQtaW1ne1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5mb250LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXNsaWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gUmVtb3ZpbmcgaGlnaGxpZ2h0IHdoZW4gZm9jdXNlZC9jbGlja2VkIG9uIHByb2R1Y3RcclxuaW9uLXNsaWRlOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNvbDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHRcclxuaW9uLWZhYi1idXR0b24ge1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogNzBweDtcclxuICBcclxufVxyXG4gXHJcbi5jYXJ0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4gXHJcbi5jYXJ0LWxlbmd0aCB7XHJcbiAgY29sb3I6ICMwZmQxNWQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMThweDtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbWluLXdpZHRoOiAyNXB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJldmVyc2VDZW50ZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNSU7XHJcbiAgfVxyXG5cclxuICBpb24tdGh1bWJuYWlse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZHtcclxuICAgICAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIG1hcmdpbjogNSU7XHJcbiAgfVxyXG5cclxuICBpb24tcm93e1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tY29se1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4iXX0= */";
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

      var MedicinesPage = /*#__PURE__*/function () {
        function MedicinesPage(data, cartService, modalCtrl) {
          _classCallCheck(this, MedicinesPage);

          this.data = data;
          this.cartService = cartService;
          this.modalCtrl = modalCtrl;
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