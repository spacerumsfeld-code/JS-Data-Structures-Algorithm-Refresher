//  Naive timing is the method of using basic timers to assess the efficiency of code. One can either use the Date.now() method as is done below, or performance.now() in the browser (chrome dev tools). These methods allow a basic assessment of efficiency of code.

//  That being said, they are called 'naive' for a reason. They are imprecise. They vary quite a bit based on the machine the assessment is running on. For these reasons and more, naive timing is not ideal for assessing code efficiency. It is better than nothing, but still leaves significant motivation for a more reliable method (hence, the contineud need for Big-O!).

//  method1
const stringReverser = (string) => {
  const stringArray = [...string];
  return stringArray.reverse().join('');
};

let t1 = Date.now();
stringReverser("ab".repeat(100_000));
let t2 = Date.now();
console.log((t2 - t1));

//  method2
const stringReverser2 = (string) => {
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};

let t3 = Date.now();
stringReverser("ab".repeat(100_000));
let t4 = Date.now();
console.log((t4 - t3));