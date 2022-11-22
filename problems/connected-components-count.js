/** connected components count
 * Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
 * The function should return the number of connected components within the graph.
 */

 const connectedComponentsCountBreadthFirst = (graph) => {
    let countConnected = 0;
    const visited = new Set();
    Object.keys(graph).forEach((src) => {
        const source = parseInt(src);
        if (!visited.has(source)) {
            countConnected++;
            let queue = [source];
            while (queue.length > 0) {
                const current = queue.shift();
                if (!visited.has(current)) {
                    visited.add(current);
                    // console.log(current);
                    for (let neighbor of graph[current]) {
                        if (!visited.has(neighbor)) {
                            queue.push(neighbor);
                        }
                    }
                }
            }
        }
    });
    return countConnected;
};

// Deepth First
const connectedComponentsCount = (graph) => {
    let countConnected = 0;
    const visited = new Set();
    Object.keys(graph).forEach((src) => {
        const source = parseInt(src);
        if (!visited.has(source)) {
            countConnected++;
            let stack = [source];
            while (stack.length > 0) {
                const current = stack.pop();
                if (!visited.has(current)) {
                    visited.add(current);
                    for (let neighbor of graph[current]) {
                        if (!visited.has(neighbor)) {
                            stack.push(neighbor);
                        }
                    }
                }
            }
        }
    });
    return countConnected;
};
console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
})); // -> 2);
console.log(connectedComponentsCount({
    1: [2],
    2: [1, 8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
})); // -> 1
