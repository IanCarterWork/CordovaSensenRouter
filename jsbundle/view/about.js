"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("../core/View");
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