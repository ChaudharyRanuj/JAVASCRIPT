/*
WHAT IS TREE?

A non-linear data structure that consists of nodes in a parent/child relationship.

LIST ARE - LINEAR
TREES - NON- LINEAR

RULES-
* Every node move away from root and points to child
* Node can only point to child node.


TREE TERMINOLOGY
* ROOT - The top node in a tree
* CHILD - A node directly connected to another node when moving away from the root.
* PARENT - The converse notion of a child.
* SIBLINGS - A group of node with the same parent.
* LEAF - A node with no children
* EDGE - The connection between one node and another.


TREES APPLICATIONS
* Used in react making React Element Tree, Fiber Tree, Component Tree
* HTML DOM
* Network routing.
* Abstract syntax tree. (for language)
* Artificial Intelligence and Machine Learning. Example: Decision tree in gaming.
* Computer file system. File and directory in operating system.
* Jason traverse is a tree structure.

KINDS OF TREES
 
* TREE
* BINARY TREES (at most two children for each parent )
* BINARY SEARCH TREES

TRAVERSING A TREE

* Breadth-first Search

* Depth-first Search
- in-order search
- pre-order search
- post-order search


*/

class Node {
  constructor(value) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // longer solutions
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      var current = this.root;
      if (current.value === value) return "Value already exist.";
      while (true) {
        console.log("loop running");
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // TREE TRAVERSAL
  breadthFirstSearch() {
    let queue = [],
      data = [],
      current = this.root;
    queue.push(current.value);
    while (queue.length) {
      current = queue.shift();
      data.push(current);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  DfsPreorder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  DfsPostorder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  DfsInorder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

//
// PREORDER
// 10 6 3 8 15 20
// POSTORDER
// 3 8 6 20 15 10 (HELPS IN CLONING OF TREE)
// INORDER
// 3 6 8 10 15 20 (HELPS IN ASCENDING AND DESCENDING)

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
console.log(tree);
console.log(tree.DfsPreorder());
console.log(tree.DfsPostorder());
console.log(tree.DfsInorder());
