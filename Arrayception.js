/*
  Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.

  Ex:
    Input:
      [ [ 5 ], [[[]]] ]
    Output: 2
*/

function arrayception (array) {
  var str = JSON.stringify(array);
  var maxDepth = 0;
  var curDepth = 0;

  for (var i = 0; i < str.length; i++) {
    var curr = str[i];

    if (curr === '[') {
      curDepth++;
    } else if (curr === ']') {
      curDepth--;
    } else {
      // console.log('current curr', curr);
      if (curr !== ',' && curDepth >= maxDepth) {
        maxDepth = curDepth;
      }
    }
  }
    
  return maxDepth;
}