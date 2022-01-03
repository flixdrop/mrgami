(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center\" *ngIf=\"!setPayment\">\r\n  <h2 class=\"mt-5 mb-4\">Flixdrop Cattle App</h2>\r\n  <form (ngSubmit) = \"onPayClick()\">\r\n    <div class=\"form-group\" >\r\n      <label for=\"exampleFormControlInput1\">Paying to Flixdrop</label>\r\n      <input type=\"text\" class=\"form-control\"\r\n      style=\"height:50px\" placeholder=\"Enter Amount\" [(ngModel)]=\"amount\"  name=\"pay\" required>\r\n      <button class=\"btn btn-danger btn-block\" type=\"submit\" >Pay</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<ion-content class=\"ion-padding content-color\" *ngIf=\"setPayment\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"card px-4\">\r\n        <div class=\" my-3\">\r\n            <p class=\"h8\">Card number</p>\r\n            <p class=\"text-muted \">Your Saved Cards</p>\r\n        </div>\r\n        <div class=\"debit-card mb-3\">\r\n            <div class=\"d-flex flex-column h-100\"> <label class=\"d-block\">\r\n                    <div class=\"d-flex position-relative\">\r\n                        <div> <img src=\"https://www.freepnglogos.com/uploads/visa-inc-logo-png-11.png\" class=\"visa\" alt=\"\">\r\n                            <p class=\"mt-2 mb-4 text-white fw-bold\">Flixdrop User</p>\r\n                        </div>\r\n                        <div class=\"input\"> <input type=\"radio\" name=\"card\" id=\"check\"> </div>\r\n                    </div>\r\n                </label>\r\n                <div class=\"mt-auto fw-bold d-flex align-items-center justify-content-between\">\r\n                    <p>4989 1237 1234 4532</p>\r\n                    <p>01/24</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"debit-card card-2 mb-4\">\r\n            <div class=\"d-flex flex-column h-100\"> <label class=\"d-block\">\r\n                    <div class=\"d-flex position-relative\">\r\n                        <div> <img src=\"https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png\" alt=\"master\" class=\"master\">\r\n                            <p class=\"text-white fw-bold\">Flixdrop User</p>\r\n                        </div>\r\n                        <div class=\"input\"> <input type=\"radio\" name=\"card\" id=\"check\"> </div>\r\n                    </div>\r\n                </label>\r\n                <div class=\"mt-auto fw-bold d-flex align-items-center justify-content-between\">\r\n                    <p class=\"m-0\">5540 2345 3453 2343</p>\r\n                    <p class=\"m-0\">05/23</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"btn mb-4\" (click)=\"makePayment()\"> Pay Now ₹ {{amount}} </div>\r\n    </div>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/checkout/checkout-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/checkout/checkout-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function() { return CheckoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-routing.module */ "./src/app/checkout/checkout-routing.module.ts");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.cart-items ion-card {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n}\n\n.cart-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.cart-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.cart-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: var(--ion-color-primary);\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-button {\n  --color: #565656;\n  font-size: 16px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-label {\n  color: #565656 !important;\n  font-size: 16px;\n}\n\n.address ion-item {\n  --padding-start: 0;\n  font-size: 18px;\n  color: #434343;\n}\n\n.address ion-item ion-badge {\n  width: 12px;\n  height: 12px;\n  padding: 0;\n  border-radius: 50%;\n}\n\nhr {\n  background: #97979713;\n}\n\n.cart-total ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\n.cart-total ion-item ion-label {\n  margin-right: 0;\n}\n\n.cart-total ion-item ion-label:nth-child(1) {\n  color: #919191;\n}\n\n.cart-total ion-item ion-label:nth-child(2) {\n  color: #434343;\n}\n\nion-footer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-footer .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFHSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBUjs7QUFFUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUFaOztBQUVZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBaEI7O0FBRWdCO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7QUFBcEI7O0FBS2dCO0VBQ0ksZUFBQTtBQUhwQjs7QUFNZ0I7RUFDSSxjQUFBO0FBSnBCOztBQU1nQjtFQUNJLGNBQUE7QUFKcEI7O0FBTWdCO0VBQ0ksK0JBQUE7QUFKcEI7O0FBT2dCO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMcEI7O0FBT29CO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUx4Qjs7QUFRb0I7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFOeEI7O0FBZUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWlI7O0FBY1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVpaOztBQWlCQTtFQUNJLHFCQUFBO0FBZEo7O0FBa0JJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQWZSOztBQWlCUTtFQUNJLGVBQUE7QUFmWjs7QUFrQlE7RUFDSSxjQUFBO0FBaEJaOztBQW1CUTtFQUNJLGNBQUE7QUFqQlo7O0FBc0JBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQW5CSjs7QUFxQkk7RUFDSSwyQkFBQTtBQW5CUiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyNnB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiAjNDM0MzQzO1xyXG59XHJcblxyXG4uY2FydC1pdGVtcyB7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAuaXRlbS1pbWcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaXRlbS1pbmZvIHtcclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQzNDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5MTkxOTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucXR5LXNlbGVjdG9yIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6ICM1NjU2NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU2NTY1NiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWRkcmVzcyB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogIzQzNDM0MztcclxuXHJcbiAgICAgICAgaW9uLWJhZGdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaHIge1xyXG4gICAgYmFja2dyb3VuZDogIzk3OTc5NzEzO1xyXG59XHJcblxyXG4uY2FydC10b3RhbCB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzkxOTE5MTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQzNDM0MztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuXHJcbiAgICAubWFpbi1idXR0b246OmFmdGVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CheckoutPage = class CheckoutPage {
    constructor() {
        this.paymentHandler = null;
        this.setPayment = false;
    }
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit() {
        this.invokeStripe();
    }
    onPayClick() {
        this.setPayment = true;
        console.log(this.setPayment);
    }
    makePayment() {
        const am = this.amount;
        console.log('am', am);
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const paymentHandler = window.StripeCheckout.configure({
            key: 'pk_test_51JqTubSAZUn6C88GS5ILZDMBqPPT6muJJTGbEpEzlU75uqDp67cgfdQQ9Tmho6oiGa0Sw3Fbwe1RnbaPpaDHVz3900da13KE72',
            locale: 'auto',
            currency: 'inr',
            email: 'prathamesh@flixdrop.com',
            card: '5698478569851452',
            // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
            token(stripeToken) {
                console.log(stripeToken);
                alert('Stripe token generated!');
            }
        });
        paymentHandler.open({
            name: 'Flixdrop-Medicine-Accessories',
            description: 'Medicine',
            amount: am * 100
        });
    }
    invokeStripe() {
        if (!window.document.getElementById('stripe-script')) {
            const script = window.document.createElement('script');
            script.id = 'stripe-script';
            script.type = 'text/javascript';
            script.src = 'https://checkout.stripe.com/checkout.js';
            script.onload = () => {
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                this.paymentHandler = window.StripeCheckout.configure({
                    key: 'pk_test_51JqTubSAZUn6C88GS5ILZDMBqPPT6muJJTGbEpEzlU75uqDp67cgfdQQ9Tmho6oiGa0Sw3Fbwe1RnbaPpaDHVz3900da13KE72',
                    locale: 'auto',
                    currency: 'inr',
                    email: 'prathamesh@flixdrop.com',
                    card: '5698478569851452',
                    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                    token(stripeToken) {
                        console.log(stripeToken);
                        alert('Payment has been successfull!');
                    }
                });
            };
            window.document.body.appendChild(script);
        }
    }
};
CheckoutPage.ctorParameters = () => [];
CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")).default]
    })
], CheckoutPage);



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module-es2015.js.map