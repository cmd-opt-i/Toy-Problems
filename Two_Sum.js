/*
  You are given an array of numbers and a target value. Return the indices of the first two numbers within the array that add up to the target value as a tuple, and an empty array if no such numbers exist.

  Input:
    ([1,2,3,4], 5) 
  Output:
    should return [1,2] rather than [0,3].
*/

function twoSum (array, target) {
  var counter = 1;
  
  while (counter < array.length) {
    var i = 0;
    var j = 0;
    
    while (j < array.length) {
      j = i + counter;
      
      if ((array[i] + array[j]) === target) {
        var results = [];
        results.push(i);
        results.push(j);
        return results;
      }
      
      i++;
    }
    
    counter++;
  }
  
  return [];
}
