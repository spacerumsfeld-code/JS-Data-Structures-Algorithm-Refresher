// The Priority Queue
//The priority queue is possibly the most common use of the binary heap data structure! In a priority queue, items are inserted in order of priority and not just value. When an item of a higher priority is inserted into the heap, it is moved to the front of the line. We can consider a priority queue exactly equivalent to a stand binary heap, except that ordering is undertaken by priority rating and not just value.

//This structure will have many similarities to the heaps we have built thus far, with some modifications: we will instantiate a separate node class in order to keep track of node priorities (what we will queue items on the basis of) with a custom queue and dequeue method. From there, each of these methods will lean on (invoke) our already-built bubble_up and trickle_down methods with slight modification! Can you guess what the modification is? That's right, the bubbling up and trickling down will occur on the basis of a node's priority, not its value!

//Building Blocks
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor () {
    this.values = [];
  }

  queue (val, priority) {
    this.values.push(new Node(val, priority));
    this.bubble_up(this.values.length - 1);
  }

  bubble_up (index) {
    let bubble = this.values[index];
    let parentIndex = Math.floor((index - 1) / 2);
    let parent = this.values[parentIndex];

    if (!parent || parent.priority <= bubble.priority) { return; }

    [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
    index = parentIndex;
    this.bubble_up(index);
  }

  dequeue () {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    let retVal = this.values.pop();

    this.trickle_down(0);
    return retVal;
  }

  trickle_down (index) {
    let trickle = this.values[index];
    let leftIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;
    let leftChild = this.values[leftIndex];
    let rightChild = this.values[rightIndex];

    if ((!leftChild || leftChild.priority >= trickle.priority)
       && (!rightChild || rightChild.priority >= trickle.priority)) { return; }

    let target = leftIndex;
    if (rightChild && rightChild.priority < leftChild.priority) {
      target = rightIndex;
    }

    [this.values[index], this.values[target]] = [this.values[target], this.values[index]];
    this.trickle_down(target);
  }
}

let test = new PriorityQueue();
test.queue('sore throat', 3);
console.log('-------First Queue: Sore Throat as root as there are no other nodes');
test.queue('herniated disc', 2);
console.log('------Second Queue: Herniated Disc should be new root as it has higher priority!');
// console.table(test.values);
test.queue('GSW', 1);
console.log('-----Third Queue: GSW better be top priority now!');
// console.table(test.values);
test.queue('Sore thumb', 3);
console.table(test.values);
test.dequeue();
console.table(test.values);
