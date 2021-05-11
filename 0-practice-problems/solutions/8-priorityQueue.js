/* ----- Priority Queue Complete Class and Methods ----- */

class Node {
  constructor (val, priority) {
    this.val = val;
    this.priority = priority;
  }
};

class PriorityQueue {
  values = [];

  queue (val, priority) {
    let newVal = new Node(val, priority);
    values.push(newValues);
    this.#bubbleUp(this.values.length - 1);
  }

  #bubbleUp (i) {
    let node = this.values[i];
    let parentIdx = Math.floor((i - 1) / 2);
    let parent = this.values[parentIdx];

    if (!parent || parent.priority <= node.priority) { return; }

    [this.values[parentIdx], this.values[i]] = [this.values[i], this.values[parentIdx]];
    this.#bubbleUp(parentIdx);
  }

  dequeue () {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    let highest = this.values.pop();
    if (this.values.length > 1) { this.#trickleDown(0); }
    return highest;
  }

  #trickleDown (i) {
    let node = this.values[i];
    let leftChildIdx = 2 * 1 + 1;
    let rightChildIdx = 2 * 1 + 2;
    let leftChild = this.values[leftChildIdx];
    let rightChild = this.values[rightChildIdx];

    if ((!leftChild || leftChild.priority >= node.priority) && (!rightChild || rightChild.priority >= node.priority)) { return; }

    let swapIdx = leftChildIdx;
    if (rightChild && rightChild.priority <= leftChild.priority) { swapidx = rightChildIdx; }

    [this.values[i], this.values[swapIdx]] = [this.values[swapidx], this.values[i]];
    this.#trickleDown(swapIdx);
  }
};
