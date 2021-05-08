/* ----- Complete Stack Class and Methods ----- */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

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
    return this.size;
  }

  pop() {
    if (!this.size) { return null; }
    if (this.size === 1) {
      this.bottom = null;
    }
    let oldTop = this.top;
    this.top = this.top.next;
    this.size--;
    return oldTop.val;
  }
}