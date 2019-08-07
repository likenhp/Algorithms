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
    for (var temp = 0; temp < 2; temp++) {
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
