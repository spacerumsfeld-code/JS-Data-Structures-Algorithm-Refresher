Space Complexity Basics
//  Space complexity is the amount of space in memory that will be utilized by an algorithm as it accomplishes its task. Big-O notation is also used for space complexity!

//  More specifically, in the context of algorithms, we really care about auzilary space complexity, or the space utilized by the algorithm and its operations, not the space that n takes up. Since n will naturally increase (that's the whole point of assessing time and space complexity), we just care about the algorithm itself in assessing memory or space efficiency.

General Rules of Thumb for Space Complexity
// 1. Primitives have constant space complexity, most of the time (booleans, numbers, etc.)
// 2. Strings have linear space complexity: a string of 5 chars takes up 5 times as much space as a string of 1 char.
// 3. Arrays and objects also have linear space complexity: the amount of space they take up scales with how many elements (arrays) or keys (objects) they have.

Constant Space Complexity Example
// const sum = (array) => {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total;
// };  //this function has constant space complexity. This is because we only deal with a primitive data type, in this case a number. The time complexity is linear, of course, since this is a for loop. But that's different than space complexity!

Linear Space Complexity Example
// const double = (array) => {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(2 * array[i]);
//   }
//   return newArray;
// }; //this function creates a new array, a reference data type which is necessarily linear space complexity. The longer the input array is in this case, the more space will be taken up by the newArray!

Space Complexity Quiz
// 1. function logUpTo(n) {
//   for (var i = 1; i <= n; i++) {
//       console.log(i);
//   }
// } // O(1) space complexity

// 2. function logAtMost10(n) {
//   for (var i = 1; i <= Math.min(n, 10); i++) {
//       console.log(i);
//   }
// }  // O(1) space

// 3. function subtotals(array) {
//   var subtotalArray = Array(array.length);
//   for (var i = 0; i < array.length; i++) {
//       var subtotal = 0;
//       for (var j = 0; j <= i; j++) {
//           subtotal += array[j];
//       }
//       subtotalArray[i] = subtotal;
//   }
//   return subtotalArray;
// }  //  O(n) space. Trick question as time complexity is O(n^2) but not space