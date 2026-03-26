var longestPalindrome = function(s) {
    if (s.length < 2) return s;

    let start = 0;
    let maxLen = 1;

    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const len = right - left + 1;
            if (len > maxLen) {
                start = left;
                maxLen = len;
            }
            left--;
            right++;
        }
    };

    for (let i = 0; i < s.length; i++) {
        expand(i, i);       // odd length
        expand(i, i + 1);   // even length
    }

    return s.substring(start, start + maxLen);
};