// let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
// let arr2 = [2, 1, 4, 3, 9, 6];

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
let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19, 7, 19, 19, 17, 18].sort(
  (a, b) => a - b
);
let arr2 = [2, 1, 4, 3, 9, 6];
// create arr1 element count map
let map = new Map();
// create ordered map as arr is sorted
for (let ele of arr1) {
  if (map.has(ele)) {
    map.set(ele, map.get(ele) + 1);
  } else {
    map.set(ele, 1);
  }
}

let output = [];
for (let ele of arr2) {
  if (map.has(ele)) {
    let end = map.get(ele);
    for (let i = 0; i < end; i++) {
      output.push(ele);
      map.set(ele, map.get(ele) - 1);
    }
  }
}
// push remaining values
for (let pair of map) {
  let [key, value] = pair;
  if (value > 0) {
    for (let i = 0; i < value; i++) {
      output.push(key);
    }
  }
}
return output;
