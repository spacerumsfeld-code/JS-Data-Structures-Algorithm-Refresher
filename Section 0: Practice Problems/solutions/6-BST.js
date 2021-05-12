/* ----- Binary Search Tree Complete Class and Methods ----- */

class BST {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  insert (val) {
    if (val === this.val) { return undefined; }

    if (val < this.val) {
      if (this.left === null) { this.left = new BST(val); }
      else { this.left.insert(val); }
    } else if (val > this.val) {
      if (this.right === null) { this.right = new BST(val); }
      else { this.right.insert(val); }
    }
    return true;
  }

  find (val) {
    if (val === this.val) { return this; }

    if (val < this.val) {
      if (this.left === null) { return undefined; }
      else { this.left.find(val); }
    } else if (val > this.val) {
      if (this.right === null) { return undefined; }
      else { this.right.find(val); }
    }
  }

  dfsPreOrder () {
    let values = [];

    (function traverse (node) {
      values.push(node.val);
      if (node.left) { traverse(node.left); }
      if (node.right) { traverse(node.right); }
    })(this);

    return values;
  }

  dfsInOrder () {
    let values = [];

    (function traverse (node) {
      if (node.left) { traverse(node.left); }
      values.push(node.val);
      if (node.right) { traverse(node.right); }
    })(this);

    return values;
  }

  dfsPostOrder () {
    let values = [];

    (function traverse (node) {
      if (node.left) { traverse(node.left); }
      if (node.right) { traverse(node.right); }
      values.push(node.val);
    })(this);

    return values;
  }

  bfs () {
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

};
