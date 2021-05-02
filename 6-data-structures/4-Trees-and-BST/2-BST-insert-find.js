//Insert and find
//In the last section we covered what a BST is and looked at the building blocks we will use for our ongoing work. In this section we will add two methods to our BST: insert (pretty elementary I would say) and find, which looks for a val in the tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

class BST {
  constructor() {
      this.root = null;
  }

  insert(val) {
      let newNode = new Node(val);

      if(!this.root) {
          this.root = newNode;
          return this;
      }

      let current = this.root;

      while(true) {
          if(val === current.val) return null;
          if(val < current.val) {
              if(!current.left){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if (!current.right){
                  current.right = newNode;
                  return this;
              }
              current = current.right;
          }
      }
  }

  find(val) {
    if(!this.root) return null;

    let current = this.root;
    let found = false;

    while(current && !found) {
        if(val < current.val){
            current = current.left;
        } else if (val > current.val){
            current = current.right;
        } else {
            found = true;
        }
    }
    if(!found) return null;
    return current;
  }
};

// let insertTest = new BST();
// insertTest.insert(10);
// insertTest.insert(15);
// insertTest.insert(7);
// console.log(insertTest.find(7));
// console.log(insertTest);

//Here is an alternative implementation which uses just one class. The virtue of this approach is that we can invoke a child node's own methods to help find and insert values rather than having to BOTh have a separate node class as well as tons of iteration. Instead, we can lean on recursion!

class BST2 {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert (val) {
    if (val === this.val) {
      return null;
    } else if (val < this.val) {
      if (this.left === null) {
        this.left = new BST2(val);
      } else {
        this.left.insert(val);
      }
    } else {
      if (this.right === null) {
        this.right = new BST2(val);
      } else {
        this.right.insert(val);
      }
    }
    return this;
  }

  find(val) {
    if (!this.val) { return null; }

    if (this.val === val) { return this; }
    else if (val < this.val) {
      if (!this.left) { return null; }
      else { return this.left.find(val); }
    } else {
      if (!this.right) { return null; }
      else { return this.right.find(val); }
    }
  }
}

let test2 = new BST2(10);
console.log(test2.insert(15));
test2.insert(7);
test2.insert(6);
test2.insert(9);
test2.insert(12);
console.log(test2.find(15));


//That is it for binary search trees! They are good for storing data you want sorted and for accessing said data at O(logn) time. There are a multitude of uses for them! Next, we will cover some of the most popular ways of traversing trees more generally (not just BSTs)!


