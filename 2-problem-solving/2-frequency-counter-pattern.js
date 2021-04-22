// Common Problem Solving Patterns

// //  this section will detail some common problem solving patterns, or methodologies, for algorithmic problems!

// 1. Frequency Counting
//  This pattern utilizes objects or sets to collect values or frequencies of values. More specifically, we break a string or array down into an object in order to harness the time complexity of lookup on objects (O(1)). It is usually O(n) as compared to a simpler solution based on nested for-loops, which as we know will be O(n^2)

//  Example: come up with a function that takes in 2 arrays and returns true if the second array contains squared values of the first, and false otherwise.

//  naive solution
const squareChecker = (arr1, arr2) => {
  if (arr1.length !== arr2.length) { return false; };

  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr[i] ** 2);

    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }

  return true;
};

//  should be O(n^2) time complexity

//  better solution (in terms of time complexity)

const squareChecker2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) { return false; };

  let cache1 = {};
  let cache2 = {};

  for (let el of arr1) {
    cache1[el] = ++cache1[el] || 1;
  }

  for (let el of arr2) {
    cache2[el] = ++cache2[el] || 1;
  }

  for (let key in cache1) {
    if (!(key ** 2) in cache2) {
      return false;
    }

    if (cache2[key ** 2] !== cache1[key]) {
      return false;
    }
  }

  return true;
};

// console.log(squareChecker2([1, 2, 3], [1, 4, 9]));

//  Practice Problem: isAnagram
//  Write a function that takes in two strings and returns true if the second is an anagram of the first! An anagram is a word made from rearranging the same letters of another; eg, iceman is an anagram of cinema. Attempt to come up with a naive solution and then attempt to refactor it usinf the frequency counter pattern to improve time complexity.

//IOCE: two strings, boolean, spaces and special characters do not occur in input, empty string = false

//  naive solution
//  expected time complexity: )(n^2)
const isAnagram = (str1, str2) => {
  //edge case: empty string
  if (str1.length === 0 || str2.length === 0) { return false; };

  //edge case: strings not of equal length
  if (str1.length !== str2.length) { return false; };

  //change string2 into array for comparison purposes so we can use splice
  const strArr = str2.split('');

  //loop over string1, check if current char is present in array2, if not return false if so delete char from array2
  for (let i = 0; i < str1.length; i++) {
    if (!strArr.includes(str1[i])) {
      return false;
    }
    let index = strArr.indexOf(str1[i]);
    strArr.splice(index, 1);
  }

  //return true
  return true;

};

// console.log(isAnagram('iceman', 'cinema'));

const isAnagram2 = (str1, str2) => {
  if (str1.length !== str2.length) { return false; };

  let cache1 = {};
  let cache2 = {};

  for (let char of str1) {
    cache1[char] = ++cache1[char] || 1;
  }

  for (let char of str2) {
    cache2[char] = ++cache2[char] || 1;
  }

  for (let key in cache1) {
    if (cache1[key] !== cache2[key]) {
      return false;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!cache1[str2[i]]) {
      return false;
    }
    cache1[str2[i]] = --cache1[str2[i]];
  }

  return true;
};

console.log(isAnagram2('iceman', 'cinema'));