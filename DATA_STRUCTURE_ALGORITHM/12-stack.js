// ****************************************** STACK *************************************************

//******* BIG (O) **********
// INSERTION -  O(1)
// REMOVAL -  O(1)
// SEARCHING -  O(N)
// ACCESS -  O(N)
// */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   push(val) {
//     const newNode = new Node(val);

//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       var temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     ++this.size;
//     return this;
//   }

//   pop() {
//     if (!this.first) return undefined;
//     const curr = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = curr.next;
//     this.size--;
//     return curr.val;
//   }
// }

// const newStack = new Stack();
// newStack.push(4);
// newStack.push(3);
// newStack.push(2);
// newStack.push(1);
// console.log(newStack.pop());
// console.log(newStack.pop());
// console.log(newStack);
