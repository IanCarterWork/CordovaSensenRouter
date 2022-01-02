import { SensenTObject, SensenTVariableRecorded } from "./framework.type";
import { ProtorianMetricRandom } from "./MetricRandom";





window.$SensenNodeRefVariables = { }


window.$SensenRLP = {


    entries: {},

    
    push(name: string, value: any){

        this.entries[ name ] = value

        return this;
        
    },

    
    remove(name: string){

        delete this.entries[ name ]

        return this;
        
    },


    clean(){

        this.entries = {}

        return this;
        
    },



    retrive(name: string){

        return this.entries[ name ] as string;
        
    },



    retrives(){

        return this.entries || {};
        
    },
    

}






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









export function CompilatorCheckVariables(content : string) : SensenTObject<any> {

    const records: SensenTVariableRecorded = {}

    const variableRex = new RegExp('{{(.*?)}}', 'g')

    const contentMatches = [...content.matchAll(variableRex)]


    Object.values(contentMatches).map(match=>{

        const syntax: string[] = match[1].split('||')

            syntax[0] = syntax[0].trim()

            syntax[1] = (syntax[1]||'').trim().replace( /'(.*)'/gi, "$1" )

            syntax[1] = (syntax[1]||'').trim().replace( /"(.*)"/gi, "$1" )
            
        records[ syntax[0] ] = { match, syntax, }
    
    })


    return records;
    
}







export function CompilatorRecordsRefsVariables(element: HTMLElement) : {} {

    const state : { [K: string]: any } = {};


    if(element){

        Object.values(element.children).map(child=>{

            const children = Object.values(child)

            const hasChildren = children.length


            if(!hasChildren){

                const refID = ProtorianMetricRandom.CreateAplpha(32).join('');



                /** Element Content */

                Object.entries( CompilatorCheckVariables(child.innerHTML) || {} ).map(entry=>{

                    window.$SensenNodeRefVariables[ entry[0] ] = { 
                        
                        ref: refID, 
                        
                        records: entry, 
                        
                        content: child.innerHTML,
                        
                        attribute: undefined,

                    };

                    child.setAttribute('sensen-ref', refID );

                })
                    


                /** Element Attributes */

                Object.values(child.attributes).map(attr=>{

                    Object.entries( CompilatorCheckVariables(attr.value) || {} ).map(entry=>{

                        window.$SensenNodeRefVariables[ entry[0] ] = { 
                            
                            ref: refID, 
                            
                            records: entry, 
                            
                            content: undefined,
                            
                            attribute: { name: attr.name, value: attr.value, },

                        };
    
                        child.setAttribute('sensen-ref', refID );
    
                    })
                 

                })

            }

            else{

                CompilatorNodeVariables(child as HTMLElement)
                
            }
            
            
        })
        
    }


    return state;

}





export function CompilateVariables(content: string, dictionary?: {}) : string{


    const _dictionary: { [K: string]:any } = dictionary || window.$SensenRLP.retrives()

    
    Object.entries( CompilatorCheckVariables(content) || {} ).map(entry=>{

        if(window.$SensenNodeRefVariables[ entry[0] ]){

            content = content.replace(
                
                entry[1].match[0], 
                
                (_dictionary[ entry[0] ] || entry[1].syntax[1] || entry[0]).trim() 
                
            );
            
        }

    })

        
    return content;
    
}




export function CompilatorNodeVariables(element: HTMLElement, dictionary?: {}) : {} {

    const state : { [K: string]: any } = {};


    if(element){

        if(element.children.length){
    
            Object.values(element.children).map(child=>{
    
                const children = Object.values(child)
    
                const hasChildren = children.length
    
    
                if(!hasChildren){
    
    
                    /** Element Content */
    
                    child.innerHTML = CompilateVariables(child.innerHTML, dictionary)
    
    
    
                    /** Element Attributes */
    
                    Object.values(child.attributes).map(attr=>{
    
                        if( attr.name == 'sensen-ref' ){ return; }
    
                        const value = CompilateVariables(attr.value, dictionary);
    
                        child.setAttribute( attr.name, value )
    
                    })
                    
                }
    
                else{
    
                    CompilatorNodeVariables(child as HTMLElement, dictionary)
                    
                }
                
                
            })
            
        }

        else{

            element.innerHTML = CompilateVariables(element.innerHTML, dictionary);
            
            Object.values(element.attributes).map(attr=>{
    
                if( attr.name == 'sensen-ref' ){ return; }

                const value = CompilateVariables(attr.value, dictionary);

                element.setAttribute( attr.name, value )

            })
            
        }
        
    }


    return state;

}







// export function CompilateActions(element: HTMLElement){

//     console.warn('Actions :', element, )
    
// }







export function Compilator(element: HTMLElement){

    const content = element.innerHTML as string;
    
    let parsing = CompilateVariables(content);
    

    element.innerHTML = parsing;

    // CompilateActions(element)
    
}




















export default class Sensen{

    static Name: string = 'Sensen Senju';

    static JS(app: Function){

        console.log(`${ this.Name } is ready`)

        window.SensenJSApp = app;

    }

    static RLPObject = window.$SensenRLP

    static Compilator = Compilator

    static CompilateVariables = CompilateVariables

    static CompilatorNodeVariables = CompilatorNodeVariables

    
}



