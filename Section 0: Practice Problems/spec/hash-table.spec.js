const HashTable = require('../9-hashTable.js');

let test = new HashTable();
test.set('keyValue1', 0);
test.set('keyValue2', 0);
test.set('keyValue1', 1);
test.set('hello', 'goodbye');
test.set('steven', 'seagal');

//Your Hash Table, except with a hash function that leaves something to be desired so that we can test collisions.
class CollisionTest extends HashTable {
  constructor (size=53) {
    super();
    this.storage = new Array(53);
  }

  hash (key) {
    return 0;
  }
};

let collision = new CollisionTest();
collision.set('test1', 0);
collision.set('test2', 1);
console.log(collision.get('lol'));

  describe('The Hash Table should have all the requisite methods and they should function as intended', () => {

    describe('The Hash Table should have all of the requisite methods', () => {
      it('Should have a "set" method', () => {
        expect(HashTable.toString().includes('set')).toBe(true);
      });

      it('Should have a "get" method', () => {
        expect(HashTable.toString().includes('get')).toBe(true);
      });

      it('Should have a "getKeys" method', () => {
        expect(HashTable.toString().includes('getKeys')).toBe(true);
      });

      it('Should have a "getValues" method', () => {
        expect(HashTable.toString().includes('getValues')).toBe(true);
      });

      it('Should have a "remove" method', () => {
        expect(HashTable.toString().includes('remove')).toBe(true);
      });
    });

      describe('Its methods should work as intended', () => {
        it('The set method should insert k-v pairs into the table', () => {
          expect(test.storage.flat(2).includes('hello')).toBe(true);
          expect(test.storage.flat(2).includes('steven')).toBe(true);
        });

        it('The set method should override a value at a given key if the key is already in the table', () => {
          expect(test.storage.flat(2)[test.storage.flat(2).indexOf('keyValue1') + 1]).toBe(1);
      });

      it('The set method should be able to handle collisions with separate chaining', () => {
        expect(collision.storage[0].length).toEqual(2);
      });

      it('The get method should return a value at a given key', () => {
        expect(test.get('steven')).toEqual('seagal');
        expect(test.get('keyValue1')).toEqual(1);
      });

      it('The get method should return undefined if the key is not present in the table', () => {
        expect(test.get('9000')).toBe(undefined);
      });

      it('The getKeys method should return an array of keys in the table', () => {
        expect(Array.isArray(test.getKeys())).toBe(true);
        expect(test.getKeys().length === 4).toBe(true);
        expect(test.getKeys().includes('steven')).toBe(true);
      });

      it('The getValues method should return an array of values in the table', () => {
        expect(Array.isArray(test.getValues())).toBe(true);
        expect(test.getValues().length === 4).toBe(true);
        expect(test.getValues().includes('seagal')).toBe(true);
      });

      it('The remove method should delete a key value pair at a specified key', () => {
        test.remove('steven');
        expect(test.get('steven')).toBe(undefined);
      });
    });
  });