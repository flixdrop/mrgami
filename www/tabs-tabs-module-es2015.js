(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"buy\">\r\n      <ion-icon name=\"cart-outline\"></ion-icon>\r\n      <ion-label>Buy</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"sell\">\r\n      <ion-icon name=\"pricetag-outline\"></ion-icon>\r\n      <ion-label>Sell</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"nutrition\">\r\n      <ion-icon name=\"bandage-outline\"></ion-icon>\r\n      <ion-label>Medicine</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"feed\">\r\n      <ion-icon name=\"cafe-outline\"></ion-icon>\r\n      <ion-label>Feed</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"insemination\">\r\n      <ion-icon name=\"git-branch-outline\"></ion-icon>\r\n      <ion-label>Insemination</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs> -->\r\n<ion-tabs class=\"tabsbg\">\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" translucent=\"true\">\r\n    <ion-fab-button class=\"background\" (click)=popSellerForm()>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n\r\n  </ion-fab>\r\n\r\n  <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\r\n    <ion-tab-button tab=\"landing\"> \r\n      <!-- <ion-icon name=\"cart\" ></ion-icon> -->\r\n      <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/home.png\"/>\r\n      <ion-label style=\"color: #EC5B5B;\">Home</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"myads\"  style=\"margin-left: -50px;\">\r\n      <!-- <ion-icon name=\"cafe\"></ion-icon> -->\r\n      <img style=\"height: 30px; width: 30px; \" src=\"../../assets/icon/ad.png\"/>\r\n      <ion-label style=\"color: #06D25A;\">My Ads</ion-label>\r\n      <!-- <ion-badge *ngIf=\"new_message\">{{new_message}}</ion-badge> -->\r\n    </ion-tab-button>\r\n\r\n    <!-- <svg height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"#1f1f1f\" fill-rule=\"evenodd\"></path></svg> -->\r\n\r\n    <ion-tab-button tab=\"medicines\" style=\" margin-right: -60px;\" >\r\n      <!-- <ion-icon name=\"bandage\"></ion-icon> -->\r\n      <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/old-purchase.png\"/>\r\n      <ion-label style=\"color: #06D25A;\">Purchase</ion-label>\r\n      <!-- <ion-badge *ngIf=\"new_activities\">{{new_activities}}</ion-badge> -->\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"insemination\" >\r\n\r\n      <ion-icon style=\"height: 40px; width: 40px; \" color=\"success\" name=\"person-circle-outline\"></ion-icon>\r\n     \r\n\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




// import { IntroGuard } from '../guards/intro.guard';
// import { AutoLoginGuard } from '../guards/auto-login.guard';
const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomePageModule)
            },
            { path: 'welcome',
                loadChildren: () => __webpack_require__.e(/*! import() | welcome-welcome-module */ "welcome-welcome-module").then(__webpack_require__.bind(null, /*! ../welcome/welcome.module */ "./src/app/welcome/welcome.module.ts")).then(m => m.WelcomePageModule) },
            {
                path: 'welcome',
                loadChildren: () => __webpack_require__.e(/*! import() | welcome-welcome-module */ "welcome-welcome-module").then(__webpack_require__.bind(null, /*! ../welcome/welcome.module */ "./src/app/welcome/welcome.module.ts")).then(m => m.WelcomePageModule),
                children: [
                    {
                        path: 'login',
                        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ../login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginPageModule)
                    },
                    {
                        path: 'signup',
                        loadChildren: () => __webpack_require__.e(/*! import() | signup-signup-module */ "signup-signup-module").then(__webpack_require__.bind(null, /*! ../signup/signup.module */ "./src/app/signup/signup.module.ts")).then(m => m.SignupPageModule)
                    },
                ],
            },
            {
                path: 'seller-form',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../seller-form/seller-form.module */ "./src/app/seller-form/seller-form.module.ts")).then(m => m.SellerFormPageModule)
            },
            {
                path: 'item-details',
                loadChildren: () => __webpack_require__.e(/*! import() | item-details-item-details-module */ "item-details-item-details-module").then(__webpack_require__.bind(null, /*! ../item-details/item-details.module */ "./src/app/item-details/item-details.module.ts")).then(m => m.ItemDetailsPageModule)
            },
            {
                path: 'medicines',
                loadChildren: () => Promise.all(/*! import() | pages-medicines-medicines-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-medicines-medicines-module")]).then(__webpack_require__.bind(null, /*! ../pages/medicines/medicines.module */ "./src/app/pages/medicines/medicines.module.ts")).then(m => m.MedicinesPageModule)
            },
            {
                path: 'myads',
                loadChildren: () => Promise.all(/*! import() | pages-myads-myads-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-myads-myads-module")]).then(__webpack_require__.bind(null, /*! ../pages/myads/myads.module */ "./src/app/pages/myads/myads.module.ts")).then(m => m.MyadsPageModule)
            },
            {
                path: 'landing',
                loadChildren: () => Promise.all(/*! import() | landing-landing-module */[__webpack_require__.e("common"), __webpack_require__.e("landing-landing-module")]).then(__webpack_require__.bind(null, /*! ../landing/landing.module */ "./src/app/landing/landing.module.ts")).then(m => m.LandingPageModule)
            },
            {
                path: 'my-cart',
                loadChildren: () => __webpack_require__.e(/*! import() | my-cart-my-cart-module */ "my-cart-my-cart-module").then(__webpack_require__.bind(null, /*! ../my-cart/my-cart.module */ "./src/app/my-cart/my-cart.module.ts")).then(m => m.MyCartPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/profile/profile.module.ts")).then(m => m.ProfilePageModule)
            },
            {
                path: 'my-orders',
                loadChildren: () => __webpack_require__.e(/*! import() | my-orders-my-orders-module */ "my-orders-my-orders-module").then(__webpack_require__.bind(null, /*! ../my-orders/my-orders.module */ "./src/app/my-orders/my-orders.module.ts")).then(m => m.MyOrdersPageModule)
            },
            {
                path: 'favorite',
                loadChildren: () => __webpack_require__.e(/*! import() | favorite-favorite-module */ "favorite-favorite-module").then(__webpack_require__.bind(null, /*! ../favorite/favorite.module */ "./src/app/favorite/favorite.module.ts")).then(m => m.FavoritePageModule)
            },
            {
                path: 'checkout',
                loadChildren: () => __webpack_require__.e(/*! import() | checkout-checkout-module */ "checkout-checkout-module").then(__webpack_require__.bind(null, /*! ../checkout/checkout.module */ "./src/app/checkout/checkout.module.ts")).then(m => m.CheckoutPageModule)
            },
            {
                path: 'confirm',
                loadChildren: () => __webpack_require__.e(/*! import() | confirm-confirm-module */ "confirm-confirm-module").then(__webpack_require__.bind(null, /*! ../confirm/confirm.module */ "./src/app/confirm/confirm.module.ts")).then(m => m.ConfirmPageModule)
            },
            {
                path: 'folder/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | folder-folder-module */ "folder-folder-module").then(__webpack_require__.bind(null, /*! ../folder/folder.module */ "./src/app/folder/folder.module.ts")).then(m => m.FolderPageModule)
            },
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full',
            },
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");









let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button.background {\n  --background: url('sell_image.jpg') 0 0/100% 100% no-repeat;\n}\n\n.tabsbg {\n  --background: #000000;\n}\n\nion-tab-bar.ion-no-border {\n  -webkit-clip-path: polygon(50% 0, 100% 17%, 100% 99%, 0 100%, 0 17%);\n          clip-path: polygon(50% 0, 100% 17%, 100% 99%, 0 100%, 0 17%);\n  height: 80px;\n  --background: #36363F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJEQUFBO0FBQUo7O0FBaUJBO0VBQ0kscUJBQUE7QUFkSjs7QUFnQkE7RUFDSSxvRUFBQTtVQUFBLDREQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBYkoiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1mYWItYnV0dG9uLmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvc2VsbF9pbWFnZS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcblxyXG5cclxuLy8gaW9uLXRhYi1iYXIuaW9uLW5vLWJvcmRlcntcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGJvdHRvbTogMDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjMWUxZTFlODU7XHJcblxyXG4vLyAgICAgaW9uLXRhYi1idXR0b24ge1xyXG4vLyAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi50YWJzYmd7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbn1cclxuaW9uLXRhYi1iYXIuaW9uLW5vLWJvcmRlcntcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCwgMTAwJSAxNyUsIDEwMCUgOTklLCAwIDEwMCUsIDAgMTclKTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzM2MzYzRjsvLyMxRjFGMjk7XHJcbiAgICAvLyBpb24tdGFiLWJ1dHRvbi5iYWNrZ3JvdW5kLWF2YXRhcntcclxuICAgIC8vICAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaWNvbi9mYXZpY29uLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAgIFxyXG4gICAgLy8gfVxyXG4gICAgLy8gaW9uLXRhYi1idXR0b24uYmFja2dyb3VuZC1teWFkc3tcclxuICAgIC8vICAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaWNvbi9hZC5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgICAgIFxyXG4gICAgLy8gfVxyXG4gICAgLy8gaW9uLXRhYi1idXR0b24uYmFja2dyb3VuZC1ob21le1xyXG4gICAgLy8gICAgIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL2hvbWUucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgICAgIFxyXG4gICAgLy8gfVxyXG4gICAgLy8gaW9uLXRhYi1idXR0b24uYmFja2dyb3VuZC1wdXJjaGFzZXtcclxuICAgIC8vICAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaWNvbi9vbGQtcHVyY2hhc2UucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgICAgICBcclxuICAgIC8vIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _seller_form_seller_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../seller-form/seller-form.page */ "./src/app/seller-form/seller-form.page.ts");




let TabsPage = class TabsPage {
    constructor(modalCntrl) {
        this.modalCntrl = modalCntrl;
        this.addSellerForm = [];
    }
    popSellerForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Seller-Form-Popped Up");
            const modal = yield this.modalCntrl.create({
                component: _seller_form_seller_form_page__WEBPACK_IMPORTED_MODULE_3__["SellerFormPage"]
            });
            modal.onWillDismiss().then(() => {
                // this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
                //this.animateCSS('bounceInLeft');
                this.modalCntrl.getTop();
            });
            modal.present();
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map