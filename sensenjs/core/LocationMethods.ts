import { SensenTViewController } from "./ViewController.type";



const LocationGetMethods : SensenTViewController = {


    parseString(str: string, encoding: boolean = false) : {} {

        const out: {[K: string]: string} = {}
        
        const ex = str.split('&')

        ex.map(q=>{

            const qu = q.split('=')

            out[ qu[0] ] = `${ qu[1] }`
            
        })

        return out
        
    },


    trigger(props) : string{

        const ex = (location.hash ? location.hash.substr(1) : props.router.config.default || '').split('?');

        const params = this.parseString(ex[1] || '');

        Object.entries( params || {} ).map(param=>{

            window.$SensenRLP.push(param[0], param[1] as string )
            
        })

        return params
    }

}




export default LocationGetMethods;