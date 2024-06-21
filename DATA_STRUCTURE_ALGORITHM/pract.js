const add = (a, b) => a + b;

const memoizedAdd = memoizedOne(add);

function memoizedOne(add) {
  let cache = [];

  return function (a, b) {
    let cacheResult = null;
   
    for (let i = 0; i < cache.length; i++) {
      let obj = cache[i];
      if (obj.a == a && obj.b == b) {
        cacheResult = obj.result;
        break;
      }
    }

    if (cacheResult != null) {
      console.log(`Sum returned by cache: ${cacheResult}`);
      return cacheResult;
    }

    let result = add(a, b);
    cache.push({ a, b, result });
    console.log(`Sum calculated by function: ${result}`);
    return result;
  };
}

console.log(memoizedAdd(1, 6));
console.log(memoizedAdd(3 ,6));
console.log(memoizedAdd(4, 6));
console.log(memoizedAdd(1, 6));
console.log(memoizedAdd(4, 6));
console.log(memoizedAdd(3 ,6));
