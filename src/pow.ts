type PowerFunction = (a:number, b: number) => number;
type Currying = (a:number, b?: number) => ((b: number) => number) | number;

const currying = (func: PowerFunction): Currying => {
    return function(a:number, b?: number): ((b: number) => number) | number {
        if (b === undefined) {
            return function (b: number): number {
                return func(a, b);
            }
        } else {
            return func(a, b);
        }
    }

};

function power(a: number, b: number): number {
    if (!(typeof a === "number" && typeof b === "number")) {
        throw Error("INVALID_ARGUMENT");
    }
    return Math.pow(a, b);
}

let pow: Currying = currying(power);

export default pow;
