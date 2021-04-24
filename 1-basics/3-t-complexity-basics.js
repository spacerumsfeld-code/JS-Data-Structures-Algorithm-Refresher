Time Complexity Basics
//  This section will discuss the three most basic forms of Big-O: constant time, linear time, and quadratic time. We will cover the basic definitions of each, as well as provide an example for each type in order to solidify understanding.

//  Time Complexity: how the time it takes for an algorithm to complete its task takes relative to n, or the amount of inputs. it is a simplified, rough restimate of worst-case time it takes for an algorithm to complete its task

 Constant Time - O(1)
//  Constant time is the ideal time complexity: the algorithm takes the same amount of time regardless of the size of n!

//  example:
function addUpTo(n) {
  return n * (n + 1) / 2;
}  // no matter how large n grows, this function will only ever perform 3 operations to find their total sum

 Linear Time - O(n)
//  Linear time is a decidedly middle-of-the-road time complexity. As n grows, time complexity will grow in a proportional fashion. So, if we want to look over a string with 10 characters and then with 20 characters, time will grow proportionally with the 20 characters. Any additional operations are simplified out of the Big-O notation: so if we actually needed to perform 2 operations per character of the string such that strictly speaking time complexity is O(2n), we would simplify that to O(n). We do not care about that level of detail!

//  example
 for (let i = 0; i < 10; i++) {
  console.log(i);
}

 Quadratic Time - (n^2)
//  Quadratic time complexity is nasty and you want to avoid it. An example of time complexity is a for loop within a for loop: a for loop's t-complexity is the length of the loop times the complexity of the operation within each loop; so, since loops are linear t-complexity, n * n = n^2, or quadratic time complexity.

//  example
 for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        console.log(i, j);
      }
}

//  quiz - Simplify the following expressions
//  1. O(n + 100)
//  2. O(n * 10000)
//  3. O(30)
//  4. O(n^2 + n^3)


//  5. Determine the time complexity for the following functions
// function logUpTo(n) {
//   for (var i = 1; i <= n; i++) {
//       console.log(i);
//   }
// }  // O(n)

//  6. function logAtMost10(n) {
//     for (var i = 1; i <= Math.min(n, 10); i++) {
//         console.log(i);
//     }
// }  // O(1)

//  7. function logAtLeast10(n) {
//   for (var i = 1; i <= Math.max(n, 10); i++) {
//       console.log(i);
//   }
// }  // O(n)

//  8. function onlyElementsAtEvenIndex(array) {
//     var newArray = Array(Math.ceil(array.length / 2));
//     for (var i = 0; i < array.length; i++) {
//         if (i % 2 === 0) {
//             newArray[i / 2] = array[i];
//         }
//     }
//     return newArray;
// }  // O(n)

//  9. function subtotals(array) {
//     var subtotalArray = Array(array.length);
//     for (var i = 0; i < array.length; i++) {
//         var subtotal = 0;
//         for (var j = 0; j <= i; j++) {
//             subtotal += array[j];
//         }
//         subtotalArray[i] = subtotal;
//     }
//     return subtotalArray;
// } // O(n^2)