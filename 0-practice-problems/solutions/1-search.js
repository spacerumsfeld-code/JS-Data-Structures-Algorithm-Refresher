/* --------------------- Search Algorithm Solutions -------------------- */

//1. Linear Search

  const linearSearch = (arr, tgt) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === tgt) {
        return i;
      }
    }
    return -1;
  };

  //2. Binary Search

  //iterative
  const binarySearchI = (arr, tgt) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (arr[mid] !== tgt && start < end) {
      if (tgt < arr[mid]) {
        end = mid - 1;
      } else if (tgt > arr[mid]) {
        start = mid + 1;
      }
      mid = Math.floor((start + end) / 2);
    }

    if (arr[mid] === tgt) {
      return mid;
    }
    return -1;
  }

  //recursive
  const binarySearchR = (arr, tgt, start=0, end=arr.length-1) => {
    if (start > end) { return -1 }
    let mid = Math.floor((start + end) / 2);
    if (tgt === arr[mid]) { return mid; }
    else if (tgt < arr[mid]) { return binarySearch(arr, tgt, start, mid - 1); }
    else if (tgt > arr[mid]) { return binarySearch(arr, tgt, mid + 1, end); }
  };