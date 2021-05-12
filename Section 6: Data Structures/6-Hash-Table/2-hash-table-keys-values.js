//Keys and Values
//In this section, we will construct a method to output all keys in the hash table and a method to output all values in the hash table. These will be pretty simple methods to implement, using similar logic to what we have already made use of.

//For fun, I also added a 'remove' key method as well. It is a bit weird with the way we have initialized our array with a ton of empty values, as the index will still have its bucket (now empty) rather than the index being cleared of all values. This should not have any substantial implications for us, however.

class HashTable {
  constructor (size=53) {
    this.storage = new Array(53);
  }

  _hash (key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.storage.length;
    }
    return total;
  }

  set (key, val) {
    let index = this._hash(key);

    if (!this.storage[index]) { this.storage[index] = [[key, val]]; }
    else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i].includes(key)) {
          this.storage[index].splice(this.storage[index][i], 1, [key, val]);
          return;
        }
      }
      this.storage[index].push([key, val]);
    }
  }

  get (key) {
    let index = this._hash(key);
    if (!this.storage[index]) { return null; }
    let bucket = this.storage[index].flat();
    return bucket[bucket.indexof(key) + 1];
  }

  keys () {
    let keys = [];

    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (let j = 0; j < this.storage[i].length; j++) {
          keys.push(this.storage[i][j][0]);
        }
      }
    }
    return keys;
  }

  values () {
    let values = [];

    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (let j = 0; j < this.storage[i].length; j++) {
          if (!values.includes(this.storage[i][j][1]));
          values.push(this.storage[i][j][1]);
        }
      }
    }
    return values;
  }

  remove (key) {
    let index = this._hash(key);

    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i].includes(key)) {
        this.storage[index].splice(this.storage[index][i], 1);
      }
    }
    return true;
  }
}

let test = new HashTable();
test.set('longString1', 1);
test.set('longStroke2', 2);
test.set('longStroke3', 3);
// console.table(test);
// console.log(test.storage);
// console.log(test.keys());
// console.log(test.values());
console.log(test.remove('longString1'));
console.table(test.storage);
