"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("./core/Router");
const dependencies_1 = require("./dependencies");
const about_1 = require("./view/about");
const home_1 = require("./view/home");
const AppRouter = new Router_1.SensenRouter({
    default: 'home?param=value',
    viewControllersDependencies: dependencies_1.default
});
AppRouter
    .add(home_1.default)
    .add(about_1.default);
exports.default = AppRouter;
//# sourceMappingURL=router.js.map