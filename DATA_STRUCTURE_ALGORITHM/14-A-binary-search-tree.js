// /*
// BINARY SEARCH TREES

// HOW BINARY SEARCH TREE WORKS?
// * Every parent node has at most two children.
// * Every node to the left of a parent node is always less than the parent.
// * Every node to the right of a parent node is always greater the parent.

// BIG O of BST
// insertion - O(log n)
// searching - O(log n)
// */

// class Node {
//   constructor(value) {
//     this.right = null;
//     this.left = null;
//     this.value = value;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   // longer solutions
//   insert(value) {
//     let newNode = new Node(value);
//     if (!this.root) {
//       this.root = newNode;
//     } else {
//       var current = this.root;
//       if (current.value === value) return "Value already exist.";
//       while (true) {
//         console.log("loop running");
//         if (value < current.value) {
//           if (current.left === null) {
//             current.left = newNode;
//             return this;
//           } else {
//             current = current.left;
//           }
//         } else if (value > current.value) {
//           if (current.right === null) {
//             current.right = newNode;
//             return this;
//           } else {
//             current = current.right;
//           }
//         }
//       }
//     }
//   }

//   //  solution
//   find(val) {
//     if (!this.root === null) return undefined;
//     let current = this.root;
//     let found = false;
//     while (current && !found) {
//       if (current.value > val) {
//         current = current.left;
//       } else if (current.value < val) {
//         current = current.right;
//       } else {
//         found = true;
//         return current;
//       }
//     }
//     return false;
//   }
// }

// const searchNum = new BinarySearchTree();

// // console.log(searchNum);
// searchNum.insert(8);
// searchNum.insert(9);
// // console.log(searchNum);
// searchNum.insert(10);
// searchNum.insert(11);
// searchNum.insert(12);
// searchNum.insert(13);
// searchNum.insert(14);
// searchNum.insert(15);
// searchNum.insert(16);
// searchNum.insert(17);
// searchNum.insert(18);
// searchNum.insert(19);
// // console.log(searchNum);
// console.log(searchNum.find(12));
// console.log(searchNum.find(18));
// console.log(searchNum.find(15));
// console.log(searchNum.find(100));
