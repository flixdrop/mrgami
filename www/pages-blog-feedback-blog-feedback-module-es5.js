(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-blog-feedback-blog-feedback-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog-feedback/blog-feedback.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog-feedback/blog-feedback.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesBlogFeedbackBlogFeedbackPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"backbtn\" routerLink=\"/tabs/landing\" routerDirection=\"back\">\r\n        <img src=\"../../assets/back.svg\" />\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">Blogs and Feedback</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-card class=\"card\">\r\n    <ion-card-header>\r\n      <ion-label color=\"warning\">ARTICLE TITLE</ion-label>\r\n    </ion-card-header>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-img src=\"../../assets/blogimg.jpg\"></ion-img>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n      <ion-col size=\"12\">\r\n        SUB TITLE OF THE ARTICLE\r\n        <ion-button class=\"accordion\" fill=\"clear\" size=\"small\" expand=\"full\" color=\"light\" (click)=\"onClickReadMore()\"><ion-icon slot=\"end\" size=\"large\" name=\"{{expand === true ?'chevron-up':'chevron-down'}}\"></ion-icon>{{ expand === true ? 'READ LESS' : 'READ MORE...'}}</ion-button>\r\n        <div class=\"panel\">\r\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae illum, blanditiis quidem obcaecati, enim error quibusdam corrupti aliquam, nemo voluptate ullam sed? Quia labore, dolorem eaque perspiciatis repellat natus.\r\n              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum minus exercitationem laboriosam, laudantium obcaecati ut illum similique fugiat voluptates. Quisquam exercitationem nulla doloremque expedita corporis pariatur nemo dolores laboriosam alias.\r\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi nobis fugit quia non sequi maxime, autem ad molestias repellendus nostrum voluptatum ipsa blanditiis veritatis nesciunt totam quibusdam? Neque, optio.\r\n              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet similique ad eius libero ut? Quis at perspiciatis, assumenda nam hic officia quae exercitationem ullam, sapiente nemo soluta tenetur, ipsam laborum?\r\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste neque quos veniam soluta at? Cumque, temporibus qui consequuntur saepe deserunt, repudiandae sint vel id ullam tempore hic perspiciatis voluptates illum.\r\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet nulla unde hic aliquam laborum deleniti maiores, quos harum sapiente eum animi eligendi fugit neque incidunt optio laboriosam rerum illo.\r\n              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit recusandae tempore similique, cumque veniam neque saepe pariatur natus ut mollitia velit, error ratione vel libero sint autem. Veniam, nisi molestias?\r\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis nobis cupiditate voluptate illo, porro cumque autem sapiente quasi eaque obcaecati alias harum officia excepturi earum provident dolorem, ipsam beatae!\r\n            </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/blog-feedback/blog-feedback-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/blog-feedback/blog-feedback-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: BlogFeedbackPageRoutingModule */

    /***/
    function srcAppPagesBlogFeedbackBlogFeedbackRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogFeedbackPageRoutingModule", function () {
        return BlogFeedbackPageRoutingModule;
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


      var _blog_feedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./blog-feedback.page */
      "./src/app/pages/blog-feedback/blog-feedback.page.ts");

      var routes = [{
        path: '',
        component: _blog_feedback_page__WEBPACK_IMPORTED_MODULE_3__["BlogFeedbackPage"]
      }];

      var BlogFeedbackPageRoutingModule = function BlogFeedbackPageRoutingModule() {
        _classCallCheck(this, BlogFeedbackPageRoutingModule);
      };

      BlogFeedbackPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BlogFeedbackPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/blog-feedback/blog-feedback.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/blog-feedback/blog-feedback.module.ts ***!
      \*************************************************************/

    /*! exports provided: BlogFeedbackPageModule */

    /***/
    function srcAppPagesBlogFeedbackBlogFeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogFeedbackPageModule", function () {
        return BlogFeedbackPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _blog_feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./blog-feedback-routing.module */
      "./src/app/pages/blog-feedback/blog-feedback-routing.module.ts");
      /* harmony import */


      var _blog_feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./blog-feedback.page */
      "./src/app/pages/blog-feedback/blog-feedback.page.ts");

      var BlogFeedbackPageModule = function BlogFeedbackPageModule() {
        _classCallCheck(this, BlogFeedbackPageModule);
      };

      BlogFeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _blog_feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlogFeedbackPageRoutingModule"]],
        declarations: [_blog_feedback_page__WEBPACK_IMPORTED_MODULE_6__["BlogFeedbackPage"]]
      })], BlogFeedbackPageModule);
      /***/
    },

    /***/
    "./src/app/pages/blog-feedback/blog-feedback.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/blog-feedback/blog-feedback.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesBlogFeedbackBlogFeedbackPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\n  width: 100%;\n  height: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n.accordion {\n  width: 100%;\n  text-align: left;\n  border: none;\n  outline: none;\n  transition: 0.5s;\n}\n\n.panel {\n  display: none;\n  overflow: hidden;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  color: burlywood;\n}\n\n.center {\n  display: flex;\n  justify-content: left;\n  align-items: left;\n}\n\na {\n  text-decoration: underline;\n}\n\nion-card {\n  background-color: #41414b;\n}\n\nion-grid {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmxvZy1mZWVkYmFjay9ibG9nLWZlZWRiYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDSSxhQUFBO0VBRUEscUJBQUE7RUFDQSxpQkFBQTtBQUFOOztBQUdFO0VBQ0ksMEJBQUE7QUFBTjs7QUFHRTtFQUNFLHlCQUFBO0FBQUo7O0FBR0U7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmxvZy1mZWVkYmFjay9ibG9nLWZlZWRiYWNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuICBcclxuICAucGFuZWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiBidXJseXdvb2Q7XHJcbiAgfVxyXG5cclxuICAuY2VudGVye1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgYXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNGI7XHJcbiAgfVxyXG5cclxuICBpb24tZ3JpZHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/blog-feedback/blog-feedback.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/blog-feedback/blog-feedback.page.ts ***!
      \***********************************************************/

    /*! exports provided: BlogFeedbackPage */

    /***/
    function srcAppPagesBlogFeedbackBlogFeedbackPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlogFeedbackPage", function () {
        return BlogFeedbackPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BlogFeedbackPage = /*#__PURE__*/function () {
        function BlogFeedbackPage() {
          _classCallCheck(this, BlogFeedbackPage);

          this.expand = false;
        }

        _createClass(BlogFeedbackPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.expand = false;
            var acc = document.getElementsByClassName("accordion");

            for (var i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;

                if (panel.style.display === "block") {
                  panel.style.display = "none";
                } else {
                  panel.style.display = "block";
                }
              });
            }
          }
        }, {
          key: "onClickReadMore",
          value: function onClickReadMore() {
            this.expand = !this.expand;
          }
        }]);

        return BlogFeedbackPage;
      }();

      BlogFeedbackPage.ctorParameters = function () {
        return [];
      };

      BlogFeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-blog-feedback",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./blog-feedback.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/blog-feedback/blog-feedback.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./blog-feedback.page.scss */
        "./src/app/pages/blog-feedback/blog-feedback.page.scss"))["default"]]
      })], BlogFeedbackPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-blog-feedback-blog-feedback-module-es5.js.map