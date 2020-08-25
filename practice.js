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
            map = {};
            start++;
            index = start;
        }

        container[s[index]] = true;
        max = Math.max(max, index - start + 1);
    }
};