Arrays vs Objects for Time Complexity
//  Arrays and objects are built-in and frequently used data structures in Javascript. Therefore, it is adviseable to understand the space and time complexity of various operations with them! That is exactly what this section will cover.

Objects
//  Objects are almost always faster than arrays. They are collections of key-value pairs, or properties. Because they are unordered like a gelatinous blob of properties (even though they don't look as such), insertion and lookup are O(1), while searching is O(n).

//  Of course, all data structures have trade-offs. The trade-off with objects is that they are not ordered! This is where arrays or linked lists come into play.

//  Summary:
//  Objects are almost always faster than arrays. insertion and lookup = O(1), search = O(n)

Arrays
//  Arrays are useful when order matters. The ability to handle ordering has its attendant costs, however. Most native array methods are always O(n), and searching is O(n). Lookup is O(1) just like objects. Insertion and removal are a bit more complicated. When inserting or deleting at the end of an array, t-complexity is O(1); when inserting or deleting at the beginning of an array, t-complexity is O(n) as each element must be re-indexed.

//  Summary:
//  Arrays are useful when order matters. Lookup is constant time just like objects, while most native methods are O(n) except for insertion and deletion at the end of the array, which are also O(1).