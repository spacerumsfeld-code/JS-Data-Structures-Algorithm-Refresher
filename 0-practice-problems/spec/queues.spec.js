const queue = require('../4-queues.js');

let test;

const queueNodes = (test, n) => {
  for (let i = 1; i <= n; i++) {
    test.enqueue(i);
  }
};

beforeEach(() => {
  test = new queue.Queue();
});

describe('Our queue build should have all the basicmost methods and they should work as intended', () => {

  it('Should have a method called "enqueue"', () => {
    expect(queue.Queue.toString().includes('enqueue')).toBe(true);
  });

  it('Should have a method called "dequeue"', () => {
    expect(queue.Queue.toString().includes('dequeue')).toBe(true);
  });

  it('The queue method should add a node to the queue such that if there are no other nodes, the pushed node becomes both first and last', () => {
    queueNodes(test, 1);
    expect(test.first.val).toBe(1);
    expect(test.last.val).toBe(1);
  });

  it('The enqueue method should readjust the first and last of the queue when a second node is pushed', () => {
    queueNodes(test, 2);
    expect(test.first.val).toBe(1);
    expect(test.last.val).toBe(2);
  })

  it('The enqueue method should chain nodes together appropriately as more nodes are added', () => {
    queueNodes(test, 3);
    expect(test.first.next.val).toBe(2);
    expect(test.first.next.next.val).toBe(3);
  });

  it('The enqueue method should return the value of the first node in the queue', () => {
    queueNodes(test, 3);
    expect(test.dequeue()).toEqual(1);
  });

  it('The queue should keep track of how many nodes are in the queue', () => {
    queueNodes(test, 2);
    expect(test.size).toBe(2);
    test.dequeue();
    expect(test.size).toBe(1);
  })

  it('The dequeue method should reassign a new "first" node after being invoked', () => {
    queueNodes(test, 3);
    test.dequeue();
    expect(test.first.val).toBe(2);
  });

  it('The dequeue method should reassign the first and last of the queue to be null if there is only one node to dequeue and the queue will be empty afterward', () => {
    queueNodes(test, 1);
    test.dequeue();
    expect(test.first).toBe(null);
    expect(test.last).toBe(null);
  });

  it('The dequeue method should return undefined if it is invoked when the queue is empty', () => {
    expect(test.dequeue()).toBe(undefined);
  });

  it('BONUS: the queue should have a "length" method that returns the size of the queue', () => {
    queueNodes(test, 1);
    expect(test.length()).toBe(1);
  })

  it('BONUS: the stack should have a "peek" method that reveals the next value to be dequeued without actually dequeueing it', () => {
    queueNodes(test, 1);
    expect(test.peek()).toBe(1);
  })

  it('BONUS: the stack should have a "print" method that outputs an array of all the stack\'s values, from top to bottom', () => {
    queueNodes(test, 5);
    expect(test.print()).toStrictEqual([1,2,3,4,5]);
  })
});