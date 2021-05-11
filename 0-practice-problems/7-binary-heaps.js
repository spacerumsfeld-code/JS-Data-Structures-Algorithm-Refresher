/* ----- Binary Heap Practice ----- */

class MaxBinaryHeapExample {
  constructor () {
    this.values = [];
  }
};

//1. Using the above building block, build a max binary heap with an "insert" method that properly situates the inserted value relative to others in the heap. Note that this will require constructing a "bubbleUp" (it can be named whatever, strictly speaking) method that is invoked upon insertion and which does the leg work of properly situating the newly inserted value.

// class MaxBinaryHeap {
//   constructor () {
//     this.values = [];
//   }
// };

class BinaryHeapMax {
  values = [];

  insert (val) {
    this.values.push(val);
    this.#bubbleUp(this.values.length - 1);
  }

  #bubbleUp (i) {
    let newValue = this.values[i];
    let parentIndex = Math.floor((i - 1) / 2);
    let parent = this.values[parentIndex];

    if (!parent || newValue <= parent) { return; }

    [this.values[parentIndex], this.values[i]] = [this.values[i], this.values[parentIndex]];
    this.#bubbleUp(parentIndex);
  }

  extractMax () {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    let max = this.values.pop();
    this.#trickleDown(0);
    return max;
  }

  #trickleDown (i) {
    let trickleValue = this.values[i];
    let leftChildIdx = 2 * i + 1;
    let rightChildIdx = 2 * i + 2;
    let leftChild = this.values[leftChildIdx];
    let rightChild = this.values[rightChildIdx];

    if ((!leftChild || leftChild <= trickleValue) && (!rightChild || rightChild <= trickleValue)) {
      return;
    }

    let swapIdx = leftChildIdx;
    if (rightChild && rightChild > leftChild) { swapIdx = rightChildIdx; }

    [this.values[i], this.values[swapIdx]] = [this.values[swapIdx], this.values[i]];
    this.#trickleDown(swapIdx);
  }
};

//2. Construct an "extractMax" method that returns the highest value in the heap (recall that for a max binary heap this should be the very first item in our heap's array) and re-situates the rest of the values as appropriate. Note that you will need to construct a "trickleDown" method that does this leg work for you and is invoked at some point.

module.exports = BinaryHeapMax;