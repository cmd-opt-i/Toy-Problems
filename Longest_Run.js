/*
  Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
  If there are two runs of equal length, return the first one. Return [0,0] for no runs.

  Input:
    "abbbcc"

  Output:
    [1, 3]
*/

function longestRun (string) {
  var longestCounter = 0, currCounter = 0;
  var longestRunArr = [0, 0];
  var sLetter = null, eLetter = null;
  var sIndex = null, eIndex = null;
  
  for (var i = 0; i < string.length; i++) {
    var currLetter = string[i];

    if (i === 0) {
      sLetter = string[i];
      sIndex = 0;
    } else if (currLetter === sLetter) {
      eLetter = currLetter;
      eIndex = i;
      currCounter++;

      if (currCounter > longestCounter) {
        longestCounter = currCounter;
        longestRunArr[0] = sIndex;
        longestRunArr[1] = eIndex;
      }
    } else {
      currCounter = 0;
      sLetter = string[i];
      sIndex = i;
    }
  }
    
  return longestRunArr;
}
