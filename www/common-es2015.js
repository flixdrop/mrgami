(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); } });
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-search-filter.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed-modal/feed-modal.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed-modal/feed-modal.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding content-color\">\n  <ion-card class=\"card-color\">\n    <ion-item lines=\"none\" color=\"none\">\n      <ion-icon slot=\"end\" name=\"close\" color=\"medium\" (click)=\"dismiss()\"></ion-icon>\n    </ion-item>\n    <ion-card-header>\n     <ion-label color=\"light\"> {{name}} </ion-label> \n    </ion-card-header>\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"reverseCenter\" size=\"12\">\n          <ion-thumbnail>\n            <ion-img src=\"{{image}}\"></ion-img>\n          </ion-thumbnail>\n        </ion-col>\n        \n      </ion-row>\n      <ion-row>\n        <ion-col class=\"reverseCenter\" size=\"12\">\n          <ion-label>REFIT ANIMAL CARE – 10 Kg Chelated Mineral Mixture for\n            Buffalo,Cow,Cattle,Poultry,\n            Goat & Pig (RIGMIN Forte Powder)\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-toolbar color=\"none\">\n      <ion-item slot=\"start\" lines=\"none\" color=\"none\">\n        <ion-label color=\"success\">{{ price | currency:'INR' }}</ion-label>\n      </ion-item>\n    </ion-toolbar>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback-modal/feedback-modal.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback-modal/feedback-modal.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding content-color\">\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item lines=\"none\" color=\"none\">\n        <ion-icon slot=\"end\" name=\"close\" color=\"medium\" (click)=\"dismiss()\"></ion-icon>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-label>{{'From- '+name}}</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <form [formGroup]=\"feedbackForm\" (ngSubmit)=\"onClickSubmit()\">\n        <ion-toolbar class=\"card-color\">\n          <ion-item lines=\"full\" color=\"none\">\n            <ion-label color=\"danger\" for=\"email\" position=\"floating\">{{doTranslation('E-Mail')}}</ion-label>\n            <ion-input type=\"textarea\" formControlName=\"email\" placeholder=\"enter your email.\"></ion-input>\n          </ion-item>\n        </ion-toolbar>\n        <ion-toolbar class=\"card-color\">\n          <ion-item lines=\"full\" color=\"none\">\n            <ion-label color=\"danger\" for=\"feedback\" position=\"floating\">{{doTranslation('Give Feedback')}}</ion-label>\n            <ion-input type=\"email\" formControlName=\"feedback\" placeholder=\"write your feedback...\"></ion-input>\n          </ion-item>\n        </ion-toolbar>\n        <ion-button [disabled]=\"!feedbackForm.get('feedback').dirty\" size=\"small\" color=\"success\" expand=\"block\" type=\"submit\">Send Feedback</ion-button>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myads-modal/myads-modal.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myads-modal/myads-modal.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-card class=\"card\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col class=\"imgCol\" size=\"4\"  >\r\n        \r\n            <ion-slides pager=\"true\" [options]=\"slideOpts\"  *ngIf=\"viewEntered\" zoom=\"true\">\r\n              <ion-slide *ngFor=\"let img of imgUrl\">\r\n                <ion-img style=\"background-image: url('{{img}}');\" class=\"img\"></ion-img>\r\n              </ion-slide>\r\n            </ion-slides>\r\n        \r\n        </ion-col>\r\n        <ion-col size=\"8\">\r\n          <ion-row>\r\n            <ion-col class=\"cardTitle\">\r\n              <ion-label color=\"success\">{{doTranslation('ANIMAL')}}: {{animal}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">{{doTranslation('Breed')}}: {{breed}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">{{doTranslation('Lactation')}}: {{location}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">{{doTranslation('Status')}}: {{status}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">{{doTranslation('Milk/Day')}}: {{milkPerDay}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">{{doTranslation('Age')}}: {{age}}</ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"subLabels\">{{doTranslation('Calf')}}: {{calf}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n  <ion-item class=\"successMsg\">\r\n    <ion-label>\r\n      {{doTranslation('SUCCESSFULLY POSTED!')}}\r\n    </ion-label>\r\n  </ion-item>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button  expand=\"full\" color=\"success\" (click)=\"dismiss()\">\r\n    <ion-label class=\"subLabels\">{{doTranslation('OK!')}}</ion-label></ion-button>\r\n</ion-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/preview-modal/preview-modal.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/preview-modal/preview-modal.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"ion-padding content-color\">\n<ion-card class=\"card-color\">\n  <ion-toolbar class=\"center title-toolbar\">\n    <ion-text>{{doTranslation('Animal Details')}}</ion-text>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('Animal Name')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.animalDetails.animalName}}</ion-text>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('Animal Type')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.type}}</ion-text>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('Animal Breed')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.animalDetails.breed}}</ion-text>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('Description about the Animal')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.animalDetails.description}}</ion-text>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('Asking Price')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.animalDetails.askingPrice}}</ion-text>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('Animal Wieght')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.animalDetails.wieght}}</ion-text>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('Lactation')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.animalDetails.lactationNumber}}</ion-text>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('Milk Per Day')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.animalDetails.milkPerDay}}</ion-text>\n  </ion-toolbar>\n\n  <hr>\n\n  <ion-toolbar class=\"center title-toolbar\">\n    <ion-text>{{doTranslation('Seller Details')}}</ion-text>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('Owner Name')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.sellerInformation.ownerName}}</ion-text>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-img src=\"{{data.imageUrls.imagesList}}\"></ion-img>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('Phone No.')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.sellerInformation.phone}}</ion-text>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('District')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.sellerInformation.district}}</ion-text>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('State')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.sellerInformation.state}}</ion-text>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-text slot=\"start\">{{doTranslation('Town')}}</ion-text>\n    <ion-text slot=\"end\" color=\"medium\">{{data.sellerInformation.town}}</ion-text>\n  </ion-toolbar>\n  \n  <ion-button size=\"small\" color=\"success\" expand=\"block\" (click)=\"dismiss()\">{{doTranslation('Save')}}</ion-button>\n</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/feed-modal/feed-modal.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/feed-modal/feed-modal.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-thumbnail {\n  width: 100%;\n  height: 100%;\n}\n\nion-card {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZC1tb2RhbC9mZWVkLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmVlZC1tb2RhbC9mZWVkLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aHVtYm5haWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJke1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/feed-modal/feed-modal.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/feed-modal/feed-modal.page.ts ***!
  \*****************************************************/
/*! exports provided: FeedModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedModalPage", function() { return FeedModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let FeedModalPage = class FeedModalPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
        console.log('name- ', this.name);
        console.log('image- ', this.image);
        console.log('price- ', this.price);
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
FeedModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
FeedModalPage.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    price: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
FeedModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./feed-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed-modal/feed-modal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./feed-modal.page.scss */ "./src/app/pages/feed-modal/feed-modal.page.scss")).default]
    })
], FeedModalPage);



/***/ }),

/***/ "./src/app/pages/feedback-modal/feedback-modal.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/feedback-modal/feedback-modal.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  margin: 0;\n  padding: 0;\n}\n\nion-input {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZGJhY2stbW9kYWwvZmVlZGJhY2stbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWRiYWNrLW1vZGFsL2ZlZWRiYWNrLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/feedback-modal/feedback-modal.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/feedback-modal/feedback-modal.page.ts ***!
  \*************************************************************/
/*! exports provided: FeedbackModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackModalPage", function() { return FeedbackModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/translate.service */ "./src/app/services/translate.service.ts");







let FeedbackModalPage = class FeedbackModalPage {
    constructor(auth, router, modalCtrl, translateService) {
        this.auth = auth;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.translateService = translateService;
    }
    ngOnInit() {
        this.auth.getUserDetails().then(res => {
            console.log('res- ', res);
            this.name = res[1]['Value'];
        });
        this.feedbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            feedback: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    onClickSubmit() {
        console.log('feedback- ', this.feedbackForm.value);
        this.modalCtrl.dismiss();
    }
    doTranslation(text) {
        var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
        return translateText;
    }
};
FeedbackModalPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
FeedbackModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./feedback-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback-modal/feedback-modal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./feedback-modal.page.scss */ "./src/app/pages/feedback-modal/feedback-modal.page.scss")).default]
    })
], FeedbackModalPage);



/***/ }),

/***/ "./src/app/pages/myads-modal/myads-modal.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/myads-modal/myads-modal.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardTitle {\n  text-align: center;\n  color: darkgreen;\n  font-weight: bold;\n}\n\n.card {\n  background-color: #36363F;\n}\n\n.cardButtons {\n  --background: #36363F !important;\n  color: white;\n  font-weight: bold;\n}\n\n.imgCol {\n  padding: 0;\n  text-align: center;\n  align-items: center;\n}\n\n.my-custom-class {\n  --background: #36363F;\n}\n\n.successMsg {\n  --background: #36363F;\n  font-weight: bold;\n  color: green;\n  text-align: center;\n  justify-content: center;\n}\n\n.subLabels {\n  color: white;\n  font-weight: bold;\n}\n\n.img {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-slides {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXlhZHMtbW9kYWwvbXlhZHMtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teWFkcy1tb2RhbC9teWFkcy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZFRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogZGFya2dyZWVuO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjNGO1xyXG59XHJcblxyXG4uY2FyZEJ1dHRvbnN7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMzYzNjNGICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW1nQ29se1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5teS1jdXN0b20tY2xhc3Mge1xyXG4gIC0tYmFja2dyb3VuZDogIzM2MzYzRjtcclxufVxyXG5cclxuLnN1Y2Nlc3NNc2d7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMzYzNjNGO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWJMYWJlbHN7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW1ne1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4gIFxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/pages/myads-modal/myads-modal.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/myads-modal/myads-modal.page.ts ***!
  \*******************************************************/
/*! exports provided: MyadsModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyadsModalPage", function() { return MyadsModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/translate.service */ "./src/app/services/translate.service.ts");




let MyadsModalPage = class MyadsModalPage {
    constructor(modalController, translateService) {
        this.modalController = modalController;
        this.translateService = translateService;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
    }
    ngOnInit() {
        this.imgUrl.trim();
        console.log("imgUrl- ", this.imgUrl);
    }
    ionViewDidEnter() {
        this.viewEntered = true;
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true,
        });
    }
    doTranslation(text) {
        var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
        return translateText;
    }
};
MyadsModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
MyadsModalPage.propDecorators = {
    imgUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    animal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    breed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    milkPerDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    age: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    calf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MyadsModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-myads-modal",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./myads-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/myads-modal/myads-modal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./myads-modal.page.scss */ "./src/app/pages/myads-modal/myads-modal.page.scss")).default]
    })
], MyadsModalPage);



/***/ }),

/***/ "./src/app/pages/preview-modal/preview-modal.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/preview-modal/preview-modal.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: transparent;\n}\n\nion-text {\n  color: white;\n}\n\n.title-toolbar {\n  display: flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n}\n\nion-img {\n  height: 25%;\n  width: 100%;\n}\n\nion-content {\n  margin: 0;\n  padding: 0;\n}\n\nion-content ion-card {\n  margin: 0;\n  padding: 0;\n  padding: 0 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJldmlldy1tb2RhbC9wcmV2aWV3LW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFDSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJldmlldy1tb2RhbC9wcmV2aWV3LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLXRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50aXRsZS10b29sYmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWltZ3tcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwYWRkaW5nOiAwIDIlO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/preview-modal/preview-modal.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/preview-modal/preview-modal.page.ts ***!
  \***********************************************************/
/*! exports provided: PreviewModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewModalPage", function() { return PreviewModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/translate.service */ "./src/app/services/translate.service.ts");





let PreviewModalPage = class PreviewModalPage {
    constructor(modalController, router, translateService) {
        this.modalController = modalController;
        this.router = router;
        this.translateService = translateService;
    }
    ngOnInit() {
        console.log('data- ', this.data);
    }
    dismiss() {
        this.router.navigateByUrl('tabs/landing');
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    doTranslation(text) {
        var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
        return translateText;
    }
};
PreviewModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
PreviewModalPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
PreviewModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preview-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./preview-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/preview-modal/preview-modal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./preview-modal.page.scss */ "./src/app/pages/preview-modal/preview-modal.page.scss")).default]
    })
], PreviewModalPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map