import Sensen from "./core/framework";
import AppRouter from "./router";

'use strict';



const SensenJSApp = (appRoot: HTMLElement)=>{
    
    AppRouter.root = appRoot;

    AppRouter.render()
    
}



Sensen.JS(SensenJSApp);

