/* You're given two integers – n and k. n is always positive, while k >= 0. Write a function that returns first k odd digits in a number n.

The output should also be an integer.

In the following cases a function should return 0:

there are no odd digits in a number n;
k is bigger than a number of digits in n;
k = 0;
k is bigger than a number of odd digits in n.
BTW, is 0 an odd number or an even one? */

//solution
const findOddDigits = (n, k) => {
  //create an array of numbers
  let numArr = Array.from(String(n), Number);
  //create an odd number array
  let oddNumsArr = numArr.filter(num => num%2 !== 0) 
  //count of all odd numbers
  let totalOfOddNums = oddNumsArr.length
  
  // return 0 if condition is true
  if(totalOfOddNums === 0 || k===0 || k>totalOfOddNums){
    return 0
  }
  
  //1st k odd digits in n
  let numStr = ""
  for(let i=0; i<k; i++){
    numStr += oddNumsArr[i]
  }
  
  return parseInt(numStr,10)
  
}

//test cases
Test.assertEquals(findOddDigits(123456789111, 5), 13579, 'Should return first k odd digits in a given number!');
Test.assertEquals(findOddDigits(7459274655920285, 8), 75975595, 'Should return first k odd digits in a given number!');
Test.assertEquals(findOddDigits(0, 100), 0, 'Oops, the given number length is less than k!');
Test.assertEquals(findOddDigits(103756254800023, 2), 13, 'Should return first k odd digits in a given number!');
Test.assertEquals(findOddDigits(20406886, 6), 0, 'Oops, there are no odd digits in a given number');
Test.assertEquals(findOddDigits(11111333333307, 13), 1111133333337, 'Should return first k odd digits in a given number!');
Test.assertEquals(findOddDigits(30982, 3), 0, 'Oops, k is bigger than a number of odd digits in a given number!');