/*
Problem 1

Given a sorted array nums
remove duplicates in-place 
each element appears only once and return a new length
O(1)
no extra array
must modify the current array
*/

/*Example */
//nums = [1,2];
//console.log(nums.length);

/*
step 1 create a function
step 2 random array
step 3 loop through the array and compare
*/

var nums = [1, 1, 2, 3];
function removeDuplicates(nums){
    for(var index = 0; index < nums.length ;index++){
        var temp = index;
        
    }
}

/*
Problem 2

Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be as if it were inserted in order.
assume no duplicates in array

I am given a target
I am given an array
*/

/*
step 1 index = target
step 2 indexOf target in the array
step 3 if target is not in array make a check with values in the array
*/


function searchInsert(nums, target) {
    var nums = [1,3,5,6];
    var target = 5;

    var index = nums.indexOf(target);
    if(index > -1){
        return console.log(index);
    }

    if(nums[0] > target){
        return console.log(0);
    }

    if(nums[nums.length-1]<target){
        return console.log(nums.length);
    }

    for(var index2 = 0; index < nums.length;index++){
        if(nums[index2] < target && nums[index2+1] > target){
            return console.log(index2+1);
        }
    }
};
searchInsert();

/*
Problem 3

Two sum
Given an array of integers
return indices of the two numbers 
such that they add up to a specific number
assume each input has exactly one solution
may not use same element twice

step 1 loop through array
step 2 
*/

function addTwo (nums, target){
nums = [2, 7, 11, 15];
target = 9;

const temp = {};
for(var index = 0; index<nums.length;index++){
    var number = target - nums[index];
    if (temp[number] !== undefined){
        return [temp[number], index]
    }
    temp[nums[index]] = index;
}
};

/*
Problem 4

given an integer array nums
find contiguous sub array (containing at least one number)
which has largest sum and return the sum

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
*/

function Max(nums){
    nums = [-2,1,-3,4,-1,2,1,-5,4];
    var max = nums[0];
    var partial = 0;
    for (var index of nums){
        partial += index;
        max = Math.max(max, partial);
        if(partial < 0){
            partial = 0
        }
    }
    return max;
}

/*
Problem 5

Given two integers dividend and divisor, 
divide two integers without using multiplication, 
division and mod operator.

Return the quotient after dividing dividend by divisor.
The integer division should truncate toward zero.

*/

function divide(dividend, divisor) {
    dividend = 10;
    divisor = 3;
    //expected output = 3
    var answer = null;

    if(dividend === 0 && divisor !== 0){
        return 0;
    };
    if(divisor === 0){
        return "infinity";
    }

    //if expected output is negative 
    var negativeAnswer = (dividend < 0 && divisor > 0 ||
        dividend > 0 && divisor < 0);
    //makes dividend always positive
    absdividend = Math.abs(dividend);
    //makes divisor always positive
    absdivisor = Math.abs(divisor);

    if(absdivisor === 1){
        answer = dividend;
    }else{
        //sum of the divisor repetitions, tracking closeness to dividend
        var sum = null;
        //count of the divisors
        var count = null;

        while(sum + absdivisor <= absdividend){
            // sum of repetitions currently
            var repetitions = absdivisor;
            //current repetitions
            var currentRepetitions = 1;
            while(sum + repetitions + repetitions < absdividend){
                //increasing repetitions
                repetitions += repetitions;
                //increasing repetition counts
                currentRepetitions += currentRepetitions;
            }
            //will be the final sum of repetitions
            sum += repetitions;
            //will be the output and the final repetition for division
            count += currentRepetitions;
        }
        answer = count;
        return answer;
    }
};