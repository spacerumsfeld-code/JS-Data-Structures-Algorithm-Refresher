const sll = require('../5-SLL.js');

let test;

const nodePusher = (test, n) => {
  for (let i = 1; i <= n; i++) {
    test.push(i);
  }
};

beforeEach(() => {
  test = new sll.SLL();
});

describe('Our SLL build should have all the basicmost methods and they should work as intended', () => {

  describe('It should have all of the basic methods', () => {
    it('Should have a method called "push"', () => {
      expect(sll.SLL.toString().includes('push')).toBe(true);
    });

    it('Should have a method called "pop"', () => {
      expect(sll.SLL.toString().includes('pop')).toBe(true);
    });

    it('Should have a method called "shift"', () => {
      expect(sll.SLL.toString().includes('shift')).toBe(true);
    });

    it('Should have a method called "unshift"', () => {
      expect(sll.SLL.toString().includes('unshift')).toBe(true);
    });

    it('Should have a method called "get"', () => {
      expect(sll.SLL.toString().includes('get')).toBe(true);
    });

    it('Should have a method called "set"', () => {
      expect(sll.SLL.toString().includes('set')).toBe(true);
    });

    it('Should have a method called "insert"', () => {
      expect(sll.SLL.toString().includes('insert')).toBe(true);
    });

    it('Should have a method called "remove"', () => {
      expect(sll.SLL.toString().includes('remove')).toBe(true);
    });
  });

  describe('Its methods should work as intended', () => {
    it('The push method should add a node to the sll such that if there are no other nodes, the pushed node becomes both head and tail of the stack', () => {
      nodePusher(test, 1);
      expect(test.head.val).toBe(1);
      expect(test.tail.val).toBe(1);
    });

    it('The push method should readjust the head and tail of the sll when a second node is pushed', () => {
      nodePusher(test, 2);
      expect(test.head.val).toBe(1);
      expect(test.tail.val).toBe(2);
    });

    it('The push method should chain nodes together appropriately as more nodes are added', () => {
      nodePusher(test, 3);
      expect(test.head.next.val).toBe(2);
      expect(test.tail.val).toBe(3);
    });

    it('The sll should keep track of how many nodes it contains', () => {
      nodePusher(test, 3);
      expect(test.length).toBe(3);
      test.pop();
      expect(test.length).toBe(2);
    })

    it('The pop method should return the sll\'s tail value', () => {
      nodePusher(test, 3);
      expect(test.pop()).toEqual(3);
    });

    it('The pop method should reassign a new tail after it is invoked', () => {
      nodePusher(test, 3);
      test.pop();
      expect(test.tail.val).toBe(2);
    });

    it('The pop method should reassign the head and tail of the sll to be null if there is only one node to pop and the sll will be empty afterward', () => {
      nodePusher(test, 1);
      test.pop();
      expect(test.head).toBe(null);
      expect(test.tail).toBe(null);
    });

    it('The pop method should return undefined if it is invoked when the stack is empty', () => {
      expect(test.pop()).toBe(undefined);
    });

    it('The shift method should return the current head of the sll', () => {
      nodePusher(test, 1);
      expect(test.shift()).toBe(1);
    });

    it('The shift method should set the tail to null if the sole node in the sll is shifted', () => {
      nodePusher(test, 1);
      test.shift();
      expect(test.tail).toBe(null);
    });

    it('The shift method should assign the next node after the head to be the new head', () => {
      nodePusher(test, 2);
      test.shift();
      expect(test.head.val).toBe(2);
    });

    it('The unshift method should reassign the head of the sll to be the newly inserted node', () => {
      nodePusher(test, 1);
      test.unshift(2);
      expect(test.head.val).toBe(2);
    });

    it('The unshift method should connect the newly inserted node to the old head', () => {
      nodePusher(test, 1);
      test.unshift(0);
      expect(test.head.next.val).toBe(1);
    });

    it('The get method should return the node at a given position in the list', () => {
      nodePusher(test,3);
      expect(test.get(1).val).toBe(2);
    });

    it('The get method should return undefined if the input position is not valid for the list or the list is empty', () => {
      expect(test.get(1)).toBe(undefined);
      nodePusher(test, 1);
      expect(test.get(1)).toBe(undefined);
    });

    it('The set method should update a value at a given position in the list', () => {
      nodePusher(test, 3);
      test.set(1, 100);
      expect(test.get(1).val).toBe(100);
    });

    it('The insert method should insert a node with the provided value at the given position', () => {
      nodePusher(test, 3);
      test.insert(1,200);
      expect(test.get(1).val).toBe(200);
    });

    it('The insert method should properly connect the newly inserted node to its new neighbors', () => {
      nodePusher(test, 3);
      test.insert(1,200);
      expect(test.get(0).next.val).toBe(200);
      expect(test.get(1).next.val).toBe(2);
    });

    it('The remove method should remove a node at a given position in the list', () => {
      nodePusher(test, 3);
      test.remove(1);
      expect(test.head.next.val).toBe(3);
    });
  });
});