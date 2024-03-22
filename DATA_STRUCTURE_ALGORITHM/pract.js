// Given an array and an integer K, find the maximum for each and every contiguous subarray of size K.

// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let K = 3;
// let max = Number.NEGATIVE_INFINITY;
// for (let i = 0; i <= arr.length - K; i++) {
//   for (let j = i; j < i + K; j++) {
//    if (max < arr[j]) {
//       max = arr[j];
//     }
//   }
//   console.log(max);
// }
// written as O(N * K)
// Auxiliary Space: O(1)

// let windowItem = [];

// for (let i = 0; i < K; i++) {
//   windowItem.push(arr[i]);
// }

// let max = Math.max(...windowItem);
// let ans = []
// ans.push(max)
// for (let i = K; i < arr.length; i++) {
//   windowItem.shift();
//   windowItem.push(arr[i]);

//   max = Math.max(...windowItem);
//   ans.push(max)
// }

// let arr = [1, 12, -5, -6, 50, 3];
// let k = 4;

// let sum = 0;
// for (let i = 0; i < k; i++) {
//   sum += arr[i];
// }
// let avg = sum / k;
// let maxAvg = avg;
// for (let i = k; i < arr.length; i++) {
//   sum = sum - arr[i - k] + arr[i];
//   avg = sum / k;
//   if (avg > maxAvg) {
//     maxAvg = avg;
//   }
// }
// return  maxAvg.toFixed(5)

// time complexity:

// const s = "cbaebabacd";
// let t = "abc";

// let s = "abab",
//   t = "ab";
// let k = t.length;
// let window_str = "";
// let result = [];
// for (let i = 0; i < k; i++) {
//   window_str += s[i];
// }
// let isAnagram = findAnagram(window_str, t);
// for (let i = k; i < s.length; i++) {
//   if (i === k) {
//     if (isAnagram) result.push(i - k);
//   }
//   window_str = window_str.slice(1) + s[i];
//   isAnagram = findAnagram(window_str, t);
//   if (isAnagram) result.push(i - k + 1);
// }
// console.log(result);
// function findAnagram(s, t) {
//   if (s.length !== t.length) return false;
//   let map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       map.set(s[i], map.get(s[i]) + 1);
//     } else {
//       map.set(s[i], 1);
//     }
//   }

//   for (let i = 0; i < t.length; i++) {
//     if (map.has(t[i])) {
//       map.set(t[i], map.get(t[i]) - 1);
//     } else {
//       return false;
//     }
//   }
//   let keys = map.keys();
//   for (let key of keys) {
//     if (map.get(key) != 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log();

