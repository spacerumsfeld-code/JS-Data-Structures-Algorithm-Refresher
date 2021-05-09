/* ----- Singly-Linked List Practice ----- */

class NodeExample {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
};

class SLLExample {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
};

//1. Using the above building blocks, build a "push" method that adds a node to the end of the list.

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
};

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push (val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop () {
    if (!this.length) { return undefined; }

    if (this.length === 1) {
      let retVal = this.head.val;
      this.head = null;
      this.tail = null;
      return retVal;
    }

    let oldTail = this.tail;
    let newTail = this.get(this.length - 2);
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return oldTail.val;
  }

  shift () {
    if (!this.length) { return undefined; }

    let temp = this.head.val;
    this.head = this.head.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return temp;
  }

  unshift (val) {
    let newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get (i) {
    if (!this.length) { return undefined; }

    if (i >= this.length || i < 0) { return undefined; }

    let current = this.head;
    let position = 0;

    while (current) {
      if (position === i) {
        return current;
      }
      position++;
      current = current.next;
    }
  }

  set (i, val) {
    if (!this.length || i < 0 || i >= this.length) { return false; }

    let replace = this.get(i);
    replace.val = val;
    return true;
  }

  insert(i, val) {
    if (i < 0 || i >= this.length) { return false; }
    if (i === 0) { return !!this.unshift(val); }
    if (i === this.length - 1) { return !!this.push(val); }

    let newNode = new Node(val);
    let before = this.get(i - 1);
    let after = before.next;

    before.next = newNode;
    newNode.next = after;
    this.length += 1;
    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) {
      return null;
    }
    if (i === 0) { return !!this.shift(); }
    if (i === this.length - 1) { return !!this.pop(); }

    let before = this.get(i - 1);
    let nodeToRemove = before.next;
    before.next = nodeToRemove.next;
    this.length--;
    return nodeToRemove;
  }






















};

const sll = { Node, SLL };

module.exports = sll;
