import { SensenView } from "../core/View"



const AboutView = new SensenView({

    slug: 'about',

    source: 'about.html',

    controller: ()=>{

        console.warn('View Init ')
        
    },
    
    mounted: ()=>{
        
        console.warn('View Focused')
        
    },
    
    unmounted: ()=>{
        
        console.warn('View Blurred')
        
    },
    
})


export default AboutView