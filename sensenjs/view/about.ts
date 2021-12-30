import { SensenView } from "../core/view"



const AboutView = new SensenView({

    slug: 'about',

    source: 'about.html',

    mount: ()=>{

        alert('View Mounted')
        
    },
    
    unmount: ()=>{
        
        alert('View UnMounted')
        
    },
    
})


export default AboutView