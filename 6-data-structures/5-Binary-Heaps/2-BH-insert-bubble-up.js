// Binary Heap Insert (+bubble up)
//Inserting a value into a binary heap may intuitively seem simple enough, and actually the insertion portion is about as simple as it gets: we push the input value into our values array.

// It is what must come after that is not quite as simple: once a value has been pushed, it is presumably not in the correct position: recall that our array is constructed to model node parent/child relationships based on value (maxBH = children are always less in value, etc.). So, we need to rearrange things after a push has occurred: specifically, we will make the new value "bubble up" from its current position until it has reached its proper place in the array, by comparing it to its parent at each level of depth. It may be that it becomes the root node if it is now the largest value in the array, for example.

//Binary Heap Class

class BinaryHeap {
  constructor () {
    this.values = [];
  }
}

//As we see above, the binary heap class is quite simple. Now let's look at what it will take to properly insert values. Specifically, let us construct a very simple insert method for the class, and then a "bubble up" method that the insert method invokes; this latter method will be what does the lion's share of the work in properly positioning our newly inserted value.

class MaxBinaryHeap {
  constructor () {
    this.values = [];
  }

  insert (val) {
    this.values.push(val);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp (i) {
    // let i = this.values.length - 1;
    const bubble = this.values[i];

    if (i > 0) {
      let pi = Math.floor((i - 1) / 2);
      let parent = this.values[pi];
      if (parent >= bubble) { return; }
      //fancy ES2015 instead of 36-37
      [this.values[i], this.values[pi]] = [parent, bubble];
      // this.values[i] = parent;
      // this.values[pi] = bubble;
      i = pi;
      this.bubbleUp(i);
    }

      // }
    }
};

let test = new MaxBinaryHeap();
test.insert(1);
test.insert(2);
test.insert(3);
console.log(test.values); //

//Explanation: when we insert, we simply push the value to the end of our array. Then we make it bubble up! In the above example, the heap was structured as follows before we inserted 3:

//      2
//    /
//   1

// //Remember that binary heaps fill up from left to right and in a breadth-first fashion. Can you guess where '3' is first inserted in the tree, given these facts?

//     2
//   /  \
//  1    3

 //That's right! It is inserted to the right of the 1 because we must fill everything out breadth first, and the left was already occupied.

 //Now we are good to let the bubbling commence. We create a reference to the new value index so that we can use it to calculate the index of the parent. We create a reference to the new value VALUE so that we can compare that to the value of the parent. Then, we iterate, comparing the value to its parent, then to the parent of its parent, as appropriate. The value thus bubble up until, if it is the largest value in the array upon insertion, it becomes the root "node" or value.

 //To be more specific: the formula for getting the parent of a value is (i - 1) / 2; if we do this for our new value '3' at index '2', we get .5 which of course floors to 0, IE the index of its parent in the heap, '2'! We then compare their values; 3 is indeed larger than 2. That being the case, we swap their positions in the array. Since i is now 0, we know there is nowhere else to bubble up to, and our work is complete.


 //MinHeap
 //Thankfully, if we actually want a minHeap instead (where the values INCREASE as we go down in depth), the conversion process is inordinately simple: in our bubbleUp function, simply check if the newly inserted value's parent value is LESS THAN OR EQUAL TO the inserted value. if this is the case, we do not need to do any more work: the values parent is less than it, which is how a minHeap works! Otherwise, we swap and iteratively compare the val to its grandparent, and so on as needed.

 class MinBinaryHeap {
  constructor () {
    this.values = [];
  }

  insert (val) {
    this.values.push(val);
    this.bubbleDown();
  }

  bubbleDown () {
    let i = this.values.length - 1;
    const bubble = this.values[i];

    while (i > 0) {
      let pi = Math.floor((i - 1) / 2);
      let parent = this.values[pi];
      // here is our sole difference from a maxHeap:
      if (parent <= bubble) { break; }
      //that's it!
      this.values[i] = parent;
      this.values[pi] = bubble;
      i = pi;
      }
    }
};

// let test2 = new MinBinaryHeap();
// test2.insert(1);
// test2.insert(2);
// test2.insert(3);
// test2.insert(0);
// console.log(test2.values);