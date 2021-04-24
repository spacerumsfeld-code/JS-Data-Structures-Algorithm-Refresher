Sliding Window Pattern
//  This pattern entails  creating a window or snapshot of some subset of data within a larger collection, then either closing the window or increasing it as operations commence. The window will be a number or array. This pattern is useful for keeping track of sub-data within an array or string.

//Hopefully, this example clarifies the pattern!

Example
//  Create a function that takes in an array of numbers and an integer 'n', and returns the largest sum of n numbers in the array (consecutive)

//Naive solution: O(n^2) /w nested for loops
function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

//sliding window approach: we create a "window" which is the first n values, then on each iteration of the for loop we simply subtract the first number of the window and add the next number of the array, essentially sliding the window one value over. If the current sum is higher than the current window, we update the window to the current sum and move on. In this way, we avoid a nested loop which makes the above solution quadratic time complexity!

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)