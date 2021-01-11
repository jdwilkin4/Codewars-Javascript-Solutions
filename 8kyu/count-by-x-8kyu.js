/* Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10] */

//solution
const countBy = (x, n) => {
  let arr = [];
  let count = 0
  let newX = x
  
  while(count<n){
    arr.push(newX)
    newX += x
    count++
  }
  return arr
}

//test cases
Test.assertSimilar(countBy(1,5), [1,2,3,4,5], "Array does not match")
Test.assertSimilar(countBy(2,5), [2,4,6,8,10], "Array does not match")