// 1) PAIR EXIST OR NOT WITH GIVEN SUM OF 70 IN ARRAY
// Note: Array is sorted
const arr = [2, 3, 5, 8, 9, 10, 100];
const n = arr.length;
let sum = 100;
// Naive Brute force

function findPairExitWithSum(arr, n, sum) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
     
      if(arr[i] + arr[j] === sum) return true;

      if(arr[i] + arr[j] > sum) break;
     
    }
  }
  return false;
}
console.log(findPairExitWithSum(arr, n, sum));

// time complexity
// Time: O(nXn) 
// Space: O(1)

// OPTIMISED SOLUTION WITH TWO POINTER


