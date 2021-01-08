/* Create a function called toTime() that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

Any remaining seconds left over are ignored.

Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)" */


//solution
const toTime = (seconds) => {
  let hours=0;
  let minutes=0;
  
  let count = seconds
  
  //add hours
  while(count>=3600){
    hours++
    count-=3600
  }
  //add minutes
  while(count>=60){
    minutes++
    count-=60
  }
  
  return `${hours} hour(s) and ${minutes} minute(s)`

}

//test cases
Test.assertEquals(toTime(3600), '1 hour(s) and 0 minute(s)');
Test.assertEquals(toTime(3601), '1 hour(s) and 0 minute(s)');
Test.assertEquals(toTime(3500), '0 hour(s) and 58 minute(s)');
Test.assertEquals(toTime(323500), '89 hour(s) and 51 minute(s)');
Test.assertEquals(toTime(0), '0 hour(s) and 0 minute(s)');  