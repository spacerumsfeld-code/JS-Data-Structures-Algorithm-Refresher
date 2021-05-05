const bubble = require('./2-bubble-sort.js');
const insertion = require('./3-insertion-sort.js');
const selection = require('./4-selection-sort.js');
const merge = require('./5-merge-sort.js');
const quick = require('./6-quick-sort.js');

let testArray = [];

for (let i = 0; i === 100; i++) {
  testArray.push(Math.floor(Math.random() * 100));
}

console.log(testArray);

describe('Our sorting functions should all properly sort an array of arbitrary length', () => {

  describe('Bubble Sort should properly sort an input array', () => {
    it('should properly sort an input array of arbitrary length', () => {
      expect(bubble.bubbleSort(testArray)).toEqual(testArray.sort());
    })
  });

  describe('Insertion Sort should properly sort an input array', () => {
    it('should properly sort an input array of arbitrary length', () => {
      expect(insertion.insertionSort(testArray)).toEqual(testArray.sort());
    })
  });

  describe('Selection Sort should properly sort an input array', () => {
    it('should properly sort an input array of arbitrary length', () => {
      expect(selection.selectionSort(testArray)).toEqual(testArray.sort());
    })
  });

  describe('Merge Sort should properly sort an input array', () => {
    it('should properly sort an input array of arbitrary length', () => {
      expect(merge.mergeSort(testArray)).toEqual(testArray.sort());
    })
  });

  describe('Quick Sort should properly sort an input array', () => {
    it('should properly sort an input array of arbitrary length', () => {
      expect(quick.quick_sort(testArray)).toEqual(testArray.sort());
    })
  });

});
