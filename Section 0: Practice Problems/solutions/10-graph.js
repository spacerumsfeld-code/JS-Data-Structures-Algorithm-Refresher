/* ----- Graph Complete Class and Methods ----- */

class Graph {
  constructor () {
    this.list = {};
  }

  addVertex (val) {
    if (!this.list[val]) { this.list[val] = []; }
  }

  addEdge (v1, v2) {
    if (!this.list[v1] || !this.list[v2]) { return false; }
    this.list[v1].push(v2);
    this.list[v2].push(v1);
  }

  removeVertex (val) {
    if (!this.list[val]) { return false; }

    for (let edge of this.list[val].slice()) {
      this.removeEdge(val, edge);
    }
    delete this.list[val];
    return true;
  }

  removeEdge (v1, v2) {
    if (!this.list[v1] || !this.list[v2]) { return false; }
    this.list[v1].splice(this.list[v1].indexOf(v2), 1);
    this.list[v2].splice(this.list[v2].indexOf(v1), 1);
  }

  dfs (start) {
    let visited = {};
    let result = [];

    const traverse = (val) => {
      if (!this.list[val]) { return false; }
      visited[val] = true;
      result.push(val);

      for (let edge of this.list[val]) {
        if (!visited[edge]) {
          visited = {...visited, ...traverse(edge)};
        }
      }
      return visited;
    };
    traverse(start);

    return result;
  }

  bfs (start) {
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
};