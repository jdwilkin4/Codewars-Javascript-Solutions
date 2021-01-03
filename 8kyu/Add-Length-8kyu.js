/* Problem:
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space. */


//Solution
const addLength = (str) => {
  let splitStr = str.split(' ');
  let newArr = [];
  
  for(let i=0; i<splitStr.length; i++){
    let word = splitStr[i].concat(" ").concat(splitStr[i].length) 
    newArr.push(word)
  }
  return newArr;
}

//test cases
Test.assertSimilar(addLength('apple ban'),["apple 5", "ban 3"]);
Test.assertSimilar(addLength('you will win'),["you 3", "will 4", "win 3"]);