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


