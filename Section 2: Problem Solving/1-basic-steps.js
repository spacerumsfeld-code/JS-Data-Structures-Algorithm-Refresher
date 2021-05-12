Basic Steps of Problem-solving

//  This section will detail the basic steps that one ought to take to solve basic problems!
//  The next section will go into more detail for each of these steps as well as delve into much more specific methods for each.

1. Understand the Problem
//  The first step to solving a problem is actually understanding it. Avoid the temptation to jump right in! Questions to ask yourself and/or the interviewer:

// 1. Can I succesfully restate the problem in my own words
// 2. What are the inputs
// 3. What are the outputs
// 4. What are the edge cases
// 5. What are the constraints
// 6. Can I determine the outputs from the inputs, or is more work required (might not be able to answer right away)
// 7. How should I label the important pieces of data for the problem

//  ask the relevant questions of interviewer rather than assume anything!

2. Develop Concrete Example(s)!
//  The next step is to develop at least one example. Develop examples to gain better understanding of how your function should work. Go in this order: simple inputs, complex inputs, empty inputs, invalid inputs

//  What examples would you come up with for the following task: Create a function that takes in a string and returns counts of each character in the string?
//1. edge case: input is not string (return null?)
//2. single char string (edge case?)
//3. string with one of each char
//4. string with one of one char and at least 2 of another
//5. string with non-letters like numbers
//6. string with upper-case and lower-case of char (does casing matter?)

3. Break It Down
//  Try to conceptualize a high-level plan with steps broken down to solve the problem. This should still be a high-level, conceptual exploration, not coding!

//For example, in the example function in section 2, we might write out the function body and start to think of steps to take that will, in conjunction solve the problem. This will be a pseudocode skeleton absent any specific methods. Here's what that might look like for the above example:

const charCounter = (string) => {
  //  create result object to return

  //  lowercase for entire string, as interviewer determined case does not matter

  //  iterate over string
  //    if char is number or letter, check if in obj already.
  //      if not, add to obj with value of 1
  //      if it is, add 1 to current value

  //return result object
};

//  Always break the problem down in roughly the same passion as above. This gets points on the board for an interview such that, even if you did not solve the problem, the interviewer sees more of your problem-solving process and thought process. Having this stuff on the board is far better than not and just quickly solving the problem.

4. Solve or Simplify
//  Begin solving the problem. There may be points of complexity you do not understand yet; if this is the case, ignore them for now and work on what you DO have a grasp on how to implement. By getting on the board what you do understand, you give your brain time to possibly figure out what you do not yet understand. Additionally, getting these steps on the board is ideal VS getting entirely stuck on what you do not know!

//  This is the process of simplification: ignoring complexity where appropriate to focus on what you do have a better idea of.

5. Revisit / Refactor
//  Having a naive solution is wonderful. But it is likely that there is some way to improve the efficiency or readability of your code. This being the case, it is ideal to revisit your code and see if you can't make any improvements. Here are some questions to ask yourself once you have a solution.

//1. Can you check the result? (duh)
//2. Can you derive the result differently?
//3. What is the time and space complexity of the current solution? Could it be better?
// 4. Can you use the result or method you implemented for some other problem? (code reuse!)
// 5. How have other people solved this problem?


