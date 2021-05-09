/* ----- Complete Singly-Linked List Class and Methods ----- */

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}
class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.length) {
      return undefined;
    }

    let oldTail = this.tail;
    let newTail = this.get(this.length - 2);
    this.tail = newTail;
    this.tail.next = null;
    return oldTail;
  }

  shift() {
    if (!this.length) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (!this.length) {
      this.tail = null;
    }
    return temp;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++
    return this;
  }

  get(i) {
    if (i < 0 || i >= this.length) {
      return null;
    }

    let current = this.head;
    let count = 0;

    while (count !== i) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(i, val) {
    let nodeToSet = this.get(i);
    if (nodeToSet) {
      nodeToSet.val = val;
      return true;
    }
    return false;
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
