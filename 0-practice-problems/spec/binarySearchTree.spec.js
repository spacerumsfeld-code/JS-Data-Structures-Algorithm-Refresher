const BST = require('../6-BST.js');

let test = new BST(10);
test.insert(15);
test.insert(5);
test.insert(4);
test.insert(6);

  describe('The BST should have all of the requisite methods and they should work as intended', () => {
    describe('The BST should have all of the requisite methods', () => {

      it('Should have an "insert" method', () => {
        expect(BST.toString().includes('insert')).toBe(true);
      });

      it('Should have a "find" method', () => {
        expect(BST.toString().includes('find')).toBe(true);
      });

      it('Should have a "dfsPreOrder" method', () => {
        expect(BST.toString().includes('dfsPreOrder')).toBe(true);
      });

      it('Should have a "dfsInOrder" method', () => {
        expect(BST.toString().includes('dfsInOrder')).toBe(true);
      });

      it('Should have a "dfsPostOrder" method', () => {
        expect(BST.toString().includes('dfsPostOrder')).toBe(true);
      });

      it('Should have a "bfs" method', () => {
        expect(BST.toString().includes('bfs')).toBe(true);
      });
    });

    describe('All methods should work as intended', () => {
      it('The insert method should insert values consistent with a BST', () => {
        expect(test.left.val).toEqual(5);
        expect(test.left.left.val).toEqual(4);
        expect(test.left.right.val).toEqual(6);
        expect(test.right.val).toEqual(15);
      })
    });

    it('The find method should return the node containing the provided value', () => {
      expect(test.find(10).left.val).toEqual(5);
      expect(test.find(5).left.val).toBe(4);
      expect(test.find(15).left).toBe(null);
    });

    it('The dfsPreOrder method should output an array of node values in the proper order', () => {
      expect(test.dfsPreOrder()).toStrictEqual([10,5,4,6,15]);
    });

    it('The dfsInOrder method should output an array of node values in the proper order', () => {
      expect(test.dfsInOrder()).toStrictEqual([4,5,6,10,15]);
    });

    it('The dfsPostOrder method should output an array of node values in the proper order', () => {
      expect(test.dfsPostOrder()).toStrictEqual([4,6,5,15,10]);
    });

    it('The bfs method should return an array of node values in the proper order', () => {
      expect(test.bfs()).toStrictEqual([10,5,15,4,6]);
    });
  });