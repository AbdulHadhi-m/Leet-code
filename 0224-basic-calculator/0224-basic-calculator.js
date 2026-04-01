var calculate = function(s) {
    let stack = [];
    let num = 0;
    let result = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (!isNaN(ch) && ch !== " ") {
            num = num * 10 + Number(ch);
        } 
        else if (ch === "+") {
            result += sign * num;
            num = 0;
            sign = 1;
        } 
        else if (ch === "-") {
            result += sign * num;
            num = 0;
            sign = -1;
        } 
        else if (ch === "(") {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } 
        else if (ch === ")") {
            result += sign * num;
            num = 0;
            result *= stack.pop(); // sign
            result += stack.pop(); // previous result
        }
    }

    return result + sign * num;
};