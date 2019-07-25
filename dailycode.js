/*
Problem 1

Given a list of numbers and a number k, 
return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, 
return true since 10 + 7 is 17.

can you do this in one pass
*/

//sum means must be positive

function findSum (nums, target){
    //instantiate container to store values for ease of use
    var container = {};
    for (var index = 0; index < nums.length; index++){
        debugger;
        //reduce the target by current value to scan for rest of loop for value
        var tempNumber = target - nums[index];
        //check if the value exists within the container
        //return the values
        if(container[tempNumber] !== undefined){
            var answer = nums[container[tempNumber]]+ " & " + nums[index];
            console.log(answer);
            return answer;
        }
        //place the current value:position into container
        container[nums[index]] = index;
    }
}

findSum([10, 15, 3, 7], 17);

/*
Problem 2

Given an array of integers, 
return a new array such that each element at index i 
of the new array is the product of all the numbers in the original array 
except the one at i.

For example, if our input was [1, 2, 3, 4, 5], 
the expected output would be [120, 60, 40, 30, 24]. 
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

function multiplyIndex(nums){
    for (var index = 0; index < nums.length; index ++){
        var copyArray = nums.slice(0);
        var temp = nums[index];
        if(nums[index-1] === undefined){
            
        }
    }
}

multiplyIndex([1, 2, 3, 4, 5]);
