Radix Sort
//All of the sorting algorithms covered thus far have an inherent limitation for their time complexity: O(n log n).

//Radix sort is a different sort of algorithm than the already covered "comparison algorithms". Radix sort can perform better in select circumstances because it is not a comparison algorithm.

//Radix sort is typically used on numbers (it can be used on other sorts of data like strings if they are converted to binary first). Radix sort never directly compares elements in a dataset; instead, it uses the built-in information of a number (like the amount of digits) to sort!

Example
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])

//In short, if you need to sort binary, use radix sort. Otherwise, stick to the big boys of mergesort or quicksort. I will come back to this section as time allows, but for now I am prioritizing data structures!