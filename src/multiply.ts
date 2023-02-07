function multiply (a: number): (b: number) => number {
    if (!(typeof a === "number")) {
        throw Error("INVALID_ARGUMENT");
    }
    return function (b: number): number {
        if (!(typeof b === "number")) {
            throw Error("INVALID_ARGUMENT");
        }
        return a * b;
    }
};

export default multiply;
