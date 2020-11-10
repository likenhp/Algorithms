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
  // let res = []
  let count = 0
  function findArr(array,curr){
    if(curr.length === N){
      // res.push([...curr])
      count++
    }
    if(!array.length){
        return
    }
    for(let i=0;i<array.length;i++){
      if(arrayay[i] % (curr.length+1) === 0 || (curr.length+1) % array[i] === 0){
        curr.push(array[i])
        findarray(array.filter(a=>a!=array[i]),curr)
        curr.pop()
        }
    }
  }
  let array = []
  for(let i=1;i<=N;i++){
    array[i]=i
  }
  findArr(array,[])
  // console.log(res)
  return count
};

/**
 * @param {number[]} citations
 * @return {number}
 * 
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."
 */

var hIndex = function(citations) {
  let length = citations.length
  let index = 0;
  const bucket = Array(length+1).fill(0);
  
  for(let n of citations) {
      if(n >= length) bucket[length]++;
      else bucket[n]++;
  }
  
  for(let i = 0; i < bucket.length; i++) {
      if(!bucket[i]) continue;
      index = Math.max(index, Math.min(len, i));
      len -= bucket[i];
  }
  return index; 
};

/**
 * Single Number III
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 
 * Input: nums = [1,2,1,3,2,5]
  Output: [3,5]
  Explanation:  [5, 3] is also a valid answer.
 */
var singleNumber3 = function(nums) {
  const container = {}
  const result = []
  nums.map( number => {
    if (!container[number]) {
      container[number] = true
    } else {
      container[number] = false
    }
  })
  for (const property in container) {
    if (container[property]) {
      result.push(property)
    }
  }
  return result
};

/**
 * Single Number III
 * @param {number[]} nums
 * @return {number}
 * 
 * Input: [2,2,3,2]
 * Output: 3
 * no find the non-dupe in the array
 */
var singleNumber2 = function(nums) {
  const container = {}
  let result = null
  nums.map( number => {
    if (!container[number]) {
      container[number] = 1
    } else {
      container[number]++
    }
  })
  for (const property in container) {
    if (container[property] === 1) {
      result = property
    }
  }
  return result
};

/**
 * House RObber III
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * find the max sum of non directly linked nodes
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  return recursive(root)[0]
};

function recursive(root) {
  if (!root) {return [0,0]}
  const left = recursive(root.left);
  const right = recursive(root.right);
  const currentMax = Math.max(left[0] + right[0], root.val + left[1] + right[1]);
  const childrenMax = left[0] + right[0];                 
  return [currentMax, childrenMax];
}

/**
 * Valid Palindrome II
 * @param {string} s
 * @return {boolean}
 * at most one character
 */
var validPalindrome = function(s) {
  let start = 0;
  let end = temp.length - 1;

};