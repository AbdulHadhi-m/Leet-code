var isPalindrome = function(s) {
    let clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let a = clean.split("").reverse().join("")
    return clean === a
    
    
};