/*
Minimum Swaps
given an unordered array that consists of consecutive integers
with no duplicates you can swap any two elements
must find the minimum number of swaps required to sort the array in ascending order

input: [7,1,3,2,4,5,6]
output: [1,2,3,4,5,6,7], num of swaps is 5
*/
var array = [7,1,3,2,4,5,6];
function arraySwap (array){
    //makes a copy array
    var copyArray = array.slice(0);
    //sorts the array
    var sortedArray = array.sort(function(a,b){return a-b});
    var swapCount = 0;
    //loop through array
    for (var index1 = 0; index1 < copyArray.length; index1++){
        //checks if sort index is same as the copy
        if (copyArray[index1] !== sortedArray[index1]){
            //loop though array with new index being one ahead
            for (var index2 = index1 + 1; index2 < copyArray.length; index2++){
                //compare the new position's value of the copy to the sorted array
                if(copyArray[index2] === sortedArray[index1]){
                    //if true just swap
                    var temp = copyArray[index2];
                    copyArray[index2] = copyArray[index1];
                    copyArray[index1] = temp;
                    swapCount++;
                }
            }
        }
        console.log(swapCount);
    }
}
arraySwap(array);

/*
Word Seach

given a 2D board and and word
find if the word exists in the grid
the word can be constructed from adjacent cells
can be vertically or horizontally connected
same letter cell may not be used more than once

example: board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
];
*/

/*
Find the first and last element in the sorted array

given an array of sorted ascending integers 
find the starting and ending positions
must be O(logn)
if not found must return [-1,-1]

example:
input:[5,7,7,8,8,10]
target: 
output = [3,4]
*/
var nums = [5,7,7,8,8,10];
var target = 8;
var searchRange = function(nums, target) {
    var container = {};
    for(var index = 0; index < nums.length; index++){
        //store the value and position, value:position
        //use "value:position" since target is a "value"
        container[nums[index]] = index;
    }
    console.log(container);
    //check to see if the target value exists within the object's list of values
    if(container[target]<0){
        return [-1,-1];
    }else{
        return [nums.indexOf(target), container[target]];
    }
};

var searchRange = function(nums, target) {
    var container = [];
    for(var index = 0; index < nums.length; index++){
        if(nums[index] === target){
            if(container.length === 0){
                container[0] = index;
                container[1] = index;
            }else{
                container[1] = index;
            }
        }
    }
    if(container.length === 0){
        return [-1,-1];
    }else{
        return container;
    }
};

searchRange(nums, target);