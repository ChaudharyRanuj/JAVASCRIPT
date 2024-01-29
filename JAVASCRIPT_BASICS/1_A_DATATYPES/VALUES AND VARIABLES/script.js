// let inputNo = [1,2,3,4,5,6,7,8,9]
// const oddValues = function findOddNo (arr) {
// const result = []

// function findOddRec (arrSliced) {
// console.log(arrSliced);
// if (arrSliced.length === 0) return;
// if (arrSliced[0]%2 !== 0) result.push(arrSliced[0])

// findOddRec(arrSliced.slice(1))

// }

// findOddRec(arr)
// return result

// }

// console.log(oddValues(inputNo));

// RECURSION SUM
// function sumAll(arr) {
//     if (arr.length === 0) return 0;
//     return arr[0] + sumAll(arr.slice(1));
//   }
//   console.log(sumAll([1,2,3,4]));

// function sumAll(arr) {
// const sortArr = arr.sort((a,b)=> b-a)
// let sum = 0;
// for (let i =  sortArr[0]; i >= sortArr[1]; i-- ) {
//    sum += i;
// }
// return sum;
// }
// sumAll([1, 4]);

// function diffArray(arr1, arr2) {
//     const newArr = [];

//   function OnlyInFirst(first, second)   {
//     for(let i = 0;  i <first.length; i++) {
//         if(second.indexOf(first[i]) === -1) newArr.push(first[i]);
//          }
//   }

//   OnlyInFirst(arr1, arr2)
//   OnlyInFirst(arr2, arr1)

//    return newArr;
//   }

//   console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// const char = "this is the string";

// const arr = [];

// for (let i = 0; i < char.length; i++) {
//   let counter = 0;
//   for (let j = 0; j < char.length; j++) {
//     if (char[i] === char[j]) {
//         counter++;
//     }
// }
// arr.push(counter);
// }

// console.log(Math.max(...arr));