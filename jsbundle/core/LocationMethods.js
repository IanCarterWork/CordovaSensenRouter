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