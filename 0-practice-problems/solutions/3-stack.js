/* ----- Complete Stack Class and Methods ----- */

//Linked List Implementation (what the tests assume)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

class Stack {
  //ES2019 class syntax does not require a constructor if you do not need to be responsive to input values when instantiating a class.
  top = null;
  bottom = null;
  size = 0;

  push(val) {
    let newNode = new Node(val);

    if (!this.size) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop;
    }
    this.size++;
    //optional return
    return this.size;
  }

  pop() {
    if (!this.size) { return null; }
    if (this.size === 1) { this.bottom = null; }
    let oldTop = this.top;
    this.top = this.top.next;
    this.size--;
    return oldTop.val;
  }

  //optional methods
  length () {
    return this.size;
  }

  includes (tgt) {
    if (!this.size) { return false; }
    let current = this.top;
    while (current) {
      if (current.val === tgt) { return true; }
      current = current.next;
    }
    return false;
  }

  peek () {
    return this.top.val;
  }

  print () {
    let result = [];
    let current = this.top;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
};

//Simple Array Implementation
let stack = [];
stackArr.push(1);
stackArr.push(2);
stackArr.pop();
stackArr.pop();

//Non-LL Variant /w storage object instead of nodes
class Stack2 {
  constructor() {
    this.size = 0;
    this.item = 0;
    this.storage = {};
  }

  push (val) {
    this.storage[this.item] = val;
    this.size++;
    this.item++;
  }

  pop () {
    if (this.size > 0) {
      this.size--;
    }

    let valToRemove = this.storage[this.size];
    delete this.storage[this.size];
    return valToRemove;
  }
};