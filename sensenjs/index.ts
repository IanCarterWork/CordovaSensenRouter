import AppRouter from "./router";



const SensenJSApp = (appRoot: HTMLElement)=>{

    console.warn('App in ', appRoot, AppRouter)
    
    // appRoot.innerHTML = 'Chargement...'


    AppRouter.rootElement = appRoot;

    AppRouter.render()
    
}


//@ts-ignore
window.SensenJSApp = SensenJSApp;
