"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("./core/router");
var about_1 = require("./view/about");
var home_1 = require("./view/home");
var AppRouter = new router_1.SensenRouter({
    default: 'home'
});
AppRouter
    .add(home_1.default)
    .add(about_1.default);
exports.default = AppRouter;
//# sourceMappingURL=router.js.map