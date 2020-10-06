/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  if (A.length <= 2) {
    return false
  }
  let direction = 1;
  let previous = A[0];

  for (let index = 1; index < A.length; ++index) {
    let current = A[index];
    if (current > previous) {
      if (direction !== 1) {
        return false
      }
      previous = current;
      continue;
    } else if (current < previous) {
      if (index === 1) {
        return false
      }
      direction = 0;
      previous = current;
      continue;
    } else {
      return false;
    }
  }

  return direction === 0 ? true : false;
};

/**
 * @param {number[]} days each int in array always from 1 to 365
 * @param {number[]} costs
 * @return {number}
 * 
  Input: days = [1,4,6,7,8,20], costs = [2,7,15]
  Output: 11
 */
var mincostTickets = function(days, costs) {
    
};

