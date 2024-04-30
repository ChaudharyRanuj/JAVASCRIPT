// // let nums = [2,2,2,3,3,3, 1,1,1].sort((a,b) => a - b)
// // let map = new Map();
// // for (let ele of nums) {
// //   if (!map.has(ele)) {
// //     map.set(ele, 1);
// //   } else {
// //     map.set(ele, map.get(ele) + 1);
// //   }
// // }
// // console.log(map);

// // let freqMap = new Map();

// // for (let pair of map) {
// //   const [key, value] = pair;
// //   if (freqMap.has(value)) {
// //     let newAr = [];
// //     for (let i = 0; i < value; i++) {
// //       newAr.push(key);
// //     }
// //     freqMap.set(value, [...newAr, ...freqMap.get(value)]);
// //   } else {
// //     let arr = [];
// //     for (let i = 0; i < value; i++) {
// //       arr.push(key);
// //     }
// //     freqMap.set(value, [...arr]);
// //   }
// // }

// // let arr = [];
// // for (let [key, value] of freqMap) {
// //   arr.push([key, value]);
// // }

// // arr.sort((a,b) => a[0] - b[0])

// // const ans = arr.reduce((prev,curr) => [...prev,...curr[1]], [])
// // console.log(ans);

// let nums = [2, 2, 2, 3, 1, 1, 1].sort((a, b) => a - b);
// let map = new Map();
// for (let ele of nums) {
//   if (!map.has(ele)) {
//     map.set(ele, 1);
//   } else {
//     map.set(ele, map.get(ele) + 1);
//   }
// }

// const arr = Array.from(map).sort((a, b) => a[1] - b[1]);

// const freqMap = new Map();

// for (let pair of arr) {
//   const [key, value] = pair;
//   if (freqMap.has(value)) {
//     let newAr = [];
//     for (let i = 0; i < value; i++) {
//       newAr.push(key);
//     }
//     freqMap.set(value, [...newAr, ...freqMap.get(value)]);
//   } else {
//     let arr = [];
//     for (let i = 0; i < value; i++) {
//       arr.push(key);
//     }
//     freqMap.set(value, [...arr]);
//   }
// }

// const output = [...freqMap].reduce((prev, curr) => [...prev, ...curr[1]], []);
// return output;
let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

let output = [];
let i = 0;
let j = 0;
while (i < nums1.length && j < nums2.length) {
  if (nums1[i] <= nums2[j]) {
    if (nums1[i] !== 0) {
      output.push(nums1[i]);
    }
    i++;
  }
  if (nums2[j] <= nums1[i]) {
    if (nums2[j] !== 0) {
      output.push(nums2[j]);
    }
    j++;
  }
}

while (i < nums1.length) {
  if (nums1[i] !== 0) {
    output.push(nums1[i]);
  }
  i++;
}

while (j < nums2.length) {
  if (nums2[j] !== 0) {
    output.push(nums2[j]);
  }
  j++;
}
console.log(output);