/* ----- Binary Heap Practice ----- */

class MaxBinaryHeapExample {
  constructor () {
    this.values = [];
  }
};

//1. Using the above building block, build a max binary heap with an "insert" method that properly situates the inserted value relative to others in the heap. Note that this will require constructing a "bubbleUp" (it can be named whatever, strictly speaking) method that is invoked upon insertion and which does the leg work of properly situating the newly inserted value.

class BinaryHeapMax {
  constructor () {
    this.values = [];
  }
};

//2. Construct an "extractMax" method that returns the highest value in the heap (recall that for a max binary heap this should be the very first item in our heap's array) and re-situates the rest of the values as appropriate. Note that you will need to construct a "trickleDown" method that does this leg work for you and is invoked at some point.

module.exports = BinaryHeapMax;