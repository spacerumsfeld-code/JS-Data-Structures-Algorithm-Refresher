//Get
//get a node by its position in the singly linked list! If index is - or greater than or equal to the length, we short circuit there because the item is definitely not in the list
//otherwise, start at head and keep looping while incrementing a count until the target position is equal to the count, then return the value at that index.

//I also used this method to refactor pop to be much more pithy (instead of looping again, we just invoke "get" and jump to the second to last node)

//set
//Go to a node at a specified index (zero-indexed just like arrays) and replace its value with an input value. This is very simple: just use the GET method to go to the desired node, change its value, and voila!

//insert
//insert at a new node at a specified index. This is a bit trickier, but still pretty straightforward. First we check that the desired index is actually in the list. Then we check if the desired index is 0; if that's the case, we just invoke our unshift method. Then we check if it is the last node; in that case, we invoke our already-made push method.
//We then proceed to GET the index just before the target index, create a new node, point the index - 1 node 'next' value to our new node, and point the newNode next to the node at the index!

//remove
//Remove a node at a given index. First, check if the index is even in the node; if not, return false; then check if index is just 0, in which case we can invoke our built-in shift method. Then check if the node index is the last item of the list, in which case we can invoke our built-in pop. With those preliminaries out of the way, we GET the node before the one we want to remove, create a reference to the removal node, set the "next" value of the prior node to now equal the removal node's next, and decrement the length! Not too complicated.


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
}

let test = new SLL();
test.push(5);
test.push(6);
test.push(7);
test.push(8);
// console.log(test.get(3));
// console.log(test.get(test.length - 2));
// console.log(test.tail);
test.insert(1,10);
console.log(test.remove(1));
console.log(test.get(1));
console.log(test);