const arr = [1, -1, 2, 3, 6, -1, -3, -2];

let map = new Map();
let negVal = [];
// make map with number count and get negative value in array
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  } else {
    negVal.push(arr[i]);
  }
}
// sort negative value
negVal.sort((a, b) => a - b);

let output = [];
// iterate from end
for (let i = negVal.length - 1; i >= 0; i--) {
  let posValue = negVal[i] * -1;
  if (map.get(posValue)) {
    output.push(negVal[i], posValue);
    map.set(posValue, map.get(posValue) - 1);
  }
}

