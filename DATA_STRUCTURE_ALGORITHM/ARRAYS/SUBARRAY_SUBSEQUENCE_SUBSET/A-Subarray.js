// NO OF SUBARRAYS IN AN ARRAY

// function findAllSubarrays(arr) {
//   const subarrays = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       const subarray = arr.slice(i, j + 1);
//       subarrays.push(subarray);
//     }
//   }

//   return subarrays;
// }
// const arr  = [1,2,3,4,5,6]
// findAllSubarrays(arr)

// SUB ARRAYS PROBLEMS
// GEEKS FOR GEEKS

/*
Q1. Split an array into two equal Sum subarrays

Given an array of integers greater than zero, find if it is possible to split it in two subarrays (without reordering the elements), such that the sum of the two subarrays is the same. Print the two subarrays.

Input : Arr[] = { 1 , 2 , 3 , 4 , 5 , 5  }
Output :  { 1 2 3 4 } 
          { 5 , 5 }

*/
// const arr = [1, 2, 3, 4, 5, 5];
// function equalSumSubarrays(arr) {
//   const subArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr.slice(0, i+1));
//     const leftHalf = arr.slice(0, i + 1);
//     const leftHalfSum = leftHalf.reduce((curr, prev) => curr + prev, 0);

//     const rightHalf = arr.slice(i + 1);

//     const rightHalfSum = rightHalf.reduce((curr, prev) => curr + prev, 0);

//     if (leftHalfSum === rightHalfSum) {
//       subArray.push(leftHalf, rightHalf);
//       return subArray;
//     }
//   }

//   return -1;
// }

/*
Q2. Check if subarray with given product exists in an array
Given an array of both positive and negative integers and a number K., The task is to check if any subarray with product K is present in the array or not.
Input: arr[] = {-2, -1, 3, -4, 5}, K = 2
Output: YES

Input: arr[] = {3, -1, -1, -1, 5}, K = 3
Output: YES

*/

// function productExist(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       const subArray = arr.slice(i, j + 1);
//       const prod = subArray.reduce((curr, prev) => curr * prev, 1);
//       if (prod === 2) {
//         return "Yes";
//       }
//     }
//   }
//   return "No";
// }
// const arr = [-2, -1, 3, -4, 5];
// console.log(productExist(arr));

/*
Q3.Subarray of size k with given sum


Given an array arr[], an integer K and a Sum. The task is to check if there exists any subarray with K elements whose sum is equal to the given sum. If any of the subarray with size K has the sum equal to the given sum then print YES otherwise print NO..

Examples: 

Input: arr[] = {1, 4, 2, 10, 2, 3, 1, 0, 20}
        k = 4, sum = 18
Output: YES
Subarray = {4, 2, 10, 2}

Input: arr[] = {1, 4, 2, 10, 2, 3, 1, 0, 20}
        k = 3, sum = 6
Output: YES

*/
// function productExist(arr, sumValue) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       const subArray = arr.slice(i, j + 1);
//       const sum = subArray.reduce((curr, prev) => curr + prev, 0);
//       if (sum === sumValue) {
//         return "Yes";
//       }
//     }
//   }
//   return "No";
// }
// const sum = 18;
// const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
// console.log(productExist(arr, sum));

// Q4.Sort an array where a subarray of a sorted array is in reverse order

//Given an array of N numbers where a subarray is sorted in descending order and rest of the numbers in the array are in ascending order. The task is to sort an array where a subarray of a sorted array is in reversed order.

// Examples:

// Input: 2 5 65 55 50 70 90
// Output: 2 5 50 55 65 70 90
// The subarray from 2nd index to 4th index is in reverse order.
// So the subarray is reversed, and the sorted array is printed.

// Input: 1 7 6 5 4 3 2 8
// Output: 1 2 3 4 5 6 7 8

// const arr = [2, 5, 65, 55, 50, 70, 90];

// HINT: USE TWO POINTER APPROACH.

// const arr = [1, 7, 6, 5, 4, 3, 2, 8];
// const n = arr.length;
// function printSorted(arr, n) {
//   let front = 0;
//   let back = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] >= arr[i + 1]) {
//       front = i;
//       break;
//     }
//   }

//   for (let i = front; i < n; i++) {
//     if (arr[i] <= arr[i + 1]) {
//       back = i;
//       break;
//     }
//   }

//   while (front < back) {
//     let temp = arr[front];
//     arr[front] = arr[back];
//     arr[back] = temp;
//     front++;
//     back--;
//   }
//   console.log(arr);
// }
// printSorted(arr, n);

// Q5.Count subarrays with all elements greater than K

// Given an array of N integers and a number K, the task is to find the number of subarrays such that all elements are greater than K in it.

// Examples:

// Input: a[] = {3, 4, 5, 6, 7, 2, 10, 11}, K = 5
// Output: 6
// The possible subarrays are {6}, {7}, {6, 7}, {10}, {11} and {10, 11}.

// Input: a[] = {8, 25, 10, 19, 19, 18, 20, 11, 18}, K = 13
// Output: 12

// function elementsGreater(values, checkSum) {
//   const subArrays = [];
//   for (let i = 0; i < values.length; i++) {
//     for (let j = i; j < values.length; j++) {
//       const sliceArray = values.slice(i, j + 1);
//       subArrays.push(sliceArray);
//     }
//   }

//   // console.log(subArrays);
//   let count = 0;
//   let sum = 0;
//   for (let i = 0; i < subArrays.length; i++) {
//     const ele = subArrays[i];
//     for (let j = 0; j < ele.length; j++) {
//       sum = sum + ele[j];
//       console.log(ele);
//     }
//     // console.log(sum);
//     if (sum === checkSum) {
//       count++;
//     }
//     sum = 0;
//   }
//   console.log(count);
// }

// const arr = [3, 4, 5, 6, 7, 2, 10, 11],
//   K = 5;
// elementsGreater(arr, K);

/* Q6.Maximum length of the sub-array whose first and last elements are same

Given a character array arr[] containing only lowercase English alphabets, the task is to print the maximum length of the subarray such that the first and the last element of the sub-array are same.
Examples: 
 

Input: arr[] = {‘g’, ‘e’, ‘e’, ‘k’, ‘s’} 
Output: 2 
{‘e’, ‘e’} is the maximum length sub-array satisfying the given condition.
Input: arr[] = {‘a’, ‘b’, ‘c’, ‘d’, ‘a’} 
Output: 5 
{‘a’, ‘b’, ‘c’, ‘d’, ‘a’} is the required sub-array 

*/
// const arr = ["g", "e", "e", "k", "s"];
// const arr = ["a", "b", "c", "d", "a"];
// let maxLen = 0;
// let minLen = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     const subArray = arr.slice(i, j + 1);
//     minLen = subArray.length;
//     if (subArray[0] === subArray[subArray.length - 1]) {
//       maxLen = maxLen > minLen ? maxLen : minLen;
//     }
//   }
// }
// console.log(maxLen);

/* Q7.Check whether an Array is Subarray of another Array

Given two arrays A[] and B[] consisting of n  and m integers. The task is to check whether the array B[] is a subarray of the array A[] or not.

Examples: 

Input : A[] = {2, 3, 0, 5, 1, 1, 2}, B[] = {3, 0, 5, 1} 
Output : Yes

Input : A[] = {1, 2, 3, 4, 5}, B[] = {2, 5, 6} 
Output : No 

*/

// const A = [2, 3, 0, 5, 1, 1, 2],
//   B = [3, 0, 5, 1], C = [2, 5, 6];

// function subArrayExist(A, B) {
//   for (let i = 0; i < A.length; i++) {
//     let j = 0;
//     let count = 0;
//     while (j < B.length && i + j < A.length) {
//       if (A[i + j] === B[j]) {
//         count++;
//       }
//       j++;
//     }
//     if (count === B.length) return "Yes";
//   }
//   return "No";
// }
// console.log(subArrayExist(A, C));

// NOT ATTEMPTED
/* Q8.Find array such that no subarray has xor zero or Y

Given two integers X (1 ? X ? 15) and Y. The task is to find an array of the maximum possible length N such that all the elements in the array lie in between 1 and 2X and there exists no subarray such that xor value of the subarray is either 0 or Y. If there exist multiple answers then print any one of them. If no such array exists then print -1
Examples: 
 

Input: X = 3, Y = 5 
Output: 1 3 1 
(1 ^ 3) = 2 
(3 ^ 1) = 2 
(1 ^ 3 ^ 1) = 3
Input: X = 1, Y = 1 
Output: -1 

*/
// NOT ATTEMPTED
/* Q9.Maximum subsequence sum such that all elements are K distance apart.

Given an array arr[] of N integers and another integer K. The task is to find the maximum sum of a subsequence such that the difference of the indices of all consecutive elements in the subsequence in the original array is exactly K. For example, if arr[i] is the first element of the subsequence then the next element has to be arr[i + k] then arr[i + 2k] and so on.
Examples: 
 
Input: arr[] = {2, -3, -1, -1, 2}, K = 2 
Output: 3
Input: arr[] = {2, 3, -1, -1, 2}, K = 3 
Output: 5 

*/

/* Q10.Count of subarrays with sum at least K

Given an array arr[] of size N and an integer K > 0. The task is to find the number of subarrays with sum at least K.
Examples: 
 

Input: arr[] = {6, 1, 2, 7}, K = 10 
Output: 2 
{6, 1, 2, 7} and {1, 2, 7} are the only valid subarrays.
Input: arr[] = {3, 3, 3}, K = 5 
Output: 3 

*/
// function findSubArrSum(arr, k) {
//   let subArrays = [];
//   let sum = 0;
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       const subArr = arr.slice(i, j + 1);
//       sum = subArr.reduce((curr, prev) => curr + prev, 0);
//       // console.log(sum);
//       if (sum >= k) count++;
//       sum = 0;
//     }
//   }
//   console.log(`The no of SubArrays with atleast sum ${k}:  ${count}`);
// }

// // let arr = [6, 1, 2, 7],
// //   K = 10;

// let arr = [3, 3, 3],
//   K = 5;
// findSubArrSum(arr, K);

/* Q11.Length of Smallest subarray in range 1 to N with sum greater than a given value

Given two numbers N and S, the task is to find the length of smallest subarray in range (1, N) such that the sum of those chosen numbers is greater than S.

Examples: 

Input: N = 5, S = 11 
Output: 3 
Explanation: 
Smallest subarray with sum > 11 = {5, 4, 3}

Input: N = 4, S = 7 
Output: 3 
Explanation: 
Smallest subarray with sum > 7 = {4, 3, 2} 

*/

// function findSmallestArr(N, checkSum) {
//   let arr = [];
//   let sum = 0;

//   for (let i = N; i > 0; i--) {
//     let ele = i;
//     arr.push(ele);
//     sum = sum + ele;
//     if (sum > checkSum) {
//       return arr;
//     }
//   }
// }

// // let N = 4,
// //   S = 7;
// let N = 5,
//   S = 11;
// console.log(findSmallestArr(N, S));

/* 
Q12.Sum of all subarrays of size K

Given an array arr[] and an integer K, the task is to calculate the sum of all subarrays of size K.

Examples: 

Input: arr[] = {1, 2, 3, 4, 5, 6}, K = 3 
Output: 6 9 12 15 
Explanation: 
All subarrays of size k and their sum: 
Subarray 1: {1, 2, 3} = 1 + 2 + 3 = 6 
Subarray 2: {2, 3, 4} = 2 + 3 + 4 = 9 
Subarray 3: {3, 4, 5} = 3 + 4 + 5 = 12 
Subarray 4: {4, 5, 6} = 4 + 5 + 6 = 15

Input: arr[] = {1, -2, 3, -4, 5, 6}, K = 2 
Output: -1, 1, -1, 1, 11 
Explanation: 
All subarrays of size K and their sum: 
Subarray 1: {1, -2} = 1 – 2 = -1 
Subarray 2: {-2, 3} = -2 + 3 = -1 
Subarray 3: {3, 4} = 3 – 4 = -1 
Subarray 4: {-4, 5} = -4 + 5 = 1 
Subarray 5: {5, 6} = 5 + 6 = 11 
// */
// function findSumofArr(arr, K) {
//   let resultArr = [];
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       let subArr = arr.slice(i, j + 1);
//       if (subArr.length === K) {
//         sum = subArr.reduce((curr, prev) => curr + prev, 0);
//         resultArr.push(sum);
//       }
//     }
//     subArr = [];
//     sum = 0;
//   }
//   console.log(resultArr);
// }

// // let arr = [1, 2, 3, 4, 5, 6],
// //   K = 3;
// let arr = [1, -2, 3, -4, 5, 6],
//   K = 2;
// findSumofArr(arr, K);
