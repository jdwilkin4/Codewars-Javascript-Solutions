// Time to test your basic knowledge in functions! Return the odds from a list:

// odds([1,2,3,4,5]) #=> [1,3,5]

//Solution
const odds = values => values.filter(num => num % 2 !== 0);

//test cases
Test.assertSimilar(odds([]), [], "Should handle empty array");
Test.assertSimilar(odds([2, 4, 6]), [], "Should handle array with even numbers only");
Test.assertSimilar(odds([1, 3, 5]), [1, 3, 5], "Should handle array with odd numbers only");
Test.assertSimilar(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5], "Should handle mixed array");
