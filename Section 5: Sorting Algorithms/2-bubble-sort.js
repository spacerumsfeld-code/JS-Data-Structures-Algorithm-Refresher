// Bubble Sort

// //Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order

// Example
  const swap = (arr, i1, i2) => {
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  };

  const bubbleSort = (arr) => {
    let swapped = false;
    do {
      swapped = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          swap(arr, i, i + 1);
          swapped = true;
        }
      }
    } while (swapped)
    return arr;
  };

  // console.log(bubbleSort([1,3,2,4,0]));

  // More Details
  // Worst and Average Case Time Complexity: O(n*n). Worst case occurs when array is reverse sorted.

  // Best Case Time Complexity: O(n). Best case occurs when array is already sorted.

  // Auxiliary Space: O(1)

  // Boundary Cases: Bubble sort takes minimum time (Order of n) when elements are already sorted.
