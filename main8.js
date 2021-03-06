/*
Candy

there are n children standing in a line
each child is assigned a rating value
you are giving candies to these children subjected to the following reqs
1) each child must have at least one candy
2) children with higher ratings get more candies than their neighbors (by one)
what is min number of candies you must give?

example:
input: [1,0,2]
output: 5

input: [1,2,2]
output: 4
*/
//base candy count will be equal to the length of the array
//loop though the array and check values of neighbors
//if rating of current position is higher than one of the neighbors 
//increase candy count

var candy = function (ratings) {
    //base candy count since all children must have at least one candy
    var baseCandyCount = ratings.length
    var bonusCandy = 0;
    var answer = 0;
    //create an array that loops through values
    for (var index = 0; index < ratings.length; index++) {
        //end is placeholder for last child
        var end = ratings.length - 1;
        //if at index 0 only check the value ahead of it
        if (index === 0) {
            if (ratings[index] > ratings[index + 1]) {
                //only if value is greater does child get more candy
                bonusCandy++;
            }
        }
        //if index is at end make sure to check only value behind it
        if (index === end) {
            if (ratings[index] > ratings[index - 1]) {
                //only if value is greater does child get more candy
                bonusCandy++;
            }
        }
        //if index is not the beginning or end we check both sides
        if (index !== 0 && index !== end) {
            //make placeholders for current, back, and forwards
            var current = ratings[index];
            var forward = ratings[index + 1];
            var backward = ratings[index - 1];

            if (current > backward && (current === forward || current < forward)) {
                bonusCandy++;
            }
            if (current > forward && (current === backward || current < backward)) {
                bonusCandy++;
            }
            if (current > forward && current > backward) {
                bonusCandy++;
            }
        }
        answer = bonusCandy + baseCandyCount;
    }
    return answer;
};

candy([1, 0, 2]);

//Alternative correct way

var candy = function (ratings) {
    var len = ratings.length;
    var forward = new Array(len);
    backward = new Array(len);

    forward[0] = 1;
    backward[len - 1] = 1;
    for (var i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) forward[i] = forward[i - 1] + 1;
        else forward[i] = 1;
    }

    for (var i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) backward[i] = backward[i + 1] + 1;
        else backward[i] = 1;
    }
    var sum = 0;
    for (var i = 0; i < len; i++) {
        sum += Math.max(forward[i], backward[i]);
    }
    return sum;
};

/*
Given 2 words: word1 and word2, find the min number of operations
to convert word1 to word2
you have the following three operations permitted on the word
1) insert character
2) delete character
3) replace a character

example:
word1: horse word2: ros
output is three

var minDistance = function(word1, word2) {
    
};
*/

/*
Find the duplicate number
Given an array nums containing n+1 integers
where each integer is between 1 and n inclusive
prove that at least one duplicate number must exist
assume that there is only one duplicate number
find the duplicate one

example:
input: [1,4,3,2,2]
output: is 2

must not modify the array, assume read only
you must use only constant O(1) extra spaces
you run time should be less than O(n^2)
*/

var findDuplicate = function (nums) {
    //create a container to store each value
    var container = {};
    //loop and store values
    for (var index = 0; index < nums.length; index++) {
        //check if container is already stored
        var current = nums[index];
        //check object own propert to see if value is already contained.
        if (container.hasOwnProperty(current)) {
            return current;
        }
        container[current] = index;
    }
};

/*
Rotate List
Given a linked list rotate the list to the right by k spaces
where k is a non-negative

example:
input: [1,2,3,4,5,null], k = 2
output: [4,5,1,2,3,null] 
rotate one step to the 
*/

var rotateRight = function (head, k) {
    //check if the list exists or if the list continues past one
    if (!head || !head.next) {
        return head;
    }
    var dummy = head;
    var length = 0;
    //while loop to find the length of the linked list
    while (dummy !== null) {
        dummy = dummy.next
        length++
    }
    //modulus operator

    k = k % length
    while (k > 0) {
        node = head;
        while (node.next.next !== null) {
            node = node.next;
        }
        var temp = node.next;
        node.next = null;
        temp.next = head;
        head = temp;
        k--
    }
    return head;

};

/*
Longest Palindrome
Given a string s, find the longest palindromic substring in s
you may assume that the maximum length of s is 1000

example:
input: babad
output: bab

input: cbbd
output: bb
*/

var longestPalindrome = function (s) {

    // Manacher's Algorithm

    // Justify if {string} s is totally palindrome string
    var i
        , len = Math.floor(s.length / 2) + 1
        , isTotalPalindrome = true

    for (i = 0; i < len; i++) {
        if (s[i] != s[s.length - i - 1]) {
            isTotalPalindrome = false
            break;
        }
    }

    if (isTotalPalindrome) return s;

    // preprocess, make {string} s must contain a palindrome of odd length
    s = [].join.call(s, '#')
    s = '$#' + s + '#$'

    var p = []
        , C = 1
        , R = 1
        , iMirror
        , max = 0
        , maxIndex

    for (i = 1; i < s.length - 1; i++) {
        iMirror = 2 * C - i
        p[i] = (R > i) ? Math.min(R - i, p[iMirror]) : 1

        while (s[i - p[i]] == s[i + p[i]]) p[i]++

        if (i + p[i] > R) {
            R = i + p[i]
            C = i
        }

        if (p[i] > max) {
            max = p[i]
            maxIndex = i
        }
    }

    return s.substr(maxIndex - max + 1, 2 * max - 1).replace(/[$#]/g, '')
}

/*
Array Nesting

A zero indexed array A of length n contains all integers form 0 to n-1. 
Find and return the longest length of set s
where s[i] = {A[i], A[A[i]], A[A[A[i]]],...} subjected to the ruled below
1)suppose the first element in s starts with the selection of A[i]
of index = i
2)The next element in s should A[A[i]]
3)by that analogy we stop adding right before a duplicate element occurs in s

example:
input: A = [5,4,0,3,1,6,2]
output: 4
*/

