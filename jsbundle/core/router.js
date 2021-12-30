"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensenRouter = void 0;
var SensenRouter = /** @class */ (function () {
    function SensenRouter(config) {
        this.config = config;
        this.routes = {};
    }
    SensenRouter.prototype.add = function (view) {
        this.routes[view.slug] = view;
        return this;
    };
    SensenRouter.prototype.render = function () {
        var _this = this;
        globalThis.addEventListener('hashchange', function () {
            var slug = (location.hash || '').substr(1);
            _this.navigate(slug);
        });
        if (this.config.default) {
            this.navigate(this.config.default);
        }
        return this;
    };
    SensenRouter.prototype.navigate = function (slug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.view = _this.routes[slug] || null;
            console.log('View Object ', slug, _this.view, _this.routes);
            if (_this.view) {
                fetch("./views/".concat(slug, ".html"))
                    .then(function (r) { return r.text(); })
                    .then(function (html) {
                    var page = new DOMParser().parseFromString(html, 'text/html');
                    console.log('View HTML ', page, html);
                    location.hash = slug;
                    _this.parse(page.body);
                    resolve(page);
                })
                    .catch(function (er) {
                    reject(er);
                    alert('Page introuvable');
                });
            }
            else {
                alert('404 Erreur');
            }
        });
    };
    SensenRouter.prototype.parse = function (dom) {
        if (this.rootElement) {
            this.rootElement.innerHTML = '';
            this.rootElement.appendChild(dom);
        }
        console.log('View HTML ', dom, this.rootElement);
    };
    return SensenRouter;
}());
exports.SensenRouter = SensenRouter;
//# sourceMappingURL=router.js.map