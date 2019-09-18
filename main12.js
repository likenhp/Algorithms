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

        var findNext = Math.min((ugly2, ugly3), ugly5);
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
