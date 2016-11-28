/*
  Given an array of negative/positive integers, find the largest element. DO NOT use Math.max

  Input:
    [10, 20, 30]

  Output:
    30
*/

function max (numbers) {
  var largest = null;
  
  for (var i= 0; i < numbers.length; i++) {
    if (largest === null) {
      largest = numbers[i];
    } 
    
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  
  return largest;
}

function max (numbers) {
  return numbers.reduce(function(a, b) {
    return (b > a) ? b : a;
  });
}
