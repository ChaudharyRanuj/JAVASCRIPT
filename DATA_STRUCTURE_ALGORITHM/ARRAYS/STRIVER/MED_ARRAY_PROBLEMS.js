// BUY AMD SELL STOCK

// brute force
const arr = [7, 1, 5, 3, 6, 4];

function maxProfit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = arr[j] - arr[i];
      max = Math.max(max, diff);
    }
  }
  if (max < 0) {
    return 0;
  } else {
    return max;
  }
}

// time: O(n2)
// space: O(1)

// better approach

var maxProfit = function (arr) {
  let stack = [arr[0]];
  let max = 0;
  const n = arr.length;
  for (let i = 1; i < arr.length; i++) {
    const lastLowestPrice = stack[stack.length - 1];

    if (lastLowestPrice < arr[i]) {
      const diff = arr[i] - lastLowestPrice;
      max = Math.max(max, diff);
    }

    if (lastLowestPrice > arr[i]) {
      stack.push(arr[i]);
    }
  }
  return max;
};

// time: O(n)
// space: O(n)

// optimised

var maxProfit = function (arr) {
  let min = Infinity;
  let max = 0;
  const n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (min < arr[i]) {
      const diff = arr[i] - min;
      max = Math.max(max, diff);
    }

    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return max;
};

// time: O(n)
// space: O(1)

// Rearrange Array Elements by Sign

// BRUTE FORCE
function rearrangeArray(arr) {
  const result = [];
  let posIndex = 0;
  let negIndex = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result[negIndex] = arr[i];
      negIndex += 2;
    } else {
      result[posIndex] = arr[i];
      posIndex += 2;
    }
  }
  console.log(result);
}

rearrangeArray([3, 1, -2, -5, 2, -4]);
// time: O(n)
// space: O(n)
