Singly-Linked Lists
//Singly-linked lists are best compared to arrays, because they share some similarities.

//An SLL is also a list of items like an array is. The difference is that SLL elements are not indexed! Each element simply has a pointer that points to the next element in the list. Strictly speaking, each element in an SLL is a "node" with a value and a pointer to the next node.

//SLLs have the properties head, tail, and length property.

//SLLs have constant time insertion and removal at the beginning of the list, unlike arrays. Unlike arrays, however, quick access to any "middle" value (not the start and not the end) is not available, as again, nodes are not indexed. Insertion/removal anywhere in the middle starts at the beginning and proceeds from there.

//Therefore, with large amounts of data we might want to use an SLL if we do not need random access to anywhere after the start and before the end of the dataset.