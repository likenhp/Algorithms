/*
interleaving string

given s1, s2, s3
find whether s3 is formed from the interleaving of s1 and s2

example:
input: s1 = "aabcc" s2= "dbbca" s3 ="aadbbcbcac" 
output: true

input: s1 = "aabcc" s2= "dbbca" s3 ="aadbbbaccc"
output: false
*/

var isInterleave = function(s1, s2, s3) {
    //remove edgecases
    if((s1.length+s2.length) !== s3.length){
        return false;
    }

};

isInterleave("aabcc", "dbbca", "aadbbcbcac")

/*
Trying to understand

var SEPARATOR = '+'; // this makes it easier to compare in JS and will also not mess up

var isInterleaveHelper = function(s1, s2, s3, map) {
    // finished both strings, and s3 fully constructed
    if (s1.length === 0 && s2.length === 0 && s3.length === 0) {
        return true;
    }

    // has failed for this key before, with that length in s3 remaining
    if (map[s1 + SEPARATOR + s2] === true) {
        return false;
    }

    if (s1.length > 0 && s1.charAt(0) === s3.charAt(0)) {
        if (isInterleaveHelper(s1.substring(1), s2, s3.substring(1), map)) {
            return true;
        }
    }

    if (s2.length > 0 && s2.charAt(0) === s3.charAt(0)) {
        if (isInterleaveHelper(s1, s2.substring(1), s3.substring(1), map)) {
            return true;
        }
    }

    map[s1 + SEPARATOR + s2] = true; // mark this s1+s2 remaining combo as a failure at this s3 length
    return false;
};


 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}

var isInterleave = function(s1, s2, s3) {
    var map = {};
    return isInterleaveHelper(s1, s2, s3, map);    
};
*/