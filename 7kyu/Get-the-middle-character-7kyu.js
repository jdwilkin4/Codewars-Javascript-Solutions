// You are going to be given a word. 
// Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.


//solution
const getMiddle = s => {
  let word = s.length;
  
  return word % 2 === 0 ? s.substring(word/2 - 1, word/2 + 1) : s.substring((word-1)/2, (word-1)/2 + 1)
  
}

//test cases
Test.describe("GetMiddle", function() {
  Test.it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});