const votesCount = [
  "john",
  "johnny",
  "jackie",
  "johnny",
  "john",
  "jackie",
  "jamie",
  "jamie",
  "john",
  "johnny",
  "jamie",
  "johnny",
  "john",
];
let map = new Map();
let winner = [];
let max = -1;
for (let i = 0; i < votesCount.length; i++) {
  if (!map.has(votesCount[i])) {
    map.set(votesCount[i], 1);
  } else {
    map.set(votesCount[i], map.get(votesCount[i]) + 1);
  }
}

for (let [key, value] of map) {
  if (max < value) {
    max = Math.max(max, value);
    winner = [key, value];
  }
  if (max === value) {
    if (winner[0] > key) {
      winner = [key, value];
    }
  }
}

console.log(winner);
