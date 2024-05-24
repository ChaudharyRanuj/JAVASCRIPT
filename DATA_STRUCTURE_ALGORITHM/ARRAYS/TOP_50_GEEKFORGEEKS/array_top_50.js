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
// take last element and move to the swap and move the first position
// do swap no of rotation time;
// let arr = [1, 2, 3, 4, 5];
// let n = 4;

// for (let i = 0; i < n; i++) {
//   let last = arr.length - 1;
//   let lastEle = arr[last];
//   for (let i = last; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = lastEle;
// }

// TIME COMPLEXITY O(n square)
// SPACE COMPLEXITY O(1)

// optimal solution

// let arr = [1, 2, 3, 4, 5];
// let n = 4;
// var rotate = function (arr, n) {
//   for (let i = 0; i < n; i++) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start != end) {
//       let temp;
//       temp = arr[start];
//       arr[start] = arr[end];
//       arr[end] = temp;
//       start++;
//     }
//   }
// };

// // optimised solution

// var rotate = function (arr, n) {
//   n = n > arr.length ? Math.floor(n % arr.length) : n;

//   let k = arr.length - n - 1;
//   let start = 0;

//   while (start < k) {
//     [arr[start], arr[k]] = [arr[k], arr[start]];
//     start++;
//     k--;
//   }

//   // reverse array from arr.length - k

//   let j = arr.length - n;
//   let end = arr.length - 1;
//   while (j < end) {
//     [arr[end], arr[j]] = [arr[j], arr[end]];
//     j++;
//     end--;
//   }

//   // reverse the whole array to get the result
//   for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
// };

// // TIME COMPLEXITY O(n)
// // SPACE COMPLEXITY O(1)

// Q11. Cyclic Rotate array

// let sumOfNaturatlNo = ( n * ( n + 1)) / 2

// let total = 0
// for(let i = 0 ; i < arr.length; i++) {
//     total += arr[i]
// }

// return sumOfNaturatlNo - total;

// Q12. Count pairs with given sum

// BRUTE FORCE
// Note: Remove TLE

// let arr = [1, 1, 1, 1]
// let k = 2
// let n = arr.length;
// let count = 0;
// for(let i = 0 ; i < n ; i++){
//     for(let j = i + 1;j < n; j++) {
//     if(arr[i] + arr[j] == k ) {
//         count++
//     }
//     }

// }
// TIME COMPLEXITY : O(n square)
// space : O(1)

// OPTIMISED
// TIME COMPLEXITY : O(n)
// space : O(n)

// class Solution {
//   getPairsCount(arr, n, k) {
//     //code here
//     let count = 0;
//     let i = 0;
//     let map = new Map();
//     while (i < n) {
//       let diff = k - arr[i];
//       if (map.has(diff)) {
//         count += map.get(diff);
//       }
//       if (!map.has(arr[i])) {
//         map.set(arr[i], 1);
//       } else {
//         map.set(arr[i], map.get(arr[i]) + 1);
//       }

//       i++;
//     }
//     return count;
//   }
// }

// Q13. Find duplicates in an array
// BRUTE FORCE

// class Solution {
//   duplicates(arr, n) {
//     // your code here
//     let set = new Set();
//     let i = 0;
//     let result = [];
//     while (i < n) {
//       if (set.has(arr[i]) && !result.includes(arr[i])) {
//         result.push(arr[i]);
//       }

//       if (!set.has(arr[i])) {
//         set.add(arr[i]);
//       }
//       i++;
//     }

//     if (result.length > 0) return result.sort((a, b) => a - b);

//     return [-1];
//   }
// }

// OPTIMISED SOLUTION
// class Solution {

//     duplicates(arr, n) {
//         // your code here
// arr.sort((a,b)=> a - b)
// let set = new Set()
// let duplicates = new Set()
// let i = 0;

// while(i < n){
//     if(set.has(arr[i]) && !duplicates.has(arr[i])){
//     duplicates.add(arr[i])
//     }

//     if(!set.has(arr[i])){
//         set.add(arr[i])
//     }
//     i++
// }

// if(duplicates.size > 0) return Array.from(duplicates);

// return [-1]
//     }
// }

// time complexity: O(n)
// space complexity: O(n + m)

// Q14. Find duplicates in an array
// BRUTE FORCE
// duplicates(arr, n) {
//     // your code here
// arr.sort((a,b)=> a - b)
// let set = new Set()
// let duplicates = new Set()
// let i = 0;

// while(i < n){
// if(set.has(arr[i]) && !duplicates.has(arr[i])){
// duplicates.add(arr[i])
// }

// if(!set.has(arr[i])){
//     set.add(arr[i])
// }
// i++
// }

// if(duplicates.size > 0) return Array.from(duplicates);

// return [-1]
// }

// Q15 Sort an Array using the Quicksort algorithm

// Q16 Find common elements in three sorted arrays

// BRUTE FORCE
// class Solution{
//     commonElements(arr1, arr2, arr3, n1, n2,n3){
//         //code here
//         // BRUTE FORCE
//         let set1 = new Set()
//         let set2 = new Set()

//        let i = 0
//        while(i < n1) {
//            if( !set1.has(arr1[i]) ){
//                set1.add(arr1[i])
//            }
//            i++
//        }

//         let j = 0
//        while(j < n2) {
//            if( !set2.has(arr2[j]) ){
//                set2.add(arr2[j])
//            }
//            j++
//        }

//        let k = 0;
//        let result = []
//        while(k < n3){
//            if( set1.has(arr3[k]) && set2.has(arr3[k]) ){
//                if(!result.includes(arr3[k])) {
//                result.push( arr3[k] )
//                }
//            }
//            k++
//        }

//        return result
//     }
// }

// SECOND APPROACH

// class Solution{
//     commonElements(arr1, arr2, arr3, n1, n2,n3){
//         //code here
//         // BRUTE FORCE
//         let set1 = new Set(arr1)
//         let set2 = new Set(arr2)
//         let set3 = new Set(arr3)

//       let result = []
//       for(let num of set3) {
//          if(set1.has(num) && set2.has(num)){
//              result.push(num)
//          }
//      }

//        return result
//     }
// }

// MOST OPTIMISED APPROACH
