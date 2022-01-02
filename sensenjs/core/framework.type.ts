




export type SensenTObject<T> = { 

    [K: string] : T 

}




export type SensenTVariableRecorded = { 

    [K: string] : { 

        match: RegExpMatchArray,
        
        syntax: string[]

    } 
    
}