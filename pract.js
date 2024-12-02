const arr = [2, 2, 1, 1, 1, 2, 2];


const lb = 0;
const ub = mousePrice.length - 1;

function pivotSort(arr, lb, ub) {
   let pivot = arr[lb]
   let start = lb;
   let end = ub;

while (start < end) { 
    while (arr[start] <= pivot) {
       start++;
    }

    while ( arr[end] > pivot) {
        end--;
     }

if (start < end) {
[arr[start], arr[end]] = [arr[end], arr[start]]
}

}

if (start > end) {
    [arr[lb], arr[end]] = [arr[end], pivot]
}
return end;
}

function quickSort (arr, lb, ub) {
if (lb < ub) {
let loc = pivotSort(arr, lb, ub)

quickSort(arr, lb, loc - 1)
quickSort(arr, loc + 1, ub)

}
}
quickSort(mousePrice, lb, ub);