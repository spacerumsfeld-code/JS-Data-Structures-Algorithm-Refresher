/* ----- Hash Table Complete Class and Methods ----- */

class HashTable {
  constructor (size=53) {
    this.storage = new Array(53);
  }

  hash (key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % this.storage.length;
      }
      return total;
  }

  set (key, val) {
    let index = this.hash(key);

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
    let index = this.hash(key);
    if (!this.storage[index]) { return undefined; }
    let bucket = this.storage[index].flat();
    if (bucket.indexOf(key) === -1) { return undefined; }
    return bucket[bucket.indexOf(key) + 1];
  }

  getKeys () {
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

  getValues () {
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
    let index = this.hash(key);

    for (let i = 0; i < this.storage[index].length; i++) {
      if (this.storage[index][i].includes(key)) {
        this.storage[index].splice(this.storage[index][i], 1);
      }
    }
    return true;
  }
};