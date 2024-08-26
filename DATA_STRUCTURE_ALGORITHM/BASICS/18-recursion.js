//  Print first numbers from N to 1 numbers
// function PrintNo(n) {
// if(n < 1 ) return;
// console.log(n)
// PrintNo(n - 1)
// }

// PrintNo(10)

//  Print first numbers from 1 to N numbers
// function PrintNo(start, end) {
//   if(start > end) {
//     return;
//   }
//   console.log(start)
//   PrintNo(start + 1, end)
//   }

//   PrintNo(1, 10)

// Print number from 1 to N with back tracking;

// function PrintWithBackTrack(n) {
// if(n < 1) return
// PrintWithBackTrack(n - 1)
// console.log(n);
// }

// PrintWithBackTrack(5)

// 2) Reverse Array
// const arr = [1,2,3,4,5]

// with two pointer approach
// function reverseArr(right,arr,left) {
// if(right >= left) return;
// [arr[right], arr[left]] = [arr[left], arr[right]]
// reverseArr(right + 1,arr,left - 1)
// }
// reverseArr(0,arr,arr.length - 1)

// console.log(arr);

// // with single pointer approach
// const arr = [1,2,3,4,5]

// function reverseArr(i,arr,n) {
//   if(i >= n/2) return;
//   [arr[i], arr[n -  i - 1]] = [arr[n -  i - 1], arr[i]]
//   reverseArr(i + 1,arr,n)
//   }
//   reverseArr(0,arr,arr.length)

//   console.log(arr);

// 3) Checking if string is Palindrom with recursion

// 1st Approach from two pointer/

// const str = 'adaada'

// function findPalindrom(left, str, right) {
// if(str[left] !== str[right]) return false;
// if(left >= right) {
//   return true;
// }
// return findPalindrom(left + 1, str, right - 1)
// }
// const statusIsPalindrom = findPalindrom(0, str, str.length - 1)
// console.log(statusIsPalindrom);

// 4) Multiple recursion call problem
// const result = [];
// let first;
// let last;
// function fibonacciNoAt(n) {
//   if (n <= 1) {
//     return n;
//   }
//   console.log(n);
//   first = fibonacciNoAt(n - 1);
//   last = fibonacciNoAt(n - 2);
//   // result.push([first, last]);
//   return first + last;
// }
// fibonacciNoAt(5);
// console.log(fibonacciNoAt(5));
// console.log(result);

// 5) Subsequence with Recursion

// const arr = [1, 2, 3];
// let SubSequence = [];
// let indx = 0;
// let sum = 0;
// let count = [];
// function printSubSequence(indx, SubSequence, arr, count) {
//   if (indx >= arr.length) {
//     let sum = SubSequence.reduce((prev, curr) => prev + curr, 0);

//     if (sum === 3) {

//     }
//     return;
//   }
//   SubSequence.push(arr[indx]);

//   printSubSequence(indx + 1, SubSequence, arr, count);

//   SubSequence.pop();

//   printSubSequence(indx + 1, SubSequence, arr, count);
// }
// printSubSequence(indx, SubSequence, arr, count);

// 6) Number of Subsequence with Sum K

const arr = [1, 2, 3];
let SubSequence = [];
let indx = 0;
let sum = 0;
let target = 3;
function printSubSequence(indx, SubSequence, arr, sum, target) {
  if (indx >= arr.length) {
    if (sum <= target) return 1;
    return 0;
  }
  SubSequence.push(arr[indx]);
  sum += arr[indx];
  let l = printSubSequence(indx + 1, SubSequence, arr, sum, target);

  SubSequence.pop();
  sum -= arr[indx];

  let r = printSubSequence(indx + 1, SubSequence, arr, sum, target);

  return l + r;
}
console.log(printSubSequence(indx, SubSequence, arr, sum, target));
