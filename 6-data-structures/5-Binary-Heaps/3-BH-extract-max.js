// Binary Heap Extract Max (and min);
//A common method for a binary heap is acquiring the max value (for a maxHeap) or min value (for a min heap) quickly and efficiently -- that's kind of the point of these structures to some degree, right? Why else would they be organized such that the min or max value is always at the beginning!

//Implementing this method is rather like how we implemented 'insert' for both a minHeap and maxHeap: the actual acquisition of the value in question is easy, but it is the subsequent rearrangements that need to occur which bring some complexity. Let's take a look at some code! Our extractMax function will be relatively straight-forward and will invoke a helper method called trickle_down (you can name it whatever you like), and luckily this function is more effective than the tax policy of the same name).

//The logic is as follows: create a reference to the first element and ultimately return it; in the meantime, we reassign the last item to be the first (which is why we create a reference to the original first so that we can still return it post-reassignment), then initialize our trickle down method if there are still elements in the array.

//To trickle down, we create references to the current element (so we can compare to children), the children themselves AND their indexes in accordance with the magical children formula for binary heaps. We do this so that we can swap the current root with a child as needed (hence the reference to the indexes), and compare the actual values of the children with the root (hence the references to actual children).

//We check if there is a left child, if there is and it is greater than the current value, we set our swap to be left child index (which means, pending any changes, at the end of this iteration we will swap the left child and the current node). We then check the right child before proceeding. Is it greater than the leftChild? If so we pivot and decide that we will swap the root with the RIGHT child instead. We reassign the current value to be the new child we swapped with, and continue the process down the tree for as long as needed. Once no more swap is determined to be necessary, we are done.

//Note: the MaxBinaryHeap trickle_down has been refactored to a fancier, ES6 / recursion version. Look below at the MinBinaryHeap solution for an iterative version, and simple change the comparison between trickle and its left and right child: if trickle is less than either of them, swap as appropriate (since in our MaxHeap the higher value ought to rise to the top);

class MaxBinaryHeap {
  constructor () {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let i = this.values.length - 1;
    const bubble = this.values[i];

    while (i > 0) {
      let pi = Math.floor((i - 1) / 2);
      let parent = this.values[pi];
      if (parent >= bubble) { break; }
      this.values[i] = parent;
      this.values[pi] = bubble;
      i = pi;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.trickle_down(0);
    }
    return max;
  }

  extractMaxES6 () {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    const retVal = this.values.pop();
    this.trickle_down(0);
    return retVal;
  }

  trickle_down(index) {
    let trickle = this.values[index];
    let leftIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;
    let left = this.values[leftIndex];
    let right = this.values[rightIndex];

    if ((!left || trickle > left) && (!right || trickle > right)) { return; }

   let target = leftIndex;
   if (right && right > left) {
     target = rightIndex;
   }

   [this.values[index], this.values[target]] = [this.values[target], this.values[index]];
   this.trickle_down(target);
  }
};

let test = new MaxBinaryHeap();
test.insert(15);
test.insert(58);
test.insert(65);
test.insert(45);
test.insert(31);
test.insert(40);
test.insert(53);
test.insert(44);
console.log(test.extractMaxES6());
console.log('-------Heap After Extraction, New Root Should be 58-----');
console.table(test.values);

//Now let's see if we can't do the same for a minHeap, where we extract the min value and allow the next lowest val to bubble up!!!!

class MinBinaryHeap {
  constructor () {
    this.values = [];
  }

  insert (val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let i = this.values.length - 1;
    const bubble = this.values[i];

    while (i > 0) {
      let pi = Math.floor((i - 1) / 2);
      let parent = this.values[pi];
      if (parent <= bubble) { break; }
      this.values[i] = parent;
      this.values[pi] = bubble;
      i = pi;
    }
  }

  extractMin () {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.trickle_down();
    }
    return min;
  }

  trickle_down () {
    let i = 0;
    let trickle = this.values[0];

    while (true) {
      let leftChildIdx = 2 * i + 1;
      let rightChildIdx = 2 * i + 2;
      let leftChild = this.values[leftChildIdx];
      let rightChild = this.values[rightChildIdx];
      let swap = null;

      if (leftChild) {
        if (trickle > leftChild) { swap = leftChildIdx; }
      }

      if (rightChild) {
        if (
          swap === null && trickle > rightChild ||
          swap !== null && rightChild < leftChild
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[i] = this.values[swap];
      this.values[swap] = trickle;
      i = swap;

    }
  }
}

// let test2 = new MinBinaryHeap();
// test2.insert(5);
// test2.insert(4);
// test2.insert(3);
// test2.insert(2);
// console.table(test2.values);
// console.log('------ExtractMin: New Root should be 3');
// console.log(test2.extractMin());
// console.table(test2.values);
