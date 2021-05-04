// Hash Table Get and set
//In this section, we will build a rudimentary hash table and implement a get method and a set method, handling collisions via separate chaining. The get method will be our way of outputting a value at a given key, and the set method will be our means of inserting a key-value pair into the hash table.

//Note: look at the set code closely; can you tell how it is handling hash collisions? What is this strategy called?

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
    return bucket[bucket.indexOf(key) + 1];
  }
}

let test = new HashTable();
test.set('tesla', 100);
console.table(test.storage);
test.set('tesla', 95);
console.table(test.storage);
console.log(test.get('tesla'));
