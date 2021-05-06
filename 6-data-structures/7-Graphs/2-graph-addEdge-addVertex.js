//Add Vertex, Add Edge
//Alright, finally time to get building! We have covered the bare rudiments of what a graph is, the different sorts of graphs, some uses for graphs, and two methods for implementing graphs (since graphs are just an abstract concept, after all). In this section we will build a simple undirectional graph with the ability to add vertexes (nodes) and add edges between these nodes.

class Graph {
  constructor () {
    this.list = {};
  }

  addVertex (val) {
    if (!this.list[val]) { this.list[val] = []; }
  }

  addEdge (a, b) {
    if (!this.list[val] || !this.list[b]) { return null; }
    this.list[a].push(b);
    this.list[b].push(a);
  }
}

//Pretty simple stuff. To add a vertex, we just assign it as a property of our adjacency list with an empty array (the array represents its connections to other vertexes). When we go to add an edge, we simply connect the two vertexes by pushing either of their values into the respective other vertexes' list. Voila! If this were a directed graph, we would tweak the addEdge method to only push the second vertex value into the first's array; a would have an edge to b but not vice versa.