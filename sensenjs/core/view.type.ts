import { SensenRouter } from "./Router"
import { SensenView } from "./View"
import { SensenTViewController } from "./ViewController.type"






export type SensenTViewControllersDependencies = {

    [K: string]: SensenTViewController
    
}



export type SensenTViewProps = {

    slug: string;

    source: string;

    controller?: (dependencies?: SensenTViewControllersDependencies) => void;

    mounted?: (dependencies?: SensenTViewControllersDependencies) => void;

    unmounted?: (dependencies?: SensenTViewControllersDependencies) => void;

    setVariable?: (name: string, value: any) => void;

}




export type SensenTViewDependencyProps = {

    view: SensenView,

    input: HTMLElement,

    router: SensenRouter,
    
}


