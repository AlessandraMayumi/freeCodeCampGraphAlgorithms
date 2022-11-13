/** has path
 * 
 * Write a function, hasPath, that takes in an object representing 
 * the adjacency list of a directed acyclic graph and two nodes (src, dst). 
 * The function should return a boolean indicating whether or not 
 * there exists a directed path between the source and destination nodes.
 * 
 * https://structy.net/problems/has-path
 */

// Complexity n=nodes e=edges
// Time: O(e)
// Space: O(n)

// depth first
const hasPath = (graph, src, dst) => {
    if (src == dst) return true;
    for (let neighbor of graph[src]) {
      if (hasPath(graph, neighbor, dst)) return true;
    }
    return false;
  };

//   test_00:

const graph00 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph00, 'f', 'k'); // true

// test_01:

const graph01 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph01, 'f', 'j'); // false

// test_02:

const graph02 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph02, 'i', 'h'); // true

// test_03:

const graph03 = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

hasPath(graph03, 'v', 'w'); // true

// test_04:

const graph04 = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],  
};

hasPath(graph04, 'v', 'z'); // false