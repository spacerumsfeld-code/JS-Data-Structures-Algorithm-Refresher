/* ----- Complete Queue Class and Methods ----- */

//Linked List Implementation (what the tests assume)
class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
};

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    //optional return
    return this.size;
  }

  dequeue() {
    if (!this.size) { return undefined; }
    if (this.size === 1) {
      this.last = null;
    }
    let nodeToRemove = this.first;
    this.first = this.first.next;
    this.size--;
    return nodeToRemove.val;
  }

  //optional methods
  length() {
    return this.size;
  }

  peek() {
    return this.first.val;
  }

  print() {
    let result = [];
    let current = this.first;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
};

//Simple Array Implementation
let q = [];
q.push(1);
q.push(2);
q.shift();
q.shift();

//Non-LL Variant /w storage object instead of nodes
class Q2 {
  constructor() {
    this.size = 0;
    this.storage = {};
    this.index = 0;
  }

  queue(val) {
    this.storage[this.index] = val;
    this.size++;
    this.index++;
  }

  dequeue() {
    if (!this.size) { return null; }
    let valToRemove = this.storage[Object.keys(this.storage)[0]];
    delete this.storage[Object.keys(this.storage)[0]];
    this.size--;
    this.index--;
    return valToRemove;
  }
 };