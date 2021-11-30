(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-cart-my-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons  class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\r\n        <img src=\"../../assets/back-dark.svg\" />\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"notification\">\r\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <h1 class=\"title\">Cart</h1>\r\n\r\n  <div class=\"cart-items\">\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src=\"../../assets/cart/cart1.png\" />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Cows</p>\r\n          <p>Bengaluru</p>\r\n          <p>Rs 40000</p>\r\n\r\n          <div class=\"qty-selector\">\r\n            <ion-button (click)=\"onDecrease()\" fill=\"clear\">-</ion-button>\r\n            <ion-label>{{num}}</ion-label>\r\n            <ion-button (click)=\"onIncrease()\" fill=\"clear\">+</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src=\"../../assets/cart/cart2.png\" />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Ox</p>\r\n          <p>Bengaluru</p>\r\n          <p>Rs 60000</p>\r\n\r\n          <div class=\"qty-selector\">\r\n            <ion-button (click)=\"onDecrease()\" fill=\"clear\">-</ion-button>\r\n            <ion-label>{{num}}</ion-label>\r\n            <ion-button (click)=\"onIncrease()\" fill=\"clear\">+</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <!-- <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src=\"../../assets/cart/cart3.png\" />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Shirt</p>\r\n          <p>Next</p>\r\n          <p>$54.00</p>\r\n\r\n          <div class=\"qty-selector\">\r\n            <ion-button fill=\"clear\">-</ion-button>\r\n            <ion-label>1</ion-label>\r\n            <ion-button fill=\"clear\">+</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src=\"../../assets/cart/cart4.png\" />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Women shirt</p>\r\n          <p>Plus Point</p>\r\n          <p>$34.00</p>\r\n\r\n          <div class=\"qty-selector\">\r\n            <ion-button fill=\"clear\">-</ion-button>\r\n            <ion-label>1</ion-label>\r\n            <ion-button fill=\"clear\">+</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src=\"../../assets/cart/cart5.png\" />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Shirt</p>\r\n          <p>Cat's Eye</p>\r\n          <p>$44.00</p>\r\n\r\n          <div class=\"qty-selector\">\r\n            <ion-button fill=\"clear\">-</ion-button>\r\n            <ion-label>1</ion-label>\r\n            <ion-button fill=\"clear\">+</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card> -->\r\n  </div>\r\n</ion-content>\r\n<ion-footer translucent=\"true\" class=\"ion-no-border\" mode=\"md\">\r\n  <ion-toolbar color=\"translucent\">\r\n    <ion-button expand=\"block\" class=\"main-button\" routerLink=\"/checkout\" routerDirection=\"forward\">Continue</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/my-cart/my-cart-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/my-cart/my-cart-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MyCartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCartPageRoutingModule", function() { return MyCartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-cart.page */ "./src/app/my-cart/my-cart.page.ts");




const routes = [
    {
        path: '',
        component: _my_cart_page__WEBPACK_IMPORTED_MODULE_3__["MyCartPage"]
    }
];
let MyCartPageRoutingModule = class MyCartPageRoutingModule {
};
MyCartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyCartPageRoutingModule);



/***/ }),

/***/ "./src/app/my-cart/my-cart.module.ts":
/*!*******************************************!*\
  !*** ./src/app/my-cart/my-cart.module.ts ***!
  \*******************************************/
/*! exports provided: MyCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCartPageModule", function() { return MyCartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-cart-routing.module */ "./src/app/my-cart/my-cart-routing.module.ts");
/* harmony import */ var _my_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-cart.page */ "./src/app/my-cart/my-cart.page.ts");







let MyCartPageModule = class MyCartPageModule {
};
MyCartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyCartPageRoutingModule"]
        ],
        declarations: [_my_cart_page__WEBPACK_IMPORTED_MODULE_6__["MyCartPage"]]
    })
], MyCartPageModule);



/***/ }),

/***/ "./src/app/my-cart/my-cart.page.scss":
/*!*******************************************!*\
  !*** ./src/app/my-cart/my-cart.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.cart-items ion-card {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n}\n\n.cart-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.cart-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.cart-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.cart-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: var(--ion-color-primary);\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f6f6f6;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-button {\n  --color: #565656;\n  font-size: 16px;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.cart-items ion-card ion-card-content .item-info .qty-selector ion-label {\n  color: #565656 !important;\n  font-size: 16px;\n}\n\nion-footer {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-footer .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2FydC9teS1jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBRVE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFBWjs7QUFFWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQWhCOztBQUVnQjtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0FBQXBCOztBQUtnQjtFQUNJLGVBQUE7QUFIcEI7O0FBTWdCO0VBQ0ksY0FBQTtBQUpwQjs7QUFNZ0I7RUFDSSxjQUFBO0FBSnBCOztBQU1nQjtFQUNJLCtCQUFBO0FBSnBCOztBQU9nQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTHBCOztBQU9vQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFMeEI7O0FBUW9CO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBTnhCOztBQWNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVhKOztBQWFJO0VBQ0ksMkJBQUE7QUFYUiIsImZpbGUiOiJzcmMvYXBwL215LWNhcnQvbXktY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjZweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogIzQzNDM0MztcclxufVxyXG5cclxuLmNhcnQtaXRlbXMge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG5cclxuICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLml0ZW0taW1nIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW0taW5mbyB7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTE5MTkxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcDpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnF0eS1zZWxlY3RvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWNvbG9yOiAjNTY1NjU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NjU2NTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgIC5tYWluLWJ1dHRvbjo6YWZ0ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/my-cart/my-cart.page.ts":
/*!*****************************************!*\
  !*** ./src/app/my-cart/my-cart.page.ts ***!
  \*****************************************/
/*! exports provided: MyCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCartPage", function() { return MyCartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MyCartPage = class MyCartPage {
    constructor() { }
    ngOnInit() {
    }
    onDecrease() {
        this.num = 0;
        if (this.num < 0) {
            alert("Item quantity cannot be 0");
        }
        else {
            this.num -= 1;
        }
    }
    onIncrease() {
        this.num = 0;
        if (this.num < 0) {
            alert("Item quantity cannot be 0");
        }
        else {
            this.num += 1;
        }
    }
};
MyCartPage.ctorParameters = () => [];
MyCartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-cart.page.scss */ "./src/app/my-cart/my-cart.page.scss")).default]
    })
], MyCartPage);



/***/ })

}]);
//# sourceMappingURL=my-cart-my-cart-module-es2015.js.map