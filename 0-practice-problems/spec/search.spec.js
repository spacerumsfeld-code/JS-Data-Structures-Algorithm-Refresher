const search = require('./1-linear-vs-binary.js');
const stringSearch = require('./2-naive-string-search.js');

const array = [1,2,3,4,5];

  describe('Linear search function should find index of specified value or return -1 when value is not present in input array', () => {

    it('should return the index of the target value in the input array', () => {
      expect(search.linearSearch(array,1)).toBe(0);
    })

    it('should return -1 when the target value is not present in the input array', () => {
      expect(search.linearSearch(array,15)).toBe(-1);
    });

  });

  describe('Binary Search function should find index of specified value or return -1 when value is not present in input array', () => {

    it('should return the index of the target value in the input array', () => {
      expect(search.binarySearch(array,1)).toBe(0);
      expect(search.binarySearch(array,3)).toBe(2);
      expect(search.binarySearch(array,5)).toBe(4);
    });

    it('should return -1 when the target value is not present in the array', () => {
      expect(search.binarySearch(array,15)).toBe(-1);
    });

  });