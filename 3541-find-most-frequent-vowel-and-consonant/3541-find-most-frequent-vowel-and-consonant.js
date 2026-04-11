var maxFreqSum = function(s) {
    let freq = {}, v = 0, c = 0;

    for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;

    for (let ch in freq) {
        if ("aeiou".includes(ch)) v = Math.max(v, freq[ch]);
        else c = Math.max(c, freq[ch]);
    }

    return v + c;
};