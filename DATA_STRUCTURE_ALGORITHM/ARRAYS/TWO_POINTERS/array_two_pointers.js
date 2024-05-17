// ********************************************* WITH DISTINCT VALUES ********************

// 1) PAIR EXIST OR NOT WITH GIVEN SUM OF 70 IN ARRAY
// Note: Array is sorted
// const arr = [2, 3, 5, 8, 9, 10, 100];
// const n = arr.length;
// let sum = 100;
// Naive Brute force

// function findPairExitWithSum(arr, n, sum) {
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (arr[i] + arr[j] === sum) return true;

//       if (arr[i] + arr[j] > sum) break;
//     }
//   }
//   return false;
// }
// console.log(findPairExitWithSum(arr, n, sum));

// time complexity
// Time: O(nXn)
// Space: O(1)

// OPTIMISED SOLUTION WITH TWO POINTER

// const arr = [2, 3, 5, 8, 9, 10, 100];
// const n = arr.length;
// let sum = 5;

// function findSumPairExist(arr, n, sum) {
//   let i = 0;
//   let j = n - 1;
//   while (i < j) {
//     if (arr[i] + arr[j] === sum) {
//       return true;
//     } else if (arr[j] + arr[j] < sum) {
//       i++
//     } else {
//       j--
//     }
//   }
//   return false;
// }
// console.log(findSumPairExist(arr, n, sum));

// SPACE AND TIME COMPLEXITY
// Time: O(n)
// Space: O(1)

// 2) Find the closest pair from two sorted arrays
/*
Input: arr1[] = {1, 4, 5, 7};
arr2[] = {10, 20, 30, 40};
x = 32
Output: 1 and 30
Input: arr1[] = {1, 4, 5, 7};
arr2[] = {10, 20, 30, 40};
x = 50
Output: 7 and 40

*/
// const arr1 = [1, 4, 5, 7];
// const arr2 = [10, 20, 30, 40];
// const x = 32;
// let diff;
// let min = 99999999999;
// let pair = [];
// function findNearestPair(arr1, arr2, x) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       diff = Math.abs(x - (arr1[i] + arr2[j]));
//       if (min > diff) {
//         min = diff;
//         pair = [arr1[i], arr2[j]];
//       }
//     }
//   }
// }
// findNearestPair(arr1, arr2, x);

// SPACE AND TIME COMPLEXITY
// Time: O(n X n)
// Space: O(n)

// OPTIMISED SOLUTION

// const arr1 = [1, 4, 5, 7];
// const arr2 = [10, 20, 30, 40];
// const x = 32;
// let diff;
// let min = 99999999999;
// let pair = [];
// const arr = [...arr1, ...arr2];
// function findNearestPair(arr, x) {
//   let i = 0;
//   let j = arr.length - 1;
//   while (i < j) {
//     diff = Math.abs(x - (arr[i] + arr[j]));

//     if (min > diff) {
//       min = diff;
//       pair = [arr[i], arr[j]];
//     }

//     if (arr[i] + arr[j] > x) {
//       j--;
//     } else {
//       i++;
//     }
//   }
// }
// findNearestPair(arr, x);

// SPACE AND TIME COMPLEXITY
// Time: O(n)
// Space: O(1)

// 3) Find the pair in array whose sum is closest to X (same as above)

// 4) Find all triplets with zero sum
// 5) Find a triplet that sum to a given value (same as above)
/*
Input: arr[] = {0, -1, 2, -3, 1}
Output: (0 -1 1), (2 -3 1)
Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0  

Input: arr[] = {1, -2, 1, 0, 5}
Output: 1 -2  1
Explanation: The triplets with zero sum is 1 + -2 + 1 = 0   
*/
// naive approach
// let arr = [0, -1, 2, -3, 1];
// let n = arr.length;
// let sum = 0;
// let triplets = []
// for (let i = 0; i < n; i++) {
//   for (let j = i + 1; j < n; j++) {
//     for (let k = j + 1; k < n; k++) {
//       if((arr[i] + arr[j] + arr[k]) === sum) {
//         triplets.push([arr[i] , arr[j] , arr[k]])
//       }
//     }
//   }
// }
// console.log(triplets);

// SPACE AND TIME COMPLEXITY
// Time: O(n X n X n)
// Space: O(n)

// OPTIMISED
// let arr = [12, 3, 4, 1, 6, 9].sort((a, b) => a - b);
// let i = 0;
// let j = arr.length - 1;
// let x = 24;

// let result = [];

// for (let i = 0; i < arr.length - 1; i++) {
//   let set = new Set();
//   for (let j = i + 1; j < arr.length; j++) {
//     let no = x - (arr[i] + arr[j]);
//     if (set.has(no)) {
//       result.push([arr[i], arr[j], no]);
//       return result;
//     } else {
//       set.add(arr[j]);
//     }
//   }
// }
// console.log(result);

// SPACE AND TIME COMPLEXITY
// Time: O(n X n)
// Space: O(n)

// 6) Find a triplet such that sum of two equals to third element

// naive approad three loops
/*
Time complexity: O(n cube)
Space complexity: O(n)
*/

// // 1st OPTIMIZED APPROACH
// let arr = [5, 32, 1, 7, 10, 50, 19, 21, 2]

// for(let i = 0 ; i < arr.length; i++) {
//  let set = new Set()
// for(let j = i + 1 ; j < arr.length; j++) {
//   let val = arr[i] + arr[j]
// if(set.has(val)) {
//   console.log(arr[i], arr[j], val);
//   return [arr[i], arr[j], val]
// } else {
//   set.add(arr[j])
// }
// }
// }

/*
Time complexity: O(n Square)
Space complexity: O(n)
*/

/*1) Find all triplets with zero sum with unique values;*/

// NAIVE APPROACH

// let arr = [-1, 0, 1, 2, -1, -4];
// // arr = [-2, -2,-2,-1,-1,-1,0,0,0,2,2,2,2]
// let result = []
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     for (let k = j + 1; k < arr.length; k++) {
//       if (arr[i] + arr[j] + arr[k] === 0) {
//         let numbers = [arr[i], arr[j], arr[k]].sort((a , b) => a - b)
//         insertTriplet(numbers)
//       }
//     }
//   }
// }

// function insertTriplet(num) {
// let x = false;
// for(let i = 0 ; i< result.length; i++) {
// x = result[i].every((ele, index) => ele === num[index])
// if(x === true) {
//   break;
// }
// }
// if(x === false) {
//   result.push(num)
// }
// }

/*
Time complexity: O(n5)
Space complexity: O(n + m)
*/

// Optimised Approach

// let arr = [1, 2, -2, -1, -1, 0, 0, -1, -2, 1].sort((a, b) => a - b);
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   while (arr[i] === arr[i - 1] && i < arr.length) {
//     i++;
//   }

//   let j = i + 1;
//   let k = arr.length - 1;

//   while (j < k) {
//     while (arr[j] === arr[j + 1] && j < arr.length) {
//       j++;
//     }

//     while (arr[k] === arr[k - 1] && k > -1) {
//       k--;
//     }
//     if (arr[i] + arr[j] + arr[k] === 0) {
//       result.push([arr[i], arr[j], arr[k]]);
//       j++;
//       k--;
//     } else if (arr[i] + arr[j] + arr[k] < 0) {
//       j++;
//     } else {
//       k--;
//     }
//   }
// }

// console.log(i , j , k);
// console.log(result);

// 2) Four sum with duplicates

// Optimised
// const arr = [-2, -1, -1, 1, 1, 2, 2].sort((a, b) => a - b);
// const n = arr.length;
// let target = 0;
// const result = [];

// for (let i = 0; i < n; i++) {
//   if (arr[i] === arr[i - 1] && i != 0) continue;
//   for (let j = i + 1; j < n; j++) {
//     if (arr[j] === arr[j - 1] && j != i + 1) continue;
//     let x = j + 1;
//     let y = n - 1;
//     while (x < y) {
//       let sum = arr[i] + arr[j] + arr[x] + arr[y];
//       if (sum < target) {
//         x++;
//       } else if (sum > target) {
//         y--;
//       } else {
//         result.push([arr[i], arr[j], arr[x], arr[y]]);
//         x++;
//         y--;
//         while (arr[x] === arr[x - 1] && x < y) x++;
//         while (arr[y] === arr[y + 1] && x < y) y--;
//       }
//     }
//   }
// }


