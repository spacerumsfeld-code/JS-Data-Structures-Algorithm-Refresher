Recursion Basics
// //  This section will define recursion, identify the two essential parts of a recursive function, define the two different sorts of recursion we might want to use, and help vizualize the call stack so we can better understand how recursion works

1. What is Recursion?
// //  recursion is the strategy of solving problems by creating a function that invokes itself or an inner helper function repeatedly until a base case or terminating condition is met.

2. Who cares?
// //  Recursion is used all the time in Javascript! Native methods will JSON.stringify and getElementById are covertly recursive. It is also often used to solve some of the stickier problems we will face pertaining to data structures and algorithms; therefore, a solid understanding of recursion is adviseable (required).

// //  In short, recursive solutions can be more elegant than iterative ones and we will definitely make use of them with more advanced data structures.

3. The Call stack
// //  Each programming language has a data structure that handles function execution. In Javascript, the "call stack" is this said data structure. It is literally a stack (the data structure we will cover later)!

// //  Thus, when a function One is invoked, it will be added to the top of the stack, then a function Two is invoked, it will be added to the top of the stack, and so on. Thus, functions will be executed in reverse order of call as they are added to the stack. This is what will happen every time we engage in recursion!

// //  We invoke: One, Two, Three
// //  Stack: Three, Two, One (reverse order that they were added, so Three gets called first, then Two, and so on). The call stack being a stack data structure, functions are executed in LIFO order (last in, first out).

// //  To make a long story short, when a function is invoked, it gets "pushed" to the call stack, and when a function returns, it is "popped" from the call stack.

4. Two Elements of a Recursive function
//  A recursive function has two essential elements: a base case and a recursive case.

//  The base case is the condition that terminates any further recursion; without this, our recursive function will recurse until the heat death of the universe!

//  The Recursive case is the case where we initiate recursion. The function will either call itself or an inner helper function to engage in recursion! Each call should have slightly different inputs or we will keep recursing.

//  sample recursive algorithm and its iterative equivalent

// Recursive Version
// function countDown(num){
//   if(num <= 0) {
//       console.log("All done!");
//       return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }
// countDown(3)

// // Iterative Version
// function countDown(num){
//   for(var i = num; i > 0; i--){
//       console.log(i);
//   }
//   console.log("All done!")
// }

//  factorial recursive
const factorial = (num) => {
  // if (num === 1) { return 1; }
  // return num * factorial(num - 1);
};

console.log(factorial(3));

5. Common errors with recursion
//  No base case. The recursion will run forever!!!! (well, until the max call stack size is exceeded).
//  Forgetting to return, or returning the wrong thing in a given execution context

//Two ways of using recursion (pure recursion or helper function recursion)
6. The Two Patterns of Recursion

//  Helper Method Recursion
//  This pattern of recursion creates an inner function within our primary function. This inner function is the one that is called recursively rather than the outer function. This pattern is commonly used when we need to accumulate data in an outer scope that is not affected by recursion, such as in an array.

//  Example:

function collectOddValues(arr){
  let result = [];

  function helper(helperInput){
      if(helperInput.length === 0) {
          return;
      }
      if(helperInput[0] % 2 !== 0){
          result.push(helperInput[0])
      }
      helper(helperInput.slice(1))
  }
  helper(arr);
  return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])

//  Pure Recursion
//  Pure recursion is another pattern for your recursive activities. Pure recursion does not define any inner functions, but rather entails a recursive function invoking itself.

function collectOddValues(arr){
  let newArr = [];

  if(arr.length === 0) {
      return newArr;
  }

  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5])

//  pure recursion is often a bit trickier than helper method recursion, but is still doable. Some tips are to use array methods like concat and slice (as seen above) as well as the spread operator to generate new arrays rather than mutate them. You may need to do this when accumulating values in an array as there is no execution context where all results can be stored, unlike in helper method recursion. The same goes for strings: rather than modify them (they are immutable anyway, so it's a bit of a mute point), make copies! Finally, for objects use the spread operator or Object.assign.

//see 'recursion practice' in 0-practice-problems for a good collection of problems to solve with pure recursion! Using pure recursion forces us to be acutely aware of what we return in each call, so is helpful practice

//Further Reading
https://en.wikipedia.org/wiki/Call_stack