Stacks!
//Stacks are a relatively simple data structure. The most promiment example you will be familiar with would be the call stack! The CS is quite literally a stack.

//A stack is, fundamentally, a collection of data that adheres to the "LIFO" principle: last in, first out. That is to say, necessarily, the last added item will be the first added, and the first added will be the last removed. The common metaphor is that of a stack of plates. You must, under normal circumstances, remove the plate on top before you can get to a plate lower in the stack.

Array example
//we can model a stack various ways, as a stack is an abstract concept that different structures can adhere to. An array where we ONLY use push and pop would fit the definition of a stack.

let stack1 = [];
stack1.push(1);
stack1.push(2);
stack1.pop();
stack1.pop();

LinkedList example
//This example is a stack built out of a linked list. By this I mean the stack consists of nodes which hold values and references to the next node. This is not the only way to implement a stack, of course, and we will see another example below. Building the structure out in different ways ought to help reinforce our understanding of the underlying principles of the structure regardless of specific implementation

//Note: implementations of stacks differ in their use of the word "first" and "last" (EG last = either to mean the last item added, IE the item we want to remove with a pop, or )

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

// let test1 = new Stack();
// test1.push(1);
// test1.push(2);
// test1.push(3);
// console.log(test1.pop());
// console.log('New Top', test1.top.val);
// console.log(test1.pop());
// console.log('New Top', test1.top.val);
// console.log(test1.pop());
// console.log(test1.pop());
// console.log(test1.bottom, test1.top);

//Awesome! Here is another implementation that uses an object as storage on the stack. Again, there isn't one right way to build a stack! The advantage of this build is that we do not need to worry about nodes and 'next' values, plus using the object may be more intuitive for some than a bunch of nodes pointing at each other.

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

  size () {
    return this.size;
  }

}

let test2 = new Stack2;
test2.push(1);
test2.push(2);
test2.push(3);
console.log(test2.storage, test2.size);
console.log(test2.pop());
console.log(test2.pop());
console.log(test2.storage);
console.log(test2.size);

Stack Time Complexity
//Stacks have constant time insertion and removal (since they do so only at the top of the stack) and linear search and lookup time. With the above model using an object, they also have constant lookup time, but this is a tertiary benefit since if you were worried about lookup you would probably want to opt for a different data structure.