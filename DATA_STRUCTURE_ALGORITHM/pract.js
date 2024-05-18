let arr = [1, 2, 3, 4, 5];
let n = 4;
for (let i = 0; i < n; i++) {
  let last = arr.length - 1;
  let lastEle = arr[last];
  for (let i = last; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastEle;
}

console.log(arr);