"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("../core/view");
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
//# sourceMappingURL=home%20copy.js.map