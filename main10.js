/* 
Practice 
Longest increasing Subsequence

Given an unsorted array of integers, find the length of longest increasing subsequence

Example:
Input: [10, 9, 2, 5, 3, 7, 101, 18]
output: 4, longest is [2, 3, 7, 101]

note: there may be more than one LIS combo, just return the longest length
should run in O(n^2) complexity 


*/


var lengthOfLIS = function(nums) {
    const container = [];
    //in case nums has no values
    if(nums.length === 0){
        return 0;
    }
    for (let index1 = 0; index1 < nums.length; index1++){
        container.push(1);
        for(let index2 = 0; index2 < index1; index2++){
            if(nums[index2] < nums[index1]){
                container[index1] = Math.max(container[index1],container[index2]+1)
            }
        }
    }
    const answer = Math.max.apply(null,container);
    return answer;
};

/*
Remove invalid Parantheses

Remove the minimum number of invalid parentheses in order to make the input string valid. 
Return all possible results.

example: "()())()"
output: ["()()()", "(())()"]

example: "(a)())()"
output: ["(a)()()", "(a())()"]
*/

var removeInvalidParentheses = function(s) {
    const answer = [];
    
};
