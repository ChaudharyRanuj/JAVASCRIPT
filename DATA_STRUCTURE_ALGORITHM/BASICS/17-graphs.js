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
// GRAPH
// GRAPH
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // check if edge already exist
      if (
        this.adjacencyList[vertex1].includes(vertex2) ||
        this.adjacencyList[vertex2].includes(vertex1)
      ) {
        console.log(
          `Edge already exist between vertex: ${vertex1}, vertex: ${vertex2}`
        );
      } else {
        // add edge between verte1 and vertex2
        this.adjacencyList[vertex2].push(vertex1);
        this.adjacencyList[vertex1].push(vertex2);
        return true;
      }
    } else {
      // if edge not added
      return false;
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // remove vertex2
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
      // remove vertex1
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
      return true;
    }
    return false;
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length !== 0) {
        let removedVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, removedVertex);
      }
      delete this.adjacencyList[vertex];
      return true;
    }

    return false;
  }

  getList() {
    return this;
  }
}

const newMap = new Graph();
// ADD VERTEX
newMap.addVertex("A");
newMap.addVertex("B");
newMap.addVertex("C");
newMap.addVertex("D");
newMap.addVertex("E");
console.log(newMap.getList());

// ADD EDGE
newMap.addEdge("A", "B");
newMap.addEdge("A", "D");
newMap.addEdge("A", "E");
console.log(newMap.getList());
newMap.addEdge("B", "A");
newMap.addEdge("B", "E");
newMap.addEdge("B", "C");
console.log(newMap.getList());
newMap.addEdge("C", "B");
newMap.addEdge("C", "D");
console.log(newMap.getList());
newMap.addEdge("D", "C");
newMap.addEdge("D", "A");

// REMOVE VERTEX
newMap.removeVertex("E");
console.log(newMap.getList());
newMap.removeVertex("C");
console.log(newMap.getList());

// REMOVE EDGE
newMap.removeEdge("A", "B");
console.log(newMap.getList());

// REMOVE VERTEX
newMap.removeVertex("B");
console.log(newMap.getList());
