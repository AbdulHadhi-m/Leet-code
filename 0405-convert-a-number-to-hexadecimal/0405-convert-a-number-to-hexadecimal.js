var toHex = function(num) {
    if (num === 0) return "0";
    
    const hex = "0123456789abcdef";
    let res = "";

    while (num !== 0 && res.length < 8) {
        res = hex[num & 15] + res;
        num >>>= 4;
    }

    return res;
};