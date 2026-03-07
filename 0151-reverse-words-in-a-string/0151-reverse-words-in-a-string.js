/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a = s.trim().toString().split(/\s+/).reverse().join(" ")
    
    return a
};



