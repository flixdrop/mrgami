(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons class=\"btn-shape\" slot=\"start\" routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\r\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{doTranslation('BUY ANIMALS')}}</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"search-color\">\r\n    <ion-searchbar [(ngModel)]=\"searchTerm\" placeholder=\"{{doTranslation('Search Cattles')}}\" mode=\"md\">\r\n      <ion-icon slot=\"end\" name=\"funnel-outline\" color=\"medium\"></ion-icon>\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-content class=\"ion-padding content-color\">\r\n  <ion-refresher class=\"center\" slot=\"fixed\" pullMin=\"120\" pullMax=\"50\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" refreshingSpinner=\"lines\"\r\n      refreshingText=\"{{doTranslation('Please Wait...')}}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-toolbar class=\"web-view\" color=\"none\">\r\n          <ion-item lines=\"full\" color=\"none\">\r\n            <ion-label slot=\"start\" color=\"warning\">{{doTranslation('Type of Cattles')}}</ion-label>\r\n            <ion-label slot=\"end\" color=\"light\">{{doTranslation('See all')}}</ion-label>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-slides [options]=\"slideOpts\">\r\n                  <ion-slide class=\"center\" *ngFor=\"let category of getApiData| filter:searchTerm; let i=index\">\r\n                    <ion-thumbnail>\r\n                      <ion-img src=\"{{category.imageUrls['imagesList'][0]}}\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label>{{category.type}}</ion-label>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-toolbar class=\"web-view\" color=\"none\">\r\n          <ion-item lines=\"full\" color=\"none\">\r\n            <ion-label slot=\"start\" color=\"warning\">{{doTranslation('Featured')}}</ion-label>\r\n            <ion-label slot=\"end\" color=\"light\">{{doTranslation('See all')}}</ion-label>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\" routerLink=\"/tabs/item-details\" routerDirection=\"forward\">\r\n                <ion-slides [options]=\"slideOpts\">\r\n                  <ion-slide class=\"center\" *ngFor=\"let product of getApiData| filter:searchTerm\">\r\n                    <ion-thumbnail>\r\n                      <ion-img src=\"{{ product.imageUrls['imagesList'][0] }}\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label style=\"color: aliceblue;\">Rs {{ product.quotedPrice }}</ion-label>\r\n                    <ion-label style=\"color: aliceblue;\">{{ product.type }}</ion-label>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-toolbar class=\"web-view\" color=\"none\">\r\n          <ion-item lines=\"full\" color=\"none\">\r\n            <ion-label slot=\"start\" color=\"warning\">{{doTranslation('Best Sell')}}</ion-label>\r\n            <ion-label slot=\"end\" color=\"light\">{{doTranslation('See all')}}</ion-label>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-slides [options]=\"slideOpts\">\r\n                  <ion-slide class=\"center\" *ngFor=\"let product of getApiData| filter:searchTerm\">\r\n                    <ion-thumbnail>\r\n                      <ion-img src=\"{{ product.imageUrls['imagesList'][0] }}\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label>Rs {{ product.quotedPrice }}</ion-label>\r\n                    <ion-label>{{ product.type }}</ion-label>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content> -->\r\n\r\n<ion-fab edge=\"true\" vertical=\"bottom\" horizontal=\"center\" translucent=\"true\">\r\n  <ion-fab-button size=\"small\" (click)=\"onClickFab()\" color=\"dark\">\r\n    <ion-icon size=\"large\" name=\"add\"></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-text class=\"center\" color=\"light\">{{doTranslation('New AD')}}</ion-text>\r\n</ion-fab>\r\n\r\n<ion-content class=\"card-color\">\r\n  <ion-refresher class=\"center\" slot=\"fixed\" pullMin=\"120\" pullMax=\"50\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" refreshingSpinner=\"lines\"\r\n      refreshingText=\"{{doTranslation('Please Wait...')}}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-toolbar class=\"center\" color=\"dark\">\r\n    <ion-label class=\"contact-title\" color=\"danger\">ORDER THROUGH</ion-label>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-button class=\"contact-logo\" color=\"danger\">\r\n          <ion-icon name=\"call-outline\"></ion-icon>\r\n          CALL\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-button class=\"contact-logo\" color=\"danger\">\r\n          <ion-icon name=\"logo-whatsapp\"></ion-icon>\r\n          <a href=\"https://api.whatsapp.com/send?phone=+919860067118\">MESSAGE</a>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-toolbar>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-toolbar class=\"web-view\" color=\"none\">\r\n          <ion-item lines=\"full\" color=\"none\">\r\n            <ion-label slot=\"start\" color=\"danger\">{{doTranslation('Type of Cattles')}}</ion-label>\r\n            <ion-label slot=\"end\" color=\"light\">{{doTranslation('See all')}}</ion-label>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n\r\n        <ion-card class=\"web-view\" color=\"none\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-slides [options]=\"slideOpts\">\r\n                  <ion-slide class=\"vertical-center\" *ngFor=\"let category of dummydata| filter:searchTerm; let i=index\">\r\n                    <ion-thumbnail>\r\n                      <ion-img src=\"{{category.img}}\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label color=\"light\">{{category.breed}}</ion-label>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-toolbar class=\"web-view\" color=\"none\">\r\n          <ion-item lines=\"full\" color=\"none\">\r\n            <ion-label slot=\"start\" color=\"danger\">{{doTranslation('Featured')}}</ion-label>\r\n            <ion-label slot=\"end\" color=\"light\">{{doTranslation('See all')}}</ion-label>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n\r\n        <ion-card class=\"web-view\" color=\"none\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\" routerLink=\"/tabs/item-details\" routerDirection=\"forward\">\r\n                <ion-slides [options]=\"slideOpts\">\r\n                  <ion-slide class=\"vertical-center\" *ngFor=\"let product of dummydata| filter:searchTerm\">\r\n                    <ion-thumbnail>\r\n                      <ion-img src=\"{{product.img}}\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label color=\"success\">Rs {{ product.quotedPrice }}</ion-label>\r\n                    <ion-label color=\"light\">{{ product.breed }}</ion-label>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-toolbar class=\"web-view\" color=\"none\">\r\n          <ion-item lines=\"full\" color=\"none\">\r\n            <ion-label slot=\"start\" color=\"danger\">{{doTranslation('Best Sell')}}</ion-label>\r\n            <ion-label slot=\"end\" color=\"light\">{{doTranslation('See all')}}</ion-label>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n\r\n        <ion-card class=\"web-view\" color=\"none\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-slides [options]=\"slideOpts\">\r\n                  <ion-slide class=\"vertical-center\" *ngFor=\"let product of dummydata| filter:searchTerm\">\r\n                    <ion-thumbnail>\r\n                      <ion-img src=\"{{ product.img}}\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label color=\"success\">Rs {{ product.quotedPrice }}</ion-label>\r\n                    <ion-label color=\"light\">{{ product.breed }}</ion-label>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");










let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"]
        ],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  --box-shadow: none !important;\n  --background: transparent !important;\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\nion-fab-button {\n  border-radius: 50%;\n  box-shadow: 0px 2px black;\n}\n\nion-slide {\n  margin: 0;\n  padding: 0;\n  --background: transparent !important;\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n}\n\nion-slide ion-label {\n  font-size: 12px;\n}\n\nion-thumbnail {\n  width: 100%;\n  height: 100%;\n}\n\nion-img {\n  width: 100%;\n  height: 100px;\n}\n\n.contact-logo {\n  width: 100%;\n  height: 70px;\n}\n\n.contact-logo ion-icon {\n  height: 45px;\n  width: 45px;\n}\n\n.contact-logo a {\n  color: white;\n}\n\n.contact-title {\n  font-weight: bold;\n  font-size: 150%;\n}\n\nion-searchbar {\n  border: none;\n  border-radius: 0;\n  --background: transparent;\n  background-color: transparent;\n  --box-shadow: none !important;\n  z-index: 2;\n  font-weight: bold;\n  color: white;\n  --background: transparent;\n  background-color: transparent;\n}\n\n.web-view {\n  width: 100%;\n}\n\n@media (min-width: 700px) {\n  .web-view {\n    width: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SkE7RUFDRSw2QkFBQTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBdkpKOztBQTBKRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUF2Sko7O0FBMEpFO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDRixvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF2Sko7O0FBd0pJO0VBQ0UsZUFBQTtBQXRKTjs7QUEwSkU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXZKTjs7QUEwSkU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQXZKSjs7QUEwSkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXZKSjs7QUF3SkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQXRKSjs7QUF3SkU7RUFDRSxZQUFBO0FBdEpKOztBQTBKQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQXZKRjs7QUEwSkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQXZKSjs7QUEwSkU7RUFDRSxXQUFBO0FBdkpKOztBQTBKQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBdkpGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLW1lbnUtYnV0dG9uIHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZmlsdGVyIHtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLnNlYXJjaCB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuLy8gICAgIGlvbi1pdGVtIHtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XHJcbi8vICAgICAgICAgcGFkZGluZzogOHB4O1xyXG5cclxuLy8gICAgICAgICBpb24taWNvbiB7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlvbi1pbnB1dCB7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNGNEY0RjQ7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAudGl0bGUge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuLy8gICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4vLyAgICAgaDIge1xyXG4vLyAgICAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcclxuLy8gICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwIHtcclxuLy8gICAgICAgICBtYXJnaW46IDAgMTZweCAwIDA7XHJcbi8vICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC5jYXRlZ29yeS1zbGlkZXIge1xyXG4vLyAgICAgaW9uLXNsaWRlIHtcclxuLy8gICAgICAgICB3aWR0aDogMTUwcHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbi8vICAgICAgICAgaW9uLWNvbCB7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4vLyAgICAgICAgICAgICBoNCB7XHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgaW1nIHtcclxuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbi8vICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbi8vICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbi8vICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IDBweCByZ2JhKDE0NSwgMTQzLCAxNDMsIDAuMTYpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC5tZWQtcHJpY2V7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbi8vICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4vLyB9XHJcbi8vIC5tZWQtaW1ne1xyXG4vLyAgICAgd2lkdGg6IDgwJTtcclxuLy8gICAgIGhlaWdodDogMTgwcHg7XHJcbi8vICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyB9XHJcbi8vIC5mb250LWJvbGQge1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9kdWN0LXNsaWRlciB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuLy8gICAgIGlvbi1zbGlkZSB7XHJcbi8vICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogYXV0bztcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4vLyAgICAgICAgIGlvbi1jb2wge1xyXG4vLyAgICAgICAgICAgICBpbWcge1xyXG4vLyAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIHAge1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgaDYge1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLy8gUmVtb3ZpbmcgaGlnaGxpZ2h0IHdoZW4gZm9jdXNlZC9jbGlja2VkIG9uIHByb2R1Y3RcclxuLy8gaW9uLXNsaWRlOmZvY3VzIHtcclxuLy8gICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbDpmb2N1cyB7XHJcbi8vICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHRcclxuLy8gaW9uLWZhYi1idXR0b24ge1xyXG4vLyAgIGhlaWdodDogNzBweDtcclxuLy8gICB3aWR0aDogNzBweDtcclxuLy8gfVxyXG4gXHJcbi8vIC5jYXJ0LWljb24ge1xyXG4vLyAgIGZvbnQtc2l6ZTogNTBweDtcclxuLy8gfVxyXG4gXHJcbi8vIC5jYXJ0LWxlbmd0aCB7XHJcbi8vICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiAxOHB4O1xyXG4vLyAgIGxlZnQ6IDI1cHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICBmb250LXNpemU6IDFlbTtcclxuLy8gICBtaW4td2lkdGg6IDI1cHg7XHJcbi8vICAgei1pbmRleDogMTA7XHJcbi8vIH1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBpb24tZmFiLWJ1dHRvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zbGlkZXtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLXRodW1ibmFpbHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlvbi1pbWd7XHJcbiAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWxvZ297XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICBpb24taWNvbntcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gIH1cclxuICBhe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhY3QtdGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4gIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAud2ViLXZpZXd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpe1xyXG4gIC53ZWItdmlld3tcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_seller_form_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/seller-form-api.service */ "./src/app/services/seller-form-api.service.ts");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/translate.service */ "./src/app/services/translate.service.ts");






let HomePage = class HomePage {
    constructor(data, router, sellerFormApiService, translateService) {
        this.data = data;
        this.router = router;
        this.sellerFormApiService = sellerFormApiService;
        this.translateService = translateService;
        this.categories = [];
        this.featuredProducts = [];
        this.bestSellProducts = [];
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 3,
            spaceBetween: 10,
            speed: 500,
            zoom: false,
            grabCursor: true,
        };
        this.dummydata = [
            {
                "img": "https://prod-ttp.imgix.net/63114653-ab1c-4351-a1b3-458362a7fdd4/cow.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C4725%2C2700&w=1600&h=914&fit=crop&fm=jpg&q=70&auto=format",
                "animalName": "Jackson",
                "quotedPrice": "50000",
                "breed": "Jersy",
                "Lactation": "4",
                "Milk/Day": "10",
                "Age": "50",
            },
            {
                "img": "data:image/jpeg;base64,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",
                "animalName": "Jackson",
                "quotedPrice": "50000",
                "breed": "Jersy",
                "Lactation": "4",
                "Milk/Day": "10",
                "Age": "50",
            },
            {
                "img": "https://media.istockphoto.com/photos/fynny-cow-portrait-open-mouth-mooing-with-horns-picture-id1198213022?s=2048x2048",
                "animalName": "Jackson",
                "quotedPrice": "50000",
                "breed": "Jersy",
                "Lactation": "4",
                "Milk/Day": "10",
                "Age": "50",
            },
            {
                "img": "https://www.konnecthq.com/wp-content/uploads/2019/07/cow-1-10-1.jpg",
                "animalName": "Jackson",
                "quotedPrice": "50000",
                "breed": "Jersy",
                "Lactation": "4",
                "Milk/Day": "10",
                "Age": "50",
            }
        ];
    }
    ngOnInit() {
        // this.categories = this.data.getCategories();
        // this.featuredProducts = this.data.getFeaturedProducts();
        // this.bestSellProducts = this.data.getBestSellProducts();
        this.getAllads();
    }
    getAllads() {
        this.sellerFormApiService.getData().subscribe((result) => {
            this.getApiData = result;
            console.log("getApiData- ", this.getApiData);
        });
    }
    doRefresh(event) {
        console.log("Begin async operation");
        setTimeout(() => {
            console.log("Async operation has ended");
            event.target.complete();
        }, 2500);
    }
    onClickFab() {
        this.router.navigateByUrl("/tabs/seller-form");
    }
    doTranslation(text) {
        var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
        return translateText;
    }
};
HomePage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_seller_form_api_service__WEBPACK_IMPORTED_MODULE_4__["SellerFormApiService"] },
    { type: _services_translate_service__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-home",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map