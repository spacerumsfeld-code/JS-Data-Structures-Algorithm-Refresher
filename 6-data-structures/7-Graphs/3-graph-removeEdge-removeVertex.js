//Remove Vertex, Remove edge
//In this section, we will implement a method to remove a vertex from the graph, and a method to remove an edge between two vertexes.

//The logic is pretty simple. When we go to remove aa vertex, we must also ensure any edges connected to it from other vertexes are purged as well -- otherwise, a vertex would have an edge to a vertex that does not even exist! We lean on our already-built removeEdge method on all edges in the target vertexes' list and purge away.

//The logic for removing an edge is pretty straightforward. Since this is a non-directed graph, we will take in both vertexes as inputs and remove either of their references to each other. A simple tweak for a directional graph would be to simply remove the connection from the first input vertex to the second, since of course they will not necessarily be pointing towards one another in a bidirectional fashion (though they could be).

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
  }

  removeVertex (val) {
    if (!this.list[val]) { return null; }

    for (let edge of this.list[val]) {
      this.removeEdge(val, edge);
    }
    delete this.list[val];
    return true;
  }

  removeEdge (v1, v2) {
    if (!this.list[v1] || !this.list[v2]) { return null; }
    this.list[v1].splice(this.list[v1].indexOf[v2], 1);
    this.list[v2].splice(this.list[v2].indexOf[v1], 1);
    return true;
  }
}
//Lets use the example of a graph of two-way flights between cities to make this a bit more concrete!

let flights = new Graph();
// console.log(flights);
flights.addVertex('San Luis Obispo');
// console.log(flights);
flights.addVertex('San Francisco');
flights.addEdge('San Francisco', 'San Luis Obispo');
console.log(flights);
console.log(flights.addEdge('Tokyo', 'San Francisco'));
// console.log(flights.removeEdge('San Francisco', 'San Luis Obispo'));
console.log(flights.removeVertex('San Francisco'));
console.log(flights);