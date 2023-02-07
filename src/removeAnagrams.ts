function checkAnagram (a: string, b: string): boolean {
    if (a.length !== b.length) {
        return false;
    } else {
        return a.split("").sort().join("") === b.split("").sort().join("");
    }
}

const removeAnagrams = (arr: string[]): string[] => {
    if (!Array.isArray(arr)) {
        throw Error("INVALID_ARGUMENT");
    }
    if (!arr.every(s => (typeof s === "string"))) {
        throw Error("INVALID_ELEMENT_IN_ARRAY");
    }

    return arr.filter((current: string, currentIndex: number, arr: string[]): boolean => 
        arr.every((i: string, index: number): boolean => !checkAnagram(current, i) || index === currentIndex));
};

export default removeAnagrams;