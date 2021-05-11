/* ----- Hash Table Practice ----- */

class HashTableExample {
  constructor () {
    this.storage = [];
  }
}

//1. Using the above building block, construct a hash table class with a "set" method that takes an input key value pair and either overwrites a key value if already present, or inserts the key value pair while avoiding collisions.

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
};

//2. Construct a "set" method that changes the value of a provided key.

//3. Construct a "getKeys" method that returns an array of all the keys in the hash table.

//4. Construct a "getValues" method that returns an array of all the values in the hash table.

//5. Construct a "remove" method that removes a specified key (and consequently its value) from the has table.

module.exports = HashTable;