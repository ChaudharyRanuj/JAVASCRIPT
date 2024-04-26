// Q1 Non-Repeating Element
// Easy

// Find the first non-repeating element in a given array arr of n integers and if there is not present any non-repeating element then return 0

// Note: The array consists of only positive and negative integers and not zero

// class Solution {
//   firstNonRepeating(arr, n) {
//     //code here
//     let map = new Map();
//     for (let i = 0; i < n; i++) {
//       if (!map.get(arr[i])) {
//         map.set(arr[i], 1);
//       } else {
//         map.set(arr[i], map.get(arr[i]) + 1);
//       }
//     }

//     for (let [key, value] of map) {
//       if (value === 1) {
//         return key;
//       }
//     }
//     return 0;
//   }
// }
/*
TIME COMPLEXITY : O(n)
SPACE COMPLEXITY : O(n)
*/

// Q2. First Repeating Element
// Easy
// Matrix Partners India: Exclusive Job-A-Thon | Apply to 15+ Companies via 1 Hiring Challenge | Starting from 29th April onwards

// banner
// Given an array arr[] of size n, find the first repeating element. The element should occur more than once and the index of its first occurrence should be the smallest.

// Note:- The position you return should be according to 1-based indexing.

// Example 1:

// Input:
// n = 7
// arr[] = {1, 5, 3, 4, 3, 5, 6}
// Output: 2

// Example 2:

// Input:
// n = 4
// arr[] = {1, 2, 3, 4}
// Output: -1

// class Solution {
//   // Function to return the position of the first repeating element.
//   firstRepeated(arr, n) {
//     // your code here
//     let map = new Map();
//     let min = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//       if (!map.has(arr[i])) {
//         map.set(arr[i], i);
//       } else {
//         min = Math.min(min, map.get(arr[i]));
//       }
//     }

//     if (min === Infinity) return -1;
//     return min + 1;
//   }
// }

/*
TIME COMPLEXITY : O(n)
SPACE COMPLEXITY : O(n)
*/

// Q3. Key Pair
// Easy
// Given an array Arr of N positive integers and another number X. Determine whether or not there exist two elements in Arr whose sum is exactly X.
// Input:
// N = 6, X = 16
// Arr[] = {1, 4, 45, 6, 10, 8}

// let arr = [1, 4, 45, 6, 10, 8].sort(a, (b) => a - b);
// let X = 16;
// let res = false;
// let i = 0;
// let j = arr.length - 1;
// console.log(arr);
// while (i < arr.length && j >= 0) {
//   console.log(i,j);
//   if (arr[i] + arr[j] > X) {
//     j--;
//   } else if (arr[i] + arr[j] < X) {
//     i++;
//   } else {
//     console.log(arr[i], arr[j]);
//     res = true;
//     return;
//   }
// }


// Q4. Subarray with 0 sum

// Given an array of integers. Find if there is a subarray (of size at-least one) with 0 sum. You just need to return true/false depending upon whether there is a subarray present with 0-sum or not. Printing will be taken care by the driver code.

/*
Input:
n = 5
arr = {4,2,-3,1,6}
*/



// OPTIMISED SOLUTION 

// function subArrayExists(arr, n){
//   // code here
// const set = new Set();
// let sum = 0
// for (let i = 0; i < arr.length; i++) {

// sum += arr[i]

// if(sum === 0) return true;
// if(set.has(sum)) {
// return true;
// } 

// set.add(sum)
// }

// return false;
// }

// Time complexity O(n)
// Space complexity O(n)