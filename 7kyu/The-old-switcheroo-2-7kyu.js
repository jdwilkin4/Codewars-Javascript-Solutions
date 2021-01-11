/* This is a follow up from my kata The old switcheroo</br/>

Write

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alphabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.

// Bonus point if you don't use toLowerCase() */


// solution
const encode = str => {
  let lowerABC =  str.toLowerCase()
  let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
  let abcString = "abcdefghijklmnopqrstuvwxyz"
  let newStr = ""
  
  for(let i=0; i<lowerABC.length; i++){
    if(lowerABC[i].match(/[0-9#-@!\s\[\]]/)){
      newStr += lowerABC[i]
    }else {
      let findIndex = abcString.indexOf(lowerABC[i])
      newStr += numArr[findIndex] 
    }

  }
  return newStr
}

//test cases
describe('Initial Tests', _ => {
  Test.assertEquals(encode('abc'),'123');
  Test.assertEquals(encode('ABCD'),'1234');
  Test.assertEquals(encode('ZzzzZ'),'2626262626');
  Test.assertEquals(encode('abc-#@5'),'123-#@5');
});