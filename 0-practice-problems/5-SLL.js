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

//2. Build a pop method that returns the value of the tail and disconnects it from the list.

//3. Build a shift method that returns the value of the head and disconnects it from the list.

//4. Build an unshift method that inserts a node at the beginning of the list, makes it the new head, and connects it to the original head.

//5. Build a "get" method which returns the node at a specified position in the list. (Assume zero-indexing for positions, just like arrays.)

//6. Build a "set" method which replaces the current value of a node at a position in the list with a new one.

//7. BONUS: Build an "insert" method that inserts a new node with a specified value at a given position in the list and properly connects it to its new neighbors.

//8. BONUS: Build a "remove" method that deletes a node at a given position in the list and properly connects its former neighbors to each other.






















};

const sll = { Node, SLL };

module.exports = sll;
