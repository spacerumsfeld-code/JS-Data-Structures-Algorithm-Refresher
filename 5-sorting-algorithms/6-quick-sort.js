// Quicksort
// //Over the years, many sorting algorithms have been developed, and one of the fastest ones to date is Quicksort.

// // Quicksort uses the divide-and-conquer strategy to sort the given list of elements. This means that the algorithm breaks down the problem into subproblems until they become simple enough to solve directly.

// // Algorithmically this can be implemented either recursively or iteratively. However, the recursive approach is more natural for this problem.

// Logic
// //Select an element of the array. This element is generally called the pivot. Most often this element is either the first or the last element in the array.

// // Then, rearrange the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot. The step is called partitioning. If an element is equal to the pivot, it doesn't matter on which side it goes.

// // Repeat this process individually for the left and right side of the pivot, until the array is sorted.

// Examples
//Iterative solution
function partition(arr, start, end){
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
      // Swapping elements
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      // Moving to next element
      pivotIndex++;
      }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
  return pivotIndex;
};

function quickSortIterative(arr) {
  // Creating an array that we'll use as a stack, using the push() and pop() functions
  stack = [];

  // Adding the entire initial array as an "unsorted subarray"
  stack.push(0);
  stack.push(arr.length - 1);

  // The loop repeats as long as we have unsorted subarrays
  while(stack[stack.length - 1] >= 0){
      // Extracting the top unsorted subarray
      end = stack.pop();
      start = stack.pop();

      pivotIndex = partition(arr, start, end);

      // If there are unsorted elements to the "left" of the pivot,
      // we add that subarray to the stack so we can sort it later
      if (pivotIndex - 1 > start){
        stack.push(start);
          stack.push(pivotIndex - 1);
  }

      // If there are unsorted elements to the "right" of the pivot,
      // we add that subarray to the stack so we can sort it later
      if (pivotIndex + 1 < end){
        stack.push(pivotIndex + 1);
          stack.push(end);
      }
  }
}

//Recursive Example
var quickSort = function(array) {
  let pivotFinder = function (array) {
    return Math.floor(Math.random() * (array.length - 1));
  }

  let pivot = array[pivotFinder(array)];
  let largerThan = [];
  let lessThan = [];

  if (array.length < 2) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
     if (array[i] === pivot) {
        continue;
      }
    if (array[i] > pivot) {
      largerThan.push(array[i]);
    } else {
      lessThan.push(array[i]);
    }
  }
  return quickSort(lessThan).concat(pivot).concat(quickSort(largerThan));
};

console.log(quickSort([3,1,2,0]));

//a fancy pants, short version which is easier to remember and that uses the filter method to save some lines of code:
  const quick_sort = function (arr) {
  if (arr.length < 2) { return arr; }

  let pivot = arr[Math.round(Math.random() * (arr.length - 1))];
  let less = arr.filter(el => el < pivot);
  let more = arr.filter(el => el > pivot);

  return quick_sort(less).concat(pivot).concat(quick_sort(more));
};
console.log(quick_sort([3,1,13,2,0,15]));

// Breakdown
//Now that we know how to implement the Quicksort algorithm let us discuss the time and space complexity. The worst-case time complexity of Quick Sort is O(n2). The average case time complexity is O(nlogn). The worst-case is usually avoided by using a randomized version of Quicksort.

// The weak spot of the Quicksort algorithm is the choice of the pivot. Choosing a bad pivot (one that is greater than/less than most elements) every time, would give us the worst-case time complexity. While repeatedly choosing a pivot that has a roughly equal number of elements that are less than/greater than the pivot would give us a time complexity of O(nlogn).

// Quicksort is one of those algorithms where the average-case runtime is actually important. Empirically, it was noticed that Quicksort tends to have a O(nlogn) runtime regardless of the pivot-choosing strategy.

// Also, when it comes to space complexity, Quicksort doesn't take any extra space (excluding the space reserved for recursive calls). These kinds of algorithms are technically called as in-place algorithms. We don't need extra space because we are performing the operation on the same array.

// Further Resources
// https://stackabuse.com/quicksort-in-javascript/
// https://www.digitalocean.com/community/tutorials/js-quick-sort