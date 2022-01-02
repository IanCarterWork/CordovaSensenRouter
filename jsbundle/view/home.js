"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("../core/View");
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