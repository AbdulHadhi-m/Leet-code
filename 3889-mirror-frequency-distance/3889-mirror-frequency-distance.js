var mirrorFrequency = function(s) {
    let freq = {};

    for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;

    let ans = 0, seen = new Set();

    for (let ch in freq) {
        if (seen.has(ch)) continue;

        let m = ch >= 'a' && ch <= 'z'
            ? String.fromCharCode(122 - (ch.charCodeAt(0) - 97))
            : String.fromCharCode(57 - (ch.charCodeAt(0) - 48));

        ans += Math.abs((freq[ch] || 0) - (freq[m] || 0));
        seen.add(ch);
        seen.add(m);
    }

    return ans;
};