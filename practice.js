/*
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
*/

var lengthOfLongestSubstring = function(s) {
  let start = 0
  let max = 0 
  let container = {}

  for (let index = 0; index < s.length; index++) {
    if (container[s[index]]) {
      // empty the container
      container = {};
      start++;
      index = start;
    }
    container[s[index]] = true;
    max = Math.max(max, index - start + 1);
  }
};


/**
 * @param {number} N
 * @return {number}
 * 
 * 
Suppose you have N integers from 1 to N. 
We define a beautiful arrangement as an array that is constructed by these N numbers successfully if 
one of the following is true for the ith position (1 <= i <= N) in this array:

The number at the ith position is divisible by i.
i is divisible by the number at the ith position.

N is a positive integer and will not exceed 15

*/

var countArrangement = function(N) {
  let count = 0
  let array = []
  for(let i = 1; i <= N; i++){
    array[i]=i
  }
  findArr(array,[])
  return count
};

function findArr(array,curr){
  if(curr.length === N){
    count++
  }
  if(!array.length){
      return
  }
  for(let i=0;i<array.length;i++){
    if(arrayay[i]%(curr.length+1)==0 || (curr.length+1)%array[i]==0){
      curr.push(array[i])
      findarray(array.filter(a=>a!=array[i]),curr)
      curr.pop()
      }
  }
}