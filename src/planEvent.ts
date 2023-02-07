function planEvent(cb, timeout) {
    if (!(typeof cb === "function") || !(typeof timeout === "number")) {
        throw Error("INVALID_ARGUMENT");
    }

    return new Promise(() => {
        setTimeout(() => cb(), timeout)
    });
}

export default planEvent;
