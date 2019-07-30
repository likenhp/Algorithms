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

var candy = function(ratings) {
    //base candy count since all children must have at least one candy
    var baseCandyCount = ratings.length
    var bonusCandy = 0;
    var answer = 0;
    //create an array that loops through values
    for(var index = 0; index < ratings.length; index++){
        //end is placeholder for last child
        var end = ratings.length-1;
        //if at index 0 only check the value ahead of it
        if(index === 0){
            if(ratings[index] > ratings[index+1]){
                //only if value is greater does child get more candy
                bonusCandy++;
            }
        }
        //if index is at end make sure to check only value behind it
        if(index === end){
            if(ratings[index] > ratings[index-1]){
                //only if value is greater does child get more candy
                bonusCandy++;
            }
        }
        //if index is not the beginning or end we check both sides
        if(index !== 0 && index !== end){
            //make placeholders for current, back, and forwards
            var current = ratings[index];
            var forward = ratings[index+1];
            var backward = ratings[index-1];

            if(current > backward && (current === forward || current < forward )){
                bonusCandy++;
            }
            if(current > forward && (current === backward || current < backward )){
                bonusCandy++;
            }
            if(current > forward && current > backward){
                bonusCandy++;
            }
        }
        answer = bonusCandy + baseCandyCount;
    }
    return answer;
};

candy([1,0,2]);

//Alternative correct way

var candy = function(ratings) {
    var len = ratings.length;
    var forward = new Array(len);
    backward = new Array(len);

    forward[0] = 1;
    backward[len-1] = 1;
    for (var i = 1; i < len; i++) {
        if (ratings[i] > ratings[i-1]) forward[i] = forward[i-1] + 1;
        else forward[i] = 1;
    }

    for (var i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1]) backward[i] = backward[i+1] + 1;
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

*/
