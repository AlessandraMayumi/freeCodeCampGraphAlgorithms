// adjacent list
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// depth first transversal
// Stack 
// push pop
const depthFirstPrint = (graph, source) => {
    let stack = [ source ];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}
console.log('depthFirstPrint');
depthFirstPrint(graph, 'a');

const depthFirstRecursive = (graph, source) => {
    console.log(source);
    for (let neighbor of graph[source]) {
        depthFirstRecursive(graph, neighbor);
    }
}
console.log('depthFirstRecursive');
depthFirstRecursive(graph, 'a');

// breadth first transversal busca em largura
// Queue
// shift push
const breadthFirstPrint = (graph, source) => {
    let queue = [ source ];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
}
console.log('breadthFirstPrint');
breadthFirstPrint(graph, 'a');