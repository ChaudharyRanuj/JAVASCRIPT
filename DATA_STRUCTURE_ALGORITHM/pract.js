"use strict";
// const arr = [1,0,-1,0,-2,2].sort((a,b) => a - b);
// const n = arr.length;
// const result = [];
// for (let i = 0; i < n; i++) {
//   for (let j = i + 1; j < n; j++) {
//     for (let k = j + 1; k < n; k++) {
//       for (let l = k + 1; l < n; l++) {
//         if (arr[i] + arr[j] + arr[k] + arr[l] === 8) {
//           insertUniquePairs([arr[i], arr[j], arr[k], arr[l]])
//         }
//       }
//     }
//   }
// }

// function insertUniquePairs(arr) {
//   let status = false;
//   for (let i = 0; i < result.length; i++) {
//     status = result[i].every((ele, index) => ele === arr[index]);
//     if (status === true) {
//       break;
//     }
//   }

//   if (status === false) {
//     result.push(arr);
//   }
// }

/*
TIME COMPLEXITY: O(n5)
SPACE COMPLEXITY: O(n)
*/
// const arr = [3,5,6,7]
// let target = 9
// for(let i = 0 ;i < arr.length ;i++) {
//   for(let j = i + 1 ;j < arr.length ;j++) {
//    const subSeq = arr.slice(i,j)
//   //  console.log(subSeq);
//   if(subSeq.length === 1 && subSeq[0] + subSeq[0] <= target) {
//   console.log(subSeq);
//   } else if(subSeq[0] + subSeq[subSeq.length - 1] <= target) {
//     console.log(subSeq);
//   }
//   }
// }


x = 20
var x