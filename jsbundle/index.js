"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = require("./core/framework");
const router_1 = require("./router");
'use strict';
const SensenJSApp = (appRoot) => {
    router_1.default.root = appRoot;
    router_1.default.render();
};
framework_1.default.JS(SensenJSApp);
//# sourceMappingURL=index.js.map