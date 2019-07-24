/*
Merge Intervals

given a collection of intervals
merge all overlapping intervals

example
[[1,3],[2,6],[8,10],[15,18]]
[[1,6],[8,10],[15,18]]

[[1,4],[4,5]]
[[1,5]]
*/

var merge = function(intervals) {
    if(!intervals.length){
        return [];
    }else if (intervals.length < 2){
        return intervals;
    }
    intervals.sort(function(a,b){
        //smaller array elements comes first
        return a[0] - b[0];
    });
    //loop through
    for (var index = 1; index <intervals.length; index++){
        var current = intervals[index];
        var previous = intervals[index-1];
        var currLength = current.length-1;
        var prevLength = previous.length-1;
        if(current[0] <= previous[prevLength]){
            intervals[index] = [Math.min(previous[0],current[0]),Math.max([previous[prevLength]],current[currLength])];
            intervals.splice(index-1,1);
            index--;
        }
    }
    return intervals;
};