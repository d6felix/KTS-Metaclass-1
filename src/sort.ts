const sort = (str: string): string => {
    if (!(typeof str === "string")) {
        throw Error("INVALID_ARGUMENT");
    }
    return str.toLowerCase().split(" ").map((s: string): string => s.split("").sort().join(""))
        .sort((a: string, b: string): number => a.length - b.length).join(" ");
};

export default sort;
