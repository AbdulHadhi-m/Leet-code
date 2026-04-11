var minimumFlips = function(n) {
    let s = n.toString(2), ans = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) ans++;
    }

    return ans;
};