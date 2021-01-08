// Challenge:

// Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

// Example:

// Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

// Addendum:

// Please keep in mind that for this kata, we assume that empty arrays are not homogenous.

// The resultant arrays should be in the order they were originally in and should not have its values changed.

// No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.

//solution
const filterHomogenous = (arrays) => {
  //filter out empty arrays
  let filteredArr = arrays.filter(arr => arr.length > 0)
  
  let newArr = [];
  
  //only add arrays with all numbers or all strings
  for(let i=0; i<filteredArr.length; i++){
   if(filteredArr[i].every(val => typeof val === 'number') || filteredArr[i].every(val => typeof val === 'string')){
     newArr.push(filteredArr[i])
   }
  }
  return newArr
}

//test cases
Test.assertSimilar(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]), [[1, 5, 4], ['b']]);
Test.assertSimilar(filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]), [[123, 234, 432], ['', 'abc'], [''], ['', '1']]);