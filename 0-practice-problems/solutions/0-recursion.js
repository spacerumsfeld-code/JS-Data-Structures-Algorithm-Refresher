/* --------------------- Recursion Solutions -------------------- */
// 1. Find the factorial of an input integer
var factorial = function(n) {
  if (n <= 1) { return 1; }
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
var sum = function(arr) {
  if (arr.length === 0) { return 0; }
  return arr[0] + sum(arr.slice(1));
};


// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(arr) {
  let sum = 0;
  for (const num of arr) {
    if (Array.isArray(num)) {
      sum += arraySum(num);
    } else {
      sum += num;
    }
  }
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n <= 1) {
    if (n === 0) {
      return true;
    } else {
      return false;
    }
  }
  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 1) { return 0; }
  return n - 1 + (sumBelow(n - 1));
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if (x === y - 1) { return []; }
  return [x + 1].concat(range(x + 1, y));
};
// console.log(range(2, 9));

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) { return 1; }
  return base * exponent(base, exp - 1);
};
// console.log(exponent(8, 2));

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n < 2 && n !== 1 && n !== 2) {
      return false;
  }
  if (n === 2 || n === 1) {
      return true;
  } else {
      return powerOfTwo(n / 2);
  }
};
// console.log(powerOfTwo(16));

// 9. Write a function that reverses a string.
var reverse = function(str) {
  if (str.length === 0) { return str; }
  return reverse(str.slice(1)) + str[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(str) {
  if (str.length == 0) { return str; }
  return palindrome(str.slice(1)) + str[0];
};
// console.log(palindrome('tacocat'));

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 || str1.length === 0) {
    return str1 === str2;
  }
  if (str1[0] !== str2[0] || str1[str1.length - 1] !== str2[str2.length - 1]) { return false; }
  return compareStr(str1.slice(1, str1.length - 1), str2.slice(1, str2.length - 1));
};
// console.log(compareStr('tomato', 'tomato'));

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 0) { return []; }
  return [str[0]].concat(createArray(str.slice(1)));
};
// console.log(createArray('helloworld'));

// 17. Reverse the order of an array
var reverseArr = function(arr) {
  if (arr.length === 0) { return []; }
  return [arr[arr.length - 1]].concat(reverseArr(arr.slice(0, arr.length - 1)));
};
// console.log(reverseArr([1, 2, 3, 4]));

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) { return []; }
  return [value].concat(buildList(value, length - 1));
};
// console.log(buildList(0, 5));

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(arr, value) {
  if (arr.length === 0) { return 0; }
  if (arr[0] === value) {
    return 1 + countOccurrence(arr.slice(1), value);
  } else {
    return 0 + countOccurrence(arr.slice(1), value);
  }
};
// console.log(countOccurrence([2,'banana',4,4,1,'banana'], 'banana'));

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

const timesTwo = (el) => {
  return el * 2;
}

var rMap = function(array, callback) {
  let result = [];
  if (!array.length) { return []; }
  result.push(callback(array.shift()));
  return result.concat(rMap(array, callback));
};

console.log(rMap([1,2,3], timesTwo));

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
function capitalizeWords (arr) {
  if (arr.length === 0) { return []; }
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
function capitalizeFirst (arr) {
  if (arr.length === 0) { return []; }
  return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)));
}

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
function nestedEvenSum (o) {
  let sum = 0;

  for (let key in o) {
      if (typeof o[key] === 'object') {
          sum += nestedEvenSum(o[key]);
      } else {
          if (o[key] % 2 === 0) {
            sum += o[key];
          }
      }
  }
  return sum;
}

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
function flatten(arr){
  let result = [];
for (let el of arr) {
    if (Array.isArray(el)) {
        result = result.concat(flatten(el));
    } else {
        result.push(el);
    }
}
return result;
}

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0) { return obj; }
  obj[str[0]] = ++obj[str[0]] || 1;
  return letterTally(str.slice(1), obj);
};
// console.log(letterTally('potato'));

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

const recursion = { factorial, sum, arraySum, isEven, sumBelow, range, exponent, powerOfTwo, reverse, palindrome, modulo, multiply, divide, gcd, compareStr, createArray, reverseArr, buildList, fizzBuzz, countOccurrence, rMap, countKeysInObj, countValuesInObj, replaceKeysInObj, fibonacci, nthFibo, capitalizeWords, capitalizeFirst, nestedEvenSum, flatten, letterTally, compress, augmentElements, minimizeZeroes, alternateSign, numToText };

module.exports = recursion;