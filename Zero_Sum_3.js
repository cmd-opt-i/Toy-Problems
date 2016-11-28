/*
  Given an array of negative/positive integers, return true if there exists three numbers whose sum is zero.

  Input:
    [1, 3, 2, -3]
  Output:
    True
        
*/

function zeroSum3 (numbers) {
  if (numbers.length < 3) {
    return false;
  }
  var first = 0, second = 0, third = 0;
  
  for (var index1 = 0; index1 < numbers.length - 2; index1++) {
    first = numbers[index1];
    for (var index2 = index1 + 1; index2 < numbers.length - 1; index2++) {
      second = numbers[index2];
      for (var index3 = index2 + 1; index3 < numbers.length; index3++) {
        third = numbers[index3];
        if (first + second + third === 0) {
          return true;
        }
      }
    }  
  }
  
  return false;
}
