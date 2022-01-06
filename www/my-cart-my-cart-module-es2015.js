(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-cart-my-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons class=\"btn-shape\" slot=\"start\" routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\r\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{doTranslation('MY CART')}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"content-color\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/cart/cart1.png\" /></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Cows</ion-text>\r\n                <ion-text>Bengaluru</ion-text>\r\n                <ion-text>Rs 40000</ion-text>\r\n                <ion-toolbar color=\"none\">\r\n                  <ion-item slot=\"end\" lines=\"none\" color=\"none\">\r\n                    <ion-icon (click)=\"onDecrease()\" color=\"medium\" name=\"remove-circle\" expand=\"block\"></ion-icon>\r\n                    <ion-label>{{num}}</ion-label>\r\n                    <ion-icon (click)=\"onIncrease()\" color=\"medium\" name=\"add-circle\" expand=\"block\"></ion-icon>\r\n                  </ion-item>\r\n                </ion-toolbar>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/cart/cart2.png\" /></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Ox</ion-text>\r\n                <ion-text>Bengaluru</ion-text>\r\n                <ion-text>Rs 60000</ion-text>\r\n                <ion-toolbar color=\"none\">\r\n                  <ion-item slot=\"end\" lines=\"none\" color=\"none\">\r\n                    <ion-icon (click)=\"onDecrease()\" color=\"medium\" name=\"remove-circle\" expand=\"block\"></ion-icon>\r\n                    <ion-label>{{num}}</ion-label>\r\n                    <ion-icon (click)=\"onIncrease()\" color=\"medium\" name=\"add-circle\" expand=\"block\"></ion-icon>\r\n                  </ion-item>\r\n                </ion-toolbar>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n        <ion-button size=\"small\" expand=\"block\" routerLink=\"/checkout\" color=\"success\" routerDirection=\"forward\">\r\n          {{doTranslation('Continue')}}\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <!-- <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src=\"../../assets/cart/cart3.png\" />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Shirt</p>\r\n          <p>Next</p>\r\n          <p>$54.00</p>\r\n\r\n          <div class=\"qty-selector\">\r\n            <ion-button fill=\"clear\">-</ion-button>\r\n            <ion-label>1</ion-label>\r\n            <ion-button fill=\"clear\">+</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src=\"../../assets/cart/cart4.png\" />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Women shirt</p>\r\n          <p>Plus Point</p>\r\n          <p>$34.00</p>\r\n\r\n          <div class=\"qty-selector\">\r\n            <ion-button fill=\"clear\">-</ion-button>\r\n            <ion-label>1</ion-label>\r\n            <ion-button fill=\"clear\">+</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src=\"../../assets/cart/cart5.png\" />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Shirt</p>\r\n          <p>Cat's Eye</p>\r\n          <p>$44.00</p>\r\n\r\n          <div class=\"qty-selector\">\r\n            <ion-button fill=\"clear\">-</ion-button>\r\n            <ion-label>1</ion-label>\r\n            <ion-button fill=\"clear\">+</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card> -->\r\n  <!-- </div> -->\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-thumbnail {\n  height: 100%;\n  width: 100%;\n}\nion-thumbnail img {\n  height: 150px;\n  width: 100%;\n}\n.center {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.left-align {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\nion-text {\n  color: white;\n}\n.web-view {\n  width: 100%;\n}\n@media (min-width: 700px) {\n  .web-view {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2FydC9teS1jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRUE7RUFLSSxZQUFBO0VBQ0EsV0FBQTtBQTdFSjtBQXdFSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBdEVSO0FBNEVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXpFSjtBQTRFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUF6RUo7QUE0RUE7RUFDSSxZQUFBO0FBekVKO0FBNEVBO0VBQ0ksV0FBQTtBQXpFSjtBQTRFQTtFQUNJO0lBQ0ksVUFBQTtFQXpFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbXktY2FydC9teS1jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyAuY2FydC1pdGVtcyB7XHJcbi8vICAgICBpb24tY2FyZCB7XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbi8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4vLyAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4vLyAgICAgICAgICAgICAuaXRlbS1pbWcge1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgaW1nIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICAuaXRlbS1pbmZvIHtcclxuLy8gICAgICAgICAgICAgICAgIHAge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgxKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0MzQzNDM7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgyKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5MTkxOTE7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBwOm50aC1jaGlsZCgzKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgICAgICAgICAucXR5LXNlbGVjdG9yIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuLy8gICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC0tY29sb3I6ICM1NjU2NTY7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU2NTY1NiAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBpb24tZm9vdGVyIHtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG4vLyAgICAgLm1haW4tYnV0dG9uOjphZnRlciB7XHJcbi8vICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuaW9uLXRodW1ibmFpbHtcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubGVmdC1hbGlnbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbmlvbi10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ud2ViLXZpZXd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KXtcclxuICAgIC53ZWItdmlld3tcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59Il19 */");

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
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/translate.service */ "./src/app/services/translate.service.ts");



let MyCartPage = class MyCartPage {
    constructor(translateService) {
        this.translateService = translateService;
    }
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
    doTranslation(text) {
        var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
        return translateText;
    }
};
MyCartPage.ctorParameters = () => [
    { type: _services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
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