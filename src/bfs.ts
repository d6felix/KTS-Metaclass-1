function getNodes(current: string[], graph: object): string[] {
    if (current.length === 0) {
        return [];
    } else {
        let result: string[] = new Array();
        let next: string[] = new Array();
        
        result = result.concat(current);
        for (let node in current) {
            next = next.concat(graph[current[node]]);
        }
        result = result.concat(getNodes(next, graph));
        return result;
    }
}

const bfs = (graph: object): string[] => {
    if (!(typeof graph === "object") || Array.isArray(graph) || graph === null) {
        throw Error("INVALID_ARGUMENT");
    }
    return getNodes([Object.keys(graph)[0]], graph);
};

export default bfs;
