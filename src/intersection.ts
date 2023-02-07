const intersection = (a: number[], b: number[]): number[] => {
    if (b === undefined) {
        throw Error("INVALID_ARGUMENTS_COUNT");
    }

    if (!(Array.isArray(a) && Array.isArray(b))) {
        throw Error("INVALID_ARGUMENT");
    }
    if (!(a.every(e => typeof e === "number") && b.every(e => typeof e === "number"))) {
        throw Error("INVALID_ELEMENT_IN_ARRAY");
    }

    // Sort is O(n * log n), cycle is O(n)
    // Prettier solution using filter and has would be at least O(n ^ 2)
    a.sort();
    b.sort();
    
    let result: number[] = new Array();
    let aIter: IterableIterator<number> = a[Symbol.iterator]();
    let bIter: IterableIterator<number> = b[Symbol.iterator]();
    let aPos: IteratorResult<number, any> = aIter.next();
    let bPos: IteratorResult<number, any> = bIter.next();

    while (!aPos.done && !bPos.done) {
        if (aPos.value === bPos.value) {
            if (result[result.length - 1] !== aPos.value) {
                result.push(aPos.value);
            }
            aPos = aIter.next();
            bPos = bIter.next();
        } else if (aPos.value < bPos.value) {
            aPos = aIter.next();
        } else if (aPos.value > bPos.value) {
            bPos = bIter.next();
        }
    }
    return result;
};

export default intersection;
