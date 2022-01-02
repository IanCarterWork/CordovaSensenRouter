"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensenViewControllerDependencies = void 0;
var SensenViewControllerDependencies = /** @class */ (function () {
    function SensenViewControllerDependencies() {
        this.Defined = {};
    }
    /**
     * Define Dependencies
     */
    SensenViewControllerDependencies.prototype.Define = function (name, entry) {
        this.Defined[name] = entry;
        return this;
    };
    return SensenViewControllerDependencies;
}());
exports.SensenViewControllerDependencies = SensenViewControllerDependencies;
//# sourceMappingURL=ViewControllerDependencies.js.map