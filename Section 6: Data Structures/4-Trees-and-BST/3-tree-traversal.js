Tree Traversal
//The next 4 sections will detail some of the more common methods of traversing or navigating around a tree structure. As with everything else when it comes to data structures and algorithms, there is not one "correct" answer as to which is best; they all have their own use cases where they excel (hence why we bother to learn them).

//Here are the approaches we will consider:
//Breadth-first search: work across the tree at each "level", or set of sibling nodes.
//Depth-first search: work down one side of the tree to the lowest level and navigate from there
  //DFS in-order
  //DFS pre-order
  //DFS post-order

//Note: these types of traversal pertain to all trees, not just binary search trees. We will implement BFS on both a BST and a basic starter tree!

//When to use BFS vs DFS
//All of the following traversal methods have linear time complexity. Their space complexity can differ, however, depending on how your tree is structured.

//If a tree is tremendously wide compared to deep, you may wish to utilize DFS instead. This is because the BFS is using a queue to keep track of all node values to eventually push to a values array; this queue will grow quite large with a wideeeee tree.

//So, our first rule then: if a tree is wider than it is deep, use DFS. If it is deeper than it is long, use BFS

//Random fun fact: if you use DFS_in_order on a binary search tree, the values will be returned (or visited, depending on what your function is actually doing) from lowest to highest! There could be potential use for that....maybe

//Meanwhile, if we want to make a sort of carbon copy of a tree to recreate later, we may wish to use the pre-order traversal. If we use pre-order to traverse a tree and log its values, we can save those values as a sort of template to recreate the same (binary) tree. In other words, with the output of a pre-order traversal of our tree, we can simply add the values into a new tree in the same order to exactly duplicate the original.