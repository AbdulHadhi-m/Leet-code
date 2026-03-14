var isPalindrome = function(x) {
    let str = x.toString();
    let reversed = str.split("").reverse().join("");
    
    return str === reversed;
};