var removeDuplicateLetters = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {

        if (stack.includes(s[i])) continue;

        while (
            stack.length &&
            s[i] < stack[stack.length - 1] &&
            s.indexOf(stack[stack.length - 1], i) !== -1
        ) {
            stack.pop();
        }

        stack.push(s[i]);
    }

    return stack.join("");
};