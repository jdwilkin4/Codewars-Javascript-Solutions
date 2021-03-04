//Challenge
/* Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

  sumStr("4", "5")    // should output "9"
  sumStr("34", "5")   // should output "39"
If either input is an empty string, consider it as zero. */

//solution
const sumStr = (a,b) => {
  let sum = ""
  if(a===""){
    a=0
  }
  if(b===""){
    b=0
  }
  sum += parseInt(a,10) + parseInt(b,10)
  return sum
}

//test cases
Test.assertEquals(sumStr("4","5"), "9");
Test.assertEquals(sumStr("34","5"), "39");
