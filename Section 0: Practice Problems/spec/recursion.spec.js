const recursion = require('../0-recursion');

  describe('All of our recursive functions should return the proper output and use pure recursion (PR) only', () => {

    describe('Factorial should return the proper output and use PR', () => {
      it('Should return the factorial of an input integer', () => {
        expect(recursion.factorial(5)).toEqual(120);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.factorial.toString().includes('factorial')).toBe(true);
      });
    });

    describe('Sum should return the proper output and use PR', () => {
      it('Should return the sum of an array of integers', () => {
        expect(recursion.sum([1,2,3,4,5,6])).toEqual(21);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.sum.toString().includes('sum')).toBe(true);
      });
    });

    describe('ArraySum should return the proper output and use PR', () => {
      it('Should return the sum of an array of nested arrays', () => {
        expect(recursion.arraySum([1,[2,3],[[4]],5])).toEqual(15);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.arraySum.toString().includes('arraySum')).toBe(true);
      });
    });

    describe('IsEven should return the proper output and use PR', () => {
      it('Should return a boolean indicating if the input integer is even or not', () => {
        expect(recursion.isEven(13)).toBe(false);
        expect(recursion.isEven(10)).toBe(true);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.isEven.toString().includes('isEven')).toBe(true);
      });
    });

    describe('sumBelow should return the proper output and use PR', () => {
      it('Should return a sum of all integers below an input integer', () => {
        expect(recursion.sumBelow(10)).toEqual(45);
        expect(recursion.sumBelow(7)).toBe(21);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.sumBelow.toString().includes('sumBelow')).toBe(true);
      });
    });

    describe('Range should return the proper output and use PR', () => {
      it('Should return all integers within a specified range', () => {
        expect(recursion.range(2, 9)).toEqual([3,4,5,6,7,8]);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.range.toString().includes('range')).toBe(true);
      });
    });

    describe('Exponent should return the proper output and use PR', () => {
      it('Should compute the exponent of a number', () => {
        expect(recursion.exponent(4,3)).toEqual(64);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.exponent.toString().includes('exponent')).toBe(true);
      });
    });

    describe('PowerOfTwo should return the proper output and use PR', () => {
      it('Should determine if a number is a power of two', () => {
        expect(recursion.powerOfTwo(1)).toBe(true);
        expect(recursion.powerOfTwo(16)).toBe(true);
        expect(recursion.powerOfTwo(10)).toBe(false);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.powerOfTwo.toString().includes('powerOfTwo')).toBe(true);
      });
    });

    describe('Reverse should return the proper output and use PR', () => {
      it('Should reverse a string', () => {
        expect(recursion.reverse('tacocat')).toEqual('tacocat');
        expect(recursion.reverse('hello world')).toBe('dlrow olleh');
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.reverse.toString().includes('reverse')).toBe(true);
      });
    });

    describe('Palindrome should return the proper output and use PR', () => {
      it('Should determine if string is a palindrome', () => {
        expect(recursion.palindrome('tacocat')).toBe(true);
        expect(recursion.palindrome('acabaca')).toBe(true);
        expect(recursion.palindrome('argh')).toBe(false);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.palindrome.toString().includes('palindrome')).toBe(true);
      });
    });

    describe('Modulo should return the proper output and use PR', () => {
      it('Should return the remainder of dividing two numbers', () => {
        expect(recursion.modulo(5,2)).toBe(1);
        expect(recursion.modulo(17,5)).toBe(2);
        expect(recursion.modulo(22,6)).toBe(4);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.modulo.toString().includes('modulo')).toBe(true);
      });
    });

    describe('Multiply should return the proper output and use PR', () => {
      it('Should multiply two numbers', () => {
        expect(recursion.multiply(5,2)).toBe(10);
        expect(recursion.multiply(3,7)).toBe(21);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.multiply.toString().includes('multiply')).toBe(true);
      });
    });

    describe('Divide should return the proper output and use PR', () => {
      it('Should return the quotient of two numbers', () => {
        expect(recursion.divide(10,2)).toBe(5);
        expect(recursion.divide(21,3)).toBe(7);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.divide.toString().includes('divide')).toBe(true);
      });
    });

    describe('GCD should return the proper output and use PR', () => {
      it('Should return the greatest common denominator of two positive numbers', () => {
        expect(recursion.gcd(4,36)).toBe(4);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.gcd.toString().includes('gcd')).toBe(true);
      });
    });

    describe('CompareStr should return the proper output and use PR', () => {
      it('Should return whether two strings are identical or not', () => {
        expect(recursion.compareStr('tomato', 'tomato')).toBe(true);
        expect(recursion.compareStr('tomato', 'cheese')).toBe(false);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.compareStr.toString().includes('compareStr')).toBe(true);
      });
    });

    describe('ReverseArr should return the proper output and use PR', () => {
      it('Should reverse an input array\'s elements', () => {
        expect(recursion.reverseArr([1,2,3,4])).toStrictEqual([4,3,2,1]);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.reverseArr.toString().includes('reverseArr')).toBe(true);
      });
    });

    describe('BuildList should return the proper output and use PR', () => {
      it('Should create a new array out of the input value and length', () => {
        expect(recursion.buildList(0,5)).toStrictEqual([0,0,0,0,0]);
        expect(recursion.buildList(7,3)).toStrictEqual([7,7,7]);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.buildList.toString().includes('buildList')).toBe(true);
      });
    });

    describe('FizzBuzz should return the proper output and use PR', () => {
      it('Should return an array congruent with the FizzBuzz problem', () => {
        expect(recursion.fizzBuzz(5)).toStrictEqual(['1','2','Fizz','4','Buzz']);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.fizzBuzz.toString().includes('fizzBuzz')).toBe(true);
      });
    });

    describe('CountOccurrence should return the proper output and use PR', () => {
      it('Should return a count of the occurrence of an input value in a list', () => {
        expect(recursion.countOccurrence([1,2,2,3],2)).toBe(2);
        expect(recursion.countOccurrence([2,'banana',4,4,'banana'], 'banana')).toBe(2);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.countOccurrence.toString().includes('countOccurrence')).toBe(true);
      });
    });

    describe('rMap should return the proper output and use PR', () => {

      let timesTwo = (val) => {
        return val * 2;
      }

      it('Should emulate the native map method', () => {
        expect(recursion.rMap([1,2,3], timesTwo)).toStrictEqual([2,4,6]);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.rMap.toString().includes('rMap')).toBe(true);
      });
    });

    describe('CountKeysInObj should return the proper output and use PR', () => {
      it('Should return the count of the amount of times a given key occurs in an object', () => {

        let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
        expect(recursion.countKeysInObj(obj,'r')).toBe(1);
        expect(recursion.countKeysInObj(obj,'e')).toBe(2);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.countKeysInObj.toString().includes('countKeysInObj')).toBe(true);
      });
    });

    describe('CountValuesInObj should return the proper output and use PR', () => {
      it('Should return the count of the amount of times a given value occurs in an object', () => {

        let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
        expect(recursion.countValuesInObj(obj,'r')).toBe(2);
        expect(recursion.countValuesInObj(obj,'e')).toBe(1);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.countValuesInObj.toString().includes('countValuesInObj')).toBe(true);
      });
    });

    describe('ReplaceKeysInObj should return the proper output and use PR', () => {
      it('Should replace a given key with another in an object', () => {
        let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
        let obj2 = {'e':{'x':'y'},'t':{'x':{'e':'r'},'p':{'y':'r'}},'y':'e'};
        expect(recursion.replaceKeysInObj(obj,'r','x')).toStrictEqual(obj2);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.replaceKeysInObj.toString().includes('replaceKeysInObj')).toBe(true);
      });
    });

    describe('Fibonacci should return the proper output and use PR', () => {
      it('Should get the first n Fibonacci numbers', () => {
        expect(recursion.fibonacci(5)).toStrictEqual([0,1,1,2,3,5]);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.fibonacci.toString().includes('fibonacci')).toBe(true);
      });
    });

    describe('NthFibo should return the proper output and use PR', () => {
      it('Should get the first n Fibonacci numbers', () => {
        expect(recursion.nthFibo(5)).toEqual(5);
        expect(recursion.nthFibo(7)).toEqual(13);

      });

      it('Should make use of pure recursion', () => {
        expect(recursion.nthFibo.toString().includes('nthFibo')).toBe(true);
      });
    });

    describe('CapitalizeWords should return the proper output and use PR', () => {
      it('Should apply caps lock to all words in an input array', () => {
        expect(recursion.capitalizeWords(['i', 'am', 'learning', 'recursion'])).toStrictEqual(['I','AM','LEARNING','RECURSION']);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.capitalizeWords.toString().includes('capitalizeWords')).toBe(true);
      });
    });

    describe('CapitalizeFirst should return the proper output and use PR', () => {
      it('Should capitalize the first character of every string in an input array', () => {
        expect(recursion.capitalizeFirst(['car','banana'])).toStrictEqual(['Car','Banana']);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.capitalizeFirst.toString().includes('capitalizeFirst')).toBe(true);
      });
    });

    describe('NestedEvenSum should return the proper output and use PR', () => {
      it('Should get the first n Fibonacci numbers', () => {
        let obj1 = {
            a: 2,
            b: {b: 2, bb: {b: 3, bb: {b: 2}}},
            c: {c: {c: 2}, cc: 'ball', ccc: 5},
            d: 1,
            e: {e: {e: 2}, ee: 'car'}
          };
        expect(recursion.nestedEvenSum(5)).toEqual(10);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.nestedEvenSum.toString().includes('nestedEvenSum')).toBe(true);
      });
    });

    describe('Flatten should return the proper output and use PR', () => {
      it('Should flatten an array containing nested arrays', () => {
        let arr1 = [1,[2],[3,[[4]]],5];
        let arr2 = [1,2,3,4,5];
        expect(recursion.flatten(arr1)).toStrictEqual(arr2);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.flatten.toString().includes('flatten')).toBe(true);
      });
    });

    describe('LetterTally should return the proper output and use PR', () => {
      it('Should return obj with count of chars in an input string', () => {
        let string = 'potato';
        let obj1 = {p: 1, o:2, t:2, a:1};
        expect(recursion.letterTally(string)).toStrictEqual(obj1);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.letterTally.toString().includes('letterTally')).toBe(true);
      });
    });

    describe('Compress should return the proper output and use PR', () => {
      it('Should return an input array with all duplicates removed', () => {
        let arr1 = [1,2,2,3,4,4,5,5,5];
        let arr2 = [1,2,3,4,5];
        expect(recursion.compress(arr1)).toStrictEqual(arr2);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.compress.toString().includes('compress')).toBe(true);
      });
    });

    describe('AugmentElements should return the proper output and use PR', () => {
      it('Should return obj with count of chars in an input string', () => {
        let arr1 = [1,2,2,3,4,4,5,5,5];
        let arr2 = [1,2,3,4,5];
        expect(recursion.augmentElements(arr1)).toStrictEqual(arr2);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.augmentElements.toString().includes('augmentElements')).toBe(true);
      });
    });

    describe('MinimizeZeroes should return the proper output and use PR', () => {
      it('Should reduce an array containing series of zeroes to 1 zero for each series', () => {
        let arr1 = [2,0,0,0,1,4];
        let arr2 = [2,0,1,4];
        expect(recursion.minimizeZeroes(arr1)).toStrictEqual(arr2);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.minimizeZeroes.toString().includes('minimizeZeroes')).toBe(true);
      });
    });

    describe('AlternateSign should return the proper output and use PR', () => {
      it('Should alternate the signs of an input array of integers /w the first sign being positive, regardless of original sign', () => {
        let arr1 = [2,7,8,3,1,4];
        let arr2 = [2,-7,8,-3,1,-4];
        expect(recursion.alternateSign(arr1)).toStrictEqual(arr2);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.alternateSign.toString().includes('alternateSign')).toBe(true);
      });
    });

    describe('NumToText should return the proper output and use PR', () => {
      it('Should take an input string and convert its digits to their word equivalent', () => {
        let string = "I have 5 dogs and 6 ponies";
        let string2 = "I have five dogs and six ponies";
        expect(recursion.numToText(string)).toEqual(string2);
      });

      it('Should make use of pure recursion', () => {
        expect(recursion.numToText.toString().includes('numToText')).toBe(true);
      });
    });

  });