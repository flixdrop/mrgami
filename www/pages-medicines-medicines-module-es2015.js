(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-medicines-medicines-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medicines/medicines.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medicines/medicines.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons style=\"\r\n    clip-path: ellipse(100% 54% at 0% 50%); background-color: #36363f;\r\n    background-color: #36363f;width:80px; height: 40px; border-radius: 5%; \" slot=\"start\">\r\n      <ion-buttons routerLink=\"/home\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #3CF185; width: 30px; height: 200px;\"></ion-icon>\r\n      </ion-buttons>\r\n      <span style=\"color: azure;\">BACK</span>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">Medicines</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"notification\">\r\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-item lines=\"full\" color=\"dark\">\r\n      <ion-searchbar [(ngModel)]=\"searchTerm\" color=\"dark\" mode=\"md\"></ion-searchbar>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n  <!-- <ion-toolbar>\r\n    <ion-title>Medicines</ion-title>\r\n    <ion-buttons style=\"\r\n    clip-path: ellipse(100% 54% at 0% 50%); background-color: #36363f;\r\n    background-color: #36363f;width:80px; height: 40px; border-radius: 5%; \" slot=\"start\">\r\n      <ion-buttons routerLink=\"/home\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #3CF185; width: 30px; height: 200px;\"></ion-icon>\r\n      </ion-buttons>\r\n      <span style=\"color: azure;\">BACK</span>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"notification\">\r\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar> -->\r\n</ion-header>\r\n\r\n<ion-content color=\"none\">\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge=\"true\">\r\n    <ion-fab-button style=\"--background: #0fd15dc5 ;\" (click)=\"openCart()\" #cart>\r\n      <div class=\"cart-length\">{{ cartItemCount | async }}</div>\r\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <!-- <ion-toolbar color=\"light\">\r\n    <ion-item lines=\"full\" color=\"light\">\r\n      <ion-searchbar [(ngModel)]=\"searchTerm\" color=\"light\" mode=\"md\"></ion-searchbar>\r\n    </ion-item>\r\n  </ion-toolbar> -->\r\n\r\n  <ion-refresher class=\"center\" slot=\"fixed\" pullMin=\"120\" pullMax=\"50\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" refreshingSpinner=\"lines\"\r\n      refreshingText=\"Please Wait...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list>\r\n    <ion-card style=\"--background:#36363f;\" *ngFor=\"let p of products | filter:searchTerm\">\r\n      <ion-card-header>\r\n        <ion-card-title style=\"color: aliceblue;\">{{ p.name }}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"6\">\r\n            <img class=\"med-img\" src=\"{{ p.image }}\" />\r\n            <ion-label class=\"med-price\" color=\"secondary\">\r\n              <b style=\"color: #3CF185 ;\">{{ p.price | currency:'INR' }}</b>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"ion-text-right\">\r\n            <ion-label padding style=\"color: #ffffff ;\">REFIT ANIMAL CARE – 10 Kg Chelated Mineral Mixture for\r\n              Buffalo,Cow,Cattle,Poultry,\r\n              Goat & Pig (RIGMIN Forte Powder)\r\n            </ion-label>\r\n            <ion-button style=\"background-color:#FF5555; color: azure; border-radius: 8px;\" fill=\"clear\"\r\n              (click)=\"addToCart(p)\">\r\n              Add to cart\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-list>\r\n\r\n  <ion-footer>\r\n    <ion-tabs>\r\n      <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n        <ion-tab-button tab=\"landing\">\r\n          <!-- <ion-icon name=\"cart\" ></ion-icon> -->\r\n          <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/home.png\" />\r\n          <ion-label style=\"color: #EC5B5B;\">Home</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"landing\" style=\"margin-left: -50px;\">\r\n          <!-- <ion-icon name=\"cafe\"></ion-icon> -->\r\n          <img style=\"height: 30px; width: 30px; \" src=\"../../assets/icon/ad.png\" />\r\n          <ion-label style=\"color: #06D25A;\">My Ads</ion-label>\r\n          <!-- <ion-badge *ngIf=\"new_message\">{{new_message}}</ion-badge> -->\r\n        </ion-tab-button>\r\n\r\n        <!-- <svg height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"#1f1f1f\" fill-rule=\"evenodd\"></path></svg> -->\r\n\r\n        <ion-tab-button tab=\"medicines\" style=\" margin-right: -60px;\">\r\n          <!-- <ion-icon name=\"bandage\"></ion-icon> -->\r\n          <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/old-purchase.png\" />\r\n          <ion-label style=\"color: #06D25A;\">Purchase</ion-label>\r\n          <!-- <ion-badge *ngIf=\"new_activities\">{{new_activities}}</ion-badge> -->\r\n        </ion-tab-button>\r\n      </ion-tab-bar>\r\n    </ion-tabs>\r\n\r\n  </ion-footer>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/medicines/medicines-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/medicines/medicines-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MedicinesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicinesPageRoutingModule", function() { return MedicinesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _medicines_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medicines.page */ "./src/app/pages/medicines/medicines.page.ts");




const routes = [
    {
        path: '',
        component: _medicines_page__WEBPACK_IMPORTED_MODULE_3__["MedicinesPage"]
    }
];
let MedicinesPageRoutingModule = class MedicinesPageRoutingModule {
};
MedicinesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MedicinesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/medicines/medicines.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/medicines/medicines.module.ts ***!
  \*****************************************************/
/*! exports provided: MedicinesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicinesPageModule", function() { return MedicinesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _medicines_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medicines-routing.module */ "./src/app/pages/medicines/medicines-routing.module.ts");
/* harmony import */ var _medicines_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medicines.page */ "./src/app/pages/medicines/medicines.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");








let MedicinesPageModule = class MedicinesPageModule {
};
MedicinesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _medicines_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicinesPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_medicines_page__WEBPACK_IMPORTED_MODULE_6__["MedicinesPage"]]
    })
], MedicinesPageModule);



/***/ }),

/***/ "./src/app/pages/medicines/medicines.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/medicines/medicines.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  margin-left: 10px;\n}\n\n.filter {\n  margin-right: 10px;\n}\n\n.search {\n  margin-bottom: 20px;\n}\n\n.search ion-item {\n  border-radius: 10px;\n  box-shadow: 0px 13px 30px 0px rgba(0, 0, 0, 0.09);\n  padding: 8px;\n}\n\n.search ion-item ion-icon {\n  margin-right: 16px;\n}\n\n.search ion-item ion-input {\n  padding-left: 10px !important;\n  border-left: 1px solid #F4F4F4;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 32px;\n  color: aliceblue;\n}\n\n.title h2 {\n  margin: 0 0 0 16px;\n  color: #ffffff;\n}\n\n.title p {\n  margin: 0 16px 0 0;\n  color: #ffffff;\n}\n\n.category-slider ion-slide {\n  width: 150px;\n  height: 100px;\n  margin-right: 10px;\n  margin-left: 20px;\n  margin-bottom: 30px;\n}\n\n.category-slider ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category-slider ion-slide ion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\n\n.category-slider ion-slide ion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  box-shadow: 0px 15px 20px 0px rgba(145, 143, 143, 0.16);\n}\n\n.med-price {\n  padding-left: 10px;\n  font-size: large;\n}\n\n.med-img {\n  width: 80%;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 20px;\n  padding: 10px;\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.product-slider {\n  margin-bottom: 30px;\n}\n\n.product-slider ion-slide {\n  width: 150px;\n  height: auto;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n\n.product-slider ion-slide ion-col img {\n  width: 100%;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n}\n\n.product-slider ion-slide ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.product-slider ion-slide ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\nion-slide:focus {\n  outline: none !important;\n}\n\nion-col:focus {\n  outline: none !important;\n}\n\nion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: #0fd15d;\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n\nion-searchbar {\n  border-bottom: 1px solid silver;\n  --box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVkaWNpbmVzL21lZGljaW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUNRO0VBQ0ksa0JBQUE7QUFDWjs7QUFFUTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7QUFBWjs7QUFLQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBRlI7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFIUjs7QUFRSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTFI7O0FBT1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMWjs7QUFPWTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FBTGhCOztBQVFZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHVEQUFBO0FBTmhCOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBUEo7O0FBU0E7RUFDSSxpQkFBQTtBQU5KOztBQVNBO0VBQ0ksbUJBQUE7QUFOSjs7QUFRSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU5SOztBQVNZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQaEI7O0FBVVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFSaEI7O0FBV1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFUaEI7O0FBZ0JBO0VBQ0ksd0JBQUE7QUFiSjs7QUFnQkE7RUFDSSx3QkFBQTtBQWJKOztBQWdCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBYkY7O0FBaUJBO0VBQ0UsZUFBQTtBQWRGOztBQWlCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFkRjs7QUFpQkE7RUFDSSwrQkFBQTtFQUNBLDZCQUFBO0FBZEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZWRpY2luZXMvbWVkaWNpbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRjRGNEY0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAwIDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE2cHggMCAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2F0ZWdvcnktc2xpZGVyIHtcclxuICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCAwcHggcmdiYSgxNDUsIDE0MywgMTQzLCAwLjE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubWVkLXByaWNle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4ubWVkLWltZ3tcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uZm9udC1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvZHVjdC1zbGlkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICBpb24tc2xpZGUge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFJlbW92aW5nIGhpZ2hsaWdodCB3aGVuIGZvY3VzZWQvY2xpY2tlZCBvbiBwcm9kdWN0XHJcbmlvbi1zbGlkZTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1jb2w6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblx0XHJcbmlvbi1mYWItYnV0dG9uIHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgXHJcbn1cclxuIFxyXG4uY2FydC1pY29uIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuIFxyXG4uY2FydC1sZW5ndGgge1xyXG4gIGNvbG9yOiAjMGZkMTVkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE4cHg7XHJcbiAgbGVmdDogMjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIG1pbi13aWR0aDogMjVweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/medicines/medicines.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/medicines/medicines.page.ts ***!
  \***************************************************/
/*! exports provided: MedicinesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicinesPage", function() { return MedicinesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pages_cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/cart-modal/cart-modal.page */ "./src/app/pages/cart-modal/cart-modal.page.ts");






let MedicinesPage = class MedicinesPage {
    constructor(data, cartService, modalCtrl) {
        this.data = data;
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.cart = [];
        this.products = [];
    }
    ngOnInit() {
        this.products = this.cartService.getProducts();
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
                component: _pages_cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__["CartModalPage"],
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
    doRefresh(event) {
        console.log("Begin async operation");
        setTimeout(() => {
            console.log("Async operation has ended");
            event.target.complete();
        }, 2500);
    }
};
MedicinesPage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
MedicinesPage.propDecorators = {
    fab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["cart", { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
MedicinesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-medicines",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./medicines.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medicines/medicines.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./medicines.page.scss */ "./src/app/pages/medicines/medicines.page.scss")).default]
    })
], MedicinesPage);



/***/ })

}]);
//# sourceMappingURL=pages-medicines-medicines-module-es2015.js.map