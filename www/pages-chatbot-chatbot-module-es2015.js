(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chatbot-chatbot-module"],{

/***/ "./src/app/pages/chatbot/chatbot-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/chatbot/chatbot-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ChatbotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotPageRoutingModule", function() { return ChatbotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chatbot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chatbot.page */ "./src/app/pages/chatbot/chatbot.page.ts");




const routes = [
    {
        path: '',
        component: _chatbot_page__WEBPACK_IMPORTED_MODULE_3__["ChatbotPage"]
    }
];
let ChatbotPageRoutingModule = class ChatbotPageRoutingModule {
};
ChatbotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatbotPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/chatbot/chatbot.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/chatbot/chatbot.module.ts ***!
  \*************************************************/
/*! exports provided: ChatbotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotPageModule", function() { return ChatbotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chatbot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatbot-routing.module */ "./src/app/pages/chatbot/chatbot-routing.module.ts");
/* harmony import */ var _chatbot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatbot.page */ "./src/app/pages/chatbot/chatbot.page.ts");







let ChatbotPageModule = class ChatbotPageModule {
};
ChatbotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chatbot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatbotPageRoutingModule"]
        ],
        declarations: [_chatbot_page__WEBPACK_IMPORTED_MODULE_6__["ChatbotPage"]]
    })
], ChatbotPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-chatbot-chatbot-module-es2015.js.map