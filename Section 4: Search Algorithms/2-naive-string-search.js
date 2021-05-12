// Naive String Search

//  One situation you may encounter is searching for a shorter string within a larger string
//  This section will demonstrate a naive, or unoptimized version of this algorithm. The next section will detail the "KNP" algorithm, which is a fancy pants way of finding a substring within a larger string.

//  A naive string search might look as follows:
//(quadratic t-complexity)

const stringSearchQuadratic = (str1, str2) => {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str2[j] !== str1[i + j]) {
        break;
      }
      if (j === str2.length - 1) {
        count++;
      }
    }
  }
  return count;
};

console.log(stringSearchQuadratic('bobbobbob', 'bob'));

//my solution (linear t-complexity, constant s-complexity)

const stringSearchLinear = (str1, str2) => {
  let p1 = 0;
  let p2 = 0;
  let count = 0;

  do {
    if (str1[p1] === str2[p2]) {
      p1++;
    }
    p2++;
    if (p1 === str1.length) {
      count++;
      p1 = 0;
    }
  } while (p2 < str2.length);

  return count;
};

console.log(stringSearchLinear('bob','bobbobbob'));