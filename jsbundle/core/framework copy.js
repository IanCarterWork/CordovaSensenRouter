"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVariable = exports.Compilator = exports.CompilatorParseNodeVariables = exports.CompilatorParseVariables = void 0;
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
        return this.entries;
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
function CompilatorParseVariables(content, dictionary) {
    const variableRex = new RegExp('{{(.*)}}', 'ig');
    const matches = [...content.matchAll(variableRex)];
    const _dictionary = dictionary || window.$SensenRLP.retrives();
    if (typeof _dictionary == 'object') {
        Object.values(matches).map(match => {
            const sprint = match[1].split('||');
            sprint[0] = sprint[0].trim();
            sprint[1] = (sprint[1] || '').trim().replace(/'(.*)'/gi, "$1");
            sprint[1] = (sprint[1] || '').trim().replace(/"(.*)"/gi, "$1");
            content = content.replace(match[0], (_dictionary[sprint[0]] || sprint[1] || '').trim());
        });
    }
    return content;
}
exports.CompilatorParseVariables = CompilatorParseVariables;
function CompilatorParseNodeVariables(element, dictionary) {
    const state = {};
    if (element) {
        Object.values(element.children).map(child => {
            const children = Object.values(child);
            const hasChildren = children.length;
            if (!hasChildren) {
                /** Element Content */
                child.innerHTML = CompilatorParseVariables(child.innerHTML, dictionary);
                /** Element Attributes */
                Object.values(child.attributes).map(attr => {
                    console.log('Get Attributes :', attr);
                });
            }
            else {
                CompilatorParseNodeVariables(child, dictionary);
            }
        });
    }
    return state;
}
exports.CompilatorParseNodeVariables = CompilatorParseNodeVariables;
function Compilator(element) {
    const content = element.innerHTML;
    const parsing = CompilatorParseVariables(content);
    element.innerHTML = parsing;
}
exports.Compilator = Compilator;
function useVariable(name) {
    return {
        variable: '',
        setVariable() {
        }
    };
}
exports.useVariable = useVariable;
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
Sensen.CompilatorParseVariables = CompilatorParseVariables;
Sensen.CompilatorParseNodeVariables = CompilatorParseNodeVariables;
//# sourceMappingURL=framework%20copy.js.map