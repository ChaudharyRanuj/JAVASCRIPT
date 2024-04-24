// Q1 Implement Queue using Stacks
// EASY

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Example 1:

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]
// ************************************************ WITH ARRAYS ******************************************
// APPROACH FIRST

// var MyQueue = function () {
//   this.input = [];
//   this.output = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function (x) {
//   if (this.input.length === 0) {
//     while (this.output.length > 0) {
//       this.input.push(this.output.pop());
//     }
//   }
//   this.input.push(x);
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function () {
//   if (this.input.length === 0) {
//     return this.output.pop();
//   } else {
//     let val = this.peek();
//     this.output.pop();
//     return val;
//   }
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function () {
//   while (this.input.length > 0) {
//     this.output.push(this.input.pop());
//   }
//   return this.output[this.output.length - 1];
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function () {
//   let status = this.input.length == 0 && this.output.length == 0 ? true : false;
//   return status;
// };

// // OPTIMISED SOLUTION

// var MyQueue = function () {
//   this.stack1 = [];
//   this.stack2 = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function (x) {
//   this.stack1.push(x);
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function () {
//   if (this.stack2.length === 0) {
//     while (this.stack1.length) {
//       this.stack2.push(this.stack1.pop());
//     }
//   }

//   return this.stack2.pop();
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function () {
//   if (this.stack2.length === 0) {
//     while (this.stack1.length) {
//       this.stack2.push(this.stack1.pop());
//     }
//   }

//   return this.stack2.at(-1);
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function () {
//   return this.stack1.length === 0 && this.stack2.length === 0;
// };

/*
Q2. Implement Stack using Queues
Easy

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
*/

// ************************************************ WITH ARRAYS ******************************************
// var MyStack = function () {
//   this.queue1 = [];
//   this.queue2 = [];
// };

// MyStack.prototype.push = function (x) {
//   if (this.queue1.length === 0) {
//     while (this.queue2.length > 0) {
//       this.queue1.push(this.queue2.pop());
//     }
//   }
//   this.queue1.push(x);
// };

// MyStack.prototype.pop = function () {
//   if (this.queue2.length === 0) {
//     while (this.queue1.length > 0) {
//       this.queue2.push(this.queue1.pop());
//     }
//   }
//   return this.queue2.shift();
// };

// MyStack.prototype.top = function () {
//   if (this.queue2.length === 0) {
//     while (this.queue1.length > 0) {
//       this.queue2.push(this.queue1.pop());
//     }
//   }
//   return this.queue2[0];
// };

// MyStack.prototype.empty = function () {
//   return this.queue1.length == 0 && this.queue2.length == 0;
// };
