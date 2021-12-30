



let isLoaded = false;

function onDeviceReady(ev) {

    if(!isLoaded){

        if('SensenJSApp' in window){

            const app = document.querySelector('#root')
    
            window.SensenJSApp(app)
            
        }

        console.log('Cordova is ready \n', window.SensenJSApp )

        isLoaded = true;

    }
    

}



document.addEventListener('deviceready', onDeviceReady, false);
window.addEventListener('load', onDeviceReady);
