// Searching Algorithms

//  Searching algorithms are used to search strings or arrays of large amounts of data for specific values. In this section, we will cover linear search, binary search, and the KNP algorithm for searching!

//  Linear search
//  Linear search is the basicmost algorithm for searching a data set; many built-in methods use this algorithm. Linear search is simply the process of checking each value, one at a time, through the entire dataset until we have our match. Methods like includes, indexOf, find, and findIndex all use linear search.

function linearSearch(arr, value){
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) { return i }
  }
  return -1;
};

// As you can imagine, linear search has a t-complexity of O(n). This is the best we can do with completely unsorted data, unless we sort it! (more on that later)

//  Binary Search
//  BS is the holy grail of a searching algorithm, because it achieves logarithmic time complexity. The only requirement to use BS is that the data must already be sorted.

//  BS uses the 'divide and conquer' method of problem solving. It checks the middle value of a dataset (again, this data must be sorted); depending on whether the target is greater than or less than this middle, the search continues on either half of the data set (by following the same procedure: check the middle of the requisite half and go from there).

//recursive binary search
//base case: array is empty. that means the target is not in this array, so we return -1. Then we check if the current middle of array is equal to the target. If so, we are lucky and we are done! We simply return the index of the target. If not, we need to see if the target is less than or greater than the current mid. If it is less than, we call our function on the first half of the array, excluding the mid (since we already checked that). If it is greater, we call our function on the second half of the array (again, excluding mid since we already checked it).

//This process continues until we either find our target (identified via midpoint), or our array is sliced into an empty array and we return -1.
const binarySearch = (arr, tgt, start=0, end=arr.length-1) => {
    if(start > end) return -1;
    let mid = Math.floor((start + end) / 2);

    if(arr[mid] === tgt) return mid;
    if(tgt > arr[mid]) {
        return binarySearch(arr, tgt, mid + 1, end);
    } else if(tgt < arr[mid]) {
        return binarySearch(arr, tgt, start, mid -1);
    }
}

console.log(binarySearch([1,3,4,5], 5));

  //Sometimes, you may be asked to simply confirm the presence of a value in a dataset. If this is the case, simply use one of the above functions but return 'false' in the base case and 'true' when there is a match.

  //Finally, here is an iterative, non-recursive solution:

  function binarySearch2(arr, target) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== target && start <= end) {
        if (target < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === target){
        return middle;
    }

    return -1;
};

module.exports = {
    linearSearch,
    binarySearch
}