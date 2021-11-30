(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-details-item-details-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/getlocation/getlocation.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/getlocation/getlocation.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsGetlocationGetlocationComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Store the cattle location\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\r\n\r\n<ion-card color=\"light\" class=\"ion-text-center\">\r\n  <ion-card-title>Get the location</ion-card-title>\r\n\r\n  <ion-grid>\r\n\r\n\r\n    <ion-row>\r\n      <ion-col size=\"4\" class=\"ion-text-center\">\r\n        Latitude\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-badge class=\"ion-text-wrap\" color=\"medium\">{{latitude}}</ion-badge>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row>\r\n      <ion-col size=\"4\" class=\"ion-text-center\">\r\n        longitude\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-badge class=\"ion-text-wrap\" color=\"medium\">{{longitude}}</ion-badge>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"4\" class=\"ion-text-center\" color=\"medium\">\r\n        Accuracy\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-badge class=\"ion-text-wrap\" color=\"medium\">{{accuracy}}</ion-badge>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"4\" class=\"ion-text-center\">\r\n        Address\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon name=\"location\"></ion-icon>\r\n        <ion-badge class=\"ion-text-wrap\" color=\"medium\">{{address}}</ion-badge>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-card>\r\n<div *ngIf=\"!address\" >\r\n  <ion-button (click)=\"getGeolocation()\" color=\"warning\" expand=\"full\"><ion-progress-bar type=\"indeterminate\"></ion-progress-bar>Get Cattle Address </ion-button>\r\n</div>\r\n</ion-content> -->\r\n<div>{{latitude}}</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/item-details/item-details.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item-details/item-details.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppItemDetailsItemDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\r\n        <img src=\"../../assets/back-dark.svg\" />\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon name=\"search-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button class=\"notification\">\r\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\r\n        <span>&nbsp;</span>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <ion-button (click)=\"location()\" color=\"black\">\r\n        <ion-icon name=\"location-outline\"></ion-icon>\r\n        {{address}}</ion-button>\r\n    </ion-col>\r\n    <!-- <ion-col size=\"6\">\r\n      <ion-button expand=\"full\" color=\"light\">Other areas</ion-button>\r\n    </ion-col> -->\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col size=\"6\">\r\n  <ion-button expand=\"full\" color=\"success\">\r\n    <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n    <a href=\"https://api.whatsapp.com/send?phone=+919860067118\">Message</a>\r\n  </ion-button>\r\n  </ion-col>\r\n  <ion-col size=\"6\">\r\n    <ion-button expand=\"full\" color=\"success\">\r\n      <ion-icon name=\"call\"></ion-icon>Call Owner</ion-button>\r\n    </ion-col>\r\n    </ion-row>\r\n    <ion-card class=\"card\">\r\n  <ion-slides pager=\"true\" class=\"product-slider\" style=\"width: 290px;\">\r\n    <ion-slide style=\"width: 290px; height:193px;\">\r\n      <img  style=\"width: 290px; height:193px;\" src=\"../../assets/product-slider/prod-slide1.png\" />\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img style=\"width: 290px; height:193px;\" src=\"../../assets/product-slider/prod-slide1.png\" />\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img style=\"width: 290px; height:193px;\" src=\"../../assets/product-slider/prod-slide1.png\" />\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <div class=\"seperator\">\r\n    <hr>\r\n  </div>\r\n  <div class=\"ion-padding-vertical-custom\">\r\n    \r\n    <h4 class=\"price\">\r\n      Rs 40000\r\n      <span class=\"real-price\">Rs 80000</span>\r\n    </h4>\r\n  </div>\r\n\r\n  <div class=\"seperator\">\r\n    <hr>\r\n  </div>\r\n\r\n  <ion-grid class=\"count\">\r\n    <ion-row>\r\n      <ion-col>\r\n          Breed :<span> Cow</span>\r\n      </ion-col>\r\n      <ion-col >\r\n    \r\n          Lactation :<span> 4</span>\r\n      \r\n      </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n            Breed :<span> Cow</span>\r\n        </ion-col>\r\n        <ion-col >\r\n      \r\n            Lactation :<span> 4</span>\r\n        \r\n        </ion-col>\r\n        </ion-row><ion-row>\r\n          <ion-col>\r\n              Breed :<span> Cow</span>\r\n          </ion-col>\r\n          <ion-col >\r\n        \r\n              Lactation :<span> 4</span>\r\n          \r\n          </ion-col>\r\n          </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"seperator\">\r\n    <hr>\r\n  </div>\r\n</ion-card>\r\n<div class=\"description\">\r\n \r\n      <!-- <img src=\"../../assets/menu_bar.svg\"> -->\r\n      <ion-icon name=\"chevron-back\"></ion-icon>\r\n  \r\n      <!-- <img src=\"../../assets/menu_bar.svg\"> -->\r\n      <ion-icon name=\"chevron-forward\"></ion-icon>\r\n   \r\n\r\n</div>\r\n  <!-- <div class=\"variation\">\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"size\">\r\n      <ion-segment-button value=\"size\">\r\n        <ion-label>Select Size</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"color\">\r\n        <ion-label>Select Color</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n\r\n  <div class=\"seperator\">\r\n    <hr>\r\n  </div>\r\n\r\n  <div class=\"variation-selector\">\r\n    <div class=\"sizes\" [class.active-variation]=\"activeVariation == 'size'\">\r\n      <div [class.active]=\"selectedSize == 1\" (click)=\"changeSize(1)\">\r\n        S\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 2\" (click)=\"changeSize(2)\">\r\n        M\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 3\" (click)=\"changeSize(3)\">\r\n        L\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 4\" (click)=\"changeSize(4)\">\r\n        XL\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"colors\" [class.active-variation]=\"activeVariation == 'color'\">\r\n      <div [class.active]=\"selectedColor == 1\" (click)=\"changeColor(1)\">\r\n        BLACK\r\n      </div>\r\n      <div [class.active]=\"selectedColor == 2\" (click)=\"changeColor(2)\">\r\n        GREEN\r\n      </div>\r\n      <div [class.active]=\"selectedColor == 3\" (click)=\"changeColor(3)\">\r\n        BLUE\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/components/getlocation/getlocation.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/getlocation/getlocation.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsGetlocationGetlocationComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0bG9jYXRpb24vZ2V0bG9jYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/getlocation/getlocation.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/getlocation/getlocation.component.ts ***!
      \*****************************************************************/

    /*! exports provided: GetlocationComponent */

    /***/
    function srcAppComponentsGetlocationGetlocationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetlocationComponent", function () {
        return GetlocationComponent;
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
      /* eslint-disable @typescript-eslint/quotes */

      /* eslint-disable guard-for-in */


      var GetlocationComponent = /*#__PURE__*/function () {
        function GetlocationComponent(geolocation, nativeGeocoder) {
          _classCallCheck(this, GetlocationComponent);

          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder; //Geocoder configuration

          this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
          };
        }

        _createClass(GetlocationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //Get current coordinates of device

        }, {
          key: "getGeolocation",
          value: function getGeolocation() {
            var _this = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              _this.latitude = resp.coords.latitude;
              _this.longitude = resp.coords.longitude;
              _this.accuracy = resp.coords.accuracy;

              _this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
            })["catch"](function (error) {
              alert('Error getting location' + JSON.stringify(error));
            });
          } //geocoder method to fetch address from coordinates passed as arguments

        }, {
          key: "getGeoencoder",
          value: function getGeoencoder(latitude, longitude) {
            var _this2 = this;

            this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions).then(function (result) {
              console.log("In geolocation", result);
              _this2.address = result[0]['subLocality'] + ',' + result[0]['locality'] + ',' + result[0]['administrativeArea']; // this.fullAddress= this.generateAddress(result[0]);
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

        return GetlocationComponent;
      }();

      GetlocationComponent.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"]
        }];
      };

      GetlocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-getlocation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./getlocation.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/getlocation/getlocation.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./getlocation.component.scss */
        "./src/app/components/getlocation/getlocation.component.scss"))["default"]]
      }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GetlocationComponent);
      /***/
    },

    /***/
    "./src/app/item-details/item-details-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/item-details/item-details-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ItemDetailsPageRoutingModule */

    /***/
    function srcAppItemDetailsItemDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsPageRoutingModule", function () {
        return ItemDetailsPageRoutingModule;
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


      var _item_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./item-details.page */
      "./src/app/item-details/item-details.page.ts");

      var routes = [{
        path: '',
        component: _item_details_page__WEBPACK_IMPORTED_MODULE_3__["ItemDetailsPage"]
      }];

      var ItemDetailsPageRoutingModule = function ItemDetailsPageRoutingModule() {
        _classCallCheck(this, ItemDetailsPageRoutingModule);
      };

      ItemDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ItemDetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/item-details/item-details.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/item-details/item-details.module.ts ***!
      \*****************************************************/

    /*! exports provided: ItemDetailsPageModule */

    /***/
    function srcAppItemDetailsItemDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsPageModule", function () {
        return ItemDetailsPageModule;
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


      var _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./item-details-routing.module */
      "./src/app/item-details/item-details-routing.module.ts");
      /* harmony import */


      var _item_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./item-details.page */
      "./src/app/item-details/item-details.page.ts");
      /* harmony import */


      var _components_getlocation_getlocation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/getlocation/getlocation.component */
      "./src/app/components/getlocation/getlocation.component.ts");

      var ItemDetailsPageModule = function ItemDetailsPageModule() {
        _classCallCheck(this, ItemDetailsPageModule);
      };

      ItemDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _item_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemDetailsPageRoutingModule"]],
        declarations: [_item_details_page__WEBPACK_IMPORTED_MODULE_6__["ItemDetailsPage"], _components_getlocation_getlocation_component__WEBPACK_IMPORTED_MODULE_7__["GetlocationComponent"]]
      })], ItemDetailsPageModule);
      /***/
    },

    /***/
    "./src/app/item-details/item-details.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/item-details/item-details.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppItemDetailsItemDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n  --background-color:#1e1e1e;\n}\n\n.item-name {\n  color: #2bff00;\n}\n\n.price {\n  color: #3CF185;\n}\n\n.price span {\n  color: #3CF185;\n  text-decoration: line-through;\n  margin-left: 20px;\n  font-size: medium;\n  vertical-align: top;\n}\n\n.seperator hr {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  background: #818080;\n}\n\nh5 {\n  color: #23ac08;\n  font-size: larger;\n}\n\n.count {\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--ion-color-primary);\n  font-size: large;\n}\n\n.count span {\n  color: #26ff73;\n  align-content: space-around;\n}\n\n.review {\n  margin-top: 16px;\n  color: #9dad0d;\n}\n\n.review .rating {\n  display: inline-block;\n  color: #9dad0d;\n  background: var(--ion-color-primary);\n  padding: 10px 20px 10px 20px;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n\n.ion-padding-vertical-custom {\n  padding-top: 5px;\n}\n\n.description {\n  color: aliceblue;\n  padding-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  zoom: 250%;\n}\n\n.description h5 {\n  color: #9dad0d;\n  padding-top: 10px;\n}\n\n.description p {\n  color: #9dad0d;\n}\n\n.description .colleft {\n  justify-content: start;\n  zoom: 250%;\n}\n\n.description .colright {\n  justify-content: end;\n  align-items: flex-end;\n  zoom: 250%;\n}\n\n.variation {\n  padding-top: 16px;\n}\n\n.variation ion-segment-button {\n  color: #9dad0d;\n}\n\n.variation-selector {\n  margin-top: 30px;\n  display: flex;\n  position: relative;\n}\n\n.variation-selector .active-variation {\n  opacity: 1 !important;\n  z-index: 1 !important;\n}\n\n.variation-selector .sizes {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  z-index: 0;\n  padding-bottom: 30px;\n}\n\n.variation-selector .sizes div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #9dad0d;\n  width: 50px;\n  height: 50px;\n  margin-right: 8px;\n  transition: 0.5s ease-in-out;\n}\n\n.variation-selector .sizes .active {\n  color: #1a0000;\n  background-color: var(--ion-color-primary);\n}\n\n.variation-selector .colors {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n  z-index: 0;\n  padding-bottom: 30px;\n}\n\n.variation-selector .colors div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #9dad0d;\n  width: 70px;\n  height: 50px;\n  margin-right: 8px;\n  transition: 0.5s ease-in-out;\n}\n\n.variation-selector .colors .active {\n  color: #9dad0d;\n  background-color: var(--ion-color-primary);\n}\n\n.card {\n  background-color: #36363F;\n  text-align: center;\n  box-shadow: none;\n}\n\nion-footer ion-row {\n  padding: 0;\n}\n\nion-footer ion-row ion-col {\n  padding: 0;\n}\n\nion-footer ion-row ion-col ion-button {\n  margin: 0;\n  height: 50px;\n  font-size: 18px;\n  box-shadow: none;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n.footer-md::before {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1kZXRhaWxzL2l0ZW0tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFDSTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNSOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRFI7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFFQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUdJO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0FBRFI7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFHSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRFI7O0FBTUE7RUFHSSxnQkFBQTtBQUxKOztBQVNBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUFOSjs7QUFPSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUxSOztBQVNJO0VBQ0ksY0FBQTtBQVBSOztBQVNJO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0FBUFI7O0FBU0k7RUFFSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQVJSOztBQVlBO0VBQ0ksaUJBQUE7QUFUSjs7QUFXSTtFQUNJLGNBQUE7QUFUUjs7QUFhQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBVko7O0FBWUk7RUFDSSxxQkFBQTtFQUNBLHFCQUFBO0FBVlI7O0FBYUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFYUjs7QUFhUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFYWjs7QUFjUTtFQUNJLGNBQUE7RUFDQSwwQ0FBQTtBQVpaOztBQWdCSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQWRSOztBQWdCUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFkWjs7QUFpQlE7RUFDSSxjQUFBO0VBQ0EsMENBQUE7QUFmWjs7QUFzQkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFuQko7O0FBc0JJO0VBQ0ksVUFBQTtBQW5CUjs7QUFxQlE7RUFDSSxVQUFBO0FBbkJaOztBQXFCWTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBbkJoQjs7QUF3QkE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFyQko7O0FBd0JBO0VBQ0ksaUNBQUE7QUFyQkoiLCJmaWxlIjoic3JjL2FwcC9pdGVtLWRldGFpbHMvaXRlbS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyNnB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiMxZTFlMWU7XHJcbn1cclxuXHJcbi5pdGVtLW5hbWUge1xyXG4gICAgY29sb3I6ICMyYmZmMDA7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgICBjb2xvcjogIzNDRjE4NTtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzNDRjE4NTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VwZXJhdG9yIHtcclxuICAgIGhyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjODE4MDgwO1xyXG4gICAgfVxyXG59XHJcbmg1e1xyXG4gICAgY29sb3I6IzIzYWMwODtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgXHJcbn1cclxuLmNvdW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMyNmZmNzM7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG59XHJcbi5yZXZpZXcge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGNvbG9yOiAjOWRhZDBkO1xyXG5cclxuICAgIC5yYXRpbmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjb2xvcjogIzlkYWQwZDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuIFxyXG59XHJcbi5pb24tcGFkZGluZy12ZXJ0aWNhbC1jdXN0b20ge1xyXG4gICAgLy8gLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gICAgLy8gLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgem9vbToyNTAlO1xyXG4gICAgaDUge1xyXG4gICAgICAgIGNvbG9yOiAjOWRhZDBkO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjOWRhZDBkO1xyXG4gICAgfVxyXG4gICAgLmNvbGxlZnR7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgICAgICB6b29tOjI1MCU7XHJcbiAgICB9XHJcbiAgICAuY29scmlnaHR7XHJcbiAgICAgICAgXHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIHpvb206MjUwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnZhcmlhdGlvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuXHJcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiAjOWRhZDBkO1xyXG4gICAgfVxyXG59XHJcblxyXG4udmFyaWF0aW9uLXNlbGVjdG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5hY3RpdmUtdmFyaWF0aW9uIHtcclxuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXplcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRhZDBkO1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzFhMDAwMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sb3JzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZGFkMGQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOWRhZDBkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGlvbi1jYXJke1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjNGO1xyXG4vLyB9XHJcbi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM2M0Y7IC8vIGJsYWNrXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuaW9uLWZvb3RlciB7XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxufVxyXG4vLyBUaGlzIHdpbGwgcmVtb3ZlIGZvb3RlciBzaGFkb3cgb24gYW5kcm9pZFxyXG4uZm9vdGVyLW1kOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/item-details/item-details.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/item-details/item-details.page.ts ***!
      \***************************************************/

    /*! exports provided: ItemDetailsPage */

    /***/
    function srcAppItemDetailsItemDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemDetailsPage", function () {
        return ItemDetailsPage;
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


      var _components_getlocation_getlocation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/getlocation/getlocation.component */
      "./src/app/components/getlocation/getlocation.component.ts");

      var ItemDetailsPage = /*#__PURE__*/function () {
        function ItemDetailsPage(animatioCntrl, getlocation) {
          _classCallCheck(this, ItemDetailsPage);

          this.animatioCntrl = animatioCntrl;
          this.getlocation = getlocation;
        }

        _createClass(ItemDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.activeVariation = 'size';
            this.location();
          }
        }, {
          key: "location",
          value: function location() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.getlocation.getGeolocation();

                    case 2:
                      this.address = this.getlocation.address;
                      _context.next = 5;
                      return console.log(this.getlocation.latitude);

                    case 5:
                      this.latitude = this.getlocation.latitude;
                      console.log(this.address); // console.log(this.getlocation.address[0]['locality'])

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(e) {
            this.activeVariation = e.detail.value;

            if (this.activeVariation == 'color') {
              this.animatioCntrl.create().addElement(document.querySelector('.sizes')).duration(500).iterations(1).fromTo('transform', 'translateX(0px)', 'translateX(100%)').fromTo('opacity', '1', '0.2').play();
              this.animatioCntrl.create().addElement(document.querySelector('.colors')).duration(500).iterations(1).fromTo('transform', 'translateX(-100%)', 'translateX(0)').fromTo('opacity', '0.2', '1').play();
            } else {
              this.animatioCntrl.create().addElement(document.querySelector('.sizes')).duration(500).iterations(1).fromTo('transform', 'translateX(100%)', 'translateX(0)').fromTo('opacity', '0.2', '1').play();
              this.animatioCntrl.create().addElement(document.querySelector('.colors')).duration(500).iterations(1).fromTo('transform', 'translateX(0px)', 'translateX(-100%)').fromTo('opacity', '1', '0.2').play();
            }
          }
        }, {
          key: "changeSize",
          value: function changeSize(size) {
            this.selectedSize = size;
          }
        }, {
          key: "changeColor",
          value: function changeColor(color) {
            this.selectedColor = color;
          }
        }]);

        return ItemDetailsPage;
      }();

      ItemDetailsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AnimationController"]
        }, {
          type: _components_getlocation_getlocation_component__WEBPACK_IMPORTED_MODULE_3__["GetlocationComponent"]
        }];
      };

      ItemDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./item-details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/item-details/item-details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./item-details.page.scss */
        "./src/app/item-details/item-details.page.scss"))["default"]]
      })], ItemDetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=item-details-item-details-module-es5.js.map