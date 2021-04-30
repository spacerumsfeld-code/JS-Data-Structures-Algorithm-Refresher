Queues
//Queues are often grouped with stacks, as they are rather similar in function and in complexity. A queue is much like a stack in that it is simple, can be implemented as an array, and can also have linkedlist and non-linked list implementations. Really, the sole relevant difference is that queues adhere to the FIFO model: the first item inserted is the first removed. The common metaphor is that of people in line: the first in line

Array Construction
let q1 = [];
q1.push(1);
q1.push(2);
q1.push(3);
q1.shift();
q1.shift();

//We add items to the list and always remove the first added, ie SHIFT the first value out of the array. However unlike stack where push and pop have ideal time complexity, shifting does not. Therefore, we really want to build our own queue out of a class. But, if performance didn't matter, the above would suffice as a queue.

Linked List Construction
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Q1 {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.size) { return null; }
    if (this.size === 1) {
      this.last = null;
    }
    let nodeToRemove = this.first;
    this.first = this.first.next;
    this.size--;
    return nodeToRemove.val;
  }
}

// let q2 = new Q1();
// q2.enqueue(1);
// q2.enqueue(2);
// q2.enqueue(3);
// // console.log(q2);
// console.log(q2.dequeue());
// console.log(q2.dequeue());
// console.log(q2.dequeue());
// // console.log(q2.dequeue());
// console.log(q2);

//Niiceeeeeee
//Now lets cover a non-linked-list implementation. I prefer this construction as why build out nodes if we don't have to? It's also a wee bit more intuitive, for me at least (using object as storage for values rather than a big ass amount of nodes linked together);

class Q2 {
 constructor() {
   this.size = 0;
   this.storage = {};
   this.index = 0;
 }

 queue(val) {
   this.storage[this.index] = val;
   this.size++;
   this.index++;
 }

 dequeue() {
   if (!this.size) { return null; }
   let valToRemove = this.storage[Object.keys(this.storage)[0]];
   delete this.storage[Object.keys(this.storage)[0]];
   this.size--;
   this.index--;
   return valToRemove;
 }
}

let q3 = new Q2();
q3.queue(1);
q3.queue(2);
q3.queue(3);
// console.log(q3);
console.log(q3.dequeue());
console.log(q3.dequeue());
console.log(q3);

Time complexity
//Queues are much like stacks in that they achieve constant time with insertion and removal and linear time for search and access. Just like stacks, the time complexity for searching and access isn't particularly relevant as if you needed those to be constant, you would probably opt for a different data structure anyway. Use queues to form lines of data for such operations as browser history, or operations in FIFO order more generally. Queues (just like stacks), are also often a building block for more advanced data structures.