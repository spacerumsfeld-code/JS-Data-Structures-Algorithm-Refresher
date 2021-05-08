const stack = require('../3-stacks.js');

let test;

const nodePusher = (test, n) => {
  for (let i = 1; i <= n; i++) {
    test.push(i);
  }
};

beforeEach(() => {
  test = new stack.Stack();
});

  describe('Our stack data structure should have all the basicmost methods and they should work as intended', () => {

    it('Should have a method called "push"', () => {
      expect(stack.Stack.toString().includes('push')).toBe(true);
    });

    it('Should have a method called "pop"', () => {
      expect(stack.Stack.toString().includes('pop')).toBe(true);
    });

    it('The push method should add a node to the stack such that if there are no other nodes, the pushed node becomes both top and bottom of the stack', () => {
      nodePusher(test, 1);
      expect(test.top.val).toBe(1);
      expect(test.bottom.val).toBe(1);
    });

    it('The push method should readjust the top and bottom of the stack when a second node is pushed', () => {
      nodePusher(test, 2);
      expect(test.top.val).toBe(2);
      expect(test.bottom.val).toBe(1);
    })

    it('The push method should chain nodes together appropriately as more nodes are added', () => {
      nodePusher(test, 3);
      expect(test.top.next.val).toBe(2);
      expect(test.top.next.next.val).toBe(1);
    });

    it('The pop method should return the current top of the stack\'s value', () => {
      nodePusher(test, 3);
      expect(test.pop()).toEqual(3);
    });

    it('The pop method should reassign a new top of the stack after it is invoked', () => {
      nodePusher(test, 3);
      test.pop();
      expect(test.top.val).toBe(2);
    });

    it('The pop method should reassign the top and bottom of the stack to be null if there is only one node to pop and the stack will be empty afterward', () => {
      nodePusher(test, 1);
      test.pop();
      expect(test.top).toBe(null);
      expect(test.bottom).toBe(null);
    });

    it('The pop method should return undefined if it is invoked when the stack is empty', () => {
      expect(test.pop()).toBe(undefined);
    });

    it('BONUS: the stack should have a "length" method that returns the size of the stack', () => {
      nodePusher(test, 1);
      expect(test.length()).toBe(1);
    })

    it('BONUS: the stack should have a "peek" method that reveals the top of the stack\'s value without popping it', () => {
      nodePusher(test, 1);
      expect(test.peek()).toBe(1);
    })

    it('BONUS: the stack should have a "print" method that outputs an array of all the stack\'s values, from top to bottom', () => {
      nodePusher(test, 5);
      expect(test.print()).toStrictEqual([5,4,3,2,1,]);
    })

  });