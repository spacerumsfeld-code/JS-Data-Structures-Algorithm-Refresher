/* ----- Binary Heap Complete Class and Methods ----- */

//note: see https://github.com/tc39/proposal-private-methods for more information on declaring variables outside of any constructor and the use of the '#' symbol for some methods below. To make a long story short, this syntax is a stage 3 proposal, so not "official" yet.

//We can declare fields without calling the constructor; that is clear enough. The hash symbol, meanwhile, denotes a "private" method that cannot be accessed from outside the class or any of its instances. It is appropriate for methods we do not intend to be invoked, that do computational work in the background; a user has no use invoking or even seeing these sort of methods at work.

//That is the case with out bubbleUp and trickleDown methods; they do background work to ensure the binary heap has the structure it ought to, without needing to be invoked.

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