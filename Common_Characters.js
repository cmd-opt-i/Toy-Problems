/*
  Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

  Your function should return the common characters in the same order that they appear in the first argument.
  Do not return duplicate characters and ignore whitespace in your returned string.

  Ex: 
    Input:
      commonCharacters('acexivou', 'aegihobu')
    Output:
      'aeiou'
*/

commonCharacters = function(string1, string2){
  var ref = {};
  var results = '';
  
  // save string1 chars into set
  for (var i = 0; i < string2.length; i++){
    ref[string2[i]] = false;
  }
  
  // removes spaces
  ref[' '] = null;
  
  // find matching chars from ref and string1
  // concat matches onto results string
  for (var i = 0; i < string1.length; i++){
    if (ref[string1[i]] === false) {
      ref[string1[i]] = true;
      results += string1[i];
    }
  }
  
  return results;
};
