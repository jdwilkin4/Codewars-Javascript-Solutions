// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)


//solution
const splitInParts = (s, partLength) => {
  if(s.length === partLength){
    return s
  }
  
  let newStr = '';
  
  for(let i=0; i<s.length; i+=partLength){
    newStr += s.slice(i,partLength + i)
    newStr += " "
  }
  return newStr.trim()
}

//test cases
Test.assertEquals(splitInParts("supercalifragilisticexpialidocious", 3), "sup erc ali fra gil ist ice xpi ali doc iou s")
Test.assertEquals(splitInParts("HelloKata", 1), "H e l l o K a t a")
Test.assertEquals(splitInParts("HelloKata", 9), "HelloKata")