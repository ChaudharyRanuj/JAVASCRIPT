// 1) Print first numbers from N to 1 numbers
// function PrintNo(n) {
// if(n < 1 ) return;
// console.log(n)
// PrintNo(n - 1)
// }

// PrintNo(10)

// // 2) Print first numbers from 1 to N numbers
// function PrintNo(start, end) {
//   if(start > end) {
//     return;
//   }
//   console.log(start)
//   PrintNo(start + 1, end)
//   }

//   PrintNo(1, 10)

// 3) Print number from 1 to N with back tracking;

// function PrintWithBackTrack(n) {
// if(n < 1) return
// PrintWithBackTrack(n - 1)
// console.log(n);
// }

// PrintWithBackTrack(5)

// 4) Reverse Array
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

// 5) Checking if string is Palindrom with recursion

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

// 6) Multiple recursion call problem
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

// 7) Subsequence with Recursion

const arr = [1, 2, 3, 4, 5, 6];
let SubSequence = [];
let indx = 0;
function printSubSequence(indx, SubSequence, arr) {
  if (indx >= arr.length) {
    console.log(SubSequence);
    return;
  }
  SubSequence.push(arr[indx]);

  printSubSequence(indx + 1, SubSequence, arr);

  SubSequence.pop();

  printSubSequence(indx + 1, SubSequence, arr);
}
printSubSequence(indx, SubSequence, arr)
