
declare interface Window {



    $SensenNodeRefVariables: {

        [K: string]: {

            ref: string,

            records: any,

            content: string,

            attribute: {name: string, value: string},
            
        }

    };



    View: Object;



    SensenJSApp: Function;



    $SensenRLP: {

        entries: { [K: string] : string };

        push: (name: string, value: string) => void

        remove: (name: string) => void

        clean: () => void

        retrive: (name: string) => string

        retrives: () => { [K: string] : string }
        
    }
    


}
