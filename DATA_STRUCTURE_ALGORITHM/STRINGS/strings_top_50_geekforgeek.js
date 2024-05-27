// Q1 Reverse words in a given string

// let string = "geeks quiz practice code";
// let str = string.split(" ");
// str.reverse();
// return str.join(" ");

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

// Q5. Integer to Roman Number

// Q6. Closest Strings

// let words = ["the", "quick", "brown", "fox",
// "quick"];
// let n = words.length;

// let word1 =  "the";
// let word2 = "fox";

// let diff1 = -1
// let diff2 = -1
// let ans = Number.MAX_VALUE
// let i = 0 ;

// while(i < n) {
//  if(words[i] === word1) {
//      diff1 = i;
//  }

//  if(words[i] === word2) {
//      diff2 = i;
//  }

//  if(diff1 != -1 && diff2 != -1) {
//  ans = Math.min(ans, Math.abs(diff1 - diff2))
//  }

// i++
// }
// return ans;

// Q7. Encript the string

// function convertToHex(num) {

//     let temp = "";
//     while (num != 0) {
//         let rem = num % 16;
//         let c = 0;
//         if (rem < 10) {
//             c = rem + 48;
//         }
//         else {
//             c = rem + 87;
//         }
//         temp += String.fromCharCode(c);
//         num = Math.floor(num / 16);
//     }

//     return temp;
// }

// // Function to encrypt the string
// function encryptString(S, N) {

//     let ans = "";

//     // Iterate the characters
//     // of the string
//     for (let i = 0; i < N; i++) {

//         let ch = S[i];
//         let count = 0;
//         let hex;

//         // Iterate until S[i] is equal to ch
//         while (i < N && S[i] == ch) {

//             // Update count and i
//             count++;
//             i++;
//         }

//         // Decrement i by 1
//         i--;

//         // Convert count to hexadecimal
//         // representation
//         hex = convertToHex(count);

//         // Append the character
//         ans += ch;

//         // Append the characters frequency
//         // in hexadecimal representation
//         ans += hex;
//     }

//     // Reverse the obtained answer
//     ans = ans.split('').reverse().join("");

//     // Return required answer
//     return ans;
// }

// Q8. Equal point in a string of brackets

// BRUTE FORCE AND OPTIMISED SOLUTION
// class Solution {
//     //Your code goes here
//     findIndex(str) {
//       let i = 0;
// let closeBrackets = 0;
// while (i < str.length) {
//   if (str[i] === ")") {
//     closeBrackets++;
//   }
//   i++;
// }

// let j = 0;
// let openBranckets = 0;
// while (j < str.length) {
//   if (str[j] === "(") {
//     openBranckets++;
//   }
//   if (str[j] === ")") {
//     closeBrackets--;
//   }
//   if (openBranckets == closeBrackets) {
//     return j+1;
//   }
//   j++;
// }

// return 0;
//     }
// }

// let str1 = 'aba'
// let str2 = 'xyz'

// if(str1.length != str2.length) return false;
// // code here

// let counter1 = 1;
// let counter2 = 1
// let n = str1.length;

// let set1 = new Set(str1.split(''))
// let set2 = new Set(str2.split(''))

// if(set1.size !== set2.size) return false;

// let i = 0
// let arr1CountFreq = []
// let arr2CountFreq = []
// let j = 0
// while( i < n && j < n) {
// arr1CountFreq.push(counter1)
//   if(str1[i] === str1[ i + 1]) {
//       counter1++
//   } else {
//       counter1 = 1
//   }

// arr2CountFreq.push(counter2)
//   if(str2[j] == str2[j + 1]) {
//           counter2++
//   } else {
//         counter2 = 1
//   }
// j++
// i++
// }





