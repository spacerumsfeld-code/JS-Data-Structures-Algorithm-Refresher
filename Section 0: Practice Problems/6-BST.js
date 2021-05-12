/* ----- Binary Search Tree Practice ----- */

class BSTexample {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = right;
  }
};

//1. Using the above building block, construct a binary search tree (BST) with an "insert" method that properly situates a new value in the BST. Let each new node in the BST itself be a new BST.

class BST {
  constructor (val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

//2. Construct a "find" method for a binary search tree that searches the BST and returns the node with a provided value (if any).

//3. Construct a "dfsPreOrder" method that traverses the BST in DFS pre-order fashion.

//4. Construct a "dfsInOrder" method that traverses the BST in...you guessed it, DFS in-order fashion.

//5. Construct a "dfsPostOrder" method that traverses the BST in...you guessed it...DFS post-order fashion.

//6. Construct a "bfs" method that traverses the BST in breath-first fashion.

//Scroll down for BONUS answers.
//7. BONUS: You are given an unsorted array and told to sort it without using any of the standard sorting algorithms. Can you think of a way to sort the array with a BST?

//8: BONUS: you want to generate an array that captures the structure of a BST so that you can recreate it, in order, for later. How might you do this?









//BONUS Answers
//7. Loop over the array and insert all of its values into a BST. Perform DFS-inorder traversal to output an array of values, in order!

//8. Run a DFS-pre-order traversal over your BST to generate an array that will be a sort of template for it. Then, when you want to recreate that structure, you can loop over the array and insert those values, in that order, to reconstruct your BST.

module.exports = BST;