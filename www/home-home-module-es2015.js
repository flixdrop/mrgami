(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons class=\"btn-shape\" slot=\"start\" routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\r\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{doTranslation('BUY ANIMALS')}}</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar class=\"search-color\">\r\n    <ion-searchbar [(ngModel)]=\"searchTerm\" placeholder=\"{{doTranslation('Search Cattles')}}\" mode=\"md\">\r\n      <ion-icon slot=\"end\" name=\"funnel-outline\" color=\"medium\"></ion-icon>\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding content-color\">\r\n  <ion-refresher class=\"center\" slot=\"fixed\" pullMin=\"120\" pullMax=\"50\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" refreshingSpinner=\"lines\"\r\n      refreshingText=\"{{doTranslation('Please Wait...')}}\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-toolbar class=\"web-view\" color=\"none\">\r\n          <ion-item lines=\"full\" color=\"none\">\r\n            <ion-label slot=\"start\" color=\"warning\">{{doTranslation('Type of Cattles')}}</ion-label>\r\n            <a slot=\"end\" color=\"medium\">{{doTranslation('See all')}}</a>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-slides [options]=\"slideOpts\">\r\n                  <ion-slide class=\"center\" *ngFor=\"let category of getApiData| filter:searchTerm; let i=index\">\r\n                    <ion-thumbnail>\r\n                      <ion-img src=\"{{category.imageUrls['imagesList'][0]}}\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label>{{category.type}}</ion-label>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-toolbar class=\"web-view\" color=\"none\">\r\n          <ion-item lines=\"full\" color=\"none\">\r\n            <ion-label slot=\"start\" color=\"warning\">{{doTranslation('Featured')}}</ion-label>\r\n            <a slot=\"end\" color=\"medium\">{{doTranslation('See all')}}</a>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\" routerLink=\"/tabs/item-details\" routerDirection=\"forward\">\r\n                <ion-slides [options]=\"slideOpts\">\r\n                  <ion-slide class=\"center\" *ngFor=\"let product of getApiData| filter:searchTerm\">\r\n                    <ion-thumbnail>\r\n                      <ion-img src=\"{{ product.imageUrls['imagesList'][0] }}\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label style=\"color: aliceblue;\">Rs {{ product.quotedPrice }}</ion-label>\r\n                    <ion-label style=\"color: aliceblue;\">{{ product.type }}</ion-label>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-toolbar class=\"web-view\" color=\"none\">\r\n          <ion-item lines=\"full\" color=\"none\">\r\n            <ion-label slot=\"start\" color=\"warning\">{{doTranslation('Best Sell')}}</ion-label>\r\n            <a slot=\"end\" color=\"medium\">{{doTranslation('See all')}}</a>\r\n          </ion-item>\r\n        </ion-toolbar>\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-slides [options]=\"slideOpts\">\r\n                  <ion-slide class=\"center\" *ngFor=\"let product of getApiData| filter:searchTerm\">\r\n                    <ion-thumbnail>\r\n                      <ion-img src=\"{{ product.imageUrls['imagesList'][0] }}\"></ion-img>\r\n                    </ion-thumbnail>\r\n                    <ion-label>Rs {{ product.quotedPrice }}</ion-label>\r\n                    <ion-label>{{ product.type }}</ion-label>\r\n                  </ion-slide>\r\n                </ion-slides>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"start\" translucent=\"true\">\r\n  <ion-fab-button size=\"small\" (click)=\"onClickFab()\" color=\"dark\">\r\n    <ion-icon size=\"large\" name=\"add\"></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-text class=\"center\">{{doTranslation('New AD')}}</ion-text>\r\n</ion-fab>\r\n\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  --box-shadow: none !important;\n  --background: transparent !important;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\nion-fab-button {\n  border-radius: 50%;\n  box-shadow: 0px 2px black;\n}\n\nion-slide {\n  margin: 0;\n  padding: 0;\n  --background: transparent !important;\n  height: 100%;\n  width: 100%;\n}\n\nion-slide ion-label {\n  font-size: 12px;\n}\n\nion-thumbnail {\n  width: 100%;\n  height: 100%;\n}\n\nion-img {\n  width: 100%;\n  height: 100%;\n  border: 1px solid silver;\n}\n\n.center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: left;\n}\n\nion-searchbar {\n  border: none;\n  border-radius: 0;\n  --background: transparent;\n  background-color: transparent;\n  --box-shadow: none !important;\n  z-index: 2;\n  font-weight: bold;\n  color: white;\n  --background: transparent;\n  background-color: transparent;\n}\n\n.web-view {\n  width: 100%;\n}\n\n@media (min-width: 700px) {\n  .web-view {\n    width: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SkE7RUFDRSw2QkFBQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQXZKSjs7QUEwSkU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBdkpKOztBQTBKRTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Ysb0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXZKSjs7QUF3Skk7RUFDRSxlQUFBO0FBdEpOOztBQTBKRTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBdkpOOztBQTBKRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUF2Sko7O0FBMEpFO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBdkpOOztBQTBKRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBdkpKOztBQTBKRTtFQUNFLFdBQUE7QUF2Sko7O0FBMEpBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RUF2SkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tbWVudS1idXR0b24ge1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5maWx0ZXIge1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuc2VhcmNoIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4vLyAgICAgaW9uLWl0ZW0ge1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEzcHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcclxuLy8gICAgICAgICBwYWRkaW5nOiA4cHg7XHJcblxyXG4vLyAgICAgICAgIGlvbi1pY29uIHtcclxuLy8gICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgaW9uLWlucHV0IHtcclxuLy8gICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0Y0RjRGNDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC50aXRsZSB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xyXG4vLyAgICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbi8vICAgICBoMiB7XHJcbi8vICAgICAgICAgbWFyZ2luOiAwIDAgMCAxNnB4O1xyXG4vLyAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHAge1xyXG4vLyAgICAgICAgIG1hcmdpbjogMCAxNnB4IDAgMDtcclxuLy8gICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmNhdGVnb3J5LXNsaWRlciB7XHJcbi8vICAgICBpb24tc2xpZGUge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuLy8gICAgICAgICBpb24tY29sIHtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbi8vICAgICAgICAgICAgIGg0IHtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBpbWcge1xyXG4vLyAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuLy8gICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuLy8gICAgICAgICAgICAgICAgIHRvcDogMDtcclxuLy8gICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbi8vICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuLy8gICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggMHB4IHJnYmEoMTQ1LCAxNDMsIDE0MywgMC4xNik7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLm1lZC1wcmljZXtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbi8vIH1cclxuLy8gLm1lZC1pbWd7XHJcbi8vICAgICB3aWR0aDogODAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxODBweDtcclxuLy8gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuLy8gICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vIH1cclxuLy8gLmZvbnQtYm9sZCB7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG5cclxuLy8gLnByb2R1Y3Qtc2xpZGVyIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4vLyAgICAgaW9uLXNsaWRlIHtcclxuLy8gICAgICAgICB3aWR0aDogMTUwcHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbi8vICAgICAgICAgaW9uLWNvbCB7XHJcbi8vICAgICAgICAgICAgIGltZyB7XHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbi8vICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuLy8gICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuLy8gICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgcCB7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBoNiB7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAvLyBSZW1vdmluZyBoaWdobGlnaHQgd2hlbiBmb2N1c2VkL2NsaWNrZWQgb24gcHJvZHVjdFxyXG4vLyBpb24tc2xpZGU6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyBpb24tY29sOmZvY3VzIHtcclxuLy8gICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cdFxyXG4vLyBpb24tZmFiLWJ1dHRvbiB7XHJcbi8vICAgaGVpZ2h0OiA3MHB4O1xyXG4vLyAgIHdpZHRoOiA3MHB4O1xyXG4vLyB9XHJcbiBcclxuLy8gLmNhcnQtaWNvbiB7XHJcbi8vICAgZm9udC1zaXplOiA1MHB4O1xyXG4vLyB9XHJcbiBcclxuLy8gLmNhcnQtbGVuZ3RoIHtcclxuLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDE4cHg7XHJcbi8vICAgbGVmdDogMjVweDtcclxuLy8gICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgIG1pbi13aWR0aDogMjVweDtcclxuLy8gICB6LWluZGV4OiAxMDtcclxuLy8gfVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBpb24tZmFiLWJ1dHRvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1zbGlkZXtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi10aHVtYm5haWx7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBpb24taW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7ICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlcjtcclxuICB9XHJcblxyXG4gIC5jZW50ZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgaW9uLXNlYXJjaGJhcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIC53ZWItdmlld3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCl7XHJcbiAgLndlYi12aWV3e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gIH1cclxufSJdfQ== */");

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