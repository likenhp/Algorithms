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
            if((ratings[index] > ratings[index-1] || ratings[index] === ratings[index-1]) &&
                (ratings[index] > ratings[index+1] || ratings[index] === ratings[index+1])){
                    bonusCandy++;
                }
        }
        answer = bonusCandy + baseCandyCount;
    }
    return answer;
};

candy([1,0,2]);