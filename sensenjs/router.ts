import { SensenRouter } from "./core/Router"
import AppViewControllersDependencies from "./dependencies";
import AboutView from "./view/about";
import HomeView from "./view/home";


const AppRouter = new SensenRouter({
    
    default: 'home?param=value',

    viewControllersDependencies: AppViewControllersDependencies

});


AppRouter

    .add( HomeView )

    .add( AboutView )



export default AppRouter