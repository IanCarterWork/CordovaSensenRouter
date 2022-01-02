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

/***/ "./jsbundle/core/LocationMethods.js":
/*!******************************************!*\
  !*** ./jsbundle/core/LocationMethods.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LocationGetMethods = {
    parseString(str, encoding = false) {
        const out = {};
        const ex = str.split('&');
        ex.map(q => {
            const qu = q.split('=');
            out[qu[0]] = `${qu[1]}`;
        });
        return out;
    },
    trigger(props) {
        const ex = (location.hash ? location.hash.substr(1) : props.router.config.default || '').split('?');
        const params = this.parseString(ex[1] || '');
        Object.entries(params || {}).map(param => {
            window.$SensenRLP.push(param[0], param[1]);
        });
        return params;
    }
};
exports.default = LocationGetMethods;
//# sourceMappingURL=LocationMethods.js.map

/***/ }),

/***/ "./jsbundle/core/MetricRandom.js":
/*!***************************************!*\
  !*** ./jsbundle/core/MetricRandom.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtorianMetricRandom = void 0;
class ProtorianMetricRandom {
    static CreateRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    static CreateBlock(base, length) {
        let based, out = [];
        if (typeof base == 'string') {
            based = base.split(' ');
        }
        if (Array.isArray(based)) {
            for (let x = 0; x < length; x++) {
                const k = this.CreateRandom(0, based.length - 1);
                out[out.length] = based[k];
            }
        }
        return out;
    }
    static CreateAplpha(length) {
        return this.CreateBlock(`${this.ALPHA_LOWER} ${this.ALPHA_UPPER}`, length);
    }
    static CreateNumeric(length) {
        return this.CreateBlock(`${this.NUMERIC}`, length);
    }
    static Create(length) {
        return this.CreateBlock(`${this.ALPHA_NUMERIC}`, length);
    }
}
exports.ProtorianMetricRandom = ProtorianMetricRandom;
ProtorianMetricRandom.ALPHA_NUMERIC = 'a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';
ProtorianMetricRandom.ALPHA_NUMERIC_LOWER = 'a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9';
ProtorianMetricRandom.ALPHA_NUMERIC_UPPER = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';
ProtorianMetricRandom.ALPHA_UPPER = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
ProtorianMetricRandom.ALPHA_LOWER = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
ProtorianMetricRandom.NUMERIC = '0 1 2 3 4 5 6 7 8 9';
//# sourceMappingURL=MetricRandom.js.map

/***/ }),

/***/ "./jsbundle/core/Router.js":
/*!*********************************!*\
  !*** ./jsbundle/core/Router.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SensenRouter = void 0;
const View_1 = __webpack_require__(/*! ./View */ "./jsbundle/core/View.js");
class SensenRouter {
    constructor(config) {
        this.config = config;
        this.routes = {};
    }
    add(view) {
        this.routes[view.slug] = view;
        return this;
    }
    render() {
        globalThis.addEventListener('hashchange', () => {
            const slug = (location.hash || '').substr(1);
            this.navigate(slug);
        });
        if (this.config.default) {
            this.navigate(location.hash ? location.hash.substr(1) : this.config.default);
        }
        return this;
    }
    parseSlug(slug) {
        const ex = slug.split('?');
        return {
            name: ex[0],
            search: ex[1] || ''
        };
    }
    navigate(slug) {
        const pslug = this.parseSlug(slug);
        /**
         * Unmount last View
         */
        if (window.View instanceof View_1.SensenView) {
            if ('unmounted' in window.View) {
                window.View.unmounted(window.View.dependencies);
            }
        }
        return new Promise((resolve, reject) => {
            this.view = this.routes[pslug.name] || null;
            if (this.view) {
                fetch(`./views/${pslug.name}.html`)
                    .then(r => r.text())
                    .then(html => {
                    const element = new DOMParser().parseFromString(html, 'text/html');
                    const fragment = document.createElement('div');
                    window.$SensenRLP.clean();
                    window.$SensenNodeRefVariables = {};
                    Object.values(element.body.children).map(c => fragment.appendChild(c));
                    this.view.render(fragment, this);
                    resolve(element);
                    location.hash = slug;
                    if ('mounted' in this.view) {
                        this.view.mounted(this.view.dependencies);
                    }
                })
                    .catch(er => {
                    reject(er);
                    throw (`SensenJS Router say :\n${er}`);
                });
            }
            else {
                throw (`SensenJS Router say route < \n${slug} > not found`);
            }
        });
    }
}
exports.SensenRouter = SensenRouter;
//# sourceMappingURL=Router.js.map

/***/ }),

/***/ "./jsbundle/core/View.js":
/*!*******************************!*\
  !*** ./jsbundle/core/View.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SensenView = void 0;
const framework_1 = __webpack_require__(/*! ./framework */ "./jsbundle/core/framework.js");
window.View = {};
class SensenView {
    constructor(props) {
        this.slug = props.slug;
        this.source = props.source;
        this.controller = props.controller || (() => { });
        this.mounted = props.mounted || (() => { });
        this.unmounted = props.unmounted || (() => { });
    }
    cleanRoot() {
        if (this.root) {
            this.root.innerHTML = '';
        }
        return this;
    }
    render(input, router) {
        window.View = this;
        const dependencies = router.config.viewControllersDependencies;
        //root : HTMLElement, dependencies?: SensenTViewControllersDependencies
        /**
         * Get All Dependencies
         */
        const _dependencies = {};
        if (typeof dependencies == 'object') {
            const _dependenciesArgs = {
                view: this,
                router,
                input,
            };
            const _dependenciesArray = Object.entries(dependencies || {});
            if (_dependenciesArray.length) {
                _dependenciesArray.forEach(dep => {
                    _dependencies[dep[0]] = 'trigger' in dep[1] ? dep[1].trigger(_dependenciesArgs) : (() => { });
                });
            }
        }
        _dependencies.view = this;
        this.dependencies = _dependencies;
        /**
         * States
         */
        this.router = router;
        this.input = input;
        this.root = router.root;
        /**
         * Compilate
         */
        (0, framework_1.CompilatorRecordsRefsVariables)(this.input);
        (0, framework_1.Compilator)(this.input);
        /**
         * Init Controller with dependencies
         */
        if ('controller' in this) {
            this.controller(_dependencies);
        }
        /**
         * Parsing
         */
        this.setContent(this.input);
        // console.log('Render View ', window.$SensenRLP.retrives(),  _dependencies)
        return this;
    }
    setContent(element) {
        // console.log('Parse :', element, this.root )
        if (this.root) {
            this.cleanRoot().root.appendChild(element);
        }
        return this;
    }
    setVariable(name, value) {
        const defaultDictionary = window.$SensenRLP.retrives() || {};
        const dictionary = {};
        Object.entries(defaultDictionary).map(dic => {
            dictionary[dic[0]] = dic[1];
        });
        dictionary[name] = value;
        if (window.$SensenNodeRefVariables[name]) {
            const check = window.$SensenNodeRefVariables[name];
            const target = this.input.querySelector(`[sensen-ref="${check.ref}"]`);
            if (target) {
                if (check.content) {
                    /** Element Content */
                    target.innerHTML = (0, framework_1.CompilateVariables)(check.content, dictionary);
                }
                if (check.attribute) {
                    /** Element Content */
                    target.setAttribute(check.attribute.name, check.attribute.value.replace(check.records[1].match[0], (value || check.records[1].syntax[1]).trim()));
                }
                /** * Update */
                (0, framework_1.CompilatorNodeVariables)(target, dictionary);
            }
        }
        return this;
    }
}
exports.SensenView = SensenView;
//# sourceMappingURL=View.js.map

/***/ }),

/***/ "./jsbundle/core/framework.js":
/*!************************************!*\
  !*** ./jsbundle/core/framework.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Compilator = exports.CompilatorNodeVariables = exports.CompilateVariables = exports.CompilatorRecordsRefsVariables = exports.CompilatorCheckVariables = void 0;
const MetricRandom_1 = __webpack_require__(/*! ./MetricRandom */ "./jsbundle/core/MetricRandom.js");
window.$SensenNodeRefVariables = {};
window.$SensenRLP = {
    entries: {},
    push(name, value) {
        this.entries[name] = value;
        return this;
    },
    remove(name) {
        delete this.entries[name];
        return this;
    },
    clean() {
        this.entries = {};
        return this;
    },
    retrive(name) {
        return this.entries[name];
    },
    retrives() {
        return this.entries || {};
    },
};
/**
 * @WorkInProgressBegin
 */
/**
 * Sensen HTML Element
 */
// export class SensenElement extends HTMLElement{
// }
/**
 * Sensen Element : Value
 */
// export class SensenElementEcho extends SensenElement{
//     init(){
//         const get = this.getAttribute('get');
//         const set = this.getAttribute('set');
//         const or = this.getAttribute('or');
//         console.log('Parse Echo Element', get, or, set)
//         if(typeof get == 'string'){
//             const value = window.$SensenRLP.retrive(get) || or || '';
//             const ref = document.createTextNode(value)
//             this.parentNode.replaceChild(ref, this)
//         }
//         return this;
//     }
//     connectedCallback(){
//         this.init();
//     }
// }
// if(!customElements.get('sn-echo')){ globalThis.customElements.define('sn-echo', SensenElementEcho); }
/**
 * @WorkInProgressEnd
 */
function CompilatorCheckVariables(content) {
    const records = {};
    const variableRex = new RegExp('{{(.*?)}}', 'g');
    const contentMatches = [...content.matchAll(variableRex)];
    Object.values(contentMatches).map(match => {
        const syntax = match[1].split('||');
        syntax[0] = syntax[0].trim();
        syntax[1] = (syntax[1] || '').trim().replace(/'(.*)'/gi, "$1");
        syntax[1] = (syntax[1] || '').trim().replace(/"(.*)"/gi, "$1");
        records[syntax[0]] = { match, syntax, };
    });
    return records;
}
exports.CompilatorCheckVariables = CompilatorCheckVariables;
function CompilatorRecordsRefsVariables(element) {
    const state = {};
    if (element) {
        Object.values(element.children).map(child => {
            const children = Object.values(child);
            const hasChildren = children.length;
            if (!hasChildren) {
                const refID = MetricRandom_1.ProtorianMetricRandom.CreateAplpha(32).join('');
                /** Element Content */
                Object.entries(CompilatorCheckVariables(child.innerHTML) || {}).map(entry => {
                    window.$SensenNodeRefVariables[entry[0]] = {
                        ref: refID,
                        records: entry,
                        content: child.innerHTML,
                        attribute: undefined,
                    };
                    child.setAttribute('sensen-ref', refID);
                });
                /** Element Attributes */
                Object.values(child.attributes).map(attr => {
                    Object.entries(CompilatorCheckVariables(attr.value) || {}).map(entry => {
                        window.$SensenNodeRefVariables[entry[0]] = {
                            ref: refID,
                            records: entry,
                            content: undefined,
                            attribute: { name: attr.name, value: attr.value, },
                        };
                        child.setAttribute('sensen-ref', refID);
                    });
                });
            }
            else {
                CompilatorNodeVariables(child);
            }
        });
    }
    return state;
}
exports.CompilatorRecordsRefsVariables = CompilatorRecordsRefsVariables;
function CompilateVariables(content, dictionary) {
    const _dictionary = dictionary || window.$SensenRLP.retrives();
    Object.entries(CompilatorCheckVariables(content) || {}).map(entry => {
        if (window.$SensenNodeRefVariables[entry[0]]) {
            content = content.replace(entry[1].match[0], (_dictionary[entry[0]] || entry[1].syntax[1] || entry[0]).trim());
        }
    });
    return content;
}
exports.CompilateVariables = CompilateVariables;
function CompilatorNodeVariables(element, dictionary) {
    const state = {};
    if (element) {
        if (element.children.length) {
            Object.values(element.children).map(child => {
                const children = Object.values(child);
                const hasChildren = children.length;
                if (!hasChildren) {
                    /** Element Content */
                    child.innerHTML = CompilateVariables(child.innerHTML, dictionary);
                    /** Element Attributes */
                    Object.values(child.attributes).map(attr => {
                        if (attr.name == 'sensen-ref') {
                            return;
                        }
                        const value = CompilateVariables(attr.value, dictionary);
                        child.setAttribute(attr.name, value);
                    });
                }
                else {
                    CompilatorNodeVariables(child, dictionary);
                }
            });
        }
        else {
            element.innerHTML = CompilateVariables(element.innerHTML, dictionary);
            Object.values(element.attributes).map(attr => {
                if (attr.name == 'sensen-ref') {
                    return;
                }
                const value = CompilateVariables(attr.value, dictionary);
                element.setAttribute(attr.name, value);
            });
        }
    }
    return state;
}
exports.CompilatorNodeVariables = CompilatorNodeVariables;
// export function CompilateActions(element: HTMLElement){
//     console.warn('Actions :', element, )
// }
function Compilator(element) {
    const content = element.innerHTML;
    let parsing = CompilateVariables(content);
    element.innerHTML = parsing;
    // CompilateActions(element)
}
exports.Compilator = Compilator;
class Sensen {
    static JS(app) {
        console.log(`${this.Name} is ready`);
        window.SensenJSApp = app;
    }
}
exports.default = Sensen;
Sensen.Name = 'Sensen Senju';
Sensen.RLPObject = window.$SensenRLP;
Sensen.Compilator = Compilator;
Sensen.CompilateVariables = CompilateVariables;
Sensen.CompilatorNodeVariables = CompilatorNodeVariables;
//# sourceMappingURL=framework.js.map

/***/ }),

/***/ "./jsbundle/dependencies.js":
/*!**********************************!*\
  !*** ./jsbundle/dependencies.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LocationMethods_1 = __webpack_require__(/*! ./core/LocationMethods */ "./jsbundle/core/LocationMethods.js");
const AppViewControllersDependencies = {
    'GET': LocationMethods_1.default,
};
exports.default = AppViewControllersDependencies;
//# sourceMappingURL=dependencies.js.map

/***/ }),

/***/ "./jsbundle/index.js":
/*!***************************!*\
  !*** ./jsbundle/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = __webpack_require__(/*! ./core/framework */ "./jsbundle/core/framework.js");
const router_1 = __webpack_require__(/*! ./router */ "./jsbundle/router.js");
'use strict';
const SensenJSApp = (appRoot) => {
    router_1.default.root = appRoot;
    router_1.default.render();
};
framework_1.default.JS(SensenJSApp);
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
const Router_1 = __webpack_require__(/*! ./core/Router */ "./jsbundle/core/Router.js");
const dependencies_1 = __webpack_require__(/*! ./dependencies */ "./jsbundle/dependencies.js");
const about_1 = __webpack_require__(/*! ./view/about */ "./jsbundle/view/about.js");
const home_1 = __webpack_require__(/*! ./view/home */ "./jsbundle/view/home.js");
const AppRouter = new Router_1.SensenRouter({
    default: 'home?param=value',
    viewControllersDependencies: dependencies_1.default
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
const View_1 = __webpack_require__(/*! ../core/View */ "./jsbundle/core/View.js");
const AboutView = new View_1.SensenView({
    slug: 'about',
    source: 'about.html',
    controller: () => {
        console.warn('View Init ');
    },
    mounted: () => {
        console.warn('View Focused');
    },
    unmounted: () => {
        console.warn('View Blurred');
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
const View_1 = __webpack_require__(/*! ../core/View */ "./jsbundle/core/View.js");
const HomeView = new View_1.SensenView({
    slug: 'home',
    source: 'home.html',
    controller: ($) => {
        // setTimeout(()=>{
        var _a;
        //     $.view.setVariable('postImage', './assets/images/ggn.png');
        // }, 1000)
        console.warn('View Controller :', (_a = $ === null || $ === void 0 ? void 0 : $.GET) === null || _a === void 0 ? void 0 : _a.param);
    },
    mounted: () => {
        console.warn('View Mounted');
    },
    unmounted: () => {
        console.warn('View UnMounted');
    },
});
exports.default = HomeView;
//# sourceMappingURL=home.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanNidW5kbGUvY29yZS9Mb2NhdGlvbk1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vanNidW5kbGUvY29yZS9NZXRyaWNSYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vanNidW5kbGUvY29yZS9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanNidW5kbGUvY29yZS9WaWV3LmpzIiwid2VicGFjazovLy8uL2pzYnVuZGxlL2NvcmUvZnJhbWV3b3JrLmpzIiwid2VicGFjazovLy8uL2pzYnVuZGxlL2RlcGVuZGVuY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9qc2J1bmRsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qc2J1bmRsZS9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanNidW5kbGUvdmlldy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9qc2J1bmRsZS92aWV3L2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNB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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanNidW5kbGUvaW5kZXguanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IExvY2F0aW9uR2V0TWV0aG9kcyA9IHtcbiAgICBwYXJzZVN0cmluZyhzdHIsIGVuY29kaW5nID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0ge307XG4gICAgICAgIGNvbnN0IGV4ID0gc3RyLnNwbGl0KCcmJyk7XG4gICAgICAgIGV4Lm1hcChxID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ID0gcS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgb3V0W3F1WzBdXSA9IGAke3F1WzFdfWA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH0sXG4gICAgdHJpZ2dlcihwcm9wcykge1xuICAgICAgICBjb25zdCBleCA9IChsb2NhdGlvbi5oYXNoID8gbG9jYXRpb24uaGFzaC5zdWJzdHIoMSkgOiBwcm9wcy5yb3V0ZXIuY29uZmlnLmRlZmF1bHQgfHwgJycpLnNwbGl0KCc/Jyk7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMucGFyc2VTdHJpbmcoZXhbMV0gfHwgJycpO1xuICAgICAgICBPYmplY3QuZW50cmllcyhwYXJhbXMgfHwge30pLm1hcChwYXJhbSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuJFNlbnNlblJMUC5wdXNoKHBhcmFtWzBdLCBwYXJhbVsxXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBMb2NhdGlvbkdldE1ldGhvZHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb2NhdGlvbk1ldGhvZHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlByb3Rvcmlhbk1ldHJpY1JhbmRvbSA9IHZvaWQgMDtcbmNsYXNzIFByb3Rvcmlhbk1ldHJpY1JhbmRvbSB7XG4gICAgc3RhdGljIENyZWF0ZVJhbmRvbShtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICAgIH1cbiAgICBzdGF0aWMgQ3JlYXRlQmxvY2soYmFzZSwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBiYXNlZCwgb3V0ID0gW107XG4gICAgICAgIGlmICh0eXBlb2YgYmFzZSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgYmFzZWQgPSBiYXNlLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZWQpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgayA9IHRoaXMuQ3JlYXRlUmFuZG9tKDAsIGJhc2VkLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIG91dFtvdXQubGVuZ3RoXSA9IGJhc2VkW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxuICAgIHN0YXRpYyBDcmVhdGVBcGxwaGEobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkNyZWF0ZUJsb2NrKGAke3RoaXMuQUxQSEFfTE9XRVJ9ICR7dGhpcy5BTFBIQV9VUFBFUn1gLCBsZW5ndGgpO1xuICAgIH1cbiAgICBzdGF0aWMgQ3JlYXRlTnVtZXJpYyhsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQ3JlYXRlQmxvY2soYCR7dGhpcy5OVU1FUklDfWAsIGxlbmd0aCk7XG4gICAgfVxuICAgIHN0YXRpYyBDcmVhdGUobGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkNyZWF0ZUJsb2NrKGAke3RoaXMuQUxQSEFfTlVNRVJJQ31gLCBsZW5ndGgpO1xuICAgIH1cbn1cbmV4cG9ydHMuUHJvdG9yaWFuTWV0cmljUmFuZG9tID0gUHJvdG9yaWFuTWV0cmljUmFuZG9tO1xuUHJvdG9yaWFuTWV0cmljUmFuZG9tLkFMUEhBX05VTUVSSUMgPSAnYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuIG8gcCBxIHIgcyB0IHUgdiB3IHggeSB6IEEgQiBDIEQgRSBGIEcgSCBJIEogSyBMIE0gTiBPIFAgUSBSIFMgVCBVIFYgVyBYIFkgWiAwIDEgMiAzIDQgNSA2IDcgOCA5JztcblByb3Rvcmlhbk1ldHJpY1JhbmRvbS5BTFBIQV9OVU1FUklDX0xPV0VSID0gJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG0gbiBvIHAgcSByIHMgdCB1IHYgdyB4IHkgeiAwIDEgMiAzIDQgNSA2IDcgOCA5JztcblByb3Rvcmlhbk1ldHJpY1JhbmRvbS5BTFBIQV9OVU1FUklDX1VQUEVSID0gJ0EgQiBDIEQgRSBGIEcgSCBJIEogSyBMIE0gTiBPIFAgUSBSIFMgVCBVIFYgVyBYIFkgWiAwIDEgMiAzIDQgNSA2IDcgOCA5JztcblByb3Rvcmlhbk1ldHJpY1JhbmRvbS5BTFBIQV9VUFBFUiA9ICdBIEIgQyBEIEUgRiBHIEggSSBKIEsgTCBNIE4gTyBQIFEgUiBTIFQgVSBWIFcgWCBZIFonO1xuUHJvdG9yaWFuTWV0cmljUmFuZG9tLkFMUEhBX0xPV0VSID0gJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG0gbiBvIHAgcSByIHMgdCB1IHYgdyB4IHkgeic7XG5Qcm90b3JpYW5NZXRyaWNSYW5kb20uTlVNRVJJQyA9ICcwIDEgMiAzIDQgNSA2IDcgOCA5Jztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1ldHJpY1JhbmRvbS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2Vuc2VuUm91dGVyID0gdm9pZCAwO1xuY29uc3QgVmlld18xID0gcmVxdWlyZShcIi4vVmlld1wiKTtcbmNsYXNzIFNlbnNlblJvdXRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnJvdXRlcyA9IHt9O1xuICAgIH1cbiAgICBhZGQodmlldykge1xuICAgICAgICB0aGlzLnJvdXRlc1t2aWV3LnNsdWddID0gdmlldztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2x1ZyA9IChsb2NhdGlvbi5oYXNoIHx8ICcnKS5zdWJzdHIoMSk7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlKHNsdWcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRlZmF1bHQpIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUobG9jYXRpb24uaGFzaCA/IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpIDogdGhpcy5jb25maWcuZGVmYXVsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHBhcnNlU2x1ZyhzbHVnKSB7XG4gICAgICAgIGNvbnN0IGV4ID0gc2x1Zy5zcGxpdCgnPycpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogZXhbMF0sXG4gICAgICAgICAgICBzZWFyY2g6IGV4WzFdIHx8ICcnXG4gICAgICAgIH07XG4gICAgfVxuICAgIG5hdmlnYXRlKHNsdWcpIHtcbiAgICAgICAgY29uc3QgcHNsdWcgPSB0aGlzLnBhcnNlU2x1ZyhzbHVnKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnQgbGFzdCBWaWV3XG4gICAgICAgICAqL1xuICAgICAgICBpZiAod2luZG93LlZpZXcgaW5zdGFuY2VvZiBWaWV3XzEuU2Vuc2VuVmlldykge1xuICAgICAgICAgICAgaWYgKCd1bm1vdW50ZWQnIGluIHdpbmRvdy5WaWV3KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LlZpZXcudW5tb3VudGVkKHdpbmRvdy5WaWV3LmRlcGVuZGVuY2llcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlldyA9IHRoaXMucm91dGVzW3BzbHVnLm5hbWVdIHx8IG51bGw7XG4gICAgICAgICAgICBpZiAodGhpcy52aWV3KSB7XG4gICAgICAgICAgICAgICAgZmV0Y2goYC4vdmlld3MvJHtwc2x1Zy5uYW1lfS5odG1sYClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ociA9PiByLnRleHQoKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LiRTZW5zZW5STFAuY2xlYW4oKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LiRTZW5zZW5Ob2RlUmVmVmFyaWFibGVzID0ge307XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZWxlbWVudC5ib2R5LmNoaWxkcmVuKS5tYXAoYyA9PiBmcmFnbWVudC5hcHBlbmRDaGlsZChjKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5yZW5kZXIoZnJhZ21lbnQsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gc2x1ZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdtb3VudGVkJyBpbiB0aGlzLnZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5tb3VudGVkKHRoaXMudmlldy5kZXBlbmRlbmNpZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgKGBTZW5zZW5KUyBSb3V0ZXIgc2F5IDpcXG4ke2VyfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKGBTZW5zZW5KUyBSb3V0ZXIgc2F5IHJvdXRlIDwgXFxuJHtzbHVnfSA+IG5vdCBmb3VuZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlNlbnNlblJvdXRlciA9IFNlbnNlblJvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2Vuc2VuVmlldyA9IHZvaWQgMDtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIi4vZnJhbWV3b3JrXCIpO1xud2luZG93LlZpZXcgPSB7fTtcbmNsYXNzIFNlbnNlblZpZXcge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuc2x1ZyA9IHByb3BzLnNsdWc7XG4gICAgICAgIHRoaXMuc291cmNlID0gcHJvcHMuc291cmNlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBwcm9wcy5jb250cm9sbGVyIHx8ICgoKSA9PiB7IH0pO1xuICAgICAgICB0aGlzLm1vdW50ZWQgPSBwcm9wcy5tb3VudGVkIHx8ICgoKSA9PiB7IH0pO1xuICAgICAgICB0aGlzLnVubW91bnRlZCA9IHByb3BzLnVubW91bnRlZCB8fCAoKCkgPT4geyB9KTtcbiAgICB9XG4gICAgY2xlYW5Sb290KCkge1xuICAgICAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlbmRlcihpbnB1dCwgcm91dGVyKSB7XG4gICAgICAgIHdpbmRvdy5WaWV3ID0gdGhpcztcbiAgICAgICAgY29uc3QgZGVwZW5kZW5jaWVzID0gcm91dGVyLmNvbmZpZy52aWV3Q29udHJvbGxlcnNEZXBlbmRlbmNpZXM7XG4gICAgICAgIC8vcm9vdCA6IEhUTUxFbGVtZW50LCBkZXBlbmRlbmNpZXM/OiBTZW5zZW5UVmlld0NvbnRyb2xsZXJzRGVwZW5kZW5jaWVzXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgQWxsIERlcGVuZGVuY2llc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgX2RlcGVuZGVuY2llcyA9IHt9O1xuICAgICAgICBpZiAodHlwZW9mIGRlcGVuZGVuY2llcyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3QgX2RlcGVuZGVuY2llc0FyZ3MgPSB7XG4gICAgICAgICAgICAgICAgdmlldzogdGhpcyxcbiAgICAgICAgICAgICAgICByb3V0ZXIsXG4gICAgICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgX2RlcGVuZGVuY2llc0FycmF5ID0gT2JqZWN0LmVudHJpZXMoZGVwZW5kZW5jaWVzIHx8IHt9KTtcbiAgICAgICAgICAgIGlmIChfZGVwZW5kZW5jaWVzQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX2RlcGVuZGVuY2llc0FycmF5LmZvckVhY2goZGVwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgX2RlcGVuZGVuY2llc1tkZXBbMF1dID0gJ3RyaWdnZXInIGluIGRlcFsxXSA/IGRlcFsxXS50cmlnZ2VyKF9kZXBlbmRlbmNpZXNBcmdzKSA6ICgoKSA9PiB7IH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9kZXBlbmRlbmNpZXMudmlldyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gX2RlcGVuZGVuY2llcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5yb290ID0gcm91dGVyLnJvb3Q7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21waWxhdGVcbiAgICAgICAgICovXG4gICAgICAgICgwLCBmcmFtZXdvcmtfMS5Db21waWxhdG9yUmVjb3Jkc1JlZnNWYXJpYWJsZXMpKHRoaXMuaW5wdXQpO1xuICAgICAgICAoMCwgZnJhbWV3b3JrXzEuQ29tcGlsYXRvcikodGhpcy5pbnB1dCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0IENvbnRyb2xsZXIgd2l0aCBkZXBlbmRlbmNpZXNcbiAgICAgICAgICovXG4gICAgICAgIGlmICgnY29udHJvbGxlcicgaW4gdGhpcykge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyKF9kZXBlbmRlbmNpZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXJzaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNldENvbnRlbnQodGhpcy5pbnB1dCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdSZW5kZXIgVmlldyAnLCB3aW5kb3cuJFNlbnNlblJMUC5yZXRyaXZlcygpLCAgX2RlcGVuZGVuY2llcylcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldENvbnRlbnQoZWxlbWVudCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnUGFyc2UgOicsIGVsZW1lbnQsIHRoaXMucm9vdCApXG4gICAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5Sb290KCkucm9vdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0VmFyaWFibGUobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdERpY3Rpb25hcnkgPSB3aW5kb3cuJFNlbnNlblJMUC5yZXRyaXZlcygpIHx8IHt9O1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0ge307XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGRlZmF1bHREaWN0aW9uYXJ5KS5tYXAoZGljID0+IHtcbiAgICAgICAgICAgIGRpY3Rpb25hcnlbZGljWzBdXSA9IGRpY1sxXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRpY3Rpb25hcnlbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKHdpbmRvdy4kU2Vuc2VuTm9kZVJlZlZhcmlhYmxlc1tuYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSB3aW5kb3cuJFNlbnNlbk5vZGVSZWZWYXJpYWJsZXNbbmFtZV07XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmlucHV0LnF1ZXJ5U2VsZWN0b3IoYFtzZW5zZW4tcmVmPVwiJHtjaGVjay5yZWZ9XCJdYCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrLmNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEVsZW1lbnQgQ29udGVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID0gKDAsIGZyYW1ld29ya18xLkNvbXBpbGF0ZVZhcmlhYmxlcykoY2hlY2suY29udGVudCwgZGljdGlvbmFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGVjay5hdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEVsZW1lbnQgQ29udGVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKGNoZWNrLmF0dHJpYnV0ZS5uYW1lLCBjaGVjay5hdHRyaWJ1dGUudmFsdWUucmVwbGFjZShjaGVjay5yZWNvcmRzWzFdLm1hdGNoWzBdLCAodmFsdWUgfHwgY2hlY2sucmVjb3Jkc1sxXS5zeW50YXhbMV0pLnRyaW0oKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiogKiBVcGRhdGUgKi9cbiAgICAgICAgICAgICAgICAoMCwgZnJhbWV3b3JrXzEuQ29tcGlsYXRvck5vZGVWYXJpYWJsZXMpKHRhcmdldCwgZGljdGlvbmFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZXhwb3J0cy5TZW5zZW5WaWV3ID0gU2Vuc2VuVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZpZXcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbXBpbGF0b3IgPSBleHBvcnRzLkNvbXBpbGF0b3JOb2RlVmFyaWFibGVzID0gZXhwb3J0cy5Db21waWxhdGVWYXJpYWJsZXMgPSBleHBvcnRzLkNvbXBpbGF0b3JSZWNvcmRzUmVmc1ZhcmlhYmxlcyA9IGV4cG9ydHMuQ29tcGlsYXRvckNoZWNrVmFyaWFibGVzID0gdm9pZCAwO1xuY29uc3QgTWV0cmljUmFuZG9tXzEgPSByZXF1aXJlKFwiLi9NZXRyaWNSYW5kb21cIik7XG53aW5kb3cuJFNlbnNlbk5vZGVSZWZWYXJpYWJsZXMgPSB7fTtcbndpbmRvdy4kU2Vuc2VuUkxQID0ge1xuICAgIGVudHJpZXM6IHt9LFxuICAgIHB1c2gobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzW25hbWVdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50cmllc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBjbGVhbigpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0ge307XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcmV0cml2ZShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXNbbmFtZV07XG4gICAgfSxcbiAgICByZXRyaXZlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcyB8fCB7fTtcbiAgICB9LFxufTtcbi8qKlxuICogQFdvcmtJblByb2dyZXNzQmVnaW5cbiAqL1xuLyoqXG4gKiBTZW5zZW4gSFRNTCBFbGVtZW50XG4gKi9cbi8vIGV4cG9ydCBjbGFzcyBTZW5zZW5FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnR7XG4vLyB9XG4vKipcbiAqIFNlbnNlbiBFbGVtZW50IDogVmFsdWVcbiAqL1xuLy8gZXhwb3J0IGNsYXNzIFNlbnNlbkVsZW1lbnRFY2hvIGV4dGVuZHMgU2Vuc2VuRWxlbWVudHtcbi8vICAgICBpbml0KCl7XG4vLyAgICAgICAgIGNvbnN0IGdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdnZXQnKTtcbi8vICAgICAgICAgY29uc3Qgc2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NldCcpO1xuLy8gICAgICAgICBjb25zdCBvciA9IHRoaXMuZ2V0QXR0cmlidXRlKCdvcicpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnUGFyc2UgRWNobyBFbGVtZW50JywgZ2V0LCBvciwgc2V0KVxuLy8gICAgICAgICBpZih0eXBlb2YgZ2V0ID09ICdzdHJpbmcnKXtcbi8vICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gd2luZG93LiRTZW5zZW5STFAucmV0cml2ZShnZXQpIHx8IG9yIHx8ICcnO1xuLy8gICAgICAgICAgICAgY29uc3QgcmVmID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpXG4vLyAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlZiwgdGhpcylcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gdGhpcztcbi8vICAgICB9XG4vLyAgICAgY29ubmVjdGVkQ2FsbGJhY2soKXtcbi8vICAgICAgICAgdGhpcy5pbml0KCk7XG4vLyAgICAgfVxuLy8gfVxuLy8gaWYoIWN1c3RvbUVsZW1lbnRzLmdldCgnc24tZWNobycpKXsgZ2xvYmFsVGhpcy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NuLWVjaG8nLCBTZW5zZW5FbGVtZW50RWNobyk7IH1cbi8qKlxuICogQFdvcmtJblByb2dyZXNzRW5kXG4gKi9cbmZ1bmN0aW9uIENvbXBpbGF0b3JDaGVja1ZhcmlhYmxlcyhjb250ZW50KSB7XG4gICAgY29uc3QgcmVjb3JkcyA9IHt9O1xuICAgIGNvbnN0IHZhcmlhYmxlUmV4ID0gbmV3IFJlZ0V4cCgne3soLio/KX19JywgJ2cnKTtcbiAgICBjb25zdCBjb250ZW50TWF0Y2hlcyA9IFsuLi5jb250ZW50Lm1hdGNoQWxsKHZhcmlhYmxlUmV4KV07XG4gICAgT2JqZWN0LnZhbHVlcyhjb250ZW50TWF0Y2hlcykubWFwKG1hdGNoID0+IHtcbiAgICAgICAgY29uc3Qgc3ludGF4ID0gbWF0Y2hbMV0uc3BsaXQoJ3x8Jyk7XG4gICAgICAgIHN5bnRheFswXSA9IHN5bnRheFswXS50cmltKCk7XG4gICAgICAgIHN5bnRheFsxXSA9IChzeW50YXhbMV0gfHwgJycpLnRyaW0oKS5yZXBsYWNlKC8nKC4qKScvZ2ksIFwiJDFcIik7XG4gICAgICAgIHN5bnRheFsxXSA9IChzeW50YXhbMV0gfHwgJycpLnRyaW0oKS5yZXBsYWNlKC9cIiguKilcIi9naSwgXCIkMVwiKTtcbiAgICAgICAgcmVjb3Jkc1tzeW50YXhbMF1dID0geyBtYXRjaCwgc3ludGF4LCB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZWNvcmRzO1xufVxuZXhwb3J0cy5Db21waWxhdG9yQ2hlY2tWYXJpYWJsZXMgPSBDb21waWxhdG9yQ2hlY2tWYXJpYWJsZXM7XG5mdW5jdGlvbiBDb21waWxhdG9yUmVjb3Jkc1JlZnNWYXJpYWJsZXMoZWxlbWVudCkge1xuICAgIGNvbnN0IHN0YXRlID0ge307XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhlbGVtZW50LmNoaWxkcmVuKS5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBPYmplY3QudmFsdWVzKGNoaWxkKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0NoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZklEID0gTWV0cmljUmFuZG9tXzEuUHJvdG9yaWFuTWV0cmljUmFuZG9tLkNyZWF0ZUFwbHBoYSgzMikuam9pbignJyk7XG4gICAgICAgICAgICAgICAgLyoqIEVsZW1lbnQgQ29udGVudCAqL1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKENvbXBpbGF0b3JDaGVja1ZhcmlhYmxlcyhjaGlsZC5pbm5lckhUTUwpIHx8IHt9KS5tYXAoZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuJFNlbnNlbk5vZGVSZWZWYXJpYWJsZXNbZW50cnlbMF1dID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiByZWZJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZHM6IGVudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY2hpbGQuaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnc2Vuc2VuLXJlZicsIHJlZklEKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvKiogRWxlbWVudCBBdHRyaWJ1dGVzICovXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhjaGlsZC5hdHRyaWJ1dGVzKS5tYXAoYXR0ciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKENvbXBpbGF0b3JDaGVja1ZhcmlhYmxlcyhhdHRyLnZhbHVlKSB8fCB7fSkubWFwKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy4kU2Vuc2VuTm9kZVJlZlZhcmlhYmxlc1tlbnRyeVswXV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiByZWZJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiBlbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiB7IG5hbWU6IGF0dHIubmFtZSwgdmFsdWU6IGF0dHIudmFsdWUsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdzZW5zZW4tcmVmJywgcmVmSUQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIENvbXBpbGF0b3JOb2RlVmFyaWFibGVzKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbmV4cG9ydHMuQ29tcGlsYXRvclJlY29yZHNSZWZzVmFyaWFibGVzID0gQ29tcGlsYXRvclJlY29yZHNSZWZzVmFyaWFibGVzO1xuZnVuY3Rpb24gQ29tcGlsYXRlVmFyaWFibGVzKGNvbnRlbnQsIGRpY3Rpb25hcnkpIHtcbiAgICBjb25zdCBfZGljdGlvbmFyeSA9IGRpY3Rpb25hcnkgfHwgd2luZG93LiRTZW5zZW5STFAucmV0cml2ZXMoKTtcbiAgICBPYmplY3QuZW50cmllcyhDb21waWxhdG9yQ2hlY2tWYXJpYWJsZXMoY29udGVudCkgfHwge30pLm1hcChlbnRyeSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuJFNlbnNlbk5vZGVSZWZWYXJpYWJsZXNbZW50cnlbMF1dKSB7XG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKGVudHJ5WzFdLm1hdGNoWzBdLCAoX2RpY3Rpb25hcnlbZW50cnlbMF1dIHx8IGVudHJ5WzFdLnN5bnRheFsxXSB8fCBlbnRyeVswXSkudHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb250ZW50O1xufVxuZXhwb3J0cy5Db21waWxhdGVWYXJpYWJsZXMgPSBDb21waWxhdGVWYXJpYWJsZXM7XG5mdW5jdGlvbiBDb21waWxhdG9yTm9kZVZhcmlhYmxlcyhlbGVtZW50LCBkaWN0aW9uYXJ5KSB7XG4gICAgY29uc3Qgc3RhdGUgPSB7fTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZWxlbWVudC5jaGlsZHJlbikubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IE9iamVjdC52YWx1ZXMoY2hpbGQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0NoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEVsZW1lbnQgQ29udGVudCAqL1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5pbm5lckhUTUwgPSBDb21waWxhdGVWYXJpYWJsZXMoY2hpbGQuaW5uZXJIVE1MLCBkaWN0aW9uYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgLyoqIEVsZW1lbnQgQXR0cmlidXRlcyAqL1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGNoaWxkLmF0dHJpYnV0ZXMpLm1hcChhdHRyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyLm5hbWUgPT0gJ3NlbnNlbi1yZWYnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBDb21waWxhdGVWYXJpYWJsZXMoYXR0ci52YWx1ZSwgZGljdGlvbmFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoYXR0ci5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcGlsYXRvck5vZGVWYXJpYWJsZXMoY2hpbGQsIGRpY3Rpb25hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBDb21waWxhdGVWYXJpYWJsZXMoZWxlbWVudC5pbm5lckhUTUwsIGRpY3Rpb25hcnkpO1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhlbGVtZW50LmF0dHJpYnV0ZXMpLm1hcChhdHRyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ci5uYW1lID09ICdzZW5zZW4tcmVmJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gQ29tcGlsYXRlVmFyaWFibGVzKGF0dHIudmFsdWUsIGRpY3Rpb25hcnkpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZXhwb3J0cy5Db21waWxhdG9yTm9kZVZhcmlhYmxlcyA9IENvbXBpbGF0b3JOb2RlVmFyaWFibGVzO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIENvbXBpbGF0ZUFjdGlvbnMoZWxlbWVudDogSFRNTEVsZW1lbnQpe1xuLy8gICAgIGNvbnNvbGUud2FybignQWN0aW9ucyA6JywgZWxlbWVudCwgKVxuLy8gfVxuZnVuY3Rpb24gQ29tcGlsYXRvcihlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQuaW5uZXJIVE1MO1xuICAgIGxldCBwYXJzaW5nID0gQ29tcGlsYXRlVmFyaWFibGVzKGNvbnRlbnQpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcGFyc2luZztcbiAgICAvLyBDb21waWxhdGVBY3Rpb25zKGVsZW1lbnQpXG59XG5leHBvcnRzLkNvbXBpbGF0b3IgPSBDb21waWxhdG9yO1xuY2xhc3MgU2Vuc2VuIHtcbiAgICBzdGF0aWMgSlMoYXBwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuTmFtZX0gaXMgcmVhZHlgKTtcbiAgICAgICAgd2luZG93LlNlbnNlbkpTQXBwID0gYXBwO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFNlbnNlbjtcblNlbnNlbi5OYW1lID0gJ1NlbnNlbiBTZW5qdSc7XG5TZW5zZW4uUkxQT2JqZWN0ID0gd2luZG93LiRTZW5zZW5STFA7XG5TZW5zZW4uQ29tcGlsYXRvciA9IENvbXBpbGF0b3I7XG5TZW5zZW4uQ29tcGlsYXRlVmFyaWFibGVzID0gQ29tcGlsYXRlVmFyaWFibGVzO1xuU2Vuc2VuLkNvbXBpbGF0b3JOb2RlVmFyaWFibGVzID0gQ29tcGlsYXRvck5vZGVWYXJpYWJsZXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcmFtZXdvcmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBMb2NhdGlvbk1ldGhvZHNfMSA9IHJlcXVpcmUoXCIuL2NvcmUvTG9jYXRpb25NZXRob2RzXCIpO1xuY29uc3QgQXBwVmlld0NvbnRyb2xsZXJzRGVwZW5kZW5jaWVzID0ge1xuICAgICdHRVQnOiBMb2NhdGlvbk1ldGhvZHNfMS5kZWZhdWx0LFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcFZpZXdDb250cm9sbGVyc0RlcGVuZGVuY2llcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlcGVuZGVuY2llcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1ld29ya18xID0gcmVxdWlyZShcIi4vY29yZS9mcmFtZXdvcmtcIik7XG5jb25zdCByb3V0ZXJfMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbid1c2Ugc3RyaWN0JztcbmNvbnN0IFNlbnNlbkpTQXBwID0gKGFwcFJvb3QpID0+IHtcbiAgICByb3V0ZXJfMS5kZWZhdWx0LnJvb3QgPSBhcHBSb290O1xuICAgIHJvdXRlcl8xLmRlZmF1bHQucmVuZGVyKCk7XG59O1xuZnJhbWV3b3JrXzEuZGVmYXVsdC5KUyhTZW5zZW5KU0FwcCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJvdXRlcl8xID0gcmVxdWlyZShcIi4vY29yZS9Sb3V0ZXJcIik7XG5jb25zdCBkZXBlbmRlbmNpZXNfMSA9IHJlcXVpcmUoXCIuL2RlcGVuZGVuY2llc1wiKTtcbmNvbnN0IGFib3V0XzEgPSByZXF1aXJlKFwiLi92aWV3L2Fib3V0XCIpO1xuY29uc3QgaG9tZV8xID0gcmVxdWlyZShcIi4vdmlldy9ob21lXCIpO1xuY29uc3QgQXBwUm91dGVyID0gbmV3IFJvdXRlcl8xLlNlbnNlblJvdXRlcih7XG4gICAgZGVmYXVsdDogJ2hvbWU/cGFyYW09dmFsdWUnLFxuICAgIHZpZXdDb250cm9sbGVyc0RlcGVuZGVuY2llczogZGVwZW5kZW5jaWVzXzEuZGVmYXVsdFxufSk7XG5BcHBSb3V0ZXJcbiAgICAuYWRkKGhvbWVfMS5kZWZhdWx0KVxuICAgIC5hZGQoYWJvdXRfMS5kZWZhdWx0KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFwcFJvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFZpZXdfMSA9IHJlcXVpcmUoXCIuLi9jb3JlL1ZpZXdcIik7XG5jb25zdCBBYm91dFZpZXcgPSBuZXcgVmlld18xLlNlbnNlblZpZXcoe1xuICAgIHNsdWc6ICdhYm91dCcsXG4gICAgc291cmNlOiAnYWJvdXQuaHRtbCcsXG4gICAgY29udHJvbGxlcjogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1ZpZXcgSW5pdCAnKTtcbiAgICB9LFxuICAgIG1vdW50ZWQ6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdWaWV3IEZvY3VzZWQnKTtcbiAgICB9LFxuICAgIHVubW91bnRlZDogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1ZpZXcgQmx1cnJlZCcpO1xuICAgIH0sXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEFib3V0Vmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFib3V0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgVmlld18xID0gcmVxdWlyZShcIi4uL2NvcmUvVmlld1wiKTtcbmNvbnN0IEhvbWVWaWV3ID0gbmV3IFZpZXdfMS5TZW5zZW5WaWV3KHtcbiAgICBzbHVnOiAnaG9tZScsXG4gICAgc291cmNlOiAnaG9tZS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAoJCkgPT4ge1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gICAgICQudmlldy5zZXRWYXJpYWJsZSgncG9zdEltYWdlJywgJy4vYXNzZXRzL2ltYWdlcy9nZ24ucG5nJyk7XG4gICAgICAgIC8vIH0sIDEwMDApXG4gICAgICAgIGNvbnNvbGUud2FybignVmlldyBDb250cm9sbGVyIDonLCAoX2EgPSAkID09PSBudWxsIHx8ICQgPT09IHZvaWQgMCA/IHZvaWQgMCA6ICQuR0VUKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFyYW0pO1xuICAgIH0sXG4gICAgbW91bnRlZDogKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1ZpZXcgTW91bnRlZCcpO1xuICAgIH0sXG4gICAgdW5tb3VudGVkOiAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybignVmlldyBVbk1vdW50ZWQnKTtcbiAgICB9LFxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBIb21lVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvbWUuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==