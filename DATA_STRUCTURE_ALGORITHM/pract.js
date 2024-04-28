const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

strs.sort();
let map = new Map();

for (let ele of strs) {
  let sortedWord = ele.split("").sort().join("");

  if (!map.has(sortedWord)) {
    map.set(sortedWord, [ele]);
  } else {
    map.set(sortedWord, [...map.get(sortedWord), ele]);
  }
}

let output = [];
for (let [key, value] of map) {
  output.push(value);
}

return output;
