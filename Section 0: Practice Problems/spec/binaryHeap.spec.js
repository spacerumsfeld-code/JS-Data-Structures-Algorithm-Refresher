const BinaryHeapMax = require('../7-binary-heaps.js');

let test = new BinaryHeapMax();
test.insert(1);
test.insert(2);
test.insert(3);
test.insert(4);

  describe('The Max Binary Heap should have the requisite methods, and they should properly situate values as they are inserted and extracted', () => {
    it('The binary heap should have an "insert" method', ()=> {
      expect(BinaryHeapMax.toString().includes('insert')).toBe(true);
    });

    it('The binary heap should have an "extractMax" method', () => {
      expect(BinaryHeapMax.toString().includes('extractMax')).toBe(true);
    });

    it('The insert method should properly situate values from front to back, in breadth-first order, consistent with binary heap distribution', () => {
      expect(test.values[0]).toEqual(4);
      expect(test.values[1]).toEqual(3);
      expect(test.values[2]).toEqual(2);
      expect(test.values[3]).toEqual(1);
    });

    it('The extractMax method should return the current highest value', () => {
      expect(test.extractMax()).toEqual(4);
    });

    it('The extractMax method should resituate the remaining values consistent with standard binary heap distribution', () => {
      test.insert(4);
      test.extractMax();
      expect(test.values[0]).toEqual(3);
      expect(test.values[1]).toEqual(1);
      expect(test.values[2]).toEqual(2);
    });
  });