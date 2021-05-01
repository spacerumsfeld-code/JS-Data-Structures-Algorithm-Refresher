//Reverse a Linked List
//This is the holy grail of interview questions /w regards to linked lists, even if you will never reverse a linked list in your life. It is what it is, don't hate the player hate the game, etc. So let's figure out how to reverse an SLL then!

//Methodology
//make the head the tail and build the list backwards from there! Iterate over the list and create a variable to keep track of the old .next of each node, then set the node's .next to be the node before it.

//We will implement this with a simple list that has a push method, as we do not need to make use of any others from our fully loaded list.

//Start iteration at the head; initialize pointers to current, previous, and next nodes. Save a reference to the next node, change the current next to be the previous node, change the current node to be the next node, and change the previous node to be the current node (so that we can refer to it as 'next' in the following iteration). Finally, after all of the pointers have been modified, swap the tail and the head for the list (you can do this before the pointer swaps too).

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
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    // return this;
  }

  reverse() {
    if (!this.length) {
      return undefined;
    }

    let prev = null;
    let current = this.head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    let oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;

    return this;
  }

  print() {
    let current = this.head;

    while(current !== null) {
      console.log(current);
      current = current.next;
    }
  }
}

let test = new SLL();
test.push(0);
test.push(1);
test.push(2);
// console.log(test.head);
test.reverse();
console.log('------ print reversed --------');
console.log(test.head, test.tail);
test.print();


//alternatively, you may be asked to reverse a list with a function that takes in the head node
//the methodology is precisely the same except this time around, we will use fancy pants es6 DESTRUCTURING to craft a short solution

//the steps, as you'll recall, are the following: keep track of previous, current and next, and starting at head:
//initialize prev to be null, current to be head.
//reassign next to be current (IE change the direction of the pointer)
//reassign prev to be current (so that we can point to it in next iteration)
//reassign current to be next (so we can move to the next node in the list as we go)

  const reverseList = (head) => {
    let [prev, current] = [null, head];

    while (current) {
      [current.next, prev, current] = [prev, current, current.next];
    }
      return prev;
  };

  const reverseOldSchool = (head) => {
    let previous = null;
    let current = head;

    while (current) {
      current.next = previous;
      previous = current;
      current = current.next;
    }

    return prev;
  };

// Further Resources
// https://www.geeksforgeeks.org/reverse-a-linked-list/