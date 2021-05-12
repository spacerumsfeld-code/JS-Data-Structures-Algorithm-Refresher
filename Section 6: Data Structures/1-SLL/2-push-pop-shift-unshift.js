// Push
//add an item to the end of the list

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor () {
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
  }
}
// let test = new SLL();
// test.push(10);
// console.log(test.head);
// console.log(test.tail);
// test.push(15);
// console.log(test.head, test.tail);

//Pop
//Remove an item from the end of the list
//If no nodes, return undefined. Otherwise traverse from head to one element before current tail. Keep track of element before current, because this will become our new tail.

class SLL2 {
  constructor () {
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
  }

  pop() {
    if (!this.length) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}
// let test2 = new SLL2();
// test2.push(1);
// test2.push(2);
// test2.push(3);
// console.log(test2.pop());
// console.log(test2.head, test2.tail);

//Shift
//Remove a value from the beginning of the SLL. Go to head, set head to be head.next

class SLL3 {
  constructor() {
    this.head = null;
    this.next = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.length) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.length) {
      return undefined;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return temp;
    }
  }
}
// let test3 = new SLL3();
// test3.push(1);
// test3.push(2);
// test3.push(3);
// console.log(test3.shift());
// console.log(test3.head);

//Unshift
//Add a node at the beginning of the list. Go to the head, create a new node, make it the new head with its 'next' pointing to the current head

class SLL4 {
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

    let current = this.head;
    let newTail = current;

    while (current.next) {
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
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
}

let test4 = new SLL4();
test4.unshift(1);
test4.push(2);
test4.unshift(0);
console.log(test4);