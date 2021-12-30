"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("../core/view");
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