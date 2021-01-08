/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered! */

//solution
const getSum = ( a,b ) => {
  if(a === b){
    return a 
  }
  
  let min = Math.min(a,b)
  let max = Math.max(a,b)
  
  let sortedArr = []
  
  for(let i=min; i<=max; i++){
   sortedArr.push(i)
  }
  
  return sortedArr.reduce((acc,curr) => acc + curr)
   
}

//test cases
Test.describe("Basic Tests:", function(){
       
  Test.assertEquals(getSum(0,-1),-1);
  Test.assertEquals(getSum(0,1),1);
  
});