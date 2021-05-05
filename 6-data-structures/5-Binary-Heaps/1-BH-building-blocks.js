Binary Heap Building Blocks
//You might expect that a binary heap would be best represented as an actual tree, with a class that instantiates nodes in a set fashion rather as we did with the BST. For whatever reason, it is actually not ideal to model a heap in this fashion. The standardly accepted practice is to create a class that has an ARRAY which holds all of the node values of the heap; thus, there really isn't a substantial structure to build here; just one instance of an object with a few methods and a bunch of values in an array representing all the children/sub-node relationships.

//Many other languages have a default heap or priority queue structure built-in, but alas, JS does not (hence the need for this section). You may earn extra brownie points in an interview if you get a heap question and have to manually construct a heap as we are doing here, however.

//For our array of values, we can always find a given nodes children as follows: the left child is at index 2i + 1 (where i is the index of the node under consideration), and its right child is right next to it at index 2i + 2.

//We can also find a given node's parent with the following formula: for a given node at index i, its parent is at Math.floor((i - 2) / 2). This will identify a parent node of a given node without fail.

//That's it for our data structure! A simple class with an array and set formulae for finding child/parent relationships betwixt the values contained therein. Damn I love the word 'betwixt'.

//Time Complexity Note:
//Binary Heap Complexities
//Insert: O(logN)
//removal: O(logN)
//search: O(N)