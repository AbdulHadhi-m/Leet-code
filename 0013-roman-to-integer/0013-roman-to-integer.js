var romanToInt = function(s) {
    const m = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        ans += m[s[i]] < m[s[i + 1]] ? -m[s[i]] : m[s[i]];
    }

    return ans;
};