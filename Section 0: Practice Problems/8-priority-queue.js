/* ----- Priority Queue Practice ----- */

class NodeExample {
  constructor (val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueueExample {
  constructor () {
    this.values = [];
  }
}

//1. Using the above building blocks, build a priority queue for a hospital to treat patients. This queue should have a "queue" method that instantiates a new node with a given value and priority, and situates the rest of the nodes based on priority.

class Patient {
  constructor (val, priority) {
    this.val = val;
    this.priority = priority;
  }
};

class HospitalQueue {
  constructor () {
    this.values = [];
  }
}

//Note: I don't mean to apply too much pressure, but the hospital will be using this system to treat patients, so it is fair to say that your code will either save or destroy lives!

//2. Build a "dequeue" method that returns the current highest priority node out of the queue and re-situates the rest of the nodes based on priority.


module.exports = HospitalQueue;