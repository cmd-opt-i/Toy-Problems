/*
  Write a function that will create an array with every even number between 0 and a provided length (including 0 and not including the length), and then return an array with every one of those numbers multiplied by 3.

  Input:
    100

  Output:
    [ 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258, 264, 270, 276, 282, 288, 294 ]
    
*/

function looper (len) {
  var results = [];
  
  for (var i = 0; i < len; i++) {
    if (i % 2 === 0) {
      results.push(i * 3);
    }
  }
  
  return results;
}
