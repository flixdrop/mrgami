(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "./node_modules/@capacitor/camera/dist/esm/definitions.js":
    /*!****************************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
      \****************************************************************/

    /*! exports provided: CameraSource, CameraDirection, CameraResultType */

    /***/
    function node_modulesCapacitorCameraDistEsmDefinitionsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
        return CameraSource;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
        return CameraDirection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
        return CameraResultType;
      });

      var CameraSource;

      (function (CameraSource) {
        /**
         * Prompts the user to select either the photo album or take a photo.
         */
        CameraSource["Prompt"] = "PROMPT";
        /**
         * Take a new photo using the camera.
         */

        CameraSource["Camera"] = "CAMERA";
        /**
         * Pick an existing photo fron the gallery or photo album.
         */

        CameraSource["Photos"] = "PHOTOS";
      })(CameraSource || (CameraSource = {}));

      var CameraDirection;

      (function (CameraDirection) {
        CameraDirection["Rear"] = "REAR";
        CameraDirection["Front"] = "FRONT";
      })(CameraDirection || (CameraDirection = {}));

      var CameraResultType;

      (function (CameraResultType) {
        CameraResultType["Uri"] = "uri";
        CameraResultType["Base64"] = "base64";
        CameraResultType["DataUrl"] = "dataUrl";
      })(CameraResultType || (CameraResultType = {})); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/camera/dist/esm/index.js":
    /*!**********************************************************!*\
      !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
      \**********************************************************/

    /*! exports provided: CameraSource, CameraDirection, CameraResultType, Camera */

    /***/
    function node_modulesCapacitorCameraDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
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
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraSource", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraDirection", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CameraResultType", function () {
        return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"];
      });

      var Camera = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Camera', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() | web */
          "web").then(__webpack_require__.bind(null,
          /*! ./web */
          "./node_modules/@capacitor/camera/dist/esm/web.js")).then(function (m) {
            return new m.CameraWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/core/dist/index.js":
    /*!****************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/index.js ***!
      \****************************************************/

    /*! exports provided: Capacitor, CapacitorException, CapacitorPlatforms, ExceptionCode, Plugins, WebPlugin, WebView, addPlatform, registerPlugin, registerWebPlugin, setPlatform */

    /***/
    function node_modulesCapacitorCoreDistIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
        return Capacitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorException", function () {
        return CapacitorException;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorPlatforms", function () {
        return CapacitorPlatforms;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExceptionCode", function () {
        return ExceptionCode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Plugins", function () {
        return Plugins;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
        return WebPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebView", function () {
        return WebView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addPlatform", function () {
        return addPlatform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerPlugin", function () {
        return registerPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
        return registerWebPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setPlatform", function () {
        return setPlatform;
      });
      /*! Capacitor: https://capacitorjs.com/ - MIT License */


      var createCapacitorPlatforms = function createCapacitorPlatforms(win) {
        var defaultPlatformMap = new Map();
        defaultPlatformMap.set('web', {
          name: 'web'
        });
        var capPlatforms = win.CapacitorPlatforms || {
          currentPlatform: {
            name: 'web'
          },
          platforms: defaultPlatformMap
        };

        var addPlatform = function addPlatform(name, platform) {
          capPlatforms.platforms.set(name, platform);
        };

        var setPlatform = function setPlatform(name) {
          if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
          }
        };

        capPlatforms.addPlatform = addPlatform;
        capPlatforms.setPlatform = setPlatform;
        return capPlatforms;
      };

      var initPlatforms = function initPlatforms(win) {
        return win.CapacitorPlatforms = createCapacitorPlatforms(win);
      };
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */


      var CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */

      var addPlatform = CapacitorPlatforms.addPlatform;
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */

      var setPlatform = CapacitorPlatforms.setPlatform;

      var legacyRegisterWebPlugin = function legacyRegisterWebPlugin(cap, webPlugin) {
        var _a;

        var config = webPlugin.config;
        var Plugins = cap.Plugins;

        if (!config || !config.name) {
          // TODO: add link to upgrade guide
          throw new Error("Capacitor WebPlugin is using the deprecated \"registerWebPlugin()\" function, but without the config. Please use \"registerPlugin()\" instead to register this web plugin.\"");
        } // TODO: add link to upgrade guide


        console.warn("Capacitor plugin \"".concat(config.name, "\" is using the deprecated \"registerWebPlugin()\" function"));

        if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
          // Add the web plugin into the plugins registry if there already isn't
          // an existing one. If it doesn't already exist, that means
          // there's no existing native implementation for it.
          // - OR -
          // If we already have a plugin registered (meaning it was defined in the native layer),
          // then we should only overwrite it if the corresponding web plugin activates on
          // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
          Plugins[config.name] = webPlugin;
        }
      };

      var ExceptionCode;

      (function (ExceptionCode) {
        /**
         * API is not implemented.
         *
         * This usually means the API can't be used because it is not implemented for
         * the current platform.
         */
        ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
        /**
         * API is not available.
         *
         * This means the API can't be used right now because:
         *   - it is currently missing a prerequisite, such as network connectivity
         *   - it requires a particular platform or browser version
         */

        ExceptionCode["Unavailable"] = "UNAVAILABLE";
      })(ExceptionCode || (ExceptionCode = {}));

      var CapacitorException = /*#__PURE__*/function (_Error) {
        _inherits(CapacitorException, _Error);

        var _super = _createSuper(CapacitorException);

        function CapacitorException(message, code) {
          var _this;

          _classCallCheck(this, CapacitorException);

          _this = _super.call(this, message);
          _this.message = message;
          _this.code = code;
          return _this;
        }

        return CapacitorException;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var getPlatformId = function getPlatformId(win) {
        var _a, _b;

        if (win === null || win === void 0 ? void 0 : win.androidBridge) {
          return 'android';
        } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
          return 'ios';
        } else {
          return 'web';
        }
      };

      var createCapacitor = function createCapacitor(win) {
        var _a, _b, _c, _d, _e;

        var capCustomPlatform = win.CapacitorCustomPlatform || null;
        var cap = win.Capacitor || {};
        var Plugins = cap.Plugins = cap.Plugins || {};
        /**
         * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
         */

        var capPlatforms = win.CapacitorPlatforms;

        var defaultGetPlatform = function defaultGetPlatform() {
          return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
        };

        var getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

        var defaultIsNativePlatform = function defaultIsNativePlatform() {
          return getPlatform() !== 'web';
        };

        var isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

        var defaultIsPluginAvailable = function defaultIsPluginAvailable(pluginName) {
          var plugin = registeredPlugins.get(pluginName);

          if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
          }

          if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
          }

          return false;
        };

        var isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

        var defaultGetPluginHeader = function defaultGetPluginHeader(pluginName) {
          var _a;

          return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(function (h) {
            return h.name === pluginName;
          });
        };

        var getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

        var handleError = function handleError(err) {
          return win.console.error(err);
        };

        var pluginMethodNoop = function pluginMethodNoop(_target, prop, pluginName) {
          return Promise.reject("".concat(pluginName, " does not have an implementation of \"").concat(prop, "\"."));
        };

        var registeredPlugins = new Map();

        var defaultRegisterPlugin = function defaultRegisterPlugin(pluginName) {
          var jsImplementations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var registeredPlugin = registeredPlugins.get(pluginName);

          if (registeredPlugin) {
            console.warn("Capacitor plugin \"".concat(pluginName, "\" already registered. Cannot register plugins twice."));
            return registeredPlugin.proxy;
          }

          var platform = getPlatform();
          var pluginHeader = getPluginHeader(pluginName);
          var jsImplementation;

          var loadPluginImplementation = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(!jsImplementation && platform in jsImplementations)) {
                        _context.next = 11;
                        break;
                      }

                      if (!(typeof jsImplementations[platform] === 'function')) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 4;
                      return jsImplementations[platform]();

                    case 4:
                      _context.t0 = jsImplementation = _context.sent;
                      _context.next = 8;
                      break;

                    case 7:
                      _context.t0 = jsImplementation = jsImplementations[platform];

                    case 8:
                      jsImplementation = _context.t0;
                      _context.next = 20;
                      break;

                    case 11:
                      if (!(capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations)) {
                        _context.next = 20;
                        break;
                      }

                      if (!(typeof jsImplementations['web'] === 'function')) {
                        _context.next = 18;
                        break;
                      }

                      _context.next = 15;
                      return jsImplementations['web']();

                    case 15:
                      _context.t1 = jsImplementation = _context.sent;
                      _context.next = 19;
                      break;

                    case 18:
                      _context.t1 = jsImplementation = jsImplementations['web'];

                    case 19:
                      jsImplementation = _context.t1;

                    case 20:
                      return _context.abrupt("return", jsImplementation);

                    case 21:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function loadPluginImplementation() {
              return _ref.apply(this, arguments);
            };
          }();

          var createPluginMethod = function createPluginMethod(impl, prop) {
            var _a, _b;

            if (pluginHeader) {
              var methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(function (m) {
                return prop === m.name;
              });

              if (methodHeader) {
                if (methodHeader.rtype === 'promise') {
                  return function (options) {
                    return cap.nativePromise(pluginName, prop.toString(), options);
                  };
                } else {
                  return function (options, callback) {
                    return cap.nativeCallback(pluginName, prop.toString(), options, callback);
                  };
                }
              } else if (impl) {
                return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
              }
            } else if (impl) {
              return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            } else {
              throw new CapacitorException("\"".concat(pluginName, "\" plugin is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
            }
          };

          var createPluginMethodWrapper = function createPluginMethodWrapper(prop) {
            var remove;

            var wrapper = function wrapper() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var p = loadPluginImplementation().then(function (impl) {
                var fn = createPluginMethod(impl, prop);

                if (fn) {
                  var _p = fn.apply(void 0, args);

                  remove = _p === null || _p === void 0 ? void 0 : _p.remove;
                  return _p;
                } else {
                  throw new CapacitorException("\"".concat(pluginName, ".").concat(prop, "()\" is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
                }
              });

              if (prop === 'addListener') {
                p.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          return _context2.abrupt("return", remove());

                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
              }

              return p;
            }; // Some flair ✨


            wrapper.toString = function () {
              return "".concat(prop.toString(), "() { [capacitor code] }");
            };

            Object.defineProperty(wrapper, 'name', {
              value: prop,
              writable: false,
              configurable: false
            });
            return wrapper;
          };

          var addListener = createPluginMethodWrapper('addListener');
          var removeListener = createPluginMethodWrapper('removeListener');

          var addListenerNative = function addListenerNative(eventName, callback) {
            var call = addListener({
              eventName: eventName
            }, callback);

            var remove = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var callbackId;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return call;

                      case 2:
                        callbackId = _context3.sent;
                        removeListener({
                          eventName: eventName,
                          callbackId: callbackId
                        }, callback);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function remove() {
                return _ref3.apply(this, arguments);
              };
            }();

            var p = new Promise(function (resolve) {
              return call.then(function () {
                return resolve({
                  remove: remove
                });
              });
            });
            p.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.warn("Using addListener() without 'await' is deprecated.");
                      _context4.next = 3;
                      return remove();

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
            return p;
          };

          var proxy = new Proxy({}, {
            get: function get(_, prop) {
              switch (prop) {
                // https://github.com/facebook/react/issues/20030
                case '$$typeof':
                  return undefined;

                case 'toJSON':
                  return function () {
                    return {};
                  };

                case 'addListener':
                  return pluginHeader ? addListenerNative : addListener;

                case 'removeListener':
                  return removeListener;

                default:
                  return createPluginMethodWrapper(prop);
              }
            }
          });
          Plugins[pluginName] = proxy;
          registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy: proxy,
            platforms: new Set([].concat(_toConsumableArray(Object.keys(jsImplementations)), _toConsumableArray(pluginHeader ? [platform] : [])))
          });
          return proxy;
        };

        var registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

        if (!cap.convertFileSrc) {
          cap.convertFileSrc = function (filePath) {
            return filePath;
          };
        }

        cap.getPlatform = getPlatform;
        cap.handleError = handleError;
        cap.isNativePlatform = isNativePlatform;
        cap.isPluginAvailable = isPluginAvailable;
        cap.pluginMethodNoop = pluginMethodNoop;
        cap.registerPlugin = registerPlugin;
        cap.Exception = CapacitorException;
        cap.DEBUG = !!cap.DEBUG;
        cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

        cap.platform = cap.getPlatform();
        cap.isNative = cap.isNativePlatform();
        return cap;
      };

      var initCapacitorGlobal = function initCapacitorGlobal(win) {
        return win.Capacitor = createCapacitor(win);
      };

      var Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
      var registerPlugin = Capacitor.registerPlugin;
      /**
       * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
       * Capacitor v3 plugins should import the plugin directly. This "Plugins"
       * export is deprecated in v3, and will be removed in v4.
       */

      var Plugins = Capacitor.Plugins;
      /**
       * Provided for backwards compatibility. Use the registerPlugin() API
       * instead, and provide the web plugin as the "web" implmenetation.
       * For example
       *
       * export const Example = registerPlugin('Example', {
       *   web: () => import('./web').then(m => new m.Example())
       * })
       *
       * @deprecated Deprecated in v3, will be removed from v4.
       */

      var registerWebPlugin = function registerWebPlugin(plugin) {
        return legacyRegisterWebPlugin(Capacitor, plugin);
      };
      /**
       * Base class web plugins should extend.
       */


      var WebPlugin = /*#__PURE__*/function () {
        function WebPlugin(config) {
          _classCallCheck(this, WebPlugin);

          this.listeners = {};
          this.windowListeners = {};

          if (config) {
            // TODO: add link to upgrade guide
            console.warn("Capacitor WebPlugin \"".concat(config.name, "\" config object was deprecated in v3 and will be removed in v4."));
            this.config = config;
          }
        }

        _createClass(WebPlugin, [{
          key: "addListener",
          value: function addListener(eventName, listenerFunc) {
            var _this2 = this;

            var listeners = this.listeners[eventName];

            if (!listeners) {
              this.listeners[eventName] = [];
            }

            this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
            // go ahead and add it

            var windowListener = this.windowListeners[eventName];

            if (windowListener && !windowListener.registered) {
              this.addWindowListener(windowListener);
            }

            var remove = /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", _this2.removeListener(eventName, listenerFunc));

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function remove() {
                return _ref5.apply(this, arguments);
              };
            }();

            var p = Promise.resolve({
              remove: remove
            });
            Object.defineProperty(p, 'remove', {
              value: function () {
                var _value = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          console.warn("Using addListener() without 'await' is deprecated.");
                          _context6.next = 3;
                          return remove();

                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                function value() {
                  return _value.apply(this, arguments);
                }

                return value;
              }()
            });
            return p;
          }
        }, {
          key: "removeAllListeners",
          value: function () {
            var _removeAllListeners = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var listener;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.listeners = {};

                      for (listener in this.windowListeners) {
                        this.removeWindowListener(this.windowListeners[listener]);
                      }

                      this.windowListeners = {};

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function removeAllListeners() {
              return _removeAllListeners.apply(this, arguments);
            }

            return removeAllListeners;
          }()
        }, {
          key: "notifyListeners",
          value: function notifyListeners(eventName, data) {
            var listeners = this.listeners[eventName];

            if (listeners) {
              listeners.forEach(function (listener) {
                return listener(data);
              });
            }
          }
        }, {
          key: "hasListeners",
          value: function hasListeners(eventName) {
            return !!this.listeners[eventName].length;
          }
        }, {
          key: "registerWindowListener",
          value: function registerWindowListener(windowEventName, pluginEventName) {
            var _this3 = this;

            this.windowListeners[pluginEventName] = {
              registered: false,
              windowEventName: windowEventName,
              pluginEventName: pluginEventName,
              handler: function handler(event) {
                _this3.notifyListeners(pluginEventName, event);
              }
            };
          }
        }, {
          key: "unimplemented",
          value: function unimplemented() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not implemented';
            return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
          }
        }, {
          key: "unavailable",
          value: function unavailable() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not available';
            return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
          }
        }, {
          key: "removeListener",
          value: function () {
            var _removeListener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(eventName, listenerFunc) {
              var listeners, index;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      listeners = this.listeners[eventName];

                      if (listeners) {
                        _context8.next = 3;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 3:
                      index = listeners.indexOf(listenerFunc);
                      this.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
                      // remove the window listener

                      if (!this.listeners[eventName].length) {
                        this.removeWindowListener(this.windowListeners[eventName]);
                      }

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function removeListener(_x, _x2) {
              return _removeListener.apply(this, arguments);
            }

            return removeListener;
          }()
        }, {
          key: "addWindowListener",
          value: function addWindowListener(handle) {
            window.addEventListener(handle.windowEventName, handle.handler);
            handle.registered = true;
          }
        }, {
          key: "removeWindowListener",
          value: function removeWindowListener(handle) {
            if (!handle) {
              return;
            }

            window.removeEventListener(handle.windowEventName, handle.handler);
            handle.registered = false;
          }
        }]);

        return WebPlugin;
      }();

      var WebView = /*#__PURE__*/registerPlugin('WebView'); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/seller-form/seller-form.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seller-form/seller-form.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSellerFormSellerFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons class=\"btn-shape\" slot=\"start\" routerLink=\"/tabs/home\" routerDirection=\"back\">\r\n        <ion-icon name=\"chevron-back-outline\" size=\"large\" color=\"success\"></ion-icon>\r\n        <ion-label color=\"danger\">{{doTranslation('BACK')}}</ion-label>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{doTranslation('PUBLISH ADs')}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding content-color\">\r\n  <ion-card class=\"ion-card card-color\">\r\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onClickPublish()\">\r\n\r\n      <ion-toolbar color=\"none\">\r\n        <ion-item lines=\"full\" color=\"none\">\r\n          <ion-label class=\"center\">{{ flag===true ? doTranslation('Seller Form'): doTranslation('Animal Form')}}</ion-label>\r\n        </ion-item>\r\n      </ion-toolbar>\r\n\r\n      <ion-toolbar color=\"none\" *ngIf=\"flag === false\">\r\n      <ion-item lines=\"full\" *ngFor=\"let control of adForm.form_1\">\r\n        <ion-text slot=\"start\" color=\"danger\" position=\"fixed\" *ngIf=\"['select'].includes(control.type)\">{{doTranslation(control.label)}}</ion-text>\r\n        <ion-label color=\"danger\" *ngIf=\"['textarea'].includes(control.type)\" position=\"floating\">{{doTranslation(control.label)}}</ion-label>\r\n        <ion-label color=\"danger\" position=\"{{['text', 'number'].includes(control.type)? 'floating':'stacked'}}\" *ngIf=\"['animalName','quotedPrice', 'weight', 'age'].includes(control.name)\">{{doTranslation(control.label)}}</ion-label>\r\n        <ion-input\r\n        *ngIf=\"['animalName', 'description', 'quotedPrice', 'weight', 'age'].includes(control.name)\"\r\n        [type]=\"control.type\" [formControlName]=\"control.name\" [value]=\"control.value\"></ion-input>\r\n        <ion-textarea\r\n        *ngIf=\"control.type === 'textarea'\" [formControlName]=\"control.name\" [value]=\"control.value\"></ion-textarea>\r\n        <ion-label color=\"danger\" position=\"{{['text', 'number'].includes(control.type)? 'floating':'stacked'}}\" *ngIf=\"['lactationNumber', 'milkPerDay'].includes(control.name) && animalTypeSelected !== 'ox'\">{{doTranslation(control.label)}}</ion-label>\r\n        <ion-input\r\n        *ngIf=\"['lactationNumber', 'milkPerDay'].includes(control.name) && animalTypeSelected !== 'ox'\"\r\n        [type]=\"control.type\" [formControlName]=\"control.name\" [value]=\"control.value\" ></ion-input>\r\n\r\n        <ion-select slot=\"end\" (ionChange)=\"onSelectAnimalType($event)\" *ngIf=\"control.name === 'type'\" interface=\"action-sheet\" [formControlName]=\"control.name\" [placeholder]=\"control.placeholder\">\r\n          <ion-select-option slot=\"end\" *ngFor=\"let option of control.animaltype; let i=index\" value=\"{{option}}\">{{option}}</ion-select-option>\r\n        </ion-select>\r\n        \r\n        <ion-select slot=\"end\" *ngIf=\"myForm.get('type').value === animalTypeSelected && control.name === 'breed'\" interface=\"action-sheet\" [formControlName]=\"control.name\" [placeholder]=\"control.placeholder\">\r\n          <ion-select-option slot=\"end\" *ngFor=\"let option of control[animalTypeSelected]\" value=\"{{option}}\">{{option}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-toolbar>\r\n\r\n    <ion-toolbar color=\"none\" *ngIf=\"flag === true\">\r\n      <ion-item lines=\"full\" *ngFor=\"let control of adForm.form_2\">\r\n        <ion-text slot=\"start\" color=\"danger\" position=\"fixed\" *ngIf=\"['select'].includes(control.type)\">{{doTranslation(control.label)}}</ion-text>\r\n        <ion-label color=\"danger\" position=\"{{['text', 'number'].includes(control.type) ? 'floating':'stacked'}}\" *ngIf=\"['ownerName', 'phone', 'imagesList', 'town'].includes(control.name)\">{{doTranslation(control.label)}}</ion-label>\r\n        <ion-input\r\n        *ngIf=\"['ownerName','phone', 'town'].includes(control.name)\"\r\n        [type]=\"control.type\" [formControlName]=\"control.name\" [value]=\"control.value\"></ion-input>\r\n         \r\n        <ion-select slot=\"end\" (ionChange)=\"onSelectState($event)\" *ngIf=\"control.name === 'state'\" interface=\"action-sheet\" [formControlName]=\"control.name\" [placeholder]=\"control.placeholder\">\r\n          <ion-select-option *ngFor=\"let state of stateList.states; let i=index\" [value]=\"state.name\">{{state.name}}</ion-select-option>\r\n        </ion-select>\r\n        <ion-select slot=\"end\" *ngIf=\"control.name === 'district'\" interface=\"action-sheet\" [formControlName]=\"control.name\" [placeholder]=\"control.placeholder\">\r\n          <ion-select-option *ngFor=\"let district of stateList.states[stateIndex].districts\" [value]=\"district.name\">{{district.name}}</ion-select-option>\r\n        </ion-select>\r\n        <!-- <ion-select slot=\"end\" *ngIf=\"['town'].includes(control.name)\" interface=\"action-sheet\" [formControlName]=\"control.name\" [placeholder]=\"control.placeholder\">\r\n          <ion-select-option *ngFor=\"let town of towns\" [value]=\"town\" value=\"{{town}}\">{{town}}</ion-select-option>\r\n        </ion-select> -->\r\n\r\n        <ion-input slot=\"end\" *ngIf=\"control.name === 'imagesList'\" id=\"imagesList\" type=\"file\" inputmode=\"file\" multiple [formControlName]=\"control.name\" \r\n                  (change)=\"onFileChange($event)\"></ion-input>\r\n        <!-- <ion-button slot=\"end\" *ngIf=\"control.name === 'imagesList'\" color=\"medium\" size=\"small\" (click)=\"presentActionSheet()\" [formControlName]=\"control.name\">\r\n          Select Image\r\n        </ion-button> -->\r\n      </ion-item>\r\n    </ion-toolbar>\r\n      <ion-button *ngIf=\"flag === false\" size=\"small\" expand=\"block\" color=\"primary\" (click)=\"onClickNext()\">{{doTranslation('Next')}}</ion-button>\r\n      <ion-button *ngIf=\"flag === true\" size=\"small\" expand=\"block\" color=\"primary\" type=\"submit\">{{doTranslation('Preview')}}</ion-button>\r\n    </form>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n\r\n<!-- <ion-content>\r\n  <app-adsform [jsonFormData]=\"formData\"></app-adsform>\r\n</ion-content> -->\r\n\r\n<!-- <ion-content class=\"ion-padding\">\r\n  <ion-card>\r\n\r\n    <ion-grid>\r\n      <ion-row class=\"pager\">\r\n        <ion-col class=\"center\" size=\"3\"\r\n          *ngFor=\"let slide of slides; let index = index; let first = first; let last = last;\">\r\n          <ion-chip\r\n            [style.background]=\"slide === currentSlide ? 'var(--ion-color-primary)':'var(--ion-color-light-shade)'\"\r\n            [style.color]=\"slide === currentSlide ? 'var(--ion-color-light)':'var(--ion-color-dark)'\">\r\n            {{ index + 1 }}\r\n          </ion-chip>\r\n          <p [style.color]=\"slide === currentSlide ? 'var(--ion-color-primary)':'var(--ion-color-medium)'\">\r\n            {{ slide }}\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n    <ion-slides [options]=\"slidesOpts\" (ionSlideDidChange)=\"onSlidesDidChange()\"\r\n      (ionSlideWillChange)=\"onSlidesChanged()\">\r\n      <ng-container *ngFor=\"let slide of slides\">\r\n        <ion-slide>\r\n\r\n          <div class=\"full-width ion-text-start\">\r\n\r\n            <form [formGroup]=\"billingForm\" #billingFormRef=\"ngForm\" novalidate *ngIf=\"slide === 'Animal'\">\r\n\r\n              <ion-list-header class=\"ion-no-padding\" style=\"min-height: auto;\" >\r\n                <ion-label class=\"ion-text-center\" color=\"primary\"> \r\n                  Animal details\r\n                </ion-label>\r\n              </ion-list-header>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item class=\"item-select\" lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Type</ion-label>\r\n                    <select class=\"text-small\" formControlName=\"type\">\r\n                      <option [value]=\"null\" disabled selected>\r\n                        Select Type\r\n                      </option>\r\n                      <option *ngFor=\"let type of types\" [value]=\"type\">\r\n                        {{ type }}\r\n                      </option>\r\n                    </select>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"shippingDeliveryTime?.errors?.required && shippingFormRef?.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item class=\"item-select\" lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Breed</ion-label>\r\n                    <select class=\"text-small\" formControlName=\"breed\">\r\n                      <option [value]=\"null\" disabled selected>\r\n                        Select Type\r\n                      </option>\r\n                      <option *ngFor=\"let breed of breeds\" [value]=\"breed\">\r\n                        {{ breed }}\r\n                      </option>\r\n                    </select>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"shippingDeliveryTime?.errors?.required && shippingFormRef?.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n              <div formGroupName=\"animalDetails\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\" class=\"labelcolor\">Animal Name</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"animalName\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingFirstName?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Description</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"description\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingLastName?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            \r\n           \r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Asking Price</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"askingPrice\" inputmode=\"numeric\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingEmail?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Weight</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"weight\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingAddress?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Age</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"age\" inputmode=\"numeric\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingCity?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Lactation</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"lactationNumber\" inputmode=\"numeric\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingState?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Milk Per Day</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"milkPerDay\" inputmode=\"numeric\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingZip?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Country code</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"country_code\" placeholder=\"two-letter code\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingCountryCode?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n\r\n            </form>\r\n\r\n            <form [formGroup]=\"shippingForm\" #shippingFormRef=\"ngForm\" novalidate *ngIf=\"slide === 'Seller-Info'\">\r\n\r\n              <ion-list-header class=\"ion-no-padding\" style=\"min-height: auto;\">\r\n                <ion-label class=\"ion-text-center\" color=\"primary\">\r\n                  Seller Information\r\n                </ion-label>\r\n              </ion-list-header>\r\n              <div formGroupName=\"sellerInformation\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Owner's Name</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"ownerName\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"shippingAddress?.errors?.required && shippingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Contact Number</ion-label>\r\n                    <input type=\"number\" formControlName=\"phone\" />\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"shippingPhone?.errors?.required && shippingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item class=\"item-select\" lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">State</ion-label>\r\n                    <select class=\"text-small\" formControlName=\"state\">\r\n                      <option [value]=\"null\" disabled selected>\r\n                        Select State\r\n                      </option>\r\n                      <option *ngFor=\"let time of times\" [value]=\"time\">\r\n                        {{ time }}\r\n                      </option>\r\n                    </select>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"shippingDeliveryTime?.errors?.required && shippingFormRef?.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n           \r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Town</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"town\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">District</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"district\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div >\r\n\r\n              <div class=\"flex align-items-center full-width ion-margin-top\" formGroupName=\"imageUrls\">\r\n\r\n                <ion-item lines=\"full\">\r\n                  <ion-label slot=\"start\" color=\"danger\" for=\"age\" for=\"imagesList\">Upload Image</ion-label>\r\n                  <ion-input class=\"ion-padding\" id=\"imagesList\" type=\"file\" inputmode=\"file\" multiple formControlName=\"imagesList\" \r\n                  (change)=\"onFileChange($event)\"></ion-input>\r\n                </ion-item>\r\n                <div class=\"ion-margin-end\">\r\n                  <h5 class=\"text-medium bold\"  class=\"labelcolor\">Upload image</h5>\r\n                 \r\n                  <ion-button strong shape=\"round\" color=\"success\" size=\"small\" (click)=\"presentActionSheet()\" formControlName=\"imagesList\">\r\n                    Select\r\n                  </ion-button>\r\n                </div>\r\n                <div >\r\n                  <img class=\"img-thumb\" [src]=\"imagePath\" *ngIf=\"imagePath\" >\r\n                </div>\r\n              </div>\r\n\r\n            </form>\r\n\r\n            <div [hidden]=\"slide !== 'Summary'\">\r\n              <ion-list-header class=\"ion-no-padding\" style=\"min-height: auto;\">\r\n                <ion-label class=\"ion-text-center\" color=\"primary\">\r\n                  Ads Details\r\n                </ion-label>\r\n              </ion-list-header>\r\n\r\n              <div *ngIf=\"shippingForm.valid\">\r\n                <p class=\"text-medium bold ion-text-uppercase\">\r\n                  Owner's Information\r\n                </p>\r\n                <div class=\"divider\"></div>\r\n\r\n                <div  *ngFor=\"let control of shippingForm.controls | keyvalue: originalOrder\">\r\n                  <p style=\"color: coral;\" class=\"text-medium margin-v-sm\">\r\n                    <span class=\"bold\" class=\"labelcolor\">\r\n                      {{ control.key.replace('_', ' ') | titlecase }}:\r\n                    </span>\r\n                    {{ control.value.value || '--' }}\r\n                  </p>\r\n                </div>\r\n                <p class=\"text-medium margin-v-sm\" *ngIf=\"imagePath\">\r\n                  <span class=\"bold\">\r\n                    Attachment:\r\n                  </span>\r\n                  <img class=\"img-thumb\" [src]=\"imagePath\">\r\n                </p>\r\n              </div>\r\n\r\n              <div *ngIf=\"billingForm.valid\">\r\n                <div class=\"divider\"></div>\r\n                <p class=\"text-medium bold ion-text-uppercase\">\r\n                  Animal details\r\n                </p>\r\n                <div class=\"divider\"></div>\r\n                <p class=\"text-medium margin-v-sm\" style=\"color: coral;\"\r\n                  *ngFor=\"let control of billingForm.controls | keyvalue: originalOrder\">\r\n                  <span class=\"bold\" style=\"color:azure\">\r\n                    {{ control.key.replace('_', ' ') | titlecase }}:\r\n                  </span>\r\n                  {{ control.value.value || '--' }}\r\n                </p>\r\n              </div>\r\n              <ion-button expand=\"full\" color=\"success\" (click)=\"showJSON()\"></ion-button>\r\n              <div>\r\n                <pre>\r\n                  {{ showJSONRawValues() | json}}\r\n                </pre>\r\n              </div>\r\n\r\n              <div class=\"divider\"></div>\r\n              <p class=\"text-medium bold ion-text-uppercase\">\r\n                Items\r\n              </p>\r\n              <div class=\"divider\"></div> \r\n              <ion-list>\r\n                <ion-item *ngFor=\"let item of order?.items\">\r\n                  <ion-label>\r\n                    <h2 class=\"text-medium bold\">{{ item.name }}</h2>\r\n                  </ion-label>\r\n                  <div>\r\n                    <span class=\"text-medium\">{{ item.amount | currency}}</span>\r\n                  </div>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>\r\n                    <h2 class=\"text-medium bold\">Subtotal</h2>\r\n                  </ion-label>\r\n                  <div>\r\n                    <span class=\"text-medium\">{{ order?.subtotal | currency}}</span>\r\n                  </div>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>\r\n                    <h2 class=\"text-medium bold\">Shipping & Handling</h2>\r\n                  </ion-label>\r\n                  <div>\r\n                    <span class=\"text-medium\">{{ order?.shippingFee | currency}}</span>\r\n                  </div>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>\r\n                    <h2 class=\"text-medium bold\">Total</h2>\r\n                  </ion-label>\r\n                  <div>\r\n                    <span class=\"text-medium bold\">{{ order?.total | currency}}</span>\r\n                  </div>\r\n                </ion-item>\r\n              </ion-list>\r\n            </div>\r\n            \r\n\r\n            <form [formGroup]=\"paymentForm\" #paymentFormRef=\"ngForm\" novalidate *ngIf=\"slide === 'Publish'\">\r\n\r\n\r\n              <ion-list-header class=\"ion-no-padding\" style=\"min-height: auto;\">\r\n                <ion-label class=\"ion-text-center\" color=\"primary\">\r\n                  Pay order\r\n                </ion-label>\r\n              </ion-list-header>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Card number</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"number\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"paymentNumber?.errors?.required && paymentFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row> \r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Expiration</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"expiration\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"paymentExpiration?.errors?.required && paymentFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">CVV</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"cvv\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"paymentCvv?.errors?.required && paymentFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <div class=\"ion-text-center\">\r\n                <ion-button type=\"button\" style=\"width: 200px;\" class=\"ion-margin-vertical\" strong size=\"large\"\r\n                  shape=\"round\"  color=\"success\" (click) = \"dismis()\">\r\n                  (click)=\"onNextButtonTouched()\r\n                 Publishing..\r\n                </ion-button>\r\n              </div>\r\n\r\n              <div class=\"ion-text-center\">\r\n                <ion-button type=\"button\" style=\"width: 200px;\" class=\"ion-margin-vertical\" strong size=\"large\"\r\n                  shape=\"round\" color=\"light\" (click)=\"onBackButtonTouched()\">\r\n                  Cancel\r\n                </ion-button>\r\n              </div>\r\n\r\n            </form>\r\n\r\n          </div>\r\n\r\n        </ion-slide>\r\n\r\n      </ng-container>\r\n\r\n    </ion-slides>\r\n\r\n  </ion-card>\r\n\r\n  <ion-button expand=\"block\" color=\"danger\" [style.visibility]=\"isEnd ? 'hidden' : ''\"\r\n        (click)=\"onNextButtonTouched()\">Next</ion-button>\r\n\r\n</ion-content>\r\n -->\r\n";
      /***/
    },

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


      __webpack_exports__["default"] = "<ion-header class=\"header\">\r\n  <ion-toolbar class=\"navbar\" color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button>\r\n        <ion-icon size=\"large\" name=\"menu\" color=\"danger\"></ion-icon>\r\n      </ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-thumbnail slot=\"start\">\r\n      <img src=\"../../assets/welcome.png\"/>\r\n    </ion-thumbnail>\r\n    <ion-label (click)=\"navigateTO('home')\">{{doTranslation('HOME')}}</ion-label>\r\n    <ion-label (click)=\"navigateTO('profile')\">{{doTranslation('PROFILE')}}</ion-label>\r\n    <ion-label (click)=\"navigateTO('my-cart')\">{{doTranslation('MY CART')}}</ion-label>\r\n    <ion-label (click)=\"navigateTO('favorite')\">{{doTranslation('FAVORITE')}}</ion-label>\r\n    <ion-label (click)=\"navigateTO('my-orders')\">{{doTranslation('ORDERS')}}</ion-label>\r\n\r\n    <ion-icon size=\"large\" slot=\"end\" name=\"notifications\" color=\"danger\"></ion-icon>\r\n    <ion-icon size=\"large\" slot=\"end\" color=\"danger\" name=\"log-out\"></ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"buy\">\r\n      <ion-icon name=\"cart-outline\"></ion-icon>\r\n      <ion-label>Buy</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"sell\">\r\n      <ion-icon name=\"pricetag-outline\"></ion-icon>\r\n      <ion-label>Sell</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"nutrition\">\r\n      <ion-icon name=\"bandage-outline\"></ion-icon>\r\n      <ion-label>Medicine</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"feed\">\r\n      <ion-icon name=\"cafe-outline\"></ion-icon>\r\n      <ion-label>Feed</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"insemination\">\r\n      <ion-icon name=\"git-branch-outline\"></ion-icon>\r\n      <ion-label>Insemination</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs> -->\r\n\r\n<ion-tabs class=\"none\">\r\n    <ion-tab-bar class=\"content-color\" slot=\"bottom\">\r\n    <ion-tab-button tab=\"landing\">\r\n      <ion-icon size=\"large\" name=\"home\" color=\"danger\"></ion-icon>\r\n      <ion-label color=\"danger\">{{doTranslation('HOME')}}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"myads\">\r\n      <ion-icon size=\"large\" name=\"newspaper\" color=\"success\"></ion-icon>\r\n      <ion-label color=\"success\">{{doTranslation('MY ADs')}}</ion-label>\r\n    </ion-tab-button>\r\n    \r\n    <ion-tab-button tab=\"blog-feedback\">\r\n      <ion-fab vertical=\"center\" horizontal=\"center\" edge=\"true\" translucent=\"true\">\r\n        <ion-fab-button color=\"medium\" class=\"background\">  <!-- (click)=popSellerForm() -->\r\n          <ion-icon size=\"large\" name=\"book\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </ion-tab-button>\r\n    \r\n    <!-- <svg height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"#1f1f1f\" fill-rule=\"evenodd\"></path></svg> -->\r\n    \r\n    <ion-tab-button tab=\"medicines\">\r\n      <ion-icon size=\"large\" name=\"medkit\" color=\"success\"></ion-icon>\r\n      <ion-label color=\"success\">{{doTranslation('VET PHARMA')}}</ion-label>\r\n    </ion-tab-button>\r\n    \r\n    <ion-tab-button tab=\"profile\">\r\n      <ion-icon size=\"large\" color=\"light\" name=\"person-circle\"></ion-icon>\r\n      <ion-label color=\"light\">{{doTranslation('PROFILE')}}</ion-label>\r\n    </ion-tab-button>\r\n    \r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n\r\n<ion-footer class=\"footer\">\r\n  <ion-toolbar class=\"custom-toolbar card-color\">\r\n    <ion-text color=\"danger\">MRGAMI Technologies PVT. LTD. 2014-2021 &#169;</ion-text>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/seller-form/seller-form.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/seller-form/seller-form.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSellerFormSellerFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\np {\n  font-size: 70%;\n}\n\n.ion-card {\n  margin: 0;\n  padding: 0;\n}\n\nion-item {\n  --background: transparent;\n}\n\n.pager {\n  border-bottom: 1px solid silver;\n}\n\n.form {\n  margin: 0;\n  padding: 0;\n}\n\nion-slides {\n  margin: 0;\n  padding: 0;\n}\n\nion-slide {\n  margin: 0;\n  padding: 0;\n}\n\nion-title {\n  color: white;\n}\n\nion-input {\n  color: white;\n}\n\nion-select {\n  width: 100%;\n  --ion-text-color: white !important;\n  --background: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyLWZvcm0vc2VsbGVyLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtMQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFqTEY7O0FBb0xBO0VBQ0UsY0FBQTtBQWpMRjs7QUFvTEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWpMRjs7QUFvTEE7RUFDRSx5QkFBQTtBQWpMRjs7QUFvTEE7RUFDRSwrQkFBQTtBQWpMRjs7QUFvTEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWpMRjs7QUFvTEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWpMRjs7QUFvTEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWpMRjs7QUFvTEE7RUFDRSxZQUFBO0FBakxGOztBQW9MQTtFQUNFLFlBQUE7QUFqTEY7O0FBb0xBO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7QUFqTEYiLCJmaWxlIjoic3JjL2FwcC9zZWxsZXItZm9ybS9zZWxsZXItZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24taXRlbSB7XHJcbi8vICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbi8vICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XHJcbi8vICAgICBpb24tbGFiZWwge1xyXG4vLyAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbi8vICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuLy8gICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgfVxyXG4gIFxyXG4vLyAgICAgaW9uLWlucHV0LFxyXG4vLyAgICAgaW9uLXRleHRhcmVhLFxyXG4vLyAgICAgc2VsZWN0LFxyXG4vLyAgICAgaW5wdXQge1xyXG4vLyAgICAgICBjb2xvcjogY29yYWw7XHJcbi8vICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmNiY2I7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuLy8gICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIGlvbi1jb2wge1xyXG4vLyAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMCA1cHg7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIGlvbi1zbGlkZXMge1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG4vLyAgICAgaW9uLXNsaWRlIHtcclxuLy8gICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbi8vICAgICB9XHJcbiAgXHJcbi8vICAgICAuc3dpcGVyLXNsaWRlIHtcclxuLy8gICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4vLyAgICAgfVxyXG4gIFxyXG4vLyAgICAgLnN3aXBlci1zbGlkZS5zd2lwZXItc2xpZGUtYWN0aXZlIHtcclxuLy8gICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbiAgXHJcbi8vICAgaW9uLWxpc3QtaGVhZGVyIGlvbi1sYWJlbCB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICBzZWxlY3QsXHJcbi8vICAgaW5wdXQge1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBwYWRkaW5nOiA4cHggNnB4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAubGluZSB7XHJcbi8vICAgICBoZWlnaHQ6IDNweDtcclxuLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbi8vICAgICB0b3A6IDE0cHg7XHJcbi8vICAgICB6LWluZGV4OiAtMTtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLmltZy10aHVtYiB7XHJcbi8vICAgICB3aWR0aDogNDVweDtcclxuLy8gICAgIGhlaWdodDogNTVweDtcclxuLy8gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgfVxyXG4gIFxyXG5cclxuLy8gICAubGFiZWxjb2xvcntcclxuLy8gICAgICAgY29sb3I6IGF6dXJlO1xyXG4vLyAgIH1cclxuXHJcbiAgXHJcbi8vIC5mbGV4IHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyB9XHJcblxyXG4vLyAuZnVsbC13aWR0aCB7XHJcbi8vICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmFic29sdXRlIHtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vIH1cclxuXHJcbi8vIC5yZWxhdGl2ZSB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyB9XHJcblxyXG4vLyAuYWxpZ24tc2VsZi1jZW50ZXIge1xyXG4vLyAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmFsaWduLXNlbGYtZW5kIHtcclxuLy8gICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuLy8gfVxyXG5cclxuLy8gLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAuanVzdGlmeS1jb250ZW50LXNwYWNlLWFyb3VuZCB7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbi8vIH1cclxuXHJcbi8vIC5qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtZXZlbmx5IHtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuLy8gfVxyXG5cclxuLy8gLmp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuIHtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vIH1cclxuXHJcbi8vIC5qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtZW5kIHtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4vLyB9XHJcblxyXG4vLyAuYWxpZ24taXRlbXMtY2VudGVyIHtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAuZmxleC1jb2x1bW4ge1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vIH1cclxuXHJcbi8vIC5mbGV4LWNlbnRlciB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGhlaWdodDogMTAwJTtcclxuLy8gfVxyXG5cclxuLy8gLnRleHQtdGlueSB7XHJcbi8vICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC50ZXh0LXNtYWxsIHtcclxuLy8gICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnRleHQtbWVkaXVtIHtcclxuLy8gICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnRleHQtbm9ybWFsIHtcclxuLy8gICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnRleHQtbGFyZ2Uge1xyXG4vLyAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAudGV4dC14bGFyZ2Uge1xyXG4vLyAgIGZvbnQtc2l6ZTogMzZweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAudGV4dC14eGxhcmdlIHtcclxuLy8gICBmb250LXNpemU6IDQ4cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnJhZGl1cyB7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5kaXZpZGVyIHtcclxuLy8gICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4vLyAgIG1hcmdpbjogOHB4IDA7XHJcbi8vICAgaGVpZ2h0OiAxcHg7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuXHJcbi8vIC5ib2xkIHtcclxuLy8gICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gfVxyXG5cclxuLmNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxucHtcclxuICBmb250LXNpemU6IDcwJTtcclxufVxyXG5cclxuLmlvbi1jYXJke1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFnZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcclxufVxyXG5cclxuLmZvcm17XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXN7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWlvbi10ZXh0LWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/seller-form/seller-form.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/seller-form/seller-form.page.ts ***!
      \*************************************************/

    /*! exports provided: SellerFormPage */

    /***/
    function srcAppSellerFormSellerFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerFormPage", function () {
        return SellerFormPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/camera */
      "./node_modules/@capacitor/camera/dist/esm/index.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _services_seller_form_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/seller-form-api.service */
      "./src/app/services/seller-form-api.service.ts");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../data.service */
      "./src/app/data.service.ts");
      /* harmony import */


      var _services_adform_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/adform.json */
      "./src/app/services/adform.json");

      var _services_adform_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../services/adform.json */
      "./src/app/services/adform.json", 1);
      /* harmony import */


      var _pages_preview_modal_preview_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../pages/preview-modal/preview-modal.page */
      "./src/app/pages/preview-modal/preview-modal.page.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _services_translate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/translate.service */
      "./src/app/services/translate.service.ts");
      /* eslint-disable @typescript-eslint/naming-convention */


      var SellerFormPage = /*#__PURE__*/function () {
        function SellerFormPage(actionSheetCtrl, navCtrl, sanitizer, modalCtrl, alertCtrl, sellerFormApiService, toastController, dataService, fb, http, translateService) {
          _classCallCheck(this, SellerFormPage);

          this.actionSheetCtrl = actionSheetCtrl;
          this.navCtrl = navCtrl;
          this.sanitizer = sanitizer;
          this.modalCtrl = modalCtrl;
          this.alertCtrl = alertCtrl;
          this.sellerFormApiService = sellerFormApiService;
          this.toastController = toastController;
          this.dataService = dataService;
          this.fb = fb;
          this.http = http;
          this.translateService = translateService;
          this.adForm = _services_adform_json__WEBPACK_IMPORTED_MODULE_8__;
          this.myForm = this.fb.group({});
          this.flag = false;
          this.order = {
            id: 1,
            items: [{
              id: 1,
              name: "Denim T-Shirt",
              amount: 15.0
            }, {
              id: 1,
              name: "Denim Pants",
              amount: 5.0
            }, {
              id: 1,
              name: "Black T-Shirt",
              amount: 5.0
            }],
            subtotal: 25.0,
            shippingFee: 5.0,
            total: 30.0
          };
          this.states = [];
          this.districts = [];
          this.towns = [];
          this.slidesOpts = {
            allowTouchMove: false,
            autoHeight: true
          };
          this.isBeginning = true;
          this.isEnd = false;
          this.imagesList = [""];

          this.convertBlobToBase64 = function (blob) {
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.onerror = reject;

              reader.onload = function () {
                return resolve(reader.result);
              };

              reader.readAsDataURL(blob);
            });
          };

          this.originalOrder = function () {
            return 0;
          };
        }

        _createClass(SellerFormPage, [{
          key: "testup",
          value: function testup(event) {
            this.files = event.target.files;
            console.log("Files/Uploaded Images" + this.files);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.myForm = this.fb.group({});

            if (this.flag === false) {
              this.createForm(this.adForm.form_1);
            }

            this.http.get("https://gist.githubusercontent.com/Dhaneshmonds/1b0ca257b1c34e4842528dcb826ee880/raw/3a7d98354cc43158162eb47d990073105788f348/IndianStatesDistricts.json").subscribe(function (res) {
              console.log("res- ", res);
              _this4.stateList = res;
            });
            this.buildSlides();
            this.states = ["Karnatak", "Maharasthra", "Tamilnadu", "Kerla", "UP"];
            this.districts = ["Bangalore", "Mumbai", "Tuticorin", "Amravati", "Lucknow"];
            this.towns = ["Bangalore", "Mumbai", "Tuticorin", "Amravati", "Lucknow"];
            this.types = ["Cow", "Buffalo", "Ox"];
            this.breeds = ["Sindhi", "Jersey", "Desi"];
          }
        }, {
          key: "onSelectAnimalType",
          value: function onSelectAnimalType(event) {
            this.animalTypeSelected = event.detail.value;
            console.log("animalTypeSelected- ", this.animalTypeSelected);
          }
        }, {
          key: "onSelectState",
          value: function onSelectState(event) {
            console.log("event- ", event);
            this.stateSelected = event.detail.value;

            for (var key in this.stateList.states) {
              if (this.stateList.states[key].name === this.stateSelected) {
                this.stateIndex = key;
              }
            }
          }
        }, {
          key: "createForm",
          value: function createForm(controls) {
            var _iterator = _createForOfIteratorHelper(controls),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var control = _step.value;
                var formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
                this.myForm.addControl(control.name, formControl);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.log("form value- ", this.myForm.value);
            console.log("form validity- ", this.myForm.valid);
            this.myForm.reset();
          } // ionViewDidEnter() {
          //   this.ionSlides.update(); //This resolved the issue of content not showing up
          //   // this.setupForm();
          //   // this.buildSlides();
          //   // this.times = ['Karnatak', 'Maharasthra', 'Tamilnadu', 'Kerla', 'UP',];
          //   // this.types = ['Cow', 'Buffalo', 'Ox',];
          //   //this.ionSlides.updateAutoHeight();
          //   //console.log("ionViewDidEnter");
          //   // this.setupForm();
          //   // this.buildSlides();
          //   // this.times = ['Karnatak', 'Maharasthra', 'Tamilnadu', 'Kerla', 'UP',];
          //   // this.types = ['Cow', 'Buffalo', 'Ox',];
          // }

        }, {
          key: "buildSlides",
          value: function buildSlides() {
            var slides = ["Animal", "Seller-Info", "Summary", "Publish"];
            this.currentSlide = slides[0];
            this.slides = slides;
          }
        }, {
          key: "onClickNext",
          value: function onClickNext() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.flag = true;

                      if (this.flag === true) {
                        this.createForm(this.adForm.form_2);
                      }

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "onClickPublish",
          value: function onClickPublish() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this5 = this;

              var adformData;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      //  let json1 = this.billingForm.getRawValue();
                      //  let json2 = this.shippingForm.getRawValue();
                      //  let json = {...json1,...json2}
                      // let adformData = this.myForm.getRawValue();
                      adformData = {
                        animalDetails: {
                          age: this.myForm.get("age").value,
                          animalName: this.myForm.get("animalName").value,
                          askingPrice: this.myForm.get("quotedPrice").value,
                          description: this.myForm.get("description").value,
                          lactationNumber: this.myForm.get("lactationNumber").value,
                          milkPerDay: this.myForm.get("milkPerDay").value,
                          weight: this.myForm.get("weight").value
                        },
                        breed: this.myForm.get("breed").value,
                        imageUrls: {
                          imagesList: this.myForm.get("imagesList").value
                        },
                        sellerInformation: {
                          district: this.myForm.get("district").value,
                          ownerName: this.myForm.get("ownerName").value,
                          phone: this.myForm.get("phone").value,
                          state: this.myForm.get("state").value,
                          town: this.myForm.get("town").value
                        },
                        type: this.myForm.get("type").value
                      };
                      console.log("adform json data- ", adformData); //  const newForm2 =  {JSON.stringify(this.billingForm.getRawValue()),JSON.stringify(this.shippingForm.getRawValue())}

                      this.dat = JSON.stringify(adformData); // console.log(json);
                      // console.log(JSON.stringify(json));

                      console.log("stringify adformData- ", this.dat);
                      this.sellerFormApiService.saveData(this.dat).subscribe(function (dat) {
                        _this5.dat = dat;
                        console.log("stringify adformData_1- ", _this5.dat);
                      });
                      this.myForm.reset();
                      this.presentToast();
                      this.presentModal(adformData);
                      this.flag = false; // return await this.modalCtrl.dismiss();

                    case 9:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "setupForm",
          value: function setupForm() {
            this.billingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              animalDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                age: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("5", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                animalName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("Sakhu", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                askingPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("50000", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("Milking Everyday", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                lactationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("Yes", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                milkPerDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("3", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("10", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
              }),
              // animal_name: new FormControl('Sakhu', Validators.required),
              // description: new FormControl('Milking Everyday', Validators.required),
              type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
              breed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("")
            }); // this.shippingForm = new FormGroup({
            //   sellerInformation: new FormGroup({
            //     ownerName: new FormControl('Prathamesh', Validators.required),
            //   phone: new FormControl('+919860067118', Validators.required),
            //   state: new FormControl(null, Validators.required),
            //   town: new FormControl(''),
            //   district: new FormControl(''),
            //  // message: new FormControl(''),
            //   }),
            //   imageUrls: new FormGroup({
            //     imagesList: new FormControl()
            //   }),
            // });

            this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
              // eslint-disable-next-line id-blacklist
              number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
              expiration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
              cvv: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            });
          }
        }, {
          key: "onSlidesChanged",
          value: function onSlidesChanged() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var index;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.ionSlides.getActiveIndex();

                    case 2:
                      index = _context11.sent;
                      this.currentSlide = this.slides[index];
                      _context11.next = 6;
                      return this.ionSlides.isBeginning();

                    case 6:
                      this.isBeginning = _context11.sent;
                      _context11.next = 9;
                      return this.ionSlides.isEnd();

                    case 9:
                      this.isEnd = _context11.sent;

                    case 10:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "onSlidesDidChange",
          value: function onSlidesDidChange() {
            this.ionContent.scrollToTop();
          }
        }, {
          key: "onBackButtonTouched",
          value: function onBackButtonTouched() {
            this.ionSlides.slidePrev();
            this.ionContent.scrollToTop();
          } // onNextButtonTouched() {
          //   if (this.currentSlide === 'Animal') {
          //     this.billingFormRef.onSubmit(undefined);
          //     if (this.billingForm.valid) {
          //       this.ionSlides.slideNext();
          //       this.ionContent.scrollToTop();
          //     }
          //   } else if (this.currentSlide === 'Seller-Info') {
          //     this.shippingFormRef.onSubmit(undefined);
          //     if (this.shippingForm.valid) {
          //       this.ionSlides.slideNext();
          //       this.ionContent.scrollToTop();
          //     }
          //   } else if (this.currentSlide === 'Publish') {
          //     this.paymentFormRef.onSubmit(undefined);
          //     if (this.paymentForm.valid) {
          //       this.navCtrl.navigateRoot('/thanks', {
          //         animated: true,
          //         animationDirection: 'forward',
          //       });
          //     }
          //   }  else {
          //     this.ionSlides.slideNext();
          //     this.ionContent.scrollToTop();
          //   }
          // }

        }, {
          key: "onFileChange",
          value: function onFileChange(event) {
            var _this6 = this;

            if (event.target.files && event.target.files[0]) {
              var filesAmount = event.target.files.length;
              console.log("Files", filesAmount);

              for (var i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function (event) {
                  //console.log('Before ImageList', event.target.result);
                  _this6.imagesList.push(event.target.result);

                  console.log("ImageList", _this6.imagesList);
                };

                this.myForm.patchValue({
                  imagesList: this.imagesList
                });
                reader.readAsDataURL(event.target.files[i]);

                if (i == filesAmount - 1) {
                  this.imagesList.shift();
                  console.log("ImageList After", this.imagesList);
                }

                console.log("before", this.imagesList.length);
              }

              console.log("after", this.imagesList.length);
            }
          }
        }, {
          key: "chooseImage",
          value: function chooseImage(source) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var image, safeUrl, response, blob, base64;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;
                      _context12.next = 3;
                      return _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"].getPhoto({
                        quality: 70,
                        width: 600,
                        height: 600,
                        preserveAspectRatio: true,
                        allowEditing: true,
                        correctOrientation: true,
                        source: source,
                        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__["CameraResultType"].Uri
                      });

                    case 3:
                      image = _context12.sent;
                      safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath);
                      this.imagePath = safeUrl;
                      console.log("Before Imagepath", this.imagePath);
                      _context12.next = 9;
                      return fetch(image.webPath);

                    case 9:
                      response = _context12.sent;
                      _context12.next = 12;
                      return response.blob();

                    case 12:
                      blob = _context12.sent;
                      _context12.next = 15;
                      return this.convertBlobToBase64(blob);

                    case 15:
                      base64 = _context12.sent;
                      this.imagesList.push(base64);
                      console.log(this.imagesList);
                      this.imagePath = this.imagesList;
                      console.log("After Imagepath", this.imagePath); // Send encoded string to server...

                      _context12.next = 25;
                      break;

                    case 22:
                      _context12.prev = 22;
                      _context12.t0 = _context12["catch"](0);
                      console.warn(_context12.t0);

                    case 25:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[0, 22]]);
            }));
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this7 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.actionSheetCtrl.create({
                        header: "Choose an option",
                        buttons: [{
                          text: "Photo Library",
                          handler: function handler() {
                            _this7.chooseImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_4__["CameraSource"].Photos);
                          }
                        }, {
                          text: "Camera",
                          handler: function handler() {
                            _this7.chooseImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_4__["CameraSource"].Camera);
                          }
                        }, {
                          text: "Cancel",
                          role: "cancel"
                        }]
                      });

                    case 2:
                      actionSheet = _context13.sent;
                      _context13.next = 5;
                      return actionSheet.present();

                    case 5:
                      return _context13.abrupt("return", _context13.sent);

                    case 6:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "showJSON",
          value: function showJSON() {
            alert(JSON.stringify(this.shippingForm.getRawValue()));
          }
        }, {
          key: "showJSONRawValues",
          value: function showJSONRawValues() {
            return this.shippingForm.getRawValue();
          } // saveAllData() {
          //   //alert(JSON.stringify(this.data3.getRawValue()));
          //   this.dat = JSON.stringify(this.data3.getRawValue());
          //   this.sellerFormApiService.saveData(this.dat).subscribe((dat) => {
          //     this.dat = dat;
          //     console.log(this.dat);
          //   });
          //   this.presentToast();
          // }

        }, {
          key: "getAllads",
          value: function getAllads() {
            var _this8 = this;

            this.sellerFormApiService.getData().subscribe(function (data2) {
              _this8.data2 = data2;
              console.log(data2);
            }); // console.log('27lines',this.sellerFormApiService.data);
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var toast, _yield$toast$onDidDis, role;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.toastController.create({
                        message: this.doTranslation('AD CREATED SUCCESSFULLY'),
                        position: "top",
                        duration: 5000,
                        color: "success",
                        buttons: [{
                          side: "end",
                          icon: "checkmark-done-sharp",
                          handler: function handler() {
                            console.log("Favorite clicked");
                          }
                        }]
                      });

                    case 2:
                      toast = _context14.sent;
                      _context14.next = 5;
                      return toast.present();

                    case 5:
                      _context14.next = 7;
                      return toast.onDidDismiss();

                    case 7:
                      _yield$toast$onDidDis = _context14.sent;
                      role = _yield$toast$onDidDis.role;
                      console.log("onDidDismiss resolved with role", role);

                    case 10:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "presentModal",
          value: function presentModal(adformdata) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var modal;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      console.log("adformdata in modal- ", adformdata);
                      _context15.next = 3;
                      return this.modalCtrl.create({
                        component: _pages_preview_modal_preview_modal_page__WEBPACK_IMPORTED_MODULE_9__["PreviewModalPage"],
                        componentProps: {
                          data: adformdata
                        }
                      });

                    case 3:
                      modal = _context15.sent;
                      _context15.next = 6;
                      return modal.present();

                    case 6:
                      return _context15.abrupt("return", _context15.sent);

                    case 7:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
            return translateText;
          }
        }, {
          key: "billingFirstName",
          get: function get() {
            return this.billingForm.get("animal_name");
          }
        }, {
          key: "billingLastName",
          get: function get() {
            return this.billingForm.get("description");
          }
        }, {
          key: "billingTypes",
          get: function get() {
            return this.billingForm.get("cattle_types");
          }
        }, {
          key: "billingEmail",
          get: function get() {
            return this.billingForm.get("asking_price");
          }
        }, {
          key: "billingAddress",
          get: function get() {
            return this.billingForm.get("weight");
          }
        }, {
          key: "billingCity",
          get: function get() {
            return this.billingForm.get("age");
          }
        }, {
          key: "billingState",
          get: function get() {
            return this.billingForm.get("lactation");
          }
        }, {
          key: "billingZip",
          get: function get() {
            return this.billingForm.get("milk_perday");
          }
        }, {
          key: "billingCountryCode",
          get: function get() {
            return this.billingForm.get("country_code");
          }
        }, {
          key: "shippingAddress",
          get: function get() {
            return this.shippingForm.get("owners_name");
          }
        }, {
          key: "shippingPhone",
          get: function get() {
            return this.shippingForm.get("phone");
          }
        }, {
          key: "shippingDeliveryTime",
          get: function get() {
            return this.shippingForm.get("state");
          }
        }, {
          key: "paymentNumber",
          get: function get() {
            return this.paymentForm.get("number");
          }
        }, {
          key: "paymentExpiration",
          get: function get() {
            return this.paymentForm.get("expiration");
          }
        }, {
          key: "paymentCvv",
          get: function get() {
            return this.paymentForm.get("cvv");
          }
        }]);

        return SellerFormPage;
      }();

      SellerFormPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _services_seller_form_api_service__WEBPACK_IMPORTED_MODULE_6__["SellerFormApiService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
        }, {
          type: _services_translate_service__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
        }];
      };

      SellerFormPage.propDecorators = {
        ionContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
            "static": true
          }]
        }],
        ionSlides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], {
            "static": false
          }]
        }],
        billingFormRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["billingFormRef", {
            "static": false
          }]
        }],
        shippingFormRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["shippingFormRef", {
            "static": false
          }]
        }],
        paymentFormRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["paymentFormRef", {
            "static": false
          }]
        }]
      };
      SellerFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-seller-form",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./seller-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/seller-form/seller-form.page.html"))["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./seller-form.page.scss */
        "./src/app/seller-form/seller-form.page.scss"))["default"]]
      })], SellerFormPage);
      /***/
    },

    /***/
    "./src/app/services/seller-form-api.service.ts":
    /*!*****************************************************!*\
      !*** ./src/app/services/seller-form-api.service.ts ***!
      \*****************************************************/

    /*! exports provided: SellerFormApiService */

    /***/
    function srcAppServicesSellerFormApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerFormApiService", function () {
        return SellerFormApiService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      ;

      var SellerFormApiService = /*#__PURE__*/function () {
        function SellerFormApiService(http) {
          _classCallCheck(this, SellerFormApiService);

          this.http = http; // private baseUrl = 'http://localhost:8080/api/v1/ads';

          this.baseUrl = 'http://mrgami-env.eba-e7nbfgvg.ap-south-1.elasticbeanstalk.com/api/v1/ads';
          this.userId = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        }

        _createClass(SellerFormApiService, [{
          key: "saveData",
          value: function saveData(dat) {
            var headers = {
              'content-type': 'application/json'
            };
            var body = dat;
            console.log(dat['imageUrls']);
            console.log('bodyline63', body);
            return this.http.post(this.baseUrl + '/ad', body, {
              headers: headers
            });
          }
        }, {
          key: "getData",
          value: function getData() {
            console.log('getdata line 48', this.http.get(this.baseUrl + '/all')); // return this.http.get<any>(this.baseUrl + '/all');

            return this.http.get(this.baseUrl + '/' + this.userId.value);
          } //  getData(): Observable<any>{
          //    console.log('getdata line 48',this.http.get<any>(this.baseUrl + '/all'));
          //    return this.http.get<any>(this.baseUrl + '/all');
          //  }

        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 0) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error("Backend returned code ".concat(error.status, ", body was: "), error.error);
            } // Return an observable with a user-facing error message.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
          }
        }]);

        return SellerFormApiService;
      }();

      SellerFormApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      SellerFormApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SellerFormApiService);
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


      var _services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.guard */
      "./src/app/services/auth.guard.ts");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/tabs/tabs.page.ts"); // import { IntroGuard } from '../guards/intro.guard';
      // import { AutoLoginGuard } from '../guards/auto-login.guard';


      var routes = [{
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
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
          path: 'blog-feedback',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-blog-feedback-blog-feedback-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-blog-feedback-blog-feedback-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/blog-feedback/blog-feedback.module */
            "./src/app/pages/blog-feedback/blog-feedback.module.ts")).then(function (m) {
              return m.BlogFeedbackPageModule;
            });
          }
        }, // { path: 'welcome',
        // loadChildren: () => import('../welcome/welcome.module').then( m => m.WelcomePageModule)},
        // {
        //   path: 'welcome',
        //   loadChildren: () => import('../welcome/welcome.module').then( m => m.WelcomePageModule),
        //   children:[
        //     {
        //       path: 'login',
        //       loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
        //     },
        //     {
        //       path: 'signup',
        //       loadChildren: () => import('../signup/signup.module').then( m => m.SignupPageModule)
        //     },
        //   ],
        // },
        {
          path: 'seller-form',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | seller-form-seller-form-module */
            "seller-form-seller-form-module").then(__webpack_require__.bind(null,
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
          path: 'animal-feeds',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | pages-animal-feeds-animal-feeds-module */
            [__webpack_require__.e("common"), __webpack_require__.e("pages-animal-feeds-animal-feeds-module")]).then(__webpack_require__.bind(null,
            /*! ../pages/animal-feeds/animal-feeds.module */
            "./src/app/pages/animal-feeds/animal-feeds.module.ts")).then(function (m) {
              return m.AnimalFeedsPageModule;
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
          },
          canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["IsAuthenticated"]]
        }, {
          path: 'landing',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | landing-landing-module */
            "landing-landing-module").then(__webpack_require__.bind(null,
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
          },
          canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["IsAuthenticated"]]
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
          redirectTo: 'tabs/landing',
          pathMatch: 'full'
        }]
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
      })], TabsPageRoutingModule); // import { NgModule } from '@angular/core';
      // import { RouterModule, Routes } from '@angular/router';
      // import { AuthGuard } from '../services/auth.guard';
      // import { TabsPage } from './tabs.page';
      // const routes: Routes = [
      //{
      //   path: '',
      //   component: TabsPage,
      //   children: [
      // {
      //   path: 'home',
      //   loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      // },
      // { path: 'welcome',
      // loadChildren: () => import('../welcome/welcome.module').then( m => m.WelcomePageModule)},
      // {
      //   path: 'welcome',
      //   loadChildren: () => import('../welcome/welcome.module').then( m => m.WelcomePageModule),
      //   children:[
      //     {
      //       path: 'login',
      //       loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      //     },
      //     {
      //       path: 'signup',
      //       loadChildren: () => import('../signup/signup.module').then( m => m.SignupPageModule)
      //     },
      //   ],
      // },
      //   {
      //     path: 'seller-form',
      //     loadChildren: () => import('../seller-form/seller-form.module').then( m => m.SellerFormPageModule)
      //   },
      //   {
      //     path: 'item-details',
      //     loadChildren: () => import('../item-details/item-details.module').then( m => m.ItemDetailsPageModule)
      //   },
      //   {
      //     path: 'medicines',
      //     loadChildren: () => import('../pages/medicines/medicines.module').then( m => m.MedicinesPageModule),
      //     canActivate: [AuthGuard]
      //   },
      //   {
      //     path: 'myads',
      //     loadChildren: () => import('../pages/myads/myads.module').then( m => m.MyadsPageModule),
      //     canActivate: [AuthGuard]
      //   },
      //   {
      //     path: 'landing',
      //     loadChildren: () => import('../landing/landing.module').then( m => m.LandingPageModule)
      //   },
      //   {
      //     path: 'my-cart',
      //     loadChildren: () => import('../my-cart/my-cart.module').then( m => m.MyCartPageModule)
      //   },
      //   {
      //     path: 'profile',
      //     loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      //   },
      //   {
      //     path: 'my-orders',
      //     loadChildren: () => import('../my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
      //   },
      //   {
      //     path: 'favorite',
      //     loadChildren: () => import('../favorite/favorite.module').then( m => m.FavoritePageModule)
      //   },
      //   {
      //     path: 'checkout',
      //     loadChildren: () => import('../checkout/checkout.module').then( m => m.CheckoutPageModule)
      //   },
      //   {
      //     path: 'confirm',
      //     loadChildren: () => import('../confirm/confirm.module').then( m => m.ConfirmPageModule)
      //   },
      //   {
      //     path: 'folder/:id',
      //     loadChildren: () => import('../folder/folder.module').then( m => m.FolderPageModule)
      //   },
      //   {
      //     path: '',
      //     redirectTo: 'welcome',
      //     pathMatch: 'full',
      //   },
      // ];
      // @NgModule({
      //   imports: [RouterModule.forChild(routes)],
      // })
      // export class TabsPageRoutingModule {}

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


      __webpack_exports__["default"] = "ion-fab-button.background {\n  --background: url('sell_image.jpg') 0 0/100% 100% no-repeat;\n}\n\nion-tabs {\n  --background: transparent !important;\n}\n\nion-tab-bar {\n  -webkit-clip-path: polygon(50% 0, 100% 17%, 100% 99%, 0 100%, 0 17%);\n          clip-path: polygon(50% 0, 100% 17%, 100% 99%, 0 100%, 0 17%);\n  height: 10%;\n  --background: #7B7B7E !important;\n}\n\n.footer {\n  display: none;\n}\n\n.header {\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  display: none;\n}\n\n.custon-toolbar {\n  padding-left: 2%;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n}\n\nion-fab-button {\n  border-radius: 50%;\n  border: 1px solid white;\n}\n\n.navbar {\n  display: flex;\n  text-align: right;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.navbar ion-label {\n  cursor: pointer;\n  color: white;\n  padding: 2%;\n  text-shadow: 2px 2px 2px black;\n}\n\n.navbar ion-label:active {\n  color: #FF5555;\n}\n\n.navbar ion-icon {\n  padding: 1%;\n}\n\nion-thumbnail {\n  margin: 0;\n  padding: 0;\n  margin-left: 5%;\n  height: 7%;\n  width: 7%;\n}\n\nion-thumbnail img {\n  height: 100%;\n  width: 100%;\n}\n\n@media (min-width: 700px) {\n  ion-tab-bar {\n    display: none;\n  }\n\n  .footer {\n    display: block;\n  }\n\n  .header {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJEQUFBO0FBQUo7O0FBY0E7RUFDSSxvQ0FBQTtBQVhKOztBQWNBO0VBQ0ksb0VBQUE7VUFBQSw0REFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQVhKOztBQThCQTtFQUNJLGFBQUE7QUEzQko7O0FBNkJBO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUExQko7O0FBNkJBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUExQko7O0FBNkJBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtBQTFCSjs7QUE2QkE7RUFhSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBdENKOztBQXVCSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBckJSOztBQXVCSTtFQUNJLGNBQUE7QUFyQlI7O0FBdUJJO0VBQ0ksV0FBQTtBQXJCUjs7QUE2QkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQTFCSjs7QUEyQkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXpCUjs7QUE4QkE7RUFDSTtJQUNJLGFBQUE7RUEzQk47O0VBNkJFO0lBQ0ksY0FBQTtFQTFCTjs7RUE0QkU7SUFDSSxjQUFBO0VBekJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1mYWItYnV0dG9uLmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvc2VsbF9pbWFnZS5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcblxyXG4vLyBpb24tdGFiLWJhci5pb24tbm8tYm9yZGVye1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6ICMxZTFlMWU4NTtcclxuXHJcbi8vICAgICBpb24tdGFiLWJ1dHRvbiB7XHJcbi8vICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmlvbi10YWJze1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdGFiLWJhcntcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCwgMTAwJSAxNyUsIDEwMCUgOTklLCAwIDEwMCUsIDAgMTclKTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjN0I3QjdFICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBpb24tdGFiLWJ1dHRvbi5iYWNrZ3JvdW5kLWF2YXRhcntcclxuICAgIC8vICAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaWNvbi9mYXZpY29uLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAgIFxyXG4gICAgLy8gfVxyXG4gICAgLy8gaW9uLXRhYi1idXR0b24uYmFja2dyb3VuZC1teWFkc3tcclxuICAgIC8vICAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaWNvbi9hZC5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgICAgIFxyXG4gICAgLy8gfVxyXG4gICAgLy8gaW9uLXRhYi1idXR0b24uYmFja2dyb3VuZC1ob21le1xyXG4gICAgLy8gICAgIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL2hvbWUucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgICAgIFxyXG4gICAgLy8gfVxyXG4gICAgLy8gaW9uLXRhYi1idXR0b24uYmFja2dyb3VuZC1wdXJjaGFzZXtcclxuICAgIC8vICAgICAtLWJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaWNvbi9vbGQtcHVyY2hhc2UucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgICAgICBcclxuICAgIC8vIH1cclxufVxyXG5cclxuLmZvb3RlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXN0b24tdG9vbGJhcntcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjazsgXHJcbn1cclxuXHJcbmlvbi1mYWItYnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXJ7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWw6YWN0aXZle1xyXG4gICAgICAgIGNvbG9yOiAjRkY1NTU1O1xyXG4gICAgfVxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgcGFkZGluZzogMSU7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuaW9uLXRodW1ibmFpbHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBoZWlnaHQ6IDclO1xyXG4gICAgd2lkdGg6IDclO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCl7XHJcbiAgICBpb24tdGFiLWJhcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmZvb3RlcntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iXX0= */";
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _seller_form_seller_form_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../seller-form/seller-form.page */
      "./src/app/seller-form/seller-form.page.ts");
      /* harmony import */


      var _services_translate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/translate.service */
      "./src/app/services/translate.service.ts");

      var TabsPage = /*#__PURE__*/function () {
        function TabsPage(modalCntrl, router, translateService) {
          _classCallCheck(this, TabsPage);

          this.modalCntrl = modalCntrl;
          this.router = router;
          this.translateService = translateService;
          this.addSellerForm = [];
        }

        _createClass(TabsPage, [{
          key: "popSellerForm",
          value: function popSellerForm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this9 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      console.log("Seller-Form-Popped Up");
                      _context16.next = 3;
                      return this.modalCntrl.create({
                        component: _seller_form_seller_form_page__WEBPACK_IMPORTED_MODULE_4__["SellerFormPage"]
                      });

                    case 3:
                      modal = _context16.sent;
                      modal.onWillDismiss().then(function () {
                        // this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
                        //this.animateCSS('bounceInLeft');
                        _this9.modalCntrl.getTop();
                      });
                      modal.present();

                    case 6:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "navigateTO",
          value: function navigateTO(link) {
            this.router.navigateByUrl('/tabs/' + link);
          }
        }, {
          key: "doTranslation",
          value: function doTranslation(text) {
            var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
            return translateText;
          }
        }]);

        return TabsPage;
      }();

      TabsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_translate_service__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
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