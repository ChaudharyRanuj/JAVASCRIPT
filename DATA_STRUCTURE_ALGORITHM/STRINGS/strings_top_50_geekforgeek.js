// Q1 Reverse words in a given string

let string = "geeks quiz practice code";
let str = string.split(" ");
str.reverse();
return str.join(" ");

// Q2 Longest Common Prefix in an Array
// BRUTE FORCE
// let arr = ['geeksforgeeks', 'geeks', 'geek',
//     'geezer']
// let n = arr.length

// class Solution {
//     longestCommonPrefix(arr,n){
//         //code here
//         // we must take one string and check each string with
//     let firstString = arr[0]
//     let longestStr = ''
//     // iterate for first string character and than check each character with string in array with each string in array
//     for(let i = 0 ; i < firstString.length; i++){
//         let prefixFound = true;
//         // loop arrray for each value of firstString[i]
//         let j = 0;
//         while(j < n) {
//         // compare with each string in array if not equal stop the while loop
//         if(firstString[i] !== arr[j][i]) {
//             prefixFound = false;
//             break;
//         }
//             j++
//         }
//         if(!prefixFound) break;
//         // if prefix found than each line bewlow will execute and add string to longestStr variable
//         longestStr += firstString[i]
//     }

//     if(longestStr.length > 0) return longestStr;

//     return -1;


//     }
// }

// TIME COMPLEXITY: O(n square)
// SPACE COMPLEXITY: O(longestStr.length)

// OPTIMISED SOLUTION
// let arr = ['geeksforgeeks', 'geeks', 'geek',
//     'geezer']
// let n = arr.length

// Q4.Roman Number to Integer

// let roman = "DCCLXXXIX";
// let n = roman.length
// class Solution {
//     romanToDecimal(roman){ 
//       //code here
// let n = roman.length
// let symbols = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };
// if(n == 1) return symbols[roman[0]]
// let ans = 0
// for(let i = 0 ; i< n - 1; i++) {
//     if(symbols[roman[i]] >= symbols[roman[i+1]]) {
//         ans += symbols[roman[i]]
//     } else {
//         ans -= symbols[roman[i]]
//     }
// }

// if(roman.length > 1) {
//     ans += symbols[roman[n - 1]]
// }

// return ans;
//     }
// }

Q5. 