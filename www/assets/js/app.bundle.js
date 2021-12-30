/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./jsbundle/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./jsbundle/core/router.js":
/*!*********************************!*\
  !*** ./jsbundle/core/router.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SensenRouter = void 0;
var SensenRouter = /** @class */ (function () {
    function SensenRouter(config) {
        this.config = config;
        this.routes = {};
    }
    SensenRouter.prototype.add = function (view) {
        this.routes[view.slug] = view;
        return this;
    };
    SensenRouter.prototype.render = function () {
        var _this = this;
        globalThis.addEventListener('hashchange', function () {
            var slug = (location.hash || '').substr(1);
            _this.navigate(slug);
        });
        if (this.config.default) {
            this.navigate(this.config.default);
        }
        return this;
    };
    SensenRouter.prototype.navigate = function (slug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.view = _this.routes[slug] || null;
            console.log('View Object ', slug, _this.view, _this.routes);
            if (_this.view) {
                fetch("./views/".concat(slug, ".html"))
                    .then(function (r) { return r.text(); })
                    .then(function (html) {
                    var page = new DOMParser().parseFromString(html, 'text/html');
                    console.log('View HTML ', page, html);
                    location.hash = slug;
                    _this.parse(page.body);
                    resolve(page);
                })
                    .catch(function (er) {
                    reject(er);
                    alert('Page introuvable');
                });
            }
            else {
                alert('404 Erreur');
            }
        });
    };
    SensenRouter.prototype.parse = function (dom) {
        if (this.rootElement) {
            this.rootElement.innerHTML = '';
            this.rootElement.appendChild(dom);
        }
        console.log('View HTML ', dom, this.rootElement);
    };
    return SensenRouter;
}());
exports.SensenRouter = SensenRouter;
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "./jsbundle/core/view.js":
/*!*******************************!*\
  !*** ./jsbundle/core/view.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SensenView = void 0;
var SensenView = /** @class */ (function () {
    function SensenView(props) {
        this.slug = props.slug;
        this.source = props.source;
        this.onmount = props.mount;
        this.onunmount = props.unmount;
    }
    return SensenView;
}());
exports.SensenView = SensenView;
//# sourceMappingURL=view.js.map

/***/ }),

/***/ "./jsbundle/index.js":
/*!***************************!*\
  !*** ./jsbundle/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! ./router */ "./jsbundle/router.js");
var SensenJSApp = function (appRoot) {
    console.warn('App in ', appRoot, router_1.default);
    // appRoot.innerHTML = 'Chargement...'
    router_1.default.rootElement = appRoot;
    router_1.default.render();
};
//@ts-ignore
window.SensenJSApp = SensenJSApp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./jsbundle/router.js":
/*!****************************!*\
  !*** ./jsbundle/router.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(/*! ./core/router */ "./jsbundle/core/router.js");
var about_1 = __webpack_require__(/*! ./view/about */ "./jsbundle/view/about.js");
var home_1 = __webpack_require__(/*! ./view/home */ "./jsbundle/view/home.js");
var AppRouter = new router_1.SensenRouter({
    default: 'home'
});
AppRouter
    .add(home_1.default)
    .add(about_1.default);
exports.default = AppRouter;
//# sourceMappingURL=router.js.map

/***/ }),

/***/ "./jsbundle/view/about.js":
/*!********************************!*\
  !*** ./jsbundle/view/about.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(/*! ../core/view */ "./jsbundle/core/view.js");
var AboutView = new view_1.SensenView({
    slug: 'about',
    source: 'about.html',
    mount: function () {
        alert('View Mounted');
    },
    unmount: function () {
        alert('View UnMounted');
    },
});
exports.default = AboutView;
//# sourceMappingURL=about.js.map

/***/ }),

/***/ "./jsbundle/view/home.js":
/*!*******************************!*\
  !*** ./jsbundle/view/home.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(/*! ../core/view */ "./jsbundle/core/view.js");
var HomeView = new view_1.SensenView({
    slug: 'home',
    source: 'home.html',
    mount: function () {
        alert('View Mounted');
    },
    unmount: function () {
        alert('View UnMounted');
    },
});
exports.default = HomeView;
//# sourceMappingURL=home.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanNidW5kbGUvY29yZS9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanNidW5kbGUvY29yZS92aWV3LmpzIiwid2VicGFjazovLy8uL2pzYnVuZGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzYnVuZGxlL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9qc2J1bmRsZS92aWV3L2Fib3V0LmpzIiwid2VicGFjazovLy8uL2pzYnVuZGxlL3ZpZXcvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxpQkFBaUIsRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUMxRGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxnQzs7Ozs7Ozs7Ozs7O0FDYmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsc0NBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUNYYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxnREFBZTtBQUN0QyxjQUFjLG1CQUFPLENBQUMsOENBQWM7QUFDcEMsYUFBYSxtQkFBTyxDQUFDLDRDQUFhO0FBQ2xDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7O0FDWmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxhQUFhLG1CQUFPLENBQUMsNkNBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUNkYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyw2Q0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsZ0MiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanNidW5kbGUvaW5kZXguanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2Vuc2VuUm91dGVyID0gdm9pZCAwO1xudmFyIFNlbnNlblJvdXRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZW5zZW5Sb3V0ZXIoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnJvdXRlcyA9IHt9O1xuICAgIH1cbiAgICBTZW5zZW5Sb3V0ZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgIHRoaXMucm91dGVzW3ZpZXcuc2x1Z10gPSB2aWV3O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFNlbnNlblJvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2x1ZyA9IChsb2NhdGlvbi5oYXNoIHx8ICcnKS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBfdGhpcy5uYXZpZ2F0ZShzbHVnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5kZWZhdWx0KSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKHRoaXMuY29uZmlnLmRlZmF1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgU2Vuc2VuUm91dGVyLnByb3RvdHlwZS5uYXZpZ2F0ZSA9IGZ1bmN0aW9uIChzbHVnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBfdGhpcy52aWV3ID0gX3RoaXMucm91dGVzW3NsdWddIHx8IG51bGw7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVmlldyBPYmplY3QgJywgc2x1ZywgX3RoaXMudmlldywgX3RoaXMucm91dGVzKTtcbiAgICAgICAgICAgIGlmIChfdGhpcy52aWV3KSB7XG4gICAgICAgICAgICAgICAgZmV0Y2goXCIuL3ZpZXdzL1wiLmNvbmNhdChzbHVnLCBcIi5odG1sXCIpKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocikgeyByZXR1cm4gci50ZXh0KCk7IH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdlID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdWaWV3IEhUTUwgJywgcGFnZSwgaHRtbCk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhhc2ggPSBzbHVnO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wYXJzZShwYWdlLmJvZHkpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBhZ2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1BhZ2UgaW50cm91dmFibGUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCc0MDQgRXJyZXVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2Vuc2VuUm91dGVyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChkb20pIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB0aGlzLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ1ZpZXcgSFRNTCAnLCBkb20sIHRoaXMucm9vdEVsZW1lbnQpO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbnNlblJvdXRlcjtcbn0oKSk7XG5leHBvcnRzLlNlbnNlblJvdXRlciA9IFNlbnNlblJvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2Vuc2VuVmlldyA9IHZvaWQgMDtcbnZhciBTZW5zZW5WaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlbnNlblZpZXcocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zbHVnID0gcHJvcHMuc2x1ZztcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBwcm9wcy5zb3VyY2U7XG4gICAgICAgIHRoaXMub25tb3VudCA9IHByb3BzLm1vdW50O1xuICAgICAgICB0aGlzLm9udW5tb3VudCA9IHByb3BzLnVubW91bnQ7XG4gICAgfVxuICAgIHJldHVybiBTZW5zZW5WaWV3O1xufSgpKTtcbmV4cG9ydHMuU2Vuc2VuVmlldyA9IFNlbnNlblZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12aWV3LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIFNlbnNlbkpTQXBwID0gZnVuY3Rpb24gKGFwcFJvb3QpIHtcbiAgICBjb25zb2xlLndhcm4oJ0FwcCBpbiAnLCBhcHBSb290LCByb3V0ZXJfMS5kZWZhdWx0KTtcbiAgICAvLyBhcHBSb290LmlubmVySFRNTCA9ICdDaGFyZ2VtZW50Li4uJ1xuICAgIHJvdXRlcl8xLmRlZmF1bHQucm9vdEVsZW1lbnQgPSBhcHBSb290O1xuICAgIHJvdXRlcl8xLmRlZmF1bHQucmVuZGVyKCk7XG59O1xuLy9AdHMtaWdub3JlXG53aW5kb3cuU2Vuc2VuSlNBcHAgPSBTZW5zZW5KU0FwcDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIi4vY29yZS9yb3V0ZXJcIik7XG52YXIgYWJvdXRfMSA9IHJlcXVpcmUoXCIuL3ZpZXcvYWJvdXRcIik7XG52YXIgaG9tZV8xID0gcmVxdWlyZShcIi4vdmlldy9ob21lXCIpO1xudmFyIEFwcFJvdXRlciA9IG5ldyByb3V0ZXJfMS5TZW5zZW5Sb3V0ZXIoe1xuICAgIGRlZmF1bHQ6ICdob21lJ1xufSk7XG5BcHBSb3V0ZXJcbiAgICAuYWRkKGhvbWVfMS5kZWZhdWx0KVxuICAgIC5hZGQoYWJvdXRfMS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcFJvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB2aWV3XzEgPSByZXF1aXJlKFwiLi4vY29yZS92aWV3XCIpO1xudmFyIEFib3V0VmlldyA9IG5ldyB2aWV3XzEuU2Vuc2VuVmlldyh7XG4gICAgc2x1ZzogJ2Fib3V0JyxcbiAgICBzb3VyY2U6ICdhYm91dC5odG1sJyxcbiAgICBtb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICBhbGVydCgnVmlldyBNb3VudGVkJyk7XG4gICAgfSxcbiAgICB1bm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFsZXJ0KCdWaWV3IFVuTW91bnRlZCcpO1xuICAgIH0sXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFib3V0Vmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFib3V0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHZpZXdfMSA9IHJlcXVpcmUoXCIuLi9jb3JlL3ZpZXdcIik7XG52YXIgSG9tZVZpZXcgPSBuZXcgdmlld18xLlNlbnNlblZpZXcoe1xuICAgIHNsdWc6ICdob21lJyxcbiAgICBzb3VyY2U6ICdob21lLmh0bWwnLFxuICAgIG1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFsZXJ0KCdWaWV3IE1vdW50ZWQnKTtcbiAgICB9LFxuICAgIHVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWxlcnQoJ1ZpZXcgVW5Nb3VudGVkJyk7XG4gICAgfSxcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSG9tZVZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob21lLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=