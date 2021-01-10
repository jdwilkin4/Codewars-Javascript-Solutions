// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// cockroachSpeed(1.08) == 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


//Solution
const cockroachSpeed = s => Math.floor(s*100000/3600)

//test cases
Test.describe("Basic Tests", function() {
  Test.assertEquals(cockroachSpeed(1.08), 30);
  Test.assertEquals(cockroachSpeed(1.09), 30);
  Test.assertEquals(cockroachSpeed(0), 0);
});
  
   
