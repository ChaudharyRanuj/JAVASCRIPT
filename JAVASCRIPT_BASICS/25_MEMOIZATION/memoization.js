const add = (...args) => {
  let sum = args.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

const memoizedAdd = memoizedOne(add);

function memoizedOne(fn) {
  let cache = new Map();

  return function (...args) {
    let key = args.join("_");
    if (cache.has(key)) {
      console.log("Return cached value");
      return cache.get(key);
    }

    let result = fn(...args);

    if (!cache.has(key)) {
      cache.set(key, result);
    }
    console.log(`Sum calculated by function: ${result}`);
    return result;
  };
}

console.log(memoizedAdd(1, 6));
console.log(memoizedAdd(3, 6));
console.log(memoizedAdd(4, 6));
console.log(memoizedAdd(1, 6));
console.log(memoizedAdd(4, 6));
console.log(memoizedAdd(3, 6));
