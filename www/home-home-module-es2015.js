(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <img src=\"../../assets/menu_bar.svg\" />\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <!-- <ion-button class=\"notification\">\r\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\r\n        <span>&nbsp;</span>\r\n      </ion-button> -->\r\n      <!-- <ion-button class=\"filter\">\r\n        <ion-icon name=\"funnel-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button> -->\r\n    </ion-buttons>\r\n    <ion-title> Buy Animal</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"none\">\r\n    <ion-searchbar [(ngModel)]=\"searchTerm\" placeholder=\"Search Cattles\" mode=\"md\">\r\n    </ion-searchbar>\r\n    <ion-item lines=\"none\" color=\"none\" slot=\"end\">\r\n      <ion-icon name=\"funnel-outline\" color=\"dark\"></ion-icon>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-refresher class=\"center\" slot=\"fixed\" pullMin=\"120\" pullMax=\"50\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" refreshingSpinner=\"lines\"\r\n      refreshingText=\"Please Wait...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-toolbar color=\"none\">\r\n    <ion-item lines=\"full\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"warning\">Breed</ion-label>\r\n      <a slot=\"end\" color=\"medium\">See all</a>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n\r\n  <ion-card color=\"none\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-slides [options]=\"slideOpts\">\r\n            <ion-slide class=\"center\" *ngFor=\"let category of categories| filter:searchTerm\">\r\n              <ion-thumbnail>\r\n                <ion-img src=\"{{ category.image }}\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label>{{ category.name }}</ion-label>\r\n            </ion-slide>\r\n          </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n\r\n  <ion-toolbar color=\"none\">\r\n    <ion-item lines=\"full\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"warning\">Featured</ion-label>\r\n      <a slot=\"end\" color=\"medium\">See all</a>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n\r\n  <ion-card color=\"none\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" routerLink=\"/tabs/item-details\" routerDirection=\"forward\">\r\n          <ion-slides [options]=\"slideOpts\">\r\n            <ion-slide class=\"center\" *ngFor=\"let product of featuredProducts| filter:searchTerm\">\r\n              <ion-thumbnail>\r\n                <ion-img src=\"{{ product.image }}\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label style=\"color: aliceblue;\">Rs {{ product.price }}</ion-label>\r\n              <ion-label style=\"color: aliceblue;\">{{ product.name }}</ion-label>\r\n            </ion-slide>\r\n          </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n\r\n  <ion-toolbar color=\"none\">\r\n    <ion-item lines=\"full\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"warning\">Best Sell</ion-label>\r\n      <a slot=\"end\" color=\"medium\">See all</a>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n\r\n  <ion-card color=\"none\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-slides [options]=\"slideOpts\">\r\n            <ion-slide class=\"center\" *ngFor=\"let product of bestSellProducts| filter:searchTerm\">\r\n              <ion-thumbnail>\r\n                <ion-img src=\"{{ product.image }}\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label>Rs {{ product.price }}</ion-label>\r\n              <ion-label>{{ product.name }}</ion-label>\r\n            </ion-slide>\r\n          </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"right\" translucent=\"true\">\r\n  <ion-fab-button (click)=\"onClickFab()\" color=\"medium\">\r\n    <ion-icon name=\"add\"></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-label color=\"medium\">New AD</ion-label>\r\n</ion-fab>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  --box-shadow: none !important;\n  --background: transparent !important;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\nion-slide {\n  margin: 0;\n  padding: 0;\n  --background: transparent !important;\n  height: 100%;\n  width: 100%;\n}\n\nion-slide ion-label {\n  font-size: 12px;\n}\n\nion-thumbnail {\n  width: 100%;\n  height: 100%;\n}\n\nion-img {\n  width: 100%;\n  height: 100%;\n  border: 1px solid silver;\n}\n\n.center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: left;\n}\n\nion-label {\n  color: aliceblue;\n}\n\nion-grid {\n  margin: 0;\n  padding: 0;\n}\n\nion-row {\n  margin: 0;\n  padding: 0;\n}\n\nion-col {\n  margin: 0;\n  padding: 0;\n}\n\nion-searchbar {\n  border: none;\n  border-radius: 0;\n  --background: transparent;\n  --box-shadow: none !important;\n  border-bottom: 1px solid silver;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SkE7RUFDRSw2QkFBQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXZKSjs7QUEwSkU7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNGLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF2Sko7O0FBd0pJO0VBQ0UsZUFBQTtBQXRKTjs7QUEwSkU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXZKTjs7QUEwSkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBdkpKOztBQTBKRTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQXZKTjs7QUEwSkU7RUFDSSxnQkFBQTtBQXZKTjs7QUEwSkU7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQXZKTjs7QUEwSkU7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQXZKTjs7QUEwSkU7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQXZKTjs7QUEySkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0FBeEpKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1tZW51LWJ1dHRvbiB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLmZpbHRlciB7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5zZWFyY2gge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbi8vICAgICBpb24taXRlbSB7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuXHJcbi8vICAgICAgICAgaW9uLWljb24ge1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpb24taW5wdXQge1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRjRGNEY0O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLnRpdGxlIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbi8vICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG5cclxuLy8gICAgIGgyIHtcclxuLy8gICAgICAgICBtYXJnaW46IDAgMCAwIDE2cHg7XHJcbi8vICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcCB7XHJcbi8vICAgICAgICAgbWFyZ2luOiAwIDE2cHggMCAwO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAuY2F0ZWdvcnktc2xpZGVyIHtcclxuLy8gICAgIGlvbi1zbGlkZSB7XHJcbi8vICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4vLyAgICAgICAgIGlvbi1jb2wge1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuLy8gICAgICAgICAgICAgaDQge1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGltZyB7XHJcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuLy8gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4vLyAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCAwcHggcmdiYSgxNDUsIDE0MywgMTQzLCAwLjE2KTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAubWVkLXByaWNle1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuLy8gfVxyXG4vLyAubWVkLWltZ3tcclxuLy8gICAgIHdpZHRoOiA4MCU7XHJcbi8vICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4vLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgcGFkZGluZzogMTBweDtcclxuLy8gfVxyXG4vLyAuZm9udC1ib2xkIHtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZHVjdC1zbGlkZXIge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbi8vICAgICBpb24tc2xpZGUge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuLy8gICAgICAgICBpb24tY29sIHtcclxuLy8gICAgICAgICAgICAgaW1nIHtcclxuLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuLy8gICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBwIHtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGg2IHtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC8vIFJlbW92aW5nIGhpZ2hsaWdodCB3aGVuIGZvY3VzZWQvY2xpY2tlZCBvbiBwcm9kdWN0XHJcbi8vIGlvbi1zbGlkZTpmb2N1cyB7XHJcbi8vICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1jb2w6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblx0XHJcbi8vIGlvbi1mYWItYnV0dG9uIHtcclxuLy8gICBoZWlnaHQ6IDcwcHg7XHJcbi8vICAgd2lkdGg6IDcwcHg7XHJcbi8vIH1cclxuIFxyXG4vLyAuY2FydC1pY29uIHtcclxuLy8gICBmb250LXNpemU6IDUwcHg7XHJcbi8vIH1cclxuIFxyXG4vLyAuY2FydC1sZW5ndGgge1xyXG4vLyAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogMThweDtcclxuLy8gICBsZWZ0OiAyNXB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgZm9udC1zaXplOiAxZW07XHJcbi8vICAgbWluLXdpZHRoOiAyNXB4O1xyXG4vLyAgIHotaW5kZXg6IDEwO1xyXG4vLyB9XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNsaWRle1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLXRodW1ibmFpbHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlvbi1pbWd7XHJcbiAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlcntcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWx7XHJcbiAgICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgfVxyXG5cclxuICBpb24tZ3JpZHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLXJvd3tcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcblxyXG4gIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfSJdfQ== */");

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





let HomePage = class HomePage {
    constructor(data, router, sellerFormApiService) {
        this.data = data;
        this.router = router;
        this.sellerFormApiService = sellerFormApiService;
        this.categories = [];
        this.featuredProducts = [];
        this.bestSellProducts = [];
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 3,
            spaceBetween: 10,
            speed: 500,
            zoom: false,
            grabCursor: true
        };
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
            console.log('getApiData- ', this.getApiData);
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
        this.router.navigateByUrl('/tabs/seller-form');
    }
};
HomePage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_seller_form_api_service__WEBPACK_IMPORTED_MODULE_4__["SellerFormApiService"] }
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