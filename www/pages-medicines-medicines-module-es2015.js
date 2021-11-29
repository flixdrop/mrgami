(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-medicines-medicines-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medicines/medicines.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medicines/medicines.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Medicines</ion-title>\n    <ion-buttons style=\"\n    clip-path: ellipse(100% 54% at 0% 50%); background-color: #36363f;\n    background-color: #36363f;width:80px; height: 40px; border-radius: 5%; \" slot=\"start\">\n      <ion-buttons \n   routerLink=\"/home\" routerDirection=\"back\">\n       <ion-icon name=\"chevron-back-outline\" style=\"color: #3CF185; width: 30px; height: 200px;\"></ion-icon>\n      </ion-buttons>\n      <span style=\"color: azure;\">BACK</span>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"notification\">\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab    vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button  style=\"--background: #0fd15dc5 ;\" (click)=\"openCart()\" #cart>\n      <div class=\"cart-length\">{{ cartItemCount | async }}</div>\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-list>\n    <ion-card style=\"--background:#36363f;\" *ngFor=\"let p of products\">\n      <ion-card-header>\n        <ion-card-title  style=\"color: aliceblue;\">{{ p.name }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"6\">\n            <img class= \"med-img\" src=\"{{ p.image }}\" />\n            <ion-label class=\"med-price\" color=\"secondary\">\n              <b style=\"color: #3CF185 ;\">{{ p.price | currency:'INR' }}</b>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-right\">\n            <ion-label padding  style=\"color: #ffffff ;\" >REFIT ANIMAL CARE – 10 Kg Chelated Mineral Mixture for\n              Buffalo,Cow,Cattle,Poultry,\n              Goat & Pig (RIGMIN Forte Powder)\n              </ion-label>\n            <ion-button style=\"background-color:#FF5555; color: azure; border-radius: 8px;\" fill=\"clear\" (click)=\"addToCart(p)\">\n              Add to cart\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n\n<ion-footer>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n      <ion-tab-button tab=\"landing\"> \n        <!-- <ion-icon name=\"cart\" ></ion-icon> -->\n        <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/home.png\"/>\n        <ion-label style=\"color: #EC5B5B;\">Home</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"landing\"  style=\"margin-left: -50px;\">\n        <!-- <ion-icon name=\"cafe\"></ion-icon> -->\n        <img style=\"height: 30px; width: 30px; \" src=\"../../assets/icon/ad.png\"/>\n        <ion-label style=\"color: #06D25A;\">My Ads</ion-label>\n        <!-- <ion-badge *ngIf=\"new_message\">{{new_message}}</ion-badge> -->\n      </ion-tab-button>\n  \n      <!-- <svg height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"#1f1f1f\" fill-rule=\"evenodd\"></path></svg> -->\n  \n      <ion-tab-button tab=\"medicines\" style=\" margin-right: -60px;\" >\n        <!-- <ion-icon name=\"bandage\"></ion-icon> -->\n        <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/old-purchase.png\"/>\n        <ion-label style=\"color: #06D25A;\">Purchase</ion-label>\n        <!-- <ion-badge *ngIf=\"new_activities\">{{new_activities}}</ion-badge> -->\n      </ion-tab-button>\n      </ion-tab-bar>\n  </ion-tabs>\n\n</ion-footer></ion-content>");

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







let MedicinesPageModule = class MedicinesPageModule {
};
MedicinesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _medicines_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicinesPageRoutingModule"]
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  margin-left: 10px;\n}\n\n.filter {\n  margin-right: 10px;\n}\n\n.search {\n  margin-bottom: 20px;\n}\n\n.search ion-item {\n  border-radius: 10px;\n  box-shadow: 0px 13px 30px 0px rgba(0, 0, 0, 0.09);\n  padding: 8px;\n}\n\n.search ion-item ion-icon {\n  margin-right: 16px;\n}\n\n.search ion-item ion-input {\n  padding-left: 10px !important;\n  border-left: 1px solid #F4F4F4;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 32px;\n  color: aliceblue;\n}\n\n.title h2 {\n  margin: 0 0 0 16px;\n  color: #ffffff;\n}\n\n.title p {\n  margin: 0 16px 0 0;\n  color: #ffffff;\n}\n\n.category-slider ion-slide {\n  width: 150px;\n  height: 100px;\n  margin-right: 10px;\n  margin-left: 20px;\n  margin-bottom: 30px;\n}\n\n.category-slider ion-slide ion-col {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.category-slider ion-slide ion-col h4 {\n  color: #ffffff;\n  margin: 0;\n}\n\n.category-slider ion-slide ion-col img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  box-shadow: 0px 15px 20px 0px rgba(145, 143, 143, 0.16);\n}\n\n.med-price {\n  padding-left: 10px;\n  font-size: large;\n}\n\n.med-img {\n  width: 80%;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 20px;\n  padding: 10px;\n}\n\n.font-bold {\n  font-weight: bold;\n}\n\n.product-slider {\n  margin-bottom: 30px;\n}\n\n.product-slider ion-slide {\n  width: 150px;\n  height: auto;\n  margin-left: 20px;\n  margin-right: 10px;\n}\n\n.product-slider ion-slide ion-col img {\n  width: 100%;\n  height: 180px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 8px;\n}\n\n.product-slider ion-slide ion-col p {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\n.product-slider ion-slide ion-col h6 {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n\nion-slide:focus {\n  outline: none !important;\n}\n\nion-col:focus {\n  outline: none !important;\n}\n\nion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: #0fd15d;\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVkaWNpbmVzL21lZGljaW5lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUNRO0VBQ0ksa0JBQUE7QUFDWjs7QUFFUTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7QUFBWjs7QUFLQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBRlI7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFIUjs7QUFRSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBTFI7O0FBT1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMWjs7QUFPWTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FBTGhCOztBQVFZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHVEQUFBO0FBTmhCOztBQVdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBUEo7O0FBU0E7RUFDSSxpQkFBQTtBQU5KOztBQVNBO0VBQ0ksbUJBQUE7QUFOSjs7QUFRSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU5SOztBQVNZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQaEI7O0FBVVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFSaEI7O0FBV1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFUaEI7O0FBZ0JBO0VBQ0ksd0JBQUE7QUFiSjs7QUFnQkE7RUFDSSx3QkFBQTtBQWJKOztBQWdCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBYkY7O0FBaUJBO0VBQ0UsZUFBQTtBQWRGOztBQWlCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFkRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lZGljaW5lcy9tZWRpY2luZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmZpbHRlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc2VhcmNoIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRjRGNEY0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAxNnB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHggMCAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG59XG5cbi5jYXRlZ29yeS1zbGlkZXIge1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCAwcHggcmdiYSgxNDUsIDE0MywgMTQzLCAwLjE2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5tZWQtcHJpY2V7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4ubWVkLWltZ3tcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmZvbnQtYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9kdWN0LXNsaWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgIGlvbi1zbGlkZSB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gUmVtb3ZpbmcgaGlnaGxpZ2h0IHdoZW4gZm9jdXNlZC9jbGlja2VkIG9uIHByb2R1Y3Rcbmlvbi1zbGlkZTpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29sOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cdFxuaW9uLWZhYi1idXR0b24ge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBcbn1cbiBcbi5jYXJ0LWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG4gXG4uY2FydC1sZW5ndGgge1xuICBjb2xvcjogIzBmZDE1ZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtaW4td2lkdGg6IDI1cHg7XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */");

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
        this.animateCSS('tada');
    }
    openCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.animateCSS('bounceOutLeft', true);
            let modal = yield this.modalCtrl.create({
                component: _pages_cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__["CartModalPage"],
                cssClass: 'cart-modal'
            });
            modal.onWillDismiss().then(() => {
                this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
                this.animateCSS('bounceInLeft');
            });
            modal.present();
        });
    }
    animateCSS(animationName, keepAnimated = false) {
        const node = this.fab.nativeElement;
        node.classList.add('animated', animationName);
        //https://github.com/daneden/animate.css
        function handleAnimationEnd() {
            if (!keepAnimated) {
                node.classList.remove('animated', animationName);
            }
            node.removeEventListener('animationend', handleAnimationEnd);
        }
        node.addEventListener('animationend', handleAnimationEnd);
    }
};
MedicinesPage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
MedicinesPage.propDecorators = {
    fab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['cart', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
MedicinesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-medicines',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./medicines.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medicines/medicines.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./medicines.page.scss */ "./src/app/pages/medicines/medicines.page.scss")).default]
    })
], MedicinesPage);



/***/ })

}]);
//# sourceMappingURL=pages-medicines-medicines-module-es2015.js.map