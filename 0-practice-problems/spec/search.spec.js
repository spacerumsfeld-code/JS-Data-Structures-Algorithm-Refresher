const search = require('../1-search.js');

const arr = [1,2,3,4,5];

  describe('Linear search function should find the index of a target value or return -1 when value is not present in input array', () => {

    it('Should return the index of a target value in the input array', () => {
      expect(search.linearSearch(arr,1)).toBe(0);
      expect(search.linearSearch(arr,3)).toBe(2);
      expect(search.linearSearch(arr,5)).toBe(4);
    })

    it('Should return -1 when the target value is not present in the input array', () => {
      expect(search.linearSearch(arr,15)).toBe(-1);
    });

  });

  describe('Binary Search function should find index of specified value or return -1 when value is not present in input array', () => {

    it('Should return the index of the target value in the input array', () => {
      expect(search.binarySearch(arr,1)).toBe(0);
      expect(search.binarySearch(arr,3)).toBe(2);
      expect(search.binarySearch(arr,5)).toBe(4);
    });

    it('Should return -1 when the target value is not present in the array', () => {
      expect(search.binarySearch(arr,15)).toBe(-1);
    });

    it('(BONUS) Should use recursion to achieve the desired output', () => {
      expect(search.binarySearch.toString().includes('binarySearch')).toBe(true);
    })

  });