/* ----- Stacks Practice ----- */

class NodeExample {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
};

class StackExample {
  constructor () {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }
};

//1. Using the above building blocks, build a "push" method for a stack that takes an input value and makes it a node at the top of the stack. (Name the method as such for testing purposes.)

class Node {

}
class Stack {

}

//2. Using the above building blocks, build a "pop" method for a stack that removes the top of the stack and returns the removed value.

//3. BONUS: develop a "length" method that returns the size of the stack

//4: BONUS: develop a "peek" method that reveals the top of the stack's value without popping it

//5: BONUS: develop a "print" method that outputs an array of all stack values, from top to bottom

const stack = { Stack, Node };

module.exports = stack;


