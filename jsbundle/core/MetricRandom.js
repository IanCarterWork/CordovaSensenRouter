"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtorianMetricRandom = void 0;
class ProtorianMetricRandom {
    static CreateRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    static CreateBlock(base, length) {
        let based, out = [];
        if (typeof base == 'string') {
            based = base.split(' ');
        }
        if (Array.isArray(based)) {
            for (let x = 0; x < length; x++) {
                const k = this.CreateRandom(0, based.length - 1);
                out[out.length] = based[k];
            }
        }
        return out;
    }
    static CreateAplpha(length) {
        return this.CreateBlock(`${this.ALPHA_LOWER} ${this.ALPHA_UPPER}`, length);
    }
    static CreateNumeric(length) {
        return this.CreateBlock(`${this.NUMERIC}`, length);
    }
    static Create(length) {
        return this.CreateBlock(`${this.ALPHA_NUMERIC}`, length);
    }
}
exports.ProtorianMetricRandom = ProtorianMetricRandom;
ProtorianMetricRandom.ALPHA_NUMERIC = 'a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';
ProtorianMetricRandom.ALPHA_NUMERIC_LOWER = 'a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9';
ProtorianMetricRandom.ALPHA_NUMERIC_UPPER = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';
ProtorianMetricRandom.ALPHA_UPPER = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
ProtorianMetricRandom.ALPHA_LOWER = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
ProtorianMetricRandom.NUMERIC = '0 1 2 3 4 5 6 7 8 9';
//# sourceMappingURL=MetricRandom.js.map