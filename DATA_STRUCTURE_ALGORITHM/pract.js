const nums1 = [2, 4],
  nums2 = [5, 15, 10, 8, 6, 12, 9, 18];
let stack = [];
let map = new Map();
let res = "";
for (let i = nums2.length - 1; i >= 0; i--) {
  while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
    stack.pop();
  }
  res = stack.length === 0 ? -1 : stack[stack.length - 1];
  map.set(nums2[i], res);
  stack.push(nums2[i]);
}

console.log(map);
