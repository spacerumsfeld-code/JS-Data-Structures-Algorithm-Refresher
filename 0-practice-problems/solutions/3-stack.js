/* ----- Complete Stack Class and Methods ----- */

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

  //look at the top of the stack but do not pop
  peek () {
    return this.top.val;
  }

  //spit out all the values of the stack so we can take a gander!
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