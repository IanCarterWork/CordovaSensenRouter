import { MetricTAlphaL, MetricTAlphaNum, MetricTAlphaNumL, MetricTAlphaNumU, MetricTAlphaU, MetricTNum } from "./Metric.type";

export class ProtorianMetricRandom{

    static ALPHA_NUMERIC: MetricTAlphaNum = 'a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';

    static ALPHA_NUMERIC_LOWER: MetricTAlphaNumL = 'a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9';

    static ALPHA_NUMERIC_UPPER: MetricTAlphaNumU = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';

    static ALPHA_UPPER: MetricTAlphaU = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';

    static ALPHA_LOWER: MetricTAlphaL = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';

    static NUMERIC: MetricTNum = '0 1 2 3 4 5 6 7 8 9';
    


    static CreateRandom(min: number, max: number){

        return Math.floor(Math.random() * (max - min) + min);

    }
    
    


    static CreateBlock(base: string, length: number){

        let based, out = [];


        if(typeof base == 'string'){

            based = base.split(' ')
            
        }
        

        if(Array.isArray(based)){

            for (let x = 0; x < length; x++) {

                const k = this.CreateRandom(0, based.length - 1);

                out[out.length] = based[ k ];
                
            }
            
        }
        
        return out;
        
    }




    static CreateAplpha(length: number){

        return this.CreateBlock(

            `${ this.ALPHA_LOWER } ${ this.ALPHA_UPPER }`,

            length
            
        )

    }




    static CreateNumeric(length: number){

        return this.CreateBlock(

            `${ this.NUMERIC }`,

            length

        )

    }




    static Create(length: number){

        return this.CreateBlock(

            `${ this.ALPHA_NUMERIC }`,

            length

        )

    }
    
    
    
    
}