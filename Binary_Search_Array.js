/*
  Given a sorted array of integers, find the index of a target value using a binary search algorithm.

  A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. The initial interval includes the whole array. If the value of the target value is less than the middle value of the interval, then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value, then the next interval will be the upper half. The search process repeats until the middle value is equal to the target value, or the search interval is empty.

  Note:
  Your function should return -1 for target values not in the array. 

  Input:
    ([11,22,33,44,55], 44)

  Output:
    3
*/

function binarySearch (array, target) {
 var result = -1;
 var start = 0;
 var end = array.length - 1;

 function find (left, right) {
    var midIndex = Math.round((right + left) / 2);

    // 'left' & 'right' come to the same index or overlap
    if (right <= left) {
      // check if value at index is target
      if (array[left] === target) {
       result = left;
      }
      return;
    }

    // check if current middle index is 'target'
    if (array[midIndex] === target) {
      result = midIndex;
      return;
    }

    // check if value at middle index is < or > than 'target'
    if (array[midIndex] > target) {
      find(left, midIndex - 1);
    }
    if (array[midIndex] < target) {
      find(midIndex + 1, right);
    }
 }
 
 find(start, end);
 return result;
}
