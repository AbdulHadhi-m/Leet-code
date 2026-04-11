var maximumLengthSubstring = function(s) {
    let map = new Map(), left = 0, ans = 0;

    for (let right = 0; right < s.length; right++) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);

        while (map.get(s[right]) > 2) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};