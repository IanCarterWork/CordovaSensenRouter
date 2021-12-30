import { SensenView } from "../core/view"



const HomeView = new SensenView({

    slug: 'home',

    source: 'home.html',

    mount: ()=>{

        alert('View Mounted')
        
    },
    
    unmount: ()=>{
        
        alert('View UnMounted')
        
    },
    
})


export default HomeView