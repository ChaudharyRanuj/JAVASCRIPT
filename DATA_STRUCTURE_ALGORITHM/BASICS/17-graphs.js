/*
WHAT IS GRAPH?

USES OF GRAPHS

- Social Networks
- Location Mapping
- Routing Algorithm
- Visual Hierarchy
- File System Optimization
- recommendation on youtube, netflix, ecommerce website, google ads.


UNDIRECTED 
DIRECTED
WEIGTED GRAPH
UNWEIGTED GRAPH

REPRESENTING THE GRAPHS
 ADJANCY LIST 
 - can take up less space (in sparse graphs)
 - faster to iterate over the edges
 - can be slower to lookup specific edge

 Note:
 - take less space
 - 

 ADJANCY MATRIX
 - takes up more space (in sparse graphs)
 - slower to iterate over all edges
 - faster to lookup specific edge
*/

// UNDIRECTED GRAPH
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
