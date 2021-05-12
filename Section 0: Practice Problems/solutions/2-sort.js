/* --------------------- Sorting Algorithm Solutions -------------------- */

//1. Bubble Sort
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

//Quadratic

//2. Selection Sort
  const selectionSort = (arr) => {

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
};

//Quadratic

//3. Insertion Sort
  const insertionSort = (arr) => {
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
};

//Quadratic

//4. Merge Sort
  const mergeArrays = (arr1, arr2) => {
    let result = [];

    while(arr1.length && arr2.length) {
      result.push(
        arr1[0] < arr2[0]
        ? arr1.shift()
        : arr2.shift()
      )}

      return [...result, ...arr1, ...arr2];
  };

  const mergeSort = (arr) => {
    if (arr.length < 2) { return arr; }
    let mid = Math.floor(arr.length - 1 / 2);
    let l = mergeSort(arr.slice(0, mid));
    let r = mergeSort(arr.slice(mid));
    return mergeArrays(l, r);
  };

  //Log-linear

//5. Quick Sort
  const quickSort = (arr) => {
    if (arr.length < 2) { return arr; }
    let pivot = arr[0];
    arr.shift();

    let left = quickSort(arr.filter(el => el <= pivot));
    let right = quickSort(arr.filter(el => el > pivot));
    return [...left, pivot, ...right];
  }

  //Log-linear
