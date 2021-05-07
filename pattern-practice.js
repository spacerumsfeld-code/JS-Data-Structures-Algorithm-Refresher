// Pattern Practice
// //  Here are some practice problems to get some reps in using the patterns mentioned in Section 2!

// //  Frequency Counter Pattern

// 1. sameFrequency
//  create a function that takes in two integers and returns true if the two integers have the same frequency of digits. Return false otherwise.

//I: two integers
//O: boolean
//C: naive solution fine at first, but aim for O(n) complexity in final solutipn
//E: the two inputs will always be two integers!

//HL: handle edge case where inputs are divergent.
//Once this is done, create an object out of both numbers. Then, loop over one of the objects to check frequency of the other number (represented by the other object). Return true if frequencies match and false otherwise

const sameFreq = (num1, num2) => {
  let num1String = num1.toString();
  let num2String = num2.toString();
  let num1Cache = {};

  if (num1String.length !== num2String.length) {
    return false;
  }

  for (let char of num1String) {
    num1Cache[char] = ++num1Cache[char] || 1;
  }

  for (let char of num2String) {
    if (!num1Cache[char]) {
      return false;
    }
    --num1Cache[char];
  }

  return true;
};

// 2. areThereDuplicates
//  create a function that takes in a variable number of arguments and checks if there are any duplicates among the arguments

//I: arguments can be primitives of any sort
//O: boolean
//C: linear time and space
//E: no relevant edge cases

const noDups = (...arguments) => {
  let cache = arguments.reduce((a, b) => {
    a[b] = ++a[b] || 1;
    return a;
  }, {});

  for (let arg of arguments) {
    if (cache[arg] > 1) { return true; }
  }

  return false;
};

// console.log(noDups(1, 2, 3));
// console.log(noDups('a', 'b', 'b'));

//one-liner:
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// 3. averagePairs
//  create a function that takes in a sorted array of numbers and a target average. this function should return true if any pair of numbers in the array averages out to the target average! There can be more than one pair that does so

//I: array of integers, target average (number);
//O: boolean
///C: O(n) time, O(1) space
//E: nah

const averagePair = (arr, target) => {
  //create pointers
  let start = 0;
  let next = 1;

  //begin pointing at stuff
  while (start < arr.length - 1) {
    if ((arr[start] + arr[next]) / 2 === target) {
      return true;
    }
    if (next === arr.length - 1) {
      start++;
      next = start + 1;
    } else {
      next++;
    }
  };

  //return true or false
  return false;
};

// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));

// 4. isSubsequence
//  write a function that takes in two strings. This function should return 'true' if the first string forms a subsequence of the second string.

//I: two strings
//O: booleean
//C: O(n + m) time, O(1) space; use the multi-pointer strategy
//E: either string empty, return false

//sample inputs
//'hello', 'hello world' // true
//'acb', 'abc' // false (order matters)
//'sting', 'sing' // false (chars do not have to be consecutive);

const isSubsequence = (str1, str2) => {
  if (str1.length === 0 || str2.length === 0) {
    return false;
  }

  let p1 = 0;
  let p2 = 0;

  while (p2 < str2.length) {
    if (str2[p2] === str1[p1]) {
      p1++;
      p2++;
    } else {
      p2++;
    }

    if (p1 === str1.length) {
      return true;
    }
  }
  return false;
};

console.log(isSubsequence('abc', 'acb'));

//  Sliding Window Pattern

// 1. maxSubArraySum
//  Create a function that takes in an array of integers and a separate integer n and returns the highest sum of n consecutive integers in the array!

//I: array of integers, integer as target
//O: number representing highest n consecutive integers added up
//C: O(n), the integers must be consecutive
//E: if no sum for n chars (array is too short), return null

const maxSubArraySum = (arr, n) => {
  if (arr.length < n) { return null ;}

  let largest = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    largest += arr[i];
  }

  temp = largest;

  for (let j = n; j < arr.length; j++) {
    temp = temp - arr[j - n] + arr[j];
    largest = Math.max(largest, temp);
  }

  return largest;
};

console.log(maxSubArraySum([100, 200, 300, 400], 2));

// 2. minSubArrayLength
//create a function that takes in an array of positive integers and a separate positive integer 'n'. The function should return the smallest amount of integers in the array that sum up to greater than or equal to n.

//I: array of +int, +int
//O: int (count of smallest amount of ints adding up to n or greater)
//C: O(n) time, O(1) space
//E: if no nums add to n, return 0. If one integer already higher than or equal to n, return 1!

//sample inputs:
// ([2, 3, 1, 2, 4, 3], 7) // 2

const minSubArrayLength = (arr, n) => {
  let count = 0;
  let min = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= n) {
      return 1;
    }
    sum += arr[i];
    count++;
    if (sum >= n) {
      if (min === 0) {
        min = count;
      } else if (count < min) {
        min = count;
      }
      count = 0;
      sum = 0;
    }
  }
  return min;
};

console.log(minSubArrayLength([2, 3, 1, 2, 4, 3], 7));
