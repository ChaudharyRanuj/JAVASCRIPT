const arr = [1, 3, 4, 5, 6];

function linerSearch(arr, K) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((end + start) / 2);

  while (start <= end) {
    mid = Math.floor((end + start) / 2);
    if (K > arr[mid]) {
      start = mid + 1;
    } else if (K < arr[mid]) {
      end = mid - 1;
    } else {
      return true;
    }
  }
  return false;
}
