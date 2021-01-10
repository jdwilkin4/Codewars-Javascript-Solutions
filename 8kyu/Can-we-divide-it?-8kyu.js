// Your task is to create function isDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

//solution
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0 ? true : false
  
//test cases
Test.assertSimilar(isDivideBy(-12, 2, -6), true);
Test.assertSimilar(isDivideBy(-12, 2, -5), false);
Test.assertSimilar(isDivideBy(45, 1, 6), false);
Test.assertSimilar(isDivideBy(45, 5, 15), true);
Test.assertSimilar(isDivideBy(4, 1, 4), true);
Test.assertSimilar(isDivideBy(15, -5, 3), true);
