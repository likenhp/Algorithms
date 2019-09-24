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


/*
Practice
Word Frequency

write a bash script to calc frequency of each word in a text file
words.txt
for simplicity you may assume:
words.txt contains only lowercase chars and space " " chars
each word must consist of lower chars only
words sep by one or more spaces


 */

/*

Practice

Ugly number ii
write a program to find the n ugly number
ugly numbers are positive numbers whose prime factors only include 2, 3, 5

example:
input: n = 10
output: 12

note:
1 is typically treated as an ugly number
n does not exceed 1690
*/

var nthUglyNumber = function(n) {
    if (!n){
        return 0;
    }

    var mult2 = 0;
    var mult3 = 0;
    var mult5 = 0;

    var answer = [1];

    while(!answer[n-1]){
        var ugly2 = answer[mult2] * 2;
        var ugly3 = answer[mult3] * 3;
        var ugly5 = answer[mult5] * 5;

        var findNext = Math.min(Math.min(ugly2, ugly3), ugly5);
        answer.push(findNext);
        if(findNext === ugly2){
            mult2++;
        }else if(findNext === ugly3){
            mult3++;
        }else if (findNext === ugly5){
            mult5++;
        }
    }
    return answer[n-1];
};

/*
Capcity to shift packages within D days

A conveyor belt has packages that must be shipped
from one port to another within D days
the ith package on the conveyor belt has a weight of weights[i]
each day we load the ship with packages on the conveyor belt (in the order given by weights)
we may not load more weigh than the maximum weight capacity of the ship

return the least weight capacity that will result in all the packages 
on the conveyor belt being shipped within D days

notes:
1) 1 <= D <= weights.length <=50000
2) 1 <= weights[i] <=500

example:
input: weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], D = 5
output: 15

need to understand answer
*/

const canShipWithinDays = (weights, D, capacity) => {
    let boats = 1, currentOnBoat = 0;
    for(const weight of weights) {
        currentOnBoat += weight;
        if (currentOnBoat > capacity) {
            ++boats;
            currentOnBoat = weight;
            if (boats > D) break;
        }
    };
    return boats <= D;
};

const shipWithinDays = (weights, D) => {
    const totalWeights = weights.reduce((prev, el) => prev + el, 0);
    let ans = Math.max(Math.max(...weights), Math.ceil(totalWeights / D));
    while (true) {
        if (canShipWithinDays(weights, D, ans)) {
            break;
        }
        ++ans;
    }
    return ans;
};