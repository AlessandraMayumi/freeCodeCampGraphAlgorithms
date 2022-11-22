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
const connectedComponentsCountDeepthFirst = (graph) => {
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

/* SOLUTION */

const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
    for (let node in graph) {
        if (explore(graph, node, visited) === true) {
            count += 1;
        }
    }
    return count;
};


const explore = (graph, current, visited) => {
    if (visited.has(String(current))) return false;

    visited.add(String(current));

    for (let neighbor of graph[current]) {
        explore(graph, neighbor, visited);
    }

    return true;
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
