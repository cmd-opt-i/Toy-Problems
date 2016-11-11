/*
  Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.

  Input:
    "abc"

  Output:
    [ "abc", "acb", "bac", "bca", "cab", "cba" ]
*/

function allAnagrams (string) {
  var anagrams = [];

  function findAllAnagrams(letters, string) {
    // adding to a set so we dont get duplicates
    if (letters.length === 0) {
      anagrams[string] = true;
      return;
    }
  
    for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];
      var newString = string + letter;
      var newLetters = letters.slice(0, i) + letters.slice(i+1);

      findAllAnagrams(newLetters, newString);
    }
  }

  findAllAnagrams(string, '');
  
  return Object.keys(anagrams);
}