// Multi-Pointer Pattern
//  this pattern entails creating two or more "pointers" which refer to a specific item of a collection in question, and then adjusting the location of those pointers to discover a solution.There is no definitive place the pointers must be at; there could be one at the end and at one at the beginning, one at the beginning and one at the very next element, etc. This is a bit more vague than the prior pattern, but necessesarily so. The defining feature is simply using multiple pointers; the examples will make the idea more clear.

//  example: sumZero (naive and then pointer-based)
//  construct a function that takes in an array of values and returns the two values that add up to 0!

//naive (O(n^2) b/c of loop within loop);
function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
          if(arr[i] + arr[j] === 0){
              return [arr[i], arr[j]];
          }
      }
  }
}

// sumZero([-4,-3,-2,-1,0,1,2,5])

//multi-pointer solution (O(n))
const sumZero2 = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++
    }
  }
};

// sumZero([-4,-3,-2,-1,0,1,2,5])

// Example: Count Unique Values
//  Create a function that takes in an array of integers and return the count of "unique" values within them, ie, values that occur only once.
//I: array of integers, positive or negative and sorted ascending
//O: integer representing count of unique values
//C: naive solution, then optimized?
//E: if input array is empty, return 0

//non-pointer solution (O(n))
const countUniqueVals = (arr) => {
  const uniqVals = new Set(arr);
  return uniqVals.size;
};

// console.log(countUniqueVals([1, 1, 1, 1, 2]));
// console.log(countUniqueVals([-2, -1, -1, 0, 1]));
// console.log(countUniqueVals([]));

//  pointer solution: O(n)
  const countUniqueVals2 = (arr) => {
if (arr.length === 0) { return 0; };

let count = 0;
let first = 0;
let second = 1;

while (first < arr.length - 1) {
  if (arr[first] === arr[second]) {
    first++;
    second++;
  }
  if (second === arr.length - 1) {
    first++;
    second = first + 1;
  } else {
    count++;
    second++;
  }
}
  return count;
};

console.log(countUniqueVals2([1, 1, 1, 1, 2]));
console.log(countUniqueVals2([-2, -1, -1, 0, 1]));
console.log(countUniqueVals2([]));
console.log(countUniqueVals2([1,2,2,5,7,7,99]));