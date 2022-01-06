(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-orders-my-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons class=\"btn-shape\" slot=\"start\" routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\r\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{doTranslation('MY ORDERS')}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"content-color\">\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/cart/cart1.png\" /></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Ox</ion-text>\r\n                <ion-text>Bengaluru</ion-text>\r\n                <ion-text>Rs 60000</ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-button size=\"small\" expand=\"block\" color=\"success\">{{doTranslation('Order Again')}}</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/cart/cart2.png\" /></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Ox</ion-text>\r\n                <ion-text>Bengaluru</ion-text>\r\n                <ion-text>Rs 60000</ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-button size=\"small\" expand=\"block\" color=\"success\">{{doTranslation('Order Again')}}</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"center\" size=\"12\" offset=\"sm-0 md-0 lg-2 xl-3\">\r\n\r\n        <ion-card class=\"web-view card-color\">\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"6\">\r\n                <ion-thumbnail><img src=\"../../assets/cart/cart3.png\" /></ion-thumbnail>\r\n              </ion-col>\r\n              <ion-col class=\"left-align\" size=\"6\">\r\n                <ion-text>Ox</ion-text>\r\n                <ion-text>Bengaluru</ion-text>\r\n                <ion-text>Rs 60000</ion-text>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\">\r\n                <ion-button size=\"small\" expand=\"block\" color=\"success\">{{doTranslation('Order Again')}}</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <!-- <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src='../../assets/cart/cart4.png' />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Women shirt</p>\r\n          <p>Plus Point</p>\r\n          <p>$54.00</p>\r\n\r\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card> -->\r\n  <!-- <ion-card mode=\"ios\">\r\n      <ion-card-content>\r\n        <div class=\"item-img\">\r\n          <img src='../../assets/cart/cart5.png' />\r\n        </div>\r\n\r\n        <div class=\"item-info\">\r\n          <p>Shirt</p>\r\n          <p>Cat's Eye</p>\r\n          <p>$50.00</p>\r\n\r\n          <ion-button expand=\"block\" class=\"main-button\">Order Again</ion-button>\r\n        </div>\r\n      </ion-card-content>\r\n    </ion-card> -->\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-thumbnail {\n  height: 100%;\n  width: 100%;\n}\nion-thumbnail img {\n  height: 150px;\n  width: 100%;\n}\nion-text {\n  color: white;\n}\n.left-align {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.web-view {\n  width: 100%;\n}\n@media (min-width: 700px) {\n  .web-view {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFLSSxZQUFBO0VBQ0EsV0FBQTtBQUpKO0FBREk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUdSO0FBR0E7RUFDSSxZQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUdBO0VBQ0ksV0FBQTtBQUFKO0FBR0E7RUFDSTtJQUNJLFVBQUE7RUFBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbXktb3JkZXJzL215LW9yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRodW1ibmFpbHtcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGVmdC1hbGlnbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi53ZWItdmlld3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpe1xyXG4gICAgLndlYi12aWV3e1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn0iXX0= */");

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
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/translate.service */ "./src/app/services/translate.service.ts");



let MyOrdersPage = class MyOrdersPage {
    constructor(translateService) {
        this.translateService = translateService;
    }
    ngOnInit() {
    }
    doTranslation(text) {
        var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
        return translateText;
    }
};
MyOrdersPage.ctorParameters = () => [
    { type: _services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
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