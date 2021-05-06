/* Graph Breadth-first Traversal */
/*Traversing a graph with the BF approach is a little bit different than DFS:
we will visit the start node's neighbors (all of them), then proceed to one
of its neighbors and visit ALL of its neighbors, and so on. We are not taking
a direct route through the graph via neighbors as we would in a DF approach;
instead, we comprehensively expand from a base and make that web bigger and bigger
as we go.*/

class Graph {
  constructor () {
    this.list = {};
  }

  addVertex (val) {
    if (!this.list[val]) { this.list[val] = []; }
  }

  addEdge(v1, v2) {
    if (!this.list[v1] || !this.list[v2]) { return false; }
    this.list[v1].push(v2);
    this.list[v2].push(v1);
  }

  removeVertex (val) {
    if (!this.list[val]) { return false; }

    for (let edge of this.list[val]) {
      this.removeEdge(val, edge);
    }
    delete this.list[val];
    return true;
  }

  removeEdge(v1, v2) {
    if (!this.list[v1] || !this.list[v2]) { return false; }
    this.list[v1].splice(this.list[v1].indexOf(v2), 1);
    this.list[v2].splice(this.list[v2].indexOf(v1), 1);
  }

  _bfs (start) {
    let queue = [start];
    let visited = {};
    let result = [];
    visited[start] = true;
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.list[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}

let test2 = new Graph();
test2.addVertex('A');
test2.addVertex('B');
test2.addVertex('C');
test2.addVertex('D');
test2.addVertex('E');
test2.addVertex('F');
test2.addEdge('A', 'B');
test2.addEdge('A', 'C');
test2.addEdge('B', 'D');
test2.addEdge('C', 'E');
test2.addEdge('D', 'E');
test2.addEdge('D', 'F');
test2.addEdge('E', 'F');
console.table(test2.list);
console.log(test2._bfs('A'));