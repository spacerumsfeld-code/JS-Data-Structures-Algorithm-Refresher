Selection Sort
// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.

// In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

Example
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);

Breakdown
// Time Complexity: O(n2) as there are two nested loops.

// Auxiliary Space: O(1)
// The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation.

// Exercise :
// Sort an array of strings using Selection Sort

// Stability : The default implementation is not stable. However it can be made stable. Please see stable selection sort for details.

// In Place : Yes, it does not require extra space.
