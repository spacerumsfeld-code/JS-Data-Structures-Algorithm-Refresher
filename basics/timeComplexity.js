// performance.now runs in the browser, so use it in Chrome dev tools! It will not be recognized in this environment. Date.now will function but is a bit less precise. Both are useful

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// var t1 = performance.now();
// addUpTo(1000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

const t1 = Date.now();
addUpTo(100000000);
const t2 = Date.now();
console.log(`time elapsed: ${(t2 - t1) / 1000} seconds`);