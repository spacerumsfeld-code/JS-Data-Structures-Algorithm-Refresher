/* ----- Queues Practice ----- */
//Remember, queues follow the FIFO principle: first in, first out.

class NodeExample {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
};

class QueueExample {
  constructor () {
    this.first = null;
    this.last = null;
    this.size  = 0;
  }
}

//1. Using the above building blocks, build an "enqueue" method that adds a node to the top of the queue.

class Node {

}

class Queue {

}

//2. Build a "dequeue" method that removes a node from the bottom of the queue.

const queue = { Node, Queue };

module.exports = queue;