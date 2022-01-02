"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensenView = void 0;
const framework_1 = require("./framework");
window.View = {};
class SensenView {
    constructor(props) {
        this.slug = props.slug;
        this.source = props.source;
        this.controller = props.controller || (() => { });
        this.mounted = props.mounted || (() => { });
        this.unmounted = props.unmounted || (() => { });
    }
    cleanRoot() {
        if (this.root) {
            this.root.innerHTML = '';
        }
        return this;
    }
    render(input, router) {
        window.View = this;
        const dependencies = router.config.viewControllersDependencies;
        //root : HTMLElement, dependencies?: SensenTViewControllersDependencies
        /**
         * Get All Dependencies
         */
        const _dependencies = {};
        if (typeof dependencies == 'object') {
            const _dependenciesArgs = {
                view: this,
                router,
                input,
            };
            const _dependenciesArray = Object.entries(dependencies || {});
            if (_dependenciesArray.length) {
                _dependenciesArray.forEach(dep => {
                    _dependencies[dep[0]] = 'trigger' in dep[1] ? dep[1].trigger(_dependenciesArgs) : (() => { });
                });
            }
        }
        _dependencies.view = this;
        this.dependencies = _dependencies;
        /**
         * States
         */
        this.router = router;
        this.input = input;
        this.root = router.root;
        /**
         * Compilate
         */
        (0, framework_1.CompilatorRecordsRefsVariables)(this.input);
        (0, framework_1.Compilator)(this.input);
        /**
         * Init Controller with dependencies
         */
        if ('controller' in this) {
            this.controller(_dependencies);
        }
        /**
         * Parsing
         */
        this.setContent(this.input);
        // console.log('Render View ', window.$SensenRLP.retrives(),  _dependencies)
        return this;
    }
    setContent(element) {
        // console.log('Parse :', element, this.root )
        if (this.root) {
            this.cleanRoot().root.appendChild(element);
        }
        return this;
    }
    setVariable(name, value) {
        const defaultDictionary = window.$SensenRLP.retrives() || {};
        const dictionary = {};
        Object.entries(defaultDictionary).map(dic => {
            dictionary[dic[0]] = dic[1];
        });
        dictionary[name] = value;
        if (window.$SensenNodeRefVariables[name]) {
            const check = window.$SensenNodeRefVariables[name];
            const target = this.input.querySelector(`[sensen-ref="${check.ref}"]`);
            if (target) {
                if (check.content) {
                    /** Element Content */
                    target.innerHTML = (0, framework_1.CompilateVariables)(check.content, dictionary);
                }
                if (check.attribute) {
                    /** Element Content */
                    target.setAttribute(check.attribute.name, check.attribute.value.replace(check.records[1].match[0], (value || check.records[1].syntax[1]).trim()));
                }
                /** * Update */
                (0, framework_1.CompilatorNodeVariables)(target, dictionary);
            }
        }
        return this;
    }
}
exports.SensenView = SensenView;
//# sourceMappingURL=View.js.map