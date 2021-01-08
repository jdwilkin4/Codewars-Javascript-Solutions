// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//solution
const getCount = str => {
  let vowelsCount = 0;
  
  for(let i=0; i<str.length; i++){
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o"|| str[i] === "u"){
      vowelsCount++
    }
  }
  
  return vowelsCount;
}

//test cases
const chai = require("chai");
const assert = chai.assert;

describe("Case 1", function(){
    it ("should be defined", function(){
        assert.strictEqual(getCount("abracadabra"), 5)
    });
});
