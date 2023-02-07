
function getArrayOfNumberProps(obj: object): string[] {
    if (!(typeof obj === "object") || Array.isArray(obj) || obj === null) {
        throw Error("INVALID_ARGUMENT");
    }

    let result: string[] = new Array();
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            result = result.concat(getArrayOfNumberProps(obj[key]));
        } else if (typeof obj[key] === "number") {
            result.push(key);
        }
    }
    return result;
}

const getNumberProps = (obj: object): string[] => {
    return getArrayOfNumberProps(obj).sort();
};

export default getNumberProps;