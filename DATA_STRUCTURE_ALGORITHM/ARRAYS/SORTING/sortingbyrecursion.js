// BUBBLE SORT
const arr = [1, 5, 6, 7, 4, 3, 2];

function recursionBubbleSort(i, arr) {
  if (i > arr.length) {
    return arr;
  }
  let j = 0;
  while (j < arr.length) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
    j++;
  }
  return recursionBubbleSort(i + 1, arr);
}

// INSERTION SORT
function insertionSort(i, arr) {
  if (i > arr.length - 1) {
    return arr;
  }

  let currVal = arr[i];
  let j = i - 1;
  let count = 0;
  while (arr[j] > currVal && j > -1 && count < 10) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = currVal;

  return insertionSort(i + 1, arr);
}

console.log(insertionSort(1, arr));
