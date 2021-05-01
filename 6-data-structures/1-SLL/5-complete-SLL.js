Wrap up.
//That wasn't so bad, right? Let's cover the time complexity of linked lists now that we've done all that work.

//Insertion is constant time VS linear time in arrays.

//Removal: if we are removing from the beginning, our t-complexity is constant, but if we are removing from the end, we must traverse from head to tail and pop off the tail.

//Search: searching in a linked list is linear time, because we have to traverse from the head onward to find our desired element. Meanwhile, arrays have random access such that we can access an item (once indexed) immediately.

//Access: linear time complexity because we need to start at the head and go from there.

//In short, singly linked lists are a good alternative to arrays when insertion/deletion at the beginning is common, and there is no need for random access.

