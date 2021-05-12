Binary Heaps
//"heaps" are a broad class of data structures within the class of 'tree'. There are a variety of types of heap, just as there a variety of types of tree. We will focus on binary heaps in particular, and differentiate a couple of types of binary heap.

//A binary heap is much like a BST, with slightly tweaked rules. In a binary heap, nodes can have at most two children, just like BST! In a MaxBH (max binary heap), children nodes are always less in value than their parent; in a MinBH, the parent is always smaller than the children.

//Unlike a BST, there is no inherent order between left and right side of the Heap.

//Max Binary Heap
//There is no order between left and right sub-trees, but all values further in depth than the root will be less than the depth, and so on for each node.
//A binary heap is as compact as possible, in that each left and right is always filled up before moving to the next level (left first).

        41
     /      \
     39     33
    /  \   /
   18  27 12

//Who cares about heaps?
//Heaps are commonly used to implement a priority queue, which is a very common data structure.
