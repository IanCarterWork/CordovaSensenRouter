"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compilator = exports.CompilatorNodeVariables = exports.CompilateVariables = exports.CompilatorRecordsRefsVariables = exports.CompilatorCheckVariables = void 0;
const MetricRandom_1 = require("./MetricRandom");
window.$SensenNodeRefVariables = {};
window.$SensenRLP = {
    entries: {},
    push(name, value) {
        this.entries[name] = value;
        return this;
    },
    remove(name) {
        delete this.entries[name];
        return this;
    },
    clean() {
        this.entries = {};
        return this;
    },
    retrive(name) {
        return this.entries[name];
    },
    retrives() {
        return this.entries || {};
    },
};
/**
 * @WorkInProgressBegin
 */
/**
 * Sensen HTML Element
 */
// export class SensenElement extends HTMLElement{
// }
/**
 * Sensen Element : Value
 */
// export class SensenElementEcho extends SensenElement{
//     init(){
//         const get = this.getAttribute('get');
//         const set = this.getAttribute('set');
//         const or = this.getAttribute('or');
//         console.log('Parse Echo Element', get, or, set)
//         if(typeof get == 'string'){
//             const value = window.$SensenRLP.retrive(get) || or || '';
//             const ref = document.createTextNode(value)
//             this.parentNode.replaceChild(ref, this)
//         }
//         return this;
//     }
//     connectedCallback(){
//         this.init();
//     }
// }
// if(!customElements.get('sn-echo')){ globalThis.customElements.define('sn-echo', SensenElementEcho); }
/**
 * @WorkInProgressEnd
 */
function CompilatorCheckVariables(content) {
    const records = {};
    const variableRex = new RegExp('{{(.*?)}}', 'g');
    const contentMatches = [...content.matchAll(variableRex)];
    Object.values(contentMatches).map(match => {
        const syntax = match[1].split('||');
        syntax[0] = syntax[0].trim();
        syntax[1] = (syntax[1] || '').trim().replace(/'(.*)'/gi, "$1");
        syntax[1] = (syntax[1] || '').trim().replace(/"(.*)"/gi, "$1");
        records[syntax[0]] = { match, syntax, };
    });
    return records;
}
exports.CompilatorCheckVariables = CompilatorCheckVariables;
function CompilatorRecordsRefsVariables(element) {
    const state = {};
    if (element) {
        Object.values(element.children).map(child => {
            const children = Object.values(child);
            const hasChildren = children.length;
            if (!hasChildren) {
                const refID = MetricRandom_1.ProtorianMetricRandom.CreateAplpha(32).join('');
                /** Element Content */
                Object.entries(CompilatorCheckVariables(child.innerHTML) || {}).map(entry => {
                    window.$SensenNodeRefVariables[entry[0]] = {
                        ref: refID,
                        records: entry,
                        content: child.innerHTML,
                        attribute: undefined,
                    };
                    child.setAttribute('sensen-ref', refID);
                });
                /** Element Attributes */
                Object.values(child.attributes).map(attr => {
                    Object.entries(CompilatorCheckVariables(attr.value) || {}).map(entry => {
                        window.$SensenNodeRefVariables[entry[0]] = {
                            ref: refID,
                            records: entry,
                            content: undefined,
                            attribute: { name: attr.name, value: attr.value, },
                        };
                        child.setAttribute('sensen-ref', refID);
                    });
                });
            }
            else {
                CompilatorNodeVariables(child);
            }
        });
    }
    return state;
}
exports.CompilatorRecordsRefsVariables = CompilatorRecordsRefsVariables;
function CompilateVariables(content, dictionary) {
    const _dictionary = dictionary || window.$SensenRLP.retrives();
    Object.entries(CompilatorCheckVariables(content) || {}).map(entry => {
        if (window.$SensenNodeRefVariables[entry[0]]) {
            content = content.replace(entry[1].match[0], (_dictionary[entry[0]] || entry[1].syntax[1] || entry[0]).trim());
        }
    });
    return content;
}
exports.CompilateVariables = CompilateVariables;
function CompilatorNodeVariables(element, dictionary) {
    const state = {};
    if (element) {
        if (element.children.length) {
            Object.values(element.children).map(child => {
                const children = Object.values(child);
                const hasChildren = children.length;
                if (!hasChildren) {
                    /** Element Content */
                    child.innerHTML = CompilateVariables(child.innerHTML, dictionary);
                    /** Element Attributes */
                    Object.values(child.attributes).map(attr => {
                        if (attr.name == 'sensen-ref') {
                            return;
                        }
                        const value = CompilateVariables(attr.value, dictionary);
                        child.setAttribute(attr.name, value);
                    });
                }
                else {
                    CompilatorNodeVariables(child, dictionary);
                }
            });
        }
        else {
            element.innerHTML = CompilateVariables(element.innerHTML, dictionary);
            Object.values(element.attributes).map(attr => {
                if (attr.name == 'sensen-ref') {
                    return;
                }
                const value = CompilateVariables(attr.value, dictionary);
                element.setAttribute(attr.name, value);
            });
        }
    }
    return state;
}
exports.CompilatorNodeVariables = CompilatorNodeVariables;
// export function CompilateActions(element: HTMLElement){
//     console.warn('Actions :', element, )
// }
function Compilator(element) {
    const content = element.innerHTML;
    let parsing = CompilateVariables(content);
    element.innerHTML = parsing;
    // CompilateActions(element)
}
exports.Compilator = Compilator;
class Sensen {
    static JS(app) {
        console.log(`${this.Name} is ready`);
        window.SensenJSApp = app;
    }
}
exports.default = Sensen;
Sensen.Name = 'Sensen Senju';
Sensen.RLPObject = window.$SensenRLP;
Sensen.Compilator = Compilator;
Sensen.CompilateVariables = CompilateVariables;
Sensen.CompilatorNodeVariables = CompilatorNodeVariables;
//# sourceMappingURL=framework.js.map