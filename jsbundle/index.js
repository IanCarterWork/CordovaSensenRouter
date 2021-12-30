"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("./router");
var SensenJSApp = function (appRoot) {
    console.warn('App in ', appRoot, router_1.default);
    // appRoot.innerHTML = 'Chargement...'
    router_1.default.rootElement = appRoot;
    router_1.default.render();
};
//@ts-ignore
window.SensenJSApp = SensenJSApp;
//# sourceMappingURL=index.js.map