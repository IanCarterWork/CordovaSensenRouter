import type { SensenViewProps } from "./view.type";



export class SensenView{

    slug: string;

    source: string;

    onmount: () => void;

    onunmount: () => void;




    constructor(props: SensenViewProps){

        this.slug = props.slug;

        this.source = props.source;

        this.onmount = props.mount;

        this.onunmount = props.unmount;
        
    }




    
    
    
}