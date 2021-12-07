(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <img src=\"../../assets/menu_bar.svg\" />\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <!-- <ion-button class=\"notification\">\r\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\r\n        <span>&nbsp;</span>\r\n      </ion-button> -->\r\n      <!-- <ion-button class=\"filter\">\r\n        <ion-icon name=\"funnel-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button> -->\r\n    </ion-buttons>\r\n    <ion-title> Buy Animal</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"none\">\r\n    <ion-searchbar [(ngModel)]=\"searchTerm\" placeholder=\"Search Cattles\" mode=\"md\">\r\n    </ion-searchbar>\r\n    <ion-item lines=\"none\" color=\"none\" slot=\"end\">\r\n      <ion-icon name=\"funnel-outline\" color=\"dark\"></ion-icon>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-refresher class=\"center\" slot=\"fixed\" pullMin=\"120\" pullMax=\"50\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" refreshingSpinner=\"lines\"\r\n      refreshingText=\"Please Wait...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-toolbar color=\"none\">\r\n    <ion-item lines=\"full\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"warning\">Type of Cattles</ion-label>\r\n      <a slot=\"end\" color=\"medium\">See all</a>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n\r\n  <ion-card color=\"none\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-slides [options]=\"slideOpts\">\r\n            <ion-slide class=\"center\" *ngFor=\"let category of getApiData| filter:searchTerm; let i=index\">\r\n              <ion-thumbnail>\r\n                <ion-img src=\"{{category.imageUrls['imagesList'][0]}}\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label>{{category.type}}</ion-label>\r\n            </ion-slide>\r\n          </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n\r\n  <ion-toolbar color=\"none\">\r\n    <ion-item lines=\"full\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"warning\">Featured</ion-label>\r\n      <a slot=\"end\" color=\"medium\">See all</a>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n\r\n  <ion-card color=\"none\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" routerLink=\"/tabs/item-details\" routerDirection=\"forward\">\r\n          <ion-slides [options]=\"slideOpts\">\r\n            <ion-slide class=\"center\" *ngFor=\"let product of getApiData| filter:searchTerm\">\r\n              <ion-thumbnail>\r\n                <ion-img src=\"{{ product.imageUrls['imagesList'][0] }}\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label style=\"color: aliceblue;\">Rs {{ product.quotedPrice }}</ion-label>\r\n              <ion-label style=\"color: aliceblue;\">{{ product.type }}</ion-label>\r\n            </ion-slide>\r\n          </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n\r\n  <ion-toolbar color=\"none\">\r\n    <ion-item lines=\"full\" color=\"none\">\r\n      <ion-label slot=\"start\" color=\"warning\">Best Sell</ion-label>\r\n      <a slot=\"end\" color=\"medium\">See all</a>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n\r\n  <ion-card color=\"none\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-slides [options]=\"slideOpts\">\r\n            <ion-slide class=\"center\" *ngFor=\"let product of getApiData| filter:searchTerm\">\r\n              <ion-thumbnail>\r\n                <ion-img src=\"{{ product.imageUrls['imagesList'][0] }}\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label>Rs {{ product.quotedPrice }}</ion-label>\r\n              <ion-label>{{ product.type }}</ion-label>\r\n            </ion-slide>\r\n          </ion-slides>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"right\" translucent=\"true\">\r\n  <ion-fab-button (click)=\"onClickFab()\" color=\"medium\">\r\n    <ion-icon name=\"add\"></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-label color=\"medium\">New AD</ion-label>\r\n</ion-fab>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  --box-shadow: none !important;\n  --background: transparent !important;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\nion-slide {\n  margin: 0;\n  padding: 0;\n  --background: transparent !important;\n  height: 100%;\n  width: 100%;\n}\n\nion-slide ion-label {\n  font-size: 12px;\n}\n\nion-thumbnail {\n  width: 100%;\n  height: 100%;\n}\n\nion-img {\n  width: 100%;\n  height: 100%;\n  border: 1px solid silver;\n}\n\n.center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: left;\n}\n\nion-label {\n  color: aliceblue;\n}\n\nion-grid {\n  margin: 0;\n  padding: 0;\n}\n\nion-row {\n  margin: 0;\n  padding: 0;\n}\n\nion-col {\n  margin: 0;\n  padding: 0;\n}\n\nion-searchbar {\n  border: none;\n  border-radius: 0;\n  --background: transparent;\n  --box-shadow: none !important;\n  border-bottom: 1px solid silver;\n  z-index: 2;\n}\n\nion-fab-button {\n  border-radius: 50%;\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SkE7RUFDRSw2QkFBQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXZKSjs7QUEwSkU7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNGLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF2Sko7O0FBd0pJO0VBQ0UsZUFBQTtBQXRKTjs7QUEwSkU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXZKTjs7QUEwSkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBdkpKOztBQTBKRTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQXZKTjs7QUEwSkU7RUFDSSxnQkFBQTtBQXZKTjs7QUEwSkU7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQXZKTjs7QUEwSkU7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQXZKTjs7QUEwSkU7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQXZKTjs7QUEySkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0FBeEpKOztBQTJKRTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUF4SkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLW1lbnUtYnV0dG9uIHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuZmlsdGVyIHtcclxuLy8gICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLnNlYXJjaCB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuLy8gICAgIGlvbi1pdGVtIHtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxM3B4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XHJcbi8vICAgICAgICAgcGFkZGluZzogOHB4O1xyXG5cclxuLy8gICAgICAgICBpb24taWNvbiB7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIGlvbi1pbnB1dCB7XHJcbi8vICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNGNEY0RjQ7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAudGl0bGUge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuLy8gICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4vLyAgICAgaDIge1xyXG4vLyAgICAgICAgIG1hcmdpbjogMCAwIDAgMTZweDtcclxuLy8gICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwIHtcclxuLy8gICAgICAgICBtYXJnaW46IDAgMTZweCAwIDA7XHJcbi8vICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC5jYXRlZ29yeS1zbGlkZXIge1xyXG4vLyAgICAgaW9uLXNsaWRlIHtcclxuLy8gICAgICAgICB3aWR0aDogMTUwcHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbi8vICAgICAgICAgaW9uLWNvbCB7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4vLyAgICAgICAgICAgICBoNCB7XHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgaW1nIHtcclxuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbi8vICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbi8vICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbi8vICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IDBweCByZ2JhKDE0NSwgMTQzLCAxNDMsIDAuMTYpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC5tZWQtcHJpY2V7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbi8vICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4vLyB9XHJcbi8vIC5tZWQtaW1ne1xyXG4vLyAgICAgd2lkdGg6IDgwJTtcclxuLy8gICAgIGhlaWdodDogMTgwcHg7XHJcbi8vICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyB9XHJcbi8vIC5mb250LWJvbGQge1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9kdWN0LXNsaWRlciB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuLy8gICAgIGlvbi1zbGlkZSB7XHJcbi8vICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogYXV0bztcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4vLyAgICAgICAgIGlvbi1jb2wge1xyXG4vLyAgICAgICAgICAgICBpbWcge1xyXG4vLyAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIHAge1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgaDYge1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLy8gUmVtb3ZpbmcgaGlnaGxpZ2h0IHdoZW4gZm9jdXNlZC9jbGlja2VkIG9uIHByb2R1Y3RcclxuLy8gaW9uLXNsaWRlOmZvY3VzIHtcclxuLy8gICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLWNvbDpmb2N1cyB7XHJcbi8vICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHRcclxuLy8gaW9uLWZhYi1idXR0b24ge1xyXG4vLyAgIGhlaWdodDogNzBweDtcclxuLy8gICB3aWR0aDogNzBweDtcclxuLy8gfVxyXG4gXHJcbi8vIC5jYXJ0LWljb24ge1xyXG4vLyAgIGZvbnQtc2l6ZTogNTBweDtcclxuLy8gfVxyXG4gXHJcbi8vIC5jYXJ0LWxlbmd0aCB7XHJcbi8vICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgdG9wOiAxOHB4O1xyXG4vLyAgIGxlZnQ6IDI1cHg7XHJcbi8vICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICBmb250LXNpemU6IDFlbTtcclxuLy8gICBtaW4td2lkdGg6IDI1cHg7XHJcbi8vICAgei1pbmRleDogMTA7XHJcbi8vIH1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICBpb24tc2xpZGV7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tdGh1bWJuYWlse1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWltZ3tcclxuICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgfVxyXG5cclxuICAuY2VudGVye1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbHtcclxuICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcblxyXG4gIGlvbi1ncmlke1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tcm93e1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tY29se1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW9uLXNlYXJjaGJhcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2lsdmVyO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gIGlvbi1mYWItYnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn0iXX0= */");

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