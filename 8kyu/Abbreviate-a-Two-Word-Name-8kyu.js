/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F */

//solution
function abbrevName(name){
  let capital = name.toUpperCase()
  let splitStr = capital.split(' ')
  return splitStr[0].slice(0,1).concat(".").concat(splitStr[1].slice(0,1)) 
}

//test cases
Test.assertEquals(abbrevName("Sam Harris"), "S.H");
Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
Test.assertEquals(abbrevName("Evan Cole"), "E.C");
Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
Test.assertEquals(abbrevName("David Mendieta"), "D.M");