function getNodes(current: string, graph: object): string[] {
    let result: string[] = new Array();
    
    if (graph[current].length === 0) {
        return [current];
    } else {
        result.push(current);
        for (let rib in graph[current]) {
            result = result.concat(getNodes(graph[current][rib], graph));
        }
        return result;
    }
}

const dfs = (graph: object): string[] => {
    if (!(typeof graph === "object") || Array.isArray(graph) || graph === null) {
        throw Error("INVALID_ARGUMENT");
    }
    return getNodes(Object.keys(graph)[0], graph);
};

export default dfs;
