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

// Q4.MIN STACK(MEDIUM)
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

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

// Q5. Online Stock Span(MEDIUM)
// Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

// The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

// For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
// Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.

// StockSpanner.prototype.next = function (price) {
//   let obj = {
//       currPrice: price,
//       span: 1
//   }
//   let lastEle = this.stack[this.stack.length - 1]

//   if (this.stack.length === 0) {
//       this.stack.push(obj)
//   } else if (price < lastEle.currPrice) {
//       this.stack.push(obj)
//   } else {
//       let j = this.stack.length - 1
//       while (j >= 0 && price >= this.stack[this.stack.length - 1].currPrice ) {
//           obj.span = obj.span + this.stack[j].span
//           this.stack.pop()
//           j--
//       }
//       this.stack.push(obj)
//   }
//     return this.stack[this.stack.length - 1].span
// };

// Q6.. Next Greater Element I (MEDIUM)
// Next Greater Element I
// Solved
// Easy
// Topics
// Companies
// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// const nums1 = [2, 4],
//   nums2 = [5, 15, 10, 8, 6, 12, 9, 18];
// let stack = [];
// let map = new Map();
// let res = "";
// for (let i = nums2.length - 1; i >= 0; i--) {
//   while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
//     stack.pop();
//   }
//   res = stack.length === 0 ? -1 : stack[stack.length - 1];
//   map.set(nums2[i], res);
//   stack.push(nums2[i]);
// }

// let ans = []
// for(let i = 0 ; i < nums1.length; i++) {
//   ans.push(map.get(nums1[i]))
// }
// return ans

// Q7.. Next Greater Element I (MEDIUM)
// Given an array arr[ ] of size N having elements, the task is to find the next greater element for each element of the array in order of their appearance in the array.
// Next greater element of an element in the array is the nearest element on the right which is greater than the current element.
// If there does not exist next greater of current element, then next greater element for current element is -1. For example, next greater of the last element is always -1.
/*
let stack = []
       let ans = []
       let res = ''
       for(let i = arr.length - 1; i >= 0 ; i--) {
        // check top element of stack is less than pop
           while(stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
               stack.pop()
           }
        // top element is always greater for current element   
           res = stack.length === 0 ? -1 : stack[stack.length - 1]
           // push value in array
           ans.push(res)
           // push value each time to stack
           stack.push(arr[i])
   }
      
   // reverse array as we pushed valued in ans from back side of array.
       return ans.reverse();
       */
      
