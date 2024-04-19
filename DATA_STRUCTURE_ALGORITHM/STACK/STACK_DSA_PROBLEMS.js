// Q1. Remove All Adjacent Duplicates In String (EASY)
/*
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
Output: false

Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
Example 2:

Input: s = "azxxzy"
Output: "ay"
*/

// SOLUTION Q1

// var removeDuplicates = function(s) {
//   let stack = []
// for(let i = 0 ; i < s.length; i++) {
//    if(stack.length === 0) {
//        stack.push(s[i])
//    } else {
//        let stackLastEle =  stack[stack.length - 1]
//        if(stackLastEle === s[i]) {
//            stack.pop()
//        } else {
//            stack.push(s[i])
//        }
//    }
// }

// return stack.join("");
// };
// BIG O
/*
time complexity : O(n)
space complexity : O(n)
*/

// Q2. Remove All Adjacent Duplicates in String II (MEDIUM)
/*

You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.
Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
Example 3:

Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
*/
// SOLUTION Q2



// Q3. Valid Parentheses (EASY)
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "({[)"
Output: false

*/
// let s = "({[)";

// var isValid = function (s) {
//   let stack = [];
//   let obj = {
//     "}": "{",
//     "]": "[",
//     ")": "(",
//   };
//   for (let i = 0; i < s.length; i++) {
//     if(stack.length === 0) {
//         stack.push(s[i])
//     } else {
//         if (stack[stack.length - 1] === obj[s[i]]) {
//             stack.pop();
//           } else {
//             stack.push(s[i]);
//           }
//     }
//   }
// };
// isValid(s);

// Q4. Remove All Adjacent Duplicates in String II (MEDIUM)
/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

*/

// var MinStack = function () {
//   this.minStack = [],
//       this.stack = []
// };


// MinStack.prototype.push = function (val) {
//   // push value to minStack
//   if (this.minStack.length === 0) {
//       this.minStack.push(val)
//   } else {
//       // push value in min stack if val less than top element of min stack
//       let minElement = this.minStack[this.minStack.length - 1]
//       if (val <= minElement) {
//           this.minStack.push(val)
//       }
//   }
//   // push value to stack
//   this.stack.push(val)

// };


// MinStack.prototype.pop = function () {
//   let poppedEle = this.stack.pop()
//   // if element removed from stack is equal to min value at top of minstack than pop
//   let minElement = this.minStack[this.minStack.length - 1]
//   if (poppedEle === minElement) {
//       this.minStack.pop()
//   }
// };


// MinStack.prototype.top = function () {
//   return this.stack[this.stack.length - 1]
// };


// MinStack.prototype.getMin = function () {
//   return this.minStack[this.minStack.length - 1]
// };


