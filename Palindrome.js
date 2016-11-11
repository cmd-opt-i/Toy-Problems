/*
  Given a string, return true if it’s a palindrome, and false otherwise. Only consider alphabet characters as part of the word.

  Input:
    "race car"

  Output:
    True
*/

function isPalindrome (str) {
  var cleanStr = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  var front = 0, back = cleanStr.length - 1;
  
  while (front <= back) {
    if (cleanStr[front] != cleanStr[back]) {
      return false;
    }
    front++;
    back--;
  }
  
  return true;
}
