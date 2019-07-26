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

/*
partition list

given a linked list and the value x
partition it such that all nodes less than x
come before nodes greater than or equal to x

preserve original relative order of the nodes in each of the two partitions
input: head = 1 > 4 > 3 > 2 > 5 > 2; x = 3
output: 1 > 2 > 2 > 4 > 3 > 5
*/

var partition = function(head, x) {
    const dummyLess = new ListNode();
    const dummyMore = new ListNode();
    let node = head;
    let less = dummyLess;
    let more = dummyMore;
    while (node) {
        if (node.val < x) {
            less = less.next = node;
        } else {
            more = more.next = node;
        }
        node = node.next;
    }
    less.next = dummyMore.next;
    more.next = null;
    return dummyLess.next;
};


/*
Best Sightseeing Pair

Given an array A of positive integers, A[i]
represents the value of the ith sightseeing spot
and two sightseeing spots i and j have
distance of j-i between them

score of a pair (i < j) of sightseeing spots is
(A[i]+A[j]-j+i) = 
the sum of the value of the sightseeing spots - the distance between them

return maximum score of the pair of sightseeing spots

example:
input: [8,1,5,2,6]
output: 11
explanation: i = 0, j =2
A[i]+A[j]+i-j = 8 + 5 + 0 - 2 = 11
*/

var maxScoreSightseeingPair = function(A) {
    //temp containers for current max and answer which is 0 at start
    var answer = 0;
    //A[0] is current max
    var maxCheck = A[0];
    for(var index =1; index < A.length; ++index){
        answer = Math.max(A[index] + maxCheck - index, maxCheck);
        maxCheck = Math.max(A[index] + index, maxCheck);
    }
    return answer;
};
