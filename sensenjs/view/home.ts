import { SensenView } from "../core/View"




const HomeView = new SensenView({

    slug: 'home',

    source: 'home.html',

    controller: ($: any)=>{


        // setTimeout(()=>{

        //     $.view.setVariable('postImage', './assets/images/ggn.png');

        // }, 1000)

        console.warn('View Controller :', $?.GET?.param )


        
    },
    


    mounted: ()=>{
        
        console.warn('View Mounted')
        
    },
    


    unmounted: ()=>{
        
        console.warn('View UnMounted')
        
    },
    
})


export default HomeView