/*
Best time to buy and sell stocks 3

Say you have an array for which the ith element is the price of a given stock on day i
design an algorithm to find the maximum profit
you may complete at most transactions

note:
may not engage in multiple same transactions at the same time 
i.e: buy and then buy
must sell stock before you buy again

example:
input: [3,3,5,0,0,3,1,4]
output: 6

input: [1,2,3,4,5]
output: 4
*/

var maxProfit = function (prices) {
    //check edge cases first
    if (prices.length <= 0) {
        return 0;
    }

    //array that is a copy but contains nothing
    var empty = new Array(prices.length).fill(0);
    //create this for loop which accounts for two transactions
    for (var transactions = 0; transactions < 2; transactions++) {
        //min container
        var min = prices[0];
        //max container
        var max = 0;
        for (var index = 0; index < prices.length; index++) {
            min = Math.min(min, prices[index] - empty[index]);
            max = Math.max(max, prices[index] - min);
            empty[index] = max;
        }
    }
    return console.log(empty.pop());
};

maxProfit([3, 3, 5, 0, 0, 3, 1, 4]);

/*
Perfect Squares

Given a positive integer N, find the least number of perfect square numbers
(1,9,16,...) which sum to N

example1:
N = 13
output: 2 (is 4 + 9)

example2:
N = 12
output: 3 (is 4+4+4)
*/

var numSquares = function (n) {
    //make a temp container for the answer
    var container = [];

    for (var index1 = 1; index1 <= n; index1++) {
        container[index1] = n;
    }
    //this loop will look for the square numbers
    for (var index2 = 1; (index2 * index2) <= n; index2++) {
        container[index2 * index2] = 1;
    }
    for (var index3 = 1; index3 <= n; index3++) {
        for (var index4 = 1; index4 * index4 < n; index4++) {
            if (container[index3] > container[index3 - index4 * index4] + 1 && index3 > index4 * index4) {
                container[index3] = container[index3 - index4 * index4] + 1;
            }
        }
    }
    return container[n];
};

/*
Word Break
given a non-empty string s and a dictionary called wordDict containing a list
of non-empty words 
determine if s can be segmented into a space seperated sequence
of one or more dictionary words
note:
1) same word in dictionary may be used multiple times
2) you may assume the dictionary does not contain duplicate words

example:
input: s = "leetcode", wordDict = ["leet", "code"]
output: true

input: s = "applepenapple", wordDict =["apple", "pen"]
output: true

input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
output: false
*/

var wordBreak = function (s, wordDict) {
    //make a loop using charAt to find value in the string for wordDict
    //check it against the value of s
    //if true remove it from the string s
    //if no value is found then return from the loop and false

    var container = {};

    //first loop through wordDict
    for (var index = 0; index < s.length; index++) {
        for (var index2 = 0; index2 < index; index2++) {
            var word = s.slice(index2, index + 1);
            if (wordDict.has(word) && (index2 === 0 || container[index2 - 1] === true)) {
                container[index] = true;
            }
        }
    }
    return container[s.length - 1] || false
};

/*
Convert a non negative integer to its english word's representation
given input is guaranteed to be less than (2^31)-1



example:
input:[123]
output:onehundredtwentythree

input: [12345]
input: twelvethousandthreehundredfortyfive

*/

//is in the millions since 2^31-1 is equal to 2147438647
//focus on billion if length is greater than 
//focus on hundred million if length is 9
//focus on ten millions if length is 8
//focus on millions if length is 7
//focus on hundred thousand if length is 6
//focus on ten thousands if length is 5
//focus on thousands if length is 4
//focus on hundreds if length is 3
//focus on tens if length is 2
//normal 0-9 number for if length is 1

var numberToWords = function (num) {
    //store the values of 1-20
    var containerfirst20 = ["one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    //store values by tens
    var containerBy10 = ["twenty", "thirty", "fourty", "fifty",
        "sixty", "seventy", "eighty", "ninety", "hundred"];
    //stores values by thousands, millions, so on
    var containerByL = ["thousand", "million", "billion"];

    //check the value
    if (num < 0) {
        return "error"
    } else if (num === 0) {
        return "zero"
    }

    //first find the length of num
    var length = Math.ceil(Math.log10(num + 1));



};

/*
LRU cache

design an implement a data structure for least recently used (LRU cache)
it should support the following operations
GET and PUT

get(key)- get the value will always be positive of the key if the key exists in the cahce
otherwise return negative 1
put(key, value)- set or insert the value if the key is not already present
when the cache reached its capacity, it should inalidate the least recent used item before inserting
the newest item

cache is initiated with a positive capacity

followup: can you do both in O(1) time complexity?

example:
LRUcache cache= new LRUcache(2/*)

*/

/*
3sum

Given an array nums of n integers, are there elements a,b,c in nums such that
a+b+c = 0 ?
find all unique triplets in the array that give the sum of zero
note the solution set must not contain duplicate triplets

example:
nums = [-1, 0, 1, 2, -1, -4]
solution: [[-1, 0, 1],[-1, -1, 2]]
*/

var threeSum = function (nums) {
    //temp container
    var answer = [];
    var target = 0;
    //sort the array to make it easier to detect
    nums = nums.sort(function (a, b) {
        return a - b;
    })
    if (nums.length < 3) {
        return answer;
    }
    if (nums.length === 3 && (nums[0] + nums[1] + nums[2]) !== 0) {
        return answer;
    }
    //left most value in loop
    for (var left = 0; left < nums.length - 2; left++) {
        if (nums[left] > target) {
            break
        }
        //this will skip over duplicates
        if (left > 0 && nums[left] === nums[left - 1]) {
            continue
        }
        var middle = left + 1;
        var right = nums.length - 1

        while (middle < right) {
            var sum = nums[left] + nums[middle] + nums[right];
            if (sum === target) {
                answer.push([nums[left], nums[middle], nums[right]]);
                while (nums[middle] === nums[middle + 1]) {
                    middle++;
                }
                while (nums[right] === nums[right - 1]) {
                    right--;
                }
                middle++;
                right--;
            } else if (sum < target) {
                middle++;
            } else {
                right--;
            }
        }
    }
    return answer;
};

    threeSum([-1, 0, 1, 2, -1, -4]);

/*
Group Anagrams

given an array of strings group anagrams together

example:
input: [eat,tea,tan,ate,nat,bat]
output: [[ate,eat,tea],[nat,tan],[bat]];

note: all inputs will be lowercase, order does not matter
*/

var groupAnagrams = function(strs) {
    //make a container
    var container = {};
    for(var string of strs){
        var temp = str.split("").sort().join("");
        if(container[temp] === null){
            container[temp] = [str];
        }else{
            container[temp].push(str);
        }
    }
    return Object.values(container);
};

/*
Number of Islands

given a second grid map of '1's (land) and '0's (water), 
count the number of islands
and island is surround by water and formed by connecting adjacent lands
horizontally or vertically
you may assume all four edgeds of the grid are surrounded by water

example: 
input:
[11110]
[11010]
[11000]
[00000]
output is 1

input:
[11000]
[11000]
[00100]
[00011]
output is 3

*/
var numIslands = function(grid) {
    
};
