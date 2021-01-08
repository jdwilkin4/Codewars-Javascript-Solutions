// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//solution
const highAndLow = (numbers) => {
  let splitStr = numbers.split(' ');
  let highest = Math.max(...splitStr);
  let lowest = Math.min(...splitStr);
  
  return `${highest} ${lowest}`
}

//test cases
Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
