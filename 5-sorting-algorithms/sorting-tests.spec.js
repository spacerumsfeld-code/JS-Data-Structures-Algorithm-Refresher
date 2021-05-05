const bubble = require('./2-bubble-sort.js');
const insertion = require('./3-insertion-sort.js');
const selection = require('./4-selection-sort.js');
const merge = require('./5-merge-sort.js');
const quick = require('./6-quick-sort.js');

let t1 = [];
let t2;

beforeEach(() => {
  for (let i = 0; i <= 10; i++) {
    t1.push(Math.floor(Math.random() * 10));
  }
  t2 = t1.slice();
});

afterEach(() => {
  t1.length = 0;
})

describe('Our sorting functions should all properly sort an array of arbitrary length', () => {

  describe('Bubble Sort should properly sort an input array', () => {
    it('should properly sort an input array of arbitrary length', () => {
      expect(bubble.bubbleSort(t1)).toEqual(t2.sort((a,b) => a - b));
    });
  });

  describe('Insertion Sort should properly sort an input array', () => {
    it('should properly sort an input array of arbitrary length', () => {
      expect(insertion.insertionSort(t1)).toEqual(t2.sort((a,b) => a - b));
    })
  });

  describe('Selection Sort should properly sort an input array', () => {
    it('should properly sort an input array of arbitrary length', () => {
      expect(selection.selectionSort(t1)).toEqual(t2.sort((a,b) => a - b));
    })
  });

  describe('Merge Sort should properly sort an input array', () => {
    it('should properly sort an input array of arbitrary length', () => {
      expect(merge.mergeSort(t1)).toEqual(t2.sort((a,b) => a - b));
    });
  });

  describe('Quick Sort should properly sort an input array', () => {
    //this function is sorting properly in Chrome snippets and even in console logs in this very file, so I'm not quite sure as to why it fails this test
    it('should properly sort an input array of arbitrary length', () => {
      expect(quick.quick_sort_dups(t2)).toEqual(t1.sort((a,b) => a - b));
    });
  });

});
