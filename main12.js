/*
Practice

Best Time to Buy and Sell Stock III

array for which ith element is the price of a given stock on day i
design an algorithm to find max profit, can complete at most 2  transactions

cannot engage in multiple transactions at the same time (ie. must sell stock before buying again)

Input: [3,3,5,0,0,3,1,4]
Output: 6

*/

var maxProfit = function(prices) {
    
};

/*
Practice

Number of digit 1

given an integer n, count the total number of digit 1 appearing in all non negative integers less than
or equal to n

input: 13
output: 6

*/

var countDigitOne = function(n) {
    var container = [];
    //check if value is less than 0 or NaN
    if(n <= 0 || Number(n)){
        return 0
    }
    //check if value is below 10
    if(n < 10){
        return 1
    }
    for(var i = 0; i < n; i++){

    }

};

countDigitOne(13);