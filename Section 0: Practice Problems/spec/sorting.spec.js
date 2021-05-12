const sort = require('../2-sorting.js');

let t1 = [];
let t2;

beforeEach(() => {
  for (let i = 0; i <= 100; i++) {
    t1.push(Math.floor(Math.random() * 50));
  }
  t2 = t1.slice();
});

afterEach(() => {
  t1.length = 0;
});

describe('Our sorting functions should all properly sort an array of arbitrary length and have their average time complexities correctly identified', () => {

  describe('Bubble Sort should properly sort an input array', () => {
    it('Should properly sort an input array of arbitrary length', () => {
      expect(sort.bubbleSort(t1)).toEqual(t2.sort((a,b) => a - b));
    });

    it('Should have its time complexity correctly identified', () => {
      expect(sort.bubbleSortComp).toEqual('quadratic');
    })
  });

  describe('Insertion Sort should properly sort an input array', () => {
    it('Should properly sort an input array of arbitrary length', () => {
      expect(sort.insertionSort(t1)).toEqual(t2.sort((a,b) => a - b));
    })

    it('Should have its time complexity correctly identified', () => {
      expect(sort.insertionSortComp).toEqual('quadratic');
    })
  });

  describe('Selection Sort should properly sort an input array', () => {
    it('Should properly sort an input array of arbitrary length', () => {
      expect(sort.selectionSort(t1)).toEqual(t2.sort((a,b) => a - b));
    })

    it('Should have its time complexity correctly identified', () => {
      expect(sort.selectionSortComp).toEqual('quadratic');
    })
  });

  describe('Merge Sort should properly sort an input array', () => {
    it('Should properly sort an input array of arbitrary length', () => {
      expect(sort.mergeSort(t1)).toEqual(t2.sort((a,b) => a - b));
    });

    it('Should have its time complexity correctly identified', () => {
      expect(sort.mergeSortComp).toEqual('log-linear');
    })
  });

  describe('Quick Sort should properly sort an input array', () => {
    it('Should properly sort an input array of arbitrary length', () => {
      expect(sort.quickSort(t2)).toEqual(t1.sort((a,b) => a - b));
    });

    it('Should have its time complexity correctly identified', () => {
      expect(sort.quickSortComp).toEqual('log-linear');
    })
  });

});
