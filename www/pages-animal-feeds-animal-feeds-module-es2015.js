(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-animal-feeds-animal-feeds-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/animal-feeds/animal-feeds.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/animal-feeds/animal-feeds.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons class=\"btn-shape\" slot=\"start\" routerLink=\"/tabs/landing\" routerDirection=\"back\">\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\n    </ion-buttons>\n    <ion-title color=\"light\">{{doTranslation('ANIMAL FEEDS')}}</ion-title>\n  </ion-toolbar>\n  <ion-toolbar class=\"search-color\">\n    <ion-item lines=\"none\" color=\"none\">\n      <ion-searchbar [(ngModel)]=\"searchTerm\" mode=\"md\"></ion-searchbar>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"content-color\">\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge=\"true\">\n    <ion-fab-button style=\"--background: #0fd15dc5 ;\" (click)=\"openCart()\" #cart>\n      <div class=\"cart-length\">{{ cartItemCount | async }}</div>\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-refresher class=\"center\" slot=\"fixed\" pullMin=\"120\" pullMax=\"50\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" refreshingSpinner=\"lines\"\n      refreshingText=\"{{doTranslation('Please Wait...')}}\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-toolbar class=\"center\" color=\"dark\">\n    <ion-label class=\"contact-title\" color=\"danger\">ORDER THROUGH</ion-label>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button class=\"contact-logo\" color=\"danger\">\n          <ion-icon name=\"call-outline\"></ion-icon>\n          CALL\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button class=\"contact-logo\" color=\"danger\">\n          <ion-icon name=\"logo-whatsapp\"></ion-icon>\n          <a href=\"https://api.whatsapp.com/send?phone=+919860067118\">MESSAGE</a>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-toolbar>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"vertical-center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\n        <ion-card class=\"card-color custom-card\" *ngFor=\"let p of products | filter:searchTerm; let i=index\">\n          <ion-grid (click)=\"medModal(p)\">\n            <ion-row>\n              <ion-col class=\"vertical-center\" size=\"6\">\n                <ion-thumbnail>\n                  <ion-img src=\"{{p.image}}\"></ion-img>\n                </ion-thumbnail>\n              </ion-col>\n              <ion-col class=\"horizontal-padding\" size=\"6\">\n                <div class=\"center\"> \n                  <ion-label color=\"primary\">{{p.name}}</ion-label>\n                </div>\n                <ion-text color=\"light\">REFIT ANIMAL CARE – 10 Kg Chelated Mineral Mixture for\n                  Buffalo,Cow,Cattle,Poultry,\n                  Goat & Pig (RIGMIN Forte Powder)\n                </ion-text>\n                <ion-toolbar color=\"none\">\n                  <ion-text slot=\"start\" color=\"success\">{{ p.price | currency:'INR' }}</ion-text>\n                  <ion-button slot=\"end\" color=\"danger\" expand=\"block\" size=\"small\" (click)=\"addToCart(p)\">\n                    {{doTranslation('Add to cart')}}\n                  </ion-button>\n                </ion-toolbar>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/animal-feeds/animal-feeds-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/animal-feeds/animal-feeds-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AnimalFeedsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalFeedsPageRoutingModule", function() { return AnimalFeedsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _animal_feeds_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animal-feeds.page */ "./src/app/pages/animal-feeds/animal-feeds.page.ts");




const routes = [
    {
        path: '',
        component: _animal_feeds_page__WEBPACK_IMPORTED_MODULE_3__["AnimalFeedsPage"]
    }
];
let AnimalFeedsPageRoutingModule = class AnimalFeedsPageRoutingModule {
};
AnimalFeedsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnimalFeedsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/animal-feeds/animal-feeds.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/animal-feeds/animal-feeds.module.ts ***!
  \***********************************************************/
/*! exports provided: AnimalFeedsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalFeedsPageModule", function() { return AnimalFeedsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _animal_feeds_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animal-feeds-routing.module */ "./src/app/pages/animal-feeds/animal-feeds-routing.module.ts");
/* harmony import */ var _animal_feeds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animal-feeds.page */ "./src/app/pages/animal-feeds/animal-feeds.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");








let AnimalFeedsPageModule = class AnimalFeedsPageModule {
};
AnimalFeedsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _animal_feeds_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnimalFeedsPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_animal_feeds_page__WEBPACK_IMPORTED_MODULE_6__["AnimalFeedsPage"]]
    })
], AnimalFeedsPageModule);



/***/ }),

/***/ "./src/app/pages/animal-feeds/animal-feeds.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/animal-feeds/animal-feeds.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  color: white;\n  font-weight: bold;\n  --background: transparent;\n  background-color: transparent;\n  --box-shadow: none !important;\n}\n\nion-thumbnail {\n  width: 100%;\n  height: 100%;\n  margin: 0 2%;\n}\n\n.custom-card {\n  margin: 1% 0;\n}\n\n.custom-card ion-row {\n  margin: 0 1%;\n}\n\n.contact-logo {\n  width: 100%;\n  height: 70px;\n}\n\n.contact-logo ion-icon {\n  height: 45px;\n  width: 45px;\n}\n\n.contact-logo a {\n  color: white;\n}\n\n.contact-title {\n  font-weight: bold;\n  font-size: 150%;\n}\n\n@media (min-width: 500px) {\n  ion-card {\n    width: 75%;\n  }\n}\n\n@media (min-width: 700px) {\n  ion-card {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5pbWFsLWZlZWRzL2FuaW1hbC1mZWVkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUpBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FBeEpGOztBQTJKRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXhKSjs7QUEySkU7RUFDRSxZQUFBO0FBeEpKOztBQXlKSTtFQUNFLFlBQUE7QUF2Sk47O0FBMkpFO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUF4Sk47O0FBeUpJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUF2Sk47O0FBeUpJO0VBQ0UsWUFBQTtBQXZKTjs7QUEySkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUF4Sko7O0FBMkpFO0VBQ0U7SUFDSSxVQUFBO0VBeEpOO0FBQ0Y7O0FBMkpFO0VBQ0U7SUFDSSxVQUFBO0VBekpOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hbmltYWwtZmVlZHMvYW5pbWFsLWZlZWRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1tZW51LWJ1dHRvbiB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuLy8gfVxyXG5cclxuLy8gLmZpbHRlciB7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5zZWFyY2gge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbi8vICAgICBpb24taXRlbSB7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuXHJcbi8vICAgICAgICAgaW9uLWljb24ge1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpb24taW5wdXQge1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRjRGNEY0O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLnRpdGxlIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbi8vICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG5cclxuLy8gICAgIGgyIHtcclxuLy8gICAgICAgICBtYXJnaW46IDAgMCAwIDE2cHg7XHJcbi8vICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcCB7XHJcbi8vICAgICAgICAgbWFyZ2luOiAwIDE2cHggMCAwO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyAuY2F0ZWdvcnktc2xpZGVyIHtcclxuLy8gICAgIGlvbi1zbGlkZSB7XHJcbi8vICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4vLyAgICAgICAgIGlvbi1jb2wge1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuLy8gICAgICAgICAgICAgaDQge1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGltZyB7XHJcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4vLyAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuLy8gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4vLyAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCAwcHggcmdiYSgxNDUsIDE0MywgMTQzLCAwLjE2KTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAubWVkLXByaWNle1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuLy8gfVxyXG4vLyAubWVkLWltZ3tcclxuLy8gICAgIHdpZHRoOiA4MCU7XHJcbi8vICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4vLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4vLyAgICAgcGFkZGluZzogMTBweDtcclxuLy8gfVxyXG4vLyAuZm9udC1ib2xkIHtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcblxyXG4vLyAucHJvZHVjdC1zbGlkZXIge1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbi8vICAgICBpb24tc2xpZGUge1xyXG4vLyAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuLy8gICAgICAgICBpb24tY29sIHtcclxuLy8gICAgICAgICAgICAgaW1nIHtcclxuLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuLy8gICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBwIHtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgIGg2IHtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC8vIFJlbW92aW5nIGhpZ2hsaWdodCB3aGVuIGZvY3VzZWQvY2xpY2tlZCBvbiBwcm9kdWN0XHJcbi8vIGlvbi1zbGlkZTpmb2N1cyB7XHJcbi8vICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1jb2w6Zm9jdXMge1xyXG4vLyAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblx0XHJcbi8vIGlvbi1mYWItYnV0dG9uIHtcclxuLy8gICBoZWlnaHQ6IDcwcHg7XHJcbi8vICAgd2lkdGg6IDcwcHg7XHJcbiAgXHJcbi8vIH1cclxuIFxyXG4vLyAuY2FydC1pY29uIHtcclxuLy8gICBmb250LXNpemU6IDUwcHg7XHJcbi8vIH1cclxuIFxyXG4vLyAuY2FydC1sZW5ndGgge1xyXG4vLyAgIGNvbG9yOiAjMGZkMTVkO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDE4cHg7XHJcbi8vICAgbGVmdDogMjVweDtcclxuLy8gICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgIG1pbi13aWR0aDogMjVweDtcclxuLy8gICB6LWluZGV4OiAxMDtcclxuLy8gfVxyXG5cclxuaW9uLXNlYXJjaGJhcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi10aHVtYm5haWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMCAyJTtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tY2FyZHtcclxuICAgIG1hcmdpbjogMSUgMDtcclxuICAgIGlvbi1yb3d7XHJcbiAgICAgIG1hcmdpbjogMCAxJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWN0LWxvZ297XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICB3aWR0aDogNDVweDtcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWN0LXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgfVxyXG4gXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgfSAgICAgIFxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfSAgICAgIFxyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/pages/animal-feeds/animal-feeds.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/animal-feeds/animal-feeds.page.ts ***!
  \*********************************************************/
/*! exports provided: AnimalFeedsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalFeedsPage", function() { return AnimalFeedsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart-modal/cart-modal.page */ "./src/app/pages/cart-modal/cart-modal.page.ts");
/* harmony import */ var _feed_modal_feed_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feed-modal/feed-modal.page */ "./src/app/pages/feed-modal/feed-modal.page.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/translate.service */ "./src/app/services/translate.service.ts");








let AnimalFeedsPage = class AnimalFeedsPage {
    constructor(data, cartService, modalCtrl, translateService) {
        this.data = data;
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
        this.cart = [];
        this.products = [];
    }
    ngOnInit() {
        this.products = this.cartService.getAnimalFeed();
        this.cart = this.cartService.getCart();
        this.cartItemCount = this.cartService.getCartItemCount();
    }
    addToCart(product) {
        this.cartService.addProduct(product);
        this.animateCSS("tada");
    }
    openCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.animateCSS("bounceOutLeft", true);
            let modal = yield this.modalCtrl.create({
                component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_2__["CartModalPage"],
                cssClass: "cart-modal",
            });
            modal.onWillDismiss().then(() => {
                this.fab.nativeElement.classList.remove("animated", "bounceOutLeft");
                this.animateCSS("bounceInLeft");
            });
            modal.present();
        });
    }
    animateCSS(animationName, keepAnimated = false) {
        const node = this.fab.nativeElement;
        node.classList.add("animated", animationName);
        //https://github.com/daneden/animate.css
        function handleAnimationEnd() {
            if (!keepAnimated) {
                node.classList.remove("animated", animationName);
            }
            node.removeEventListener("animationend", handleAnimationEnd);
        }
        node.addEventListener("animationend", handleAnimationEnd);
    }
    medModal(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _feed_modal_feed_modal_page__WEBPACK_IMPORTED_MODULE_3__["FeedModalPage"],
                cssClass: "cart-modal",
                componentProps: {
                    'name': product.name,
                    'image': product.image,
                    'price': product.price
                }
            });
            modal.present();
        });
    }
    doRefresh(event) {
        console.log("Begin async operation");
        setTimeout(() => {
            console.log("Async operation has ended");
            event.target.complete();
        }, 2500);
    }
    doTranslation(text) {
        var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
        return translateText;
    }
};
AnimalFeedsPage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
AnimalFeedsPage.propDecorators = {
    fab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["cart", { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }]
};
AnimalFeedsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animal-feeds',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./animal-feeds.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/animal-feeds/animal-feeds.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./animal-feeds.page.scss */ "./src/app/pages/animal-feeds/animal-feeds.page.scss")).default]
    })
], AnimalFeedsPage);



/***/ })

}]);
//# sourceMappingURL=pages-animal-feeds-animal-feeds-module-es2015.js.map