Nodes
//Since each item in a linked list is actually a node with a value and a "next" pointer to the next node in the list, we need to create a class for nodes. We will create our class with a value property (every node has a value) and a next property initialized as null (there won't necessarily be a next).

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  }
}

//This will be our building block for managing linked lists: adding, removing, searching for, etc. nodes.

//With this work done, we can create the class for the SLL itself! We will start simple and define its properties and instantiate a list; the next section will be where we add all  the methods we may want to utilize for our list class.

class SLL {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

//These are the base properties every SLL must have: a reference to the node that is the tail of the list (the end), a reference to the head (the beginning of the list), and a length property.