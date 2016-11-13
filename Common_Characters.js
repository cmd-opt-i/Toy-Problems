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
  var set1 = {}, set2 = {};
  for (var i = 0; i < string1.length; i++) {
    set1[string1[i]] = i;
  }
  for (var i = 0; i < string2.length; i++) {
    if (set1[string2[i]]) {
      set2[string2[i]] = set1[i]
    }
  }
  // check values.. 
  // var sortedString = Object.keys(set2).sort(function(a, b) {
  //   if (a < b) {
  //     return -1;
  //   }
  //   if (a > b) {
  //     return 1;
  //   }
  //   return 0;
  // });
  
  return sortedString;  
};
