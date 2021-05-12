/* ----- Sorting Algorithm Practice ----- */
//The test suite is going to trust that you are implementing these functions in accordance with the underlying algorithm, as there are too many ways to construct them to test for.

//You will also be asked to identify the average time complexity of the algorithms. Simply change the variable associated with the algorithm to one of the properties in the below object:

const TimeComplexity = {
  FILL_ME_IN: 'wrong',
  CONSTANT: 'constant',
  LOGARITHMIC: 'logarithmic',
  LINEAR: 'linear',
  LOG_LINEAR: 'log-linear',
  QUADRATIC: 'quadratic',
  EXPONENTIAL: 'exponential',
  FACTORIAL: 'hope not'
};

//1. Bubble Sort. Construct a function that implements bubble sort on an input array of arbitrary length.

  const bubbleSort = (arr) => {

  };

  const bubbleSortComp = TimeComplexity.FILL_ME_IN;

//2. Selection Sort. Construct a function that implements selection sort on an input array of arbitrary length.

  const selectionSort = (arr) => {

  };

  const selectionSortComp = TimeComplexity.FILL_ME_IN;

//3. Insertion Sort. Construct a function that implements insertion sort on an input array of arbitrary length.

  const insertionSort = (arr) => {

  };

  const insertionSortComp = TimeComplexity.FILL_ME_IN;

//4. Merge Sort. Construct a function that implements merge sort on an array of arbitrary length. Use recursion and a helper function that merges two arrays.

  const mergeArrays = (arr1, arr2) => {

  };

  const mergeSort = (arr) => {

  };

  const mergeSortComp = TimeComplexity.FILL_ME_IN;

//5. Quick Sort. Construct a function that implements merge sort on an array of arbitrary length. Use recursion.

  const quickSort = (arr) => {

  };

  const quickSortComp = TimeComplexity.FILL_ME_IN;

  //BONUS: Your quick sort should be able to handle duplicate values (i.e., it should not exclude them). An additional bonus test will check this condition.

  const sorting = { bubbleSort, bubbleSortComp, selectionSort, selectionSortComp, insertionSort, insertionSortComp, mergeSort, mergeSortComp, quickSort, quickSortComp };

  module.exports = sorting;