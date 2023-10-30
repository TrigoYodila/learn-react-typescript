type RandomNumberType = {
    value:number
}

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

//isPositive et isNegative sont facultatifs et ne seront pas
type Zero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

// type RandomNumberProps = {
//     value:number
//     isPositive?:boolean
//     isNegative?:boolean
//     isZero?:boolean
// }

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero


export const RandomNumber = ({ value, isPositive, isNegative, isZero }:RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'Zero'}
        </div>
    )
}