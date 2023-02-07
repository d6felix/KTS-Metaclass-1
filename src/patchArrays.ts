// @ts-nocheck

const count = function(): number {
    return this.length;
}

const insert = function(index: number, value: any): this {
    if (!(typeof index === "number")) {
        throw Error("INVALID_ARGUMENT");
    }
    index = index < 0 ? 0 : (index > this.length ? this.length : index);
    this.splice(index, 0, value);
    return this;
}

const remove = function(value: any): this {
    let index: number = this.findIndex((item: any): boolean => item === value);
    if (index >= 0) {
        this.splice(index, 1);
    }
    return this;
}

const patchArrays = (): void => {
    Array.prototype.count = count;
    Array.prototype.insert = insert;
    Array.prototype.remove = remove;
};

export default patchArrays;
