(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"], {
    /***/
    "./node_modules/@capacitor/camera/dist/esm/web.js":
    /*!********************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
      \********************************************************/

    /*! exports provided: CameraWeb, Camera */

    /***/
    function node_modulesCapacitorCameraDistEsmWebJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraWeb", function () {
        return CameraWeb;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Camera", function () {
        return Camera;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/index.js");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "./node_modules/@capacitor/camera/dist/esm/definitions.js");

      var CameraWeb = /*#__PURE__*/function (_capacitor_core__WEBP) {
        _inherits(CameraWeb, _capacitor_core__WEBP);

        var _super = _createSuper(CameraWeb);

        function CameraWeb() {
          _classCallCheck(this, CameraWeb);

          return _super.apply(this, arguments);
        }

        _createClass(CameraWeb, [{
          key: "getPhoto",
          value: function () {
            var _getPhoto = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
                        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
                          var actionSheet;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  if (options.webUseInput || options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos) {
                                    _this.fileInputExperience(options, resolve);
                                  } else if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
                                    actionSheet = document.querySelector('pwa-action-sheet');

                                    if (!actionSheet) {
                                      actionSheet = document.createElement('pwa-action-sheet');
                                      document.body.appendChild(actionSheet);
                                    }

                                    actionSheet.header = options.promptLabelHeader || 'Photo';
                                    actionSheet.cancelable = false;
                                    actionSheet.options = [{
                                      title: options.promptLabelPhoto || 'From Photos'
                                    }, {
                                      title: options.promptLabelPicture || 'Take Picture'
                                    }];
                                    actionSheet.addEventListener('onSelection', /*#__PURE__*/function () {
                                      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                                        var selection;
                                        return regeneratorRuntime.wrap(function _callee$(_context) {
                                          while (1) {
                                            switch (_context.prev = _context.next) {
                                              case 0:
                                                selection = e.detail;

                                                if (selection === 0) {
                                                  _this.fileInputExperience(options, resolve);
                                                } else {
                                                  _this.cameraExperience(options, resolve, reject);
                                                }

                                              case 2:
                                              case "end":
                                                return _context.stop();
                                            }
                                          }
                                        }, _callee);
                                      }));

                                      return function (_x4) {
                                        return _ref2.apply(this, arguments);
                                      };
                                    }());
                                  } else {
                                    _this.cameraExperience(options, resolve, reject);
                                  }

                                case 1:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        return function (_x2, _x3) {
                          return _ref.apply(this, arguments);
                        };
                      }()));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));

            function getPhoto(_x) {
              return _getPhoto.apply(this, arguments);
            }

            return getPhoto;
          }()
        }, {
          key: "pickImages",
          value: function () {
            var _pickImages = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_options) {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", new Promise( /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve) {
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _this2.multipleFileInputExperience(resolve);

                                case 1:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4);
                        }));

                        return function (_x6) {
                          return _ref3.apply(this, arguments);
                        };
                      }()));

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));

            function pickImages(_x5) {
              return _pickImages.apply(this, arguments);
            }

            return pickImages;
          }()
        }, {
          key: "cameraExperience",
          value: function () {
            var _cameraExperience = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(options, resolve, reject) {
              var _this3 = this;

              var cameraModal;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!customElements.get('pwa-camera-modal')) {
                        _context7.next = 15;
                        break;
                      }

                      cameraModal = document.createElement('pwa-camera-modal');
                      document.body.appendChild(cameraModal);
                      _context7.prev = 3;
                      _context7.next = 6;
                      return cameraModal.componentOnReady();

                    case 6:
                      cameraModal.addEventListener('onPhoto', /*#__PURE__*/function () {
                        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(e) {
                          var photo;
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  photo = e.detail;

                                  if (!(photo === null)) {
                                    _context6.next = 5;
                                    break;
                                  }

                                  reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["CapacitorException"]('User cancelled photos app'));
                                  _context6.next = 14;
                                  break;

                                case 5:
                                  if (!(photo instanceof Error)) {
                                    _context6.next = 9;
                                    break;
                                  }

                                  reject(photo);
                                  _context6.next = 14;
                                  break;

                                case 9:
                                  _context6.t0 = resolve;
                                  _context6.next = 12;
                                  return _this3._getCameraPhoto(photo, options);

                                case 12:
                                  _context6.t1 = _context6.sent;
                                  (0, _context6.t0)(_context6.t1);

                                case 14:
                                  cameraModal.dismiss();
                                  document.body.removeChild(cameraModal);

                                case 16:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6);
                        }));

                        return function (_x10) {
                          return _ref4.apply(this, arguments);
                        };
                      }());
                      cameraModal.present();
                      _context7.next = 13;
                      break;

                    case 10:
                      _context7.prev = 10;
                      _context7.t0 = _context7["catch"](3);
                      this.fileInputExperience(options, resolve);

                    case 13:
                      _context7.next = 17;
                      break;

                    case 15:
                      console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements.");
                      this.fileInputExperience(options, resolve);

                    case 17:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[3, 10]]);
            }));

            function cameraExperience(_x7, _x8, _x9) {
              return _cameraExperience.apply(this, arguments);
            }

            return cameraExperience;
          }()
        }, {
          key: "fileInputExperience",
          value: function fileInputExperience(options, resolve) {
            var input = document.querySelector('#_capacitor-camera-input');

            var cleanup = function cleanup() {
              var _a;

              (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
            };

            if (!input) {
              input = document.createElement('input');
              input.id = '_capacitor-camera-input';
              input.type = 'file';
              input.hidden = true;
              document.body.appendChild(input);
              input.addEventListener('change', function (_e) {
                var file = input.files[0];
                var format = 'jpeg';

                if (file.type === 'image/png') {
                  format = 'png';
                } else if (file.type === 'image/gif') {
                  format = 'gif';
                }

                if (options.resultType === 'dataUrl' || options.resultType === 'base64') {
                  var reader = new FileReader();
                  reader.addEventListener('load', function () {
                    if (options.resultType === 'dataUrl') {
                      resolve({
                        dataUrl: reader.result,
                        format: format
                      });
                    } else if (options.resultType === 'base64') {
                      var b64 = reader.result.split(',')[1];
                      resolve({
                        base64String: b64,
                        format: format
                      });
                    }

                    cleanup();
                  });
                  reader.readAsDataURL(file);
                } else {
                  resolve({
                    webPath: URL.createObjectURL(file),
                    format: format
                  });
                  cleanup();
                }
              });
            }

            input.accept = 'image/*';
            input.capture = true;

            if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Photos || options.source === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"].Prompt) {
              input.removeAttribute('capture');
            } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Front) {
              input.capture = 'user';
            } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"].Rear) {
              input.capture = 'environment';
            }

            input.click();
          }
        }, {
          key: "multipleFileInputExperience",
          value: function multipleFileInputExperience(resolve) {
            var input = document.querySelector('#_capacitor-camera-input-multiple');

            var cleanup = function cleanup() {
              var _a;

              (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
            };

            if (!input) {
              input = document.createElement('input');
              input.id = '_capacitor-camera-input-multiple';
              input.type = 'file';
              input.hidden = true;
              input.multiple = true;
              document.body.appendChild(input);
              input.addEventListener('change', function (_e) {
                var photos = []; // eslint-disable-next-line @typescript-eslint/prefer-for-of

                for (var i = 0; i < input.files.length; i++) {
                  var file = input.files[i];
                  var format = 'jpeg';

                  if (file.type === 'image/png') {
                    format = 'png';
                  } else if (file.type === 'image/gif') {
                    format = 'gif';
                  }

                  photos.push({
                    webPath: URL.createObjectURL(file),
                    format: format
                  });
                }

                resolve({
                  photos: photos
                });
                cleanup();
              });
            }

            input.accept = 'image/*';
            input.capture = true;
            input.click();
          }
        }, {
          key: "_getCameraPhoto",
          value: function _getCameraPhoto(photo, options) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              var format = photo.type.split('/')[1];

              if (options.resultType === 'uri') {
                resolve({
                  webPath: URL.createObjectURL(photo),
                  format: format,
                  saved: false
                });
              } else {
                reader.readAsDataURL(photo);

                reader.onloadend = function () {
                  var r = reader.result;

                  if (options.resultType === 'dataUrl') {
                    resolve({
                      dataUrl: r,
                      format: format,
                      saved: false
                    });
                  } else {
                    resolve({
                      base64String: r.split(',')[1],
                      format: format,
                      saved: false
                    });
                  }
                };

                reader.onerror = function (e) {
                  reject(e);
                };
              }
            });
          }
        }, {
          key: "checkPermissions",
          value: function () {
            var _checkPermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var permission;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      if (!(typeof navigator === 'undefined' || !navigator.permissions)) {
                        _context8.next = 2;
                        break;
                      }

                      throw this.unavailable('Permissions API not available in this browser');

                    case 2:
                      _context8.prev = 2;
                      _context8.next = 5;
                      return window.navigator.permissions.query({
                        name: 'camera'
                      });

                    case 5:
                      permission = _context8.sent;
                      return _context8.abrupt("return", {
                        camera: permission.state,
                        photos: 'granted'
                      });

                    case 9:
                      _context8.prev = 9;
                      _context8.t0 = _context8["catch"](2);
                      throw this.unavailable('Camera permissions are not available in this browser');

                    case 12:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[2, 9]]);
            }));

            function checkPermissions() {
              return _checkPermissions.apply(this, arguments);
            }

            return checkPermissions;
          }()
        }, {
          key: "requestPermissions",
          value: function () {
            var _requestPermissions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      throw this.unimplemented('Not implemented on web.');

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function requestPermissions() {
              return _requestPermissions.apply(this, arguments);
            }

            return requestPermissions;
          }()
        }]);

        return CameraWeb;
      }(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"]);

      var Camera = new CameraWeb(); //# sourceMappingURL=web.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=web-es5.js.map