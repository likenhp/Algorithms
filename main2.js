/*
There are 2 sorted arrays nums1 and nums2
of size m and n
find the median of the two sorted arrays
the run time complexity is O(log (m+n))
*/

var findMedianSortedArrays = function(nums1, nums2) {
    //find the median in each array
    //then take both medians add them together and divide by two

    //concat the two arrays
    var combined = nums1.concat(nums2);
    //sort both arrays
    combined.sort(function(a,b){
        return a - b;
    });
    //checks even value
    var even = combined.length/2;
    //checks if there is a remainder, if so it is odd
    var odd = combined.length % 2;
    
    if(odd > 0){
        var middleOdd = Math.floor(combined.length/2);
        return combined[middleOdd];
    }else {
        var middleEven = (combined[even] + combined[even-1])/2;
        return middleEven;
    }

};

/*
Given an array nums of n integers
and an integer target, find three integers in nums 
such that the sum is closest to the target
return the sum of the three integers
you can assume that each input will have exactly one solution

example: [-1,2,1,-4], target = 1
sum closes will be 2
*/

var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){
        return a - b;
    })

    if (nums.length < 3){
        //if array length is less than three displays error
        return "Error"
    }else if(nums.length === 3){
        //if array length is 3 just add together
        var sum = Math.floor(nums[1]+nums[2]+nums[3]);
        return sum;
    }

    
};

