(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-myads-myads-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myads/myads.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myads/myads.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title color=\"light\">My ADs</ion-title>\r\n    <ion-buttons style=\"\r\n    clip-path: ellipse(100% 54% at 0% 50%); background-color: #36363f;\r\n    background-color: #36363f;width:80px; height: 40px; border-radius: 5%; \" slot=\"start\">\r\n      <ion-buttons routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" style=\"color: #3CF185; width: 30px; height: 200px;\"></ion-icon>\r\n      </ion-buttons>\r\n      <span style=\"color: azure;\">BACK</span>\r\n    </ion-buttons>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <ion-button class=\"notification\">\r\n        <ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-item lines=\"full\" color=\"dark\">\r\n      <ion-searchbar [(ngModel)]=\"searchTerm\" color=\"dark\" mode=\"md\"></ion-searchbar>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-refresher class=\"center\" slot=\"fixed\" pullMin=\"170\" pullMax=\"50\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" refreshingSpinner=\"lines\"\r\n      refreshingText=\"Please Wait...\">\r\n    </ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <ion-card class=\"myadscard\" *ngFor=\"let data of data | filter:searchTerm; let i=index\" >\r\n    <ion-grid>\r\n      <ion-row (click)=\"presentModal(i)\">\r\n        <ion-col class=\"imgCol\" size=\"6\">\r\n          <ion-content>\r\n            <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"viewEntered\" zoom=\"true\">\r\n              <ion-slide *ngFor=\"let img of data.imageUrls['imagesList']\">\r\n                <ion-img style=\"background-image: url('{{img}}');\" class=\"img\"></ion-img>\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </ion-content>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-row color=\"none\">\r\n            <ion-col class=\"flex\" size=\"12\">\r\n              <ion-toolbar  style=\"--background: #36363f; color: beige;\">\r\n                <ion-label slot=\"start\" >\r\n                  <ion-icon color=\"success\" slot=\"start\" name=\"pin-sharp\"></ion-icon>{{data.location}}\r\n                </ion-label>\r\n                <ion-icon size=\"large\" slot=\"end\" color=\"medium\" name=\"create-sharp\"></ion-icon>\r\n              </ion-toolbar>\r\n              <ion-label color=\"success\">Cattle Name: {{data.animalName}}</ion-label>\r\n              <ion-label color=\"warning\">Price: {{data.quotedPrice}}</ion-label>\r\n              <ion-label class=\"subLabels\">Breed: {{data.breed}}</ion-label>\r\n              <ion-label class=\"subLabels\">Lactation: {{data.lactationNumber}}</ion-label>\r\n              <ion-label class=\"subLabels\">Milk/Day: {{data.milkPerDay}}</ion-label>\r\n              <ion-label class=\"subLabels\">Age: {{data.age}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-item lines=\"none\" style=\"--background: #36363f; color: beige;\">\r\n        <ion-button color=\"danger\" slot=\"start\" expand=\"block\" (click)=\"onDelete(i)\">\r\n          <ion-icon slot=\"end\" name=\"trash-bin-sharp\"></ion-icon>DISCARD\r\n        </ion-button>\r\n        <ion-button color=\"success\" slot=\"end\" expand=\"block\" (click)=\"onPost(i)\">\r\n          <ion-icon slot=\"end\" name=\"pencil-sharp\"></ion-icon>POST THIS\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-grid>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n\r\n\r\n\r\n<!-- <ion-content>\r\n  <ion-card class=\"card\"  *ngFor=\"let data of data; let i=index\">\r\n    <ion-grid>\r\n      <ion-row (click)=\"presentModal(i)\">\r\n        <ion-col class=\"imgCol\" size=\"4\"  >\r\n        \r\n            <ion-slides pager=\"true\" [options]=\"slideOpts\"  *ngIf=\"viewEntered\" zoom=\"true\">\r\n              <ion-slide *ngFor=\"let img of data.imgUrl\" >\r\n                <img style=\"background-image: url('{{img}}'); \" class=\"img\"/>\r\n              </ion-slide>\r\n            </ion-slides>\r\n    \r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <ion-row>\r\n            <ion-col class=\"cardTitle\">\r\n              <ion-label color=\"success\">ANIMAL: </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Breed: {{data.breed}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Locaction: {{data.location}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Lactation: {{data.lactationNumber}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Milk/Day: {{data.milkPerDay}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Age: {{data.age}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Calf: {{data.calf}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-item class=\"cardButtons\" lines=\"none\">\r\n        <ion-button color=\"danger\" slot=\"start\" shape=\"round\" (click)=\"onDelete(i)\"><ion-label class=\"subLabels\">DISCARD</ion-label></ion-button>\r\n        <ion-button color=\"success\" slot=\"end\" shape=\"round\" (click)=\"onPost(i)\"><ion-label class=\"subLabels\">POST THIS</ion-label></ion-button>\r\n      </ion-item>\r\n    </ion-grid>\r\n  </ion-card>\r\n</ion-content> -->\r\n\r\n\r\n<!-- \r\n<ion-content [fullscreen]=\"true\">\r\n<div style=\"text-align: center; color: aliceblue;\">\r\n  <h3>Published Ads</h3>\r\n</div>\r\n  <ion-card class=\"card\" *ngFor=\"let data of data; let i=index\">\r\n    <ion-grid>\r\n      <ion-row (click)=\"presentModal(i)\">\r\n        <ion-col class=\"imgCol\" size=\"4\">\r\n          <ion-content>\r\n            <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n              <ion-slide *ngFor=\"let img of data.imgUrl\">\r\n                <ion-img style=\"background-image: url('{{img}}');\" class=\"img\"></ion-img>\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </ion-content>\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <ion-row>\r\n            <ion-col class=\"cardTitle\">\r\n              <ion-label color=\"success\">ANIMAL: {{data.animal}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Breed: {{data.breed}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Locaction: {{data.location}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Status: {{data.status}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Milk/Day: {{data.milkPerDay}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Age: {{data.age}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Calf: {{data.calf}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-item class=\"cardButtons\" lines=\"none\">\r\n        <ion-button color=\"danger\" slot=\"start\"  (click)=\"onDelete(i)\">Delete</ion-button>\r\n        <ion-button color=\"success\" slot=\"end\"   (click)=\"presentModal(i)\">Analytics</ion-button>\r\n      </ion-item>\r\n    </ion-grid>\r\n  </ion-card>\r\n  <ion-item-divider style=\"color: #3CF185; height: 5px;\"></ion-item-divider>\r\n  <div style=\"text-align: center; color: aliceblue;\">\r\n    <h3>Unpublished Ads</h3>\r\n  </div>\r\n  <ion-card class=\"card\" *ngFor=\"let data of data; let i=index\">\r\n    <ion-grid>\r\n      <ion-row (click)=\"presentModal(i)\">\r\n        <ion-col class=\"imgCol\" size=\"4\">\r\n          <ion-content>\r\n            <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n              <ion-slide *ngFor=\"let img of data.imgUrl\">\r\n                <ion-img style=\"background-image: url('{{img}}');\" class=\"img\"></ion-img>\r\n              </ion-slide>\r\n            </ion-slides>\r\n          </ion-content>\r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <ion-row>\r\n            <ion-col class=\"cardTitle\">\r\n              <ion-label color=\"success\">ANIMAL: {{data.animal}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Breed: {{data.breed}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Locaction: {{data.location}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Status: {{data.status}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Milk/Day: {{data.milkPerDay}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Age: {{data.age}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">Calf: {{data.calf}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-item class=\"cardButtons\" lines=\"none\">\r\n        <ion-button color=\"danger\" slot=\"start\"  (click)=\"onDelete(i)\">DISCARD</ion-button>\r\n        <ion-button color=\"success\" slot=\"end\"   (click)=\"presentModal(i)\">POST THIS</ion-button>\r\n      </ion-item>\r\n    </ion-grid>\r\n  </ion-card>\r\n</ion-content> -->");

/***/ }),

/***/ "./src/app/pages/myads/myads-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/myads/myads-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MyadsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyadsPageRoutingModule", function() { return MyadsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _myads_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myads.page */ "./src/app/pages/myads/myads.page.ts");




const routes = [
    {
        path: '',
        component: _myads_page__WEBPACK_IMPORTED_MODULE_3__["MyadsPage"]
    }
];
let MyadsPageRoutingModule = class MyadsPageRoutingModule {
};
MyadsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyadsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/myads/myads.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/myads/myads.module.ts ***!
  \*********************************************/
/*! exports provided: MyadsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyadsPageModule", function() { return MyadsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _myads_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myads-routing.module */ "./src/app/pages/myads/myads-routing.module.ts");
/* harmony import */ var _myads_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myads.page */ "./src/app/pages/myads/myads.page.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");








let MyadsPageModule = class MyadsPageModule {
};
MyadsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _myads_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyadsPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_myads_page__WEBPACK_IMPORTED_MODULE_6__["MyadsPage"]]
    })
], MyadsPageModule);



/***/ }),

/***/ "./src/app/pages/myads/myads.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/myads/myads.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardTitle {\n  text-align: center;\n  color: darkgreen;\n  font-weight: bold;\n}\n\n.myadscard {\n  --background: #36363F;\n  margin: 0;\n  padding: 0;\n  padding-top: 5%;\n}\n\n.cardButtons {\n  --background: #36363F !important;\n  color: white;\n  font-weight: bold;\n}\n\n.imgCol {\n  padding: 0;\n  text-align: center;\n  align-items: center;\n}\n\n.subLabels {\n  color: white;\n  font-weight: bold;\n}\n\nion-img {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.flex {\n  display: flex;\n  flex-direction: column;\n}\n\nion-slides {\n  height: 100%;\n}\n\nion-searchbar {\n  border-bottom: 1px solid silver;\n  --box-shadow: none !important;\n}\n\nion-fab-button {\n  border-radius: 50%;\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXlhZHMvbXlhZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215YWRzL215YWRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkVGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5teWFkc2NhcmR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMzYzNjNGO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5cclxuLmNhcmRCdXR0b25ze1xyXG4gIC0tYmFja2dyb3VuZDogIzM2MzYzRiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmltZ0NvbHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViTGFiZWxze1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWltZ3tcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxufVxyXG5cclxuLmZsZXh7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcclxuICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/myads/myads.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/myads/myads.page.ts ***!
  \*******************************************/
/*! exports provided: MyadsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyadsPage", function() { return MyadsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_myads_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/myads.service */ "./src/app/services/myads.service.ts");
/* harmony import */ var _pages_myads_modal_myads_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/myads-modal/myads-modal.page */ "./src/app/pages/myads-modal/myads-modal.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_seller_form_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/seller-form-api.service */ "./src/app/services/seller-form-api.service.ts");







let MyadsPage = class MyadsPage {
    constructor(service, modalController, router, sellerFormApiService) {
        this.service = service;
        this.modalController = modalController;
        this.router = router;
        this.sellerFormApiService = sellerFormApiService;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
        };
    }
    ngOnInit() {
        this.getAllads();
    }
    ionViewDidEnter() {
        this.viewEntered = true;
    }
    getAllads() {
        this.sellerFormApiService.getData().subscribe((result) => {
            this.data = result;
            console.log('data- ', this.data);
        });
        // console.log('27lines',this.sellerFormApiService.data);
    }
    onDelete(i) {
        this.service.data.splice(i, 1);
    }
    onPost(i) {
        alert("Your ad with id " + i + " is yet to be approved");
    }
    presentModal(i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_myads_modal_myads_modal_page__WEBPACK_IMPORTED_MODULE_4__["MyadsModalPage"],
                componentProps: {
                    imgUrl: this.data[i].imageUrls.imagesList,
                    animal: this.data[i].type,
                    breed: this.data[i].breed,
                    location: this.data[i].lactationNumber,
                    milkPerDay: this.data[i].milkPerDay,
                    age: this.data[i].age,
                },
            });
            return yield modal.present();
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2500);
    }
};
MyadsPage.ctorParameters = () => [
    { type: _services_myads_service__WEBPACK_IMPORTED_MODULE_3__["MyadsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_seller_form_api_service__WEBPACK_IMPORTED_MODULE_6__["SellerFormApiService"] }
];
MyadsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myads',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./myads.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myads/myads.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./myads.page.scss */ "./src/app/pages/myads/myads.page.scss")).default]
    })
], MyadsPage);



/***/ }),

/***/ "./src/app/services/myads.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/myads.service.ts ***!
  \*******************************************/
/*! exports provided: MyadsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyadsService", function() { return MyadsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MyadsService = class MyadsService {
    constructor() {
        // data: Object[] = [{
        //   imgUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpcnklMjBjb3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        //   animal: 'COW',
        //   breed: 'Jersy',
        //   location: "1",
        //   status: 'NA',
        //   milkPerDay: 'NA',
        //   age: 'NA',
        //   calf: 'NA'
        // },
        // {
        //   imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Murrah_buffalo.JPG',
        //   animal: 'Buffalo',
        //   breed: 'Jersy',
        //   location: "2",
        //   status: 'NA',
        //   milkPerDay: 'NA',
        //   age: 'NA',
        //   calf: 'NA'
        // },
        // {
        //   imgUrl:'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg',
        //   animal: 'COW',
        //   breed: 'Jersy',
        //   location: "3",
        //   status: 'NA',
        //   milkPerDay: 'NA',
        //   age: 'NA',
        //   calf: 'NA'
        // }];
        this.data = [
            {
                imgUrl: [
                    'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpcnklMjBjb3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                    'https://images.pexels.com/photos/4909807/pexels-photo-4909807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    'https://frontiersinblog.files.wordpress.com/2021/06/frontiers-bioengineering-biotechnology-cow-rumen-microbes-source-of-novel-enzymes-breaking-down-plastic-waste.jpg?w=1200',
                ],
                animal: 'COW',
                breed: 'Jersy',
                location: '1',
                status: 'NA',
                milkPerDay: 'NA',
                age: 'NA',
                calf: 'NA',
            },
            {
                imgUrl: [
                    'https://upload.wikimedia.org/wikipedia/commons/8/8e/Murrah_buffalo.JPG',
                    'https://res.cloudinary.com/roundglass/image/upload/c_fill,ar_16:9,g_auto/w_1920,q_auto:best,f_auto/v1585055391/roundglass/sustain/Kaziranga_Buffalo-Arindam-Bhattacharya-copy-2-1_t8tykb.jpg',
                    'https://media.istockphoto.com/photos/cape-buffalo-picture-id167451492',
                ],
                animal: 'BUFFALO',
                breed: 'Jersy',
                location: '2',
                status: 'NA',
                milkPerDay: 'NA',
                age: 'NA',
                calf: 'NA',
            },
            {
                imgUrl: [
                    'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg',
                    'https://res.cloudinary.com/roundglass/image/upload/c_fill,ar_16:9,g_auto/w_1920,q_auto:best,f_auto/v1585055391/roundglass/sustain/Kaziranga_Buffalo-Arindam-Bhattacharya-copy-2-1_t8tykb.jpg',
                    'https://media.istockphoto.com/photos/cape-buffalo-picture-id167451492',
                ],
                animal: 'COW',
                breed: 'Jersy',
                location: '3',
                status: 'NA',
                milkPerDay: 'NA',
                age: 'NA',
                calf: 'NA',
            },
        ];
    }
    getAnimalData(data) {
        let dataArray = [...data];
        return dataArray;
    }
};
MyadsService.ctorParameters = () => [];
MyadsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyadsService);



/***/ })

}]);
//# sourceMappingURL=pages-myads-myads-module-es2015.js.map