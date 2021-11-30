(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-orders-my-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button color=\"primary\" class=\"backbtn\" routerLink=\"/home\" routerDirection=\"back\">\r\n        <img src='../../assets/back-dark.svg' />\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"notification\">\r\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1 class=\"title\">My Orders</h1>\r\n\r\n  <div class=\"order-items\">\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src='../../assets/cart/cart1.png' />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Cow</p>\r\n          <p>Bengaluru</p>\r\n          <p>Rs 50000</p>\r\n\r\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src='../../assets/cart/cart2.png' />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Ox</p>\r\n          <p>Bengaluru</p>\r\n          <p>Rs 50000</p>\r\n\r\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src='../../assets/cart/cart3.png' />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Goat</p>\r\n          <p>Bengaluru</p>\r\n          <p>Rs 20000</p>\r\n\r\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <!-- <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src='../../assets/cart/cart4.png' />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Women shirt</p>\r\n          <p>Plus Point</p>\r\n          <p>$54.00</p>\r\n\r\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card> -->\r\n    <!-- <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src='../../assets/cart/cart5.png' />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Shirt</p>\r\n          <p>Cat's Eye</p>\r\n          <p>$50.00</p>\r\n\r\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card> -->\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/my-orders/my-orders-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/my-orders/my-orders-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MyOrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPageRoutingModule", function() { return MyOrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-orders.page */ "./src/app/my-orders/my-orders.page.ts");




const routes = [
    {
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_3__["MyOrdersPage"]
    }
];
let MyOrdersPageRoutingModule = class MyOrdersPageRoutingModule {
};
MyOrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyOrdersPageRoutingModule);



/***/ }),

/***/ "./src/app/my-orders/my-orders.module.ts":
/*!***********************************************!*\
  !*** ./src/app/my-orders/my-orders.module.ts ***!
  \***********************************************/
/*! exports provided: MyOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPageModule", function() { return MyOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-orders-routing.module */ "./src/app/my-orders/my-orders-routing.module.ts");
/* harmony import */ var _my_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-orders.page */ "./src/app/my-orders/my-orders.page.ts");







let MyOrdersPageModule = class MyOrdersPageModule {
};
MyOrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyOrdersPageRoutingModule"]
        ],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_6__["MyOrdersPage"]]
    })
], MyOrdersPageModule);



/***/ }),

/***/ "./src/app/my-orders/my-orders.page.scss":
/*!***********************************************!*\
  !*** ./src/app/my-orders/my-orders.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backbtn {\n  margin-left: 15px;\n}\n\n.notification {\n  margin-right: 15px;\n}\n\nion-content {\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\n.title {\n  margin-top: 0;\n  color: #434343;\n}\n\n.order-items ion-card {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n}\n\n.order-items ion-card ion-card-content {\n  display: flex;\n  position: relative;\n}\n\n.order-items ion-card ion-card-content .item-img {\n  display: flex;\n  align-items: center;\n  margin-right: 16px;\n}\n\n.order-items ion-card ion-card-content .item-img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 110px;\n  height: 110px;\n  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);\n}\n\n.order-items ion-card ion-card-content .item-info p {\n  font-size: 16px;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(1) {\n  color: #434343;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(2) {\n  color: #919191;\n}\n\n.order-items ion-card ion-card-content .item-info p:nth-child(3) {\n  color: var(--ion-color-primary);\n}\n\n.order-items ion-card ion-card-content .item-info .main-button {\n  --border-radius: 5px;\n  margin: 10px 0 0 0;\n}\n\n.order-items ion-card ion-card-content .item-info .main-button::after {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFSOztBQUVRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQVo7O0FBRVk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFoQjs7QUFFZ0I7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpREFBQTtBQUFwQjs7QUFLZ0I7RUFDSSxlQUFBO0FBSHBCOztBQU1nQjtFQUNJLGNBQUE7QUFKcEI7O0FBTWdCO0VBQ0ksY0FBQTtBQUpwQjs7QUFNZ0I7RUFDSSwrQkFBQTtBQUpwQjs7QUFPZ0I7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0FBTHBCOztBQVFnQjtFQUNJLDJCQUFBO0FBTnBCIiwiZmlsZSI6InNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2J0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNnB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjZweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogIzQzNDM0MztcclxufVxyXG5cclxuLm9yZGVyLWl0ZW1zIHtcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIC5pdGVtLWltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pdGVtLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQzNDM0MztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzkxOTE5MTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHA6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluLWJ1dHRvbjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/my-orders/my-orders.page.ts":
/*!*********************************************!*\
  !*** ./src/app/my-orders/my-orders.page.ts ***!
  \*********************************************/
/*! exports provided: MyOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPage", function() { return MyOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MyOrdersPage = class MyOrdersPage {
    constructor() { }
    ngOnInit() {
    }
};
MyOrdersPage.ctorParameters = () => [];
MyOrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-orders',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-orders.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-orders.page.scss */ "./src/app/my-orders/my-orders.page.scss")).default]
    })
], MyOrdersPage);



/***/ })

}]);
//# sourceMappingURL=my-orders-my-orders-module-es2015.js.map