(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js ***!
      \*************************************************************************/

    /*! exports provided: NgOtpInputComponent, NgOtpInputModule, ɵa, ɵb */

    /***/
    function node_modulesNgOtpInput__ivy_ngcc__Fesm2015NgOtpInputJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgOtpInputComponent", function () {
        return NgOtpInputComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgOtpInputModule", function () {
        return NgOtpInputModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return KeysPipe;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return NumberOnlyDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.onKeyDown($event);
          })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var i_r3 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.onKeyUp($event, i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("disabledNumberOnly", !ctx_r1.config.allowNumbersOnly)("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
        }
      }

      function NgOtpInputComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 1, 11, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrapper ", ctx_r0.config.containerClass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
        }
      }

      var KeysPipe = /*#__PURE__*/function () {
        function KeysPipe() {
          _classCallCheck(this, KeysPipe);
        }

        _createClass(KeysPipe, [{
          key: "transform",
          value: function transform(value) {
            return Object.keys(value);
          }
        }]);

        return KeysPipe;
      }();

      KeysPipe.ɵfac = function KeysPipe_Factory(t) {
        return new (t || KeysPipe)();
      };

      KeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "keys",
        type: KeysPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'keys'
          }]
        }], null, null);
      })();

      var Config = function Config() {
        _classCallCheck(this, Config);
      };

      var NgOtpInputComponent = /*#__PURE__*/function () {
        function NgOtpInputComponent(keysPipe) {
          _classCallCheck(this, NgOtpInputComponent);

          this.keysPipe = keysPipe;
          this.config = {
            length: 4
          }; // tslint:disable-next-line: no-output-on-prefix

          this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.inputControls = new Array(this.config.length);
          this.componentKey = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
        }

        _createClass(NgOtpInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});

            for (var index = 0; index < this.config.length; index++) {
              this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]());
            }

            this.otpForm.valueChanges.subscribe(function (v) {
              _this.keysPipe.transform(_this.otpForm.controls).forEach(function (k) {
                var val = _this.otpForm.controls[k].value;

                if (val && val.length > 1) {
                  if (val.length >= _this.config.length) {
                    _this.setValue(val);
                  } else {
                    _this.rebuildValue();
                  }
                }
              });
            });
            this.inputType = this.getInputType();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            if (!this.config.disableAutoFocus) {
              var containerItem = document.getElementById("c_".concat(this.componentKey));

              if (containerItem) {
                containerItem.addEventListener('paste', function (evt) {
                  return _this2.handlePaste(evt);
                });
                var ele = containerItem.getElementsByClassName('otp-input')[0];

                if (ele && ele.focus) {
                  ele.focus();
                }
              }
            }
          }
        }, {
          key: "getControlName",
          value: function getControlName(idx) {
            return "ctrl_".concat(idx);
          }
        }, {
          key: "ifLeftArrow",
          value: function ifLeftArrow(event) {
            return this.ifKeyCode(event, 37);
          }
        }, {
          key: "ifRightArrow",
          value: function ifRightArrow(event) {
            return this.ifKeyCode(event, 39);
          }
        }, {
          key: "ifBackspaceOrDelete",
          value: function ifBackspaceOrDelete(event) {
            return event.key === 'Backspace' || event.key === 'Delete' || this.ifKeyCode(event, 8) || this.ifKeyCode(event, 46);
          }
        }, {
          key: "ifKeyCode",
          value: function ifKeyCode(event, targetCode) {
            var key = event.keyCode || event.charCode; // tslint:disable-next-line: triple-equals

            return key == targetCode ? true : false;
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown($event) {
            var isSpace = this.ifKeyCode($event, 32);

            if (isSpace) {
              // prevent space
              return false;
            }
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp($event, inputIdx) {
            var nextInputId = this.appendKey("otp_".concat(inputIdx + 1));
            var prevInputId = this.appendKey("otp_".concat(inputIdx - 1));

            if (this.ifRightArrow($event)) {
              this.setSelected(nextInputId);
              return;
            }

            if (this.ifLeftArrow($event)) {
              this.setSelected(prevInputId);
              return;
            }

            var isBackspace = this.ifBackspaceOrDelete($event);

            if (isBackspace && !$event.target.value) {
              this.setSelected(prevInputId);
              this.rebuildValue();
              return;
            }

            if (!$event.target.value) {
              return;
            }

            if (this.ifValidEntry($event)) {
              this.setSelected(nextInputId);
            }

            this.rebuildValue();
          }
        }, {
          key: "appendKey",
          value: function appendKey(id) {
            return "".concat(id, "_").concat(this.componentKey);
          }
        }, {
          key: "setSelected",
          value: function setSelected(eleId) {
            this.focusTo(eleId);
            var ele = document.getElementById(eleId);

            if (ele && ele.setSelectionRange) {
              setTimeout(function () {
                ele.setSelectionRange(0, 1);
              }, 0);
            }
          }
        }, {
          key: "ifValidEntry",
          value: function ifValidEntry(event) {
            var inp = String.fromCharCode(event.keyCode);
            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            return isMobile || /[a-zA-Z0-9-_]/.test(inp) || this.config.allowKeyCodes && this.config.allowKeyCodes.includes(event.keyCode) || event.keyCode >= 96 && event.keyCode <= 105;
          }
        }, {
          key: "focusTo",
          value: function focusTo(eleId) {
            var ele = document.getElementById(eleId);

            if (ele) {
              ele.focus();
            }
          } // method to set component value

        }, {
          key: "setValue",
          value: function setValue(value) {
            var _this3 = this;

            if (this.config.allowNumbersOnly && isNaN(value)) {
              return;
            }

            this.otpForm.reset();

            if (!value) {
              this.rebuildValue();
              return;
            }

            value = value.toString().replace(/\s/g, ''); // remove whitespace

            Array.from(value).forEach(function (c, idx) {
              if (_this3.otpForm.get(_this3.getControlName(idx))) {
                _this3.otpForm.get(_this3.getControlName(idx)).setValue(c);
              }
            });

            if (!this.config.disableAutoFocus) {
              var containerItem = document.getElementById("c_".concat(this.componentKey));
              var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
              var ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];

              if (ele && ele.focus) {
                ele.focus();
              }
            }

            this.rebuildValue();
          }
        }, {
          key: "rebuildValue",
          value: function rebuildValue() {
            var _this4 = this;

            var val = '';
            this.keysPipe.transform(this.otpForm.controls).forEach(function (k) {
              if (_this4.otpForm.controls[k].value) {
                var ctrlVal = _this4.otpForm.controls[k].value;
                var isLengthExceed = ctrlVal.length > 1;
                var isCaseTransformEnabled = !_this4.config.allowNumbersOnly && _this4.config.letterCase && (_this4.config.letterCase.toLocaleLowerCase() == 'upper' || _this4.config.letterCase.toLocaleLowerCase() == 'lower');
                ctrlVal = ctrlVal[0];
                var transformedVal = isCaseTransformEnabled ? _this4.config.letterCase.toLocaleLowerCase() == 'upper' ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;

                if (isCaseTransformEnabled && transformedVal == ctrlVal) {
                  isCaseTransformEnabled = false;
                } else {
                  ctrlVal = transformedVal;
                }

                val += ctrlVal;

                if (isLengthExceed || isCaseTransformEnabled) {
                  _this4.otpForm.controls[k].setValue(ctrlVal);
                }
              }
            });
            this.onInputChange.emit(val);
          }
        }, {
          key: "getInputType",
          value: function getInputType() {
            return this.config.isPasswordInput ? 'password' : this.config.allowNumbersOnly ? 'tel' : 'text';
          }
        }, {
          key: "handlePaste",
          value: function handlePaste(e) {
            // Get pasted data via clipboard API
            var clipboardData = e.clipboardData || window['clipboardData'];

            if (clipboardData) {
              var pastedData = clipboardData.getData('Text');
            } // Stop data actually being pasted into div


            e.stopPropagation();
            e.preventDefault();

            if (!pastedData) {
              return;
            }

            this.setValue(pastedData);
          }
        }]);

        return NgOtpInputComponent;
      }();

      NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) {
        return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe));
      };

      NgOtpInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NgOtpInputComponent,
        selectors: [["ng-otp-input"]],
        inputs: {
          config: "config"
        },
        outputs: {
          onInputChange: "onInputChange"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["numberOnly", "", "autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "class", "formControl", "id", "keydown", "keyup", 4, "ngFor", "ngForOf"], ["numberOnly", "", "autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "formControl", "id", "keydown", "keyup"]],
        template: function NgOtpInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], NumberOnlyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]];
        },
        pipes: function pipes() {
          return [KeysPipe];
        },
        styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
      });
      /**
       * @type {function(): !Array<(null|{
       *   type: ?,
       *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
       * })>}
       * @nocollapse
       */

      NgOtpInputComponent.ctorParameters = function () {
        return [{
          type: KeysPipe
        }];
      };
      /** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */


      NgOtpInputComponent.propDecorators = {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onInputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            // tslint:disable-next-line: component-selector
            selector: 'ng-otp-input',
            template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" \r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"one-time-code\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
            styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input{width:30px;font-size:18px;height:30px}}\n"]
          }]
        }], function () {
          return [{
            type: KeysPipe
          }];
        }, {
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();

      var NumberOnlyDirective = /*#__PURE__*/function () {
        function NumberOnlyDirective(_elRef, _renderer) {
          _classCallCheck(this, NumberOnlyDirective);

          this._elRef = _elRef;
          this._renderer = _renderer;
        }

        _createClass(NumberOnlyDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.disabledNumberOnly) {
              this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
            }
          }
        }]);

        return NumberOnlyDirective;
      }();

      NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) {
        return new (t || NumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      NumberOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NumberOnlyDirective,
        selectors: [["", "numberOnly", ""]],
        inputs: {
          disabledNumberOnly: "disabledNumberOnly"
        }
      });
      /**
       * @type {function(): !Array<(null|{
       *   type: ?,
       *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
       * })>}
       * @nocollapse
       */

      NumberOnlyDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };
      /** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */


      NumberOnlyDirective.propDecorators = {
        disabledNumberOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberOnlyDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[numberOnly]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          disabledNumberOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var NgOtpInputModule = function NgOtpInputModule() {
        _classCallCheck(this, NgOtpInputModule);
      };

      NgOtpInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: NgOtpInputModule
      });
      NgOtpInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function NgOtpInputModule_Factory(t) {
          return new (t || NgOtpInputModule)();
        },
        providers: [KeysPipe],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgOtpInputModule, {
          declarations: function declarations() {
            return [NgOtpInputComponent, KeysPipe, NumberOnlyDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]];
          },
          exports: function exports() {
            return [NgOtpInputComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]],
            declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
            exports: [NgOtpInputComponent],
            providers: [KeysPipe]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ng-otp-input
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-otp-input.js.map

      /***/

    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-otp-input */
      "./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map