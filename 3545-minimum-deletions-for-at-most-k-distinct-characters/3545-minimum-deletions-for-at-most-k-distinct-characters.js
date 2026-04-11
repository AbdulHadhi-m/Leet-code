var minDeletion = function(s, k) {
    let freq = {};

    for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;

    let arr = Object.values(freq).sort((a, b) => a - b);

    if (arr.length <= k) return 0;

    let ans = 0;
    for (let i = 0; i < arr.length - k; i++) {
        ans += arr[i];
    }

    return ans;
};