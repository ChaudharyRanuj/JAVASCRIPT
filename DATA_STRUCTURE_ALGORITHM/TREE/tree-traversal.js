// Q1

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (temp.val > val) {
        if (temp.left == null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right == null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  Bfs() {
    let temp = this.root;
    let queue = [];
    let result = [];
    queue.push(temp);
    while (queue.length) {
      let currNode = queue.shift();
      result.push(currNode.val);
      if (currNode.left) queue.push(currNode);
      if (currNode.right) queue.push(currNode);
    }
    return result;
  }

  preOrderTraversal() {
    let result = [];
    function traverse(currNode) {
      result.push(currNode.val);
      if (currNode.left) traverse(currNode.left);
      if (currNode.right) traverse(currNode.right);
    }
    traverse(this.root);
    return result;
  }
  inOrderTraversal() {
    let result = [];
    function traverse(currNode) {
      if (currNode.left) traverse(currNode.left);
      result.push(currNode.val);
      if (currNode.right) traverse(currNode.right);
    }
    traverse(this.root);
    return result;
  }
  postOrderTraversal() {
    let result = [];
    function traverse(currNode) {
      if (currNode.left) traverse(currNode.left);
      if (currNode.right) traverse(currNode.right);
      result.push(currNode.val);
    }
    traverse(this.root);
    return result;
  }
}

let studentPercent = new BinaryTree();
studentPercent.insert(6);
studentPercent.insert(3);
studentPercent.insert(2);
studentPercent.insert(4);
studentPercent.insert(8);
studentPercent.insert(7);
studentPercent.insert(9);
console.log(studentPercent.preOrderTraversal());
console.log(studentPercent.inOrderTraversal());
console.log(studentPercent.postOrderTraversal());
