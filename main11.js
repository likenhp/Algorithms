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

var numSquares = function(n) {
    //make a temp container for the answer
    var container = [];

    for(var index1 = 1; index1 <= n; index1++){
        container[index1] = n;
    }
    //this loop will look for the square numbers
    for(var index2 = 1; (index2*index2) <= n; index2++){
        container[index2*index2] = 1;
    }
    for (var index3=1; index3<=n; index3++){
        for(var index4=1; index4*index4<n; index4++){
            if(container[index3]>container[index3-index4*index4]+1 && index3>index4*index4){
                container[index3]=container[index3-index4*index4]+1;
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

var wordBreak = function(s, wordDict) {
    //make a loop using charAt to find value in the string for wordDict
    //check it against the value of s
    //if true remove it from the string s
    //if no value is found then return from the loop and false

    //first loop through wordDict
    for(var dictIndex = 0; dictIndex < wordDict.length; dictIndex++){
        var word = wordDict[dictIndex];
        for(var wordIndex = 0; wordIndex < word.length; wordIndex++){
            
        }
    }
};
