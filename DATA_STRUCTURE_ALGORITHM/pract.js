// // // "use strict";
// // class Node {
// //   constructor(value) {
// //     this.value = value;
// //     this.next = null;
// //   }
// // }

// // class SinglyLinkedList {
// //   constructor() {
// //     this.head = null;
// //     this.tail = null;
// //     this.length = 0;
// //   }

// //   push(value) {
// //     const node = new Node(value);
// //     if (!this.head) {
// //       this.head = node;
// //       this.tail = this.head;
// //     } else {
// //       this.tail.next = node;
// //       this.tail = node;
// //     }
// //     this.length++;
// //     return this;
// //   }

// //   shift(value) {
// //     const node = new Node(value);
// //     if (!this.head) {
// //       this.head = node;
// //       this.tail = this.head;
// //     } else {
// //       let curr = this.head;
// //       this.head = node;
// //       this.head.next = curr;
// //     }
// //     this.length++;
// //     return this;
// //   }

// //   pop() {
// //     if (!this.head) return undefined;
// //     let current = this.head;
// //     let prev = current;
// //     while (current.next) {
// //       prev = current;
// //       current = current.next;
// //     }
// //     this.tail = prev;
// //     this.tail.next = null;
// //     this.length--;
// //     if (this.length === 0) {
// //       this.tail = null;
// //       this.head = null;
// //     }
// //     return current.value;
// //   }
// //   unshift() {
// //     if (!this.head) return undefined;
// //     let curr = this.head;
// //     this.head = curr.next;
// //     this.length--;
// //     if (this.length === 0) {
// //       this.tail = null;
// //     }
// //     return curr.value;
// //   }

// //   print() {
// //     let current = this.head;
// //     while (current) {
// //       console.log(current.value);
// //       current = current.next;
// //     }
// //   }

// //   get(index) {
// //     if (index < 0 || index > this.length) return null;
// //     let count = 0;
// //     let current = this.head;
// //     while (count !== index) {
// //       current = current.next;
// //       count++;
// //     }
// //     return current;
// //   }

// //   set(index, val) {
// //     if (index < 0 || index > this.length) return null;
// //     let count = 0;
// //     let foundNode = this.get(index);
// //     if (foundNode) {
// //       foundNode.value = val;
// //       return true;
// //     }
// //     return false;
// //   }

// //   insert(index, val) {
// //     if (index > this.length || index < 0) return undefined;
// //     if (index === 0) this.unshift(val);
// //     if (index === this.length - 1) this.push(val);
// //     let prevNode = this.get(index - 1);
// //     let currentNode = prevNode.next;
// //     let newNode = new Node(val);
// //     newNode.next = currentNode;
// //     prevNode.next = newNode;
// //     this.length++;
// //     return this;
// //   }
// // }

// // const LinkedList = new SinglyLinkedList();
// // LinkedList.push(1000);
// // LinkedList.push(2000);
// // LinkedList.push(3000);
// // console.log(LinkedList);
// // LinkedList.pop();
// // LinkedList.pop();
// // console.log(LinkedList);

// // class Node {
// //   constructor(value) {
// //     this.value = value;
// //     this.next = null;
// //   }
// // }

// // class StackClass {
// //   constructor() {
// //     this.first = null;
// //     this.last = null;
// //     this.size = 0;
// //   }
// //   push(value) {
// //     let newNode = new Node(value);
// //     if (!this.first) {
// //       this.first = newNode;
// //       this.last = this.first;
// //     } else {
// //       this.last.next = newNode;
// //       this.last = newNode;
// //     }
// //     this.size++;
// //     return this;
// //   }

// //   pop() {
// //     if (!this.first) return undefined;
// //     let curr = this.first;
// //     let newTail = curr;
// //     while (curr.next) {
// //       newTail = curr;
// //       curr = curr.next;
// //     }
// //     this.last = newTail;
// //     // vvv.important to make null
// //     this.last.next = null;
// //     this.size--;
// //     if (this.size === 0) {
// //       this.last = null;
// //       this.first = null;
// //     }
// //     return curr.value;
// //   }
// // }

// // const newStack = new StackClass();
// // console.log(newStack);
// // newStack.push(1);
// // newStack.push(2);
// // newStack.push(3);
// // console.log(newStack);
// // newStack.pop();

// // console.log(newStack);

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = null;
//   }

//   unQueue(value) {
//     const node = new Node(value);
//     if (!this.first) {
//       this.first = node;
//       this.last = this.first;
//     } else {
//       this.last.next = node;
//       this.last = node;
//     }
//     this.size++;

//     return this;
//   }

//   deQueue() {
//     if (!this.first) return;
//     let curr = this.first;
//     this.first = curr.next;
//     this.size--;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     if (this.size === 0) {
//       this.first = null;
//     }
//     return curr.value;
//   }
// }

// const queue = new Queue();

// console.log(queue);
// queue.unQueue(1);
// queue.unQueue(2);
// queue.unQueue(3);
// console.log(queue);
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue);
// console.log(queue.deQueue());
// console.log(queue.deQueue());
// console.log(queue);

