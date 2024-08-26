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
  constructor(size = 7) {
    this.dataSet = new Array(size);
  }

  _hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.dataSet.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hashCode(key);
    if (!this.dataSet[index]) {
      this.dataSet[index] = [];
    }
    this.dataSet[index].push([key, value]);
    return this.dataSet;
  }

  get(key) {
    let index = this._hashCode(key);
    if (this.dataSet[index]) {
      let array = this.dataSet[index];
      for (let i = 0; i < array.length; i++) {
        const [savedKey, value] = array[i];
        if (savedKey === key) return value;
      }
    }
  }

  key() {
    let keys = [];
    for (let i = 0; i < this.dataSet.length; i++) {
      if (this.dataSet[i]) {
        let array = this.dataSet[i];
        for (let i = 0; i < array.length; i++) {
          const [savedKey, value] = array[i];
          keys.push(savedKey);
        }
      }
    }
    return keys;
  }
  
  values() {
    let values = [];
    for (let i = 0; i < this.dataSet.length; i++) {
      if (this.dataSet[i]) {
        let array = this.dataSet[i];
        for (let i = 0; i < array.length; i++) {
          const [savedKey, value] = array[i];
          values.push(value);
        }
      }
    }
    return values;
  }
}

const disctionary = new HashTable();

console.log(disctionary.set("ranuj", 33));
console.log(disctionary.set("raneesh", 30));
console.log(disctionary.set("amisha", 32));
console.log(disctionary.set("rajat", 32));
console.log(disctionary.set("tanya", 32));
console.log(disctionary.set("manju", 32));
console.log(disctionary.get("raneesh"));
console.log(disctionary.key());
console.log(disctionary.values());
