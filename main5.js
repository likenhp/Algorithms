/*
say you have an array for which the ith element 
is the price of a given stock on day i
if only permitted to complete at most one transaction either buy or sell
design an algorithm to find the maximum profit

note cannot sell a stock before you buy one

Example:
input: [7,1,5,3,6,4];
output: 5

*/

/*
index position is also the day
*/

var maxProfit = function (prices) {
    //loop through the array to find all values store in a container
    //remember can only go forwards since index position is the day
    //container holds all profits
    var container = [];
    //copy placeholder
    var copy = prices.slice(0);;
    //profit placeholder
    var profit = null;
    //max placeholder
    var max = 0;

    for (var index = 0; index < prices.length; index++) {
        //make a copy of the array
        //value at this day
        var tempIndex = prices[index];
        copy.splice(0, 1);
        for (var index2 = 0; index2 < copy.length; index2++) {
            //value of previous - value of this day
            profit = copy[index2] - tempIndex;
            container.push(profit);
        }
    }
    console.log(container);
    for (var pIndex = 0; pIndex < container.length; pIndex++) {
        if (max < container[pIndex]) {
            max = container[pIndex];
        }

    }
    return max;
}

//fastest way
var maxProfit = function (prices) {
    var minimum = prices[0];
    var maximum = 0;
    for (var index of prices) {
        if (index < minimum) {
            minimum = index;
        } else if (index - minimum > maximum) {
            maximum = index - minimum
        }
    }
    return maximum
}

/*
given a set of candidate numbers or candidates with no duplicates
and a target number, find all unique combinations of candidates where
the candidate numbers sum to the target

can use same number as much as needed
all numbers are positive
solution can't contain duplicates

Example
candidates = [2,3,6,7], target = 7
solution = {
    [7],
    [2,2,3]
}
*/
var combinationSum = function (candidates, target) {
    function combinationSum2(candidates, target) {
        candidates.sort(function (a, b) { return a - b; });
        var buffer = [];
        var result = [];
        search(0, target);
        return console.log(result);

        function search(startIndex, target) {
            if (target === 0) return result.push(buffer.slice());
            if (target < 0) return;
            if (startIdx === candidates.length) return;
            buffer.push(candidates[startIndex]);
            search(startIndex, target - candidates[startIndex]);
            buffer.pop();
            search(startIndex + 1, target);
        }
    }

    combinationSum2([2, 3, 6, 7], 7)

};

/*
Find peak element

peak element is greater than its neighbors, contiguous
given an input array nums, where nums[i] does not equal nums[i+1]
find peak element and return index

array can have multiple peaks
return the index to any one of the peaks is fine

Input: nums = [1,2,3,1]
Output: 2

*/

var findPeakElement = function(nums) {
    var length = nums.length;
    //edge case to see if array is length 1 or if the first position
    //is already a peak
    if (length === 1 || nums[0] > nums[1]){
        return 0;
    }
    //edge case to see if the end of the array is greater than previous position
    //meaning end is already a peak
    if(nums[length - 1] > nums[length -2]){
        return length - 1;
    }
    //loop and check the prev and forward positions
    for(var index = 0; index < length; index++){
        if(nums[index] > nums[index-1] && nums[index] > nums[index+1]){
            return index;
        }
    }
};