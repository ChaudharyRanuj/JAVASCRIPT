// const nums1 = [2, 4],
//   nums2 = [5, 15, 10, 8, 6, 12, 9, 18];
// let stack = [];
// let map = new Map();
// let res = "";
// for (let i = nums2.length - 1; i >= 0; i--) {
//   while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
//     stack.pop();
//   }
//   res = stack.length === 0 ? -1 : stack[stack.length - 1];
//   map.set(nums2[i], res);
//   stack.push(nums2[i]);
// }

// console.log(map);

let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
let stack = [];
for (let i = 0; i < tokens.length; i++) {
  let res = "";
  if (!isNaN(Number(tokens[i]))) {
    let number = Number(tokens[i]);
    stack.push(number);
  } else {
    let op2 = stack.pop();
    let op1 = stack.pop();

    if (tokens[i] === "*") {
      res = op1 * op2;
    } else if (tokens[i] === "+") {
      res = op1 + op2;
    } else if (tokens[i] === "/") {
      res = op1 / Math.abs(op2);
      } else if (tokens[i] === "-") {
      res = op1 - op2;
    }

    stack.push(res);
  }
}
let ans = Math.trunc(stack[stack.length - 1]);
console.log(ans);