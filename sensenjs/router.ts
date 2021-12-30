import { SensenRouter } from "./core/router"
import AboutView from "./view/about";
import HomeView from "./view/home";


const AppRouter = new SensenRouter({
    
    default: 'home'

});


AppRouter
    .add( HomeView )
    .add( AboutView )



export default AppRouter