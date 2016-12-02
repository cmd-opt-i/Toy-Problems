/*
  Given an array of words (array of strings), return all words that are palindromes.

  Input:
    ["word", "Ana", "race car"]

  Output:
    ["Ana", "race car"]
*/

function filterPalindromes (words) {
  var palindromes = words.filter(function(word) {
    if (isPalindrome(word)) {
      return word;
    }
  });
  
  return palindromes;
}

function isPalindrome (input) {
  var word = input.replace(/\s+/g, '');
  var back = 0, front = word.length - 1;

  while (back <= front) {
    if (word[back].toLowerCase() !== word[front].toLowerCase()) {
      return false;
    }
    back++;
    front--;
  }
  
  return true;
}