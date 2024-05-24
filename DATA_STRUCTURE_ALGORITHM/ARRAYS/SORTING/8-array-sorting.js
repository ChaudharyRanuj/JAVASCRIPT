// const bubbleBtn = document.getElementById("bubble-btn");
// const selectionBtn = document.getElementById("selection-btn");
// const insertionBtn = document.getElementById("insertion-btn");

// const arr = [];
// for (i = 100; i > 0; i--) {
//   arr.push(i);
// }
// // BUBBLE SORT
// bubbleBtn.addEventListener("click", function (e) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         [arr[j], arr[i]] = [arr[i], arr[j]];
//       }
//     }
//   }
//   console.log(arr);
// });

// SELECTION SORT

// selectionBtn.addEventListener("click", function (e) {
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[lowest];
//     arr[lowest] = temp;
//   }
//   console.log(arr);
// });

// INSERTION SORT
// insertionBtn.addEventListener("click", function (e) {
//   for (let i = 1; i < arr.length; i++) {
//     let temp = arr[i];
//     let j = i - 1;
//     while (arr[j] > temp && j > -1) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = temp;
//   }
//   console.log(arr);
// });

// BUBBLE SORT

// QUICK SORT

//1. BUBBLE SORT

// const arr = [45,12,5,4,78,98,65,45,78,12,54,87]

// function sortArray(no) {
// const nums = no.slice()
// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] > nums[j]) [nums[i], nums[j] ] = [nums[j],  nums[i]]

//     }

//     }r
//     console.log(nums);
// }

// sortArray(arr);

//2. SELECTION SORT

// const arr = [5,5,1,3,4]

// function sortArray(no) {
// const nums = no.slice()
// for (let i = 0; i < nums.length; i++) {
//     let lowIndx = i;
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[j] < nums[lowIndx] ) {
//             lowIndx = j;
//         }
//     }
//     const temp = nums[i];
//     nums[i] = nums[lowIndx];
//     nums[lowIndx] = temp;
//     console.log(nums);
// }

// }

// sortArray(arr);

//----------3. INSERTION SORTING  (** MOSTLY USED FOR nearly sorted list **) --------------
// function insertionSort(arr) {
//     for (let i = 1 ; i < arr.length; i++) {
//     let currentVal = arr[i]
//     let j = i - 1;
//     while (j  > -1 && arr[j] > arr[j]) {
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4])

//4. QUICK SORTING (using partion method approach)

// * Divide and conquer technique is used
// * Pivot element can be first, last, median element of an array.
// * Work of principle of deviding the array into sub arrays.
// * Partition 1 (left side)  PivotElement    Element Partition 2 (right side)
//    Value < pivotEl                                  Value > pivotEl

// const mousePrice =[1,4,3,2,5,10,20,50];
// const lb = 0;
// const ub = mousePrice.length - 1;

// function pivotSort(arr, lb, ub) {
//    let pivot = arr[lb]
//    let start = lb;
//    let end = ub;

// while (start < end) { 
//     while (arr[start] <= pivot) {
//        start++;
//     }

//     while ( arr[end] > pivot) {
//         end--;
//      }

// if (start < end) {
// [arr[start], arr[end]] = [arr[end], arr[start]]
// }

// }

// if (start > end) {
//     [arr[lb], arr[end]] = [arr[end], pivot]
// }
// return end;
// }

// function quickSort (arr, lb, ub) {
// if (lb < ub) {
// let loc = pivotSort(arr, lb, ub)

// quickSort(arr, lb, loc - 1)
// quickSort(arr, loc + 1, ub)

// }
// }
// quickSort(mousePrice, lb, ub);

// ----- 5. MERGE SORT (works on divide and conquer technique)
// Divide the array to mid position
// Keep on deviding the sublist till single element left
// Than will merge the element in ascending order

// const arr = [4, 5, 8, 6, 9, 7, 54, 9];

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let middle = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, middle));
//   let right = mergeSort(arr.slice(middle));
//   return merge(left, right);
// }

// function merge(left, right) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(left[j]);
//       j++;
//     }
//   }

//   while (j < right.length) {
//     result.push(right[j]);
//     j++;
//   }

//   while (i < left.length) {
//     result.push(left[i]);
//     i++;
//   }
//   return result;
// }
// const sortedArray = mergeSort([4, 5, 8, 6, 9, 7, 54, 9]);

