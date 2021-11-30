(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"buy\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n      <ion-label>Buy</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"sell\">\n      <ion-icon name=\"pricetag-outline\"></ion-icon>\n      <ion-label>Sell</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"nutrition\">\n      <ion-icon name=\"bandage-outline\"></ion-icon>\n      <ion-label>Medicine</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"feed\">\n      <ion-icon name=\"cafe-outline\"></ion-icon>\n      <ion-label>Feed</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"insemination\">\n      <ion-icon name=\"git-branch-outline\"></ion-icon>\n      <ion-label>Insemination</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs> -->\n<ion-tabs class=\"tabsbg\">\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" translucent=\"true\">\n    <ion-fab-button class=\"background\" (click)=popSellerForm()>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n  </ion-fab>\n\n  <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n    <ion-tab-button tab=\"landing\"> \n      <!-- <ion-icon name=\"cart\" ></ion-icon> -->\n      <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/home.png\"/>\n      <ion-label style=\"color: #EC5B5B;\">Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"myads\"  style=\"margin-left: -50px;\">\n      <!-- <ion-icon name=\"cafe\"></ion-icon> -->\n      <img style=\"height: 30px; width: 30px; \" src=\"../../assets/icon/ad.png\"/>\n      <ion-label style=\"color: #06D25A;\">My Ads</ion-label>\n      <!-- <ion-badge *ngIf=\"new_message\">{{new_message}}</ion-badge> -->\n    </ion-tab-button>\n\n    <!-- <svg height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"#1f1f1f\" fill-rule=\"evenodd\"></path></svg> -->\n\n    <ion-tab-button tab=\"medicines\" style=\" margin-right: -60px;\" >\n      <!-- <ion-icon name=\"bandage\"></ion-icon> -->\n      <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/old-purchase.png\"/>\n      <ion-label style=\"color: #06D25A;\">Purchase</ion-label>\n      <!-- <ion-badge *ngIf=\"new_activities\">{{new_activities}}</ion-badge> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"insemination\" >\n\n      <ion-icon style=\"height: 40px; width: 40px; \" color=\"success\" name=\"person-circle-outline\"></ion-icon>\n     \n\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    "./src/app/tabs/tabs-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/tabs/tabs.page.ts"); // import { IntroGuard } from '../guards/intro.guard';
      // import { AutoLoginGuard } from '../guards/auto-login.guard';


      var routes = [{
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'home',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-home-module */
            [__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null,
            /*! ../home/home.module */
            "./src/app/home/home.module.ts")).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'welcome',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | welcome-welcome-module */
            "welcome-welcome-module").then(__webpack_require__.bind(null,
            /*! ../welcome/welcome.module */
            "./src/app/welcome/welcome.module.ts")).then(function (m) {
              return m.WelcomePageModule;
            });
          }
        }, {
          path: 'welcome',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | welcome-welcome-module */
            "welcome-welcome-module").then(__webpack_require__.bind(null,
            /*! ../welcome/welcome.module */
            "./src/app/welcome/welcome.module.ts")).then(function (m) {
              return m.WelcomePageModule;
            });
          },
          children: [{
            path: 'login',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | login-login-module */
              "login-login-module").then(__webpack_require__.bind(null,
              /*! ../login/login.module */
              "./src/app/login/login.module.ts")).then(function (m) {
                return m.LoginPageModule;
              });
            }
          }, {
            path: 'signup',
            loadChildren: function loadChildren() {
              return __webpack_require__.e(
              /*! import() | signup-signup-module */
              "signup-signup-module").then(__webpack_require__.bind(null,
              /*! ../signup/signup.module */
              "./src/app/signup/signup.module.ts")).then(function (m) {
                return m.SignupPageModule;
              });
            }
          }]
        }, {
          path: 'seller-form',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../seller-form/seller-form.module */
            "./src/app/seller-form/seller-form.module.ts")).then(function (m) {
              return m.SellerFormPageModule;
            });
          }
        }, {
          path: 'item-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | item-details-item-details-module */
            "item-details-item-details-module").then(__webpack_require__.bind(null,
            /*! ../item-details/item-details.module */
            "./src/app/item-details/item-details.module.ts")).then(function (m) {
              return m.ItemDetailsPageModule;
            });
          }
        }, {
          path: 'medicines',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-medicines-medicines-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-medicines-medicines-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/medicines/medicines.module */
            "./src/app/pages/medicines/medicines.module.ts")).then(function (m) {
              return m.MedicinesPageModule;
            });
          }
        }, {
          path: 'myads',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-myads-myads-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-myads-myads-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/myads/myads.module */
            "./src/app/pages/myads/myads.module.ts")).then(function (m) {
              return m.MyadsPageModule;
            });
          }
        }, {
          path: 'landing',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | landing-landing-module */
            [__webpack_require__.e("common"), __webpack_require__.e("landing-landing-module")]).then(__webpack_require__.bind(null,
            /*! ../landing/landing.module */
            "./src/app/landing/landing.module.ts")).then(function (m) {
              return m.LandingPageModule;
            });
          }
        }, {
          path: 'my-cart',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | my-cart-my-cart-module */
            "my-cart-my-cart-module").then(__webpack_require__.bind(null,
            /*! ../my-cart/my-cart.module */
            "./src/app/my-cart/my-cart.module.ts")).then(function (m) {
              return m.MyCartPageModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | profile-profile-module */
            "profile-profile-module").then(__webpack_require__.bind(null,
            /*! ../profile/profile.module */
            "./src/app/profile/profile.module.ts")).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'my-orders',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | my-orders-my-orders-module */
            "my-orders-my-orders-module").then(__webpack_require__.bind(null,
            /*! ../my-orders/my-orders.module */
            "./src/app/my-orders/my-orders.module.ts")).then(function (m) {
              return m.MyOrdersPageModule;
            });
          }
        }, {
          path: 'favorite',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | favorite-favorite-module */
            "favorite-favorite-module").then(__webpack_require__.bind(null,
            /*! ../favorite/favorite.module */
            "./src/app/favorite/favorite.module.ts")).then(function (m) {
              return m.FavoritePageModule;
            });
          }
        }, {
          path: 'checkout',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | checkout-checkout-module */
            "checkout-checkout-module").then(__webpack_require__.bind(null,
            /*! ../checkout/checkout.module */
            "./src/app/checkout/checkout.module.ts")).then(function (m) {
              return m.CheckoutPageModule;
            });
          }
        }, {
          path: 'confirm',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | confirm-confirm-module */
            "confirm-confirm-module").then(__webpack_require__.bind(null,
            /*! ../confirm/confirm.module */
            "./src/app/confirm/confirm.module.ts")).then(function (m) {
              return m.ConfirmPageModule;
            });
          }
        }, {
          path: 'folder/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | folder-folder-module */
            "folder-folder-module").then(__webpack_require__.bind(null,
            /*! ../folder/folder.module */
            "./src/app/folder/folder.module.ts")).then(function (m) {
              return m.FolderPageModule;
            });
          }
        }, {
          path: '',
          redirectTo: 'welcome',
          pathMatch: 'full'
        }]
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tabs/tabs.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "./src/app/tabs/tabs-routing.module.ts");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/tabs/tabs.page.ts");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "./src/app/tabs/tabs.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-fab-button.background {\n  --background: url('sell_image.jpg') 0 0/100% 100% no-repeat;\n}\n\n.tabsbg {\n  --background: #000000;\n}\n\nion-tab-bar.ion-no-border {\n  -webkit-clip-path: polygon(50% 0, 100% 17%, 100% 99%, 0 100%, 0 17%);\n          clip-path: polygon(50% 0, 100% 17%, 100% 99%, 0 100%, 0 17%);\n  height: 80px;\n  --background: #36363F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJEQUFBO0FBQUo7O0FBaUJBO0VBQ0kscUJBQUE7QUFkSjs7QUFnQkE7RUFDSSxvRUFBQTtVQUFBLDREQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBYkoiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tZmFiLWJ1dHRvbi5iYWNrZ3JvdW5ke1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9zZWxsX2ltYWdlLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cblxuLy8gaW9uLXRhYi1iYXIuaW9uLW5vLWJvcmRlcntcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgYm90dG9tOiAwO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIC0tYmFja2dyb3VuZDogIzFlMWUxZTg1O1xuXG4vLyAgICAgaW9uLXRhYi1idXR0b24ge1xuLy8gICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICB9XG4vLyB9XG5cblxuXG4udGFic2Jne1xuICAgIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbmlvbi10YWItYmFyLmlvbi1uby1ib3JkZXJ7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwLCAxMDAlIDE3JSwgMTAwJSA5OSUsIDAgMTAwJSwgMCAxNyUpO1xuICAgIGhlaWdodDogODBweDtcbiAgICAtLWJhY2tncm91bmQ6ICMzNjM2M0Y7Ly8jMUYxRjI5O1xuICAgIC8vIGlvbi10YWItYnV0dG9uLmJhY2tncm91bmQtYXZhdGFye1xuICAgIC8vICAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaWNvbi9mYXZpY29uLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gICAgICBcbiAgICAvLyB9XG4gICAgLy8gaW9uLXRhYi1idXR0b24uYmFja2dyb3VuZC1teWFkc3tcbiAgICAvLyAgICAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ljb24vYWQucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgICAgICAgXG4gICAgLy8gfVxuICAgIC8vIGlvbi10YWItYnV0dG9uLmJhY2tncm91bmQtaG9tZXtcbiAgICAvLyAgICAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ljb24vaG9tZS5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICAgICAgIFxuICAgIC8vIH1cbiAgICAvLyBpb24tdGFiLWJ1dHRvbi5iYWNrZ3JvdW5kLXB1cmNoYXNle1xuICAgIC8vICAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaWNvbi9vbGQtcHVyY2hhc2UucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgICAgICAgXG4gICAgLy8gfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/tabs/tabs.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _seller_form_seller_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../seller-form/seller-form.page */
      "./src/app/seller-form/seller-form.page.ts");

      var TabsPage = /*#__PURE__*/function () {
        function TabsPage(modalCntrl) {
          _classCallCheck(this, TabsPage);

          this.modalCntrl = modalCntrl;
          this.addSellerForm = [];
        }

        _createClass(TabsPage, [{
          key: "popSellerForm",
          value: function popSellerForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("Seller-Form-Popped Up");
                      _context.next = 3;
                      return this.modalCntrl.create({
                        component: _seller_form_seller_form_page__WEBPACK_IMPORTED_MODULE_3__["SellerFormPage"]
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onWillDismiss().then(function () {
                        // this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
                        //this.animateCSS('bounceInLeft');
                        _this.modalCntrl.getTop();
                      });
                      modal.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return TabsPage;
      }();

      TabsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tabs.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tabs.page.scss */
        "./src/app/tabs/tabs.page.scss"))["default"]]
      })], TabsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map