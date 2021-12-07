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


      __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Store the cattle location\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n\n<ion-card color=\"light\" class=\"ion-text-center\">\n  <ion-card-title>Get the location</ion-card-title>\n\n  <ion-grid>\n\n\n    <ion-row>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        Latitude\n      </ion-col>\n      <ion-col>\n        <ion-badge class=\"ion-text-wrap\" color=\"medium\">{{latitude}}</ion-badge>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        longitude\n      </ion-col>\n      <ion-col>\n        <ion-badge class=\"ion-text-wrap\" color=\"medium\">{{longitude}}</ion-badge>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" class=\"ion-text-center\" color=\"medium\">\n        Accuracy\n      </ion-col>\n      <ion-col>\n        <ion-badge class=\"ion-text-wrap\" color=\"medium\">{{accuracy}}</ion-badge>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"4\" class=\"ion-text-center\">\n        Address\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"location\"></ion-icon>\n        <ion-badge class=\"ion-text-wrap\" color=\"medium\">{{address}}</ion-badge>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-card>\n<div *ngIf=\"!address\" >\n  <ion-button (click)=\"getGeolocation()\" color=\"warning\" expand=\"full\"><ion-progress-bar type=\"indeterminate\"></ion-progress-bar>Get Cattle Address </ion-button>\n</div>\n</ion-content> -->\n<div>{{latitude}}</div>";
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


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/tabs/home\" routerDirection=\"back\">\r\n        <img src=\"../../assets/back-dark.svg\" />\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon name=\"search-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button class=\"notification\">\r\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\r\n        <span>&nbsp;</span>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"right\" translucent=\"true\">\r\n    <ion-fab-button (click)=\"location()\" color=\"light\" class=\"background\">\r\n      <!-- (click)=popSellerForm() -->\r\n      <ion-icon size=\"large\" name=\"location-outline\" color=\"danger\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-card>\r\n    <ion-grid>\r\n      <!-- <ion-row>\r\n    <ion-col class=\"center\" size=\"12\">\r\n      <ion-button (click)=\"location()\" color=\"black\">\r\n      <ion-icon name=\"location-outline\"></ion-icon>\r\n        {{address}}</ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"full\" color=\"light\">Other areas</ion-button>\r\n    </ion-col>\r\n  </ion-row> -->\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-button expand=\"block\" color=\"success\">\r\n            <ion-icon></ion-icon>\r\n            <ion-label color=\"light\">\r\n              <a href=\"https://api.whatsapp.com/send?phone=+919860067118\">Message</a>\r\n            </ion-label>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-button expand=\"block\" color=\"success\">\r\n            <ion-icon name=\"call\" color=\"light\"></ion-icon>\r\n            <ion-label color=\"light\">Owner</ion-label>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-slides pager=\"true\">\r\n            <ion-slide>\r\n              <ion-img src=\"../../assets/product-slider/prod-slide1.png\"></ion-img>\r\n            </ion-slide>\r\n            <ion-slide>\r\n              <ion-img src=\"../../assets/product-slider/prod-slide1.png\"></ion-img>\r\n            </ion-slide>\r\n            <ion-slide>\r\n              <ion-img src=\"../../assets/product-slider/prod-slide1.png\"></ion-img>\r\n            </ion-slide>\r\n          </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-toolbar color=\"none\">\r\n            <ion-item lines=\"none\" color=\"none\" slot=\"start\">\r\n              <ion-label color=\"success\">Rs 40000</ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" color=\"none\" slot=\"end\">\r\n              <ion-label color=\"success\">Rs 80000</ion-label>\r\n            </ion-item>\r\n          </ion-toolbar>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-card-content>\r\n      <ion-toolbar color=\"none\">\r\n        <ion-item lines=\"none\" color=\"none\" slot=\"start\">\r\n          <ion-label>Breed : Cow</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" color=\"none\" slot=\"end\">\r\n          <ion-label>Loctation : 4</ion-label>\r\n        </ion-item>\r\n      </ion-toolbar>\r\n      <ion-toolbar color=\"none\">\r\n        <ion-item lines=\"none\" color=\"none\" slot=\"start\">\r\n          <ion-label>Breed : Cow</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" color=\"none\" slot=\"end\">\r\n          <ion-label>Lactation : 4</ion-label>\r\n        </ion-item>\r\n      </ion-toolbar>\r\n      <ion-toolbar color=\"none\">\r\n        <ion-item lines=\"none\" color=\"none\" slot=\"start\">\r\n          <ion-label>Breed : Cow</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" color=\"none\" slot=\"end\">\r\n          <ion-label>Lactation : 4</ion-label>\r\n        </ion-item>\r\n      </ion-toolbar>\r\n      <ion-toolbar color=\"none\">\r\n        <ion-item lines=\"none\" color=\"none\" slot=\"start\">\r\n          <ion-label>Breed : Cow</ion-label>\r\n        </ion-item>\r\n        <ion-item lines=\"none\" color=\"none\" slot=\"end\">\r\n          <ion-label>Lactation : 4</ion-label>\r\n        </ion-item>\r\n      </ion-toolbar>\r\n    </ion-card-content>\r\n\r\n  </ion-card>\r\n  <!-- <div class=\"description\">\r\n\r\n    <img src=\"../../assets/menu_bar.svg\">\r\n    <ion-icon name=\"chevron-back\"></ion-icon>\r\n\r\n    <img src=\"../../assets/menu_bar.svg\">\r\n    <ion-icon name=\"chevron-forward\"></ion-icon>\r\n\r\n  </div> -->\r\n  <!-- <div class=\"variation\">\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"size\">\r\n      <ion-segment-button value=\"size\">\r\n        <ion-label>Select Size</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"color\">\r\n        <ion-label>Select Color</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n\r\n  <div class=\"seperator\">\r\n    <hr>\r\n  </div>\r\n\r\n  <div class=\"variation-selector\">\r\n    <div class=\"sizes\" [class.active-variation]=\"activeVariation == 'size'\">\r\n      <div [class.active]=\"selectedSize == 1\" (click)=\"changeSize(1)\">\r\n        S\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 2\" (click)=\"changeSize(2)\">\r\n        M\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 3\" (click)=\"changeSize(3)\">\r\n        L\r\n      </div>\r\n      <div [class.active]=\"selectedSize == 4\" (click)=\"changeSize(4)\">\r\n        XL\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"colors\" [class.active-variation]=\"activeVariation == 'color'\">\r\n      <div [class.active]=\"selectedColor == 1\" (click)=\"changeColor(1)\">\r\n        BLACK\r\n      </div>\r\n      <div [class.active]=\"selectedColor == 2\" (click)=\"changeColor(2)\">\r\n        GREEN\r\n      </div>\r\n      <div [class.active]=\"selectedColor == 3\" (click)=\"changeColor(3)\">\r\n        BLUE\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</ion-content>";
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


      __webpack_exports__["default"] = "ion-card {\n  margin: 0;\n  padding: 0;\n}\n\nion-grid {\n  margin: 0;\n  padding: 0;\n}\n\nion-row {\n  margin: 0;\n  padding: 0;\n}\n\nion-col {\n  margin: 0;\n  padding: 0;\n}\n\nion-slides {\n  --background: transparent !important;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\nion-slide {\n  margin: 0;\n  padding: 0;\n  --background: transparent !important;\n  height: 100%;\n  width: 100%;\n}\n\nion-slide ion-label {\n  font-size: 12px;\n}\n\na {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1kZXRhaWxzL2l0ZW0tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb05BO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFuTko7O0FBc05BO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFuTko7O0FBc05BO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFuTko7O0FBc05BO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFuTko7O0FBc05BO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBbk5KOztBQXNORTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Ysb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQW5OSjs7QUFvTkk7RUFDRSxlQUFBO0FBbE5OOztBQXNORTtFQUNJLFlBQUE7QUFuTk4iLCJmaWxlIjoic3JjL2FwcC9pdGVtLWRldGFpbHMvaXRlbS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5iYWNrYnRuIHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAubm90aWZpY2F0aW9uIHtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbnRlbnQge1xyXG4vLyAgICAgLS1wYWRkaW5nLXRvcDogMTZweDtcclxuLy8gICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbi8vICAgICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XHJcbi8vICAgICAtLXBhZGRpbmctZW5kOiAyNnB4O1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiMxZTFlMWU7XHJcbi8vIH1cclxuXHJcbi8vIC5pdGVtLW5hbWUge1xyXG4vLyAgICAgY29sb3I6ICMyYmZmMDA7XHJcbi8vIH1cclxuXHJcbi8vIC5wcmljZSB7XHJcbi8vICAgICBjb2xvcjogIzNDRjE4NTtcclxuXHJcbi8vICAgICBzcGFuIHtcclxuLy8gICAgICAgICBjb2xvcjogIzNDRjE4NTtcclxuLy8gICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuLy8gICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuLy8gICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAuc2VwZXJhdG9yIHtcclxuLy8gICAgIGhyIHtcclxuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgbGVmdDogMDtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjODE4MDgwO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGg1e1xyXG4vLyAgICAgY29sb3I6IzIzYWMwODtcclxuLy8gICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgXHJcbi8vIH1cclxuLy8gLmNvdW50IHtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuLy8gICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4vLyAgICAgc3BhbiB7XHJcbi8vICAgICAgICAgY29sb3I6ICMyNmZmNzM7XHJcbi8vICAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC5yZXZpZXcge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuLy8gICAgIGNvbG9yOiAjOWRhZDBkO1xyXG5cclxuLy8gICAgIC5yYXRpbmcge1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgICAgICBjb2xvcjogIzlkYWQwZDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgfVxyXG5cclxuIFxyXG4vLyB9XHJcbi8vIC5pb24tcGFkZGluZy12ZXJ0aWNhbC1jdXN0b20ge1xyXG4vLyAgICAgLy8gLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4vLyAgICAgLy8gLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDVweDtcclxuLy8gfVxyXG5cclxuXHJcbi8vIC5kZXNjcmlwdGlvbiB7XHJcbi8vICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgICAgem9vbToyNTAlO1xyXG4vLyAgICAgaDUge1xyXG4vLyAgICAgICAgIGNvbG9yOiAjOWRhZDBkO1xyXG4vLyAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHAge1xyXG4vLyAgICAgICAgIGNvbG9yOiAjOWRhZDBkO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNvbGxlZnR7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuLy8gICAgICAgICB6b29tOjI1MCU7XHJcbi8vICAgICB9XHJcbi8vICAgICAuY29scmlnaHR7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4vLyAgICAgICAgIHpvb206MjUwJTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLnZhcmlhdGlvbiB7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuXHJcbi8vICAgICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4vLyAgICAgICAgIGNvbG9yOiAjOWRhZDBkO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAudmFyaWF0aW9uLXNlbGVjdG9yIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuLy8gICAgIC5hY3RpdmUtdmFyaWF0aW9uIHtcclxuLy8gICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC5zaXplcyB7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgICAgIHotaW5kZXg6IDA7XHJcbi8vICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcblxyXG4vLyAgICAgICAgIGRpdiB7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRhZDBkO1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuLy8gICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIC5hY3RpdmUge1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogIzFhMDAwMDtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICAuY29sb3JzIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIG9wYWNpdHk6IDA7XHJcbi8vICAgICAgICAgei1pbmRleDogMDtcclxuLy8gICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHJcbi8vICAgICAgICAgZGl2IHtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZGFkMGQ7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4vLyAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLmFjdGl2ZSB7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiAjOWRhZDBkO1xyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC8vIGlvbi1jYXJke1xyXG4vLyAvLyAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjNGO1xyXG4vLyAvLyB9XHJcbi8vIC5jYXJkIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM2M0Y7IC8vIGJsYWNrXHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBib3gtc2hhZG93OiBub25lO1xyXG4vLyAgIH1cclxuLy8gaW9uLWZvb3RlciB7XHJcbi8vICAgICBpb24tcm93IHtcclxuLy8gICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuLy8gICAgICAgICBpb24tY29sIHtcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbi8vICAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBhe1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuLy8gfVxyXG4vLyAvLyBUaGlzIHdpbGwgcmVtb3ZlIGZvb3RlciBzaGFkb3cgb24gYW5kcm9pZFxyXG4vLyAuZm9vdGVyLW1kOjpiZWZvcmUge1xyXG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tZ3JpZHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1yb3d7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY29se1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zbGlkZXtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICB9Il19 */";
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