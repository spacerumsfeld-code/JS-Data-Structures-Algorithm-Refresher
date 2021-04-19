/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

 var quicksort = function(array) {

  let pivotFinder = function (array) {
    return Math.floor(Math.random() * (array.length - 1));
  }


  //declare pivot, 'left' and 'right' arrays to break array down into
  let pivot = array[pivotFinder(array)];
  let largerThan = [];
  let lessThan = [];

    //pivot finding helper, hoisted so 'pivot' has access above

  //base case
  if (array.length < 2) {
    return array;
  }

  //recursive case
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

  return quicksort(lessThan).concat(pivot).concat(quicksort(largerThan));

};
