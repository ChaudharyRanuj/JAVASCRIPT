"use strict";

// ******************************* level 1 ***********************

// Q1. Peak element

// class Solution {

//     peakElement(arr, n)
//     {
//         // code here
//         let result = []
//         let j =  0
//         if(arr[j] >= arr[j + 1]) {
//             return j;
//         }

//         for(let i = 1 ; i < n - 1 ; i++) {
//             if(arr[i] >= arr[i - 1] && arr[i] >= arr[i+1] ) {
//                 return i;
//             }
//         }

//        if(arr[n - 1] >= arr[n - 2]) {
//             return n - 1;
//         }

//     }
// }

// Q2 Find minimum and maximum element in an array

// class Solution{
//     getMinMax(arr,n){
//         //code here
//         let i = 0 ;
//         let max = -Infinity;
//         let min = Infinity
//         while(i < n) {
//             min = Math.min(min, arr[i])
//             max = Math.max(max, arr[i])
//              i++
//         }
//         return [min, max]
//     }
// }

// Q3. Reverse a String

// class Solution {

//     reverseWord(str){
//         //Your code here

//        let revStr = ''

//        for(let i = str.length - 1; i >= 0 ; i--) {
//            revStr+= str[i]
//        }

//         return revStr;

//     }
// }

// Q4 Sort The Array

// sortArr(n, arr) {
//     return arr.sort((a,b) => a - b)
//  }

// Q5. Kth smallest element

// class Solution {
//     kthSmallest(arr,l,r,k){
//       //code here
//     return  arr.sort((a,b) => a - b)[k - 1]
//     }
//   }

// Q6. Find the Frequency
/*

Given an Array Arr of N positive integers and an integer X. Return the frequency of X in the array.

Example 1:

Input:
N = 5
Arr = {1, 1, 1, 1, 1}
X = 1

*/
// class Solution{
//     findFrequency(arr, n, x){
//         //code here
//         let k = 0
//         for(let i = 0 ; i < n; i++) {
//             if(arr[i] == x ) {
//                 k++
//             }
//         }
//         return k;
//     }
// }

// Q7. Find Indexes of a subarray with given sum
// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}

// class Solution
// {
//     //Function to find a continuous sub-array which adds up to a given number.
//     subarraySum(arr, n, givenSum)
//     {
//       //your code here
//     let start = 0;
//     let currSum = arr[0]
//    for(let i = 1 ; i <= n; i++){

//     while(currSum > givenSum && start < i - 1) {
//      currSum -= arr[start]
//      start++
//     }

//     if(currSum == givenSum) {
//         return [start + 1, i]
//     }

//     if(i < n) {
//         currSum += arr[i]
//     }

//    }

//    return [-1]

//     }
// }

// Q8. Move all negative elements to end
/*
Input : 
n = 8
arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
*/

// BRUTE FORCE
// IMPROVE TLE
// class Solution {
//   segregateElements(arr, n) {
//     //code here
//     let i = n;
//     while (i >= 0) {
//       let j = i;
//       if (arr[j] < 0) {
//         while (j < n - 1 && arr[j + 1] >= 0) {
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//           j++;
//         }
//       }
//       i--;
//     }
//   }
// }

// TIME COMPLEXITY O(n2)
// SPACE COMPLEXITY O(1)

// OPTIMISED
// let arr = [1, -1, 3, 2, -7, -5, 11, 6]
// let n = arr.length;
// let res = []

//    let i = 0
//    while(i < n) {
//        if(arr[i] >= 0) {
//        res.push(arr[i])
//        }
//        i++
//    }

//     let j = 0
//     while(j < n) {
//        if(arr[j] < 0) {
//        res.push(arr[j])
//        }
//        j++
//    }

// let k = 0 ;
//   while(k < n) {
//       arr[k] = res[k]
//       k++;
//   }

// TIME COMPLEXITY O(n)
// SPACE COMPLEXITY O(n)

// Q9. Union of two arrays
// class Solution {
//   //Function to return the count of number of elements in union of two arrays.
//   doUnion(arrFirst, n, arrSecond, m){
//       // code here
//       let set = new Set()
//       // add arrFirst elements to set
//       let i = 0
//       while(i < n) {
//       set.add(arrFirst[i])
//       i++
//       }

//        // add arrSecond elements not in set
//       let j = 0 ;
//       while(j < m) {
//           if(!set.has(arrSecond[j])){
//               set.add(arrSecond[j])
//           }
//           j++
//       }

//       // all elements remaining in set are union with no repetion values
//       return set.size

//   }

// }

// TIME COMPLEXITY O(n)
// SPACE COMPLEXITY O(n)

// Q10. Cyclic Rotate array

// BRUTE FORCE
// Note: Remove TLE find efficient solution

let arr = [1, 2, 3, 4, 5];
let n = 4;
let last = arr.length - 1;
let lastEle = arr[last];

for (let i = 0; i < n; i++) {
  let last = arr.length - 1;
  let lastEle = arr[last];
  for (let i = last; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastEle;
}
