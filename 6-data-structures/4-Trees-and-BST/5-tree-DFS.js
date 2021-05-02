//Depth First Search: Pre-order
//Let's get into DFS algorithms! To reiterate, the depth first search traverses DOWN the tree instead of traversing depth first. We will still visit every node, just in a different order.

//With pre-order, we will hit the root node, then we will go to the left, to the left (I'll see myself out) for each node we hit in our traversal journey. In other words, we will start with the root node, hit its child to the left, hit THAT child's left-most child, and so forth until there are no more lefts, then move to the right. This first example is on a standard tree but as you can see from the result of the invocation of our depth-first pre-order function, we still print out values in a left-first pattern.

//With post-order, we will add all the relevant leaves before we add their parents, in that order. So, we will still traverse to the left-most leaf, then add that, then add the right leaf, then add their parent, then return to the root node, then traverse the entire right side with the same metholodogy. As you can see below, you simply change where the pushing is occurring to get this result.

//With in-order, imagine we are scanning the tree from left to right. I dare say you should imagine a solid red line cross the x axis, from the left, approaching the tree. The first point of contact is what we hit first, then the next, and so on. Practically speaking, that means we traverse down to the leftmost node, then hit its parent, then its right, then back up to the node, then its right child, and so forth.

class Tree {
  constructor (val) {
    this.val = val;
    this.children = [];
  }

  insert(val) {
    this.children.push(new Tree(val));
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

  DFS_pre () {
    let values = [];

    const traverse = (node) => {
      values.push(node.val);
      for (let child of node.children) {
        traverse(child);
      }
    };
    traverse(this);
    return values;
  }

  DFS_post () {
    let values = [];

    const traverse = (node) => {
      for (let child of node.children) {
        traverse(child);
      }
      values.push(node.val);
    }
    traverse(this);
    return values;
  }

  DFS_in_order () {
  //I'm not exactly sure how to implement an in-order DFS with this tree as constructed; I will come back to this!
  }
}

let test = new Tree(1);
test.insert(2);
test.insert(4);
test.children[0].insert(3);
test.children[1].insert(5);
// // console.log(test.DFS_pre()); // 12345
// console.log(test.DFS_post()); // 32541
// // console.log(test.DFS_in_order());

//The above methodologies will be basically identical for a BST, except that instead of looping over a children array we will check if there is a left (if so, invoke traverse on left) and check ifthere is a right (if so, invoke traverse on right). That's it! For reps and to help burn this into my brain, I will rewrite an example below.

class BST {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert (val) {
    if (val === this.val) { return null; }

    if (val < this.val) {
      if (this.left) { this.left.insert(val); }
      else { this.left = new BST(val); }
    } else {
      if (this.right) { this.right.insert(val); }
      else { this.right = new BST(val); }
    }

    return this;
  }

  DFS_pre () {
    let values = [];

    const traverse = (node) => {
      values.push(node.val);
      if (node.left) { traverse(node.left); }
      if (node.right) { traverse(node.right); }
    };
    traverse(this);

    return values;
  }

  DFS_post () {
    let values = [];

    const traverse = (node) => {
      if (node.left) { traverse(node.left); }
      if (node.right) { traverse(node.right); }
      values.push(node.val);
    };
    traverse(this);

    return values;
  }

  DFS_in_order () {
    let values = [];

    const traverse = (node) => {
      if (node.left) { traverse(node.left); }
      values.push(node.val);
      if (node.right) { traverse(node.right); }
    };
    traverse(this);
    return values;
  }

};

// let test2 = new BST(1);
// test2.insert(2);
// test2.insert(3);
// test2.insert(4);
// test2.insert(5);
// console.log(test2.DFS_pre()); //12435
// console.log(test2.DFS_post()); //35421
// console.log(test2.DFS_in_order()); //12345

//Further Resources
//https://www.geeksforgeeks.org/level-order-tree-traversal/
//https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/