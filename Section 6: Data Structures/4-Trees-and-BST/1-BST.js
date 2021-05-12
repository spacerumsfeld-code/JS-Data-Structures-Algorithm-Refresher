//Binary Search Tree
//The binary search tree is, as you can imagine, a specialized version of a tree. Each node in the tree will have at MOST 2 children. If we need to insert further values, we cannot add the node as a child of a node which already has 2 children.

//Further, binary search trees are generally used to store sortable data, and so we store data in a BST in a very specific way: All items that are less than the current node are stored as children to the left of the current node, and all items that are greater than the current node are stored to the right of it. Take a look at the example diagram below:

//        10
//       /   \
//      8     11
//     /\       \
//    7  9       12

//This principle obtains down the entire tree: as we see above, branch 1 has two children. They also adhere to the principle of a BST: the node to the left of branch1 (8) is less than it, and the node to the right is greater.

//To recap:
//A BST node will have at most 2 children
//The left child will always be less than the parent
//The right child will always be more than the parent
//And so on down the entire tree

//Now lets look at the building blocks of our BST work! We will construct a node class and a BST class as our rudiments.

class Node {
  constructor(val) {
    this.val = null;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
}
