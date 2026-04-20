var shortestCompletingWord = function(licensePlate, words) {
    const need = Array(26).fill(0);

    for (let ch of licensePlate.toLowerCase()) {
        let code = ch.charCodeAt(0);
        if (code >= 97 && code <= 122) need[code - 97]++;
    }

    const check = (word) => {
        const count = Array(26).fill(0);
        for (let ch of word) count[ch.charCodeAt(0) - 97]++;
        
        for (let i = 0; i < 26; i++) {
            if (count[i] < need[i]) return false;
        }
        return true;
    };

    let ans = "";

    for (let word of words) {
        if (check(word) && (ans === "" || word.length < ans.length)) {
            ans = word;
        }
    }

    return ans;
};