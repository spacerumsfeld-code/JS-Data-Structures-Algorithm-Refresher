/* ----- Search Algorithm Practice ----- */

//1. Construct a linear search algorithm that returns the index of a target value in an array if present, and -1 otherwise

  const linearSearch = (arr, tgt) => {

  };

//2. Construct a function that performs binary search on a sorted input array and returns the index of a target if present and -1 otherwise. Feel free to add additional parameters if desired.

  const binarySearch = (arr, tgt, start=0, end=arr.length-1) => {

  };

//Bonus: try implementing recursion in your solution. If all tests for binarySearch pass, then you know you have done so properly.

//(To be clear, recursion is not necessary. Iterative solutions are generally more performant as no additional memory is used for the callstack; that being said, it is always good to know how to do both, and recursive solutions can be more intuitive and readable at times).

const search = { linearSearch, binarySearch };

module.exports = search;