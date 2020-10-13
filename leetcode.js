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
  let minTotal = -1;

  if (days && (days.length <= 365) && costs && (costs.length === 3)) {
    let tempMin;
    let memo = [];
    let isTravelMarkers = [];

    for (let i = 0; i < days.length; i++) {
        isTravelMarkers[days[i]] = true;
    }

    memo[0] = 0;

    for (let i = 1; i < isTravelMarkers.length; i++) {
      if (!isTravelMarkers[i]) {
        memo[i] = memo[i - 1];
      } else {
        tempMin = memo[i-1] + costs[0];
        if (i - 7 >= 0) {
          tempMin = Math.min(tempMin, (memo[i - 7] + costs[1]));
        } else {
          tempMin = Math.min(tempMin, costs[1]);
        }

        if (i - 30 >= 0) {
          tempMin = Math.min(tempMin, (memo[i - 30] + costs[2]));
        } else {
          tempMin = Math.min(tempMin, costs[2]);
        }

        memo[i] = tempMin;

      }
    }

    // the total minimal cost is the one of the last day in the memo[]
    minTotal = memo[memo.length - 1];
  }

  return minTotal;
};

