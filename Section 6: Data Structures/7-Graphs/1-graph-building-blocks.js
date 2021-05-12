Building Blocks for Graphs
//Like many of our data structures, the graph is an abstract concept can be modeled in a variety of ways in actual code.

//The two most common ways to model a graph is to use an adjacency matrix and to use an adjacency list.

//These may sound rather similar, but they have their differences:
//With an adjacency matrix, we represent the entire graph with an array of arrays. You can consider this a list of the columns and rows of the graph, if you wish. The key point here is to store a '1' at the intersection of two vertexes in the matrix which are in fact connected!

//Meanwhile, for a list, we will have an array of arrays as well. a given index in the array will have all the connections for the vertex at that index.

[
0  [1,2]
1  [0]
2  [0,1]
]

Thus in the above example, vertex 0 has connections to vertexes 1 and 2. We see this bidirectional connection when we see that those vertexes are also connected to 0.

This has its problems, however: this only works if the vertexes are number values! If they are strings or chars, this will not work. A solution to this is to use a hash table to store these values instead.

There are pros and cons to either of these approaches, and it is beyond the scope of this section to truly break them down. The point is, there are a couple of broad strategies for storing vertexes and their edges for a graph, and we will focus on just one.

Evaluating the above approaches:
Adjacency List:
-can take up less space
-faster to iterate over all edges

Adjacency matrix:
-Takes up more space
-slow to iterate
-faster lookup

We will be using an adjacency list for our implementation; just know that this will be one implementation of many, and just one TYPE of implementation of two

Here is our building block class. We will be building an undirected graph at first; that is to say, all of our edges will be bidirectional between vertexes

class Graph {
  constructor () {
    this.adjacencyList = {};
  }
}