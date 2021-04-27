Merge sort
//Merge sort is the first of the three intermediate algorithms we will consider. These algorithms are almost almost more efficient than the quadratic algorithms we covered up to this point, but are more complicated! You got this.

//Merge sort utilizes the divide and conquer pattern to increase efficiency. This algorithm recursively breaks our dataset down into halves until each element is its own array, and then merges these sub-arrays! Thus, the dataset is decomposed into single element arrays and then we concatenate a bunch of merges back up the dataset until we have a new sorted whole.

//That's nice and all, but let's take a look at how it works in code. You should also look at the visualizer in the 'Further Resources' section to get a firmer grasp on what is happening with merge sort.

//lets look at how to merge two sorted arrays together first. This will be the building block for our mergeSort as we will need to merge sorted arrays...repeatedly.

const mergeArrays = (arr1, arr2) => {
  let result = [];

  while (arr1.length && arr2.length) {
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }

  while (arr1.length) {
    result.push(arr1.shift());
  }

  while(arr2.length) {
    result.push(arr2.shift());
  }

  return result;
};

//we can be fancy with ES6 and replace lines 17-25 with the following:
//return [...arr, ...arr1, ...arr2];
//I will leave the above implementation to make explicit what is happening, however: any remaining elements in array1 and array2 will be pushed into the result array before returning!

//While both arrays have length, we compare the first value of each and see which is smaller. The smaller element is pushed to a result array (the ternary operator saves some space instead of having multiple 'if' blocks, but we could do that too. We take advantage of the 'shift' method because it simultaneously reduces the size of the arrays we are operating on AND returns  the first value of a given array, which is what we want to push to our result array).

//If we still have remaining values in either of the arrays, we clean up and push them into the result array as well. Due to the two arrays being sorted already, this does not generate unsorted results (it is best to look at a visualizer or walking through with chrome  dev tools to literally SEE this).

//Once we have a building block function to perform our merges, we can finish the job with a main mergeSort function body:

const mergeSort1 = (arr) => {
  if (arr.length < 2) { return arr; }
  let mid = Math.floor(arr.length / 2);
  let l = arr.slice(0, mid);
  let r = arr.slice(mid);
  let sortedL = mergeSort1(l);
  let sortedR = mergeSort1(r);
  return mergeArrays(sortedL, sortedR);
};
mergeSort1([110,34,25,26,114]);

//We return an array if it is less than 2 elements because that means it is already sorted. We then divide the array in half, recursively sort each half by calling on mergeSort again and again until we have single element arrays, then merge the two halves with one final merge.

Breakdown
// The worst-case time complexity of Merge Sort is O(nlogn), same as that for best case time complexity for Quick Sort. When it comes to speed, Merge Sort is one of the fastest sorting algorithms out there.

// Unlike Quick Sort, Merge Sort is not an in-place sorting algorithm, meaning it takes extra space other than the input array. This is because we are using auxiliary (helper) arrays to store the sub-arrays. The space complexity of the merge sort is O(n).

// Another advantage of Merge Sort is that it lends itself very well to multi-threading, since each respective half and be sorted on its own. Another common way of reducing the runtime of Merge Sort is to stop when we get to relatively small subarrays (~7) and using Insertion Sort to sort them.

// This is done because Insertion Sort performs really well on small, or nearly sorted arrays. Much better than it's more globally efficient counterparts.

Further Resources
https://visualgo.net/en/sorting