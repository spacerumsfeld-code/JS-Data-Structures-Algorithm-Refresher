Graphs!
//Graphs are rather like free-form trees: they are a collection of nodes and their connections.
//There are no parent nodes or child nodes; just nodes and their various interconnections. This is a node democracy baby!

//This allows for more flexible use for a variety of purposes.
//Some uses for the graph data structure are navigation apps (google maps!) and social networks,
//among many others.

Key Terms
Vertex=a node. Yepp, a new technical term for something we already had a term for. Live with it!
Edge=a connection between two nodes (the line between them).

Types of Graph
There are two types of graph we will at least touch on here: the directed graph and the undirected graph. The directed graph has directionality to its edges; you can consider that there are one-way connections between vertexes such that we can necessarily only navigate them one way (the way the connections lead us to).

An undirected graph, meanwhile, might be considered more like a web of vertices that are all bidirectionally connected: from any vertex A connected with vertex B, we can navigate both from A to B, and from B to A.

Additionally, graphs may be weighted or unweighted. A weighted graph has a value of some sort assigned to the edges! An unweighted graph has no such values assigned. Here is our taxonomy of graphs, then:

Unweighted undirected graph (no inherent direction of edges, edges are not holding values)
Weighted undirected graph (no inherent direction of edges, edges are storing values)
Unweighted directed graph (vertices evince a built-in direction, edges are not storing values)
Weighted directed graph (vertices have a direction, edges are storing values)