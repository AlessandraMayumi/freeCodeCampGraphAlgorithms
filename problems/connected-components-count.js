/** connected components count
 * Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
 * The function should return the number of connected components within the graph.
 */

const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;
    Object.keys(graph).forEach((src) => {
        const source = parseInt(src);
        let stack = [source];
        if (!visited.has(source)) count++;
        while (stack.length > 0) {
            const current = stack.pop();
            if (!visited.has(current)) {
                visited.add(current);
                for (let neighbor of graph[current]) {
                    stack.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
    });
    return count;
};


const test_00 = connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}); // -> 2
console.log(test_00)