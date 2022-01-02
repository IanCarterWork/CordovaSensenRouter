import { SensenTRouterConfig } from "./Router.type";
import { SensenView } from "./View";


export type SensenRouterViewStates = {

    [K: string]: SensenView
    
}



export class SensenRouter{


    config: SensenTRouterConfig;

    routes: SensenRouterViewStates;

    root: HTMLElement;

    view: SensenView 
    

    constructor(config: SensenTRouterConfig){

        this.config = config;
        
        this.routes = {}
        
    }



    add(view : SensenView){

        this.routes[ view.slug ] = view

        return this;
        
    }
    
    



    render(){

        globalThis.addEventListener('hashchange', ()=>{

            const slug = (location.hash || '').substr(1);

            this.navigate(slug)
            
        })

        
        if(this.config.default){

            this.navigate(location.hash ? location.hash.substr(1) : this.config.default)

        }

        return this;

    }



    parseSlug(slug: string){

        const ex = slug.split('?')

        return {

            name: ex[0],

            search: ex[1]||''

        }

    }
    
    

    navigate(slug: string){

        const pslug = this.parseSlug(slug)



        /**
         * Unmount last View
         */
        if(window.View instanceof SensenView){
    
            if('unmounted' in window.View){
                    
                window.View.unmounted(window.View.dependencies);
                
            }
            
        }

        
        
        return new Promise((resolve: Function, reject: Function)=>{
    
            this.view = this.routes[ pslug.name ] || null;


            if(this.view){

                fetch(`./views/${pslug.name}.html`)
    
                    .then(r=>r.text())
                    
                    .then(html=>{
    
                        const element = new DOMParser().parseFromString(html, 'text/html')
                        
                        const fragment = document.createElement('div')
                        
                        window.$SensenRLP.clean();

                        window.$SensenNodeRefVariables = {};


                        Object.values( element.body.children ).map(c=>fragment.appendChild(c))
                        
                        this.view.render(fragment, this)
    
                        resolve(element);
                        
                        location.hash = slug;
                    
                
                        if('mounted' in this.view){
                
                            this.view.mounted(this.view.dependencies);
                            
                        }
                
                    })
    
                    .catch(er=>{
    
                        reject(er);
    
                        throw (`SensenJS Router say :\n${ er }`)
                        
                    })
    
            }

            else{

                throw (`SensenJS Router say route < \n${ slug } > not found`)
                    
            }
            
        });
        
    }

    
    
}