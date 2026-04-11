var beautifulSubstrings = function(s, k) {
    let need = 1;
    while ((need * need) % k) need++;

    let map = new Map();
    let balance = 0, ans = 0, mod = 2 * need;

    map.set("0#0", 1);

    for (let i = 0; i < s.length; i++) {
        balance += "aeiou".includes(s[i]) ? 1 : -1;

        let key = balance + "#" + ((i + 1) % mod);
        ans += map.get(key) || 0;
        map.set(key, (map.get(key) || 0) + 1);
    }

    return ans;
};