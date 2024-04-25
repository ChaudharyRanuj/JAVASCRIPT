class HashTable {
  constructor(size = 26) {
    this.data = new Array(size);
    this.cache = {};
  }
  _hash(key) {
    let hash = (key.toLowerCase().charCodeAt(0) * 23) % this.data.length;
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
    return this.data[index];
  }

  get(key) {
    if (this.cache[key]) {
      console.log("cached value");
      return this.cache[key];
    }
    let index = this._hash(key);
    if (this.data[index]) {
      for (let i = 0; i < this.data[index].length; i++) {
        if (this.data[index][i][0] === key) {
          this.cache[key] = this.data[index][i][1];
          return this.data[index][i];
        }
      }
    }
  }

  delete(key) {
    let index = this._hash(key);
    if (this.data[index]) {
      for (let i = 0; i < this.data[index].length; i++) {
        if (this.data[index][i][0] === key) {
          return this.data[index].splice(i, 1);
        }
      }
    }
  }
}
let hashObj = new HashTable();
// console.log(
//   hashObj.set("Pakistan", { population: 1.4, nationality: "Pakistann" })
// );
// console.log(
//   hashObj.set("Indonesia", { population: 0.2, nationality: "Indonasian" })
// );
// console.log(hashObj.set("Iran", { population: 0.2, nationality: "Iranian" }));
// console.log(hashObj.set("Iraq", { population: 0.2, nationality: "Iranqian" }));
// console.log(hashObj.set("Zimabawe", { population: 0.2, nationality: "Zima" }));
// console.log(hashObj.set("Serian", { population: 0.2, nationality: "Sera" }));
// console.log(hashObj.set("Russia", { population: 0.2, nationality: "Russia" }));
// console.log(hashObj.set("Nepal", { population: 0.2, nationality: "Nepal" }));
// console.log(hashObj.get("Nepal"));
// console.log(hashObj.get("Nepal"));
// console.log(hashObj.get("Nepal"));
// console.log(hashObj.get("Nepal"));
// console.log(hashObj.get("Nepal"));
// console.log(hashObj.get("Nepal"));
// console.log(hashObj.get("Nepal"));
