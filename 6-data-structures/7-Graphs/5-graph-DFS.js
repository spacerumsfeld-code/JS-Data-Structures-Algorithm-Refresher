//Graph DFS Traversal
//A depth-first traversal (variously called DFS traversal or DF traversal throughout our guide) visits a given vertex, then a neighbor of that vertex, then a neighbor of THAT vertex, and so on until it cannot traverse in this fashion any further. This is in contrast to a breadth-first traversal that instead visits a vertex, then ALL of its adjacent neighbors, then their neighbors in the same fashion. It is a subtle difference, but one with implications. Let's implement a DF traversal recursively and explore the code a bit!

class Graph {
  constructor () {
    this.list = {};
  }

  addVertex (val) {
    if (!this.list[val]) { this.list[val] = []; }
  }

  addEdge (v1, v2) {
    if (!this.list[v1] || !this.list[v2]) { return null; }
    this.list[v1].push(v2);
    this.list[v2].push(v1);
    return true;
  }

  _dfsTraverse (val) {
    let visited = {};
    let result = [];

    const traverse = (v) => {
      if (!this.list[v]) { return null; }
      visited[v] = true;
      result.push(v);

      for (let edge of this.list[v]) {
        if (!visited[edge]) {
          visited = {...visited, ...traverse(edge)};
        }
      }
      return visited;
    }
    traverse(val);
    console.log(visited);

    return result;
  }
}

let test = new Graph();
test.addVertex('A');
test.addVertex('B');
test.addVertex('C');
test.addVertex('D');
test.addVertex('E');
test.addVertex('F');
test.addEdge('A', 'B');
test.addEdge('A', 'C');
test.addEdge('B', 'D');
test.addEdge('C', 'E');
test.addEdge('D', 'E');
test.addEdge('D', 'F');
test.addEdge('E', 'F');
console.table(test.list);
console.log(test._dfsTraverse('A'));

//bonus: iterative DFS Traversal
//It is useful to understand how to traverse a graph iteratively as well as recursively, because the iterative solution makes use of another data structure: the stack!

class Graph2 {
  constructor () {
    this.list = {};
  }

  addVertex (val) {
    if (!this.list[val]) { this.list[val] = []; }
  }

  addEdge (v1, v2) {
    if (!this.list[v1] || !this.list[v2]) { return null; }
    this.list[v1].push(v2);
    this.list[v2].push(v1);
    return true;
  }

  _dfsTraverseIterative (start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while(stack.length) {
        currentVertex = stack.pop();
        result.push(currentVertex);

        this.list[currentVertex].forEach(neighbor => {
           if(!visited[neighbor]){
               visited[neighbor] = true;
               stack.push(neighbor);
           }
        });
    }
    return result;
  }
}

let test2 = new Graph2();
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
console.log(test2._dfsTraverseIterative('A'));
