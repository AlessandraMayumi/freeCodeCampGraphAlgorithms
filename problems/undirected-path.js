/** undirected path
 * Write a function, undirectedPath, that takes in an array of edges for an undirected graph 
 * and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not 
 * there exists a path between nodeA and nodeB.
 * https://structy.net/problems/undirected-path
 */
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
]
const addNode = (graph, a, b) => {
    if (graph[a]) {
        graph[a].push(b);
    } else {
        graph[a] = [b];
    }
    return graph;
}

const convertArrayToGraph = (edges) => {
    let graph = {};
    for (let coordinate of edges) {
        const a = coordinate[0];
        const b = coordinate[1];
        graph = addNode(graph, a, b);
        graph = addNode(graph, b, a);
    }
    console.log(graph)
    return graph;
}
const undirectedPathBreadthFirst = (edges, nodeA, nodeB) => {
    const graph = convertArrayToGraph(edges);
    const alreadyVisited = new Set(); // add has
    // breadth first
    const queue = [nodeA];
    while (queue.length > 0) {
        const current = queue.shift();
        if (!alreadyVisited.has(current)) {
            alreadyVisited.add(current);
            console.log(current);
            for (let neighbor of graph[current]) {
                if (neighbor == nodeB) return true;
                queue.push(neighbor)
            }
        }
    }
    return false;
};

const depthFirst = (graph, nodeA, nodeB, alreadyVisited) => {
    console.log(nodeA);
    if (!alreadyVisited.has(nodeA)) {
        alreadyVisited.add(nodeA);
        for (let neighbor of graph[nodeA]) {
            if (neighbor == nodeB) return true;
            else {
                if (depthFirst(graph, neighbor, nodeB, alreadyVisited)) return true;
            }
        }
    }
    return false;
}
const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = convertArrayToGraph(edges);
    const alreadyVisited = new Set(); // add has
    // depth first
    return depthFirst(graph, nodeA, nodeB, alreadyVisited);
};

undirectedPath(edges, 'l', 'j');