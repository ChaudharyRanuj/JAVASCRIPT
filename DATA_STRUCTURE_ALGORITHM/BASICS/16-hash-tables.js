// WHAT IS HASH TABLE?
/*

Hash tables are used to store key-value pairs. They are like arrays, but the keys are not ordered.

Unlike arrays, hash tables are fast for all of the following operations:
- finding values
- adding new values
- removing values

IMPLENTING HASH PART

- To implement a hash table we will be using an array.

- In order to look up values by key, we need a way to convert keys into valid array indices.

- A function that performs this task is called a hash function.

WHAT MAKES GOOD HASH? 
1. Fast (i.e contant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformaly.
3. Deterministic (same input yields same output)

HANDLING COLLISION


SEPERATING CHAING
With separate chaining, at each index in our array we store values using a more
sophisticated data structure (e.g an array or a linked list)

LINEAR PROBING
With linear probing, when we find a collision, we search through the array to
find the next empty slot.
Unlike with separate chaining, this allows us to store a single key-value at 
each index.

*/
// AVERAGE CASE
// BIG O OF HASH TABLES
// INSERT: O(1)
// DELETION: O(1)
// ACCESS:  ACCESSING KEY IS - O(1), ACCESSING VALUES IS - O(n)

// HASH TABLE CLASS

class HashTable {
  constructor(size = 53) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let index = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      index = (index + value * WEIRD_PRIME) % this.dataMap.length;
    }
    return index;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i];
        }
      }
    }
  }
  // CHECK DUPLICATE KEYS
  keys() {
    let keyArr = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          if (!keyArr.includes(this.dataMap[i][j][0])) {
            keyArr.push(this.dataMap[i][j][0]);
          }
        }
      }
    }
    return keyArr;
  }

  // CHECK DUPLICATE VALUES
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          if (!valuesArr.includes(this.dataMap[i][j][1])) {
            valuesArr.push(this.dataMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}
