//Breadth-first Search (BST)
//Check all siblings at each level before going further down the tree
//We will use iteration rather than recursion for this; sadly, it seems recursion is not an ideal solution to this problem according to StackOverflow, so iteration it is!

class Tree {
  constructor (val) {
    this.val = val;
    this.children = [];
  }

  insert(val) {
    this.children.push(new Tree(val));
  }

  find(val) {
    if (!this.val) { return null; }

    let target = null;
    const nodeFinder = (node) => {
      if (this.val === val) {
        target = this;
        return;
      }
      for (let child of this.children) {
        nodeFinder(child);
      }
    }
    nodeFinder(this);
    return target;
  }

  BFS () {
    let node = this;
    let values = [];
    let queue = [];
    queue.push(this);

    while (queue.length) {
      node = queue.shift();
      values.push(node.val);

      if (node.children) {
        for (let child of node.children) {
          queue.push(child);
        }
      }
    }

    return values;
  }
}

// let test = new Tree(0);
// test.insert(1);
// test.insert(2);
// test.children[0].insert(3);
// test.children[0].insert(4);
// test.children[1].insert(5);
// test.children[1].insert(6);
// test.children[0].children[0].insert(7);
// test.children[0].children[1].insert(8);
// test.children[1].children[0].insert(9);
// test.children[1].children[1].insert(10);
// console.log(test);
// console.log(test.find(0));
// console.log(test.BFS());

//the above will do a breath-first search and collect all of the values of the nodes. We can see that it is properly accessing the nodes in BFS fashion by inserting the nodes such that with a BFS, the node value count will be from 0-10!!!

//Our code for a BST BFS will be almost identical, except instead of checking for 'children' and pushing them all into the queue if they exist, we will check both the current node's left value and its right value and push them into the queue accordingly.

class BST {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (this.val === val) { return null; }

    if (val < this.val) {
      if (this.left === null) {
        this.left = new BST(val);
      } else {
        this.left.insert(val);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(val);
      }
    }
    return this;
  }

  BFS () {
    let node = this;
    let values = [];
    let queue = [];
    queue.push(this);

    while (queue.length) {
      node = queue.shift();
      values.push(node.val);
      if (node.left) { queue.push(node.left); }
      if (node.right) { queue.push(node.right); }
    }
    return values;
  }
}

let test2 = new BST(25);
test2.insert(30);
test2.insert(15);
test2.insert(20);
test2.insert(10);
test2.insert(5);
console.log(test2);
console.log(test2.BFS());