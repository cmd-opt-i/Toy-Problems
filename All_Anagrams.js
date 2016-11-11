/*
  Create a function that takes two arrays and determine whether the second array is a subset of the first array. Arrays will only contain primitive values.

  Ex. 1:
    Input: 
      isSubset ( [1,2,3,4], [3,4] );

    Output:
      True
      
  Ex. 2:
    Input: 
      isSubset ( [1,2,3,4], [3,4,5] );

    Output:
      False
  
*/

function isSubset (array, sub) {
  // Edge cases
  if (!Array.isArray(array) || !Array.isArray(sub)) { return false; }
  if (array.length < sub.length) { return false; }
  if (sub.length === 0) { return true; }

  var keys = {};
  
  // Save all chars from the 'array' into a set
  for (var i = 0; i < array.length; i++) {
    keys[array[i]] = array[i]; 
  }

  // Compare chars from 'sub' array from 'keys'
  // if any are found delete else not a subset
  for (var i = 0; i < sub.length; i++) {
    if (keys[sub[i]] === sub[i]) {
      delete keys[sub[i]];
    } else {
      return false;
    }
  }

  return true;
}
