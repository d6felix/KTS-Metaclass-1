const sum = (...args: number[]):number=> {
    if (args.length < 2) {
        throw Error("INVALID_ARGUMENTS_COUNT");
    }
    if (!args.every((a) => typeof(a) === "number")) {
        throw Error("INVALID_ARGUMENT");
    }
    return args.reduce((s: number, a: number): number => {return s + a}, 0);
};

export default sum;