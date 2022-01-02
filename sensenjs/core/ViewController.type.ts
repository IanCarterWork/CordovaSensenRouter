import { SensenTViewDependencyProps } from "./View.type";




export type SensenTViewController = {

    [K: string]: any;

    trigger: (props: SensenTViewDependencyProps) => any

}