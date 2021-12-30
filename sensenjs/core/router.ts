import { SensenTRouterConfig } from "./router.type";
import { SensenView } from "./view";


export type SensenRouterViewStates = {

    [K: string]: SensenView
    
}



export class SensenRouter{


    config: SensenTRouterConfig;

    routes: SensenRouterViewStates;

    rootElement: HTMLElement;

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

            this.navigate(this.config.default)

        }

        return this;

    }
    
    

    navigate(slug: string){
        
        return new Promise((resolve: Function, reject: Function)=>{
    
            this.view = this.routes[ slug ] || null;


            console.log('View Object ', slug, this.view, this.routes )


            if(this.view){

                fetch(`./views/${slug}.html`)

                .then(r=>r.text())
                
                .then(html=>{

                    const page = new DOMParser().parseFromString(html, 'text/html')
                    
                    console.log('View HTML ', page, html )

                    location.hash = slug;

                    this.parse(page.body)
        
                    resolve(page);

                })

                .catch(er=>{

                    reject(er)

                    alert('Page introuvable')
                    
                })
    
            }

            else{

                alert('404 Erreur')
                
            }
            
        });
        
    }




    parse(dom: HTMLElement){

        if(this.rootElement){

            this.rootElement.innerHTML = '';

            this.rootElement.appendChild(dom)
            
        }

        console.log('View HTML ', dom, this.rootElement )
                    
        
    }
    
    
    
}