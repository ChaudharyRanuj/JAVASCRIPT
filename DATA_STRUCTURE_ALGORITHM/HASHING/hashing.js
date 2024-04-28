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

// Q5. Winner of Election
// Given an array of n names arr of candidates in an election, where each name is a string of lowercase characters. A candidate name in the array represents a vote casted to the candidate. Print the name of the candidate that received the maximum count of votes. If there is a draw between two candidates, then print lexicographically smaller name.

// Example 1:

// Input:
// n = 13
// arr[] = {john,johnny,jackie,johnny,john
// jackie,jamie,jamie,john,johnny,jamie,
// johnny,john

// OPTIMISED SOLUTION
// winner(votesCount, n){
//   // code here
//  let map = new Map();
// let max = -1;
// let name = '';
// for (let i = 0; i < votesCount.length; i++) {
// if (!map.has(votesCount[i])) {
// map.set(votesCount[i], 1);
// } else {
// map.set(votesCount[i], map.get(votesCount[i]) + 1);
// }
// }
// for (let [key, value] of map) {
// if (value > max) {
// max = Math.max(max, value);
// name = key;
// }
// if (max === value) {
// if (name > key) {
// name = key;
// }
// }
// }

// return [name,max];
// }

// Q6 Pairs with Positive Negative values
// Easy
// Matrix Partners India: Exclusive Job-A-Thon | Apply to 15+ Companies via 1 Hiring Challenge | Starting from 29th April onwards

// banner
// Given an array of integers, print all the pairs having positive and negative values of a number that exists in the array.

// NOTE: If no such pair exists, simply return an empty array, also multiple pairs of the same number could exist and you need to print each of them separately.

/*
Input:
n = 8
a [ ] = {1, -3, 2, 3, 6, -1, -3, 3}
Output:
-1 1 -3 3 -3 3
*/

// first solution naive approach

// const arr = [1, -1, 2, 3, 6, -1, -3, -2];

// let map = new Map();
// let negValMap = new Map();

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     if (map.has(arr[i])) {
//       map.set(arr[i], map.get(arr[i]) + 1);
//     } else {
//       map.set(arr[i], 1);
//     }
//   }

//   if (arr[i] < 0) {
//     if (negValMap.has(arr[i])) {
//       negValMap.set(arr[i], negValMap.get(arr[i]) + 1);
//     } else {
//       negValMap.set(arr[i], 1);
//     }
//   }
// }
// let ans = [];

// for (let [key, value] of map) {
//   let min = 0;
//   if (negValMap.has(-key)) {
//     min = Math.min(value, negValMap.get(-key));
//     for (let i = 0; i < min; i++) {
//     ans.push(Math.abs(key));
//       ans.push(Math.abs(key));
//     }
//   }
// }
// const res = ans.map((ele, idx) => {
//   if(idx % 2 == 0) {
//     return -ele;
//   } else {
//     return ele;
//   }
// })

// 2nd SOLUTION

/*
// Positive value map with numbers counts
let map = new Map();

// Contains all values less than Zero
let negVal = [];

// make map with number count and get negative value in array
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  } else {
    negVal.push(arr[i]);
  }
}
// sort negative value array
negVal.sort((a, b) => a - b);


// iterate from end in negVal array
// Note: As array is sorted, the array largest value is at end so we have to loop from end
// to get the sorted result in ouput array.


let output = [];
for (let i = negVal.length - 1; i >= 0; i--) {
  let posValue = negVal[i] * -1;
  // if map has opposite of negVal than push the value its no of count in map
  if (map.get(posValue)) {
    output.push(negVal[i], posValue);
    // decrease no of count after pushing the value to the output array.
    map.set(posValue, map.get(posValue) - 1);
  }
}
return output

*/

// 3rd Solution
// MOST OPTIMISED
// let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19, 7, 19, 19, 17, 18].sort(
//   (a, b) => a - b
// );
// let arr2 = [2, 1, 4, 3, 9, 6];
// let set = new Set();

// for (let ele of arr2) {
//   set.add(ele);
// }

// let found = [];
// let notFound = [];
// for (let ele of arr1) {
//   if (set.has(ele)) {
//     found.push(ele);
//   } else {
//     notFound.push(ele);
//   }
// }

// let map = new Map();

// for (let ele of found) {
//   if (map.has(ele)) {
//     map.set(ele, map.get(ele) + 1);
//   } else {
//     map.set(ele, 1);
//   }
// }

// let output = [];
// for (let ele of arr2) {
//   if (map.has(ele)) {
//     let end = map.get(ele);
//     for (let j = 0; j < end; j++) {
//       output.push(ele);
//     }
//   }
// }

// for (let ele of notFound) {
//   output.push(ele)
// }

// return output

// Q7 Relative Sort Array

// let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
// let arr2 = [2, 1, 4, 3, 9, 6];

// FIRST SOLUTION

// let map = new Map();
// let set = new Set();

// for (let i = 0; i < arr2.length; i++) {
//   set.add(arr2[i]);
// }

// let notFound = [];
// for (let i = 0; i < arr1.length; i++) {
//   if (map.has(arr1[i])) {
//     map.set(arr1[i], map.get(arr1[i]) + 1);
//   } else {
//     map.set(arr1[i], 1);
//   }

//   if (!set.has(arr1[i])) {
//     notFound.push(arr1[i]);
//   }
// }
// console.log(map);
// let ans = [];
// for (let i = 0; i < arr2.length; i++) {
//   if (map.get(arr2[i])) {
//     console.log(map.get(arr2[i]));
//    for (let j = 0 ;j < map.get(arr2[i]); j++) {
//       ans.push(arr2[i]);
//     }
//   }
// }
// notFound.sort((a,b) => a -b)

// ans = [...ans, ...notFound]
// return ans;

// // SECOND SOLUTION
// let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19, 7, 19, 19, 17, 18].sort(
//   (a, b) => a - b
// );
// let arr2 = [2, 1, 4, 3, 9, 6];
// let set = new Set();

// for (let ele of arr2) {
//   set.add(ele);
// }

// let found = [];
// let notFound = [];
// for (let ele of arr1) {
//   if (set.has(ele)) {
//     found.push(ele);
//   } else {
//     notFound.push(ele);
//   }
// }

// let map = new Map();

// for (let ele of found) {
//   if (map.has(ele)) {
//     map.set(ele, map.get(ele) + 1);
//   } else {
//     map.set(ele, 1);
//   }
// }

// let output = [];
// for (let ele of arr2) {
//   if (map.has(ele)) {
//     let end = map.get(ele);
//     for (let j = 0; j < end; j++) {
//       output.push(ele);
//     }
//   }
// }

// for (let ele of notFound) {
//   output.push(ele)
// }

// return output

// 4th solution
// let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19, 7, 19, 19, 17, 18].sort(
//   (a, b) => a - b
// );
// let arr2 = [2, 1, 4, 3, 9, 6];
// // create arr1 element count map
// let map = new Map();
// // create ordered map as arr is sorted
// for (let ele of arr1) {
//   if (map.has(ele)) {
//     map.set(ele, map.get(ele) + 1);
//   } else {
//     map.set(ele, 1);
//   }
// }

// let output = [];
// for (let ele of arr2) {
//   if (map.has(ele)) {
//     let end = map.get(ele);
//     for (let i = 0; i < end; i++) {
//       output.push(ele);
//       map.set(ele, map.get(ele) - 1);
//     }
//   }
// }
// // push remaining values
// for (let pair of map) {
//   let [key, value] = pair;
//   if (value > 0) {
//     for (let i = 0; i < value; i++) {
//       output.push(key);
//     }
//   }
// }
// return output;

// Q8  Custom Sort String

// Medium
// You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

// Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

// Return any permutation of s that satisfies this property.

// let order = "hucw",
//   s =
//     "utzoampdgkalexslxoqfkdjoczajxtuhqyxvlfatmptqdsochtdzgypsfkgqwbgqbcamdqnqztaqhqanirikahtmalzqjjxtqfnh";

// let map = new Map();

// for (let i = 0; i < s.length; i++) {
//   if (map.has(s[i])) {
//     map.set(s[i], map.get(s[i]) + 1);
//   } else {
//     map.set(s[i], 1);
//   }
// }

// // loop through order string to check character if exist in map
// let output = "";
// for (let i = 0; i < order.length; i++) {
//   console.log(i);
//   if (map.has(order[i])) {
//     let count = map.get(order[i]);
//     for (let j = 0; j < count; j++) {
//       output += order[i];
//       map.set(order[i], map.get(order[i]) - 1);
//     }
//   }
// }

// for (let [key, value] of map) {
//   if (value > 0) {
//     if (map.has(key)) {
//       let count = map.get(key);
//       for (let j = 0; j < count; j++) {
//         output += key;
//         map.set(key, map.get(key) - 1);
//       }
//     }
//   }
// }
// return output;

// Q9  Group Anagrams
/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/
// FIRST SOLUTION (OPTIMISED SOLUTION)
// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// strs.sort();
// let map = new Map();

// for (let ele of strs) {
//   let sortedWord = ele.split("").sort().join("");

//   if (!map.has(sortedWord)) {
//     map.set(sortedWord, [ele]);
//   } else {
//     map.set(sortedWord, [...map.get(sortedWord), ele]);
//   }
// }

// let output = [];
// for (let [key, value] of map) {
//   output.push(value);
// }

// return output;
