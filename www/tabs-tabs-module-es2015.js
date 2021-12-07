(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/@capacitor/camera/dist/esm/definitions.js":
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return CameraDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return CameraResultType; });
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
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/camera/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "./node_modules/@capacitor/camera/dist/esm/definitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"]; });


const Camera = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Camera', {
    web: () => __webpack_require__.e(/*! import() | web */ "web").then(__webpack_require__.bind(null, /*! ./web */ "./node_modules/@capacitor/camera/dist/esm/web.js")).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/*! exports provided: Capacitor, CapacitorException, CapacitorPlatforms, ExceptionCode, Plugins, WebPlugin, WebView, addPlatform, registerPlugin, registerWebPlugin, setPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return Capacitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorException", function() { return CapacitorException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorPlatforms", function() { return CapacitorPlatforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionCode", function() { return ExceptionCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return Plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return WebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebView", function() { return WebView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlatform", function() { return addPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPlugin", function() { return registerPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return registerWebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPlatform", function() { return setPlatform; });
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = (win) => {
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', { name: 'web' });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: defaultPlatformMap,
    };
    const addPlatform = (name, platform) => {
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name) => {
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const initPlatforms = (win) => (win.CapacitorPlatforms = createCapacitorPlatforms(win));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/ initPlatforms((typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {}));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
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
class CapacitorException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
const getPlatformId = (win) => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    }
    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    }
    else {
        return 'web';
    }
};

const createCapacitor = (win) => {
    var _a, _b, _c, _d, _e;
    const capCustomPlatform = win.CapacitorCustomPlatform || null;
    const cap = win.Capacitor || {};
    const Plugins = (cap.Plugins = cap.Plugins || {});
    /**
     * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
     */
    const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = () => {
        return capCustomPlatform !== null
            ? capCustomPlatform.name
            : getPlatformId(win);
    };
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatform() !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
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
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||
        defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations[platform] === 'function'
                        ? (jsImplementation = await jsImplementations[platform]())
                        : (jsImplementation = jsImplementations[platform]);
            }
            else if (capCustomPlatform !== null &&
                !jsImplementation &&
                'web' in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations['web'] === 'function'
                        ? (jsImplementation = await jsImplementations['web']())
                        : (jsImplementation = jsImplementations['web']);
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                    }
                    else {
                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                }
                else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            }
            else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            }
            else {
                throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
                const p = loadPluginImplementation().then(impl => {
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    }
                    else {
                        throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async () => remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false,
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId,
                }, callback);
            };
            const p = new Promise(resolve => call.then(() => resolve({ remove })));
            p.remove = async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get(_, prop) {
                switch (prop) {
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'toJSON':
                        return () => ({});
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            },
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...(pluginHeader ? [platform] : []),
            ]),
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const initCapacitorGlobal = (win) => (win.Capacitor = createCapacitor(win));

const Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
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
const registerWebPlugin = (plugin) => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
    constructor(config) {
        this.listeners = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
    addListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        Object.defineProperty(p, 'remove', {
            value: async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            },
        });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: event => {
                this.notifyListeners(pluginEventName, event);
            },
        };
    }
    unimplemented(msg = 'not implemented') {
        return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
}

const WebView = /*#__PURE__*/ registerPlugin('WebView');


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/seller-form/seller-form.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seller-form/seller-form.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"backbtn\" routerLink=\"/tabs/home\" routerDirection=\"back\">\r\n        <img src=\"../../assets/back.svg\"/>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Publish ADs</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-card class=\"ion-card\">\r\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"onClickPublish()\">\r\n      <ion-toolbar color=\"none\" *ngIf=\"flag === false\">\r\n      <ion-item lines=\"full\" *ngFor=\"let control of adForm.form_1\">\r\n        <ion-label slot=\"start\" color=\"danger\" position=\"fixed\" *ngIf=\"['select'].includes(control.type)\">{{control.label}}</ion-label>\r\n        <ion-label color=\"danger\" *ngIf=\"['textarea'].includes(control.type)\" position=\"floating\">{{control.label}}</ion-label>\r\n        <ion-label color=\"danger\" position=\"{{['text', 'number'].includes(control.type)? 'floating':'stacked'}}\" *ngIf=\"['askingPrice', 'weight', 'age'].includes(control.name)\">{{control.label}}</ion-label>\r\n        <ion-input\r\n        *ngIf=\"['description', 'askingPrice', 'weight', 'age'].includes(control.name)\"\r\n        [type]=\"control.type\" [formControlName]=\"control.name\" [value]=\"control.value\"></ion-input>\r\n        <ion-textarea\r\n        *ngIf=\"control.type === 'textarea'\" [formControlName]=\"control.name\" [value]=\"control.value\"></ion-textarea>\r\n        <ion-label color=\"danger\" position=\"{{['text', 'number'].includes(control.type)? 'floating':'stacked'}}\" *ngIf=\"['lactationNumber', 'milkPerDay'].includes(control.name) && animalTypeSelected !== 'ox'\">{{control.label}}</ion-label>\r\n        <ion-input\r\n        *ngIf=\"['lactationNumber', 'milkPerDay'].includes(control.name) && animalTypeSelected !== 'ox'\"\r\n        [type]=\"control.type\" [formControlName]=\"control.name\" [value]=\"control.value\" ></ion-input>\r\n\r\n        <ion-select slot=\"end\" (ionChange)=\"onSelectAnimalType($event)\" *ngIf=\"control.name === 'type'\" interface=\"action-sheet\" [formControlName]=\"control.name\" [placeholder]=\"control.placeholder\">\r\n          <ion-select-option *ngFor=\"let option of control.animaltype; let i=index\" value=\"{{option}}\">{{option}}</ion-select-option>\r\n        </ion-select>\r\n        \r\n        <ion-select slot=\"end\" *ngIf=\"myForm.get('type').value === animalTypeSelected && control.name === 'breed'\" interface=\"action-sheet\" [formControlName]=\"control.name\" [placeholder]=\"control.placeholder\">\r\n          <ion-select-option *ngFor=\"let option of control[animalTypeSelected]\" value=\"{{option}}\">{{option}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-toolbar>\r\n\r\n    <ion-toolbar color=\"none\" *ngIf=\"flag === true\">\r\n      <ion-item lines=\"full\" *ngFor=\"let control of adForm.form_2\">\r\n        <ion-label slot=\"start\" color=\"danger\" position=\"fixed\" *ngIf=\"['select'].includes(control.type)\">{{control.label}}</ion-label>\r\n        <ion-label color=\"danger\" position=\"{{['text', 'number'].includes(control.type)? 'floating':'stacked'}}\" *ngIf=\"['ownerName', 'phone', 'imagesList'].includes(control.name)\">{{control.label}}</ion-label>\r\n        <ion-input\r\n        *ngIf=\"['ownerName','phone'].includes(control.name)\"\r\n        [type]=\"control.type\" [formControlName]=\"control.name\" [value]=\"control.value\"></ion-input>\r\n         \r\n        <ion-select slot=\"end\" (ionChange)=\"onSelectAnimalType($event)\" *ngIf=\"['state'].includes(control.name)\" interface=\"action-sheet\" [formControlName]=\"control.name\" [placeholder]=\"control.placeholder\">\r\n          <ion-select-option *ngFor=\"let state of states\" [value]=\"state\" value=\"{{state}}\">{{state}}</ion-select-option>\r\n        </ion-select>\r\n        <ion-select slot=\"end\" (ionChange)=\"onSelectAnimalType($event)\" *ngIf=\"['town'].includes(control.name)\" interface=\"action-sheet\" [formControlName]=\"control.name\" [placeholder]=\"control.placeholder\">\r\n          <ion-select-option *ngFor=\"let district of districts\" [value]=\"district\" value=\"{{district}}\">{{district}}</ion-select-option>\r\n        </ion-select>\r\n        <ion-select slot=\"end\" (ionChange)=\"onSelectAnimalType($event)\" *ngIf=\"['district'].includes(control.name)\" interface=\"action-sheet\" [formControlName]=\"control.name\" [placeholder]=\"control.placeholder\">\r\n          <ion-select-option *ngFor=\"let town of towns\" [value]=\"town\" value=\"{{town}}\">{{town}}</ion-select-option>\r\n        </ion-select>\r\n\r\n        <ion-input slot=\"end\" *ngIf=\"control.name === 'imagesList'\" id=\"imagesList\" type=\"file\" inputmode=\"file\" multiple [formControlName]=\"control.name\" \r\n                  (change)=\"onFileChange($event)\"></ion-input>\r\n\r\n        <!-- <ion-button slot=\"end\" *ngIf=\"control.name === 'imagesList'\" color=\"medium\" size=\"small\" (click)=\"presentActionSheet()\" [formControlName]=\"control.name\">\r\n          Select Image\r\n        </ion-button> -->\r\n      </ion-item>\r\n    </ion-toolbar>\r\n      <ion-button *ngIf=\"flag === false\" expand=\"block\" color=\"light\" (click)=\"onClickNext()\">Next</ion-button>\r\n      <ion-button *ngIf=\"flag === true\" expand=\"block\" color=\"light\" type=\"submit\">Publish</ion-button>\r\n    </form>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n\r\n<!-- <ion-content>\r\n  <app-adsform [jsonFormData]=\"formData\"></app-adsform>\r\n</ion-content> -->\r\n\r\n<!-- <ion-content class=\"ion-padding\">\r\n  <ion-card>\r\n\r\n    <ion-grid>\r\n      <ion-row class=\"pager\">\r\n        <ion-col class=\"center\" size=\"3\"\r\n          *ngFor=\"let slide of slides; let index = index; let first = first; let last = last;\">\r\n          <ion-chip\r\n            [style.background]=\"slide === currentSlide ? 'var(--ion-color-primary)':'var(--ion-color-light-shade)'\"\r\n            [style.color]=\"slide === currentSlide ? 'var(--ion-color-light)':'var(--ion-color-dark)'\">\r\n            {{ index + 1 }}\r\n          </ion-chip>\r\n          <p [style.color]=\"slide === currentSlide ? 'var(--ion-color-primary)':'var(--ion-color-medium)'\">\r\n            {{ slide }}\r\n          </p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n    <ion-slides [options]=\"slidesOpts\" (ionSlideDidChange)=\"onSlidesDidChange()\"\r\n      (ionSlideWillChange)=\"onSlidesChanged()\">\r\n      <ng-container *ngFor=\"let slide of slides\">\r\n        <ion-slide>\r\n\r\n          <div class=\"full-width ion-text-start\">\r\n\r\n            <form [formGroup]=\"billingForm\" #billingFormRef=\"ngForm\" novalidate *ngIf=\"slide === 'Animal'\">\r\n\r\n              <ion-list-header class=\"ion-no-padding\" style=\"min-height: auto;\" >\r\n                <ion-label class=\"ion-text-center\" color=\"primary\"> \r\n                  Animal details\r\n                </ion-label>\r\n              </ion-list-header>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item class=\"item-select\" lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Type</ion-label>\r\n                    <select class=\"text-small\" formControlName=\"type\">\r\n                      <option [value]=\"null\" disabled selected>\r\n                        Select Type\r\n                      </option>\r\n                      <option *ngFor=\"let type of types\" [value]=\"type\">\r\n                        {{ type }}\r\n                      </option>\r\n                    </select>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"shippingDeliveryTime?.errors?.required && shippingFormRef?.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item class=\"item-select\" lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Breed</ion-label>\r\n                    <select class=\"text-small\" formControlName=\"breed\">\r\n                      <option [value]=\"null\" disabled selected>\r\n                        Select Type\r\n                      </option>\r\n                      <option *ngFor=\"let breed of breeds\" [value]=\"breed\">\r\n                        {{ breed }}\r\n                      </option>\r\n                    </select>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"shippingDeliveryTime?.errors?.required && shippingFormRef?.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n              <div formGroupName=\"animalDetails\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\" class=\"labelcolor\">Animal Name</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"animalName\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingFirstName?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Description</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"description\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingLastName?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            \r\n           \r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Asking Price</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"askingPrice\" inputmode=\"numeric\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingEmail?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Weight</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"weight\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingAddress?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Age</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"age\" inputmode=\"numeric\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingCity?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Lactation</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"lactationNumber\" inputmode=\"numeric\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingState?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Milk Per Day</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"milkPerDay\" inputmode=\"numeric\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingZip?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Country code</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"country_code\" placeholder=\"two-letter code\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"billingCountryCode?.errors?.required && billingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n\r\n            </form>\r\n\r\n            <form [formGroup]=\"shippingForm\" #shippingFormRef=\"ngForm\" novalidate *ngIf=\"slide === 'Seller-Info'\">\r\n\r\n              <ion-list-header class=\"ion-no-padding\" style=\"min-height: auto;\">\r\n                <ion-label class=\"ion-text-center\" color=\"primary\">\r\n                  Seller Information\r\n                </ion-label>\r\n              </ion-list-header>\r\n              <div formGroupName=\"sellerInformation\">\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Owner's Name</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"ownerName\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"shippingAddress?.errors?.required && shippingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Contact Number</ion-label>\r\n                    <input type=\"number\" formControlName=\"phone\" />\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"shippingPhone?.errors?.required && shippingFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-item class=\"item-select\" lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">State</ion-label>\r\n                    <select class=\"text-small\" formControlName=\"state\">\r\n                      <option [value]=\"null\" disabled selected>\r\n                        Select State\r\n                      </option>\r\n                      <option *ngFor=\"let time of times\" [value]=\"time\">\r\n                        {{ time }}\r\n                      </option>\r\n                    </select>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"shippingDeliveryTime?.errors?.required && shippingFormRef?.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n           \r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">Town</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"town\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\"  class=\"labelcolor\">District</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"district\"></ion-input>\r\n                  </ion-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div >\r\n\r\n              <div class=\"flex align-items-center full-width ion-margin-top\" formGroupName=\"imageUrls\">\r\n\r\n                <ion-item lines=\"full\">\r\n                  <ion-label slot=\"start\" color=\"danger\" for=\"age\" for=\"imagesList\">Upload Image</ion-label>\r\n                  <ion-input class=\"ion-padding\" id=\"imagesList\" type=\"file\" inputmode=\"file\" multiple formControlName=\"imagesList\" \r\n                  (change)=\"onFileChange($event)\"></ion-input>\r\n                </ion-item>\r\n                <div class=\"ion-margin-end\">\r\n                  <h5 class=\"text-medium bold\"  class=\"labelcolor\">Upload image</h5>\r\n                 \r\n                  <ion-button strong shape=\"round\" color=\"success\" size=\"small\" (click)=\"presentActionSheet()\" formControlName=\"imagesList\">\r\n                    Select\r\n                  </ion-button>\r\n                </div>\r\n                <div >\r\n                  <img class=\"img-thumb\" [src]=\"imagePath\" *ngIf=\"imagePath\" >\r\n                </div>\r\n              </div>\r\n\r\n            </form>\r\n\r\n            <div [hidden]=\"slide !== 'Summary'\">\r\n              <ion-list-header class=\"ion-no-padding\" style=\"min-height: auto;\">\r\n                <ion-label class=\"ion-text-center\" color=\"primary\">\r\n                  Ads Details\r\n                </ion-label>\r\n              </ion-list-header>\r\n\r\n              <div *ngIf=\"shippingForm.valid\">\r\n                <p class=\"text-medium bold ion-text-uppercase\">\r\n                  Owner's Information\r\n                </p>\r\n                <div class=\"divider\"></div>\r\n\r\n                <div  *ngFor=\"let control of shippingForm.controls | keyvalue: originalOrder\">\r\n                  <p style=\"color: coral;\" class=\"text-medium margin-v-sm\">\r\n                    <span class=\"bold\" class=\"labelcolor\">\r\n                      {{ control.key.replace('_', ' ') | titlecase }}:\r\n                    </span>\r\n                    {{ control.value.value || '--' }}\r\n                  </p>\r\n                </div>\r\n                <p class=\"text-medium margin-v-sm\" *ngIf=\"imagePath\">\r\n                  <span class=\"bold\">\r\n                    Attachment:\r\n                  </span>\r\n                  <img class=\"img-thumb\" [src]=\"imagePath\">\r\n                </p>\r\n              </div>\r\n\r\n              <div *ngIf=\"billingForm.valid\">\r\n                <div class=\"divider\"></div>\r\n                <p class=\"text-medium bold ion-text-uppercase\">\r\n                  Animal details\r\n                </p>\r\n                <div class=\"divider\"></div>\r\n                <p class=\"text-medium margin-v-sm\" style=\"color: coral;\"\r\n                  *ngFor=\"let control of billingForm.controls | keyvalue: originalOrder\">\r\n                  <span class=\"bold\" style=\"color:azure\">\r\n                    {{ control.key.replace('_', ' ') | titlecase }}:\r\n                  </span>\r\n                  {{ control.value.value || '--' }}\r\n                </p>\r\n              </div>\r\n              <ion-button expand=\"full\" color=\"success\" (click)=\"showJSON()\"></ion-button>\r\n              <div>\r\n                <pre>\r\n                  {{ showJSONRawValues() | json}}\r\n                </pre>\r\n              </div>\r\n\r\n              <div class=\"divider\"></div>\r\n              <p class=\"text-medium bold ion-text-uppercase\">\r\n                Items\r\n              </p>\r\n              <div class=\"divider\"></div> \r\n              <ion-list>\r\n                <ion-item *ngFor=\"let item of order?.items\">\r\n                  <ion-label>\r\n                    <h2 class=\"text-medium bold\">{{ item.name }}</h2>\r\n                  </ion-label>\r\n                  <div>\r\n                    <span class=\"text-medium\">{{ item.amount | currency}}</span>\r\n                  </div>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>\r\n                    <h2 class=\"text-medium bold\">Subtotal</h2>\r\n                  </ion-label>\r\n                  <div>\r\n                    <span class=\"text-medium\">{{ order?.subtotal | currency}}</span>\r\n                  </div>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>\r\n                    <h2 class=\"text-medium bold\">Shipping & Handling</h2>\r\n                  </ion-label>\r\n                  <div>\r\n                    <span class=\"text-medium\">{{ order?.shippingFee | currency}}</span>\r\n                  </div>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label>\r\n                    <h2 class=\"text-medium bold\">Total</h2>\r\n                  </ion-label>\r\n                  <div>\r\n                    <span class=\"text-medium bold\">{{ order?.total | currency}}</span>\r\n                  </div>\r\n                </ion-item>\r\n              </ion-list>\r\n            </div>\r\n            \r\n\r\n            <form [formGroup]=\"paymentForm\" #paymentFormRef=\"ngForm\" novalidate *ngIf=\"slide === 'Publish'\">\r\n\r\n\r\n              <ion-list-header class=\"ion-no-padding\" style=\"min-height: auto;\">\r\n                <ion-label class=\"ion-text-center\" color=\"primary\">\r\n                  Pay order\r\n                </ion-label>\r\n              </ion-list-header>\r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Card number</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"number\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"paymentNumber?.errors?.required && paymentFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row> \r\n\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">Expiration</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"expiration\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"paymentExpiration?.errors?.required && paymentFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n\r\n                <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                    <ion-label position=\"stacked\">CVV</ion-label>\r\n                    <ion-input type=\"text\" formControlName=\"cvv\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-text color=\"danger\">\r\n                    <span class=\"text-tiny\"\r\n                      [style.visibility]=\"paymentCvv?.errors?.required && paymentFormRef.submitted ? '' : 'hidden'\">\r\n                      Field required\r\n                    </span>\r\n                  </ion-text>\r\n                </ion-col>\r\n              </ion-row>\r\n\r\n              <div class=\"ion-text-center\">\r\n                <ion-button type=\"button\" style=\"width: 200px;\" class=\"ion-margin-vertical\" strong size=\"large\"\r\n                  shape=\"round\"  color=\"success\" (click) = \"dismis()\">\r\n                  (click)=\"onNextButtonTouched()\r\n                 Publishing..\r\n                </ion-button>\r\n              </div>\r\n\r\n              <div class=\"ion-text-center\">\r\n                <ion-button type=\"button\" style=\"width: 200px;\" class=\"ion-margin-vertical\" strong size=\"large\"\r\n                  shape=\"round\" color=\"light\" (click)=\"onBackButtonTouched()\">\r\n                  Cancel\r\n                </ion-button>\r\n              </div>\r\n\r\n            </form>\r\n\r\n          </div>\r\n\r\n        </ion-slide>\r\n\r\n      </ng-container>\r\n\r\n    </ion-slides>\r\n\r\n  </ion-card>\r\n\r\n  <ion-button expand=\"block\" color=\"danger\" [style.visibility]=\"isEnd ? 'hidden' : ''\"\r\n        (click)=\"onNextButtonTouched()\">Next</ion-button>\r\n\r\n</ion-content>\r\n -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"buy\">\r\n      <ion-icon name=\"cart-outline\"></ion-icon>\r\n      <ion-label>Buy</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"sell\">\r\n      <ion-icon name=\"pricetag-outline\"></ion-icon>\r\n      <ion-label>Sell</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"nutrition\">\r\n      <ion-icon name=\"bandage-outline\"></ion-icon>\r\n      <ion-label>Medicine</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"feed\">\r\n      <ion-icon name=\"cafe-outline\"></ion-icon>\r\n      <ion-label>Feed</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"insemination\">\r\n      <ion-icon name=\"git-branch-outline\"></ion-icon>\r\n      <ion-label>Insemination</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs> -->\r\n<ion-tabs slot=\"bottom\" class=\"tabsbg\">\r\n  <ion-tab-bar class=\"ion-no-border\">\r\n      <!-- <ion-fab vertical=\"top\" edge=\"true\" horizontal=\"center\" translucent=\"true\">\r\n      <ion-fab-button color=\"light\" class=\"background\" (click)=popSellerForm()>\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab> -->\r\n    <ion-tab-button tab=\"landing\"> \r\n      <ion-icon size=\"large\" name=\"home\" color=\"danger\"></ion-icon>\r\n      <ion-label color=\"danger\">HOME</ion-label>\r\n      <!-- <ion-icon name=\"cart\" ></ion-icon> -->\r\n      <!-- <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/home.png\"/> -->\r\n    </ion-tab-button>\r\n    \r\n    <ion-tab-button  tab=\"myads\">\r\n      <ion-icon size=\"large\" name=\"newspaper\" color=\"success\"></ion-icon>\r\n      <ion-label color=\"success\">MY ADs</ion-label>\r\n      <!-- <img style=\"height: 30px; width: 30px; \" src=\"../../assets/icon/ad.png\"/> -->\r\n      <!-- <ion-icon name=\"cafe\"></ion-icon> -->\r\n      <!-- <ion-badge *ngIf=\"new_message\">{{new_message}}</ion-badge> -->\r\n    </ion-tab-button>\r\n    \r\n    <ion-tab-button tab=\"blog-feedback\">\r\n      <ion-fab vertical=\"center\" horizontal=\"center\" translucent=\"true\">\r\n        <ion-fab-button color=\"light\" class=\"background\" >  <!-- (click)=popSellerForm() -->\r\n          <ion-icon size=\"large\" name=\"book\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </ion-tab-button>\r\n    \r\n    <!-- <svg height=\"50\" viewBox=\"0 0 100 50\" width=\"100\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z\" fill=\"#1f1f1f\" fill-rule=\"evenodd\"></path></svg> -->\r\n    \r\n    <ion-tab-button tab=\"medicines\">\r\n      <ion-icon size=\"large\" name=\"medkit\" color=\"success\"></ion-icon>\r\n      <ion-label color=\"success\">VET PHARMA</ion-label>\r\n      <!-- <ion-icon name=\"bandage\"></ion-icon> -->\r\n      <!-- <img style=\"height: 30px; width: 30px;\" src=\"../../assets/icon/old-purchase.png\"/> -->\r\n      <!-- <ion-badge *ngIf=\"new_activities\">{{new_activities}}</ion-badge> -->\r\n    </ion-tab-button>\r\n    \r\n    <ion-tab-button tab=\"profile\">\r\n      <ion-icon size=\"large\" color=\"light\" name=\"person-circle\"></ion-icon>\r\n      <ion-label color=\"light\">PROFILE</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>");

/***/ }),

/***/ "./src/app/seller-form/seller-form.page.scss":
/*!***************************************************!*\
  !*** ./src/app/seller-form/seller-form.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\np {\n  font-size: 70%;\n}\n\n.ion-card {\n  margin: 0;\n  padding: 0;\n}\n\nion-grid {\n  margin: 0;\n  padding: 0;\n}\n\nion-row {\n  margin: 0;\n  padding: 0;\n}\n\nion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.pager {\n  border-bottom: 1px solid silver;\n}\n\n.form {\n  margin: 0;\n  padding: 0;\n}\n\nion-slides {\n  margin: 0;\n  padding: 0;\n}\n\nion-slide {\n  margin: 0;\n  padding: 0;\n}\n\n.form-heading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbGVyLWZvcm0vc2VsbGVyLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtMQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFqTEY7O0FBb0xBO0VBQ0UsY0FBQTtBQWpMRjs7QUFvTEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWpMRjs7QUFvTEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWpMRjs7QUFvTEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWpMRjs7QUFvTEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWpMRjs7QUFvTEE7RUFDRSwrQkFBQTtBQWpMRjs7QUFvTEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWpMRjs7QUFvTEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWpMRjs7QUFvTEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWpMRjs7QUFvTEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWpMRjs7QUFvTEE7RUFDRSxZQUFBO0FBakxGIiwiZmlsZSI6InNyYy9hcHAvc2VsbGVyLWZvcm0vc2VsbGVyLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWl0ZW0ge1xyXG4vLyAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgICAgaW9uLWxhYmVsIHtcclxuLy8gICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4vLyAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIH1cclxuICBcclxuLy8gICAgIGlvbi1pbnB1dCxcclxuLy8gICAgIGlvbi10ZXh0YXJlYSxcclxuLy8gICAgIHNlbGVjdCxcclxuLy8gICAgIGlucHV0IHtcclxuLy8gICAgICAgY29sb3I6IGNvcmFsO1xyXG4vLyAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JjYmNiO1xyXG4vLyAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuICBcclxuLy8gICBpb24tY29sIHtcclxuLy8gICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDAgNXB4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICBpb24tc2xpZGVzIHtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuICBcclxuLy8gICAgIGlvbi1zbGlkZSB7XHJcbi8vICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4vLyAgICAgfVxyXG4gIFxyXG4vLyAgICAgLnN3aXBlci1zbGlkZSB7XHJcbi8vICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuLy8gICAgIH1cclxuICBcclxuLy8gICAgIC5zd2lwZXItc2xpZGUuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XHJcbi8vICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIGlvbi1saXN0LWhlYWRlciBpb24tbGFiZWwge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgc2VsZWN0LFxyXG4vLyAgIGlucHV0IHtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgcGFkZGluZzogOHB4IDZweDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLmxpbmUge1xyXG4vLyAgICAgaGVpZ2h0OiAzcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4vLyAgICAgdG9wOiAxNHB4O1xyXG4vLyAgICAgei1pbmRleDogLTE7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIC5pbWctdGh1bWIge1xyXG4vLyAgICAgd2lkdGg6IDQ1cHg7XHJcbi8vICAgICBoZWlnaHQ6IDU1cHg7XHJcbi8vICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIH1cclxuICBcclxuXHJcbi8vICAgLmxhYmVsY29sb3J7XHJcbi8vICAgICAgIGNvbG9yOiBhenVyZTtcclxuLy8gICB9XHJcblxyXG4gIFxyXG4vLyAuZmxleCB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gfVxyXG5cclxuLy8gLmZ1bGwtd2lkdGgge1xyXG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5hYnNvbHV0ZSB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyB9XHJcblxyXG4vLyAucmVsYXRpdmUge1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gLmFsaWduLXNlbGYtY2VudGVyIHtcclxuLy8gICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5hbGlnbi1zZWxmLWVuZCB7XHJcbi8vICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbi8vIH1cclxuXHJcbi8vIC5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmp1c3RpZnktY29udGVudC1zcGFjZS1hcm91bmQge1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4vLyB9XHJcblxyXG4vLyAuanVzdGlmeS1jb250ZW50LXNwYWNlLWV2ZW5seSB7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbi8vIH1cclxuXHJcbi8vIC5qdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYmV0d2VlbiB7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyB9XHJcblxyXG4vLyAuanVzdGlmeS1jb250ZW50LXNwYWNlLWVuZCB7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuLy8gfVxyXG5cclxuLy8gLmFsaWduLWl0ZW1zLWNlbnRlciB7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmZsZXgtY29sdW1uIHtcclxuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyB9XHJcblxyXG4vLyAuZmxleC1jZW50ZXIge1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vIH1cclxuXHJcbi8vIC50ZXh0LXRpbnkge1xyXG4vLyAgIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAudGV4dC1zbWFsbCB7XHJcbi8vICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC50ZXh0LW1lZGl1bSB7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC50ZXh0LW5vcm1hbCB7XHJcbi8vICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC50ZXh0LWxhcmdlIHtcclxuLy8gICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnRleHQteGxhcmdlIHtcclxuLy8gICBmb250LXNpemU6IDM2cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLnRleHQteHhsYXJnZSB7XHJcbi8vICAgZm9udC1zaXplOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5yYWRpdXMge1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuZGl2aWRlciB7XHJcbi8vICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuLy8gICBtYXJnaW46IDhweCAwO1xyXG4vLyAgIGhlaWdodDogMXB4O1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcblxyXG4vLyAuYm9sZCB7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vIH1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnB7XHJcbiAgZm9udC1zaXplOiA3MCU7XHJcbn1cclxuXHJcbi5pb24tY2FyZHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1yb3d7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1jb2x7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wYWdlcntcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgc2lsdmVyO1xyXG59XHJcblxyXG4uZm9ybXtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLXNsaWRlc3tcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLXNsaWRle1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZm9ybS1oZWFkaW5ne1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/seller-form/seller-form.page.ts":
/*!*************************************************!*\
  !*** ./src/app/seller-form/seller-form.page.ts ***!
  \*************************************************/
/*! exports provided: SellerFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerFormPage", function() { return SellerFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ "./node_modules/@capacitor/camera/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_seller_form_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/seller-form-api.service */ "./src/app/services/seller-form-api.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _services_adform_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/adform.json */ "./src/app/services/adform.json");
var _services_adform_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../services/adform.json */ "./src/app/services/adform.json", 1);

/* eslint-disable @typescript-eslint/naming-convention */









let SellerFormPage = class SellerFormPage {
    constructor(actionSheetCtrl, navCtrl, sanitizer, modalCtrl, alertCtrl, sellerFormApiService, toastController, dataService, fb) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.sellerFormApiService = sellerFormApiService;
        this.toastController = toastController;
        this.dataService = dataService;
        this.fb = fb;
        this.adForm = _services_adform_json__WEBPACK_IMPORTED_MODULE_8__;
        this.myForm = this.fb.group({});
        this.flag = false;
        this.order = {
            id: 1,
            items: [{
                    id: 1,
                    name: 'Denim T-Shirt',
                    amount: 15.00,
                }, {
                    id: 1,
                    name: 'Denim Pants',
                    amount: 5.00,
                }, {
                    id: 1,
                    name: 'Black T-Shirt',
                    amount: 5.00,
                }],
            subtotal: 25.00,
            shippingFee: 5.00,
            total: 30.00,
        };
        this.states = [];
        this.districts = [];
        this.towns = [];
        this.slidesOpts = {
            allowTouchMove: false,
            autoHeight: true,
        };
        this.isBeginning = true;
        this.isEnd = false;
        this.imagesList = [''];
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
        this.originalOrder = () => 0;
    }
    testup(event) {
        this.files = event.target.files;
        console.log("Files/Uploaded Images" + this.files);
    }
    get billingFirstName() {
        return this.billingForm.get('animal_name');
    }
    get billingLastName() {
        return this.billingForm.get('description');
    }
    get billingTypes() {
        return this.billingForm.get('cattle_types');
    }
    get billingEmail() {
        return this.billingForm.get('asking_price');
    }
    get billingAddress() {
        return this.billingForm.get('weight');
    }
    get billingCity() {
        return this.billingForm.get('age');
    }
    get billingState() {
        return this.billingForm.get('lactation');
    }
    get billingZip() {
        return this.billingForm.get('milk_perday');
    }
    get billingCountryCode() {
        return this.billingForm.get('country_code');
    }
    get shippingAddress() {
        return this.shippingForm.get('owners_name');
    }
    get shippingPhone() {
        return this.shippingForm.get('phone');
    }
    get shippingDeliveryTime() {
        return this.shippingForm.get('state');
    }
    get paymentNumber() {
        return this.paymentForm.get('number');
    }
    get paymentExpiration() {
        return this.paymentForm.get('expiration');
    }
    get paymentCvv() {
        return this.paymentForm.get('cvv');
    }
    ngOnInit() {
        this.myForm = this.fb.group({});
        if (this.flag === false) {
            this.createForm(this.adForm.form_1);
        }
        this.buildSlides();
        this.states = ['Karnatak', 'Maharasthra', 'Tamilnadu', 'Kerla', 'UP'];
        this.districts = ['Bangalore', 'Mumbai', 'Tuticorin', 'Amravati', 'Lucknow'];
        this.towns = ['Bangalore', 'Mumbai', 'Tuticorin', 'Amravati', 'Lucknow'];
        this.types = ['Cow', 'Buffalo', 'Ox'];
        this.breeds = ['Sindhi', 'Jersey', 'Desi'];
    }
    onSelectAnimalType(event) {
        this.animalTypeSelected = event.detail.value;
        console.log('animalTypeSelected- ', this.animalTypeSelected);
    }
    createForm(controls) {
        for (let control of controls) {
            const formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
            this.myForm.addControl(control.name, formControl);
        }
    }
    onSubmit() {
        console.log('form value- ', this.myForm.value);
        console.log('form validity- ', this.myForm.valid);
        this.myForm.reset();
    }
    // ionViewDidEnter() {
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
    buildSlides() {
        const slides = ['Animal', 'Seller-Info', 'Summary', 'Publish'];
        this.currentSlide = slides[0];
        this.slides = slides;
    }
    onClickNext() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.flag = true;
            if (this.flag === true) {
                this.createForm(this.adForm.form_2);
            }
        });
    }
    onClickPublish() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //  let json1 = this.billingForm.getRawValue();
            //  let json2 = this.shippingForm.getRawValue();
            //  let json = {...json1,...json2}
            // let adformData = this.myForm.getRawValue();
            let adformData = {
                "animalDetails": {
                    "age": this.myForm.get('age').value,
                    // "animalName": this.myForm.get('animalName').value,
                    "askingPrice": this.myForm.get('askingPrice').value,
                    "description": this.myForm.get('description').value,
                    "lactationNumber": this.myForm.get('lactationNumber').value,
                    "milkPerDay": this.myForm.get('milkPerDay').value,
                    "weight": this.myForm.get('weight').value
                },
                "breed": this.myForm.get('breed').value,
                "imageUrls": {
                    "imagesList": this.myForm.get('imagesList').value
                },
                "sellerInformation": {
                    "district": this.myForm.get('district').value,
                    "ownerName": this.myForm.get('ownerName').value,
                    "phone": this.myForm.get('phone').value,
                    "state": this.myForm.get('state').value,
                    "town": this.myForm.get('town').value
                },
                "type": this.myForm.get('type').value
            };
            console.log('adform json data- ', adformData);
            //  const newForm2 =  {JSON.stringify(this.billingForm.getRawValue()),JSON.stringify(this.shippingForm.getRawValue())}
            this.dat = JSON.stringify(adformData);
            // console.log(json);
            // console.log(JSON.stringify(json));
            console.log('stringify adformData- ', this.dat);
            this.sellerFormApiService.saveData(this.dat).subscribe((dat) => {
                this.dat = dat;
                console.log('stringify adformData_1- ', this.dat);
            });
            this.myForm.reset();
            this.presentToast();
            // return await this.modalCtrl.dismiss();
        });
    }
    setupForm() {
        this.billingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            animalDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                age: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('5', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                animalName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Sakhu', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                askingPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('50000', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Milking Everyday', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                lactationNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Yes', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                milkPerDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('3', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('10', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            }),
            // animal_name: new FormControl('Sakhu', Validators.required),
            // description: new FormControl('Milking Everyday', Validators.required),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            breed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
        // this.shippingForm = new FormGroup({
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
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            expiration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            cvv: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    onSlidesChanged() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const index = yield this.ionSlides.getActiveIndex();
            this.currentSlide = this.slides[index];
            this.isBeginning = yield this.ionSlides.isBeginning();
            this.isEnd = yield this.ionSlides.isEnd();
        });
    }
    onSlidesDidChange() {
        this.ionContent.scrollToTop();
    }
    onBackButtonTouched() {
        this.ionSlides.slidePrev();
        this.ionContent.scrollToTop();
    }
    // onNextButtonTouched() {
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
    onFileChange(event) {
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            console.log("Files", filesAmount);
            for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    //console.log('Before ImageList', event.target.result);
                    this.imagesList.push(event.target.result);
                    console.log("ImageList", this.imagesList);
                };
                this.myForm.patchValue({
                    imagesList: this.imagesList
                });
                reader.readAsDataURL(event.target.files[i]);
                if (i == filesAmount - 1) {
                    this.imagesList.shift();
                    console.log("ImageList After", this.imagesList);
                }
                console.log('before', this.imagesList.length);
            }
            console.log('after', this.imagesList.length);
        }
    }
    chooseImage(source) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__["Camera"].getPhoto({
                    quality: 70,
                    width: 600,
                    height: 600,
                    preserveAspectRatio: true,
                    allowEditing: true,
                    correctOrientation: true,
                    source,
                    resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__["CameraResultType"].Uri,
                });
                const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath);
                this.imagePath = safeUrl;
                console.log("Before Imagepath", this.imagePath);
                const response = yield fetch(image.webPath);
                const blob = yield response.blob();
                const base64 = yield this.convertBlobToBase64(blob);
                this.imagesList.push(base64);
                console.log(this.imagesList);
                this.imagePath = this.imagesList;
                console.log("After Imagepath", this.imagePath);
                // Send encoded string to server...
            }
            catch (error) {
                console.warn(error);
            }
        });
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Choose an option',
                buttons: [{
                        text: 'Photo Library',
                        handler: () => {
                            this.chooseImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_4__["CameraSource"].Photos);
                        }
                    }, {
                        text: 'Camera',
                        handler: () => {
                            this.chooseImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_4__["CameraSource"].Camera);
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel'
                    }]
            });
            return yield actionSheet.present();
        });
    }
    showJSON() {
        alert(JSON.stringify(this.shippingForm.getRawValue()));
    }
    showJSONRawValues() {
        return this.shippingForm.getRawValue();
    }
    // saveAllData() {
    //   //alert(JSON.stringify(this.data3.getRawValue()));
    //   this.dat = JSON.stringify(this.data3.getRawValue());
    //   this.sellerFormApiService.saveData(this.dat).subscribe((dat) => {
    //     this.dat = dat;
    //     console.log(this.dat);
    //   });
    //   this.presentToast();
    // }
    getAllads() {
        this.sellerFormApiService.getData().subscribe((data2) => {
            this.data2 = data2;
            console.log(data2);
        });
        // console.log('27lines',this.sellerFormApiService.data);
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'AD CREATED SUCCESSFULLY',
                position: 'top',
                duration: 5000,
                color: 'success',
                buttons: [
                    {
                        side: 'end',
                        icon: 'checkmark-done-sharp',
                        handler: () => {
                            console.log('Favorite clicked');
                        },
                    },
                ],
            });
            yield toast.present();
            const { role } = yield toast.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
SellerFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_seller_form_api_service__WEBPACK_IMPORTED_MODULE_6__["SellerFormApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
SellerFormPage.propDecorators = {
    ionContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: true },] }],
    ionSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], { static: false },] }],
    billingFormRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['billingFormRef', { static: false },] }],
    shippingFormRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['shippingFormRef', { static: false },] }],
    paymentFormRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['paymentFormRef', { static: false },] }]
};
SellerFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seller-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./seller-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/seller-form/seller-form.page.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./seller-form.page.scss */ "./src/app/seller-form/seller-form.page.scss")).default]
    })
], SellerFormPage);



/***/ }),

/***/ "./src/app/services/adform.json":
/*!**************************************!*\
  !*** ./src/app/services/adform.json ***!
  \**************************************/
/*! exports provided: form_1, form_2, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"form_1\":[{\"animaltype\":[\"cow\",\"buffalo\",\"ox\"],\"name\":\"type\",\"label\":\"Animal type\",\"value\":\"\",\"type\":\"select\"},{\"cow\":[\"cow 1\",\"cow 2\",\"cow 3\"],\"buffalo\":[\"buffalo 1\",\"buffalo 2\",\"buffalo 3\"],\"ox\":[\"ox 1\",\"ox 2\",\"ox 3\"],\"name\":\"breed\",\"label\":\"Animal breed\",\"value\":\"\",\"type\":\"select\"},{\"name\":\"description\",\"label\":\"Description about the animal.\",\"value\":\"\",\"type\":\"textarea\",\"placeholder\":\"describe your animal.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"askingPrice\",\"label\":\"Asking price\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter expected price.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"weight\",\"label\":\"Animal weight\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter animal wieght.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"age\",\"label\":\"Animal age\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter animal age.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"lactationNumber\",\"label\":\"Lactation\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter no. of lactation.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"milkPerDay\",\"label\":\"Milk/Day\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter milk quantity per day.\",\"validators\":{\"required\":true,\"minLength\":10}}],\"form_2\":[{\"name\":\"ownerName\",\"label\":\"Owner Name\",\"value\":\"\",\"type\":\"text\",\"placeholder\":\"enter your name.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"phone\",\"label\":\"Phone No.\",\"value\":\"\",\"type\":\"number\",\"placeholder\":\"enter your Phone No.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"state\",\"label\":\"State\",\"value\":\"\",\"type\":\"select\",\"placeholder\":\"select your state.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"town\",\"label\":\"Town\",\"value\":\"\",\"type\":\"select\",\"placeholder\":\"select your town.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"district\",\"label\":\"District\",\"value\":\"\",\"type\":\"select\",\"placeholder\":\"select your district.\",\"validators\":{\"required\":true,\"minLength\":10}},{\"name\":\"imagesList\",\"label\":\"Upload Images\",\"value\":\"\",\"type\":\"file\",\"validators\":{\"required\":true,\"minLength\":10}}]}");

/***/ }),

/***/ "./src/app/services/seller-form-api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/seller-form-api.service.ts ***!
  \*****************************************************/
/*! exports provided: SellerFormApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerFormApiService", function() { return SellerFormApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




;
let SellerFormApiService = class SellerFormApiService {
    constructor(http) {
        this.http = http;
        // private baseUrl = 'http://localhost:8080/api/v1/ads';
        this.baseUrl = 'http://mrgami-env.eba-e7nbfgvg.ap-south-1.elasticbeanstalk.com/api/v1/ads';
    }
    saveData(dat) {
        const headers = { 'content-type': 'application/json' };
        const body = dat;
        console.log(dat['imageUrls']);
        console.log('bodyline63', body);
        return this.http.post(this.baseUrl + '/ad', body, { headers });
        // return this.data;
    }
    getData() {
        console.log('getdata line 48', this.http.get(this.baseUrl + '/all'));
        return this.http.get(this.baseUrl + '/all');
    }
    handleError(error) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
};
SellerFormApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SellerFormApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SellerFormApiService);



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
            {
                path: 'blog-feedback',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-blog-feedback-blog-feedback-module */ "pages-blog-feedback-blog-feedback-module").then(__webpack_require__.bind(null, /*! ../pages/blog-feedback/blog-feedback.module */ "./src/app/pages/blog-feedback/blog-feedback.module.ts")).then(m => m.BlogFeedbackPageModule)
            },
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
            {
                path: 'seller-form',
                loadChildren: () => __webpack_require__.e(/*! import() | seller-form-seller-form-module */ "seller-form-seller-form-module").then(__webpack_require__.bind(null, /*! ../seller-form/seller-form.module */ "./src/app/seller-form/seller-form.module.ts")).then(m => m.SellerFormPageModule)
            },
            {
                path: 'item-details',
                loadChildren: () => __webpack_require__.e(/*! import() | item-details-item-details-module */ "item-details-item-details-module").then(__webpack_require__.bind(null, /*! ../item-details/item-details.module */ "./src/app/item-details/item-details.module.ts")).then(m => m.ItemDetailsPageModule)
            },
            {
                path: 'medicines',
                loadChildren: () => Promise.all(/*! import() | pages-medicines-medicines-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-medicines-medicines-module")]).then(__webpack_require__.bind(null, /*! ../pages/medicines/medicines.module */ "./src/app/pages/medicines/medicines.module.ts")).then(m => m.MedicinesPageModule),
            },
            {
                path: 'myads',
                loadChildren: () => Promise.all(/*! import() | pages-myads-myads-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-myads-myads-module")]).then(__webpack_require__.bind(null, /*! ../pages/myads/myads.module */ "./src/app/pages/myads/myads.module.ts")).then(m => m.MyadsPageModule),
            },
            {
                path: 'landing',
                loadChildren: () => __webpack_require__.e(/*! import() | landing-landing-module */ "landing-landing-module").then(__webpack_require__.bind(null, /*! ../landing/landing.module */ "./src/app/landing/landing.module.ts")).then(m => m.LandingPageModule)
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
                redirectTo: 'tabs/landing',
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

// import { NgModule } from '@angular/core';
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
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button.background {\n  --background: url('sell_image.jpg') 0 0/100% 100% no-repeat;\n}\n\n.tabsbg {\n  --background: transparent;\n}\n\nion-tab-bar.ion-no-border {\n  -webkit-clip-path: polygon(50% 0, 100% 17%, 100% 99%, 0 100%, 0 17%);\n          clip-path: polygon(50% 0, 100% 17%, 100% 99%, 0 100%, 0 17%);\n  height: 10%;\n  --background: #36363F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJEQUFBO0FBQUo7O0FBZUE7RUFDSSx5QkFBQTtBQVpKOztBQWVBO0VBQ0ksb0VBQUE7VUFBQSw0REFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVpKIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tZmFiLWJ1dHRvbi5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3NlbGxfaW1hZ2UuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuXHJcbi8vIGlvbi10YWItYmFyLmlvbi1uby1ib3JkZXJ7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBib3R0b206IDA7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogIzFlMWUxZTg1O1xyXG5cclxuLy8gICAgIGlvbi10YWItYnV0dG9uIHtcclxuLy8gICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLnRhYnNiZ3tcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi10YWItYmFyLmlvbi1uby1ib3JkZXJ7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDEwMCUgMTclLCAxMDAlIDk5JSwgMCAxMDAlLCAwIDE3JSk7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzM2MzYzRjtcclxuICAgIC8vIGlvbi10YWItYnV0dG9uLmJhY2tncm91bmQtYXZhdGFye1xyXG4gICAgLy8gICAgIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL2Zhdmljb24ucG5nKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgICAgXHJcbiAgICAvLyB9XHJcbiAgICAvLyBpb24tdGFiLWJ1dHRvbi5iYWNrZ3JvdW5kLW15YWRze1xyXG4gICAgLy8gICAgIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL2FkLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAgICAgXHJcbiAgICAvLyB9XHJcbiAgICAvLyBpb24tdGFiLWJ1dHRvbi5iYWNrZ3JvdW5kLWhvbWV7XHJcbiAgICAvLyAgICAgLS1iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ljb24vaG9tZS5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgICAgXHJcbiAgICAvLyB9XHJcbiAgICAvLyBpb24tdGFiLWJ1dHRvbi5iYWNrZ3JvdW5kLXB1cmNoYXNle1xyXG4gICAgLy8gICAgIC0tYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pY29uL29sZC1wdXJjaGFzZS5wbmcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgICAgIFxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ== */");

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