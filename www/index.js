



let isLoaded = false;


function onDeviceReady(ev) {

    if(!isLoaded){

        /**
         * When Ready
         */

        if('SensenJSApp' in window){

            const app = document.querySelector('#root')
    
            window.SensenJSApp(app)
            
        }

        isLoaded = true;

    }
    

}



document.addEventListener('deviceready', onDeviceReady, false);

window.addEventListener('load', onDeviceReady);
